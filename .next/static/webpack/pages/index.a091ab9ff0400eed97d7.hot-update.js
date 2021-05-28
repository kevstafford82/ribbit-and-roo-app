webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modules/hero.tsx":
/*!*************************************!*\
  !*** ./components/modules/hero.tsx ***!
  \*************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\components\\modules\\hero.tsx",
    _this = undefined;

var Hero = function Hero(_ref) {
  var heading = _ref.heading,
      subheading = _ref.subheading;
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: subheading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Hero;


var _c;

$RefreshReg$(_c, "Hero");

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

/***/ "./components/modules/index.tsx":
/*!**************************************!*\
  !*** ./components/modules/index.tsx ***!
  \**************************************/
/*! exports provided: Footer, Menu, Paragraph, Title, TextBlock, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./components/modules/footer.tsx");
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
/* harmony import */ var _components_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules */ "./components/modules/index.tsx");
/* harmony import */ var _components_layouts_single_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/single_column */ "./components/layouts/single_column.tsx");

var _jsxFileName = "C:\\Users\\kevst\\source\\repos\\RibbitAndRoo\\ribbit-and-roo-app\\pages\\index.tsx";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_templates_page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
      heading: "Home",
      subheading: "home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_single_column__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules__WEBPACK_IMPORTED_MODULE_2__["TextBlock"], {
        heading: "About Us",
        content: "At Ribbit & Roo our main drive is to empower children and families to choose a healthy lifestyle through imaginative, structured, play-based physical activity. We aim to do this by helping provide each child with the start they need in physical literacy - motivation, skill, confidence and knowledge. \u200B We believe throughout Early childhood each child should have the opportunity to participate in a range of gross motor activities which can help their understanding of health and well-being from an early age. Each child's social & emotional well-being is just as important as their physical well-being at Ribbit & Roo. We believe it is important to build self esteem, resilience and strengthen peer relationships through structured, active play."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGVzL2hlcm8udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZHVsZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSGVybyIsImhlYWRpbmciLCJzdWJoZWFkaW5nIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXdDO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTVCQyxVQUE0QixRQUE1QkEsVUFBNEI7QUFDbkQsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsV0FBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywrQ0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxtSEFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxVQUFkO0FBQUEsb0JBQTBCRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQVhEOztLQUFNRixJO0FBYU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUVlLFNBQVNHLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UscUVBQUMsa0VBQUQ7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFNLGFBQU8sRUFBQyxNQUFkO0FBQXFCLGdCQUFVLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMseUVBQUQ7QUFBQSw2QkFDRSxxRUFBQyw2REFBRDtBQUNFLGVBQU8sRUFBQyxVQURWO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQWxCdUJBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTA5MWFiOWZmMDQwMGVlZDk3ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgSGVyb1Byb3BzID0ge1xyXG4gIGhlYWRpbmc6IHN0cmluZztcclxuICBzdWJoZWFkaW5nOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBIZXJvID0gKHsgaGVhZGluZywgc3ViaGVhZGluZyB9OiBIZXJvUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC05NiBtYi04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBiZy1jb3ZlciBiZy1ibGFjayBiZy1vcGFjaXR5LTc1XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGJnLWNvdmVyIGJnLWZpeGVkIGJnLWNlbnRlciBiZy1oZXJvLWltYWdlIHAtMjAgcHQtNDggdGV4dC13aGl0ZSBmb250LW5vcm1hbCBsZWFkaW5nLWxvb3NlIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+e2hlYWRpbmd9PC9oMz5cclxuICAgICAgICAgIDxwPntzdWJoZWFkaW5nfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEhlcm8gfTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFyYWdyYXBoXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RpdGxlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRibG9ja1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZXJvXCI7XHJcbiIsImltcG9ydCBQYWdlVGVtcGxhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGVtcGxhdGVzL3BhZ2VcIjtcbmltcG9ydCB7IEhlcm8sIFRleHRCbG9jayB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vZHVsZXNcIjtcbmltcG9ydCBTaW5nbGVDb2x1bW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9zaW5nbGVfY29sdW1uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2VUZW1wbGF0ZT5cbiAgICAgIDxIZXJvIGhlYWRpbmc9XCJIb21lXCIgc3ViaGVhZGluZz1cImhvbWVcIiAvPlxuICAgICAgPFNpbmdsZUNvbHVtbj5cbiAgICAgICAgPFRleHRCbG9ja1xuICAgICAgICAgIGhlYWRpbmc9XCJBYm91dCBVc1wiXG4gICAgICAgICAgY29udGVudD1cIkF0IFJpYmJpdCAmIFJvbyBvdXIgbWFpbiBkcml2ZSBpcyB0byBlbXBvd2VyIGNoaWxkcmVuIGFuZCBmYW1pbGllcyB0byBjaG9vc2UgYSBoZWFsdGh5IGxpZmVzdHlsZSB0aHJvdWdoIGltYWdpbmF0aXZlLCBzdHJ1Y3R1cmVkLCBwbGF5LWJhc2VkIHBoeXNpY2FsIGFjdGl2aXR5LlxuXG5XZSBhaW0gdG8gZG8gdGhpcyBieSBoZWxwaW5nIHByb3ZpZGUgZWFjaCBjaGlsZCB3aXRoIHRoZSBzdGFydCB0aGV5IG5lZWQgaW4gcGh5c2ljYWwgbGl0ZXJhY3kgLSBtb3RpdmF0aW9uLCBza2lsbCwgY29uZmlkZW5jZSBhbmQga25vd2xlZGdlLlxuXG7igItcblxuV2UgYmVsaWV2ZSB0aHJvdWdob3V0IEVhcmx5IGNoaWxkaG9vZCBlYWNoIGNoaWxkIHNob3VsZCBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBwYXJ0aWNpcGF0ZSBpbiBhIHJhbmdlIG9mIGdyb3NzIG1vdG9yIGFjdGl2aXRpZXMgd2hpY2ggY2FuIGhlbHAgdGhlaXIgdW5kZXJzdGFuZGluZyBvZiBoZWFsdGggYW5kIHdlbGwtYmVpbmcgZnJvbSBhbiBlYXJseSBhZ2UuIEVhY2ggY2hpbGQncyBzb2NpYWwgJiBlbW90aW9uYWwgd2VsbC1iZWluZyBpcyBqdXN0IGFzIGltcG9ydGFudCBhcyB0aGVpciBwaHlzaWNhbCB3ZWxsLWJlaW5nIGF0IFJpYmJpdCAmIFJvby4gV2UgYmVsaWV2ZSBpdCBpcyBpbXBvcnRhbnQgdG8gYnVpbGQgc2VsZiBlc3RlZW0sIHJlc2lsaWVuY2UgYW5kIHN0cmVuZ3RoZW4gcGVlciByZWxhdGlvbnNoaXBzIHRocm91Z2ggc3RydWN0dXJlZCwgYWN0aXZlIHBsYXkuXCJcbiAgICAgICAgPjwvVGV4dEJsb2NrPlxuICAgICAgPC9TaW5nbGVDb2x1bW4+XG4gICAgPC9QYWdlVGVtcGxhdGU+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9