webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./node_modules/next/router.js":
false,

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_events_EventList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/events/EventList */ "./components/events/EventList.js");
/* harmony import */ var _components_events_ResultTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/ResultTitle */ "./components/events/ResultTitle.js");
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/ErrorAlert */ "./components/ui/ErrorAlert.js");

var _jsxFileName = "C:\\Users\\motas\\Desktop\\nextjs-course\\starting-project\\pages\\events\\[...slug].js";






function FilteredEventsPage(_ref) {
  var hasError = _ref.hasError,
      events = _ref.events,
      date = _ref.date;

  if (hasError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filter. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          link: "events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "No events found for the chosen filter!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

  var dateEvents = new Date(date.year, date.month - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_ResultTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      date: dateEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_EventList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_c = FilteredEventsPage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (FilteredEventsPage);

var _c;

$RefreshReg$(_c, "FilteredEventsPage");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJoYXNFcnJvciIsImV2ZW50cyIsImRhdGUiLCJmaWx0ZXJlZEV2ZW50cyIsImxlbmd0aCIsImRhdGVFdmVudHMiLCJEYXRlIiwieWVhciIsIm1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxrQkFBVCxPQUF3RDtBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUN0RCxNQUFJRixRQUFKLEVBQWM7QUFDWix3QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLDZEQUFEO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFVRDs7QUFFRCxNQUFNRyxjQUFjLEdBQUdGLE1BQXZCOztBQUVBLE1BQUksQ0FBQ0UsY0FBRCxJQUFtQkEsY0FBYyxDQUFDQyxNQUFmLEtBQTBCLENBQWpELEVBQW9EO0FBQ2xELHdCQUNFLHFFQUFDLDhDQUFEO0FBQUEsOEJBQ0UscUVBQUMsaUVBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsK0JBQ0UscUVBQUMsNkRBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVVEOztBQUVELE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxJQUFKLENBQVNKLElBQUksQ0FBQ0ssSUFBZCxFQUFvQkwsSUFBSSxDQUFDTSxLQUFMLEdBQWEsQ0FBakMsQ0FBbkI7QUFFQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLHNFQUFEO0FBQWMsVUFBSSxFQUFFSDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxvRUFBRDtBQUFXLFdBQUssRUFBRUY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0tBckNRSixrQjs7QUFtRk1BLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uMWY4NzUyYjdjZTdmYTVlMzkwYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWwnO1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL0V2ZW50TGlzdCc7XHJcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvUmVzdWx0VGl0bGUnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvQnV0dG9uJztcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9FcnJvckFsZXJ0JztcclxuXHJcbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZSh7IGhhc0Vycm9yLCBldmVudHMsIGRhdGUgfSkge1xyXG4gIGlmIChoYXNFcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxFcnJvckFsZXJ0PlxyXG4gICAgICAgICAgPHA+SW52YWxpZCBmaWx0ZXIuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPlxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz0nZXZlbnRzJz5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGV2ZW50cztcclxuXHJcbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8RXJyb3JBbGVydD5cclxuICAgICAgICAgIDxwPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPlxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0ZUV2ZW50cyA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGVFdmVudHN9IC8+XHJcbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcGFyYW1zLnNsdWc7XHJcbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcclxuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcclxuXHJcbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XHJcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcclxuXHJcbiAgaWYgKFxyXG4gICAgaXNOYU4obnVtWWVhcikgfHxcclxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4gICAgbnVtWWVhciA+IDIwMzAgfHxcclxuICAgIG51bVllYXIgPCAyMDIxIHx8XHJcbiAgICBudW1Nb250aCA8IDEgfHxcclxuICAgIG51bU1vbnRoID4gMTJcclxuICApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgaGFzRXJyb3I6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAvLyByZWRpcmVjdDoge1xyXG4gICAgICAvLyAgIGRlc3RpbmF0aW9uOiAnL2Vycm9yJ1xyXG4gICAgICAvLyB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XHJcbiAgICB5ZWFyOiBudW1ZZWFyLFxyXG4gICAgbW9udGg6IG51bU1vbnRoLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZXZlbnRzOiBmaWx0ZXJlZEV2ZW50cyxcclxuICAgICAgZGF0ZToge1xyXG4gICAgICAgIHllYXI6IG51bVllYXIsXHJcbiAgICAgICAgbW9udGg6IG51bU1vbnRoLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50c1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=