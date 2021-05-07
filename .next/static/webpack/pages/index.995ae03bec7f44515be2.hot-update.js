webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modules/paragraph.tsx":
/*!******************************************!*\
  !*** ./components/modules/paragraph.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);



var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\paragraph.tsx",
    _this = undefined;

var Paragraph = function Paragraph(_ref) {
  var heading = _ref.heading,
      content = _ref.content;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "uppercase text-xl mb-4",
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mb-8",
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = Paragraph;
/* harmony default export */ __webpack_exports__["default"] = (Paragraph);

var _c;

$RefreshReg$(_c, "Paragraph");

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Please read these terms carefully before you book any of our Ribbit & Roo play sessions. These terms tell you about Ribbit & Roo, how we will provide play sessions to you, how you or Ribbit & Roo may change or end the contract, what to do if there is an issue and other important information. If you think that there is a mistake in these terms, please contact us at jennyh@ribbitandroo.com.au to discuss."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_paragraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
          heading: "ACCEPTANCE OF TERMS & CONDITIONS",
          children: "All those who wish to attend any Ribbit & Roo play session must agree to the terms and conditions set out below. These are the terms and conditions which we provide Ribbit & Roo play sessions to you and"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "ACCEPTANCE OF TERMS & CONDITIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "All those who wish to attend any Ribbit & Roo play session must agree to the terms and conditions set out below. These are the terms and conditions which we provide Ribbit & Roo play sessions to you and your child(ren). No variation or addition to the terms shall be binding unless agreed in writing by Ribbit & Roo and the parent. In the unlikely event of a customer failing to abide by these terms and conditions, a customer may be requested to discontinue with any Ribbit & Roo play session. In this instance Ribbit & Roo will be under no obligation to provide a refund for any outstanding lessons. The Parent must agree to keep the play session's content confidential and not to copy or use any content of the program directly or indirectly. At the time of publishing all session information is correct."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "ENROLMENTS, PAYMENT & CANCELLATIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Enrolments "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Enrolments will not be accepted without payment. Please ensure you have transferred the funds for your 10 week enrolment before your child\u2019s first session. Also please ensure you have read and understood the enrolment, payment & cancellations policy and the refund & missed session policy. You can book a Ribbit & Roo play session by visiting www.ribbitandroo.com.au/play-sessions and by registering using our registration form. You must provide us with the specific information we need in order to enrol in a session with us. During the enrolment process, you will be asked to read and agree to our Terms and Conditions (this document). Once registered, Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your chosen play session. You are eligible for a free trial session when registering. When registering for a free trial you must press the 'Register for a Free Trial' button to submit your details. Ribbit & Roo will receive a confirmation email with your details and will contact you with further information about your free trial play session. After completing your play session free trial, if you choose to enrol in a 10 week Ribbit & Roo program you must re register at www.ribbitandroo.com.au/play-sessions and submit 'Register and Book'. This will transfer you to the payment page. Please note, that if you wish to enrol after your free trial we cannot guarantee that there will be available spaces in our 10 week program. Our play sessions are open to enrolments until we are sold out."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["The 10 week term is paid for in advance and must be paid in full prior to you child attending their first session. If you wish to re enrol for our next 10 week term you can do so by registering at www.ribbitandroo.com.au/play-sessions and submitting the button 'Register and Book'. It is your responsibility to make sure that there are sufficient funds in your account and that the saved card is valid. If a payment has failed, you will be notified and another form of payment/credit card must be used. The Fee is non-refundable under any circumstances whatsoever except with the prior written agreement of Ribbit & Roo. If the cost of the sessions change you will be notified prior to the start of the following term.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), "We will accept the following methods of payment: Visa, MasterCard and American Express"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "uppercase text-l mb-2",
          children: "Payments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["All refund requests must be in writing to Jenny at jennyh@ribbitandroo.com.au.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), "Cancellation by Ribbit & Roo - Ribbit & Roo may cancel this contract at any time before the child commences the 10 week program for any reason whatsoever. Ribbit & Roo shall not be liable for any loss or damage whatsoever arising from such cancellation. In the event of cancellation by Ribbit & Roo prior to the commencement of the 10 week program, Ribbit & Roo will refund any fees for outstanding sessions. If classes are cancelled as a result of extreme weather conditions or where local authorities/public guidance advise that sessions should be temporarily suspended for health or other reasons, then a make up lesson will be granted. Please see the make up lesson policy. In the event of a 'last minute' lesson change or a lesson cancellation by Ribbit & Roo, we will notify you with as much notice as possible. Ribbit & Roo will not reimburse any expenses incurred by a customer failing to acknowledge this communication. Should you decide to leave an enrolled Ribbit & Roo program before the make up lesson credit has been used we will refund the credit to you. If insufficient children are booked into your session, we reserve the right to cancel or change the class. In this instance we will offer you either an alternative session to attend or a refund will be given for any remaining sessions after the cancellation."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "Attendance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Your payment has reserved your place just for you so if you know you are unable to attend a lesson, please let us know with as much notice as possible by emailing or telephoning Jenny at jennyh@ribbitandroo.com.au or +61406603583. The Parent/carer understands that sessions are ongoing and to be used consecutively. No credits or refunds will be issued for missed classes. No refunds will be given if you change your mind about your child participating in the program. Class attendance has been limited to 10 children per class. If the play sessions reach capacity we will update our booking system to stop all new enrolments until the following term."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "MAKE UP LESSONS & BONUS SESSIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: ["If you cannot attend a lesson and notify us prior to your session you are eligible for a make up lesson. This make up lesson must be used in another session other than your scheduled day (e.g. if you attend on a Tuesday, your make up lesson must be used in an available Wednesday session). A maximum of 2 make up lessons can be used in a 10 week period. Make up lessons will be arranged for any cancellations made by Ribbit & Roo for severe weather, sick staff members or reasons we feel are of danger to our participants and staff members.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), "If you are entitled to a free bonus session after enrolling with Ribbit & Roo, there will be a added session at the end of your 10 week program available for you to book. Bonus sessions should be booked with as much notice as possible."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "HEALTH & SAFETY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "The safety of all the children attending our play sessions is of the greatest importance to us. Due to the nature of the play sessions and the age of the child(ren) attending, your child(ren) remain your responsibility while attending and must be supervised throughout. If you leave the play session venue for any reason you must take your child(ren) with you. We accept no responsibility for any injury caused during a play session. Please be advised that we have a first aid kit on site and first aid will be given to your child in the event an accident/injury occurs at a play session. We accept no responsibility for any belongings that get lost or damaged. We politely ask that parents and children do not attend if either are feeling unwell. We are a smoke free zone for the safety of our participating children and families and the surrounding environment. Any parents/carers who are seen smoking at the time of a play session will be asked to leave the play session with their child."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "PHOTOGRPAHY & SOCIAL MEDIA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "Please be aware that by enrolling your child(ren) in any Ribbit & Roo Play Session program, you are granting us permission to photograph or record short video clips of your child(ren) during the play sessions that we may use for Ribbit & Roo promotional purposes on our social media and/or website. No data under any circumstance will be passed over to a third party. If you do not wish to provide consent for this then you need to notify Jenny in writing at jennyh@ribbitandroo.com.au and notify Jenny in person at your play session."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "uppercase text-xl mb-4",
          children: "CONTACT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-8",
          children: "For specific questions about Ribbit & Roo play sessions, please contact Jenny directly at jennyh@ribbitandroo.com.au. If we have to contact you we will do so in writing with the email address you provided us in your registration, or by telephone or text message with the phone number you provided us in your registration."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
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
      lineNumber: 200,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGVzL3BhcmFncmFwaC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQYXJhZ3JhcGgiLCJoZWFkaW5nIiwiY29udGVudCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUEwQztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsT0FBOEIsUUFBOUJBLE9BQThCO0FBQzFELHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsd0JBQWQ7QUFBQSxnQkFBd0NEO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQSxnQkFBcUJDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBTUQsQ0FQRDs7S0FBTUYsUztBQVFTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTRyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxpRUFBRDtBQUFPLGVBQU8sRUFBQyxzQkFBZjtBQUFzQyxrQkFBVSxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUscUVBQUMscUVBQUQ7QUFBVyxpQkFBTyxFQUFDLGtDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWdCRTtBQUFJLG1CQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGLGVBbUJFO0FBQUcsbUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRixlQWtDRTtBQUFJLG1CQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENGLGVBcUNFO0FBQUksbUJBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0YsZUFzQ0U7QUFBRyxtQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdENGLGVBZ0VFO0FBQUksbUJBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRUYsZUFpRUU7QUFBRyxtQkFBUyxFQUFDLE1BQWI7QUFBQSxvdkJBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakVGLGVBaUZFO0FBQUksbUJBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqRkYsZUFrRkU7QUFBRyxtQkFBUyxFQUFDLE1BQWI7QUFBQSxvSEFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsRkYsZUE0R0U7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVHRixlQTZHRTtBQUFHLG1CQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3R0YsZUF5SEU7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpIRixlQTRIRTtBQUFHLG1CQUFTLEVBQUMsTUFBYjtBQUFBLGtrQkFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1SEYsZUE0SUU7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVJRixlQTZJRTtBQUFHLG1CQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3SUYsZUE4SkU7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlKRixlQWlLRTtBQUFHLG1CQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqS0YsZUE0S0U7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVLRixlQTZLRTtBQUFHLG1CQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUErTEUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9MRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1NRDtLQXBNdUJBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTk1YWUwM2JlYzdmNDQ1MTViZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgTmV3VHlwZSA9IHtcclxuICBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xyXG59O1xyXG5cclxudHlwZSBQYXJhZ3JhcGhQcm9wcyA9IE5ld1R5cGU7XHJcblxyXG5jb25zdCBQYXJhZ3JhcGggPSAoeyBoZWFkaW5nLCBjb250ZW50IH06IFBhcmFncmFwaFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+e2hlYWRpbmd9PC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPntjb250ZW50fTwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2R1bGVzL2Zvb3RlclwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL21vZHVsZXMvdGl0bGVcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21vZHVsZXMvbWVudVwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2R1bGVzL3BhcmFncmFwaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmliYml0ICZhbXA7IFJvbzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxNZW51IC8+XG4gICAgICAgIDxUaXRsZSBoZWFkaW5nPVwiVGVybXMgYW5kIENvbmRpdGlvbnNcIiBzdWJoZWFkaW5nPVwiVGhlIHNtYWxsIHByaW50XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0zMlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIFBsZWFzZSByZWFkIHRoZXNlIHRlcm1zIGNhcmVmdWxseSBiZWZvcmUgeW91IGJvb2sgYW55IG9mIG91ciBSaWJiaXRcbiAgICAgICAgICAgICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zLiBUaGVzZSB0ZXJtcyB0ZWxsIHlvdSBhYm91dCBSaWJiaXQgJmFtcDtcbiAgICAgICAgICAgIFJvbywgaG93IHdlIHdpbGwgcHJvdmlkZSBwbGF5IHNlc3Npb25zIHRvIHlvdSwgaG93IHlvdSBvciBSaWJiaXRcbiAgICAgICAgICAgICZhbXA7IFJvbyBtYXkgY2hhbmdlIG9yIGVuZCB0aGUgY29udHJhY3QsIHdoYXQgdG8gZG8gaWYgdGhlcmUgaXMgYW5cbiAgICAgICAgICAgIGlzc3VlIGFuZCBvdGhlciBpbXBvcnRhbnQgaW5mb3JtYXRpb24uIElmIHlvdSB0aGluayB0aGF0IHRoZXJlIGlzIGFcbiAgICAgICAgICAgIG1pc3Rha2UgaW4gdGhlc2UgdGVybXMsIHBsZWFzZSBjb250YWN0IHVzIGF0XG4gICAgICAgICAgICBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdSB0byBkaXNjdXNzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8UGFyYWdyYXBoIGhlYWRpbmc9XCJBQ0NFUFRBTkNFIE9GIFRFUk1TICZhbXA7IENPTkRJVElPTlNcIj5cbiAgICAgICAgICAgIEFsbCB0aG9zZSB3aG8gd2lzaCB0byBhdHRlbmQgYW55IFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9uIG11c3RcbiAgICAgICAgICAgIGFncmVlIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBzZXQgb3V0IGJlbG93LiBUaGVzZSBhcmUgdGhlIHRlcm1zXG4gICAgICAgICAgICBhbmQgY29uZGl0aW9ucyB3aGljaCB3ZSBwcm92aWRlIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucyB0b1xuICAgICAgICAgICAgeW91IGFuZFxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICBBQ0NFUFRBTkNFIE9GIFRFUk1TICZhbXA7IENPTkRJVElPTlNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIEFsbCB0aG9zZSB3aG8gd2lzaCB0byBhdHRlbmQgYW55IFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9uIG11c3RcbiAgICAgICAgICAgIGFncmVlIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBzZXQgb3V0IGJlbG93LiBUaGVzZSBhcmUgdGhlIHRlcm1zXG4gICAgICAgICAgICBhbmQgY29uZGl0aW9ucyB3aGljaCB3ZSBwcm92aWRlIFJpYmJpdCAmYW1wOyBSb28gcGxheSBzZXNzaW9ucyB0b1xuICAgICAgICAgICAgeW91IGFuZCB5b3VyIGNoaWxkKHJlbikuIE5vIHZhcmlhdGlvbiBvciBhZGRpdGlvbiB0byB0aGUgdGVybXMgc2hhbGxcbiAgICAgICAgICAgIGJlIGJpbmRpbmcgdW5sZXNzIGFncmVlZCBpbiB3cml0aW5nIGJ5IFJpYmJpdCAmYW1wOyBSb28gYW5kIHRoZVxuICAgICAgICAgICAgcGFyZW50LiBJbiB0aGUgdW5saWtlbHkgZXZlbnQgb2YgYSBjdXN0b21lciBmYWlsaW5nIHRvIGFiaWRlIGJ5XG4gICAgICAgICAgICB0aGVzZSB0ZXJtcyBhbmQgY29uZGl0aW9ucywgYSBjdXN0b21lciBtYXkgYmUgcmVxdWVzdGVkIHRvXG4gICAgICAgICAgICBkaXNjb250aW51ZSB3aXRoIGFueSBSaWJiaXQgJmFtcDsgUm9vIHBsYXkgc2Vzc2lvbi4gSW4gdGhpcyBpbnN0YW5jZVxuICAgICAgICAgICAgUmliYml0ICZhbXA7IFJvbyB3aWxsIGJlIHVuZGVyIG5vIG9ibGlnYXRpb24gdG8gcHJvdmlkZSBhIHJlZnVuZCBmb3JcbiAgICAgICAgICAgIGFueSBvdXRzdGFuZGluZyBsZXNzb25zLiBUaGUgUGFyZW50IG11c3QgYWdyZWUgdG8ga2VlcCB0aGUgcGxheVxuICAgICAgICAgICAgc2Vzc2lvbidzIGNvbnRlbnQgY29uZmlkZW50aWFsIGFuZCBub3QgdG8gY29weSBvciB1c2UgYW55IGNvbnRlbnQgb2ZcbiAgICAgICAgICAgIHRoZSBwcm9ncmFtIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkuIEF0IHRoZSB0aW1lIG9mIHB1Ymxpc2hpbmcgYWxsXG4gICAgICAgICAgICBzZXNzaW9uIGluZm9ybWF0aW9uIGlzIGNvcnJlY3QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICBFTlJPTE1FTlRTLCBQQVlNRU5UICZhbXA7IENBTkNFTExBVElPTlNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1sIG1iLTJcIj5FbnJvbG1lbnRzIDwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgRW5yb2xtZW50cyB3aWxsIG5vdCBiZSBhY2NlcHRlZCB3aXRob3V0IHBheW1lbnQuIFBsZWFzZSBlbnN1cmUgeW91XG4gICAgICAgICAgICBoYXZlIHRyYW5zZmVycmVkIHRoZSBmdW5kcyBmb3IgeW91ciAxMCB3ZWVrIGVucm9sbWVudCBiZWZvcmUgeW91clxuICAgICAgICAgICAgY2hpbGTigJlzIGZpcnN0IHNlc3Npb24uIEFsc28gcGxlYXNlIGVuc3VyZSB5b3UgaGF2ZSByZWFkIGFuZFxuICAgICAgICAgICAgdW5kZXJzdG9vZCB0aGUgZW5yb2xtZW50LCBwYXltZW50ICZhbXA7IGNhbmNlbGxhdGlvbnMgcG9saWN5IGFuZCB0aGVcbiAgICAgICAgICAgIHJlZnVuZCAmYW1wOyBtaXNzZWQgc2Vzc2lvbiBwb2xpY3kuIFlvdSBjYW4gYm9vayBhIFJpYmJpdCAmYW1wOyBSb29cbiAgICAgICAgICAgIHBsYXkgc2Vzc2lvbiBieSB2aXNpdGluZyB3d3cucmliYml0YW5kcm9vLmNvbS5hdS9wbGF5LXNlc3Npb25zIGFuZFxuICAgICAgICAgICAgYnkgcmVnaXN0ZXJpbmcgdXNpbmcgb3VyIHJlZ2lzdHJhdGlvbiBmb3JtLiBZb3UgbXVzdCBwcm92aWRlIHVzIHdpdGhcbiAgICAgICAgICAgIHRoZSBzcGVjaWZpYyBpbmZvcm1hdGlvbiB3ZSBuZWVkIGluIG9yZGVyIHRvIGVucm9sIGluIGEgc2Vzc2lvbiB3aXRoXG4gICAgICAgICAgICB1cy4gRHVyaW5nIHRoZSBlbnJvbG1lbnQgcHJvY2VzcywgeW91IHdpbGwgYmUgYXNrZWQgdG8gcmVhZCBhbmRcbiAgICAgICAgICAgIGFncmVlIHRvIG91ciBUZXJtcyBhbmQgQ29uZGl0aW9ucyAodGhpcyBkb2N1bWVudCkuIE9uY2UgcmVnaXN0ZXJlZCxcbiAgICAgICAgICAgIFJpYmJpdCAmYW1wOyBSb28gd2lsbCByZWNlaXZlIGEgY29uZmlybWF0aW9uIGVtYWlsIHdpdGggeW91ciBkZXRhaWxzXG4gICAgICAgICAgICBhbmQgd2lsbCBjb250YWN0IHlvdSB3aXRoIGZ1cnRoZXIgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBjaG9zZW4gcGxheVxuICAgICAgICAgICAgc2Vzc2lvbi4gWW91IGFyZSBlbGlnaWJsZSBmb3IgYSBmcmVlIHRyaWFsIHNlc3Npb24gd2hlbiByZWdpc3RlcmluZy5cbiAgICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIGEgZnJlZSB0cmlhbCB5b3UgbXVzdCBwcmVzcyB0aGUgJ1JlZ2lzdGVyIGZvciBhXG4gICAgICAgICAgICBGcmVlIFRyaWFsJyBidXR0b24gdG8gc3VibWl0IHlvdXIgZGV0YWlscy4gUmliYml0ICZhbXA7IFJvbyB3aWxsXG4gICAgICAgICAgICByZWNlaXZlIGEgY29uZmlybWF0aW9uIGVtYWlsIHdpdGggeW91ciBkZXRhaWxzIGFuZCB3aWxsIGNvbnRhY3QgeW91XG4gICAgICAgICAgICB3aXRoIGZ1cnRoZXIgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBmcmVlIHRyaWFsIHBsYXkgc2Vzc2lvbi4gQWZ0ZXJcbiAgICAgICAgICAgIGNvbXBsZXRpbmcgeW91ciBwbGF5IHNlc3Npb24gZnJlZSB0cmlhbCwgaWYgeW91IGNob29zZSB0byBlbnJvbCBpbiBhXG4gICAgICAgICAgICAxMCB3ZWVrIFJpYmJpdCAmYW1wOyBSb28gcHJvZ3JhbSB5b3UgbXVzdCByZSByZWdpc3RlciBhdFxuICAgICAgICAgICAgd3d3LnJpYmJpdGFuZHJvby5jb20uYXUvcGxheS1zZXNzaW9ucyBhbmQgc3VibWl0ICdSZWdpc3RlciBhbmRcbiAgICAgICAgICAgIEJvb2snLiBUaGlzIHdpbGwgdHJhbnNmZXIgeW91IHRvIHRoZSBwYXltZW50IHBhZ2UuIFBsZWFzZSBub3RlLCB0aGF0XG4gICAgICAgICAgICBpZiB5b3Ugd2lzaCB0byBlbnJvbCBhZnRlciB5b3VyIGZyZWUgdHJpYWwgd2UgY2Fubm90IGd1YXJhbnRlZSB0aGF0XG4gICAgICAgICAgICB0aGVyZSB3aWxsIGJlIGF2YWlsYWJsZSBzcGFjZXMgaW4gb3VyIDEwIHdlZWsgcHJvZ3JhbS4gT3VyIHBsYXlcbiAgICAgICAgICAgIHNlc3Npb25zIGFyZSBvcGVuIHRvIGVucm9sbWVudHMgdW50aWwgd2UgYXJlIHNvbGQgb3V0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtbCBtYi0yXCI+UGF5bWVudHM8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIFRoZSAxMCB3ZWVrIHRlcm0gaXMgcGFpZCBmb3IgaW4gYWR2YW5jZSBhbmQgbXVzdCBiZSBwYWlkIGluIGZ1bGxcbiAgICAgICAgICAgIHByaW9yIHRvIHlvdSBjaGlsZCBhdHRlbmRpbmcgdGhlaXIgZmlyc3Qgc2Vzc2lvbi4gSWYgeW91IHdpc2ggdG8gcmVcbiAgICAgICAgICAgIGVucm9sIGZvciBvdXIgbmV4dCAxMCB3ZWVrIHRlcm0geW91IGNhbiBkbyBzbyBieSByZWdpc3RlcmluZyBhdFxuICAgICAgICAgICAgd3d3LnJpYmJpdGFuZHJvby5jb20uYXUvcGxheS1zZXNzaW9ucyBhbmQgc3VibWl0dGluZyB0aGUgYnV0dG9uXG4gICAgICAgICAgICAnUmVnaXN0ZXIgYW5kIEJvb2snLiBJdCBpcyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIG1ha2Ugc3VyZSB0aGF0XG4gICAgICAgICAgICB0aGVyZSBhcmUgc3VmZmljaWVudCBmdW5kcyBpbiB5b3VyIGFjY291bnQgYW5kIHRoYXQgdGhlIHNhdmVkIGNhcmRcbiAgICAgICAgICAgIGlzIHZhbGlkLiBJZiBhIHBheW1lbnQgaGFzIGZhaWxlZCwgeW91IHdpbGwgYmUgbm90aWZpZWQgYW5kIGFub3RoZXJcbiAgICAgICAgICAgIGZvcm0gb2YgcGF5bWVudC9jcmVkaXQgY2FyZCBtdXN0IGJlIHVzZWQuIFRoZSBGZWUgaXMgbm9uLXJlZnVuZGFibGVcbiAgICAgICAgICAgIHVuZGVyIGFueSBjaXJjdW1zdGFuY2VzIHdoYXRzb2V2ZXIgZXhjZXB0IHdpdGggdGhlIHByaW9yIHdyaXR0ZW5cbiAgICAgICAgICAgIGFncmVlbWVudCBvZiBSaWJiaXQgJmFtcDsgUm9vLiBJZiB0aGUgY29zdCBvZiB0aGUgc2Vzc2lvbnMgY2hhbmdlXG4gICAgICAgICAgICB5b3Ugd2lsbCBiZSBub3RpZmllZCBwcmlvciB0byB0aGUgc3RhcnQgb2YgdGhlIGZvbGxvd2luZyB0ZXJtLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBXZSB3aWxsIGFjY2VwdCB0aGUgZm9sbG93aW5nIG1ldGhvZHMgb2YgcGF5bWVudDogVmlzYSwgTWFzdGVyQ2FyZFxuICAgICAgICAgICAgYW5kIEFtZXJpY2FuIEV4cHJlc3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWwgbWItMlwiPlBheW1lbnRzPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBBbGwgcmVmdW5kIHJlcXVlc3RzIG11c3QgYmUgaW4gd3JpdGluZyB0byBKZW5ueSBhdFxuICAgICAgICAgICAgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIENhbmNlbGxhdGlvbiBieSBSaWJiaXQgJmFtcDsgUm9vIC0gUmliYml0ICZhbXA7IFJvbyBtYXkgY2FuY2VsIHRoaXNcbiAgICAgICAgICAgIGNvbnRyYWN0IGF0IGFueSB0aW1lIGJlZm9yZSB0aGUgY2hpbGQgY29tbWVuY2VzIHRoZSAxMCB3ZWVrIHByb2dyYW1cbiAgICAgICAgICAgIGZvciBhbnkgcmVhc29uIHdoYXRzb2V2ZXIuIFJpYmJpdCAmYW1wOyBSb28gc2hhbGwgbm90IGJlIGxpYWJsZSBmb3JcbiAgICAgICAgICAgIGFueSBsb3NzIG9yIGRhbWFnZSB3aGF0c29ldmVyIGFyaXNpbmcgZnJvbSBzdWNoIGNhbmNlbGxhdGlvbi4gSW4gdGhlXG4gICAgICAgICAgICBldmVudCBvZiBjYW5jZWxsYXRpb24gYnkgUmliYml0ICZhbXA7IFJvbyBwcmlvciB0byB0aGUgY29tbWVuY2VtZW50XG4gICAgICAgICAgICBvZiB0aGUgMTAgd2VlayBwcm9ncmFtLCBSaWJiaXQgJmFtcDsgUm9vIHdpbGwgcmVmdW5kIGFueSBmZWVzIGZvclxuICAgICAgICAgICAgb3V0c3RhbmRpbmcgc2Vzc2lvbnMuIElmIGNsYXNzZXMgYXJlIGNhbmNlbGxlZCBhcyBhIHJlc3VsdCBvZlxuICAgICAgICAgICAgZXh0cmVtZSB3ZWF0aGVyIGNvbmRpdGlvbnMgb3Igd2hlcmUgbG9jYWwgYXV0aG9yaXRpZXMvcHVibGljXG4gICAgICAgICAgICBndWlkYW5jZSBhZHZpc2UgdGhhdCBzZXNzaW9ucyBzaG91bGQgYmUgdGVtcG9yYXJpbHkgc3VzcGVuZGVkIGZvclxuICAgICAgICAgICAgaGVhbHRoIG9yIG90aGVyIHJlYXNvbnMsIHRoZW4gYSBtYWtlIHVwIGxlc3NvbiB3aWxsIGJlIGdyYW50ZWQuXG4gICAgICAgICAgICBQbGVhc2Ugc2VlIHRoZSBtYWtlIHVwIGxlc3NvbiBwb2xpY3kuIEluIHRoZSBldmVudCBvZiBhICdsYXN0XG4gICAgICAgICAgICBtaW51dGUnIGxlc3NvbiBjaGFuZ2Ugb3IgYSBsZXNzb24gY2FuY2VsbGF0aW9uIGJ5IFJpYmJpdCAmYW1wOyBSb28sXG4gICAgICAgICAgICB3ZSB3aWxsIG5vdGlmeSB5b3Ugd2l0aCBhcyBtdWNoIG5vdGljZSBhcyBwb3NzaWJsZS4gUmliYml0ICZhbXA7IFJvb1xuICAgICAgICAgICAgd2lsbCBub3QgcmVpbWJ1cnNlIGFueSBleHBlbnNlcyBpbmN1cnJlZCBieSBhIGN1c3RvbWVyIGZhaWxpbmcgdG9cbiAgICAgICAgICAgIGFja25vd2xlZGdlIHRoaXMgY29tbXVuaWNhdGlvbi4gU2hvdWxkIHlvdSBkZWNpZGUgdG8gbGVhdmUgYW5cbiAgICAgICAgICAgIGVucm9sbGVkIFJpYmJpdCAmYW1wOyBSb28gcHJvZ3JhbSBiZWZvcmUgdGhlIG1ha2UgdXAgbGVzc29uIGNyZWRpdFxuICAgICAgICAgICAgaGFzIGJlZW4gdXNlZCB3ZSB3aWxsIHJlZnVuZCB0aGUgY3JlZGl0IHRvIHlvdS4gSWYgaW5zdWZmaWNpZW50XG4gICAgICAgICAgICBjaGlsZHJlbiBhcmUgYm9va2VkIGludG8geW91ciBzZXNzaW9uLCB3ZSByZXNlcnZlIHRoZSByaWdodCB0b1xuICAgICAgICAgICAgY2FuY2VsIG9yIGNoYW5nZSB0aGUgY2xhc3MuIEluIHRoaXMgaW5zdGFuY2Ugd2Ugd2lsbCBvZmZlciB5b3VcbiAgICAgICAgICAgIGVpdGhlciBhbiBhbHRlcm5hdGl2ZSBzZXNzaW9uIHRvIGF0dGVuZCBvciBhIHJlZnVuZCB3aWxsIGJlIGdpdmVuXG4gICAgICAgICAgICBmb3IgYW55IHJlbWFpbmluZyBzZXNzaW9ucyBhZnRlciB0aGUgY2FuY2VsbGF0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPkF0dGVuZGFuY2U8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIFlvdXIgcGF5bWVudCBoYXMgcmVzZXJ2ZWQgeW91ciBwbGFjZSBqdXN0IGZvciB5b3Ugc28gaWYgeW91IGtub3cgeW91XG4gICAgICAgICAgICBhcmUgdW5hYmxlIHRvIGF0dGVuZCBhIGxlc3NvbiwgcGxlYXNlIGxldCB1cyBrbm93IHdpdGggYXMgbXVjaFxuICAgICAgICAgICAgbm90aWNlIGFzIHBvc3NpYmxlIGJ5IGVtYWlsaW5nIG9yIHRlbGVwaG9uaW5nIEplbm55IGF0XG4gICAgICAgICAgICBqZW5ueWhAcmliYml0YW5kcm9vLmNvbS5hdSBvciArNjE0MDY2MDM1ODMuIFRoZSBQYXJlbnQvY2FyZXJcbiAgICAgICAgICAgIHVuZGVyc3RhbmRzIHRoYXQgc2Vzc2lvbnMgYXJlIG9uZ29pbmcgYW5kIHRvIGJlIHVzZWQgY29uc2VjdXRpdmVseS5cbiAgICAgICAgICAgIE5vIGNyZWRpdHMgb3IgcmVmdW5kcyB3aWxsIGJlIGlzc3VlZCBmb3IgbWlzc2VkIGNsYXNzZXMuIE5vIHJlZnVuZHNcbiAgICAgICAgICAgIHdpbGwgYmUgZ2l2ZW4gaWYgeW91IGNoYW5nZSB5b3VyIG1pbmQgYWJvdXQgeW91ciBjaGlsZCBwYXJ0aWNpcGF0aW5nXG4gICAgICAgICAgICBpbiB0aGUgcHJvZ3JhbS4gQ2xhc3MgYXR0ZW5kYW5jZSBoYXMgYmVlbiBsaW1pdGVkIHRvIDEwIGNoaWxkcmVuIHBlclxuICAgICAgICAgICAgY2xhc3MuIElmIHRoZSBwbGF5IHNlc3Npb25zIHJlYWNoIGNhcGFjaXR5IHdlIHdpbGwgdXBkYXRlIG91clxuICAgICAgICAgICAgYm9va2luZyBzeXN0ZW0gdG8gc3RvcCBhbGwgbmV3IGVucm9sbWVudHMgdW50aWwgdGhlIGZvbGxvd2luZyB0ZXJtLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPlxuICAgICAgICAgICAgTUFLRSBVUCBMRVNTT05TICZhbXA7IEJPTlVTIFNFU1NJT05TXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBJZiB5b3UgY2Fubm90IGF0dGVuZCBhIGxlc3NvbiBhbmQgbm90aWZ5IHVzIHByaW9yIHRvIHlvdXIgc2Vzc2lvblxuICAgICAgICAgICAgeW91IGFyZSBlbGlnaWJsZSBmb3IgYSBtYWtlIHVwIGxlc3Nvbi4gVGhpcyBtYWtlIHVwIGxlc3NvbiBtdXN0IGJlXG4gICAgICAgICAgICB1c2VkIGluIGFub3RoZXIgc2Vzc2lvbiBvdGhlciB0aGFuIHlvdXIgc2NoZWR1bGVkIGRheSAoZS5nLiBpZiB5b3VcbiAgICAgICAgICAgIGF0dGVuZCBvbiBhIFR1ZXNkYXksIHlvdXIgbWFrZSB1cCBsZXNzb24gbXVzdCBiZSB1c2VkIGluIGFuXG4gICAgICAgICAgICBhdmFpbGFibGUgV2VkbmVzZGF5IHNlc3Npb24pLiBBIG1heGltdW0gb2YgMiBtYWtlIHVwIGxlc3NvbnMgY2FuIGJlXG4gICAgICAgICAgICB1c2VkIGluIGEgMTAgd2VlayBwZXJpb2QuIE1ha2UgdXAgbGVzc29ucyB3aWxsIGJlIGFycmFuZ2VkIGZvciBhbnlcbiAgICAgICAgICAgIGNhbmNlbGxhdGlvbnMgbWFkZSBieSBSaWJiaXQgJmFtcDsgUm9vIGZvciBzZXZlcmUgd2VhdGhlciwgc2lja1xuICAgICAgICAgICAgc3RhZmYgbWVtYmVycyBvciByZWFzb25zIHdlIGZlZWwgYXJlIG9mIGRhbmdlciB0byBvdXIgcGFydGljaXBhbnRzXG4gICAgICAgICAgICBhbmQgc3RhZmYgbWVtYmVycy5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgSWYgeW91IGFyZSBlbnRpdGxlZCB0byBhIGZyZWUgYm9udXMgc2Vzc2lvbiBhZnRlciBlbnJvbGxpbmcgd2l0aFxuICAgICAgICAgICAgUmliYml0ICZhbXA7IFJvbywgdGhlcmUgd2lsbCBiZSBhIGFkZGVkIHNlc3Npb24gYXQgdGhlIGVuZCBvZiB5b3VyXG4gICAgICAgICAgICAxMCB3ZWVrIHByb2dyYW0gYXZhaWxhYmxlIGZvciB5b3UgdG8gYm9vay4gQm9udXMgc2Vzc2lvbnMgc2hvdWxkIGJlXG4gICAgICAgICAgICBib29rZWQgd2l0aCBhcyBtdWNoIG5vdGljZSBhcyBwb3NzaWJsZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIG1iLTRcIj5IRUFMVEggJmFtcDsgU0FGRVRZPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICBUaGUgc2FmZXR5IG9mIGFsbCB0aGUgY2hpbGRyZW4gYXR0ZW5kaW5nIG91ciBwbGF5IHNlc3Npb25zIGlzIG9mIHRoZVxuICAgICAgICAgICAgZ3JlYXRlc3QgaW1wb3J0YW5jZSB0byB1cy4gRHVlIHRvIHRoZSBuYXR1cmUgb2YgdGhlIHBsYXkgc2Vzc2lvbnNcbiAgICAgICAgICAgIGFuZCB0aGUgYWdlIG9mIHRoZSBjaGlsZChyZW4pIGF0dGVuZGluZywgeW91ciBjaGlsZChyZW4pIHJlbWFpbiB5b3VyXG4gICAgICAgICAgICByZXNwb25zaWJpbGl0eSB3aGlsZSBhdHRlbmRpbmcgYW5kIG11c3QgYmUgc3VwZXJ2aXNlZCB0aHJvdWdob3V0LiBJZlxuICAgICAgICAgICAgeW91IGxlYXZlIHRoZSBwbGF5IHNlc3Npb24gdmVudWUgZm9yIGFueSByZWFzb24geW91IG11c3QgdGFrZSB5b3VyXG4gICAgICAgICAgICBjaGlsZChyZW4pIHdpdGggeW91LiBXZSBhY2NlcHQgbm8gcmVzcG9uc2liaWxpdHkgZm9yIGFueSBpbmp1cnlcbiAgICAgICAgICAgIGNhdXNlZCBkdXJpbmcgYSBwbGF5IHNlc3Npb24uIFBsZWFzZSBiZSBhZHZpc2VkIHRoYXQgd2UgaGF2ZSBhIGZpcnN0XG4gICAgICAgICAgICBhaWQga2l0IG9uIHNpdGUgYW5kIGZpcnN0IGFpZCB3aWxsIGJlIGdpdmVuIHRvIHlvdXIgY2hpbGQgaW4gdGhlXG4gICAgICAgICAgICBldmVudCBhbiBhY2NpZGVudC9pbmp1cnkgb2NjdXJzIGF0IGEgcGxheSBzZXNzaW9uLiBXZSBhY2NlcHQgbm9cbiAgICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IGZvciBhbnkgYmVsb25naW5ncyB0aGF0IGdldCBsb3N0IG9yIGRhbWFnZWQuIFdlXG4gICAgICAgICAgICBwb2xpdGVseSBhc2sgdGhhdCBwYXJlbnRzIGFuZCBjaGlsZHJlbiBkbyBub3QgYXR0ZW5kIGlmIGVpdGhlciBhcmVcbiAgICAgICAgICAgIGZlZWxpbmcgdW53ZWxsLiBXZSBhcmUgYSBzbW9rZSBmcmVlIHpvbmUgZm9yIHRoZSBzYWZldHkgb2Ygb3VyXG4gICAgICAgICAgICBwYXJ0aWNpcGF0aW5nIGNoaWxkcmVuIGFuZCBmYW1pbGllcyBhbmQgdGhlIHN1cnJvdW5kaW5nIGVudmlyb25tZW50LlxuICAgICAgICAgICAgQW55IHBhcmVudHMvY2FyZXJzIHdobyBhcmUgc2VlbiBzbW9raW5nIGF0IHRoZSB0aW1lIG9mIGEgcGxheVxuICAgICAgICAgICAgc2Vzc2lvbiB3aWxsIGJlIGFza2VkIHRvIGxlYXZlIHRoZSBwbGF5IHNlc3Npb24gd2l0aCB0aGVpciBjaGlsZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIG1iLTRcIj5cbiAgICAgICAgICAgIFBIT1RPR1JQQUhZICZhbXA7IFNPQ0lBTCBNRURJQVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgUGxlYXNlIGJlIGF3YXJlIHRoYXQgYnkgZW5yb2xsaW5nIHlvdXIgY2hpbGQocmVuKSBpbiBhbnkgUmliYml0XG4gICAgICAgICAgICAmYW1wOyBSb28gUGxheSBTZXNzaW9uIHByb2dyYW0sIHlvdSBhcmUgZ3JhbnRpbmcgdXMgcGVybWlzc2lvbiB0b1xuICAgICAgICAgICAgcGhvdG9ncmFwaCBvciByZWNvcmQgc2hvcnQgdmlkZW8gY2xpcHMgb2YgeW91ciBjaGlsZChyZW4pIGR1cmluZyB0aGVcbiAgICAgICAgICAgIHBsYXkgc2Vzc2lvbnMgdGhhdCB3ZSBtYXkgdXNlIGZvciBSaWJiaXQgJmFtcDsgUm9vIHByb21vdGlvbmFsXG4gICAgICAgICAgICBwdXJwb3NlcyBvbiBvdXIgc29jaWFsIG1lZGlhIGFuZC9vciB3ZWJzaXRlLiBObyBkYXRhIHVuZGVyIGFueVxuICAgICAgICAgICAgY2lyY3Vtc3RhbmNlIHdpbGwgYmUgcGFzc2VkIG92ZXIgdG8gYSB0aGlyZCBwYXJ0eS4gSWYgeW91IGRvIG5vdFxuICAgICAgICAgICAgd2lzaCB0byBwcm92aWRlIGNvbnNlbnQgZm9yIHRoaXMgdGhlbiB5b3UgbmVlZCB0byBub3RpZnkgSmVubnkgaW5cbiAgICAgICAgICAgIHdyaXRpbmcgYXQgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUgYW5kIG5vdGlmeSBKZW5ueSBpbiBwZXJzb24gYXRcbiAgICAgICAgICAgIHlvdXIgcGxheSBzZXNzaW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgbWItNFwiPkNPTlRBQ1Q8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIEZvciBzcGVjaWZpYyBxdWVzdGlvbnMgYWJvdXQgUmliYml0ICZhbXA7IFJvbyBwbGF5IHNlc3Npb25zLCBwbGVhc2VcbiAgICAgICAgICAgIGNvbnRhY3QgSmVubnkgZGlyZWN0bHkgYXQgamVubnloQHJpYmJpdGFuZHJvby5jb20uYXUuIElmIHdlIGhhdmUgdG9cbiAgICAgICAgICAgIGNvbnRhY3QgeW91IHdlIHdpbGwgZG8gc28gaW4gd3JpdGluZyB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzIHlvdVxuICAgICAgICAgICAgcHJvdmlkZWQgdXMgaW4geW91ciByZWdpc3RyYXRpb24sIG9yIGJ5IHRlbGVwaG9uZSBvciB0ZXh0IG1lc3NhZ2VcbiAgICAgICAgICAgIHdpdGggdGhlIHBob25lIG51bWJlciB5b3UgcHJvdmlkZWQgdXMgaW4geW91ciByZWdpc3RyYXRpb24uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=