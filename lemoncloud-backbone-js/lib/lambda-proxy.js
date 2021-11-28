"use strict";module.exports=function(t,n){n=n||"LS";var r=t.U,e=t._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");var u=r.NS(n,"yellow"),o=(t.log,t.inf,t.err,{do_get:function(r,e,t,n,o,i){return r?o?Promise.reject(new Error(u+":$body is invalid!")):d().do_get(r,e,t,n,o,i).then(function(r){return r.result}):Promise.reject(new Error("TYPE is required"))},do_post:function(r,e,t,n,o,i){return r?d().do_post(r,e,t,n,o,i).then(function(r){return r.result}):Promise.reject(new Error("TYPE is required"))},do_put:function(r,e,t,n,o,i){return r?d().do_put(r,e,t,n,o,i).then(function(r){return r.result}):Promise.reject(new Error("TYPE is required"))},do_delete:function(r,e,t,n,o,i){return r?d().do_delete(r,e,t,n,o,i).then(function(r){return r.result}):Promise.reject(new Error("TYPE is required"))}});t(n,o);var i=r.env("LS_ENDPOINT"),s=require("./http-proxy"),d=function(){if(!i)throw new Error("env:LS_ENDPOINT is required!");var r="X"+n,e=t(r);return e||s(t,r,i)};return o};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "LS";
  var self = p.U;
  var _ = p._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var msg = self.NS(value, "yellow");
  var val = (p.log, p.inf, p.err, {
    do_get : function(callback, args, doc, cb, next, opts) {
      return callback ? next ? Promise.reject(new Error(msg + ":$body is invalid!")) : format().do_get(callback, args, doc, cb, next, opts).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("TYPE is required"));
    },
    do_post : function(path, url, body, done, data, options) {
      return path ? format().do_post(path, url, body, done, data, options).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("TYPE is required"));
    },
    do_put : function(info, req, next, url, resolve, reject) {
      return info ? format().do_put(info, req, next, url, resolve, reject).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("TYPE is required"));
    },
    do_delete : function(cb, opts, args, op, callback, guid) {
      return cb ? format().do_delete(cb, opts, args, op, callback, guid).then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("TYPE is required"));
    }
  });
  p(value, val);
  var alwaysDownload = self.env("LS_ENDPOINT");
  var isNaN = require("./http-proxy");
  /**
   * @return {?}
   */
  var format = function() {
    if (!alwaysDownload) {
      throw new Error("env:LS_ENDPOINT is required!");
    }
    var key = "X" + value;
    var v = p(key);
    return v || isNaN(p, key, alwaysDownload);
  };
  return val;
};

