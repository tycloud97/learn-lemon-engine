"use strict";var _slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var o=[],t=!0,n=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done)&&(o.push(a.value),!r||o.length!==r);t=!0);}catch(e){n=!0,s=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw s}}return o}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(_$,name){if(!_$)throw new Error("_$(global instance pool) is required!");var $_=_$._,$U=_$.U;if(!$U)throw new Error("$U is required!");var NS=$U.NS(name||"PROT","yellow"),$lambda=function(){if(!_$.LS)throw new Error("$LS(lambda-service) is required!");return _$.LS},$sns=function(){return _$.SN?_$.SN:Promise.reject(new Error("$SN(sns-service) is required"))};function success(e){return buildResponse(200,e)}function notfound(e){return buildResponse(404,e)}function failure(e){return buildResponse(503,e)}function buildResponse(e,r){return{statusCode:e,headers:{"Content-Type":"string"==typeof r?"text/plain; charset=utf-8":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:"string"==typeof r?r:JSON.stringify(r)}}var main=function(e,r,o){r.callbackWaitsForEmptyEventLoop=!1;var t=e.queryStringParameters||{},n=e.pathParameters||{},s=decodeURIComponent(n.type||""),a=decodeURIComponent(n.id||""),i=(a||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",c=decodeURIComponent(n.cmd||""),u=!i&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[i],l=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!l&&_log(NS,"#"+u+":"+c+" ("+i+", "+s+"/"+a+")...."),l&&_log(NS,"#"+u+":"+c+" ("+i+", "+s+"/"+a+").... body.len=",l?$U.json(l).length:-1);var m={_id:a,_param:t,_body:l,_event:e,_ctx:r},_=Promise.resolve(m),p=_decode_next_handler(u,a,c);if(!p)return o(null,notfound({MODE:u}));try{_.then(function(e){var r=e._id,o=e._param,t=e._body,n=e._ctx,s=e._event;return p(r,o,t,n,s)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=$U.cleanup(e)),o(null,success(e)),!0}).catch(function(e){return _err(NS,"!!! callback@1 with err",e),0<=(e&&e.message||"").indexOf("404 NOT FOUND")?o(null,notfound(e.message)):o(null,failure(e.message||e)),!1})}catch(e){o(e,failure(e.message))}};function _decode_next_handler(e,r,o){var t=null;switch(e){case"LIST":break;case"GET":""!==r&&""===o?t=do_get_protocol:"0"===r&&"self-test"===o?t=do_self_test_protocol:"!"===r&&"execute"===o?t=do_get_execute_protocol:"!"===r&&"notify"===o&&(t=do_get_notify_protocol);break;case"PUT":break;case"POST":"!"===r&&"execute"===o?t=do_post_execute_protocol:"!"===r&&"notify"===o&&(t=do_post_notify_protocol)}return t}main.do_get_protocol=do_get_protocol,main.do_execute=do_execute_protocol,main.do_notify=do_notify_protocol;var URL=require("url"),QUERY_STRING=require("query-string"),my_parse_query=function my_parse_query(query){var param=null,error=null;if(!query)return param;if(query.startsWith("[")&&query.endsWith("]")?query=decodeURIComponent(query):query.startsWith("%7B")&&query.endsWith("%7D")&&(query=decodeURIComponent(query)),query.startsWith("{")&&query.endsWith("}")||query.startsWith("[")&&query.endsWith("]"))try{param=JSON.parse(query)}catch(e){var emsg=e&&e.message||""+e;if(emsg.startsWith("Unexpected token"))try{param=eval("(()=>{return "+query+"})()")}catch(e){error=e}else _err(NS,"! ERR=",emsg||e),error=e}else param=QUERY_STRING.parse(query),Object.keys(param).forEach(function(e){null===param[e]&&(param[e]="")});if(error&&_err(NS,"> parse["+query+"].ERR = ",error),!error&&_log(NS,"> parse["+query+"] = ",param),error)throw error;return param},my_chain_parse_url=function(e){if(!e)return Promise.reject(new Error("url is required!"));var r=URL.parse(e,!1),o=r.auth||"",t=r.hostname||"",n=r.protocol||"",s=r.query||"",a=r.hash||"",i=r.pathname||"";if("lemon:"!==n)return Promise.reject(new Error("invalid protocol:"+n));var c=i.split("/",4);if(_log("> path["+i+"] =",c),""!==c[0])return Promise.reject(new Error("invalid path:"+i));var u={};return u.path=i,u.type=c[1]||"",u.id=c[2],u.cmd=c[3],u.query=s,u.param=my_parse_query(s)||{},u.hash=a,u.body=a.startsWith("#")?my_parse_query(a.substr(1)):void 0,u.method=a.startsWith("#")?"post":"get",u.sid=o,u.service=t,void 0===u.id&&delete u.id,void 0===u.cmd&&delete u.cmd,void 0===u.param&&delete u.param,void 0===u.body&&delete u.body,_log(NS,"> parse("+e+") =",$U.json(u)),Promise.resolve(u)},MAP_LAMBDA_FUNCTION={"messages/chat":"chat","messages/sheetmsg":"sheetmsg","messages/inquiry":"inquiry","messages/mail":"mail","messages/role":"role","messages/user":"user","messages/group":"group","item-pools/pools":"item-pools","item-pools/tasks":"item-tasks","item-pools/metric":"item-metric","item-pools/trace":"item-trace","sheets/sheets":"sheets","imweb-pools/items":"items","imweb-pools/goods":"goods","imweb-pools/orders":"orders","imweb-pools/answers":"answers","imweb-pools/coupons":"coupons","imweb-pools/loopers":"loopers","imweb-pools/shops":"shops","imweb-pools/naver":"naver","imweb-pools/daum":"daum","queue/batch":"queue.batch","queue/trace":"queue.trace","carrot/horse":"horse","carrot/pedigree":"carrot_pedigree","carrot/profile":"carrot_profile","carrot/nicks":"carrot_nicks","carrot/line":"carrot_line","carrot-msg/chat":"carrot_chat","carrot-msg/role":"carrot_role","carrot-msg/user":"carrot_user","carrot-msg/group":"carrot_group","push-notification/push":"push","chatbot/slack":"slack","chatbot/kakao":"kakao"},MAP_TOPIC_NAME={protocol:"protocol",messages:"messages","imweb-pools":"imweb-pools",queue:"queue","item-pools":"item-pools",sheets:"sheets","push-notification":"push",carrot:"carrot","carrot-messages":"carrot-messages",chatbot:"chatbot"},my_chain_execute_protocol=function(e){_log(NS,"my_chain_execute_protocol()....");var a=e.sid||"",r=e.service||"",o=e.type||"",t=r+(o?"/"+o:""),i=MAP_LAMBDA_FUNCTION[t]||"";return i?Promise.resolve(e).then(function(e){var r=e.id,o=e.cmd,t=e.param||{},n=e.body,s=e.method||"get";return a&&(t.sid=a),"post"===s||"POST"===s?$lambda().do_post(i,r,o,t,n):$lambda().do_get(i,r,o,t,n)}).catch(function(e){throw _err(NS,"ERR! =",e),e}):Promise.reject(new Error("FUNC is invalid (check MAP_LAMBDA_FUNCTION): "+t))},my_chain_notify_protocol=function(e){_log(NS,"my_chain_notify_protocol()....");var r=e.sid||"",o=e.service||"",t=(e.type,MAP_TOPIC_NAME[o]),n=e.param||{};return r&&(n.sid=r),t?$sns().do_publish(t,"Lemon Protocol",e):my_chain_execute_protocol(e)};function do_get_protocol(e,r,o,t,n){return(e=(""+e).trim())?Promise.resolve({id:e,param:r}):Promise.reject(new Error("Invalid ID:"+e))}function do_get_execute_protocol(e,r,o,t,n){if("!"!==e)return Promise.reject(new Error("Invalid ID:"+e));var s=(r=r||{}).url||"";return s?Promise.resolve(s).then(my_chain_parse_url).then(my_chain_execute_protocol):Promise.reject(new Error("Param.url is required!"))}function do_post_execute_protocol(e,r,o,t,n){if("!"!==e)return Promise.reject(new Error("Invalid ID:"+e));var s=(r=r||{}).url||"";if(!s)return Promise.reject(new Error("Param.url is required!"));var a=o;return Promise.resolve(s).then(my_chain_parse_url).then(function(e){return e.method="post",e.body=a,e}).then(my_chain_execute_protocol)}function do_get_notify_protocol(e,r,o,t,n){if("!"!==e)return Promise.reject(new Error("Invalid ID:"+e));var s=(r=r||{}).url||"",a=r.callback||"";return s?Promise.resolve(s).then(my_chain_parse_url).then(function(e){return e.callback=a,e}).then(my_chain_notify_protocol):Promise.reject(new Error("Param.url is required!"))}function do_post_notify_protocol(e,r,o,t,n){if("!"!==e)return Promise.reject(new Error("Invalid ID:"+e));var s=(r=r||{}).url?[r.url,o]:[(o=o||{}).url||"",o.body||"",o.callback||""],a=_slicedToArray(s,3),i=a[0],c=a[1],u=a[2];return i?Promise.resolve(i).then(my_chain_parse_url).then(function(e){return e.method="post",e.body=c,e.callback=u,e}).then(my_chain_notify_protocol):Promise.reject(new Error(".url is required!"))}function do_execute_protocol(e){return e?Promise.resolve(e).then(my_chain_parse_url).then(my_chain_execute_protocol):Promise.reject(new Error("url is required!"))}function do_notify_protocol(e){return e?Promise.resolve(e).then(my_chain_parse_url).then(my_chain_notify_protocol):Promise.reject(new Error("url is required!"))}function do_self_test_protocol(e,r,o,t,n){return Promise.resolve(r).then(function(){var e=["lemon://abc@protocol/?a=b&c","lemon://abc@protocol/0?a=b&c#{}",'lemon://abc@protocol///1?{a:1,b:null}#{"a":"b"}','lemon://abc@protocol//0/1/2?{"a":1,"b":null}#[]',"lemon://abc@protocol//0?{}","lemon://abc@protocol//0?[]#{a:2}","lemon://abc@protocol//0/?%7B%7D#[{a:2}]"].map(my_chain_parse_url);return Promise.all(e)})}return main};'use strict';
/**
 * @param {!Array} arr
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
      var n = false;
      var s = void 0;
      try {
        var _s;
        var _iterator3 = set[Symbol.iterator]();
        for (; !(_iteratorNormalCompletion3 = (_s = _iterator3.next()).done) && (_arr.push(_s.value), !groupNum || _arr.length !== groupNum); _iteratorNormalCompletion3 = true) {
        }
      } catch (seocounter_meta) {
        /** @type {boolean} */
        n = true;
        s = seocounter_meta;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (n) {
            throw s;
          }
        }
      }
      return _arr;
    }(arr, i);
  }
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(errorText) {
  return typeof errorText;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(_$$jscomp$0, name$jscomp$64) {
  /**
   * @param {boolean} user
   * @return {?}
   */
  function success$jscomp$0(user) {
    return buildResponse$jscomp$0(200, user);
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function notfound$jscomp$0(data) {
    return buildResponse$jscomp$0(404, data);
  }
  /**
   * @param {boolean} data
   * @return {?}
   */
  function failure$jscomp$0(data) {
    return buildResponse$jscomp$0(503, data);
  }
  /**
   * @param {number} statusCode
   * @param {string} data
   * @return {?}
   */
  function buildResponse$jscomp$0(statusCode, data) {
    return {
      statusCode : statusCode,
      headers : {
        "Content-Type" : "string" == typeof data ? "text/plain; charset=utf-8" : "application/json; charset=utf-8",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : "string" == typeof data ? data : JSON.stringify(data)
    };
  }
  /**
   * @param {?} method
   * @param {string} path
   * @param {string} undefined
   * @return {?}
   */
  function _decode_next_handler$jscomp$0(method, path, undefined) {
    /** @type {null} */
    var t = null;
    switch(method) {
      case "LIST":
        break;
      case "GET":
        if ("" !== path && "" === undefined) {
          /** @type {function(string, !Object, ?, ?, ?): ?} */
          t = do_get_protocol$jscomp$0;
        } else {
          if ("0" === path && "self-test" === undefined) {
            /** @type {function(?, ?, ?, ?, ?): ?} */
            t = do_self_test_protocol$jscomp$0;
          } else {
            if ("!" === path && "execute" === undefined) {
              /** @type {function(string, number, ?, ?, ?): ?} */
              t = do_get_execute_protocol$jscomp$0;
            } else {
              if ("!" === path && "notify" === undefined) {
                /** @type {function(string, !Object, ?, ?, ?): ?} */
                t = do_get_notify_protocol$jscomp$0;
              }
            }
          }
        }
        break;
      case "PUT":
        break;
      case "POST":
        if ("!" === path && "execute" === undefined) {
          /** @type {function(string, number, string, ?, ?): ?} */
          t = do_post_execute_protocol$jscomp$0;
        } else {
          if ("!" === path && "notify" === undefined) {
            /** @type {function(string, !Object, !Object, ?, ?): ?} */
            t = do_post_notify_protocol$jscomp$0;
          }
        }
    }
    return t;
  }
  /**
   * @param {string} name
   * @param {!Object} a
   * @param {?} b
   * @param {?} s
   * @param {?} index
   * @return {?}
   */
  function do_get_protocol$jscomp$0(name, a, b, s, index) {
    return (name = ("" + name).trim()) ? Promise.resolve({
      id : name,
      param : a
    }) : Promise.reject(new Error("Invalid ID:" + name));
  }
  /**
   * @param {string} smartSql
   * @param {number} pageSize
   * @param {?} sortingInfo
   * @param {?} srsName
   * @param {?} version
   * @return {?}
   */
  function do_get_execute_protocol$jscomp$0(smartSql, pageSize, sortingInfo, srsName, version) {
    if ("!" !== smartSql) {
      return Promise.reject(new Error("Invalid ID:" + smartSql));
    }
    var s = (pageSize = pageSize || {}).url || "";
    return s ? Promise.resolve(s).then(my_chain_parse_url$jscomp$0).then(my_chain_execute_protocol$jscomp$0) : Promise.reject(new Error("Param.url is required!"));
  }
  /**
   * @param {string} smartSql
   * @param {number} pageSize
   * @param {string} sortingInfo
   * @param {?} srsName
   * @param {?} version
   * @return {?}
   */
  function do_post_execute_protocol$jscomp$0(smartSql, pageSize, sortingInfo, srsName, version) {
    if ("!" !== smartSql) {
      return Promise.reject(new Error("Invalid ID:" + smartSql));
    }
    var s = (pageSize = pageSize || {}).url || "";
    if (!s) {
      return Promise.reject(new Error("Param.url is required!"));
    }
    /** @type {string} */
    var repo = sortingInfo;
    return Promise.resolve(s).then(my_chain_parse_url$jscomp$0).then(function(req) {
      return req.method = "post", req.body = repo, req;
    }).then(my_chain_execute_protocol$jscomp$0);
  }
  /**
   * @param {string} n
   * @param {!Object} r
   * @param {?} event
   * @param {?} userId
   * @param {?} popUp
   * @return {?}
   */
  function do_get_notify_protocol$jscomp$0(n, r, event, userId, popUp) {
    if ("!" !== n) {
      return Promise.reject(new Error("Invalid ID:" + n));
    }
    var s = (r = r || {}).url || "";
    var c = r.callback || "";
    return s ? Promise.resolve(s).then(my_chain_parse_url$jscomp$0).then(function(e) {
      return e.callback = c, e;
    }).then(my_chain_notify_protocol$jscomp$0) : Promise.reject(new Error("Param.url is required!"));
  }
  /**
   * @param {string} smartSql
   * @param {!Object} pageSize
   * @param {!Object} options
   * @param {?} end
   * @param {?} isComparator
   * @return {?}
   */
  function do_post_notify_protocol$jscomp$0(smartSql, pageSize, options, end, isComparator) {
    if ("!" !== smartSql) {
      return Promise.reject(new Error("Invalid ID:" + smartSql));
    }
    /** @type {!Array} */
    var _qualifiedName$split6 = (pageSize = pageSize || {}).url ? [pageSize.url, options] : [(options = options || {}).url || "", options.body || "", options.callback || ""];
    var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 3);
    var persistedObject = _qualifiedName$split62[0];
    var postBody = _qualifiedName$split62[1];
    var _onClickCarrouselElement = _qualifiedName$split62[2];
    return persistedObject ? Promise.resolve(persistedObject).then(my_chain_parse_url$jscomp$0).then(function(options) {
      return options.method = "post", options.body = postBody, options.callback = _onClickCarrouselElement, options;
    }).then(my_chain_notify_protocol$jscomp$0) : Promise.reject(new Error(".url is required!"));
  }
  /**
   * @param {?} e
   * @return {?}
   */
  function do_execute_protocol$jscomp$0(e) {
    return e ? Promise.resolve(e).then(my_chain_parse_url$jscomp$0).then(my_chain_execute_protocol$jscomp$0) : Promise.reject(new Error("url is required!"));
  }
  /**
   * @param {?} e
   * @return {?}
   */
  function do_notify_protocol$jscomp$0(e) {
    return e ? Promise.resolve(e).then(my_chain_parse_url$jscomp$0).then(my_chain_notify_protocol$jscomp$0) : Promise.reject(new Error("url is required!"));
  }
  /**
   * @param {?} result
   * @param {?} r
   * @param {?} event
   * @param {?} userId
   * @param {?} popUp
   * @return {?}
   */
  function do_self_test_protocol$jscomp$0(result, r, event, userId, popUp) {
    return Promise.resolve(r).then(function() {
      /** @type {!Array<?>} */
      var pingPromises = ["lemon://abc@protocol/?a=b&c", "lemon://abc@protocol/0?a=b&c#{}", 'lemon://abc@protocol///1?{a:1,b:null}#{"a":"b"}', 'lemon://abc@protocol//0/1/2?{"a":1,"b":null}#[]', "lemon://abc@protocol//0?{}", "lemon://abc@protocol//0?[]#{a:2}", "lemon://abc@protocol//0/?%7B%7D#[{a:2}]"].map(my_chain_parse_url$jscomp$0);
      return Promise.all(pingPromises);
    });
  }
  if (!_$$jscomp$0) {
    throw new Error("_$(global instance pool) is required!");
  }
  var $_$jscomp$0 = _$$jscomp$0._;
  var $U$jscomp$0 = _$$jscomp$0.U;
  if (!$U$jscomp$0) {
    throw new Error("$U is required!");
  }
  var NS$jscomp$0 = $U$jscomp$0.NS(name$jscomp$64 || "PROT", "yellow");
  /**
   * @return {?}
   */
  var $lambda$jscomp$0 = function() {
    if (!_$$jscomp$0.LS) {
      throw new Error("$LS(lambda-service) is required!");
    }
    return _$$jscomp$0.LS;
  };
  /**
   * @return {?}
   */
  var $sns$jscomp$0 = function() {
    return _$$jscomp$0.SN ? _$$jscomp$0.SN : Promise.reject(new Error("$SN(sns-service) is required"));
  };
  /**
   * @param {!Object} event
   * @param {!Node} ctx
   * @param {?} callback
   * @return {?}
   */
  var main$jscomp$0 = function(event, ctx, callback) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var logname = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var url = decodeURIComponent(settings.id || "");
    var ret = (url || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var args = decodeURIComponent(settings.cmd || "");
    var topic = !ret && event.Records ? "EVENT" : {
      LIST : "LIST",
      GET : "GET",
      PUT : "PUT",
      POST : "POST",
      DELETE : "DELETE"
    }[ret];
    /** @type {*} */
    var data = event.body && ("string" == typeof event.body && (event.body.startsWith("{") || event.body.startsWith("[")) ? JSON.parse(event.body) : event.body) || event.Records && {
      records : event.Records
    } || null;
    if (!data) {
      _log(NS$jscomp$0, "#" + topic + ":" + args + " (" + ret + ", " + logname + "/" + url + ")....");
    }
    if (data) {
      _log(NS$jscomp$0, "#" + topic + ":" + args + " (" + ret + ", " + logname + "/" + url + ").... body.len=", data ? $U$jscomp$0.json(data).length : -1);
    }
    var user = {
      _id : url,
      _param : _existingModel,
      _body : data,
      _event : event,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _event: ?, _id: string, _param: ??}>} */
    var fetchPromise = Promise.resolve(user);
    var log = _decode_next_handler$jscomp$0(topic, url, args);
    if (!log) {
      return callback(null, notfound$jscomp$0({
        MODE : topic
      }));
    }
    try {
      fetchPromise.then(function(that) {
        /** @type {string} */
        var columnsUserState = that._id;
        var deprecationWarning = that._param;
        /** @type {*} */
        var face = that._body;
        var num = that._ctx;
        var event = that._event;
        return log(columnsUserState, deprecationWarning, face, num, event);
      }).then(function(obj) {
        return obj && "object" === (void 0 === obj ? "undefined" : _typeof(obj)) && (obj = $U$jscomp$0.cleanup(obj)), callback(null, success$jscomp$0(obj)), true;
      }).catch(function(err) {
        return _err(NS$jscomp$0, "!!! callback@1 with err", err), 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? callback(null, notfound$jscomp$0(err.message)) : callback(null, failure$jscomp$0(err.message || err)), false;
      });
    } catch (ex) {
      callback(ex, failure$jscomp$0(ex.message));
    }
  };
  /** @type {function(string, !Object, ?, ?, ?): ?} */
  main$jscomp$0.do_get_protocol = do_get_protocol$jscomp$0;
  /** @type {function(?): ?} */
  main$jscomp$0.do_execute = do_execute_protocol$jscomp$0;
  /** @type {function(?): ?} */
  main$jscomp$0.do_notify = do_notify_protocol$jscomp$0;
  var URL$jscomp$1 = require("url");
  var QUERY_STRING$jscomp$0 = require("query-string");
  /**
   * @param {string} query$jscomp$8
   * @return {?}
   */
  var my_parse_query$jscomp$0 = function my_parse_query$jscomp$1(query$jscomp$8) {
    /** @type {null} */
    var param$jscomp$3 = null;
    /** @type {null} */
    var error$jscomp$2 = null;
    if (!query$jscomp$8) {
      return param$jscomp$3;
    }
    if (query$jscomp$8.startsWith("[") && query$jscomp$8.endsWith("]") ? query$jscomp$8 = decodeURIComponent(query$jscomp$8) : query$jscomp$8.startsWith("%7B") && query$jscomp$8.endsWith("%7D") && (query$jscomp$8 = decodeURIComponent(query$jscomp$8)), query$jscomp$8.startsWith("{") && query$jscomp$8.endsWith("}") || query$jscomp$8.startsWith("[") && query$jscomp$8.endsWith("]")) {
      try {
        /** @type {*} */
        param$jscomp$3 = JSON.parse(query$jscomp$8);
      } catch (e$jscomp$34) {
        var emsg$jscomp$0 = e$jscomp$34 && e$jscomp$34.message || "" + e$jscomp$34;
        if (emsg$jscomp$0.startsWith("Unexpected token")) {
          try {
            /** @type {*} */
            param$jscomp$3 = eval("(()=>{return " + query$jscomp$8 + "})()");
          } catch (e) {
            error$jscomp$2 = e;
          }
        } else {
          _err(NS$jscomp$0, "! ERR=", emsg$jscomp$0 || e$jscomp$34);
          error$jscomp$2 = e$jscomp$34;
        }
      }
    } else {
      param$jscomp$3 = QUERY_STRING$jscomp$0.parse(query$jscomp$8);
      Object.keys(param$jscomp$3).forEach(function(n) {
        if (null === param$jscomp$3[n]) {
          /** @type {string} */
          param$jscomp$3[n] = "";
        }
      });
    }
    if (error$jscomp$2 && _err(NS$jscomp$0, "> parse[" + query$jscomp$8 + "].ERR = ", error$jscomp$2), !error$jscomp$2 && _log(NS$jscomp$0, "> parse[" + query$jscomp$8 + "] = ", param$jscomp$3), error$jscomp$2) {
      throw error$jscomp$2;
    }
    return param$jscomp$3;
  };
  /**
   * @param {string} url
   * @return {?}
   */
  var my_chain_parse_url$jscomp$0 = function(url) {
    if (!url) {
      return Promise.reject(new Error("url is required!"));
    }
    var urlData = URL$jscomp$1.parse(url, false);
    var sid = urlData.auth || "";
    var value = urlData.hostname || "";
    var n = urlData.protocol || "";
    var query = urlData.query || "";
    var fragment = urlData.hash || "";
    var filePath = urlData.pathname || "";
    if ("lemon:" !== n) {
      return Promise.reject(new Error("invalid protocol:" + n));
    }
    var pieces = filePath.split("/", 4);
    if (_log("> path[" + filePath + "] =", pieces), "" !== pieces[0]) {
      return Promise.reject(new Error("invalid path:" + filePath));
    }
    var data = {};
    return data.path = filePath, data.type = pieces[1] || "", data.id = pieces[2], data.cmd = pieces[3], data.query = query, data.param = my_parse_query$jscomp$0(query) || {}, data.hash = fragment, data.body = fragment.startsWith("#") ? my_parse_query$jscomp$0(fragment.substr(1)) : void 0, data.method = fragment.startsWith("#") ? "post" : "get", data.sid = sid, data.service = value, void 0 === data.id && delete data.id, void 0 === data.cmd && delete data.cmd, void 0 === data.param && delete data.param, 
    void 0 === data.body && delete data.body, _log(NS$jscomp$0, "> parse(" + url + ") =", $U$jscomp$0.json(data)), Promise.resolve(data);
  };
  var MAP_LAMBDA_FUNCTION$jscomp$0 = {
    "messages/chat" : "chat",
    "messages/sheetmsg" : "sheetmsg",
    "messages/inquiry" : "inquiry",
    "messages/mail" : "mail",
    "messages/role" : "role",
    "messages/user" : "user",
    "messages/group" : "group",
    "item-pools/pools" : "item-pools",
    "item-pools/tasks" : "item-tasks",
    "item-pools/metric" : "item-metric",
    "item-pools/trace" : "item-trace",
    "sheets/sheets" : "sheets",
    "imweb-pools/items" : "items",
    "imweb-pools/goods" : "goods",
    "imweb-pools/orders" : "orders",
    "imweb-pools/answers" : "answers",
    "imweb-pools/coupons" : "coupons",
    "imweb-pools/loopers" : "loopers",
    "imweb-pools/shops" : "shops",
    "imweb-pools/naver" : "naver",
    "imweb-pools/daum" : "daum",
    "queue/batch" : "queue.batch",
    "queue/trace" : "queue.trace",
    "carrot/horse" : "horse",
    "carrot/pedigree" : "carrot_pedigree",
    "carrot/profile" : "carrot_profile",
    "carrot/nicks" : "carrot_nicks",
    "carrot/line" : "carrot_line",
    "carrot-msg/chat" : "carrot_chat",
    "carrot-msg/role" : "carrot_role",
    "carrot-msg/user" : "carrot_user",
    "carrot-msg/group" : "carrot_group",
    "push-notification/push" : "push",
    "chatbot/slack" : "slack",
    "chatbot/kakao" : "kakao"
  };
  var MAP_TOPIC_NAME$jscomp$0 = {
    protocol : "protocol",
    messages : "messages",
    "imweb-pools" : "imweb-pools",
    queue : "queue",
    "item-pools" : "item-pools",
    sheets : "sheets",
    "push-notification" : "push",
    carrot : "carrot",
    "carrot-messages" : "carrot-messages",
    chatbot : "chatbot"
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var my_chain_execute_protocol$jscomp$0 = function(data) {
    _log(NS$jscomp$0, "my_chain_execute_protocol()....");
    var cookie = data.sid || "";
    var msg = data.service || "";
    var repo = data.type || "";
    /** @type {string} */
    var str = msg + (repo ? "/" + repo : "");
    var bInitP = MAP_LAMBDA_FUNCTION$jscomp$0[str] || "";
    return bInitP ? Promise.resolve(data).then(function(e) {
      var tagLink = e.id;
      var cmd = e.cmd;
      var node = e.param || {};
      var cursor_y = e.body;
      var method = e.method || "get";
      return cookie && (node.sid = cookie), "post" === method || "POST" === method ? $lambda$jscomp$0().do_post(bInitP, tagLink, cmd, node, cursor_y) : $lambda$jscomp$0().do_get(bInitP, tagLink, cmd, node, cursor_y);
    }).catch(function(e) {
      throw _err(NS$jscomp$0, "ERR! =", e), e;
    }) : Promise.reject(new Error("FUNC is invalid (check MAP_LAMBDA_FUNCTION): " + str));
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var my_chain_notify_protocol$jscomp$0 = function(data) {
    _log(NS$jscomp$0, "my_chain_notify_protocol()....");
    var cookie = data.sid || "";
    var includeStr = data.service || "";
    var callback = (data.type, MAP_TOPIC_NAME$jscomp$0[includeStr]);
    var node = data.param || {};
    return cookie && (node.sid = cookie), callback ? $sns$jscomp$0().do_publish(callback, "Lemon Protocol", data) : my_chain_execute_protocol$jscomp$0(data);
  };
  return main$jscomp$0;
};

