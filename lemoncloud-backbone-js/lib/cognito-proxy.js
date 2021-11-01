"use strict";module.exports=function(t,i){i=i||"CS";var r=t.U,e=t._;if(!r)throw new Error("$U is required!");if(!e)throw new Error("$_ is required!");r.NS(i,"yellow"),t.log,t.inf,t.err;var u={do_get_user:function(r,e){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject(new Error("userSub is required!"));var t=Object.assign({},{});return s().do_get(r,e,void 0,t).then(function(r){return r.result})},do_get_enable_user:function(r,e){return r?e?s().do_get(r,e,"enable").then(function(r){return r.result}):Promise.reject(new Error("userSub is required!")):Promise.reject(new Error("userPoolId is required!"))},do_get_disable_user:function(r,e){return r?e?s().do_get(r,e,"disable").then(function(r){return r.result}):Promise.reject(new Error("userSub is required!")):Promise.reject(new Error("userPoolId is required!"))},do_get_confirm_user:function(r,e){return r?e?s().do_get(r,e,"confirm").then(function(r){return r.result}):Promise.reject(new Error("userSub is required!")):Promise.reject(new Error("userPoolId is required!"))},do_list_user:function(r,e,t,i){if(!r)return Promise.reject(new Error("userPoolId is required!"));var u=Object.assign({},{});i&&(u.limit=i);e&&(u[e]=t);return s().do_get(r,void 0,void 0,u).then(function(r){return r.result})},do_update_user:function(r,e,t){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject(new Error("userSub is required!"));if(!t)return Promise.reject(new Error("$attr is required!"));var i=Object.assign({},{}),u=Object.assign({},t||{});return s().do_put(r,e,void 0,i,u).then(function(r){return r.result})},do_list_group:function(r,e){if(!r)return Promise.reject(new Error("userPoolId is required!"));var t=Object.assign({},{});e&&(t.limit=e);return s().do_get(r,"!",void 0,t).then(function(r){return r.result})},do_get_group:function(r,e){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject("groupId is required!");var t=Object.assign({},{});return s().do_get(r,"!"+e,void 0,t).then(function(r){return r.result})},do_add_user_to_group:function(r,e,t){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject("groupId is required!");if(!t)return Promise.reject("userId is required!");var i=Object.assign({},{}),u={user:t};return s().do_post(r,"!"+e,"user",i,u).then(function(r){return r.result})},do_create_group:function(r,e,t){if(!r)return Promise.reject(new Error("userPoolId is required!"));if(!e)return Promise.reject("groupName is required!");var i=Object.assign({},{}),u={description:t};return s().do_post(r,"!"+e,void 0,i,u).then(function(r){return r.result})}};t(i,u);var o=r.env("CS_ENDPOINT"),n=require("./http-proxy"),s=function(){if(!o)throw new Error("env:CS_ENDPOINT is required!");var r="X"+i,e=t(r);return e||n(t,r,o)};return u};