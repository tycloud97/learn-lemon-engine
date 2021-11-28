# lemoncloud-backbone-js

@version: 1.2.6
@date:    1/9/2019, 1:58:23 AM

Shared Backbone module by [lemoncloud](https://lemoncloud.io)


# Usage

설치하기.

```bash
$ npm install lemoncloud-backbone-js --save
$ npm install express body-parser
```

express에서 라우터 등록하기. (example for dynamo)

```js
//! handle request to handler.
const handle_dynamo = (req, res) =>     handler.dynamo(req.$event, req.$context, req.$callback);

//! router: dynamo
app.get('/dynamo',                  middle, handle_dynamo);
app.get('/dynamo/:type',            middle, handle_dynamo);
app.get('/dynamo/:type/:id',        middle, handle_dynamo);
app.get('/dynamo/:type/:id/:cmd',   middle, handle_dynamo);
app.put('/dynamo/:type/:id',        middle, handle_dynamo);
app.put('/dynamo/:type/:id/:cmd',   middle, handle_dynamo);
app.post('/dynamo/:type/:id',       middle, handle_dynamo);
app.delete('/dynamo/:type/:id',     middle, handle_dynamo);
```




----------------
# VERSION INFO #

배포시 버전 정보가 아래 내용과 함께 npmjs 에 표시가 됨.

| Version   | Description
|--         |--
| 1.2.5     | support es6 with `_$.ES6`.
| 1.2.4     | improve elastic Q parameter.
| 1.2.3     | fix empty error when update :meta in dynamodb (w/o publish)
| 1.2.2     | fix update user-attributes (w/o publish)
| 1.2.1     | hot-fix in cognito-api of `$body is required` error.
| 1.2.0     | added cognito-api to support handling user/group of cognito user-pool.
| 1.1.4     | the initial publish.
| develop   | +role-api, 



cd api/
cd lib/
cd service/

for i in *.js; do jsnice  $i >> $i; done