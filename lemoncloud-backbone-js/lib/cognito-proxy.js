"use strict";module.exports=function(t,i){i=i||"CS";var r=t.U,e=t._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");r.NS(i,"yellow"),t.log,t.inf,t.err;var u={do_get_user:function(r,e){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject(new Error("userSub is required!"));var t=Object.assign({},{});return s().do_get(r,e,void 0,t).then(function(r){return r.result})},do_get_enable_user:function(r,e){return r?e?s().do_get(r,e,"enable").then(function(r){return r.result}):Promise.reject(new Error("userSub is required!")):Promise.reject(new Error("userPoolId is required!"))},do_get_disable_user:function(r,e){return r?e?s().do_get(r,e,"disable").then(function(r){return r.result}):Promise.reject(new Error("userSub is required!")):Promise.reject(new Error("userPoolId is required!"))},do_get_confirm_user:function(r,e){return r?e?s().do_get(r,e,"confirm").then(function(r){return r.result}):Promise.reject(new Error("userSub is required!")):Promise.reject(new Error("userPoolId is required!"))},do_list_user:function(r,e,t,i){if(!r)return Promise.reject(new Error("userPoolId is required!"));var u=Object.assign({},{});i&&(u.limit=i);e&&(u[e]=t);return s().do_get(r,void 0,void 0,u).then(function(r){return r.result})},do_update_user:function(r,e,t){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject(new Error("userSub is required!"));if(!t)return Promise.reject(new Error("$attr is required!"));var i=Object.assign({},{}),u=Object.assign({},t||{});return s().do_put(r,e,void 0,i,u).then(function(r){return r.result})},do_list_group:function(r,e){if(!r)return Promise.reject(new Error("userPoolId is required!"));var t=Object.assign({},{});e&&(t.limit=e);return s().do_get(r,"!",void 0,t).then(function(r){return r.result})},do_get_group:function(r,e){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject("groupId is required!");var t=Object.assign({},{});return s().do_get(r,"!"+e,void 0,t).then(function(r){return r.result})},do_add_user_to_group:function(r,e,t){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject("groupId is required!");if(!t)return Promise.reject("userId is required!");var i=Object.assign({},{}),u={user:t};return s().do_post(r,"!"+e,"user",i,u).then(function(r){return r.result})},do_create_group:function(r,e,t){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject("groupName is required!");var i=Object.assign({},{}),u={description:t};return s().do_post(r,"!"+e,void 0,i,u).then(function(r){return r.result})}};t(i,u);var o=r.env("CS_ENDPOINT"),n=require("./http-proxy"),s=function(){if(!o)throw new Error("env:CS_ENDPOINT is required!");var r="X"+i,e=t(r);return e||n(t,r,o)};return u};'use strict';
/**
 * @param {!Object} p
 * @param {string} value
 * @return {?}
 */
module.exports = function(p, value) {
  value = value || "CS";
  var self = p.U;
  var _ = p._;
  if (!self) {
    throw new Error("$U is required!");
  }
  if (!_) {
    throw new Error("$_ is required!");
  }
  self.NS(value, "yellow");
  p.log;
  p.inf;
  p.err;
  var val = {
    do_get_user : function(provider, httpOptions) {
      if (!provider) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!httpOptions) {
        return Promise.reject(new Error("userSub is required!"));
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, {});
      return retry().do_get(provider, httpOptions, void 0, customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_get_enable_user : function(f, platform) {
      return f ? platform ? retry().do_get(f, platform, "enable").then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("userSub is required!")) : Promise.reject(new Error("userPoolId is required!"));
    },
    do_get_disable_user : function(f, platform) {
      return f ? platform ? retry().do_get(f, platform, "disable").then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("userSub is required!")) : Promise.reject(new Error("userPoolId is required!"));
    },
    do_get_confirm_user : function(f, platform) {
      return f ? platform ? retry().do_get(f, platform, "confirm").then(function(jptResponseObj) {
        return jptResponseObj.result;
      }) : Promise.reject(new Error("userSub is required!")) : Promise.reject(new Error("userPoolId is required!"));
    },
    do_list_user : function(verifier, serviceName, now, value) {
      if (!verifier) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      /** @type {!Object} */
      var data = Object.assign({}, {});
      if (value) {
        /** @type {number} */
        data.limit = value;
      }
      if (serviceName) {
        data[serviceName] = now;
      }
      return retry().do_get(verifier, void 0, void 0, data).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_update_user : function(result, template, l10n) {
      if (!result) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!template) {
        return Promise.reject(new Error("userSub is required!"));
      }
      if (!l10n) {
        return Promise.reject(new Error("$attr is required!"));
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, {});
      /** @type {!Object} */
      var alwaysDownload = Object.assign({}, l10n || {});
      return retry().do_put(result, template, void 0, customerGroupKey, alwaysDownload).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_list_group : function(filterConcept, limit) {
      if (!filterConcept) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      /** @type {!Object} */
      var populate = Object.assign({}, {});
      if (limit) {
        /** @type {number} */
        populate.limit = limit;
      }
      return retry().do_get(filterConcept, "!", void 0, populate).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_get_group : function(shareholderMailAddress, writePermission) {
      if (!shareholderMailAddress) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!writePermission) {
        return Promise.reject("groupId is required!");
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, {});
      return retry().do_get(shareholderMailAddress, "!" + writePermission, void 0, customerGroupKey).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_add_user_to_group : function(pollId, pollProfileId, userId) {
      if (!pollId) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!pollProfileId) {
        return Promise.reject("groupId is required!");
      }
      if (!userId) {
        return Promise.reject("userId is required!");
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, {});
      var extra = {
        user : userId
      };
      return retry().do_post(pollId, "!" + pollProfileId, "user", customerGroupKey, extra).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    },
    do_create_group : function(data, linkedEntities, force) {
      if (!data) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!linkedEntities) {
        return Promise.reject("groupName is required!");
      }
      /** @type {!Object} */
      var customerGroupKey = Object.assign({}, {});
      var schema = {
        description : force
      };
      return retry().do_post(data, "!" + linkedEntities, void 0, customerGroupKey, schema).then(function(jptResponseObj) {
        return jptResponseObj.result;
      });
    }
  };
  p(value, val);
  var key = self.env("CS_ENDPOINT");
  var test = require("./http-proxy");
  /**
   * @return {?}
   */
  var retry = function() {
    if (!key) {
      throw new Error("env:CS_ENDPOINT is required!");
    }
    var name = "X" + value;
    var result = p(name);
    return result || test(p, name, key);
  };
  return val;
};

