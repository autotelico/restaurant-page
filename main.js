/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const content = document.querySelector('#contact');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    titleDiv.appendChild(h2);
    content.appendChild(titleDiv);

    const description1 = document.createElement('div');
    const h3_1 = document.createElement('h3');
    h3_1.textContent = 'Il Chef';
    description1.appendChild(h3_1);
    const para1 = document.createElement('p');
    para1.textContent = 'Chef';
    const br1 = document.createElement('br');
    para1.after(br1);
    const para2 = document.createElement('p');
    para2.textContent = '000-000-0001';
    const br2 = document.createElement('br');
    para2.after(br2);
    const para3 = document.createElement('p');
    para3.textContent = 'chef@legitdomain.com';

    description1.appendChild(para1);
    description1.appendChild(para2);
    description1.appendChild(para3);
    content.appendChild(description1);
    
    // const description2 = document.createElement('div');

    // const description3 = document.createElement('div');
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const content = document.querySelector('#home');
    console.log(content);
    
    // Title
    const titleDiv = document.createElement('div');

    const h1 = document.createElement('h2');
    h1.textContent = 'Il Ragazzino';
    titleDiv.appendChild(h1);
    titleDiv.classList.add('title');
    content.appendChild(titleDiv);

    // Commend message
    const paraDiv = document.createElement('div');
    const para = document.createElement('para');
    para.textContent = "Il Ragazzino serves the most delectable pizzas! The ambiance and customer service transport you "
    + "to the heart of Italy, making you feel like you're enjoying a meal in a traditional Venetian pizzeria. "
    + "This is the type of place that captures your taste buds and keeps you coming back for more, creating " 
    + "an inviting experience reminiscent of the finest Italian dining establishments.";
    paraDiv.appendChild(para);
    const authorName = document.createElement('p');
    authorName.textContent = '- Geppetto';
    paraDiv.classList.add('description');
    content.appendChild(paraDiv);
    paraDiv.appendChild(authorName);


    // Hours
    const hoursDiv = document.createElement('div');
    const hours = document.createElement('p');
    hours.textContent = '2am';
    hoursDiv.appendChild(hours);
    content.appendChild(hoursDiv);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const content = document.querySelector('#menu');
    console.log(content);
    
    const para = document.createElement('p');
    para.textContent = 'Love yourself some Italian food? Then check out our options!';
    
    const foodDiv1 = document.createElement('div');
    foodDiv1.classList.add('food-div');
    const image1 = document.createElement('img');
    image1.src = '../src/images/tiramisu.jpg';
    foodDiv1.appendChild(image1);
    
    const foodDiv2 = document.createElement('div');
    foodDiv2.classList.add('food-div');
    const image2 = document.createElement('img');
    image2.src = '../src/images/pizza-napoletana.jpg';
    foodDiv2.appendChild(image2);
    
    const foodDiv3 = document.createElement('div');
    foodDiv3.classList.add('food-div');
    const image3 = document.createElement('img');
    image3.src = '../src/images/spaghetti-alla-carbonara.jpg';
    foodDiv3.appendChild(image3);
    
    content.appendChild(para);
    content.appendChild(foodDiv1);
    content.appendChild(foodDiv2);
    content.appendChild(foodDiv3);
}

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'meyerReset.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll('[data-tab-target]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // a little loop to remove all other .active classes from other tab contents
            const tabContents = document.querySelectorAll('[data-tab-content]');
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
                console.log('.active Classes cleared.');
            })

            const content = document.querySelector(tab.dataset.tabTarget);
            content.classList.add('active');
            console.log('the class .active has been added');
        })
    })

    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQ0EsNkJBQWUsc0NBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENBLDZCQUFlLHNDQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNBO0FBQ007QUFDaEI7QUFDSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLElBQUkscURBQUk7QUFDUixJQUFJLG9EQUFJO0FBQ1IsSUFBSSx1REFBTztBQUNYLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaDIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChoMik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGgzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDNfMS50ZXh0Q29udGVudCA9ICdJbCBDaGVmJztcclxuICAgIGRlc2NyaXB0aW9uMS5hcHBlbmRDaGlsZChoM18xKTtcclxuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYTEudGV4dENvbnRlbnQgPSAnQ2hlZic7XHJcbiAgICBjb25zdCBicjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xyXG4gICAgcGFyYTEuYWZ0ZXIoYnIxKTtcclxuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSAnMDAwLTAwMC0wMDAxJztcclxuICAgIGNvbnN0IGJyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XHJcbiAgICBwYXJhMi5hZnRlcihicjIpO1xyXG4gICAgY29uc3QgcGFyYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhMy50ZXh0Q29udGVudCA9ICdjaGVmQGxlZ2l0ZG9tYWluLmNvbSc7XHJcblxyXG4gICAgZGVzY3JpcHRpb24xLmFwcGVuZENoaWxkKHBhcmExKTtcclxuICAgIGRlc2NyaXB0aW9uMS5hcHBlbmRDaGlsZChwYXJhMik7XHJcbiAgICBkZXNjcmlwdGlvbjEuYXBwZW5kQ2hpbGQocGFyYTMpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbjEpO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xyXG4gICAgY29uc29sZS5sb2coY29udGVudCk7XHJcbiAgICBcclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGgxLnRleHRDb250ZW50ID0gJ0lsIFJhZ2F6emlubyc7XHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChoMSk7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG4gICAgLy8gQ29tbWVuZCBtZXNzYWdlXHJcbiAgICBjb25zdCBwYXJhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFyYScpO1xyXG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiSWwgUmFnYXp6aW5vIHNlcnZlcyB0aGUgbW9zdCBkZWxlY3RhYmxlIHBpenphcyEgVGhlIGFtYmlhbmNlIGFuZCBjdXN0b21lciBzZXJ2aWNlIHRyYW5zcG9ydCB5b3UgXCJcclxuICAgICsgXCJ0byB0aGUgaGVhcnQgb2YgSXRhbHksIG1ha2luZyB5b3UgZmVlbCBsaWtlIHlvdSdyZSBlbmpveWluZyBhIG1lYWwgaW4gYSB0cmFkaXRpb25hbCBWZW5ldGlhbiBwaXp6ZXJpYS4gXCJcclxuICAgICsgXCJUaGlzIGlzIHRoZSB0eXBlIG9mIHBsYWNlIHRoYXQgY2FwdHVyZXMgeW91ciB0YXN0ZSBidWRzIGFuZCBrZWVwcyB5b3UgY29taW5nIGJhY2sgZm9yIG1vcmUsIGNyZWF0aW5nIFwiIFxyXG4gICAgKyBcImFuIGludml0aW5nIGV4cGVyaWVuY2UgcmVtaW5pc2NlbnQgb2YgdGhlIGZpbmVzdCBJdGFsaWFuIGRpbmluZyBlc3RhYmxpc2htZW50cy5cIjtcclxuICAgIHBhcmFEaXYuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYXV0aG9yTmFtZS50ZXh0Q29udGVudCA9ICctIEdlcHBldHRvJztcclxuICAgIHBhcmFEaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYURpdik7XHJcbiAgICBwYXJhRGl2LmFwcGVuZENoaWxkKGF1dGhvck5hbWUpO1xyXG5cclxuXHJcbiAgICAvLyBIb3Vyc1xyXG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaG91cnMudGV4dENvbnRlbnQgPSAnMmFtJztcclxuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnNEaXYpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYS50ZXh0Q29udGVudCA9ICdMb3ZlIHlvdXJzZWxmIHNvbWUgSXRhbGlhbiBmb29kPyBUaGVuIGNoZWNrIG91dCBvdXIgb3B0aW9ucyEnO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb29kRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vZERpdjEuY2xhc3NMaXN0LmFkZCgnZm9vZC1kaXYnKTtcclxuICAgIGNvbnN0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2UxLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3RpcmFtaXN1LmpwZyc7XHJcbiAgICBmb29kRGl2MS5hcHBlbmRDaGlsZChpbWFnZTEpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb29kRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vZERpdjIuY2xhc3NMaXN0LmFkZCgnZm9vZC1kaXYnKTtcclxuICAgIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2UyLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BpenphLW5hcG9sZXRhbmEuanBnJztcclxuICAgIGZvb2REaXYyLmFwcGVuZENoaWxkKGltYWdlMik7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvb2REaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kRGl2My5jbGFzc0xpc3QuYWRkKCdmb29kLWRpdicpO1xyXG4gICAgY29uc3QgaW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZTMuc3JjID0gJy4uL3NyYy9pbWFnZXMvc3BhZ2hldHRpLWFsbGEtY2FyYm9uYXJhLmpwZyc7XHJcbiAgICBmb29kRGl2My5hcHBlbmRDaGlsZChpbWFnZTMpO1xyXG4gICAgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb29kRGl2MSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2REaXYyKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZERpdjMpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgXCJzdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwibWV5ZXJSZXNldC5jc3NcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGFiLXRhcmdldF0nKTtcclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gYSBsaXR0bGUgbG9vcCB0byByZW1vdmUgYWxsIG90aGVyIC5hY3RpdmUgY2xhc3NlcyBmcm9tIG90aGVyIHRhYiBjb250ZW50c1xyXG4gICAgICAgICAgICBjb25zdCB0YWJDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYi1jb250ZW50XScpO1xyXG4gICAgICAgICAgICB0YWJDb250ZW50cy5mb3JFYWNoKHRhYkNvbnRlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcuYWN0aXZlIENsYXNzZXMgY2xlYXJlZC4nKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYi5kYXRhc2V0LnRhYlRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgY2xhc3MgLmFjdGl2ZSBoYXMgYmVlbiBhZGRlZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGhvbWUoKTtcclxuICAgIG1lbnUoKTtcclxuICAgIGNvbnRhY3QoKTtcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=