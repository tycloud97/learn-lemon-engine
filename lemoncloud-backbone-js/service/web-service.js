"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};module.exports=function(r,e){e=e||"SS";var t=r.U,o=r._;if(!t)throw new Error("$U is required!");if(!o)throw new Error("$_ is required!");var y=r.log,a=(r.inf,r.err),m=t.NS(e,"magenta"),i={do_get:function(r,e,t,o,i){return void 0===r?Promise.reject(new Error(m+":host is required!")):n("GET",r,e,t,o,i)},do_post:function(r,e,t,o,i){return void 0===r?Promise.reject(new Error(m+":host is required!")):n("POST",r,e,t,o,i)},do_put:function(r,e,t,o,i){return void 0===r?Promise.reject(new Error(m+":host is required!")):n("PUT",r,e,t,o,i)},do_delete:function(r,e,t,o,i){return void 0===r?Promise.reject(new Error(m+":host is required!")):n("DELETE",r,e,t,o,i)}};r(e,i);var n=function(r,e,t,o,i,n){if(e=(e||"").toLowerCase(),!r)return Promise.reject(new Error(m+":METHOD is required!"));if(7<e.lastIndexOf("/"))return Promise.reject(new Error(m+":HOST is invalid. HOST:"+e));e.startsWith("http")||(e="http://"+e);var u=require("request"),s=require("query-string"),d=i&&"object"===(void 0===i?"undefined":_typeof(i))?s.stringify(i):""+i,f=e+(void 0===t?"":t)+(d?"?"+d:""),c={method:r,uri:f,body:n,json:"string"!=typeof n};return y(m," web :=",c.method,f),new Promise(function(n,s){u(c,function(r,e,t){if(r&&a(m,">>>>> requested! err=",r),r)return s(new Error(r));var o=e.statusCode,i=e.statusMessage;if(200!==o)return y(m,"> code="+o+", msg="+i+", body=",t),s({statusCode:o,statusMessage:i,body:t=t||i});n(t)})})};return i};'use strict';
/** @type {function(?): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(objOrTsid) {
  return typeof objOrTsid;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} p
 * @param {string} index
 * @return {?}
 */
module.exports = function(p, index) {
  index = index || "SS";
  var parent = p.U;
  var _ = p._;
  if (!parent) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var log = p.log;
  var callback = (p.inf, p.err);
  var file = parent.NS(index, "magenta");
  var val = {
    do_get : function(n, args, opts, callback, doc) {
      return void 0 === n ? Promise.reject(new Error(file + ":host is required!")) : format("GET", n, args, opts, callback, doc);
    },
    do_post : function(n, args, data, level, url) {
      return void 0 === n ? Promise.reject(new Error(file + ":host is required!")) : format("POST", n, args, data, level, url);
    },
    do_put : function(n, args, info, url, display) {
      return void 0 === n ? Promise.reject(new Error(file + ":host is required!")) : format("PUT", n, args, info, url, display);
    },
    do_delete : function(n, args, opts, name, display) {
      return void 0 === n ? Promise.reject(new Error(file + ":host is required!")) : format("DELETE", n, args, opts, name, display);
    }
  };
  p(index, val);
  /**
   * @param {string} method
   * @param {!Object} name
   * @param {string} key
   * @param {?} arr
   * @param {?} obj
   * @param {!Array} data
   * @return {?}
   */
  var format = function(method, name, key, arr, obj, data) {
    if (name = (name || "").toLowerCase(), !method) {
      return Promise.reject(new Error(file + ":METHOD is required!"));
    }
    if (7 < name.lastIndexOf("/")) {
      return Promise.reject(new Error(file + ":HOST is invalid. HOST:" + name));
    }
    if (!name.startsWith("http")) {
      /** @type {string} */
      name = "http://" + name;
    }
    var defaults = require("request");
    var queryString = require("query-string");
    var path = obj && "object" === (void 0 === obj ? "undefined" : _typeof(obj)) ? queryString.stringify(obj) : "" + obj;
    /** @type {string} */
    var url = name + (void 0 === key ? "" : key) + (path ? "?" + path : "");
    var options = {
      method : method,
      uri : url,
      body : data,
      json : "string" != typeof data
    };
    return log(file, " web :=", options.method, url), new Promise(function(opt_function, callback) {
      defaults(options, function(data, response, n) {
        if (data && callback(file, ">>>>> requested! err=", data), data) {
          return callback(new Error(data));
        }
        var statusCode = response.statusCode;
        var max = response.statusMessage;
        if (200 !== statusCode) {
          return log(file, "> code=" + statusCode + ", msg=" + max + ", body=", n), callback({
            statusCode : statusCode,
            statusMessage : max,
            body : n = n || max
          });
        }
        opt_function(n);
      });
    });
  };
  return val;
};

