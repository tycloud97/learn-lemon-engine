"use strict";module.exports=function(e,r){r=r||"SS";var a=e.U,s=e.aws,t=e._;if(!a)throw new Error("$U is required!");if(!s)throw new Error("$aws is required!");if(!t)throw new Error("$_ is required!");var n=e.log,u=(e.inf,e.err),o=a.NS(r,"magenta"),i={do_sendMessage:function(r,t,e){if(!r)return Promise.reject("TYPE is required!");if(!t)return Promise.reject("$attrs is required!");if(!e)return Promise.reject("$data is required!");var s=g[r];if(!s)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+r);var i={DelaySeconds:10,MessageAttributes:{},MessageBody:a.json(e),QueueUrl:s};return Object.keys(t).forEach(function(e){var r=t[e=""+e],s="number"==typeof r;i.MessageAttributes[e]={DataType:s?"Number":"String",StringValue:""+r}}),n(o,"> params=",i),m.sendMessage(i).promise().then(function(e){return n(o,"> send-message =",e),e&&(e.MessageType=r),e}).catch(function(e){throw u(o,"ERR! sendMessage:",e),e})},do_receiveMessage:function(s,e){if(e=a.N(e,1),!s)return Promise.reject("TYPE is required!");if(!e)return Promise.reject("size is required!");var r=g[s];if(!r)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+s);n(o,"do_receiveMessage("+s+")... size=",e);var t={AttributeNames:["SentTimestamp"],MaxNumberOfMessages:e,MessageAttributeNames:["All"],QueueUrl:r,WaitTimeSeconds:0};return m.receiveMessage(t).promise().then(function(e){var r={Messages:[]};return e&&e.Messages&&(n(o,"> "+s+".Messages.len=",e.Messages.length),r.Messages=e.Messages.map(function(e){var r={};r.sent=e.Attributes.SentTimestamp;var t=e.MessageAttributes||{};return r.Attr=Object.keys(t).reduce(function(e,r){var s=t[r];return e[r]=s&&s.StringValue||"",e},{}),r.Data=JSON.parse(e.Body||"{}"),r.MessageId=e.MessageId,r.ReceiptHandle=e.ReceiptHandle,r}),n(o,"> "+s+".Messages.len =",r.Messages.length)),r}).catch(function(e){throw u(o,"ERR! receiveMessage:",e),e})},do_deleteMessage:function(e,r){if(!e)return Promise.reject("TYPE is required!");if(!r)return Promise.reject("handle is required!");var s=g[e];if(!s)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+e);n(o,"do_deleteMessage("+e+")... handle=",r);var t={QueueUrl:s,ReceiptHandle:r};return m.deleteMessage(t).promise().then(function(e){return n(o,"delete-res=",e),e}).catch(function(e){throw n(o,"ERR! delete",e),e})},do_statistics:function(e){if(!e)return Promise.reject("TYPE is required!");var r=g[e];if(!r)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+e);var s={QueueUrl:r,AttributeNames:["All"]};return m.getQueueAttributes(s).promise().then(function(e){var r=(e=e||{}).Attributes||{},s={};return s.available=a.N(r.ApproximateNumberOfMessages,0),s.inflight=a.N(r.ApproximateNumberOfMessagesNotVisible,0),s.delayed=a.N(r.ApproximateNumberOfMessagesDelayed,0),s.timeout=a.N(r.VisibilityTimeout,0),s}).catch(function(e){throw n(o,"ERR! attr=",e),e})}};e(r,i);var c={region:a.env("QQ_REGION",new Error(o+":QQ_REGION is required!"))};n(o,"config=",c);var m=new s.SQS(c),g={NORMAL:a.env("QQ_NORMAL",""),EXPRESS:a.env("QQ_EXPRESS",""),EVENT:"https://sqs.ap-northeast-2.amazonaws.com/085403634746/item-pools-event",BOT:"https://sqs.ap-northeast-2.amazonaws.com/085403634746/bot-tasks"};return n(o,"URL_TYPE =",a.json(g)),i};'use strict';
/**
 * @param {!Object} options
 * @param {string} name
 * @return {?}
 */
module.exports = function(options, name) {
  name = name || "SS";
  var context = options.U;
  var follow = options.aws;
  var originalOptions = options._;
  if (!context) {
    throw new Error("$U is required!");
  }
  if (!follow) {
    throw new Error("$aws is required!");
  }
  if (!originalOptions) {
    throw new Error("$_ is required!");
  }
  var log = options.log;
  var g = (options.inf, options.err);
  var x = context.NS(name, "magenta");
  var onlyGetCors = {
    do_sendMessage : function(type, data, event) {
      if (!type) {
        return Promise.reject("TYPE is required!");
      }
      if (!data) {
        return Promise.reject("$attrs is required!");
      }
      if (!event) {
        return Promise.reject("$data is required!");
      }
      var associations = parser[type];
      if (!associations) {
        return Promise.reject("ENDPOINT.URL is missing! TYPE:" + type);
      }
      var params = {
        DelaySeconds : 10,
        MessageAttributes : {},
        MessageBody : context.json(event),
        QueueUrl : associations
      };
      return Object.keys(data).forEach(function(name) {
        var i = data[name = "" + name];
        /** @type {boolean} */
        var product = "number" == typeof i;
        params.MessageAttributes[name] = {
          DataType : product ? "Number" : "String",
          StringValue : "" + i
        };
      }), log(x, "> params=", params), self.sendMessage(params).promise().then(function(data) {
        return log(x, "> send-message =", data), data && (data.MessageType = type), data;
      }).catch(function(n) {
        throw g(x, "ERR! sendMessage:", n), n;
      });
    },
    do_receiveMessage : function(name, count) {
      if (count = context.N(count, 1), !name) {
        return Promise.reject("TYPE is required!");
      }
      if (!count) {
        return Promise.reject("size is required!");
      }
      var queue = parser[name];
      if (!queue) {
        return Promise.reject("ENDPOINT.URL is missing! TYPE:" + name);
      }
      log(x, "do_receiveMessage(" + name + ")... size=", count);
      var params = {
        AttributeNames : ["SentTimestamp"],
        MaxNumberOfMessages : count,
        MessageAttributeNames : ["All"],
        QueueUrl : queue,
        WaitTimeSeconds : 0
      };
      return self.receiveMessage(params).promise().then(function(data) {
        var doc = {
          Messages : []
        };
        return data && data.Messages && (log(x, "> " + name + ".Messages.len=", data.Messages.length), doc.Messages = data.Messages.map(function(message) {
          var msg = {};
          msg.sent = message.Attributes.SentTimestamp;
          var modifiersObj = message.MessageAttributes || {};
          return msg.Attr = Object.keys(modifiersObj).reduce(function(headData, key) {
            var value = modifiersObj[key];
            return headData[key] = value && value.StringValue || "", headData;
          }, {}), msg.Data = JSON.parse(message.Body || "{}"), msg.MessageId = message.MessageId, msg.ReceiptHandle = message.ReceiptHandle, msg;
        }), log(x, "> " + name + ".Messages.len =", doc.Messages.length)), doc;
      }).catch(function(n) {
        throw g(x, "ERR! receiveMessage:", n), n;
      });
    },
    do_deleteMessage : function(type, i) {
      if (!type) {
        return Promise.reject("TYPE is required!");
      }
      if (!i) {
        return Promise.reject("handle is required!");
      }
      var associations = parser[type];
      if (!associations) {
        return Promise.reject("ENDPOINT.URL is missing! TYPE:" + type);
      }
      log(x, "do_deleteMessage(" + type + ")... handle=", i);
      var params = {
        QueueUrl : associations,
        ReceiptHandle : i
      };
      return self.deleteMessage(params).promise().then(function(a) {
        return log(x, "delete-res=", a), a;
      }).catch(function(a) {
        throw log(x, "ERR! delete", a), a;
      });
    },
    do_statistics : function(name) {
      if (!name) {
        return Promise.reject("TYPE is required!");
      }
      var queue = parser[name];
      if (!queue) {
        return Promise.reject("ENDPOINT.URL is missing! TYPE:" + name);
      }
      var params = {
        QueueUrl : queue,
        AttributeNames : ["All"]
      };
      return self.getQueueAttributes(params).promise().then(function(limitFromUnread) {
        var self = (limitFromUnread = limitFromUnread || {}).Attributes || {};
        var options = {};
        return options.available = context.N(self.ApproximateNumberOfMessages, 0), options.inflight = context.N(self.ApproximateNumberOfMessagesNotVisible, 0), options.delayed = context.N(self.ApproximateNumberOfMessagesDelayed, 0), options.timeout = context.N(self.VisibilityTimeout, 0), options;
      }).catch(function(a) {
        throw log(x, "ERR! attr=", a), a;
      });
    }
  };
  options(name, onlyGetCors);
  var params = {
    region : context.env("QQ_REGION", new Error(x + ":QQ_REGION is required!"))
  };
  log(x, "config=", params);
  var self = new follow.SQS(params);
  var parser = {
    NORMAL : context.env("QQ_NORMAL", ""),
    EXPRESS : context.env("QQ_EXPRESS", ""),
    EVENT : "https://sqs.ap-northeast-2.amazonaws.com/085403634746/item-pools-event",
    BOT : "https://sqs.ap-northeast-2.amazonaws.com/085403634746/bot-tasks"
  };
  return log(x, "URL_TYPE =", context.json(parser)), onlyGetCors;
};

