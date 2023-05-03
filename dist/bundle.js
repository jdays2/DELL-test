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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_formValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/formValidation */ \"./js/components/formValidation.js\");\n\nvar BURGER_BUTTON = document.querySelector(\"#burger-button\");\nvar BURGER_MENU = document.querySelector(\"#burger-menu\");\nvar BURGER_ITEM = document.querySelectorAll(\"#burger-link\");\nvar SHADOW = document.querySelector(\".shadow-wrapper\");\nvar FORM = document.querySelector(\"#request-form\");\n\n// const CONTROL_BUTTONS = document.querySelectorAll(\".controller__button\")\n// const SLIDER_LINE = document.querySelector(\".slider-block__line\")\n\nvar SLIDER_LINE = document.querySelector(\".slider-block__line\");\nvar CARDS = document.querySelectorAll(\".card\");\nvar CONTROL_BUTTONS = document.querySelectorAll(\".controller__button\");\n\n// Calculate the width of a single card\nvar CARD_WIDTH = CARDS[0].offsetWidth;\n\n// Set the initial active card and control button\nvar activeCardIndex = 0;\nvar activeControlButtonIndex = 0;\nCARDS[activeCardIndex].classList.add(\"card--active\");\nCONTROL_BUTTONS[activeControlButtonIndex].classList.add(\"controller__button--active\");\n\n// Add click event listeners to the control buttons\nCONTROL_BUTTONS.forEach(function (button, index) {\n  button.addEventListener(\"click\", function () {\n    // Remove the active classes from the current card and control button\n    CARDS[activeCardIndex].classList.remove(\"card--active\");\n    CONTROL_BUTTONS[activeControlButtonIndex].classList.remove(\"controller__button--active\");\n\n    // Set the new active card and control button\n    activeCardIndex = index;\n    activeControlButtonIndex = index;\n    CARDS[activeCardIndex].classList.add(\"card--active\");\n    CONTROL_BUTTONS[activeControlButtonIndex].classList.add(\"controller__button--active\");\n\n    // Calculate the amount of pixels to slide\n    var slideAmount = -activeCardIndex * CARD_WIDTH;\n\n    // Set the left position of the slider line to slide the cards\n    SLIDER_LINE.style.left = slideAmount + \"px\";\n  });\n});\nFORM.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  if ((0,_components_formValidation__WEBPACK_IMPORTED_MODULE_0__.validateForm)()) {\n    setTimeout(function () {\n      window.location.reload();\n    }, 2000);\n  }\n});\nvar toggleBurger = function toggleBurger() {\n  BURGER_MENU.classList.toggle(\"burger-menu--active\");\n  SHADOW.classList.toggle(\"shadow-wrapper--show\");\n  if (document.body.style.overflow === \"hidden\") {\n    document.body.style.overflow = \"auto\";\n  } else {\n    document.body.style.overflow = \"hidden\";\n  }\n};\nBURGER_BUTTON.addEventListener(\"click\", toggleBurger);\nBURGER_ITEM.forEach(function (element) {\n  element.addEventListener(\"click\", toggleBurger);\n});\n\n//# sourceURL=webpack://dell-test/./js/app.js?");

/***/ }),

/***/ "./js/components/formValidation.js":
/*!*****************************************!*\
  !*** ./js/components/formValidation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateForm\": () => (/* binding */ validateForm)\n/* harmony export */ });\nvar validateForm = function validateForm() {\n  var nameInput = document.querySelector(\".request__input--name\");\n  var telInput = document.querySelector(\".request__input--tel\");\n  var commentInput = document.querySelector(\".request__input--comment\");\n  var isValid = true;\n  if (nameInput.value.trim() === \"\") {\n    nameInput.classList.add(\"request__input--error\");\n    isValid = false;\n  } else {\n    nameInput.classList.remove(\"request__input--error\");\n    nameInput.classList.add(\"request__input--correct\");\n  }\n  if (telInput.value.trim() === \"\" || !/^\\+?\\d{10,12}$/.test(telInput.value.trim())) {\n    telInput.classList.add(\"request__input--error\");\n    isValid = false;\n  } else {\n    telInput.classList.remove(\"request__input--error\");\n    telInput.classList.add(\"request__input--correct\");\n  }\n  if (commentInput.value.trim() === \"\") {\n    commentInput.classList.add(\"request__input--error\");\n    isValid = false;\n  } else {\n    commentInput.classList.remove(\"request__input--error\");\n    commentInput.classList.add(\"request__input--correct\");\n  }\n  return isValid;\n};\n\n//# sourceURL=webpack://dell-test/./js/components/formValidation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;