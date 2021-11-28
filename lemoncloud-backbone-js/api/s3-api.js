"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports=module.exports=function(e,t){if(!e)throw new Error("_$(global instance pool) is required!");var i=e._,u=e.U,s=e.S3;if(!i)throw new Error("$_ is required!");if(!s)throw new Error("$S3 is required!");var f=u.NS(t||"S3","yellow"),g=e.log,v=(e.inf,e.err);function b(e){return y(404,e)}function h(e){return y(503,e)}function y(e,t){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify(t)}}function w(t,e,i,r,a){if(g(f,"do_upload("+t+"/"+e+")...."),!t)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!r)return Promise.reject(new Error("$body is required!"));i=i||{};var o={};return s.do_upload(t,r.fileName,r.fileStream,r.contentType).then(function(e){return g(f,"> upload-file["+t+"] :=",e),o.result=e,o})}function E(t,e,i,r,a){if(g(f,"do_get_object("+t+"/"+e+")...."),!t)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));if(!r)return Promise.reject(new Error("$body is required!"));i=i||{};var o={};return s.do_get_object(t,r.fileName).then(function(e){return g(f,"> get-file["+t+"] :=",e),o.result=e,o})}function j(t,e,i,r,a){if(g(f,"do_post_multipart("+t+"/"+e+")...."),!t)return Promise.reject(new Error("TYPE is required!"));if(!e)return Promise.reject(new Error("ID is required!"));var o=(i=i||{}).name,n=i.type,p=Object.assign({TYPE:t,ID:e},r||{});o&&(p.name=o),n&&(p.type=n);var c=function(e){return(e=""+(e||"")).trim()};return Promise.resolve(p).then(function(e){var r,t=c(e.path),i=c(e.name),a=c(e.type);if(!i)return Promise.reject(new Error(".name is required!"));if(!e.file)return Promise.reject(new Error(".file is required!"));if(0<=i.indexOf("/")||0<=i.indexOf("\\"))return Promise.reject(new Error(".name is not valid. name:"+i));if("#"==i){if(!a)return Promise.reject(new Error(".type is required! if name is #"));var o=require("randomstring"),n=(r=a,Object.keys(l).reduce(function(e,t){var i=l[t]||"";return i==r||i.endsWith("/"+r)?t:e},"")||"bin");a=m(i=u.ts().split(/[-: ]/).join("")+o.generate({length:6,charset:"numeric"})+"."+n)}else a||(a=m(i),g(f,"> name=",i,", type=",a));return e.name=i,e.type=a,e.path=t,e}).then(function(e){var t=e.file;if("string"==typeof t&&1<t.length)e.file=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(t)?new Buffer(t,"base64"):t;else{if(!t.path)return Promise.reject(new Error("invalid file type"));var i=require("fs");e.file=i.readFileSync(t.path)}return e}).then(function(t){var i=t.TYPE||"";return i?s.do_upload(i,t.path+"/"+t.name,t.file,t.type,t.tags).then(function(e){return g(f,"> s3-upload["+i+"].res =",e),t.ETag=e.ETag||"",t.Location=e.Location||"",t.Bucket=e.Bucket||"",t.ETag.startsWith('"')&&t.ETag.endsWith('"')&&(t.ETag=t.ETag.substring(1,t.ETag.length-1)),delete t.file,t}):Promise.reject(new Error("TYPE is required!"))}).then(function(e){return g(f,"> multipart["+t+"] :=",e),{result:e}})}function P(e,t,i,r,a){if(g(f,"do_get_test_self("+e+"/"+t+")...."),!e)return Promise.reject(new Error("TYPE is required!"));if("0"!==t)return Promise.reject(new Error("ID is invalid!"));var o=i?Object.assign({},i):{};return o?Promise.resolve(o):Promise.reject(new Error("node is required!"))}var l={"3gp":"video/3gpp",a:"application/octet-stream",ai:"application/postscript",aif:"audio/x-aiff",aiff:"audio/x-aiff",asc:"application/pgp-signature",asf:"video/x-ms-asf",asm:"text/x-asm",asx:"video/x-ms-asf",atom:"application/atom+xml",au:"audio/basic",avi:"video/x-msvideo",bat:"application/x-msdownload",bin:"application/octet-stream",bmp:"image/bmp",bz2:"application/x-bzip2",c:"text/x-c",cab:"application/vnd.ms-cab-compressed",cc:"text/x-c",chm:"application/vnd.ms-htmlhelp",class:"application/octet-stream",com:"application/x-msdownload",conf:"text/plain",cpp:"text/x-c",crt:"application/x-x509-ca-cert",css:"text/css",csv:"text/csv",cxx:"text/x-c",deb:"application/x-debian-package",der:"application/x-x509-ca-cert",diff:"text/x-diff",djv:"image/vnd.djvu",djvu:"image/vnd.djvu",dll:"application/x-msdownload",dmg:"application/octet-stream",doc:"application/msword",dot:"application/msword",dtd:"application/xml-dtd",dvi:"application/x-dvi",ear:"application/java-archive",eml:"message/rfc822",eps:"application/postscript",exe:"application/x-msdownload",f:"text/x-fortran",f77:"text/x-fortran",f90:"text/x-fortran",flv:"video/x-flv",for:"text/x-fortran",gem:"application/octet-stream",gemspec:"text/x-script.ruby",gif:"image/gif",gz:"application/x-gzip",h:"text/x-c",hh:"text/x-c",htm:"text/html",html:"text/html",ico:"image/vnd.microsoft.icon",ics:"text/calendar",ifb:"text/calendar",iso:"application/octet-stream",jar:"application/java-archive",java:"text/x-java-source",jnlp:"application/x-java-jnlp-file",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",log:"text/plain",m3u:"audio/x-mpegurl",m4v:"video/mp4",man:"text/troff",mathml:"application/mathml+xml",mbox:"application/mbox",mdoc:"text/troff",me:"text/troff",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mml:"application/mathml+xml",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mp4v:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ms:"text/troff",msi:"application/x-msdownload",odp:"application/vnd.oasis.opendocument.presentation",ods:"application/vnd.oasis.opendocument.spreadsheet",odt:"application/vnd.oasis.opendocument.text",ogg:"application/ogg",p:"text/x-pascal",pas:"text/x-pascal",pbm:"image/x-portable-bitmap",pdf:"application/pdf",pem:"application/x-x509-ca-cert",pgm:"image/x-portable-graymap",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pl:"text/x-script.perl",pm:"text/x-script.perl-module",png:"image/png",pnm:"image/x-portable-anymap",ppm:"image/x-portable-pixmap",pps:"application/vnd.ms-powerpoint",ppt:"application/vnd.ms-powerpoint",ps:"application/postscript",psd:"image/vnd.adobe.photoshop",py:"text/x-script.python",qt:"video/quicktime",ra:"audio/x-pn-realaudio",rake:"text/x-script.ruby",ram:"audio/x-pn-realaudio",rar:"application/x-rar-compressed",rb:"text/x-script.ruby",rdf:"application/rdf+xml",roff:"text/troff",rpm:"application/x-redhat-package-manager",rss:"application/rss+xml",rtf:"application/rtf",ru:"text/x-script.ruby",s:"text/x-asm",sgm:"text/sgml",sgml:"text/sgml",sh:"application/x-sh",sig:"application/pgp-signature",snd:"audio/basic",so:"application/octet-stream",svg:"image/svg+xml",svgz:"image/svg+xml",swf:"application/x-shockwave-flash",t:"text/troff",tar:"application/x-tar",tbz:"application/x-bzip-compressed-tar",tcl:"application/x-tcl",tex:"application/x-tex",texi:"application/x-texinfo",texinfo:"application/x-texinfo",text:"text/plain",tif:"image/tiff",tiff:"image/tiff",torrent:"application/x-bittorrent",tr:"text/troff",txt:"text/plain",vcf:"text/x-vcard",vcs:"text/x-vcalendar",vrml:"model/vrml",war:"application/java-archive",wav:"audio/x-wav",wma:"audio/x-ms-wma",wmv:"video/x-ms-wmv",wmx:"video/x-ms-wmx",wrl:"model/vrml",wsdl:"application/wsdl+xml",xbm:"image/x-xbitmap",xhtml:"application/xhtml+xml",xls:"application/vnd.ms-excel",xml:"application/xml",xpm:"image/x-xpixmap",xsl:"application/xml",xslt:"application/xslt+xml",yaml:"text/yaml",yml:"text/yaml",zip:"application/zip"};function m(e){return function(e){return g(f,">> ext=",e),l[e.toLowerCase()]||"application/octet-stream"}(function(e){var t=e.lastIndexOf(".");return t<0?"":e.substr(t+1)}(e))}return function(e,t,i){t.callbackWaitsForEmptyEventLoop=!1;var r=e.queryStringParameters||{},a=e.pathParameters||{},o=decodeURIComponent(a.type||""),n=decodeURIComponent(a.id||""),p=(n||"GET"!==e.httpMethod?e.httpMethod:"LIST")||"",c=decodeURIComponent(a.cmd||""),s=!p&&e.Records?"EVENT":{LIST:"LIST",GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"}[p],l=e.body&&("string"==typeof e.body&&(e.body.startsWith("{")||e.body.startsWith("["))?JSON.parse(e.body):e.body)||e.Records&&{records:e.Records}||null;!l&&g(f,"#"+s+":"+c+" ("+p+", "+o+"/"+n+")...."),l&&g(f,"#"+s+":"+c+" ("+p+", "+o+"/"+n+").... body.len=",l?u.json(l).length:-1);var m={_id:n,_type:o,_param:r,_body:l,_ctx:t},d=Promise.resolve(m),x=function(e,t,i,r){var a=null;switch(e){case"LIST":break;case"GET":"0"===i&&"test-self"===r&&(a=P);break;case"PUT":break;case"POST":"0"===i&&"upload"===r?a=w:"0"===i&&"get-object"===r?a=E:"0"===i&&"multipart"===r&&(a=j)}return a}(s,0,n,c);if(!x)return i(null,b({MODE:s}));try{d.then(function(e){var t=e._id,i=e._type,r=e._param,a=e._body,o=e._ctx;return x(i,t,r,a,o)}).then(function(e){return e&&"object"===(void 0===e?"undefined":_typeof(e))&&(e=u.cleanup(e)),i(null,y(200,e)),!0}).catch(function(e){return v(f,"!!! callback@1 with err",e),0<=(e&&e.message||"").indexOf("404 NOT FOUND")?i(null,b(e.message)):i(null,h(e.message||e)),!1})}catch(e){i(e,h(e.message))}}};'use strict';
/** @type {function(!Array): ?} */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(lineStringProperty) {
  return typeof lineStringProperty;
} : function(obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {function(!Object, string): ?} */
exports = module.exports = function(opts, callback) {
  /**
   * @param {!Array} payload
   * @return {?}
   */
  function log(payload) {
    return send(404, payload);
  }
  /**
   * @param {!Array} val
   * @return {?}
   */
  function cb(val) {
    return send(503, val);
  }
  /**
   * @param {number} code
   * @param {!Array} obj
   * @return {?}
   */
  function send(code, obj) {
    return {
      statusCode : code,
      headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body : JSON.stringify(obj)
    };
  }
  /**
   * @param {string} groupId
   * @param {string} userId
   * @param {number} post
   * @param {!Object} self
   * @param {?} propertyNames
   * @return {?}
   */
  function remove(groupId, userId, post, self, propertyNames) {
    if (debug(msg, "do_upload(" + groupId + "/" + userId + ")...."), !groupId) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!userId) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!self) {
      return Promise.reject(new Error("$body is required!"));
    }
    post = post || {};
    var calculation = {};
    return $.do_upload(groupId, self.fileName, self.fileStream, self.contentType).then(function(result) {
      return debug(msg, "> upload-file[" + groupId + "] :=", result), calculation.result = result, calculation;
    });
  }
  /**
   * @param {string} ext
   * @param {string} domain
   * @param {number} skip
   * @param {!Object} f
   * @param {?} array1
   * @return {?}
   */
  function get(ext, domain, skip, f, array1) {
    if (debug(msg, "do_get_object(" + ext + "/" + domain + ")...."), !ext) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!domain) {
      return Promise.reject(new Error("ID is required!"));
    }
    if (!f) {
      return Promise.reject(new Error("$body is required!"));
    }
    skip = skip || {};
    var comp = {};
    return $.do_get_object(ext, f.fileName).then(function(view) {
      return debug(msg, "> get-file[" + ext + "] :=", view), comp.result = view, comp;
    });
  }
  /**
   * @param {string} type
   * @param {string} id
   * @param {!Object} field
   * @param {number} options
   * @param {?} fn
   * @return {?}
   */
  function init(type, id, field, options, fn) {
    if (debug(msg, "do_post_multipart(" + type + "/" + id + ")...."), !type) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if (!id) {
      return Promise.reject(new Error("ID is required!"));
    }
    var printName = (field = field || {}).name;
    var name = field.type;
    /** @type {!Object} */
    var record = Object.assign({
      TYPE : type,
      ID : id
    }, options || {});
    if (printName) {
      record.name = printName;
    }
    if (name) {
      record.type = name;
    }
    /**
     * @param {string} format
     * @return {?}
     */
    var f = function(format) {
      return (format = "" + (format || "")).trim();
    };
    return Promise.resolve(record).then(function(self) {
      var host;
      var filename = f(self.path);
      var error = f(self.name);
      var result = f(self.type);
      if (!error) {
        return Promise.reject(new Error(".name is required!"));
      }
      if (!self.file) {
        return Promise.reject(new Error(".file is required!"));
      }
      if (0 <= error.indexOf("/") || 0 <= error.indexOf("\\")) {
        return Promise.reject(new Error(".name is not valid. name:" + error));
      }
      if ("#" == error) {
        if (!result) {
          return Promise.reject(new Error(".type is required! if name is #"));
        }
        var type = require("randomstring");
        var dy = (host = result, Object.keys(mime).reduce(function(canCreateDiscussions, type) {
          var hostname = mime[type] || "";
          return hostname == host || hostname.endsWith("/" + host) ? type : canCreateDiscussions;
        }, "") || "bin");
        result = next(error = self.ts().split(/[-: ]/).join("") + type.generate({
          length : 6,
          charset : "numeric"
        }) + "." + dy);
      } else {
        if (!result) {
          result = next(error);
          debug(msg, "> name=", error, ", type=", result);
        }
      }
      return self.name = error, self.type = result, self.path = filename, self;
    }).then(function(data) {
      var val = data.file;
      if ("string" == typeof val && 1 < val.length) {
        data.file = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(val) ? new Buffer(val, "base64") : val;
      } else {
        if (!val.path) {
          return Promise.reject(new Error("invalid file type"));
        }
        var fs = require("fs");
        data.file = fs.readFileSync(val.path);
      }
      return data;
    }).then(function(p) {
      var i = p.TYPE || "";
      return i ? $.do_upload(i, p.path + "/" + p.name, p.file, p.type, p.tags).then(function(data) {
        return debug(msg, "> s3-upload[" + i + "].res =", data), p.ETag = data.ETag || "", p.Location = data.Location || "", p.Bucket = data.Bucket || "", p.ETag.startsWith('"') && p.ETag.endsWith('"') && (p.ETag = p.ETag.substring(1, p.ETag.length - 1)), delete p.file, p;
      }) : Promise.reject(new Error("TYPE is required!"));
    }).then(function(runs) {
      return debug(msg, "> multipart[" + type + "] :=", runs), {
        result : runs
      };
    });
  }
  /**
   * @param {string} locale
   * @param {string} fn
   * @param {boolean} opts
   * @param {?} qaTilesPath
   * @param {?} tigerTilesPath
   * @return {?}
   */
  function exports(locale, fn, opts, qaTilesPath, tigerTilesPath) {
    if (debug(msg, "do_get_test_self(" + locale + "/" + fn + ")...."), !locale) {
      return Promise.reject(new Error("TYPE is required!"));
    }
    if ("0" !== fn) {
      return Promise.reject(new Error("ID is invalid!"));
    }
    /** @type {!Object} */
    var html = opts ? Object.assign({}, opts) : {};
    return html ? Promise.resolve(html) : Promise.reject(new Error("node is required!"));
  }
  /**
   * @param {string} chunk
   * @return {?}
   */
  function next(chunk) {
    return function(requestKey) {
      return debug(msg, ">> ext=", requestKey), mime[requestKey.toLowerCase()] || "application/octet-stream";
    }(function(line) {
      var index = line.lastIndexOf(".");
      return index < 0 ? "" : line.substr(index + 1);
    }(chunk));
  }
  if (!opts) {
    throw new Error("_$(global instance pool) is required!");
  }
  var generateArgs = opts._;
  var self = opts.U;
  var $ = opts.S3;
  if (!generateArgs) {
    throw new Error("$_ is required!");
  }
  if (!$) {
    throw new Error("$S3 is required!");
  }
  var msg = self.NS(callback || "S3", "yellow");
  var debug = opts.log;
  var updateMessagge = (opts.inf, opts.err);
  var mime = {
    "3gp" : "video/3gpp",
    a : "application/octet-stream",
    ai : "application/postscript",
    aif : "audio/x-aiff",
    aiff : "audio/x-aiff",
    asc : "application/pgp-signature",
    asf : "video/x-ms-asf",
    asm : "text/x-asm",
    asx : "video/x-ms-asf",
    atom : "application/atom+xml",
    au : "audio/basic",
    avi : "video/x-msvideo",
    bat : "application/x-msdownload",
    bin : "application/octet-stream",
    bmp : "image/bmp",
    bz2 : "application/x-bzip2",
    c : "text/x-c",
    cab : "application/vnd.ms-cab-compressed",
    cc : "text/x-c",
    chm : "application/vnd.ms-htmlhelp",
    class : "application/octet-stream",
    com : "application/x-msdownload",
    conf : "text/plain",
    cpp : "text/x-c",
    crt : "application/x-x509-ca-cert",
    css : "text/css",
    csv : "text/csv",
    cxx : "text/x-c",
    deb : "application/x-debian-package",
    der : "application/x-x509-ca-cert",
    diff : "text/x-diff",
    djv : "image/vnd.djvu",
    djvu : "image/vnd.djvu",
    dll : "application/x-msdownload",
    dmg : "application/octet-stream",
    doc : "application/msword",
    dot : "application/msword",
    dtd : "application/xml-dtd",
    dvi : "application/x-dvi",
    ear : "application/java-archive",
    eml : "message/rfc822",
    eps : "application/postscript",
    exe : "application/x-msdownload",
    f : "text/x-fortran",
    f77 : "text/x-fortran",
    f90 : "text/x-fortran",
    flv : "video/x-flv",
    for : "text/x-fortran",
    gem : "application/octet-stream",
    gemspec : "text/x-script.ruby",
    gif : "image/gif",
    gz : "application/x-gzip",
    h : "text/x-c",
    hh : "text/x-c",
    htm : "text/html",
    html : "text/html",
    ico : "image/vnd.microsoft.icon",
    ics : "text/calendar",
    ifb : "text/calendar",
    iso : "application/octet-stream",
    jar : "application/java-archive",
    java : "text/x-java-source",
    jnlp : "application/x-java-jnlp-file",
    jpeg : "image/jpeg",
    jpg : "image/jpeg",
    js : "application/javascript",
    json : "application/json",
    log : "text/plain",
    m3u : "audio/x-mpegurl",
    m4v : "video/mp4",
    man : "text/troff",
    mathml : "application/mathml+xml",
    mbox : "application/mbox",
    mdoc : "text/troff",
    me : "text/troff",
    mid : "audio/midi",
    midi : "audio/midi",
    mime : "message/rfc822",
    mml : "application/mathml+xml",
    mng : "video/x-mng",
    mov : "video/quicktime",
    mp3 : "audio/mpeg",
    mp4 : "video/mp4",
    mp4v : "video/mp4",
    mpeg : "video/mpeg",
    mpg : "video/mpeg",
    ms : "text/troff",
    msi : "application/x-msdownload",
    odp : "application/vnd.oasis.opendocument.presentation",
    ods : "application/vnd.oasis.opendocument.spreadsheet",
    odt : "application/vnd.oasis.opendocument.text",
    ogg : "application/ogg",
    p : "text/x-pascal",
    pas : "text/x-pascal",
    pbm : "image/x-portable-bitmap",
    pdf : "application/pdf",
    pem : "application/x-x509-ca-cert",
    pgm : "image/x-portable-graymap",
    pgp : "application/pgp-encrypted",
    pkg : "application/octet-stream",
    pl : "text/x-script.perl",
    pm : "text/x-script.perl-module",
    png : "image/png",
    pnm : "image/x-portable-anymap",
    ppm : "image/x-portable-pixmap",
    pps : "application/vnd.ms-powerpoint",
    ppt : "application/vnd.ms-powerpoint",
    ps : "application/postscript",
    psd : "image/vnd.adobe.photoshop",
    py : "text/x-script.python",
    qt : "video/quicktime",
    ra : "audio/x-pn-realaudio",
    rake : "text/x-script.ruby",
    ram : "audio/x-pn-realaudio",
    rar : "application/x-rar-compressed",
    rb : "text/x-script.ruby",
    rdf : "application/rdf+xml",
    roff : "text/troff",
    rpm : "application/x-redhat-package-manager",
    rss : "application/rss+xml",
    rtf : "application/rtf",
    ru : "text/x-script.ruby",
    s : "text/x-asm",
    sgm : "text/sgml",
    sgml : "text/sgml",
    sh : "application/x-sh",
    sig : "application/pgp-signature",
    snd : "audio/basic",
    so : "application/octet-stream",
    svg : "image/svg+xml",
    svgz : "image/svg+xml",
    swf : "application/x-shockwave-flash",
    t : "text/troff",
    tar : "application/x-tar",
    tbz : "application/x-bzip-compressed-tar",
    tcl : "application/x-tcl",
    tex : "application/x-tex",
    texi : "application/x-texinfo",
    texinfo : "application/x-texinfo",
    text : "text/plain",
    tif : "image/tiff",
    tiff : "image/tiff",
    torrent : "application/x-bittorrent",
    tr : "text/troff",
    txt : "text/plain",
    vcf : "text/x-vcard",
    vcs : "text/x-vcalendar",
    vrml : "model/vrml",
    war : "application/java-archive",
    wav : "audio/x-wav",
    wma : "audio/x-ms-wma",
    wmv : "video/x-ms-wmv",
    wmx : "video/x-ms-wmx",
    wrl : "model/vrml",
    wsdl : "application/wsdl+xml",
    xbm : "image/x-xbitmap",
    xhtml : "application/xhtml+xml",
    xls : "application/vnd.ms-excel",
    xml : "application/xml",
    xpm : "image/x-xpixmap",
    xsl : "application/xml",
    xslt : "application/xslt+xml",
    yaml : "text/yaml",
    yml : "text/yaml",
    zip : "application/zip"
  };
  return function(event, ctx, next) {
    /** @type {boolean} */
    ctx.callbackWaitsForEmptyEventLoop = false;
    var _existingModel = event.queryStringParameters || {};
    var settings = event.pathParameters || {};
    /** @type {string} */
    var type = decodeURIComponent(settings.type || "");
    /** @type {string} */
    var n = decodeURIComponent(settings.id || "");
    var ret = (n || "GET" !== event.httpMethod ? event.httpMethod : "LIST") || "";
    /** @type {string} */
    var args = decodeURIComponent(settings.cmd || "");
    var mode = !ret && event.Records ? "EVENT" : {
      LIST : "LIST",
      GET : "GET",
      PUT : "PUT",
      POST : "POST",
      DELETE : "DELETE"
    }[ret];
    /** @type {*} */
    var body = event.body && ("string" == typeof event.body && (event.body.startsWith("{") || event.body.startsWith("[")) ? JSON.parse(event.body) : event.body) || event.Records && {
      records : event.Records
    } || null;
    if (!body) {
      debug(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + n + ")....");
    }
    if (body) {
      debug(msg, "#" + mode + ":" + args + " (" + ret + ", " + type + "/" + n + ").... body.len=", body ? self.json(body).length : -1);
    }
    var listview = {
      _id : n,
      _type : type,
      _param : _existingModel,
      _body : body,
      _ctx : ctx
    };
    /** @type {!Promise<{_body: *, _ctx: ?, _id: string, _param: ??, _type: string}>} */
    var results = Promise.resolve(listview);
    var t = function(method, addedRenderer, l, undefined) {
      /** @type {null} */
      var action = null;
      switch(method) {
        case "LIST":
          break;
        case "GET":
          if ("0" === l && "test-self" === undefined) {
            /** @type {function(string, string, boolean, ?, ?): ?} */
            action = exports;
          }
          break;
        case "PUT":
          break;
        case "POST":
          if ("0" === l && "upload" === undefined) {
            /** @type {function(string, string, number, !Object, ?): ?} */
            action = remove;
          } else {
            if ("0" === l && "get-object" === undefined) {
              /** @type {function(string, string, number, !Object, ?): ?} */
              action = get;
            } else {
              if ("0" === l && "multipart" === undefined) {
                /** @type {function(string, string, !Object, number, ?): ?} */
                action = init;
              }
            }
          }
      }
      return action;
    }(mode, 0, n, args);
    if (!t) {
      return next(null, log({
        MODE : mode
      }));
    }
    try {
      results.then(function(that) {
        /** @type {string} */
        var selector = that._id;
        /** @type {string} */
        var type = that._type;
        var lang = that._param;
        /** @type {*} */
        var container = that._body;
        var ctx = that._ctx;
        return t(type, selector, lang, container, ctx);
      }).then(function(value) {
        return value && "object" === (void 0 === value ? "undefined" : _typeof(value)) && (value = self.cleanup(value)), next(null, send(200, value)), true;
      }).catch(function(err) {
        return updateMessagge(msg, "!!! callback@1 with err", err), 0 <= (err && err.message || "").indexOf("404 NOT FOUND") ? next(null, log(err.message)) : next(null, cb(err.message || err)), false;
      });
    } catch (e) {
      next(e, cb(e.message));
    }
  };
};

