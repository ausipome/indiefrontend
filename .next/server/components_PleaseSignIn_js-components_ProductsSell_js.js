exports.id = "components_PleaseSignIn_js-components_ProductsSell_js";
exports.ids = ["components_PleaseSignIn_js-components_ProductsSell_js"];
exports.modules = {

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pleaseSignIn; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn.js");
/* harmony import */ var _RequestReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestReset */ "./components/RequestReset.js");


var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\PleaseSignIn.js";




function pleaseSignIn({
  children
}) {
  const {
    0: sign,
    1: setSign
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: forgot,
    1: setForgot
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const signHandler = () => {
    setSign(true);
    setForgot(false);
  };

  const forgotHandler = () => {
    setSign(false);
    setForgot(true);
  };

  const me = (0,_User__WEBPACK_IMPORTED_MODULE_2__.useUser)();
  if (!me) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [sign && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
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
        lineNumber: 25,
        columnNumber: 13
      }, this)]
    }, void 0, true), forgot && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RequestReset__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
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
        lineNumber: 37,
        columnNumber: 13
      }, this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }, this);
  return children;
}

/***/ }),

/***/ "./components/ProductsSell.js":
/*!************************************!*\
  !*** ./components/ProductsSell.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY_SELL": function() { return /* binding */ ALL_PRODUCTS_QUERY_SELL; },
/* harmony export */   "default": function() { return /* binding */ ProductsSell; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\ProductsSell.js";





const ALL_PRODUCTS_QUERY_SELL = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY_SELL($thisUserId: ID) {
    products(where: { user: { id: { equals: $thisUserId } } }) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
const ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ProductsSell__ProductsListStyles",
  componentId: "sc-1kfr1sr-0"
})(["margin:0 auto;width:90%;display:grid;column-gap:25px;row-gap:25px;@media (min-width:600px){column-gap:10%;row-gap:2%;grid-template-columns:40% 40%;margin-bottom:200px;}@media (min-width:900px){margin-top:2%;width:70%;column-gap:7%;row-gap:2%;grid-template-columns:28% 28% 28%;}"]);
function ProductsSell() {
  const theUser = (0,_User__WEBPACK_IMPORTED_MODULE_5__.useUser)();
  const theId = theUser === null || theUser === void 0 ? void 0 : theUser.id;
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY_SELL, {
    variables: {
      thisUserId: theId
    }
  });
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [data.products.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      style: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'normal'
      },
      children: "You have no products for sale!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), data.products.length != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderTop: 'solid thin #015268',
        borderBottom: 'solid thin #015268',
        marginTop: '3rem',
        marginBottom: '3rem'
      },
      children: "I'm Selling"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {
      children: data.products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {
        product: product,
        pageType: "sell"
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUGxlYXNlU2lnbkluLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0c1NlbGwuanMiXSwibmFtZXMiOlsicGxlYXNlU2lnbkluIiwiY2hpbGRyZW4iLCJzaWduIiwic2V0U2lnbiIsInVzZVN0YXRlIiwiZm9yZ290Iiwic2V0Rm9yZ290Iiwic2lnbkhhbmRsZXIiLCJmb3Jnb3RIYW5kbGVyIiwibWUiLCJ1c2VVc2VyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJBTExfUFJPRFVDVFNfUVVFUllfU0VMTCIsImdxbCIsIlByb2R1Y3RzTGlzdFN0eWxlcyIsInN0eWxlZCIsIlByb2R1Y3RzU2VsbCIsInRoZVVzZXIiLCJ0aGVJZCIsImlkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwidGhpc1VzZXJJZCIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsImxlbmd0aCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBb0M7QUFDakQsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLCtDQUFRLENBQUMsS0FBRCxDQUFwQzs7QUFDQSxRQUFNRyxXQUFXLEdBQUcsTUFBTTtBQUN4QkosV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRyxhQUFT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QUFEO0FBQTBCLGVBQU8sRUFBRUEsT0FBbkM7QUFBNEMsZ0JBQVEsRUFBQztBQUFyRCxTQUFjQSxPQUFPLENBQUNqQixFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkJELEMiLCJmaWxlIjoiY29tcG9uZW50c19QbGVhc2VTaWduSW5fanMtY29tcG9uZW50c19Qcm9kdWN0c1NlbGxfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9TaWduSW4nO1xyXG5pbXBvcnQgUmVxdWVzdFJlc2V0IGZyb20gJy4vUmVxdWVzdFJlc2V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsZWFzZVNpZ25Jbih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc2lnbiwgc2V0U2lnbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZm9yZ290LCBzZXRGb3Jnb3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNpZ25IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnbih0cnVlKTtcclxuICAgIHNldEZvcmdvdChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBmb3Jnb3RIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnbihmYWxzZSk7XHJcbiAgICBzZXRGb3Jnb3QodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgaWYgKCFtZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3NpZ24gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNpZ25JbiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Zm9yZ290SGFuZGxlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGNvbG9yOiAncmVkJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkISDwn5mDXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Zm9yZ290ICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSZXF1ZXN0UmVzZXQgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgY29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYWNrIHRvIFNpZ24gSW4hIPCfkYhcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWV9TRUxMID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWV9TRUxMKCR0aGlzVXNlcklkOiBJRCkge1xyXG4gICAgcHJvZHVjdHMod2hlcmU6IHsgdXNlcjogeyBpZDogeyBlcXVhbHM6ICR0aGlzVXNlcklkIH0gfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcHJpY2VcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG4gIHJvdy1nYXA6IDI1cHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XHJcbiAgICByb3ctZ2FwOiAyJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGNvbHVtbi1nYXA6IDclO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAyOCUgMjglO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzU2VsbCgpIHtcclxuICBjb25zdCB0aGVVc2VyID0gdXNlVXNlcigpO1xyXG5cclxuICBjb25zdCB0aGVJZCA9IHRoZVVzZXI/LmlkO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWV9TRUxMLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdGhpc1VzZXJJZDogdGhlSWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkYXRhLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICBZb3UgaGF2ZSBubyBwcm9kdWN0cyBmb3Igc2FsZSFcclxuICAgICAgICA8L2gzPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5wcm9kdWN0cy5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnM3JlbScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEknbSBTZWxsaW5nXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgKX1cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gcGFnZVR5cGU9XCJzZWxsXCIgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=