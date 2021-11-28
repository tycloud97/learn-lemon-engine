"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(e){var n={},u=y("util"),f=e._;if(!f)throw new Error("$_ is required!");n.name=u+"-utils",n.ts=l,n.dt=m,n.now=m,n.escape=function(e,r){if(void 0===e)return"NULL";if(t=e,"number"==typeof t&&t%1==0)return e;var t;"object"==(void 0===(e=e||"")?"undefined":_typeof(e))&&(e=JSON.stringify(e));e=e.replace(/\\/g,"\\\\").replace(/\$/g,"\\$").replace(/'/g,"\\'").replace(/"/g,'\\"'),r&&(e=decodeURI(e));return"'"+e+"'"},n.cleanup=function(e){return Object.keys(e).reduce(function(e,r){return r.startsWith("_")&&delete e[r],r.startsWith("$")&&delete e[r],e},e)},n.updated=function(t,n){return Object.keys(n).reduce(function(e,r){if(t[r]!==n[r]){if(null===t[r]&&""===n[r])return e;e[r]=n[r]}return e},{})},n.copy=function(t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},{})},n.N=_,n.F=v,n.current_time_ms=function(){var e=(new Date).getTime();return e+=0},n.NS=y,n.env=t,n.extend=d,n.isset=function(e){return void 0!==e},n.empty=function(e){return!e},n.min=function(e,r){return e<r?e:r},n.max=function(e,r){return r<e?e:r},n.round=function(e){return Math.round(e)},n.json=p,n.diff=function(n,i){return Object.keys(n).reduce(function(e,r){if(i.hasOwnProperty(r)){if(f.isEqual(n[r],i[r])){var t=e.indexOf(r);e.splice(t,1)}}else e.push(r);return e},Object.keys(i))},n.copy_node=function(t,n){return n=void 0!==n&&n,Object.keys(t).reduce(function(e,r){return r.startsWith("_")||r.startsWith("$")||(e[r]=n?null:t[r]),e},{})},n.bare_node=function(e,r){var t={};t._id=e._id,t._current_time=e._current_time,r&&(t=d(t,r));return t},n.diff_node=function(n,i){var r=[],t=[];return Object.keys(n).forEach(function(e){e.startsWith("_")||e.startsWith("$")||r.push(e)}),Object.keys(i).forEach(function(e){e.startsWith("_")||e.startsWith("$")||t.push(e)}),r.reduce(function(e,r){if(i.hasOwnProperty(r)){if(f.isEqual(n[r],i[r])){var t=e.indexOf(r);e.splice(t,1)}}else e.push(r);return e},t)},n.hash=function(e){return function(e,r,t){var n,i=void 0,o=void 0===t?2166136261:t;for(i=0,n=e.length;i<n;i++)o^=e.charCodeAt(i),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return r?("0000000"+(o>>>0).toString(16)).substr(-8):o>>>0}(e="string"!=typeof(e="object"===(void 0===(e=e||"")?"undefined":_typeof(e))?p(e,!0):e)?String(e):e)},n.md5=function(e,r){var t=require("crypto");return r=void 0===r?"hex":r,t.createHash("md5").update(e).digest(r)},n.hmac=function(e,r,t,n){var i=require("crypto");return r=r||"XENI",n=n||"base64",t=t||"sha256",i.createHmac(t,r).update(e).digest(n)},n.logger_factory=i,n.load_data_csv=function(e){if(!e)throw new Error("param:name is required!");var r=require("fs"),i=require("csv-parse"),o=require("path").resolve(__dirname,"../data/"+e+(e.endsWith(".csv")?"":".csv"));return new Promise(function(t,n){r.readFile(o,"UTF-8",function(e,r){if(e)return n(e);i(r,{columns:!0,trim:!0},function(e,r){return e?n(e):t(r)})})})},n.load_data_yml=function(e){if(!e)throw new Error("param:name is required!");var t=require("fs"),r=require("path"),n=require("js-yaml"),i=r.resolve(__dirname,"../data/"+e+(e.endsWith(".yml")?"":".yml"));return o(u,"load file =",i),new Promise(function(e,r){try{e(n.safeLoad(t.readFileSync(i,"utf8")))}catch(e){r(e)}})},n.promise=h,n.promise_sequence=function(e,t){var r=h(e.shift());return r=e.reduce(function(e,r){return e.then(function(){return t(r)})},r.then(function(e){return t(e)}))},n.trans_row_to_prod_node=function(e){if(!e)return null;if(Array.isArray(e))throw new Error("row is array.");return b().transform_row(e)},n.trans_prod_node_to_row=function(e){if(!e)return null;if("object"!=(void 0===e?"undefined":_typeof(e)))throw new Error("node must be object. but is "+(void 0===e?"undefined":_typeof(e)));return b().transform_node(e)},n.split_prod_node_to_aid=function(e,r,t,n){if(!e)return null;if("object"!=(void 0===e?"undefined":_typeof(e)))throw new Error("node must be object. but is "+(void 0===e?"undefined":_typeof(e)));if("object"!=(void 0===r?"undefined":_typeof(r)))throw new Error("atem must be object. but is "+(void 0===r?"undefined":_typeof(r)));if("object"!=(void 0===t?"undefined":_typeof(t)))throw new Error("item must be object. but is "+(void 0===t?"undefined":_typeof(t)));if("object"!=(void 0===n?"undefined":_typeof(n)))throw new Error("deal must be object. but is "+(void 0===n?"undefined":_typeof(n)));return b().split_node(e,r,t,n)},n.merge_prod_node_by_aid=function(e,r,t,n){if(!e)return null;if("object"!=(void 0===e?"undefined":_typeof(e)))throw new Error("node must be object. but is "+(void 0===e?"undefined":_typeof(e)));if("object"!=(void 0===r?"undefined":_typeof(r)))throw new Error("atem must be object. but is "+(void 0===r?"undefined":_typeof(r)));if("object"!=(void 0===t?"undefined":_typeof(t)))throw new Error("item must be object. but is "+(void 0===t?"undefined":_typeof(t)));if("object"!=(void 0===n?"undefined":_typeof(n)))throw new Error("deal must be object. but is "+(void 0===n?"undefined":_typeof(n)));return b().merge_node(e,r,t,n)};var o=o||e.log||function(){return c(arguments,"I")},s=s||e.err||function(){return c(arguments,"E")},r=r||function(){var e=t("ENV")||t("NODE_ENV")||t("STAGE");return"production"!==e&&"op"!==e};function t(e,r){if("function"==typeof f.get_env)return f.get_env(e,r);if("function"==typeof f.environ)return f.environ(e,r);var t=process&&process.env[e]||void 0;return void 0===t?r:t}function i(){return{create:function(e,r){e=e||u,r=r||"/var/www/html/logs/";var t=require("log4js"),n=r+e+".log";return t.loadAppender("file"),t.addAppender(t.appenders.file(n),e),t.getLogger(e)}}}n.log=o,n.err=s,n.is_dev=r();var a=null,c=function(e,r){return a?"E"==r?a.error.apply(a,e):a.info.apply(a,e):"undefined"!=typeof console&&(Array.isArray(e)||(e=Array.prototype.slice.call(e)),r&&e.unshift(r),e.unshift(l()),"E"==r?console.error.apply(console,e):console.log.apply(console,e)),!0};function d(e,r){for(var t in r)e[t]=r[t];return e}function p(r,e){if(e){var t={};Object.keys(r).sort().forEach(function(e){t[e]=r[e]}),r=t}return r&&JSON.stringify(r)||r}function l(e){var r=e&&"object"===(void 0===e?"undefined":_typeof(e))?e:e?new Date(e):new Date,t=r.getFullYear(),n=r.getMonth()+1,i=(e=r.getDate(),r.getHours()),o=r.getMinutes(),u=r.getSeconds();return(t<10?"0":"")+t+"-"+(n<10?"0":"")+n+"-"+(e<10?"0":"")+e+" "+(i<10?"0":"")+i+":"+(o<10?"0":"")+o+":"+(u<10?"0":"")+u}function m(e){var r=(e=e||l()).split(" "),t=r[0].split("-"),n=r[1].split(":"),i=parseInt(t[0]),o=parseInt(t[1])-1,u=parseInt(t[2]),a=parseInt(n[0]),f=parseInt(n[1]),s=parseInt(n[2]);return Date.prototype.add_seconds||(Date.prototype.add_seconds=function(e){return this.setSeconds(this.getSeconds()+e),this}),Date.prototype.ts||(Date.prototype.ts=function(){return l(this)}),new Date(i,o,u,a,f,s,0)}function y(e,r,t){if(!e)return e;t=t||4,t-=e.length;if(e="           ".substr(0,t=t<0?0:t)+e+":",n.is_dev&&r){e={red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",magenta:"[35m",cyan:"[36m",white:"[37m"}[r]+e+"[0m"}return e}function _(r,t){try{return""===r||null==r?t:"number"==typeof r&&r%1==0?r:"number"==typeof r?parseInt(r):(r=(r="0"+r).startsWith("0-")?r.substr(1):r,parseInt(r.replace(/,/gi,"").trim()))}catch(e){return s("err at _N: x="+r+";"+(void 0===r?"undefined":_typeof(r))+";"+(e.message||""),e),t}}function v(r,t){try{return""===r||null==r?t:"number"==typeof r&&r%1==0?r:"number"==typeof r?parseFloat(r):(r=(r="0"+r).startsWith("0-")?r.substr(1):r,parseFloat(r.replace(/,/gi,"").trim()))}catch(e){return s("err at _N: x="+r+";"+(void 0===r?"undefined":_typeof(r))+";"+(e.message||""),e),t}}function h(t){return new Promise(function(e,r){e(t)})}function b(){var e="_trans_handler_prod",a=n[e];return a||(o(u,"build transformer of prod!"),(a={initialize:function(){var e=function(r){if(!r)throw new Error("param:name is required!");var e=require("fs"),t=require("path"),n=require("js-yaml"),i=t.resolve(__dirname,"../data/"+r+(r.endsWith(".yml")?"":".yml"));try{return o(u,"load-sync-file =",i),n.safeLoad(e.readFileSync(i,"utf8"))}catch(e){s(u,"error:load-sync-yaml("+r+")=",e)}return{}}("prod-fields"),r=e&&e.fields;if(!r)throw new Error(u+"valid fields definition is required!");var t={parser:{},serial:{},splits:{}};t=f.reduce(r,function(e,r,o){var t=function(e,r){if("object"===(void 0===r?"undefined":_typeof(r)))e=f.reduce(r,function(e,t,r){if("X"==r){var n={atem:null,item:null,deal:null};if(t)(Array.isArray(t)?t:t.split(",")).forEach(function(e){if((e=e.trim()).startsWith("."))n.atem=e.substring(1),n.item=e.substring(1),n.deal=e.substring(1);else if(e.endsWith("."))n[e.substring(0,e.length-1)]=o;else if(e.indexOf(".")){var r=e.split(".",2);n[r[0]]=r[1]}else s(u,"WARN!! NO ALIAS SUPPORT name:"+t)});return e.splits[o]=n,e}var i=a.parser[r];return i||s(u,"ERROR! invalid type:"+r+", name:"+t),t&&i&&(e.parser[t]={name:o,trans:i},e.serial[o]||(e.serial[o]={name:t,trans:a.serial[r]})),e},e);else{var t=a.parser.S;e.parser[r]={name:o,trans:t},e.serial[o]||(e.serial[o]={name:r,trans:a.serial.S})}return e};return e=Array.isArray(r)?f.reduce(r,function(e,r){return e=t(e,r)},e):t(e,r)},t),a._map=t},transform_row:function(e){var r={};return r=f.reduce(e,function(e,r,t){var n=a._map.parser[t];return n||s(u,"ERROR! invalid parser by key:"+t),n&&(e[n.name]=n.trans(r)),e},r)},transform_node:function(e){var r={};return r=f.reduce(e,function(e,r,t){var n=a._map.serial[t];return n||s(u,"ERROR! invalid serial by name:"+t),n&&(e[n.name]=n.trans(r)),e},r)},split_node:function(e,i,o,u){var r={};return r=f.reduce(e,function(e,r,t){if(t.startsWith("_")||t.startsWith("$"))return e;var n=a._map.splits[t];return n?(n.atem&&(i[n.atem]=r),n.item&&(o[n.item]=r),n.deal&&(u[n.deal]=r)):i[t]=r,e},r)},merge_node:function(e,i,o,u){i=i||{},o=o||{},u=u||{};var r={};return d(e,r=f.reduce(e,function(e,r,t){if(t.startsWith("_")||t.startsWith("$"))return e;var n=a._map.splits[t];return n?(n.item&&(e[t]=o[n.item]),n.atem&&(e[t]=i[n.atem]),n.deal&&(e[t]=u[n.deal])):void 0!==i[t]&&(e[t]=i[t]),e},r)),r},parser:{I:function(e){return parseInt(_(e,0))},N:function(e){return _(e,0)},F:function(e){return v(e,0)},F1:function(e){return Math.round(10*v(e,0))/10},F2:function(e){return Math.round(100*v(e,0))/100},F3:function(e){return Math.round(1e3*v(e,0))/1e3},U:function(e){throw new Error("not implemented!")},O:function(e){throw new Error("not implemented!")},A:function(e){return e?(e||"").split(","):[]},AI:function(e){return e?(e||"").split(",").map(function(e){return _(e,0)}):[]},AN:function(e){return e?(e||"").split(",").map(function(e){return _(e,0)}):[]},M:function(e){return JSON.parse(e)},S:function(e){return"string"==typeof e?e.trim():""+e},B:function(e){return"Y"===(e=(e||"").toUpperCase())||"T"===e||"1"===e||"true"===e}},serial:{I:function(e){return e},N:function(e){return e},F:function(e){return e},F1:function(e){return _(Math.round(10*e))/10},F2:function(e){return _(Math.round(100*e))/100},F3:function(e){return _(Math.round(1e3*e))/1e3},U:function(e){throw new Error("not implemented!")},O:function(e){throw new Error("not implemented!")},A:function(e){return(e||[]).join(",")},AI:function(e){return(e||[]).join(",")},AN:function(e){return(e||[]).join(",")},M:function(e){return p(e)},S:function(e){return""+e},B:function(e){return e?"Y":"N"}}}).initialize(),n[e]=a)}return n};'use strict';
/** @type {function(?): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(string) {
  return typeof string;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} root
 * @return {?}
 */
module.exports = function(root) {
  /**
   * @param {string} name
   * @param {string} value
   * @return {?}
   */
  function val(name, value) {
    if ("function" == typeof _.get_env) {
      return _.get_env(name, value);
    }
    if ("function" == typeof _.environ) {
      return _.environ(name, value);
    }
    var to = process && process.env[name] || void 0;
    return void 0 === to ? value : to;
  }
  /**
   * @return {?}
   */
  function i() {
    return {
      create : function(category, fileName) {
        category = category || msg;
        fileName = fileName || "/var/www/html/logs/";
        var log4js = require("log4js");
        /** @type {string} */
        var logfile = fileName + category + ".log";
        return log4js.loadAppender("file"), log4js.addAppender(log4js.appenders.file(logfile), category), log4js.getLogger(category);
      }
    };
  }
  /**
   * @param {!Object} target
   * @param {!Object} source
   * @return {?}
   */
  function extend(target, source) {
    var prop;
    for (prop in source) {
      target[prop] = source[prop];
    }
    return target;
  }
  /**
   * @param {!Function} o
   * @param {boolean} space
   * @return {?}
   */
  function stringify(o, space) {
    if (space) {
      var copy = {};
      Object.keys(o).sort().forEach(function(k) {
        copy[k] = o[k];
      });
      o = copy;
    }
    return o && JSON.stringify(o) || o;
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function set(value) {
    var d = value && "object" === (void 0 === value ? "undefined" : _typeof(value)) ? value : value ? new Date(value) : new Date;
    var month = d.getFullYear();
    var i = d.getMonth() + 1;
    var aByte = (value = d.getDate(), d.getHours());
    var itemsTo = d.getMinutes();
    var iatom = d.getSeconds();
    return (month < 10 ? "0" : "") + month + "-" + (i < 10 ? "0" : "") + i + "-" + (value < 10 ? "0" : "") + value + " " + (aByte < 10 ? "0" : "") + aByte + ":" + (itemsTo < 10 ? "0" : "") + itemsTo + ":" + (iatom < 10 ? "0" : "") + iatom;
  }
  /**
   * @param {?} match
   * @return {?}
   */
  function value(match) {
    var cache_message = (match = match || set()).split(" ");
    var rparts = cache_message[0].split("-");
    var sArrDayId = cache_message[1].split(":");
    /** @type {number} */
    var i = parseInt(rparts[0]);
    /** @type {number} */
    var mm2 = parseInt(rparts[1]) - 1;
    /** @type {number} */
    var dtDate = parseInt(rparts[2]);
    /** @type {number} */
    var hh = parseInt(sArrDayId[0]);
    /** @type {number} */
    var mm = parseInt(sArrDayId[1]);
    /** @type {number} */
    var integer = parseInt(sArrDayId[2]);
    return Date.prototype.add_seconds || (Date.prototype.add_seconds = function(num) {
      return this.setSeconds(this.getSeconds() + num), this;
    }), Date.prototype.ts || (Date.prototype.ts = function() {
      return set(this);
    }), new Date(i, mm2, dtDate, hh, mm, integer, 0);
  }
  /**
   * @param {string} str
   * @param {string} color
   * @param {number} position
   * @return {?}
   */
  function debug(str, color, position) {
    if (!str) {
      return str;
    }
    position = position || 4;
    /** @type {number} */
    position = position - str.length;
    if (str = "           ".substr(0, position = position < 0 ? 0 : position) + str + ":", self.is_dev && color) {
      /** @type {string} */
      str = {
        red : "\u001b[31m",
        green : "\u001b[32m",
        yellow : "\u001b[33m",
        blue : "\u001b[34m",
        magenta : "\u001b[35m",
        cyan : "\u001b[36m",
        white : "\u001b[37m"
      }[color] + str + "\u001b[0m";
    }
    return str;
  }
  /**
   * @param {?} value
   * @param {number} n
   * @return {?}
   */
  function callback(value, n) {
    try {
      return "" === value || null == value ? n : "number" == typeof value && value % 1 == 0 ? value : "number" == typeof value ? parseInt(value) : (value = (value = "0" + value).startsWith("0-") ? value.substr(1) : value, parseInt(value.replace(/,/gi, "").trim()));
    } catch (a) {
      return error("err at _N: x=" + value + ";" + (void 0 === value ? "undefined" : _typeof(value)) + ";" + (a.message || ""), a), n;
    }
  }
  /**
   * @param {?} value
   * @param {number} n
   * @return {?}
   */
  function cb(value, n) {
    try {
      return "" === value || null == value ? n : "number" == typeof value && value % 1 == 0 ? value : "number" == typeof value ? parseFloat(value) : (value = (value = "0" + value).startsWith("0-") ? value.substr(1) : value, parseFloat(value.replace(/,/gi, "").trim()));
    } catch (a) {
      return error("err at _N: x=" + value + ";" + (void 0 === value ? "undefined" : _typeof(value)) + ";" + (a.message || ""), a), n;
    }
  }
  /**
   * @param {?} migration
   * @return {?}
   */
  function next(migration) {
    return new Promise(function(resolve, canCreateDiscussions) {
      resolve(migration);
    });
  }
  /**
   * @return {?}
   */
  function exports() {
    /** @type {string} */
    var pluginName = "_trans_handler_prod";
    var options = self[pluginName];
    return options || (log(msg, "build transformer of prod!"), (options = {
      initialize : function() {
        var ok = function(type) {
          if (!type) {
            throw new Error("param:name is required!");
          }
          var fs = require("fs");
          var path = require("path");
          var yaml = require("js-yaml");
          var filename = path.resolve(__dirname, "../data/" + type + (type.endsWith(".yml") ? "" : ".yml"));
          try {
            return log(msg, "load-sync-file =", filename), yaml.safeLoad(fs.readFileSync(filename, "utf8"));
          } catch (thrown) {
            error(msg, "error:load-sync-yaml(" + type + ")=", thrown);
          }
          return {};
        }("prod-fields");
        var result = ok && ok.fields;
        if (!result) {
          throw new Error(msg + "valid fields definition is required!");
        }
        var map = {
          parser : {},
          serial : {},
          splits : {}
        };
        map = _.reduce(result, function(context, item, i) {
          /**
           * @param {!Object} data
           * @param {string} name
           * @return {?}
           */
          var init = function(data, name) {
            if ("object" === (void 0 === name ? "undefined" : _typeof(name))) {
              data = _.reduce(name, function(self, name, type) {
                if ("X" == type) {
                  var result = {
                    atem : null,
                    item : null,
                    deal : null
                  };
                  if (name) {
                    (Array.isArray(name) ? name : name.split(",")).forEach(function(s) {
                      if ((s = s.trim()).startsWith(".")) {
                        result.atem = s.substring(1);
                        result.item = s.substring(1);
                        result.deal = s.substring(1);
                      } else {
                        if (s.endsWith(".")) {
                          /** @type {string} */
                          result[s.substring(0, s.length - 1)] = i;
                        } else {
                          if (s.indexOf(".")) {
                            var arrMatch = s.split(".", 2);
                            result[arrMatch[0]] = arrMatch[1];
                          } else {
                            error(msg, "WARN!! NO ALIAS SUPPORT name:" + name);
                          }
                        }
                      }
                    });
                  }
                  return self.splits[i] = result, self;
                }
                var condition = options.parser[type];
                return condition || error(msg, "ERROR! invalid type:" + type + ", name:" + name), name && condition && (self.parser[name] = {
                  name : i,
                  trans : condition
                }, self.serial[i] || (self.serial[i] = {
                  name : name,
                  trans : options.serial[type]
                })), self;
              }, data);
            } else {
              var S = options.parser.S;
              data.parser[name] = {
                name : i,
                trans : S
              };
              if (!data.serial[i]) {
                data.serial[i] = {
                  name : name,
                  trans : options.serial.S
                };
              }
            }
            return data;
          };
          return context = Array.isArray(item) ? _.reduce(item, function(canvas, url) {
            return canvas = init(canvas, url);
          }, context) : init(context, item);
        }, map);
        options._map = map;
      },
      transform_row : function(arr) {
        var result = {};
        return result = _.reduce(arr, function(updated, value, name) {
          var out = options._map.parser[name];
          return out || error(msg, "ERROR! invalid parser by key:" + name), out && (updated[out.name] = out.trans(value)), updated;
        }, result);
      },
      transform_node : function(obj) {
        var ctx = {};
        return ctx = _.reduce(obj, function(item, text, key) {
          var condition = options._map.serial[key];
          return condition || error(msg, "ERROR! invalid serial by name:" + key), condition && (item[condition.name] = condition.trans(text)), item;
        }, ctx);
      },
      split_node : function(x, obj, data, result) {
        var bounds = {};
        return bounds = _.reduce(x, function(canCreateDiscussions, r, i) {
          if (i.startsWith("_") || i.startsWith("$")) {
            return canCreateDiscussions;
          }
          var rule = options._map.splits[i];
          return rule ? (rule.atem && (obj[rule.atem] = r), rule.item && (data[rule.item] = r), rule.deal && (result[rule.deal] = r)) : obj[i] = r, canCreateDiscussions;
        }, bounds);
      },
      merge_node : function(value, map, item, lib) {
        map = map || {};
        item = item || {};
        lib = lib || {};
        var result = {};
        return extend(value, result = _.reduce(value, function(global, canCreateDiscussions, key) {
          if (key.startsWith("_") || key.startsWith("$")) {
            return global;
          }
          var info = options._map.splits[key];
          return info ? (info.item && (global[key] = item[info.item]), info.atem && (global[key] = map[info.atem]), info.deal && (global[key] = lib[info.deal])) : void 0 !== map[key] && (global[key] = map[key]), global;
        }, result)), result;
      },
      parser : {
        I : function(a) {
          return parseInt(callback(a, 0));
        },
        N : function(b) {
          return callback(b, 0);
        },
        F : function(b) {
          return cb(b, 0);
        },
        F1 : function(a) {
          return Math.round(10 * cb(a, 0)) / 10;
        },
        F2 : function(e) {
          return Math.round(100 * cb(e, 0)) / 100;
        },
        F3 : function(def) {
          return Math.round(1E3 * cb(def, 0)) / 1E3;
        },
        U : function(a) {
          throw new Error("not implemented!");
        },
        O : function(s) {
          throw new Error("not implemented!");
        },
        A : function(text) {
          return text ? (text || "").split(",") : [];
        },
        AI : function(params) {
          return params ? (params || "").split(",").map(function(e) {
            return callback(e, 0);
          }) : [];
        },
        AN : function(indicesCat) {
          return indicesCat ? (indicesCat || "").split(",").map(function(e) {
            return callback(e, 0);
          }) : [];
        },
        M : function(value) {
          return JSON.parse(value);
        },
        S : function(string) {
          return "string" == typeof string ? string.trim() : "" + string;
        },
        B : function(value) {
          return "Y" === (value = (value || "").toUpperCase()) || "T" === value || "1" === value || "true" === value;
        }
      },
      serial : {
        I : function(val) {
          return val;
        },
        N : function(d) {
          return d;
        },
        F : function(b) {
          return b;
        },
        F1 : function(n) {
          return callback(Math.round(10 * n)) / 10;
        },
        F2 : function(litresInCubicFeet) {
          return callback(Math.round(100 * litresInCubicFeet)) / 100;
        },
        F3 : function(litresInCubicFeet) {
          return callback(Math.round(1E3 * litresInCubicFeet)) / 1E3;
        },
        U : function(a) {
          throw new Error("not implemented!");
        },
        O : function(s) {
          throw new Error("not implemented!");
        },
        A : function(b) {
          return (b || []).join(",");
        },
        AI : function(params) {
          return (params || []).join(",");
        },
        AN : function(extraTransforms) {
          return (extraTransforms || []).join(",");
        },
        M : function(y) {
          return stringify(y);
        },
        S : function(value) {
          return "" + value;
        },
        B : function(value) {
          return value ? "Y" : "N";
        }
      }
    }).initialize(), self[pluginName] = options);
  }
  var self = {};
  var msg = debug("util");
  var _ = root._;
  if (!_) {
    throw new Error("$_ is required!");
  }
  /** @type {string} */
  self.name = msg + "-utils";
  /** @type {function(number): ?} */
  self.ts = set;
  /** @type {function(?): ?} */
  self.dt = value;
  /** @type {function(?): ?} */
  self.now = value;
  /**
   * @param {?} str
   * @param {?} escapeQuotes
   * @return {?}
   */
  self.escape = function(str, escapeQuotes) {
    if (void 0 === str) {
      return "NULL";
    }
    if (options = str, "number" == typeof options && options % 1 == 0) {
      return str;
    }
    var options;
    if ("object" == (void 0 === (str = str || "") ? "undefined" : _typeof(str))) {
      /** @type {string} */
      str = JSON.stringify(str);
    }
    str = str.replace(/\\/g, "\\\\").replace(/\$/g, "\\$").replace(/'/g, "\\'").replace(/"/g, '\\"');
    if (escapeQuotes) {
      /** @type {string} */
      str = decodeURI(str);
    }
    return "'" + str + "'";
  };
  /**
   * @param {?} payload
   * @return {?}
   */
  self.cleanup = function(payload) {
    return Object.keys(payload).reduce(function(fieldsConfig, fname) {
      return fname.startsWith("_") && delete fieldsConfig[fname], fname.startsWith("$") && delete fieldsConfig[fname], fieldsConfig;
    }, payload);
  };
  /**
   * @param {!Object} object
   * @param {!Object} properties
   * @return {?}
   */
  self.updated = function(object, properties) {
    return Object.keys(properties).reduce(function(storable, k) {
      if (object[k] !== properties[k]) {
        if (null === object[k] && "" === properties[k]) {
          return storable;
        }
        storable[k] = properties[k];
      }
      return storable;
    }, {});
  };
  /**
   * @param {!Object} properties
   * @return {?}
   */
  self.copy = function(properties) {
    return Object.keys(properties).reduce(function(cssValues, key) {
      return cssValues[key] = properties[key], cssValues;
    }, {});
  };
  /** @type {function(?, number): ?} */
  self.N = callback;
  /** @type {function(?, number): ?} */
  self.F = cb;
  /**
   * @return {?}
   */
  self.current_time_ms = function() {
    /** @type {number} */
    var ret = (new Date).getTime();
    return ret = ret + 0;
  };
  /** @type {function(string, string, number): ?} */
  self.NS = debug;
  /** @type {function(string, string): ?} */
  self.env = val;
  /** @type {function(!Object, !Object): ?} */
  self.extend = extend;
  /**
   * @param {number} prop
   * @return {?}
   */
  self.isset = function(prop) {
    return void 0 !== prop;
  };
  /**
   * @param {?} elem
   * @return {?}
   */
  self.empty = function(elem) {
    return !elem;
  };
  /**
   * @param {string} left
   * @param {string} right
   * @return {?}
   */
  self.min = function(left, right) {
    return left < right ? left : right;
  };
  /**
   * @param {string} y
   * @param {string} x
   * @return {?}
   */
  self.max = function(y, x) {
    return x < y ? y : x;
  };
  /**
   * @param {number} val
   * @return {?}
   */
  self.round = function(val) {
    return Math.round(val);
  };
  /** @type {function(!Function, boolean): ?} */
  self.json = stringify;
  /**
   * @param {!Object} a
   * @param {!Object} obj
   * @return {?}
   */
  self.diff = function(a, obj) {
    return Object.keys(a).reduce(function(result, key) {
      if (obj.hasOwnProperty(key)) {
        if (_.isEqual(a[key], obj[key])) {
          var t = result.indexOf(key);
          result.splice(t, 1);
        }
      } else {
        result.push(key);
      }
      return result;
    }, Object.keys(obj));
  };
  /**
   * @param {!Object} list
   * @param {number} map
   * @return {?}
   */
  self.copy_node = function(list, map) {
    return map = void 0 !== map && map, Object.keys(list).reduce(function(array, i) {
      return i.startsWith("_") || i.startsWith("$") || (array[i] = map ? null : list[i]), array;
    }, {});
  };
  /**
   * @param {!Object} self
   * @param {!Object} input
   * @return {?}
   */
  self.bare_node = function(self, input) {
    var result = {};
    result._id = self._id;
    result._current_time = self._current_time;
    if (input) {
      result = extend(result, input);
    }
    return result;
  };
  /**
   * @param {!Array} a
   * @param {(Object|string)} b
   * @return {?}
   */
  self.diff_node = function(a, b) {
    /** @type {!Array} */
    var list = [];
    /** @type {!Array} */
    var fields = [];
    return Object.keys(a).forEach(function(value) {
      if (!(value.startsWith("_") || value.startsWith("$"))) {
        list.push(value);
      }
    }), Object.keys(b).forEach(function(i) {
      if (!(i.startsWith("_") || i.startsWith("$"))) {
        fields.push(i);
      }
    }), list.reduce(function(e, key) {
      if (b.hasOwnProperty(key)) {
        if (_.isEqual(a[key], b[key])) {
          var t = e.indexOf(key);
          e.splice(t, 1);
        }
      } else {
        e.push(key);
      }
      return e;
    }, fields);
  };
  /**
   * @param {number} value
   * @return {?}
   */
  self.hash = function(value) {
    return function(e, canCreateDiscussions, seed) {
      var i;
      var n = void 0;
      var hval = void 0 === seed ? 2166136261 : seed;
      /** @type {number} */
      n = 0;
      i = e.length;
      for (; n < i; n++) {
        /** @type {number} */
        hval = hval ^ e.charCodeAt(n);
        hval = hval + ((hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24));
      }
      return canCreateDiscussions ? ("0000000" + (hval >>> 0).toString(16)).substr(-8) : hval >>> 0;
    }(value = "string" != typeof(value = "object" === (void 0 === (value = value || "") ? "undefined" : _typeof(value)) ? stringify(value, true) : value) ? String(value) : value);
  };
  /**
   * @param {?} val
   * @param {?} data
   * @return {?}
   */
  self.md5 = function(val, data) {
    var crypto = require("crypto");
    return data = void 0 === data ? "hex" : data, crypto.createHash("md5").update(val).digest(data);
  };
  /**
   * @param {?} string
   * @param {string} key
   * @param {string} algo
   * @param {string} encoding
   * @return {?}
   */
  self.hmac = function(string, key, algo, encoding) {
    var crypto = require("crypto");
    return key = key || "XENI", encoding = encoding || "base64", algo = algo || "sha256", crypto.createHmac(algo, key).update(string).digest(encoding);
  };
  /** @type {function(): ?} */
  self.logger_factory = i;
  /**
   * @param {string} type
   * @return {?}
   */
  self.load_data_csv = function(type) {
    if (!type) {
      throw new Error("param:name is required!");
    }
    var fs = require("fs");
    var h = require("csv-parse");
    var globalFile = require("path").resolve(__dirname, "../data/" + type + (type.endsWith(".csv") ? "" : ".csv"));
    return new Promise(function($, originListener) {
      fs.readFile(globalFile, "UTF-8", function(e, write_byte) {
        if (e) {
          return originListener(e);
        }
        h(write_byte, {
          columns : true,
          trim : true
        }, function(e, body) {
          return e ? originListener(e) : $(body);
        });
      });
    });
  };
  /**
   * @param {string} type
   * @return {?}
   */
  self.load_data_yml = function(type) {
    if (!type) {
      throw new Error("param:name is required!");
    }
    var fs = require("fs");
    var path = require("path");
    var yaml = require("js-yaml");
    var filename = path.resolve(__dirname, "../data/" + type + (type.endsWith(".yml") ? "" : ".yml"));
    return log(msg, "load file =", filename), new Promise(function(saveNotifs, obtainGETData) {
      try {
        saveNotifs(yaml.safeLoad(fs.readFileSync(filename, "utf8")));
      } catch (val) {
        obtainGETData(val);
      }
    });
  };
  /** @type {function(?): ?} */
  self.promise = next;
  /**
   * @param {!Array} collection
   * @param {?} operator
   * @return {?}
   */
  self.promise_sequence = function(collection, operator) {
    var result = next(collection.shift());
    return result = collection.reduce(function(actionAsPromise, a) {
      return actionAsPromise.then(function() {
        return operator(a);
      });
    }, result.then(function(a) {
      return operator(a);
    }));
  };
  /**
   * @param {?} featureExtractorOrArray
   * @return {?}
   */
  self.trans_row_to_prod_node = function(featureExtractorOrArray) {
    if (!featureExtractorOrArray) {
      return null;
    }
    if (Array.isArray(featureExtractorOrArray)) {
      throw new Error("row is array.");
    }
    return exports().transform_row(featureExtractorOrArray);
  };
  /**
   * @param {!Array} value
   * @return {?}
   */
  self.trans_prod_node_to_row = function(value) {
    if (!value) {
      return null;
    }
    if ("object" != (void 0 === value ? "undefined" : _typeof(value))) {
      throw new Error("node must be object. but is " + (void 0 === value ? "undefined" : _typeof(value)));
    }
    return exports().transform_node(value);
  };
  /**
   * @param {!Array} string
   * @param {!Array} value
   * @param {!Array} global
   * @param {!Array} obj
   * @return {?}
   */
  self.split_prod_node_to_aid = function(string, value, global, obj) {
    if (!string) {
      return null;
    }
    if ("object" != (void 0 === string ? "undefined" : _typeof(string))) {
      throw new Error("node must be object. but is " + (void 0 === string ? "undefined" : _typeof(string)));
    }
    if ("object" != (void 0 === value ? "undefined" : _typeof(value))) {
      throw new Error("atem must be object. but is " + (void 0 === value ? "undefined" : _typeof(value)));
    }
    if ("object" != (void 0 === global ? "undefined" : _typeof(global))) {
      throw new Error("item must be object. but is " + (void 0 === global ? "undefined" : _typeof(global)));
    }
    if ("object" != (void 0 === obj ? "undefined" : _typeof(obj))) {
      throw new Error("deal must be object. but is " + (void 0 === obj ? "undefined" : _typeof(obj)));
    }
    return exports().split_node(string, value, global, obj);
  };
  /**
   * @param {!Array} file
   * @param {!Array} val
   * @param {!Array} str
   * @param {!Array} value
   * @return {?}
   */
  self.merge_prod_node_by_aid = function(file, val, str, value) {
    if (!file) {
      return null;
    }
    if ("object" != (void 0 === file ? "undefined" : _typeof(file))) {
      throw new Error("node must be object. but is " + (void 0 === file ? "undefined" : _typeof(file)));
    }
    if ("object" != (void 0 === val ? "undefined" : _typeof(val))) {
      throw new Error("atem must be object. but is " + (void 0 === val ? "undefined" : _typeof(val)));
    }
    if ("object" != (void 0 === str ? "undefined" : _typeof(str))) {
      throw new Error("item must be object. but is " + (void 0 === str ? "undefined" : _typeof(str)));
    }
    if ("object" != (void 0 === value ? "undefined" : _typeof(value))) {
      throw new Error("deal must be object. but is " + (void 0 === value ? "undefined" : _typeof(value)));
    }
    return exports().merge_node(file, val, str, value);
  };
  var log = log || root.log || function() {
    return execute(arguments, "I");
  };
  var error = error || root.err || function() {
    return execute(arguments, "E");
  };
  /** @type {function(): ?} */
  var path = path || function() {
    var undefined = val("ENV") || val("NODE_ENV") || val("STAGE");
    return "production" !== undefined && "op" !== undefined;
  };
  self.log = log;
  self.err = error;
  self.is_dev = path();
  /** @type {null} */
  var date = null;
  /**
   * @param {!Array} format
   * @param {string} time
   * @return {?}
   */
  var execute = function(format, time) {
    return date ? "E" == time ? date.error.apply(date, format) : date.info.apply(date, format) : "undefined" != typeof console && (Array.isArray(format) || (format = Array.prototype.slice.call(format)), time && format.unshift(time), format.unshift(set()), "E" == time ? console.error.apply(console, format) : console.log.apply(console, format)), true;
  };
  return self;
};

