"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n}\r\n\r\n:root {\r\n  --purple: #b799ff;\r\n  --light-purple: #acbcff;\r\n  --sky-blue: #aee2ff;\r\n  --light-blue: #e6fffd;\r\n}\r\n\r\nbody {\r\n  background-color: var(--light-purple);\r\n}\r\n\r\nmain {\r\n  margin: 20px auto;\r\n  width: 50%;\r\n  background-color: var(--sky-blue);\r\n  color: #fff;\r\n  border-radius: 16px;\r\n  overflow: hidden;\r\n}\r\n\r\n.todolist-container {\r\n  color: #fff;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.title {\r\n  background-color: var(--purple);\r\n  padding: 10px 12px;\r\n}\r\n\r\n.task:nth-child(even) {\r\n  background-color: rgba(183, 153, 255, 1);\r\n}\r\n\r\n.task:nth-child(odd) {\r\n  background-color: rgba(101, 84, 175, 1);\r\n}\r\n\r\n.task:nth-child(even):hover {\r\n  background-color: rgba(183, 153, 255, 0.9);\r\n}\r\n\r\n.task:nth-child(odd):hover {\r\n  background-color: rgba(101, 84, 175, 0.9);\r\n}\r\n\r\n#add-task-input {\r\n  font-size: 1.7rem;\r\n  border: none;\r\n  color: var(--purple);\r\n  font-weight: 600;\r\n  padding: 12px 15px;\r\n  font-style: italic;\r\n}\r\n\r\n#add-task-input:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  transform: scale(1.5);\r\n  padding-left: 5px;\r\n  margin-left: 1.5rem;\r\n  margin-right: 1rem;\r\n  border-radius: 12px;\r\n}\r\n\r\n.checkbox-container {\r\n  width: 90%;\r\n}\r\n\r\n.button-container {\r\n  background-color: var(--light-blue);\r\n}\r\n\r\n#clear-btn {\r\n  width: 25%;\r\n  margin: 0 auto;\r\n  border-radius: 18px;\r\n  padding: 5px 8px;\r\n  background-color: var(--purple);\r\n}\r\n\r\n#clear-btn:hover {\r\n  background-color: var(--light-purple);\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n#add-btn {\r\n  color: var(--purple);\r\n  cursor: pointer;\r\n  padding: 5px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.input-style {\r\n  font-size: 2rem;\r\n  border: none;\r\n  padding: 12px 15px;\r\n  background-color: inherit;\r\n}\r\n\r\n.add-to-list {\r\n  background-color: #fff;\r\n  border-bottom: 1px solid var(--sky-blue);\r\n}\r\n\r\n.description-text {\r\n  border: none;\r\n  color: #fff;\r\n  background-color: inherit;\r\n  padding: 10px 12px;\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.description-text:focus {\r\n  border: none;\r\n  background-color: inherit;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-style:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.linethrough-text {\r\n  /* text-decoration: line-through; */\r\n  color: red;\r\n  text-decoration-color: rgb(151, 2, 2);\r\n}\r\n\r\n#load-btn {\r\n  cursor: pointer;\r\n  font-size: 21px;\r\n  animation: rotation 2s  infinite linear;\r\n}\r\n\r\n.bg-orange {\r\n  background-color: #e966a0 !important;\r\n}\r\n\r\n::placeholder {\r\n  color: var(--purple);\r\n}\r\n\r\n@keyframes rotation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_storeLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storeLocalStorage.js */ \"./src/modules/storeLocalStorage.js\");\n/* harmony import */ var _modules_sortArr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sortArr.js */ \"./src/modules/sortArr.js\");\n/* harmony import */ var _modules_EditData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/EditData.js */ \"./src/modules/EditData.js\");\n/* harmony import */ var _modules_clearAll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearAll.js */ \"./src/modules/clearAll.js\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_removeTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/removeTask.js */ \"./src/modules/removeTask.js\");\n/* harmony import */ var _modules_loadTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/loadTask.js */ \"./src/modules/loadTask.js\");\n\n\n\n\n\n\n\n\n\nconst taskContainer = document.querySelector('.tasks-container');\nconst addBtn = document.getElementById('add-btn');\nconst clearBtn = document.getElementById('clear-btn');\nlet storeTasks = JSON.parse(localStorage.getItem('Tasks')) || [];\n\nconst showTask = () => {\n  taskContainer.innerHTML = '';\n  const taskListHTML = (0,_modules_loadTask_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(storeTasks);\n  taskContainer.innerHTML = taskListHTML;\n\n  const remove = (item, index) => {\n    item.addEventListener('click', () => {\n      storeTasks = (0,_modules_removeTask_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(storeTasks, index);\n      (0,_modules_storeLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_modules_sortArr_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(storeTasks));\n      showTask();\n    });\n  };\n\n  const checkboxContainers = document.querySelectorAll('.checkbox-container input[type=\"checkbox\"]');\n  const readOnlyAdd = (inputText) => {\n    inputText.readOnly = true;\n  };\n  checkboxContainers.forEach((checkbox) => {\n    let previousState = checkbox.checked;\n    const toDoTask = checkbox.parentElement.firstElementChild.nextElementSibling;\n    readOnlyAdd(toDoTask);\n    checkbox.addEventListener('change', (e) => {\n      const currentState = e.target.checked;\n      if (e.target.checked) {\n        toDoTask.classList.add('linethrough-text');\n      } else {\n        toDoTask.classList.remove('linethrough-text');\n      }\n\n      if (currentState !== previousState) {\n        storeTasks.forEach((task) => {\n          if (task.description === toDoTask.value) {\n            task.completed = currentState;\n          }\n        });\n\n        (0,_modules_storeLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(storeTasks);\n      }\n      previousState = currentState;\n    });\n  });\n\n  const addedTasks = document.querySelectorAll('.description-text');\n  addedTasks.forEach((task, index) => {\n    task.addEventListener('dblclick', (e) => {\n      e.preventDefault();\n      e.target.readOnly = false;\n      const tempStoreIcons = task.parentElement.parentElement.querySelector('.fa-ellipsis-vertical');\n      if (tempStoreIcons) {\n        const ellipsisIcon = tempStoreIcons;\n        const index = ellipsisIcon.getAttribute('id');\n        task.parentElement.parentElement.classList.add('bg-orange');\n        ellipsisIcon.classList.remove('fa-ellipsis-vertical');\n        ellipsisIcon.classList.add('fa-solid');\n        ellipsisIcon.classList.add('fa-trash');\n        remove(ellipsisIcon, index);\n      } else {\n        task.parentElement.parentElement.classList.remove('bg-orange');\n        const trashIcon = task.parentElement.parentElement.querySelector('.fa-trash');\n        trashIcon.classList.remove('fa-soild');\n        trashIcon.classList.remove('fa-trash');\n        trashIcon.classList.add('fa-ellipsis-vertical');\n        e.target.readOnly = true;\n      }\n    });\n    // Edit\n    task.addEventListener('change', () => {\n      const data = task.value.trim();\n      storeTasks = (0,_modules_EditData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(storeTasks, data, index);\n      (0,_modules_storeLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(storeTasks);\n      showTask();\n    });\n  });\n};\n\nclearBtn.addEventListener('click', () => {\n  storeTasks = (0,_modules_clearAll_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(storeTasks);\n  (0,_modules_storeLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(storeTasks);\n  showTask();\n});\n\nfunction handleDOMContentLoaded() {\n  showTask();\n}\n\ndocument.addEventListener('DOMContentLoaded', handleDOMContentLoaded);\naddBtn.addEventListener('click', () => {\n  const descriptionInput = document.getElementById('add-task-input');\n  const description = descriptionInput.value.trim();\n  if (description !== '') {\n    const newTask = {\n      description,\n      completed: false,\n      index: storeTasks.length + 1,\n    };\n    storeTasks = (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(storeTasks, newTask);\n    (0,_modules_storeLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(storeTasks);\n    descriptionInput.value = '';\n    showTask();\n  }\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/EditData.js":
/*!*********************************!*\
  !*** ./src/modules/EditData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst edit = (storeTasks, description, index) => {\n  const updatedTasks = [...storeTasks];\n  updatedTasks[index] = { ...updatedTasks[index], description };\n  return updatedTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/EditData.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addTask = (tasks, newTask) => {\n  const updatedTasks = [...tasks];\n  updatedTasks.push(newTask);\n  return updatedTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearAll = (storeTasks) => {\n  storeTasks = storeTasks.filter((element) => !element.completed);\n  return storeTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAll);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/clearAll.js?");

/***/ }),

/***/ "./src/modules/loadTask.js":
/*!*********************************!*\
  !*** ./src/modules/loadTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadTask = (tasks) => {\n  let taskListHTML = '';\n  tasks.forEach((task, index) => {\n    taskListHTML += `<li class=\"d-flex align-items-center task p-4 justify-content-between\"><div class=\"checkbox-container\"><input type=\"checkbox\" name=\"${task.description}\"><input type=\"text\" value=\"${task.description}\" class=\"description-text w-75\"></div><i class=\"fa-solid fa-ellipsis-vertical fs-3\" id=${index}></i></li>\n    `;\n  });\n  return taskListHTML;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/loadTask.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTask = (tasks, index) => {\n  const updatedTasks = [...tasks];\n  updatedTasks.splice(index, 1);\n  return updatedTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/sortArr.js":
/*!********************************!*\
  !*** ./src/modules/sortArr.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sortArr = (arr) => {\n  arr.forEach((element, index) => {\n    element.index = index + 1;\n  });\n  return arr;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortArr);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/sortArr.js?");

/***/ }),

/***/ "./src/modules/storeLocalStorage.js":
/*!******************************************!*\
  !*** ./src/modules/storeLocalStorage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst storeLocalStorage = (storeTasks) => {\n  localStorage.setItem('Tasks', JSON.stringify(storeTasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeLocalStorage);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/storeLocalStorage.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);