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
  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  var pageHeadData = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: "Filtered Events"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "All events for ".concat(numMonth, "/").concat(numYear, ".")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);

  if (!loadedEvents) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 12
    }, this);
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJoYXNFcnJvciIsImV2ZW50cyIsImRhdGUiLCJ1c2VTdGF0ZSIsImxvYWRlZEV2ZW50cyIsInNldExvYWRlZEV2ZW50cyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJrZXkiLCJwdXNoIiwiaWQiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwicGFnZUhlYWREYXRhIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsImZpbHRlciIsImV2ZW50IiwiZXZlbnREYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJsZW5ndGgiLCJkYXRlRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsT0FBd0Q7QUFBQTs7QUFBQSxNQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDZEMsc0RBQVEsRUFETTtBQUFBLE1BQy9DQyxZQUQrQztBQUFBLE1BQ2pDQyxlQURpQzs7QUFFdEQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDOztBQUhzRCxnQkFLOUJDLG1EQUFNLENBQzVCLHNFQUQ0QixDQUx3QjtBQUFBLE1BSzlDQyxJQUw4QyxXQUs5Q0EsSUFMOEM7QUFBQSxNQUt4Q0MsS0FMd0MsV0FL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RyxDQUE3QixDQUFuQjtBQUVBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsc0VBQUQ7QUFBYyxVQUFJLEVBQUVXO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLG9FQUFEO0FBQVcsV0FBSyxFQUFFUjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F6SVN6QixrQjtVQUVRUSxxRCxFQUdTSSwyQzs7O0tBTGpCWixrQjtBQTJJTUEsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1suLi5zbHVnXS45ZTNhYmM4N2Y3ZDg5YzFhNDFiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcGktdXRpbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL0V2ZW50TGlzdCc7XHJcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvUmVzdWx0VGl0bGUnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvQnV0dG9uJztcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9FcnJvckFsZXJ0JztcclxuXHJcbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZSh7IGhhc0Vycm9yLCBldmVudHMsIGRhdGUgfSkge1xyXG4gIGNvbnN0IFtsb2FkZWRFdmVudHMsIHNldExvYWRlZEV2ZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgJ2h0dHBzOi8vbmV4dGpzLXByb2plY3QtODA5MjctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2V2ZW50cy5qc29uJ1xyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBldmVudHMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICAuLi5kYXRhW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvYWRlZEV2ZW50cyhldmVudHMpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XHJcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xyXG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XHJcblxyXG4gIGNvbnN0IHBhZ2VIZWFkRGF0YSA9IChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+RmlsdGVyZWQgRXZlbnRzPC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICBjb250ZW50PXtgQWxsIGV2ZW50cyBmb3IgJHtudW1Nb250aH0vJHtudW1ZZWFyfS5gfVxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIGlmICghbG9hZGVkRXZlbnRzKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjZW50ZXInPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgaXNOYU4obnVtWWVhcikgfHxcclxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4gICAgbnVtWWVhciA+IDIwMzAgfHxcclxuICAgIG51bVllYXIgPCAyMDIxIHx8XHJcbiAgICBudW1Nb250aCA8IDEgfHxcclxuICAgIG51bU1vbnRoID4gMTIgfHxcclxuICAgIGVycm9yXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+XHJcbiAgICAgICAgICA8cD5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+XHJcbiAgICAgICAgPC9FcnJvckFsZXJ0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPSdldmVudHMnPlNob3cgQWxsIEV2ZW50czwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gbG9hZGVkRXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IG51bVllYXIgJiZcclxuICAgICAgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8RXJyb3JBbGVydD5cclxuICAgICAgICAgIDxwPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPlxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0ZUV2ZW50cyA9IG5ldyBEYXRlKG51bVllYXIsIG51bU1vbnRoIC0gMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZUV2ZW50c30gLz5cclxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xyXG4vLyAgIGNvbnN0IGZpbHRlckRhdGEgPSBwYXJhbXMuc2x1ZztcclxuLy8gICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdO1xyXG4vLyAgIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdO1xyXG5cclxuLy8gICBjb25zdCBudW1ZZWFyID0gK2ZpbHRlcmVkWWVhcjtcclxuLy8gICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoO1xyXG5cclxuLy8gICBpZiAoXHJcbi8vICAgICBpc05hTihudW1ZZWFyKSB8fFxyXG4vLyAgICAgaXNOYU4obnVtTW9udGgpIHx8XHJcbi8vICAgICBudW1ZZWFyID4gMjAzMCB8fFxyXG4vLyAgICAgbnVtWWVhciA8IDIwMjEgfHxcclxuLy8gICAgIG51bU1vbnRoIDwgMSB8fFxyXG4vLyAgICAgbnVtTW9udGggPiAxMlxyXG4vLyAgICkge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgLy8gbm90Rm91bmQ6IHRydWUsXHJcbi8vICAgICAgIC8vIHJlZGlyZWN0OiB7XHJcbi8vICAgICAgIC8vICAgZGVzdGluYXRpb246ICcvZXJyb3InXHJcbi8vICAgICAgIC8vIH1cclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGF3YWl0IGdldEZpbHRlcmVkRXZlbnRzKHtcclxuLy8gICAgIHllYXI6IG51bVllYXIsXHJcbi8vICAgICBtb250aDogbnVtTW9udGgsXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBldmVudHM6IGZpbHRlcmVkRXZlbnRzLFxyXG4vLyAgICAgICBkYXRlOiB7XHJcbi8vICAgICAgICAgeWVhcjogbnVtWWVhcixcclxuLy8gICAgICAgICBtb250aDogbnVtTW9udGgsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==