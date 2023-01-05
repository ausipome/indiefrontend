(function() {
var exports = {};
exports.id = "pages/SignIn";
exports.ids = ["pages/SignIn"];
exports.modules = {

/***/ "./pages/SignIn.js":
/*!*************************!*\
  !*** ./pages/SignIn.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignInPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SignIn */ "./components/SignIn.js");


var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\pages\\SignIn.js";






const UPDATE_USER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation UPDATE_USER_MUTATION($id: ID!) {
    updateUser(where: { id: $id }, data: { confirmed: "yes" }) {
      confirmed
    }
  }
`;
function SignInPage({
  query
}) {
  const [updateUser, {
    data,
    error,
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPDATE_USER_MUTATION);

  async function updateUserFunc() {
    const res = await updateUser({
      variables: {
        id: query.token
      }
    });
  }

  if (query !== null && query !== void 0 && query.token) {
    updateUserFunc();
  }

  const {
    0: sign,
    1: setSign
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const {
    0: forgot,
    1: setForgot
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  const signHandler = () => {
    setSign(true);
    setForgot(false);
  };

  const forgotHandler = () => {
    setSign(false);
    setForgot(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [sign && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignIn__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: forgotHandler,
        style: {
          backgroundColor: 'white',
          color: 'red'
        },
        children: "Forgot Password! \uD83D\uDE43"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)]
    }, void 0, true), forgot && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: signHandler,
        style: {
          backgroundColor: 'white',
          color: 'red'
        },
        children: "Back to Sign In! \uD83D\uDC48"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-ad777a","vendors-node_modules_next_image_js","components_Footer_js-components_RequestReset_js-components_SignIn_js"], function() { return __webpack_exec__("./pages/SignIn.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL3BhZ2VzL1NpZ25Jbi5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlVQREFURV9VU0VSX01VVEFUSU9OIiwiZ3FsIiwiU2lnbkluUGFnZSIsInF1ZXJ5IiwidXBkYXRlVXNlciIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVVzZXJGdW5jIiwicmVzIiwidmFyaWFibGVzIiwiaWQiLCJ0b2tlbiIsInNpZ24iLCJzZXRTaWduIiwidXNlU3RhdGUiLCJmb3Jnb3QiLCJzZXRGb3Jnb3QiLCJzaWduSGFuZGxlciIsImZvcmdvdEhhbmRsZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyxvREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQVFlLFNBQVNDLFVBQVQsQ0FBb0I7QUFBRUM7QUFBRixDQUFwQixFQUErQjtBQUM1QyxRQUFNLENBQUNDLFVBQUQsRUFBYTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixHQUFiLElBQ0pDLDJEQUFXLENBQUNSLG9CQUFELENBRGI7O0FBR0EsaUJBQWVTLGNBQWYsR0FBZ0M7QUFDOUIsVUFBTUMsR0FBRyxHQUFHLE1BQU1OLFVBQVUsQ0FBQztBQUMzQk8sZUFBUyxFQUFFO0FBQ1RDLFVBQUUsRUFBRVQsS0FBSyxDQUFDVTtBQUREO0FBRGdCLEtBQUQsQ0FBNUI7QUFLRDs7QUFDRCxNQUFJVixLQUFKLGFBQUlBLEtBQUosZUFBSUEsS0FBSyxDQUFFVSxLQUFYLEVBQWtCO0FBQ2hCSixrQkFBYztBQUNmOztBQUVELFFBQU07QUFBQSxPQUFDSyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxJQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7O0FBQ0EsUUFBTUcsV0FBVyxHQUFHLE1BQU07QUFDeEJKLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUcsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEdBSEQ7O0FBSUEsUUFBTUUsYUFBYSxHQUFHLE1BQU07QUFDMUJMLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUcsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBQSxlQUNHSixJQUFJLGlCQUNIO0FBQUEsOEJBQ0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBRU0sYUFGWDtBQUdFLGFBQUssRUFBRTtBQUFFQyx5QkFBZSxFQUFFLE9BQW5CO0FBQTRCQyxlQUFLLEVBQUU7QUFBbkMsU0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUEsb0JBRkosRUFhR0wsTUFBTSxpQkFDTDtBQUFBLDhCQUNFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLEVBQUVFLFdBRlg7QUFHRSxhQUFLLEVBQUU7QUFBRUUseUJBQWUsRUFBRSxPQUFuQjtBQUE0QkMsZUFBSyxFQUFFO0FBQW5DLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQWRKLGVBeUJFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQsQzs7Ozs7Ozs7Ozs7QUNyRUQsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvU2lnbkluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBSZXF1ZXN0UmVzZXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQnO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnbkluJztcclxuXHJcbmNvbnN0IFVQREFURV9VU0VSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9VU0VSX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICB1cGRhdGVVc2VyKHdoZXJlOiB7IGlkOiAkaWQgfSwgZGF0YTogeyBjb25maXJtZWQ6IFwieWVzXCIgfSkge1xyXG4gICAgICBjb25maXJtZWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5QYWdlKHsgcXVlcnkgfSkge1xyXG4gIGNvbnN0IFt1cGRhdGVVc2VyLCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH1dID1cclxuICAgIHVzZU11dGF0aW9uKFVQREFURV9VU0VSX01VVEFUSU9OKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckZ1bmMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgaWQ6IHF1ZXJ5LnRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChxdWVyeT8udG9rZW4pIHtcclxuICAgIHVwZGF0ZVVzZXJGdW5jKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbc2lnbiwgc2V0U2lnbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZm9yZ290LCBzZXRGb3Jnb3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNpZ25IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnbih0cnVlKTtcclxuICAgIHNldEZvcmdvdChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBmb3Jnb3RIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnbihmYWxzZSk7XHJcbiAgICBzZXRGb3Jnb3QodHJ1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3NpZ24gJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8U2lnbkluIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtmb3Jnb3RIYW5kbGVyfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGNvbG9yOiAncmVkJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQhIPCfmYNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7Zm9yZ290ICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFJlcXVlc3RSZXNldCAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17c2lnbkhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgY29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJhY2sgdG8gU2lnbiBJbiEg8J+RiFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9