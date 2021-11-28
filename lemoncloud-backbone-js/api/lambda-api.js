"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,b=e.U,a=e.LS;if(!t)throw new Error("$_ is required!");if(!a)throw new Error("$LS is required!");var p=b.NS(r||"LMDS","yellow"),_=e.log,y=(e.inf,e.err);function E(e){return T(404,e)}function h(e){return T(503,e)}function T(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}var o=function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var o=e.queryStringParameters||{},n=e.pathParameters||{},i=decodeURIComponent(n.type||""),s=decodeURIComponent(n.id||""),a=(s||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",d=decodeURIComponent(n.cmd||""),u=!a&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[a],c=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!c&&_(p,"#"+u+":"+d+" ("+a+", "+i+"/"+s+")...."),c&&_(p,"#"+u+":"+d+" ("+a+", "+i+"/"+s+").... body.len=",c?b.json(c).length:-1);var l={_id:s,_type:i,_cmd:d,_param:o,_body:c,_ctx:r},m=Promise.resolve(l),f=function(e,r,t,o){var n=null;switch(e){case"LIST":case"GET":n=P;break;case"PUT":n=g;break;case"POST":n=v;break;case"DELETE":n=w}return n}(u);if(!f)return t(null,E({MODE:u}));try{m.then(function(e){var r=e._id,t=e._cmd,o=e._type,n=e._param,i=e._body,s=e._ctx;return f(o,r,t,n,i,s)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=b.cleanup(e)),t(null,T(200,e)),!0}).catch(function(e){return 0<=(e&&(e.message||e.reason)||"").indexOf("404 NOT FOUND")?t(null,E(e.message)):(y(p,"!!! callback@1-2 with err",e),t(null,h(e.message||e.reason||e))),!1})}catch(e){t(e,h(e.message))}};function P(r,e,t,o,n,i){if(_(p,"do_get_lambda("+r+"/"+e+")...."),e=e||"",!r)return Promise.reject(new Error("TYPE is required!"));var s=o?Object.assign({},o):{};return s?a.do_get(r,e,t||void 0,o,n,i).then(function(e){return _(p,"> lambda-get["+r+"] :=",e),s.result=e,s}):Promise.reject(new Error("node is required!"))}function g(r,e,t,o,n,i){if(_(p,"do_put_lambda("+r+"/"+e+")...."),e=e||"",!r)return Promise.reject(new Error("TYPE is required!"));var s=o?Object.assign({},o):{};return s?a.do_put(r,e,t||void 0,o,n,i).then(function(e){return _(p,"> lambda-put["+r+"] :=",e),s.result=e,s}):Promise.reject(new Error("node is required!"))}function v(r,e,t,o,n,i){if(_(p,"do_post_lambda("+r+"/"+e+")...."),e=e||"",!r)return Promise.reject(new Error("TYPE is required!"));var s=o?Object.assign({},o):{};return s?a.do_post(r,e,t||void 0,o,n,i).then(function(e){return _(p,"> lambda-post["+r+"] :=",e),s.result=e,s}):Promise.reject(new Error("node is required!"))}function w(e,r,t,o,n,i){if(_(p,"do_delete_lambda("+host+"/"+path+")...."),path=path||"",!host)return Promise.reject(new Error("TYPE is required!"));var s=o?Object.assign({},o):{};return s?a.do_delete(e,r,t||void 0,o,n,i).then(function(e){return _(p,"> lambda-del["+host+"] :=",e),s.result=e,s}):Promise.reject(new Error("node is required!"))}return o.do_get_lambda=P,o.do_put_lambda=g,o.do_post_lambda=v,o.do_delete_lambda=w,o};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, userOptions) {
  /**
   * @param {!Array} end
   * @return {?}
   */
  function next(end) {
    return done(404, end);
  }
  /**
   * @param {!Array} callback
   * @return {?}
   */
  function errorHandler(callback) {
    return done(503, callback);
  }
  /**
   * @param {number} i
   * @param {!Array} value
   * @return {?}
   */
  function done(i, value) {
    return {
      statusCode : i,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(value)
    };
  }
  /**
   * @param {string} f
   * @param {string} a
   * @param {string} user
   * @param {boolean} res
   * @param {?} done
   * @param {?} options
   * @return {?}
   */
  function run(f, a, user, res, done, options) {
    if (debug(msg, "do_get_lambda(" + f + "/" + a + ")...."), a = a || "", !f) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var obj = res ? Object.assign({}, res) : {};
    return obj ? self.do_get(f, a, user || void 0, res, done, options).then(function(data) {
      return debug(msg, "> lambda-get[" + f + "] :=", data), obj.result = data, obj;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} current
   * @param {string} a
   * @param {string} user
   * @param {boolean} error
   * @param {?} profile
   * @param {?} size
   * @return {?}
   */
  function get(current, a, user, error, profile, size) {
    if (debug(msg, "do_put_lambda(" + current + "/" + a + ")...."), a = a || "", !current) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var response = error ? Object.assign({}, error) : {};
    return response ? self.do_put(current, a, user || void 0, error, profile, size).then(function(result) {
      return debug(msg, "> lambda-put[" + current + "] :=", result), response.result = result, response;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} f
   * @param {string} a
   * @param {string} user
   * @param {boolean} key
   * @param {?} value
   * @param {?} options
   * @return {?}
   */
  function v(f, a, user, key, value, options) {
    if (debug(msg, "do_post_lambda(" + f + "/" + a + ")...."), a = a || "", !f) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var result = key ? Object.assign({}, key) : {};
    return result ? self.do_post(f, a, user || void 0, key, value, options).then(function(data) {
      return debug(msg, "> lambda-post[" + f + "] :=", data), result.result = data, result;
    }) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {?} event
   * @param {?} target
   * @param {string} cb
   * @param {boolean} err
   * @param {?} options
   * @param {?} callback
   * @return {?}
   */
  function assign(event, target, cb, err, options, callback) {
    if (debug(msg, "do_delete_lambda(" + host + "/" + path + ")...."), path = path || "", !host) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    /** @type {!Object} */
    var trace = err ? Object.assign({}, err) : {};
    return trace ? self.do_delete(event, target, cb || void 0, err, options, callback).then(function(error) {
      return debug(msg, "> lambda-del[" + host + "] :=", error), trace.result = error, trace;
    }) : Promise.reject(new Error("node is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var options = opts.U;
  var self = opts.LS;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!self) {
    throw new Error("$LS is required!");
  }
  var msg = options.NS(userOptions || "LMDS", "yellow");
  var debug = opts.log;
  var log = (opts.inf, opts.err);
  /**
   * @param {!Object} event
   * @param {!Node} ctx
   * @param {?} cb
   * @return {?}
   */
  var create = function(event, ctx, cb) {
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
      debug(msg, "#" + mode + ":" + host_yaml_uri + " (" + ret + ", " + type + "/" + appId + ")....");
    }
    if (body) {
      debug(msg, "#" + mode + ":" + host_yaml_uri + " (" + ret + ", " + type + "/" + appId + ").... body.len=", body ? options.json(body).length : -1);
    }
    var hit = {
      _id : appId,
      _type : type,
      _cmd : host_yaml_uri,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _cmd: string, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var url = Promise.resolve(hit);
    var format = function(method, canCreateDiscussions, isSlidingUp, dontForceConstraints) {
      /** @type {null} */
      var action = null;
      switch(method) {
        case "LIST":
        case "GET":
          /** @type {function(string, string, string, boolean, ?, ?): ?} */
          action = run;
          break;
        case "PUT":
          /** @type {function(string, string, string, boolean, ?, ?): ?} */
          action = get;
          break;
        case "POST":
          /** @type {function(string, string, string, boolean, ?, ?): ?} */
          action = v;
          break;
        case "DELETE":
          /** @type {function(?, ?, string, boolean, ?, ?): ?} */
          action = assign;
      }
      return action;
    }(mode);
    if (!format) {
      return cb(null, next({
        MODE : mode
      }));
    }
    try {
      url.then(function(self) {
        /** @type {string} */
        var originalId = self._id;
        /** @type {string} */
        var extraData = self._cmd;
        /** @type {string} */
        var t = self._type;
        var id = self._param;
        /** @type {*} */
        var className = self._body;
        var items = self._ctx;
        return format(t, originalId, extraData, id, className, items);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = options.cleanup(value)), cb(null, done(200, value)), true;
      }).catch(function(e) {
        return 0 <= (e && (e.message || e.reason) || "").indexOf("404 NOT FOUND") ? cb(null, next(e.message)) : (log(msg, "!!! callback@1-2 with err", e), cb(null, errorHandler(e.message || e.reason || e))), false;
      });
    } catch (ex) {
      cb(ex, errorHandler(ex.message));
    }
  };
  return create.do_get_lambda = run, create.do_put_lambda = get, create.do_post_lambda = v, create.do_delete_lambda = assign, create;
};

