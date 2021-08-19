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

  var pageHeadData = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("head", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Filtered Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "A list of filtered events"
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "center",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;
  pageHeadData = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Filtered Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "All events for ".concat(numMonth, "/").concat(numYear, ".")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filter. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          link: "events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = loadedEvents.filter(function (event) {
    var eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "No events found for the chosen filter!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this);
  }

  var dateEvents = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [pageHeadData, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_ResultTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      date: dateEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_EventList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJoYXNFcnJvciIsImV2ZW50cyIsImRhdGUiLCJ1c2VTdGF0ZSIsImxvYWRlZEV2ZW50cyIsInNldExvYWRlZEV2ZW50cyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJrZXkiLCJwdXNoIiwiaWQiLCJwYWdlSGVhZERhdGEiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsImZpbHRlciIsImV2ZW50IiwiZXZlbnREYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJsZW5ndGgiLCJkYXRlRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDZEMsc0RBQVEsRUFETTtBQUFBLE1BQy9DQyxZQUQrQztBQUFBLE1BQ2pDQyxlQURpQzs7QUFFdEQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDOztBQUhzRCxnQkFLOUJDLG1EQUFNLENBQzVCLHNFQUQ0QixDQUx3QjtBQUFBLE1BSzlDQyxJQUw4QyxXQUs5Q0EsSUFMOEM7QUFBQSxNQUt4Q0MsS0FMd0MsV0FL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QTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBV0Q7O0FBRUQsTUFBTWMsVUFBVSxHQUFHLElBQUlKLElBQUosQ0FBU1AsT0FBVCxFQUFrQkMsUUFBUSxHQUFHLENBQTdCLENBQW5CO0FBRUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSxlQUNHSixZQURILGVBRUUscUVBQUMsc0VBQUQ7QUFBYyxVQUFJLEVBQUVjO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLG9FQUFEO0FBQVcsV0FBSyxFQUFFUjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F4SlN6QixrQjtVQUVRUSxxRCxFQUdTSSwyQzs7O0tBTGpCWixrQjtBQTBKTUEsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1suLi5zbHVnXS41YTM2MWUzZmMzZTAwYjNlYmExOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcGktdXRpbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL0V2ZW50TGlzdCc7XHJcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvUmVzdWx0VGl0bGUnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvQnV0dG9uJztcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9FcnJvckFsZXJ0JztcclxuXHJcbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZSh7IGhhc0Vycm9yLCBldmVudHMsIGRhdGUgfSkge1xyXG4gIGNvbnN0IFtsb2FkZWRFdmVudHMsIHNldExvYWRlZEV2ZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgJ2h0dHBzOi8vbmV4dGpzLXByb2plY3QtODA5MjctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2V2ZW50cy5qc29uJ1xyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBldmVudHMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICAuLi5kYXRhW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvYWRlZEV2ZW50cyhldmVudHMpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIGxldCBwYWdlSGVhZERhdGEgPSAoXHJcbiAgICA8aGVhZD5cclxuICAgICAgPHRpdGxlPkZpbHRlcmVkIEV2ZW50czwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtgQSBsaXN0IG9mIGZpbHRlcmVkIGV2ZW50c2B9IC8+XHJcbiAgICA8L2hlYWQ+XHJcbiAgKTtcclxuXHJcbiAgaWYgKCFsb2FkZWRFdmVudHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICB7cGFnZUhlYWREYXRhfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XHJcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xyXG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XHJcblxyXG4gIHBhZ2VIZWFkRGF0YSA9IChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+RmlsdGVyZWQgRXZlbnRzPC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICBjb250ZW50PXtgQWxsIGV2ZW50cyBmb3IgJHtudW1Nb250aH0vJHtudW1ZZWFyfS5gfVxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIGlmIChcclxuICAgIGlzTmFOKG51bVllYXIpIHx8XHJcbiAgICBpc05hTihudW1Nb250aCkgfHxcclxuICAgIG51bVllYXIgPiAyMDMwIHx8XHJcbiAgICBudW1ZZWFyIDwgMjAyMSB8fFxyXG4gICAgbnVtTW9udGggPCAxIHx8XHJcbiAgICBudW1Nb250aCA+IDEyIHx8XHJcbiAgICBlcnJvclxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIHtwYWdlSGVhZERhdGF9XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+XHJcbiAgICAgICAgICA8cD5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+XHJcbiAgICAgICAgPC9FcnJvckFsZXJ0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPSdldmVudHMnPlNob3cgQWxsIEV2ZW50czwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gbG9hZGVkRXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IG51bVllYXIgJiZcclxuICAgICAgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICB7cGFnZUhlYWREYXRhfVxyXG4gICAgICAgIDxFcnJvckFsZXJ0PlxyXG4gICAgICAgICAgPHA+Tm8gZXZlbnRzIGZvdW5kIGZvciB0aGUgY2hvc2VuIGZpbHRlciE8L3A+XHJcbiAgICAgICAgPC9FcnJvckFsZXJ0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPScvZXZlbnRzJz5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRlRXZlbnRzID0gbmV3IERhdGUobnVtWWVhciwgbnVtTW9udGggLSAxKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAge3BhZ2VIZWFkRGF0YX1cclxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlRXZlbnRzfSAvPlxyXG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XHJcbi8vICAgY29uc3QgZmlsdGVyRGF0YSA9IHBhcmFtcy5zbHVnO1xyXG4vLyAgIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XHJcbi8vICAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XHJcblxyXG4vLyAgIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xyXG4vLyAgIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XHJcblxyXG4vLyAgIGlmIChcclxuLy8gICAgIGlzTmFOKG51bVllYXIpIHx8XHJcbi8vICAgICBpc05hTihudW1Nb250aCkgfHxcclxuLy8gICAgIG51bVllYXIgPiAyMDMwIHx8XHJcbi8vICAgICBudW1ZZWFyIDwgMjAyMSB8fFxyXG4vLyAgICAgbnVtTW9udGggPCAxIHx8XHJcbi8vICAgICBudW1Nb250aCA+IDEyXHJcbi8vICAgKSB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgIGhhc0Vycm9yOiB0cnVlLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICAvLyBub3RGb3VuZDogdHJ1ZSxcclxuLy8gICAgICAgLy8gcmVkaXJlY3Q6IHtcclxuLy8gICAgICAgLy8gICBkZXN0aW5hdGlvbjogJy9lcnJvcidcclxuLy8gICAgICAgLy8gfVxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gYXdhaXQgZ2V0RmlsdGVyZWRFdmVudHMoe1xyXG4vLyAgICAgeWVhcjogbnVtWWVhcixcclxuLy8gICAgIG1vbnRoOiBudW1Nb250aCxcclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIGV2ZW50czogZmlsdGVyZWRFdmVudHMsXHJcbi8vICAgICAgIGRhdGU6IHtcclxuLy8gICAgICAgICB5ZWFyOiBudW1ZZWFyLFxyXG4vLyAgICAgICAgIG1vbnRoOiBudW1Nb250aCxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9