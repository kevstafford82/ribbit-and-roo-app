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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/page */ "./components/templates/page.tsx");
/* harmony import */ var _components_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules */ "./components/modules/index.tsx");
/* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/elements */ "./components/elements/index.tsx");
/* harmony import */ var _components_layouts_single_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/single_column */ "./components/layouts/single_column.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\pages\\index.tsx";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_templates_page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
      heading: "Home",
      subheading: "home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_single_column__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], {
        heading: "About Us",
        content: "At Ribbit & Roo our main drive is to empower children and families to choose a healthy lifestyle through imaginative, structured, play-based physical activity.\nWe aim to do this by helping provide each child with the start they need in physical literacy - motivation, skill, confidence and knowledge.\nWe believe throughout Early childhood each child should have the opportunity to participate in a range of gross motor activities which can help their understanding of health and well-being from an early age. Each child's social & emotional well-being is just as important as their physical well-being at Ribbit & Roo. We believe it is important to build self esteem, resilience and strengthen peer relationships through structured, active play."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements__WEBPACK_IMPORTED_MODULE_3__["H3"], {
        content: "What we offer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["IconColumn"], {
        heading: "Play Sessions",
        content: "Ribbit & Roo are passionate about giving children aged 2 - 4 the opportunity to participate in a range of activities which can help develop physical literacy and improve gross motor development.\nOur weekly play sessions are age appropriate, fun and filled with imaginative play. Play sessions are a perfect start to your child's physical, social and emotional development.",
        buttonText: "Learn more",
        buttonURL: "/terms-and-conditions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lbGVtZW50cy9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZWxlbWVudHMvaGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lbGVtZW50cy9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VsZW1lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvc2luZ2xlX2NvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL2hlcm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kdWxlcy9pY29uLWNvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZHVsZXMvbWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3BhcmFncmFwaC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3RleHRibG9jay50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3RpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RlbXBsYXRlcy9wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJjb250ZW50IiwidXJsIiwiSDMiLCJJY29uIiwiU2luZ2xlQ29sdW1uIiwiY2hpbGRyZW4iLCJGb290ZXIiLCJIZXJvIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJJY29uQ29sdW1uIiwiYnV0dG9uVGV4dCIsImJ1dHRvblVSTCIsIk1lbnUiLCJQYXJhZ3JhcGgiLCJUZXh0QmxvY2siLCJUaXRsZSIsIlBhZ2VUZW1wbGF0ZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFNBQUY7QUFBV0M7QUFBWCxDQUFELEtBQW1DO0FBQ2hELHNCQUNFO0FBQUcsYUFBUyxFQUFDLGtEQUFiO0FBQWdFLFFBQUksRUFBRUEsR0FBdEU7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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O0FBZWVZLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFLHFFQUFDLGtFQUFEO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxhQUFPLEVBQUMsTUFBZDtBQUFxQixnQkFBVSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHlFQUFEO0FBQUEsOEJBQ0UscUVBQUMsNkRBQUQ7QUFDRSxlQUFPLEVBQUMsVUFEVjtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FLHFFQUFDLHVEQUFEO0FBQUksZUFBTyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUUscUVBQUMsOERBQUQ7QUFDRSxlQUFPLEVBQUMsZUFEVjtBQUVFLGVBQU8sRUFBQyx1WEFGVjtBQUlFLGtCQUFVLEVBQUMsWUFKYjtBQUtFLGlCQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQsQzs7Ozs7Ozs7Ozs7QUMzQkQsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsInR5cGUgQnV0dG9uUHJvcHMgPSB7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgY29udGVudCwgdXJsIH06IEJ1dHRvblByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGJnLXByaW1hcnktZ3JlZW4gaG92ZXI6YmctbGlnaHQtYmx1ZVwiIGhyZWY9e3VybH0+XHJcbiAgICAgIHtjb250ZW50fVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBCdXR0b24gfTtcclxuIiwidHlwZSBIUHJvcHMgPSB7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgSDMgPSAoeyBjb250ZW50IH06IEhQcm9wcykgPT4ge1xyXG4gIHJldHVybiA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIHRleHQtd2hpdGUgcGItOFwiPntjb250ZW50fTwvaDM+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgSDMgfTtcclxuIiwiaW1wb3J0IHsgUmlGYWNlYm9va0NpcmNsZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuXHJcbmNvbnN0IEljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxSaUZhY2Vib29rQ2lyY2xlRmlsbCAvPjtcclxufTtcclxuXHJcbmV4cG9ydCB7IEljb24gfTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaWNvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZWFkaW5nXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2J1dHRvblwiO1xyXG4iLCJ0eXBlIFNpbmdsZUNvbHVtblByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn07XHJcblxyXG5jb25zdCBTaW5nbGVDb2x1bW4gPSAoeyBjaGlsZHJlbiB9OiBTaW5nbGVDb2x1bW5Qcm9wcykgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTMyXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ29sdW1uO1xyXG4iLCJpbXBvcnQge1xyXG4gIFJpRmFjZWJvb2tDaXJjbGVMaW5lLFxyXG4gIFJpSW5zdGFncmFtTGluZSxcclxuICBSaU1haWxMaW5lLFxyXG4gIFJpUGhvbmVMaW5lLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWxpZ2h0LWJsdWUgbXQtMjBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LWF1dG8gdy1tYXgganVzdGlmeS1jZW50ZXIgc3BhY2UteS0wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG14LWF1dG9cIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0zNlwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9SaWJiaXRBbmRSb28ucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiUklCQklUICZhbXA7IFJPT1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBteC1hdXRvIHNwYWNlLXgtOCB0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICA8UmlGYWNlYm9va0NpcmNsZUxpbmUgY2xhc3NOYW1lPVwidGV4dC0zeGwgaG92ZXI6dGV4dC1wcmltYXJ5LWdyZWVuIGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgIDxSaUluc3RhZ3JhbUxpbmUgY2xhc3NOYW1lPVwidGV4dC0zeGwgaG92ZXI6dGV4dC1wcmltYXJ5LWdyZWVuIGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgIDxSaU1haWxMaW5lIGNsYXNzTmFtZT1cInRleHQtM3hsIGhvdmVyOnRleHQtcHJpbWFyeS1ncmVlbiBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICA8UmlQaG9uZUxpbmUgY2xhc3NOYW1lPVwidGV4dC0zeGwgaG92ZXI6dGV4dC1wcmltYXJ5LWdyZWVuIGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtOFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LWxnXCI+UmliYml0ICZhbXA7IFJvbyDCqTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC04IHRleHQtZ3JheS00MDAgcGItOFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeS1ncmVlblwiPlxyXG4gICAgICAgICAgICBUZXJtc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeS1ncmVlblwiPlxyXG4gICAgICAgICAgICBQcml2YWN5IFBvbGljeVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9jb250YWN0LXVzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5LWdyZWVuXCI+XHJcbiAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRm9vdGVyIH07XHJcbiIsInR5cGUgSGVyb1Byb3BzID0ge1xyXG4gIGhlYWRpbmc6IHN0cmluZztcclxuICBzdWJoZWFkaW5nOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBIZXJvID0gKHsgaGVhZGluZywgc3ViaGVhZGluZyB9OiBIZXJvUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC05NiBtYi04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBiZy1jb3ZlciBiZy1ibGFjayBiZy1vcGFjaXR5LTc1XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGJnLWNvdmVyIGJnLWZpeGVkIGJnLWNlbnRlciBiZy1oZXJvLWltYWdlIHAtMjAgcHQtNDggdGV4dC13aGl0ZSBmb250LW5vcm1hbCBsZWFkaW5nLWxvb3NlIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+e2hlYWRpbmd9PC9oMz5cclxuICAgICAgICAgIDxwPntzdWJoZWFkaW5nfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEhlcm8gfTtcclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XHJcblxyXG50eXBlIEljb25Db2x1bW5Qcm9wcyA9IHtcclxuICBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGJ1dHRvblRleHQ6IHN0cmluZztcclxuICBidXR0b25VUkw6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEljb25Db2x1bW4gPSAoe1xyXG4gIGhlYWRpbmcsXHJcbiAgY29udGVudCxcclxuICBidXR0b25UZXh0LFxyXG4gIGJ1dHRvblVSTCxcclxufTogSWNvbkNvbHVtblByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiBpY29uICovfVxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIHRleHQtd2hpdGUgcGItOFwiPntoZWFkaW5nfTwvaDM+XHJcbiAgICAgIDxCdXR0b24gY29udGVudD17YnV0dG9uVGV4dH0gdXJsPXtidXR0b25VUkx9PjwvQnV0dG9uPlxyXG4gICAgICA8cD57Y29udGVudH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgSWNvbkNvbHVtbiB9O1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9mb290ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWVudVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGl0bGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dGJsb2NrXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hlcm9cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaWNvbi1jb2x1bW5cIjtcclxuIiwiY29uc3QgTWVudSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBmaXhlZCB3LWZ1bGxcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGgtMTZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBzbTpoaWRkZW5cIj5cclxuICAgICAgICAgICAgey8qTW9iaWxlIG1lbnUgYnV0dG9uKi99XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgey8qXHJcbiAgICAgIEljb24gd2hlbiBtZW51IGlzIGNsb3NlZC5cclxuXHJcbiAgICAgIEhlcm9pY29uIG5hbWU6IG91dGxpbmUvbWVudVxyXG5cclxuICAgICAgTWVudSBvcGVuOiBcImhpZGRlblwiLCBNZW51IGNsb3NlZDogXCJibG9ja1wiXHJcbiAgICAqL31cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgey8qXHJcbiAgICAgIEljb24gd2hlbiBtZW51IGlzIG9wZW4uXHJcblxyXG4gICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL3hcclxuXHJcbiAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxyXG4gICovfVxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9SaWJiaXRBbmRSb28ucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJSSUJCSVQgJmFtcDsgUk9PXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgUklCQklUICZhbXA7IFJPT1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4ganVzdGlmeS1lbmQgc206YmxvY2sgc206bWwtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktZ3JlZW4gdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWFybHkgQ2hpbGRjYXJlIFByb2dyYW1zXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEdhbGxlcnlcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVGVzdGFtb25pYWxzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qTW9iaWxlIG1lbnUsIHNob3cvaGlkZSBiYXNlZCBvbiBtZW51IHN0YXRlLiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIiBpZD1cIm1vYmlsZS1tZW51XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB0LTIgcGItMyBzcGFjZS15LTFcIj5cclxuICAgICAgICAgIHsvKkN1cnJlbnQ6IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiLCBEZWZhdWx0OiBcInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiICovfVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWdyZWVuIHRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVhcmx5IENoaWxkaG9vZCBQcm9ncmFtc1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2FsbGVyeVxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGVzdGFtb25pYWxzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IE1lbnUgfTtcclxuIiwidHlwZSBQYXJhZ3JhcGhQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGhlYWRpbmc6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFBhcmFncmFwaCA9ICh7IGNoaWxkcmVuLCBoZWFkaW5nIH06IFBhcmFncmFwaFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+e2hlYWRpbmd9PC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPntjaGlsZHJlbn08L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgeyBQYXJhZ3JhcGggfTtcclxuIiwidHlwZSBUZXh0QmxvY2tQcm9wcyA9IHtcclxuICBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgVGV4dEJsb2NrID0gKHsgaGVhZGluZywgY29udGVudCB9OiBUZXh0QmxvY2tQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCIgYmctcHJpbWFyeS1ncmVlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbXgtYXV0byBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHBiLThcIj57aGVhZGluZ308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPntjb250ZW50fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFRleHRCbG9jayB9O1xyXG4iLCJ0eXBlIFRpdGxlUHJvcHMgPSB7XHJcbiAgaGVhZGluZzogc3RyaW5nO1xyXG4gIHN1YmhlYWRpbmc6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFRpdGxlID0gKHsgaGVhZGluZywgc3ViaGVhZGluZyB9OiBUaXRsZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtOTYgbWItOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgYmctY292ZXIgYmctYmxhY2sgYmctb3BhY2l0eS03NVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBiZy1jb3ZlciBiZy1maXhlZCBiZy1jZW50ZXIgYmctaGVyby1pbWFnZSBwLTIwIHB0LTQ4IHRleHQtd2hpdGUgZm9udC1ub3JtYWwgbGVhZGluZy1sb29zZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPntoZWFkaW5nfTwvaDM+XHJcbiAgICAgICAgICA8cD57c3ViaGVhZGluZ308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBUaXRsZSB9O1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IE1lbnUsIEZvb3RlciB9IGZyb20gXCIuLi9tb2R1bGVzXCI7XHJcblxyXG50eXBlIFBhZ2VQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuY29uc3QgUGFnZVRlbXBsYXRlID0gKHsgY2hpbGRyZW4gfTogUGFnZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJpYmJpdCAmYW1wOyBSb288L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGVtcGxhdGU7XHJcbiIsImltcG9ydCBQYWdlVGVtcGxhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3BhZ2VcIjtcbmltcG9ydCB7IEhlcm8sIFRleHRCbG9jaywgSWNvbkNvbHVtbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vZHVsZXNcIjtcbmltcG9ydCB7IEgzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHNcIjtcbmltcG9ydCBTaW5nbGVDb2x1bW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9zaW5nbGVfY29sdW1uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2VUZW1wbGF0ZT5cbiAgICAgIDxIZXJvIGhlYWRpbmc9XCJIb21lXCIgc3ViaGVhZGluZz1cImhvbWVcIiAvPlxuICAgICAgPFNpbmdsZUNvbHVtbj5cbiAgICAgICAgPFRleHRCbG9ja1xuICAgICAgICAgIGhlYWRpbmc9XCJBYm91dCBVc1wiXG4gICAgICAgICAgY29udGVudD1cIkF0IFJpYmJpdCAmYW1wOyBSb28gb3VyIG1haW4gZHJpdmUgaXMgdG8gZW1wb3dlciBjaGlsZHJlbiBhbmQgZmFtaWxpZXMgdG8gY2hvb3NlIGEgaGVhbHRoeSBsaWZlc3R5bGUgdGhyb3VnaCBpbWFnaW5hdGl2ZSwgc3RydWN0dXJlZCwgcGxheS1iYXNlZCBwaHlzaWNhbCBhY3Rpdml0eS5cbldlIGFpbSB0byBkbyB0aGlzIGJ5IGhlbHBpbmcgcHJvdmlkZSBlYWNoIGNoaWxkIHdpdGggdGhlIHN0YXJ0IHRoZXkgbmVlZCBpbiBwaHlzaWNhbCBsaXRlcmFjeSAtIG1vdGl2YXRpb24sIHNraWxsLCBjb25maWRlbmNlIGFuZCBrbm93bGVkZ2UuXG5XZSBiZWxpZXZlIHRocm91Z2hvdXQgRWFybHkgY2hpbGRob29kIGVhY2ggY2hpbGQgc2hvdWxkIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHBhcnRpY2lwYXRlIGluIGEgcmFuZ2Ugb2YgZ3Jvc3MgbW90b3IgYWN0aXZpdGllcyB3aGljaCBjYW4gaGVscCB0aGVpciB1bmRlcnN0YW5kaW5nIG9mIGhlYWx0aCBhbmQgd2VsbC1iZWluZyBmcm9tIGFuIGVhcmx5IGFnZS4gRWFjaCBjaGlsZCdzIHNvY2lhbCAmIGVtb3Rpb25hbCB3ZWxsLWJlaW5nIGlzIGp1c3QgYXMgaW1wb3J0YW50IGFzIHRoZWlyIHBoeXNpY2FsIHdlbGwtYmVpbmcgYXQgUmliYml0ICYgUm9vLiBXZSBiZWxpZXZlIGl0IGlzIGltcG9ydGFudCB0byBidWlsZCBzZWxmIGVzdGVlbSwgcmVzaWxpZW5jZSBhbmQgc3RyZW5ndGhlbiBwZWVyIHJlbGF0aW9uc2hpcHMgdGhyb3VnaCBzdHJ1Y3R1cmVkLCBhY3RpdmUgcGxheS5cIlxuICAgICAgICA+PC9UZXh0QmxvY2s+XG4gICAgICAgIDxIMyBjb250ZW50PVwiV2hhdCB3ZSBvZmZlclwiIC8+XG4gICAgICAgIDxJY29uQ29sdW1uXG4gICAgICAgICAgaGVhZGluZz1cIlBsYXkgU2Vzc2lvbnNcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJSaWJiaXQgJmFtcDsgUm9vIGFyZSBwYXNzaW9uYXRlIGFib3V0IGdpdmluZyBjaGlsZHJlbiBhZ2VkIDIgLSA0IHRoZSBvcHBvcnR1bml0eSB0byBwYXJ0aWNpcGF0ZSBpbiBhIHJhbmdlIG9mIGFjdGl2aXRpZXMgd2hpY2ggY2FuIGhlbHAgZGV2ZWxvcCBwaHlzaWNhbCBsaXRlcmFjeSBhbmQgaW1wcm92ZSBncm9zcyBtb3RvciBkZXZlbG9wbWVudC5cbk91ciB3ZWVrbHkgcGxheSBzZXNzaW9ucyBhcmUgYWdlIGFwcHJvcHJpYXRlLCBmdW4gYW5kIGZpbGxlZCB3aXRoIGltYWdpbmF0aXZlIHBsYXkuIFBsYXkgc2Vzc2lvbnMgYXJlIGEgcGVyZmVjdCBzdGFydCB0byB5b3VyIGNoaWxkJ3MgcGh5c2ljYWwsIHNvY2lhbCBhbmQgZW1vdGlvbmFsIGRldmVsb3BtZW50LlwiXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIkxlYXJuIG1vcmVcIlxuICAgICAgICAgIGJ1dHRvblVSTD1cIi90ZXJtcy1hbmQtY29uZGl0aW9uc1wiXG4gICAgICAgIC8+XG4gICAgICA8L1NpbmdsZUNvbHVtbj5cbiAgICA8L1BhZ2VUZW1wbGF0ZT5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==