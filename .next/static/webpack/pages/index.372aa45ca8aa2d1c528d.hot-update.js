webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layouts/single_column.tsx":
/*!**********************************************!*\
  !*** ./components/layouts/single_column.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\layouts\\single_column.tsx",
    _this = undefined;

var SingleColumn = function SingleColumn(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto px-32",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, _this);
};

_c = SingleColumn;
/* harmony default export */ __webpack_exports__["default"] = (SingleColumn);

var _c;

$RefreshReg$(_c, "SingleColumn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/templates/page.tsx":
/*!***************************************!*\
  !*** ./components/templates/page.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/menu */ "./components/modules/menu.tsx");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/footer */ "./components/modules/footer.tsx");


var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\templates\\page.tsx",
    _this = undefined;





var PageTemplate = function PageTemplate(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Ribbit & Roo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = PageTemplate;
/* harmony default export */ __webpack_exports__["default"] = (PageTemplate);

var _c;

$RefreshReg$(_c, "PageTemplate");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3NpbmdsZV9jb2x1bW4udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RlbXBsYXRlcy9wYWdlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbmdsZUNvbHVtbiIsImNoaWxkcmVuIiwiUGFnZVRlbXBsYXRlIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBcUM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQ3hELHNCQUFPO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsY0FBMENBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0tBQU1ELFk7QUFHU0EsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBNkI7QUFBQSxNQUExQkQsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQ2hELHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBQSw4QkFDRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0EsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVNFLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBZEQ7O0tBQU1DLFk7QUFlU0EsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixzQkFDRSxxRUFBQyxrRUFBRDtBQUFBLDRCQUNFLHFFQUFDLGlFQUFEO0FBQU8sYUFBTyxFQUFDLHNCQUFmO0FBQXNDLGdCQUFVLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMseUVBQUQ7QUFBQSw4QkFDRSxxRUFBQyxxRUFBRDtBQUFXLGVBQU8sRUFBQyxvQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFLHFFQUFDLHFFQUFEO0FBQVcsZUFBTyxFQUFDLGtDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBeUJFLHFFQUFDLHFFQUFEO0FBQVcsZUFBTyxFQUFDLHFDQUFuQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBNEJFO0FBQUksbUJBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkYsZUE2QkU7QUFBRyxtQkFBUyxFQUFDLE1BQWI7QUFBQSxvdkJBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JGLGVBNkNFO0FBQUksbUJBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3Q0YsZUE4Q0U7QUFBRyxtQkFBUyxFQUFDLE1BQWI7QUFBQSxvSEFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJGLGVBa0dFLHFFQUFDLHFFQUFEO0FBQVcsZUFBTyxFQUFDLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEdGLGVBOEdFLHFFQUFDLHFFQUFEO0FBQVcsZUFBTyxFQUFDLGtDQUFuQjtBQUFBLGdrQkFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlHRixlQTZIRSxxRUFBQyxxRUFBRDtBQUFXLGVBQU8sRUFBQyxpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3SEYsZUE4SUUscUVBQUMscUVBQUQ7QUFBVyxlQUFPLEVBQUMsNEJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUlGLGVBeUpFLHFFQUFDLHFFQUFEO0FBQVcsZUFBTyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0tEO0tBdkt1QkEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNzJhYTQ1Y2E4YWEyZDFjNTI4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBTaW5nbGVDb2x1bW5Qcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuY29uc3QgU2luZ2xlQ29sdW1uID0gKHsgY2hpbGRyZW4gfTogU2luZ2xlQ29sdW1uUHJvcHMpID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0zMlwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvbHVtbjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vbW9kdWxlcy9tZW51XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL21vZHVsZXMvZm9vdGVyXCI7XHJcblxyXG50eXBlIFBhZ2VQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxuY29uc3QgUGFnZVRlbXBsYXRlID0gKHsgY2hpbGRyZW4gfTogUGFnZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJpYmJpdCAmYW1wOyBSb288L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGVtcGxhdGU7XHJcbiIsImltcG9ydCBQYWdlVGVtcGxhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3BhZ2VcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2R1bGVzL3RpdGxlXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL21vZHVsZXMvcGFyYWdyYXBoXCI7XG5pbXBvcnQgU2luZ2xlQ29sdW1uIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvc2luZ2xlX2NvbHVtblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlVGVtcGxhdGU+XG4gICAgICA8VGl0bGUgaGVhZGluZz1cIlRlcm1zIGFuZCBDb25kaXRpb25zXCIgc3ViaGVhZGluZz1cIlRoZSBzbWFsbCBwcmludFwiIC8+XG4gICAgICA8U2luZ2xlQ29sdW1uPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJURVJNUyAmYW1wOyBDT05ESVRJT05TXCI+XG4gICAgICAgICAgUGxlYXNlIHJlYWQgdGhlc2UgdGVybXMgY2FyZWZ1bGx5IGJlZm9yZSB5b3UgYm9vayBhbnkgb2Ygb3VyIFJpYmJpdFxuICAgICAgICAgICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zLiBUaGVzZSB0ZXJtcyB0ZWxsIHlvdSBhYm91dCBSaWJiaXQgJmFtcDsgUm9vLFxuICAgICAgICAgIGhvdyB3ZSB3aWxsIHByb3ZpZGUgcGxheSBzZXNzaW9ucyB0byB5b3UsIGhvdyB5b3Ugb3IgUmliYml0ICZhbXA7IFJvb1xuICAgICAgICAgIG1heSBjaGFuZ2Ugb3IgZW5kIHRoZSBjb250cmFjdCwgd2hhdCB0byBkbyBpZiB0aGVyZSBpcyBhbiBpc3N1ZSBhbmRcbiAgICAgICAgICBvdGhlciBpbXBvcnRhbnQgaW5mb3JtYXRpb24uIElmIHlvdSB0aGluayB0aGF0IHRoZXJlIGlzIGEgbWlzdGFrZSBpblxuICAgICAgICAgIHRoZXNlIHRlcm1zLCBwbGVhc2UgY29udGFjdCB1cyBhdCBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdSB0b1xuICAgICAgICAgIGRpc2N1c3MuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJBQ0NFUFRBTkNFIE9GIFRFUk1TICZhbXA7IENPTkRJVElPTlNcIj5cbiAgICAgICAgICBBbGwgdGhvc2Ugd2hvIHdpc2ggdG8gYXR0ZW5kIGFueSBSaWJiaXQgJmFtcDsgUm9vIHBsYXkgc2Vzc2lvbiBtdXN0XG4gICAgICAgICAgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIHNldCBvdXQgYmVsb3cuIFRoZXNlIGFyZSB0aGUgdGVybXNcbiAgICAgICAgICBhbmQgY29uZGl0aW9ucyB3aGljaCB3ZSBwcm92aWRlIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucyB0byB5b3VcbiAgICAgICAgICBhbmQgeW91ciBjaGlsZChyZW4pLiBObyB2YXJpYXRpb24gb3IgYWRkaXRpb24gdG8gdGhlIHRlcm1zIHNoYWxsIGJlXG4gICAgICAgICAgYmluZGluZyB1bmxlc3MgYWdyZWVkIGluIHdyaXRpbmcgYnkgUmliYml0ICZhbXA7IFJvbyBhbmQgdGhlIHBhcmVudC5cbiAgICAgICAgICBJbiB0aGUgdW5saWtlbHkgZXZlbnQgb2YgYSBjdXN0b21lciBmYWlsaW5nIHRvIGFiaWRlIGJ5IHRoZXNlIHRlcm1zXG4gICAgICAgICAgYW5kIGNvbmRpdGlvbnMsIGEgY3VzdG9tZXIgbWF5IGJlIHJlcXVlc3RlZCB0byBkaXNjb250aW51ZSB3aXRoIGFueVxuICAgICAgICAgIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9uLiBJbiB0aGlzIGluc3RhbmNlIFJpYmJpdCAmYW1wOyBSb28gd2lsbFxuICAgICAgICAgIGJlIHVuZGVyIG5vIG9ibGlnYXRpb24gdG8gcHJvdmlkZSBhIHJlZnVuZCBmb3IgYW55IG91dHN0YW5kaW5nXG4gICAgICAgICAgbGVzc29ucy4gVGhlIFBhcmVudCBtdXN0IGFncmVlIHRvIGtlZXAgdGhlIHBsYXkgc2Vzc2lvbidzIGNvbnRlbnRcbiAgICAgICAgICBjb25maWRlbnRpYWwgYW5kIG5vdCB0byBjb3B5IG9yIHVzZSBhbnkgY29udGVudCBvZiB0aGUgcHJvZ3JhbVxuICAgICAgICAgIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkuIEF0IHRoZSB0aW1lIG9mIHB1Ymxpc2hpbmcgYWxsIHNlc3Npb25cbiAgICAgICAgICBpbmZvcm1hdGlvbiBpcyBjb3JyZWN0LlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPFBhcmFncmFwaCBoZWFkaW5nPVwiRU5ST0xNRU5UUywgUEFZTUVOVCAmYW1wOyBDQU5DRUxMQVRJT05TXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPkVucm9sbWVudHM8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIEVucm9sbWVudHMgd2lsbCBub3QgYmUgYWNjZXB0ZWQgd2l0aG91dCBwYXltZW50LiBQbGVhc2UgZW5zdXJlIHlvdVxuICAgICAgICAgICAgaGF2ZSB0cmFuc2ZlcnJlZCB0aGUgZnVuZHMgZm9yIHlvdXIgMTAgd2VlayBlbnJvbG1lbnQgYmVmb3JlIHlvdXJcbiAgICAgICAgICAgIGNoaWxk4oCZcyBmaXJzdCBzZXNzaW9uLiBBbHNvIHBsZWFzZSBlbnN1cmUgeW91IGhhdmUgcmVhZCBhbmRcbiAgICAgICAgICAgIHVuZGVyc3Rvb2QgdGhlIGVucm9sbWVudCwgcGF5bWVudCAmYW1wOyBjYW5jZWxsYXRpb25zIHBvbGljeSBhbmQgdGhlXG4gICAgICAgICAgICByZWZ1bmQgJmFtcDsgbWlzc2VkIHNlc3Npb24gcG9saWN5LiBZb3UgY2FuIGJvb2sgYSBSaWJiaXQgJmFtcDsgUm9vXG4gICAgICAgICAgICBwbGF5IHNlc3Npb24gYnkgdmlzaXRpbmcgd3d3LnJpYmJpdGFuZHJvby5jb20uYXUvcGxheS1zZXNzaW9ucyBhbmRcbiAgICAgICAgICAgIGJ5IHJlZ2lzdGVyaW5nIHVzaW5nIG91ciByZWdpc3RyYXRpb24gZm9ybS4gWW91IG11c3QgcHJvdmlkZSB1cyB3aXRoXG4gICAgICAgICAgICB0aGUgc3BlY2lmaWMgaW5mb3JtYXRpb24gd2UgbmVlZCBpbiBvcmRlciB0byBlbnJvbCBpbiBhIHNlc3Npb24gd2l0aFxuICAgICAgICAgICAgdXMuIER1cmluZyB0aGUgZW5yb2xtZW50IHByb2Nlc3MsIHlvdSB3aWxsIGJlIGFza2VkIHRvIHJlYWQgYW5kXG4gICAgICAgICAgICBhZ3JlZSB0byBvdXIgVGVybXMgYW5kIENvbmRpdGlvbnMgKHRoaXMgZG9jdW1lbnQpLiBPbmNlIHJlZ2lzdGVyZWQsXG4gICAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vIHdpbGwgcmVjZWl2ZSBhIGNvbmZpcm1hdGlvbiBlbWFpbCB3aXRoIHlvdXIgZGV0YWlsc1xuICAgICAgICAgICAgYW5kIHdpbGwgY29udGFjdCB5b3Ugd2l0aCBmdXJ0aGVyIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgY2hvc2VuIHBsYXlcbiAgICAgICAgICAgIHNlc3Npb24uIFlvdSBhcmUgZWxpZ2libGUgZm9yIGEgZnJlZSB0cmlhbCBzZXNzaW9uIHdoZW4gcmVnaXN0ZXJpbmcuXG4gICAgICAgICAgICBXaGVuIHJlZ2lzdGVyaW5nIGZvciBhIGZyZWUgdHJpYWwgeW91IG11c3QgcHJlc3MgdGhlICdSZWdpc3RlciBmb3IgYVxuICAgICAgICAgICAgRnJlZSBUcmlhbCcgYnV0dG9uIHRvIHN1Ym1pdCB5b3VyIGRldGFpbHMuIFJpYmJpdCAmYW1wOyBSb28gd2lsbFxuICAgICAgICAgICAgcmVjZWl2ZSBhIGNvbmZpcm1hdGlvbiBlbWFpbCB3aXRoIHlvdXIgZGV0YWlscyBhbmQgd2lsbCBjb250YWN0IHlvdVxuICAgICAgICAgICAgd2l0aCBmdXJ0aGVyIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgZnJlZSB0cmlhbCBwbGF5IHNlc3Npb24uIEFmdGVyXG4gICAgICAgICAgICBjb21wbGV0aW5nIHlvdXIgcGxheSBzZXNzaW9uIGZyZWUgdHJpYWwsIGlmIHlvdSBjaG9vc2UgdG8gZW5yb2wgaW4gYVxuICAgICAgICAgICAgMTAgd2VlayBSaWJiaXQgJmFtcDsgUm9vIHByb2dyYW0geW91IG11c3QgcmUgcmVnaXN0ZXIgYXRcbiAgICAgICAgICAgIHd3dy5yaWJiaXRhbmRyb28uY29tLmF1L3BsYXktc2Vzc2lvbnMgYW5kIHN1Ym1pdCAnUmVnaXN0ZXIgYW5kXG4gICAgICAgICAgICBCb29rJy4gVGhpcyB3aWxsIHRyYW5zZmVyIHlvdSB0byB0aGUgcGF5bWVudCBwYWdlLiBQbGVhc2Ugbm90ZSwgdGhhdFxuICAgICAgICAgICAgaWYgeW91IHdpc2ggdG8gZW5yb2wgYWZ0ZXIgeW91ciBmcmVlIHRyaWFsIHdlIGNhbm5vdCBndWFyYW50ZWUgdGhhdFxuICAgICAgICAgICAgdGhlcmUgd2lsbCBiZSBhdmFpbGFibGUgc3BhY2VzIGluIG91ciAxMCB3ZWVrIHByb2dyYW0uIE91ciBwbGF5XG4gICAgICAgICAgICBzZXNzaW9ucyBhcmUgb3BlbiB0byBlbnJvbG1lbnRzIHVudGlsIHdlIGFyZSBzb2xkIG91dC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPlBheW1lbnRzPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBUaGUgMTAgd2VlayB0ZXJtIGlzIHBhaWQgZm9yIGluIGFkdmFuY2UgYW5kIG11c3QgYmUgcGFpZCBpbiBmdWxsXG4gICAgICAgICAgICBwcmlvciB0byB5b3UgY2hpbGQgYXR0ZW5kaW5nIHRoZWlyIGZpcnN0IHNlc3Npb24uIElmIHlvdSB3aXNoIHRvIHJlXG4gICAgICAgICAgICBlbnJvbCBmb3Igb3VyIG5leHQgMTAgd2VlayB0ZXJtIHlvdSBjYW4gZG8gc28gYnkgcmVnaXN0ZXJpbmcgYXRcbiAgICAgICAgICAgIHd3dy5yaWJiaXRhbmRyb28uY29tLmF1L3BsYXktc2Vzc2lvbnMgYW5kIHN1Ym1pdHRpbmcgdGhlIGJ1dHRvblxuICAgICAgICAgICAgJ1JlZ2lzdGVyIGFuZCBCb29rJy4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBtYWtlIHN1cmUgdGhhdFxuICAgICAgICAgICAgdGhlcmUgYXJlIHN1ZmZpY2llbnQgZnVuZHMgaW4geW91ciBhY2NvdW50IGFuZCB0aGF0IHRoZSBzYXZlZCBjYXJkXG4gICAgICAgICAgICBpcyB2YWxpZC4gSWYgYSBwYXltZW50IGhhcyBmYWlsZWQsIHlvdSB3aWxsIGJlIG5vdGlmaWVkIGFuZCBhbm90aGVyXG4gICAgICAgICAgICBmb3JtIG9mIHBheW1lbnQvY3JlZGl0IGNhcmQgbXVzdCBiZSB1c2VkLiBUaGUgRmVlIGlzIG5vbi1yZWZ1bmRhYmxlXG4gICAgICAgICAgICB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcyB3aGF0c29ldmVyIGV4Y2VwdCB3aXRoIHRoZSBwcmlvciB3cml0dGVuXG4gICAgICAgICAgICBhZ3JlZW1lbnQgb2YgUmliYml0ICZhbXA7IFJvby4gSWYgdGhlIGNvc3Qgb2YgdGhlIHNlc3Npb25zIGNoYW5nZVxuICAgICAgICAgICAgeW91IHdpbGwgYmUgbm90aWZpZWQgcHJpb3IgdG8gdGhlIHN0YXJ0IG9mIHRoZSBmb2xsb3dpbmcgdGVybS5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgV2Ugd2lsbCBhY2NlcHQgdGhlIGZvbGxvd2luZyBtZXRob2RzIG9mIHBheW1lbnQ6IFZpc2EsIE1hc3RlckNhcmRcbiAgICAgICAgICAgIGFuZCBBbWVyaWNhbiBFeHByZXNzXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1sIG1iLTJcIj5QYXltZW50czwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgQWxsIHJlZnVuZCByZXF1ZXN0cyBtdXN0IGJlIGluIHdyaXRpbmcgdG8gSmVubnkgYXRcbiAgICAgICAgICAgIGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBDYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyAtIFJpYmJpdCAmYW1wOyBSb28gbWF5IGNhbmNlbCB0aGlzXG4gICAgICAgICAgICBjb250cmFjdCBhdCBhbnkgdGltZSBiZWZvcmUgdGhlIGNoaWxkIGNvbW1lbmNlcyB0aGUgMTAgd2VlayBwcm9ncmFtXG4gICAgICAgICAgICBmb3IgYW55IHJlYXNvbiB3aGF0c29ldmVyLiBSaWJiaXQgJmFtcDsgUm9vIHNoYWxsIG5vdCBiZSBsaWFibGUgZm9yXG4gICAgICAgICAgICBhbnkgbG9zcyBvciBkYW1hZ2Ugd2hhdHNvZXZlciBhcmlzaW5nIGZyb20gc3VjaCBjYW5jZWxsYXRpb24uIEluIHRoZVxuICAgICAgICAgICAgZXZlbnQgb2YgY2FuY2VsbGF0aW9uIGJ5IFJpYmJpdCAmYW1wOyBSb28gcHJpb3IgdG8gdGhlIGNvbW1lbmNlbWVudFxuICAgICAgICAgICAgb2YgdGhlIDEwIHdlZWsgcHJvZ3JhbSwgUmliYml0ICZhbXA7IFJvbyB3aWxsIHJlZnVuZCBhbnkgZmVlcyBmb3JcbiAgICAgICAgICAgIG91dHN0YW5kaW5nIHNlc3Npb25zLiBJZiBjbGFzc2VzIGFyZSBjYW5jZWxsZWQgYXMgYSByZXN1bHQgb2ZcbiAgICAgICAgICAgIGV4dHJlbWUgd2VhdGhlciBjb25kaXRpb25zIG9yIHdoZXJlIGxvY2FsIGF1dGhvcml0aWVzL3B1YmxpY1xuICAgICAgICAgICAgZ3VpZGFuY2UgYWR2aXNlIHRoYXQgc2Vzc2lvbnMgc2hvdWxkIGJlIHRlbXBvcmFyaWx5IHN1c3BlbmRlZCBmb3JcbiAgICAgICAgICAgIGhlYWx0aCBvciBvdGhlciByZWFzb25zLCB0aGVuIGEgbWFrZSB1cCBsZXNzb24gd2lsbCBiZSBncmFudGVkLlxuICAgICAgICAgICAgUGxlYXNlIHNlZSB0aGUgbWFrZSB1cCBsZXNzb24gcG9saWN5LiBJbiB0aGUgZXZlbnQgb2YgYSAnbGFzdFxuICAgICAgICAgICAgbWludXRlJyBsZXNzb24gY2hhbmdlIG9yIGEgbGVzc29uIGNhbmNlbGxhdGlvbiBieSBSaWJiaXQgJmFtcDsgUm9vLFxuICAgICAgICAgICAgd2Ugd2lsbCBub3RpZnkgeW91IHdpdGggYXMgbXVjaCBub3RpY2UgYXMgcG9zc2libGUuIFJpYmJpdCAmYW1wOyBSb29cbiAgICAgICAgICAgIHdpbGwgbm90IHJlaW1idXJzZSBhbnkgZXhwZW5zZXMgaW5jdXJyZWQgYnkgYSBjdXN0b21lciBmYWlsaW5nIHRvXG4gICAgICAgICAgICBhY2tub3dsZWRnZSB0aGlzIGNvbW11bmljYXRpb24uIFNob3VsZCB5b3UgZGVjaWRlIHRvIGxlYXZlIGFuXG4gICAgICAgICAgICBlbnJvbGxlZCBSaWJiaXQgJmFtcDsgUm9vIHByb2dyYW0gYmVmb3JlIHRoZSBtYWtlIHVwIGxlc3NvbiBjcmVkaXRcbiAgICAgICAgICAgIGhhcyBiZWVuIHVzZWQgd2Ugd2lsbCByZWZ1bmQgdGhlIGNyZWRpdCB0byB5b3UuIElmIGluc3VmZmljaWVudFxuICAgICAgICAgICAgY2hpbGRyZW4gYXJlIGJvb2tlZCBpbnRvIHlvdXIgc2Vzc2lvbiwgd2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG9cbiAgICAgICAgICAgIGNhbmNlbCBvciBjaGFuZ2UgdGhlIGNsYXNzLiBJbiB0aGlzIGluc3RhbmNlIHdlIHdpbGwgb2ZmZXIgeW91XG4gICAgICAgICAgICBlaXRoZXIgYW4gYWx0ZXJuYXRpdmUgc2Vzc2lvbiB0byBhdHRlbmQgb3IgYSByZWZ1bmQgd2lsbCBiZSBnaXZlblxuICAgICAgICAgICAgZm9yIGFueSByZW1haW5pbmcgc2Vzc2lvbnMgYWZ0ZXIgdGhlIGNhbmNlbGxhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJBdHRlbmRhbmNlXCI+XG4gICAgICAgICAgWW91ciBwYXltZW50IGhhcyByZXNlcnZlZCB5b3VyIHBsYWNlIGp1c3QgZm9yIHlvdSBzbyBpZiB5b3Uga25vdyB5b3VcbiAgICAgICAgICBhcmUgdW5hYmxlIHRvIGF0dGVuZCBhIGxlc3NvbiwgcGxlYXNlIGxldCB1cyBrbm93IHdpdGggYXMgbXVjaCBub3RpY2VcbiAgICAgICAgICBhcyBwb3NzaWJsZSBieSBlbWFpbGluZyBvciB0ZWxlcGhvbmluZyBKZW5ueSBhdFxuICAgICAgICAgIGplbm55aEByaWJiaXRhbmRyb28uY29tLmF1IG9yICs2MTQwNjYwMzU4My4gVGhlIFBhcmVudC9jYXJlclxuICAgICAgICAgIHVuZGVyc3RhbmRzIHRoYXQgc2Vzc2lvbnMgYXJlIG9uZ29pbmcgYW5kIHRvIGJlIHVzZWQgY29uc2VjdXRpdmVseS4gTm9cbiAgICAgICAgICBjcmVkaXRzIG9yIHJlZnVuZHMgd2lsbCBiZSBpc3N1ZWQgZm9yIG1pc3NlZCBjbGFzc2VzLiBObyByZWZ1bmRzIHdpbGxcbiAgICAgICAgICBiZSBnaXZlbiBpZiB5b3UgY2hhbmdlIHlvdXIgbWluZCBhYm91dCB5b3VyIGNoaWxkIHBhcnRpY2lwYXRpbmcgaW4gdGhlXG4gICAgICAgICAgcHJvZ3JhbS4gQ2xhc3MgYXR0ZW5kYW5jZSBoYXMgYmVlbiBsaW1pdGVkIHRvIDEwIGNoaWxkcmVuIHBlciBjbGFzcy5cbiAgICAgICAgICBJZiB0aGUgcGxheSBzZXNzaW9ucyByZWFjaCBjYXBhY2l0eSB3ZSB3aWxsIHVwZGF0ZSBvdXIgYm9va2luZyBzeXN0ZW1cbiAgICAgICAgICB0byBzdG9wIGFsbCBuZXcgZW5yb2xtZW50cyB1bnRpbCB0aGUgZm9sbG93aW5nIHRlcm0uXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJNQUtFIFVQIExFU1NPTlMgJmFtcDsgQk9OVVMgU0VTU0lPTlNcIj5cbiAgICAgICAgICBJZiB5b3UgY2Fubm90IGF0dGVuZCBhIGxlc3NvbiBhbmQgbm90aWZ5IHVzIHByaW9yIHRvIHlvdXIgc2Vzc2lvbiB5b3VcbiAgICAgICAgICBhcmUgZWxpZ2libGUgZm9yIGEgbWFrZSB1cCBsZXNzb24uIFRoaXMgbWFrZSB1cCBsZXNzb24gbXVzdCBiZSB1c2VkIGluXG4gICAgICAgICAgYW5vdGhlciBzZXNzaW9uIG90aGVyIHRoYW4geW91ciBzY2hlZHVsZWQgZGF5IChlLmcuIGlmIHlvdSBhdHRlbmQgb24gYVxuICAgICAgICAgIFR1ZXNkYXksIHlvdXIgbWFrZSB1cCBsZXNzb24gbXVzdCBiZSB1c2VkIGluIGFuIGF2YWlsYWJsZSBXZWRuZXNkYXlcbiAgICAgICAgICBzZXNzaW9uKS4gQSBtYXhpbXVtIG9mIDIgbWFrZSB1cCBsZXNzb25zIGNhbiBiZSB1c2VkIGluIGEgMTAgd2Vla1xuICAgICAgICAgIHBlcmlvZC4gTWFrZSB1cCBsZXNzb25zIHdpbGwgYmUgYXJyYW5nZWQgZm9yIGFueSBjYW5jZWxsYXRpb25zIG1hZGUgYnlcbiAgICAgICAgICBSaWJiaXQgJmFtcDsgUm9vIGZvciBzZXZlcmUgd2VhdGhlciwgc2ljayBzdGFmZiBtZW1iZXJzIG9yIHJlYXNvbnMgd2VcbiAgICAgICAgICBmZWVsIGFyZSBvZiBkYW5nZXIgdG8gb3VyIHBhcnRpY2lwYW50cyBhbmQgc3RhZmYgbWVtYmVycy5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBJZiB5b3UgYXJlIGVudGl0bGVkIHRvIGEgZnJlZSBib251cyBzZXNzaW9uIGFmdGVyIGVucm9sbGluZyB3aXRoXG4gICAgICAgICAgUmliYml0ICZhbXA7IFJvbywgdGhlcmUgd2lsbCBiZSBhIGFkZGVkIHNlc3Npb24gYXQgdGhlIGVuZCBvZiB5b3VyIDEwXG4gICAgICAgICAgd2VlayBwcm9ncmFtIGF2YWlsYWJsZSBmb3IgeW91IHRvIGJvb2suIEJvbnVzIHNlc3Npb25zIHNob3VsZCBiZVxuICAgICAgICAgIGJvb2tlZCB3aXRoIGFzIG11Y2ggbm90aWNlIGFzIHBvc3NpYmxlLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPFBhcmFncmFwaCBoZWFkaW5nPVwiSEVBTFRIICZhbXA7IFNBRkVUWVwiPlxuICAgICAgICAgIFRoZSBzYWZldHkgb2YgYWxsIHRoZSBjaGlsZHJlbiBhdHRlbmRpbmcgb3VyIHBsYXkgc2Vzc2lvbnMgaXMgb2YgdGhlXG4gICAgICAgICAgZ3JlYXRlc3QgaW1wb3J0YW5jZSB0byB1cy4gRHVlIHRvIHRoZSBuYXR1cmUgb2YgdGhlIHBsYXkgc2Vzc2lvbnMgYW5kXG4gICAgICAgICAgdGhlIGFnZSBvZiB0aGUgY2hpbGQocmVuKSBhdHRlbmRpbmcsIHlvdXIgY2hpbGQocmVuKSByZW1haW4geW91clxuICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IHdoaWxlIGF0dGVuZGluZyBhbmQgbXVzdCBiZSBzdXBlcnZpc2VkIHRocm91Z2hvdXQuIElmXG4gICAgICAgICAgeW91IGxlYXZlIHRoZSBwbGF5IHNlc3Npb24gdmVudWUgZm9yIGFueSByZWFzb24geW91IG11c3QgdGFrZSB5b3VyXG4gICAgICAgICAgY2hpbGQocmVuKSB3aXRoIHlvdS4gV2UgYWNjZXB0IG5vIHJlc3BvbnNpYmlsaXR5IGZvciBhbnkgaW5qdXJ5IGNhdXNlZFxuICAgICAgICAgIGR1cmluZyBhIHBsYXkgc2Vzc2lvbi4gUGxlYXNlIGJlIGFkdmlzZWQgdGhhdCB3ZSBoYXZlIGEgZmlyc3QgYWlkIGtpdFxuICAgICAgICAgIG9uIHNpdGUgYW5kIGZpcnN0IGFpZCB3aWxsIGJlIGdpdmVuIHRvIHlvdXIgY2hpbGQgaW4gdGhlIGV2ZW50IGFuXG4gICAgICAgICAgYWNjaWRlbnQvaW5qdXJ5IG9jY3VycyBhdCBhIHBsYXkgc2Vzc2lvbi4gV2UgYWNjZXB0IG5vIHJlc3BvbnNpYmlsaXR5XG4gICAgICAgICAgZm9yIGFueSBiZWxvbmdpbmdzIHRoYXQgZ2V0IGxvc3Qgb3IgZGFtYWdlZC4gV2UgcG9saXRlbHkgYXNrIHRoYXRcbiAgICAgICAgICBwYXJlbnRzIGFuZCBjaGlsZHJlbiBkbyBub3QgYXR0ZW5kIGlmIGVpdGhlciBhcmUgZmVlbGluZyB1bndlbGwuIFdlXG4gICAgICAgICAgYXJlIGEgc21va2UgZnJlZSB6b25lIGZvciB0aGUgc2FmZXR5IG9mIG91ciBwYXJ0aWNpcGF0aW5nIGNoaWxkcmVuIGFuZFxuICAgICAgICAgIGZhbWlsaWVzIGFuZCB0aGUgc3Vycm91bmRpbmcgZW52aXJvbm1lbnQuIEFueSBwYXJlbnRzL2NhcmVycyB3aG8gYXJlXG4gICAgICAgICAgc2VlbiBzbW9raW5nIGF0IHRoZSB0aW1lIG9mIGEgcGxheSBzZXNzaW9uIHdpbGwgYmUgYXNrZWQgdG8gbGVhdmUgdGhlXG4gICAgICAgICAgcGxheSBzZXNzaW9uIHdpdGggdGhlaXIgY2hpbGQuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJQSE9UT0dSUEFIWSAmYW1wOyBTT0NJQUwgTUVESUFcIj5cbiAgICAgICAgICBQbGVhc2UgYmUgYXdhcmUgdGhhdCBieSBlbnJvbGxpbmcgeW91ciBjaGlsZChyZW4pIGluIGFueSBSaWJiaXQgJmFtcDtcbiAgICAgICAgICBSb28gUGxheSBTZXNzaW9uIHByb2dyYW0sIHlvdSBhcmUgZ3JhbnRpbmcgdXMgcGVybWlzc2lvbiB0byBwaG90b2dyYXBoXG4gICAgICAgICAgb3IgcmVjb3JkIHNob3J0IHZpZGVvIGNsaXBzIG9mIHlvdXIgY2hpbGQocmVuKSBkdXJpbmcgdGhlIHBsYXlcbiAgICAgICAgICBzZXNzaW9ucyB0aGF0IHdlIG1heSB1c2UgZm9yIFJpYmJpdCAmYW1wOyBSb28gcHJvbW90aW9uYWwgcHVycG9zZXMgb25cbiAgICAgICAgICBvdXIgc29jaWFsIG1lZGlhIGFuZC9vciB3ZWJzaXRlLiBObyBkYXRhIHVuZGVyIGFueSBjaXJjdW1zdGFuY2Ugd2lsbFxuICAgICAgICAgIGJlIHBhc3NlZCBvdmVyIHRvIGEgdGhpcmQgcGFydHkuIElmIHlvdSBkbyBub3Qgd2lzaCB0byBwcm92aWRlIGNvbnNlbnRcbiAgICAgICAgICBmb3IgdGhpcyB0aGVuIHlvdSBuZWVkIHRvIG5vdGlmeSBKZW5ueSBpbiB3cml0aW5nIGF0XG4gICAgICAgICAgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUgYW5kIG5vdGlmeSBKZW5ueSBpbiBwZXJzb24gYXQgeW91ciBwbGF5XG4gICAgICAgICAgc2Vzc2lvbi5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxQYXJhZ3JhcGggaGVhZGluZz1cIkNPTlRBQ1RcIj5cbiAgICAgICAgICBGb3Igc3BlY2lmaWMgcXVlc3Rpb25zIGFib3V0IFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucywgcGxlYXNlXG4gICAgICAgICAgY29udGFjdCBKZW5ueSBkaXJlY3RseSBhdCBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdS4gSWYgd2UgaGF2ZSB0b1xuICAgICAgICAgIGNvbnRhY3QgeW91IHdlIHdpbGwgZG8gc28gaW4gd3JpdGluZyB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzIHlvdVxuICAgICAgICAgIHByb3ZpZGVkIHVzIGluIHlvdXIgcmVnaXN0cmF0aW9uLCBvciBieSB0ZWxlcGhvbmUgb3IgdGV4dCBtZXNzYWdlIHdpdGhcbiAgICAgICAgICB0aGUgcGhvbmUgbnVtYmVyIHlvdSBwcm92aWRlZCB1cyBpbiB5b3VyIHJlZ2lzdHJhdGlvbi5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8L1NpbmdsZUNvbHVtbj5cbiAgICA8L1BhZ2VUZW1wbGF0ZT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=