(function() {
var exports = {};
exports.id = "pages/api/link/[id]";
exports.ids = ["pages/api/link/[id]"];
exports.modules = {

/***/ "./pages/api/link/[id].js":
/*!********************************!*\
  !*** ./pages/api/link/[id].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    query: {
      id
    }
  } = req;
  const stripeConfig = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.NEXT_PRIVATE_STRIPE_KEY || '', {
    apiVersion: '2020-08-27'
  });
  const accountLink = await stripeConfig.accountLinks.create({
    account: id,
    refresh_url: 'https://indiebubba.com/account',
    return_url: 'https://indiebubba.com/account',
    type: 'account_onboarding'
  });

  if (!accountLink) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  }

  res.json({
    accountLink
  });
});

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/link/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL3BhZ2VzL2FwaS9saW5rL1tpZF0uanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwic3RyaXBlQ29uZmlnIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFJJVkFURV9TVFJJUEVfS0VZIiwiYXBpVmVyc2lvbiIsImFjY291bnRMaW5rIiwiYWNjb3VudExpbmtzIiwiY3JlYXRlIiwiYWNjb3VudCIsInJlZnJlc2hfdXJsIiwicmV0dXJuX3VybCIsInR5cGUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFDSkMsU0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFESCxNQUVGSCxHQUZKO0FBSUEsUUFBTUksWUFBWSxHQUFHLElBQUlDLCtDQUFKLENBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1QkFBWixJQUF1QyxFQUFsRCxFQUFzRDtBQUN6RUMsY0FBVSxFQUFFO0FBRDZELEdBQXRELENBQXJCO0FBSUEsUUFBTUMsV0FBVyxHQUFHLE1BQU1OLFlBQVksQ0FBQ08sWUFBYixDQUEwQkMsTUFBMUIsQ0FBaUM7QUFDekRDLFdBQU8sRUFBRVYsRUFEZ0Q7QUFFekRXLGVBQVcsRUFBRSxnQ0FGNEM7QUFHekRDLGNBQVUsRUFBRSxnQ0FINkM7QUFJekRDLFFBQUksRUFBRTtBQUptRCxHQUFqQyxDQUExQjs7QUFPQSxNQUFJLENBQUNOLFdBQUwsRUFBa0I7QUFDaEIsV0FBT1QsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRCxZQUFNLEVBQUUsR0FEa0I7QUFFMUJFLGFBQU8sRUFBRTtBQUZpQixLQUFyQixDQUFQO0FBSUQ7O0FBRURsQixLQUFHLENBQUNpQixJQUFKLENBQVM7QUFBRVI7QUFBRixHQUFUO0FBQ0QsQ0F4QkQsRTs7Ozs7Ozs7Ozs7QUNGQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvbGluay9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgaWQgfSxcclxuICB9ID0gcmVxO1xyXG5cclxuICBjb25zdCBzdHJpcGVDb25maWcgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFJJVkFURV9TVFJJUEVfS0VZIHx8ICcnLCB7XHJcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFjY291bnRMaW5rID0gYXdhaXQgc3RyaXBlQ29uZmlnLmFjY291bnRMaW5rcy5jcmVhdGUoe1xyXG4gICAgYWNjb3VudDogaWQsXHJcbiAgICByZWZyZXNoX3VybDogJ2h0dHBzOi8vaW5kaWVidWJiYS5jb20vYWNjb3VudCcsXHJcbiAgICByZXR1cm5fdXJsOiAnaHR0cHM6Ly9pbmRpZWJ1YmJhLmNvbS9hY2NvdW50JyxcclxuICAgIHR5cGU6ICdhY2NvdW50X29uYm9hcmRpbmcnLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIWFjY291bnRMaW5rKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IDQwNCxcclxuICAgICAgbWVzc2FnZTogJ05vdCBGb3VuZCcsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcy5qc29uKHsgYWNjb3VudExpbmsgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==