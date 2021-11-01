"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,_=e.U,c=e.RS;if(!t)throw new Error("$_ is required!");var p=_.NS(r||"RDIS","yellow"),E=e.log,y=(e.inf,e.err);function b(e){return T(404,e)}function P(e){return T(503,e)}function T(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var n=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var n=e.queryStringParameters||{},o=e.pathParameters||{},i=decodeURIComponent(o.type||""),s=decodeURIComponent(o.id||""),u=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",c=decodeURIComponent(o.cmd||""),d=!u&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[u],a=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!a&&E(p,"#"+d+":"+c+" ("+u+", "+i+"/"+s+")...."),a&&E(p,"#"+d+":"+c+" ("+u+", "+i+"/"+s+").... body.len=",a?_.json(a).length:-1);var l={_id:s,_type:i,_param:n,_body:a,_ctx:r},f=Promise.resolve(l),m=function(e,r,t,n){var o=null;switch(e){case"LIST":break;case"GET":"0"===t&&"test-self"===n?o=g:"0"!==t&&""===n&&(o=w);break;case"PUT":"0"!==t&&""===n&&(o=v);break;case"POST":""!==t&&""===n&&(o=h);break;case"DELETE":""!==t&&""===n&&(o=S)}return o}(d,0,s,c);if(!m)return t(null,b({MODE:d}));try{f.then(function(e){var r=e._id,t=e._type,n=e._param,o=e._body,i=e._ctx;return m(t,r,n,o,i)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=_.cleanup(e)),t(null,T(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,b(e.message)):(y(p,"!!! callback@1-2 with err",e),t(null,P(e.message||e))),!1})}catch(e){t(e,P(e.message))}};function h(e,r,t,n,o){if(E(p,"do_post_create_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));if(!n)return Promise.reject(new Error("$body is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e,s=n,u=_.N(t.timeout,0);return c.do_create_item(i,r,s,u).then(function(e){return t.result=e,t})}function w(e,r,t,n,o){if(E(p,"do_get_read_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e;return c.do_get_item(i,r).then(function(e){return t.result=e,t})}function S(e,r,t,n,o){if(E(p,"do_delete_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e;return c.do_delete_item(i,r).then(function(e){return t.result=e,t})}function v(e,r,t,n,o){if(E(p,"do_put_update_item("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));t=t||{};var i=0<e.indexOf("+")?e.split("+"):e,s=n;return c.do_update_item(i,r,s).then(function(e){return t.result=e,t})}function g(e,r,t,n,o){return E(p,"do_get_test_self("+e+"/"+r+")...."),e?"0"!==r?Promise.reject(new Error("ID is invalid!")):(t=t||{},c.do_test_self(t).then(function(e){return E(p,"> test-self.res :=",e),t.result=e,t})):Promise.reject(new Error("TYPE is required!"))}return n.do_post_create_item=h,n};