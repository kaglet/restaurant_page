/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");


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



// import '../styles/style.css';

// Display controller to control and manage all of the rendering logic (including initial single time rendering and other services) so there is no pollution of global variables
let displayController = function () {
    let mainPageContainer = document.querySelector('div#content');
    let homeBtn = document.querySelector('button.home');
    let menuBtn = document.querySelector('button.menu');
    let contactBtn = document.querySelector('button.contact');

    const initPage = () => mainPageContainer.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    initPage();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDcEMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBOEMsR0FBRyw4Q0FBOEMsR0FBRywrQ0FBK0M7O0FBRXZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDdEMzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDTTtBQUNOO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Qsb0RBQWU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsb0RBQWU7QUFDaEQsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFlO0FBQ2hELEtBQUs7O0FBRUw7QUFDQTtBQUNBLGlDQUFpQyx1REFBa0I7QUFDbkQsS0FBSztBQUNMLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBsb2FkQ29udGFjdFBhZ2UgPSBmdW5jdGlvbiAoKXtcbiAgICBsZXQgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFjdFBhZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgbGV0IGVtYWlsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRmaWVsZCcpO1xuICAgIGxldCBzZW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBsZXQgY2VsbE51bURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGxvY2F0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNlbGxOdW1EaXNwbGF5LnRleHRDb250ZW50ID0gJ0NhbGwgKzI3JztcbiAgICBsb2NhdGlvbkRpc3BsYXkudGV4dENvbnRlbnQgPSAnQWRkcmVzcyBoZXJlJztcblxuICAgIGVtYWlsRm9ybS5hcHBlbmQobmFtZUlucHV0LCBlbWFpbElucHV0LCBtZXNzYWdlSW5wdXQsIHNlbmRCdXR0b24pO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZChlbWFpbEZvcm0pO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZChjZWxsTnVtRGlzcGxheSwgbG9jYXRpb25EaXNwbGF5KTtcblxuICAgIHJldHVybiBjb250YWN0UGFnZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuXG4vKiBcbk5PVEU6IEVhY2ggcGFnZSBtYW5hZ2VzIGl0c2VsZiBsb2FkaW5nIGFuZCBpdHNlbGYgbG9hZGluZyBvbmx5LiBcbkdsb2JhbCBjbGVhciBmdW5jdGlvbiBjYW4gYmUgZWxzZXdoZXJlIHJlZ2FyZGxlc3Mgb2YgdGhlIHNwZWNpZmljIGNvbnRlbnRzIGhlcmUuIFxuKi9cblxuLy8gQ3JlYXRlIGFuZCByZXR1cm4gZWxlbWVudCBob2xkaW5nIGhvbWUgcGFnZSBjb250ZW50cyBpbiB0aGlzIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IGxvYWRIb21lUGFnZSA9IGZ1bmN0aW9uICgpe1xuICAgIC8vIElmIEkgcmVwZWF0IHRoaXMgY29udGVudCBzZWN0aW9uIHRoZW4gaXQgc2hvdWxkIGFsd2F5cyBiZSBzdGF0aWNcbiAgICAvLyBBcHBlbmQgaG9tZSBwYWdlIHNpbmNlIEkgd2FudCBhIHJlYWR5IG1hZGUgZWxlbWVudCB0byBhcHBlbmQgdG8gY29udGVudCBzZWN0aW9uLCBub3QgYWRkIHRvIGNvbnRlbnQgc2VjdGlvbiBvbiB0aGUgZmx5XG4gICAgbGV0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBwU2hvcnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBwSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IHBNb25GcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IHBTYXRTdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcbiAgICBwU2hvcnREZXNjLnRleHRDb250ZW50ID0gJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbiBvZiBvdXIgcmVzdGF1cmFudC4nXG4gICAgcE1vbkZyaS50ZXh0Q29udGVudCA9IFwiTW9uLUZyaTogOWFtIC0gOXBtXCI7XG4gICAgcFNhdFN1bi50ZXh0Q29udGVudCA9IFwiU2F0LVN1bjogOGFtIC0gMTBwbVwiO1xuXG4gICAgcEhvdXJzLmFwcGVuZChwTW9uRnJpLCBwU2F0U3VuKTtcbiAgICBhYm91dC5hcHBlbmQoaGVhZGluZywgcFNob3J0RGVzYywgcEhvdXJzKTtcblxuICAgIGhvbWVQYWdlLmFwcGVuZChhYm91dCk7XG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcblxuICAgIHJldHVybiBob21lUGFnZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lUGFnZTsiLCJjb25zdCBsb2FkTWVudVBhZ2UgPSBmdW5jdGlvbiAoKXtcbiAgICBsZXQgbWVudURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBsZXQgaXRlbXNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbXNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGV0IHNlZU1vcmVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIFByZXZlbnQgZHVwbGljYXRpb24gYnkgbWFuYWdpbmcgb25seS93cml0aW5nIG91dCB0aGUgZGlmZmVyZW5jZXMgYXMgdW5pcXVlIGluc3RhbmNlc1xuICAgIGxldCBtZW51SXRlbXMgPSBbe25hbWU6ICdOQU1FIDEnLCBwaWNVcmw6ICdVUkwnLCBkZXNjOiAnRGVzYyAxJ30sIHtuYW1lOiAnTkFNRSAyJywgcGljVXJsOiAnVVJMJywgZGVzYzogJ0Rlc2MgMid9LCB7bmFtZTogJ05BTUUgMycsICBwaWNVcmw6ICdVUkwnLCBkZXNjOiAnRGVzYyAzJ31dO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDaGVmXFwncyBIaWdobGlnaHRzJztcbiAgICBcbiAgICBtZW51SXRlbXMuZm9yRWFjaChtZW51SXRlbSA9PiB7XG4gICAgICAgIGxldCBpdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKCdpdGVtJywgJ2NhcmQnKTtcbiAgICAgICAgbGV0IGl0ZW1OYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGxldCBpdGVtUGljRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaXRlbURlc2NEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBcbiAgICAgICAgaXRlbU5hbWVEaXNwbGF5LnRleHRDb250ZW50ID0gbWVudUl0ZW0ubmFtZTtcbiAgICAgICAgaXRlbVBpY0Rpc3BsYXkudGV4dENvbnRlbnQgPSBtZW51SXRlbS5waWNVcmw7XG4gICAgICAgIGl0ZW1EZXNjRGlzcGxheS50ZXh0Q29udGVudCA9IG1lbnVJdGVtLmRlc2M7XG5cbiAgICAgICAgaXRlbUNhcmQuYXBwZW5kKGl0ZW1OYW1lRGlzcGxheSwgaXRlbVBpY0Rpc3BsYXksIGl0ZW1EZXNjRGlzcGxheSk7XG5cbiAgICAgICAgaXRlbXNEaXNwbGF5LmFwcGVuZChpdGVtQ2FyZCk7XG4gICAgfSk7XG5cbiAgICBzZWVNb3JlTm90ZS50ZXh0Q29udGVudCA9ICdzZWUgbW9yZS4uLidcblxuICAgIG1lbnVEaXNwbGF5LmFwcGVuZChoZWFkaW5nKTtcbiAgICBtZW51RGlzcGxheS5hcHBlbmQoaXRlbXNEaXNwbGF5KTtcbiAgICBtZW51RGlzcGxheS5hcHBlbmQoc2VlTW9yZU5vdGUpO1xuXG4gICAgcmV0dXJuIG1lbnVEaXNwbGF5O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lU2VjdGlvbiBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCBsb2FkTWVudVNlY3Rpb24gZnJvbSBcIi4vbWVudS5qc1wiO1xuLy8gaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuLy8gRGlzcGxheSBjb250cm9sbGVyIHRvIGNvbnRyb2wgYW5kIG1hbmFnZSBhbGwgb2YgdGhlIHJlbmRlcmluZyBsb2dpYyAoaW5jbHVkaW5nIGluaXRpYWwgc2luZ2xlIHRpbWUgcmVuZGVyaW5nIGFuZCBvdGhlciBzZXJ2aWNlcykgc28gdGhlcmUgaXMgbm8gcG9sbHV0aW9uIG9mIGdsb2JhbCB2YXJpYWJsZXNcbmxldCBkaXNwbGF5Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbWFpblBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmhvbWUnKTtcbiAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5tZW51Jyk7XG4gICAgbGV0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29udGFjdCcpO1xuXG4gICAgY29uc3QgaW5pdFBhZ2UgPSAoKSA9PiBtYWluUGFnZUNvbnRhaW5lci5hcHBlbmQobG9hZEhvbWVTZWN0aW9uKCkpO1xuICAgIGluaXRQYWdlKCk7XG5cbiAgICAvLyBJdCdzIGFzIGVhc3kgYXMgcmVtb3ZpbmcgYW5kIGFkZGluZyB0aGUgY3VycmVudCBjb250YWluZXIgYXQgb25jZSB3aXRoIGFsbCB0aGUgY29udGVudHMgLS0gTk9UIGEgcmVtb3ZhbCBvbmUgYnkgb25lXG4gICAgY29uc3QgY2xlYXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAobWFpblBhZ2VDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbWFpblBhZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQobWFpblBhZ2VDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICAgICAgbWFpblBhZ2VDb250YWluZXIuYXBwZW5kKGxvYWRIb21lU2VjdGlvbigpKTtcbiAgICB9KTtcblxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICBtYWluUGFnZUNvbnRhaW5lci5hcHBlbmQobG9hZE1lbnVTZWN0aW9uKCkpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIG1haW5QYWdlQ29udGFpbmVyLmFwcGVuZChsb2FkQ29udGFjdFNlY3Rpb24oKSk7XG4gICAgfSk7XG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9