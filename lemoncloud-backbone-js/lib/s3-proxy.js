"use strict";module.exports=function(t,o){o=o||"S3";var e=t.U,r=t._;if(!e)throw new Error("$U is required!");if(!r)throw new Error("$_ is required!");var i=e.NS(o,"yellow"),n=t.log,u=(t.inf,t.err,{do_upload:function(e,r,t,o){return e?r?t?(o=o||"",c().do_post(e,"0","upload",void 0,{fileName:r,fileStream:t,contentType:o}).then(function(e){return e.result})):Promise.reject(new Error("filestream is required!")):Promise.reject(new Error("filename is required!")):Promise.reject(new Error("bucket is required!"))},do_get_object:function(e,r){return e?r?c().do_post(e,"0","get-object",void 0,{fileName:r}).then(function(e){return e.result}):Promise.reject(new Error("filename is required!")):Promise.reject(new Error("bucket is required!"))},do_test_self:function(e){n(i,"do_test_self()... param=",e=e||{});var r=Object.assign({},e||{});return c().do_get("#","0","test-self",r).then(function(e){return e.result})}});t(o,u);var s=e.env("S3_ENDPOINT"),f=require("./http-proxy"),c=function(){if(!s)throw new Error("env:S3_ENDPOINT is required!");var e="X"+o,r=t(e);return r||f(t,e,s)};return u};