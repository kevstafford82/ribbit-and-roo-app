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
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mb-8",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules/footer */ "./components/modules/footer.tsx");
/* harmony import */ var _components_modules_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/title */ "./components/modules/title.tsx");
/* harmony import */ var _components_modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/menu */ "./components/modules/menu.tsx");
/* harmony import */ var _components_modules_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/paragraph */ "./components/modules/paragraph.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\pages\\index.tsx";





function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Ribbit & Roo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
        heading: "Terms and Conditions",
        subheading: "The small print"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto px-32",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
          heading: "TERMS & CONDITIONS",
          children: "Please read these terms carefully before you book any of our Ribbit & Roo play sessions. These terms tell you about Ribbit & Roo, how we will provide play sessions to you, how you or Ribbit & Roo may change or end the contract, what to do if there is an issue and other important information. If you think that there is a mistake in these terms, please contact us at jennyh@ribbitandroo.com.au to discuss."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
          heading: "ACCEPTANCE OF TERMS & CONDITIONS",
          children: "All those who wish to attend any Ribbit & Roo play session must agree to the terms and conditions set out below. These are the terms and conditions which we provide Ribbit & Roo play sessions to you and your child(ren). No variation or addition to the terms shall be binding unless agreed in writing by Ribbit & Roo and the parent. In the unlikely event of a customer failing to abide by these terms and conditions, a customer may be requested to discontinue with any Ribbit & Roo play session. In this instance Ribbit & Roo will be under no obligation to provide a refund for any outstanding lessons. The Parent must agree to keep the play session's content confidential and not to copy or use any content of the program directly or indirectly. At the time of publishing all session information is correct."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "ENROLMENTS, PAYMENT & CANCELLATIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Enrolments "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Enrolments will not be accepted without payment. Please ensure you have transferred the funds for your 10 week enrolment before your child\u2019s first session. Also please ensure you have read and understood the enrolment, payment & cancellations policy and the refund & missed session policy. You can book a Ribbit & Roo play session by visiting www.ribbitandroo.com.au/play-sessions and by registering using our registration form. You must provide us with the specific information we need in order to enrol in a session with us. During the enrolment process, you will be asked to read and agree to our Terms and Conditions (this document). Once registered, Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your chosen play session. You are eligible for a free trial session when registering. When registering for a free trial you must press the 'Register for a Free Trial' button to submit your details. Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your free trial play session. After completing your play session free trial, if you choose to enrol in a 10 week Ribbit & Roo program you must re register at www.ribbitandroo.com.au/play-sessions and submit 'Register and Book'. This will transfer you to the payment page. Please note, that if you wish to enrol after your free trial we cannot guarantee that there will be available spaces in our 10 week program. Our play sessions are open to enrolments until we are sold out."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["The 10 week term is paid for in advance and must be paid in full prior to you child attending their first session. If you wish to re enrol for our next 10 week term you can do so by registering at www.ribbitandroo.com.au/play-sessions and submitting the button 'Register and Book'. It is your responsibility to make sure that there are sufficient funds in your account and that the saved card is valid. If a payment has failed, you will be notified and another form of payment/credit card must be used. The Fee is non-refundable under any circumstances whatsoever except with the prior written agreement of Ribbit & Roo. If the cost of the sessions change you will be notified prior to the start of the following term.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), "We will accept the following methods of payment: Visa, MasterCard and American Express"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["All refund requests must be in writing to Jenny at jennyh@ribbitandroo.com.au.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), "Cancellation by Ribbit & Roo - Ribbit & Roo may cancel this contract at any time before the child commences the 10 week program for any reason whatsoever. Ribbit & Roo shall not be liable for any loss or damage whatsoever arising from such cancellation. In the event of cancellation by Ribbit & Roo prior to the commencement of the 10 week program, Ribbit & Roo will refund any fees for outstanding sessions. If classes are cancelled as a result of extreme weather conditions or where local authorities/public guidance advise that sessions should be temporarily suspended for health or other reasons, then a make up lesson will be granted. Please see the make up lesson policy. In the event of a 'last minute' lesson change or a lesson cancellation by Ribbit & Roo, we will notify you with as much notice as possible. Ribbit & Roo will not reimburse any expenses incurred by a customer failing to acknowledge this communication. Should you decide to leave an enrolled Ribbit & Roo program before the make up lesson credit has been used we will refund the credit to you. If insufficient children are booked into your session, we reserve the right to cancel or change the class. In this instance we will offer you either an alternative session to attend or a refund will be given for any remaining sessions after the cancellation."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "Attendance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Your payment has reserved your place just for you so if you know you are unable to attend a lesson, please let us know with as much notice as possible by emailing or telephoning Jenny at jennyh@ribbitandroo.com.au or +61406603583. The Parent/carer understands that sessions are ongoing and to be used consecutively. No credits or refunds will be issued for missed classes. No refunds will be given if you change your mind about your child participating in the program. Class attendance has been limited to 10 children per class. If the play sessions reach capacity we will update our booking system to stop all new enrolments until the following term."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "MAKE UP LESSONS & BONUS SESSIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["If you cannot attend a lesson and notify us prior to your session you are eligible for a make up lesson. This make up lesson must be used in another session other than your scheduled day (e.g. if you attend on a Tuesday, your make up lesson must be used in an available Wednesday session). A maximum of 2 make up lessons can be used in a 10 week period. Make up lessons will be arranged for any cancellations made by Ribbit & Roo for severe weather, sick staff members or reasons we feel are of danger to our participants and staff members.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), "If you are entitled to a free bonus session after enrolling with Ribbit & Roo, there will be a added session at the end of your 10 week program available for you to book. Bonus sessions should be booked with as much notice as possible."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "HEALTH & SAFETY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "The safety of all the children attending our play sessions is of the greatest importance to us. Due to the nature of the play sessions and the age of the child(ren) attending, your child(ren) remain your responsibility while attending and must be supervised throughout. If you leave the play session venue for any reason you must take your child(ren) with you. We accept no responsibility for any injury caused during a play session. Please be advised that we have a first aid kit on site and first aid will be given to your child in the event an accident/injury occurs at a play session. We accept no responsibility for any belongings that get lost or damaged. We politely ask that parents and children do not attend if either are feeling unwell. We are a smoke free zone for the safety of our participating children and families and the surrounding environment. Any parents/carers who are seen smoking at the time of a play session will be asked to leave the play session with their child."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "PHOTOGRPAHY & SOCIAL MEDIA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Please be aware that by enrolling your child(ren) in any Ribbit & Roo Play Session program, you are granting us permission to photograph or record short video clips of your child(ren) during the play sessions that we may use for Ribbit & Roo promotional purposes on our social media and/or website. No data under any circumstance will be passed over to a third party. If you do not wish to provide consent for this then you need to notify Jenny in writing at jennyh@ribbitandroo.com.au and notify Jenny in person at your play session."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "CONTACT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "For specific questions about Ribbit & Roo play sessions, please contact Jenny directly at jennyh@ribbitandroo.com.au. If we have to contact you we will do so in writing with the email address you provided us in your registration, or by telephone or text message with the phone number you provided us in your registration."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lbGVtZW50cy9wLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZHVsZXMvZm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZHVsZXMvbWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3BhcmFncmFwaC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2R1bGVzL3RpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUCIsInByb3BzIiwiY2hpbGRyZW4iLCJGb290ZXIiLCJNZW51IiwiUGFyYWdyYXBoIiwiaGVhZGluZyIsIlRpdGxlIiwic3ViaGVhZGluZyIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7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LE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBc0xFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0TEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwTEQsQzs7Ozs7Ozs7Ozs7QUNqTUQsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImNvbnN0IFAgPSAocHJvcHMpID0+IDxwPntwcm9wcy5jaGlsZHJlbn08L3A+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUDtcclxuIiwiaW1wb3J0IFAgZnJvbSBcIi4uL2VsZW1lbnRzL3BcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTIwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBteC1hdXRvIHctbWF4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMyIHctYXV0b1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi9SaWJiaXRBbmRSb28ucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiUklCQklUICZhbXA7IFJPT1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTIwXCI+XHJcbiAgICAgICAgICA8UD5SaWJiaXQgJmFtcDsgUm9vIMKpPC9QPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZml4ZWQgdy1mdWxsXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBoLTE2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgc206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIHsvKk1vYmlsZSBtZW51IGJ1dHRvbiovfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByb3VuZGVkLW1kIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLXdoaXRlXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgey8qXHJcbiAgICAgIEljb24gd2hlbiBtZW51IGlzIGNsb3NlZC5cclxuXHJcbiAgICAgIEhlcm9pY29uIG5hbWU6IG91dGxpbmUvbWVudVxyXG5cclxuICAgICAgTWVudSBvcGVuOiBcImhpZGRlblwiLCBNZW51IGNsb3NlZDogXCJibG9ja1wiXHJcbiAgICAqL31cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgey8qXHJcbiAgICAgIEljb24gd2hlbiBtZW51IGlzIG9wZW4uXHJcblxyXG4gICAgICBIZXJvaWNvbiBuYW1lOiBvdXRsaW5lL3hcclxuXHJcbiAgICAgIE1lbnUgb3BlbjogXCJibG9ja1wiLCBNZW51IGNsb3NlZDogXCJoaWRkZW5cIlxyXG4gICovfVxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUklCQklUICZhbXA7IFJPT1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlJJQkJJVCAmYW1wOyBST088L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4ganVzdGlmeS1lbmQgc206YmxvY2sgc206bWwtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktZ3JlZW4gdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFYXJseSBDaGlsZGNhcmUgUHJvZ3JhbXNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVGVzdGFtb25pYWxzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qTW9iaWxlIG1lbnUsIHNob3cvaGlkZSBiYXNlZCBvbiBtZW51IHN0YXRlLiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIiBpZD1cIm1vYmlsZS1tZW51XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB0LTIgcGItMyBzcGFjZS15LTFcIj5cclxuICAgICAgICAgIHsvKkN1cnJlbnQ6IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiLCBEZWZhdWx0OiBcInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiICovfVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWdyZWVuIHRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVhcmx5IENoaWxkaG9vZCBQcm9ncmFtc1xyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2FsbGVyeVxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1wcmltYXJ5LWdyZWVuIGhvdmVyOnRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVGVzdGFtb25pYWxzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsInR5cGUgTmV3VHlwZSA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGhlYWRpbmc6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgUGFyYWdyYXBoUHJvcHMgPSBOZXdUeXBlO1xyXG5cclxuY29uc3QgUGFyYWdyYXBoID0gKHsgY2hpbGRyZW4sIGhlYWRpbmcgfTogUGFyYWdyYXBoUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIG1iLTRcIj57aGVhZGluZ308L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+e2NoaWxkcmVufTwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcclxuIiwidHlwZSBUaXRsZVByb3BzID0ge1xyXG4gIGhlYWRpbmc6IHN0cmluZztcclxuICBzdWJoZWFkaW5nOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBUaXRsZSA9ICh7IGhlYWRpbmcsIHN1YmhlYWRpbmcgfTogVGl0bGVQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLTk2IG1iLThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGJnLWNvdmVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNzVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgYmctY292ZXIgYmctZml4ZWQgYmctY2VudGVyIGJnLWhlcm8taW1hZ2UgcC0yMCBwdC00OCB0ZXh0LXdoaXRlIGZvbnQtbm9ybWFsIGxlYWRpbmctbG9vc2UgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57aGVhZGluZ308L2gzPlxyXG4gICAgICAgICAgPHA+e3N1YmhlYWRpbmd9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kdWxlcy9mb290ZXJcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2R1bGVzL3RpdGxlXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2R1bGVzL21lbnVcIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kdWxlcy9wYXJhZ3JhcGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJpYmJpdCAmYW1wOyBSb288L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8TWVudSAvPlxuICAgICAgICA8VGl0bGUgaGVhZGluZz1cIlRlcm1zIGFuZCBDb25kaXRpb25zXCIgc3ViaGVhZGluZz1cIlRoZSBzbWFsbCBwcmludFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtMzJcIj5cbiAgICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJURVJNUyAmYW1wOyBDT05ESVRJT05TXCI+XG4gICAgICAgICAgICBQbGVhc2UgcmVhZCB0aGVzZSB0ZXJtcyBjYXJlZnVsbHkgYmVmb3JlIHlvdSBib29rIGFueSBvZiBvdXIgUmliYml0XG4gICAgICAgICAgICAmYW1wOyBSb28gcGxheSBzZXNzaW9ucy4gVGhlc2UgdGVybXMgdGVsbCB5b3UgYWJvdXQgUmliYml0ICZhbXA7XG4gICAgICAgICAgICBSb28sIGhvdyB3ZSB3aWxsIHByb3ZpZGUgcGxheSBzZXNzaW9ucyB0byB5b3UsIGhvdyB5b3Ugb3IgUmliYml0XG4gICAgICAgICAgICAmYW1wOyBSb28gbWF5IGNoYW5nZSBvciBlbmQgdGhlIGNvbnRyYWN0LCB3aGF0IHRvIGRvIGlmIHRoZXJlIGlzIGFuXG4gICAgICAgICAgICBpc3N1ZSBhbmQgb3RoZXIgaW1wb3J0YW50IGluZm9ybWF0aW9uLiBJZiB5b3UgdGhpbmsgdGhhdCB0aGVyZSBpcyBhXG4gICAgICAgICAgICBtaXN0YWtlIGluIHRoZXNlIHRlcm1zLCBwbGVhc2UgY29udGFjdCB1cyBhdFxuICAgICAgICAgICAgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUgdG8gZGlzY3Vzcy5cbiAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJBQ0NFUFRBTkNFIE9GIFRFUk1TICZhbXA7IENPTkRJVElPTlNcIj5cbiAgICAgICAgICAgIEFsbCB0aG9zZSB3aG8gd2lzaCB0byBhdHRlbmQgYW55IFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9uIG11c3RcbiAgICAgICAgICAgIGFncmVlIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBzZXQgb3V0IGJlbG93LiBUaGVzZSBhcmUgdGhlIHRlcm1zXG4gICAgICAgICAgICBhbmQgY29uZGl0aW9ucyB3aGljaCB3ZSBwcm92aWRlIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucyB0b1xuICAgICAgICAgICAgeW91IGFuZCB5b3VyIGNoaWxkKHJlbikuIE5vIHZhcmlhdGlvbiBvciBhZGRpdGlvbiB0byB0aGUgdGVybXMgc2hhbGxcbiAgICAgICAgICAgIGJlIGJpbmRpbmcgdW5sZXNzIGFncmVlZCBpbiB3cml0aW5nIGJ5IFJpYmJpdCAmYW1wOyBSb28gYW5kIHRoZVxuICAgICAgICAgICAgcGFyZW50LiBJbiB0aGUgdW5saWtlbHkgZXZlbnQgb2YgYSBjdXN0b21lciBmYWlsaW5nIHRvIGFiaWRlIGJ5XG4gICAgICAgICAgICB0aGVzZSB0ZXJtcyBhbmQgY29uZGl0aW9ucywgYSBjdXN0b21lciBtYXkgYmUgcmVxdWVzdGVkIHRvXG4gICAgICAgICAgICBkaXNjb250aW51ZSB3aXRoIGFueSBSaWJiaXQgJmFtcDsgUm9vIHBsYXkgc2Vzc2lvbi4gSW4gdGhpcyBpbnN0YW5jZVxuICAgICAgICAgICAgUmliYml0ICZhbXA7IFJvbyB3aWxsIGJlIHVuZGVyIG5vIG9ibGlnYXRpb24gdG8gcHJvdmlkZSBhIHJlZnVuZCBmb3JcbiAgICAgICAgICAgIGFueSBvdXRzdGFuZGluZyBsZXNzb25zLiBUaGUgUGFyZW50IG11c3QgYWdyZWUgdG8ga2VlcCB0aGUgcGxheVxuICAgICAgICAgICAgc2Vzc2lvbidzIGNvbnRlbnQgY29uZmlkZW50aWFsIGFuZCBub3QgdG8gY29weSBvciB1c2UgYW55IGNvbnRlbnQgb2ZcbiAgICAgICAgICAgIHRoZSBwcm9ncmFtIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkuIEF0IHRoZSB0aW1lIG9mIHB1Ymxpc2hpbmcgYWxsXG4gICAgICAgICAgICBzZXNzaW9uIGluZm9ybWF0aW9uIGlzIGNvcnJlY3QuXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgIEVOUk9MTUVOVFMsIFBBWU1FTlQgJmFtcDsgQ0FOQ0VMTEFUSU9OU1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPkVucm9sbWVudHMgPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBFbnJvbG1lbnRzIHdpbGwgbm90IGJlIGFjY2VwdGVkIHdpdGhvdXQgcGF5bWVudC4gUGxlYXNlIGVuc3VyZSB5b3VcbiAgICAgICAgICAgIGhhdmUgdHJhbnNmZXJyZWQgdGhlIGZ1bmRzIGZvciB5b3VyIDEwIHdlZWsgZW5yb2xtZW50IGJlZm9yZSB5b3VyXG4gICAgICAgICAgICBjaGlsZOKAmXMgZmlyc3Qgc2Vzc2lvbi4gQWxzbyBwbGVhc2UgZW5zdXJlIHlvdSBoYXZlIHJlYWQgYW5kXG4gICAgICAgICAgICB1bmRlcnN0b29kIHRoZSBlbnJvbG1lbnQsIHBheW1lbnQgJmFtcDsgY2FuY2VsbGF0aW9ucyBwb2xpY3kgYW5kIHRoZVxuICAgICAgICAgICAgcmVmdW5kICZhbXA7IG1pc3NlZCBzZXNzaW9uIHBvbGljeS4gWW91IGNhbiBib29rIGEgUmliYml0ICZhbXA7IFJvb1xuICAgICAgICAgICAgcGxheSBzZXNzaW9uIGJ5IHZpc2l0aW5nIHd3dy5yaWJiaXRhbmRyb28uY29tLmF1L3BsYXktc2Vzc2lvbnMgYW5kXG4gICAgICAgICAgICBieSByZWdpc3RlcmluZyB1c2luZyBvdXIgcmVnaXN0cmF0aW9uIGZvcm0uIFlvdSBtdXN0IHByb3ZpZGUgdXMgd2l0aFxuICAgICAgICAgICAgdGhlIHNwZWNpZmljIGluZm9ybWF0aW9uIHdlIG5lZWQgaW4gb3JkZXIgdG8gZW5yb2wgaW4gYSBzZXNzaW9uIHdpdGhcbiAgICAgICAgICAgIHVzLiBEdXJpbmcgdGhlIGVucm9sbWVudCBwcm9jZXNzLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byByZWFkIGFuZFxuICAgICAgICAgICAgYWdyZWUgdG8gb3VyIFRlcm1zIGFuZCBDb25kaXRpb25zICh0aGlzIGRvY3VtZW50KS4gT25jZSByZWdpc3RlcmVkLFxuICAgICAgICAgICAgUmliYml0ICZhbXA7IFJvbyB3aWxsIHJlY2VpdmUgYSBjb25maXJtYXRpb24gZW1haWwgd2l0aCB5b3VyIGRldGFpbHNcbiAgICAgICAgICAgIGFuZCB3aWxsIGNvbnRhY3QgeW91IHdpdGggZnVydGhlciBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGNob3NlbiBwbGF5XG4gICAgICAgICAgICBzZXNzaW9uLiBZb3UgYXJlIGVsaWdpYmxlIGZvciBhIGZyZWUgdHJpYWwgc2Vzc2lvbiB3aGVuIHJlZ2lzdGVyaW5nLlxuICAgICAgICAgICAgV2hlbiByZWdpc3RlcmluZyBmb3IgYSBmcmVlIHRyaWFsIHlvdSBtdXN0IHByZXNzIHRoZSAnUmVnaXN0ZXIgZm9yIGFcbiAgICAgICAgICAgIEZyZWUgVHJpYWwnIGJ1dHRvbiB0byBzdWJtaXQgeW91ciBkZXRhaWxzLiBSaWJiaXQgJmFtcDsgUm9vIHdpbGxcbiAgICAgICAgICAgIHJlY2VpdmUgYSBjb25maXJtYXRpb24gZW1haWwgd2l0aCB5b3VyIGRldGFpbHMgYW5kIHdpbGwgY29udGFjdCB5b3VcbiAgICAgICAgICAgIHdpdGggZnVydGhlciBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGZyZWUgdHJpYWwgcGxheSBzZXNzaW9uLiBBZnRlclxuICAgICAgICAgICAgY29tcGxldGluZyB5b3VyIHBsYXkgc2Vzc2lvbiBmcmVlIHRyaWFsLCBpZiB5b3UgY2hvb3NlIHRvIGVucm9sIGluIGFcbiAgICAgICAgICAgIDEwIHdlZWsgUmliYml0ICZhbXA7IFJvbyBwcm9ncmFtIHlvdSBtdXN0IHJlIHJlZ2lzdGVyIGF0XG4gICAgICAgICAgICB3d3cucmliYml0YW5kcm9vLmNvbS5hdS9wbGF5LXNlc3Npb25zIGFuZCBzdWJtaXQgJ1JlZ2lzdGVyIGFuZFxuICAgICAgICAgICAgQm9vaycuIFRoaXMgd2lsbCB0cmFuc2ZlciB5b3UgdG8gdGhlIHBheW1lbnQgcGFnZS4gUGxlYXNlIG5vdGUsIHRoYXRcbiAgICAgICAgICAgIGlmIHlvdSB3aXNoIHRvIGVucm9sIGFmdGVyIHlvdXIgZnJlZSB0cmlhbCB3ZSBjYW5ub3QgZ3VhcmFudGVlIHRoYXRcbiAgICAgICAgICAgIHRoZXJlIHdpbGwgYmUgYXZhaWxhYmxlIHNwYWNlcyBpbiBvdXIgMTAgd2VlayBwcm9ncmFtLiBPdXIgcGxheVxuICAgICAgICAgICAgc2Vzc2lvbnMgYXJlIG9wZW4gdG8gZW5yb2xtZW50cyB1bnRpbCB3ZSBhcmUgc29sZCBvdXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1sIG1iLTJcIj5QYXltZW50czwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgVGhlIDEwIHdlZWsgdGVybSBpcyBwYWlkIGZvciBpbiBhZHZhbmNlIGFuZCBtdXN0IGJlIHBhaWQgaW4gZnVsbFxuICAgICAgICAgICAgcHJpb3IgdG8geW91IGNoaWxkIGF0dGVuZGluZyB0aGVpciBmaXJzdCBzZXNzaW9uLiBJZiB5b3Ugd2lzaCB0byByZVxuICAgICAgICAgICAgZW5yb2wgZm9yIG91ciBuZXh0IDEwIHdlZWsgdGVybSB5b3UgY2FuIGRvIHNvIGJ5IHJlZ2lzdGVyaW5nIGF0XG4gICAgICAgICAgICB3d3cucmliYml0YW5kcm9vLmNvbS5hdS9wbGF5LXNlc3Npb25zIGFuZCBzdWJtaXR0aW5nIHRoZSBidXR0b25cbiAgICAgICAgICAgICdSZWdpc3RlciBhbmQgQm9vaycuIEl0IGlzIHlvdXIgcmVzcG9uc2liaWxpdHkgdG8gbWFrZSBzdXJlIHRoYXRcbiAgICAgICAgICAgIHRoZXJlIGFyZSBzdWZmaWNpZW50IGZ1bmRzIGluIHlvdXIgYWNjb3VudCBhbmQgdGhhdCB0aGUgc2F2ZWQgY2FyZFxuICAgICAgICAgICAgaXMgdmFsaWQuIElmIGEgcGF5bWVudCBoYXMgZmFpbGVkLCB5b3Ugd2lsbCBiZSBub3RpZmllZCBhbmQgYW5vdGhlclxuICAgICAgICAgICAgZm9ybSBvZiBwYXltZW50L2NyZWRpdCBjYXJkIG11c3QgYmUgdXNlZC4gVGhlIEZlZSBpcyBub24tcmVmdW5kYWJsZVxuICAgICAgICAgICAgdW5kZXIgYW55IGNpcmN1bXN0YW5jZXMgd2hhdHNvZXZlciBleGNlcHQgd2l0aCB0aGUgcHJpb3Igd3JpdHRlblxuICAgICAgICAgICAgYWdyZWVtZW50IG9mIFJpYmJpdCAmYW1wOyBSb28uIElmIHRoZSBjb3N0IG9mIHRoZSBzZXNzaW9ucyBjaGFuZ2VcbiAgICAgICAgICAgIHlvdSB3aWxsIGJlIG5vdGlmaWVkIHByaW9yIHRvIHRoZSBzdGFydCBvZiB0aGUgZm9sbG93aW5nIHRlcm0uXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFdlIHdpbGwgYWNjZXB0IHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBvZiBwYXltZW50OiBWaXNhLCBNYXN0ZXJDYXJkXG4gICAgICAgICAgICBhbmQgQW1lcmljYW4gRXhwcmVzc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtbCBtYi0yXCI+UGF5bWVudHM8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIEFsbCByZWZ1bmQgcmVxdWVzdHMgbXVzdCBiZSBpbiB3cml0aW5nIHRvIEplbm55IGF0XG4gICAgICAgICAgICBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdS5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgQ2FuY2VsbGF0aW9uIGJ5IFJpYmJpdCAmYW1wOyBSb28gLSBSaWJiaXQgJmFtcDsgUm9vIG1heSBjYW5jZWwgdGhpc1xuICAgICAgICAgICAgY29udHJhY3QgYXQgYW55IHRpbWUgYmVmb3JlIHRoZSBjaGlsZCBjb21tZW5jZXMgdGhlIDEwIHdlZWsgcHJvZ3JhbVxuICAgICAgICAgICAgZm9yIGFueSByZWFzb24gd2hhdHNvZXZlci4gUmliYml0ICZhbXA7IFJvbyBzaGFsbCBub3QgYmUgbGlhYmxlIGZvclxuICAgICAgICAgICAgYW55IGxvc3Mgb3IgZGFtYWdlIHdoYXRzb2V2ZXIgYXJpc2luZyBmcm9tIHN1Y2ggY2FuY2VsbGF0aW9uLiBJbiB0aGVcbiAgICAgICAgICAgIGV2ZW50IG9mIGNhbmNlbGxhdGlvbiBieSBSaWJiaXQgJmFtcDsgUm9vIHByaW9yIHRvIHRoZSBjb21tZW5jZW1lbnRcbiAgICAgICAgICAgIG9mIHRoZSAxMCB3ZWVrIHByb2dyYW0sIFJpYmJpdCAmYW1wOyBSb28gd2lsbCByZWZ1bmQgYW55IGZlZXMgZm9yXG4gICAgICAgICAgICBvdXRzdGFuZGluZyBzZXNzaW9ucy4gSWYgY2xhc3NlcyBhcmUgY2FuY2VsbGVkIGFzIGEgcmVzdWx0IG9mXG4gICAgICAgICAgICBleHRyZW1lIHdlYXRoZXIgY29uZGl0aW9ucyBvciB3aGVyZSBsb2NhbCBhdXRob3JpdGllcy9wdWJsaWNcbiAgICAgICAgICAgIGd1aWRhbmNlIGFkdmlzZSB0aGF0IHNlc3Npb25zIHNob3VsZCBiZSB0ZW1wb3JhcmlseSBzdXNwZW5kZWQgZm9yXG4gICAgICAgICAgICBoZWFsdGggb3Igb3RoZXIgcmVhc29ucywgdGhlbiBhIG1ha2UgdXAgbGVzc29uIHdpbGwgYmUgZ3JhbnRlZC5cbiAgICAgICAgICAgIFBsZWFzZSBzZWUgdGhlIG1ha2UgdXAgbGVzc29uIHBvbGljeS4gSW4gdGhlIGV2ZW50IG9mIGEgJ2xhc3RcbiAgICAgICAgICAgIG1pbnV0ZScgbGVzc29uIGNoYW5nZSBvciBhIGxlc3NvbiBjYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyxcbiAgICAgICAgICAgIHdlIHdpbGwgbm90aWZ5IHlvdSB3aXRoIGFzIG11Y2ggbm90aWNlIGFzIHBvc3NpYmxlLiBSaWJiaXQgJmFtcDsgUm9vXG4gICAgICAgICAgICB3aWxsIG5vdCByZWltYnVyc2UgYW55IGV4cGVuc2VzIGluY3VycmVkIGJ5IGEgY3VzdG9tZXIgZmFpbGluZyB0b1xuICAgICAgICAgICAgYWNrbm93bGVkZ2UgdGhpcyBjb21tdW5pY2F0aW9uLiBTaG91bGQgeW91IGRlY2lkZSB0byBsZWF2ZSBhblxuICAgICAgICAgICAgZW5yb2xsZWQgUmliYml0ICZhbXA7IFJvbyBwcm9ncmFtIGJlZm9yZSB0aGUgbWFrZSB1cCBsZXNzb24gY3JlZGl0XG4gICAgICAgICAgICBoYXMgYmVlbiB1c2VkIHdlIHdpbGwgcmVmdW5kIHRoZSBjcmVkaXQgdG8geW91LiBJZiBpbnN1ZmZpY2llbnRcbiAgICAgICAgICAgIGNoaWxkcmVuIGFyZSBib29rZWQgaW50byB5b3VyIHNlc3Npb24sIHdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvXG4gICAgICAgICAgICBjYW5jZWwgb3IgY2hhbmdlIHRoZSBjbGFzcy4gSW4gdGhpcyBpbnN0YW5jZSB3ZSB3aWxsIG9mZmVyIHlvdVxuICAgICAgICAgICAgZWl0aGVyIGFuIGFsdGVybmF0aXZlIHNlc3Npb24gdG8gYXR0ZW5kIG9yIGEgcmVmdW5kIHdpbGwgYmUgZ2l2ZW5cbiAgICAgICAgICAgIGZvciBhbnkgcmVtYWluaW5nIHNlc3Npb25zIGFmdGVyIHRoZSBjYW5jZWxsYXRpb24uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+QXR0ZW5kYW5jZTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgWW91ciBwYXltZW50IGhhcyByZXNlcnZlZCB5b3VyIHBsYWNlIGp1c3QgZm9yIHlvdSBzbyBpZiB5b3Uga25vdyB5b3VcbiAgICAgICAgICAgIGFyZSB1bmFibGUgdG8gYXR0ZW5kIGEgbGVzc29uLCBwbGVhc2UgbGV0IHVzIGtub3cgd2l0aCBhcyBtdWNoXG4gICAgICAgICAgICBub3RpY2UgYXMgcG9zc2libGUgYnkgZW1haWxpbmcgb3IgdGVsZXBob25pbmcgSmVubnkgYXRcbiAgICAgICAgICAgIGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1IG9yICs2MTQwNjYwMzU4My4gVGhlIFBhcmVudC9jYXJlclxuICAgICAgICAgICAgdW5kZXJzdGFuZHMgdGhhdCBzZXNzaW9ucyBhcmUgb25nb2luZyBhbmQgdG8gYmUgdXNlZCBjb25zZWN1dGl2ZWx5LlxuICAgICAgICAgICAgTm8gY3JlZGl0cyBvciByZWZ1bmRzIHdpbGwgYmUgaXNzdWVkIGZvciBtaXNzZWQgY2xhc3Nlcy4gTm8gcmVmdW5kc1xuICAgICAgICAgICAgd2lsbCBiZSBnaXZlbiBpZiB5b3UgY2hhbmdlIHlvdXIgbWluZCBhYm91dCB5b3VyIGNoaWxkIHBhcnRpY2lwYXRpbmdcbiAgICAgICAgICAgIGluIHRoZSBwcm9ncmFtLiBDbGFzcyBhdHRlbmRhbmNlIGhhcyBiZWVuIGxpbWl0ZWQgdG8gMTAgY2hpbGRyZW4gcGVyXG4gICAgICAgICAgICBjbGFzcy4gSWYgdGhlIHBsYXkgc2Vzc2lvbnMgcmVhY2ggY2FwYWNpdHkgd2Ugd2lsbCB1cGRhdGUgb3VyXG4gICAgICAgICAgICBib29raW5nIHN5c3RlbSB0byBzdG9wIGFsbCBuZXcgZW5yb2xtZW50cyB1bnRpbCB0aGUgZm9sbG93aW5nIHRlcm0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICBNQUtFIFVQIExFU1NPTlMgJmFtcDsgQk9OVVMgU0VTU0lPTlNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIElmIHlvdSBjYW5ub3QgYXR0ZW5kIGEgbGVzc29uIGFuZCBub3RpZnkgdXMgcHJpb3IgdG8geW91ciBzZXNzaW9uXG4gICAgICAgICAgICB5b3UgYXJlIGVsaWdpYmxlIGZvciBhIG1ha2UgdXAgbGVzc29uLiBUaGlzIG1ha2UgdXAgbGVzc29uIG11c3QgYmVcbiAgICAgICAgICAgIHVzZWQgaW4gYW5vdGhlciBzZXNzaW9uIG90aGVyIHRoYW4geW91ciBzY2hlZHVsZWQgZGF5IChlLmcuIGlmIHlvdVxuICAgICAgICAgICAgYXR0ZW5kIG9uIGEgVHVlc2RheSwgeW91ciBtYWtlIHVwIGxlc3NvbiBtdXN0IGJlIHVzZWQgaW4gYW5cbiAgICAgICAgICAgIGF2YWlsYWJsZSBXZWRuZXNkYXkgc2Vzc2lvbikuIEEgbWF4aW11bSBvZiAyIG1ha2UgdXAgbGVzc29ucyBjYW4gYmVcbiAgICAgICAgICAgIHVzZWQgaW4gYSAxMCB3ZWVrIHBlcmlvZC4gTWFrZSB1cCBsZXNzb25zIHdpbGwgYmUgYXJyYW5nZWQgZm9yIGFueVxuICAgICAgICAgICAgY2FuY2VsbGF0aW9ucyBtYWRlIGJ5IFJpYmJpdCAmYW1wOyBSb28gZm9yIHNldmVyZSB3ZWF0aGVyLCBzaWNrXG4gICAgICAgICAgICBzdGFmZiBtZW1iZXJzIG9yIHJlYXNvbnMgd2UgZmVlbCBhcmUgb2YgZGFuZ2VyIHRvIG91ciBwYXJ0aWNpcGFudHNcbiAgICAgICAgICAgIGFuZCBzdGFmZiBtZW1iZXJzLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBJZiB5b3UgYXJlIGVudGl0bGVkIHRvIGEgZnJlZSBib251cyBzZXNzaW9uIGFmdGVyIGVucm9sbGluZyB3aXRoXG4gICAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vLCB0aGVyZSB3aWxsIGJlIGEgYWRkZWQgc2Vzc2lvbiBhdCB0aGUgZW5kIG9mIHlvdXJcbiAgICAgICAgICAgIDEwIHdlZWsgcHJvZ3JhbSBhdmFpbGFibGUgZm9yIHlvdSB0byBib29rLiBCb251cyBzZXNzaW9ucyBzaG91bGQgYmVcbiAgICAgICAgICAgIGJvb2tlZCB3aXRoIGFzIG11Y2ggbm90aWNlIGFzIHBvc3NpYmxlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPkhFQUxUSCAmYW1wOyBTQUZFVFk8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIFRoZSBzYWZldHkgb2YgYWxsIHRoZSBjaGlsZHJlbiBhdHRlbmRpbmcgb3VyIHBsYXkgc2Vzc2lvbnMgaXMgb2YgdGhlXG4gICAgICAgICAgICBncmVhdGVzdCBpbXBvcnRhbmNlIHRvIHVzLiBEdWUgdG8gdGhlIG5hdHVyZSBvZiB0aGUgcGxheSBzZXNzaW9uc1xuICAgICAgICAgICAgYW5kIHRoZSBhZ2Ugb2YgdGhlIGNoaWxkKHJlbikgYXR0ZW5kaW5nLCB5b3VyIGNoaWxkKHJlbikgcmVtYWluIHlvdXJcbiAgICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IHdoaWxlIGF0dGVuZGluZyBhbmQgbXVzdCBiZSBzdXBlcnZpc2VkIHRocm91Z2hvdXQuIElmXG4gICAgICAgICAgICB5b3UgbGVhdmUgdGhlIHBsYXkgc2Vzc2lvbiB2ZW51ZSBmb3IgYW55IHJlYXNvbiB5b3UgbXVzdCB0YWtlIHlvdXJcbiAgICAgICAgICAgIGNoaWxkKHJlbikgd2l0aCB5b3UuIFdlIGFjY2VwdCBubyByZXNwb25zaWJpbGl0eSBmb3IgYW55IGluanVyeVxuICAgICAgICAgICAgY2F1c2VkIGR1cmluZyBhIHBsYXkgc2Vzc2lvbi4gUGxlYXNlIGJlIGFkdmlzZWQgdGhhdCB3ZSBoYXZlIGEgZmlyc3RcbiAgICAgICAgICAgIGFpZCBraXQgb24gc2l0ZSBhbmQgZmlyc3QgYWlkIHdpbGwgYmUgZ2l2ZW4gdG8geW91ciBjaGlsZCBpbiB0aGVcbiAgICAgICAgICAgIGV2ZW50IGFuIGFjY2lkZW50L2luanVyeSBvY2N1cnMgYXQgYSBwbGF5IHNlc3Npb24uIFdlIGFjY2VwdCBub1xuICAgICAgICAgICAgcmVzcG9uc2liaWxpdHkgZm9yIGFueSBiZWxvbmdpbmdzIHRoYXQgZ2V0IGxvc3Qgb3IgZGFtYWdlZC4gV2VcbiAgICAgICAgICAgIHBvbGl0ZWx5IGFzayB0aGF0IHBhcmVudHMgYW5kIGNoaWxkcmVuIGRvIG5vdCBhdHRlbmQgaWYgZWl0aGVyIGFyZVxuICAgICAgICAgICAgZmVlbGluZyB1bndlbGwuIFdlIGFyZSBhIHNtb2tlIGZyZWUgem9uZSBmb3IgdGhlIHNhZmV0eSBvZiBvdXJcbiAgICAgICAgICAgIHBhcnRpY2lwYXRpbmcgY2hpbGRyZW4gYW5kIGZhbWlsaWVzIGFuZCB0aGUgc3Vycm91bmRpbmcgZW52aXJvbm1lbnQuXG4gICAgICAgICAgICBBbnkgcGFyZW50cy9jYXJlcnMgd2hvIGFyZSBzZWVuIHNtb2tpbmcgYXQgdGhlIHRpbWUgb2YgYSBwbGF5XG4gICAgICAgICAgICBzZXNzaW9uIHdpbGwgYmUgYXNrZWQgdG8gbGVhdmUgdGhlIHBsYXkgc2Vzc2lvbiB3aXRoIHRoZWlyIGNoaWxkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgUEhPVE9HUlBBSFkgJmFtcDsgU09DSUFMIE1FRElBXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBQbGVhc2UgYmUgYXdhcmUgdGhhdCBieSBlbnJvbGxpbmcgeW91ciBjaGlsZChyZW4pIGluIGFueSBSaWJiaXRcbiAgICAgICAgICAgICZhbXA7IFJvbyBQbGF5IFNlc3Npb24gcHJvZ3JhbSwgeW91IGFyZSBncmFudGluZyB1cyBwZXJtaXNzaW9uIHRvXG4gICAgICAgICAgICBwaG90b2dyYXBoIG9yIHJlY29yZCBzaG9ydCB2aWRlbyBjbGlwcyBvZiB5b3VyIGNoaWxkKHJlbikgZHVyaW5nIHRoZVxuICAgICAgICAgICAgcGxheSBzZXNzaW9ucyB0aGF0IHdlIG1heSB1c2UgZm9yIFJpYmJpdCAmYW1wOyBSb28gcHJvbW90aW9uYWxcbiAgICAgICAgICAgIHB1cnBvc2VzIG9uIG91ciBzb2NpYWwgbWVkaWEgYW5kL29yIHdlYnNpdGUuIE5vIGRhdGEgdW5kZXIgYW55XG4gICAgICAgICAgICBjaXJjdW1zdGFuY2Ugd2lsbCBiZSBwYXNzZWQgb3ZlciB0byBhIHRoaXJkIHBhcnR5LiBJZiB5b3UgZG8gbm90XG4gICAgICAgICAgICB3aXNoIHRvIHByb3ZpZGUgY29uc2VudCBmb3IgdGhpcyB0aGVuIHlvdSBuZWVkIHRvIG5vdGlmeSBKZW5ueSBpblxuICAgICAgICAgICAgd3JpdGluZyBhdCBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdSBhbmQgbm90aWZ5IEplbm55IGluIHBlcnNvbiBhdFxuICAgICAgICAgICAgeW91ciBwbGF5IHNlc3Npb24uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+Q09OVEFDVDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgRm9yIHNwZWNpZmljIHF1ZXN0aW9ucyBhYm91dCBSaWJiaXQgJmFtcDsgUm9vIHBsYXkgc2Vzc2lvbnMsIHBsZWFzZVxuICAgICAgICAgICAgY29udGFjdCBKZW5ueSBkaXJlY3RseSBhdCBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdS4gSWYgd2UgaGF2ZSB0b1xuICAgICAgICAgICAgY29udGFjdCB5b3Ugd2Ugd2lsbCBkbyBzbyBpbiB3cml0aW5nIHdpdGggdGhlIGVtYWlsIGFkZHJlc3MgeW91XG4gICAgICAgICAgICBwcm92aWRlZCB1cyBpbiB5b3VyIHJlZ2lzdHJhdGlvbiwgb3IgYnkgdGVsZXBob25lIG9yIHRleHQgbWVzc2FnZVxuICAgICAgICAgICAgd2l0aCB0aGUgcGhvbmUgbnVtYmVyIHlvdSBwcm92aWRlZCB1cyBpbiB5b3VyIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9