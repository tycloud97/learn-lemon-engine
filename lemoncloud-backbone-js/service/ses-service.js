"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],o=!0,n=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(t.push(s.value),!r||t.length!==r);o=!0);}catch(e){n=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(n)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};module.exports=function(e,r){r=r||"SE";var t=e.U,o=e.aws,n=e._;if(!t)throw new Error("$U is required!");if(!o)throw new Error("$aws is required!");if(!n)throw new Error("$_ is required!");var u=e.log,d=(e.inf,e.err),f=t.NS(r,"magenta"),i={do_send_email:function(e,r,t,o,n,i){if(n=n||"text/html",e&&"object"==(void 0===e?"undefined":_typeof(e))){var s=Object.assign({},e);e=s.from||"",r=s.to||r,t=s.subject||t,o=s.body||o,n=s.type||n,i=s.text||i}if(!e)return Promise.reject(new Error("from is required!"));if(!r)return Promise.reject(new Error("to is required!"));if(!t)return Promise.reject(new Error("subject is required!"));if(!o)return Promise.reject(new Error("body is required!"));if(!n)return Promise.reject(new Error("type is required!"));var a={Destination:{CcAddresses:[],ToAddresses:[]},Message:{Body:{Html:{Charset:"UTF-8",Data:""},Text:{Charset:"UTF-8",Data:""}},Subject:{Charset:"UTF-8",Data:"Test email"}},Source:"SENDER_EMAIL_ADDRESS",ReplyToAddresses:[]};a.Source=e,a.Destination.ToAddresses=r.split(",").map(function(e){return e.trim()}),a.Message.Subject.Data=t,a.Message.Body.Text.Data=i,n.endsWith("html")?a.Message.Body.Html.Data=o:a.Message.Body.Text.Data=o;a.Message.Body.Text.Data||delete a.Message.Body.Text;return u(f,"> params =",a),c.sendEmail(a).promise().then(function(e){return u(f,"Sent message-id:",e&&e.MessageId||"#NOP"),e}).catch(function(e){throw d(f,"ERR! err=",e),e})}};e(r,i);var s={region:t.env("SE_REGION",new Error(f+":SE_REGION is required!"))};u(f,"config=",s);var c=new o.SES(s);return i};