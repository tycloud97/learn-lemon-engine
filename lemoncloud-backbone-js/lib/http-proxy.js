"use strict";module.exports=function(r,e,o){e=e||"HS";var i=r.U,n=r._;if(!i)throw new Error("$U is required!");if(!n)throw new Error("$_ is required!");var c=i.NS(e,"magenta"),f=o,w=require("request"),m=require("query-string");if(!f)throw new Error("endpoint is required!");if(!w)throw new Error("request is required!");var t={endpoint:o},q=r.log,v=(r.inf,r.err);t.do_get=function(r,e,o,i,n){return n?Promise.reject(new Error(c+":$body is invalid!")):void 0===r?Promise.reject(new Error(c+":TYPE is required!")):d("GET",r,e,o,i,n)},t.do_put=function(r,e,o,i,n){return void 0===r?Promise.reject(new Error(c+":TYPE is required!")):void 0===e?Promise.reject(new Error(c+":ID is required!")):d("PUT",r,e,o,i,n)},t.do_post=function(r,e,o,i,n){return void 0===r?Promise.reject(new Error(c+":TYPE is required!")):void 0===e?Promise.reject(new Error(c+":ID is required!")):d("POST",r,e,o,i,n)},t.do_delete=function(r,e,o,i,n){return void 0===r?Promise.reject(new Error(c+":TYPE is required!")):void 0===e?Promise.reject(new Error(c+":ID is required!")):d("DELETE",r,e,o,i,n)},r(e,t);var d=function(r,e,o,i,n,t){if(!r)return Promise.reject(new Error(c+":METHOD is required!"));var d=n?m.stringify(n):"",s=f+(void 0===e?"":"/"+encodeURIComponent(e))+(void 0===o?"":"/"+encodeURIComponent(o))+(void 0===i?"":"/"+encodeURIComponent(i))+(d?"?"+d:""),u=w,E={method:r||"GET",uri:s,body:t,json:"string"!=typeof t};return q(c,"*",E.method,s),new Promise(function(t,d){u(E,function(r,e,o){if(r&&v(c,">>>>> requested! err=",r),r)return d(r);var i=e.statusCode,n=e.statusMessage;if(200!==i)return q(c,"> code="+i+", msg="+n+", body=",o),d("string"==typeof(o=o||n)?new Error(o):o);t(o)})})};return t};'use strict';
/**
 * @param {!Object} p
 * @param {string} result
 * @param {string} url
 * @return {?}
 */
module.exports = function(p, result, url) {
  result = result || "HS";
  var parent = p.U;
  var _ = p._;
  if (!parent) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var item = parent.NS(result, "magenta");
  /** @type {string} */
  var str = url;
  var problem = require("request");
  var query = require("query-string");
  if (!str) {
    throw new Error("endpoint is required!");
  }
  if (!problem) {
    throw new Error("request is required!");
  }
  var options = {
    endpoint : url
  };
  var f = p.log;
  var callback = (p.inf, p.err);
  /**
   * @param {!Array} number
   * @param {!Array} args
   * @param {!Array} c
   * @param {string} t
   * @param {!Array} s
   * @return {?}
   */
  options.do_get = function(number, args, c, t, s) {
    return s ? Promise.reject(new Error(item + ":$body is invalid!")) : void 0 === number ? Promise.reject(new Error(item + ":TYPE is required!")) : format("GET", number, args, c, t, s);
  };
  /**
   * @param {!Array} next
   * @param {!Array} username
   * @param {!Array} info
   * @param {string} url
   * @param {!Array} s
   * @return {?}
   */
  options.do_put = function(next, username, info, url, s) {
    return void 0 === next ? Promise.reject(new Error(item + ":TYPE is required!")) : void 0 === username ? Promise.reject(new Error(item + ":ID is required!")) : format("PUT", next, username, info, url, s);
  };
  /**
   * @param {!Array} r
   * @param {!Array} path
   * @param {!Array} data
   * @param {string} url
   * @param {!Array} s
   * @return {?}
   */
  options.do_post = function(r, path, data, url, s) {
    return void 0 === r ? Promise.reject(new Error(item + ":TYPE is required!")) : void 0 === path ? Promise.reject(new Error(item + ":ID is required!")) : format("POST", r, path, data, url, s);
  };
  /**
   * @param {!Array} opts
   * @param {!Array} args
   * @param {!Array} style
   * @param {string} i
   * @param {!Array} s
   * @return {?}
   */
  options.do_delete = function(opts, args, style, i, s) {
    return void 0 === opts ? Promise.reject(new Error(item + ":TYPE is required!")) : void 0 === args ? Promise.reject(new Error(item + ":ID is required!")) : format("DELETE", opts, args, style, i, s);
  };
  p(result, options);
  /**
   * @param {string} method
   * @param {!Array} id
   * @param {!Array} key
   * @param {!Array} hash
   * @param {string} n
   * @param {!Array} val
   * @return {?}
   */
  var format = function(method, id, key, hash, n, val) {
    if (!method) {
      return Promise.reject(new Error(item + ":METHOD is required!"));
    }
    var size = n ? query.stringify(n) : "";
    /** @type {string} */
    var source = str + (void 0 === id ? "" : "/" + encodeURIComponent(id)) + (void 0 === key ? "" : "/" + encodeURIComponent(key)) + (void 0 === hash ? "" : "/" + encodeURIComponent(hash)) + (size ? "?" + size : "");
    var defaults = problem;
    var options = {
      method : method || "GET",
      uri : source,
      body : val,
      json : "string" != typeof val
    };
    return f(item, "*", options.method, source), new Promise(function(makeLinkCb, eq) {
      defaults(options, function(data, resp, a) {
        if (data && callback(item, ">>>>> requested! err=", data), data) {
          return eq(data);
        }
        var code = resp.statusCode;
        var b = resp.statusMessage;
        if (200 !== code) {
          return f(item, "> code=" + code + ", msg=" + b + ", body=", a), eq("string" == typeof(a = a || b) ? new Error(a) : a);
        }
        makeLinkCb(a);
      });
    });
  };
  return options;
};

