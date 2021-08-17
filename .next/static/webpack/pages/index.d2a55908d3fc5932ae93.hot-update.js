webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/EventItem.js":
/*!****************************************!*\
  !*** ./components/events/EventItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventItemStyle.module.css */ "./components/events/EventItemStyle.module.css");
/* harmony import */ var _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\motas\\Desktop\\nextjs-course\\starting-project\\components\\events\\EventItem.js";



function EventItem(_ref) {
  var title = _ref.title,
      image = _ref.image,
      date = _ref.date,
      location = _ref.location,
      id = _ref.id;
  var humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  var formattedAddress = location.replace(', ', '\n');
  var exploreLink = "/events/".concat(id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: '/' + image,
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Summary,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: humanReadableDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.address,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: formattedAddress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _EventItemStyle_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: exploreLink,
          children: "Explore Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_c = EventItem;
/* harmony default export */ __webpack_exports__["default"] = (EventItem);

var _c;

$RefreshReg$(_c, "EventItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRJdGVtLmpzIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsInRpdGxlIiwiaW1hZ2UiLCJkYXRlIiwibG9jYXRpb24iLCJpZCIsImh1bWFuUmVhZGFibGVEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZEFkZHJlc3MiLCJyZXBsYWNlIiwiZXhwbG9yZUxpbmsiLCJjbGFzc2VzIiwiaXRlbSIsImNvbnRlbnQiLCJTdW1tYXJ5IiwiYWRkcmVzcyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsT0FBeUQ7QUFBQSxNQUFwQ0MsS0FBb0MsUUFBcENBLEtBQW9DO0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUFBLE1BQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7QUFBQSxNQUFoQkMsUUFBZ0IsUUFBaEJBLFFBQWdCO0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNO0FBQ3ZELE1BQU1DLGlCQUFpQixHQUFHLElBQUlDLElBQUosQ0FBU0osSUFBVCxFQUFlSyxrQkFBZixDQUFrQyxPQUFsQyxFQUEyQztBQUNuRUMsT0FBRyxFQUFFLFNBRDhEO0FBRW5FQyxTQUFLLEVBQUUsTUFGNEQ7QUFHbkVDLFFBQUksRUFBRTtBQUg2RCxHQUEzQyxDQUExQjtBQU1BLE1BQU1DLGdCQUFnQixHQUFHUixRQUFRLENBQUNTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsQ0FBekI7QUFDQSxNQUFNQyxXQUFXLHFCQUFjVCxFQUFkLENBQWpCO0FBRUEsc0JBQ0U7QUFBSSxhQUFTLEVBQUVVLGlFQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUUsTUFBTWQsS0FBaEI7QUFBdUIsU0FBRyxFQUFFRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRWMsaUVBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVGLGlFQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS2pCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRWMsaUVBQU8sQ0FBQ1osSUFBeEI7QUFBQSxpQ0FDRTtBQUFBLHNCQUFPRztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBS0U7QUFBSyxtQkFBUyxFQUFFUyxpRUFBTyxDQUFDSSxPQUF4QjtBQUFBLGlDQUNFO0FBQUEsc0JBQVVQO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRTtBQUFLLGlCQUFTLEVBQUVHLGlFQUFPLENBQUNLLE9BQXhCO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVOLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0tBN0JRZCxTO0FBK0JNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMmE1NTkwOGQzZmM1OTMyYWU5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9FdmVudEl0ZW1TdHlsZS5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEV2ZW50SXRlbSh7IHRpdGxlLCBpbWFnZSwgZGF0ZSwgbG9jYXRpb24sIGlkIH0pIHtcclxuICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBsb2NhdGlvbi5yZXBsYWNlKCcsICcsICdcXG4nKTtcclxuICBjb25zdCBleHBsb3JlTGluayA9IGAvZXZlbnRzLyR7aWR9YDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgIDxpbWcgc3JjPXsnLycgKyBpbWFnZX0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU3VtbWFyeX0+XHJcbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT5cclxuICAgICAgICAgICAgPHRpbWU+e2h1bWFuUmVhZGFibGVEYXRlfTwvdGltZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XHJcbiAgICAgICAgICAgIDxhZGRyZXNzPntmb3JtYXR0ZWRBZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17ZXhwbG9yZUxpbmt9PkV4cGxvcmUgRXZlbnQ8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=