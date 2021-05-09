/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_fonts_OpenSansRegular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/fonts/OpenSansRegular.ttf */ \"./src/data/fonts/OpenSansRegular.ttf\");\n/* harmony import */ var _data_fonts_GoblinOneRegular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/fonts/GoblinOneRegular.ttf */ \"./src/data/fonts/GoblinOneRegular.ttf\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_data_fonts_OpenSansRegular_ttf__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_data_fonts_GoblinOneRegular_ttf__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Open Sans';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: 'Goblin One';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n#banner {\\n  background-color: #941c21;\\n  padding: 20px 0;\\n}\\n\\n#bannerLogo {\\n  display: block;\\n  height: auto;\\n  margin: 0 auto;\\n  width: 200px;\\n}\\n\\n.footer {\\n  border-radius: 20px;\\n  border: 1px dotted #b4b4b4;\\n  color: #969696;\\n  margin: 60px auto 90px auto;\\n  padding: 10px 10px 20px 10px;\\n  text-align: center;\\n  width: 175px;\\n}\\n\\n.footer p {\\n  font-family: 'Goblin One';\\n  font-size: 0.75em;\\n}\\n\\n.footer a {\\n  color: #969696;\\n  font-size: 0.9em;\\n  text-decoration: none;\\n}\\n\\n.footer a:hover {\\n  text-decoration: underline;\\n}\\n\\n#navBar ul {\\n  background-color: #002a86;\\n  list-style-type: none;\\n  margin: 0;\\n  overflow: hidden;\\n  padding: 0;\\n  text-align: center;\\n}\\n\\n#navBar li {\\n  color: white;\\n  display: inline-block;\\n  font-family: 'Goblin One';\\n  padding: 14px 16px;\\n}\\n\\n#navBar li:hover {\\n  color: #fccc00;\\n}\\n\\n#homePage img {\\n  display: block;\\n  height: auto;\\n  margin: 30px auto;\\n  width: 60vw;\\n}\\n\\n#menuPage {\\n  text-align: center;\\n}\\n\\n#menuPage .menuItem {\\n  padding: 30px 0;\\n}\\n\\n#menuPage .menuItemPrice {\\n  color: #941c21;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: 'Open Sans';\\n}\\n\\n#content {\\n  width: 60vw;\\n  margin: 90px auto 0px auto;\\n}\\n\\n.headerText {\\n  color: #941c21;\\n  font-family: 'Goblin One';\\n  font-size: 1.5em;\\n}\\n\\n.subHeaderText {\\n  color: #941c21;\\n  font-size: 1.25em;\\n  font-weight: 900;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://los-pollos-hermanos/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://los-pollos-hermanos/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://los-pollos-hermanos/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/data/fonts/GoblinOneRegular.ttf":
/*!*********************************************!*\
  !*** ./src/data/fonts/GoblinOneRegular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d06fb48705d37f39ffaa.ttf\";\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/data/fonts/GoblinOneRegular.ttf?");

/***/ }),

/***/ "./src/data/fonts/OpenSansRegular.ttf":
/*!********************************************!*\
  !*** ./src/data/fonts/OpenSansRegular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b0809d519837cb7aad3.ttf\";\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/data/fonts/OpenSansRegular.ttf?");

/***/ }),

/***/ "./src/data/images/bannerLogo.png":
/*!****************************************!*\
  !*** ./src/data/images/bannerLogo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d0778c65b4b18bac039a.png\";\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/data/images/bannerLogo.png?");

/***/ }),

/***/ "./src/data/images/restaurantFacade1.jpeg":
/*!************************************************!*\
  !*** ./src/data/images/restaurantFacade1.jpeg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f29175c8cba083e8b36.jpeg\";\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/data/images/restaurantFacade1.jpeg?");

/***/ }),

/***/ "./src/data/images/restaurantFacade2.jpg":
/*!***********************************************!*\
  !*** ./src/data/images/restaurantFacade2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f78faf8fce3bdb1c4f6.jpg\";\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/data/images/restaurantFacade2.jpg?");

/***/ }),

/***/ "./src/data/images/restaurantFood.jpg":
/*!********************************************!*\
  !*** ./src/data/images/restaurantFood.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f0ab9dee024b73d1730.jpg\";\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/data/images/restaurantFood.jpg?");

/***/ }),

/***/ "./src/data/images/restaurantMascot.jpg":
/*!**********************************************!*\
  !*** ./src/data/images/restaurantMascot.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bb43d5739c674a600c0.jpg\";\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/data/images/restaurantMascot.jpg?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createText\": () => (/* binding */ createText)\n/* harmony export */ });\nconst createText = (elementType, text) => {\n    /**Returns a text node whose element type is \"elementType\" and whose text\n     * content is equal to \"text\".*/\n    let textNode = document.createElement(elementType);\n    textNode.textContent = text;\n    return textNode; \n}\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"index\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _objects_banner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/banner.js */ \"./src/objects/banner.js\");\n/* harmony import */ var _objects_navBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/navBar.js */ \"./src/objects/navBar.js\");\n/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/homePage.js */ \"./src/pages/homePage.js\");\n/* harmony import */ var _pages_menuPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menuPage.js */ \"./src/pages/menuPage.js\");\n/* harmony import */ var _pages_aboutPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/aboutPage.js */ \"./src/pages/aboutPage.js\");\n\n\n\n\n\n\n\n\n\nconst index = (() => {\n    /**Module consolidating logic of the website's code.*/\n\n    let homePageContents = _pages_homePage_js__WEBPACK_IMPORTED_MODULE_3__.homePage.create();\n    let menuPageContents = _pages_menuPage_js__WEBPACK_IMPORTED_MODULE_4__.menuPage.create();\n    let aboutPageContents = _pages_aboutPage_js__WEBPACK_IMPORTED_MODULE_5__.aboutPage.create();\n\n    const updatePage = (page) => {\n        /**Updates the content of the #content div.\n         * \n         * Args:\n         *  page (node element): Node to be appended to the #content div.*/\n        let contentDiv = document.getElementById('content');\n        contentDiv.innerHTML = '';\n        contentDiv.appendChild(page);\n    }\n\n    const setUp = () => {\n        /**Sets up all the components of the website.*/\n        _objects_banner_js__WEBPACK_IMPORTED_MODULE_1__.banner.create();\n        _objects_navBar_js__WEBPACK_IMPORTED_MODULE_2__.navBar.create();\n        document.getElementById('content').appendChild(homePageContents);\n    }\n\n    return { \n        homePageContents, menuPageContents, aboutPageContents,\n        updatePage, setUp,\n    }\n})();\n\nindex.setUp();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/index.js?");

/***/ }),

/***/ "./src/objects/banner.js":
/*!*******************************!*\
  !*** ./src/objects/banner.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"banner\": () => (/* binding */ banner)\n/* harmony export */ });\n/* harmony import */ var _data_images_bannerLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/images/bannerLogo.png */ \"./src/data/images/bannerLogo.png\");\n\n\nconst banner = (() => {\n    /**Banner featuring logo of Los Pollos Hermanos and background image of \n     * its food. Is placed on every tab on the website.*/\n\n    const _createBannerContainer = () => {\n        /**Returns the div that'll contain all the banner's nodes.*/\n        let bannerContainer = document.createElement('div');\n        bannerContainer.id = 'banner';\n        return bannerContainer;\n    }\n\n    const _createBannerLogo = () => {\n        /**Returns image node with src as bannerLogoImage imported above.*/\n        let bannerLogoNode = document.createElement('img');\n        bannerLogoNode.src = _data_images_bannerLogo_png__WEBPACK_IMPORTED_MODULE_0__;\n        bannerLogoNode.id = 'bannerLogo';\n        return bannerLogoNode;\n    }\n\n    const create = () => {\n        /**Creates the banner node and inserts such into the webpage before \n         * the #contents div.*/\n        let bannerContainer = _createBannerContainer();\n        bannerContainer.appendChild(_createBannerLogo());\n        document.body.insertBefore(\n            bannerContainer, document.getElementById('content'));\n    }\n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/objects/banner.js?");

/***/ }),

/***/ "./src/objects/navBar.js":
/*!*******************************!*\
  !*** ./src/objects/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nconst navBar = (() => {\n    /**Navigation bar found below the banner. Holds links that users click on\n     * to navigate throughout the website.*/\n\n    const _createNavBarContainer = () => {\n        /**Returns a div node with id equal to \"navBar\".*/\n        let navBarContainer = document.createElement('div');\n        navBarContainer.id = 'navBar';\n        navBarContainer.appendChild(document.createElement('ul'));\n        return navBarContainer;\n    }\n\n    const _createNavBarItem = (text, page) => {        \n        /**Returns a li node whose inner HTML is equal to text argument \n         * passed.\n         * \n         * Args: \n         *  text (string): Inner HTML of the li node to be returned.\n         *  page (node element): Node to be appended to the #content div.*/\n        let navBarItem = document.createElement('li');\n        navBarItem.innerHTML = text;\n\n        navBarItem.addEventListener(\n            'click', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.updatePage.bind(null, page));\n\n        return navBarItem;\n    }\n\n    const create = () => {\n        /**Creates the navigation bar and appends such to the webpage before \n         * the #content div.*/\n        let navBarContainer = _createNavBarContainer();\n\n        let navBarList = navBarContainer.getElementsByTagName('ul')[0];\n        navBarList.appendChild(_createNavBarItem(\n            'Home', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.homePageContents));\n        navBarList.appendChild(_createNavBarItem(\n            'Menu', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.menuPageContents));\n        navBarList.appendChild(_createNavBarItem(\n            'About', _index_js__WEBPACK_IMPORTED_MODULE_0__.index.aboutPageContents));\n\n        document.body.insertBefore(\n            navBarContainer, document.getElementById('content'));\n    }\n\n    return { create } \n})(); \n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/objects/navBar.js?");

/***/ }),

/***/ "./src/pages/aboutPage.js":
/*!********************************!*\
  !*** ./src/pages/aboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPage\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\n\n\nconst aboutPage = (() => {\n    /**About page of the website.*/\n\n    const _createHistorySection = () => {\n        /**Returns node containing contents of Our history section of the \n         * about page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Our History');\n        header.classList.add('subHeaderText');\n\n        let text1 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', ` Los Pollos Hermanos is a fast-growing \n            casual family restaurant founded by Gus Fring and his business \n            partner Max Arciniega. Together, the \"chicken brothers\" made a \n            name for themselves and their small-town eatery by using \n            authentic flavors and spices to make the tastiest chicken south \n            of the border.`)\n        let text2 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `Since then, Los Pollos Hermanos has \n            opened our doors in the United States, serving families just like \n            yours. And we look forward to continued growth!`)\n        \n        let container = document.createElement('div');\n        container.append(header, text1, text2);\n\n        return container;\n    }\n    \n    const _createCultureValuesSection = () => {\n        /**Returns node containing contents of Our Culture and Values section \n         * of the about page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Our Culture and Values');\n        header.classList.add('subHeaderText');\n\n        let text1 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', ` Los Pollos Hermanos knows what family \n            tastes like and we bring that warmth and goodness into our food \n            every single day. We always have something delicious cooking, be \n            it our crispy fried chicken, new spicy curly fries, or delicious \n            dipping sauces.`);\n        let text2 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `We know how important it is to feed your \n            family right, and we hold those values near and dear to our heart. \n            Every meal we feed you will be flavorful, warm, fresh, and filled \n            with love and care. That is our promise to you.`);\n        let text3 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `Our motto: \"Los Pollos Hermanos! Taste \n            the Family!\" `);\n        text3.style.fontWeight = '900';\n        \n        let container = document.createElement('div');\n        container.append(header, text1, text2, text3)\n\n        return container;\n    }\n\n    const _createContactUsSection = () => {\n        /**Returns node containing contents of Contact Us of the about page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Contact Us');\n        header.classList.add('headerText');\n\n        let phoneHeader = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Phone');\n        phoneHeader.classList.add('subHeaderText');\n        let phoneText = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', '146-0195')\n\n        let addressHeader = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Address');\n        addressHeader.classList.add('subHeaderText');\n        let addressText = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `12000 – 12100 Coors Rd SW, \n            Albuquerque, New Mexico 87045`)\n        \n        let container = document.createElement('div');\n        container.append(\n            header, phoneHeader, phoneText, addressHeader, addressText);\n\n        return container;\n    }\n\n    const create = () => {\n        /**Returns a div node holding contents of the about page.*/\n        let aboutPageHeader = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h1', 'About Us');\n        aboutPageHeader.classList.add('headerText');\n\n        let aboutPageContainer = document.createElement('div');\n        aboutPageContainer.append(aboutPageHeader, _createHistorySection(),\n            _createCultureValuesSection(), _createContactUsSection());\n    \n        return aboutPageContainer;\n    } \n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/pages/aboutPage.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _data_images_restaurantFacade1_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/images/restaurantFacade1.jpeg */ \"./src/data/images/restaurantFacade1.jpeg\");\n/* harmony import */ var _data_images_restaurantFacade2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/images/restaurantFacade2.jpg */ \"./src/data/images/restaurantFacade2.jpg\");\n/* harmony import */ var _data_images_restaurantFood_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/images/restaurantFood.jpg */ \"./src/data/images/restaurantFood.jpg\");\n/* harmony import */ var _data_images_restaurantMascot_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/images/restaurantMascot.jpg */ \"./src/data/images/restaurantMascot.jpg\");\n\n\n\n\n\n\n\nconst homePage = (() => {\n    /**Home page of the website.*/\n\n    const _createHomePageText = () => {\n        /**Returns a div containing the text to be displayed above the home \n         * page images.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', 'Los Pollos Hermanos');\n        header.classList.add('headerText');\n\n        let quoteText = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h3', `\"It's the best ingredients. The \n            spiciest spices. All prepared with loving care! And always \n            delivered with a friendly smile. That's the Los Pollos Hermanos \n            promise.\"`)\n\n        let quoteSource = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h4', '— Gus Fring, Owner & Proprietor');\n\n        let restaurantDescription = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', `Welcome to Los Pollos \n            Hermanos! We're a fast-food restaurant chain specializing in fried\n            chicken, operating across the southwestern United States. Founded \n            by Chilean nationals Gustavo Fring and Max Arciniega, we're proud \n            to hold fourteen locations throughout the region. Eat at your \n            nearest local branch now!`)\n\n        let homePageText = document.createElement('div');\n        homePageText.id = 'homePageText';\n        homePageText.append(header, quoteText, quoteSource, \n            restaurantDescription);\n\n        return homePageText;\n    }\n\n    const _createHomePageImage = (imageSrc) => {\n        /**Returns an image node with src as imageSrc arg passed.\n         * \n         * Args:\n         *  imageSrc: \"src\" of the image node to be returned.*/\n        let imageNode = document.createElement('img');\n        imageNode.src = imageSrc;\n        return imageNode;\n    }\n\n    const create = () => {\n        /**Returns a div node holding contents of the home page.*/\n        let homePageContainer = document.createElement('div');\n        homePageContainer.id = 'homePage';\n        homePageContainer.append(\n            _createHomePageText(),\n            _createHomePageImage(_data_images_restaurantFacade1_jpeg__WEBPACK_IMPORTED_MODULE_1__),\n            _createHomePageImage(_data_images_restaurantFood_jpg__WEBPACK_IMPORTED_MODULE_3__),\n            _createHomePageImage(_data_images_restaurantFacade2_jpg__WEBPACK_IMPORTED_MODULE_2__),\n            _createHomePageImage(_data_images_restaurantMascot_jpg__WEBPACK_IMPORTED_MODULE_4__),\n        );\n\n        return homePageContainer;\n    } \n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/helpers.js\");\n\n\nconst menuPage = (() => {\n    /**Page featuring food menu of Los Pollos Hermanos. */\n    \n    const _createMenuItem = (name, price, description) => {\n        /**Returns a node containing the image, price, and description of an\n         * item in the main menu.\n         * \n         * Args:\n         *  name (string): Text serving a name of the menu item.\n         *  price (string): Text serving as price to be displayed.\n         *  description (string): Text serving as description of menu item.*/\n        let menuItemContainer = document.createElement('div');\n        menuItemContainer.classList.add('menuItem');\n\n        let menuItemName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', name);\n        menuItemName.classList.add('subHeaderText');\n\n        let menuItemPrice = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', price);\n        menuItemPrice.classList.add('menuItemPrice');\n\n        menuItemContainer.append(menuItemName, menuItemPrice, \n            (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('p', description));\n\n        return menuItemContainer;\n    }\n\n    const _createMenu = () => {\n        /**Returns a node containing all the items in the main menu.*/\n        let menuContainer = document.createElement('div');\n        menuContainer.append(\n            _createMenuItem(\n                'Pollos Tenders',\n                '$12.95',\n                `Crispy tenders fried to perfection in our secret batter \n                recipe, this large portion is sure to satisfy anyone's \n                appetite.`,\n            ),\n            _createMenuItem(\n                'ABQ Hot Chicken Sandwich',\n                '$12.95',\n                `A delicious Fried Chicken Sandwich smothered in spicy \n                seasoning and topped off in a Kings Hawaiian Bun.`,\n            ),\n            _createMenuItem(\n                'Herr Schulers Fry Frenzy',\n                '$12.00',\n                `Yummy seasoned curly fries with a crunch in every bite.`,\n            ),\n            _createMenuItem(\n                'Slaw Goodman',\n                '$3.00',\n                `Our tangy and flavorful slaw, good on it's own but even \n                better when paired with the ABQ Chicken Sandwich.`,\n            ),\n        )\n\n        return menuContainer;\n    }\n\n    const create = () => {\n        /**Returns a div node holding contents of the menu page.*/\n        let header = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createText)('h1', 'Our Menu');\n        header.classList.add('headerText');\n\n        let menuPageContainer = document.createElement('div');\n        menuPageContainer.id = 'menuPage';\n        menuPageContainer.append(header, _createMenu());\n        \n        return menuPageContainer;\n    } \n\n    return { create }\n})();\n\n\n\n//# sourceURL=webpack://los-pollos-hermanos/./src/pages/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;