(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EasyVideoPlayer"] = factory();
	else
		root["EasyVideoPlayer"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "9bf4");
/******/ })
/************************************************************************/
/******/ ({

/***/ "041e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "048e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("9a60");
var core = __webpack_require__("e3a0");
var hide = __webpack_require__("59ee");
var redefine = __webpack_require__("baca");
var ctx = __webpack_require__("2eb4");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "0646":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "0666":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("1d2f");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "0abd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("2004");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "0c24":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("9a60");
var macrotask = __webpack_require__("5698").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("ebbd")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "0dd6":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "1707":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("24aa")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "17f7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("9a60");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "191e":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "1d2f":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "2004":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "24aa":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("6ae5")('wks');
var uid = __webpack_require__("329e");
var Symbol = __webpack_require__("9a60").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "26f8":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("ebbd");
var TAG = __webpack_require__("24aa")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2eb4":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("2004");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "329e":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("d35e");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "3c12":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("baca");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "3e13":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "3fa7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1d2f");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "45bf":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4811":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("26f8");
var ITERATOR = __webpack_require__("24aa")('iterator');
var Iterators = __webpack_require__("45bf");
module.exports = __webpack_require__("e3a0").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "4e8e":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("45bf");
var ITERATOR = __webpack_require__("24aa")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "4eb1":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("3fa7");
var aFunction = __webpack_require__("2004");
var SPECIES = __webpack_require__("24aa")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "538c":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "5698":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("2eb4");
var invoke = __webpack_require__("9550");
var html = __webpack_require__("c20c");
var cel = __webpack_require__("8c9d");
var global = __webpack_require__("9a60");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("ebbd")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "571a":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "59ee":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d528");
var createDesc = __webpack_require__("b7f6");
module.exports = __webpack_require__("9baa") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "6ae5":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("e3a0");
var global = __webpack_require__("9a60");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("d3ae") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "8465":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("9a60");
var dP = __webpack_require__("d528");
var DESCRIPTORS = __webpack_require__("9baa");
var SPECIES = __webpack_require__("24aa")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "8c9d":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1d2f");
var document = __webpack_require__("9a60").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "9550":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "95fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_index_css_vue_type_style_index_0_id_bf21dd12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de94");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_index_css_vue_type_style_index_0_id_bf21dd12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_index_css_vue_type_style_index_0_id_bf21dd12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_index_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_index_css_vue_type_style_index_0_id_bf21dd12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9873":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/full.39d0ac72.png";

/***/ }),

/***/ "9a60":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "9baa":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("c213")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9bf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("0dd6")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2daf66e3-vue-loader-template"}!C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=bf21dd12&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['player', {'player--full-screen': _vm.fullScreen}]},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.poster && _vm.showCover),expression:"poster && showCover"}],staticClass:"player__poster",attrs:{"src":_vm.poster},on:{"load":function($event){_vm.loadCover = true}}}),_c('video',{ref:"video",class:['player__video', {'player__video--hidden': !_vm.loadCover}],attrs:{"src":_vm.src,"autoplay":_vm.autoplay,"loop":_vm.loop,"preload":_vm.preload},on:{"ended":_vm.resetVideo,"click":_vm.touchVideo,"~canplay":function($event){return _vm.preparePlay($event)},"error":_vm.errorHandler,"timeupdate":_vm.progressHandler}},_vm._l((_vm.sources),function(item,index){return _c('source',{key:index,attrs:{"src":item}})}),0),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status !== 'playing'),expression:"status !== 'playing'"}],staticClass:"player__mask",on:{"click":_vm.touchMask}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status === 'play'),expression:"status === 'play'"}],staticClass:"player__btn-play",on:{"click":_vm.handlePlay,"~click":function($event){return _vm.hideCover($event)}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status === 'pause'),expression:"status === 'pause'"}],staticClass:"player__btn-pause",on:{"click":_vm.handlePause}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status === 'loading'),expression:"status === 'loading'"}],staticClass:"player__btn-loading"}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.status === 'error'),expression:"status === 'error'"}],staticClass:"player__error"},[_vm._v(_vm._s(_vm.errMessage))]),_c('div',{staticClass:"player__header"},[(_vm.watermark)?_c('img',{class:['player__watermark', { watermarkStyle: _vm.watermarkStyle }],attrs:{"src":_vm.watermark,"alt":""}}):_vm._e(),(_vm.title)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.status && _vm.status !== 'playing'),expression:"status && status !== 'playing'"}],staticClass:"palyer__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.control && _vm.status !== 'playing'),expression:"control && status !== 'playing'"}],staticClass:"player__controls"},[_c('div',{staticClass:"player__timer"},[_vm._v("\n            "+_vm._s(_vm._f("formatTime")(_vm.currentTime))+" / "+_vm._s(_vm._f("formatTime")(_vm.duration))+"\n            "),_c('div',{ref:"progress",staticClass:"player__progress-container",on:{"click":_vm.handleSeek}},[_c('div',{staticClass:"player__progress",style:(_vm.progress)},[_c('i',{staticClass:"player__progress-btn",on:{"mousedown":_vm.handleDragStart}})])])]),_c('div',{staticClass:"player__full-screen",on:{"click":_vm.handleFullScreen}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=bf21dd12&scoped=true&

// EXTERNAL MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("e87b");

// EXTERNAL MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.date.now.js
var es6_date_now = __webpack_require__("bb25");

// CONCATENATED MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function throttle(fn) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    fn.apply(this, args);

    if (timer) {
      return;
    }

    timer = setTimeout(function () {
      timer = null;
    }, interval);
  };
}

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'EasyVideoPlayer',
  props: {
    src: String,
    watermark: String,
    watermarkStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    title: String,
    control: Boolean,
    sources: Array,
    autoplay: Boolean,
    loop: Boolean,
    preload: {
      type: String,
      default: 'auto',
      validator: function validator(val) {
        return val === 'auto' || val === 'mete' || val === 'none';
      }
    },
    poster: String
  },
  data: function data() {
    return {
      // play: '可播放' pause: '暂停' playing: '播放中' loading: '加载中' error: '错误'
      status: 'loading',
      showCover: true,
      loadCover: false,
      loadVideo: false,
      timer: null,
      startTime: Date.now(),
      duration: 1,
      currentTime: 0,
      errMessage: '',
      fullScreen: false,
      enableDrag: false
    };
  },
  computed: {
    loaded: function loaded() {
      return this.loadCover && this.loadVideo;
    },
    progress: function progress() {
      return {
        width: this.currentTime / this.duration * 100 + '%'
      };
    }
  },
  mounted: function mounted() {
    // 避免加载动画闪烁
    this.timer = new Promise(function (res) {
      setTimeout(res, 400);
    });
  },
  methods: {
    preparePlay: function preparePlay() {
      this.loadVideo = true;
      this.duration = this.$refs.video.duration;
    },
    hideCover: function hideCover() {
      this.showCover = false;
    },
    handlePlay: function handlePlay() {
      this.$refs.video.play();
      this.status = 'playing';
      this.$emit('play');
    },
    handlePause: function handlePause() {
      this.$refs.video.pause();
      this.status = 'play';
      clearTimeout(this.timer);
      this.timer = null;
    },
    resetVideo: function resetVideo() {
      this.status = 'play';

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.$emit('end');
    },
    touchVideo: function touchVideo() {
      var _this = this;

      this.status = 'pause';
      this.timer = setTimeout(function () {
        _this.status = 'playing';
      }, 2000);
    },
    touchMask: function touchMask() {
      if (this.timer && this.status === 'pause') {
        this.status = 'playing';
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    errorHandler: function errorHandler(err) {
      this.errMessage = err.message;
      this.status = 'error';
    },
    progressHandler: throttle(function () {
      this.currentTime = this.$refs.video.currentTime;
    }),
    handleSeek: function handleSeek(e) {
      var seek = e.clientX - this.$refs.progress.clientLeft;
      this.showCover = false;
      this.currentTime = this.$refs.video.currentTime = seek / this.$refs.progress.clientWidth * this.duration;
    },
    handleFullScreen: function handleFullScreen() {
      this.fullScreen = !this.fullScreen;
    },
    handleDragStart: function handleDragStart() {
      this.enableDrag = true;
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.handleDragEnd, {
        once: true
      });
    },
    handleDrag: throttle(function (e) {
      if (!this.enableDrag) {
        return;
      }

      var clientWidth = this.$refs.progress.clientWidth;
      var time = e.movementX / clientWidth * this.duration;
      var currentTime = this.currentTime + time;

      if (currentTime < 0) {
        currentTime = 0;
      }

      if (currentTime > this.duration) {
        currentTime = this.duration;
      }

      this.currentTime = this.$refs.video.currentTime = currentTime;
    }),
    handleDragEnd: function handleDragEnd() {
      this.enableDrag = false;
      document.removeEventListener('mousemove', this.handleDrag);
    }
  },
  filters: {
    formatTime: function formatTime(s) {
      s = Math.floor(s);
      var hour = Math.floor(s / (60 * 60));
      var min = Math.floor(s / 60) % 60;
      var sec = s % 60;

      if (hour < 10) {
        hour = '0' + hour;
      }

      if (min < 10) {
        min = '0' + min;
      }

      if (sec < 10) {
        sec = '0' + sec;
      }

      if (hour > 0) {
        return hour + ':' + min + ':' + sec;
      }

      return min + ':' + sec;
    }
  },
  watch: {
    loaded: function loaded(val) {
      var _this2 = this;

      if (val) {
        Promise.resolve(this.timer).then(function () {
          _this2.status = 'play';
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/css/index.css?vue&type=style&index=0&id=bf21dd12&scoped=true&lang=css&
var cssvue_type_style_index_0_id_bf21dd12_scoped_true_lang_css_ = __webpack_require__("95fd");

// CONCATENATED MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "bf21dd12",
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/index.js


App.install = function (Vue) {
  return Vue.component('easy-video-player', App);
};

if (window) {
  window.EasyVideoPlayer = App;
}

/* harmony default export */ var src = (App);
// CONCATENATED MODULE: C:/Users/shitou/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "a130":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "a602":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d528").f;
var has = __webpack_require__("571a");
var TAG = __webpack_require__("24aa")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "b36a":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("3fa7");
var isObject = __webpack_require__("1d2f");
var newPromiseCapability = __webpack_require__("0abd");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "b7f6":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "baa3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9baa") && !__webpack_require__("c213")(function () {
  return Object.defineProperty(__webpack_require__("8c9d")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "baca":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("9a60");
var hide = __webpack_require__("59ee");
var has = __webpack_require__("571a");
var SRC = __webpack_require__("329e")('src');
var $toString = __webpack_require__("ca25");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("e3a0").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "bb25":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("048e");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "c20c":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("9a60").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "c213":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "c6f8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.40e6ab4e.svg";

/***/ }),

/***/ "ca25":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6ae5")('native-function-to-string', Function.toString);


/***/ }),

/***/ "cab0":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("538c");
exports = module.exports = __webpack_require__("a130")(false);
// imports


// module
exports.push([module.i, ".player[data-v-bf21dd12]{position:relative;display:inline-block;user-select:none;width:360px}.player__mask[data-v-bf21dd12]{position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.6)}.player__btn-play[data-v-bf21dd12]{width:30px;height:30px;background:url(" + escape(__webpack_require__("191e")) + ") no-repeat 50%/contain}.player__btn-pause[data-v-bf21dd12],.player__btn-play[data-v-bf21dd12]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.player__btn-pause[data-v-bf21dd12]{width:40px;height:40px;background:url(" + escape(__webpack_require__("3e13")) + ") no-repeat 50%/contain}.player__btn-loading[data-v-bf21dd12]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60px;height:60px;background:url(" + escape(__webpack_require__("c6f8")) + ") no-repeat 50%/contain}.player__poster[data-v-bf21dd12]{position:absolute;width:100%;height:100%;top:0;left:0;object-fit:contain}.player__video[data-v-bf21dd12]{vertical-align:top;width:100%;height:100%}.player__video--hidden[data-v-bf21dd12]{opacity:0}.player__error[data-v-bf21dd12]{justify-items:center;align-content:center;top:0;background:rgba(0,0,0,.6)}.player__controls[data-v-bf21dd12],.player__error[data-v-bf21dd12]{display:flex;position:absolute;bottom:0;left:0;right:0;color:#fff}.player__controls[data-v-bf21dd12]{height:20px;background:rgba(0,0,0,.3);padding:4px}.player__progress-container[data-v-bf21dd12]{height:4px;border-radius:4px;background:hsla(0,0%,52.2%,.3);margin-top:4px;cursor:pointer}.player__timer[data-v-bf21dd12]{display:inline-block;width:calc(100% - 24px);font-size:12px;line-height:12px;margin-right:4px}.player__progress[data-v-bf21dd12]{position:relative;height:100%;background:hsla(0,0%,100%,.5);border-radius:4px}.player__progress-btn[data-v-bf21dd12]{position:absolute;right:-3px;top:-1px;height:6px;width:6px;border-radius:50%;cursor:pointer;background:#eee}.player__full-screen[data-v-bf21dd12]{display:inline-block;width:20px;height:20px;background:url(" + escape(__webpack_require__("9873")) + ") no-repeat 50%/contain;cursor:pointer}.player--full-screen[data-v-bf21dd12]{position:fixed;left:0;top:0;width:100vh;height:100vh;background:#000}.player__header[data-v-bf21dd12]{position:absolute;left:0;top:0;z-index:1}.palyer__title[data-v-bf21dd12]{font-size:14px;color:#fff;padding:8px}.player__watermark[data-v-bf21dd12]{vertical-align:middle;height:30px}", ""]);

// exports


/***/ }),

/***/ "d35e":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "d3ae":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "d528":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("3fa7");
var IE8_DOM_DEFINE = __webpack_require__("baa3");
var toPrimitive = __webpack_require__("0666");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9baa") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "de94":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cab0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("041e").default
var update = add("7956896f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e3a0":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "e87b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("d3ae");
var global = __webpack_require__("9a60");
var ctx = __webpack_require__("2eb4");
var classof = __webpack_require__("26f8");
var $export = __webpack_require__("048e");
var isObject = __webpack_require__("1d2f");
var aFunction = __webpack_require__("2004");
var anInstance = __webpack_require__("edad");
var forOf = __webpack_require__("ede6");
var speciesConstructor = __webpack_require__("4eb1");
var task = __webpack_require__("5698").set;
var microtask = __webpack_require__("0c24")();
var newPromiseCapabilityModule = __webpack_require__("0abd");
var perform = __webpack_require__("0646");
var userAgent = __webpack_require__("17f7");
var promiseResolve = __webpack_require__("b36a");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("24aa")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("3c12")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("a602")($Promise, PROMISE);
__webpack_require__("8465")(PROMISE);
Wrapper = __webpack_require__("e3a0")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("1707")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "ebbd":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "edad":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "ede6":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("2eb4");
var call = __webpack_require__("f80b");
var isArrayIter = __webpack_require__("4e8e");
var anObject = __webpack_require__("3fa7");
var toLength = __webpack_require__("38fd");
var getIterFn = __webpack_require__("4811");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "f80b":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("3fa7");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=EasyVideoPlayer.umd.js.map