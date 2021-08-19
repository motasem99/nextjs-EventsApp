webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./helpers/api-util.js":
/*!*****************************!*\
  !*** ./helpers/api-util.js ***!
  \*****************************/
/*! exports provided: getAllEvents, getFeaturedEvents, getEventById, getFilteredEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEvents", function() { return getAllEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedEvents", function() { return getFeaturedEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventById", function() { return getEventById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredEvents", function() { return getFilteredEvents; });
/* harmony import */ var C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getAllEvents() {
  return _getAllEvents.apply(this, arguments);
}

function _getAllEvents() {
  _getAllEvents = Object(C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, data, events, key;
    return C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://nextjs-project-80927-default-rtdb.firebaseio.com/events.json');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            events = [];

            for (key in data) {
              events.push(_objectSpread({
                id: key
              }, data[key]));
            }

            return _context.abrupt("return", events);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllEvents.apply(this, arguments);
}

function getFeaturedEvents() {
  return _getFeaturedEvents.apply(this, arguments);
}

function _getFeaturedEvents() {
  _getFeaturedEvents = Object(C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var allEvents;
    return C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getAllEvents();

          case 2:
            allEvents = _context2.sent;
            return _context2.abrupt("return", allEvents.filter(function (event) {
              return event.isFeatured;
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFeaturedEvents.apply(this, arguments);
}

function getEventById(_x) {
  return _getEventById.apply(this, arguments);
}

function _getEventById() {
  _getEventById = Object(C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var allEvents;
    return C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getAllEvents();

          case 2:
            allEvents = _context3.sent;
            return _context3.abrupt("return", allEvents.find(function (event) {
              return event.id === id;
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getEventById.apply(this, arguments);
}

function getFilteredEvents(_x2) {
  return _getFilteredEvents.apply(this, arguments);
}

function _getFilteredEvents() {
  _getFilteredEvents = Object(C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dateFilter) {
    var year, month, allEvents, filteredEvents;
    return C_Users_motas_Desktop_nextjs_course_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            year = dateFilter.year, month = dateFilter.month;
            _context4.next = 3;
            return getAllEvents();

          case 3:
            allEvents = _context4.sent;
            filteredEvents = allEvents.filter(function (event) {
              var eventDate = new Date(event.date);
              return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
            });
            return _context4.abrupt("return", filteredEvents);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getFilteredEvents.apply(this, arguments);
}

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

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
/* harmony import */ var _helpers_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api-util */ "./helpers/api-util.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_events_EventList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/events/EventList */ "./components/events/EventList.js");
/* harmony import */ var _components_events_ResultTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/events/ResultTitle */ "./components/events/ResultTitle.js");
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/Button */ "./components/ui/Button.js");
/* harmony import */ var _components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/ErrorAlert */ "./components/ui/ErrorAlert.js");



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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var filterData = router.query.slug;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])('https://nextjs-project-80927-default-rtdb.firebaseio.com/events.json'),
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

  if (!loadedEvents) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }, this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filter. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          link: "events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = loadedEvents.filter(function (event) {
    var eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "No events found for the chosen filter!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this);
  }

  var dateEvents = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_ResultTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: dateEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_EventList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hcGktdXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanMiXSwibmFtZXMiOlsiZ2V0QWxsRXZlbnRzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImV2ZW50cyIsImtleSIsInB1c2giLCJpZCIsImdldEZlYXR1cmVkRXZlbnRzIiwiYWxsRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJpc0ZlYXR1cmVkIiwiZ2V0RXZlbnRCeUlkIiwiZmluZCIsImdldEZpbHRlcmVkRXZlbnRzIiwiZGF0ZUZpbHRlciIsInllYXIiLCJtb250aCIsImZpbHRlcmVkRXZlbnRzIiwiZXZlbnREYXRlIiwiRGF0ZSIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiRmlsdGVyZWRFdmVudHNQYWdlIiwiaGFzRXJyb3IiLCJ1c2VTdGF0ZSIsImxvYWRlZEV2ZW50cyIsInNldExvYWRlZEV2ZW50cyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJ1c2VTV1IiLCJlcnJvciIsInVzZUVmZmVjdCIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImxlbmd0aCIsImRhdGVFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQWVBLFlBQXRCO0FBQUE7QUFBQTs7O3FVQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FDLEtBQUssQ0FDckIsc0VBRHFCLENBRGxCOztBQUFBO0FBQ0NDLGVBREQ7QUFBQTtBQUFBLG1CQUljQSxHQUFHLENBQUNDLElBQUosRUFKZDs7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b0VBQUQ7QUFBVyxXQUFLLEVBQUV6QjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0EvSFNNLGtCO1VBRVFNLHFELEVBR1NJLDJDOzs7S0FMakJWLGtCO0FBaUlNQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvWy4uLnNsdWddLjk2OGFlMTZhYTk5N2M0NzkxYTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRXZlbnRzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgJ2h0dHBzOi8vbmV4dGpzLXByb2plY3QtODA5MjctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2V2ZW50cy5qc29uJ1xyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGV2ZW50cyA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgaWQ6IGtleSxcclxuICAgICAgLi4uZGF0YVtrZXldLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXZlbnRzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVhdHVyZWRFdmVudHMoKSB7XHJcbiAgY29uc3QgYWxsRXZlbnRzID0gYXdhaXQgZ2V0QWxsRXZlbnRzKCk7XHJcbiAgcmV0dXJuIGFsbEV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pc0ZlYXR1cmVkKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV2ZW50QnlJZChpZCkge1xyXG4gIGNvbnN0IGFsbEV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpO1xyXG4gIHJldHVybiBhbGxFdmVudHMuZmluZCgoZXZlbnQpID0+IGV2ZW50LmlkID09PSBpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWx0ZXJlZEV2ZW50cyhkYXRlRmlsdGVyKSB7XHJcbiAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZGF0ZUZpbHRlcjtcclxuICBjb25zdCBhbGxFdmVudHMgPSBhd2FpdCBnZXRBbGxFdmVudHMoKTtcclxuXHJcbiAgbGV0IGZpbHRlcmVkRXZlbnRzID0gYWxsRXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoIC0gMVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGZpbHRlcmVkRXZlbnRzO1xyXG59XHJcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudExpc3QnO1xyXG5pbXBvcnQgUmVzdWx0c1RpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL1Jlc3VsdFRpdGxlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL0J1dHRvbic7XHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvRXJyb3JBbGVydCc7XHJcblxyXG5mdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UoeyBoYXNFcnJvciwgZXZlbnRzLCBkYXRlIH0pIHtcclxuICBjb25zdCBbbG9hZGVkRXZlbnRzLCBzZXRMb2FkZWRFdmVudHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICdodHRwczovL25leHRqcy1wcm9qZWN0LTgwOTI3LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvbidcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgZXZlbnRzID0gW107XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgICAgLi4uZGF0YVtrZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2FkZWRFdmVudHMoZXZlbnRzKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICBpZiAoIWxvYWRlZEV2ZW50cykge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF07XHJcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyO1xyXG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XHJcblxyXG4gIGlmIChcclxuICAgIGlzTmFOKG51bVllYXIpIHx8XHJcbiAgICBpc05hTihudW1Nb250aCkgfHxcclxuICAgIG51bVllYXIgPiAyMDMwIHx8XHJcbiAgICBudW1ZZWFyIDwgMjAyMSB8fFxyXG4gICAgbnVtTW9udGggPCAxIHx8XHJcbiAgICBudW1Nb250aCA+IDEyIHx8XHJcbiAgICBlcnJvclxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxFcnJvckFsZXJ0PlxyXG4gICAgICAgICAgPHA+SW52YWxpZCBmaWx0ZXIuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPlxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz0nZXZlbnRzJz5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGxvYWRlZEV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShldmVudC5kYXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGV2ZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSBudW1ZZWFyICYmXHJcbiAgICAgIGV2ZW50RGF0ZS5nZXRNb250aCgpID09PSBudW1Nb250aCAtIDFcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+XHJcbiAgICAgICAgICA8cD5ObyBldmVudHMgZm91bmQgZm9yIHRoZSBjaG9zZW4gZmlsdGVyITwvcD5cclxuICAgICAgICA8L0Vycm9yQWxlcnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIGxpbms9Jy9ldmVudHMnPlNob3cgQWxsIEV2ZW50czwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGVFdmVudHMgPSBuZXcgRGF0ZShudW1ZZWFyLCBudW1Nb250aCAtIDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGVFdmVudHN9IC8+XHJcbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuLy8gICBjb25zdCBmaWx0ZXJEYXRhID0gcGFyYW1zLnNsdWc7XHJcbi8vICAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcclxuLy8gICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcclxuXHJcbi8vICAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XHJcbi8vICAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcclxuXHJcbi8vICAgaWYgKFxyXG4vLyAgICAgaXNOYU4obnVtWWVhcikgfHxcclxuLy8gICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4vLyAgICAgbnVtWWVhciA+IDIwMzAgfHxcclxuLy8gICAgIG51bVllYXIgPCAyMDIxIHx8XHJcbi8vICAgICBudW1Nb250aCA8IDEgfHxcclxuLy8gICAgIG51bU1vbnRoID4gMTJcclxuLy8gICApIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7XHJcbi8vICAgICAgICAgaGFzRXJyb3I6IHRydWUsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIC8vIG5vdEZvdW5kOiB0cnVlLFxyXG4vLyAgICAgICAvLyByZWRpcmVjdDoge1xyXG4vLyAgICAgICAvLyAgIGRlc3RpbmF0aW9uOiAnL2Vycm9yJ1xyXG4vLyAgICAgICAvLyB9XHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XHJcbi8vICAgICB5ZWFyOiBudW1ZZWFyLFxyXG4vLyAgICAgbW9udGg6IG51bU1vbnRoLFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgZXZlbnRzOiBmaWx0ZXJlZEV2ZW50cyxcclxuLy8gICAgICAgZGF0ZToge1xyXG4vLyAgICAgICAgIHllYXI6IG51bVllYXIsXHJcbi8vICAgICAgICAgbW9udGg6IG51bU1vbnRoLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50c1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=