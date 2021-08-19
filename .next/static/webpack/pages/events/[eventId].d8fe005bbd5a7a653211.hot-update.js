webpackHotUpdate_N_E("pages/events/[eventId]",{

/***/ "./components/event-detail/event-logistics.js":
/*!****************************************************!*\
  !*** ./components/event-detail/event-logistics.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/address-icon */ "./components/icons/address-icon.js");
/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/date-icon */ "./components/icons/date-icon.js");
/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logistics-item */ "./components/event-detail/logistics-item.js");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-logistics.module.css */ "./components/event-detail/event-logistics.module.css");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\motas\\Desktop\\nextjs-course\\starting-project\\components\\event-detail\\event-logistics.js";






function EventLogistics(props) {
  var date = props.date,
      address = props.address,
      image = props.image,
      imageAlt = props.imageAlt;
  var humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  var addressText = address.replace(', ', '\n');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logistics,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.image,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: "/".concat(image),
        alt: imageAlt,
        width: 300,
        height: 300
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
          children: humanReadableDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_2__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: addressText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_c = EventLogistics;
/* harmony default export */ __webpack_exports__["default"] = (EventLogistics);

var _c;

$RefreshReg$(_c, "EventLogistics");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtbG9naXN0aWNzLmpzIl0sIm5hbWVzIjpbIkV2ZW50TG9naXN0aWNzIiwicHJvcHMiLCJkYXRlIiwiYWRkcmVzcyIsImltYWdlIiwiaW1hZ2VBbHQiLCJodW1hblJlYWRhYmxlRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJhZGRyZXNzVGV4dCIsInJlcGxhY2UiLCJjbGFzc2VzIiwibG9naXN0aWNzIiwibGlzdCIsIkRhdGVJY29uIiwiQWRkcmVzc0ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUEsTUFDckJDLElBRHFCLEdBQ2NELEtBRGQsQ0FDckJDLElBRHFCO0FBQUEsTUFDZkMsT0FEZSxHQUNjRixLQURkLENBQ2ZFLE9BRGU7QUFBQSxNQUNOQyxLQURNLEdBQ2NILEtBRGQsQ0FDTkcsS0FETTtBQUFBLE1BQ0NDLFFBREQsR0FDY0osS0FEZCxDQUNDSSxRQUREO0FBRzdCLE1BQU1DLGlCQUFpQixHQUFHLElBQUlDLElBQUosQ0FBU0wsSUFBVCxFQUFlTSxrQkFBZixDQUFrQyxPQUFsQyxFQUEyQztBQUNuRUMsT0FBRyxFQUFFLFNBRDhEO0FBRW5FQyxTQUFLLEVBQUUsTUFGNEQ7QUFHbkVDLFFBQUksRUFBRTtBQUg2RCxHQUEzQyxDQUExQjtBQUtBLE1BQU1DLFdBQVcsR0FBR1QsT0FBTyxDQUFDVSxPQUFSLENBQWdCLElBQWhCLEVBQXNCLElBQXRCLENBQXBCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLGtFQUFPLENBQUNDLFNBQTVCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELGtFQUFPLENBQUNWLEtBQXhCO0FBQUEsNkJBQ0UscUVBQUMsaURBQUQ7QUFBTyxXQUFHLGFBQU1BLEtBQU4sQ0FBVjtBQUF5QixXQUFHLEVBQUVDLFFBQTlCO0FBQXdDLGFBQUssRUFBRSxHQUEvQztBQUFvRCxjQUFNLEVBQUU7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUksZUFBUyxFQUFFUyxrRUFBTyxDQUFDRSxJQUF2QjtBQUFBLDhCQUNFLHFFQUFDLHVEQUFEO0FBQWUsWUFBSSxFQUFFQyx3REFBckI7QUFBQSwrQkFDRTtBQUFBLG9CQUFPWDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyx1REFBRDtBQUFlLFlBQUksRUFBRVksMkRBQXJCO0FBQUEsK0JBQ0U7QUFBQSxvQkFBVU47QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0tBekJRWixjO0FBMkJNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmQ4ZmUwMDViYmQ1YTdhNjUzMjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcbmltcG9ydCBEYXRlSWNvbiBmcm9tICcuLi9pY29ucy9kYXRlLWljb24nO1xuaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSAnLi9sb2dpc3RpY3MtaXRlbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRMb2dpc3RpY3MocHJvcHMpIHtcbiAgY29uc3QgeyBkYXRlLCBhZGRyZXNzLCBpbWFnZSwgaW1hZ2VBbHQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgfSk7XG4gIGNvbnN0IGFkZHJlc3NUZXh0ID0gYWRkcmVzcy5yZXBsYWNlKCcsICcsICdcXG4nKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICA8SW1hZ2Ugc3JjPXtgLyR7aW1hZ2V9YH0gYWx0PXtpbWFnZUFsdH0gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0RhdGVJY29ufT5cbiAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0FkZHJlc3NJY29ufT5cbiAgICAgICAgICA8YWRkcmVzcz57YWRkcmVzc1RleHR9PC9hZGRyZXNzPlxuICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMb2dpc3RpY3M7XG4iXSwic291cmNlUm9vdCI6IiJ9