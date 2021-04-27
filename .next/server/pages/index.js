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

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\pages\\index.tsx";

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Ribbit & Roo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
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
                  lineNumber: 24,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
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
                    lineNumber: 40,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
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
                    lineNumber: 62,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-shrink-0 flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "h-8 w-auto",
                src: "/logo.png",
                alt: "RIBBIT & ROO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "RIBBIT & ROO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                    lineNumber: 83,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                    children: "Early Childcare Programs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                    children: "Gallery"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-gray-300 hover:bg-primary-green hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                    children: "Testamonials"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 121,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
              children: "Early Childhood Programs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
              children: "Gallery"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "text-gray-300 hover:bg-primary-green hover:text-white block px-3 py-2 rounded-md text-base font-medium",
              children: "Testamonials"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "h-96 mb-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-full w-full bg-cover bg-black bg-opacity-75",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-full w-full bg-cover bg-fixed bg-center bg-hero-image p-20 pt-48 text-white font-normal leading-loose uppercase",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "text-3xl",
              children: "Terms and Conditions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "All the small print"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto px-32",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Please read these terms carefully before you book any of our Ribbit & Roo play sessions. These terms tell you about Ribbit & Roo, how we will provide play sessions to you, how you or Ribbit & Roo may change or end the contract, what to do if there is an issue and other important information. If you think that there is a mistake in these terms, please contact us at jennyh@ribbitandroo.com.au to discuss."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "ACCEPTANCE OF TERMS & CONDITIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "All those who wish to attend any Ribbit & Roo play session must agree to the terms and conditions set out below. These are the terms and conditions which we provide Ribbit & Roo play sessions to you and your child(ren). No variation or addition to the terms shall be binding unless agreed in writing by Ribbit & Roo and the parent. In the unlikely event of a customer failing to abide by these terms and conditions, a customer may be requested to discontinue with any Ribbit & Roo play session. In this instance Ribbit & Roo will be under no obligation to provide a refund for any outstanding lessons. The Parent must agree to keep the play session's content confidential and not to copy or use any content of the program directly or indirectly. At the time of publishing all session information is correct."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "ENROLMENTS, PAYMENT & CANCELLATIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Enrolments "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Enrolments will not be accepted without payment. Please ensure you have transferred the funds for your 10 week enrolment before your child\u2019s first session. Also please ensure you have read and understood the enrolment, payment & cancellations policy and the refund & missed session policy. You can book a Ribbit & Roo play session by visiting www.ribbitandroo.com.au/play-sessions and by registering using our registration form. You must provide us with the specific information we need in order to enrol in a session with us. During the enrolment process, you will be asked to read and agree to our Terms and Conditions (this document). Once registered, Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your chosen play session. You are eligible for a free trial session when registering. When registering for a free trial you must press the 'Register for a Free Trial' button to submit your details. Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your free trial play session. After completing your play session free trial, if you choose to enrol in a 10 week Ribbit & Roo program you must re register at www.ribbitandroo.com.au/play-sessions and submit 'Register and Book'. This will transfer you to the payment page. Please note, that if you wish to enrol after your free trial we cannot guarantee that there will be available spaces in our 10 week program. Our play sessions are open to enrolments until we are sold out."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["The 10 week term is paid for in advance and must be paid in full prior to you child attending their first session. If you wish to re enrol for our next 10 week term you can do so by registering at www.ribbitandroo.com.au/play-sessions and submitting the button 'Register and Book'. It is your responsibility to make sure that there are sufficient funds in your account and that the saved card is valid. If a payment has failed, you will be notified and another form of payment/credit card must be used. The Fee is non-refundable under any circumstances whatsoever except with the prior written agreement of Ribbit & Roo. If the cost of the sessions change you will be notified prior to the start of the following term.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, this), "We will accept the following methods of payment: Visa, MasterCard and American Express"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["All refund requests must be in writing to Jenny at jennyh@ribbitandroo.com.au.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, this), "Cancellation by Ribbit & Roo - Ribbit & Roo may cancel this contract at any time before the child commences the 10 week program for any reason whatsoever. Ribbit & Roo shall not be liable for any loss or damage whatsoever arising from such cancellation. In the event of cancellation by Ribbit & Roo prior to the commencement of the 10 week program, Ribbit & Roo will refund any fees for outstanding sessions. If classes are cancelled as a result of extreme weather conditions or where local authorities/public guidance advise that sessions should be temporarily suspended for health or other reasons, then a make up lesson will be granted. Please see the make up lesson policy. In the event of a 'last minute' lesson change or a lesson cancellation by Ribbit & Roo, we will notify you with as much notice as possible. Ribbit & Roo will not reimburse any expenses incurred by a customer failing to acknowledge this communication. Should you decide to leave an enrolled Ribbit & Roo program before the make up lesson credit has been used we will refund the credit to you. If insufficient children are booked into your session, we reserve the right to cancel or change the class. In this instance we will offer you either an alternative session to attend or a refund will be given for any remaining sessions after the cancellation."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "Attendance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Your payment has reserved your place just for you so if you know you are unable to attend a lesson, please let us know with as much notice as possible by emailing or telephoning Jenny at jennyh@ribbitandroo.com.au or +61406603583. The Parent/carer understands that sessions are ongoing and to be used consecutively. No credits or refunds will be issued for missed classes. No refunds will be given if you change your mind about your child participating in the program. Class attendance has been limited to 10 children per class. If the play sessions reach capacity we will update our booking system to stop all new enrolments until the following term."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "MAKE UP LESSONS & BONUS SESSIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["If you cannot attend a lesson and notify us prior to your session you are eligible for a make up lesson. This make up lesson must be used in another session other than your scheduled day (e.g. if you attend on a Tuesday, your make up lesson must be used in an available Wednesday session). A maximum of 2 make up lessons can be used in a 10 week period. Make up lessons will be arranged for any cancellations made by Ribbit & Roo for severe weather, sick staff members or reasons we feel are of danger to our participants and staff members.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, this), "If you are entitled to a free bonus session after enrolling with Ribbit & Roo, there will be a added session at the end of your 10 week program available for you to book. Bonus sessions should be booked with as much notice as possible."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "HEALTH & SAFETY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "The safety of all the children attending our play sessions is of the greatest importance to us. Due to the nature of the play sessions and the age of the child(ren) attending, your child(ren) remain your responsibility while attending and must be supervised throughout. If you leave the play session venue for any reason you must take your child(ren) with you. We accept no responsibility for any injury caused during a play session. Please be advised that we have a first aid kit on site and first aid will be given to your child in the event an accident/injury occurs at a play session. We accept no responsibility for any belongings that get lost or damaged. We politely ask that parents and children do not attend if either are feeling unwell. We are a smoke free zone for the safety of our participating children and families and the surrounding environment. Any parents/carers who are seen smoking at the time of a play session will be asked to leave the play session with their child."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "PHOTOGRPAHY & SOCIAL MEDIA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Please be aware that by enrolling your child(ren) in any Ribbit & Roo Play Session program, you are granting us permission to photograph or record short video clips of your child(ren) during the play sessions that we may use for Ribbit & Roo promotional purposes on our social media and/or website. No data under any circumstance will be passed over to a third party. If you do not wish to provide consent for this then you need to notify Jenny in writing at jennyh@ribbitandroo.com.au and notify Jenny in person at your play session."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "CONTACT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "For specific questions about Ribbit & Roo play sessions, please contact Jenny directly at jennyh@ribbitandroo.com.au. If we have to contact you we will do so in writing with the email address you provided us in your registration, or by telephone or text message with the phone number you provided us in your registration."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "bg-gray-200",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col mx-auto w-max justify-center ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mb-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "h-24 w-auto",
            src: "/logo.png",
            alt: "RIBBIT & ROO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Ribbit & Roo \xA9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUks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ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmliYml0ICZhbXA7IFJvbzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZml4ZWQgdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgaC0xNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgey8qTW9iaWxlIG1lbnUgYnV0dG9uKi99XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICBJY29uIHdoZW4gbWVudSBpcyBjbG9zZWQuXG5cbiAgICAgICAgICAgIEhlcm9pY29uIG5hbWU6IG91dGxpbmUvbWVudVxuXG4gICAgICAgICAgICBNZW51IG9wZW46IFwiaGlkZGVuXCIsIE1lbnUgY2xvc2VkOiBcImJsb2NrXCJcbiAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgIEljb24gd2hlbiBtZW51IGlzIG9wZW4uXG5cbiAgICAgICAgICAgIEhlcm9pY29uIG5hbWU6IG91dGxpbmUveFxuXG4gICAgICAgICAgICBNZW51IG9wZW46IFwiYmxvY2tcIiwgTWVudSBjbG9zZWQ6IFwiaGlkZGVuXCJcbiAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlJJQkJJVCAmYW1wOyBST09cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHA+UklCQklUICZhbXA7IFJPTzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIHNtOml0ZW1zLXN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBqdXN0aWZ5LWVuZCBzbTpibG9jayBzbTptbC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBDdXJyZW50OiBcImJnLWdyYXktOTAwIHRleHQtd2hpdGVcIiwgRGVmYXVsdDogXCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGVcIiAtLT4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXByaW1hcnktZ3JlZW4gdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRWFybHkgQ2hpbGRjYXJlIFByb2dyYW1zXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEdhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgVGVzdGFtb25pYWxzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qTW9iaWxlIG1lbnUsIHNob3cvaGlkZSBiYXNlZCBvbiBtZW51IHN0YXRlLiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlblwiIGlkPVwibW9iaWxlLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgIHsvKkN1cnJlbnQ6IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiLCBEZWZhdWx0OiBcInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiICovfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5LWdyZWVuIHRleHQtd2hpdGUgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBsYXkgU2Vzc2lvbnNcbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFYXJseSBDaGlsZGhvb2QgUHJvZ3JhbXNcbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctcHJpbWFyeS1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHYWxsZXJ5XG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLXByaW1hcnktZ3JlZW4gaG92ZXI6dGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGVzdGFtb25pYWxzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC05NiBtYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGJnLWNvdmVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNzVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBiZy1jb3ZlciBiZy1maXhlZCBiZy1jZW50ZXIgYmctaGVyby1pbWFnZSBwLTIwIHB0LTQ4IHRleHQtd2hpdGUgZm9udC1ub3JtYWwgbGVhZGluZy1sb29zZSB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L2gzPlxuICAgICAgICAgICAgICA8cD5BbGwgdGhlIHNtYWxsIHByaW50PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0zMlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIFBsZWFzZSByZWFkIHRoZXNlIHRlcm1zIGNhcmVmdWxseSBiZWZvcmUgeW91IGJvb2sgYW55IG9mIG91ciBSaWJiaXRcbiAgICAgICAgICAgICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zLiBUaGVzZSB0ZXJtcyB0ZWxsIHlvdSBhYm91dCBSaWJiaXQgJmFtcDtcbiAgICAgICAgICAgIFJvbywgaG93IHdlIHdpbGwgcHJvdmlkZSBwbGF5IHNlc3Npb25zIHRvIHlvdSwgaG93IHlvdSBvciBSaWJiaXRcbiAgICAgICAgICAgICZhbXA7IFJvbyBtYXkgY2hhbmdlIG9yIGVuZCB0aGUgY29udHJhY3QsIHdoYXQgdG8gZG8gaWYgdGhlcmUgaXMgYW5cbiAgICAgICAgICAgIGlzc3VlIGFuZCBvdGhlciBpbXBvcnRhbnQgaW5mb3JtYXRpb24uIElmIHlvdSB0aGluayB0aGF0IHRoZXJlIGlzIGFcbiAgICAgICAgICAgIG1pc3Rha2UgaW4gdGhlc2UgdGVybXMsIHBsZWFzZSBjb250YWN0IHVzIGF0XG4gICAgICAgICAgICBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdSB0byBkaXNjdXNzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgQUNDRVBUQU5DRSBPRiBURVJNUyAmYW1wOyBDT05ESVRJT05TXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBBbGwgdGhvc2Ugd2hvIHdpc2ggdG8gYXR0ZW5kIGFueSBSaWJiaXQgJmFtcDsgUm9vIHBsYXkgc2Vzc2lvbiBtdXN0XG4gICAgICAgICAgICBhZ3JlZSB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgc2V0IG91dCBiZWxvdy4gVGhlc2UgYXJlIHRoZSB0ZXJtc1xuICAgICAgICAgICAgYW5kIGNvbmRpdGlvbnMgd2hpY2ggd2UgcHJvdmlkZSBSaWJiaXQgJmFtcDsgUm9vIHBsYXkgc2Vzc2lvbnMgdG9cbiAgICAgICAgICAgIHlvdSBhbmQgeW91ciBjaGlsZChyZW4pLiBObyB2YXJpYXRpb24gb3IgYWRkaXRpb24gdG8gdGhlIHRlcm1zIHNoYWxsXG4gICAgICAgICAgICBiZSBiaW5kaW5nIHVubGVzcyBhZ3JlZWQgaW4gd3JpdGluZyBieSBSaWJiaXQgJmFtcDsgUm9vIGFuZCB0aGVcbiAgICAgICAgICAgIHBhcmVudC4gSW4gdGhlIHVubGlrZWx5IGV2ZW50IG9mIGEgY3VzdG9tZXIgZmFpbGluZyB0byBhYmlkZSBieVxuICAgICAgICAgICAgdGhlc2UgdGVybXMgYW5kIGNvbmRpdGlvbnMsIGEgY3VzdG9tZXIgbWF5IGJlIHJlcXVlc3RlZCB0b1xuICAgICAgICAgICAgZGlzY29udGludWUgd2l0aCBhbnkgUmliYml0ICZhbXA7IFJvbyBwbGF5IHNlc3Npb24uIEluIHRoaXMgaW5zdGFuY2VcbiAgICAgICAgICAgIFJpYmJpdCAmYW1wOyBSb28gd2lsbCBiZSB1bmRlciBubyBvYmxpZ2F0aW9uIHRvIHByb3ZpZGUgYSByZWZ1bmQgZm9yXG4gICAgICAgICAgICBhbnkgb3V0c3RhbmRpbmcgbGVzc29ucy4gVGhlIFBhcmVudCBtdXN0IGFncmVlIHRvIGtlZXAgdGhlIHBsYXlcbiAgICAgICAgICAgIHNlc3Npb24ncyBjb250ZW50IGNvbmZpZGVudGlhbCBhbmQgbm90IHRvIGNvcHkgb3IgdXNlIGFueSBjb250ZW50IG9mXG4gICAgICAgICAgICB0aGUgcHJvZ3JhbSBkaXJlY3RseSBvciBpbmRpcmVjdGx5LiBBdCB0aGUgdGltZSBvZiBwdWJsaXNoaW5nIGFsbFxuICAgICAgICAgICAgc2Vzc2lvbiBpbmZvcm1hdGlvbiBpcyBjb3JyZWN0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgRU5ST0xNRU5UUywgUEFZTUVOVCAmYW1wOyBDQU5DRUxMQVRJT05TXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtbCBtYi0yXCI+RW5yb2xtZW50cyA8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIEVucm9sbWVudHMgd2lsbCBub3QgYmUgYWNjZXB0ZWQgd2l0aG91dCBwYXltZW50LiBQbGVhc2UgZW5zdXJlIHlvdVxuICAgICAgICAgICAgaGF2ZSB0cmFuc2ZlcnJlZCB0aGUgZnVuZHMgZm9yIHlvdXIgMTAgd2VlayBlbnJvbG1lbnQgYmVmb3JlIHlvdXJcbiAgICAgICAgICAgIGNoaWxk4oCZcyBmaXJzdCBzZXNzaW9uLiBBbHNvIHBsZWFzZSBlbnN1cmUgeW91IGhhdmUgcmVhZCBhbmRcbiAgICAgICAgICAgIHVuZGVyc3Rvb2QgdGhlIGVucm9sbWVudCwgcGF5bWVudCAmYW1wOyBjYW5jZWxsYXRpb25zIHBvbGljeSBhbmQgdGhlXG4gICAgICAgICAgICByZWZ1bmQgJmFtcDsgbWlzc2VkIHNlc3Npb24gcG9saWN5LiBZb3UgY2FuIGJvb2sgYSBSaWJiaXQgJmFtcDsgUm9vXG4gICAgICAgICAgICBwbGF5IHNlc3Npb24gYnkgdmlzaXRpbmcgd3d3LnJpYmJpdGFuZHJvby5jb20uYXUvcGxheS1zZXNzaW9ucyBhbmRcbiAgICAgICAgICAgIGJ5IHJlZ2lzdGVyaW5nIHVzaW5nIG91ciByZWdpc3RyYXRpb24gZm9ybS4gWW91IG11c3QgcHJvdmlkZSB1cyB3aXRoXG4gICAgICAgICAgICB0aGUgc3BlY2lmaWMgaW5mb3JtYXRpb24gd2UgbmVlZCBpbiBvcmRlciB0byBlbnJvbCBpbiBhIHNlc3Npb24gd2l0aFxuICAgICAgICAgICAgdXMuIER1cmluZyB0aGUgZW5yb2xtZW50IHByb2Nlc3MsIHlvdSB3aWxsIGJlIGFza2VkIHRvIHJlYWQgYW5kXG4gICAgICAgICAgICBhZ3JlZSB0byBvdXIgVGVybXMgYW5kIENvbmRpdGlvbnMgKHRoaXMgZG9jdW1lbnQpLiBPbmNlIHJlZ2lzdGVyZWQsXG4gICAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vIHdpbGwgcmVjZWl2ZSBhIGNvbmZpcm1hdGlvbiBlbWFpbCB3aXRoIHlvdXIgZGV0YWlsc1xuICAgICAgICAgICAgYW5kIHdpbGwgY29udGFjdCB5b3Ugd2l0aCBmdXJ0aGVyIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY2hvc2VuIHBsYXlcbiAgICAgICAgICAgIHNlc3Npb24uIFlvdSBhcmUgZWxpZ2libGUgZm9yIGEgZnJlZSB0cmlhbCBzZXNzaW9uIHdoZW4gcmVnaXN0ZXJpbmcuXG4gICAgICAgICAgICBXaGVuIHJlZ2lzdGVyaW5nIGZvciBhIGZyZWUgdHJpYWwgeW91IG11c3QgcHJlc3MgdGhlICdSZWdpc3RlciBmb3IgYVxuICAgICAgICAgICAgRnJlZSBUcmlhbCcgYnV0dG9uIHRvIHN1Ym1pdCB5b3VyIGRldGFpbHMuIFJpYmJpdCAmYW1wOyBSb28gd2lsbFxuICAgICAgICAgICAgcmVjZWl2ZSBhIGNvbmZpcm1hdGlvbiBlbWFpbCB3aXRoIHlvdXIgZGV0YWlscyBhbmQgd2lsbCBjb250YWN0IHlvdVxuICAgICAgICAgICAgd2l0aCBmdXJ0aGVyIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgZnJlZSB0cmlhbCBwbGF5IHNlc3Npb24uIEFmdGVyXG4gICAgICAgICAgICBjb21wbGV0aW5nIHlvdXIgcGxheSBzZXNzaW9uIGZyZWUgdHJpYWwsIGlmIHlvdSBjaG9vc2UgdG8gZW5yb2wgaW4gYVxuICAgICAgICAgICAgMTAgd2VlayBSaWJiaXQgJmFtcDsgUm9vIHByb2dyYW0geW91IG11c3QgcmUgcmVnaXN0ZXIgYXRcbiAgICAgICAgICAgIHd3dy5yaWJiaXRhbmRyb28uY29tLmF1L3BsYXktc2Vzc2lvbnMgYW5kIHN1Ym1pdCAnUmVnaXN0ZXIgYW5kXG4gICAgICAgICAgICBCb29rJy4gVGhpcyB3aWxsIHRyYW5zZmVyIHlvdSB0byB0aGUgcGF5bWVudCBwYWdlLiBQbGVhc2Ugbm90ZSwgdGhhdFxuICAgICAgICAgICAgaWYgeW91IHdpc2ggdG8gZW5yb2wgYWZ0ZXIgeW91ciBmcmVlIHRyaWFsIHdlIGNhbm5vdCBndWFyYW50ZWUgdGhhdFxuICAgICAgICAgICAgdGhlcmUgd2lsbCBiZSBhdmFpbGFibGUgc3BhY2VzIGluIG91ciAxMCB3ZWVrIHByb2dyYW0uIE91ciBwbGF5XG4gICAgICAgICAgICBzZXNzaW9ucyBhcmUgb3BlbiB0byBlbnJvbG1lbnRzIHVudGlsIHdlIGFyZSBzb2xkIG91dC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPlBheW1lbnRzPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBUaGUgMTAgd2VlayB0ZXJtIGlzIHBhaWQgZm9yIGluIGFkdmFuY2UgYW5kIG11c3QgYmUgcGFpZCBpbiBmdWxsXG4gICAgICAgICAgICBwcmlvciB0byB5b3UgY2hpbGQgYXR0ZW5kaW5nIHRoZWlyIGZpcnN0IHNlc3Npb24uIElmIHlvdSB3aXNoIHRvIHJlXG4gICAgICAgICAgICBlbnJvbCBmb3Igb3VyIG5leHQgMTAgd2VlayB0ZXJtIHlvdSBjYW4gZG8gc28gYnkgcmVnaXN0ZXJpbmcgYXRcbiAgICAgICAgICAgIHd3dy5yaWJiaXRhbmRyb28uY29tLmF1L3BsYXktc2Vzc2lvbnMgYW5kIHN1Ym1pdHRpbmcgdGhlIGJ1dHRvblxuICAgICAgICAgICAgJ1JlZ2lzdGVyIGFuZCBCb29rJy4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBtYWtlIHN1cmUgdGhhdFxuICAgICAgICAgICAgdGhlcmUgYXJlIHN1ZmZpY2llbnQgZnVuZHMgaW4geW91ciBhY2NvdW50IGFuZCB0aGF0IHRoZSBzYXZlZCBjYXJkXG4gICAgICAgICAgICBpcyB2YWxpZC4gSWYgYSBwYXltZW50IGhhcyBmYWlsZWQsIHlvdSB3aWxsIGJlIG5vdGlmaWVkIGFuZCBhbm90aGVyXG4gICAgICAgICAgICBmb3JtIG9mIHBheW1lbnQvY3JlZGl0IGNhcmQgbXVzdCBiZSB1c2VkLiBUaGUgRmVlIGlzIG5vbi1yZWZ1bmRhYmxlXG4gICAgICAgICAgICB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcyB3aGF0c29ldmVyIGV4Y2VwdCB3aXRoIHRoZSBwcmlvciB3cml0dGVuXG4gICAgICAgICAgICBhZ3JlZW1lbnQgb2YgUmliYml0ICZhbXA7IFJvby4gSWYgdGhlIGNvc3Qgb2YgdGhlIHNlc3Npb25zIGNoYW5nZVxuICAgICAgICAgICAgeW91IHdpbGwgYmUgbm90aWZpZWQgcHJpb3IgdG8gdGhlIHN0YXJ0IG9mIHRoZSBmb2xsb3dpbmcgdGVybS5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgV2Ugd2lsbCBhY2NlcHQgdGhlIGZvbGxvd2luZyBtZXRob2RzIG9mIHBheW1lbnQ6IFZpc2EsIE1hc3RlckNhcmRcbiAgICAgICAgICAgIGFuZCBBbWVyaWNhbiBFeHByZXNzXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1sIG1iLTJcIj5QYXltZW50czwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgQWxsIHJlZnVuZCByZXF1ZXN0cyBtdXN0IGJlIGluIHdyaXRpbmcgdG8gSmVubnkgYXRcbiAgICAgICAgICAgIGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBDYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyAtIFJpYmJpdCAmYW1wOyBSb28gbWF5IGNhbmNlbCB0aGlzXG4gICAgICAgICAgICBjb250cmFjdCBhdCBhbnkgdGltZSBiZWZvcmUgdGhlIGNoaWxkIGNvbW1lbmNlcyB0aGUgMTAgd2VlayBwcm9ncmFtXG4gICAgICAgICAgICBmb3IgYW55IHJlYXNvbiB3aGF0c29ldmVyLiBSaWJiaXQgJmFtcDsgUm9vIHNoYWxsIG5vdCBiZSBsaWFibGUgZm9yXG4gICAgICAgICAgICBhbnkgbG9zcyBvciBkYW1hZ2Ugd2hhdHNvZXZlciBhcmlzaW5nIGZyb20gc3VjaCBjYW5jZWxsYXRpb24uIEluIHRoZVxuICAgICAgICAgICAgZXZlbnQgb2YgY2FuY2VsbGF0aW9uIGJ5IFJpYmJpdCAmYW1wOyBSb28gcHJpb3IgdG8gdGhlIGNvbW1lbmNlbWVudFxuICAgICAgICAgICAgb2YgdGhlIDEwIHdlZWsgcHJvZ3JhbSwgUmliYml0ICZhbXA7IFJvbyB3aWxsIHJlZnVuZCBhbnkgZmVlcyBmb3JcbiAgICAgICAgICAgIG91dHN0YW5kaW5nIHNlc3Npb25zLiBJZiBjbGFzc2VzIGFyZSBjYW5jZWxsZWQgYXMgYSByZXN1bHQgb2ZcbiAgICAgICAgICAgIGV4dHJlbWUgd2VhdGhlciBjb25kaXRpb25zIG9yIHdoZXJlIGxvY2FsIGF1dGhvcml0aWVzL3B1YmxpY1xuICAgICAgICAgICAgZ3VpZGFuY2UgYWR2aXNlIHRoYXQgc2Vzc2lvbnMgc2hvdWxkIGJlIHRlbXBvcmFyaWx5IHN1c3BlbmRlZCBmb3JcbiAgICAgICAgICAgIGhlYWx0aCBvciBvdGhlciByZWFzb25zLCB0aGVuIGEgbWFrZSB1cCBsZXNzb24gd2lsbCBiZSBncmFudGVkLlxuICAgICAgICAgICAgUGxlYXNlIHNlZSB0aGUgbWFrZSB1cCBsZXNzb24gcG9saWN5LiBJbiB0aGUgZXZlbnQgb2YgYSAnbGFzdFxuICAgICAgICAgICAgbWludXRlJyBsZXNzb24gY2hhbmdlIG9yIGEgbGVzc29uIGNhbmNlbGxhdGlvbiBieSBSaWJiaXQgJmFtcDsgUm9vLFxuICAgICAgICAgICAgd2Ugd2lsbCBub3RpZnkgeW91IHdpdGggYXMgbXVjaCBub3RpY2UgYXMgcG9zc2libGUuIFJpYmJpdCAmYW1wOyBSb29cbiAgICAgICAgICAgIHdpbGwgbm90IHJlaW1idXJzZSBhbnkgZXhwZW5zZXMgaW5jdXJyZWQgYnkgYSBjdXN0b21lciBmYWlsaW5nIHRvXG4gICAgICAgICAgICBhY2tub3dsZWRnZSB0aGlzIGNvbW11bmljYXRpb24uIFNob3VsZCB5b3UgZGVjaWRlIHRvIGxlYXZlIGFuXG4gICAgICAgICAgICBlbnJvbGxlZCBSaWJiaXQgJmFtcDsgUm9vIHByb2dyYW0gYmVmb3JlIHRoZSBtYWtlIHVwIGxlc3NvbiBjcmVkaXRcbiAgICAgICAgICAgIGhhcyBiZWVuIHVzZWQgd2Ugd2lsbCByZWZ1bmQgdGhlIGNyZWRpdCB0byB5b3UuIElmIGluc3VmZmljaWVudFxuICAgICAgICAgICAgY2hpbGRyZW4gYXJlIGJvb2tlZCBpbnRvIHlvdXIgc2Vzc2lvbiwgd2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG9cbiAgICAgICAgICAgIGNhbmNlbCBvciBjaGFuZ2UgdGhlIGNsYXNzLiBJbiB0aGlzIGluc3RhbmNlIHdlIHdpbGwgb2ZmZXIgeW91XG4gICAgICAgICAgICBlaXRoZXIgYW4gYWx0ZXJuYXRpdmUgc2Vzc2lvbiB0byBhdHRlbmQgb3IgYSByZWZ1bmQgd2lsbCBiZSBnaXZlblxuICAgICAgICAgICAgZm9yIGFueSByZW1haW5pbmcgc2Vzc2lvbnMgYWZ0ZXIgdGhlIGNhbmNlbGxhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIG1iLTRcIj5BdHRlbmRhbmNlPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBZb3VyIHBheW1lbnQgaGFzIHJlc2VydmVkIHlvdXIgcGxhY2UganVzdCBmb3IgeW91IHNvIGlmIHlvdSBrbm93IHlvdVxuICAgICAgICAgICAgYXJlIHVuYWJsZSB0byBhdHRlbmQgYSBsZXNzb24sIHBsZWFzZSBsZXQgdXMga25vdyB3aXRoIGFzIG11Y2hcbiAgICAgICAgICAgIG5vdGljZSBhcyBwb3NzaWJsZSBieSBlbWFpbGluZyBvciB0ZWxlcGhvbmluZyBKZW5ueSBhdFxuICAgICAgICAgICAgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUgb3IgKzYxNDA2NjAzNTgzLiBUaGUgUGFyZW50L2NhcmVyXG4gICAgICAgICAgICB1bmRlcnN0YW5kcyB0aGF0IHNlc3Npb25zIGFyZSBvbmdvaW5nIGFuZCB0byBiZSB1c2VkIGNvbnNlY3V0aXZlbHkuXG4gICAgICAgICAgICBObyBjcmVkaXRzIG9yIHJlZnVuZHMgd2lsbCBiZSBpc3N1ZWQgZm9yIG1pc3NlZCBjbGFzc2VzLiBObyByZWZ1bmRzXG4gICAgICAgICAgICB3aWxsIGJlIGdpdmVuIGlmIHlvdSBjaGFuZ2UgeW91ciBtaW5kIGFib3V0IHlvdXIgY2hpbGQgcGFydGljaXBhdGluZ1xuICAgICAgICAgICAgaW4gdGhlIHByb2dyYW0uIENsYXNzIGF0dGVuZGFuY2UgaGFzIGJlZW4gbGltaXRlZCB0byAxMCBjaGlsZHJlbiBwZXJcbiAgICAgICAgICAgIGNsYXNzLiBJZiB0aGUgcGxheSBzZXNzaW9ucyByZWFjaCBjYXBhY2l0eSB3ZSB3aWxsIHVwZGF0ZSBvdXJcbiAgICAgICAgICAgIGJvb2tpbmcgc3lzdGVtIHRvIHN0b3AgYWxsIG5ldyBlbnJvbG1lbnRzIHVudGlsIHRoZSBmb2xsb3dpbmcgdGVybS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgIE1BS0UgVVAgTEVTU09OUyAmYW1wOyBCT05VUyBTRVNTSU9OU1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgSWYgeW91IGNhbm5vdCBhdHRlbmQgYSBsZXNzb24gYW5kIG5vdGlmeSB1cyBwcmlvciB0byB5b3VyIHNlc3Npb25cbiAgICAgICAgICAgIHlvdSBhcmUgZWxpZ2libGUgZm9yIGEgbWFrZSB1cCBsZXNzb24uIFRoaXMgbWFrZSB1cCBsZXNzb24gbXVzdCBiZVxuICAgICAgICAgICAgdXNlZCBpbiBhbm90aGVyIHNlc3Npb24gb3RoZXIgdGhhbiB5b3VyIHNjaGVkdWxlZCBkYXkgKGUuZy4gaWYgeW91XG4gICAgICAgICAgICBhdHRlbmQgb24gYSBUdWVzZGF5LCB5b3VyIG1ha2UgdXAgbGVzc29uIG11c3QgYmUgdXNlZCBpbiBhblxuICAgICAgICAgICAgYXZhaWxhYmxlIFdlZG5lc2RheSBzZXNzaW9uKS4gQSBtYXhpbXVtIG9mIDIgbWFrZSB1cCBsZXNzb25zIGNhbiBiZVxuICAgICAgICAgICAgdXNlZCBpbiBhIDEwIHdlZWsgcGVyaW9kLiBNYWtlIHVwIGxlc3NvbnMgd2lsbCBiZSBhcnJhbmdlZCBmb3IgYW55XG4gICAgICAgICAgICBjYW5jZWxsYXRpb25zIG1hZGUgYnkgUmliYml0ICZhbXA7IFJvbyBmb3Igc2V2ZXJlIHdlYXRoZXIsIHNpY2tcbiAgICAgICAgICAgIHN0YWZmIG1lbWJlcnMgb3IgcmVhc29ucyB3ZSBmZWVsIGFyZSBvZiBkYW5nZXIgdG8gb3VyIHBhcnRpY2lwYW50c1xuICAgICAgICAgICAgYW5kIHN0YWZmIG1lbWJlcnMuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIElmIHlvdSBhcmUgZW50aXRsZWQgdG8gYSBmcmVlIGJvbnVzIHNlc3Npb24gYWZ0ZXIgZW5yb2xsaW5nIHdpdGhcbiAgICAgICAgICAgIFJpYmJpdCAmYW1wOyBSb28sIHRoZXJlIHdpbGwgYmUgYSBhZGRlZCBzZXNzaW9uIGF0IHRoZSBlbmQgb2YgeW91clxuICAgICAgICAgICAgMTAgd2VlayBwcm9ncmFtIGF2YWlsYWJsZSBmb3IgeW91IHRvIGJvb2suIEJvbnVzIHNlc3Npb25zIHNob3VsZCBiZVxuICAgICAgICAgICAgYm9va2VkIHdpdGggYXMgbXVjaCBub3RpY2UgYXMgcG9zc2libGUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+SEVBTFRIICZhbXA7IFNBRkVUWTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgVGhlIHNhZmV0eSBvZiBhbGwgdGhlIGNoaWxkcmVuIGF0dGVuZGluZyBvdXIgcGxheSBzZXNzaW9ucyBpcyBvZiB0aGVcbiAgICAgICAgICAgIGdyZWF0ZXN0IGltcG9ydGFuY2UgdG8gdXMuIER1ZSB0byB0aGUgbmF0dXJlIG9mIHRoZSBwbGF5IHNlc3Npb25zXG4gICAgICAgICAgICBhbmQgdGhlIGFnZSBvZiB0aGUgY2hpbGQocmVuKSBhdHRlbmRpbmcsIHlvdXIgY2hpbGQocmVuKSByZW1haW4geW91clxuICAgICAgICAgICAgcmVzcG9uc2liaWxpdHkgd2hpbGUgYXR0ZW5kaW5nIGFuZCBtdXN0IGJlIHN1cGVydmlzZWQgdGhyb3VnaG91dC4gSWZcbiAgICAgICAgICAgIHlvdSBsZWF2ZSB0aGUgcGxheSBzZXNzaW9uIHZlbnVlIGZvciBhbnkgcmVhc29uIHlvdSBtdXN0IHRha2UgeW91clxuICAgICAgICAgICAgY2hpbGQocmVuKSB3aXRoIHlvdS4gV2UgYWNjZXB0IG5vIHJlc3BvbnNpYmlsaXR5IGZvciBhbnkgaW5qdXJ5XG4gICAgICAgICAgICBjYXVzZWQgZHVyaW5nIGEgcGxheSBzZXNzaW9uLiBQbGVhc2UgYmUgYWR2aXNlZCB0aGF0IHdlIGhhdmUgYSBmaXJzdFxuICAgICAgICAgICAgYWlkIGtpdCBvbiBzaXRlIGFuZCBmaXJzdCBhaWQgd2lsbCBiZSBnaXZlbiB0byB5b3VyIGNoaWxkIGluIHRoZVxuICAgICAgICAgICAgZXZlbnQgYW4gYWNjaWRlbnQvaW5qdXJ5IG9jY3VycyBhdCBhIHBsYXkgc2Vzc2lvbi4gV2UgYWNjZXB0IG5vXG4gICAgICAgICAgICByZXNwb25zaWJpbGl0eSBmb3IgYW55IGJlbG9uZ2luZ3MgdGhhdCBnZXQgbG9zdCBvciBkYW1hZ2VkLiBXZVxuICAgICAgICAgICAgcG9saXRlbHkgYXNrIHRoYXQgcGFyZW50cyBhbmQgY2hpbGRyZW4gZG8gbm90IGF0dGVuZCBpZiBlaXRoZXIgYXJlXG4gICAgICAgICAgICBmZWVsaW5nIHVud2VsbC4gV2UgYXJlIGEgc21va2UgZnJlZSB6b25lIGZvciB0aGUgc2FmZXR5IG9mIG91clxuICAgICAgICAgICAgcGFydGljaXBhdGluZyBjaGlsZHJlbiBhbmQgZmFtaWxpZXMgYW5kIHRoZSBzdXJyb3VuZGluZyBlbnZpcm9ubWVudC5cbiAgICAgICAgICAgIEFueSBwYXJlbnRzL2NhcmVycyB3aG8gYXJlIHNlZW4gc21va2luZyBhdCB0aGUgdGltZSBvZiBhIHBsYXlcbiAgICAgICAgICAgIHNlc3Npb24gd2lsbCBiZSBhc2tlZCB0byBsZWF2ZSB0aGUgcGxheSBzZXNzaW9uIHdpdGggdGhlaXIgY2hpbGQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICBQSE9UT0dSUEFIWSAmYW1wOyBTT0NJQUwgTUVESUFcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIFBsZWFzZSBiZSBhd2FyZSB0aGF0IGJ5IGVucm9sbGluZyB5b3VyIGNoaWxkKHJlbikgaW4gYW55IFJpYmJpdFxuICAgICAgICAgICAgJmFtcDsgUm9vIFBsYXkgU2Vzc2lvbiBwcm9ncmFtLCB5b3UgYXJlIGdyYW50aW5nIHVzIHBlcm1pc3Npb24gdG9cbiAgICAgICAgICAgIHBob3RvZ3JhcGggb3IgcmVjb3JkIHNob3J0IHZpZGVvIGNsaXBzIG9mIHlvdXIgY2hpbGQocmVuKSBkdXJpbmcgdGhlXG4gICAgICAgICAgICBwbGF5IHNlc3Npb25zIHRoYXQgd2UgbWF5IHVzZSBmb3IgUmliYml0ICZhbXA7IFJvbyBwcm9tb3Rpb25hbFxuICAgICAgICAgICAgcHVycG9zZXMgb24gb3VyIHNvY2lhbCBtZWRpYSBhbmQvb3Igd2Vic2l0ZS4gTm8gZGF0YSB1bmRlciBhbnlcbiAgICAgICAgICAgIGNpcmN1bXN0YW5jZSB3aWxsIGJlIHBhc3NlZCBvdmVyIHRvIGEgdGhpcmQgcGFydHkuIElmIHlvdSBkbyBub3RcbiAgICAgICAgICAgIHdpc2ggdG8gcHJvdmlkZSBjb25zZW50IGZvciB0aGlzIHRoZW4geW91IG5lZWQgdG8gbm90aWZ5IEplbm55IGluXG4gICAgICAgICAgICB3cml0aW5nIGF0IGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1IGFuZCBub3RpZnkgSmVubnkgaW4gcGVyc29uIGF0XG4gICAgICAgICAgICB5b3VyIHBsYXkgc2Vzc2lvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIG1iLTRcIj5DT05UQUNUPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBGb3Igc3BlY2lmaWMgcXVlc3Rpb25zIGFib3V0IFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucywgcGxlYXNlXG4gICAgICAgICAgICBjb250YWN0IEplbm55IGRpcmVjdGx5IGF0IGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1LiBJZiB3ZSBoYXZlIHRvXG4gICAgICAgICAgICBjb250YWN0IHlvdSB3ZSB3aWxsIGRvIHNvIGluIHdyaXRpbmcgd2l0aCB0aGUgZW1haWwgYWRkcmVzcyB5b3VcbiAgICAgICAgICAgIHByb3ZpZGVkIHVzIGluIHlvdXIgcmVnaXN0cmF0aW9uLCBvciBieSB0ZWxlcGhvbmUgb3IgdGV4dCBtZXNzYWdlXG4gICAgICAgICAgICB3aXRoIHRoZSBwaG9uZSBudW1iZXIgeW91IHByb3ZpZGVkIHVzIGluIHlvdXIgcmVnaXN0cmF0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LWF1dG8gdy1tYXgganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjQgdy1hdXRvXCJcbiAgICAgICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiUklCQklUICZhbXA7IFJPT1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8cD5SaWJiaXQgJmFtcDsgUm9vIMKpPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9