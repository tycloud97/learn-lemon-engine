"use strict";module.exports=function(e,r){r=r||"SS";var a=e.U,s=e.aws,t=e._;if(!a)throw new Error("$U is required!");if(!s)throw new Error("$aws is required!");if(!t)throw new Error("$_ is required!");var n=e.log,u=(e.inf,e.err),o=a.NS(r,"magenta"),i={do_sendMessage:function(r,t,e){if(!r)return Promise.reject("TYPE is required!");if(!t)return Promise.reject("$attrs is required!");if(!e)return Promise.reject("$data is required!");var s=g[r];if(!s)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+r);var i={DelaySeconds:10,MessageAttributes:{},MessageBody:a.json(e),QueueUrl:s};return Object.keys(t).forEach(function(e){var r=t[e=""+e],s="number"==typeof r;i.MessageAttributes[e]={DataType:s?"Number":"String",StringValue:""+r}}),n(o,"> params=",i),m.sendMessage(i).promise().then(function(e){return n(o,"> send-message =",e),e&&(e.MessageType=r),e}).catch(function(e){throw u(o,"ERR! sendMessage:",e),e})},do_receiveMessage:function(s,e){if(e=a.N(e,1),!s)return Promise.reject("TYPE is required!");if(!e)return Promise.reject("size is required!");var r=g[s];if(!r)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+s);n(o,"do_receiveMessage("+s+")... size=",e);var t={AttributeNames:["SentTimestamp"],MaxNumberOfMessages:e,MessageAttributeNames:["All"],QueueUrl:r,WaitTimeSeconds:0};return m.receiveMessage(t).promise().then(function(e){var r={Messages:[]};return e&&e.Messages&&(n(o,"> "+s+".Messages.len=",e.Messages.length),r.Messages=e.Messages.map(function(e){var r={};r.sent=e.Attributes.SentTimestamp;var t=e.MessageAttributes||{};return r.Attr=Object.keys(t).reduce(function(e,r){var s=t[r];return e[r]=s&&s.StringValue||"",e},{}),r.Data=JSON.parse(e.Body||"{}"),r.MessageId=e.MessageId,r.ReceiptHandle=e.ReceiptHandle,r}),n(o,"> "+s+".Messages.len =",r.Messages.length)),r}).catch(function(e){throw u(o,"ERR! receiveMessage:",e),e})},do_deleteMessage:function(e,r){if(!e)return Promise.reject("TYPE is required!");if(!r)return Promise.reject("handle is required!");var s=g[e];if(!s)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+e);n(o,"do_deleteMessage("+e+")... handle=",r);var t={QueueUrl:s,ReceiptHandle:r};return m.deleteMessage(t).promise().then(function(e){return n(o,"delete-res=",e),e}).catch(function(e){throw n(o,"ERR! delete",e),e})},do_statistics:function(e){if(!e)return Promise.reject("TYPE is required!");var r=g[e];if(!r)return Promise.reject("ENDPOINT.URL is missing! TYPE:"+e);var s={QueueUrl:r,AttributeNames:["All"]};return m.getQueueAttributes(s).promise().then(function(e){var r=(e=e||{}).Attributes||{},s={};return s.available=a.N(r.ApproximateNumberOfMessages,0),s.inflight=a.N(r.ApproximateNumberOfMessagesNotVisible,0),s.delayed=a.N(r.ApproximateNumberOfMessagesDelayed,0),s.timeout=a.N(r.VisibilityTimeout,0),s}).catch(function(e){throw n(o,"ERR! attr=",e),e})}};e(r,i);var c={region:a.env("QQ_REGION",new Error(o+":QQ_REGION is required!"))};n(o,"config=",c);var m=new s.SQS(c),g={NORMAL:a.env("QQ_NORMAL",""),EXPRESS:a.env("QQ_EXPRESS",""),EVENT:"https://sqs.ap-northeast-2.amazonaws.com/085403634746/item-pools-event",BOT:"https://sqs.ap-northeast-2.amazonaws.com/085403634746/bot-tasks"};return n(o,"URL_TYPE =",a.json(g)),i};