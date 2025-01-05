/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/js/navbar.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.js */ \"./src/js/stats.js\");\n/* harmony import */ var _stats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stats_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Add JavaScript for other sections if needed\n\n//# sourceURL=webpack://beelite/./src/js/main.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

eval("// navbar.js\ndocument.addEventListener('DOMContentLoaded', function () {\n  var toggle = document.querySelector('.navbar__toggle');\n  var menu = document.querySelector('.navbar__menu');\n  var toggleIcon = document.querySelector('.navbar__toggle-icon');\n  toggle.addEventListener('click', function () {\n    menu.classList.toggle('active');\n    toggle.classList.toggle('active');\n\n    // Animate hamburger to X\n    if (toggle.classList.contains('active')) {\n      toggleIcon.style.background = 'transparent';\n      toggleIcon.style.transform = 'rotate(180deg)';\n    } else {\n      toggleIcon.style.background = '#333';\n      toggleIcon.style.transform = 'rotate(0)';\n    }\n  });\n});\n\n//# sourceURL=webpack://beelite/./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/stats.js":
/*!*************************!*\
  !*** ./src/js/stats.js ***!
  \*************************/
/***/ (() => {

eval("// stats.js\ndocument.addEventListener('DOMContentLoaded', function () {\n  var counters = document.querySelectorAll('.stats__number');\n  var animationDuration = 2000; // 2 seconds\n  var frameDuration = 1000 / 60; // 60fps\n  var totalFrames = Math.round(animationDuration / frameDuration);\n  var animate = function animate(counter, target) {\n    var increment = target / totalFrames;\n    var currentCount = 0;\n    var _updateCounter = function updateCounter() {\n      currentCount += increment;\n      if (currentCount < target) {\n        counter.textContent = Math.ceil(currentCount);\n        requestAnimationFrame(_updateCounter);\n      } else {\n        counter.textContent = target;\n      }\n    };\n    _updateCounter();\n  };\n  var startAnimation = function startAnimation() {\n    counters.forEach(function (counter) {\n      var target = parseInt(counter.getAttribute('data-target'));\n      animate(counter, target);\n    });\n  };\n\n  // Start animation when element is in view\n  var observer = new IntersectionObserver(function (entries) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        startAnimation();\n        observer.unobserve(entry.target);\n      }\n    });\n  }, {\n    threshold: 0.5\n  });\n  counters.forEach(function (counter) {\n    return observer.observe(counter.parentElement);\n  });\n});\n\n//# sourceURL=webpack://beelite/./src/js/stats.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;