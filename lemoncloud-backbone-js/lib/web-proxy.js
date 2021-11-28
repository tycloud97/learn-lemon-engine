"use strict";module.exports=function(o,t){t=t||"WS";var r=o.U,e=o._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");var n=r.NS(t,"yellow"),i=(o.log,o.inf,o.err,{do_get:function(r,e,o,t,i){return i?Promise.reject(new Error(n+":$body is invalid!")):void 0===r?Promise.reject(new Error(n+":host is required!")):s().do_get(r,e,void 0,t,i).then(function(r){return r.result})},do_post:function(r,e,o,t,i){return void 0===r?Promise.reject(new Error(n+":host is required!")):s().do_post(r,e,void 0,t,i).then(function(r){return r.result})},do_put:function(r,e,o,t,i){return void 0===r?Promise.reject(new Error(n+":host is required!")):s().do_put(r,e,void 0,t,i).then(function(r){return r.result})},do_delete:function(r,e,o,t,i){return void 0===r?Promise.reject(new Error(n+":host is required!")):s().do_delete(r,e,void 0,t,i).then(function(r){return r.result})}});o(t,i);var u=r.env("WS_ENDPOINT"),d=require("./http-proxy"),s=function(){if(!u)throw new Error("env:WS_ENDPOINT is required!");var r="X"+t,e=o(r);return e||d(o,r,u)};return i};'use strict';
/**
 * @param {!Object} node
 * @param {string} id
 * @return {?}
 */
module.exports = function(node, id) {
  id = id || "WS";
  var self = node.U;
  var s = node._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!s) {
    throw new Error("$_ is required!");
  }
  var msg = self.NS(id, "yellow");
  var child = (node.log, node.inf, node.err, {
    do_get : function(args, doc, callback, opts, cb) {
      return cb ? Promise.reject(new Error(msg + ":$body is invalid!")) : void 0 === args ? Promise.reject(new Error(msg + ":host is required!")) : format().do_get(args, doc, void 0, opts, cb).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_post : function(data, options, url, body, done) {
      return void 0 === data ? Promise.reject(new Error(msg + ":host is required!")) : format().do_post(data, options, void 0, body, done).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_put : function(next, url, resolve, args, req) {
      return void 0 === next ? Promise.reject(new Error(msg + ":host is required!")) : format().do_put(next, url, void 0, args, req).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_delete : function(cb, opts, op, callback, args) {
      return void 0 === cb ? Promise.reject(new Error(msg + ":host is required!")) : format().do_delete(cb, opts, void 0, callback, args).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    }
  });
  node(id, child);
  var start = self.env("WS_ENDPOINT");
  var reduce = require("./http-proxy");
  /**
   * @return {?}
   */
  var format = function() {
    if (!start) {
      throw new Error("env:WS_ENDPOINT is required!");
    }
    var key = "X" + id;
    var result = node(key);
    return result || reduce(node, key, start);
  };
  return child;
};

