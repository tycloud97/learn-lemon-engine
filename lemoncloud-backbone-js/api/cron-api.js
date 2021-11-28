"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,r){if(!e)throw new Error("_$(global instance pool) is required!");var t=e._,y=e.U;if(!t)throw new Error("$_ is required!");var p=y.NS(r||"CRNS","yellow"),b=e.log,m=(e.inf,e.err),l=function(){if(!e.CR)throw new Error("$CR(cron-service) is required!");return e.CR};function E(e){return T(404,e)}function h(e){return T(503,e)}function T(e,r){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(r)}}function g(e,r,t,o,n){b(p,"do_list_rules("+e+"/"+r+")....");var s=y.N(t.list,10),i=t.prefix||"",u=t.token||"";return l().do_list_rules(s,i,u)}function S(e,r,t,o,n){return b(p,"do_get_rule("+e+"/"+r+")...."),r?l().do_describe_rule(r):Promise.reject(new Error("ID is required!"))}function w(e,r,t,o,n){return b(p,"do_get_rule("+e+"/"+r+")...."),r?l().do_enable_rule(r,!0):Promise.reject(new Error("ID is required!"))}function v(e,r,t,o,n){return b(p,"do_get_rule("+e+"/"+r+")...."),r?l().do_enable_rule(r,!1):Promise.reject(new Error("ID is required!"))}function P(e,r,t,o,n){if(b(p,"do_list_targets("+e+"/"+r+")...."),!r)return Promise.reject(new Error("ID is required!"));var s=y.N(t.list,10),i=t.token||"";return l().do_list_targets(r,s,i)}function I(e,r,t,o,n){return b(p,"do_post_save_rule("+e+"/"+r+")...."),r?l().do_save_rule(r,o):Promise.reject(new Error("ID is required!"))}return function(e,r,t){r.callbackWaitsForEmptyEventLoop=!1;var o=e.queryStringParameters||{},n=e.pathParameters||{},s=decodeURIComponent(n.type||""),i=decodeURIComponent(n.id||""),u=(i||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",l=decodeURIComponent(n.cmd||""),c=!u&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[u],d=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!d&&b(p,"#"+c+":"+l+" ("+u+", "+s+"/"+i+")...."),d&&b(p,"#"+c+":"+l+" ("+u+", "+s+"/"+i+").... body.len=",d?y.json(d).length:-1);var a={_id:i,_type:s,_param:o,_body:d,_ctx:r},_=Promise.resolve(a),f=function(e,r,t,o){var n=null;switch(e){case"LIST":"rules"===r&&""===t&&""===o&&(n=g);break;case"GET":"rules"===r&&""!==t&&""===o?n=S:"rules"===r&&""!==t&&"enable"===o?n=w:"rules"===r&&""!==t&&"disable"===o?n=v:"rules"===r&&""!==t&&"targets"===o&&(n=P);break;case"PUT":break;case"POST":"rules"===r&&""!==t&&""===o&&(n=I)}return n}(c,s,i,l);if(!f)return t(null,E({MODE:c}));try{_.then(function(e){var r=e._id,t=e._type,o=e._param,n=e._body,s=e._ctx;return f(t,r,o,n,s)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=y.cleanup(e)),t(null,T(200,e)),!0}).catch(function(e){return m(p,"!!! callback@1 with err",e),0<=(e&&e.message||"").indexOf("404 NOT FOUND")?t(null,E(e.message)):t(null,h(e.message||e)),!1})}catch(e){t(e,h(e.message))}}};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(p_or_v) {
  return typeof p_or_v;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, operator) {
  /**
   * @param {!Array} arg1
   * @return {?}
   */
  function f(arg1) {
    return next(404, arg1);
  }
  /**
   * @param {!Array} arg1
   * @return {?}
   */
  function fn(arg1) {
    return next(503, arg1);
  }
  /**
   * @param {number} i
   * @param {!Array} data
   * @return {?}
   */
  function next(i, data) {
    return {
      statusCode : i,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(data)
    };
  }
  /**
   * @param {string} eventId
   * @param {string} context
   * @param {!Object} options
   * @param {?} cb
   * @param {?} stack
   * @return {?}
   */
  function get(eventId, context, options, cb, stack) {
    callback(msg, "do_list_rules(" + eventId + "/" + context + ")....");
    var artistTrack = self.N(options.list, 10);
    var maskWithoutOptionals = options.prefix || "";
    var bInitP = options.token || "";
    return replace().do_list_rules(artistTrack, maskWithoutOptionals, bInitP);
  }
  /**
   * @param {string} event
   * @param {string} t
   * @param {?} err
   * @param {?} raw
   * @param {?} connection
   * @return {?}
   */
  function message(event, t, err, raw, connection) {
    return callback(msg, "do_get_rule(" + event + "/" + t + ")...."), t ? replace().do_describe_rule(t) : Promise.reject(new Error("ID is required!"));
  }
  /**
   * @param {string} fn
   * @param {string} name
   * @param {?} object
   * @param {?} method
   * @param {?} error
   * @return {?}
   */
  function timeout(fn, name, object, method, error) {
    return callback(msg, "do_get_rule(" + fn + "/" + name + ")...."), name ? replace().do_enable_rule(name, true) : Promise.reject(new Error("ID is required!"));
  }
  /**
   * @param {string} taglib
   * @param {string} name
   * @param {?} insertRef
   * @param {?} position
   * @param {?} dir
   * @return {?}
   */
  function add(taglib, name, insertRef, position, dir) {
    return callback(msg, "do_get_rule(" + taglib + "/" + name + ")...."), name ? replace().do_enable_rule(name, false) : Promise.reject(new Error("ID is required!"));
  }
  /**
   * @param {string} tag
   * @param {string} tagName
   * @param {!Object} state
   * @param {?} s
   * @param {?} o
   * @return {?}
   */
  function h(tag, tagName, state, s, o) {
    if (callback(msg, "do_list_targets(" + tag + "/" + tagName + ")...."), !tagName) {
      return Promise.reject(new Error("ID is required!"));
    }
    var artistTrack = self.N(state.list, 10);
    var bInitP = state.token || "";
    return replace().do_list_targets(tagName, artistTrack, bInitP);
  }
  /**
   * @param {string} value
   * @param {string} name
   * @param {?} range
   * @param {?} k
   * @param {?} options
   * @return {?}
   */
  function addProperty(value, name, range, k, options) {
    return callback(msg, "do_post_save_rule(" + value + "/" + name + ")...."), name ? replace().do_save_rule(name, k) : Promise.reject(new Error("ID is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  var msg = self.NS(operator || "CRNS", "yellow");
  var callback = opts.log;
  var x$$ = (opts.inf, opts.err);
  /**
   * @return {?}
   */
  var replace = function() {
    if (!opts.CR) {
      throw new Error("$CR(cron-service) is required!");
    }
    return opts.CR;
  };
  return function(event, ctx, cb) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var y = decodeURIComponent(settings.id || "");
    var ret = (y || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var args = decodeURIComponent(settings.cmd || "");
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
      callback(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + y + ")....");
    }
    if (body) {
      callback(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + y + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : y,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var r = function(method, b, c, undefined) {
      /** @type {null} */
      var type = null;
      switch(method) {
        case "LIST":
          if ("rules" === b && "" === c && "" === undefined) {
            /** @type {function(string, string, !Object, ?, ?): ?} */
            type = get;
          }
          break;
        case "GET":
          if ("rules" === b && "" !== c && "" === undefined) {
            /** @type {function(string, string, ?, ?, ?): ?} */
            type = message;
          } else {
            if ("rules" === b && "" !== c && "enable" === undefined) {
              /** @type {function(string, string, ?, ?, ?): ?} */
              type = timeout;
            } else {
              if ("rules" === b && "" !== c && "disable" === undefined) {
                /** @type {function(string, string, ?, ?, ?): ?} */
                type = add;
              } else {
                if ("rules" === b && "" !== c && "targets" === undefined) {
                  /** @type {function(string, string, !Object, ?, ?): ?} */
                  type = h;
                }
              }
            }
          }
          break;
        case "PUT":
          break;
        case "POST":
          if ("rules" === b && "" !== c && "" === undefined) {
            /** @type {function(string, string, ?, ?, ?): ?} */
            type = addProperty;
          }
      }
      return type;
    }(mode, type, y, args);
    if (!r) {
      return cb(null, f({
        MODE : mode
      }));
    }
    try {
      results.then(function(that) {
        /** @type {string} */
        var id = that._id;
        /** @type {string} */
        var type = that._type;
        var e = that._param;
        /** @type {*} */
        var container = that._body;
        var num = that._ctx;
        return r(type, id, e, container, num);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), cb(null, next(200, value)), true;
      }).catch(function(data) {
        return x$$(msg, "!!! callback@1 with err", data), 0 <= (data && data.message || "").indexOf("404 NOT FOUND") ? cb(null, f(data.message)) : cb(null, fn(data.message || data)), false;
      });
    } catch (e) {
      cb(e, fn(e.message));
    }
  };
};

