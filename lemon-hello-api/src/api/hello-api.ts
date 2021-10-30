/**
 * API: `/hello`
 * - public service api
 *
 *
 * @author      Steve Jung <steve@lemoncloud.io>
 * @date        2020-06-10 refactor with api
 * @date        2020-06-23 optimized with lemon-core#2.2.1
 *
 * @copyright (C) 2020 LemonCloud Co Ltd. - All Rights Reserved.
 */
import { $U, _log, _inf, _err, GETERR$ } from 'lemon-core';
import $engine, {
    loadJsonSync,
    AWSKMSService,
    AWSSNSService,
    AWSS3Service,
    doReportError,
    ProtocolService,
    CallbackParam,
    NextHandler,
    GeneralWEBController,
} from 'lemon-core';
import $service, { HelloService, ParamToSlack, RecordData } from '../service/hello-service';
const NS = $U.NS('hello', 'yellow'); // NAMESPACE TO BE PRINTED.

/**
 * class: `HelloAPIController`
 * - handle hello api-service.
 */
export class HelloAPIController extends GeneralWEBController {
    private NODES: { name: string }[];
    protected service: HelloService;
    protected $kms: AWSKMSService;
    protected $sns: AWSSNSService;
    protected $s3s: AWSS3Service;

    /**
     * default constructor.
     */
    public constructor(service?: HelloService, $kms?: AWSKMSService, $sns?: AWSSNSService, $s3s?: AWSS3Service) {
        super('hello');

        //! shared memory.
        //WARN! - `serverless offline`는 상태를 유지하지 않으므로, NODES값들이 실행때마다 리셋이될 수 있음.
        //NOTE - DO NOT CHANGE THE VALUE DUE TO API-TEST FROM OTHERS!
        this.NODES = [{ name: 'lemon' }, { name: 'cloud' }];
        this.service = service ? service : $service;
        this.$kms = $kms || new AWSKMSService();
        this.$sns = $sns || new AWSSNSService();
        this.$s3s = $s3s || new AWSS3Service();

        //! attach sns listener
        $engine.cores.lambda.sns.addListener(this.postHelloEvent);
        $engine.cores.lambda.notification.addListener(this.postHelloNotification);
    }

    /**
     * name of this resource.
     */
    public hello = () => `hello-api-controller:${this.type()}`;

    /**
     * list hello
     *
     * ```sh
     * $ http ':8888/hello'
     */
    public listHello: NextHandler = (ID, $param, $body, $ctx) => {
        _log(NS, `listHello(${ID})....`);

        const that: any = {};
        that.name = $U.env('NAME'); // read via process.env
        return Promise.resolve(that).then(_ => {
            _.list = this.NODES;
            return _;
        });
    };

    /**
     * get hello hello
     *
     * ```sh
     * $ http ':8888/hello/0'
     */
    public getHello: NextHandler = async (id, param, body, context) => {
        _log(NS, `getHello(${id})...`);
        _log(NS, `> context =`, $U.json(context));
        //WARN! - DO NOT CHANGE BELOW DUE TO `lemon-core` TESTING.
        const i = $U.N(id, 0);
        const val = this.NODES[i];
        if (!val) throw new Error(`404 NOT FOUND - id:${id}`);
        return { ...val };
    };

    /**
     * get hello hello
     *
     * ```sh
     * $ http ':8888/hello/0/hello'
     */
    public getHelloHello: NextHandler = async (id, param, body, context) => {
        _log(NS, `getHelloHello(${id})...`);
        _log(NS, `> context =`, $U.json(context));
        //! tricky way to pass test.
        return { id, hello: this.hello(), context: { ...context, ...param } };
    };

    /**
     * Only Update with incremental support
     *
     * ```sh
     * $ echo '{"size":1}' | http PUT ':8888/hello/1'
     */
    public putHello: NextHandler = async (id, $param, $body, $ctx) => {
        _log(NS, `do_put_hello(${id})....`);
        const i = $U.N(id, 0);

        const node = await this.getHello(id, null, null, $ctx);
        this.NODES[i] = { ...node, ...$body };
        return this.NODES[i];
    };

    /**
     * Insert new Node at position 0.
     *
     * ```sh
     * $ echo '{"name":"lemoncloud"}' | http POST ':8888/hello/0'
     * $ http POST :8888/hello/0 name=hello
     * $ http --form POST :8888/hello/0 name=hello
     */
    public postHello: NextHandler = async (id, $param, $body, $ctx) => {
        _log(NS, `postHello(${id})....`);
        _log(NS, `> $body=`, $body);
        const i = $U.N(id, 0);
        if (id == 'echo') return { id: '!', cmd: 'echo', param: $param, body: $body, context: $ctx };
        if (i) throw new Error(`@id[${id}] (number) is invalid!`);
        if (!$body || !$body.name) throw new Error('.name (string) is required!');
        this.NODES.push({ ...$body });
        return this.NODES.length - 1; // returns the last-index.
    };

    /**
     * Post message via Slack Web Hook
     *
     * ```sh
     * # post message to slack/general
     * $ echo '{"text":"hello"}' | http ':8888/hello/public/slack'
     * $ echo '{"text":"hello"}' | http ':8888/hello/alarm/slack'
     *
     * # use sample
     * $ cat data/error-hello.json | http ':8888/hello/public/slack'
     * $ cat data/error-hello.json | http ':8888/hello/public/slack?direct' # direct to slack hook w/o filter.
     * ```
     * @param {*} channel           slack-channel id (see environment)
     * @param {*} $param            (optional)
     * @param {*} $body             {error?:'', message:'', data:{...}}
     * @param {*} $ctx              context
     */
    public postHelloSlack: NextHandler = async (channel: any, $param: any, $body: any, $ctx: any) => {
        _log(NS, `postHelloSlack(${channel})....`);
        $param = $param || {};
        channel = `${channel || ''}`;
        _log(NS, `> body[${channel}] =`, $U.json($body));

        //! determine to post directly.
        const hasForce = channel.startsWith('!');
        channel = channel.startsWith('!') ? channel.substring(1) : channel;
        const direct = $U.N($param.direct, $param.direct === '' ? 1 : hasForce ? 1 : 0);
        _log(NS, '> direct :=', direct);

        //! load target webhook via environ.
        const webhook = await this.service.loadSlackChannel(channel, 0 ? '' : 'public');
        if (!webhook) throw new Error(`@id[${channel}] (channel-id) is invalid!`);
        _log(NS, '> webhook :=', webhook);

        //! prepare slack message via body.
        const message = typeof $body === 'string' ? { text: $body } : $body;
        const noop = (_: any) => _;

        //NOTE! filter message only if sending to slack-hook.
        const filter = !direct && webhook.startsWith('https://hooks.slack.com') ? this.service.saveMessageToS3 : noop;
        const res = await this.service.postMessage(webhook, filter(message)).catch(e => {
            _err(NS, `! slack[${channel}].err =`, e instanceof Error ? e : $U.json(e));
            return GETERR$(e);
        });
        _log(NS, `> res =`, res);
        //! returns.
        return res;
    };

    /**
     * Event Handler via SNS
     *
     * ```sh
     * # alarm data
     * $ cat data/alarm.json | http ':8888/hello/!/event?subject=ALARM:test'
     * # delivery failure
     * $ cat data/delivery-failure.json | http ':8888/hello/!/event?subject=DeliveryFailure test'
     * # error case
     * $ cat data/error-1.json | http ':8888/hello/!/event?subject=error'
     * $ cat data/error-2.json | http ':8888/hello/!/event?subject=error'
     * $ cat data/error-2.json | http ':8888/hello/!/event?subject=error/alarm'
     * $ cat data/error-2.json | http ':8888/hello/!/event?subject=callback/alarm'
     *
     * # slack message via sns
     * $ cat data/sns-slack.json | http ':8888/hello/!/event?subject=slack'
     *
     * # dummy.
     * $ echo '{}' | http :8888/hello/0/event
     */
    public postHelloEvent: NextHandler = async (id, $param, $body, $ctx) => {
        _inf(NS, `postHelloEvent(${id})....`);
        const subject = `${$param?.subject || ''}`.trim();
        $body && _log(NS, `> body[${id}]=`, typeof $body, $U.json($body));
        const noop = (d: RecordData): ParamToSlack =>
            this.service.packageDefaultChannel({
                text: $U.json(d),
                pretext: `post-event`,
                title: subject || `Unknown event/${id}`,
            });

        //! decode next-chain.
        const transform: (d: RecordData) => Promise<ParamToSlack> | ParamToSlack = !subject
            ? noop
            : subject.startsWith('ALARM:')
            ? this.service.buildAlarmForm
            : subject.startsWith('DeliveryFailure')
            ? this.service.buildDeliveryFailure
            : subject === 'error' || subject.startsWith('error/')
            ? this.service.buildErrorForm
            : subject === 'callback' || subject.startsWith('callback/')
            ? this.service.buildCallbackForm
            : subject === 'slack' || subject.startsWith('slack/')
            ? this.service.buildCommonSlackForm
            : noop;

        //! transform to slack-body..
        const { channel, body } = await Promise.resolve(transform({ subject, data: $body, context: $ctx }));
        _log(NS, `> body[<${typeof channel}>${channel}] =`, $U.json(body));
        return this.postHelloSlack(channel, { ...$param }, body, $ctx);
    };

    /**
     * Notification handler via broadcast of ProtocolService (HTTP/S web-hook)
     *
     * ``` sh
     * $ cat data/notification.json | http ':8888/hello/!/notification'
     */
    public postHelloNotification: NextHandler = async (id, $param, $body, $ctx) => {
        _inf(NS, `postHelloNotification(${id})....`);
        $param && _inf(NS, `> param[${id}] =`, $U.json($param));
        $body && _inf(NS, `> body[${id}] =`, $U.json($body));
        $ctx && _inf(NS, `> context[${id}] =`, $U.json($ctx));

        $param = $param || {};
        $body = $body || {};

        const subCheck = await this.service.getSubscriptionConfirmation($param);
        _inf(NS, `> subCheck [${subCheck}]`);
        if (subCheck == 'PASS') {
            const { channel, body } = await this.service.buildSlackNotification($body);
            _inf(NS, `> build channel [${channel}]=`, body);
            return this.postHelloSlack(channel, {}, body, $ctx);
        }
        return subCheck;
    };

    /**
     * Encrypt Text Message.
     *
     * ```sh
     * $ echo '{"text":"hello"}' | http POST ':8888/hello/0/encrypt'
     */
    public postHelloEncrypt: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `getHelloTestEncrypt(${ID})....`);
        const text = `${$body?.text || ''}`;
        const encrypted = await this.$kms.encrypt(text);
        return { encrypted, message: text };
    };

    /**
     * Read the detailed object.
     *
     * ```sh
     * $ http ':8888/hello/alarm/test-sns'
     * $ http ':8888/hello/failure/test-sns'
     */
    public getHelloTestSns: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `getHelloTestSns(${ID})....`);

        //! build event body, then start promised
        const build_event_chain = (subject: string, data: any) => {
            //! clear internals
            data = Object.keys(data).reduce((N: any, key) => {
                if (!key.startsWith('!')) N[key] = data[key];
                return N;
            }, {});
            //! prepare event body.
            const event = {
                Records: [
                    {
                        Sns: {
                            Subject: subject || 'ALARM: "...." in Asia Pacific (Seoul)',
                            Message: data,
                        },
                    },
                ],
            };
            return Promise.resolve(event);
        };

        //! call sns handler.
        const local_chain_handle_sns = (event: any) => {
            // if (event) return event;
            //! validate event
            event = event || {};
            if (!event.Records || !Array.isArray(event.Records))
                return Promise.reject(new Error('.Records[] is required!'));
            if (!event.Records[0] || !event.Records[0].Sns)
                return Promise.reject(new Error('.Records[0].Sns is required!'));
            if (!event.Records[0].Sns.Subject || !event.Records[0].Sns.Message)
                return Promise.reject(new Error('.Records[0].Sns.Subject is required!'));

            //! call handler.
            return $engine.cores.lambda.sns.handle(event, null);
        };

        //! decode by ID
        return (() => {
            if (ID == 'alarm') {
                const data = loadJsonSync('data/alarm.json');
                return build_event_chain('ALARM: "...." in Asia Pacific (Seoul)', data);
            }
            if (ID == 'failure') {
                const data = loadJsonSync('data/delivery-failure.json');
                return build_event_chain(data['!Subject'] || 'DeliveryFailure', data);
            }
            return Promise.reject(new Error(`404 NOT FOUND - test-sns:${ID}`));
        })().then(local_chain_handle_sns);
    };

    /**
     * Test SNS ARN
     *
     * ```sh
     * $ http ':8888/hello/0/test-sns-arn'
     */
    public getHelloTestSnsArn: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `getHelloTestSnsArn(${ID})....`);
        const arn = await this.$sns.endpoint('');
        _log(NS, '> arn =', arn);
        return { arn };
    };

    /**
     * Test SNS Report Error
     *
     * ```sh
     * $ http ':8888/hello/0/test-sns-err'
     */
    public getHelloTestSnsErr: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `getHelloTestSnsErr(${ID})....`);
        const e = new Error('Test Error');
        const mid = await this.$sns.reportError(e, undefined, undefined);
        _log(NS, '> message-id =', mid);
        return { mid };
    };

    /**
     * Encrypt Test.
     *
     * ```sh
     * $ http ':8888/hello/0/test-encrypt'
     */
    public getHelloTestEncrypt: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `getHelloTestEncrypt(${ID})....`);
        const message = 'hello lemon';
        const encrypted = await this.$kms.encrypt(message);
        const decrypted = await this.$kms.decrypt(encrypted);
        const _ = { encrypted, decrypted, message };
        const result = _.encrypted && _.message === _.decrypted;
        return Object.assign(_, { result });
    };

    /**
     * Raise Error
     *
     * ```sh
     * $ http ':8888/hello/0/test-error'
     * $ http ':8888/hello/0/test-error?report=1'
     */
    public getHelloTestError: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `getHelloTestError(${ID})....`);
        const report = $U.N($param.report, $param.report === '' ? 1 : 0);
        if (report) return await doReportError(new Error('hello-error'), null, null);
        throw new Error('hello lemon');
    };

    //WARN! - BE WARE TO REPORT ENV @200929.
    // /**
    //  * Test Env
    //  *
    //  * ```sh
    //  * $ http ':8888/hello/0/test-env'
    //  */
    // public getHelloTestEnv: NextHandler = async (ID, $param, $body, $ctx) => {
    //     _log(NS, `getHelloTestEnv(${ID})....`);
    //     const report = $U.N($param.report, $param.report === '' ? 1 : 0);
    //     const env = process.env;
    //     return { env };
    // };

    /**
     * Test S3 PutObject.
     *
     * ```sh
     * $ http ':8888/hello/0/test-s3-put'
     */
    public getHelloTestS3Put: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `getHelloTestS3Put(${ID})....`);
        const message = 'hello lemon';
        const data = { message };
        const json = JSON.stringify(data);
        return this.$s3s.putObject(json);
    };

    /**
     * Test what execute queue via protocol
     *
     * ```sh
     * $ http ':8888/hello/test11/test-execute'
     */
    public getHelloTestExecute: NextHandler = async (id, param, body, $ctx) => {
        const serviceName = $U.env('LEMON_QUEUE', 'lemon-hello-api');
        _log(NS, `getHelloExecuteQueue(${id}, ${serviceName})...`);
        const $proto: ProtocolService = $engine.cores.protocol.service;
        const $param = $proto.fromURL($ctx, `api://${serviceName}/hello/${id}`, param, null);
        return $proto.execute($param);
    };

    /**
     * execute API via protocol's SNS, then get result via callback.
     *
     * ```sh
     * $ http ':8888/hello/test11/test-enqueue'
     */
    public getHelloTestEnqueue: NextHandler = async (id, param, body, $ctx) => {
        const serviceName = $U.env('LEMON_QUEUE', 'lemon-hello-api');
        _log(NS, `getHelloTestEnqueue(${id}, ${serviceName})...`);
        const $proto: ProtocolService = $engine.cores.protocol.service;
        //! execute the target api via SQS
        const $param = $proto.fromURL($ctx, `api://${serviceName}/hello/${id}`, param, null);
        //! post result to slack channel
        const $callback: CallbackParam = { type: 'hello', id: 'public', cmd: 'slack' };
        //! start `protocol` w/ enqueue.
        return $proto.enqueue($param, $callback);
    };

    /**
     * Delete Node (or mark deleted)
     *
     * ```sh
     * $ http DELETE ':8888/hello/1'
     */
    public deleteHello: NextHandler = async (ID, $param, $body, $ctx) => {
        _log(NS, `do_delete_hello(${ID})....`);

        return this.getHello(ID, null, null, $ctx).then(node => {
            const id = node._id;
            if (id === undefined) return Promise.reject(new Error('._id is required!'));
            // NODES.splice(id, 1); // remove single node.
            delete this.NODES[id]; // set null in order to keep id.
            return node;
        });
    };
}

//! export as default.
export default new HelloAPIController();
