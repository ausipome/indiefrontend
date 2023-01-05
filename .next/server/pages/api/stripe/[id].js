(function() {
var exports = {};
exports.id = "pages/api/stripe/[id]";
exports.ids = ["pages/api/stripe/[id]"];
exports.modules = {

/***/ "./pages/api/stripe/[id].js":
/*!**********************************!*\
  !*** ./pages/api/stripe/[id].js ***!
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
  const account = await stripeConfig.accounts.retrieve(id);

  if (!account) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  }

  res.json({
    account
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/stripe/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL3BhZ2VzL2FwaS9zdHJpcGUvW2lkXS5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInN0cmlwZVwiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJzdHJpcGVDb25maWciLCJTdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QUklWQVRFX1NUUklQRV9LRVkiLCJhcGlWZXJzaW9uIiwiYWNjb3VudCIsImFjY291bnRzIiwicmV0cmlldmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFDSkMsU0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFESCxNQUVGSCxHQUZKO0FBSUEsUUFBTUksWUFBWSxHQUFHLElBQUlDLCtDQUFKLENBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1QkFBWixJQUF1QyxFQUFsRCxFQUFzRDtBQUN6RUMsY0FBVSxFQUFFO0FBRDZELEdBQXRELENBQXJCO0FBSUEsUUFBTUMsT0FBTyxHQUFHLE1BQU1OLFlBQVksQ0FBQ08sUUFBYixDQUFzQkMsUUFBdEIsQ0FBK0JULEVBQS9CLENBQXRCOztBQUVBLE1BQUksQ0FBQ08sT0FBTCxFQUFjO0FBQ1osV0FBT1QsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJELFlBQU0sRUFBRSxHQURrQjtBQUUxQkUsYUFBTyxFQUFFO0FBRmlCLEtBQXJCLENBQVA7QUFJRDs7QUFFRGQsS0FBRyxDQUFDYSxJQUFKLENBQVM7QUFBRUo7QUFBRixHQUFUO0FBQ0QsQ0FuQkQsRTs7Ozs7Ozs7Ozs7QUNGQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvc3RyaXBlL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gIH0gPSByZXE7XHJcblxyXG4gIGNvbnN0IHN0cmlwZUNvbmZpZyA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QUklWQVRFX1NUUklQRV9LRVkgfHwgJycsIHtcclxuICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHN0cmlwZUNvbmZpZy5hY2NvdW50cy5yZXRyaWV2ZShpZCk7XHJcblxyXG4gIGlmICghYWNjb3VudCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICAgIG1lc3NhZ2U6ICdOb3QgRm91bmQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXMuanNvbih7IGFjY291bnQgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==