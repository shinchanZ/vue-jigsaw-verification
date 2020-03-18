module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fd77");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1513":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("daf8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("359cf677", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2260":
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),

/***/ "27c2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cb7e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("3ac90eaa", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "52b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_vueJigsawVerfication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1513");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_vueJigsawVerfication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_vueJigsawVerfication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_0_vue_loader_lib_index_js_vue_loader_options_vueJigsawVerfication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6dfd":
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),

/***/ "7e94":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "85cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js
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

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js
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

/***/ "9c2c":
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "a986":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iconfont.2a2b9dd6.svg";

/***/ }),

/***/ "abd8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "cb7e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("abd8");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__("7e94");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__("6dfd");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__("9c2c");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__("2260");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__("a986");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#iconfont" });
// Module
exports.push([module.i, "@font-face{font-family:iconfont;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(\"data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAW4AAsAAAAAC7QAAAVpAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCECgqJHIc0ATYCJAMkCxQABCAFhG0HgQ4b7gmjooRPFsn+ssA2xExofzA4hAeheaFpGJdc+pYbi290P7qX9Ax98X53g5WhPhaSNh7+Xfu8L8kML6DbVQWS9cCyquyIhaytIlKSje/xKRnx/29OfwFV3YC+2jhpK6tGpNBf0n+Xa+DyLr/oJ/SMnJrwLOQm3By3OYDMw+Hf017hIa2/Bn3tYAcT052d2UoGOAe+/vu/gNZ0+tT8//yx5CtMO8x3befy/lXFKi2ShpVAA4pIjNIBFo2HA8INsnOuziRcTWC0a1Pu9OH5FVQVoiVgh4daCah6vEoCN/SONuLIIl5q9Ol5eoW8ML4//sOjStJk4rUu3D7ownYFj4gF4XomPKsuDHYcGUeAQnyOjL6VreoRBePn7xZ3gXUNBamC0sqUOcsE9jiCfYlThXWpAhptZdoh/+P1OqKFrTNkPK31VFBAQ1XRUqdUZOqcikRdVhFUoaJQWVud7RF6dZg2bL8ObIC4BBB/AOOINS2RTrqvrJ/H1XkMPYlCU0VFT1VVRU1VTUX998gSPLqMUKsYufIFQ8Ip3DRkBP5Nkl7aw4+MI6PzGEU5kkahMRklMhQOKcuKk2NoWHx2uRTBwkszYyXwZ2W4o0wW5iWxw1U5SQghtbeTk4Z6y5X2Znncfr/t0DCvDEKKhKZ6p8u/B5A/y+swx2xvqX0oiJDYhaRFyZVqXtAdLu/M/iMwSaIUhY2OInygig8QCSGQwLQ1uYJ2lHR34sjSr5b7jbA2MGGUicBMDCm/9sqi0RrsnQkAkQGHydD63UioK8T3yiI8gcA78ydGYWlR0XIsPDUzUgKHWGen2nKjs9MXRkakmFKzjU2QOz01lHy7aDGIcaaWFlPljiManbvw2QZPikJAfXpZuPoz+63VkHh00MHW0e3yh90y6g/hF033C4yMDPRjRPvfufOgvPtheX91Dc0TmoyLi43rhiJpNVQuroYWCXXrA+vEAf8fPerR7REqaK7z8NGUzpSwRq/6kZiu0a0RuoMPH8W+A3DSJm1zMy11W6dHZ6an9SZHwrnJEuzobscZgK3/HzIgc/fx8VChkW7uVav+VSampAqFgnFwZvAbI4GkEhkSamih7iJJeFYczOLEs2XDI0cOzZ5DSm3fgTN3d5lqqXh3r4QhoYZ4BuD/E9FVNbmrmRmL2YwRE9Xo/Nq4zrZWpdQB+i753tre2vZN8k2olDi0tUSsB3yFcKgGQnVQvCY+/mKvytk5RgPX6KSbZWthth01kL2OPQRvd/VxgaHrqR/Ozl0DuGq2s0vVJU8hWoyPXvTcy/p4jio+UOXs8uO268V/j+leGh1CTCvbxfn7aWTn1ovv5j7VwIkAi8D8hSDnWxGVZwHI79IDi2HZeQPUe2Tlg4diK+e/bG61i9+94EZZ8OvuoAdlFkSBatroJTLrHgFdxhHlaxB9Q3kPXNEWEA3uq5YTRmkcF35y3Ue19q3MVk+afcuBpLMDWW8PpTCOQGNyFFq9YzA67Oj4yQarIMqAQ24BhFX3kCz7CdmqN0phvENj2ye0VqMAo4shPuNkX+j6DUuCqYveGLVvEikHuG52vCDVj4R1Gwz+DdlMF7DlNP0NR5SQrWKfbKDazBKlNTEegutRFBlMremRz07AnHZcV0Y9keObGOpOsYjASBfyjCHNZySkNjWrB77+AlH6IoJN6POjfoNYGb161OJoZqAcWZNMfXale2ZAaWNUlpBk7Y0YOkRhEklVA6XRm/UQH3MEBcqpDheNJbNanebt8bpeASPxrYdIkaNEE2100ccQo/FGQIlSJlGtchZoT+iKsi8ST7dqkV1nx6bf0yJhnTLyqTFFJZKo2gy22WLKuJzHXE5VmQgNAAAA\") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-chenggong1:before{content:\"\\e626\"}.icon-shibai:before{content:\"\\e61b\"}.icon-guanbi1:before{content:\"\\e617\"}.icon-chenggong:before{content:\"\\e661\"}.icon-youjiantouxiangyouxianxing:before{content:\"\\e600\"}.icon-icon-test:before{content:\"\\e605\"}.icon-guanbi:before{content:\"\\e6c8\"}.icon-jiazai:before{content:\"\\e674\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "daf8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("abd8");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#puzzle-verification{width:100%;height:100%;position:fixed;left:0;top:0;z-index:9999}#puzzle-verification .slider-bar{height:40px;line-height:40px;text-align:center;font-size:14px;color:#45494c;border-radius:2px;border:1px solid #e4e7eb;background-color:#f7f9fa}#puzzle-verification .btn-container{height:40px;background-color:#d2f4ef;border:1px solid #fff;border-radius:2px;position:absolute;left:0;top:0;z-index:2000}#puzzle-verification .slider-btn{position:absolute;left:0;top:0;z-index:12;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;-webkit-box-shadow:0 0 3px rgba(0,0,0,.3);box-shadow:0 0 3px rgba(0,0,0,.3);cursor:pointer;-webkit-transition:background .2s linear;transition:background .2s linear;width:45px;height:100%;line-height:39px;text-align:center;font-size:20px;font-weight:700;color:#777;pointer-events:auto}#puzzle-verification .slider-btn:hover{background-color:#1991fa;color:#fff}#puzzle-verification .ver-tips{position:absolute;left:0;bottom:-22px;background:hsla(0,0%,100%,.9);height:22px;line-height:22px;font-size:12px;width:100%;margin:0;text-align:left;padding:0 8px;-webkit-transition:all .4s;transition:all .4s;z-index:2000}#puzzle-verification .slider-tips{bottom:0}#puzzle-verification .ver-tips span{display:inline-block;vertical-align:top;line-height:22px;color:#455}#puzzle-verification .background{width:100%;height:100%;position:absolute;left:0;top:0;z-index:9999;filter:alpha(opacity=40)}#puzzle-verification .puzzle-container{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;padding:15px 15px 28px;border-radius:2px;border:1px solid #e4e7eb;background-color:#fff;-webkit-box-shadow:0 0 10px rgba(0,0,0,.3);box-shadow:0 0 10px rgba(0,0,0,.3);left:calc(50% - 150px);top:calc(50% - 100px);z-index:9999}#puzzle-verification .puzzle-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:5px 0}#puzzle-verification .puzzle-header-left{color:#333}#puzzle-verification .close-btn,#puzzle-verification .re-btn{font-size:18px;cursor:pointer;color:#666;pointer-events:auto}#puzzle-verification .re-btn:hover{color:#67c23a}#puzzle-verification .close-btn{font-size:16px}#puzzle-verification .close-btn:hover{color:#f56c6c}#puzzle-verification .close-btn{margin-left:5px}#puzzle-verification .slider-container{position:relative;margin:22px auto 0;min-height:15px}#puzzle-verification #puzzle-box,#puzzle-verification #puzzle-shadow{position:absolute;left:0;top:0;z-index:22}#puzzle-verification #puzzle-lost{position:absolute;left:0;top:0;z-index:33}#puzzle-verification .puzzle-lost-box{position:absolute;width:260px;height:116px;left:0;top:0;z-index:111}#puzzle-verification .stop{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#puzzle-verification .el-loading-text{color:#000!important}#puzzle-verification .el-loading-spinner i{color:#000!important;font-size:30px}#puzzle-verification .verfication-loading-box{background-color:hsla(0,0%,100%,.9);-webkit-transition:all .1s;transition:all .1s}#puzzle-verification .verfication-loading-box .verfication-loading-box{text-align:center;width:60px;height:40px;position:absolute;line-height:10px;top:calc(50% - 20px);left:calc(50% - 30px)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e67d":
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

/***/ "fd77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.2.3@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./packages/vue-jigsaw-verification/src/iconfont/iconfont.css
var iconfont = __webpack_require__("27c2");

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c31f952-vue-loader-template"}!./node_modules/_vue-loader@15.9.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./packages/vue-jigsaw-verification/src/vueJigsawVerfication.vue?vue&type=template&id=61cb2df0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVerificationShow),expression:"isVerificationShow"}],attrs:{"id":"puzzle-verification"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVerificationShow),expression:"isVerificationShow"}],staticClass:"background",style:('background:'+_vm.backgroundColor+';')}),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVerificationShow),expression:"isVerificationShow"}],staticClass:"puzzle-container stop",style:('position: absolute;width:' + _vm.dataWidth + 'px;height:' + _vm.dataHeight + 'px;left: calc(50% - '+_vm.dataWidth/2+'px);top: calc(50% - '+_vm.dataHeight/2+'px);')},[_c('div',{staticClass:"puzzle-header"},[_c('span',{staticClass:"puzzle-header-left"},[_vm._t("title",[_vm._v("滑动下方拼图完成安全验证")])],2),_c('div',[_c('span',{ref:"refreshImg",staticClass:"iconfont icon-icon-test re-btn",on:{"click":_vm.refreshImg}}),_vm._v(" "),_c('span',{staticClass:"iconfont icon-guanbi re-btn",on:{"click":_vm.closeVerificationBox}})])]),_c('div',{style:('position:relative;overflow:hidden;width:'+ _vm.imgWidth +'px;')},[_c('div',{style:('position:relative;width:' + _vm.imgWidth + 'px;height:' + _vm.imgHeight + 'px;')},[_c('img',{ref:"scream",style:('width:' + _vm.imgWidth + 'px;height:' + _vm.imgHeight + 'px;'),attrs:{"id":"scream","src":_vm.imgRandom}}),_c('canvas',{ref:"puzzleBox",attrs:{"id":"puzzle-box","width":_vm.imgWidth,"height":_vm.imgHeight}})]),_c('div',{staticClass:"puzzle-lost-box ",style:('left:' + _vm.left_Num + 'px;width:' + _vm.imgWidth + 'px;height:' + _vm.imgHeight + 'px;')},[_c('canvas',{ref:"puzzleShadow",attrs:{"id":"puzzle-shadow","width":_vm.imgWidth,"height":_vm.imgHeight}}),_c('canvas',{ref:"puzzleLost",attrs:{"id":"puzzle-lost","width":_vm.imgWidth,"height":_vm.imgHeight}})]),_c('p',{ref:"verTips",class:'ver-tips'+ (_vm.displayTips ? ' slider-tips' : '')},[(_vm.verification)?[_c('span',{staticStyle:{"color":"#42ca6b"}},[_c('span',{staticClass:"iconfont icon-chenggong1",staticStyle:{"color":"#42ca6b"}}),_vm._v(" "),_vm._t("success",[_vm._v("验证通过")])],2)]:_vm._e(),(!_vm.verification)?[_c('span',{staticStyle:{"color":"red"}},[_c('span',{staticStyle:{"color":"#42ca6b"}},[_c('span',{staticClass:"iconfont icon-shibai"})]),_vm._v(" "),_vm._t("error",[_vm._v("验证失败: 拖动滑块将悬浮图像正确拼合")])],2)]:_vm._e()],2),(_vm.imgLoading)?_c('div',{staticClass:"verfication-loading-box",style:('position:absolute;overflow:hidden;width:'+ _vm.imgWidth +'px;left:0;top:0;height:100%;z-index:9999;')},[_c('div',{staticClass:"verfication-loading-box"},[_c('p',[_c('span',{staticClass:"iconfont icon-jiazai",staticStyle:{"font-size":"20px"}})]),_c('p',{staticStyle:{"font-size":"14px"}},[_vm._v("加载中")])])]):_vm._e()]),_c('div',{staticClass:"slider-container ",style:('width:' + _vm.imgWidth + 'px;')},[_c('div',{staticClass:"slider-bar "},[_vm._v("向右拖动滑块填充拼图")]),_c('div',{ref:"btnContainer",staticClass:"btn-container"},[_c('div',{ref:"sliderBtn",staticClass:"slider-btn",on:{"mousedown":_vm.startMove,"touchstart":_vm.startMove,"mouseup":_vm.moveEnd}},[_c('span',{staticClass:"iconfont",class:_vm.buttonIcon})])])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-jigsaw-verification/src/vueJigsawVerfication.vue?vue&type=template&id=61cb2df0&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.0@vue-loader/lib??vue-loader-options!./packages/vue-jigsaw-verification/src/vueJigsawVerfication.vue?vue&type=script&lang=js&
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



/* harmony default export */ var vueJigsawVerficationvue_type_script_lang_js_ = ({
    name: 'vueJigsawVerification',
    data() {
        var self = this
        return {
            isVerificationShow: false,
            moveStart: '',
            displayTips: false,
            verification: false,
            randomX: null,
            randomY: null,
            imgRandom: '',
            left_Num: 0,
            dataWidth: null,
            dataHeight: null,
            imgWidth: null,
            imgHeight: null,
            puzzleSize: null, // 滑块的大小
            deviationValue: null,
            radius: null,
            padding: 50,
            buttonIcon: 'icon-youjiantouxiangyouxianxing',
            imgLoading: false
        }
    },
    model: {
        prop: 'verificationShow',
        event: 'setVisible'
    },
    watch: {
        isVerificationShow(val) {
            this.$emit('update:verificationShow', val)
        },
        verificationShow(val) {
            this.isVerificationShow = val
            if (val === false) {
                this.closeVerificationBox()
            }
        }
    },
    props: {
        // 画布图片的尺寸
        width: {
            type: [String, Number],
            default: 300
        },
        height: {
            type: [String, Number],
            default: 240
        },
        // 图集
        puzzleImgList: {
            type: Array,
            default: () => [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897405&di=d65738dbc4756fc280222c6e4bc880fe&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fa6442e874db9be7c4b4d44636cba66b0539bde2eca0-41LBvJ_fw658',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897406&di=62b3728e56588d25f22b835eb77d530d&imgtype=0&src=http%3A%2F%2Fwww.forestry.gov.cn%2Fuploadfile%2Fmain%2F2013-6%2Fimage%2F2013-6-19-dbdb3e3f20b644ec959960e9d8308eda.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897404&di=ee3b5b96e163ef81ea62a672c772d7b7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8446c0b5d1a6edbbf05300612800dbb0853ce6ea3c5b-XKH1nw_fw658',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571289897399&di=a4fb859b4176e151178dd00887eb61f2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcea8089f49442c4945b635361c221412fcef212f7592-Kz88EH_fw658',
                'data:image/jpeg;base64,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',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=288526321,3228035290&fm=15&gp=0.jpg'
            ]
        },
        // 滑块的大小
        blockSize: {
            type: [String, Number],
            default: 40
        },
        // 误差
        deviation: {
            type: [String, Number],
            default: 6
        },
        // 滑块的圆角大小
        blockRadius: {
            type: [String, Number],
            default: 6
        },
        // 滑块形状 square  puzzle
        blockType: {
            type: String,
            default: 'square'
        },
        //遮罩层背景色
        backgroundColor: {
            type: String,
            default: 'rgba(0,0,0,0.3)'
        },
        // 成功的回调
        onSuccess: {
            type: Function,
            default: () => {
                // console.log('成功')
            }
        },
        // 失败的回调
        onError: {
            type: Function,
            default: () => {
                // console.log('失败')
            }
        },
        verificationShow: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initCanvas()
        })
    },
    created() {
        // 随机显示一张图片
        let imgRandomIndex = Math.round(
            Math.random() * (this.puzzleImgList.length - 1)
        )
        this.imgRandom = this.puzzleImgList[imgRandomIndex]

        this.puzzleSize = Number(this.blockSize)
        this.deviationValue = Number(this.deviation)
        this.radius = Number(this.blockRadius)
        this.dataWidth = Number(this.width)
        this.dataHeight = Number(this.height)
        this.imgWidth = Number(this.width) - 32
        this.imgHeight = Number(this.height) - 126
    },
    methods: {
        // 关闭验证
        closeVerificationBox() {
            this.displayTips = false
            this.refreshImg()
            this.reset()
            this.isVerificationShow = false
        },
        // 拼图验证重置
        reset() {
            this.buttonIcon = 'icon-youjiantouxiangyouxianxing'
            this.$refs.btnContainer.style.border = '1px solid white'
            this.$refs.btnContainer.style.borderRadius = '2px'
            this.$refs.btnContainer.style.width = '45px'
            this.$refs.btnContainer.style.transition = 'width 0.3s'
            this.$refs.sliderBtn.style.color = '#777'
            this.$refs.sliderBtn.style.backgroundColor = 'white'
            this.$refs.sliderBtn.style.left = 0
            this.$refs.sliderBtn.style.transition = 'left 0.3s'
            this.$refs.puzzleLost.style.left = 0
            this.$refs.puzzleLost.style.transition = 'left 0.3s'
            this.$refs.puzzleShadow.style.left = 0
            this.$refs.puzzleShadow.style.transition = 'left 0.3s'
            this.$refs.sliderBtn.style.pointerEvents = 'auto'
            this.$refs.refreshImg.style.pointerEvents = 'auto'
        },
        // 刷新
        refreshImg() {
            let imgRandomIndex = Math.round(
                Math.random() * (this.puzzleImgList.length - 1)
            )
            this.imgLoading = true
            let image = new Image()
            image.src = this.puzzleImgList[imgRandomIndex]
            image.onload = () => {
                this.imgRandom = this.puzzleImgList[imgRandomIndex]
                this.initCanvas()
                setTimeout(() => {
                    this.imgLoading = false
                }, 500)
            }
        },
        // 画布初始化
        initCanvas() {
            this.clearCanvas()
            let w = this.imgWidth
            let h = this.imgHeight
            let PL_Size = this.puzzleSize
            let padding = this.padding
            let MinN_X = padding + PL_Size
            let MaxN_X = w - padding - PL_Size - PL_Size / 6
            let MaxN_Y = padding
            let MinN_Y = h - padding - PL_Size - PL_Size / 6
            this.randomX = Math.round(Math.random() * (MaxN_X - PL_Size) + MinN_X)
            this.randomY = Math.round(Math.random() * MaxN_Y + MinN_Y)
            let X = this.randomX
            let Y = this.randomY
            this.left_Num = -X + 3
            let d = PL_Size / 3
            let radius = Number(this.radius)

            let c = this.$refs.puzzleBox
            let c_l = this.$refs.puzzleLost
            let c_s = this.$refs.puzzleShadow
            let ctx = c.getContext('2d')
            let ctx_l = c_l.getContext('2d')
            let ctx_s = c_s.getContext('2d')
            ctx.globalCompositeOperation = 'xor'
            ctx.shadowBlur = 20
            ctx.shadowColor = '#fff'
            ctx.shadowOffsetX = 3
            ctx.shadowOffsetY = 3
            ctx.fillStyle = 'rgba(0,0,0,0.7)'
            ctx.beginPath()
            ctx.lineWidth = '2'
            ctx.strokeStyle = 'rgba(0,0,0,0.5)'
            if (this.blockType === 'square') {
                ctx.arc(X + radius, Y + radius, radius, Math.PI, (Math.PI * 3) / 2)
                ctx.lineTo(PL_Size - radius + X, Y)
                ctx.arc(
                    PL_Size - radius + X,
                    radius + Y,
                    radius,
                    (Math.PI * 3) / 2,
                    Math.PI * 2
                )
                ctx.lineTo(PL_Size + X, PL_Size + Y - radius)
                ctx.arc(
                    PL_Size - radius + X,
                    PL_Size - radius + Y,
                    radius,
                    0,
                    (Math.PI * 1) / 2
                )
                ctx.lineTo(radius + X, PL_Size + Y)
                ctx.arc(
                    radius + X,
                    PL_Size - radius + Y,
                    radius,
                    (Math.PI * 1) / 2,
                    Math.PI
                )
            } else {
                ctx.moveTo(X, Y)
                ctx.lineTo(X + d, Y)
                ctx.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y)
                ctx.lineTo(X + 3 * d, Y)
                ctx.lineTo(X + 3 * d, Y + d)
                ctx.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d)
                ctx.lineTo(X + 3 * d, Y + 3 * d)
                ctx.lineTo(X, Y + 3 * d)
            }
            ctx.closePath()
            ctx.stroke()
            ctx.fill()

            let img = new Image()
            img.src = this.imgRandom

            img.onload = function () {
                ctx_l.drawImage(img, 0, 0, w, h)
            }
            ctx_l.beginPath()
            ctx_l.strokeStyle = 'rgba(0,0,0,0)'
            if (this.blockType === 'square') {
                ctx_l.arc(X + radius, Y + radius, radius, Math.PI, (Math.PI * 3) / 2)
                ctx_l.lineTo(PL_Size - radius + X, Y)
                ctx_l.arc(
                    PL_Size - radius + X,
                    radius + Y,
                    radius,
                    (Math.PI * 3) / 2,
                    Math.PI * 2
                )
                ctx_l.lineTo(PL_Size + X, PL_Size + Y - radius)
                ctx_l.arc(
                    PL_Size - radius + X,
                    PL_Size - radius + Y,
                    radius,
                    0,
                    (Math.PI * 1) / 2
                )
                ctx_l.lineTo(radius + X, PL_Size + Y)
                ctx_l.arc(
                    radius + X,
                    PL_Size - radius + Y,
                    radius,
                    (Math.PI * 1) / 2,
                    Math.PI
                )
            } else {
                ctx_l.moveTo(X, Y)
                ctx_l.lineTo(X + d, Y)
                ctx_l.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y)
                ctx_l.lineTo(X + 3 * d, Y)
                ctx_l.lineTo(X + 3 * d, Y + d)
                ctx_l.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d)
                ctx_l.lineTo(X + 3 * d, Y + 3 * d)
                ctx_l.lineTo(X, Y + 3 * d)
            }
            ctx_l.closePath()
            ctx_l.stroke()
            ctx_l.shadowBlur = 20
            ctx_l.shadowColor = '#fff'
            ctx_l.clip()
            ctx_s.beginPath()
            ctx_s.lineWidth = '2'
            ctx_s.strokeStyle = 'rgba(0,0,0,0.5)'
            if (this.blockType === 'square') {
                ctx_s.arc(X + radius, Y + radius, radius, Math.PI, (Math.PI * 3) / 2)
                ctx_s.lineTo(PL_Size - radius + X, Y)
                ctx_s.arc(
                    PL_Size - radius + X,
                    radius + Y,
                    radius,
                    (Math.PI * 3) / 2,
                    Math.PI * 2
                )
                ctx_s.lineTo(PL_Size + X, PL_Size + Y - radius)
                ctx_s.arc(
                    PL_Size - radius + X,
                    PL_Size - radius + Y,
                    radius,
                    0,
                    (Math.PI * 1) / 2
                )
                ctx_s.lineTo(radius + X, PL_Size + Y)
                ctx_s.arc(
                    radius + X,
                    PL_Size - radius + Y,
                    radius,
                    (Math.PI * 1) / 2,
                    Math.PI
                )
            } else {
                ctx_s.moveTo(X, Y)
                ctx_s.lineTo(X + d, Y)
                ctx_s.bezierCurveTo(X + d, Y - d, X + 2 * d, Y - d, X + 2 * d, Y)
                ctx_s.lineTo(X + 3 * d, Y)
                ctx_s.lineTo(X + 3 * d, Y + d)
                ctx_s.bezierCurveTo(X + 2 * d, Y + d, X + 2 * d, Y + 2 * d, X + 3 * d, Y + 2 * d)
                ctx_s.lineTo(X + 3 * d, Y + 3 * d)
                ctx_s.lineTo(X, Y + 3 * d)
            }
            ctx_s.closePath()
            ctx_s.stroke()
            ctx_s.shadowBlur = 20
            ctx_s.shadowColor = '#fff'
            ctx_s.fill()
        },
        // 通过重置画布尺寸清空画布，这种方式更彻底
        clearCanvas() {
            let c = this.$refs.puzzleBox
            let c_l = this.$refs.puzzleLost
            let c_s = this.$refs.puzzleShadow
            c.setAttribute('height', c.getAttribute('height'))
            c_l.setAttribute('height', c.getAttribute('height'))
            c_s.setAttribute('height', c.getAttribute('height'))
        },
        // 按住滑块后初始化移动监听，记录初始位置
        startMove(e) {
            e = e || window.event
            this.moveStart = e.pageX || e.targetTouches[0].pageX
            this.addMouseMoveListener()
        },
        // 滑块移动
        moving(e) {
            let self = this
            e = e || window.event
            let moveX = e.pageX || e.changedTouches[0].pageX
            let d = moveX - self.moveStart
            let w = self.imgWidth
            let PL_Size = this.puzzleSize
            if (self.moveStart === '') {
                return ''
            }
            if (d < 0 || d > w - PL_Size - 5) {
                return ''
            }
            self.$refs.btnContainer.style.border = '1px solid #1991fa'
            self.$refs.btnContainer.style.borderRadius = '2px'
            self.$refs.btnContainer.style.width = d + 45 + 'px'
            self.$refs.btnContainer.style.transition = 'inherit'
            self.$refs.sliderBtn.style.color = 'white'
            self.$refs.sliderBtn.style.backgroundColor = '#1991fa'
            self.$refs.sliderBtn.style.left = d + 'px'
            self.$refs.sliderBtn.style.transition = 'inherit'
            self.$refs.puzzleLost.style.left = d + 'px'
            self.$refs.puzzleLost.style.transition = 'inherit'
            self.$refs.puzzleShadow.style.left = d + 'px'
            self.$refs.puzzleShadow.style.transition = 'inherit'
        },
        // 移动结束，验证并回调
        moveEnd(e) {
            let self = this
            e = e || window.event
            let moveEnd_X = (e.pageX || e.changedTouches[0].pageX) - self.moveStart
            let ver_Num = self.randomX
            let deviationValue = this.deviationValue
            let Min_left = ver_Num - deviationValue
            let Max_left = ver_Num + deviationValue
            if (self.moveStart !== '') {
                if (Max_left > moveEnd_X && moveEnd_X > Min_left) {
                    self.buttonIcon = 'icon-chenggong'
                    self.$refs.sliderBtn.style.backgroundColor = '#37C448'
                    self.$refs.btnContainer.style.border = '1px solid #37C448'
                    self.$refs.btnContainer.style.borderRadius = '2px'
                    self.displayTips = true
                    self.verification = true
                    self.$refs.refreshImg.style.pointerEvents = 'none'
                    // self.$refs.refreshImg.style.cursor = 'not-allowed'
                    self.$refs.sliderBtn.style.pointerEvents = 'none'
                    // 成功回调函数
                    setTimeout(function () {
                        self.onSuccess()
                    }, 500)
                } else {
                    self.buttonIcon = 'icon-guanbi1'
                    self.$refs.sliderBtn.style.backgroundColor = '#f57a7a'
                    self.$refs.btnContainer.style.border = '1px solid #f57a7a'
                    self.$refs.btnContainer.style.borderRadius = '2px'
                    self.displayTips = true
                    self.verification = false
                    if (
                        typeof self.$refs.sliderBtn !== 'undefined' &&
                        typeof self.$refs.puzzleLost !== 'undefined' &&
                        typeof self.$refs.puzzleShadow !== 'undefined'
                    ) {
                        setTimeout(function () {
                            self.reset()
                        }, 500)
                    }
                    setTimeout(function () {
                        self.displayTips = false
                        // 失败的回调函数
                        self.onError()
                        self.refreshImg()
                    }, 500)
                }
            }
            self.moveStart = ''
        },
        // 全局绑定滑块移动与滑动结束，移动过程中鼠标可在页面任何位置
        addMouseMoveListener() {
            let self = this
            // pc端
            document.addEventListener('mousemove', self.moving)
            document.addEventListener('mouseup', self.moveEnd)
            // 移动端
            document.addEventListener('touchmove', self.moving)
            document.addEventListener('touchend', self.moveEnd)
        }
    },
});

// CONCATENATED MODULE: ./packages/vue-jigsaw-verification/src/vueJigsawVerfication.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vueJigsawVerficationvue_type_script_lang_js_ = (vueJigsawVerficationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-jigsaw-verification/src/vueJigsawVerfication.vue?vue&type=style&index=0&lang=scss&
var vueJigsawVerficationvue_type_style_index_0_lang_scss_ = __webpack_require__("52b2");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.0@vue-loader/lib/runtime/componentNormalizer.js
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
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./packages/vue-jigsaw-verification/src/vueJigsawVerfication.vue






/* normalize component */

var component = normalizeComponent(
  src_vueJigsawVerficationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vueJigsawVerfication = (component.exports);
// CONCATENATED MODULE: ./packages/vue-jigsaw-verification/index.js
// 导入组件，组件必须声明 name

// // 为组件提供 install 安装方法，供按需引入
// const customKeyboard = function (Vue) {
//     Vue.component(CustomKeyboard.name, CustomKeyboard)
// };
// 默认导出组件
/* harmony default export */ var vue_jigsaw_verification = (vueJigsawVerfication);

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [
    vue_jigsaw_verification
];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
};
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
/* harmony default export */ var packages_0 = ({
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    vueJigsawVerfication: vue_jigsaw_verification
});

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.2.3@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });