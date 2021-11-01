"use strict";var _slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}module.exports=function(e,r){r=r||"ES6";var m=e.U,t=e.aws,l=e._;if(!m)throw new Error("$U is required!");if(!t)throw new Error("$aws is required!");if(!l)throw new Error("$_ is required!");var a=m.NS(r,"cyan"),d=e.log,u=(e.inf,e.err),n={};n.do_create_index_type=f,n.do_delete_index_type=function(e,r,t){if(!e)return Promise.reject(new Error(a+"index is required"));!r&&d(a,"- do_delete_index_type("+e+")...., options=",t),r&&d(a,"- do_delete_index_type("+e+", "+r+")...., options=",t);var n={index:e};r&&(n.type=r);return c.indices.delete(n).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"delete-index error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("index_not_found_exception"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})},n.do_create_item=p,n.do_push_item=function(e,r,t,n){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:data is required"));!r&&d(a,"- do_push_item("+e+")....",", data=",m.json(t)),r&&d(a,"- do_push_item("+e+"/"+r+")....",", data=",m.json(t));var o={index:e,body:t};r&&(o.type=r);n&&(o.id=n);return c.index(o).then(function(e){return d(a,"> pushed res =",e&&e.result||m.json(e)),n?"updated"===e.result:"created"===e.result}).catch(function(e){u(a,"!ERR =",e);var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"push-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";return"NotFound"==t?Promise.reject(new Error("404 NOT FOUND - "+t)):Promise.reject(r)})},n.do_get_item=y,n.do_delete_item=h,n.do_update_item=_,n.do_search_item=function(e,r,t){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!t)return Promise.reject(new Error(a+"parameter:param is required"));!r&&d(a,"- do_search_item("+e+")....",", param=",m.json(t)),r&&d(a,"- do_search_item("+e+"/"+r+")....",", param=",m.json(t));var n={query:{query_string:{query:"_exists_:stock AND NOT _exists_:name AND stock:>1"}}},o=function(e){var u=null,a=null,d=-1,c=-1,f="",p="",y="",r=l.reduce(e,function(r,e,t){if(t.startsWith("_"))return r;if("$query"===t)u={query:"object"===(void 0===e?"undefined":_typeof(e))?e:JSON.parse(e)};else if("$limit"===t)c=m.N(e,0);else if("$page"===t)d=m.N(e,0);else if("$Q"===t)e&&("object"===(void 0===e?"undefined":_typeof(e))?u=e:"string"==typeof e&&e.startsWith("{")&&e.endsWith("}")?u=JSON.parse(e):"string"==typeof e&&r.push("("+e+")"));else if("$A"===t)f=(""+e).trim();else if("$O"===t)p=(""+e).trim();else if("$H"===t)y=(""+e).trim();else if("$source"===t)if("*"===e)a="*";else if(e&&e.indexOf&&e.indexOf(",")){var n=e.split(",")||[],o=[],i=[];n.forEach(function(e){(e=(e||"").trim())&&(e.startsWith("!")?i.push(e.substr(1)):o.push(e))}),a={includes:o,excludes:i}}else a=e;else if("$exist"===t||"$exists"===t){var s=e.split(",")||[];s.forEach(function(e){(e=(e||"").trim())&&(e.startsWith("!")?r.push("NOT _exists_:"+e.substr(1)):r.push("_exists_:"+e))})}else e&&"string"==typeof e&&(e.startsWith("(")&&e.endsWith(")")||(0<e.indexOf(" ")||0<e.indexOf("\n")||0<e.indexOf(":")||0<e.indexOf("^")?e='"'+(e=e.replace(/([\"\'])/gi,"\\$1"))+'"':0<e.indexOf(",")&&(e=e.split(",").map(function(e){return(e||"").trim()})))),t.startsWith("!")?e?Array.isArray(e)?e.forEach(function(e){e&&r.push("NOT "+t.substr(1)+":"+e)}):r.push("NOT "+t.substr(1)+":"+e):r.push("_exists_:"+t.substr(1)):t.startsWith("#")?(a=a||{includes:[],excludes:[]})&&a.includes&&a.includes.push(t.substr(1)):Array.isArray(e)?r.push("("+e.map(function(e){return t+":"+e}).join(" OR ")+")"):r.push(t+":"+e);return r},[]),t=u||r.length&&{query:{query_string:{query:r.join(" AND ")}}}||{};if(f){var n=f.split(",").reduce(function(e,r){if(r=(""+r).trim())if(0<r.indexOf(":")){var t=r.split(":",2),n=_slicedToArray(t,2),o=n[0],i=n[1];e[o]={terms:{field:o,size:parseInt(i)}}}else e[r]={terms:{field:r}};return e},{});t.aggs=n}if(p){var o=p.split(",").reduce(function(e,r){if(r=(""+r).trim()){var t=r,n=!0;r.startsWith("!")&&(t=r.slice(1),n=!1),t&&e.push(_defineProperty({},t,{order:n?"asc":"desc"}))}return e},[]);o.length&&(t.sort=o)}if(y){var i=y.split(",").reduce(function(e,r){return(r=(""+r).trim())&&(e[r]={type:"unified"}),e},{});t.highlight={},t.highlight.fields=i}return-1<c&&(t.size=c,-1<d&&(t.from=d*c)),null!==a&&(t._source=a),t};{n=o(t)}d(a,"> search("+e+"/"+r+") query = ",m.json(n));var i={index:e,type:r,body:n};return c.search(i).then(function(e){return e}).catch(function(e){var r=e.body&&e.body.error&&e.body.error.root_cause&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};throw u(a,"search-item error=",r&&r.type||"",", reason=",r&&r.reason||""),r})},n.do_test_self=function(e){d(a,"- do_test_self()... param=",e=e||{});var r=m.promise(e),t="test-v1",n="mytype",o=1000001,i={name:"test-me"},s={name:"test-you",age:1},u={age:2,nick:"N2"};r=r.then(function(){return d(a,"- create-index...."),f(t).then(function(e){return d(a,"> created-index =",e),e}).catch(function(e){return d(a,"> error=",e),e})});r=r.then(function(){return d(a,"- create-document("+t+")..."),p(t,n,o,i).then(function(e){return d(a,"> result =",e),e}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- get-document("+t+")..."),y(t,n,o).then(function(e){return d(a,"> result =",e),e}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- update-document("+t+")..."),d(a,"> document=",m.json(u)),_(t,n,o,u).then(function(e){return d(a,"> result =",e),e}).then(function(){return y(t,n,o).then(function(e){return d(a,"> updated-doc =",e),e})}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- get-document("+t+")..."),y(t,n,o,s).then(function(e){return d(a,"> result =",e),e}).catch(function(e){return d(a,"> error =",e),e})});r=r.then(function(){return d(a,"- delete-document("+t+")..."),h(t,n,o).then(function(e){return d(a,"> result =",e),e}).then(function(){return y(t,n,o).then(function(e){return d(a,"> deleted-doc =",e),e})}).catch(function(e){return d(a,"> error =",e),e})});return r},e(r,n);var o={region:m.env("ES6_REGION",new Error(a+":ES6_REGION is required!")),endpoint:m.env("ES6_ENDPOINT",new Error(a+":ES6_ENDPOINT is required!"))},c=new(require("elasticsearch").Client)({host:o.endpoint});function f(e,r,t){if(!e)return Promise.reject(new Error(a+"index is required"));!r&&d(a,"- do_create_index_type("+e+")...., options=",t),r&&d(a,"- do_create_index_type("+e+", "+r+")...., options=",t);var n={};return t&&(n=m.extend(n,t)),c.indices.create({index:e,body:n}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};throw u(a,"create-index error=",r.type||"",", reason=",r.reason||""),r})}function p(n,o,i,s){if(!n)return Promise.reject(new Error(a+"parameter:index is required"));if(!o)return Promise.reject(new Error(a+"parameter:type is required"));if(!i)return Promise.reject(new Error(a+"parameter:id is required"));if(!s)return Promise.reject(new Error(a+"parameter:data is required"));!o&&d(a,"- do_create_item("+n+")....",", id=",i,", data=",m.json(s)),o&&d(a,"- do_create_item("+n+"/"+o+")....",", id=",i,", data=",m.json(s));var e={index:n,id:i,body:s};return o&&(e.type=o),c.create(e).then(function(e){return d(a,"> created res =",e&&e.result||m.json(e)),"created"===e.result}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};if("version_conflict_engine_exception"===r.type){d(a,"WARN! document already exists. so overwrite it");var t={index:n,type:o,id:i,body:{doc:s}};return c.update(t).then(function(e){return d(a,"> overwrite res =",e&&e.result||m.json(e)),"updated"===e.result})}throw u(a,"create-item error=",r.type||"",", reason=",r.reason||""),r})}function y(e,r,t,n){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:id is required"));d(a,"- do_get_item("+e+"/"+r+")....",", id=",t,", data=",m.json(n||""));var o={index:e,type:r,id:t};if(n){var i=[],s=Array.isArray(n);l.each(n,function(e,r){i.push(s?e:r)}),o._source=i}return c.get(o).then(function(e){return d(a,"> get res =",m.json(e)),e._source}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"get-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("NotFound"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})}function h(e,r,t){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:id is required"));d(a,"- do_delete_item("+e+"/"+r+")....",", id=",t);var n={index:e,type:r,id:t};return c.delete(n).then(function(e){return d(a,"> delete res =",e&&e.result||m.json(e)),"deleted"===e.result}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"delete-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("NotFound"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})}function _(e,r,t,n){if(!e)return Promise.reject(new Error(a+"parameter:index is required"));if(!r)return Promise.reject(new Error(a+"parameter:type is required"));if(!t)return Promise.reject(new Error(a+"parameter:id is required"));if(!n)return Promise.reject(new Error(a+"parameter:data is required"));d(a,"- do_update_item("+e+"/"+r+")....",", id=",t,", data=",m.json(n));var o={index:e,type:r,id:t,body:{doc:n}};return c.update(o).then(function(e){return d(a,"> update res =",e&&e.result||m.json(e)),"updated"===e.result||"noop"===e.result}).catch(function(e){var r=e.body&&e.body.error&&(e.body.error.root_cause[0]||e.body.error)||{type:e.displayName||e.status,reason:e.message};u(a,"update-item error=",r.type||"",", reason=",r.reason||"");var t=r&&r.type||"";if("NotFound"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));if("document_missing_exception"==t)return Promise.reject(new Error("404 NOT FOUND - "+t));throw r})}return n};