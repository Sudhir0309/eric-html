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

/***/ "./dev/js/main.js":
/*!************************!*\
  !*** ./dev/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoBannerAccessibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoBannerAccessibility.js */ \"./dev/js/videoBannerAccessibility.js\");\n\n\n\n// import { videoBackgroundSetup as videoBackgroundSetup } from './video-background.js';\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var mediaQuery = window.matchMedia('(min-width: 992px)');\n\n  // Initial check\n  (0,_videoBannerAccessibility_js__WEBPACK_IMPORTED_MODULE_0__.handleViewportChange)(mediaQuery);\n  // videoBackgroundSetup();\n\n  // Listen for changes in the viewport width\n  mediaQuery.addListener(_videoBannerAccessibility_js__WEBPACK_IMPORTED_MODULE_0__.handleViewportChange);\n});\n\n// script.js\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var stickyDiv = document.getElementById('main-nav');\n  var offsetTop = stickyDiv.offsetTop;\n  window.addEventListener('scroll', function () {\n    if (window.pageYOffset >= offsetTop) {\n      stickyDiv.classList.add('is-fixed');\n    } else {\n      stickyDiv.classList.remove('is-fixed');\n    }\n  });\n});\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/main.js?");

/***/ }),

/***/ "./dev/js/videoBannerAccessibility.js":
/*!********************************************!*\
  !*** ./dev/js/videoBannerAccessibility.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleViewportChange: () => (/* binding */ handleViewportChange)\n/* harmony export */ });\nfunction handleViewportChange(event) {\n  var vidBannerElements = document.querySelectorAll('.section-video-banner');\n  vidBannerElements.forEach(function (vidBannerElement) {\n    var dSmallElements = vidBannerElement.querySelectorAll('.d-small');\n    var dLargeElements = vidBannerElement.querySelectorAll('.d-large');\n    if (event.matches) {\n      // Viewport is at least 992px\n      dSmallElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'true');\n      });\n      dLargeElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'false');\n      });\n    } else {\n      // Viewport is below 992px\n      dSmallElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'false');\n      });\n      dLargeElements.forEach(function (el) {\n        return el.setAttribute('aria-hidden', 'true');\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://Eric_Njanga_2024/./dev/js/videoBannerAccessibility.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./dev/js/main.js");
/******/ 	
/******/ })()
;