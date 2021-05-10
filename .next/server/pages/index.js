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

/***/ "./components/elements/p.tsx":
/*!***********************************!*\
  !*** ./components/elements/p.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\elements\\p.tsx";

const P = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
  children: props.children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 1,
  columnNumber: 22
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (P);

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_p__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/p */ "./components/elements/p.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\footer.tsx";


const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "bg-gray-100 p-20",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col mx-auto w-max justify-center ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "h-32 w-auto",
          src: "/RibbitAndRoo.png",
          alt: "RIBBIT & ROO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center pt-20",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_p__WEBPACK_IMPORTED_MODULE_1__["default"], {
          children: "Ribbit & Roo \xA9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/modules/menu.tsx":
/*!*************************************!*\
  !*** ./components/modules/menu.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\menu.tsx";

const Menu = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "bg-white fixed w-full",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative flex items-center h-16",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "absolute inset-y-0 left-0 sm:hidden",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
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
            src: "/logo.png",
            alt: "RIBBIT & ROO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                lineNumber: 73,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                children: "Early Childcare Programs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                children: "Gallery"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                children: "Testamonials"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
          lineNumber: 111,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Early Childhood Programs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Gallery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
          children: "Testamonials"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/modules/paragraph.tsx":
/*!******************************************!*\
  !*** ./components/modules/paragraph.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Paragraph);

/***/ }),

/***/ "./components/modules/title.tsx":
/*!**************************************!*\
  !*** ./components/modules/title.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Title);

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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/menu */ "./components/modules/menu.tsx");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/footer */ "./components/modules/footer.tsx");

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
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
/* harmony import */ var _components_modules_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules/title */ "./components/modules/title.tsx");
/* harmony import */ var _components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/paragraph */ "./components/modules/paragraph.tsx");
/* harmony import */ var _components_layouts_single_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/single_column */ "./components/layouts/single_column.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\pages\\index.tsx";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_templates_page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: "Terms and Conditions",
      subheading: "The small print"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_single_column__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "TERMS & CONDITIONS",
        children: "Please read these terms carefully before you book any of our Ribbit & Roo play sessions. These terms tell you about Ribbit & Roo, how we will provide play sessions to you, how you or Ribbit & Roo may change or end the contract, what to do if there is an issue and other important information. If you think that there is a mistake in these terms, please contact us at jennyh@ribbitandroo.com.au to discuss."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "ACCEPTANCE OF TERMS & CONDITIONS",
        children: "All those who wish to attend any Ribbit & Roo play session must agree to the terms and conditions set out below. These are the terms and conditions which we provide Ribbit & Roo play sessions to you and your child(ren). No variation or addition to the terms shall be binding unless agreed in writing by Ribbit & Roo and the parent. In the unlikely event of a customer failing to abide by these terms and conditions, a customer may be requested to discontinue with any Ribbit & Roo play session. In this instance Ribbit & Roo will be under no obligation to provide a refund for any outstanding lessons. The Parent must agree to keep the play session's content confidential and not to copy or use any content of the program directly or indirectly. At the time of publishing all session information is correct."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "ENROLMENTS, PAYMENT & CANCELLATIONS",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Enrolments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Enrolments will not be accepted without payment. Please ensure you have transferred the funds for your 10 week enrolment before your child\u2019s first session. Also please ensure you have read and understood the enrolment, payment & cancellations policy and the refund & missed session policy. You can book a Ribbit & Roo play session by visiting www.ribbitandroo.com.au/play-sessions and by registering using our registration form. You must provide us with the specific information we need in order to enrol in a session with us. During the enrolment process, you will be asked to read and agree to our Terms and Conditions (this document). Once registered, Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your chosen play session. You are eligible for a free trial session when registering. When registering for a free trial you must press the 'Register for a Free Trial' button to submit your details. Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your free trial play session. After completing your play session free trial, if you choose to enrol in a 10 week Ribbit & Roo program you must re register at www.ribbitandroo.com.au/play-sessions and submit 'Register and Book'. This will transfer you to the payment page. Please note, that if you wish to enrol after your free trial we cannot guarantee that there will be available spaces in our 10 week program. Our play sessions are open to enrolments until we are sold out."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["The 10 week term is paid for in advance and must be paid in full prior to you child attending their first session. If you wish to re enrol for our next 10 week term you can do so by registering at www.ribbitandroo.com.au/play-sessions and submitting the button 'Register and Book'. It is your responsibility to make sure that there are sufficient funds in your account and that the saved card is valid. If a payment has failed, you will be notified and another form of payment/credit card must be used. The Fee is non-refundable under any circumstances whatsoever except with the prior written agreement of Ribbit & Roo. If the cost of the sessions change you will be notified prior to the start of the following term.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), "We will accept the following methods of payment: Visa, MasterCard and American Express"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["All refund requests must be in writing to Jenny at jennyh@ribbitandroo.com.au.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), "Cancellation by Ribbit & Roo - Ribbit & Roo may cancel this contract at any time before the child commences the 10 week program for any reason whatsoever. Ribbit & Roo shall not be liable for any loss or damage whatsoever arising from such cancellation. In the event of cancellation by Ribbit & Roo prior to the commencement of the 10 week program, Ribbit & Roo will refund any fees for outstanding sessions. If classes are cancelled as a result of extreme weather conditions or where local authorities/public guidance advise that sessions should be temporarily suspended for health or other reasons, then a make up lesson will be granted. Please see the make up lesson policy. In the event of a 'last minute' lesson change or a lesson cancellation by Ribbit & Roo, we will notify you with as much notice as possible. Ribbit & Roo will not reimburse any expenses incurred by a customer failing to acknowledge this communication. Should you decide to leave an enrolled Ribbit & Roo program before the make up lesson credit has been used we will refund the credit to you. If insufficient children are booked into your session, we reserve the right to cancel or change the class. In this instance we will offer you either an alternative session to attend or a refund will be given for any remaining sessions after the cancellation."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "Attendance",
        children: "Your payment has reserved your place just for you so if you know you are unable to attend a lesson, please let us know with as much notice as possible by emailing or telephoning Jenny at jennyh@ribbitandroo.com.au or +61406603583. The Parent/carer understands that sessions are ongoing and to be used consecutively. No credits or refunds will be issued for missed classes. No refunds will be given if you change your mind about your child participating in the program. Class attendance has been limited to 10 children per class. If the play sessions reach capacity we will update our booking system to stop all new enrolments until the following term."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "MAKE UP LESSONS & BONUS SESSIONS",
        children: ["If you cannot attend a lesson and notify us prior to your session you are eligible for a make up lesson. This make up lesson must be used in another session other than your scheduled day (e.g. if you attend on a Tuesday, your make up lesson must be used in an available Wednesday session). A maximum of 2 make up lessons can be used in a 10 week period. Make up lessons will be arranged for any cancellations made by Ribbit & Roo for severe weather, sick staff members or reasons we feel are of danger to our participants and staff members.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), "If you are entitled to a free bonus session after enrolling with Ribbit & Roo, there will be a added session at the end of your 10 week program available for you to book. Bonus sessions should be booked with as much notice as possible."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "HEALTH & SAFETY",
        children: "The safety of all the children attending our play sessions is of the greatest importance to us. Due to the nature of the play sessions and the age of the child(ren) attending, your child(ren) remain your responsibility while attending and must be supervised throughout. If you leave the play session venue for any reason you must take your child(ren) with you. We accept no responsibility for any injury caused during a play session. Please be advised that we have a first aid kit on site and first aid will be given to your child in the event an accident/injury occurs at a play session. We accept no responsibility for any belongings that get lost or damaged. We politely ask that parents and children do not attend if either are feeling unwell. We are a smoke free zone for the safety of our participating children and families and the surrounding environment. Any parents/carers who are seen smoking at the time of a play session will be asked to leave the play session with their child."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "PHOTOGRPAHY & SOCIAL MEDIA",
        children: "Please be aware that by enrolling your child(ren) in any Ribbit & Roo Play Session program, you are granting us permission to photograph or record short video clips of your child(ren) during the play sessions that we may use for Ribbit & Roo promotional purposes on our social media and/or website. No data under any circumstance will be passed over to a third party. If you do not wish to provide consent for this then you need to notify Jenny in writing at jennyh@ribbitandroo.com.au and notify Jenny in person at your play session."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "CONTACT",
        children: "For specific questions about Ribbit & Roo play sessions, please contact Jenny directly at jennyh@ribbitandroo.com.au. If we have to contact you we will do so in writing with the email address you provided us in your registration, or by telephone or text message with the phone number you provided us in your registration."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lbGVtZW50cy9wLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvc2luZ2xlX2NvbHVtbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL21lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kdWxlcy9wYXJhZ3JhcGgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kdWxlcy90aXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvcGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlAiLCJwcm9wcyIsImNoaWxkcmVuIiwiU2luZ2xlQ29sdW1uIiwiRm9vdGVyIiwiTWVudSIsIlBhcmFncmFwaCIsImhlYWRpbmciLCJUaXRsZSIsInN1YmhlYWRpbmciLCJQYWdlVGVtcGxhdGUiLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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VyxlQUFPLEVBQUMsa0NBQW5CO0FBQUEsZ2tCQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUdGLGVBNkhFLHFFQUFDLHFFQUFEO0FBQVcsZUFBTyxFQUFDLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdIRixlQThJRSxxRUFBQyxxRUFBRDtBQUFXLGVBQU8sRUFBQyw0QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5SUYsZUF5SkUscUVBQUMscUVBQUQ7QUFBVyxlQUFPLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzS0QsQzs7Ozs7Ozs7Ozs7QUM1S0Qsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImNvbnN0IFAgPSAocHJvcHMpID0+IDxwPntwcm9wcy5jaGlsZHJlbn08L3A+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUDtcclxuIiwidHlwZSBTaW5nbGVDb2x1bW5Qcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuY29uc3QgU2luZ2xlQ29sdW1uID0gKHsgY2hpbGRyZW4gfTogU2luZ2xlQ29sdW1uUHJvcHMpID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0zMlwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvbHVtbjtcclxuIiwiaW1wb3J0IFAgZnJvbSBcIi4uL2VsZW1lbnRzL3BcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTIwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteC1hdXRvIHctbWF4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMyIHctYXV0b1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi9SaWJiaXRBbmRSb28ucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiUklCQklUICZhbXA7IFJPT1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTIwXCI+XHJcbiAgICAgICAgICA8UD5SaWJiaXQgJmFtcDsgUm9vIMKpPC9QPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZml4ZWQgdy1mdWxsXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBoLTE2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgc206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIHsvKk1vYmlsZSBtZW51IGJ1dHRvbiovfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgey8qXHJcbiAgICAgIEljb24gd2hlbiBtZW51IGlzIGNsb3NlZC5cclxuXHJcbiAgICAgIEhlcm9pY29uIG5hbWU6IG91dGxpbmUvbWVudVxyXG5cclxuICAgICAgTWVudSBvcGVuOiBcImhpZGRlblwiLCBNZW51IGNsb3NlZDogXCJibG9ja1wiXHJcbiAgICAqL31cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgey8qXHJcbiAgICAgIEljb24gd2hlbiBtZW51IGlzIG9wZW4uXHJcblxyXG4gICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL3hcclxuXHJcbiAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxyXG4gICovfVxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUklCQklUICZhbXA7IFJPT1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlJJQkJJVCAmYW1wOyBST088L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4ganVzdGlmeS1lbmQgc206YmxvY2sgc206bWwtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktZ3JlZW4gdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFYXJseSBDaGlsZGNhcmUgUHJvZ3JhbXNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVGVzdGFtb25pYWxzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qTW9iaWxlIG1lbnUsIHNob3cvaGlkZSBiYXNlZCBvbiBtZW51IHN0YXRlLiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIiBpZD1cIm1vYmlsZS1tZW51XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB0LTIgcGItMyBzcGFjZS15LTFcIj5cclxuICAgICAgICAgIHsvKkN1cnJlbnQ6IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiLCBEZWZhdWx0OiBcInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiICovfVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWdyZWVuIHRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVhcmx5IENoaWxkaG9vZCBQcm9ncmFtc1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2FsbGVyeVxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGVzdGFtb25pYWxzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsInR5cGUgUGFyYWdyYXBoUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBoZWFkaW5nOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBQYXJhZ3JhcGggPSAoeyBjaGlsZHJlbiwgaGVhZGluZyB9OiBQYXJhZ3JhcGhQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPntoZWFkaW5nfTwvaDI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xyXG4iLCJ0eXBlIFRpdGxlUHJvcHMgPSB7XHJcbiAgaGVhZGluZzogc3RyaW5nO1xyXG4gIHN1YmhlYWRpbmc6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFRpdGxlID0gKHsgaGVhZGluZywgc3ViaGVhZGluZyB9OiBUaXRsZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtOTYgbWItOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgYmctY292ZXIgYmctYmxhY2sgYmctb3BhY2l0eS03NVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBiZy1jb3ZlciBiZy1maXhlZCBiZy1jZW50ZXIgYmctaGVyby1pbWFnZSBwLTIwIHB0LTQ4IHRleHQtd2hpdGUgZm9udC1ub3JtYWwgbGVhZGluZy1sb29zZSB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPntoZWFkaW5nfTwvaDM+XHJcbiAgICAgICAgICA8cD57c3ViaGVhZGluZ308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL21vZHVsZXMvZm9vdGVyXCI7XHJcblxyXG50eXBlIFBhZ2VQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuY29uc3QgUGFnZVRlbXBsYXRlID0gKHsgY2hpbGRyZW4gfTogUGFnZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJpYmJpdCAmYW1wOyBSb288L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGVtcGxhdGU7XHJcbiIsImltcG9ydCBQYWdlVGVtcGxhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3BhZ2VcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2R1bGVzL3RpdGxlXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL21vZHVsZXMvcGFyYWdyYXBoXCI7XG5pbXBvcnQgU2luZ2xlQ29sdW1uIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvc2luZ2xlX2NvbHVtblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlVGVtcGxhdGU+XG4gICAgICA8VGl0bGUgaGVhZGluZz1cIlRlcm1zIGFuZCBDb25kaXRpb25zXCIgc3ViaGVhZGluZz1cIlRoZSBzbWFsbCBwcmludFwiIC8+XG4gICAgICA8U2luZ2xlQ29sdW1uPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJURVJNUyAmYW1wOyBDT05ESVRJT05TXCI+XG4gICAgICAgICAgUGxlYXNlIHJlYWQgdGhlc2UgdGVybXMgY2FyZWZ1bGx5IGJlZm9yZSB5b3UgYm9vayBhbnkgb2Ygb3VyIFJpYmJpdFxuICAgICAgICAgICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zLiBUaGVzZSB0ZXJtcyB0ZWxsIHlvdSBhYm91dCBSaWJiaXQgJmFtcDsgUm9vLFxuICAgICAgICAgIGhvdyB3ZSB3aWxsIHByb3ZpZGUgcGxheSBzZXNzaW9ucyB0byB5b3UsIGhvdyB5b3Ugb3IgUmliYml0ICZhbXA7IFJvb1xuICAgICAgICAgIG1heSBjaGFuZ2Ugb3IgZW5kIHRoZSBjb250cmFjdCwgd2hhdCB0byBkbyBpZiB0aGVyZSBpcyBhbiBpc3N1ZSBhbmRcbiAgICAgICAgICBvdGhlciBpbXBvcnRhbnQgaW5mb3JtYXRpb24uIElmIHlvdSB0aGluayB0aGF0IHRoZXJlIGlzIGEgbWlzdGFrZSBpblxuICAgICAgICAgIHRoZXNlIHRlcm1zLCBwbGVhc2UgY29udGFjdCB1cyBhdCBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdSB0b1xuICAgICAgICAgIGRpc2N1c3MuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJBQ0NFUFRBTkNFIE9GIFRFUk1TICZhbXA7IENPTkRJVElPTlNcIj5cbiAgICAgICAgICBBbGwgdGhvc2Ugd2hvIHdpc2ggdG8gYXR0ZW5kIGFueSBSaWJiaXQgJmFtcDsgUm9vIHBsYXkgc2Vzc2lvbiBtdXN0XG4gICAgICAgICAgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIHNldCBvdXQgYmVsb3cuIFRoZXNlIGFyZSB0aGUgdGVybXNcbiAgICAgICAgICBhbmQgY29uZGl0aW9ucyB3aGljaCB3ZSBwcm92aWRlIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucyB0byB5b3VcbiAgICAgICAgICBhbmQgeW91ciBjaGlsZChyZW4pLiBObyB2YXJpYXRpb24gb3IgYWRkaXRpb24gdG8gdGhlIHRlcm1zIHNoYWxsIGJlXG4gICAgICAgICAgYmluZGluZyB1bmxlc3MgYWdyZWVkIGluIHdyaXRpbmcgYnkgUmliYml0ICZhbXA7IFJvbyBhbmQgdGhlIHBhcmVudC5cbiAgICAgICAgICBJbiB0aGUgdW5saWtlbHkgZXZlbnQgb2YgYSBjdXN0b21lciBmYWlsaW5nIHRvIGFiaWRlIGJ5IHRoZXNlIHRlcm1zXG4gICAgICAgICAgYW5kIGNvbmRpdGlvbnMsIGEgY3VzdG9tZXIgbWF5IGJlIHJlcXVlc3RlZCB0byBkaXNjb250aW51ZSB3aXRoIGFueVxuICAgICAgICAgIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9uLiBJbiB0aGlzIGluc3RhbmNlIFJpYmJpdCAmYW1wOyBSb28gd2lsbFxuICAgICAgICAgIGJlIHVuZGVyIG5vIG9ibGlnYXRpb24gdG8gcHJvdmlkZSBhIHJlZnVuZCBmb3IgYW55IG91dHN0YW5kaW5nXG4gICAgICAgICAgbGVzc29ucy4gVGhlIFBhcmVudCBtdXN0IGFncmVlIHRvIGtlZXAgdGhlIHBsYXkgc2Vzc2lvbidzIGNvbnRlbnRcbiAgICAgICAgICBjb25maWRlbnRpYWwgYW5kIG5vdCB0byBjb3B5IG9yIHVzZSBhbnkgY29udGVudCBvZiB0aGUgcHJvZ3JhbVxuICAgICAgICAgIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkuIEF0IHRoZSB0aW1lIG9mIHB1Ymxpc2hpbmcgYWxsIHNlc3Npb25cbiAgICAgICAgICBpbmZvcm1hdGlvbiBpcyBjb3JyZWN0LlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPFBhcmFncmFwaCBoZWFkaW5nPVwiRU5ST0xNRU5UUywgUEFZTUVOVCAmYW1wOyBDQU5DRUxMQVRJT05TXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPkVucm9sbWVudHM8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIEVucm9sbWVudHMgd2lsbCBub3QgYmUgYWNjZXB0ZWQgd2l0aG91dCBwYXltZW50LiBQbGVhc2UgZW5zdXJlIHlvdVxuICAgICAgICAgICAgaGF2ZSB0cmFuc2ZlcnJlZCB0aGUgZnVuZHMgZm9yIHlvdXIgMTAgd2VlayBlbnJvbG1lbnQgYmVmb3JlIHlvdXJcbiAgICAgICAgICAgIGNoaWxk4oCZcyBmaXJzdCBzZXNzaW9uLiBBbHNvIHBsZWFzZSBlbnN1cmUgeW91IGhhdmUgcmVhZCBhbmRcbiAgICAgICAgICAgIHVuZGVyc3Rvb2QgdGhlIGVucm9sbWVudCwgcGF5bWVudCAmYW1wOyBjYW5jZWxsYXRpb25zIHBvbGljeSBhbmQgdGhlXG4gICAgICAgICAgICByZWZ1bmQgJmFtcDsgbWlzc2VkIHNlc3Npb24gcG9saWN5LiBZb3UgY2FuIGJvb2sgYSBSaWJiaXQgJmFtcDsgUm9vXG4gICAgICAgICAgICBwbGF5IHNlc3Npb24gYnkgdmlzaXRpbmcgd3d3LnJpYmJpdGFuZHJvby5jb20uYXUvcGxheS1zZXNzaW9ucyBhbmRcbiAgICAgICAgICAgIGJ5IHJlZ2lzdGVyaW5nIHVzaW5nIG91ciByZWdpc3RyYXRpb24gZm9ybS4gWW91IG11c3QgcHJvdmlkZSB1cyB3aXRoXG4gICAgICAgICAgICB0aGUgc3BlY2lmaWMgaW5mb3JtYXRpb24gd2UgbmVlZCBpbiBvcmRlciB0byBlbnJvbCBpbiBhIHNlc3Npb24gd2l0aFxuICAgICAgICAgICAgdXMuIER1cmluZyB0aGUgZW5yb2xtZW50IHByb2Nlc3MsIHlvdSB3aWxsIGJlIGFza2VkIHRvIHJlYWQgYW5kXG4gICAgICAgICAgICBhZ3JlZSB0byBvdXIgVGVybXMgYW5kIENvbmRpdGlvbnMgKHRoaXMgZG9jdW1lbnQpLiBPbmNlIHJlZ2lzdGVyZWQsXG4gICAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vIHdpbGwgcmVjZWl2ZSBhIGNvbmZpcm1hdGlvbiBlbWFpbCB3aXRoIHlvdXIgZGV0YWlsc1xuICAgICAgICAgICAgYW5kIHdpbGwgY29udGFjdCB5b3Ugd2l0aCBmdXJ0aGVyIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY2hvc2VuIHBsYXlcbiAgICAgICAgICAgIHNlc3Npb24uIFlvdSBhcmUgZWxpZ2libGUgZm9yIGEgZnJlZSB0cmlhbCBzZXNzaW9uIHdoZW4gcmVnaXN0ZXJpbmcuXG4gICAgICAgICAgICBXaGVuIHJlZ2lzdGVyaW5nIGZvciBhIGZyZWUgdHJpYWwgeW91IG11c3QgcHJlc3MgdGhlICdSZWdpc3RlciBmb3IgYVxuICAgICAgICAgICAgRnJlZSBUcmlhbCcgYnV0dG9uIHRvIHN1Ym1pdCB5b3VyIGRldGFpbHMuIFJpYmJpdCAmYW1wOyBSb28gd2lsbFxuICAgICAgICAgICAgcmVjZWl2ZSBhIGNvbmZpcm1hdGlvbiBlbWFpbCB3aXRoIHlvdXIgZGV0YWlscyBhbmQgd2lsbCBjb250YWN0IHlvdVxuICAgICAgICAgICAgd2l0aCBmdXJ0aGVyIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgZnJlZSB0cmlhbCBwbGF5IHNlc3Npb24uIEFmdGVyXG4gICAgICAgICAgICBjb21wbGV0aW5nIHlvdXIgcGxheSBzZXNzaW9uIGZyZWUgdHJpYWwsIGlmIHlvdSBjaG9vc2UgdG8gZW5yb2wgaW4gYVxuICAgICAgICAgICAgMTAgd2VlayBSaWJiaXQgJmFtcDsgUm9vIHByb2dyYW0geW91IG11c3QgcmUgcmVnaXN0ZXIgYXRcbiAgICAgICAgICAgIHd3dy5yaWJiaXRhbmRyb28uY29tLmF1L3BsYXktc2Vzc2lvbnMgYW5kIHN1Ym1pdCAnUmVnaXN0ZXIgYW5kXG4gICAgICAgICAgICBCb29rJy4gVGhpcyB3aWxsIHRyYW5zZmVyIHlvdSB0byB0aGUgcGF5bWVudCBwYWdlLiBQbGVhc2Ugbm90ZSwgdGhhdFxuICAgICAgICAgICAgaWYgeW91IHdpc2ggdG8gZW5yb2wgYWZ0ZXIgeW91ciBmcmVlIHRyaWFsIHdlIGNhbm5vdCBndWFyYW50ZWUgdGhhdFxuICAgICAgICAgICAgdGhlcmUgd2lsbCBiZSBhdmFpbGFibGUgc3BhY2VzIGluIG91ciAxMCB3ZWVrIHByb2dyYW0uIE91ciBwbGF5XG4gICAgICAgICAgICBzZXNzaW9ucyBhcmUgb3BlbiB0byBlbnJvbG1lbnRzIHVudGlsIHdlIGFyZSBzb2xkIG91dC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPlBheW1lbnRzPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBUaGUgMTAgd2VlayB0ZXJtIGlzIHBhaWQgZm9yIGluIGFkdmFuY2UgYW5kIG11c3QgYmUgcGFpZCBpbiBmdWxsXG4gICAgICAgICAgICBwcmlvciB0byB5b3UgY2hpbGQgYXR0ZW5kaW5nIHRoZWlyIGZpcnN0IHNlc3Npb24uIElmIHlvdSB3aXNoIHRvIHJlXG4gICAgICAgICAgICBlbnJvbCBmb3Igb3VyIG5leHQgMTAgd2VlayB0ZXJtIHlvdSBjYW4gZG8gc28gYnkgcmVnaXN0ZXJpbmcgYXRcbiAgICAgICAgICAgIHd3dy5yaWJiaXRhbmRyb28uY29tLmF1L3BsYXktc2Vzc2lvbnMgYW5kIHN1Ym1pdHRpbmcgdGhlIGJ1dHRvblxuICAgICAgICAgICAgJ1JlZ2lzdGVyIGFuZCBCb29rJy4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBtYWtlIHN1cmUgdGhhdFxuICAgICAgICAgICAgdGhlcmUgYXJlIHN1ZmZpY2llbnQgZnVuZHMgaW4geW91ciBhY2NvdW50IGFuZCB0aGF0IHRoZSBzYXZlZCBjYXJkXG4gICAgICAgICAgICBpcyB2YWxpZC4gSWYgYSBwYXltZW50IGhhcyBmYWlsZWQsIHlvdSB3aWxsIGJlIG5vdGlmaWVkIGFuZCBhbm90aGVyXG4gICAgICAgICAgICBmb3JtIG9mIHBheW1lbnQvY3JlZGl0IGNhcmQgbXVzdCBiZSB1c2VkLiBUaGUgRmVlIGlzIG5vbi1yZWZ1bmRhYmxlXG4gICAgICAgICAgICB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcyB3aGF0c29ldmVyIGV4Y2VwdCB3aXRoIHRoZSBwcmlvciB3cml0dGVuXG4gICAgICAgICAgICBhZ3JlZW1lbnQgb2YgUmliYml0ICZhbXA7IFJvby4gSWYgdGhlIGNvc3Qgb2YgdGhlIHNlc3Npb25zIGNoYW5nZVxuICAgICAgICAgICAgeW91IHdpbGwgYmUgbm90aWZpZWQgcHJpb3IgdG8gdGhlIHN0YXJ0IG9mIHRoZSBmb2xsb3dpbmcgdGVybS5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgV2Ugd2lsbCBhY2NlcHQgdGhlIGZvbGxvd2luZyBtZXRob2RzIG9mIHBheW1lbnQ6IFZpc2EsIE1hc3RlckNhcmRcbiAgICAgICAgICAgIGFuZCBBbWVyaWNhbiBFeHByZXNzXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1sIG1iLTJcIj5QYXltZW50czwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgQWxsIHJlZnVuZCByZXF1ZXN0cyBtdXN0IGJlIGluIHdyaXRpbmcgdG8gSmVubnkgYXRcbiAgICAgICAgICAgIGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBDYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyAtIFJpYmJpdCAmYW1wOyBSb28gbWF5IGNhbmNlbCB0aGlzXG4gICAgICAgICAgICBjb250cmFjdCBhdCBhbnkgdGltZSBiZWZvcmUgdGhlIGNoaWxkIGNvbW1lbmNlcyB0aGUgMTAgd2VlayBwcm9ncmFtXG4gICAgICAgICAgICBmb3IgYW55IHJlYXNvbiB3aGF0c29ldmVyLiBSaWJiaXQgJmFtcDsgUm9vIHNoYWxsIG5vdCBiZSBsaWFibGUgZm9yXG4gICAgICAgICAgICBhbnkgbG9zcyBvciBkYW1hZ2Ugd2hhdHNvZXZlciBhcmlzaW5nIGZyb20gc3VjaCBjYW5jZWxsYXRpb24uIEluIHRoZVxuICAgICAgICAgICAgZXZlbnQgb2YgY2FuY2VsbGF0aW9uIGJ5IFJpYmJpdCAmYW1wOyBSb28gcHJpb3IgdG8gdGhlIGNvbW1lbmNlbWVudFxuICAgICAgICAgICAgb2YgdGhlIDEwIHdlZWsgcHJvZ3JhbSwgUmliYml0ICZhbXA7IFJvbyB3aWxsIHJlZnVuZCBhbnkgZmVlcyBmb3JcbiAgICAgICAgICAgIG91dHN0YW5kaW5nIHNlc3Npb25zLiBJZiBjbGFzc2VzIGFyZSBjYW5jZWxsZWQgYXMgYSByZXN1bHQgb2ZcbiAgICAgICAgICAgIGV4dHJlbWUgd2VhdGhlciBjb25kaXRpb25zIG9yIHdoZXJlIGxvY2FsIGF1dGhvcml0aWVzL3B1YmxpY1xuICAgICAgICAgICAgZ3VpZGFuY2UgYWR2aXNlIHRoYXQgc2Vzc2lvbnMgc2hvdWxkIGJlIHRlbXBvcmFyaWx5IHN1c3BlbmRlZCBmb3JcbiAgICAgICAgICAgIGhlYWx0aCBvciBvdGhlciByZWFzb25zLCB0aGVuIGEgbWFrZSB1cCBsZXNzb24gd2lsbCBiZSBncmFudGVkLlxuICAgICAgICAgICAgUGxlYXNlIHNlZSB0aGUgbWFrZSB1cCBsZXNzb24gcG9saWN5LiBJbiB0aGUgZXZlbnQgb2YgYSAnbGFzdFxuICAgICAgICAgICAgbWludXRlJyBsZXNzb24gY2hhbmdlIG9yIGEgbGVzc29uIGNhbmNlbGxhdGlvbiBieSBSaWJiaXQgJmFtcDsgUm9vLFxuICAgICAgICAgICAgd2Ugd2lsbCBub3RpZnkgeW91IHdpdGggYXMgbXVjaCBub3RpY2UgYXMgcG9zc2libGUuIFJpYmJpdCAmYW1wOyBSb29cbiAgICAgICAgICAgIHdpbGwgbm90IHJlaW1idXJzZSBhbnkgZXhwZW5zZXMgaW5jdXJyZWQgYnkgYSBjdXN0b21lciBmYWlsaW5nIHRvXG4gICAgICAgICAgICBhY2tub3dsZWRnZSB0aGlzIGNvbW11bmljYXRpb24uIFNob3VsZCB5b3UgZGVjaWRlIHRvIGxlYXZlIGFuXG4gICAgICAgICAgICBlbnJvbGxlZCBSaWJiaXQgJmFtcDsgUm9vIHByb2dyYW0gYmVmb3JlIHRoZSBtYWtlIHVwIGxlc3NvbiBjcmVkaXRcbiAgICAgICAgICAgIGhhcyBiZWVuIHVzZWQgd2Ugd2lsbCByZWZ1bmQgdGhlIGNyZWRpdCB0byB5b3UuIElmIGluc3VmZmljaWVudFxuICAgICAgICAgICAgY2hpbGRyZW4gYXJlIGJvb2tlZCBpbnRvIHlvdXIgc2Vzc2lvbiwgd2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG9cbiAgICAgICAgICAgIGNhbmNlbCBvciBjaGFuZ2UgdGhlIGNsYXNzLiBJbiB0aGlzIGluc3RhbmNlIHdlIHdpbGwgb2ZmZXIgeW91XG4gICAgICAgICAgICBlaXRoZXIgYW4gYWx0ZXJuYXRpdmUgc2Vzc2lvbiB0byBhdHRlbmQgb3IgYSByZWZ1bmQgd2lsbCBiZSBnaXZlblxuICAgICAgICAgICAgZm9yIGFueSByZW1haW5pbmcgc2Vzc2lvbnMgYWZ0ZXIgdGhlIGNhbmNlbGxhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJBdHRlbmRhbmNlXCI+XG4gICAgICAgICAgWW91ciBwYXltZW50IGhhcyByZXNlcnZlZCB5b3VyIHBsYWNlIGp1c3QgZm9yIHlvdSBzbyBpZiB5b3Uga25vdyB5b3VcbiAgICAgICAgICBhcmUgdW5hYmxlIHRvIGF0dGVuZCBhIGxlc3NvbiwgcGxlYXNlIGxldCB1cyBrbm93IHdpdGggYXMgbXVjaCBub3RpY2VcbiAgICAgICAgICBhcyBwb3NzaWJsZSBieSBlbWFpbGluZyBvciB0ZWxlcGhvbmluZyBKZW5ueSBhdFxuICAgICAgICAgIGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1IG9yICs2MTQwNjYwMzU4My4gVGhlIFBhcmVudC9jYXJlclxuICAgICAgICAgIHVuZGVyc3RhbmRzIHRoYXQgc2Vzc2lvbnMgYXJlIG9uZ29pbmcgYW5kIHRvIGJlIHVzZWQgY29uc2VjdXRpdmVseS4gTm9cbiAgICAgICAgICBjcmVkaXRzIG9yIHJlZnVuZHMgd2lsbCBiZSBpc3N1ZWQgZm9yIG1pc3NlZCBjbGFzc2VzLiBObyByZWZ1bmRzIHdpbGxcbiAgICAgICAgICBiZSBnaXZlbiBpZiB5b3UgY2hhbmdlIHlvdXIgbWluZCBhYm91dCB5b3VyIGNoaWxkIHBhcnRpY2lwYXRpbmcgaW4gdGhlXG4gICAgICAgICAgcHJvZ3JhbS4gQ2xhc3MgYXR0ZW5kYW5jZSBoYXMgYmVlbiBsaW1pdGVkIHRvIDEwIGNoaWxkcmVuIHBlciBjbGFzcy5cbiAgICAgICAgICBJZiB0aGUgcGxheSBzZXNzaW9ucyByZWFjaCBjYXBhY2l0eSB3ZSB3aWxsIHVwZGF0ZSBvdXIgYm9va2luZyBzeXN0ZW1cbiAgICAgICAgICB0byBzdG9wIGFsbCBuZXcgZW5yb2xtZW50cyB1bnRpbCB0aGUgZm9sbG93aW5nIHRlcm0uXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJNQUtFIFVQIExFU1NPTlMgJmFtcDsgQk9OVVMgU0VTU0lPTlNcIj5cbiAgICAgICAgICBJZiB5b3UgY2Fubm90IGF0dGVuZCBhIGxlc3NvbiBhbmQgbm90aWZ5IHVzIHByaW9yIHRvIHlvdXIgc2Vzc2lvbiB5b3VcbiAgICAgICAgICBhcmUgZWxpZ2libGUgZm9yIGEgbWFrZSB1cCBsZXNzb24uIFRoaXMgbWFrZSB1cCBsZXNzb24gbXVzdCBiZSB1c2VkIGluXG4gICAgICAgICAgYW5vdGhlciBzZXNzaW9uIG90aGVyIHRoYW4geW91ciBzY2hlZHVsZWQgZGF5IChlLmcuIGlmIHlvdSBhdHRlbmQgb24gYVxuICAgICAgICAgIFR1ZXNkYXksIHlvdXIgbWFrZSB1cCBsZXNzb24gbXVzdCBiZSB1c2VkIGluIGFuIGF2YWlsYWJsZSBXZWRuZXNkYXlcbiAgICAgICAgICBzZXNzaW9uKS4gQSBtYXhpbXVtIG9mIDIgbWFrZSB1cCBsZXNzb25zIGNhbiBiZSB1c2VkIGluIGEgMTAgd2Vla1xuICAgICAgICAgIHBlcmlvZC4gTWFrZSB1cCBsZXNzb25zIHdpbGwgYmUgYXJyYW5nZWQgZm9yIGFueSBjYW5jZWxsYXRpb25zIG1hZGUgYnlcbiAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vIGZvciBzZXZlcmUgd2VhdGhlciwgc2ljayBzdGFmZiBtZW1iZXJzIG9yIHJlYXNvbnMgd2VcbiAgICAgICAgICBmZWVsIGFyZSBvZiBkYW5nZXIgdG8gb3VyIHBhcnRpY2lwYW50cyBhbmQgc3RhZmYgbWVtYmVycy5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBJZiB5b3UgYXJlIGVudGl0bGVkIHRvIGEgZnJlZSBib251cyBzZXNzaW9uIGFmdGVyIGVucm9sbGluZyB3aXRoXG4gICAgICAgICAgUmliYml0ICZhbXA7IFJvbywgdGhlcmUgd2lsbCBiZSBhIGFkZGVkIHNlc3Npb24gYXQgdGhlIGVuZCBvZiB5b3VyIDEwXG4gICAgICAgICAgd2VlayBwcm9ncmFtIGF2YWlsYWJsZSBmb3IgeW91IHRvIGJvb2suIEJvbnVzIHNlc3Npb25zIHNob3VsZCBiZVxuICAgICAgICAgIGJvb2tlZCB3aXRoIGFzIG11Y2ggbm90aWNlIGFzIHBvc3NpYmxlLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPFBhcmFncmFwaCBoZWFkaW5nPVwiSEVBTFRIICZhbXA7IFNBRkVUWVwiPlxuICAgICAgICAgIFRoZSBzYWZldHkgb2YgYWxsIHRoZSBjaGlsZHJlbiBhdHRlbmRpbmcgb3VyIHBsYXkgc2Vzc2lvbnMgaXMgb2YgdGhlXG4gICAgICAgICAgZ3JlYXRlc3QgaW1wb3J0YW5jZSB0byB1cy4gRHVlIHRvIHRoZSBuYXR1cmUgb2YgdGhlIHBsYXkgc2Vzc2lvbnMgYW5kXG4gICAgICAgICAgdGhlIGFnZSBvZiB0aGUgY2hpbGQocmVuKSBhdHRlbmRpbmcsIHlvdXIgY2hpbGQocmVuKSByZW1haW4geW91clxuICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IHdoaWxlIGF0dGVuZGluZyBhbmQgbXVzdCBiZSBzdXBlcnZpc2VkIHRocm91Z2hvdXQuIElmXG4gICAgICAgICAgeW91IGxlYXZlIHRoZSBwbGF5IHNlc3Npb24gdmVudWUgZm9yIGFueSByZWFzb24geW91IG11c3QgdGFrZSB5b3VyXG4gICAgICAgICAgY2hpbGQocmVuKSB3aXRoIHlvdS4gV2UgYWNjZXB0IG5vIHJlc3BvbnNpYmlsaXR5IGZvciBhbnkgaW5qdXJ5IGNhdXNlZFxuICAgICAgICAgIGR1cmluZyBhIHBsYXkgc2Vzc2lvbi4gUGxlYXNlIGJlIGFkdmlzZWQgdGhhdCB3ZSBoYXZlIGEgZmlyc3QgYWlkIGtpdFxuICAgICAgICAgIG9uIHNpdGUgYW5kIGZpcnN0IGFpZCB3aWxsIGJlIGdpdmVuIHRvIHlvdXIgY2hpbGQgaW4gdGhlIGV2ZW50IGFuXG4gICAgICAgICAgYWNjaWRlbnQvaW5qdXJ5IG9jY3VycyBhdCBhIHBsYXkgc2Vzc2lvbi4gV2UgYWNjZXB0IG5vIHJlc3BvbnNpYmlsaXR5XG4gICAgICAgICAgZm9yIGFueSBiZWxvbmdpbmdzIHRoYXQgZ2V0IGxvc3Qgb3IgZGFtYWdlZC4gV2UgcG9saXRlbHkgYXNrIHRoYXRcbiAgICAgICAgICBwYXJlbnRzIGFuZCBjaGlsZHJlbiBkbyBub3QgYXR0ZW5kIGlmIGVpdGhlciBhcmUgZmVlbGluZyB1bndlbGwuIFdlXG4gICAgICAgICAgYXJlIGEgc21va2UgZnJlZSB6b25lIGZvciB0aGUgc2FmZXR5IG9mIG91ciBwYXJ0aWNpcGF0aW5nIGNoaWxkcmVuIGFuZFxuICAgICAgICAgIGZhbWlsaWVzIGFuZCB0aGUgc3Vycm91bmRpbmcgZW52aXJvbm1lbnQuIEFueSBwYXJlbnRzL2NhcmVycyB3aG8gYXJlXG4gICAgICAgICAgc2VlbiBzbW9raW5nIGF0IHRoZSB0aW1lIG9mIGEgcGxheSBzZXNzaW9uIHdpbGwgYmUgYXNrZWQgdG8gbGVhdmUgdGhlXG4gICAgICAgICAgcGxheSBzZXNzaW9uIHdpdGggdGhlaXIgY2hpbGQuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJQSE9UT0dSUEFIWSAmYW1wOyBTT0NJQUwgTUVESUFcIj5cbiAgICAgICAgICBQbGVhc2UgYmUgYXdhcmUgdGhhdCBieSBlbnJvbGxpbmcgeW91ciBjaGlsZChyZW4pIGluIGFueSBSaWJiaXQgJmFtcDtcbiAgICAgICAgICBSb28gUGxheSBTZXNzaW9uIHByb2dyYW0sIHlvdSBhcmUgZ3JhbnRpbmcgdXMgcGVybWlzc2lvbiB0byBwaG90b2dyYXBoXG4gICAgICAgICAgb3IgcmVjb3JkIHNob3J0IHZpZGVvIGNsaXBzIG9mIHlvdXIgY2hpbGQocmVuKSBkdXJpbmcgdGhlIHBsYXlcbiAgICAgICAgICBzZXNzaW9ucyB0aGF0IHdlIG1heSB1c2UgZm9yIFJpYmJpdCAmYW1wOyBSb28gcHJvbW90aW9uYWwgcHVycG9zZXMgb25cbiAgICAgICAgICBvdXIgc29jaWFsIG1lZGlhIGFuZC9vciB3ZWJzaXRlLiBObyBkYXRhIHVuZGVyIGFueSBjaXJjdW1zdGFuY2Ugd2lsbFxuICAgICAgICAgIGJlIHBhc3NlZCBvdmVyIHRvIGEgdGhpcmQgcGFydHkuIElmIHlvdSBkbyBub3Qgd2lzaCB0byBwcm92aWRlIGNvbnNlbnRcbiAgICAgICAgICBmb3IgdGhpcyB0aGVuIHlvdSBuZWVkIHRvIG5vdGlmeSBKZW5ueSBpbiB3cml0aW5nIGF0XG4gICAgICAgICAgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUgYW5kIG5vdGlmeSBKZW5ueSBpbiBwZXJzb24gYXQgeW91ciBwbGF5XG4gICAgICAgICAgc2Vzc2lvbi5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGggaGVhZGluZz1cIkNPTlRBQ1RcIj5cbiAgICAgICAgICBGb3Igc3BlY2lmaWMgcXVlc3Rpb25zIGFib3V0IFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucywgcGxlYXNlXG4gICAgICAgICAgY29udGFjdCBKZW5ueSBkaXJlY3RseSBhdCBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdS4gSWYgd2UgaGF2ZSB0b1xuICAgICAgICAgIGNvbnRhY3QgeW91IHdlIHdpbGwgZG8gc28gaW4gd3JpdGluZyB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzIHlvdVxuICAgICAgICAgIHByb3ZpZGVkIHVzIGluIHlvdXIgcmVnaXN0cmF0aW9uLCBvciBieSB0ZWxlcGhvbmUgb3IgdGV4dCBtZXNzYWdlIHdpdGhcbiAgICAgICAgICB0aGUgcGhvbmUgbnVtYmVyIHlvdSBwcm92aWRlZCB1cyBpbiB5b3VyIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8L1NpbmdsZUNvbHVtbj5cbiAgICA8L1BhZ2VUZW1wbGF0ZT5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==