# lemoncloud-engine-js

Common LEMON Engine Module by [lemoncloud](https://lemoncloud.io).

# Usage

```bash
# install module
$ npm install lemoncloud-engine-js --save

# update module
$ npm update lemoncloud-engine-js --save
```

## 사용법.

코드에서 사용 방법.

```js
//! define instance scope.
const $scope = 0 ? global : {
	name : 'LEMON-MESSAGES'                         // name of scope
	,env : process.env								// environment setting (see below)
}

//! load engine with configuration.
const handler = require('lemoncloud-engine-js')($scope);

//! instance manager in scope of $scope
const _$ = handler._$;

//! common user handler.
const user = handler.user;
const group = handler.group;
const chat = handler.chat;

// data properties.
const FIELDS = [
    'id', 'type', 'parent', 'name', 'message'
];
const ES_FIELDS = FIELDS;

//! create engine for Messages.
const $LEM = _$.LEM(_$, '_'+name, {
    ID_TYPE     : 'LemonMessagesSeq',			// WARN! '#' means no auto-generated id.
    ID_NEXT     : 1000,                         // ID Starts
    FIELDS      : FIELDS,                       // Properties
    DYNA_TABLE  : 'Messages',                   // DynamoDB Table
    REDIS_PKEY  : 'CMMS',                       // REDIS PKEY
    ES_INDEX    : 'messages-v1',				// ES Index Name
    ES_TYPE     : 'messages',					// ES Type Name
    ES_FIELDS   : ES_FIELDS,
    NS_NAME     : name,                         // Notify Service Name. (null means no notifications)
    ES_MASTER	: 1,							// MASTER NODE.
    CLONEABLE   : true,                         // 복제 가능하며, parent/cloned 필드를 지원함.
    PARENT_IMUT : false,						// parent-id 변경 가능함(2018.03.15)
});    // load core-service with parameters.
if (!$LEM) throw new Error(NS+'$LEM is required!');
```

### 환경변수(env)

`$scope.env` 에는 아래와 같이 **backbone** 의 엔드포인트 주소가 필요. (자세한 내용은 [lemoncloud-backbone-js]()참고)

```yml
  # MySQL backbone api
  MS_ENDPOINT:  'http://localhost:8081/mysql'
  # DynamoDB backbone api
  DS_ENDPOINT:  'http://localhost:8081/dynamo'
  # ElasticSearch backbone api
  ES_ENDPOINT:  'http://localhost:8081/elastic'
  # Redis backbone api
  RS_ENDPOINT:  'http://localhost:8081/redis'
  # SQS backbone api
  SS_ENDPOINT:  'http://localhost:8081/sqs'
  # Web backbone api
  WS_ENDPOINT:  'http://localhost:8081/web'
```

----------------
# VERSION INFO #

| Version   | Description
|--         |--
| 0.2.13    | cognito-proxy as 'CS'
| 0.2.12    | try to create node in dynamo if error of "an attribute that does not exist in the item"
| 0.2.5     | web-proxy as 'WS'
| 0.2.4     | record event handler
| 0.2.3     | sqs-proxy as 'SS'
| 0.2.0     | support scope during initialize

