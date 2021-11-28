"use strict";module.exports=function(t,i){i=i||"SN";var r=t.U,e=t._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");var n=r.NS(i,"yellow"),s=t.log,u=(t.inf,t.err,{do_publish:function(r,e,t){if(!r)return Promise.reject("snsId is required!");if(!e)return Promise.reject("subject is required!");if(!t)return Promise.reject("payload is required!");var i=Object.assign({},{});return i.subject=e,d().do_post(r,"0",void 0,i,t).then(function(r){return r.result})},do_test_self:function(r){s(n,"do_test_self()... param=",r=r||{});var e=Object.assign({},r||{});return d().do_get("#","0","test-self",e).then(function(r){return r.result})}});t(i,u);var o=r.env("SN_ENDPOINT"),f=require("./http-proxy"),d=function(){if(!o)throw new Error("env:SN_ENDPOINT is required!");var r="X"+i,e=t(r);return e||f(t,r,o)};return u};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "SN";
  var self = p.U;
  var _ = p._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var msg = self.NS(value, "yellow");
  var l = p.log;
  var val = (p.inf, p.err, {
    do_publish : function(args, cb, opts) {
      if (!args) {
        return Promise.reject("snsId is required!");
      }
      if (!cb) {
        return Promise.reject("subject is required!");
      }
      if (!opts) {
        return Promise.reject("payload is required!");
      }
      /** @type {!Object} */
      var state = Object.assign({}, {});
      return state.subject = cb, format().do_post(args, "0", void 0, state, opts).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_test_self : function(types) {
      l(msg, "do_test_self()... param=", types = types || {});
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, types || {});
      return format().do_get("#", "0", "test-self", customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    }
  });
  p(value, val);
  var was_new = self.env("SN_ENDPOINT");
  var f = require("./http-proxy");
  /**
   * @return {?}
   */
  var format = function() {
    if (!was_new) {
      throw new Error("env:SN_ENDPOINT is required!");
    }
    var msg = "X" + value;
    var r = p(msg);
    return r || f(p, msg, was_new);
  };
  return val;
};

