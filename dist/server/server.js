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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = exports.AppComponent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar Footer_1 = __webpack_require__(/*! ./shared/Footer */ \"./src/shared/Footer/index.ts\");\nvar useIsMounted_1 = __webpack_require__(/*! ./hooks/useIsMounted */ \"./src/hooks/useIsMounted.tsx\");\nfunction AppComponent() {\n    var isMounted = (0, useIsMounted_1.useIsMounted)()[0];\n    return (react_1.default.createElement(Layout_1.Layout, null,\n        isMounted && react_1.default.createElement(Header_1.Header, null),\n        isMounted && react_1.default.createElement(Content_1.Content, null),\n        react_1.default.createElement(Footer_1.Footer, null)));\n}\nexports.AppComponent = AppComponent;\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useIsMounted.tsx":
/*!************************************!*\
  !*** ./src/hooks/useIsMounted.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useIsMounted = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction useIsMounted() {\n    var _a = react_1.default.useState(false), isMounted = _a[0], setIsMounted = _a[1];\n    react_1.default.useEffect(function () {\n        setIsMounted(true);\n    }, []);\n    return [isMounted];\n}\nexports.useIsMounted = useIsMounted;\n\n\n//# sourceURL=webpack:///./src/hooks/useIsMounted.tsx?");

/***/ }),

/***/ "./src/images/BoxClosed.svg":
/*!**********************************!*\
  !*** ./src/images/BoxClosed.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"54993f043ad55b47c30f69abc78c4a98.svg\");\n\n//# sourceURL=webpack:///./src/images/BoxClosed.svg?");

/***/ }),

/***/ "./src/images/banner.svg":
/*!*******************************!*\
  !*** ./src/images/banner.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ff5a26f9b30edbe5bfbe1e9a15d5a263.svg\");\n\n//# sourceURL=webpack:///./src/images/banner.svg?");

/***/ }),

/***/ "./src/images/brands.svg":
/*!*******************************!*\
  !*** ./src/images/brands.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f35e84340223dadb53d477fed6a2d944.svg\");\n\n//# sourceURL=webpack:///./src/images/brands.svg?");

/***/ }),

/***/ "./src/images/flags/russia.svg":
/*!*************************************!*\
  !*** ./src/images/flags/russia.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a2f58db6ca9f53ff55143b42b21269da.svg\");\n\n//# sourceURL=webpack:///./src/images/flags/russia.svg?");

/***/ }),

/***/ "./src/images/flags/turkey.svg":
/*!*************************************!*\
  !*** ./src/images/flags/turkey.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e8f01e5c5c8c1e19bcfc09645e311547.svg\");\n\n//# sourceURL=webpack:///./src/images/flags/turkey.svg?");

/***/ }),

/***/ "./src/images/flags/usa.svg":
/*!**********************************!*\
  !*** ./src/images/flags/usa.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3ad88d1aa753d8749c6d17ed318d5230.svg\");\n\n//# sourceURL=webpack:///./src/images/flags/usa.svg?");

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f60223f1486c0b81a5dc43a4cfa40f70.svg\");\n\n//# sourceURL=webpack:///./src/images/phone.svg?");

/***/ }),

/***/ "./src/images/products/product1.svg":
/*!******************************************!*\
  !*** ./src/images/products/product1.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ebeca5c5f65841c8a6817b0e2f275275.svg\");\n\n//# sourceURL=webpack:///./src/images/products/product1.svg?");

/***/ }),

/***/ "./src/images/products/product2.svg":
/*!******************************************!*\
  !*** ./src/images/products/product2.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fa5984dba17163d5e880f7fdcb20c3c5.svg\");\n\n//# sourceURL=webpack:///./src/images/products/product2.svg?");

/***/ }),

/***/ "./src/images/products/product3.svg":
/*!******************************************!*\
  !*** ./src/images/products/product3.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"40da7f327c767b3a11586bbf95b571db.svg\");\n\n//# sourceURL=webpack:///./src/images/products/product3.svg?");

/***/ }),

/***/ "./src/images/products/product4.svg":
/*!******************************************!*\
  !*** ./src/images/products/product4.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"94a0ff4722c5de1d7d74217497dcaf1c.svg\");\n\n//# sourceURL=webpack:///./src/images/products/product4.svg?");

/***/ }),

/***/ "./src/images/products/product5.svg":
/*!******************************************!*\
  !*** ./src/images/products/product5.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2f54d1ab7ecc0b318a9dc21468b9b0ab.svg\");\n\n//# sourceURL=webpack:///./src/images/products/product5.svg?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black3A:        #3A3A3A;\\n  --orange:         #ED7117;\\n  --white:          #ffffff;\\n  --gray93:         #939393;\\n  --gray90:         #909090;\\n  --gray83:         #838383;\\n  --gray9C:         #9C9C9C;\\n  --grayF8:         #F8F8F8;\\n  --grayDF:         #DFDFE1;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--white);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Nunito', sans-serif;\\n}\\n\\nh1, h2, h3, h4, p {\\n  margin: 0;\\n}\\n\\n* {\\n  color: var(--black3A);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\\n.select__control {\\n  cursor: pointer !important;\\n  outline: none !important;\\n  border: none !important;\\n  box-shadow: none !important;\\n}\\n\\n.select__control--menu-is-open .select__indicator {\\n  transition: 0.3s;\\n  rotate: 180deg;\\n}\\n\\n.select__value-container {\\n  padding: 0 !important;\\n}\\n\\n.select__single-value {\\n  color: var(--black3A) !important;\\n  margin: 0 !important;\\n  display: flex;\\n  line-height: 21px;\\n}\\n\\n.select__single-value > span {\\n  border-bottom: 1px dashed var(--black3A);\\n}\\n\\n.select__single-value img {\\n  margin-right: 10px;\\n}\\n\\n.select__indicator-separator {\\n  display: none;\\n}\\n\\n.select__menu {\\n  margin: 0 !important;\\n  right: 0 !important;\\n  width: fit-content !important;\\n  padding: 25px;\\n  box-shadow: 0px 4px 15px rgba(77, 77, 77, 0.15) !important;\\n  border-radius: 8px !important;\\n  border: none !important;\\n}\\n\\n.select__option {\\n  cursor: pointer !important;\\n  padding: 0 !important;\\n  overflow: visible !important;\\n  display: flex !important;\\n}\\n\\n.select__menu-list {\\n  overflow-y: visible !important;\\n}\\n\\n.select__menu-list .select__option:not(:last-child) {\\n  padding-bottom: 8px !important;\\n}\\n\\n.select__option img {\\n  margin-right: 10px;\\n}\\n\\n.select__option:hover {\\n  background-color: rgba(255, 255, 255, 0) !important;\\n}\\n\\n.select__option:hover span {\\n  transition: 0.3s;\\n  color: var(--orange);\\n}\\n\\n.select__option:hover img {\\n  transition: 0.3s;\\n  transform: scale(1.1);\\n}\\n\\n.select__option--is-focused {\\n  background-color: rgba(255, 255, 255, 0) !important;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Stoking</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\".concat(content, \"</div>\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar app = (0, express_1.default)();\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\napp.get(\"/\", function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(3000, function () {\n    console.log(\"server started on port http://localhost:3000\");\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Button/Button.tsx":
/*!**************************************!*\
  !*** ./src/shared/Button/Button.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Button = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar button_css_1 = __importDefault(__webpack_require__(/*! ./button.css */ \"./src/shared/Button/button.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nfunction Button(props) {\n    var _a = props.menu, menu = _a === void 0 ? false : _a, textProps = props.textProps, padding = props.padding;\n    var classes = (0, classnames_1.default)(button_css_1.default.button, button_css_1.default[padding]);\n    return (react_1.default.createElement(\"button\", { className: classes },\n        menu ?\n            react_1.default.createElement(\"div\", { className: button_css_1.default.burger },\n                react_1.default.createElement(\"span\", null))\n            :\n                null,\n        react_1.default.createElement(Text_1.Text, { size: textProps.size, mobileSize: textProps.mobileSize, color: textProps.color }, textProps.text)));\n}\nexports.Button = Button;\n\n\n//# sourceURL=webpack:///./src/shared/Button/Button.tsx?");

/***/ }),

/***/ "./src/shared/Button/button.css":
/*!**************************************!*\
  !*** ./src/shared/Button/button.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"button__button--1eUKq\",\n\t\"padding-sm\": \"button__padding-sm--xTuqA\",\n\t\"padding-lg\": \"button__padding-lg--2lxS9\",\n\t\"burger\": \"button__burger--3naqE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Button/button.css?");

/***/ }),

/***/ "./src/shared/Button/index.ts":
/*!************************************!*\
  !*** ./src/shared/Button/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Button */ \"./src/shared/Button/Button.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Button/index.ts?");

/***/ }),

/***/ "./src/shared/Content/About/About.tsx":
/*!********************************************!*\
  !*** ./src/shared/Content/About/About.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.About = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar about_css_1 = __importDefault(__webpack_require__(/*! ./about.css */ \"./src/shared/Content/About/about.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar phone_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/phone.svg */ \"./src/images/phone.svg\"));\nfunction About() {\n    return (react_1.default.createElement(\"section\", { className: about_css_1.default.aboutSection },\n        react_1.default.createElement(\"div\", { className: about_css_1.default.wrapper },\n            react_1.default.createElement(\"img\", { className: about_css_1.default.phoneImg, src: phone_svg_1.default, alt: \"\" }),\n            react_1.default.createElement(\"div\", { className: about_css_1.default.about },\n                react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, mobileSize: 14 },\n                    react_1.default.createElement(\"b\", null, \"Stoking\"),\n                    \" \\u2014 \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u043F\\u043B\\u0435\\u0439\\u0441 \\u0438\\u043D\\u0436\\u0435\\u043D\\u0435\\u0440\\u043D\\u043E-\\u043F\\u0440\\u043E\\u043C\\u044B\\u0448\\u043B\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u043E\\u0431\\u043E\\u0440\\u0443\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F.\"),\n                react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, mobileSize: 14 }, \"\\u0420\\u044B\\u043D\\u043E\\u043A \\u043F\\u0440\\u043E\\u043C\\u044B\\u0448\\u043B\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u043E\\u0431\\u043E\\u0440\\u0443\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u0438\\u0437\\u043C\\u0435\\u043D\\u044F\\u0435\\u0442\\u0441\\u044F. \\u041F\\u043E\\u044F\\u0432\\u043B\\u044F\\u044E\\u0442\\u0441\\u044F \\u043D\\u043E\\u0432\\u044B\\u0435, \\u043A\\u0430\\u0447\\u0435\\u0441\\u0442\\u0432\\u0435\\u043D\\u043D\\u044B\\u0435 \\u0431\\u0440\\u0435\\u043D\\u0434\\u044B, \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u0443\\u044E\\u0442\\u0441\\u044F \\u0431\\u043E\\u043B\\u044C\\u0448\\u0435 \\u0441\\u043A\\u043B\\u0430\\u0434\\u044B, \\u043C\\u0435\\u043D\\u044F\\u0435\\u0442\\u0441\\u044F \\u043F\\u043E\\u043B\\u0438\\u0442\\u0438\\u043A\\u0430 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0439, \\u0443\\u0441\\u043A\\u043E\\u0440\\u044F\\u044E\\u0442\\u0441\\u044F \\u043F\\u0440\\u043E\\u0446\\u0435\\u0441\\u0441\\u044B \\u043B\\u043E\\u0433\\u0438\\u0441\\u0442\\u0438\\u043A\\u0438 \\u043E\\u0431\\u043E\\u0440\\u0443\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F.\"),\n                react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, mobileSize: 14 }, \"\\u0421\\u0442\\u043E\\u043A\\u0438\\u043D\\u0433 \\u044D\\u0442\\u043E \\u0431\\u043E\\u043B\\u0435\\u0435 50 \\u0438\\u043D\\u0436\\u0435\\u043D\\u0435\\u0440\\u043E\\u0432, \\u0441\\u043E\\u0437\\u0434\\u0430\\u0432\\u0448\\u0438\\u0445 \\u0441\\u0435\\u0440\\u0432\\u0438\\u0441-\\u043F\\u0440\\u043E\\u0432\\u043E\\u0434\\u043D\\u0438\\u043A \\u0432 \\u0441\\u0435\\u0433\\u043C\\u0435\\u043D\\u0442\\u0435 \\u043F\\u0440\\u043E\\u043C\\u044B\\u0448\\u043B\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u043E\\u0431\\u043E\\u0440\\u0443\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F.\"),\n                react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, mobileSize: 14 }, \"\\u041C\\u044B \\u0445\\u043E\\u0442\\u0438\\u043C \\u0437\\u043D\\u0430\\u0442\\u044C \\u0447\\u0442\\u043E \\u0432\\u044B \\u043F\\u0440\\u043E\\u0438\\u0437\\u0432\\u043E\\u0434\\u0438\\u0442\\u0435, \\u043F\\u0440\\u043E\\u0434\\u0430\\u0435\\u0442\\u0435 \\u0438 \\u0434\\u043E\\u043D\\u0435\\u0441\\u0442\\u0438 \\u044D\\u0442\\u043E \\u043C\\u0438\\u0440\\u0443.\")))));\n}\nexports.About = About;\n\n\n//# sourceURL=webpack:///./src/shared/Content/About/About.tsx?");

/***/ }),

/***/ "./src/shared/Content/About/about.css":
/*!********************************************!*\
  !*** ./src/shared/Content/About/about.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"aboutSection\": \"about__aboutSection--3xl8A\",\n\t\"wrapper\": \"about__wrapper--3ZCEw\",\n\t\"about\": \"about__about--1yend\",\n\t\"phoneImg\": \"about__phoneImg--1lmvy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/About/about.css?");

/***/ }),

/***/ "./src/shared/Content/About/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Content/About/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./About */ \"./src/shared/Content/About/About.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/About/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Brands/Brands.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Content/Brands/Brands.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Brands = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar brands_css_1 = __importDefault(__webpack_require__(/*! ./brands.css */ \"./src/shared/Content/Brands/brands.css\"));\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar brands_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/brands.svg */ \"./src/images/brands.svg\"));\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nfunction Brands() {\n    var _a = (0, react_1.useState)([]), brands = _a[0], setBrands = _a[1];\n    (0, react_1.useEffect)(function () {\n        function load() {\n            return __awaiter(this, void 0, void 0, function () {\n                var items, error_1;\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            _a.trys.push([0, 2, , 3]);\n                            return [4 /*yield*/, axios_1.default.get('https://api.stoking.ru/v1/brands?selection[filter]=[%7B%22id%22:%22used%22,%22value%22:1%7D]&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal')];\n                        case 1:\n                            items = (_a.sent()).data.items;\n                            setBrands(items);\n                            return [3 /*break*/, 3];\n                        case 2:\n                            error_1 = _a.sent();\n                            console.log(error_1);\n                            return [3 /*break*/, 3];\n                        case 3: return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        load();\n    }, []);\n    return (react_1.default.createElement(\"div\", { className: brands_css_1.default.wrapper },\n        react_1.default.createElement(\"div\", { className: brands_css_1.default.brandsBlock },\n            react_1.default.createElement(\"div\", { className: brands_css_1.default.textBlock },\n                react_1.default.createElement(\"div\", { className: brands_css_1.default.title },\n                    react_1.default.createElement(\"img\", { src: brands_svg_1.default, alt: \"\" }),\n                    react_1.default.createElement(Text_1.Text, { size: 24, mobileSize: 16, color: Text_1.EColors.orange, weight: 'bold700' }, \"91 \\u0431\\u0440\\u0435\\u043D\\u0434\")),\n                react_1.default.createElement(Text_1.Text, { As: 'div', size: 14 }, \"\\u041E\\u0444\\u0438\\u0446\\u0438\\u0430\\u043B\\u044C\\u043D\\u044B\\u0439 \\u0434\\u0438\\u043B\\u0435\\u0440 \\u043C\\u0438\\u0440\\u043E\\u0432\\u044B\\u0445 \\u0431\\u0440\\u0435\\u043D\\u0434\\u043E\\u0432-\\u043F\\u0440\\u043E\\u0438\\u0437\\u0432\\u043E\\u0434\\u0438\\u0442\\u0435\\u043B\\u0435\\u0439.\"),\n                react_1.default.createElement(\"div\", { className: brands_css_1.default.buttonBlock },\n                    react_1.default.createElement(Button_1.Button, { textProps: { text: 'Стать продавцом на Stoking', size: 12, mobileSize: 14, color: Text_1.EColors.white }, padding: 'padding-lg' }))),\n            react_1.default.createElement(\"div\", { className: brands_css_1.default.brandsWrapper },\n                react_1.default.createElement(\"div\", { className: brands_css_1.default.boxShadow }),\n                react_1.default.createElement(\"div\", { className: brands_css_1.default.brands }, brands.map(function (brand) {\n                    return (react_1.default.createElement(\"div\", { key: brand.id, className: brands_css_1.default.brand },\n                        react_1.default.createElement(\"img\", { src: brand.thumbnail.path, alt: \"\" })));\n                })),\n                react_1.default.createElement(\"div\", { className: brands_css_1.default.boxShadow })))));\n}\nexports.Brands = Brands;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Brands/Brands.tsx?");

/***/ }),

/***/ "./src/shared/Content/Brands/brands.css":
/*!**********************************************!*\
  !*** ./src/shared/Content/Brands/brands.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"brandsBlock\": \"brands__brandsBlock--l0sMI\",\n\t\"wrapper\": \"brands__wrapper--2_bGP\",\n\t\"brandsWrapper\": \"brands__brandsWrapper--1i4Xb\",\n\t\"textBlock\": \"brands__textBlock--2nRv_\",\n\t\"title\": \"brands__title--30cbY\",\n\t\"buttonBlock\": \"brands__buttonBlock--QCJNL\",\n\t\"brands\": \"brands__brands--Xep5p\",\n\t\"brand\": \"brands__brand--j3rU1\",\n\t\"slide\": \"brands__slide--3UUY_\",\n\t\"boxShadow\": \"brands__boxShadow--3DAIK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Brands/brands.css?");

/***/ }),

/***/ "./src/shared/Content/Brands/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Content/Brands/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Brands */ \"./src/shared/Content/Brands/Brands.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/Brands/index.ts?");

/***/ }),

/***/ "./src/shared/Content/BreadСrumbs/BreadСrumbs.tsx":
/*!********************************************************!*\
  !*** ./src/shared/Content/BreadСrumbs/BreadСrumbs.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BreadСrumbs = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar bread_rumbs_css_1 = __importDefault(__webpack_require__(/*! ./breadсrumbs.css */ \"./src/shared/Content/BreadСrumbs/breadсrumbs.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar SelectLanguage_1 = __webpack_require__(/*! ./SelectLanguage */ \"./src/shared/Content/BreadСrumbs/SelectLanguage/index.ts\");\nfunction BreadСrumbs() {\n    var userLang = navigator.language;\n    localStorage.setItem('user-language', userLang);\n    return (react_1.default.createElement(\"div\", { className: bread_rumbs_css_1.default.wrapper },\n        react_1.default.createElement(\"div\", { className: bread_rumbs_css_1.default.breadCrumbs },\n            react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"span\", null,\n                    react_1.default.createElement(\"a\", { className: bread_rumbs_css_1.default.link, href: \"#\" },\n                        react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                            react_1.default.createElement(\"path\", { d: \"M10 11.5H2C1.44772 11.5 1 11.0523 1 10.5V5.94536C1 5.66188 1.12032 5.39171 1.33104 5.20207L5.33104 1.60207C5.71134 1.25979 6.28866 1.25979 6.66897 1.60207L10.669 5.20207C10.8797 5.39171 11 5.66188 11 5.94536V10.5C11 11.0523 10.5523 11.5 10 11.5Z\", stroke: \"#3A3A3A\" })))),\n                react_1.default.createElement(\"span\", { className: bread_rumbs_css_1.default.separator }, \"\\u2014\"),\n                react_1.default.createElement(\"span\", null,\n                    react_1.default.createElement(\"a\", { className: bread_rumbs_css_1.default.link, href: \"#\" },\n                        react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColors.gray93 }, \"\\u0421\\u043E\\u0442\\u0440\\u0443\\u0434\\u043D\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E Stoking\")))),\n            react_1.default.createElement(\"div\", { className: bread_rumbs_css_1.default.languages },\n                react_1.default.createElement(Text_1.Text, { size: 14 }, \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u044F\\u0437\\u044B\\u043A:\"),\n                react_1.default.createElement(SelectLanguage_1.SelectLanguage, null)))));\n}\nexports.BreadСrumbs = BreadСrumbs;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Bread%D0%A1rumbs/Bread%D0%A1rumbs.tsx?");

/***/ }),

/***/ "./src/shared/Content/BreadСrumbs/SelectLanguage/SelectLanguage.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/BreadСrumbs/SelectLanguage/SelectLanguage.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SelectLanguage = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./selectlanguage.css */ \"./src/shared/Content/BreadСrumbs/SelectLanguage/selectlanguage.css\");\nvar react_select_1 = __importStar(__webpack_require__(/*! react-select */ \"react-select\"));\nvar turkey_svg_1 = __importDefault(__webpack_require__(/*! ../../../../images/flags/turkey.svg */ \"./src/images/flags/turkey.svg\"));\nvar russia_svg_1 = __importDefault(__webpack_require__(/*! ../../../../images/flags/russia.svg */ \"./src/images/flags/russia.svg\"));\nvar usa_svg_1 = __importDefault(__webpack_require__(/*! ../../../../images/flags/usa.svg */ \"./src/images/flags/usa.svg\"));\nvar options = [\n    { value: 'ru', label: 'Русский', icon: russia_svg_1.default },\n    { value: 'en', label: 'Английский', icon: usa_svg_1.default },\n    { value: 'tr', label: 'Турецкий', icon: turkey_svg_1.default }\n];\nvar Option = function (props) { return (react_1.default.createElement(react_select_1.components.Option, __assign({}, props),\n    react_1.default.createElement(\"img\", { src: props.data.icon, alt: \"logo\", className: \"country-logo\" }),\n    react_1.default.createElement(\"span\", null, props.data.label))); };\nfunction SelectLanguage() {\n    var _a = (0, react_1.useState)(options[0]), selectedCountry = _a[0], setSelectedCountry = _a[1];\n    var handleChange = function (value) {\n        setSelectedCountry(value);\n    };\n    var SingleValue = function (_a) {\n        var children = _a.children, props = __rest(_a, [\"children\"]);\n        return (react_1.default.createElement(react_select_1.components.SingleValue, __assign({}, props),\n            react_1.default.createElement(\"img\", { src: selectedCountry.icon, alt: \"s-logo\", className: \"selected-logo\" }),\n            react_1.default.createElement(\"span\", null, children)));\n    };\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_select_1.default, { classNamePrefix: 'select', value: selectedCountry, options: options, onChange: handleChange, components: {\n                Option: Option,\n                SingleValue: SingleValue\n            }, hideSelectedOptions: true, isSearchable: false })));\n}\nexports.SelectLanguage = SelectLanguage;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Bread%D0%A1rumbs/SelectLanguage/SelectLanguage.tsx?");

/***/ }),

/***/ "./src/shared/Content/BreadСrumbs/SelectLanguage/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/Content/BreadСrumbs/SelectLanguage/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SelectLanguage */ \"./src/shared/Content/BreadСrumbs/SelectLanguage/SelectLanguage.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/Bread%D0%A1rumbs/SelectLanguage/index.ts?");

/***/ }),

/***/ "./src/shared/Content/BreadСrumbs/SelectLanguage/selectlanguage.css":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/BreadСrumbs/SelectLanguage/selectlanguage.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Bread%D0%A1rumbs/SelectLanguage/selectlanguage.css?");

/***/ }),

/***/ "./src/shared/Content/BreadСrumbs/breadсrumbs.css":
/*!********************************************************!*\
  !*** ./src/shared/Content/BreadСrumbs/breadсrumbs.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"breadсrumbs__wrapper--2qjjo\",\n\t\"breadCrumbs\": \"breadсrumbs__breadCrumbs--36IwC\",\n\t\"separator\": \"breadсrumbs__separator--6XJEY\",\n\t\"link\": \"breadсrumbs__link--2OK92\",\n\t\"languages\": \"breadсrumbs__languages--2JQlk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Bread%D0%A1rumbs/bread%D1%81rumbs.css?");

/***/ }),

/***/ "./src/shared/Content/BreadСrumbs/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/Content/BreadСrumbs/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./BreadСrumbs */ \"./src/shared/Content/BreadСrumbs/BreadСrumbs.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/Bread%D0%A1rumbs/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Bread_rumbs_1 = __webpack_require__(/*! ./BreadСrumbs */ \"./src/shared/Content/BreadСrumbs/index.ts\");\nvar useIsMounted_1 = __webpack_require__(/*! ../../hooks/useIsMounted */ \"./src/hooks/useIsMounted.tsx\");\nvar Offer_1 = __webpack_require__(/*! ./Offer */ \"./src/shared/Content/Offer/index.ts\");\nvar StagesOfWork_1 = __webpack_require__(/*! ./StagesOfWork */ \"./src/shared/Content/StagesOfWork/index.ts\");\nvar About_1 = __webpack_require__(/*! ./About */ \"./src/shared/Content/About/index.ts\");\nvar Brands_1 = __webpack_require__(/*! ./Brands */ \"./src/shared/Content/Brands/index.ts\");\nvar Goods_1 = __webpack_require__(/*! ./Goods */ \"./src/shared/Content/Goods/index.ts\");\nfunction Content() {\n    var isMounted = (0, useIsMounted_1.useIsMounted)()[0];\n    return (react_1.default.createElement(\"main\", null,\n        isMounted && react_1.default.createElement(Bread_rumbs_1.BreadСrumbs, null),\n        isMounted && react_1.default.createElement(Offer_1.Offer, null),\n        react_1.default.createElement(StagesOfWork_1.StagesOfWork, null),\n        isMounted && react_1.default.createElement(About_1.About, null),\n        isMounted && react_1.default.createElement(Brands_1.Brands, null),\n        isMounted && react_1.default.createElement(Goods_1.Goods, null)));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/Goods/Goods.tsx":
/*!********************************************!*\
  !*** ./src/shared/Content/Goods/Goods.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Goods = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar goods_css_1 = __importDefault(__webpack_require__(/*! ./goods.css */ \"./src/shared/Content/Goods/goods.css\"));\nvar BoxClosed_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/BoxClosed.svg */ \"./src/images/BoxClosed.svg\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar product1_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/products/product1.svg */ \"./src/images/products/product1.svg\"));\nvar product2_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/products/product2.svg */ \"./src/images/products/product2.svg\"));\nvar product3_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/products/product3.svg */ \"./src/images/products/product3.svg\"));\nvar product4_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/products/product4.svg */ \"./src/images/products/product4.svg\"));\nvar product5_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/products/product5.svg */ \"./src/images/products/product5.svg\"));\nvar react_intersection_observer_1 = __webpack_require__(/*! react-intersection-observer */ \"react-intersection-observer\");\nvar GOODSDESKTOP = [\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product1_svg_1.default,\n        title: 'Насос Pedrollo JCRm 1 B -N',\n        code: '46JCN1B0A1',\n        price: '14 161 ₽',\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product2_svg_1.default,\n        title: 'Реагент для очистки новых систем',\n        code: '3031800001',\n        price: '6 970 ₽',\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product3_svg_1.default,\n        title: 'Реле давления электр. Vodotok ЭДД-12Р',\n        code: 'L4029',\n        price: '2 728 ₽',\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product4_svg_1.default,\n        title: 'Комплект фитингов Danfoss DN15 ',\n        code: '003H6902',\n        price: '1 983 ₽',\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product5_svg_1.default,\n        title: 'S21A Пластина AiSi 316 0,5 mm TK 1234',\n        code: 'S21A пластина',\n        price: '1 875 ₽',\n    },\n];\nvar GOODSMOBILE = [\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product1_svg_1.default,\n        title: 'Насос Pedrollo JCRm 1 B -N',\n        code: '46JCN1B0A1',\n        price: '14 161 ₽',\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product2_svg_1.default,\n        title: 'Реагент для очистки новых систем',\n        code: '3031800001',\n        price: '6 970 ₽',\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: product3_svg_1.default,\n        title: 'Реле давления электр. Vodotok ЭДД-12Р',\n        code: 'L4029',\n        price: '2 728 ₽',\n    },\n];\nfunction Goods() {\n    var productArr;\n    var _a = (0, react_intersection_observer_1.useInView)({\n        threshold: 0.35,\n    }), ref = _a.ref, inView = _a.inView;\n    var _b = react_1.default.useState(window.innerWidth), width = _b[0], setWidth = _b[1];\n    react_1.default.useEffect(function () {\n        function handleResize() {\n            setWidth(window.innerWidth);\n        }\n        window.addEventListener('resize', handleResize);\n    });\n    width < 760 ? productArr = GOODSMOBILE.slice() : productArr = GOODSDESKTOP.slice();\n    return (react_1.default.createElement(\"div\", { className: goods_css_1.default.wrapper },\n        react_1.default.createElement(\"div\", { className: goods_css_1.default.goodsBlock },\n            react_1.default.createElement(\"div\", { className: goods_css_1.default.textBlock },\n                react_1.default.createElement(\"div\", { className: goods_css_1.default.title },\n                    react_1.default.createElement(\"img\", { src: BoxClosed_svg_1.default, alt: \"\" }),\n                    react_1.default.createElement(Text_1.Text, { size: 24, mobileSize: 16, color: Text_1.EColors.orange, weight: 'bold700' }, \"3465 \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432\")),\n                react_1.default.createElement(Text_1.Text, { As: 'div', size: 14 }, \"\\u041D\\u0430 \\u043D\\u0430\\u0448\\u0435\\u043C \\u0441\\u0430\\u0439\\u0442\\u0435, \\u0432 \\u043D\\u0430\\u043B\\u0438\\u0447\\u0438\\u0438 \\u0441 \\u0430\\u043A\\u0442\\u0443\\u0430\\u043B\\u044C\\u043D\\u044B\\u043C\\u0438 \\u0446\\u0435\\u043D\\u0430\\u043C\\u0438.\")),\n            react_1.default.createElement(\"div\", { className: goods_css_1.default.goods }, productArr.map(function (product) {\n                return (react_1.default.createElement(\"div\", { ref: ref, key: product.id, className: \"\".concat(goods_css_1.default.product, \" \").concat(inView ? goods_css_1.default.active : goods_css_1.default.hidden) },\n                    react_1.default.createElement(\"div\", { className: goods_css_1.default.productImg },\n                        react_1.default.createElement(\"img\", { src: product.img, alt: \"\" })),\n                    react_1.default.createElement(\"div\", { className: goods_css_1.default.productDescription },\n                        react_1.default.createElement(\"div\", { className: goods_css_1.default.title },\n                            react_1.default.createElement(Text_1.Text, { size: 13 }, product.title)),\n                        react_1.default.createElement(\"div\", { className: goods_css_1.default.code },\n                            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray9C }, \"\\u0410\\u0440\\u0442\\u0438\\u043A\\u0443\\u043B: \"),\n                            react_1.default.createElement(Text_1.Text, { size: 12 }, product.code)),\n                        react_1.default.createElement(Text_1.Text, { As: 'div', size: 20, color: Text_1.EColors.orange }, product.price))));\n            })))));\n}\nexports.Goods = Goods;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Goods/Goods.tsx?");

/***/ }),

/***/ "./src/shared/Content/Goods/goods.css":
/*!********************************************!*\
  !*** ./src/shared/Content/Goods/goods.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"goods__wrapper--2AKy_\",\n\t\"goodsBlock\": \"goods__goodsBlock--3F3B2\",\n\t\"textBlock\": \"goods__textBlock--3hzSu\",\n\t\"title\": \"goods__title--QJgXY\",\n\t\"goods\": \"goods__goods--2o4K0\",\n\t\"productDescription\": \"goods__productDescription--2t7Yh\",\n\t\"product\": \"goods__product--4wl4r\",\n\t\"productImg\": \"goods__productImg--uSsil\",\n\t\"hidden\": \"goods__hidden--1u8w5\",\n\t\"active\": \"goods__active--19J5U\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Goods/goods.css?");

/***/ }),

/***/ "./src/shared/Content/Goods/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Content/Goods/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Goods */ \"./src/shared/Content/Goods/Goods.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/Goods/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Offer/Offer.tsx":
/*!********************************************!*\
  !*** ./src/shared/Content/Offer/Offer.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Offer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar offer_css_1 = __importDefault(__webpack_require__(/*! ./offer.css */ \"./src/shared/Content/Offer/offer.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar banner_svg_1 = __importDefault(__webpack_require__(/*! ../../../images/banner.svg */ \"./src/images/banner.svg\"));\nfunction Offer() {\n    return (react_1.default.createElement(\"section\", { className: offer_css_1.default.offer },\n        react_1.default.createElement(\"div\", { className: offer_css_1.default.wrapper },\n            react_1.default.createElement(Text_1.Text, { As: 'h1', size: 26, mobileSize: 16 }, \"Stoking \\u2014 \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u043F\\u043B\\u0435\\u0439\\u0441 \\u043F\\u0440\\u043E\\u043C\\u044B\\u0448\\u043B\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u043E\\u0431\\u043E\\u0440\\u0443\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F\"),\n            react_1.default.createElement(\"div\", { className: offer_css_1.default.text },\n                react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, mobileSize: 14 }, \"\\u0412\\u043B\\u0430\\u0434\\u0435\\u0435\\u0442\\u0435 \\u0441\\u043A\\u043B\\u0430\\u0434\\u043E\\u043C \\u043F\\u0440\\u043E\\u043C\\u044B\\u0448\\u043B\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u043E\\u0431\\u043E\\u0440\\u0443\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u0438\\u043B\\u0438 \\u043F\\u0440\\u043E\\u0438\\u0437\\u0432\\u043E\\u0434\\u0438\\u0442\\u0435 \\u0435\\u0433\\u043E?\"),\n                react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, mobileSize: 14 }, \"\\u041D\\u0430\\u0447\\u043D\\u0438 \\u043F\\u0440\\u043E\\u0434\\u0430\\u0432\\u0430\\u0442\\u044C \\u0443\\u0436\\u0435 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441.\")),\n            react_1.default.createElement(\"div\", { className: offer_css_1.default.buttonBlock },\n                react_1.default.createElement(Button_1.Button, { textProps: { text: 'Стать продавцом на Stoking', size: 12, mobileSize: 14, color: Text_1.EColors.white }, padding: 'padding-lg' })),\n            react_1.default.createElement(\"div\", { className: offer_css_1.default.banner },\n                react_1.default.createElement(\"img\", { src: banner_svg_1.default, alt: \"\" })))));\n}\nexports.Offer = Offer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Offer/Offer.tsx?");

/***/ }),

/***/ "./src/shared/Content/Offer/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Content/Offer/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Offer */ \"./src/shared/Content/Offer/Offer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/Offer/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Offer/offer.css":
/*!********************************************!*\
  !*** ./src/shared/Content/Offer/offer.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"offer__wrapper--r0Lpn\",\n\t\"offer\": \"offer__offer--7VuYh\",\n\t\"text\": \"offer__text--vFi2j\",\n\t\"buttonBlock\": \"offer__buttonBlock--NzaNH\",\n\t\"banner\": \"offer__banner--3V79U\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Offer/offer.css?");

/***/ }),

/***/ "./src/shared/Content/StagesOfWork/StagesOfWork.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/Content/StagesOfWork/StagesOfWork.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StagesOfWork = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar stagesofwork_css_1 = __importDefault(__webpack_require__(/*! ./stagesofwork.css */ \"./src/shared/Content/StagesOfWork/stagesofwork.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar STAGES = [\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: Icon_1.EIconsName.StageOneIcon,\n        title: 'Свяжитесь с нами',\n        text: 'Оставьте заявку в форме обратной связи. В кротчайшее сроки наши специалисты свяжутся с вами.',\n        horizontalLine: true\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: Icon_1.EIconsName.StageTwoIcon,\n        title: 'Предоставьте остатки',\n        text: 'Отправьте нам данные о наличии товара и цены для продажи, в любой удобной для вас форме. Техническую интеграцию больших объемов товаров берем на себя.',\n        horizontalLine: true\n    },\n    {\n        id: (0, generateRandomIndex_1.generateRandomString)(),\n        img: Icon_1.EIconsName.StageThreeIcon,\n        title: 'Обновляйте остатки',\n        text: 'Поддерживайте остатки и стоимости в актуальном виде и все продажи будут вашими. Мы об этом позаботимся!',\n        horizontalLine: false\n    },\n];\nfunction StagesOfWork() {\n    return (react_1.default.createElement(\"section\", { className: stagesofwork_css_1.default.stagesSection },\n        react_1.default.createElement(\"div\", { className: stagesofwork_css_1.default.wrapper },\n            react_1.default.createElement(Text_1.Text, { As: 'h2', size: 26, mobileSize: 20 }, \"\\u042D\\u0442\\u0430\\u043F\\u044B \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B\"),\n            react_1.default.createElement(\"div\", { className: stagesofwork_css_1.default.stages }, STAGES.map(function (el) {\n                return (react_1.default.createElement(\"div\", { key: el.id, className: stagesofwork_css_1.default.stage },\n                    el.horizontalLine ? react_1.default.createElement(\"span\", { className: stagesofwork_css_1.default.horizontalLine }) : null,\n                    react_1.default.createElement(Icon_1.Icon, { name: el.img, size: 57 }),\n                    react_1.default.createElement(\"div\", { className: stagesofwork_css_1.default.title },\n                        react_1.default.createElement(Text_1.Text, { As: 'p', size: 16, weight: 'bold600' }, el.title)),\n                    react_1.default.createElement(Text_1.Text, { As: 'p', size: 14 }, el.text)));\n            })))));\n}\nexports.StagesOfWork = StagesOfWork;\n\n\n//# sourceURL=webpack:///./src/shared/Content/StagesOfWork/StagesOfWork.tsx?");

/***/ }),

/***/ "./src/shared/Content/StagesOfWork/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/Content/StagesOfWork/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./StagesOfWork */ \"./src/shared/Content/StagesOfWork/StagesOfWork.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/StagesOfWork/index.ts?");

/***/ }),

/***/ "./src/shared/Content/StagesOfWork/stagesofwork.css":
/*!**********************************************************!*\
  !*** ./src/shared/Content/StagesOfWork/stagesofwork.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"stagesofwork__wrapper--9MGbj\",\n\t\"stagesSection\": \"stagesofwork__stagesSection--21tmb\",\n\t\"stages\": \"stagesofwork__stages--3B8Cr\",\n\t\"stage\": \"stagesofwork__stage--beiS3\",\n\t\"title\": \"stagesofwork__title--1EW63\",\n\t\"horizontalLine\": \"stagesofwork__horizontalLine--1pOMg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/StagesOfWork/stagesofwork.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\nvar NOOP = function () { };\nfunction Dropdown(_a) {\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\n    var _d = (0, react_1.useState)(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\n    var handleOpen = function () {\n        if (isOpen === undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n    };\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./src/shared/Footer/Footer.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Footer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar footer_css_1 = __importDefault(__webpack_require__(/*! ./footer.css */ \"./src/shared/Footer/footer.css\"));\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar menuItemStyle = footer_css_1.default.menuItem;\nvar FOOTERMENU = [\n    {\n        As: 'li',\n        className: menuItemStyle,\n        textProps: {\n            text: 'Сотрудничество',\n            size: 14,\n            color: Text_1.EColors.gray90\n        }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        textProps: {\n            text: 'Доставка и возврат',\n            size: 14,\n            color: Text_1.EColors.gray90\n        }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        textProps: {\n            text: 'Оплата',\n            size: 14,\n            color: Text_1.EColors.gray90\n        }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        textProps: {\n            text: 'Контакты',\n            size: 14,\n            color: Text_1.EColors.gray90\n        }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        textProps: {\n            text: 'Публичная оферта',\n            size: 14,\n            color: Text_1.EColors.gray90\n        }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        textProps: {\n            text: 'Политика конфиденциальности',\n            size: 14,\n            color: Text_1.EColors.gray90\n        }\n    },\n].map(generateRandomIndex_1.generateId);\nfunction Footer() {\n    return (react_1.default.createElement(\"footer\", { className: footer_css_1.default.footer },\n        react_1.default.createElement(\"div\", { className: footer_css_1.default.wrapper },\n            react_1.default.createElement(\"div\", { className: footer_css_1.default.menu },\n                react_1.default.createElement(\"ul\", { className: footer_css_1.default.menuItemsList }, react_1.default.createElement(GenericList_1.GenericList, { list: FOOTERMENU.map((0, merge_1.merge)({ onClick: function () { return console.log('1'); } })) }))),\n            react_1.default.createElement(\"div\", { className: footer_css_1.default.created },\n                react_1.default.createElement(\"a\", { className: footer_css_1.default.company, href: \"#\" }, \"\\u041E\\u041E\\u041E \\u00AB\\u0425\\u0438\\u0442\\u0438\\u043D\\u0432\\u0435\\u0441\\u0442\\u00BB\"),\n                react_1.default.createElement(Text_1.Text, { As: 'span', size: 12 }, \" by \"),\n                react_1.default.createElement(\"a\", { href: \"#\", target: '_blanc' }, \"Spaceport\"),\n                react_1.default.createElement(Text_1.Text, { As: 'span', size: 12 }, \" 2022\")))));\n}\nexports.Footer = Footer;\n\n\n//# sourceURL=webpack:///./src/shared/Footer/Footer.tsx?");

/***/ }),

/***/ "./src/shared/Footer/footer.css":
/*!**************************************!*\
  !*** ./src/shared/Footer/footer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"footer__wrapper--nGfeg\",\n\t\"footer\": \"footer__footer--gmzdf\",\n\t\"created\": \"footer__created--3wgtV\",\n\t\"company\": \"footer__company--3vWot\",\n\t\"menuItemsList\": \"footer__menuItemsList--nyXUX\",\n\t\"menuItem\": \"footer__menuItem--3mpZF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Footer/footer.css?");

/***/ }),

/***/ "./src/shared/Footer/index.ts":
/*!************************************!*\
  !*** ./src/shared/Footer/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Footer */ \"./src/shared/Footer/Footer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Footer/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GenericList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nvar Icon_1 = __webpack_require__(/*! ../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nfunction GenericList(_a) {\n    var list = _a.list;\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, textProps = _a.textProps, onClick = _a.onClick, className = _a.className, id = _a.id, href = _a.href, iconProps = _a.iconProps;\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href }, iconProps ?\n            react_1.default.createElement(react_1.default.Fragment, null,\n                react_1.default.createElement(Icon_1.Icon, { name: iconProps.iconName, size: iconProps.iconSize }),\n                textProps ?\n                    react_1.default.createElement(Text_1.Text, { mobileSize: textProps.mobileSize, size: textProps.size, color: textProps.color || Text_1.EColors.black }, textProps.text) : null)\n            :\n                react_1.default.createElement(Text_1.Text, { mobileSize: textProps ? textProps.mobileSize : 14, size: textProps ? textProps.size : 16, color: textProps ? textProps.color : Text_1.EColors.black }, textProps ? textProps.text : null)));\n    })));\n}\nexports.GenericList = GenericList;\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Contacts/Contacts.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Header/Contacts/Contacts.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Contacts = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar contacts_css_1 = __importDefault(__webpack_require__(/*! ./contacts.css */ \"./src/shared/Header/Contacts/contacts.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nfunction Contacts() {\n    return (react_1.default.createElement(\"div\", { className: contacts_css_1.default.contacts },\n        react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"a\", { className: contacts_css_1.default.phoneNumber, href: \"tel:88005009052\" },\n                react_1.default.createElement(\"svg\", { className: contacts_css_1.default.phoneIcon, width: \"23\", height: \"23\", viewBox: \"0 0 23 23\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M6.86667 16.1333C3.21652 12.4832 1.5851 9.12991 1.13505 8.09299C1.04085 7.87593 1 7.64358 1 7.40697V4.71078C1 4.18035 1.21071 3.67164 1.58579 3.29657L3.46814 1.41421C4.24919 0.633165 5.51552 0.633165 6.29657 1.41421L8.89945 4.01709C9.57358 4.69122 9.67816 5.74746 9.14933 6.54071L8.1144 8.09311C7.71628 8.69028 7.66712 9.45617 8.02393 10.0789C8.52141 10.9472 9.29012 12.1725 10.0588 12.9412C10.8275 13.7099 12.0529 14.4786 12.9211 14.9761C13.5438 15.3329 14.3097 15.2837 14.9069 14.8856L16.4593 13.8507C17.2525 13.3218 18.3088 13.4264 18.9829 14.1006L21.5858 16.7034C22.3668 17.4845 22.3668 18.7508 21.5858 19.5319L19.7034 21.4142C19.3284 21.7893 18.8197 22 18.2892 22H15.593C15.3564 22 15.1241 21.9592 14.907 21.865C13.8701 21.4149 10.5168 19.7835 6.86667 16.1333Z\", stroke: \"#838383\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })),\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColors.gray83 }, \"8 (800) 500-90-52\")))));\n}\nexports.Contacts = Contacts;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Contacts/Contacts.tsx?");

/***/ }),

/***/ "./src/shared/Header/Contacts/contacts.css":
/*!*************************************************!*\
  !*** ./src/shared/Header/Contacts/contacts.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"phoneNumber\": \"contacts__phoneNumber--RJhYi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/Contacts/contacts.css?");

/***/ }),

/***/ "./src/shared/Header/Contacts/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/Header/Contacts/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Contacts */ \"./src/shared/Header/Contacts/Contacts.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/Contacts/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nvar Search_1 = __webpack_require__(/*! ./Search */ \"./src/shared/Header/Search/index.ts\");\nvar Contacts_1 = __webpack_require__(/*! ./Contacts */ \"./src/shared/Header/Contacts/index.ts\");\nvar HeaderList_1 = __webpack_require__(/*! ./HeaderList */ \"./src/shared/Header/HeaderList/index.ts\");\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/Header/Menu/index.ts\");\nfunction Header() {\n    var _a = react_1.default.useState(window.innerWidth), width = _a[0], setWidth = _a[1];\n    react_1.default.useEffect(function () {\n        function handleResize() {\n            setWidth(window.innerWidth);\n        }\n        window.addEventListener('resize', handleResize);\n    });\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(\"div\", { className: header_css_1.default.wrapper },\n            react_1.default.createElement(\"div\", { className: header_css_1.default.headerInner },\n                react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n                react_1.default.createElement(Menu_1.Menu, null),\n                react_1.default.createElement(Search_1.Search, null),\n                react_1.default.createElement(Contacts_1.Contacts, null),\n                react_1.default.createElement(HeaderList_1.HeaderList, { currentWidth: width })))));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/HeaderList/HeaderList.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Header/HeaderList/HeaderList.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HeaderList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar headerlist_css_1 = __importDefault(__webpack_require__(/*! ./headerlist.css */ \"./src/shared/Header/HeaderList/headerlist.css\"));\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nvar merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/GenericList/index.ts\");\nvar menuItemStyle = headerlist_css_1.default.menuItem;\nvar MOBILELIST = [\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.HomeIcon },\n        textProps: { text: 'Главная', size: 14, mobileSize: 11 }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.CatalogIcon },\n        textProps: { text: 'Каталог', size: 14, mobileSize: 11 }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.BasketIcon },\n        textProps: { text: 'Корзина', size: 14, mobileSize: 11 }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.FavoritesIcon2 },\n        textProps: { text: 'Избранное', size: 14, mobileSize: 11 }\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.ProfileIcon },\n        textProps: { text: 'Профиль', size: 14, mobileSize: 11 }\n    },\n].map(generateRandomIndex_1.generateId);\nvar DESKTOPLIST = [\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.AppealsIcon },\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.ProfileIcon },\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.СomparisonIcon },\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.FavoritesIcon },\n    },\n    {\n        As: 'li',\n        className: menuItemStyle,\n        iconProps: { iconSize: 22, iconName: Icon_1.EIconsName.BasketIcon },\n    },\n].map(generateRandomIndex_1.generateId);\nfunction HeaderList(_a) {\n    var currentWidth = _a.currentWidth;\n    return (react_1.default.createElement(\"ul\", { className: headerlist_css_1.default.menuItemsList }, currentWidth < 760 ?\n        react_1.default.createElement(GenericList_1.GenericList, { list: MOBILELIST.map((0, merge_1.merge)({ onClick: function () { return console.log('1'); } })) })\n        :\n            react_1.default.createElement(GenericList_1.GenericList, { list: DESKTOPLIST.map((0, merge_1.merge)({ onClick: function () { return console.log('1'); } })) })));\n}\nexports.HeaderList = HeaderList;\n\n\n//# sourceURL=webpack:///./src/shared/Header/HeaderList/HeaderList.tsx?");

/***/ }),

/***/ "./src/shared/Header/HeaderList/headerlist.css":
/*!*****************************************************!*\
  !*** ./src/shared/Header/HeaderList/headerlist.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"headerlist__menuItemsList--IGFji\",\n\t\"menuItem\": \"headerlist__menuItem--yNwW4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/HeaderList/headerlist.css?");

/***/ }),

/***/ "./src/shared/Header/HeaderList/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Header/HeaderList/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./HeaderList */ \"./src/shared/Header/HeaderList/HeaderList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/HeaderList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Menu/Menu.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Header/Menu/Menu.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/Header/Menu/menu.css\"));\nvar Button_1 = __webpack_require__(/*! ../../Button */ \"./src/shared/Button/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\nvar MENU = {\n    menu: true,\n    textProps: {\n        text: 'Каталог',\n        size: 12,\n        color: Text_1.EColors.white\n    },\n    padding: 'padding-sm'\n};\nfunction Menu() {\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(Button_1.Button, { menu: true, textProps: { text: 'Каталог', size: 12, color: Text_1.EColors.white }, padding: 'padding-sm' }) },\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\n                react_1.default.createElement(\"img\", { src: 'https://vsememy.ru/wp-content/cache/thumb/e30d60cb4_320x200.jpg', alt: \"\" })))));\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Header/Menu/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/Header/Menu/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/Header/Menu/Menu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Menu/menu.css":
/*!*****************************************!*\
  !*** ./src/shared/Header/Menu/menu.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--1YbhE\",\n\t\"dropdown\": \"menu__dropdown--2X7_m\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/Header/Search/Search.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Header/Search/Search.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Search = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar search_css_1 = __importDefault(__webpack_require__(/*! ./search.css */ \"./src/shared/Header/Search/search.css\"));\nfunction Search() {\n    return (react_1.default.createElement(\"div\", { className: search_css_1.default.inputBlock },\n        react_1.default.createElement(\"input\", { className: search_css_1.default.input, type: \"text\", placeholder: '\\u041F\\u043E\\u0438\\u0441\\u043A \\u043F\\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0430\\u043C' }),\n        react_1.default.createElement(\"svg\", { className: search_css_1.default.searchIcon, width: \"17\", height: \"17\", viewBox: \"0 0 17 17\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M9.87696 9.8905L16.08 16.103M11.4 6.20794C11.4 9.0842 9.07188 11.4159 6.2 11.4159C3.32812 11.4159 1 9.0842 1 6.20794C1 3.33167 3.32812 1 6.2 1C9.07188 1 11.4 3.33167 11.4 6.20794Z\", stroke: \"#D0D0D0\" }))));\n}\nexports.Search = Search;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Search/Search.tsx?");

/***/ }),

/***/ "./src/shared/Header/Search/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Header/Search/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Search */ \"./src/shared/Header/Search/Search.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/Search/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Search/search.css":
/*!*********************************************!*\
  !*** ./src/shared/Header/Search/search.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"inputBlock\": \"search__inputBlock--18MLR\",\n\t\"input\": \"search__input--1BRFb\",\n\t\"searchIcon\": \"search__searchIcon--3WWX9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/Search/search.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nfunction ThreadTitle() {\n    return (react_1.default.createElement(\"a\", { className: threadtitle_css_1.default.company, href: \"#\" },\n        react_1.default.createElement(Text_1.Text, { size: 24 }, \"Stoking\")));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"company\": \"threadtitle__company--1HpSv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"header__wrapper--1c3LY\",\n\t\"headerInner\": \"header__headerInner--25Ko_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Icon/AppealsIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icon/AppealsIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppealsIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction AppealsIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"22\", height: \"22\", viewBox: \"0 0 22 22\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M2.83333 1C2.3471 1 1.88079 1.19315 1.53697 1.53697C1.19315 1.88079 1 2.3471 1 2.83333V20.2929L4.81311 16.4798C4.90688 16.386 5.03406 16.3333 5.16667 16.3333H19.1667C19.6529 16.3333 20.1192 16.1402 20.463 15.7964C20.8068 15.4525 21 14.9862 21 14.5V2.83333C21 2.3471 20.8068 1.88079 20.463 1.53697C20.1192 1.19315 19.6529 1 19.1667 1H2.83333ZM0.829864 0.829864C1.36122 0.298511 2.08189 0 2.83333 0H19.1667C19.9181 0 20.6388 0.298511 21.1701 0.829864C21.7015 1.36122 22 2.08189 22 2.83333V14.5C22 15.2514 21.7015 15.9721 21.1701 16.5035C20.6388 17.0348 19.9181 17.3333 19.1667 17.3333H5.37377L0.853553 21.8536C0.710554 21.9966 0.495495 22.0393 0.308658 21.9619C0.121821 21.8845 0 21.7022 0 21.5V2.83333C0 2.08189 0.298511 1.36122 0.829864 0.829864Z\", fill: \"#838383\" }),\n        react_1.default.createElement(\"path\", { d: \"M8.66571 12.0899C8.35905 12.0899 8.05571 12.0632 7.75571 12.0099C7.46238 11.9632 7.18571 11.8932 6.92571 11.7999C6.67238 11.6999 6.44238 11.5765 6.23571 11.4299C6.14238 11.3632 6.07571 11.2865 6.03571 11.1999C6.00238 11.1132 5.99238 11.0265 6.00571 10.9399C6.02571 10.8532 6.06238 10.7799 6.11571 10.7199C6.17571 10.6532 6.24905 10.6132 6.33571 10.5999C6.42238 10.5865 6.51238 10.6132 6.60571 10.6799C6.90571 10.8799 7.22238 11.0265 7.55571 11.1199C7.89571 11.2132 8.26571 11.2599 8.66571 11.2599C9.24571 11.2599 9.67238 11.1565 9.94571 10.9499C10.2257 10.7365 10.3657 10.4599 10.3657 10.1199C10.3657 9.83986 10.2657 9.6232 10.0657 9.46986C9.86571 9.30986 9.53238 9.17986 9.06571 9.07986L8.00571 8.85986C7.37905 8.7332 6.90905 8.51653 6.59571 8.20986C6.28905 7.89653 6.13571 7.4832 6.13571 6.96986C6.13571 6.65653 6.19905 6.36986 6.32571 6.10986C6.45238 5.84986 6.63238 5.62653 6.86571 5.43986C7.09905 5.2532 7.37571 5.10986 7.69571 5.00986C8.01571 4.90986 8.36905 4.85986 8.75571 4.85986C9.16905 4.85986 9.55571 4.91653 9.91571 5.02986C10.2824 5.13653 10.6124 5.29986 10.9057 5.51986C10.9924 5.58653 11.049 5.6632 11.0757 5.74986C11.1024 5.82986 11.1057 5.9132 11.0857 5.99986C11.0657 6.07986 11.0257 6.14653 10.9657 6.19986C10.9124 6.2532 10.8424 6.28653 10.7557 6.29986C10.669 6.30653 10.5724 6.27653 10.4657 6.20986C10.2057 6.0232 9.93571 5.88986 9.65571 5.80986C9.38238 5.72986 9.08238 5.68986 8.75571 5.68986C8.41571 5.68986 8.12238 5.7432 7.87571 5.84986C7.62905 5.94986 7.43905 6.0932 7.30571 6.27986C7.17238 6.46653 7.10571 6.68653 7.10571 6.93986C7.10571 7.2332 7.19571 7.46653 7.37571 7.63986C7.56238 7.8132 7.86905 7.9432 8.29571 8.02986L9.35571 8.24986C10.0224 8.38986 10.5157 8.6032 10.8357 8.88986C11.1624 9.17653 11.3257 9.56653 11.3257 10.0599C11.3257 10.3665 11.2624 10.6465 11.1357 10.8999C11.0157 11.1465 10.839 11.3599 10.6057 11.5399C10.379 11.7132 10.1024 11.8499 9.77571 11.9499C9.44905 12.0432 9.07905 12.0899 8.66571 12.0899Z\", fill: \"#838383\" }),\n        react_1.default.createElement(\"path\", { d: \"M14.4476 12.0899C14.0476 12.0899 13.7143 12.0199 13.4476 11.8799C13.1809 11.7399 12.9809 11.5365 12.8476 11.2699C12.7209 10.9965 12.6576 10.6632 12.6576 10.2699V7.85986H12.0276C11.9009 7.85986 11.8043 7.82653 11.7376 7.75986C11.6709 7.6932 11.6376 7.6032 11.6376 7.48986C11.6376 7.37653 11.6709 7.28986 11.7376 7.22986C11.8043 7.1632 11.9009 7.12986 12.0276 7.12986H12.6576V6.05986C12.6576 5.89986 12.6976 5.77986 12.7776 5.69986C12.8643 5.61986 12.9843 5.57986 13.1376 5.57986C13.2843 5.57986 13.3976 5.61986 13.4776 5.69986C13.5643 5.77986 13.6076 5.89986 13.6076 6.05986V7.12986H14.7976C14.9243 7.12986 15.0209 7.1632 15.0876 7.22986C15.1609 7.28986 15.1976 7.37653 15.1976 7.48986C15.1976 7.6032 15.1609 7.6932 15.0876 7.75986C15.0209 7.82653 14.9243 7.85986 14.7976 7.85986H13.6076V10.1999C13.6076 10.5599 13.6809 10.8332 13.8276 11.0199C13.9809 11.2065 14.2309 11.2999 14.5776 11.2999C14.7043 11.2999 14.8109 11.2899 14.8976 11.2699C14.9843 11.2432 15.0609 11.2265 15.1276 11.2199C15.1943 11.2132 15.2476 11.2365 15.2876 11.2899C15.3343 11.3365 15.3576 11.4265 15.3576 11.5599C15.3576 11.6532 15.3409 11.7399 15.3076 11.8199C15.2743 11.8999 15.2143 11.9532 15.1276 11.9799C15.0476 12.0065 14.9409 12.0299 14.8076 12.0499C14.6743 12.0765 14.5543 12.0899 14.4476 12.0899Z\", fill: \"#838383\" })));\n}\nexports.AppealsIcon = AppealsIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/AppealsIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/BasketIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icon/BasketIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BasketIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction BasketIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"24\", height: \"23\", viewBox: \"0 0 24 23\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M11.5935 19.7944V19.7944C11.5935 18.9442 10.9641 18.2227 10.1185 18.0746C10.9391 18.223 11.5727 18.9288 11.5727 19.7945M11.5935 19.7944L9.45841 21.5113M11.5935 19.7944C11.5935 20.6392 10.9722 21.3568 10.1349 21.5113M11.5935 19.7944L10.1349 21.5113M11.5727 19.7945H11.0727L11.5727 19.7944C11.5727 19.7944 11.5727 19.7945 11.5727 19.7945ZM11.5727 19.7945C11.5728 20.6544 10.9475 21.3565 10.1349 21.5113M10.1349 21.5113C10.0256 21.5315 9.91257 21.5421 9.79675 21.5421C9.68089 21.5421 9.5678 21.5315 9.45841 21.5113M9.45841 21.5113C8.64591 21.3564 8.02079 20.6543 8.02079 19.7945C8.02079 18.9289 8.65437 18.2231 9.47488 18.0746C8.62938 18.2227 8 18.9442 8 19.7944C8 20.6391 8.62124 21.3567 9.45841 21.5113Z\", stroke: \"#838383\" }),\n        react_1.default.createElement(\"path\", { d: \"M19.8218 18.0746C20.6423 18.2231 21.2758 18.9288 21.2758 19.7944L19.8218 18.0746ZM19.8218 18.0746C20.6673 18.2227 21.2966 18.9442 21.2966 19.7944C21.2966 20.6391 20.6754 21.3567 19.8383 21.5113C20.6508 21.3564 21.2759 20.6543 21.2758 19.7945L19.8218 18.0746ZM17.7031 19.7944C17.7031 18.9442 18.3325 18.2227 19.178 18.0746C18.3575 18.2231 17.7239 18.9289 17.7239 19.7945C17.7239 20.6543 18.349 21.3564 19.1615 21.5113C18.3244 21.3567 17.7031 20.6391 17.7031 19.7944Z\", stroke: \"#838383\" }),\n        react_1.default.createElement(\"path\", { d: \"M8.79424 11.8723L8.66629 12.6035C8.47104 13.7194 9.04363 14.8285 10.0664 15.3155V15.3155C10.1341 15.3478 10.2082 15.3645 10.2833 15.3645H20.2526\", stroke: \"#838383\", strokeLinecap: \"round\" }),\n        react_1.default.createElement(\"path\", { d: \"M2.375 0.958374V0.958374C3.75414 0.958374 4.98931 1.81196 5.47693 3.10202L5.98667 4.45058M5.98667 4.45058L8.79167 11.8715L18.4525 11.5649C19.6873 11.5257 20.7718 10.7335 21.1847 9.56913L22.7634 5.11771C22.8788 4.79227 22.6375 4.45058 22.2922 4.45058H5.98667Z\", stroke: \"#838383\", strokeLinecap: \"round\" }),\n        react_1.default.createElement(\"path\", { d: \"M2.375 0.958374L1 0.958374\", stroke: \"#838383\", strokeLinecap: \"round\" })));\n}\nexports.BasketIcon = BasketIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/BasketIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/CatalogIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icon/CatalogIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CatalogIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction CatalogIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"24\", height: \"24\", viewBox: \"0 0 24 24\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_2_1837)\" },\n            react_1.default.createElement(\"path\", { d: \"M23.5 4.5H0.500016C0.224016 4.5 0 4.76881 0 5.1C0 5.43119 0.224016 5.7 0.500016 5.7H23.5C23.776 5.7 24 5.43119 24 5.1C24 4.76881 23.776 4.5 23.5 4.5Z\", fill: \"#3A3A3A\" }),\n            react_1.default.createElement(\"path\", { d: \"M11.75 11.5H0.250007C0.112008 11.5 0 11.7688 0 12.1C0 12.4312 0.112008 12.7 0.250007 12.7H11.75C11.888 12.7 12 12.4312 12 12.1C12 11.7688 11.888 11.5 11.75 11.5Z\", fill: \"#3A3A3A\" }),\n            react_1.default.createElement(\"path\", { d: \"M12.925 18.5H0.275008C0.123208 18.5 0 18.7688 0 19.1C0 19.4312 0.123208 19.7 0.275008 19.7H12.925C13.0768 19.7 13.2 19.4312 13.2 19.1C13.2 18.7688 13.0768 18.5 12.925 18.5Z\", fill: \"#3A3A3A\" }),\n            react_1.default.createElement(\"path\", { d: \"M18.9 14.3789L22.1409 18.9596M20.2706 12.2441C19.9531 14.0443 18.222 15.2437 16.404 14.9231C14.586 14.6025 13.3696 12.8832 13.6871 11.0831C14.0046 9.28292 15.7357 8.08352 17.5537 8.40414C19.3716 8.72476 20.588 10.444 20.2706 12.2441Z\", stroke: \"#3A3A3A\", strokeLinecap: \"round\" })),\n        react_1.default.createElement(\"defs\", null,\n            react_1.default.createElement(\"clipPath\", { id: \"clip0_2_1837\" },\n                react_1.default.createElement(\"rect\", { width: \"24\", height: \"24\", fill: \"white\" })))));\n}\nexports.CatalogIcon = CatalogIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/CatalogIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/FavoritesIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icon/FavoritesIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FavoritesIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction FavoritesIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"17\", height: \"22\", viewBox: \"0 0 17 22\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M16 19.9554C16 20.7875 15.0429 21.2556 14.3861 20.7447L8.5 16.1667L2.61394 20.7447C1.95708 21.2556 1 20.7875 1 19.9554V3.33333C1 2.71449 1.22576 2.121 1.62763 1.68342C2.02949 1.24583 2.57454 1 3.14286 1H13.8571C14.4255 1 14.9705 1.24583 15.3724 1.68342C15.7742 2.121 16 2.71449 16 3.33333V19.9554Z\", stroke: \"#838383\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })));\n}\nexports.FavoritesIcon = FavoritesIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/FavoritesIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/FavoritesIcon2.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icon/FavoritesIcon2.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FavoritesIcon2 = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction FavoritesIcon2(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"24\", height: \"24\", viewBox: \"0 0 24 24\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M20.8321 4.60987C20.3285 4.09888 19.7306 3.69352 19.0726 3.41696C18.4145 3.14039 17.7092 2.99805 16.9969 2.99805C16.2846 2.99805 15.5792 3.14039 14.9212 3.41696C14.2631 3.69352 13.6652 4.09888 13.1617 4.60987L12.1166 5.66987L11.0715 4.60987C10.0544 3.57818 8.67479 2.99858 7.23631 2.99858C5.79782 2.99858 4.41826 3.57818 3.4011 4.60987C2.38394 5.64157 1.8125 7.04084 1.8125 8.49987C1.8125 9.95891 2.38394 11.3582 3.4011 12.3899L4.44617 13.4499L12.1166 21.2299L19.787 13.4499L20.8321 12.3899C21.3359 11.8791 21.7355 11.2727 22.0082 10.6052C22.2809 9.93777 22.4212 9.22236 22.4212 8.49987C22.4212 7.77739 22.2809 7.06198 22.0082 6.39452C21.7355 5.72706 21.3359 5.12063 20.8321 4.60987V4.60987Z\", stroke: \"#3A3A3A\", strokeLinecap: \"round\", strokeLinejoin: \"round\" })));\n}\nexports.FavoritesIcon2 = FavoritesIcon2;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/FavoritesIcon2.tsx?");

/***/ }),

/***/ "./src/shared/Icon/FlagOfRussiaIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icon/FlagOfRussiaIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FlagOfRussiaIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction FlagOfRussiaIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"24\", height: \"16\", viewBox: \"0 0 24 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\n        react_1.default.createElement(\"rect\", { x: \"0.1\", y: \"0.1\", width: \"23.8\", height: \"15.8\", fill: \"url(#pattern0)\", stroke: \"#3A3A3A\", strokeWidth: \"0.2\" }),\n        react_1.default.createElement(\"defs\", null,\n            react_1.default.createElement(\"pattern\", { id: \"pattern0\", patternContentUnits: \"objectBoundingBox\", width: \"1\", height: \"1\" },\n                react_1.default.createElement(\"use\", { xlinkHref: \"#image0_2_187\", transform: \"matrix(0.00364299 0 0 0.00546448 -0.000910747 0)\" })),\n            react_1.default.createElement(\"image\", { id: \"image0_2_187\", width: \"275\", height: \"183\", xlinkHref: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////CNykGG3kAAGwAGH7LOR9TMMkKAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII=\" }))));\n}\nexports.FlagOfRussiaIcon = FlagOfRussiaIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/FlagOfRussiaIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/FlagOfTurkeyIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icon/FlagOfTurkeyIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FlagOfTurkeyIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction FlagOfTurkeyIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"24\", height: \"16\", viewBox: \"0 0 24 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\n        react_1.default.createElement(\"rect\", { x: \"0.1\", y: \"0.1\", width: \"23.8\", height: \"15.8\", fill: \"url(#pattern0)\", stroke: \"black\", strokeWidth: \"0.2\" }),\n        react_1.default.createElement(\"defs\", null,\n            react_1.default.createElement(\"pattern\", { id: \"pattern0\", patternContentUnits: \"objectBoundingBox\", width: \"1\", height: \"1\" },\n                react_1.default.createElement(\"use\", { xlinkHref: \"#image0_2_199\", transform: \"scale(0.0037037 0.00555556)\" })),\n            react_1.default.createElement(\"image\", { id: \"image0_2_199\", width: \"270\", height: \"180\", xlinkHref: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC0CAMAAABSSTIwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACjlBMVEXLICfNKC/VSU/cam/kjJDsr7Hyxsj219j55+j88PH99vf////kjI/NJy7LISjURkvhf4PuuLr44+T//f3ut7rhfoLURUvQNDrgeX3ts7X66+ztsrTgeH3PMzrMJi3bY2jutbf++/v+/PzxxMXecnfNKS/WUFbqp6n88fHqpqnWTlTXVFrvvb/zy83ZW2H0ztD11NXXVFn10tTXUlfPMDbpn6L//v7srrDPMjn77u7igYXLIinRO0HzzM7zy8zROkD77/D88vLcaW7MIyrlkJPMJSzROUD00NH77u/zzc/vu73tsbTnmZznl5rnmp3vvL7ROD/TREr55ub44OHfdnrPMTfPMTjfd3v66OnUR03WT1Xec3frqKvWUlf99fXOLDPRNz7db3P++/z9+PjpoqXSPUPaYmfonqHROD799fb11tfXU1j55+f++vrihYjLHyfMJCv55OXWUVbonaDvubvOLzXge3/++fnda3Dgen7aYWbfdHjrqq3ihIj22NndbHHjiIz11dbqo6bcZ2zwwML109XZW2DsrK/33N3QNjzOKzLgfIDQNTvNKjH00tPaX2TdbXLzysvNKjDkio3xw8Xwvb/caGzqpajSP0XecHT22tvxwcPOLTTecHXhgIT33d744eL22dvwvsDQNz3bZmv00dLURkzZXGHyxcfki47YVlzVS1HljpLkjZHlj5Pyx8nVSlDmlZnxxMb99/fdbnL329z77Oz44uPhfYHUSE7utrnsr7LVTFH66uv33t/fdXnSPkT66erttLbcaW3aYGXwv8H88/PYWV733+Domp7jhYnKICf55ebjh4vTQEbrq67qpKf89PT77e3SPELfd3zXVVvTQkj0z9DyycrVTVKvjDxWAAAAAWJLR0QLH9fEwAAAAAd0SU1FB+YGFhcGFKMSadIAAAb5SURBVHja7Z37X1RFFMAvLoLLKKhgvHdlJXGRhyDLqqioiygaKiqURpCSEL4C3xkKKEqmlpYmqSmlmFJm+cCyh6VlWfYw7fXfpIDAAsKZ3dPc2dnz/ZEf5ly+n9m5M2fOzNU0giAIgiAI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\" }))));\n}\nexports.FlagOfTurkeyIcon = FlagOfTurkeyIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/FlagOfTurkeyIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/FlagOfUSAIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icon/FlagOfUSAIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FlagOfUSAIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction FlagOfUSAIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"24\", height: \"16\", viewBox: \"0 0 24 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\n        react_1.default.createElement(\"rect\", { x: \"0.1\", y: \"0.1\", width: \"23.8\", height: \"15.8\", fill: \"url(#pattern0)\", stroke: \"#3A3A3A\", strokeWidth: \"0.2\" }),\n        react_1.default.createElement(\"defs\", null,\n            react_1.default.createElement(\"pattern\", { id: \"pattern0\", patternContentUnits: \"objectBoundingBox\", width: \"1\", height: \"1\" },\n                react_1.default.createElement(\"use\", { xlinkHref: \"#image0_2_196\", transform: \"matrix(0.00505051 0 0 0.00757576 -0.131313 0)\" })),\n            react_1.default.createElement(\"image\", { id: \"image0_2_196\", width: \"250\", height: \"132\", xlinkHref: \"data:image/png;base64,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\" }))));\n}\nexports.FlagOfUSAIcon = FlagOfUSAIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/FlagOfUSAIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/HomeIcon.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icon/HomeIcon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HomeIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction HomeIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"23\", height: \"24\", viewBox: \"0 0 23 24\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M10.3978 1.89482L1.5527 8.50535C1.0475 8.88292 0.75 9.47667 0.75 10.1074V21C0.75 22.1046 1.64543 23 2.75 23H5.98005C7.08462 23 7.98005 22.1046 7.98005 21V14.5789C7.98005 13.4744 8.87548 12.5789 9.98005 12.5789H13.2101C14.3147 12.5789 15.2101 13.4744 15.2101 14.5789V21C15.2101 22.1046 16.1055 23 17.2101 23H20.4401C21.5447 23 22.4401 22.1046 22.4401 21V10.1074C22.4401 9.47667 22.1426 8.88292 21.6374 8.50535L12.7924 1.89482C12.0824 1.36419 11.1078 1.36419 10.3978 1.89482Z\", stroke: \"#3A3A3A\" })));\n}\nexports.HomeIcon = HomeIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/HomeIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Icon = exports.EIconsName = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar _omparisonIcon_1 = __webpack_require__(/*! ./СomparisonIcon */ \"./src/shared/Icon/СomparisonIcon.tsx\");\nvar AppealsIcon_1 = __webpack_require__(/*! ./AppealsIcon */ \"./src/shared/Icon/AppealsIcon.tsx\");\nvar BasketIcon_1 = __webpack_require__(/*! ./BasketIcon */ \"./src/shared/Icon/BasketIcon.tsx\");\nvar ProfileIcon_1 = __webpack_require__(/*! ./ProfileIcon */ \"./src/shared/Icon/ProfileIcon.tsx\");\nvar FavoritesIcon_1 = __webpack_require__(/*! ./FavoritesIcon */ \"./src/shared/Icon/FavoritesIcon.tsx\");\nvar FlagOfRussiaIcon_1 = __webpack_require__(/*! ./FlagOfRussiaIcon */ \"./src/shared/Icon/FlagOfRussiaIcon.tsx\");\nvar FlagOfTurkeyIcon_1 = __webpack_require__(/*! ./FlagOfTurkeyIcon */ \"./src/shared/Icon/FlagOfTurkeyIcon.tsx\");\nvar FlagOfUSAIcon_1 = __webpack_require__(/*! ./FlagOfUSAIcon */ \"./src/shared/Icon/FlagOfUSAIcon.tsx\");\nvar StageOneIcon_1 = __webpack_require__(/*! ./StageOneIcon */ \"./src/shared/Icon/StageOneIcon.tsx\");\nvar StageTwoIcon_1 = __webpack_require__(/*! ./StageTwoIcon */ \"./src/shared/Icon/StageTwoIcon.tsx\");\nvar StageThreeIcon_1 = __webpack_require__(/*! ./StageThreeIcon */ \"./src/shared/Icon/StageThreeIcon.tsx\");\nvar HomeIcon_1 = __webpack_require__(/*! ./HomeIcon */ \"./src/shared/Icon/HomeIcon.tsx\");\nvar CatalogIcon_1 = __webpack_require__(/*! ./CatalogIcon */ \"./src/shared/Icon/CatalogIcon.tsx\");\nvar FavoritesIcon2_1 = __webpack_require__(/*! ./FavoritesIcon2 */ \"./src/shared/Icon/FavoritesIcon2.tsx\");\nvar EIconsName;\n(function (EIconsName) {\n    EIconsName[\"\\u0421omparisonIcon\"] = \"\\u0421omparisonIcon\";\n    EIconsName[\"AppealsIcon\"] = \"AppealsIcon\";\n    EIconsName[\"BasketIcon\"] = \"BasketIcon\";\n    EIconsName[\"ProfileIcon\"] = \"ProfileIcon\";\n    EIconsName[\"shareIcon\"] = \"ShareIcon\";\n    EIconsName[\"FavoritesIcon\"] = \"FavoritesIcon\";\n    EIconsName[\"FlagOfRussiaIcon\"] = \"FlagOfRussiaIcon\";\n    EIconsName[\"FlagOfTurkeyIcon\"] = \"FlagOfTurkeyIcon\";\n    EIconsName[\"FlagOfUSAIcon\"] = \"FlagOfUSAIcon\";\n    EIconsName[\"StageOneIcon\"] = \"StageOneIcon\";\n    EIconsName[\"StageTwoIcon\"] = \"StageTwoIcon\";\n    EIconsName[\"StageThreeIcon\"] = \"StageThreeIcon\";\n    EIconsName[\"HomeIcon\"] = \"HomeIcon\";\n    EIconsName[\"CatalogIcon\"] = \"CatalogIcon\";\n    EIconsName[\"FavoritesIcon2\"] = \"FavoritesIcon2\";\n})(EIconsName = exports.EIconsName || (exports.EIconsName = {}));\nfunction Icon(_a) {\n    var name = _a.name, size = _a.size;\n    if (name === EIconsName.СomparisonIcon) {\n        return (react_1.default.createElement(_omparisonIcon_1.СomparisonIcon, { size: size }));\n    }\n    else if (name === EIconsName.AppealsIcon) {\n        return (react_1.default.createElement(AppealsIcon_1.AppealsIcon, { size: size }));\n    }\n    else if (name === EIconsName.BasketIcon) {\n        return (react_1.default.createElement(BasketIcon_1.BasketIcon, { size: size }));\n    }\n    else if (name === EIconsName.ProfileIcon) {\n        return (react_1.default.createElement(ProfileIcon_1.ProfileIcon, { size: size }));\n    }\n    else if (name === EIconsName.FavoritesIcon) {\n        return (react_1.default.createElement(FavoritesIcon_1.FavoritesIcon, { size: size }));\n    }\n    else if (name === EIconsName.FlagOfRussiaIcon) {\n        return (react_1.default.createElement(FlagOfRussiaIcon_1.FlagOfRussiaIcon, { size: size }));\n    }\n    else if (name === EIconsName.FlagOfTurkeyIcon) {\n        return (react_1.default.createElement(FlagOfTurkeyIcon_1.FlagOfTurkeyIcon, { size: size }));\n    }\n    else if (name === EIconsName.FlagOfUSAIcon) {\n        return (react_1.default.createElement(FlagOfUSAIcon_1.FlagOfUSAIcon, { size: size }));\n    }\n    else if (name === EIconsName.StageOneIcon) {\n        return (react_1.default.createElement(StageOneIcon_1.StageOneIcon, { size: size }));\n    }\n    else if (name === EIconsName.StageTwoIcon) {\n        return (react_1.default.createElement(StageTwoIcon_1.StageTwoIcon, { size: size }));\n    }\n    else if (name === EIconsName.StageThreeIcon) {\n        return (react_1.default.createElement(StageThreeIcon_1.StageThreeIcon, { size: size }));\n    }\n    else if (name === EIconsName.HomeIcon) {\n        return (react_1.default.createElement(HomeIcon_1.HomeIcon, { size: size }));\n    }\n    else if (name === EIconsName.CatalogIcon) {\n        return (react_1.default.createElement(CatalogIcon_1.CatalogIcon, { size: size }));\n    }\n    else if (name === EIconsName.FavoritesIcon2) {\n        return (react_1.default.createElement(FavoritesIcon2_1.FavoritesIcon2, { size: size }));\n    }\n    else\n        return null;\n}\nexports.Icon = Icon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/ProfileIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icon/ProfileIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ProfileIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction ProfileIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"24\", height: \"23\", viewBox: \"0 0 24 23\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M1 22.0417C1 18.0886 6.5 18.0886 9.25 15.4532C10.625 14.1355 6.5 14.1355 6.5 7.54692C6.5 3.15499 8.33287 0.958374 12 0.958374C15.6671 0.958374 17.5 3.15499 17.5 7.54692C17.5 14.1355 13.375 14.1355 14.75 15.4532C17.5 18.0886 23 18.0886 23 22.0417\", stroke: \"#838383\", strokeLinecap: \"round\" })));\n}\nexports.ProfileIcon = ProfileIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/ProfileIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/StageOneIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icon/StageOneIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StageOneIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction StageOneIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"58\", height: \"58\", viewBox: \"0 0 58 58\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"28.6221\", cy: \"28.5914\", r: \"26.3496\", fill: \"#FEDEC7\", stroke: \"#ED7117\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M12.6436 32.1416C12.3796 32.1416 12.1756 32.0736 12.0316 31.9376C11.8956 31.7936 11.8276 31.5896 11.8276 31.3256V24.3776C11.8276 24.1216 11.8916 23.9256 12.0196 23.7896C12.1556 23.6536 12.3436 23.5856 12.5836 23.5856C12.8316 23.5856 13.0196 23.6536 13.1476 23.7896C13.2756 23.9256 13.3396 24.1216 13.3396 24.3776V30.8576H16.5676V24.3776C16.5676 24.1216 16.6316 23.9256 16.7596 23.7896C16.8956 23.6536 17.0836 23.5856 17.3236 23.5856C17.5716 23.5856 17.7596 23.6536 17.8876 23.7896C18.0156 23.9256 18.0796 24.1216 18.0796 24.3776V30.8576H21.3076V24.3776C21.3076 24.1216 21.3716 23.9256 21.4996 23.7896C21.6356 23.6536 21.8236 23.5856 22.0636 23.5856C22.3116 23.5856 22.4996 23.6536 22.6276 23.7896C22.7556 23.9256 22.8196 24.1216 22.8196 24.3776V31.3256C22.8196 31.5896 22.7476 31.7936 22.6036 31.9376C22.4676 32.0736 22.2676 32.1416 22.0036 32.1416H12.6436ZM26.5433 32.2616C26.1193 32.2616 25.7393 32.1816 25.4033 32.0216C25.0753 31.8536 24.8153 31.6296 24.6233 31.3496C24.4393 31.0696 24.3473 30.7536 24.3473 30.4016C24.3473 29.9696 24.4593 29.6296 24.6833 29.3816C24.9073 29.1256 25.2713 28.9416 25.7753 28.8296C26.2793 28.7176 26.9553 28.6616 27.8033 28.6616H28.4033V29.5256H27.8153C27.3193 29.5256 26.9233 29.5496 26.6273 29.5976C26.3313 29.6456 26.1193 29.7296 25.9913 29.8496C25.8713 29.9616 25.8113 30.1216 25.8113 30.3296C25.8113 30.5936 25.9033 30.8096 26.0873 30.9776C26.2713 31.1456 26.5273 31.2296 26.8553 31.2296C27.1193 31.2296 27.3513 31.1696 27.5513 31.0496C27.7593 30.9216 27.9233 30.7496 28.0433 30.5336C28.1633 30.3176 28.2233 30.0696 28.2233 29.7896V28.4096C28.2233 28.0096 28.1353 27.7216 27.9593 27.5456C27.7833 27.3696 27.4873 27.2816 27.0713 27.2816C26.8393 27.2816 26.5873 27.3096 26.3153 27.3656C26.0513 27.4216 25.7713 27.5176 25.4753 27.6536C25.3233 27.7256 25.1873 27.7456 25.0673 27.7136C24.9553 27.6816 24.8673 27.6176 24.8033 27.5216C24.7393 27.4176 24.7073 27.3056 24.7073 27.1856C24.7073 27.0656 24.7393 26.9496 24.8033 26.8376C24.8673 26.7176 24.9753 26.6296 25.1273 26.5736C25.4953 26.4216 25.8473 26.3136 26.1833 26.2496C26.5273 26.1856 26.8393 26.1536 27.1193 26.1536C27.6953 26.1536 28.1673 26.2416 28.5353 26.4176C28.9113 26.5936 29.1913 26.8616 29.3753 27.2216C29.5593 27.5736 29.6513 28.0296 29.6513 28.5896V31.4696C29.6513 31.7176 29.5913 31.9096 29.4713 32.0456C29.3513 32.1736 29.1793 32.2376 28.9553 32.2376C28.7313 32.2376 28.5553 32.1736 28.4273 32.0456C28.3073 31.9096 28.2473 31.7176 28.2473 31.4696V30.8936H28.3433C28.2873 31.1736 28.1753 31.4176 28.0073 31.6256C27.8473 31.8256 27.6433 31.9816 27.3953 32.0936C27.1473 32.2056 26.8633 32.2616 26.5433 32.2616ZM32.0819 32.2376C31.8419 32.2376 31.6539 32.1696 31.5179 32.0336C31.3899 31.8976 31.3259 31.7056 31.3259 31.4576V27.1136C31.3259 26.8416 31.3979 26.6336 31.5419 26.4896C31.6859 26.3456 31.8939 26.2736 32.1659 26.2736H35.2259C35.4419 26.2736 35.6019 26.3216 35.7059 26.4176C35.8099 26.5136 35.8619 26.6616 35.8619 26.8616C35.8619 27.0536 35.8099 27.2016 35.7059 27.3056C35.6019 27.4016 35.4419 27.4496 35.2259 27.4496H32.8259V31.4576C32.8259 31.9776 32.5779 32.2376 32.0819 32.2376ZM41.0881 32.1416C40.8801 32.1416 40.7161 32.0856 40.5961 31.9736C40.4841 31.8536 40.4281 31.6936 40.4281 31.4936C40.4281 31.2856 40.4841 31.1296 40.5961 31.0256C40.7161 30.9216 40.8801 30.8696 41.0881 30.8696H42.4321V24.9776H43.1761L41.4121 26.0456C41.2601 26.1336 41.1161 26.1696 40.9801 26.1536C40.8521 26.1296 40.7401 26.0736 40.6441 25.9856C40.5561 25.8896 40.4961 25.7776 40.4641 25.6496C40.4321 25.5216 40.4401 25.3936 40.4881 25.2656C40.5441 25.1296 40.6481 25.0176 40.8001 24.9296L42.4561 23.9336C42.6161 23.8376 42.7761 23.7576 42.9361 23.6936C43.0961 23.6216 43.2441 23.5856 43.3801 23.5856C43.5481 23.5856 43.6881 23.6336 43.8001 23.7296C43.9121 23.8176 43.9681 23.9656 43.9681 24.1736V30.8696H45.1921C45.4001 30.8696 45.5601 30.9216 45.6721 31.0256C45.7921 31.1296 45.8521 31.2856 45.8521 31.4936C45.8521 31.7016 45.7921 31.8616 45.6721 31.9736C45.5601 32.0856 45.4001 32.1416 45.1921 32.1416H41.0881Z\", fill: \"#ED7117\" }),\n        react_1.default.createElement(\"mask\", { id: \"path-3-inside-1_2_163\", fill: \"white\" },\n            react_1.default.createElement(\"path\", { d: \"M28.4154 0.246389C23.1846 0.285979 18.0673 1.77852 13.6322 4.55812C9.19703 7.33772 5.61785 11.2955 3.29244 15.9916C0.967034 20.6876 -0.0135196 25.938 0.459767 31.1592C0.933053 36.3804 2.84164 41.3678 5.9734 45.5672C9.10515 49.7665 13.3374 53.0133 18.1997 54.9467C23.0621 56.88 28.3641 57.4242 33.5164 56.5187C38.6687 55.6132 43.4695 53.2936 47.3853 49.8175C51.301 46.3415 54.1783 41.8453 55.6973 36.8286L51.8403 35.6553C50.5377 39.9571 48.0704 43.8126 44.7127 46.7933C41.3549 49.774 37.2382 51.7632 32.8201 52.5396C28.402 53.3161 23.8555 52.8494 19.6861 51.1916C15.5166 49.5337 11.8874 46.7496 9.20196 43.1487C6.51648 39.5477 4.87987 35.271 4.47403 30.7938C4.06818 26.3167 4.90901 21.8145 6.90305 17.7876C8.89708 13.7607 11.9662 10.3669 15.7693 7.9834C19.5725 5.59989 23.9606 4.32004 28.446 4.28609L28.4154 0.246389Z\" })),\n        react_1.default.createElement(\"path\", { d: \"M28.4154 0.246389C23.1846 0.285979 18.0673 1.77852 13.6322 4.55812C9.19703 7.33772 5.61785 11.2955 3.29244 15.9916C0.967034 20.6876 -0.0135196 25.938 0.459767 31.1592C0.933053 36.3804 2.84164 41.3678 5.9734 45.5672C9.10515 49.7665 13.3374 53.0133 18.1997 54.9467C23.0621 56.88 28.3641 57.4242 33.5164 56.5187C38.6687 55.6132 43.4695 53.2936 47.3853 49.8175C51.301 46.3415 54.1783 41.8453 55.6973 36.8286L51.8403 35.6553C50.5377 39.9571 48.0704 43.8126 44.7127 46.7933C41.3549 49.774 37.2382 51.7632 32.8201 52.5396C28.402 53.3161 23.8555 52.8494 19.6861 51.1916C15.5166 49.5337 11.8874 46.7496 9.20196 43.1487C6.51648 39.5477 4.87987 35.271 4.47403 30.7938C4.06818 26.3167 4.90901 21.8145 6.90305 17.7876C8.89708 13.7607 11.9662 10.3669 15.7693 7.9834C19.5725 5.59989 23.9606 4.32004 28.446 4.28609L28.4154 0.246389Z\", stroke: \"#FEDEC7\", strokeWidth: \"8\", strokeLinejoin: \"round\", mask: \"url(#path-3-inside-1_2_163)\" })));\n}\nexports.StageOneIcon = StageOneIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/StageOneIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/StageThreeIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icon/StageThreeIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StageThreeIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction StageThreeIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"57\", height: \"57\", viewBox: \"0 0 57 57\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"28.5\", cy: \"28.5\", r: \"26.5\", fill: \"#FEDEC7\", stroke: \"#ED7117\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M12.4275 32C12.1635 32 11.9595 31.932 11.8155 31.796C11.6795 31.652 11.6115 31.448 11.6115 31.184V24.236C11.6115 23.98 11.6755 23.784 11.8035 23.648C11.9395 23.512 12.1275 23.444 12.3675 23.444C12.6155 23.444 12.8035 23.512 12.9315 23.648C13.0595 23.784 13.1235 23.98 13.1235 24.236V30.716H16.3515V24.236C16.3515 23.98 16.4155 23.784 16.5435 23.648C16.6795 23.512 16.8675 23.444 17.1075 23.444C17.3555 23.444 17.5435 23.512 17.6715 23.648C17.7995 23.784 17.8635 23.98 17.8635 24.236V30.716H21.0915V24.236C21.0915 23.98 21.1555 23.784 21.2835 23.648C21.4195 23.512 21.6075 23.444 21.8475 23.444C22.0955 23.444 22.2835 23.512 22.4115 23.648C22.5395 23.784 22.6035 23.98 22.6035 24.236V31.184C22.6035 31.448 22.5315 31.652 22.3875 31.796C22.2515 31.932 22.0515 32 21.7875 32H12.4275ZM26.3273 32.12C25.9033 32.12 25.5233 32.04 25.1873 31.88C24.8593 31.712 24.5993 31.488 24.4073 31.208C24.2233 30.928 24.1313 30.612 24.1313 30.26C24.1313 29.828 24.2433 29.488 24.4673 29.24C24.6913 28.984 25.0553 28.8 25.5593 28.688C26.0633 28.576 26.7393 28.52 27.5873 28.52H28.1873V29.384H27.5993C27.1033 29.384 26.7073 29.408 26.4113 29.456C26.1153 29.504 25.9033 29.588 25.7753 29.708C25.6553 29.82 25.5953 29.98 25.5953 30.188C25.5953 30.452 25.6873 30.668 25.8713 30.836C26.0553 31.004 26.3113 31.088 26.6393 31.088C26.9033 31.088 27.1353 31.028 27.3353 30.908C27.5433 30.78 27.7073 30.608 27.8273 30.392C27.9473 30.176 28.0073 29.928 28.0073 29.648V28.268C28.0073 27.868 27.9193 27.58 27.7433 27.404C27.5673 27.228 27.2713 27.14 26.8553 27.14C26.6233 27.14 26.3713 27.168 26.0993 27.224C25.8353 27.28 25.5553 27.376 25.2593 27.512C25.1073 27.584 24.9713 27.604 24.8513 27.572C24.7393 27.54 24.6513 27.476 24.5873 27.38C24.5233 27.276 24.4913 27.164 24.4913 27.044C24.4913 26.924 24.5233 26.808 24.5873 26.696C24.6513 26.576 24.7593 26.488 24.9113 26.432C25.2793 26.28 25.6313 26.172 25.9673 26.108C26.3113 26.044 26.6233 26.012 26.9033 26.012C27.4793 26.012 27.9513 26.1 28.3193 26.276C28.6953 26.452 28.9753 26.72 29.1593 27.08C29.3433 27.432 29.4353 27.888 29.4353 28.448V31.328C29.4353 31.576 29.3753 31.768 29.2553 31.904C29.1353 32.032 28.9633 32.096 28.7393 32.096C28.5153 32.096 28.3393 32.032 28.2113 31.904C28.0913 31.768 28.0313 31.576 28.0313 31.328V30.752H28.1273C28.0713 31.032 27.9593 31.276 27.7913 31.484C27.6313 31.684 27.4273 31.84 27.1793 31.952C26.9313 32.064 26.6473 32.12 26.3273 32.12ZM31.8658 32.096C31.6258 32.096 31.4378 32.028 31.3018 31.892C31.1738 31.756 31.1098 31.564 31.1098 31.316V26.972C31.1098 26.7 31.1818 26.492 31.3258 26.348C31.4698 26.204 31.6778 26.132 31.9498 26.132H35.0098C35.2258 26.132 35.3858 26.18 35.4898 26.276C35.5938 26.372 35.6458 26.52 35.6458 26.72C35.6458 26.912 35.5938 27.06 35.4898 27.164C35.3858 27.26 35.2258 27.308 35.0098 27.308H32.6098V31.316C32.6098 31.836 32.3618 32.096 31.8658 32.096ZM42.432 32.12C42 32.12 41.552 32.064 41.088 31.952C40.624 31.84 40.22 31.672 39.876 31.448C39.716 31.344 39.608 31.224 39.552 31.088C39.496 30.952 39.48 30.824 39.504 30.704C39.536 30.576 39.596 30.468 39.684 30.38C39.78 30.292 39.896 30.24 40.032 30.224C40.176 30.208 40.332 30.244 40.5 30.332C40.828 30.508 41.144 30.636 41.448 30.716C41.752 30.788 42.064 30.824 42.384 30.824C42.736 30.824 43.032 30.776 43.272 30.68C43.512 30.584 43.692 30.44 43.812 30.248C43.94 30.056 44.004 29.824 44.004 29.552C44.004 29.152 43.868 28.856 43.596 28.664C43.332 28.464 42.944 28.364 42.432 28.364H41.664C41.44 28.364 41.268 28.308 41.148 28.196C41.036 28.084 40.98 27.928 40.98 27.728C40.98 27.528 41.036 27.372 41.148 27.26C41.268 27.148 41.44 27.092 41.664 27.092H42.288C42.592 27.092 42.852 27.044 43.068 26.948C43.284 26.844 43.452 26.7 43.572 26.516C43.692 26.332 43.752 26.108 43.752 25.844C43.752 25.476 43.628 25.196 43.38 25.004C43.14 24.812 42.788 24.716 42.324 24.716C42.028 24.716 41.748 24.752 41.484 24.824C41.228 24.888 40.944 25.012 40.632 25.196C40.488 25.284 40.348 25.32 40.212 25.304C40.084 25.288 39.976 25.236 39.888 25.148C39.8 25.06 39.74 24.956 39.708 24.836C39.676 24.708 39.684 24.58 39.732 24.452C39.78 24.316 39.88 24.2 40.032 24.104C40.376 23.88 40.756 23.712 41.172 23.6C41.588 23.48 42.016 23.42 42.456 23.42C43.04 23.42 43.54 23.512 43.956 23.696C44.372 23.872 44.688 24.128 44.904 24.464C45.128 24.792 45.24 25.192 45.24 25.664C45.24 26 45.176 26.308 45.048 26.588C44.92 26.86 44.74 27.092 44.508 27.284C44.276 27.476 43.996 27.612 43.668 27.692V27.548C44.244 27.644 44.692 27.884 45.012 28.268C45.332 28.644 45.492 29.116 45.492 29.684C45.492 30.18 45.368 30.612 45.12 30.98C44.872 31.348 44.52 31.632 44.064 31.832C43.608 32.024 43.064 32.12 42.432 32.12Z\", fill: \"#ED7117\" })));\n}\nexports.StageThreeIcon = StageThreeIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/StageThreeIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/StageTwoIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icon/StageTwoIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StageTwoIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction StageTwoIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"58\", height: \"58\", viewBox: \"0 0 58 58\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"28.7734\", cy: \"28.7432\", r: \"26.5\", fill: \"#FEDEC7\", stroke: \"#ED7117\", strokeWidth: \"4\" }),\n        react_1.default.createElement(\"path\", { d: \"M12.7009 32.2432C12.4369 32.2432 12.2329 32.1752 12.0889 32.0392C11.9529 31.8952 11.8849 31.6912 11.8849 31.4272V24.4792C11.8849 24.2232 11.9489 24.0272 12.0769 23.8912C12.2129 23.7552 12.4009 23.6872 12.6409 23.6872C12.8889 23.6872 13.0769 23.7552 13.2049 23.8912C13.3329 24.0272 13.3969 24.2232 13.3969 24.4792V30.9592H16.6249V24.4792C16.6249 24.2232 16.6889 24.0272 16.8169 23.8912C16.9529 23.7552 17.1409 23.6872 17.3809 23.6872C17.6289 23.6872 17.8169 23.7552 17.9449 23.8912C18.0729 24.0272 18.1369 24.2232 18.1369 24.4792V30.9592H21.3649V24.4792C21.3649 24.2232 21.4289 24.0272 21.5569 23.8912C21.6929 23.7552 21.8809 23.6872 22.1209 23.6872C22.3689 23.6872 22.5569 23.7552 22.6849 23.8912C22.8129 24.0272 22.8769 24.2232 22.8769 24.4792V31.4272C22.8769 31.6912 22.8049 31.8952 22.6609 32.0392C22.5249 32.1752 22.3249 32.2432 22.0609 32.2432H12.7009ZM26.6007 32.3632C26.1767 32.3632 25.7967 32.2832 25.4607 32.1232C25.1327 31.9552 24.8727 31.7312 24.6807 31.4512C24.4967 31.1712 24.4047 30.8552 24.4047 30.5032C24.4047 30.0712 24.5167 29.7312 24.7407 29.4832C24.9647 29.2272 25.3287 29.0432 25.8327 28.9312C26.3367 28.8192 27.0127 28.7632 27.8607 28.7632H28.4607V29.6272H27.8727C27.3767 29.6272 26.9807 29.6512 26.6847 29.6992C26.3887 29.7472 26.1767 29.8312 26.0487 29.9512C25.9287 30.0632 25.8687 30.2232 25.8687 30.4312C25.8687 30.6952 25.9607 30.9112 26.1447 31.0792C26.3287 31.2472 26.5847 31.3312 26.9127 31.3312C27.1767 31.3312 27.4087 31.2712 27.6087 31.1512C27.8167 31.0232 27.9807 30.8512 28.1007 30.6352C28.2207 30.4192 28.2807 30.1712 28.2807 29.8912V28.5112C28.2807 28.1112 28.1927 27.8232 28.0167 27.6472C27.8407 27.4712 27.5447 27.3832 27.1287 27.3832C26.8967 27.3832 26.6447 27.4112 26.3727 27.4672C26.1087 27.5232 25.8287 27.6192 25.5327 27.7552C25.3807 27.8272 25.2447 27.8472 25.1247 27.8152C25.0127 27.7832 24.9247 27.7192 24.8607 27.6232C24.7967 27.5192 24.7647 27.4072 24.7647 27.2872C24.7647 27.1672 24.7967 27.0512 24.8607 26.9392C24.9247 26.8192 25.0327 26.7312 25.1847 26.6752C25.5527 26.5232 25.9047 26.4152 26.2407 26.3512C26.5847 26.2872 26.8967 26.2552 27.1767 26.2552C27.7527 26.2552 28.2247 26.3432 28.5927 26.5192C28.9687 26.6952 29.2487 26.9632 29.4327 27.3232C29.6167 27.6752 29.7087 28.1312 29.7087 28.6912V31.5712C29.7087 31.8192 29.6487 32.0112 29.5287 32.1472C29.4087 32.2752 29.2367 32.3392 29.0127 32.3392C28.7887 32.3392 28.6127 32.2752 28.4847 32.1472C28.3647 32.0112 28.3047 31.8192 28.3047 31.5712V30.9952H28.4007C28.3447 31.2752 28.2327 31.5192 28.0647 31.7272C27.9047 31.9272 27.7007 32.0832 27.4527 32.1952C27.2047 32.3072 26.9207 32.3632 26.6007 32.3632ZM32.1393 32.3392C31.8993 32.3392 31.7113 32.2712 31.5753 32.1352C31.4473 31.9992 31.3833 31.8072 31.3833 31.5592V27.2152C31.3833 26.9432 31.4553 26.7352 31.5993 26.5912C31.7433 26.4472 31.9513 26.3752 32.2233 26.3752H35.2833C35.4993 26.3752 35.6593 26.4232 35.7633 26.5192C35.8673 26.6152 35.9193 26.7632 35.9193 26.9632C35.9193 27.1552 35.8673 27.3032 35.7633 27.4072C35.6593 27.5032 35.4993 27.5512 35.2833 27.5512H32.8833V31.5592C32.8833 32.0792 32.6353 32.3392 32.1393 32.3392ZM40.8694 32.2432C40.6134 32.2432 40.4254 32.1872 40.3054 32.0752C40.1934 31.9552 40.1374 31.7832 40.1374 31.5592C40.1374 31.4232 40.1734 31.2912 40.2454 31.1632C40.3174 31.0352 40.4214 30.8992 40.5574 30.7552L42.9694 28.1872C43.3374 27.8032 43.6014 27.4552 43.7614 27.1432C43.9214 26.8232 44.0014 26.5032 44.0014 26.1832C44.0014 25.7832 43.8734 25.4792 43.6174 25.2712C43.3694 25.0632 43.0054 24.9592 42.5254 24.9592C42.2534 24.9592 41.9814 24.9992 41.7094 25.0792C41.4374 25.1512 41.1614 25.2792 40.8814 25.4632C40.7374 25.5592 40.6014 25.5992 40.4734 25.5832C40.3534 25.5672 40.2454 25.5152 40.1494 25.4272C40.0614 25.3392 40.0014 25.2312 39.9694 25.1032C39.9374 24.9752 39.9414 24.8472 39.9814 24.7192C40.0294 24.5832 40.1254 24.4672 40.2694 24.3712C40.6134 24.1392 40.9974 23.9632 41.4214 23.8432C41.8534 23.7232 42.2854 23.6632 42.7174 23.6632C43.3254 23.6632 43.8374 23.7552 44.2534 23.9392C44.6694 24.1232 44.9854 24.3912 45.2014 24.7432C45.4174 25.0952 45.5254 25.5232 45.5254 26.0272C45.5254 26.3632 45.4694 26.6912 45.3574 27.0112C45.2534 27.3312 45.0894 27.6552 44.8654 27.9832C44.6494 28.3112 44.3654 28.6592 44.0134 29.0272L41.7574 31.3792V30.9712H45.2854C45.5014 30.9712 45.6654 31.0232 45.7774 31.1272C45.8894 31.2312 45.9454 31.3872 45.9454 31.5952C45.9454 31.8032 45.8894 31.9632 45.7774 32.0752C45.6654 32.1872 45.5014 32.2432 45.2854 32.2432H40.8694Z\", fill: \"#ED7117\" }),\n        react_1.default.createElement(\"mask\", { id: \"path-3-inside-1_2_163\", fill: \"white\" },\n            react_1.default.createElement(\"path\", { d: \"M28.4378 0.214895C24.7036 0.243157 21.0115 1.0083 17.5724 2.46663C14.1333 3.92495 11.0145 6.04792 8.39401 8.71429C5.77356 11.3807 3.7028 14.5382 2.29994 18.0067C0.897096 21.4752 0.189639 25.1867 0.217964 28.9293L5.57942 28.8887C5.55644 25.8518 6.13051 22.8401 7.26885 20.0256C8.4072 17.2111 10.0875 14.6489 12.2139 12.4852C14.3403 10.3216 16.871 8.59889 19.6617 7.41553C22.4524 6.23217 25.4483 5.61129 28.4785 5.58836L28.4378 0.214895Z\" })),\n        react_1.default.createElement(\"path\", { d: \"M28.4378 0.214895C24.7036 0.243157 21.0115 1.0083 17.5724 2.46663C14.1333 3.92495 11.0145 6.04792 8.39401 8.71429C5.77356 11.3807 3.7028 14.5382 2.29994 18.0067C0.897096 21.4752 0.189639 25.1867 0.217964 28.9293L5.57942 28.8887C5.55644 25.8518 6.13051 22.8401 7.26885 20.0256C8.4072 17.2111 10.0875 14.6489 12.2139 12.4852C14.3403 10.3216 16.871 8.59889 19.6617 7.41553C22.4524 6.23217 25.4483 5.61129 28.4785 5.58836L28.4378 0.214895Z\", stroke: \"#FEDEC7\", strokeWidth: \"8\", strokeLinejoin: \"round\", mask: \"url(#path-3-inside-1_2_163)\" })));\n}\nexports.StageTwoIcon = StageTwoIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/StageTwoIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s12\": \"icon__s12--LuYYL\",\n\t\"s14\": \"icon__s14--m4nyp\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/СomparisonIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icon/СomparisonIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.СomparisonIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nfunction СomparisonIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { className: icon_css_1.default[size], width: \"18\", height: \"23\", viewBox: \"0 0 18 23\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M9 -0.000244141C9.27614 -0.000244141 9.5 0.223613 9.5 0.499756L9.5 21.5026C9.5 21.7788 9.27614 22.0026 9 22.0026C8.72386 22.0026 8.5 21.7788 8.5 21.5026L8.5 0.499756C8.5 0.223613 8.72386 -0.000244141 9 -0.000244141ZM0.5 12.6008C0.776143 12.6008 1 12.8247 1 13.1008L1 21.502C1 21.7781 0.776142 22.002 0.5 22.002C0.223858 22.002 0 21.7781 0 21.502V13.1008C0 12.8247 0.223858 12.6008 0.5 12.6008ZM18 8.06177C18 7.78562 17.7761 7.56177 17.5 7.56177C17.2239 7.56177 17 7.78562 17 8.06177V21.5036C17 21.7798 17.2239 22.0036 17.5 22.0036C17.7761 22.0036 18 21.7798 18 21.5036V8.06177Z\", fill: \"#838383\" })));\n}\nexports.СomparisonIcon = СomparisonIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/%D0%A1omparisonIcon.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Text = exports.EColors = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar EColors;\n(function (EColors) {\n    EColors[\"black\"] = \"black\";\n    EColors[\"orange\"] = \"orange\";\n    EColors[\"white\"] = \"white\";\n    EColors[\"gray93\"] = \"gray93\";\n    EColors[\"gray90\"] = \"gray90\";\n    EColors[\"gray83\"] = \"gray83\";\n    EColors[\"gray9C\"] = \"gray9C\";\n    EColors[\"grayDF\"] = \"grayDF\";\n})(EColors = exports.EColors || (exports.EColors = {}));\nfunction Text(props) {\n    var _a, _b, _c;\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColors.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize, _f = props.weight, weight = _f === void 0 ? null : _f;\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], text_css_1.default[color], text_css_1.default[\"\".concat(weight)], (_a = {}, _a[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c));\n    return (react_1.default.createElement(As, { className: classes }, children));\n}\nexports.Text = Text;\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s26\": \"text__s26--33McQ\",\n\t\"s24\": \"text__s24--XH-t1\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s13\": \"text__s13--2m43H\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s11\": \"text__s11--mLgKt\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"white\": \"text__white--13JGE\",\n\t\"gray93\": \"text__gray93--EITOJ\",\n\t\"gray90\": \"text__gray90--2rX_i\",\n\t\"gray9C\": \"text__gray9C--2l7rh\",\n\t\"gray83\": \"text__gray83--4EV2_\",\n\t\"grayDF\": \"text__grayDF--3diOQ\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"bold600\": \"text__bold600--3XLUL\",\n\t\"bold700\": \"text__bold700--2Ymit\",\n\t\"m26\": \"text__m26--3-ZU2\",\n\t\"m24\": \"text__m24--YyUG1\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m13\": \"text__m13--Mmnq9\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m11\": \"text__m11--3UoUN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\nfunction assoc(key, value) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\n    };\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.merge = void 0;\nfunction merge(obj) {\n    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };\n}\nexports.merge = merge;\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\nexports.generateRandomString = generateRandomString;\nexports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };\nexports.generateId = generateId;\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intersection-observer\");\n\n//# sourceURL=webpack:///external_%22react-intersection-observer%22?");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-select\");\n\n//# sourceURL=webpack:///external_%22react-select%22?");

/***/ })

/******/ });