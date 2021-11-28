"use strict";module.exports=function(t,i){i=i||"RS";var n=t.U,e=t._;if(!n)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");var s=n.NS(i,"yellow"),u=t.log,r=(t.inf,t.err,{do_sendMessage:function(e,r,t){if(!e)return Promise.reject("TYPE is required!");if(!r)return Promise.reject("$attrs is required!");if(!t)return Promise.reject("$data is required!");var i=Object.assign({},r||{});return c().do_put(e,"0",void 0,i,t).then(function(e){return e.result})},do_receiveMessage:function(e,r){if(r=n.N(r,1),!e)return Promise.reject("TYPE is required!");if(!r)return Promise.reject("size is required!");var t=Object.assign({},{});return t.size=r,c().do_get(e,"0",void 0,t).then(function(e){return e.result})},do_deleteMessage:function(e,r){if(!e)return Promise.reject("TYPE is required!");if(!r)return Promise.reject("handle is required!");Object.assign({},{});return c().do_delete(e,r,void 0).then(function(e){return e.result})},do_statistics:function(e,r){if(!e)return Promise.reject("TYPE is required!");Object.assign({},{});return c().do_get(e,"0","stat").then(function(e){return e.result})},do_test_self:function(e){u(s,"do_test_self()... param=",e=e||{});var r=Object.assign({},e||{});return c().do_get("#","0","test-self",r).then(function(e){return e.result})}});t(i,r);var o=n.env("SS_ENDPOINT"),d=require("./http-proxy"),c=function(){if(!o)throw new Error("env:SS_ENDPOINT is required!");var e="X"+i,r=t(e);return r||d(t,e,o)};return r};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "RS";
  var ret = p.U;
  var _ = p._;
  if (!ret) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var msg = ret.NS(value, "yellow");
  var f = p.log;
  var val = (p.inf, p.err, {
    do_sendMessage : function(goal, l10n, alwaysDownload) {
      if (!goal) {
        return Promise.reject("TYPE is required!");
      }
      if (!l10n) {
        return Promise.reject("$attrs is required!");
      }
      if (!alwaysDownload) {
        return Promise.reject("$data is required!");
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, l10n || {});
      return c().do_put(goal, "0", void 0, customerGroupKey, alwaysDownload).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_receiveMessage : function(s, v) {
      if (v = ret.N(v, 1), !s) {
        return Promise.reject("TYPE is required!");
      }
      if (!v) {
        return Promise.reject("size is required!");
      }
      /** @type {!Object} */
      var inline = Object.assign({}, {});
      return inline.size = v, c().do_get(s, "0", void 0, inline).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_deleteMessage : function(provider, httpOptions) {
      if (!provider) {
        return Promise.reject("TYPE is required!");
      }
      if (!httpOptions) {
        return Promise.reject("handle is required!");
      }
      Object.assign({}, {});
      return c().do_delete(provider, httpOptions, void 0).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_statistics : function(shareholderMailAddress, writePermission) {
      if (!shareholderMailAddress) {
        return Promise.reject("TYPE is required!");
      }
      Object.assign({}, {});
      return c().do_get(shareholderMailAddress, "0", "stat").then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_test_self : function(types) {
      f(msg, "do_test_self()... param=", types = types || {});
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, types || {});
      return c().do_get("#", "0", "test-self", customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    }
  });
  p(value, val);
  var r = ret.env("SS_ENDPOINT");
  var d = require("./http-proxy");
  /**
   * @return {?}
   */
  var c = function() {
    if (!r) {
      throw new Error("env:SS_ENDPOINT is required!");
    }
    var key = "X" + value;
    var v = p(key);
    return v || d(p, key, r);
  };
  return val;
};

