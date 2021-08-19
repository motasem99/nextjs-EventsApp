webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/api-util */ "./helpers/api-util.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_events_EventList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/events/EventList */ "./components/events/EventList.js");
/* harmony import */ var _components_events_ResultTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/events/ResultTitle */ "./components/events/ResultTitle.js");
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ui/ErrorAlert */ "./components/ui/ErrorAlert.js");



var _jsxFileName = "C:\\Users\\motas\\Desktop\\nextjs-course\\starting-project\\pages\\events\\[...slug].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function FilteredEventsPage(_ref) {
  _s();

  var hasError = _ref.hasError,
      events = _ref.events,
      date = _ref.date;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      loadedEvents = _useState[0],
      setLoadedEvents = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var filterData = router.query.slug;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])('https://nextjs-project-80927-default-rtdb.firebaseio.com/events.json'),
      data = _useSWR.data,
      error = _useSWR.error;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (data) {
      var _events = [];

      for (var key in data) {
        _events.push(_objectSpread({
          id: key
        }, data[key]));
      }

      setLoadedEvents(_events);
    }
  }, [data]);

  var pageHeadData = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Filtered Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "All events for ".concat(numMonth, "/").concat(numYear, ".")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);

  if (!loadedEvents) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }, this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filter. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          link: "events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = loadedEvents.filter(function (event) {
    var eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "No events found for the chosen filter!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this);
  }

  var dateEvents = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_ResultTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      date: dateEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_EventList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps(context) {
//   const { params } = context;
//   const filterData = params.slug;
//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];
//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;
//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true,
//       },
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     };
//   }
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });
//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }


_s(FilteredEventsPage, "baGcR2zYNkTBGEMbpcQg6la1mJw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = FilteredEventsPage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJoYXNFcnJvciIsImV2ZW50cyIsImRhdGUiLCJ1c2VTdGF0ZSIsImxvYWRlZEV2ZW50cyIsInNldExvYWRlZEV2ZW50cyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJrZXkiLCJwdXNoIiwiaWQiLCJwYWdlSGVhZERhdGEiLCJudW1Nb250aCIsIm51bVllYXIiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsImZpbHRlciIsImV2ZW50IiwiZXZlbnREYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJsZW5ndGgiLCJkYXRlRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDZEMsc0RBQVEsRUFETTtBQUFBLE1BQy9DQyxZQUQrQztBQUFBLE1BQ2pDQyxlQURpQzs7QUFFdEQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDOztBQUhzRCxnQkFLOUJDLG1EQUFNLENBQzVCLHNFQUQ0QixDQUx3QjtBQUFBLE1BSzlDQyxJQUw4QyxXQUs5Q0EsSUFMOEM7QUFBQSxNQUt4Q0MsS0FMd0MsV0FL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QUcsQ0FBN0IsQ0FBbkI7QUFFQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLHNFQUFEO0FBQWMsVUFBSSxFQUFFYTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxvRUFBRDtBQUFXLFdBQUssRUFBRVI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBeklTekIsa0I7VUFFUVEscUQsRUFHU0ksMkM7OztLQUxqQlosa0I7QUEySU1BLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uODRjNDlkM2JmZmI2ODllNTdkMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudExpc3QnO1xyXG5pbXBvcnQgUmVzdWx0c1RpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL1Jlc3VsdFRpdGxlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL0J1dHRvbic7XHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvRXJyb3JBbGVydCc7XHJcblxyXG5mdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UoeyBoYXNFcnJvciwgZXZlbnRzLCBkYXRlIH0pIHtcclxuICBjb25zdCBbbG9hZGVkRXZlbnRzLCBzZXRMb2FkZWRFdmVudHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICdodHRwczovL25leHRqcy1wcm9qZWN0LTgwOTI3LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvbidcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgZXZlbnRzID0gW107XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgICAgLi4uZGF0YVtrZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2FkZWRFdmVudHMoZXZlbnRzKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zdCBwYWdlSGVhZERhdGEgPSAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkZpbHRlcmVkIEV2ZW50czwvdGl0bGU+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgY29udGVudD17YEFsbCBldmVudHMgZm9yICR7bnVtTW9udGh9LyR7bnVtWWVhcn0uYH1cclxuICAgICAgLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBpZiAoIWxvYWRlZEV2ZW50cykge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XHJcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xyXG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XHJcblxyXG4gIGlmIChcclxuICAgIGlzTmFOKG51bVllYXIpIHx8XHJcbiAgICBpc05hTihudW1Nb250aCkgfHxcclxuICAgIG51bVllYXIgPiAyMDMwIHx8XHJcbiAgICBudW1ZZWFyIDwgMjAyMSB8fFxyXG4gICAgbnVtTW9udGggPCAxIHx8XHJcbiAgICBudW1Nb250aCA+IDEyIHx8XHJcbiAgICBlcnJvclxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxFcnJvckFsZXJ0PlxyXG4gICAgICAgICAgPHA+SW52YWxpZCBmaWx0ZXIuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPlxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz0nZXZlbnRzJz5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGxvYWRlZEV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShldmVudC5kYXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGV2ZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSBudW1ZZWFyICYmXHJcbiAgICAgIGV2ZW50RGF0ZS5nZXRNb250aCgpID09PSBudW1Nb250aCAtIDFcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+XHJcbiAgICAgICAgICA8cD5ObyBldmVudHMgZm91bmQgZm9yIHRoZSBjaG9zZW4gZmlsdGVyITwvcD5cclxuICAgICAgICA8L0Vycm9yQWxlcnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIGxpbms9Jy9ldmVudHMnPlNob3cgQWxsIEV2ZW50czwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGVFdmVudHMgPSBuZXcgRGF0ZShudW1ZZWFyLCBudW1Nb250aCAtIDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGVFdmVudHN9IC8+XHJcbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuLy8gICBjb25zdCBmaWx0ZXJEYXRhID0gcGFyYW1zLnNsdWc7XHJcbi8vICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcclxuLy8gICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcclxuXHJcbi8vICAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XHJcbi8vICAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcclxuXHJcbi8vICAgaWYgKFxyXG4vLyAgICAgaXNOYU4obnVtWWVhcikgfHxcclxuLy8gICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4vLyAgICAgbnVtWWVhciA+IDIwMzAgfHxcclxuLy8gICAgIG51bVllYXIgPCAyMDIxIHx8XHJcbi8vICAgICBudW1Nb250aCA8IDEgfHxcclxuLy8gICAgIG51bU1vbnRoID4gMTJcclxuLy8gICApIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgaGFzRXJyb3I6IHRydWUsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIC8vIG5vdEZvdW5kOiB0cnVlLFxyXG4vLyAgICAgICAvLyByZWRpcmVjdDoge1xyXG4vLyAgICAgICAvLyAgIGRlc3RpbmF0aW9uOiAnL2Vycm9yJ1xyXG4vLyAgICAgICAvLyB9XHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XHJcbi8vICAgICB5ZWFyOiBudW1ZZWFyLFxyXG4vLyAgICAgbW9udGg6IG51bU1vbnRoLFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgZXZlbnRzOiBmaWx0ZXJlZEV2ZW50cyxcclxuLy8gICAgICAgZGF0ZToge1xyXG4vLyAgICAgICAgIHllYXI6IG51bVllYXIsXHJcbi8vICAgICAgICAgbW9udGg6IG51bU1vbnRoLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50c1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=