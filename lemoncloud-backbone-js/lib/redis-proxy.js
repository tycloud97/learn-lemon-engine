"use strict";module.exports=function(i,t){t=t||"RS";var r=i.U,e=i._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");var o=r.NS(t,"yellow"),n=i.log,u=(i.inf,i.err,{do_create_item:function(r,e,i,t){if(!r)return Promise.reject(new Error(o+"PKEY is required!"));if(!e)return Promise.reject(new Error(o+"id is required!"));if(!i)return Promise.reject(new Error(o+"item is required!"));Array.isArray(r)&&(r=r.join("+"));var n=Object.assign({},{});return n.timeout=t,c().do_post(r,e,void 0,n,i).then(function(r){return r.result})},do_get_item:function(r,e){if(!r)return Promise.reject(new Error(o+"PKEY is required!"));if(!e)return Promise.reject(new Error(o+"id is required!"));Array.isArray(r)&&(r=r.join("+"));Object.assign({},{});return c().do_get(r,e).then(function(r){return r.result})},do_delete_item:function(r,e){if(!r)return Promise.reject(new Error(o+"PKEY is required!"));if(!e)return Promise.reject(new Error(o+"id is required!"));Array.isArray(r)&&(r=r.join("+"));var i=Object.assign({},{});return c().do_delete(r,e,void 0,i).then(function(r){return r.result})},do_update_item:function(r,e,i){if(!r)return Promise.reject(new Error(o+"PKEY is required!"));if(!e)return Promise.reject(new Error(o+"id is required!"));if(!i)return Promise.reject(new Error(o+"item is required!"));Array.isArray(r)&&(r=r.join("+"));var t=Object.assign({},{});return c().do_put(r,e,void 0,t,i).then(function(r){return r.result})},do_test_self:function(r){n(o,"do_test_self()... param=",r=r||{});var e=Object.assign({},r||{});return c().do_get("#","0","test-self",e).then(function(r){return r.result})}});i(t,u);var s=r.env("RS_ENDPOINT"),d=require("./http-proxy"),c=function(){if(!s)throw new Error("env:RS_ENDPOINT is required!");var r="X"+t,e=i(r);return e||d(i,r,s)};return u};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "RS";
  var self = p.U;
  var _ = p._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  var msg = self.NS(value, "yellow");
  var f = p.log;
  var val = (p.inf, p.err, {
    do_create_item : function(pref, value, type, num) {
      if (!pref) {
        return Promise.reject(new Error(msg + "PKEY is required!"));
      }
      if (!value) {
        return Promise.reject(new Error(msg + "id is required!"));
      }
      if (!type) {
        return Promise.reject(new Error(msg + "item is required!"));
      }
      if (Array.isArray(pref)) {
        pref = pref.join("+");
      }
      /** @type {!Object} */
      var state = Object.assign({}, {});
      return state.timeout = num, c().do_post(pref, value, void 0, state, type).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_get_item : function(pref, type) {
      if (!pref) {
        return Promise.reject(new Error(msg + "PKEY is required!"));
      }
      if (!type) {
        return Promise.reject(new Error(msg + "id is required!"));
      }
      if (Array.isArray(pref)) {
        pref = pref.join("+");
      }
      Object.assign({}, {});
      return c().do_get(pref, type).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_delete_item : function(pref, type) {
      if (!pref) {
        return Promise.reject(new Error(msg + "PKEY is required!"));
      }
      if (!type) {
        return Promise.reject(new Error(msg + "id is required!"));
      }
      if (Array.isArray(pref)) {
        pref = pref.join("+");
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, {});
      return c().do_delete(pref, type, void 0, customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_update_item : function(pref, value, params) {
      if (!pref) {
        return Promise.reject(new Error(msg + "PKEY is required!"));
      }
      if (!value) {
        return Promise.reject(new Error(msg + "id is required!"));
      }
      if (!params) {
        return Promise.reject(new Error(msg + "item is required!"));
      }
      if (Array.isArray(pref)) {
        pref = pref.join("+");
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, {});
      return c().do_put(pref, value, void 0, customerGroupKey, params).then(function(jptResponseObj) {
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
  var r = self.env("RS_ENDPOINT");
  var d = require("./http-proxy");
  /**
   * @return {?}
   */
  var c = function() {
    if (!r) {
      throw new Error("env:RS_ENDPOINT is required!");
    }
    var key = "X" + value;
    var v = p(key);
    return v || d(p, key, r);
  };
  return val;
};

