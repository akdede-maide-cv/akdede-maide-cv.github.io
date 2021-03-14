/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/js-files/accordion.js":
/*!**************************************!*\
  !*** ./src/js/js-files/accordion.js ***!
  \**************************************/
/***/ (() => {

(function () {
  var accordion = {
    init: function init() {
      var _this = this;

      this.accordionHeaders = document.querySelectorAll('.accordion-title');
      this.accordionContents = document.querySelectorAll('.accordion__content');
      this.plus = document.querySelectorAll('.accordion__logo');
      this.oldAlt = 'Afficher contenu';
      this.newAlt = 'Cacher contenu';
      this.link = document.querySelector('.main-content__blur-text');
      this.blur = document.querySelector('.blur-content');
      this.oldLink = this.link.textContent;
      this.newLink = 'Cacher';
      this.hiddenP = document.querySelector('.p_blur_hidden');
      this.header = document.querySelectorAll('.accordion-title_h2');
      this.link.addEventListener('click', function () {
        if (_this.link.classList.contains('blur-active')) {
          _this.link.textContent = _this.newLink;

          _this.link.classList.remove('blur-active');

          _this.blur.classList.remove('p_blur');

          _this.hiddenP.classList.remove('hidden');
        } else if (!_this.link.classList.contains('blur-active')) {
          _this.link.textContent = _this.oldLink;

          _this.link.classList.add('blur-active');

          _this.blur.classList.add('p_blur');

          _this.hiddenP.classList.add('hidden');
        }
      });

      var _loop = function _loop(i) {
        _this.accordionHeaders[i].addEventListener('click', function () {
          if (_this.accordionHeaders[i].classList.contains('close')) {
            _this.accordionHeaders[i].classList.remove('close');

            _this.accordionContents[i].classList.remove('hidden');

            _this.plus[i].classList.add('active__close');

            _this.plus[i].alt = _this.newAlt;
            _this.header[i].style = 'text-decoration: underline';
          } else {
            _this.accordionHeaders[i].classList.add('close');

            _this.accordionContents[i].classList.add('hidden');

            _this.plus[i].classList.remove('active__close');

            _this.plus[i].alt = _this.oldAlt;
            _this.header[i].style = 'text-decoration: none';
          }
        });
      };

      for (var i = 0; i < this.accordionHeaders.length; i++) {
        _loop(i);
      }
    }
  };
  accordion.init();
})();

/***/ }),

/***/ "./src/js/js-files/fill-heart.js":
/*!***************************************!*\
  !*** ./src/js/js-files/fill-heart.js ***!
  \***************************************/
/***/ (() => {

(function () {
  var svg = {
    init: function init() {
      var _this = this;

      this.heart = document.querySelector('.heart-img');
      this.oldSrc = this.heart.src;
      this.newSrc = './src/img/svg/heart-filled.svg';
      this.button = document.querySelector('.main-content__contact-heart');
      this.button.addEventListener('click', function () {
        if (!_this.heart.classList.contains('bounce')) {
          _this.heart.src = _this.newSrc;

          _this.heart.classList.add('bounce');
        } else {
          _this.heart.src = _this.oldSrc;

          _this.heart.classList.remove('bounce');
        }
      });
    }
  };
  svg.init();
})();

/***/ }),

/***/ "./src/js/js-files/img__carousel.js":
/*!******************************************!*\
  !*** ./src/js/js-files/img__carousel.js ***!
  \******************************************/
/***/ (() => {

(function () {
  var ChangeImg = {
    init: function init() {
      var _this = this;

      this.img = document.querySelector('.main-content__img');
      this.arrow = document.querySelectorAll('.arrow');
      this.oldSrc = this.img.src;
      this.carousel1 = document.querySelector('.carousel_one');
      this.carousel2 = document.querySelector('.carousel_two');
      this.t1 = document.querySelector('.thumbnail_one');
      this.t2 = document.querySelector('.thumbnail_two');
      this.carousel = document.querySelectorAll('.main-content__carousel-indicator');
      this.t2.addEventListener('click', function () {
        _this.t1.classList.remove('thumbnail-active');

        _this.t2.classList.add('thumbnail-active');

        _this.img.src = "./src/img/profile-big/product2.jpg";
      });
      this.t1.addEventListener('click', function () {
        _this.t2.classList.remove('thumbnail-active');

        _this.t1.classList.add('thumbnail-active');

        _this.img.src = "./src/img/profile-big/product1.jpg";
      });

      for (var i = 0; i < this.arrow.length; i++) {
        this.arrow[i].addEventListener('click', function (e) {
          if (_this.img.src === _this.oldSrc) {
            _this.img.src = "./src/img/profile-big/product2.jpg";

            if (_this.carousel1.classList.contains('carousel__active')) {
              _this.carousel1.classList.remove('carousel__active');

              _this.carousel2.classList.add('carousel__active');
            }

            if (_this.t1.classList.contains('thumbnail-active')) {
              _this.t1.classList.remove('thumbnail-active');

              _this.t2.classList.add('thumbnail-active');
            }
          } else {
            _this.img.src = "./src/img/profile-big/product1.jpg";

            if (_this.carousel2.classList.contains('carousel__active')) {
              _this.carousel2.classList.remove('carousel__active');

              _this.carousel1.classList.add('carousel__active');
            }

            if (_this.t2.classList.contains('thumbnail-active')) {
              _this.t2.classList.remove('thumbnail-active');

              _this.t1.classList.add('thumbnail-active');
            }
          }
        });
        this.carousel[i].addEventListener('click', function (e) {
          if (_this.img.src === _this.oldSrc) {
            _this.img.src = "./src/img/profile-big/product2.jpg";

            if (_this.carousel1.classList.contains('carousel__active')) {
              _this.carousel1.classList.remove('carousel__active');

              _this.carousel2.classList.add('carousel__active');
            }
          } else {
            _this.img.src = "./src/img/profile-big/product1.jpg";

            if (_this.carousel2.classList.contains('carousel__active')) {
              _this.carousel2.classList.remove('carousel__active');

              _this.carousel1.classList.add('carousel__active');
            }
          }
        });
      }
    }
  };
  ChangeImg.init();
})();

/***/ }),

/***/ "./src/js/js-files/menu__active.js":
/*!*****************************************!*\
  !*** ./src/js/js-files/menu__active.js ***!
  \*****************************************/
/***/ (() => {

(function () {
  var ToggleMenu = {
    init: function init() {
      var _this = this;

      this.closeMenu = document.querySelector('.menu-active__close');
      this.burgerMenu = document.querySelector('.li__burger-menu');
      this.menu = document.querySelector('.menu-active');
      this.menuLi = document.querySelectorAll('.menu-active__li');
      this.burgerMenu.addEventListener('click', function () {
        _this.openMenu();
      });
      this.closeMenu.addEventListener('click', function () {
        _this.closeNavMenu();
      });
      this.menuLi.forEach(function (li) {
        li.addEventListener('click', function () {
          _this.closeNavMenu();
        });
      });
    },
    openMenu: function openMenu() {
      var _this2 = this;

      this.menu.classList.remove('menu-not-active');
      document.addEventListener('click', function (e) {
        if (e.clientX > _this2.menu.clientWidth) {
          _this2.menu.classList.add('menu-not-active');
        }
      });
    },
    closeNavMenu: function closeNavMenu() {
      this.menu.classList.add('menu-not-active');
    }
  };
  ToggleMenu.init();
})();

/***/ }),

/***/ "./src/js/js-files/search-form__open-close.js":
/*!****************************************************!*\
  !*** ./src/js/js-files/search-form__open-close.js ***!
  \****************************************************/
/***/ (() => {

(function () {
  var OpenSearchForm = {
    init: function init() {
      var _this = this;

      this.open = document.querySelector('.button-search');
      this.searchForm = document.querySelector('.search-form');
      this.close = document.querySelector('.close__search-form');
      this.searchFormMobile = document.querySelector('.button-search-mobile');
      this.open.addEventListener('click', function () {
        _this.searchForm.classList.add('active-form');

        document.addEventListener('click', function (e) {
          if (e.clientY > _this.searchForm.clientHeight) {
            _this.searchForm.classList.remove('active-form');
          }
        });
      });
      this.close.addEventListener('click', function () {
        _this.searchForm.classList.remove('active-form');
      });
      this.searchFormMobile.addEventListener('click', function () {
        _this.searchForm.classList.add('active-form');
      });
    }
  };
  OpenSearchForm.init();
})();

/***/ }),

/***/ "./src/js/js-files/search-form__value.js":
/*!***********************************************!*\
  !*** ./src/js/js-files/search-form__value.js ***!
  \***********************************************/
/***/ (() => {

(function () {
  var ShowItems = {
    init: function init() {
      var _this = this;

      this.input = document.querySelector('.input__search-form');
      this.value = document.querySelector('.input__search-form').value;
      this.items = document.querySelectorAll('.form__input');
      this.deleteInputValue = document.querySelector('.input__close-container');
      this.typing = '';
      this.input.addEventListener('keydown', function (e) {
        _this.checkField(e);
      });
      this.deleteInputValue.addEventListener('click', function () {
        _this.deleteField();
      });
    },
    checkField: function checkField(e) {
      if (e.key.length === 1) {
        this.typing += e.key;
        this.value = this.typing;
      } else if (e.code === 'Backspace') {
        this.typing = this.typing.substring(0, this.typing.length - 1);
      }

      console.log(this.typing);

      if (this.typing.length >= 1) {
        this.items.forEach(function (i) {
          if (i.classList.contains('hidden-items')) {
            i.classList.remove('hidden-items');
          }
        });
      } else if (this.typing.length === 0 || this.typing === '') {
        this.items.forEach(function (i) {
          if (!i.classList.contains('hidden-items')) {
            i.classList.add('hidden-items');
          }
        });
      }
    },
    deleteField: function deleteField() {
      this.typing = this.typing.substring(this.typing.length);
      this.input.value = '';

      if (this.input.value === '') {
        this.items.forEach(function (i) {
          if (!i.classList.contains('hidden-items')) {
            i.classList.add('hidden-items');
          }
        });
      }
    }
  };
  ShowItems.init();
})();

/***/ }),

/***/ "./src/js/js-files/show-projects.js":
/*!******************************************!*\
  !*** ./src/js/js-files/show-projects.js ***!
  \******************************************/
/***/ (() => {

(function () {
  var ShowProject = {
    init: function init() {
      var _this = this;

      this.button = document.querySelector('.projects-header__button');
      this.section = document.querySelector('.project');
      this.oldButton = this.button.textContent;
      this.newButton = 'Cacher les projets';
      this.button.addEventListener('click', function () {
        if (_this.section.classList.contains('hidden')) {
          _this.section.classList.remove('hidden');

          _this.button.textContent = _this.newButton;
        } else if (!_this.section.classList.contains('hidden')) {
          _this.section.classList.add('hidden');

          _this.button.textContent = _this.oldButton;
        }
      });
    }
  };
  ShowProject.init();
})();

/***/ }),

/***/ "./src/js/js-files/thumb.js":
/*!**********************************!*\
  !*** ./src/js/js-files/thumb.js ***!
  \**********************************/
/***/ (() => {

(function () {
  var thumb = {
    init: function init() {
      var _this = this;

      this.thumbs = document.querySelectorAll('.projet-thumbs__thumb');
      this.counter = document.querySelectorAll('.thumb_counter');
      this.p = document.querySelectorAll('.projet-thumbs__p');

      var _loop = function _loop(i) {
        _this.thumbs[i].addEventListener('click', function () {
          if (_this.counter[i].innerHTML === '0') {
            _this.counter[i].innerHTML = '1';

            _this.thumbs[i].classList.add('bounce');

            _this.p[i].classList.add('projet-thumbs__p_after');
          } else if (_this.counter[i].innerHTML !== '0') {
            _this.counter[i].innerHTML = '0';

            _this.thumbs[i].classList.remove('bounce');

            _this.p[i].classList.remove('projet-thumbs__p_after');
          }
        });
      };

      for (var i = 0; i < this.thumbs.length; i++) {
        _loop(i);
      }
    }
  };
  thumb.init();
})();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./js-files/img__carousel */ "./src/js/js-files/img__carousel.js");

__webpack_require__(/*! ./js-files/show-projects */ "./src/js/js-files/show-projects.js");

__webpack_require__(/*! ./js-files/accordion */ "./src/js/js-files/accordion.js");

__webpack_require__(/*! ./js-files/fill-heart */ "./src/js/js-files/fill-heart.js");

__webpack_require__(/*! ./js-files/thumb */ "./src/js/js-files/thumb.js");

__webpack_require__(/*! ./js-files/search-form__open-close */ "./src/js/js-files/search-form__open-close.js");

__webpack_require__(/*! ./js-files/search-form__value */ "./src/js/js-files/search-form__value.js");

__webpack_require__(/*! ./js-files/menu__active */ "./src/js/js-files/menu__active.js");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/js/main.js"],
/******/ 			["./src/css/style.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcv_maide_akdede"] = self["webpackChunkcv_maide_akdede"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;