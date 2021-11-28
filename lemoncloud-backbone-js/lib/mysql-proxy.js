"use strict";module.exports=function(t,n){n=n||"MS";var r=t.U;if(!r)throw new Error("$U is required!");var u=r.NS(n,"blue"),e=(t.log,t.inf,t.err,{do_get_last_id:function(r){return d().do_get(r,"0","last-id").then(function(r){return r.result})},do_get_next_id:function(r){return d().do_get(r,"0","next-id").then(function(r){return r.result})},do_create_id_seq:function(r,e){var t=e?{next:e}:null;return d().do_get(r,"0","create-id",t).then(function(r){return r.result})},do_delete_id_seq:function(r){return d().do_get(r,"0","delete-id").then(function(r){return r.result})},do_promise_query:function(r,e){if(!r)return Promise.reject(new Error(u+"parameter:query is required"));if(e&&!Array.isArray(e))return Promise.reject(new Error(u+"parameter:values should be array!"));var t={query:r,values:e};return d().do_get("#","0","query",t).then(function(r){return r.result})},do_save_node:function(r,e,t){return Promise.reject(new Error("404 NOT FOUND - NOT IMPLEMENTED!"))},do_save_node_hist:function(r,e,t){return Promise.reject(new Error("404 NOT FOUND - NOT IMPLEMENTED!"))},do_read_node:function(r,e){return Promise.reject(new Error("404 NOT FOUND - NOT IMPLEMENTED!"))},do_test_self:function(r){return r}});t(n,e);var o=r.env("MS_ENDPOINT"),i=require("./http-proxy"),d=function(){if(!o)throw new Error("env:MS_ENDPOINT is required!");var r="X"+n,e=t(r);return e||i(t,r,o)};r.is_dev;return e};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "MS";
  var target = p.U;
  if (!target) {
    throw new Error("$U is required!");
  }
  var result = target.NS(value, "blue");
  var val = (p.log, p.inf, p.err, {
    do_get_last_id : function(deploymentVersionId) {
      return makeScrollBarDecorator().do_get(deploymentVersionId, "0", "last-id").then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_get_next_id : function(deploymentVersionId) {
      return makeScrollBarDecorator().do_get(deploymentVersionId, "0", "next-id").then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_create_id_seq : function(shareholderMailAddress, writePermission) {
      /** @type {(null|{next: ??})} */
      var customerGroupKey = writePermission ? {
        next : writePermission
      } : null;
      return makeScrollBarDecorator().do_get(shareholderMailAddress, "0", "create-id", customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_delete_id_seq : function(deploymentVersionId) {
      return makeScrollBarDecorator().do_get(deploymentVersionId, "0", "delete-id").then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_promise_query : function(identifyUser, cb) {
      if (!identifyUser) {
        return Promise.reject(new Error(result + "parameter:query is required"));
      }
      if (cb && !Array.isArray(cb)) {
        return Promise.reject(new Error(result + "parameter:values should be array!"));
      }
      var query = {
        query : identifyUser,
        values : cb
      };
      return makeScrollBarDecorator().do_get("#", "0", "query", query).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_save_node : function(branchData, beforeZero, afterZero) {
      return Promise.reject(new Error("404 NOT FOUND - NOT IMPLEMENTED!"));
    },
    do_save_node_hist : function(branchData, beforeZero, afterZero) {
      return Promise.reject(new Error("404 NOT FOUND - NOT IMPLEMENTED!"));
    },
    do_read_node : function(formatters, customFormatters) {
      return Promise.reject(new Error("404 NOT FOUND - NOT IMPLEMENTED!"));
    },
    do_test_self : function(canCreateDiscussions) {
      return canCreateDiscussions;
    }
  });
  p(value, val);
  var opToInsert = target.env("MS_ENDPOINT");
  var create = require("./http-proxy");
  /**
   * @return {?}
   */
  var makeScrollBarDecorator = function() {
    if (!opToInsert) {
      throw new Error("env:MS_ENDPOINT is required!");
    }
    var data = "X" + value;
    var res = p(data);
    return res || create(p, data, opToInsert);
  };
  target.is_dev;
  return val;
};

