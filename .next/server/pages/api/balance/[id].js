(function() {
var exports = {};
exports.id = "pages/api/balance/[id]";
exports.ids = ["pages/api/balance/[id]"];
exports.modules = {

/***/ "./pages/api/balance/[id].js":
/*!***********************************!*\
  !*** ./pages/api/balance/[id].js ***!
  \***********************************/
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
  const pendingBalance = await stripeConfig.balance.retrieve({
    stripeAccount: id
  });

  if (!pendingBalance) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  }

  res.json({
    pendingBalance
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/balance/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL3BhZ2VzL2FwaS9iYWxhbmNlL1tpZF0uanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHJpcGVcIiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwic3RyaXBlQ29uZmlnIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFJJVkFURV9TVFJJUEVfS0VZIiwiYXBpVmVyc2lvbiIsInBlbmRpbmdCYWxhbmNlIiwiYmFsYW5jZSIsInJldHJpZXZlIiwic3RyaXBlQWNjb3VudCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUM7QUFBRjtBQURILE1BRUZILEdBRko7QUFJQSxRQUFNSSxZQUFZLEdBQUcsSUFBSUMsK0NBQUosQ0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHVCQUFaLElBQXVDLEVBQWxELEVBQXNEO0FBQ3pFQyxjQUFVLEVBQUU7QUFENkQsR0FBdEQsQ0FBckI7QUFJQSxRQUFNQyxjQUFjLEdBQUcsTUFBTU4sWUFBWSxDQUFDTyxPQUFiLENBQXFCQyxRQUFyQixDQUE4QjtBQUN6REMsaUJBQWEsRUFBRVY7QUFEMEMsR0FBOUIsQ0FBN0I7O0FBSUEsTUFBSSxDQUFDTyxjQUFMLEVBQXFCO0FBQ25CLFdBQU9ULEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRCxZQUFNLEVBQUUsR0FEa0I7QUFFMUJFLGFBQU8sRUFBRTtBQUZpQixLQUFyQixDQUFQO0FBSUQ7O0FBQ0RmLEtBQUcsQ0FBQ2MsSUFBSixDQUFTO0FBQUVMO0FBQUYsR0FBVDtBQUNELENBcEJELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2JhbGFuY2UvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgfSA9IHJlcTtcclxuXHJcbiAgY29uc3Qgc3RyaXBlQ29uZmlnID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BSSVZBVEVfU1RSSVBFX0tFWSB8fCAnJywge1xyXG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwZW5kaW5nQmFsYW5jZSA9IGF3YWl0IHN0cmlwZUNvbmZpZy5iYWxhbmNlLnJldHJpZXZlKHtcclxuICAgIHN0cmlwZUFjY291bnQ6IGlkLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXBlbmRpbmdCYWxhbmNlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IDQwNCxcclxuICAgICAgbWVzc2FnZTogJ05vdCBGb3VuZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVzLmpzb24oeyBwZW5kaW5nQmFsYW5jZSB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9