"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(a,e){if(!a)throw new Error("_$(global instance pool) is required!");var r=a._,E=a.U,u=a.SS;if(!r)throw new Error("$_ is required!");if(!u)throw new Error("$SS is required!");var w=E.NS(e||"SQSS","yellow"),y=a.log,h=(a.inf,a.err);function p(e){return v(404,e)}function b(e){return v(503,e)}function v(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}function P(e,r,t,n,o){if(!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));var i=t?Object.assign({},t):{};if(!i)return Promise.reject(new Error("node is required!"));var s=E.N(i.size,1);return u.do_receiveMessage(e,s).then(function(e){return i.result=e,i})}function T(r,e,t,n,o){if(y(w,"do_sendMessage("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!n)return Promise.reject(new Error("$body is required!"));var i=t?Object.assign({},t):{};return i?u.do_sendMessage(r,t,n).then(function(e){return y(w,"> sent-message["+r+"] :=",e),i.result=e,i}):Promise.reject(new Error("node is required!"))}function _(r,e,t,n,o){if(y(w,"do_deleteMessage("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var i=t?Object.assign({},t):{};return i?u.do_deleteMessage(r,e).then(function(e){return y(w,"> del-message["+r+"] :=",e),i.result=e,i}):Promise.reject(new Error("node is required!"))}function g(r,e,t,n,o){if(!r)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var i=t?Object.assign({},t):{};return i?u.do_statistics(r).then(function(e){return y(w,"> stat["+r+"] = A:"+(e.available||0)+" F:"+(e.inflight||0)+" D:"+(e.delayed||0)+" TO:"+(e.timeout||0)),i.result=e,i}):Promise.reject(new Error("node is required!"))}function j(e,r,t,n,o){if(y(w,"do_get_test_self("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==r)return Promise.reject(new Error("ID is invalid!"));var i=t?Object.assign({},t):{};if(!i)return Promise.reject(new Error("node is required!"));var s=require("../service/task-service")(a);return Promise.resolve(i).then(function(e){y(w,"-------- task creation: ");return s.do_create_task("Test",-1,{name:"test",val:123,hi:"world"}).then(function(e){if(y(w,"> create-task =",e),!e.MessageId)throw new Error("invalid MessageId");return e})}).then(function(e){y(w,"-------- task fetch: ");return s.do_receive_task(-1,1).then(function(e){if(y(w,"> receive-task =",e),!e.Tasks)throw new Error("invalid Tasks");if(!e.Tasks[0].ReceiptHandle)throw new Error("invalid MessageId");return e.Tasks[0]})}).then(function(e){y(w,"-------- task complete: ");var r=e.ReceiptHandle;return s.do_complete_task(-1,r).then(function(e){if(y(w,"> complete-task =",e),!e.ResponseMetadata)throw new Error("invalid ResponseMetadata");return e})})}return function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var n=e.queryStringParameters||{},o=e.pathParameters||{},i=decodeURIComponent(o.type||""),s=decodeURIComponent(o.id||""),a=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",u=decodeURIComponent(o.cmd||""),c=!a&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[a],d=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!d&&y(w,"#"+c+":"+u+" ("+a+", "+i+"/"+s+")...."),d&&y(w,"#"+c+":"+u+" ("+a+", "+i+"/"+s+").... body.len=",d?E.json(d).length:-1);var l={_id:s,_type:i,_param:n,_body:d,_ctx:r},f=Promise.resolve(l),m=function(e,r,t,n){var o=null;switch(e){case"LIST":break;case"GET":"0"===t&&""===n?o=P:"0"===t&&"test-self"===n?o=j:"0"===t&&"stat"===n&&(o=g);break;case"PUT":"0"===t&&""===n&&(o=T);break;case"POST":break;case"DELETE":""!==t&&""===n&&(o=_)}return o}(c,0,s,u);if(!m)return t(null,p({MODE:c}));try{f.then(function(e){var r=e._id,t=e._type,n=e._param,o=e._body,i=e._ctx;return m(t,r,n,o,i)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=E.cleanup(e)),t(null,v(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,p(e.message)):(h(w,"!!! callback@1-2 with err",e),t(null,b(e.message||e))),!1})}catch(e){t(e,b(e.message))}}};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(exprCode) {
  return typeof exprCode;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(obj, event) {
  /**
   * @param {!Array} result
   * @return {?}
   */
  function log(result) {
    return send(404, result);
  }
  /**
   * @param {!Array} result
   * @return {?}
   */
  function cb(result) {
    return send(503, result);
  }
  /**
   * @param {number} url
   * @param {!Array} jsonObject
   * @return {?}
   */
  function send(url, jsonObject) {
    return {
      statusCode : url,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(jsonObject)
    };
  }
  /**
   * @param {?} css
   * @param {?} handler
   * @param {boolean} value
   * @param {?} data
   * @param {?} immediateExceptions
   * @return {?}
   */
  function publish(css, handler, value, data, immediateExceptions) {
    if (!css) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!handler) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var result = value ? Object.assign({}, value) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    var email = self.N(result.size, 1);
    return u.do_receiveMessage(css, email).then(function(value) {
      return result.result = value, result;
    });
  }
  /**
   * @param {string} email
   * @param {string} userId
   * @param {boolean} err
   * @param {?} host
   * @param {?} authenticationProvider
   * @return {?}
   */
  function create(email, userId, err, host, authenticationProvider) {
    if (callback(msg, "do_sendMessage(" + email + "/" + userId + ")...."), !email) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!userId) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!host) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var trace = err ? Object.assign({}, err) : {};
    return trace ? u.do_sendMessage(email, err, host).then(function(view) {
      return callback(msg, "> sent-message[" + email + "] :=", view), trace.result = view, trace;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} name
   * @param {string} fn
   * @param {boolean} err
   * @param {?} duration
   * @param {?} done
   * @return {?}
   */
  function timeout(name, fn, err, duration, done) {
    if (callback(msg, "do_deleteMessage(" + name + "/" + fn + ")...."), !name) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!fn) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var data = err ? Object.assign({}, err) : {};
    return data ? u.do_deleteMessage(name, fn).then(function(count) {
      return callback(msg, "> del-message[" + name + "] :=", count), data.result = count, data;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} files
   * @param {?} next
   * @param {boolean} data
   * @param {?} isReset
   * @param {?} directionSensitivity
   * @return {?}
   */
  function refresh(files, next, data, isReset, directionSensitivity) {
    if (!files) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!next) {
      return Promise.reject(new Error("ID is required!"));
    }
    /** @type {!Object} */
    var result = data ? Object.assign({}, data) : {};
    return result ? u.do_statistics(files).then(function(o) {
      return callback(msg, "> stat[" + files + "] = A:" + (o.available || 0) + " F:" + (o.inflight || 0) + " D:" + (o.delayed || 0) + " TO:" + (o.timeout || 0)), result.result = o, result;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} pid
   * @param {string} r
   * @param {boolean} p
   * @param {?} f
   * @param {?} duration
   * @return {?}
   */
  function start(pid, r, p, f, duration) {
    if (callback(msg, "do_get_test_self(" + pid + "/" + r + ")...."), !pid) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== r) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var result = p ? Object.assign({}, p) : {};
    if (!result) {
      return Promise.reject(new Error("node is required!"));
    }
    var instance = require("../service/task-service")(obj);
    return Promise.resolve(result).then(function(canCreateDiscussions) {
      callback(msg, "-------- task creation: ");
      return instance.do_create_task("Test", -1, {
        name : "test",
        val : 123,
        hi : "world"
      }).then(function(data) {
        if (callback(msg, "> create-task =", data), !data.MessageId) {
          throw new Error("invalid MessageId");
        }
        return data;
      });
    }).then(function(canCreateDiscussions) {
      callback(msg, "-------- task fetch: ");
      return instance.do_receive_task(-1, 1).then(function(data) {
        if (callback(msg, "> receive-task =", data), !data.Tasks) {
          throw new Error("invalid Tasks");
        }
        if (!data.Tasks[0].ReceiptHandle) {
          throw new Error("invalid MessageId");
        }
        return data.Tasks[0];
      });
    }).then(function(message) {
      callback(msg, "-------- task complete: ");
      var handle = message.ReceiptHandle;
      return instance.do_complete_task(-1, handle).then(function(data) {
        if (callback(msg, "> complete-task =", data), !data.ResponseMetadata) {
          throw new Error("invalid ResponseMetadata");
        }
        return data;
      });
    });
  }
  if (!obj) {
    throw new Error("_$(global instance pool) is required!");
  }
  var node = obj._;
  var self = obj.U;
  var u = obj.SS;
  if (!node) {
    throw new Error("$_ is required!");
  }
  if (!u) {
    throw new Error("$SS is required!");
  }
  var msg = self.NS(event || "SQSS", "yellow");
  var callback = obj.log;
  var debug = (obj.inf, obj.err);
  return function(event, ctx, next) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var name = decodeURIComponent(settings.id || "");
    var ret = (name || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var x = decodeURIComponent(settings.cmd || "");
    var mode = !ret && event.Records ? "EVENT" : {
      LIST : "LIST",
      GET : "GET",
      PUT : "PUT",
      POST : "POST",
      DELETE : "DELETE"
    }[ret];
    /** @type {*} */
    var body = event.body && ("string" == typeof event.body && (event.body.startsWith("{") || event.body.startsWith("[")) ? JSON.parse(event.body) : event.body) || event.Records && {
      records : event.Records
    } || null;
    if (!body) {
      callback(msg, "#" + mode + ":" + x + " (" + ret + ", " + type + "/" + name + ")....");
    }
    if (body) {
      callback(msg, "#" + mode + ":" + x + " (" + ret + ", " + type + "/" + name + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : name,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var message = function(method, addedRenderer, value, title) {
      /** @type {null} */
      var cmd = null;
      switch(method) {
        case "LIST":
          break;
        case "GET":
          if ("0" === value && "" === title) {
            /** @type {function(?, ?, boolean, ?, ?): ?} */
            cmd = publish;
          } else {
            if ("0" === value && "test-self" === title) {
              /** @type {function(string, string, boolean, ?, ?): ?} */
              cmd = start;
            } else {
              if ("0" === value && "stat" === title) {
                /** @type {function(string, ?, boolean, ?, ?): ?} */
                cmd = refresh;
              }
            }
          }
          break;
        case "PUT":
          if ("0" === value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            cmd = create;
          }
          break;
        case "POST":
          break;
        case "DELETE":
          if ("" !== value && "" === title) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            cmd = timeout;
          }
      }
      return cmd;
    }(mode, 0, name, x);
    if (!message) {
      return next(null, log({
        MODE : mode
      }));
    }
    try {
      results.then(function(that) {
        /** @type {string} */
        var name = that._id;
        /** @type {string} */
        var type = that._type;
        var callback = that._param;
        /** @type {*} */
        var container = that._body;
        var ctx = that._ctx;
        return message(type, name, callback, container, ctx);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), next(null, send(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? next(null, log(err.message)) : (debug(msg, "!!! callback@1-2 with err", err), next(null, cb(err.message || err))), false;
      });
    } catch (r) {
      next(r, cb(r.message));
    }
  };
};

