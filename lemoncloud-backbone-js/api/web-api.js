"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,E=e.U,s=e.WS;if(!t)throw new Error("$_ is required!");if(!s)throw new Error("$WS is required!");var b=E.NS(r||"WEBS","yellow"),p=e.log,m=(e.inf,e.err);function h(e){return P(404,e)}function w(e){return P(503,e)}function P(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}function T(r,e,t,o,n){if(p(b,"do_handleGet("+r+"/"+e+")...."),e=e||"",!r)return Promise.reject(new Error("TYPE is required!"));var i=t?Object.assign({},t):{};return i?s.do_get(r,e,void 0,t).then(function(e){return p(b,"> web-get["+r+"] :=",e),i.result=e,i}):Promise.reject(new Error("node is required!"))}function _(r,e,t,o,n){if(p(b,"do_handlePut("+r+"/"+e+")...."),e=e||"",!r)return Promise.reject(new Error("TYPE is required!"));var i=t?Object.assign({},t):{};return i?s.do_put(r,e,void 0,t,o).then(function(e){return p(b,"> web-put["+r+"] :=",e),i.result=e,i}):Promise.reject(new Error("node is required!"))}function S(r,e,t,o,n){if(p(b,"do_handlePost("+r+"/"+e+")...."),e=e||"",!r)return Promise.reject(new Error("TYPE is required!"));var i=t?Object.assign({},t):{};return i?s.do_post(r,e,void 0,t,o).then(function(e){return p(b,"> web-post["+r+"] :=",e),i.result=e,i}):Promise.reject(new Error("node is required!"))}function v(r,e,t,o,n){if(p(b,"do_handleDelete("+r+"/"+e+")...."),e=e||"",!r)return Promise.reject(new Error("TYPE is required!"));var i=t?Object.assign({},t):{};return i?s.do_delete(r,e,void 0,t,o).then(function(e){return p(b,"> web-del["+r+"] :=",e),i.result=e,i}):Promise.reject(new Error("node is required!"))}return function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var o=e.queryStringParameters||{},n=e.pathParameters||{},i=decodeURIComponent(n.type||""),s=decodeURIComponent(n.id||""),u=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",c=decodeURIComponent(n.cmd||""),d=!u&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[u],a=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!a&&p(b,"#"+d+":"+c+" ("+u+", "+i+"/"+s+")...."),a&&p(b,"#"+d+":"+c+" ("+u+", "+i+"/"+s+").... body.len=",a?E.json(a).length:-1);var l={_id:s,_type:i,_param:o,_body:a,_ctx:r},f=Promise.resolve(l),y=function(e,r,t,o){var n=null;switch(e){case"LIST":case"GET":n=T;break;case"PUT":n=_;break;case"POST":n=S;break;case"DELETE":n=v}return n}(d);if(!y)return t(null,h({MODE:d}));try{f.then(function(e){var r=e._id,t=e._type,o=e._param,n=e._body,i=e._ctx;return y(t,r,o,n,i)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=E.cleanup(e)),t(null,P(200,e)),!0}).catch(function(e){return 0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,h(e.message)):(m(b,"!!! callback@1-2 with err",e),t(null,w(e.message||e))),!1})}catch(e){t(e,w(e.message))}}};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(exprCode) {
  return typeof exprCode;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, overrides) {
  /**
   * @param {!Array} app
   * @return {?}
   */
  function log(app) {
    return cb(404, app);
  }
  /**
   * @param {!Array} r
   * @return {?}
   */
  function callback(r) {
    return cb(503, r);
  }
  /**
   * @param {number} statusCode
   * @param {!Array} text
   * @return {?}
   */
  function cb(statusCode, text) {
    return {
      statusCode : statusCode,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(text)
    };
  }
  /**
   * @param {string} sender
   * @param {string} name
   * @param {boolean} options
   * @param {?} o
   * @param {?} done
   * @return {?}
   */
  function run(sender, name, options, o, done) {
    if (push(msg, "do_handleGet(" + sender + "/" + name + ")...."), name = name || "", !sender) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var o = options ? Object.assign({}, options) : {};
    return o ? self.do_get(sender, name, void 0, options).then(function(context) {
      return push(msg, "> web-get[" + sender + "] :=", context), o.result = context, o;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} projectId
   * @param {string} userId
   * @param {boolean} obj
   * @param {?} addAttempt
   * @param {?} retu_data
   * @return {?}
   */
  function success(projectId, userId, obj, addAttempt, retu_data) {
    if (push(msg, "do_handlePut(" + projectId + "/" + userId + ")...."), userId = userId || "", !projectId) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var options = obj ? Object.assign({}, obj) : {};
    return options ? self.do_put(projectId, userId, void 0, obj, addAttempt).then(function(message) {
      return push(msg, "> web-put[" + projectId + "] :=", message), options.result = message, options;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} e
   * @param {string} direction
   * @param {boolean} version
   * @param {?} fileName
   * @param {?} lastIndex
   * @return {?}
   */
  function test(e, direction, version, fileName, lastIndex) {
    if (push(msg, "do_handlePost(" + e + "/" + direction + ")...."), direction = direction || "", !e) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var ctx = version ? Object.assign({}, version) : {};
    return ctx ? self.do_post(e, direction, void 0, version, fileName).then(function(context) {
      return push(msg, "> web-post[" + e + "] :=", context), ctx.result = context, ctx;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} start
   * @param {string} data
   * @param {boolean} key
   * @param {?} value
   * @param {?} i
   * @return {?}
   */
  function v(start, data, key, value, i) {
    if (push(msg, "do_handleDelete(" + start + "/" + data + ")...."), data = data || "", !start) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var result = key ? Object.assign({}, key) : {};
    return result ? self.do_delete(start, data, void 0, key, value).then(function(error) {
      return push(msg, "> web-del[" + start + "] :=", error), result.result = error, result;
    }) : Promise.reject(new Error("node is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var t = opts.U;
  var self = opts.WS;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!self) {
    throw new Error("$WS is required!");
  }
  var msg = t.NS(overrides || "WEBS", "yellow");
  var push = opts.log;
  var debug = (opts.inf, opts.err);
  return function(event, ctx, next) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var appId = decodeURIComponent(settings.id || "");
    var ret = (appId || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var host_yaml_uri = decodeURIComponent(settings.cmd || "");
    var key = !ret && event.Records ? "EVENT" : {
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
      push(msg, "#" + key + ":" + host_yaml_uri + " (" + ret + ", " + type + "/" + appId + ")....");
    }
    if (body) {
      push(msg, "#" + key + ":" + host_yaml_uri + " (" + ret + ", " + type + "/" + appId + ").... body.len=", body ? t.json(body).length : -1);
    }
    var listview = {
      _id : appId,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var load = function(method, canCreateDiscussions, isSlidingUp, dontForceConstraints) {
      /** @type {null} */
      var result = null;
      switch(method) {
        case "LIST":
        case "GET":
          /** @type {function(string, string, boolean, ?, ?): ?} */
          result = run;
          break;
        case "PUT":
          /** @type {function(string, string, boolean, ?, ?): ?} */
          result = success;
          break;
        case "POST":
          /** @type {function(string, string, boolean, ?, ?): ?} */
          result = test;
          break;
        case "DELETE":
          /** @type {function(string, string, boolean, ?, ?): ?} */
          result = v;
      }
      return result;
    }(key);
    if (!load) {
      return next(null, log({
        MODE : key
      }));
    }
    try {
      results.then(function(self) {
        /** @type {string} */
        var x = self._id;
        /** @type {string} */
        var t = self._type;
        var cb = self._param;
        /** @type {*} */
        var container = self._body;
        var context = self._ctx;
        return load(t, x, cb, container, context);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = t.cleanup(value)), next(null, cb(200, value)), true;
      }).catch(function(err) {
        return 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? next(null, log(err.message)) : (debug(msg, "!!! callback@1-2 with err", err), next(null, callback(err.message || err))), false;
      });
    } catch (config) {
      next(config, callback(config.message));
    }
  };
};

