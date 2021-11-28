"use strict";var _slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],i=!0,o=!1,n=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done)&&(t.push(s.value),!e||t.length!==e);i=!0);}catch(r){o=!0,n=r}finally{try{!i&&u.return&&u.return()}finally{if(o)throw n}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};module.exports=function(r,e){e=e||"CS";var n=r.U,t=r.aws,i=r._;if(!n)throw new Error("$U is required!");if(!t)throw new Error("$aws is required!");if(!i)throw new Error("$_ is required!");var s=r.log,u=(r.inf,r.err),a=n.NS(e,"magenta"),o={do_get_user:function(t,i){if(!t)return Promise.reject(new Error("userPoolId is required!"));if(!i)return Promise.reject(new Error("userSub is required!"));var r={UserPoolId:t=m(t),Filter:'sub = "'+i+'"',Limit:1};i&&/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(i)?r.Filter='email = "'+i+'"':n.N(i,0)==i&&(r.Filter="given_name = "+i);return s(a,"> user.filter=",r),d.listUsers(r).promise().then(function(r){s(a,"> "+t+".res=",r);var e=r&&r.Users||[];return!e||e.length<1?Promise.reject(new Error("404 NOT FOUND - sub:"+i)):e[0]}).then(f).catch(function(r){throw u(a,"ERR! getUser:",r),r})},do_get_enable_user:function(e,t){if(!e)return Promise.reject(new Error("userPoolId is required!"));if(!t)return Promise.reject(new Error("userSub is required!"));var r={UserPoolId:e=m(e),Username:t};return d.adminEnableUser(r).promise().then(function(r){return s(a,"> "+e+".res=",r),r}).catch(function(r){var e=r&&r.message||"";if(e.startsWith("User does not exist"))return Promise.reject(new Error("404 NOT FOUND - UserName:"+t));throw u(a,"ERR! adminEnableUser:",r),r})},do_get_disable_user:function(e,t){if(!e)return Promise.reject(new Error("userPoolId is required!"));if(!t)return Promise.reject(new Error("userSub is required!"));var r={UserPoolId:e=m(e),Username:t};return d.adminDisableUser(r).promise().then(function(r){return s(a,"> "+e+".res=",r),r}).catch(function(r){var e=r&&r.message||"";if(e.startsWith("User does not exist"))return Promise.reject(new Error("404 NOT FOUND - UserName:"+t));throw u(a,"ERR! adminDisableUser:",r),r})},do_get_confirm_user:function(e,t){if(!e)return Promise.reject(new Error("userPoolId is required!"));if(!t)return Promise.reject(new Error("userSub is required!"));var r={UserPoolId:e=m(e),Username:t};return d.adminConfirmSignUp(r).promise().then(function(r){return s(a,"> "+e+".res=",r),r}).catch(function(r){var e=r&&r.message||"";if(e.startsWith("User does not exist"))return Promise.reject(new Error("404 NOT FOUND - UserName:"+t));throw u(a,"ERR! adminConfirmSignUp:",r),r})},do_list_user:function(i,r,e,o){if(!i)return Promise.reject(new Error("userPoolId is required!"));i=m(i),o=n.N(o,1);var t={UserPoolId:i,Filter:"",Limit:o};r&&(t.Filter=r+'="'+e+'"');return d.listUsers(t).promise().then(function(r){s(a,"> "+i+".res=",r);var e=r&&r.Users||[],t=e.map(f);return{limit:o,list:t}}).catch(function(r){throw u(a,"ERR! listUsers:",r),r})},do_update_user:function(r,t,o){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!t)return Promise.reject(new Error("userSub is required!"));if(!o)return Promise.reject(new Error("$attr is required!"));var e={UserPoolId:r=m(r),Username:t};if(e.UserAttributes=Object.keys(o).reduce(function(r,e){var t=o[e];if(e.startsWith("custom:"));else{if(void 0===t)return r;if("email"==e||"username"==e)return r}var i={Name:e,Value:t};return r.push(i),r},[]),e.UserAttributes.length<1)return Promise.reject(new Error("valid UserAttributes required!"));return d.adminUpdateUserAttributes(e).promise().then(function(r){return s(a,"> update("+t+").res=",r),r}).catch(function(r){var e=r&&r.message||"";if(e.startsWith("User does not exist"))return Promise.reject(new Error("404 NOT FOUND - UserName:"+t));throw u(a,"ERR! adminUpdateUserAttributes:",r),r})},do_list_group:function(i,o){if(!i)return Promise.reject(new Error("userPoolId is required!"));i=m(i),o=n.N(o,1);var r={UserPoolId:i,Limit:o};return d.listGroups(r).promise().then(function(r){s(a,"> list-group("+i+").res=",r);var e=r&&r.Groups||[],t=e.map(f);return{limit:o,list:t}}).catch(function(r){throw u(a,"ERR! listGroups:",r),r})},do_get_group:function(e,t){if(!e)return Promise.reject(new Error("userPoolId is required!"));if(!t)return Promise.reject(new Error("groupId is required!"));var r={UserPoolId:e=m(e),GroupName:t};return d.getGroup(r).promise().then(function(r){return s(a,"> getGroup("+e+").res=",r),r}).then(f).catch(function(r){var e=r&&r.message||"";if(e.startsWith("Group not found"))return Promise.reject(new Error("404 NOT FOUND - GroupName:"+t));throw u(a,"ERR! getGroup:",r),r})},do_create_group:function(e,r,t){if(!e)return Promise.reject(new Error("userPoolId is required!"));if(!r)return Promise.reject(new Error("groupName is required!"));var i={UserPoolId:e=m(e),GroupName:r};t&&(i.Description=t);return d.createGroup(i).promise().then(function(r){return s(a,"> createGroup("+e+").res=",r),r}).catch(function(r){var e=r&&r.message||"";if(e.startsWith("Group not found"))return Promise.reject(new Error("404 NOT FOUND - GroupName:"+groupId));throw u(a,"ERR! getGroup:",r),r})},do_add_user_to_group:function(e,t,i){if(!e)return Promise.reject(new Error("userPoolId is required!"));if(!t)return Promise.reject(new Error("groupId is required!"));if(!i)return Promise.reject(new Error("userId is required!"));var r={UserPoolId:e=m(e),GroupName:t,Username:i};return d.adminAddUserToGroup(r).promise().then(function(r){return s(a,"> adminAddUserToGroup("+e+").res=",r),r}).then(f).catch(function(r){var e=r&&r.message||"";if(e.startsWith("Group not found"))return Promise.reject(new Error("404 NOT FOUND - GroupName:"+t));if(e.startsWith("User does not exist"))return Promise.reject(new Error("404 NOT FOUND - UserName:"+i));throw u(a,"ERR! getGroup:",r),r})}};r(e,o);var c={region:n.env("CC_REGION",new Error(a+":CC_REGION is required!"))};s(a,"config=",c);var d=new t.CognitoIdentityServiceProvider(c),m=function(r){var e=n.env("CC_POOLSET",new Error(a+":CC_POOLSET is required!"));if(e instanceof Error)throw e;var t=e.split(",").map(function(r){return r.trim()}).reduce(function(r,e){var t=e.split("=",2),i=_slicedToArray(t,2),o=i[0],n=i[1];return r[o]=n,r},{});if(s(a,"> CC_POOLSET=",t),null==t[r])throw new Error(a+": unknown user-pool name:"+r);return t[r]};function f(r){var e=r.Attributes||[];return delete r.Attributes,e.reduce(function(r,e){var t=e.Name||"",i=e.Value||"";return t&&(r[t]=i),r},r),r}return o};'use strict';
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
      var n = void 0;
      try {
        var _s;
        var _iterator3 = set[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (_s = _iterator3.next()).done) && (_arr.push(_s.value), !groupNum || _arr.length !== groupNum); _iteratorNormalCompletion3 = true) {
        }
      } catch (numInternals) {
        /** @type {boolean} */
        o = true;
        n = numInternals;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (o) {
            throw n;
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
   * @param {!Object} response
   * @return {?}
   */
  function callback(response) {
    var responseRejects = response.Attributes || [];
    return delete response.Attributes, responseRejects.reduce(function(resultHash, ch) {
      var id = ch.Name || "";
      var val = ch.Value || "";
      return id && (resultHash[id] = val), resultHash;
    }, response), response;
  }
  key = key || "CS";
  var api = options.U;
  var gzip = options.aws;
  var originalOptions = options._;
  if (!api) {
    throw new Error("$U is required!");
  }
  if (!gzip) {
    throw new Error("$aws is required!");
  }
  if (!originalOptions) {
    throw new Error("$_ is required!");
  }
  var fn = options.log;
  var forIn = (options.inf, options.err);
  var value = api.NS(key, "magenta");
  var argv = {
    do_get_user : function(stylesheet, url) {
      if (!stylesheet) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!url) {
        return Promise.reject(new Error("userSub is required!"));
      }
      var options = {
        UserPoolId : stylesheet = parse(stylesheet),
        Filter : 'sub = "' + url + '"',
        Limit : 1
      };
      if (url && /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i.test(url)) {
        /** @type {string} */
        options.Filter = 'email = "' + url + '"';
      } else {
        if (api.N(url, 0) == url) {
          /** @type {string} */
          options.Filter = "given_name = " + url;
        }
      }
      return fn(value, "> user.filter=", options), client.listUsers(options).promise().then(function(data) {
        fn(value, "> " + stylesheet + ".res=", data);
        var expRecords = data && data.Users || [];
        return !expRecords || expRecords.length < 1 ? Promise.reject(new Error("404 NOT FOUND - sub:" + url)) : expRecords[0];
      }).then(callback).catch(function(result) {
        throw forIn(value, "ERR! getUser:", result), result;
      });
    },
    do_get_enable_user : function(args, username) {
      if (!args) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!username) {
        return Promise.reject(new Error("userSub is required!"));
      }
      var store = {
        UserPoolId : args = parse(args),
        Username : username
      };
      return client.adminEnableUser(store).promise().then(function(res) {
        return fn(value, "> " + args + ".res=", res), res;
      }).catch(function(result) {
        var ogImage = result && result.message || "";
        if (ogImage.startsWith("User does not exist")) {
          return Promise.reject(new Error("404 NOT FOUND - UserName:" + username));
        }
        throw forIn(value, "ERR! adminEnableUser:", result), result;
      });
    },
    do_get_disable_user : function(args, username) {
      if (!args) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!username) {
        return Promise.reject(new Error("userSub is required!"));
      }
      var store = {
        UserPoolId : args = parse(args),
        Username : username
      };
      return client.adminDisableUser(store).promise().then(function(res) {
        return fn(value, "> " + args + ".res=", res), res;
      }).catch(function(result) {
        var ogImage = result && result.message || "";
        if (ogImage.startsWith("User does not exist")) {
          return Promise.reject(new Error("404 NOT FOUND - UserName:" + username));
        }
        throw forIn(value, "ERR! adminDisableUser:", result), result;
      });
    },
    do_get_confirm_user : function(args, username) {
      if (!args) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!username) {
        return Promise.reject(new Error("userSub is required!"));
      }
      var store = {
        UserPoolId : args = parse(args),
        Username : username
      };
      return client.adminConfirmSignUp(store).promise().then(function(res) {
        return fn(value, "> " + args + ".res=", res), res;
      }).catch(function(result) {
        var ogImage = result && result.message || "";
        if (ogImage.startsWith("User does not exist")) {
          return Promise.reject(new Error("404 NOT FOUND - UserName:" + username));
        }
        throw forIn(value, "ERR! adminConfirmSignUp:", result), result;
      });
    },
    do_list_user : function(color, dash_on, dash_off, limit) {
      if (!color) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      color = parse(color);
      limit = api.N(limit, 1);
      var filter = {
        UserPoolId : color,
        Filter : "",
        Limit : limit
      };
      if (dash_on) {
        /** @type {string} */
        filter.Filter = dash_on + '="' + dash_off + '"';
      }
      return client.listUsers(filter).promise().then(function(data) {
        fn(value, "> " + color + ".res=", data);
        var i = data && data.Users || [];
        var spy = i.map(callback);
        return {
          limit : limit,
          list : spy
        };
      }).catch(function(result) {
        throw forIn(value, "ERR! listUsers:", result), result;
      });
    },
    do_update_user : function(event, message, is) {
      if (!event) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!message) {
        return Promise.reject(new Error("userSub is required!"));
      }
      if (!is) {
        return Promise.reject(new Error("$attr is required!"));
      }
      var params = {
        UserPoolId : event = parse(event),
        Username : message
      };
      if (params.UserAttributes = Object.keys(is).reduce(function(array, undefined) {
        var isUndefined = is[undefined];
        if (undefined.startsWith("custom:")) {
        } else {
          if (void 0 === isUndefined) {
            return array;
          }
          if ("email" == undefined || "username" == undefined) {
            return array;
          }
        }
        var item = {
          Name : undefined,
          Value : isUndefined
        };
        return array.push(item), array;
      }, []), params.UserAttributes.length < 1) {
        return Promise.reject(new Error("valid UserAttributes required!"));
      }
      return client.adminUpdateUserAttributes(params).promise().then(function(res) {
        return fn(value, "> update(" + message + ").res=", res), res;
      }).catch(function(result) {
        var ogImage = result && result.message || "";
        if (ogImage.startsWith("User does not exist")) {
          return Promise.reject(new Error("404 NOT FOUND - UserName:" + message));
        }
        throw forIn(value, "ERR! adminUpdateUserAttributes:", result), result;
      });
    },
    do_list_group : function(body, limit) {
      if (!body) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      body = parse(body);
      limit = api.N(limit, 1);
      var params = {
        UserPoolId : body,
        Limit : limit
      };
      return client.listGroups(params).promise().then(function(source) {
        fn(value, "> list-group(" + body + ").res=", source);
        var i = source && source.Groups || [];
        var spy = i.map(callback);
        return {
          limit : limit,
          list : spy
        };
      }).catch(function(result) {
        throw forIn(value, "ERR! listGroups:", result), result;
      });
    },
    do_get_group : function(html, name) {
      if (!html) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!name) {
        return Promise.reject(new Error("groupId is required!"));
      }
      var id = {
        UserPoolId : html = parse(html),
        GroupName : name
      };
      return client.getGroup(id).promise().then(function(res) {
        return fn(value, "> getGroup(" + html + ").res=", res), res;
      }).then(callback).catch(function(result) {
        var ogImage = result && result.message || "";
        if (ogImage.startsWith("Group not found")) {
          return Promise.reject(new Error("404 NOT FOUND - GroupName:" + name));
        }
        throw forIn(value, "ERR! getGroup:", result), result;
      });
    },
    do_create_group : function(html, name, description) {
      if (!html) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!name) {
        return Promise.reject(new Error("groupName is required!"));
      }
      var data = {
        UserPoolId : html = parse(html),
        GroupName : name
      };
      if (description) {
        data.Description = description;
      }
      return client.createGroup(data).promise().then(function(res) {
        return fn(value, "> createGroup(" + html + ").res=", res), res;
      }).catch(function(result) {
        var ogImage = result && result.message || "";
        if (ogImage.startsWith("Group not found")) {
          return Promise.reject(new Error("404 NOT FOUND - GroupName:" + groupId));
        }
        throw forIn(value, "ERR! getGroup:", result), result;
      });
    },
    do_add_user_to_group : function(html, name, username) {
      if (!html) {
        return Promise.reject(new Error("userPoolId is required!"));
      }
      if (!name) {
        return Promise.reject(new Error("groupId is required!"));
      }
      if (!username) {
        return Promise.reject(new Error("userId is required!"));
      }
      var params = {
        UserPoolId : html = parse(html),
        GroupName : name,
        Username : username
      };
      return client.adminAddUserToGroup(params).promise().then(function(res) {
        return fn(value, "> adminAddUserToGroup(" + html + ").res=", res), res;
      }).then(callback).catch(function(result) {
        var ogImage = result && result.message || "";
        if (ogImage.startsWith("Group not found")) {
          return Promise.reject(new Error("404 NOT FOUND - GroupName:" + name));
        }
        if (ogImage.startsWith("User does not exist")) {
          return Promise.reject(new Error("404 NOT FOUND - UserName:" + username));
        }
        throw forIn(value, "ERR! getGroup:", result), result;
      });
    }
  };
  options(key, argv);
  var opts = {
    region : api.env("CC_REGION", new Error(value + ":CC_REGION is required!"))
  };
  fn(value, "config=", opts);
  var client = new gzip.CognitoIdentityServiceProvider(opts);
  /**
   * @param {string} type
   * @return {?}
   */
  var parse = function(type) {
    var dimension = api.env("CC_POOLSET", new Error(value + ":CC_POOLSET is required!"));
    if (dimension instanceof Error) {
      throw dimension;
    }
    var param = dimension.split(",").map(function(commentToCheck) {
      return commentToCheck.trim();
    }).reduce(function(p, clusterShardData) {
      var _qualifiedName$split6 = clusterShardData.split("=", 2);
      var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
      var script = _qualifiedName$split62[0];
      var typeface = _qualifiedName$split62[1];
      return p[script] = typeface, p;
    }, {});
    if (fn(value, "> CC_POOLSET=", param), null == param[type]) {
      throw new Error(value + ": unknown user-pool name:" + type);
    }
    return param[type];
  };
  return argv;
};

