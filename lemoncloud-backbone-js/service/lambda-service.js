"use strict";var _slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var n=[],t=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(t=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(r){o=!0,i=r}finally{try{!t&&u.return&&u.return()}finally{if(o)throw i}}return n}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};module.exports=function(r,e){e=e||"LS";var d=r.U,f=r.aws,n=r._;if(!d)throw new Error("$U is required!");if(!f)throw new Error("$aws is required!");if(!n)throw new Error("$_ is required!");if(!require("url"))throw new Error("URL is required!");if(!require("query-string"))throw new Error("query-string is required!");var c=r.log,m=(r.inf,r.err),w=d.NS(e,"magenta"),t={do_get:function(r,e,n,t,o,i){return a("GET",r,e,n,t,o,i)},do_post:function(r,e,n,t,o,i){return a("POST",r,e,n,t,o,i)},do_put:function(r,e,n,t,o,i){return a("PUT",r,e,n,t,o,i)},do_delete:function(r,e,n,t,o,i){return a("DELETE",r,e,n,t,o,i)}};r(e,t);var l={region:d.env("LD_REGION","ap-northeast-2")};d.env("LD_ENDPOINT")&&(l.endpoint=d.env("LD_ENDPOINT")),c(w,"!config=",l);var y=function(r){var e=d.env("LD_CONFIG",new Error("env:LD_CONFIG is required!"));if(e instanceof Error)throw e;var a=function(r){return r&&r.trim()||""},n=e.split(",").map(a).reduce(function(r,e){var n=e.split("=",2).map(a),t=_slicedToArray(n,2),o=t[0],i=t[1];return r[o]=i,r},{})[r];if(!n){if(r.startsWith("lemon-")&&0<r.indexOf("-api-prod-"))return r;throw new Error("Unknown Lambda Func-Name:"+r+", See env.LD_CONFIG!")}return n};function a(r,o,e,n,t,i,a){if(!r)return Promise.reject(new Error("method is required!"));if(!o)return Promise.reject(new Error("fname is required!"));c(w,"do_call_lambda("+r+"/"+o+").... ");var u={httpMethod:r.toUpperCase(),pathParameters:{id:e,cmd:n},queryStringParameters:t||"",body:i||""},s=y(o);return c(w,"> function-name =",s,s!=o?" <- "+o:""),c(w,"> param["+s+"] =",u),function(r,e,n){if(!r)return Promise.reject(new Error("fnName is required!"));var o={FunctionName:r,Payload:e?d.json(e):""},i=new f.Lambda(l);return new Promise(function(n,t){i.invoke(o,function(r,e){r?(m(w,"!ERR lambda =",r),t(r)):n(e)})})}(s,u).then(function(r){var e=(r=r||{}).Payload?JSON.parse(r.Payload):{},n=e.statusCode||200;c(w,"> Lambda["+o+"].StatusCode =",n);var t=function(){try{return e.body&&"string"==typeof e.body?JSON.parse(e.body):e.body}catch(r){return e.body}}();return 400==n||404==n?Promise.reject(new Error(t||"404 NOT FOUND")):200!==n?"string"==typeof t&&0<=t.indexOf("404 NOT FOUND")?Promise.reject(new Error(t||"404 NOT FOUND")):Promise.reject(new Error(t||"Lambda Error. status:"+n)):t})}return t};'use strict';
/**
 * @param {?} arr
 * @param {number} i
 * @return {?}
 */
var _slicedToArray = function(arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  }
  if (Symbol.iterator in Object(arr)) {
    return function(set, groupNum) {
      /** @type {!Array} */
      var _arr = [];
      /** @type {boolean} */
      var _iteratorNormalCompletion3 = true;
      /** @type {boolean} */
      var o = false;
      var i = void 0;
      try {
        var _s;
        var _iterator3 = set[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (_s = _iterator3.next()).done) && (_arr.push(_s.value), !groupNum || _arr.length !== groupNum); _iteratorNormalCompletion3 = true) {
        }
      } catch (contactCapacity) {
        /** @type {boolean} */
        o = true;
        i = contactCapacity;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw i;
          }
        }
      }
      return _arr;
    }(arr, i);
  }
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
/**
 * @param {!Object} options
 * @param {string} key
 * @return {?}
 */
module.exports = function(options, key) {
  /**
   * @param {string} q
   * @param {string} v
   * @param {string} str
   * @param {string} data
   * @param {string} fn
   * @param {string} obj
   * @param {?} n
   * @return {?}
   */
  function next(q, v, str, data, fn, obj, n) {
    if (!q) {
      return Promise.reject(new Error("method is required!"));
    }
    if (!v) {
      return Promise.reject(new Error("fname is required!"));
    }
    debug(err, "do_call_lambda(" + q + "/" + v + ").... ");
    var params = {
      httpMethod : q.toUpperCase(),
      pathParameters : {
        id : str,
        cmd : data
      },
      queryStringParameters : fn || "",
      body : obj || ""
    };
    var val = render(v);
    return debug(err, "> function-name =", val, val != v ? " <- " + v : ""), debug(err, "> param[" + val + "] =", params), function(name, obj, n) {
      if (!name) {
        return Promise.reject(new Error("fnName is required!"));
      }
      var params = {
        FunctionName : name,
        Payload : obj ? api.json(obj) : ""
      };
      var client = new aws.Lambda(config);
      return new Promise(function(obtainGETData, saveNotifs) {
        client.invoke(params, function(notifications, val) {
          if (notifications) {
            done(err, "!ERR lambda =", notifications);
            saveNotifs(notifications);
          } else {
            obtainGETData(val);
          }
        });
      });
    }(val, params).then(function(data) {
      /** @type {*} */
      var options = (data = data || {}).Payload ? JSON.parse(data.Payload) : {};
      var val = options.statusCode || 200;
      debug(err, "> Lambda[" + v + "].StatusCode =", val);
      var message = function() {
        try {
          return options.body && "string" == typeof options.body ? JSON.parse(options.body) : options.body;
        } catch (r) {
          return options.body;
        }
      }();
      return 400 == val || 404 == val ? Promise.reject(new Error(message || "404 NOT FOUND")) : 200 !== val ? "string" == typeof message && 0 <= message.indexOf("404 NOT FOUND") ? Promise.reject(new Error(message || "404 NOT FOUND")) : Promise.reject(new Error(message || "Lambda Error. status:" + val)) : message;
    });
  }
  key = key || "LS";
  var api = options.U;
  var aws = options.aws;
  var originalOptions = options._;
  if (!api) {
    throw new Error("$U is required!");
  }
  if (!aws) {
    throw new Error("$aws is required!");
  }
  if (!originalOptions) {
    throw new Error("$_ is required!");
  }
  if (!require("url")) {
    throw new Error("URL is required!");
  }
  if (!require("query-string")) {
    throw new Error("query-string is required!");
  }
  var debug = options.log;
  var done = (options.inf, options.err);
  var err = api.NS(key, "magenta");
  var argv = {
    do_get : function(cb, host, callback, args, opts, doc) {
      return next("GET", cb, host, callback, args, opts, doc);
    },
    do_post : function(r, path, data, options, body, url) {
      return next("POST", r, path, data, options, body, url);
    },
    do_put : function(req, info, url, callback, deferred, reject) {
      return next("PUT", req, info, url, callback, deferred, reject);
    },
    do_delete : function(cb, args, body, callback, settings, opts) {
      return next("DELETE", cb, args, body, callback, settings, opts);
    }
  };
  options(key, argv);
  var config = {
    region : api.env("LD_REGION", "ap-northeast-2")
  };
  if (api.env("LD_ENDPOINT")) {
    config.endpoint = api.env("LD_ENDPOINT");
  }
  debug(err, "!config=", config);
  /**
   * @param {string} id
   * @return {?}
   */
  var render = function(id) {
    var dimension = api.env("LD_CONFIG", new Error("env:LD_CONFIG is required!"));
    if (dimension instanceof Error) {
      throw dimension;
    }
    /**
     * @param {string} b
     * @return {?}
     */
    var o = function(b) {
      return b && b.trim() || "";
    };
    var asset = dimension.split(",").map(o).reduce(function(request, clusterShardData) {
      var key = clusterShardData.split("=", 2).map(o);
      var path = _slicedToArray(key, 2);
      var property = path[0];
      var token = path[1];
      return request[property] = token, request;
    }, {})[id];
    if (!asset) {
      if (id.startsWith("lemon-") && 0 < id.indexOf("-api-prod-")) {
        return id;
      }
      throw new Error("Unknown Lambda Func-Name:" + id + ", See env.LD_CONFIG!");
    }
    return asset;
  };
  return argv;
};

