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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = document.querySelector(\".about\");\n\nconst aboutFunc = function() {\nconst div1 = document.createElement(\"div\");\nconst head = document.createElement(\"h2\");\nhead.textContent = \"ABOUT PAGE\";\n\ndiv1.appendChild(head);\n\nconst para = document.createElement(\"p\");\npara.textContent = \"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!\";\n\ndiv1.appendChild(para);\n\nconst para2 = document.createElement(\"p\");\npara2.textContent = \"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!\";\n\ndiv1.appendChild(para2);\n\nabout.appendChild(div1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutFunc);\n\n//# sourceURL=webpack://rest-2/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = document.querySelector(\".home\");\n\nconst homeFunc = function() {\n    \nconst div1 = document.createElement(\"div\");\nconst head = document.createElement(\"h2\");\nhead.textContent = \"HOME PAGE\";\n\ndiv1.appendChild(head);\n\nconst para = document.createElement(\"p\");\npara.textContent = \"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!\";\n\ndiv1.appendChild(para);\n\nconst para2 = document.createElement(\"p\");\npara2.textContent = \"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!\";\n\ndiv1.appendChild(para2);\n\nhome.appendChild(div1);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeFunc);\n\n//# sourceURL=webpack://rest-2/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mod.js */ \"./src/mod.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\nconsole.log(\"Nigga\");\nconst content = document.querySelector(\"#content\");\n\nconst home = document.querySelector(\".home\");\nconst menu = document.querySelector(\".menu\");\nconst about = document.querySelector(\".about\");\nconst btn = document.querySelector(\".btn\");\n\n\n(0,_mod_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n\n\n\n\n\n/*\nbutton.forEach(btn => {\n    btn.addEventListener(\"click\", ()=> {\n       \n         switch (btn.onclick) {\n            case home:\n                return homeFunc();\n                break;\n\n                case menu:\n                   return  menuFunc();     \n                break;\n\n                case about:\n                return aboutFunc();\n         \n            default:\n                return \"please click a button\"\n                break;\n         };\n            \n    });\n});\n*/\n\n\n home.addEventListener(\"click\", () => {\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nmenu.addEventListener(\"click\", () => {\n     (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\nabout.addEventListener(\"click\", () => {\n       (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n\n//# sourceURL=webpack://rest-2/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = document.querySelector(\".menu\");\n\nconst menuFunc = function() {\nconst div1 = document.createElement(\"div\");\nconst head = document.createElement(\"h2\");\nhead.textContent = \"MENU PAGE\";\n\ndiv1.appendChild(head);\n\nconst para = document.createElement(\"p\");\npara.textContent = \"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!\";\n\ndiv1.appendChild(para);\n\nconst para2 = document.createElement(\"p\");\npara2.textContent = \"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis animi beatae explicabo, quis optio placeat, ea nostrum illo laboriosam minus incidunt, error culpa quod hic nesciunt nam. Consectetur, architecto!\";\n\ndiv1.appendChild(para2);\n\nmenu.appendChild(div1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFunc);\n\n//# sourceURL=webpack://rest-2/./src/menu.js?");

/***/ }),

/***/ "./src/mod.js":
/*!********************!*\
  !*** ./src/mod.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n const content = document.querySelector(\"#content\");\n\n const pageLoader = function() {\n   const h = document.createElement(\"h1\");\n   h.textContent = \"RESTAURANT PAGE\";\n   content.appendChild(h);\n\n   const p1 = document.createElement(\"p\");\n   p1.textContent =\" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae placeat, impedit doloremque ducimus tempora reprehenderit sequi quo provident saepe doloribus corporis porro facilis at aperiam ab corrupti nihil ex.\";\n    content.appendChild(p1);\n   \n   const p2 = document.createElement(\"p\");\n    p2.textContent = \" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae placeat, impedit doloremque ducimus tempora reprehenderit sequi quo provident saepe doloribus corporis porro facilis at aperiam ab corrupti nihil ex.\";\n    content.appendChild(p2);\n\n    const p3 = document.createElement(\"p\");\n    p2.textContent = \" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae placeat, impedit doloremque ducimus tempora reprehenderit sequi quo provident saepe doloribus corporis porro facilis at aperiam ab corrupti nihil ex.\";\n    content.appendChild(p3);\n\n    console.log(\"Nigga 222222\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoader);\n\n//# sourceURL=webpack://rest-2/./src/mod.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;