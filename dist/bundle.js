/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/style.css":
/*!*****************************!*\
  !*** ./src/pages/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadContactPage = function (){
    let contactPage = document.createElement('section');
    contactPage.classList.add('contact');

    let emailForm = document.createElement('form');
    let nameInput = document.createElement('input');
    let emailInput = document.createElement('input');
    let messageInput = document.createElement('textfield');
    let sendButton = document.createElement('button');

    let cellNumDisplay = document.createElement('p');
    let locationDisplay = document.createElement('p');

    cellNumDisplay.textContent = 'Call +27';
    locationDisplay.textContent = 'Address here';

    emailForm.append(nameInput, emailInput, messageInput, sendButton);
    contactPage.append(emailForm);
    contactPage.append(cellNumDisplay, locationDisplay);

    return contactPage;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* 
NOTE: Each page manages itself loading and itself loading only. 
Global clear function can be elsewhere regardless of the specific contents here. 
*/

// Create and return element holding home page contents in this factory function
const loadHomePage = function (){
    // If I repeat this content section then it should always be static
    // Append home page since I want a ready made element to append to content section, not add to content section on the fly
    let homePage = document.createElement('div');
    homePage.classList.add('home');

    let about = document.createElement('section');

    let heading = document.createElement('h2');
    let pShortDesc = document.createElement('p');
    let pHours = document.createElement('p');
    let pMonFri = document.createElement('span');
    let pSatSun = document.createElement('span');

    heading.textContent = 'About Us';
    pShortDesc.textContent = 'This is a description of our restaurant.'
    pMonFri.textContent = "Mon-Fri: 9am - 9pm";
    pSatSun.textContent = "Sat-Sun: 8am - 10pm";

    pHours.append(pMonFri, pSatSun);
    about.append(heading, pShortDesc, pHours);

    homePage.append(about);
    homePage.classList.add('hello');

    return homePage;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadMenuPage = function (){
    let menuDisplay = document.createElement('div');
    menuDisplay.classList.add('menu');

    let itemsDisplay = document.createElement('div');
    itemsDisplay.classList.add('wrapper');
    let heading = document.createElement('h1');
    let seeMoreNote = document.createElement('p');
    // Prevent duplication by managing only/writing out the differences as unique instances
    let menuItems = [{name: 'NAME 1', picUrl: 'URL', desc: 'Desc 1'}, {name: 'NAME 2', picUrl: 'URL', desc: 'Desc 2'}, {name: 'NAME 3',  picUrl: 'URL', desc: 'Desc 3'}];

    heading.textContent = 'Chef\'s Highlights';
    
    menuItems.forEach(menuItem => {
        let itemCard = document.createElement('div');
        itemCard.classList.add('item', 'card');
        let itemNameDisplay = document.createElement('h3');
        let itemPicDisplay = document.createElement('div');
        let itemDescDisplay = document.createElement('p');
        
        itemNameDisplay.textContent = menuItem.name;
        itemPicDisplay.textContent = menuItem.picUrl;
        itemDescDisplay.textContent = menuItem.desc;

        itemCard.append(itemNameDisplay, itemPicDisplay, itemDescDisplay);

        itemsDisplay.append(itemCard);
    });

    seeMoreNote.textContent = 'see more...'

    menuDisplay.append(heading);
    menuDisplay.append(itemsDisplay);
    menuDisplay.append(seeMoreNote);

    return menuDisplay;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);

/***/ }),

/***/ "./src/pages/sunorwind.jpg":
/*!*********************************!*\
  !*** ./src/pages/sunorwind.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f2b84bced6cfce6c36e.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/pages/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/pages/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/pages/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/pages/style.css");
/* harmony import */ var _sunorwind_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sunorwind.jpg */ "./src/pages/sunorwind.jpg");






// Display controller to control and manage all of the rendering logic (including initial single time rendering and other services) 
// This module is so there is no pollution of global variables
let displayController = function () {
    let mainPageContainer = document.querySelector('div#content');
    let homeBtn = document.querySelector('button.home');
    let menuBtn = document.querySelector('button.menu');
    let contactBtn = document.querySelector('button.contact');

    const initPage = () => mainPageContainer.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    initPage();
    
    let image = new Image();
    image.src = _sunorwind_jpg__WEBPACK_IMPORTED_MODULE_4__;
    mainPageContainer.append(image);

    // It's as easy as removing and adding the current container at once with all the contents -- NOT a removal one by one
    const clearDisplay = () => {
        while (mainPageContainer.firstChild) {
            mainPageContainer.removeChild(mainPageContainer.lastChild);
        }
    };

    homeBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    });

    menuBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });

    contactBtn.addEventListener('click', () => {
        clearDisplay();
        mainPageContainer.append((0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ3ZCOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUNsQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUE4QyxHQUFHLDhDQUE4QyxHQUFHLCtDQUErQzs7QUFFdks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O1VDdEMzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCd0M7QUFDTTtBQUNOO0FBQ25CO0FBQ2tCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Qsb0RBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJDQUFRO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFlO0FBQ2hELEtBQUs7O0FBRUw7QUFDQTtBQUNBLGlDQUFpQyxvREFBZTtBQUNoRCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWtCO0FBQ25ELEtBQUs7QUFDTCxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcGFnZXMvc3R5bGUuY3NzP2I1NzAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBsb2FkQ29udGFjdFBhZ2UgPSBmdW5jdGlvbiAoKXtcbiAgICBsZXQgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgbGV0IGVtYWlsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRmaWVsZCcpO1xuICAgIGxldCBzZW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBsZXQgY2VsbE51bURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGxvY2F0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNlbGxOdW1EaXNwbGF5LnRleHRDb250ZW50ID0gJ0NhbGwgKzI3JztcbiAgICBsb2NhdGlvbkRpc3BsYXkudGV4dENvbnRlbnQgPSAnQWRkcmVzcyBoZXJlJztcblxuICAgIGVtYWlsRm9ybS5hcHBlbmQobmFtZUlucHV0LCBlbWFpbElucHV0LCBtZXNzYWdlSW5wdXQsIHNlbmRCdXR0b24pO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZChlbWFpbEZvcm0pO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZChjZWxsTnVtRGlzcGxheSwgbG9jYXRpb25EaXNwbGF5KTtcblxuICAgIHJldHVybiBjb250YWN0UGFnZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTsiLCIvKiBcbk5PVEU6IEVhY2ggcGFnZSBtYW5hZ2VzIGl0c2VsZiBsb2FkaW5nIGFuZCBpdHNlbGYgbG9hZGluZyBvbmx5LiBcbkdsb2JhbCBjbGVhciBmdW5jdGlvbiBjYW4gYmUgZWxzZXdoZXJlIHJlZ2FyZGxlc3Mgb2YgdGhlIHNwZWNpZmljIGNvbnRlbnRzIGhlcmUuIFxuKi9cblxuLy8gQ3JlYXRlIGFuZCByZXR1cm4gZWxlbWVudCBob2xkaW5nIGhvbWUgcGFnZSBjb250ZW50cyBpbiB0aGlzIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IGxvYWRIb21lUGFnZSA9IGZ1bmN0aW9uICgpe1xuICAgIC8vIElmIEkgcmVwZWF0IHRoaXMgY29udGVudCBzZWN0aW9uIHRoZW4gaXQgc2hvdWxkIGFsd2F5cyBiZSBzdGF0aWNcbiAgICAvLyBBcHBlbmQgaG9tZSBwYWdlIHNpbmNlIEkgd2FudCBhIHJlYWR5IG1hZGUgZWxlbWVudCB0byBhcHBlbmQgdG8gY29udGVudCBzZWN0aW9uLCBub3QgYWRkIHRvIGNvbnRlbnQgc2VjdGlvbiBvbiB0aGUgZmx5XG4gICAgbGV0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBwU2hvcnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHBNb25GcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IHBTYXRTdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcbiAgICBwU2hvcnREZXNjLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbiBvZiBvdXIgcmVzdGF1cmFudC4nXG4gICAgcE1vbkZyaS50ZXh0Q29udGVudCA9IFwiTW9uLUZyaTogOWFtIC0gOXBtXCI7XG4gICAgcFNhdFN1bi50ZXh0Q29udGVudCA9IFwiU2F0LVN1bjogOGFtIC0gMTBwbVwiO1xuXG4gICAgcEhvdXJzLmFwcGVuZChwTW9uRnJpLCBwU2F0U3VuKTtcbiAgICBhYm91dC5hcHBlbmQoaGVhZGluZywgcFNob3J0RGVzYywgcEhvdXJzKTtcblxuICAgIGhvbWVQYWdlLmFwcGVuZChhYm91dCk7XG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcblxuICAgIHJldHVybiBob21lUGFnZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lUGFnZTsiLCJjb25zdCBsb2FkTWVudVBhZ2UgPSBmdW5jdGlvbiAoKXtcbiAgICBsZXQgbWVudURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBsZXQgaXRlbXNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbXNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGV0IHNlZU1vcmVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIFByZXZlbnQgZHVwbGljYXRpb24gYnkgbWFuYWdpbmcgb25seS93cml0aW5nIG91dCB0aGUgZGlmZmVyZW5jZXMgYXMgdW5pcXVlIGluc3RhbmNlc1xuICAgIGxldCBtZW51SXRlbXMgPSBbe25hbWU6ICdOQU1FIDEnLCBwaWNVcmw6ICdVUkwnLCBkZXNjOiAnRGVzYyAxJ30sIHtuYW1lOiAnTkFNRSAyJywgcGljVXJsOiAnVVJMJywgZGVzYzogJ0Rlc2MgMid9LCB7bmFtZTogJ05BTUUgMycsICBwaWNVcmw6ICdVUkwnLCBkZXNjOiAnRGVzYyAzJ31dO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDaGVmXFwncyBIaWdobGlnaHRzJztcbiAgICBcbiAgICBtZW51SXRlbXMuZm9yRWFjaChtZW51SXRlbSA9PiB7XG4gICAgICAgIGxldCBpdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKCdpdGVtJywgJ2NhcmQnKTtcbiAgICAgICAgbGV0IGl0ZW1OYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGxldCBpdGVtUGljRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaXRlbURlc2NEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBcbiAgICAgICAgaXRlbU5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVudUl0ZW0ubmFtZTtcbiAgICAgICAgaXRlbVBpY0Rpc3BsYXkudGV4dENvbnRlbnQgPSBtZW51SXRlbS5waWNVcmw7XG4gICAgICAgIGl0ZW1EZXNjRGlzcGxheS50ZXh0Q29udGVudCA9IG1lbnVJdGVtLmRlc2M7XG5cbiAgICAgICAgaXRlbUNhcmQuYXBwZW5kKGl0ZW1OYW1lRGlzcGxheSwgaXRlbVBpY0Rpc3BsYXksIGl0ZW1EZXNjRGlzcGxheSk7XG5cbiAgICAgICAgaXRlbXNEaXNwbGF5LmFwcGVuZChpdGVtQ2FyZCk7XG4gICAgfSk7XG5cbiAgICBzZWVNb3JlTm90ZS50ZXh0Q29udGVudCA9ICdzZWUgbW9yZS4uLidcblxuICAgIG1lbnVEaXNwbGF5LmFwcGVuZChoZWFkaW5nKTtcbiAgICBtZW51RGlzcGxheS5hcHBlbmQoaXRlbXNEaXNwbGF5KTtcbiAgICBtZW51RGlzcGxheS5hcHBlbmQoc2VlTW9yZU5vdGUpO1xuXG4gICAgcmV0dXJuIG1lbnVEaXNwbGF5O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZEhvbWVTZWN0aW9uIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkQ29udGFjdFNlY3Rpb24gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IGxvYWRNZW51U2VjdGlvbiBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBJbWFnZVVSTCBmcm9tICcuL3N1bm9yd2luZC5qcGcnO1xuXG4vLyBEaXNwbGF5IGNvbnRyb2xsZXIgdG8gY29udHJvbCBhbmQgbWFuYWdlIGFsbCBvZiB0aGUgcmVuZGVyaW5nIGxvZ2ljIChpbmNsdWRpbmcgaW5pdGlhbCBzaW5nbGUgdGltZSByZW5kZXJpbmcgYW5kIG90aGVyIHNlcnZpY2VzKSBcbi8vIFRoaXMgbW9kdWxlIGlzIHNvIHRoZXJlIGlzIG5vIHBvbGx1dGlvbiBvZiBnbG9iYWwgdmFyaWFibGVzXG5sZXQgZGlzcGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1haW5QYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5ob21lJyk7XG4gICAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubWVudScpO1xuICAgIGxldCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbnRhY3QnKTtcblxuICAgIGNvbnN0IGluaXRQYWdlID0gKCkgPT4gbWFpblBhZ2VDb250YWluZXIuYXBwZW5kKGxvYWRIb21lU2VjdGlvbigpKTtcbiAgICBpbml0UGFnZSgpO1xuICAgIFxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IEltYWdlVVJMO1xuICAgIG1haW5QYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG5cbiAgICAvLyBJdCdzIGFzIGVhc3kgYXMgcmVtb3ZpbmcgYW5kIGFkZGluZyB0aGUgY3VycmVudCBjb250YWluZXIgYXQgb25jZSB3aXRoIGFsbCB0aGUgY29udGVudHMgLS0gTk9UIGEgcmVtb3ZhbCBvbmUgYnkgb25lXG4gICAgY29uc3QgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAobWFpblBhZ2VDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbWFpblBhZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQobWFpblBhZ2VDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICAgICAgbWFpblBhZ2VDb250YWluZXIuYXBwZW5kKGxvYWRIb21lU2VjdGlvbigpKTtcbiAgICB9KTtcblxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICBtYWluUGFnZUNvbnRhaW5lci5hcHBlbmQobG9hZE1lbnVTZWN0aW9uKCkpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIG1haW5QYWdlQ29udGFpbmVyLmFwcGVuZChsb2FkQ29udGFjdFNlY3Rpb24oKSk7XG4gICAgfSk7XG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9