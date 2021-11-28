"use strict";module.exports=function(e,r){r=r||"TS";var a=e.U,t=e._,i=e.SS;if(!a)throw new Error("$U is required!");if(!t)throw new Error("$_ is required!");var o=e.log,u=(e.inf,e.err,a.NS(r,"magenta")),s={};return s.do_create_task=function(e,r,t){if(e=e||"NA",!t)return Promise.reject("data is required!");var s=-1===(r=a.N(r,0))?"EVENT":24<=r?"EXPRESS":"NORMAL";o(u,"do_create_task("+s+")... name=",e);var n={name:e,type:s,priority:r};return o(u,"> attr =",n),i.do_sendMessage(s,n,t).then(function(e){return e})},s.do_receive_task=function(e,r){if(!(r=a.N(r,0)))return Promise.reject("size is required!");var t=-1===e?"EVENT":e?"EXPRESS":"NORMAL";return o(u,"do_receive_task("+t+")... size=",r),i.do_receiveMessage(t,r).then(function(e){var r={Tasks:[]};return e&&e.Messages?(o(u,"> "+t+".Messages.len=",e.Messages.length),r.Tasks=e.Messages.map(function(e){var t={};t.sent=e.sent,t.Task=e.Data||"{}",t.MessageId=e.MessageId,t.ReceiptHandle=e.ReceiptHandle;var s=e.Attr||{};return Object.keys(s).forEach(function(e){var r=s[e];void 0===t[e]&&(t[e]=r)}),t.sent=a.N(t.sent,0),t.priority=a.N(t.priority,0),t})):o(u,"> "+t+".Messages.len=-1"),r})},s.do_complete_task=function(e,r){if(!r)return Promise.reject("handle is required!");var t=-1===e?"EVENT":e?"EXPRESS":"NORMAL";return o(u,"do_complete_task("+t+")... handle=",r),i.do_deleteMessage(t,r).then(function(e){return o(u,"delete-res=",e),e})},e(r,s),s};'use strict';
/**
 * @param {!Object} obj
 * @param {string} elem
 * @return {?}
 */
module.exports = function(obj, elem) {
  elem = elem || "TS";
  var test = obj.U;
  var node = obj._;
  var i = obj.SS;
  if (!test) {
    throw new Error("$U is required!");
  }
  if (!node) {
    throw new Error("$_ is required!");
  }
  var cb = obj.log;
  var value = (obj.inf, obj.err, test.NS(elem, "magenta"));
  var names = {};
  return names.do_create_task = function(message, url, label) {
    if (message = message || "NA", !label) {
      return Promise.reject("data is required!");
    }
    /** @type {string} */
    var s = -1 === (url = test.N(url, 0)) ? "EVENT" : 24 <= url ? "EXPRESS" : "NORMAL";
    cb(value, "do_create_task(" + s + ")... name=", message);
    var t = {
      name : message,
      type : s,
      priority : url
    };
    return cb(value, "> attr =", t), i.do_sendMessage(s, t, label).then(function(canCreateDiscussions) {
      return canCreateDiscussions;
    });
  }, names.do_receive_task = function(envId, url) {
    if (!(url = test.N(url, 0))) {
      return Promise.reject("size is required!");
    }
    /** @type {string} */
    var t = -1 === envId ? "EVENT" : envId ? "EXPRESS" : "NORMAL";
    return cb(value, "do_receive_task(" + t + ")... size=", url), i.do_receiveMessage(t, url).then(function(data) {
      var self = {
        Tasks : []
      };
      return data && data.Messages ? (cb(value, "> " + t + ".Messages.len=", data.Messages.length), self.Tasks = data.Messages.map(function(message) {
        var self = {};
        self.sent = message.sent;
        self.Task = message.Data || "{}";
        self.MessageId = message.MessageId;
        self.ReceiptHandle = message.ReceiptHandle;
        var langLocaleMap = message.Attr || {};
        return Object.keys(langLocaleMap).forEach(function(lang) {
          var data = langLocaleMap[lang];
          if (void 0 === self[lang]) {
            self[lang] = data;
          }
        }), self.sent = test.N(self.sent, 0), self.priority = test.N(self.priority, 0), self;
      })) : cb(value, "> " + t + ".Messages.len=-1"), self;
    });
  }, names.do_complete_task = function(posts, format) {
    if (!format) {
      return Promise.reject("handle is required!");
    }
    /** @type {string} */
    var t = -1 === posts ? "EVENT" : posts ? "EXPRESS" : "NORMAL";
    return cb(value, "do_complete_task(" + t + ")... handle=", format), i.do_deleteMessage(t, format).then(function(result) {
      return cb(value, "delete-res=", result), result;
    });
  }, obj(elem, names), names;
};

