"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};exports=module.exports=function(r,e){if(!r)throw new Error("_$(global instance pool) is required!");var t=r._,y=r.U,d=r.SN;if(!t)throw new Error("$_ is required!");if(!d)throw new Error("$SN is required!");var b=y.NS(e||"SNSS","yellow"),p=r.log,E=(r.inf,r.err);function h(r){return _(404,r)}function P(r){return _(503,r)}function _(r,e){return{statusCode:r,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(e)}}function S(e,r,t,o,n){if(p(b,"do_publish("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));if(!o)return Promise.reject(new Error("$body is required!"));if("sms"==e||"SMS"==e)return w(e,r,t,o,n);var s=t?Object.assign({},t):{};if(!s)return Promise.reject(new Error("node is required!"));var i=t.subject||"";return p(b,"> body =",o),d.do_publish(e,i,o).then(function(r){return p(b,"> pub-message["+e+"] :=",r),s.result=r,s})}function w(e,r,t,o,n){if(p(b,"do_publish_sms("+e+"/"+r+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if(!r)return Promise.reject(new Error("ID is required!"));if(!o)return Promise.reject(new Error("$body is required!"));var s=Object.assign(t||{},o||{});if(!s)return Promise.reject(new Error("node is required!"));var i=s.phone||"",u=s.message||"",c=s.sender||"";return d.do_publish_sms(i,u,c).then(function(r){return p(b,"> sms-message["+e+"] :=",r),s.result=r,s})}function T(r,e,t,o,n){if(p(b,"do_get_test_self("+r+"/"+e+")...."),!r)return Promise.reject(new Error("TYPE is required!"));if("0"!==e)return Promise.reject(new Error("ID is invalid!"));var s=t?Object.assign({},t):{};return s?Promise.resolve(s):Promise.reject(new Error("node is required!"))}return function(r,e,t){e.callbackWaitsForEmptyEventLoop=!1;var o=r.queryStringParameters||{},n=r.pathParameters||{},s=decodeURIComponent(n.type||""),i=decodeURIComponent(n.id||""),u=(i||"GET"!==r.httpMethod?r.httpMethod:"LIST")||"",c=decodeURIComponent(n.cmd||""),d=!u&&r.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[u],a=r.body&&("string"==typeof r.body&&(r.body.startsWith("{")||r.body.startsWith("["))?JSON.parse(r.body):r.body)||r.Records&&{records:r.Records}||null;!a&&p(b,"#"+d+":"+c+" ("+u+", "+s+"/"+i+")...."),a&&p(b,"#"+d+":"+c+" ("+u+", "+s+"/"+i+").... body.len=",a?y.json(a).length:-1);var l={_id:i,_type:s,_param:o,_body:a,_ctx:e},f=Promise.resolve(l),m=function(r,e,t,o){var n=null;switch(r){case"LIST":break;case"GET":"0"===t&&"test-self"===o&&(n=T);break;case"PUT":break;case"POST":"0"===t&&""===o?n=S:"0"===t&&"sms"===o&&(n=w)}return n}(d,0,i,c);if(!m)return t(null,h({MODE:d}));try{f.then(function(r){var e=r._id,t=r._type,o=r._param,n=r._body,s=r._ctx;return m(t,e,o,n,s)}).then(function(r){return r&&"object"===(void 0===r?"undefined":_typeof(r))&&(r=y.cleanup(r)),t(null,_(200,r)),!0}).catch(function(r){return E(b,"!!! callback@1 with err",r),0<=(r&&r.message||"").indexOf("404 NOT FOUND")?t(null,h(r.message)):t(null,P(r.message||r)),!1})}catch(r){t(r,P(r.message))}}};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, overrides) {
  /**
   * @param {!Array} position
   * @return {?}
   */
  function assign(position) {
    return set(404, position);
  }
  /**
   * @param {!Array} buffer
   * @return {?}
   */
  function callback(buffer) {
    return set(503, buffer);
  }
  /**
   * @param {number} i
   * @param {!Array} value
   * @return {?}
   */
  function set(i, value) {
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
   * @param {string} url
   * @param {string} mode
   * @param {!Object} value
   * @param {number} error
   * @param {?} data
   * @return {?}
   */
  function count(url, mode, value, error, data) {
    if (log(msg, "do_publish(" + url + "/" + mode + ")...."), !url) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!mode) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!error) {
      return Promise.reject(new Error("$body is required!"));
    }
    if ("sms" == url || "SMS" == url) {
      return done(url, mode, value, error, data);
    }
    /** @type {!Object} */
    var response = value ? Object.assign({}, value) : {};
    if (!response) {
      return Promise.reject(new Error("node is required!"));
    }
    var i = value.subject || "";
    return log(msg, "> body =", error), self.do_publish(url, i, error).then(function(e) {
      return log(msg, "> pub-message[" + url + "] :=", e), response.result = e, response;
    });
  }
  /**
   * @param {string} name
   * @param {string} mode
   * @param {!Object} params
   * @param {number} data
   * @param {?} buffers
   * @return {?}
   */
  function done(name, mode, params, data, buffers) {
    if (log(msg, "do_publish_sms(" + name + "/" + mode + ")...."), !name) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!mode) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!data) {
      return Promise.reject(new Error("$body is required!"));
    }
    /** @type {!Object} */
    var entry = Object.assign(params || {}, data || {});
    if (!entry) {
      return Promise.reject(new Error("node is required!"));
    }
    var i = entry.phone || "";
    var u = entry.message || "";
    var trustedInputs = entry.sender || "";
    return self.do_publish_sms(i, u, trustedInputs).then(function(stat) {
      return log(msg, "> sms-message[" + name + "] :=", stat), entry.result = stat, entry;
    });
  }
  /**
   * @param {string} url
   * @param {string} mode
   * @param {!Object} options
   * @param {number} docs
   * @param {?} sortOption
   * @return {?}
   */
  function exports(url, mode, options, docs, sortOption) {
    if (log(msg, "do_get_test_self(" + url + "/" + mode + ")...."), !url) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== mode) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var uri = options ? Object.assign({}, options) : {};
    return uri ? Promise.resolve(uri) : Promise.reject(new Error("node is required!"));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var t = opts.U;
  var self = opts.SN;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!self) {
    throw new Error("$SN is required!");
  }
  var msg = t.NS(overrides || "SNSS", "yellow");
  var log = opts.log;
  var x$$ = (opts.inf, opts.err);
  return function(event, ctx, require) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var key = decodeURIComponent(settings.id || "");
    var ret = (key || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var val = decodeURIComponent(settings.cmd || "");
    var method = !ret && event.Records ? "EVENT" : {
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
      log(msg, "#" + method + ":" + val + " (" + ret + ", " + type + "/" + key + ")....");
    }
    if (body) {
      log(msg, "#" + method + ":" + val + " (" + ret + ", " + type + "/" + key + ").... body.len=", body ? t.json(body).length : -1);
    }
    var listview = {
      _id : key,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var base = function(method, addedRenderer, type, value) {
      /** @type {null} */
      var cb = null;
      switch(method) {
        case "LIST":
          break;
        case "GET":
          if ("0" === type && "test-self" === value) {
            /** @type {function(string, string, !Object, number, ?): ?} */
            cb = exports;
          }
          break;
        case "PUT":
          break;
        case "POST":
          if ("0" === type && "" === value) {
            /** @type {function(string, string, !Object, number, ?): ?} */
            cb = count;
          } else {
            if ("0" === type && "sms" === value) {
              /** @type {function(string, string, !Object, number, ?): ?} */
              cb = done;
            }
          }
      }
      return cb;
    }(method, 0, key, val);
    if (!base) {
      return require(null, assign({
        MODE : method
      }));
    }
    try {
      results.then(function(self) {
        /** @type {string} */
        var originalId = self._id;
        /** @type {string} */
        var eventName = self._type;
        var people = self._param;
        /** @type {*} */
        var oldBody = self._body;
        var regex = self._ctx;
        return base(eventName, originalId, people, oldBody, regex);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = t.cleanup(value)), require(null, set(200, value)), true;
      }).catch(function(data) {
        return x$$(msg, "!!! callback@1 with err", data), 0 <= (data && data.message || "").indexOf("404 NOT FOUND") ? require(null, assign(data.message)) : require(null, callback(data.message || data)), false;
      });
    } catch (alarm) {
      require(alarm, callback(alarm.message));
    }
  };
};

