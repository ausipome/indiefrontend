exports.id = "components_ErrorMessage_js-components_Footer_js-components_LoadBar_js-components_User_js-comp-c40948";
exports.ids = ["components_ErrorMessage_js-components_Footer_js-components_LoadBar_js-components_User_js-comp-c40948"];
exports.modules = {

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\ErrorMessage.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-ujoyi4-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), error.message.replace('GraphQL error: ', '')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), error.message.replace('GraphQL error: ', '')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Footer.js";


const BottomNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Footer__BottomNav",
  componentId: "sc-1ffyurv-0"
})(["background-color:#ffffff;text-align:center;width:100%;border-top:solid thin #000000;position:fixed;bottom:0px;left:0px;font-size:0.7em;padding-top:7px;@media (min-width:480px){font-size:1.2em;}"]);
function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomNav, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://indiebubba.com",
      style: {
        color: 'pink',
        verticalAlign: 'middle',
        marginRight: '10px'
      },
      children: "indiebubba.com \xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      target: "_blank",
      href: "https://instagram.com/indiebubba",
      rel: "noreferrer",
      style: {
        marginRight: '10px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/icons8-instagram-40.png",
        alt: "Indie Bubba Instagram",
        width: "40",
        height: "40"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      target: "_blank",
      href: "https://facebook.com/indiebubba",
      rel: "noreferrer",
      style: {
        marginLeft: '10px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/icons8-facebook-64.png",
        alt: "Indie Bubba Facebook",
        width: "40",
        height: "40"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "mailto:hello@indiebubba.com",
      style: {
        color: 'pink',
        marginLeft: '10px'
      },
      children: "\xA0 hello@indiebubba.com"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#.com",
      style: {
        padding: '0',
        margin: '0',
        color: 'pink',
        fontSize: '0.8em',
        right: '7px',
        position: 'absolute'
      },
      children: "\xA9 TMI Trading Co LTD"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/LoadBar.js":
/*!*******************************!*\
  !*** ./components/LoadBar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\LoadBar.js";

const loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const LoadStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LoadBar__LoadStyle",
  componentId: "sc-ijybhl-0"
})(["border:0;padding:0;width:100%;height:12px;&[disabled]{opacity:0.5;}&::before{height:5px;content:'';display:block;background-image:linear-gradient(to right,#0077a0 0%,#fde6ff 80%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}"], loading);
function LoadBar({
  load
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadStyle, {
    disabled: load,
    "aria-busy": load,
    children: "\xA0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_USER_QUERY": function() { return /* binding */ CURRENT_USER_QUERY; },
/* harmony export */   "useUser": function() { return /* binding */ useUser; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        stripeId
        confirmed
        address
        address2
        town
        county
        postcode
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "Form",
  componentId: "sc-4afq1o-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;color:#015268;label{display:block;margin-bottom:1rem;}input,textarea,select{font-family:Arial,--apple-system;width:100%;padding:0.5rem;font-size:1.4rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:#fde6ff;color:#015268;border:thin solid #000000;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#0077a0 0%,#fde6ff 80%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  // create state for inputs
  const {
    0: inputs,
    1: setInputs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
  const initialValues = Object.values(initial).join('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL0xvYWRCYXIuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsiRXJyb3JTdHlsZXMiLCJzdHlsZWQiLCJEaXNwbGF5RXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJuZXR3b3JrRXJyb3IiLCJyZXN1bHQiLCJlcnJvcnMiLCJsZW5ndGgiLCJtYXAiLCJpIiwicmVwbGFjZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIkJvdHRvbU5hdiIsIkZvb3RlciIsImNvbG9yIiwidmVydGljYWxBbGlnbiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJtYXJnaW4iLCJmb250U2l6ZSIsInJpZ2h0IiwicG9zaXRpb24iLCJsb2FkaW5nIiwia2V5ZnJhbWVzIiwiTG9hZFN0eWxlIiwiTG9hZEJhciIsImxvYWQiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJncWwiLCJ1c2VVc2VyIiwiZGF0YSIsInVzZVF1ZXJ5IiwiYXV0aGVudGljYXRlZEl0ZW0iLCJGb3JtIiwidXNlRm9ybSIsImluaXRpYWwiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJ0YXJnZXQiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsc0tBQWpCOztBQWVBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ2xDLE1BQUksQ0FBQ0EsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0MsT0FBckIsRUFBOEIsT0FBTyxJQUFQOztBQUM5QixNQUNFRCxLQUFLLENBQUNFLFlBQU4sSUFDQUYsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxNQURuQixJQUVBSCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUExQixDQUFpQ0MsTUFIbkMsRUFJRTtBQUNBLFdBQU9MLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQTFCLENBQWlDRSxHQUFqQyxDQUFxQyxDQUFDTixLQUFELEVBQVFPLENBQVIsa0JBQzFDLDhEQUFDLFdBQUQ7QUFBQSw2QkFDRTtBQUFHLHFCQUFVLGVBQWI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHUCxLQUFLLENBQUNDLE9BQU4sQ0FBY08sT0FBZCxDQUFzQixpQkFBdEIsRUFBeUMsRUFBekMsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFrQkQsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxDQUFQO0FBUUQ7O0FBQ0Qsc0JBQ0UsOERBQUMsV0FBRDtBQUFBLDJCQUNFO0FBQUcsbUJBQVUsZUFBYjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1C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LENBQUNKLEtBQUQsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJRSxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQixPQUFDRixLQUFELElBQVVELENBQUMsQ0FBQ0ksTUFBRixDQUFTRSxLQUFuQjtBQUNEOztBQUNEZCxhQUFTLGlDQUNKRCxNQURJO0FBRVAsT0FBQ1csSUFBRCxHQUFRRDtBQUZELE9BQVQ7QUFJRDs7QUFFRCxXQUFTTSxTQUFULEdBQXFCO0FBQ25CZixhQUFTLENBQUNGLE9BQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNrQixTQUFULEdBQXFCO0FBQ25CLFVBQU1DLFVBQVUsR0FBR2QsTUFBTSxDQUFDZSxXQUFQLENBQ2pCZixNQUFNLENBQUNnQixPQUFQLENBQWVwQixNQUFmLEVBQXVCaEMsR0FBdkIsQ0FBMkIsQ0FBQyxDQUFDcUQsR0FBRCxFQUFNWCxLQUFOLENBQUQsS0FBa0IsQ0FBQ1csR0FBRCxFQUFNLEVBQU4sQ0FBN0MsQ0FEaUIsQ0FBbkI7QUFHQXBCLGFBQVMsQ0FBQ2lCLFVBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU87QUFDTGxCLFVBREs7QUFFTFEsZ0JBRks7QUFHTFEsYUFISztBQUlMQztBQUpLLEdBQVA7QUFNRCxDIiwiZmlsZSI6ImNvbXBvbmVudHNfRXJyb3JNZXNzYWdlX2pzLWNvbXBvbmVudHNfRm9vdGVyX2pzLWNvbXBvbmVudHNfTG9hZEJhcl9qcy1jb21wb25lbnRzX1VzZXJfanMtY29tcC1jNDA5NDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEVycm9yU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiAgc3Ryb25nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IERpc3BsYXlFcnJvciA9ICh7IGVycm9yIH0pID0+IHtcbiAgaWYgKCFlcnJvciB8fCAhZXJyb3IubWVzc2FnZSkgcmV0dXJuIG51bGw7XG4gIGlmIChcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IgJiZcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmXG4gICAgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoXG4gICkge1xuICAgIHJldHVybiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICA8RXJyb3JTdHlsZXMga2V5PXtpfT5cbiAgICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxuICAgICAgICA8L3A+XG4gICAgICA8L0Vycm9yU3R5bGVzPlxuICAgICkpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVycm9yU3R5bGVzPlxuICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxuICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICA8L3A+XG4gICAgPC9FcnJvclN0eWxlcz5cbiAgKTtcbn07XG5cbkRpc3BsYXlFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiB7fSxcbn07XG5cbkRpc3BsYXlFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUVycm9yO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IEJvdHRvbU5hdiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgdGhpbiAjMDAwMDAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3R0b21OYXY+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vaW5kaWVidWJiYS5jb21cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjb2xvcjogJ3BpbmsnLFxyXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBpbmRpZWJ1YmJhLmNvbSAmbmJzcDtcclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9pbmRpZWJ1YmJhXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvaWNvbnM4LWluc3RhZ3JhbS00MC5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSW5kaWUgQnViYmEgSW5zdGFncmFtXCJcclxuICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxhXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vaW5kaWVidWJiYVwiXHJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvaWNvbnM4LWZhY2Vib29rLTY0LnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJJbmRpZSBCdWJiYSBGYWNlYm9va1wiXHJcbiAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIm1haWx0bzpoZWxsb0BpbmRpZWJ1YmJhLmNvbVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiAncGluaycsXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICZuYnNwOyBoZWxsb0BpbmRpZWJ1YmJhLmNvbVxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCIjLmNvbVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgIG1hcmdpbjogJzAnLFxyXG4gICAgICAgICAgY29sb3I6ICdwaW5rJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAnMC44ZW0nLFxyXG4gICAgICAgICAgcmlnaHQ6ICc3cHgnLFxyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgICZjb3B5OyBUTUkgVHJhZGluZyBDbyBMVERcclxuICAgICAgPC9hPlxyXG4gICAgPC9Cb3R0b21OYXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAvKiByb3RhdGU6IDA7ICovXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgICAvKiByb3RhdGU6IDM2MGRlZzsgKi9cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2FkU3R5bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTJweDtcclxuICAmW2Rpc2FibGVkXSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDc3YTAgMCUsICNmZGU2ZmYgODAlKTtcclxuICB9XHJcbiAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIGF1dG87XHJcbiAgICBhbmltYXRpb246ICR7bG9hZGluZ30gMC41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZEJhcih7IGxvYWQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZFN0eWxlIGRpc2FibGVkPXtsb2FkfSBhcmlhLWJ1c3k9e2xvYWR9PlxyXG4gICAgICAmbmJzcDtcclxuICAgIDwvTG9hZFN0eWxlPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgYXV0aGVudGljYXRlZEl0ZW0ge1xyXG4gICAgICAuLi4gb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBzdHJpcGVJZFxyXG4gICAgICAgIGNvbmZpcm1lZFxyXG4gICAgICAgIGFkZHJlc3NcclxuICAgICAgICBhZGRyZXNzMlxyXG4gICAgICAgIHRvd25cclxuICAgICAgICBjb3VudHlcclxuICAgICAgICBwb3N0Y29kZVxyXG4gICAgICAgIGNhcnQge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHF1YW50aXR5XHJcbiAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBwaG90byB7XHJcbiAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENVUlJFTlRfVVNFUl9RVUVSWSk7XHJcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBsb2FkaW5nID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgLyogcm90YXRlOiAwOyAqL1xuICB9XG5cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICAvKiByb3RhdGU6IDM2MGRlZzsgKi9cbiAgfVxuYDtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDE1MjY4O1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCAtLWFwcGxlLXN5c3RlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZGU2ZmY7XG4gICAgY29sb3I6ICMwMTUyNjg7XG4gICAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgfVxuICBmaWVsZHNldCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA3N2EwIDAlLCAjZmRlNmZmIDgwJSk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xyXG4gIC8vIGNyZWF0ZSBzdGF0ZSBmb3IgaW5wdXRzXHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGluaXRpYWwpLmpvaW4oJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH0sIFtpbml0aWFsVmFsdWVzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgIFt2YWx1ZV0gPSBlLnRhcmdldC5maWxlcztcclxuICAgIH1cclxuICAgIHNldElucHV0cyh7XHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgJyddKVxyXG4gICAgKTtcclxuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dHMsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICByZXNldEZvcm0sXHJcbiAgICBjbGVhckZvcm0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9