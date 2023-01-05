(function() {
var exports = {};
exports.id = "pages/api/payout/[id]";
exports.ids = ["pages/api/payout/[id]"];
exports.modules = {

/***/ "./pages/api/payout/[id].js":
/*!**********************************!*\
  !*** ./pages/api/payout/[id].js ***!
  \**********************************/
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
  const payouts = await stripeConfig.payouts.list({
    stripeAccount: id,
    limit: 3
  });

  if (!payouts) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  }

  res.json({
    payouts
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/payout/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL3BhZ2VzL2FwaS9wYXlvdXQvW2lkXS5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInN0cmlwZVwiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJzdHJpcGVDb25maWciLCJTdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QUklWQVRFX1NUUklQRV9LRVkiLCJhcGlWZXJzaW9uIiwicGF5b3V0cyIsImxpc3QiLCJzdHJpcGVBY2NvdW50IiwibGltaXQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFDSkMsU0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFESCxNQUVGSCxHQUZKO0FBSUEsUUFBTUksWUFBWSxHQUFHLElBQUlDLCtDQUFKLENBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1QkFBWixJQUF1QyxFQUFsRCxFQUFzRDtBQUN6RUMsY0FBVSxFQUFFO0FBRDZELEdBQXRELENBQXJCO0FBSUEsUUFBTUMsT0FBTyxHQUFHLE1BQU1OLFlBQVksQ0FBQ00sT0FBYixDQUFxQkMsSUFBckIsQ0FBMEI7QUFDOUNDLGlCQUFhLEVBQUVULEVBRCtCO0FBRTlDVSxTQUFLLEVBQUU7QUFGdUMsR0FBMUIsQ0FBdEI7O0FBS0EsTUFBSSxDQUFDSCxPQUFMLEVBQWM7QUFDWixXQUFPVCxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkQsWUFBTSxFQUFFLEdBRGtCO0FBRTFCRSxhQUFPLEVBQUU7QUFGaUIsS0FBckIsQ0FBUDtBQUlEOztBQUNEZixLQUFHLENBQUNjLElBQUosQ0FBUztBQUFFTDtBQUFGLEdBQVQ7QUFDRCxDQXJCRCxFOzs7Ozs7Ozs7OztBQ0ZBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9wYXlvdXQvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgfSA9IHJlcTtcclxuXHJcbiAgY29uc3Qgc3RyaXBlQ29uZmlnID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BSSVZBVEVfU1RSSVBFX0tFWSB8fCAnJywge1xyXG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXlvdXRzID0gYXdhaXQgc3RyaXBlQ29uZmlnLnBheW91dHMubGlzdCh7XHJcbiAgICBzdHJpcGVBY2NvdW50OiBpZCxcclxuICAgIGxpbWl0OiAzLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXBheW91dHMpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgICBtZXNzYWdlOiAnTm90IEZvdW5kJyxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXMuanNvbih7IHBheW91dHMgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==