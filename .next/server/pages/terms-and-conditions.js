module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/terms-and-conditions.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/elements/button.tsx":
/*!****************************************!*\
  !*** ./components/elements/button.tsx ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\elements\\button.tsx";

const Button = ({
  content,
  url
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    className: " text-white bg-primary-green hover:bg-light-blue",
    href: url,
    children: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/elements/heading.tsx":
/*!*****************************************!*\
  !*** ./components/elements/heading.tsx ***!
  \*****************************************/
/*! exports provided: H3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\elements\\heading.tsx";

const H3 = ({
  content
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
    className: "text-3xl uppercase text-white pb-8",
    children: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};



/***/ }),

/***/ "./components/elements/icon.tsx":
/*!**************************************!*\
  !*** ./components/elements/icon.tsx ***!
  \**************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\elements\\icon.tsx";


const Icon = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiFacebookCircleFill"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};



/***/ }),

/***/ "./components/elements/index.tsx":
/*!***************************************!*\
  !*** ./components/elements/index.tsx ***!
  \***************************************/
/*! exports provided: Icon, H3, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./components/elements/icon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading */ "./components/elements/heading.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return _heading__WEBPACK_IMPORTED_MODULE_1__["H3"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/elements/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_2__["Button"]; });





/***/ }),

/***/ "./components/layouts/single_column.tsx":
/*!**********************************************!*\
  !*** ./components/layouts/single_column.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\layouts\\single_column.tsx";

const SingleColumn = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto px-32",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleColumn);

/***/ }),

/***/ "./components/modules/footer.tsx":
/*!***************************************!*\
  !*** ./components/modules/footer.tsx ***!
  \***************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\footer.tsx";


const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "bg-light-blue mt-20",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col mx-auto w-max justify-center space-y-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row mx-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "h-36",
          src: "/RibbitAndRoo.png",
          alt: "RIBBIT & ROO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row mx-auto space-x-8 text-gray-400",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiFacebookCircleLine"], {
          className: "text-3xl hover:text-primary-green cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiInstagramLine"], {
          className: "text-3xl hover:text-primary-green cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiMailLine"], {
          className: "text-3xl hover:text-primary-green cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiPhoneLine"], {
          className: "text-3xl hover:text-primary-green cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center pt-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-gray-400 text-lg",
          children: "Ribbit & Roo \xA9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row space-x-8 text-gray-400 pb-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/terms-and-conditions",
          className: "hover:text-primary-green",
          children: "Terms"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/privacy-policy",
          className: "hover:text-primary-green",
          children: "Privacy Policy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/contact-us",
          className: "hover:text-primary-green",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/modules/hero.tsx":
/*!*************************************!*\
  !*** ./components/modules/hero.tsx ***!
  \*************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\hero.tsx";

const Hero = ({
  heading,
  subheading
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "h-96 mb-8",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-full w-full bg-cover bg-black bg-opacity-75",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "h-full w-full bg-cover bg-fixed bg-center bg-hero-image p-20 pt-48 text-white font-normal leading-loose uppercase",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "text-3xl",
          children: heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: subheading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/modules/icon-column.tsx":
/*!********************************************!*\
  !*** ./components/modules/icon-column.tsx ***!
  \********************************************/
/*! exports provided: IconColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconColumn", function() { return IconColumn; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ "./components/elements/index.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\icon-column.tsx";


const IconColumn = ({
  heading,
  content,
  buttonText,
  buttonURL
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "text-3xl uppercase text-white pb-8",
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      content: buttonText,
      url: buttonURL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/modules/index.tsx":
/*!**************************************!*\
  !*** ./components/modules/index.tsx ***!
  \**************************************/
/*! exports provided: Footer, Menu, Paragraph, Title, TextBlock, Hero, IconColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./components/modules/footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });

/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./components/modules/menu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_1__["Menu"]; });

/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraph */ "./components/modules/paragraph.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return _paragraph__WEBPACK_IMPORTED_MODULE_2__["Paragraph"]; });

/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./components/modules/title.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _title__WEBPACK_IMPORTED_MODULE_3__["Title"]; });

/* harmony import */ var _textblock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textblock */ "./components/modules/textblock.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextBlock", function() { return _textblock__WEBPACK_IMPORTED_MODULE_4__["TextBlock"]; });

/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero */ "./components/modules/hero.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_5__["Hero"]; });

/* harmony import */ var _icon_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon-column */ "./components/modules/icon-column.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconColumn", function() { return _icon_column__WEBPACK_IMPORTED_MODULE_6__["IconColumn"]; });









/***/ }),

/***/ "./components/modules/menu.tsx":
/*!*************************************!*\
  !*** ./components/modules/menu.tsx ***!
  \*************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\menu.tsx";

const Menu = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "bg-transparent fixed w-full",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative flex items-center h-16",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "absolute inset-y-0 left-0 sm:hidden",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
            "aria-controls": "mobile-menu",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "sr-only",
              children: "Open main menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "block h-6 w-6",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 6h16M4 12h16M4 18h16"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "hidden h-6 w-6",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-shrink-0 flex items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "h-8 w-auto",
            src: "/RibbitAndRoo.png",
            alt: "RIBBIT & ROO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            className: "text-white",
            children: "RIBBIT & ROO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-1 flex justify-end items-center sm:items-stretch",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "hidden justify-end sm:block sm:ml-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex space-x-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "bg-primary-green text-white px-3 py-2 rounded-md text-sm font-medium",
                "aria-current": "page",
                children: "Play Sessions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "text-white hover:bg-primary-green px-3 py-2 rounded-md text-sm font-medium",
                children: "Early Childcare Programs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "text-white hover:bg-primary-green px-3 py-2 rounded-md text-sm font-medium",
                children: "Gallery"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "text-white hover:bg-primary-green px-3 py-2 rounded-md text-sm font-medium",
                children: "Testamonials"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sm:hidden",
      id: "mobile-menu",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "px-2 pt-2 pb-3 space-y-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "bg-primary-green text-white block px-3 py-2 rounded-md text-base font-medium",
          "aria-current": "page",
          children: "Play Sessions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Early Childhood Programs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Gallery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Testamonials"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/modules/paragraph.tsx":
/*!******************************************!*\
  !*** ./components/modules/paragraph.tsx ***!
  \******************************************/
/*! exports provided: Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\paragraph.tsx";

const Paragraph = ({
  children,
  heading
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "uppercase text-xl mb-4",
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mb-8",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};



/***/ }),

/***/ "./components/modules/textblock.tsx":
/*!******************************************!*\
  !*** ./components/modules/textblock.tsx ***!
  \******************************************/
/*! exports provided: TextBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlock", function() { return TextBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\textblock.tsx";

const TextBlock = ({
  heading,
  content
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: " bg-primary-green",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row mx-auto justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "text-3xl uppercase text-white pb-8",
          children: heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/modules/title.tsx":
/*!**************************************!*\
  !*** ./components/modules/title.tsx ***!
  \**************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\title.tsx";

const Title = ({
  heading,
  subheading
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "h-96 mb-8",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-full w-full bg-cover bg-black bg-opacity-75",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "h-full w-full bg-cover bg-fixed bg-center bg-hero-image p-20 pt-48 text-white font-normal leading-loose uppercase",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "text-3xl",
          children: heading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: subheading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/templates/page.tsx":
/*!***************************************!*\
  !*** ./components/templates/page.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules */ "./components/modules/index.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\templates\\page.tsx";



const PageTemplate = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Ribbit & Roo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules__WEBPACK_IMPORTED_MODULE_2__["Menu"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules__WEBPACK_IMPORTED_MODULE_2__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PageTemplate);

/***/ }),

/***/ "./pages/terms-and-conditions.tsx":
/*!****************************************!*\
  !*** ./pages/terms-and-conditions.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Terms; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/page */ "./components/templates/page.tsx");
/* harmony import */ var _components_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules */ "./components/modules/index.tsx");
/* harmony import */ var _components_layouts_single_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/single_column */ "./components/layouts/single_column.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\pages\\terms-and-conditions.tsx";



function Terms() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_templates_page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      heading: "Terms and Conditions",
      subheading: "The small print"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_single_column__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "TERMS & CONDITIONS",
        children: "Please read these terms carefully before you book any of our Ribbit & Roo play sessions. These terms tell you about Ribbit & Roo, how we will provide play sessions to you, how you or Ribbit & Roo may change or end the contract, what to do if there is an issue and other important information. If you think that there is a mistake in these terms, please contact us at jennyh@ribbitandroo.com.au to discuss."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "ACCEPTANCE OF TERMS & CONDITIONS",
        children: "All those who wish to attend any Ribbit & Roo play session must agree to the terms and conditions set out below. These are the terms and conditions which we provide Ribbit & Roo play sessions to you and your child(ren). No variation or addition to the terms shall be binding unless agreed in writing by Ribbit & Roo and the parent. In the unlikely event of a customer failing to abide by these terms and conditions, a customer may be requested to discontinue with any Ribbit & Roo play session. In this instance Ribbit & Roo will be under no obligation to provide a refund for any outstanding lessons. The Parent must agree to keep the play session's content confidential and not to copy or use any content of the program directly or indirectly. At the time of publishing all session information is correct."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "ENROLMENTS, PAYMENT & CANCELLATIONS",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Enrolments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Enrolments will not be accepted without payment. Please ensure you have transferred the funds for your 10 week enrolment before your child\u2019s first session. Also please ensure you have read and understood the enrolment, payment & cancellations policy and the refund & missed session policy. You can book a Ribbit & Roo play session by visiting www.ribbitandroo.com.au/play-sessions and by registering using our registration form. You must provide us with the specific information we need in order to enrol in a session with us. During the enrolment process, you will be asked to read and agree to our Terms and Conditions (this document). Once registered, Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your chosen play session. You are eligible for a free trial session when registering. When registering for a free trial you must press the 'Register for a Free Trial' button to submit your details. Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your free trial play session. After completing your play session free trial, if you choose to enrol in a 10 week Ribbit & Roo program you must re register at www.ribbitandroo.com.au/play-sessions and submit 'Register and Book'. This will transfer you to the payment page. Please note, that if you wish to enrol after your free trial we cannot guarantee that there will be available spaces in our 10 week program. Our play sessions are open to enrolments until we are sold out."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["The 10 week term is paid for in advance and must be paid in full prior to you child attending their first session. If you wish to re enrol for our next 10 week term you can do so by registering at www.ribbitandroo.com.au/play-sessions and submitting the button 'Register and Book'. It is your responsibility to make sure that there are sufficient funds in your account and that the saved card is valid. If a payment has failed, you will be notified and another form of payment/credit card must be used. The Fee is non-refundable under any circumstances whatsoever except with the prior written agreement of Ribbit & Roo. If the cost of the sessions change you will be notified prior to the start of the following term.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), "We will accept the following methods of payment: Visa, MasterCard and American Express"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["All refund requests must be in writing to Jenny at jennyh@ribbitandroo.com.au.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), "Cancellation by Ribbit & Roo - Ribbit & Roo may cancel this contract at any time before the child commences the 10 week program for any reason whatsoever. Ribbit & Roo shall not be liable for any loss or damage whatsoever arising from such cancellation. In the event of cancellation by Ribbit & Roo prior to the commencement of the 10 week program, Ribbit & Roo will refund any fees for outstanding sessions. If classes are cancelled as a result of extreme weather conditions or where local authorities/public guidance advise that sessions should be temporarily suspended for health or other reasons, then a make up lesson will be granted. Please see the make up lesson policy. In the event of a 'last minute' lesson change or a lesson cancellation by Ribbit & Roo, we will notify you with as much notice as possible. Ribbit & Roo will not reimburse any expenses incurred by a customer failing to acknowledge this communication. Should you decide to leave an enrolled Ribbit & Roo program before the make up lesson credit has been used we will refund the credit to you. If insufficient children are booked into your session, we reserve the right to cancel or change the class. In this instance we will offer you either an alternative session to attend or a refund will be given for any remaining sessions after the cancellation."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "Attendance",
        children: "Your payment has reserved your place just for you so if you know you are unable to attend a lesson, please let us know with as much notice as possible by emailing or telephoning Jenny at jennyh@ribbitandroo.com.au or +61406603583. The Parent/carer understands that sessions are ongoing and to be used consecutively. No credits or refunds will be issued for missed classes. No refunds will be given if you change your mind about your child participating in the program. Class attendance has been limited to 10 children per class. If the play sessions reach capacity we will update our booking system to stop all new enrolments until the following term."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "MAKE UP LESSONS & BONUS SESSIONS",
        children: ["If you cannot attend a lesson and notify us prior to your session you are eligible for a make up lesson. This make up lesson must be used in another session other than your scheduled day (e.g. if you attend on a Tuesday, your make up lesson must be used in an available Wednesday session). A maximum of 2 make up lessons can be used in a 10 week period. Make up lessons will be arranged for any cancellations made by Ribbit & Roo for severe weather, sick staff members or reasons we feel are of danger to our participants and staff members.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), "If you are entitled to a free bonus session after enrolling with Ribbit & Roo, there will be a added session at the end of your 10 week program available for you to book. Bonus sessions should be booked with as much notice as possible."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "HEALTH & SAFETY",
        children: "The safety of all the children attending our play sessions is of the greatest importance to us. Due to the nature of the play sessions and the age of the child(ren) attending, your child(ren) remain your responsibility while attending and must be supervised throughout. If you leave the play session venue for any reason you must take your child(ren) with you. We accept no responsibility for any injury caused during a play session. Please be advised that we have a first aid kit on site and first aid will be given to your child in the event an accident/injury occurs at a play session. We accept no responsibility for any belongings that get lost or damaged. We politely ask that parents and children do not attend if either are feeling unwell. We are a smoke free zone for the safety of our participating children and families and the surrounding environment. Any parents/carers who are seen smoking at the time of a play session will be asked to leave the play session with their child."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "PHOTOGRPAHY & SOCIAL MEDIA",
        children: "Please be aware that by enrolling your child(ren) in any Ribbit & Roo Play Session program, you are granting us permission to photograph or record short video clips of your child(ren) during the play sessions that we may use for Ribbit & Roo promotional purposes on our social media and/or website. No data under any circumstance will be passed over to a third party. If you do not wish to provide consent for this then you need to notify Jenny in writing at jennyh@ribbitandroo.com.au and notify Jenny in person at your play session."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
        heading: "CONTACT",
        children: "For specific questions about Ribbit & Roo play sessions, please contact Jenny directly at jennyh@ribbitandroo.com.au. If we have to contact you we will do so in writing with the email address you provided us in your registration, or by telephone or text message with the phone number you provided us in your registration."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lbGVtZW50cy9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZWxlbWVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lbGVtZW50cy9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VsZW1lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvc2luZ2xlX2NvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL2hlcm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kdWxlcy9pY29uLWNvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZHVsZXMvbWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3BhcmFncmFwaC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3RleHRibG9jay50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3RpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXJtcy1hbmQtY29uZGl0aW9ucy50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJjb250ZW50IiwidXJsIiwiSDMiLCJJY29uIiwiU2luZ2xlQ29sdW1uIiwiY2hpbGRyZW4iLCJGb290ZXIiLCJIZXJvIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJJY29uQ29sdW1uIiwiYnV0dG9uVGV4dCIsImJ1dHRvblVSTCIsIk1lbnUiLCJQYXJhZ3JhcGgiLCJUZXh0QmxvY2siLCJUaXRsZSIsIlBhZ2VUZW1wbGF0ZSIsIlRlcm1zIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxTQUFGO0FBQVdDO0FBQVgsQ0FBRCxLQUFtQztBQUNoRCxzQkFDRTtBQUFHLGFBQVMsRUFBQyxrREFBYjtBQUFnRSxRQUFJLEVBQUVBLEdBQXRFO0FBQUEsY0FDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOzs7Ozs7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LGVBa0dFLHFFQUFDLDZEQUFEO0FBQVcsZUFBTyxFQUFDLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEdGLGVBOEdFLHFFQUFDLDZEQUFEO0FBQVcsZUFBTyxFQUFDLGtDQUFuQjtBQUFBLGdrQkFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlHRixlQTZIRSxxRUFBQyw2REFBRDtBQUFXLGVBQU8sRUFBQyxpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3SEYsZUE4SUUscUVBQUMsNkRBQUQ7QUFBVyxlQUFPLEVBQUMsNEJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUlGLGVBeUpFLHFFQUFDLDZEQUFEO0FBQVcsZUFBTyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0tELEM7Ozs7Ozs7Ozs7O0FDM0tELHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Rlcm1zLWFuZC1jb25kaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy90ZXJtcy1hbmQtY29uZGl0aW9ucy50c3hcIik7XG4iLCJ0eXBlIEJ1dHRvblByb3BzID0ge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNvbnRlbnQsIHVybCB9OiBCdXR0b25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBiZy1wcmltYXJ5LWdyZWVuIGhvdmVyOmJnLWxpZ2h0LWJsdWVcIiBocmVmPXt1cmx9PlxyXG4gICAgICB7Y29udGVudH1cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgQnV0dG9uIH07XHJcbiIsInR5cGUgSFByb3BzID0ge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEgzID0gKHsgY29udGVudCB9OiBIUHJvcHMpID0+IHtcclxuICByZXR1cm4gPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBiLThcIj57Y29udGVudH08L2gzPjtcclxufTtcclxuXHJcbmV4cG9ydCB7IEgzIH07XHJcbiIsImltcG9ydCB7IFJpRmFjZWJvb2tDaXJjbGVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcblxyXG5jb25zdCBJY29uID0gKCkgPT4ge1xyXG4gIHJldHVybiA8UmlGYWNlYm9va0NpcmNsZUZpbGwgLz47XHJcbn07XHJcblxyXG5leHBvcnQgeyBJY29uIH07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2ljb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVhZGluZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9idXR0b25cIjtcclxuIiwidHlwZSBTaW5nbGVDb2x1bW5Qcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuY29uc3QgU2luZ2xlQ29sdW1uID0gKHsgY2hpbGRyZW4gfTogU2luZ2xlQ29sdW1uUHJvcHMpID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0zMlwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvbHVtbjtcclxuIiwiaW1wb3J0IHtcclxuICBSaUZhY2Vib29rQ2lyY2xlTGluZSxcclxuICBSaUluc3RhZ3JhbUxpbmUsXHJcbiAgUmlNYWlsTGluZSxcclxuICBSaVBob25lTGluZSxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1saWdodC1ibHVlIG10LTIwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteC1hdXRvIHctbWF4IGp1c3RpZnktY2VudGVyIHNwYWNlLXktMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMzZcIlxyXG4gICAgICAgICAgICBzcmM9XCIvUmliYml0QW5kUm9vLnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlJJQkJJVCAmYW1wOyBST09cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbXgtYXV0byBzcGFjZS14LTggdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgPFJpRmFjZWJvb2tDaXJjbGVMaW5lIGNsYXNzTmFtZT1cInRleHQtM3hsIGhvdmVyOnRleHQtcHJpbWFyeS1ncmVlbiBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICA8UmlJbnN0YWdyYW1MaW5lIGNsYXNzTmFtZT1cInRleHQtM3hsIGhvdmVyOnRleHQtcHJpbWFyeS1ncmVlbiBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICA8UmlNYWlsTGluZSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBob3Zlcjp0ZXh0LXByaW1hcnktZ3JlZW4gY3Vyc29yLXBvaW50ZXJcIiAvPlxyXG4gICAgICAgICAgPFJpUGhvbmVMaW5lIGNsYXNzTmFtZT1cInRleHQtM3hsIGhvdmVyOnRleHQtcHJpbWFyeS1ncmVlbiBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LThcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1sZ1wiPlJpYmJpdCAmYW1wOyBSb28gwqk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtOCB0ZXh0LWdyYXktNDAwIHBiLThcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvdGVybXMtYW5kLWNvbmRpdGlvbnNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnktZ3JlZW5cIj5cclxuICAgICAgICAgICAgVGVybXNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnktZ3JlZW5cIj5cclxuICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvY29udGFjdC11c1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeS1ncmVlblwiPlxyXG4gICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEZvb3RlciB9O1xyXG4iLCJ0eXBlIEhlcm9Qcm9wcyA9IHtcclxuICBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgc3ViaGVhZGluZzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgSGVybyA9ICh7IGhlYWRpbmcsIHN1YmhlYWRpbmcgfTogSGVyb1Byb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtOTYgbWItOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgYmctY292ZXIgYmctYmxhY2sgYmctb3BhY2l0eS03NVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBiZy1jb3ZlciBiZy1maXhlZCBiZy1jZW50ZXIgYmctaGVyby1pbWFnZSBwLTIwIHB0LTQ4IHRleHQtd2hpdGUgZm9udC1ub3JtYWwgbGVhZGluZy1sb29zZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPntoZWFkaW5nfTwvaDM+XHJcbiAgICAgICAgICA8cD57c3ViaGVhZGluZ308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIZXJvIH07XHJcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xyXG5cclxudHlwZSBJY29uQ29sdW1uUHJvcHMgPSB7XHJcbiAgaGVhZGluZzogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBidXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgYnV0dG9uVVJMOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBJY29uQ29sdW1uID0gKHtcclxuICBoZWFkaW5nLFxyXG4gIGNvbnRlbnQsXHJcbiAgYnV0dG9uVGV4dCxcclxuICBidXR0b25VUkwsXHJcbn06IEljb25Db2x1bW5Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogaWNvbiAqL31cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBiLThcIj57aGVhZGluZ308L2gzPlxyXG4gICAgICA8QnV0dG9uIGNvbnRlbnQ9e2J1dHRvblRleHR9IHVybD17YnV0dG9uVVJMfT48L0J1dHRvbj5cclxuICAgICAgPHA+e2NvbnRlbnR9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEljb25Db2x1bW4gfTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFyYWdyYXBoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RpdGxlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRibG9ja1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZXJvXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ljb24tY29sdW1uXCI7XHJcbiIsImNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgZml4ZWQgdy1mdWxsXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBoLTE2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgc206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIHsvKk1vYmlsZSBtZW51IGJ1dHRvbiovfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtd2hpdGUgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHsvKlxyXG4gICAgICBJY29uIHdoZW4gbWVudSBpcyBjbG9zZWQuXHJcblxyXG4gICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL21lbnVcclxuXHJcbiAgICAgIE1lbnUgb3BlbjogXCJoaWRkZW5cIiwgTWVudSBjbG9zZWQ6IFwiYmxvY2tcIlxyXG4gICAgKi99XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIHsvKlxyXG4gICAgICBJY29uIHdoZW4gbWVudSBpcyBvcGVuLlxyXG5cclxuICAgICAgSGVyb2ljb24gbmFtZTogb3V0bGluZS94XHJcblxyXG4gICAgICBNZW51IG9wZW46IFwiYmxvY2tcIiwgTWVudSBjbG9zZWQ6IFwiaGlkZGVuXCJcclxuICAqL31cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gaC02IHctNlwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy1hdXRvXCJcclxuICAgICAgICAgICAgICBzcmM9XCIvUmliYml0QW5kUm9vLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUklCQklUICZhbXA7IFJPT1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIFJJQkJJVCAmYW1wOyBST09cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBzbTppdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGp1c3RpZnktZW5kIHNtOmJsb2NrIHNtOm1sLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogQ3VycmVudDogXCJiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCIsIERlZmF1bHQ6IFwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWdyZWVuIHRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQbGF5IFNlc3Npb25zXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVhcmx5IENoaWxkY2FyZSBQcm9ncmFtc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFRlc3RhbW9uaWFsc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKk1vYmlsZSBtZW51LCBzaG93L2hpZGUgYmFzZWQgb24gbWVudSBzdGF0ZS4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206aGlkZGVuXCIgaWQ9XCJtb2JpbGUtbWVudVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICB7LypDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAqL31cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeS1ncmVlbiB0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQbGF5IFNlc3Npb25zXHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gaG92ZXI6dGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFYXJseSBDaGlsZGhvb2QgUHJvZ3JhbXNcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdhbGxlcnlcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRlc3RhbW9uaWFsc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBNZW51IH07XHJcbiIsInR5cGUgUGFyYWdyYXBoUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBoZWFkaW5nOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBQYXJhZ3JhcGggPSAoeyBjaGlsZHJlbiwgaGVhZGluZyB9OiBQYXJhZ3JhcGhQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPntoZWFkaW5nfTwvaDI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IHsgUGFyYWdyYXBoIH07XHJcbiIsInR5cGUgVGV4dEJsb2NrUHJvcHMgPSB7XHJcbiAgaGVhZGluZzogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFRleHRCbG9jayA9ICh7IGhlYWRpbmcsIGNvbnRlbnQgfTogVGV4dEJsb2NrUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiIGJnLXByaW1hcnktZ3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG14LWF1dG8ganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB1cHBlcmNhc2UgdGV4dC13aGl0ZSBwYi04XCI+e2hlYWRpbmd9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD57Y29udGVudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBUZXh0QmxvY2sgfTtcclxuIiwidHlwZSBUaXRsZVByb3BzID0ge1xyXG4gIGhlYWRpbmc6IHN0cmluZztcclxuICBzdWJoZWFkaW5nOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBUaXRsZSA9ICh7IGhlYWRpbmcsIHN1YmhlYWRpbmcgfTogVGl0bGVQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLTk2IG1iLThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGJnLWNvdmVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNzVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgYmctY292ZXIgYmctZml4ZWQgYmctY2VudGVyIGJnLWhlcm8taW1hZ2UgcC0yMCBwdC00OCB0ZXh0LXdoaXRlIGZvbnQtbm9ybWFsIGxlYWRpbmctbG9vc2UgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57aGVhZGluZ308L2gzPlxyXG4gICAgICAgICAgPHA+e3N1YmhlYWRpbmd9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgVGl0bGUgfTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNZW51LCBGb290ZXIgfSBmcm9tIFwiLi4vbW9kdWxlc1wiO1xyXG5cclxudHlwZSBQYWdlUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufTtcclxuXHJcbmNvbnN0IFBhZ2VUZW1wbGF0ZSA9ICh7IGNoaWxkcmVuIH06IFBhZ2VQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SaWJiaXQgJmFtcDsgUm9vPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRlbXBsYXRlO1xyXG4iLCJpbXBvcnQgUGFnZVRlbXBsYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL3RlbXBsYXRlcy9wYWdlXCI7XHJcbmltcG9ydCB7IFRpdGxlLCBQYXJhZ3JhcGggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2R1bGVzXCI7XHJcbmltcG9ydCBTaW5nbGVDb2x1bW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9zaW5nbGVfY29sdW1uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXJtcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VUZW1wbGF0ZT5cclxuICAgICAgPFRpdGxlIGhlYWRpbmc9XCJUZXJtcyBhbmQgQ29uZGl0aW9uc1wiIHN1YmhlYWRpbmc9XCJUaGUgc21hbGwgcHJpbnRcIiAvPlxyXG4gICAgICA8U2luZ2xlQ29sdW1uPlxyXG4gICAgICAgIDxQYXJhZ3JhcGggaGVhZGluZz1cIlRFUk1TICZhbXA7IENPTkRJVElPTlNcIj5cclxuICAgICAgICAgIFBsZWFzZSByZWFkIHRoZXNlIHRlcm1zIGNhcmVmdWxseSBiZWZvcmUgeW91IGJvb2sgYW55IG9mIG91ciBSaWJiaXRcclxuICAgICAgICAgICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zLiBUaGVzZSB0ZXJtcyB0ZWxsIHlvdSBhYm91dCBSaWJiaXQgJmFtcDsgUm9vLFxyXG4gICAgICAgICAgaG93IHdlIHdpbGwgcHJvdmlkZSBwbGF5IHNlc3Npb25zIHRvIHlvdSwgaG93IHlvdSBvciBSaWJiaXQgJmFtcDsgUm9vXHJcbiAgICAgICAgICBtYXkgY2hhbmdlIG9yIGVuZCB0aGUgY29udHJhY3QsIHdoYXQgdG8gZG8gaWYgdGhlcmUgaXMgYW4gaXNzdWUgYW5kXHJcbiAgICAgICAgICBvdGhlciBpbXBvcnRhbnQgaW5mb3JtYXRpb24uIElmIHlvdSB0aGluayB0aGF0IHRoZXJlIGlzIGEgbWlzdGFrZSBpblxyXG4gICAgICAgICAgdGhlc2UgdGVybXMsIHBsZWFzZSBjb250YWN0IHVzIGF0IGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1IHRvXHJcbiAgICAgICAgICBkaXNjdXNzLlxyXG4gICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgIDxQYXJhZ3JhcGggaGVhZGluZz1cIkFDQ0VQVEFOQ0UgT0YgVEVSTVMgJmFtcDsgQ09ORElUSU9OU1wiPlxyXG4gICAgICAgICAgQWxsIHRob3NlIHdobyB3aXNoIHRvIGF0dGVuZCBhbnkgUmliYml0ICZhbXA7IFJvbyBwbGF5IHNlc3Npb24gbXVzdFxyXG4gICAgICAgICAgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIHNldCBvdXQgYmVsb3cuIFRoZXNlIGFyZSB0aGUgdGVybXNcclxuICAgICAgICAgIGFuZCBjb25kaXRpb25zIHdoaWNoIHdlIHByb3ZpZGUgUmliYml0ICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zIHRvIHlvdVxyXG4gICAgICAgICAgYW5kIHlvdXIgY2hpbGQocmVuKS4gTm8gdmFyaWF0aW9uIG9yIGFkZGl0aW9uIHRvIHRoZSB0ZXJtcyBzaGFsbCBiZVxyXG4gICAgICAgICAgYmluZGluZyB1bmxlc3MgYWdyZWVkIGluIHdyaXRpbmcgYnkgUmliYml0ICZhbXA7IFJvbyBhbmQgdGhlIHBhcmVudC5cclxuICAgICAgICAgIEluIHRoZSB1bmxpa2VseSBldmVudCBvZiBhIGN1c3RvbWVyIGZhaWxpbmcgdG8gYWJpZGUgYnkgdGhlc2UgdGVybXNcclxuICAgICAgICAgIGFuZCBjb25kaXRpb25zLCBhIGN1c3RvbWVyIG1heSBiZSByZXF1ZXN0ZWQgdG8gZGlzY29udGludWUgd2l0aCBhbnlcclxuICAgICAgICAgIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9uLiBJbiB0aGlzIGluc3RhbmNlIFJpYmJpdCAmYW1wOyBSb28gd2lsbFxyXG4gICAgICAgICAgYmUgdW5kZXIgbm8gb2JsaWdhdGlvbiB0byBwcm92aWRlIGEgcmVmdW5kIGZvciBhbnkgb3V0c3RhbmRpbmdcclxuICAgICAgICAgIGxlc3NvbnMuIFRoZSBQYXJlbnQgbXVzdCBhZ3JlZSB0byBrZWVwIHRoZSBwbGF5IHNlc3Npb24ncyBjb250ZW50XHJcbiAgICAgICAgICBjb25maWRlbnRpYWwgYW5kIG5vdCB0byBjb3B5IG9yIHVzZSBhbnkgY29udGVudCBvZiB0aGUgcHJvZ3JhbVxyXG4gICAgICAgICAgZGlyZWN0bHkgb3IgaW5kaXJlY3RseS4gQXQgdGhlIHRpbWUgb2YgcHVibGlzaGluZyBhbGwgc2Vzc2lvblxyXG4gICAgICAgICAgaW5mb3JtYXRpb24gaXMgY29ycmVjdC5cclxuICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJFTlJPTE1FTlRTLCBQQVlNRU5UICZhbXA7IENBTkNFTExBVElPTlNcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1sIG1iLTJcIj5FbnJvbG1lbnRzPC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgRW5yb2xtZW50cyB3aWxsIG5vdCBiZSBhY2NlcHRlZCB3aXRob3V0IHBheW1lbnQuIFBsZWFzZSBlbnN1cmUgeW91XHJcbiAgICAgICAgICAgIGhhdmUgdHJhbnNmZXJyZWQgdGhlIGZ1bmRzIGZvciB5b3VyIDEwIHdlZWsgZW5yb2xtZW50IGJlZm9yZSB5b3VyXHJcbiAgICAgICAgICAgIGNoaWxk4oCZcyBmaXJzdCBzZXNzaW9uLiBBbHNvIHBsZWFzZSBlbnN1cmUgeW91IGhhdmUgcmVhZCBhbmRcclxuICAgICAgICAgICAgdW5kZXJzdG9vZCB0aGUgZW5yb2xtZW50LCBwYXltZW50ICZhbXA7IGNhbmNlbGxhdGlvbnMgcG9saWN5IGFuZCB0aGVcclxuICAgICAgICAgICAgcmVmdW5kICZhbXA7IG1pc3NlZCBzZXNzaW9uIHBvbGljeS4gWW91IGNhbiBib29rIGEgUmliYml0ICZhbXA7IFJvb1xyXG4gICAgICAgICAgICBwbGF5IHNlc3Npb24gYnkgdmlzaXRpbmcgd3d3LnJpYmJpdGFuZHJvby5jb20uYXUvcGxheS1zZXNzaW9ucyBhbmRcclxuICAgICAgICAgICAgYnkgcmVnaXN0ZXJpbmcgdXNpbmcgb3VyIHJlZ2lzdHJhdGlvbiBmb3JtLiBZb3UgbXVzdCBwcm92aWRlIHVzIHdpdGhcclxuICAgICAgICAgICAgdGhlIHNwZWNpZmljIGluZm9ybWF0aW9uIHdlIG5lZWQgaW4gb3JkZXIgdG8gZW5yb2wgaW4gYSBzZXNzaW9uIHdpdGhcclxuICAgICAgICAgICAgdXMuIER1cmluZyB0aGUgZW5yb2xtZW50IHByb2Nlc3MsIHlvdSB3aWxsIGJlIGFza2VkIHRvIHJlYWQgYW5kXHJcbiAgICAgICAgICAgIGFncmVlIHRvIG91ciBUZXJtcyBhbmQgQ29uZGl0aW9ucyAodGhpcyBkb2N1bWVudCkuIE9uY2UgcmVnaXN0ZXJlZCxcclxuICAgICAgICAgICAgUmliYml0ICZhbXA7IFJvbyB3aWxsIHJlY2VpdmUgYSBjb25maXJtYXRpb24gZW1haWwgd2l0aCB5b3VyIGRldGFpbHNcclxuICAgICAgICAgICAgYW5kIHdpbGwgY29udGFjdCB5b3Ugd2l0aCBmdXJ0aGVyIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY2hvc2VuIHBsYXlcclxuICAgICAgICAgICAgc2Vzc2lvbi4gWW91IGFyZSBlbGlnaWJsZSBmb3IgYSBmcmVlIHRyaWFsIHNlc3Npb24gd2hlbiByZWdpc3RlcmluZy5cclxuICAgICAgICAgICAgV2hlbiByZWdpc3RlcmluZyBmb3IgYSBmcmVlIHRyaWFsIHlvdSBtdXN0IHByZXNzIHRoZSAnUmVnaXN0ZXIgZm9yIGFcclxuICAgICAgICAgICAgRnJlZSBUcmlhbCcgYnV0dG9uIHRvIHN1Ym1pdCB5b3VyIGRldGFpbHMuIFJpYmJpdCAmYW1wOyBSb28gd2lsbFxyXG4gICAgICAgICAgICByZWNlaXZlIGEgY29uZmlybWF0aW9uIGVtYWlsIHdpdGggeW91ciBkZXRhaWxzIGFuZCB3aWxsIGNvbnRhY3QgeW91XHJcbiAgICAgICAgICAgIHdpdGggZnVydGhlciBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGZyZWUgdHJpYWwgcGxheSBzZXNzaW9uLiBBZnRlclxyXG4gICAgICAgICAgICBjb21wbGV0aW5nIHlvdXIgcGxheSBzZXNzaW9uIGZyZWUgdHJpYWwsIGlmIHlvdSBjaG9vc2UgdG8gZW5yb2wgaW4gYVxyXG4gICAgICAgICAgICAxMCB3ZWVrIFJpYmJpdCAmYW1wOyBSb28gcHJvZ3JhbSB5b3UgbXVzdCByZSByZWdpc3RlciBhdFxyXG4gICAgICAgICAgICB3d3cucmliYml0YW5kcm9vLmNvbS5hdS9wbGF5LXNlc3Npb25zIGFuZCBzdWJtaXQgJ1JlZ2lzdGVyIGFuZFxyXG4gICAgICAgICAgICBCb29rJy4gVGhpcyB3aWxsIHRyYW5zZmVyIHlvdSB0byB0aGUgcGF5bWVudCBwYWdlLiBQbGVhc2Ugbm90ZSwgdGhhdFxyXG4gICAgICAgICAgICBpZiB5b3Ugd2lzaCB0byBlbnJvbCBhZnRlciB5b3VyIGZyZWUgdHJpYWwgd2UgY2Fubm90IGd1YXJhbnRlZSB0aGF0XHJcbiAgICAgICAgICAgIHRoZXJlIHdpbGwgYmUgYXZhaWxhYmxlIHNwYWNlcyBpbiBvdXIgMTAgd2VlayBwcm9ncmFtLiBPdXIgcGxheVxyXG4gICAgICAgICAgICBzZXNzaW9ucyBhcmUgb3BlbiB0byBlbnJvbG1lbnRzIHVudGlsIHdlIGFyZSBzb2xkIG91dC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1sIG1iLTJcIj5QYXltZW50czwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgIFRoZSAxMCB3ZWVrIHRlcm0gaXMgcGFpZCBmb3IgaW4gYWR2YW5jZSBhbmQgbXVzdCBiZSBwYWlkIGluIGZ1bGxcclxuICAgICAgICAgICAgcHJpb3IgdG8geW91IGNoaWxkIGF0dGVuZGluZyB0aGVpciBmaXJzdCBzZXNzaW9uLiBJZiB5b3Ugd2lzaCB0byByZVxyXG4gICAgICAgICAgICBlbnJvbCBmb3Igb3VyIG5leHQgMTAgd2VlayB0ZXJtIHlvdSBjYW4gZG8gc28gYnkgcmVnaXN0ZXJpbmcgYXRcclxuICAgICAgICAgICAgd3d3LnJpYmJpdGFuZHJvby5jb20uYXUvcGxheS1zZXNzaW9ucyBhbmQgc3VibWl0dGluZyB0aGUgYnV0dG9uXHJcbiAgICAgICAgICAgICdSZWdpc3RlciBhbmQgQm9vaycuIEl0IGlzIHlvdXIgcmVzcG9uc2liaWxpdHkgdG8gbWFrZSBzdXJlIHRoYXRcclxuICAgICAgICAgICAgdGhlcmUgYXJlIHN1ZmZpY2llbnQgZnVuZHMgaW4geW91ciBhY2NvdW50IGFuZCB0aGF0IHRoZSBzYXZlZCBjYXJkXHJcbiAgICAgICAgICAgIGlzIHZhbGlkLiBJZiBhIHBheW1lbnQgaGFzIGZhaWxlZCwgeW91IHdpbGwgYmUgbm90aWZpZWQgYW5kIGFub3RoZXJcclxuICAgICAgICAgICAgZm9ybSBvZiBwYXltZW50L2NyZWRpdCBjYXJkIG11c3QgYmUgdXNlZC4gVGhlIEZlZSBpcyBub24tcmVmdW5kYWJsZVxyXG4gICAgICAgICAgICB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcyB3aGF0c29ldmVyIGV4Y2VwdCB3aXRoIHRoZSBwcmlvciB3cml0dGVuXHJcbiAgICAgICAgICAgIGFncmVlbWVudCBvZiBSaWJiaXQgJmFtcDsgUm9vLiBJZiB0aGUgY29zdCBvZiB0aGUgc2Vzc2lvbnMgY2hhbmdlXHJcbiAgICAgICAgICAgIHlvdSB3aWxsIGJlIG5vdGlmaWVkIHByaW9yIHRvIHRoZSBzdGFydCBvZiB0aGUgZm9sbG93aW5nIHRlcm0uXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICBXZSB3aWxsIGFjY2VwdCB0aGUgZm9sbG93aW5nIG1ldGhvZHMgb2YgcGF5bWVudDogVmlzYSwgTWFzdGVyQ2FyZFxyXG4gICAgICAgICAgICBhbmQgQW1lcmljYW4gRXhwcmVzc1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPlBheW1lbnRzPC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgQWxsIHJlZnVuZCByZXF1ZXN0cyBtdXN0IGJlIGluIHdyaXRpbmcgdG8gSmVubnkgYXRcclxuICAgICAgICAgICAgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUuXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICBDYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyAtIFJpYmJpdCAmYW1wOyBSb28gbWF5IGNhbmNlbCB0aGlzXHJcbiAgICAgICAgICAgIGNvbnRyYWN0IGF0IGFueSB0aW1lIGJlZm9yZSB0aGUgY2hpbGQgY29tbWVuY2VzIHRoZSAxMCB3ZWVrIHByb2dyYW1cclxuICAgICAgICAgICAgZm9yIGFueSByZWFzb24gd2hhdHNvZXZlci4gUmliYml0ICZhbXA7IFJvbyBzaGFsbCBub3QgYmUgbGlhYmxlIGZvclxyXG4gICAgICAgICAgICBhbnkgbG9zcyBvciBkYW1hZ2Ugd2hhdHNvZXZlciBhcmlzaW5nIGZyb20gc3VjaCBjYW5jZWxsYXRpb24uIEluIHRoZVxyXG4gICAgICAgICAgICBldmVudCBvZiBjYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyBwcmlvciB0byB0aGUgY29tbWVuY2VtZW50XHJcbiAgICAgICAgICAgIG9mIHRoZSAxMCB3ZWVrIHByb2dyYW0sIFJpYmJpdCAmYW1wOyBSb28gd2lsbCByZWZ1bmQgYW55IGZlZXMgZm9yXHJcbiAgICAgICAgICAgIG91dHN0YW5kaW5nIHNlc3Npb25zLiBJZiBjbGFzc2VzIGFyZSBjYW5jZWxsZWQgYXMgYSByZXN1bHQgb2ZcclxuICAgICAgICAgICAgZXh0cmVtZSB3ZWF0aGVyIGNvbmRpdGlvbnMgb3Igd2hlcmUgbG9jYWwgYXV0aG9yaXRpZXMvcHVibGljXHJcbiAgICAgICAgICAgIGd1aWRhbmNlIGFkdmlzZSB0aGF0IHNlc3Npb25zIHNob3VsZCBiZSB0ZW1wb3JhcmlseSBzdXNwZW5kZWQgZm9yXHJcbiAgICAgICAgICAgIGhlYWx0aCBvciBvdGhlciByZWFzb25zLCB0aGVuIGEgbWFrZSB1cCBsZXNzb24gd2lsbCBiZSBncmFudGVkLlxyXG4gICAgICAgICAgICBQbGVhc2Ugc2VlIHRoZSBtYWtlIHVwIGxlc3NvbiBwb2xpY3kuIEluIHRoZSBldmVudCBvZiBhICdsYXN0XHJcbiAgICAgICAgICAgIG1pbnV0ZScgbGVzc29uIGNoYW5nZSBvciBhIGxlc3NvbiBjYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyxcclxuICAgICAgICAgICAgd2Ugd2lsbCBub3RpZnkgeW91IHdpdGggYXMgbXVjaCBub3RpY2UgYXMgcG9zc2libGUuIFJpYmJpdCAmYW1wOyBSb29cclxuICAgICAgICAgICAgd2lsbCBub3QgcmVpbWJ1cnNlIGFueSBleHBlbnNlcyBpbmN1cnJlZCBieSBhIGN1c3RvbWVyIGZhaWxpbmcgdG9cclxuICAgICAgICAgICAgYWNrbm93bGVkZ2UgdGhpcyBjb21tdW5pY2F0aW9uLiBTaG91bGQgeW91IGRlY2lkZSB0byBsZWF2ZSBhblxyXG4gICAgICAgICAgICBlbnJvbGxlZCBSaWJiaXQgJmFtcDsgUm9vIHByb2dyYW0gYmVmb3JlIHRoZSBtYWtlIHVwIGxlc3NvbiBjcmVkaXRcclxuICAgICAgICAgICAgaGFzIGJlZW4gdXNlZCB3ZSB3aWxsIHJlZnVuZCB0aGUgY3JlZGl0IHRvIHlvdS4gSWYgaW5zdWZmaWNpZW50XHJcbiAgICAgICAgICAgIGNoaWxkcmVuIGFyZSBib29rZWQgaW50byB5b3VyIHNlc3Npb24sIHdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvXHJcbiAgICAgICAgICAgIGNhbmNlbCBvciBjaGFuZ2UgdGhlIGNsYXNzLiBJbiB0aGlzIGluc3RhbmNlIHdlIHdpbGwgb2ZmZXIgeW91XHJcbiAgICAgICAgICAgIGVpdGhlciBhbiBhbHRlcm5hdGl2ZSBzZXNzaW9uIHRvIGF0dGVuZCBvciBhIHJlZnVuZCB3aWxsIGJlIGdpdmVuXHJcbiAgICAgICAgICAgIGZvciBhbnkgcmVtYWluaW5nIHNlc3Npb25zIGFmdGVyIHRoZSBjYW5jZWxsYXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgPFBhcmFncmFwaCBoZWFkaW5nPVwiQXR0ZW5kYW5jZVwiPlxyXG4gICAgICAgICAgWW91ciBwYXltZW50IGhhcyByZXNlcnZlZCB5b3VyIHBsYWNlIGp1c3QgZm9yIHlvdSBzbyBpZiB5b3Uga25vdyB5b3VcclxuICAgICAgICAgIGFyZSB1bmFibGUgdG8gYXR0ZW5kIGEgbGVzc29uLCBwbGVhc2UgbGV0IHVzIGtub3cgd2l0aCBhcyBtdWNoIG5vdGljZVxyXG4gICAgICAgICAgYXMgcG9zc2libGUgYnkgZW1haWxpbmcgb3IgdGVsZXBob25pbmcgSmVubnkgYXRcclxuICAgICAgICAgIGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1IG9yICs2MTQwNjYwMzU4My4gVGhlIFBhcmVudC9jYXJlclxyXG4gICAgICAgICAgdW5kZXJzdGFuZHMgdGhhdCBzZXNzaW9ucyBhcmUgb25nb2luZyBhbmQgdG8gYmUgdXNlZCBjb25zZWN1dGl2ZWx5LiBOb1xyXG4gICAgICAgICAgY3JlZGl0cyBvciByZWZ1bmRzIHdpbGwgYmUgaXNzdWVkIGZvciBtaXNzZWQgY2xhc3Nlcy4gTm8gcmVmdW5kcyB3aWxsXHJcbiAgICAgICAgICBiZSBnaXZlbiBpZiB5b3UgY2hhbmdlIHlvdXIgbWluZCBhYm91dCB5b3VyIGNoaWxkIHBhcnRpY2lwYXRpbmcgaW4gdGhlXHJcbiAgICAgICAgICBwcm9ncmFtLiBDbGFzcyBhdHRlbmRhbmNlIGhhcyBiZWVuIGxpbWl0ZWQgdG8gMTAgY2hpbGRyZW4gcGVyIGNsYXNzLlxyXG4gICAgICAgICAgSWYgdGhlIHBsYXkgc2Vzc2lvbnMgcmVhY2ggY2FwYWNpdHkgd2Ugd2lsbCB1cGRhdGUgb3VyIGJvb2tpbmcgc3lzdGVtXHJcbiAgICAgICAgICB0byBzdG9wIGFsbCBuZXcgZW5yb2xtZW50cyB1bnRpbCB0aGUgZm9sbG93aW5nIHRlcm0uXHJcbiAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgICAgPFBhcmFncmFwaCBoZWFkaW5nPVwiTUFLRSBVUCBMRVNTT05TICZhbXA7IEJPTlVTIFNFU1NJT05TXCI+XHJcbiAgICAgICAgICBJZiB5b3UgY2Fubm90IGF0dGVuZCBhIGxlc3NvbiBhbmQgbm90aWZ5IHVzIHByaW9yIHRvIHlvdXIgc2Vzc2lvbiB5b3VcclxuICAgICAgICAgIGFyZSBlbGlnaWJsZSBmb3IgYSBtYWtlIHVwIGxlc3Nvbi4gVGhpcyBtYWtlIHVwIGxlc3NvbiBtdXN0IGJlIHVzZWQgaW5cclxuICAgICAgICAgIGFub3RoZXIgc2Vzc2lvbiBvdGhlciB0aGFuIHlvdXIgc2NoZWR1bGVkIGRheSAoZS5nLiBpZiB5b3UgYXR0ZW5kIG9uIGFcclxuICAgICAgICAgIFR1ZXNkYXksIHlvdXIgbWFrZSB1cCBsZXNzb24gbXVzdCBiZSB1c2VkIGluIGFuIGF2YWlsYWJsZSBXZWRuZXNkYXlcclxuICAgICAgICAgIHNlc3Npb24pLiBBIG1heGltdW0gb2YgMiBtYWtlIHVwIGxlc3NvbnMgY2FuIGJlIHVzZWQgaW4gYSAxMCB3ZWVrXHJcbiAgICAgICAgICBwZXJpb2QuIE1ha2UgdXAgbGVzc29ucyB3aWxsIGJlIGFycmFuZ2VkIGZvciBhbnkgY2FuY2VsbGF0aW9ucyBtYWRlIGJ5XHJcbiAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vIGZvciBzZXZlcmUgd2VhdGhlciwgc2ljayBzdGFmZiBtZW1iZXJzIG9yIHJlYXNvbnMgd2VcclxuICAgICAgICAgIGZlZWwgYXJlIG9mIGRhbmdlciB0byBvdXIgcGFydGljaXBhbnRzIGFuZCBzdGFmZiBtZW1iZXJzLlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBJZiB5b3UgYXJlIGVudGl0bGVkIHRvIGEgZnJlZSBib251cyBzZXNzaW9uIGFmdGVyIGVucm9sbGluZyB3aXRoXHJcbiAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vLCB0aGVyZSB3aWxsIGJlIGEgYWRkZWQgc2Vzc2lvbiBhdCB0aGUgZW5kIG9mIHlvdXIgMTBcclxuICAgICAgICAgIHdlZWsgcHJvZ3JhbSBhdmFpbGFibGUgZm9yIHlvdSB0byBib29rLiBCb251cyBzZXNzaW9ucyBzaG91bGQgYmVcclxuICAgICAgICAgIGJvb2tlZCB3aXRoIGFzIG11Y2ggbm90aWNlIGFzIHBvc3NpYmxlLlxyXG4gICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgIDxQYXJhZ3JhcGggaGVhZGluZz1cIkhFQUxUSCAmYW1wOyBTQUZFVFlcIj5cclxuICAgICAgICAgIFRoZSBzYWZldHkgb2YgYWxsIHRoZSBjaGlsZHJlbiBhdHRlbmRpbmcgb3VyIHBsYXkgc2Vzc2lvbnMgaXMgb2YgdGhlXHJcbiAgICAgICAgICBncmVhdGVzdCBpbXBvcnRhbmNlIHRvIHVzLiBEdWUgdG8gdGhlIG5hdHVyZSBvZiB0aGUgcGxheSBzZXNzaW9ucyBhbmRcclxuICAgICAgICAgIHRoZSBhZ2Ugb2YgdGhlIGNoaWxkKHJlbikgYXR0ZW5kaW5nLCB5b3VyIGNoaWxkKHJlbikgcmVtYWluIHlvdXJcclxuICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IHdoaWxlIGF0dGVuZGluZyBhbmQgbXVzdCBiZSBzdXBlcnZpc2VkIHRocm91Z2hvdXQuIElmXHJcbiAgICAgICAgICB5b3UgbGVhdmUgdGhlIHBsYXkgc2Vzc2lvbiB2ZW51ZSBmb3IgYW55IHJlYXNvbiB5b3UgbXVzdCB0YWtlIHlvdXJcclxuICAgICAgICAgIGNoaWxkKHJlbikgd2l0aCB5b3UuIFdlIGFjY2VwdCBubyByZXNwb25zaWJpbGl0eSBmb3IgYW55IGluanVyeSBjYXVzZWRcclxuICAgICAgICAgIGR1cmluZyBhIHBsYXkgc2Vzc2lvbi4gUGxlYXNlIGJlIGFkdmlzZWQgdGhhdCB3ZSBoYXZlIGEgZmlyc3QgYWlkIGtpdFxyXG4gICAgICAgICAgb24gc2l0ZSBhbmQgZmlyc3QgYWlkIHdpbGwgYmUgZ2l2ZW4gdG8geW91ciBjaGlsZCBpbiB0aGUgZXZlbnQgYW5cclxuICAgICAgICAgIGFjY2lkZW50L2luanVyeSBvY2N1cnMgYXQgYSBwbGF5IHNlc3Npb24uIFdlIGFjY2VwdCBubyByZXNwb25zaWJpbGl0eVxyXG4gICAgICAgICAgZm9yIGFueSBiZWxvbmdpbmdzIHRoYXQgZ2V0IGxvc3Qgb3IgZGFtYWdlZC4gV2UgcG9saXRlbHkgYXNrIHRoYXRcclxuICAgICAgICAgIHBhcmVudHMgYW5kIGNoaWxkcmVuIGRvIG5vdCBhdHRlbmQgaWYgZWl0aGVyIGFyZSBmZWVsaW5nIHVud2VsbC4gV2VcclxuICAgICAgICAgIGFyZSBhIHNtb2tlIGZyZWUgem9uZSBmb3IgdGhlIHNhZmV0eSBvZiBvdXIgcGFydGljaXBhdGluZyBjaGlsZHJlbiBhbmRcclxuICAgICAgICAgIGZhbWlsaWVzIGFuZCB0aGUgc3Vycm91bmRpbmcgZW52aXJvbm1lbnQuIEFueSBwYXJlbnRzL2NhcmVycyB3aG8gYXJlXHJcbiAgICAgICAgICBzZWVuIHNtb2tpbmcgYXQgdGhlIHRpbWUgb2YgYSBwbGF5IHNlc3Npb24gd2lsbCBiZSBhc2tlZCB0byBsZWF2ZSB0aGVcclxuICAgICAgICAgIHBsYXkgc2Vzc2lvbiB3aXRoIHRoZWlyIGNoaWxkLlxyXG4gICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgIDxQYXJhZ3JhcGggaGVhZGluZz1cIlBIT1RPR1JQQUhZICZhbXA7IFNPQ0lBTCBNRURJQVwiPlxyXG4gICAgICAgICAgUGxlYXNlIGJlIGF3YXJlIHRoYXQgYnkgZW5yb2xsaW5nIHlvdXIgY2hpbGQocmVuKSBpbiBhbnkgUmliYml0ICZhbXA7XHJcbiAgICAgICAgICBSb28gUGxheSBTZXNzaW9uIHByb2dyYW0sIHlvdSBhcmUgZ3JhbnRpbmcgdXMgcGVybWlzc2lvbiB0byBwaG90b2dyYXBoXHJcbiAgICAgICAgICBvciByZWNvcmQgc2hvcnQgdmlkZW8gY2xpcHMgb2YgeW91ciBjaGlsZChyZW4pIGR1cmluZyB0aGUgcGxheVxyXG4gICAgICAgICAgc2Vzc2lvbnMgdGhhdCB3ZSBtYXkgdXNlIGZvciBSaWJiaXQgJmFtcDsgUm9vIHByb21vdGlvbmFsIHB1cnBvc2VzIG9uXHJcbiAgICAgICAgICBvdXIgc29jaWFsIG1lZGlhIGFuZC9vciB3ZWJzaXRlLiBObyBkYXRhIHVuZGVyIGFueSBjaXJjdW1zdGFuY2Ugd2lsbFxyXG4gICAgICAgICAgYmUgcGFzc2VkIG92ZXIgdG8gYSB0aGlyZCBwYXJ0eS4gSWYgeW91IGRvIG5vdCB3aXNoIHRvIHByb3ZpZGUgY29uc2VudFxyXG4gICAgICAgICAgZm9yIHRoaXMgdGhlbiB5b3UgbmVlZCB0byBub3RpZnkgSmVubnkgaW4gd3JpdGluZyBhdFxyXG4gICAgICAgICAgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUgYW5kIG5vdGlmeSBKZW5ueSBpbiBwZXJzb24gYXQgeW91ciBwbGF5XHJcbiAgICAgICAgICBzZXNzaW9uLlxyXG4gICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgIDxQYXJhZ3JhcGggaGVhZGluZz1cIkNPTlRBQ1RcIj5cclxuICAgICAgICAgIEZvciBzcGVjaWZpYyBxdWVzdGlvbnMgYWJvdXQgUmliYml0ICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zLCBwbGVhc2VcclxuICAgICAgICAgIGNvbnRhY3QgSmVubnkgZGlyZWN0bHkgYXQgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUuIElmIHdlIGhhdmUgdG9cclxuICAgICAgICAgIGNvbnRhY3QgeW91IHdlIHdpbGwgZG8gc28gaW4gd3JpdGluZyB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzIHlvdVxyXG4gICAgICAgICAgcHJvdmlkZWQgdXMgaW4geW91ciByZWdpc3RyYXRpb24sIG9yIGJ5IHRlbGVwaG9uZSBvciB0ZXh0IG1lc3NhZ2Ugd2l0aFxyXG4gICAgICAgICAgdGhlIHBob25lIG51bWJlciB5b3UgcHJvdmlkZWQgdXMgaW4geW91ciByZWdpc3RyYXRpb24uXHJcbiAgICAgICAgPC9QYXJhZ3JhcGg+XHJcbiAgICAgIDwvU2luZ2xlQ29sdW1uPlxyXG4gICAgPC9QYWdlVGVtcGxhdGU+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvcmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=