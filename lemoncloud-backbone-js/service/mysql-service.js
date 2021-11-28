"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(e,r){r=r||"MS";var q=e.U,t=e.R;if(!q)throw new Error("$U is required!");if(!t)throw new Error("$R is required!");var I=q.NS(r,"blue"),$=e.log,n=(e.inf,e.err,{});function J(e,r){return q.escape(e,r)}n.do_get_last_id=function(e){return e?e.startsWith("#")?Promise.resolve(0):M("select last_insert_id(id) as id from "+e+"_seq order by id desc limit 1").then(function(e){return $(I,"> get-last-id res =",q.json(e)),(e&&e[0]||{}).id||0}):Promise.reject(new Error(I+"parameter:type is required"))},n.do_get_next_id=function(e){return e?e.startsWith("#")?Promise.resolve(0):M("insert into "+e+"_seq (id) values (0)").then(function(e){return $(I,"> get-next-id res =",q.json(e)),e&&e.insertId||0}):Promise.reject(new Error(I+"parameter:type is required"))},n.do_create_id_seq=function(e,r){if(!e)return Promise.reject(new Error(I+"parameter:type is required"));if(e.startsWith("#"))return Promise.resolve(!1);var t="create table "+e+"_seq (id int unsigned not null auto_increment primary key) auto_increment = "+(r=r||1e6)+" ";return $(I+"> query=",t),M(t).then(function(e){return 0<(e&&e.serverStatus||0)})},n.do_delete_id_seq=function(e){if(!e)return Promise.reject(new Error(I+"parameter:type is required"));if(e.startsWith("#"))return Promise.resolve(!1);var r="drop table "+e+"_seq";return $(I+"> query=",r),M(r).then(function(e){return $(I+">> result=",e),0<(e&&e.serverStatus||0)})},n.do_promise_query=function(e,r){return e?r&&!Array.isArray(r)?Promise.reject(new Error(I+"parameter:values should be array!")):M(e,r):Promise.reject(new Error(I+"parameter:query is required"))},n.do_save_node=i,n.do_save_node_hist=function(c,_,h){var m=!!T,y=JSON.stringify;m&&$(I+"do_save_node_hist_async("+c+"). node=",y(_));var e=i(c,_);return e=e.then(function(e){m&&$(I+"> save-node-hist",e);var r=e.updated_node||{},t="id",n="";if(0<c.indexOf(":")){var i=c.split(":");if(c=i[0],0<(n=i[1]).indexOf(",")){var o=n.split(",");t=o[0],n=o[1]}}var s=_[t]||_[t.toLowerCase()],a=n?_[n]||_[n.toLowerCase()]:null,u="[hist:"+c+".id:"+s+(n?","+n+":"+a:"")+"]",d=h||[],f=0;if(f+=e.inserted||0,r)for(var p in r)r[p],0<=d.indexOf(p)&&f++;(f||m)&&$(I+"> update_hist"+u+".hist_updated_count = "+f,y(r));var v={inserted:0,updated:0};if(f){t&&d.indexOf(t)<0&&d.push(t),n&&d.indexOf(n)<0&&d.push(n);var l="INSERT INTO "+c+"_hist ("+d.join(",")+") (SELECT "+d.join(",")+" FROM "+c+" WHERE "+t+" = "+J(s)+(a?" and "+n+" = "+J(a):"")+")";return m&&$(I+">> update"+u+".query=",l),l?M(l).then(function(e){return m&&$(I+">>> update"+u+".query.rs=",y(e)),v.inserted=e&&e.affectedRows||0,v}):v}return v})},n.do_read_node=function(e,t){if(!e)return Promise.reject(new Error(I+"parameter:table_name is required"));if(!t)return Promise.reject(new Error(I+"parameter:node is required"));if(void 0===t.id)return Promise.reject(new Error(I+"parameter:id is required"));var n=T,i=JSON.stringify;n&&$(I+"do_read_node_async("+e+"): ",i(t));var r="id",o="",s="";if(0<e.indexOf(":")){var a=e.split(":");if(e=a[0],0<(o=a[1]).indexOf(",")){var u=o.split(",");r=u[0]||"",o=u[1]||"",s=u[2]||""}}var d=t[r]||t[r.toLowerCase()],f=o?t[o]||t[o.toLowerCase()]:null,p=s?t[s]||t[s.toLowerCase()]:null,v="["+e+".id:"+d+(o?","+o+":"+f:"")+(s?","+s+":"+p:"")+"]",l=[],c=[];for(var _ in t){var h=_.toLowerCase(),m=!1;_||(m=!0),r!==_&&r!==h||(m=!0),void 0===t[_]&&(m=!0),h.startsWith("_")&&(m=!0),h.startsWith("$")&&(m=!0);var y=t[_];m||(l.push(_),c.push(y))}var w="select "+(l.length?r+", "+l.join(","):"*")+" from "+e+" where "+r+" = "+J(d)+(o?" and "+o+" = "+J(f):"")+(s?" and "+s+" = "+J(p):"")+" limit 1";return n&&$(I+">> read"+v+".query=",w),M(w).then(function(e){n&&$(I+">>> update.query.rs=",i(e));var r=e[0]||{};return t=q.extend(t,r),r})},n.do_test_self=function(e){return e},e(r,n);var T=!!q.is_dev;function M(e,r){return void 0===r?t.promise_query(e):t.promise_query(e,r)}function i(q,j,E){if(!q)return Promise.reject(new Error(I+"parameter:table_name is required"));if(!j)return Promise.reject(I+"parameter:node is required");var P=T,b=JSON.stringify;P&&$(I+"do_save_node_async("+q+"): ",b(j));var g="id",O="",S="";if(0<q.indexOf(":")){var e=q.split(":");if(q=e[0],0<(O=e[1]).indexOf(",")){var r=O.split(",");g=r[0]||"",O=r[1]||"",S=r[2]||""}}var x=j[g]||j[g.toLowerCase()],C=O?j[O]||j[O.toLowerCase()]:null,L=S?j[S]||j[S.toLowerCase()]:null,W="["+q+".id:"+x+(O?","+O+":"+C:"")+(S?","+S+":"+L:"")+"]",R=[],N=[];for(var t in j){var n=t.toLowerCase(),i=!1;t||(i=!0),g!==t&&g!==n||(i=!0),void 0===j[t]&&(i=!0),n.startsWith("_")&&(i=!0),n.startsWith("$")&&(i=!0);var o=j[t];i||(R.push(t),N.push(o))}if(R.length<1)throw new Error(I+"WARN! node"+W+" nothing to update");var s="select "+g+", "+R.join(",")+" from "+q+" where "+g+" = "+J(x)+(O?" and "+O+" = "+J(C):"")+(S?" and "+S+" = "+J(L):"")+" limit 1";"0"!==x&&0!==x||(s="-- WARN! dummy sql for no rows \nselect * from "+q+" where 1<>1 limit 1");var A={inserted:0,updated:0};return P&&$(I+"> select.query=",s),s?M(s).then(function(e){var r=e instanceof Error;P&&$(I+">> select.rows["+(void 0===e?"undefined":_typeof(e))+", Error:"+r+"]=",b(e));var t="",n=!e||e.length<1,i=void 0,o={};if(R.push("created_at"),N.push("now()"),R.push("updated_at"),N.push("now()"),n){if(P&&$(I+">> WARN! node"+W+" not found"),E)for(var s in E){var a=E[s];R.push(s),N.push(a)}i=[];var u=[];for(var d in N){var f=N[d];"now()"===f?u.push(f):(u.push("?"),i.push(f))}t="insert into "+q+" ("+g+","+R.join(",")+") values ("+J(x)+","+u.join(",")+")"}else{var p=e[0];P&&$(I+">> select.found=",b(p));var v=0;for(var l in p){var c=l.toLowerCase();if(c!==g&&("created_at"!==c&&"updated_at"!==c)){var _=p[l],h=void 0!==j[c]?j[c]:_;_!==h&&(v++,o[c]=h)}}if(P&&$(I+">> update_count"+W+"="+(v||0)+", update_set=",o),0<v){var m=[];for(var y in i=[],o){var w=o[y];m.push(y+"=?"),i.push(w)}m.push("updated_at = now()"),t="update "+q+" set "+m.join(", ")+" where "+g+" = "+J(x)+" "+(O?" and "+O+" = "+J(C):"")+(S?" and "+S+" = "+J(L):"")}else t="";o[g]=x,O&&(o[O]=C),S&&(o[S]=L)}return P&&$(I+">> update.query="+t+", values=",b(i)),t?M(t,i).then(function(e){return P&&$(I+">>> update.query.rs=",b(e)),n?(A.insertId=e&&e.insertId||0,A.inserted=e&&e.affectedRows||0):(A.updated=e&&e.changedRows||0,A.updated_node=o),A}):A}):A}return n};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a22) {
  return typeof a22;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!Object} r
 * @param {string} x
 * @return {?}
 */
module.exports = function(r, x) {
  /**
   * @param {?} val
   * @param {?} name
   * @return {?}
   */
  function format(val, name) {
    return a.escape(val, name);
  }
  /**
   * @param {string} data
   * @param {number} key
   * @return {?}
   */
  function reject(data, key) {
    return void 0 === key ? q.promise_query(data) : q.promise_query(data, key);
  }
  /**
   * @param {string} tag
   * @param {!Object} data
   * @param {!Object} datasource
   * @return {?}
   */
  function create(tag, data, datasource) {
    if (!tag) {
      return Promise.reject(new Error(key + "parameter:table_name is required"));
    }
    if (!data) {
      return Promise.reject(key + "parameter:node is required");
    }
    /** @type {boolean} */
    var cb = finalCallback;
    /** @type {function(this:JSONType, *, (Array<string>|function(string, *): *|null)=, (number|string)=): string} */
    var stringify = JSON.stringify;
    if (cb) {
      callback(key + "do_save_node_async(" + tag + "): ", stringify(data));
    }
    /** @type {string} */
    var name = "id";
    /** @type {string} */
    var value = "";
    /** @type {string} */
    var id = "";
    if (0 < tag.indexOf(":")) {
      var _i = tag.split(":");
      if (tag = _i[0], 0 < (value = _i[1]).indexOf(",")) {
        var BROWSER_ENGINES = value.split(",");
        name = BROWSER_ENGINES[0] || "";
        value = BROWSER_ENGINES[1] || "";
        id = BROWSER_ENGINES[2] || "";
      }
    }
    var url = data[name] || data[name.toLowerCase()];
    var type = value ? data[value] || data[value.toLowerCase()] : null;
    var f = id ? data[id] || data[id.toLowerCase()] : null;
    /** @type {string} */
    var dynamicValue = "[" + tag + ".id:" + url + (value ? "," + value + ":" + type : "") + (id ? "," + id + ":" + f : "") + "]";
    /** @type {!Array} */
    var row = [];
    /** @type {!Array} */
    var colors = [];
    var event;
    for (event in data) {
      /** @type {string} */
      var value = event.toLowerCase();
      /** @type {boolean} */
      var i = false;
      if (!event) {
        /** @type {boolean} */
        i = true;
      }
      if (!(name !== event && name !== value)) {
        /** @type {boolean} */
        i = true;
      }
      if (void 0 === data[event]) {
        /** @type {boolean} */
        i = true;
      }
      if (value.startsWith("_")) {
        /** @type {boolean} */
        i = true;
      }
      if (value.startsWith("$")) {
        /** @type {boolean} */
        i = true;
      }
      var fn = data[event];
      if (!i) {
        row.push(event);
        colors.push(fn);
      }
    }
    if (row.length < 1) {
      throw new Error(key + "WARN! node" + dynamicValue + " nothing to update");
    }
    /** @type {string} */
    var err = "select " + name + ", " + row.join(",") + " from " + tag + " where " + name + " = " + format(url) + (value ? " and " + value + " = " + format(type) : "") + (id ? " and " + id + " = " + format(f) : "") + " limit 1";
    if (!("0" !== url && 0 !== url)) {
      /** @type {string} */
      err = "-- WARN! dummy sql for no rows \nselect * from " + tag + " where 1<>1 limit 1";
    }
    var item = {
      inserted : 0,
      updated : 0
    };
    return cb && callback(key + "> select.query=", err), err ? reject(err).then(function(e) {
      /** @type {boolean} */
      var hasError = e instanceof Error;
      if (cb) {
        callback(key + ">> select.rows[" + (void 0 === e ? "undefined" : _typeof(e)) + ", Error:" + hasError + "]=", stringify(e));
      }
      /** @type {string} */
      var result = "";
      /** @type {boolean} */
      var n = !e || e.length < 1;
      var r = void 0;
      var data = {};
      if (row.push("created_at"), colors.push("now()"), row.push("updated_at"), colors.push("now()"), n) {
        if (cb && callback(key + ">> WARN! node" + dynamicValue + " not found"), datasource) {
          var name;
          for (name in datasource) {
            var unit = datasource[name];
            row.push(name);
            colors.push(unit);
          }
        }
        /** @type {!Array} */
        r = [];
        /** @type {!Array} */
        var colors = [];
        var i;
        for (i in colors) {
          var c1 = colors[i];
          if ("now()" === c1) {
            colors.push(c1);
          } else {
            colors.push("?");
            r.push(c1);
          }
        }
        /** @type {string} */
        result = "insert into " + tag + " (" + name + "," + row.join(",") + ") values (" + format(url) + "," + colors.join(",") + ")";
      } else {
        var p = e[0];
        if (cb) {
          callback(key + ">> select.found=", stringify(p));
        }
        /** @type {number} */
        var v = 0;
        var j;
        for (j in p) {
          /** @type {string} */
          var i = j.toLowerCase();
          if (i !== name && ("created_at" !== i && "updated_at" !== i)) {
            var name = p[j];
            var n = void 0 !== data[i] ? data[i] : name;
            if (name !== n) {
              v++;
              data[i] = n;
            }
          }
        }
        if (cb && callback(key + ">> update_count" + dynamicValue + "=" + (v || 0) + ", update_set=", data), 0 < v) {
          /** @type {!Array} */
          var sdp_lines = [];
          var i;
          for (i in r = [], data) {
            var w = data[i];
            sdp_lines.push(i + "=?");
            r.push(w);
          }
          sdp_lines.push("updated_at = now()");
          /** @type {string} */
          result = "update " + tag + " set " + sdp_lines.join(", ") + " where " + name + " = " + format(url) + " " + (value ? " and " + value + " = " + format(type) : "") + (id ? " and " + id + " = " + format(f) : "");
        } else {
          /** @type {string} */
          result = "";
        }
        data[name] = url;
        if (value) {
          data[value] = type;
        }
        if (id) {
          data[id] = f;
        }
      }
      return cb && callback(key + ">> update.query=" + result + ", values=", stringify(r)), result ? reject(result, r).then(function(result) {
        return cb && callback(key + ">>> update.query.rs=", stringify(result)), n ? (item.insertId = result && result.insertId || 0, item.inserted = result && result.affectedRows || 0) : (item.updated = result && result.changedRows || 0, item.updated_node = data), item;
      }) : item;
    }) : item;
  }
  x = x || "MS";
  var a = r.U;
  var q = r.R;
  if (!a) {
    throw new Error("$U is required!");
  }
  if (!q) {
    throw new Error("$R is required!");
  }
  var key = a.NS(x, "blue");
  var callback = r.log;
  var req = (r.inf, r.err, {});
  /**
   * @param {string} normalizedFpath
   * @return {?}
   */
  req.do_get_last_id = function(normalizedFpath) {
    return normalizedFpath ? normalizedFpath.startsWith("#") ? Promise.resolve(0) : reject("select last_insert_id(id) as id from " + normalizedFpath + "_seq order by id desc limit 1").then(function(body) {
      return callback(key, "> get-last-id res =", a.json(body)), (body && body[0] || {}).id || 0;
    }) : Promise.reject(new Error(key + "parameter:type is required"));
  };
  /**
   * @param {string} normalizedFpath
   * @return {?}
   */
  req.do_get_next_id = function(normalizedFpath) {
    return normalizedFpath ? normalizedFpath.startsWith("#") ? Promise.resolve(0) : reject("insert into " + normalizedFpath + "_seq (id) values (0)").then(function(response) {
      return callback(key, "> get-next-id res =", a.json(response)), response && response.insertId || 0;
    }) : Promise.reject(new Error(key + "parameter:type is required"));
  };
  /**
   * @param {string} result
   * @param {number} inheritedStyles
   * @return {?}
   */
  req.do_create_id_seq = function(result, inheritedStyles) {
    if (!result) {
      return Promise.reject(new Error(key + "parameter:type is required"));
    }
    if (result.startsWith("#")) {
      return Promise.resolve(false);
    }
    /** @type {string} */
    var data = "create table " + result + "_seq (id int unsigned not null auto_increment primary key) auto_increment = " + (inheritedStyles = inheritedStyles || 1e6) + " ";
    return callback(key + "> query=", data), reject(data).then(function(results) {
      return 0 < (results && results.serverStatus || 0);
    });
  };
  /**
   * @param {string} name
   * @return {?}
   */
  req.do_delete_id_seq = function(name) {
    if (!name) {
      return Promise.reject(new Error(key + "parameter:type is required"));
    }
    if (name.startsWith("#")) {
      return Promise.resolve(false);
    }
    /** @type {string} */
    var result = "drop table " + name + "_seq";
    return callback(key + "> query=", result), reject(result).then(function(results) {
      return callback(key + ">> result=", results), 0 < (results && results.serverStatus || 0);
    });
  };
  /**
   * @param {string} args
   * @param {number} opts
   * @return {?}
   */
  req.do_promise_query = function(args, opts) {
    return args ? opts && !Array.isArray(opts) ? Promise.reject(new Error(key + "parameter:values should be array!")) : reject(args, opts) : Promise.reject(new Error(key + "parameter:query is required"));
  };
  /** @type {function(string, !Object, !Object): ?} */
  req.do_save_node = create;
  /**
   * @param {string} value
   * @param {!Object} options
   * @param {number} state
   * @return {?}
   */
  req.do_save_node_hist = function(value, options, state) {
    /** @type {boolean} */
    var result = !!finalCallback;
    /** @type {function(this:JSONType, *, (Array<string>|function(string, *): *|null)=, (number|string)=): string} */
    var encode = JSON.stringify;
    if (result) {
      callback(key + "do_save_node_hist_async(" + value + "). node=", encode(options));
    }
    var o = create(value, options);
    return o = o.then(function(newUser) {
      if (result) {
        callback(key + "> save-node-hist", newUser);
      }
      var c = newUser.updated_node || {};
      /** @type {string} */
      var prefix = "id";
      /** @type {string} */
      var name = "";
      if (0 < value.indexOf(":")) {
        var AjxMsg = value.split(":");
        if (value = AjxMsg[0], 0 < (name = AjxMsg[1]).indexOf(",")) {
          var nameParts = name.split(",");
          prefix = nameParts[0];
          name = nameParts[1];
        }
      }
      var type = options[prefix] || options[prefix.toLowerCase()];
      var index = name ? options[name] || options[name.toLowerCase()] : null;
      /** @type {string} */
      var dynamicValue = "[hist:" + value + ".id:" + type + (name ? "," + name + ":" + index : "") + "]";
      var target = state || [];
      /** @type {number} */
      var res = 0;
      if (res = res + (newUser.inserted || 0), c) {
        var s;
        for (s in c) {
          c[s];
          if (0 <= target.indexOf(s)) {
            res++;
          }
        }
      }
      if (res || result) {
        callback(key + "> update_hist" + dynamicValue + ".hist_updated_count = " + res, encode(c));
      }
      var item = {
        inserted : 0,
        updated : 0
      };
      if (res) {
        if (prefix && target.indexOf(prefix) < 0) {
          target.push(prefix);
        }
        if (name && target.indexOf(name) < 0) {
          target.push(name);
        }
        /** @type {string} */
        var err = "INSERT INTO " + value + "_hist (" + target.join(",") + ") (SELECT " + target.join(",") + " FROM " + value + " WHERE " + prefix + " = " + format(type) + (index ? " and " + name + " = " + format(index) : "") + ")";
        return result && callback(key + ">> update" + dynamicValue + ".query=", err), err ? reject(err).then(function(data) {
          return result && callback(key + ">>> update" + dynamicValue + ".query.rs=", encode(data)), item.inserted = data && data.affectedRows || 0, item;
        }) : item;
      }
      return item;
    });
  };
  /**
   * @param {string} val
   * @param {?} data
   * @return {?}
   */
  req.do_read_node = function(val, data) {
    if (!val) {
      return Promise.reject(new Error(key + "parameter:table_name is required"));
    }
    if (!data) {
      return Promise.reject(new Error(key + "parameter:node is required"));
    }
    if (void 0 === data.id) {
      return Promise.reject(new Error(key + "parameter:id is required"));
    }
    /** @type {boolean} */
    var cb = finalCallback;
    /** @type {function(this:JSONType, *, (Array<string>|function(string, *): *|null)=, (number|string)=): string} */
    var keyfn = JSON.stringify;
    if (cb) {
      callback(key + "do_read_node_async(" + val + "): ", keyfn(data));
    }
    /** @type {string} */
    var name = "id";
    /** @type {string} */
    var last = "";
    /** @type {string} */
    var prev = "";
    if (0 < val.indexOf(":")) {
      var a = val.split(":");
      if (val = a[0], 0 < (last = a[1]).indexOf(",")) {
        var BROWSER_ENGINES = last.split(",");
        name = BROWSER_ENGINES[0] || "";
        last = BROWSER_ENGINES[1] || "";
        prev = BROWSER_ENGINES[2] || "";
      }
    }
    var message = data[name] || data[name.toLowerCase()];
    var str = last ? data[last] || data[last.toLowerCase()] : null;
    var next = prev ? data[prev] || data[prev.toLowerCase()] : null;
    /** @type {string} */
    var dynamicValue = "[" + val + ".id:" + message + (last ? "," + last + ":" + str : "") + (prev ? "," + prev + ":" + next : "") + "]";
    /** @type {!Array} */
    var l = [];
    /** @type {!Array} */
    var leftPie = [];
    var text;
    for (text in data) {
      /** @type {string} */
      var value = text.toLowerCase();
      /** @type {boolean} */
      var m = false;
      if (!text) {
        /** @type {boolean} */
        m = true;
      }
      if (!(name !== text && name !== value)) {
        /** @type {boolean} */
        m = true;
      }
      if (void 0 === data[text]) {
        /** @type {boolean} */
        m = true;
      }
      if (value.startsWith("_")) {
        /** @type {boolean} */
        m = true;
      }
      if (value.startsWith("$")) {
        /** @type {boolean} */
        m = true;
      }
      var y = data[text];
      if (!m) {
        l.push(text);
        leftPie.push(y);
      }
    }
    /** @type {string} */
    var result = "select " + (l.length ? name + ", " + l.join(",") : "*") + " from " + val + " where " + name + " = " + format(message) + (last ? " and " + last + " = " + format(str) : "") + (prev ? " and " + prev + " = " + format(next) : "") + " limit 1";
    return cb && callback(key + ">> read" + dynamicValue + ".query=", result), reject(result).then(function(o) {
      if (cb) {
        callback(key + ">>> update.query.rs=", keyfn(o));
      }
      var readonly_by_pass_fields = o[0] || {};
      return data = a.extend(data, readonly_by_pass_fields), readonly_by_pass_fields;
    });
  };
  /**
   * @param {?} canCreateDiscussions
   * @return {?}
   */
  req.do_test_self = function(canCreateDiscussions) {
    return canCreateDiscussions;
  };
  r(x, req);
  /** @type {boolean} */
  var finalCallback = !!a.is_dev;
  return req;
};

