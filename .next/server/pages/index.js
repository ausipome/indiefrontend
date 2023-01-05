(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Products */ "./components/Products.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\pages\\index.js";






const MainImageStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "pages__MainImageStyle",
  componentId: "sc-1cy730t-0"
})(["width:100%;height:500px;margin-top:12px;margin-bottom:250px;"]);
function IndexPage() {
  const {
    query
  } = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const page = parseInt(query.page);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      textAlign: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainImageStyle, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        style: {
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          color: '#024863',
          fontSize: '3em',
          marginTop: '20px',
          marginBottom: '20px',
          marginLeft: '30%',
          width: '50%',
          textAlign: 'left'
        },
        children: ["Buy and Sell ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 24
        }, this), "New and Used Babywear"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          boxShadow: '0 0 5px 3px #eeeeee',
          background: 'rgba(0, 0, 0, 0.02)',
          border: '5px solid white',
          width: '900px',
          height: '600px',
          borderRadius: '15px',
          overflow: 'hidden',
          margin: '0 auto'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/bubba-main.jpg",
          alt: "Indie Bubba Crawling",
          width: "900px",
          height: "600px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__.default, {
      page: page || 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_5__.default, {
      page: page || 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        marginBottom: '55px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__.default, {
        page: page || 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-ad777a","vendors-node_modules_next_image_js","vendors-node_modules_next_link_js","components_ErrorMessage_js-components_Footer_js-components_LoadBar_js-components_User_js-comp-c40948","components_Pagination_js-components_Products_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJNYWluSW1hZ2VTdHlsZSIsInN0eWxlZCIsIkluZGV4UGFnZSIsInF1ZXJ5IiwidXNlUm91dGVyIiwicGFnZSIsInBhcnNlSW50IiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsb0VBQXBCO0FBT2UsU0FBU0MsU0FBVCxHQUFxQjtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBWUMsa0VBQVMsRUFBM0I7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDRSxJQUFQLENBQXJCO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUUsZUFBUyxFQUFFO0FBQWIsS0FBWjtBQUFBLDRCQUNFLDhEQUFDLGNBQUQ7QUFBQSw4QkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMQyxvQkFBVSxFQUFFLFFBRFA7QUFFTEMsb0JBQVUsRUFBRSxNQUZQO0FBR0xDLGVBQUssRUFBRSxTQUhGO0FBSUxDLGtCQUFRLEVBQUUsS0FKTDtBQUtMQyxtQkFBUyxFQUFFLE1BTE47QUFNTEMsc0JBQVksRUFBRSxNQU5UO0FBT0xDLG9CQUFVLEVBQUUsS0FQUDtBQVFMQyxlQUFLLEVBQUUsS0FSRjtBQVNMUixtQkFBUyxFQUFFO0FBVE4sU0FEVDtBQUFBLGlEQWFlO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFpQkU7QUFDRSxhQUFLLEVBQUU7QUFDTFMsbUJBQVMsRUFBRSxxQkFETjtBQUVMQyxvQkFBVSxFQUFFLHFCQUZQO0FBR0xDLGdCQUFNLEVBQUUsaUJBSEg7QUFJTEgsZUFBSyxFQUFFLE9BSkY7QUFLTEksZ0JBQU0sRUFBRSxPQUxIO0FBTUxDLHNCQUFZLEVBQUUsTUFOVDtBQU9MQyxrQkFBUSxFQUFFLFFBUEw7QUFRTEMsZ0JBQU0sRUFBRTtBQVJILFNBRFQ7QUFBQSwrQkFZRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBQyxpQkFETjtBQUVFLGFBQUcsRUFBQyxzQkFGTjtBQUdFLGVBQUssRUFBQyxPQUhSO0FBSUUsZ0JBQU0sRUFBQztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBc0NFLDhEQUFDLDJEQUFEO0FBQVksVUFBSSxFQUFFakIsSUFBSSxJQUFJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Q0YsZUF1Q0UsOERBQUMseURBQUQ7QUFBVSxVQUFJLEVBQUVBLElBQUksSUFBSTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNGLGVBd0NFO0FBQUssV0FBSyxFQUFFO0FBQUVRLG9CQUFZLEVBQUU7QUFBaEIsT0FBWjtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQVksWUFBSSxFQUFFUixJQUFJLElBQUk7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q0YsZUEyQ0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRCxDOzs7Ozs7Ozs7OztBQ2hFRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmNvbnN0IE1haW5JbWFnZVN0eWxlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgIDxNYWluSW1hZ2VTdHlsZT5cclxuICAgICAgICA8aDFcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAyNDg2MycsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnM2VtJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMzAlJyxcclxuICAgICAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQnV5IGFuZCBTZWxsIDxiciAvPlxyXG4gICAgICAgICAgTmV3IGFuZCBVc2VkIEJhYnl3ZWFyXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgNXB4IDNweCAjZWVlZWVlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4wMiknLFxyXG4gICAgICAgICAgICBib3JkZXI6ICc1cHggc29saWQgd2hpdGUnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzkwMHB4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNjAwcHgnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2J1YmJhLW1haW4uanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiSW5kaWUgQnViYmEgQ3Jhd2xpbmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjkwMHB4XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNjAwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NYWluSW1hZ2VTdHlsZT5cclxuICAgICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZSB8fCAxfSAvPlxyXG4gICAgICA8UHJvZHVjdHMgcGFnZT17cGFnZSB8fCAxfSAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzU1cHgnIH19PlxyXG4gICAgICAgIDxQYWdpbmF0aW9uIHBhZ2U9e3BhZ2UgfHwgMX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=