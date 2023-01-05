module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-ujoyi4-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
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
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Footer.js";


const BottomNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__BottomNav",
  componentId: "sc-1ffyurv-0"
})(["background-color:#ffffff;text-align:center;width:100%;border-top:solid thin #000000;position:fixed;bottom:0px;left:0px;font-size:0.7em;padding-top:7px;@media (min-width:480px){font-size:1.2em;}"]);
function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BottomNav, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      target: "_blank",
      href: "https://instagram.com/indiebubba",
      rel: "noreferrer",
      style: {
        marginRight: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      target: "_blank",
      href: "https://facebook.com/indiebubba",
      rel: "noreferrer",
      style: {
        marginLeft: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\LoadBar.js";

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const LoadStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LoadBar__LoadStyle",
  componentId: "sc-ijybhl-0"
})(["border:0;padding:0;width:100%;height:12px;&[disabled]{opacity:0.5;}&::before{height:5px;content:'';display:block;background-image:linear-gradient(to right,#0077a0 0%,#fde6ff 80%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}"], loading);
function LoadBar({
  load
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LoadStyle, {
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

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pleaseSignIn; });
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: forgot,
    1: setForgot
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const signHandler = () => {
    setSign(true);
    setForgot(false);
  };

  const forgotHandler = () => {
    setSign(false);
    setForgot(true);
  };

  const me = Object(_User__WEBPACK_IMPORTED_MODULE_2__["useUser"])();
  if (!me) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [sign && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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
    }, void 0, true), forgot && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RequestReset__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestReset; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\RequestReset.js";





const REQUEST_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;
function RequestReset() {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    email: ''
  });
  const [signup, {
    data,
    loading,
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(REQUEST_RESET_MUTATION, {
    variables: inputs
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    const res = await signup().catch(console.error);
    resetForm(); // Send the email and password to the graphqlAPI
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    style: {
      marginBottom: '75px',
      marginTop: '25px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Request a Password Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          color: 'red',
          fontWeight: 'normal'
        },
        children: "Success! Check your email for a link!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");


var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\SignIn.js";







const SIGN_OUT_MUTATION_NEXT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation {
    endSession
  }
`;
const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          confirmed
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
function SignIn() {
  const {
    0: signState,
    1: setSignState
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const user = Object(_User__WEBPACK_IMPORTED_MODULE_6__["useUser"])();
  const [signout] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(SIGN_OUT_MUTATION_NEXT, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]
    }]
  });
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])({
    email: '',
    password: ''
  });
  const [signin, {
    data,
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(SIGNIN_MUTATION, {
    variables: inputs,

    async onCompleted(data) {
      var _data$authenticateUse, _data$authenticateUse2;

      const emailCheck = data === null || data === void 0 ? void 0 : (_data$authenticateUse = data.authenticateUserWithPassword) === null || _data$authenticateUse === void 0 ? void 0 : (_data$authenticateUse2 = _data$authenticateUse.item) === null || _data$authenticateUse2 === void 0 ? void 0 : _data$authenticateUse2.confirmed;

      if (emailCheck === 'no') {
        signout();
        document.getElementById('logMessage').innerHTML = 'Please confirm your email address to continue to use all of Indie Bubba’s features! ';
      }
    }

  });
  const error = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === 'UserAuthenticationWithPasswordFailure' ? data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword : undefined;

  async function handleSubmit(e) {
    var _res$data, _res$data$authenticat, _res$data$authenticat2;

    document.getElementById('logMessage').innerHTML = '';
    e.preventDefault(); // stop the form from submitting

    const res = await signin();

    if (((_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$authenticat = _res$data.authenticateUserWithPassword) === null || _res$data$authenticat === void 0 ? void 0 : (_res$data$authenticat2 = _res$data$authenticat.item) === null || _res$data$authenticat2 === void 0 ? void 0 : _res$data$authenticat2.confirmed) === 'yes') {
      setSignState(true);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [signState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], {
      children: client => {
        client.refetchQueries({
          include: [_User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]]
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      method: "POST",
      onSubmit: handleSubmit,
      children: [user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        style: {
          color: 'red',
          textAlign: 'center',
          fontWeight: 'normal'
        },
        children: ["Welcome back ", user.name, " \uD83D\uDE0A"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Login to Your Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        style: {
          color: 'red',
          textAlign: 'center',
          fontWeight: 'normal'
        },
        id: "logMessage"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        error: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            name: "email",
            placeholder: "Your Email Address",
            autoComplete: "email",
            value: inputs.email,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            name: "password",
            placeholder: "Password",
            autoComplete: "off",
            value: inputs.password,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/StripeAccount.js":
/*!*************************************!*\
  !*** ./components/StripeAccount.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StripeAccount; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadBar */ "./components/LoadBar.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\StripeAccount.js";




const AccountStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "StripeAccount__AccountStyles",
  componentId: "sc-1adi3du-0"
})(["@media (min-width:900px){width:80%;margin:0 auto;}"]);
const StripeAccStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "StripeAccount__StripeAccStyles",
  componentId: "sc-1adi3du-1"
})(["font-size:1.3em;line-height:1.5;color:black;border:thin solid #eee;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);text-align:center;padding:20px;margin-bottom:50px;@media (min-width:900px){width:60%;margin:0 auto;margin-bottom:50px;}"]);
function StripeAccount() {
  const theUser = Object(_User__WEBPACK_IMPORTED_MODULE_2__["useUser"])();
  const theName = theUser === null || theUser === void 0 ? void 0 : theUser.name;
  const theEmail = theUser === null || theUser === void 0 ? void 0 : theUser.email;
  const acc = theUser === null || theUser === void 0 ? void 0 : theUser.stripeId;
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: futureRequirements,
    1: setFutureRequirements
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: dataBalance,
    1: setDataBalance
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: dataLink,
    1: setDataLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: dataPayout,
    1: setDataPayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: payoutNum,
    1: setPayoutNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    fetch(`/api/stripe/${acc}`).then(res => res.json()).then(data => {
      setData(data.account.details_submitted);
      setFutureRequirements(data.account.requirements.eventually_due);
    }).then(fetch(`/api/balance/${acc}`).then(res => res.json()).then(dataBalance => {
      setDataBalance((dataBalance.pendingBalance.available[0].amount / 100).toFixed(2));
    })).then(fetch(`/api/payout/${acc}`).then(res => res.json()).then(dataPayout => {
      setDataPayout(dataPayout.payouts.data);
      setPayoutNum(dataPayout.payouts.data.length);
    })).then(fetch(`/api/link/${acc}`).then(res => res.json()).then(dataLink => {
      setDataLink(dataLink.accountLink.url);
      setLoading(false);
    }));
  }, []);
  if (isLoading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoadBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    load: isLoading
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 27
  }, this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AccountStyles, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        fontWeight: 'normal',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 158
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textAlign: 'center',
        color: 'red',
        fontSize: '1.2em'
      },
      children: "Do you plan on selling on Indie Bubba? If yes, we need some more information from you!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'black',
        padding: '25px',
        marginBottom: '0px'
      },
      children: ["If you are currently selling, or plan to sell on Indie Bubba, please follow the link below to update KYC verification ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 125
      }, this), " and add the bank account you would like your funds paid in to."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        marginBottom: '40px',
        marginTop: '0px',
        paddingBottom: '20px',
        borderBottom: 'solid thin #000'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: dataLink,
        style: {
          color: 'green',
          marginTop: '0px'
        },
        children: "Update Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 145
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StripeAccStyles, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: 'green'
          },
          children: ["\xA3", dataBalance]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 53
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.8em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          borderBottom: 'solid thin #000000',
          paddingBottom: '20px'
        },
        children: "Funds are paid out automatically into your bank account at the end of each working day!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          fontWeight: 'normal',
          marginBottom: '0px',
          color: '#015268'
        },
        children: "Recent Payouts to Bank"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              rowSpan: "3",
              style: {
                color: 'red',
                fontStyle: 'italic'
              },
              children: "There are no recent payouts!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 31
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 27
          }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 154
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 169
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Expected"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 178
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 150
          }, this), dataPayout === null || dataPayout === void 0 ? void 0 : dataPayout.map((payout, i) => {
            let ARdate = new Date(payout.arrival_date * 1000);
            ARdate = ARdate.toDateString();
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ARdate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 11
              }, this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 9
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.6em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          paddingBottom: '20px'
        },
        children: "Expected is an estimation, initial payouts may take longer!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
  if (data && futureRequirements.length > 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AccountStyles, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        fontWeight: 'normal',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 162
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textAlign: 'center',
        color: 'red',
        fontSize: '1.2em'
      },
      children: "We need a little more information from you! Bank payouts may be suspended if your account is not kept up to date."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'black',
        padding: '25px',
        marginBottom: '0px'
      },
      children: ["Please follow the link below to update KYC verification. ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 68
      }, this), " Thank you!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        marginBottom: '40px',
        marginTop: '0px',
        paddingBottom: '20px',
        borderBottom: 'solid thin #000'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: dataLink,
        style: {
          color: 'green',
          marginTop: '0px'
        },
        children: "Update Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 149
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StripeAccStyles, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: 'green'
          },
          children: ["\xA3", dataBalance]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 57
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.8em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          borderBottom: 'solid thin #000000',
          paddingBottom: '20px'
        },
        children: "Funds are paid out automatically into your bank account at the end of each working day!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          fontWeight: 'normal',
          marginBottom: '0px',
          color: '#015268'
        },
        children: "Recent Payouts to Bank"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              rowSpan: "3",
              style: {
                color: 'red',
                fontStyle: 'italic'
              },
              children: "There are no recent payouts!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 35
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 31
          }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 158
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 173
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Expected"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 182
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 154
          }, this), dataPayout === null || dataPayout === void 0 ? void 0 : dataPayout.map((payout, i) => {
            let ARdate = new Date(payout.arrival_date * 1000);
            ARdate = ARdate.toDateString();
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ARdate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 15
              }, this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 13
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.6em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          paddingBottom: '20px'
        },
        children: "Expected is an estimation, initial payouts may take longer!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 7
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AccountStyles, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 144
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StripeAccStyles, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: 'green'
          },
          children: ["\xA3", dataBalance]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 61
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.6em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          borderBottom: 'solid thin #000000',
          paddingBottom: '20px'
        },
        children: "Funds are paid out automatically into your bank account at the end of each working day!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          fontWeight: 'normal',
          marginBottom: '0px',
          color: '#015268'
        },
        children: "Recent Payouts to Bank"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              rowSpan: "3",
              style: {
                color: 'red',
                fontStyle: 'italic'
              },
              children: "There are no recent payouts!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 37
          }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 164
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 179
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Expected"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 188
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 160
          }, this), dataPayout === null || dataPayout === void 0 ? void 0 : dataPayout.map((payout, i) => {
            let ARdate = new Date(payout.arrival_date * 1000);
            ARdate = ARdate.toDateString();
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ARdate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 17
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.6em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          paddingBottom: '20px'
        },
        children: "Expected is an estimation, initial payouts may take longer!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 9
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AccountStyles, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 142
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StripeAccStyles, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            color: 'green'
          },
          children: ["\xA3", dataBalance]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 59
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.6em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          borderBottom: 'solid thin #000000',
          paddingBottom: '20px'
        },
        children: "Funds are paid out automatically into your bank account at the end of each working day!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          fontWeight: 'normal',
          marginBottom: '0px',
          color: '#015268'
        },
        children: "Recent Payouts to Bank"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              rowSpan: "3",
              style: {
                color: 'red',
                fontStyle: 'italic'
              },
              children: "There are no recent payouts!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 39
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 35
          }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 162
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 177
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: "Expected"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 186
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 158
          }, this), dataPayout === null || dataPayout === void 0 ? void 0 : dataPayout.map((payout, i) => {
            let ARdate = new Date(payout.arrival_date * 1000);
            ARdate = ARdate.toDateString();
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: ARdate
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 11
      }, this), payoutNum != 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: '0.6em',
          fontStyle: 'italic',
          marginTop: '0px',
          color: 'grey',
          paddingBottom: '20px'
        },
        children: "Expected is an estimation, initial payouts may take longer!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 27
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/UpdateUser.js":
/*!**********************************!*\
  !*** ./components/UpdateUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateUser; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\UpdateUser.js";






const UPDATE_USER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $address: String
    $town: String
    $county: String
    $postcode: String
  ) {
    updateUser(
      where: { id: $id }
      data: {
        address: $address
        town: $town
        county: $county
        postcode: $postcode
      }
    ) {
      id
      address
      town
      county
      postcode
    }
  }
`;
function UpdateUser() {
  const theUser = Object(_User__WEBPACK_IMPORTED_MODULE_6__["useUser"])();
  const id = theUser === null || theUser === void 0 ? void 0 : theUser.id;
  console.log(id);
  const [updateUser, {
    data,
    error,
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(UPDATE_USER_MUTATION);
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    address: theUser === null || theUser === void 0 ? void 0 : theUser.address,
    town: theUser === null || theUser === void 0 ? void 0 : theUser.town,
    county: theUser === null || theUser === void 0 ? void 0 : theUser.county,
    postcode: theUser === null || theUser === void 0 ? void 0 : theUser.postcode
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSubmit: async e => {
        document.getElementById('updateMessage').innerHTML = '';
        e.preventDefault();
        const res = await updateUser({
          variables: {
            id,
            address: inputs.address,
            town: inputs.town,
            county: inputs.county,
            postcode: inputs.postcode
          }
        });

        if (res) {
          document.getElementById('updateMessage').innerHTML = 'Updated!';
        }
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Postal Address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        id: "updateMessage",
        style: {
          fontWeight: 'normal',
          color: 'red'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        error: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: ["Address", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "address",
            name: "address",
            placeholder: "Address",
            value: inputs.address,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "town",
          children: ["Town", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "town",
            name: "town",
            placeholder: "Town",
            value: inputs.town,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "county",
          children: ["County", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "county",
            name: "county",
            placeholder: "County",
            value: inputs.county,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "postcode",
          children: ["Postcode", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "postcode",
            name: "postcode",
            placeholder: "Postcode",
            value: inputs.postcode,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "Update Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: CURRENT_USER_QUERY, useUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
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
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-4afq1o-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;color:#015268;label{display:block;margin-bottom:1rem;}input,textarea,select{font-family:Arial,--apple-system;width:100%;padding:0.5rem;font-size:1.4rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:#fde6ff;color:#015268;border:thin solid #000000;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#0077a0 0%,#fde6ff 80%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial);
  const initialValues = Object.values(initial).join('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains,
  enableBlurryPlaceholder: configEnableBlurryPlaceholder
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[],"enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = () => {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  const MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  const tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  const shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
/* harmony import */ var _components_UpdateUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UpdateUser */ "./components/UpdateUser.js");
/* harmony import */ var _components_StripeAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StripeAccount */ "./components/StripeAccount.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\pages\\account.js";





function AccountPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StripeAccount__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateUser__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestReset__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGVhc2VTaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdHJpcGVBY2NvdW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXBkYXRlVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJFcnJvclN0eWxlcyIsInN0eWxlZCIsImRpdiIsIkRpc3BsYXlFcnJvciIsImVycm9yIiwibWVzc2FnZSIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsImVycm9ycyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiQm90dG9tTmF2IiwiRm9vdGVyIiwiY29sb3IiLCJ2ZXJ0aWNhbEFsaWduIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIm1hcmdpbiIsImZvbnRTaXplIiwicmlnaHQiLCJwb3NpdGlvbiIsImxvYWRpbmciLCJrZXlmcmFtZXMiLCJMb2FkU3R5bGUiLCJMb2FkQmFyIiwibG9hZCIsInBsZWFzZVNpZ25JbiIsImNoaWxkcmVuIiwic2lnbiIsInNldFNpZ24iLCJ1c2VTdGF0ZSIsImZvcmdvdCIsInNldEZvcmdvdCIsInNpZ25IYW5kbGVyIiwiZm9yZ290SGFuZGxlciIsIm1lIiwidXNlVXNlciIsImJhY2tncm91bmRDb2xvciIsIlJFUVVFU1RfUkVTRVRfTVVUQVRJT04iLCJncWwiLCJSZXF1ZXN0UmVzZXQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJ1c2VGb3JtIiwiZW1haWwiLCJzaWdudXAiLCJkYXRhIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJjYXRjaCIsImNvbnNvbGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rIiwiZm9udFdlaWdodCIsIlNJR05fT1VUX01VVEFUSU9OX05FWFQiLCJTSUdOSU5fTVVUQVRJT04iLCJTaWduSW4iLCJzaWduU3RhdGUiLCJzZXRTaWduU3RhdGUiLCJ1c2VyIiwic2lnbm91dCIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJwYXNzd29yZCIsInNpZ25pbiIsIm9uQ29tcGxldGVkIiwiZW1haWxDaGVjayIsImF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQiLCJpdGVtIiwiY29uZmlybWVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIl9fdHlwZW5hbWUiLCJ1bmRlZmluZWQiLCJjbGllbnQiLCJpbmNsdWRlIiwidGV4dEFsaWduIiwibmFtZSIsIkFjY291bnRTdHlsZXMiLCJTdHJpcGVBY2NTdHlsZXMiLCJTdHJpcGVBY2NvdW50IiwidGhlVXNlciIsInRoZU5hbWUiLCJ0aGVFbWFpbCIsImFjYyIsInN0cmlwZUlkIiwic2V0RGF0YSIsImZ1dHVyZVJlcXVpcmVtZW50cyIsInNldEZ1dHVyZVJlcXVpcmVtZW50cyIsImRhdGFCYWxhbmNlIiwic2V0RGF0YUJhbGFuY2UiLCJkYXRhTGluayIsInNldERhdGFMaW5rIiwiZGF0YVBheW91dCIsInNldERhdGFQYXlvdXQiLCJwYXlvdXROdW0iLCJzZXRQYXlvdXROdW0iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlTGF5b3V0RWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImFjY291bnQiLCJkZXRhaWxzX3N1Ym1pdHRlZCIsInJlcXVpcmVtZW50cyIsImV2ZW50dWFsbHlfZHVlIiwicGVuZGluZ0JhbGFuY2UiLCJhdmFpbGFibGUiLCJhbW91bnQiLCJ0b0ZpeGVkIiwicGF5b3V0cyIsImFjY291bnRMaW5rIiwidXJsIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsImxpbmVIZWlnaHQiLCJmb250U3R5bGUiLCJwYXlvdXQiLCJBUmRhdGUiLCJEYXRlIiwiYXJyaXZhbF9kYXRlIiwidG9EYXRlU3RyaW5nIiwiVVBEQVRFX1VTRVJfTVVUQVRJT04iLCJVcGRhdGVVc2VyIiwiaWQiLCJsb2ciLCJ1cGRhdGVVc2VyIiwiY2xlYXJGb3JtIiwiYWRkcmVzcyIsInRvd24iLCJjb3VudHkiLCJwb3N0Y29kZSIsInVzZVF1ZXJ5IiwiYXV0aGVudGljYXRlZEl0ZW0iLCJGb3JtIiwiZm9ybSIsImluaXRpYWwiLCJzZXRJbnB1dHMiLCJpbml0aWFsVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsInVzZUVmZmVjdCIsInZhbHVlIiwidHlwZSIsInRhcmdldCIsInBhcnNlSW50IiwiZmlsZXMiLCJibGFua1N0YXRlIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwia2V5IiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwiZW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXIiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJzaXplcyIsImxheW91dCIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0Iiwic3JjIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJwbGFjZWhvbGRlciIsImVsZW1lbnQiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsIk1JTl9JTUdfU0laRV9GT1JfUExBQ0VIT0xERVIiLCJ0b29TbWFsbEZvckJsdXJyeVBsYWNlaG9sZGVyIiwic2hvdWxkU2hvd0JsdXJyeVBsYWNlaG9sZGVyIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiYm94U2l6aW5nIiwiYm9yZGVyIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImJsdXJEYXRhVVJMIiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInNldFJlZiIsInJlbW92ZVBsYWNlaG9sZGVyIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyeSIsImNhbGxiYWNrIiwiQWNjb3VudFBhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNLLFdBQVQsR0FBdUI7QUFDcEMsc0JBQ0UscUVBQUMsZ0VBQUQ7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCxDOzs7Ozs7Ozs7OztBQ2ZELDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2FjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FjY291bnQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICBzdHJvbmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgRGlzcGxheUVycm9yID0gKHsgZXJyb3IgfSkgPT4ge1xuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcbiAgaWYgKFxuICAgIGVycm9yLm5ldHdvcmtFcnJvciAmJlxuICAgIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiZcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5sZW5ndGhcbiAgKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRXJyb3JTdHlsZXM+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JTdHlsZXM+XG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgIDwvcD5cbiAgICA8L0Vycm9yU3R5bGVzPlxuICApO1xufTtcblxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IHt9LFxufTtcblxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgQm90dG9tTmF2ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wOiBzb2xpZCB0aGluICMwMDAwMDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvdHRvbU5hdj5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9pbmRpZWJ1YmJhLmNvbVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiAncGluaycsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIGluZGllYnViYmEuY29tICZuYnNwO1xyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2luZGllYnViYmFcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9pY29uczgtaW5zdGFncmFtLTQwLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJJbmRpZSBCdWJiYSBJbnN0YWdyYW1cIlxyXG4gICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPGFcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmNvbS9pbmRpZWJ1YmJhXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9pY29uczgtZmFjZWJvb2stNjQucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkluZGllIEJ1YmJhIEZhY2Vib29rXCJcclxuICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwibWFpbHRvOmhlbGxvQGluZGllYnViYmEuY29tXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6ICdwaW5rJyxcclxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgJm5ic3A7IGhlbGxvQGluZGllYnViYmEuY29tXHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIiMuY29tXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgbWFyZ2luOiAnMCcsXHJcbiAgICAgICAgICBjb2xvcjogJ3BpbmsnLFxyXG4gICAgICAgICAgZm9udFNpemU6ICcwLjhlbScsXHJcbiAgICAgICAgICByaWdodDogJzdweCcsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgJmNvcHk7IFRNSSBUcmFkaW5nIENvIExURFxyXG4gICAgICA8L2E+XHJcbiAgICA8L0JvdHRvbU5hdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIC8qIHJvdGF0ZTogMDsgKi9cclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvYWRTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNzdhMCAwJSwgI2ZkZTZmZiA4MCUpO1xyXG4gIH1cclxuICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkQmFyKHsgbG9hZCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkU3R5bGUgZGlzYWJsZWQ9e2xvYWR9IGFyaWEtYnVzeT17bG9hZH0+XHJcbiAgICAgICZuYnNwO1xyXG4gICAgPC9Mb2FkU3R5bGU+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9TaWduSW4nO1xyXG5pbXBvcnQgUmVxdWVzdFJlc2V0IGZyb20gJy4vUmVxdWVzdFJlc2V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsZWFzZVNpZ25Jbih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc2lnbiwgc2V0U2lnbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZm9yZ290LCBzZXRGb3Jnb3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNpZ25IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnbih0cnVlKTtcclxuICAgIHNldEZvcmdvdChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBmb3Jnb3RIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnbihmYWxzZSk7XHJcbiAgICBzZXRGb3Jnb3QodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgaWYgKCFtZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3NpZ24gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNpZ25JbiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Zm9yZ290SGFuZGxlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGNvbG9yOiAncmVkJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkISDwn5mDXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Zm9yZ290ICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSZXF1ZXN0UmVzZXQgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgY29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYWNrIHRvIFNpZ24gSW4hIPCfkYhcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFJFUVVFU1RfUkVTRVRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gUkVRVUVTVF9SRVNFVF9NVVRBVElPTigkZW1haWw6IFN0cmluZyEpIHtcclxuICAgIHNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsoZW1haWw6ICRlbWFpbClcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0UmVzZXQoKSB7XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICB9KTtcclxuICBjb25zdCBbc2lnbnVwLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBSRVFVRVNUX1JFU0VUX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgIH1cclxuICApO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWdudXAoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgLy8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIHRoZSBncmFwaHFsQVBJXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzc1cHgnLCBtYXJnaW5Ub3A6ICcyNXB4JyB9fVxyXG4gICAgPlxyXG4gICAgICA8aDI+UmVxdWVzdCBhIFBhc3N3b3JkIFJlc2V0PC9oMj5cclxuICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxyXG4gICAgICAgIHtkYXRhPy5zZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rID09PSBudWxsICYmIChcclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICAgIFN1Y2Nlc3MhIENoZWNrIHlvdXIgZW1haWwgZm9yIGEgbGluayFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVxdWVzdCBSZXNldDwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSwgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCBTSUdOX09VVF9NVVRBVElPTl9ORVhUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHtcclxuICAgIGVuZFNlc3Npb25cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTSUdOSU5fTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gU0lHTklOX01VVEFUSU9OKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XHJcbiAgICBhdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcclxuICAgICAgLi4uIG9uIFVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZFN1Y2Nlc3Mge1xyXG4gICAgICAgIGl0ZW0ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjb25maXJtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLi4uIG9uIFVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUge1xyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCBbc2lnblN0YXRlLCBzZXRTaWduU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcblxyXG4gIGNvbnN0IFtzaWdub3V0XSA9IHVzZU11dGF0aW9uKFNJR05fT1VUX01VVEFUSU9OX05FWFQsIHtcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzaWduaW4sIHsgZGF0YSwgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFNJR05JTl9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgICBhc3luYyBvbkNvbXBsZXRlZChkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGVtYWlsQ2hlY2sgPSBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkPy5pdGVtPy5jb25maXJtZWQ7XHJcbiAgICAgIGlmIChlbWFpbENoZWNrID09PSAnbm8nKSB7XHJcbiAgICAgICAgc2lnbm91dCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dNZXNzYWdlJykuaW5uZXJIVE1MID1cclxuICAgICAgICAgICdQbGVhc2UgY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gY29udGludWUgdG8gdXNlIGFsbCBvZiBJbmRpZSBCdWJiYeKAmXMgZmVhdHVyZXMhICc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZC5fX3R5cGVuYW1lID09PVxyXG4gICAgJ1VzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUnXHJcbiAgICAgID8gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZFxyXG4gICAgICA6IHVuZGVmaW5lZDtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dNZXNzYWdlJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduaW4oKTtcclxuICAgIGlmIChyZXMuZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZD8uaXRlbT8uY29uZmlybWVkID09PSAneWVzJykge1xyXG4gICAgICBzZXRTaWduU3RhdGUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3NpZ25TdGF0ZSAmJiAoXHJcbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxyXG4gICAgICAgICAgeyhjbGllbnQpID0+IHtcclxuICAgICAgICAgICAgY2xpZW50LnJlZmV0Y2hRdWVyaWVzKHtcclxuICAgICAgICAgICAgICBpbmNsdWRlOiBbQ1VSUkVOVF9VU0VSX1FVRVJZXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBXZWxjb21lIGJhY2sge3VzZXIubmFtZX0g8J+YilxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxoMj5Mb2dpbiB0byBZb3VyIEFjY291bnQ8L2gyPlxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fVxyXG4gICAgICAgICAgaWQ9XCJsb2dNZXNzYWdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExvYWRCYXIgZnJvbSAnLi9Mb2FkQmFyJztcclxuXHJcblxyXG5jb25zdCBBY2NvdW50U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbndpZHRoOjgwJTtcclxubWFyZ2luOjAgYXV0bztcclxufVxyXG5gO1xyXG5jb25zdCBTdHJpcGVBY2NTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNlZWU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG53aWR0aDo2MCU7XHJcbm1hcmdpbjowIGF1dG87XHJcbm1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuICBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RyaXBlQWNjb3VudCgpe1xyXG4gICAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuICAgIGNvbnN0IHRoZU5hbWUgPSB0aGVVc2VyPy5uYW1lO1xyXG4gICAgY29uc3QgdGhlRW1haWwgPSB0aGVVc2VyPy5lbWFpbDtcclxuICAgIGNvbnN0IGFjYyA9IHRoZVVzZXI/LnN0cmlwZUlkO1xyXG4gIFxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZnV0dXJlUmVxdWlyZW1lbnRzLCBzZXRGdXR1cmVSZXF1aXJlbWVudHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZGF0YUJhbGFuY2UsIHNldERhdGFCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RhdGFMaW5rLCBzZXREYXRhTGlua10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkYXRhUGF5b3V0LCBzZXREYXRhUGF5b3V0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3BheW91dE51bSwgc2V0UGF5b3V0TnVtXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBcclxuICAgIHVzZUxheW91dEVmZmVjdCAoKCkgPT4ge1xyXG4gICAgICBmZXRjaChgL2FwaS9zdHJpcGUvJHthY2N9YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXREYXRhKGRhdGEuYWNjb3VudC5kZXRhaWxzX3N1Ym1pdHRlZCk7XHJcbiAgICAgICAgICBzZXRGdXR1cmVSZXF1aXJlbWVudHMoZGF0YS5hY2NvdW50LnJlcXVpcmVtZW50cy5ldmVudHVhbGx5X2R1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIGZldGNoKGAvYXBpL2JhbGFuY2UvJHthY2N9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGFCYWxhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RGF0YUJhbGFuY2UoKGRhdGFCYWxhbmNlLnBlbmRpbmdCYWxhbmNlLmF2YWlsYWJsZS5bMF0uYW1vdW50LzEwMCkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgZmV0Y2goYC9hcGkvcGF5b3V0LyR7YWNjfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhUGF5b3V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RGF0YVBheW91dChkYXRhUGF5b3V0LnBheW91dHMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgc2V0UGF5b3V0TnVtKGRhdGFQYXlvdXQucGF5b3V0cy5kYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgZmV0Y2goYC9hcGkvbGluay8ke2FjY31gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YUxpbmspID0+IHtcclxuICAgICAgICAgICAgICBzZXREYXRhTGluayhkYXRhTGluay5hY2NvdW50TGluay51cmwpO1xyXG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPExvYWRCYXIgbG9hZD17aXNMb2FkaW5nfS8+O1xyXG5cclxuICBpZiAoIWRhdGEpXHJcbiAgICByZXR1cm4oXHJcbiAgICA8QWNjb3VudFN0eWxlcz5cclxuICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDAwJyxwYWRkaW5nQm90dG9tOicxMHB4Jyxmb250V2VpZ2h0Oidub3JtYWwnLG1hcmdpblRvcDonMTJweCcsbGluZUhlaWdodDonMS41ZW0nfX0+e3RoZU5hbWV9IDxiciAvPiB7dGhlRW1haWx9PC9oMj5cclxuICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLGNvbG9yOidyZWQnLGZvbnRTaXplOicxLjJlbSd9fT5cclxuICAgICAgRG8geW91IHBsYW4gb24gc2VsbGluZyBvbiBJbmRpZSBCdWJiYT8gSWYgeWVzLCB3ZSBuZWVkIHNvbWUgbW9yZSBpbmZvcm1hdGlvbiBmcm9tIHlvdSFcclxuICAgIDwvcD5cclxuICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLGZvbnRTaXplOicxLjJlbScsY29sb3I6J2JsYWNrJyxwYWRkaW5nOicyNXB4JyxtYXJnaW5Cb3R0b206JzBweCcsfX0+XHJcbiAgICAgIElmIHlvdSBhcmUgY3VycmVudGx5IHNlbGxpbmcsIG9yIHBsYW4gdG8gc2VsbCBvbiBJbmRpZSBCdWJiYSwgcGxlYXNlIGZvbGxvdyB0aGUgbGluayBiZWxvdyB0byB1cGRhdGUgS1lDIHZlcmlmaWNhdGlvbiA8YnIgLz4gYW5kIGFkZCB0aGUgYmFua1xyXG4gICAgICBhY2NvdW50IHlvdSB3b3VsZCBsaWtlIHlvdXIgZnVuZHMgcGFpZCBpbiB0by48L3A+XHJcbiAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLGZvbnRTaXplOicxLjJlbScsbWFyZ2luQm90dG9tOic0MHB4JyxtYXJnaW5Ub3A6JzBweCcscGFkZGluZ0JvdHRvbTonMjBweCcsYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDAwJ319PjxhIGhyZWY9e2RhdGFMaW5rfSBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyxtYXJnaW5Ub3A6JzBweCd9fT5cclxuICAgICAgICBVcGRhdGUgQWNjb3VudFxyXG4gICAgICA8L2E+XHJcbiAgICA8L3A+XHJcbiAgICA8U3RyaXBlQWNjU3R5bGVzPiBcclxuICAgIDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOicwcHgnfX0+QWNjb3VudCBiYWxhbmNlIDxzcGFuIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319PiZwb3VuZDt7ZGF0YUJhbGFuY2V9PC9zcGFuPjwvcD5cclxuICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzAuOGVtJyxmb250U3R5bGU6J2l0YWxpYycsbWFyZ2luVG9wOicwcHgnLGNvbG9yOidncmV5Jyxib3JkZXJCb3R0b206J3NvbGlkIHRoaW4gIzAwMDAwMCcsIHBhZGRpbmdCb3R0b206JzIwcHgnfX0+RnVuZHMgYXJlIHBhaWQgb3V0IGF1dG9tYXRpY2FsbHkgaW50byB5b3VyIGJhbmsgYWNjb3VudCBhdCB0aGUgZW5kIG9mIGVhY2ggd29ya2luZyBkYXkhPC9wPlxyXG4gICAgPGgzIHN0eWxlPXt7Zm9udFdlaWdodDonbm9ybWFsJyxtYXJnaW5Cb3R0b206JzBweCcsY29sb3I6JyMwMTUyNjgnfX0+UmVjZW50IFBheW91dHMgdG8gQmFuazwvaDM+XHJcbiAgICA8dGFibGUgc3R5bGU9e3ttYXJnaW46JzAgYXV0bycsdGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgPHRib2R5PlxyXG4gICAge3BheW91dE51bSA9PT0gMCAmJiAoIDx0cj48dGQgcm93U3Bhbj0nMycgc3R5bGU9e3tjb2xvcjoncmVkJyxmb250U3R5bGU6J2l0YWxpYyd9fT5UaGVyZSBhcmUgbm8gcmVjZW50IHBheW91dHMhPC90ZD48L3RyPiApfXtwYXlvdXROdW0gIT0gMCAmJiAoIDx0cj48dGQ+QW1vdW50PC90ZD48dGQ+PC90ZD48dGQ+RXhwZWN0ZWQ8L3RkPjwvdHI+KX1cclxuICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFQYXlvdXQ/Lm1hcCgocGF5b3V0LCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IEFSZGF0ZSA9IG5ldyBEYXRlKHBheW91dC5hcnJpdmFsX2RhdGUqMTAwMCk7XHJcbiAgICAgICAgICBBUmRhdGU9QVJkYXRlLnRvRGF0ZVN0cmluZygpO1x0XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIFxyXG4gICAgICAgIDx0ciBzdHlsZT17e2NvbG9yOidncmVlbid9fSBrZXk9e2l9PlxyXG4gICAgICAgICAgPHRkPiZwb3VuZDt7KHBheW91dC5hbW91bnQvMTAwKS50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC90ZD5cclxuICAgICAgICAgIDx0ZD57QVJkYXRlfTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICBcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG57cGF5b3V0TnVtICE9IDAgJiYgKDxwIHN0eWxlPXt7Zm9udFNpemU6JzAuNmVtJyxmb250U3R5bGU6J2l0YWxpYycsbWFyZ2luVG9wOicwcHgnLGNvbG9yOidncmV5JyxwYWRkaW5nQm90dG9tOicyMHB4J319PkV4cGVjdGVkIGlzIGFuIGVzdGltYXRpb24sIGluaXRpYWwgcGF5b3V0cyBtYXkgdGFrZSBsb25nZXIhPC9wPil9XHJcbiAgICA8L1N0cmlwZUFjY1N0eWxlcz5cclxuICAgIDwvQWNjb3VudFN0eWxlcz5cclxuKTtcclxuaWYgKGRhdGEgJiYgZnV0dXJlUmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNjb3VudFN0eWxlcz5cclxuICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gIzAwMCcscGFkZGluZ0JvdHRvbTonMTBweCcsZm9udFdlaWdodDonbm9ybWFsJyxtYXJnaW5Ub3A6JzEycHgnLGxpbmVIZWlnaHQ6JzEuNWVtJ319Pnt0aGVOYW1lfSA8YnIgLz4ge3RoZUVtYWlsfTwvaDI+XHJcbiAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsY29sb3I6J3JlZCcsZm9udFNpemU6JzEuMmVtJ319PlxyXG4gICAgICAgICAgV2UgbmVlZCBhIGxpdHRsZSBtb3JlIGluZm9ybWF0aW9uIGZyb20geW91ISBCYW5rIHBheW91dHMgbWF5IGJlIHN1c3BlbmRlZCBpZiB5b3VyIGFjY291bnQgaXMgbm90IGtlcHQgdXAgdG8gZGF0ZS4gIFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxmb250U2l6ZTonMS4yZW0nLGNvbG9yOidibGFjaycscGFkZGluZzonMjVweCcsbWFyZ2luQm90dG9tOicwcHgnLH19PlxyXG4gICAgICAgICAgUGxlYXNlIGZvbGxvdyB0aGUgbGluayBiZWxvdyB0byB1cGRhdGUgS1lDIHZlcmlmaWNhdGlvbi4gPGJyIC8+IFRoYW5rIHlvdSE8L3A+XHJcbiAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxmb250U2l6ZTonMS4yZW0nLG1hcmdpbkJvdHRvbTonNDBweCcsbWFyZ2luVG9wOicwcHgnLHBhZGRpbmdCb3R0b206JzIwcHgnLGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gIzAwMCd9fT48YSBocmVmPXtkYXRhTGlua30gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsbWFyZ2luVG9wOicwcHgnfX0+XHJcbiAgICAgICAgICAgIFVwZGF0ZSBBY2NvdW50XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxTdHJpcGVBY2NTdHlsZXM+IFxyXG4gICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOicwcHgnfX0+QWNjb3VudCBiYWxhbmNlIDxzcGFuIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319PiZwb3VuZDt7ZGF0YUJhbGFuY2V9PC9zcGFuPjwvcD5cclxuICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicwLjhlbScsZm9udFN0eWxlOidpdGFsaWMnLG1hcmdpblRvcDonMHB4Jyxjb2xvcjonZ3JleScsYm9yZGVyQm90dG9tOidzb2xpZCB0aGluICMwMDAwMDAnLCBwYWRkaW5nQm90dG9tOicyMHB4J319PkZ1bmRzIGFyZSBwYWlkIG91dCBhdXRvbWF0aWNhbGx5IGludG8geW91ciBiYW5rIGFjY291bnQgYXQgdGhlIGVuZCBvZiBlYWNoIHdvcmtpbmcgZGF5ITwvcD5cclxuICAgICAgICA8aDMgc3R5bGU9e3tmb250V2VpZ2h0Oidub3JtYWwnLG1hcmdpbkJvdHRvbTonMHB4Jyxjb2xvcjonIzAxNTI2OCd9fT5SZWNlbnQgUGF5b3V0cyB0byBCYW5rPC9oMz5cclxuICAgICAgICA8dGFibGUgc3R5bGU9e3ttYXJnaW46JzAgYXV0bycsdGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICB7cGF5b3V0TnVtID09PSAwICYmICggPHRyPjx0ZCByb3dTcGFuPSczJyBzdHlsZT17e2NvbG9yOidyZWQnLGZvbnRTdHlsZTonaXRhbGljJ319PlRoZXJlIGFyZSBubyByZWNlbnQgcGF5b3V0cyE8L3RkPjwvdHI+ICl9e3BheW91dE51bSAhPSAwICYmICggPHRyPjx0ZD5BbW91bnQ8L3RkPjx0ZD48L3RkPjx0ZD5FeHBlY3RlZDwvdGQ+PC90cj4pfVxyXG4gICAgICAgIHtcclxuXHRcdFx0XHRcdGRhdGFQYXlvdXQ/Lm1hcCgocGF5b3V0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBBUmRhdGUgPSBuZXcgRGF0ZShwYXlvdXQuYXJyaXZhbF9kYXRlKjEwMDApO1xyXG5cdCAgICAgICAgICBBUmRhdGU9QVJkYXRlLnRvRGF0ZVN0cmluZygpO1x0XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDx0ciBzdHlsZT17e2NvbG9yOidncmVlbid9fSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDx0ZD4mcG91bmQ7eyhwYXlvdXQuYW1vdW50LzEwMCkudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57QVJkYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG57cGF5b3V0TnVtICE9IDAgJiYgKDxwIHN0eWxlPXt7Zm9udFNpemU6JzAuNmVtJyxmb250U3R5bGU6J2l0YWxpYycsbWFyZ2luVG9wOicwcHgnLGNvbG9yOidncmV5JyxwYWRkaW5nQm90dG9tOicyMHB4J319PkV4cGVjdGVkIGlzIGFuIGVzdGltYXRpb24sIGluaXRpYWwgcGF5b3V0cyBtYXkgdGFrZSBsb25nZXIhPC9wPil9XHJcbiAgICAgICAgPC9TdHJpcGVBY2NTdHlsZXM+XHJcbiAgICAgICAgPC9BY2NvdW50U3R5bGVzPlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjY291bnRTdHlsZXM+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gIzAwMCcscGFkZGluZ0JvdHRvbTonMTBweCcsbWFyZ2luVG9wOicxMnB4JyxsaW5lSGVpZ2h0OicxLjVlbSd9fT57dGhlTmFtZX0gPGJyIC8+IHt0aGVFbWFpbH08L2gyPlxyXG4gICAgICAgICAgPFN0cmlwZUFjY1N0eWxlcz4gXHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOicwcHgnfX0+QWNjb3VudCBiYWxhbmNlIDxzcGFuIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319PiZwb3VuZDt7ZGF0YUJhbGFuY2V9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMC42ZW0nLGZvbnRTdHlsZTonaXRhbGljJyxtYXJnaW5Ub3A6JzBweCcsY29sb3I6J2dyZXknLGJvcmRlckJvdHRvbTonc29saWQgdGhpbiAjMDAwMDAwJywgcGFkZGluZ0JvdHRvbTonMjBweCd9fT5GdW5kcyBhcmUgcGFpZCBvdXQgYXV0b21hdGljYWxseSBpbnRvIHlvdXIgYmFuayBhY2NvdW50IGF0IHRoZSBlbmQgb2YgZWFjaCB3b3JraW5nIGRheSE8L3A+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRXZWlnaHQ6J25vcm1hbCcsbWFyZ2luQm90dG9tOicwcHgnLGNvbG9yOicjMDE1MjY4J319PlJlY2VudCBQYXlvdXRzIHRvIEJhbms8L2gzPlxyXG4gICAgICAgICAgICA8dGFibGUgc3R5bGU9e3ttYXJnaW46JzAgYXV0bycsdGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3BheW91dE51bSA9PT0gMCAmJiAoIDx0cj48dGQgcm93U3Bhbj0nMycgc3R5bGU9e3tjb2xvcjoncmVkJyxmb250U3R5bGU6J2l0YWxpYyd9fT5UaGVyZSBhcmUgbm8gcmVjZW50IHBheW91dHMhPC90ZD48L3RyPiApfXtwYXlvdXROdW0gIT0gMCAmJiAoIDx0cj48dGQ+QW1vdW50PC90ZD48dGQ+PC90ZD48dGQ+RXhwZWN0ZWQ8L3RkPjwvdHI+KX1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF5b3V0Py5tYXAoKHBheW91dCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IEFSZGF0ZSA9IG5ldyBEYXRlKHBheW91dC5hcnJpdmFsX2RhdGUqMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIEFSZGF0ZT1BUmRhdGUudG9EYXRlU3RyaW5nKCk7XHRcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4mcG91bmQ7eyhwYXlvdXQuYW1vdW50LzEwMCkudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntBUmRhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAge3BheW91dE51bSAhPSAwICYmICg8cCBzdHlsZT17e2ZvbnRTaXplOicwLjZlbScsZm9udFN0eWxlOidpdGFsaWMnLG1hcmdpblRvcDonMHB4Jyxjb2xvcjonZ3JleScscGFkZGluZ0JvdHRvbTonMjBweCd9fT5FeHBlY3RlZCBpcyBhbiBlc3RpbWF0aW9uLCBpbml0aWFsIHBheW91dHMgbWF5IHRha2UgbG9uZ2VyITwvcD4pfVxyXG4gICAgICAgICAgICA8L1N0cmlwZUFjY1N0eWxlcz5cclxuICAgICAgICA8L0FjY291bnRTdHlsZXM+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPEFjY291bnRTdHlsZXM+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMDAnLHBhZGRpbmdCb3R0b206JzEwcHgnLG1hcmdpblRvcDonMTJweCcsbGluZUhlaWdodDonMS41ZW0nfX0+e3RoZU5hbWV9IDxiciAvPiB7dGhlRW1haWx9PC9oMj5cclxuICAgICAgICA8U3RyaXBlQWNjU3R5bGVzPiBcclxuICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOicwcHgnfX0+QWNjb3VudCBiYWxhbmNlIDxzcGFuIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319PiZwb3VuZDt7ZGF0YUJhbGFuY2V9PC9zcGFuPjwvcD5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzAuNmVtJyxmb250U3R5bGU6J2l0YWxpYycsbWFyZ2luVG9wOicwcHgnLGNvbG9yOidncmV5Jyxib3JkZXJCb3R0b206J3NvbGlkIHRoaW4gIzAwMDAwMCcsIHBhZGRpbmdCb3R0b206JzIwcHgnfX0+RnVuZHMgYXJlIHBhaWQgb3V0IGF1dG9tYXRpY2FsbHkgaW50byB5b3VyIGJhbmsgYWNjb3VudCBhdCB0aGUgZW5kIG9mIGVhY2ggd29ya2luZyBkYXkhPC9wPlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7Zm9udFdlaWdodDonbm9ybWFsJyxtYXJnaW5Cb3R0b206JzBweCcsY29sb3I6JyMwMTUyNjgnfX0+UmVjZW50IFBheW91dHMgdG8gQmFuazwvaDM+XHJcbiAgICAgICAgICA8dGFibGUgc3R5bGU9e3ttYXJnaW46JzAgYXV0bycsdGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cGF5b3V0TnVtID09PSAwICYmICggPHRyPjx0ZCByb3dTcGFuPSczJyBzdHlsZT17e2NvbG9yOidyZWQnLGZvbnRTdHlsZTonaXRhbGljJ319PlRoZXJlIGFyZSBubyByZWNlbnQgcGF5b3V0cyE8L3RkPjwvdHI+ICl9e3BheW91dE51bSAhPSAwICYmICggPHRyPjx0ZD5BbW91bnQ8L3RkPjx0ZD48L3RkPjx0ZD5FeHBlY3RlZDwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVBheW91dD8ubWFwKChwYXlvdXQsIGkpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgQVJkYXRlID0gbmV3IERhdGUocGF5b3V0LmFycml2YWxfZGF0ZSoxMDAwKTtcclxuICAgICAgICAgICAgICAgIEFSZGF0ZT1BUmRhdGUudG9EYXRlU3RyaW5nKCk7XHRcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JnBvdW5kO3socGF5b3V0LmFtb3VudC8xMDApLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntBUmRhdGV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIHtwYXlvdXROdW0gIT0gMCAmJiAoPHAgc3R5bGU9e3tmb250U2l6ZTonMC42ZW0nLGZvbnRTdHlsZTonaXRhbGljJyxtYXJnaW5Ub3A6JzBweCcsY29sb3I6J2dyZXknLHBhZGRpbmdCb3R0b206JzIwcHgnfX0+RXhwZWN0ZWQgaXMgYW4gZXN0aW1hdGlvbiwgaW5pdGlhbCBwYXlvdXRzIG1heSB0YWtlIGxvbmdlciE8L3A+KX1cclxuICAgICAgICAgIDwvU3RyaXBlQWNjU3R5bGVzPlxyXG4gICAgICA8L0FjY291bnRTdHlsZXM+XHJcbiAgICAgIFxyXG4gICAgICApO1xyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IFVQREFURV9VU0VSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9VU0VSX01VVEFUSU9OKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRhZGRyZXNzOiBTdHJpbmdcclxuICAgICR0b3duOiBTdHJpbmdcclxuICAgICRjb3VudHk6IFN0cmluZ1xyXG4gICAgJHBvc3Rjb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZVVzZXIoXHJcbiAgICAgIHdoZXJlOiB7IGlkOiAkaWQgfVxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWRkcmVzczogJGFkZHJlc3NcclxuICAgICAgICB0b3duOiAkdG93blxyXG4gICAgICAgIGNvdW50eTogJGNvdW50eVxyXG4gICAgICAgIHBvc3Rjb2RlOiAkcG9zdGNvZGVcclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGFkZHJlc3NcclxuICAgICAgdG93blxyXG4gICAgICBjb3VudHlcclxuICAgICAgcG9zdGNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVVc2VyKCkge1xyXG4gIGNvbnN0IHRoZVVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgaWQgPSB0aGVVc2VyPy5pZDtcclxuICBjb25zb2xlLmxvZyhpZCk7XHJcblxyXG4gIGNvbnN0IFt1cGRhdGVVc2VyLCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH1dID1cclxuICAgIHVzZU11dGF0aW9uKFVQREFURV9VU0VSX01VVEFUSU9OKTtcclxuXHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgYWRkcmVzczogdGhlVXNlcj8uYWRkcmVzcyxcclxuICAgIHRvd246IHRoZVVzZXI/LnRvd24sXHJcbiAgICBjb3VudHk6IHRoZVVzZXI/LmNvdW50eSxcclxuICAgIHBvc3Rjb2RlOiB0aGVVc2VyPy5wb3N0Y29kZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlTWVzc2FnZScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlVXNlcih7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGlucHV0cy5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgIHRvd246IGlucHV0cy50b3duLFxyXG4gICAgICAgICAgICAgIGNvdW50eTogaW5wdXRzLmNvdW50eSxcclxuICAgICAgICAgICAgICBwb3N0Y29kZTogaW5wdXRzLnBvc3Rjb2RlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVNZXNzYWdlJykuaW5uZXJIVE1MID0gJ1VwZGF0ZWQhJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgyPlBvc3RhbCBBZGRyZXNzPC9oMj5cclxuICAgICAgICA8aDQgaWQ9XCJ1cGRhdGVNZXNzYWdlXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ25vcm1hbCcsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG5cclxuICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5cclxuICAgICAgICAgICAgQWRkcmVzc1xyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvd25cIj5cclxuICAgICAgICAgICAgVG93blxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ0b3duXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidG93blwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb3duXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnRvd259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvdW50eVwiPlxyXG4gICAgICAgICAgICBDb3VudHlcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiY291bnR5XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY291bnR5XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvdW50eVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5jb3VudHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvc3Rjb2RlXCI+XHJcbiAgICAgICAgICAgIFBvc3Rjb2RlXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInBvc3Rjb2RlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicG9zdGNvZGVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdGNvZGVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIEFkZHJlc3M8L2J1dHRvbj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9VU0VSX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGF1dGhlbnRpY2F0ZWRJdGVtIHtcclxuICAgICAgLi4uIG9uIFVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgc3RyaXBlSWRcclxuICAgICAgICBjb25maXJtZWRcclxuICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgYWRkcmVzczJcclxuICAgICAgICB0b3duXHJcbiAgICAgICAgY291bnR5XHJcbiAgICAgICAgcG9zdGNvZGVcclxuICAgICAgICBjYXJ0IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgcGhvdG8ge1xyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShDVVJSRU5UX1VTRVJfUVVFUlkpO1xyXG4gIHJldHVybiBkYXRhPy5hdXRoZW50aWNhdGVkSXRlbTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAxNTI2ODtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgLS1hcHBsZS1zeXN0ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIH1cbiAgfVxuICBidXR0b24sXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmRlNmZmO1xuICAgIGNvbG9yOiAjMDE1MjY4O1xuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNzdhMCAwJSwgI2ZkZTZmZiA4MCUpO1xuICAgIH1cbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsID0ge30pIHtcclxuICAvLyBjcmVhdGUgc3RhdGUgZm9yIGlucHV0c1xyXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKS5qb2luKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9LCBbaW5pdGlhbFZhbHVlc10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICB9XHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcclxuICAgICk7XHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRzLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgcmVzZXRGb3JtLFxyXG4gICAgY2xlYXJGb3JtLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgUGxhY2Vob2xkZXJWYWx1ZSA9ICdibHVyJyB8ICdlbXB0eSdcblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKSAmXG4gIChcbiAgICB8IHtcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBFeGNsdWRlPFBsYWNlaG9sZGVyVmFsdWUsICdibHVyJz5cbiAgICAgICAgYmx1ckRhdGFVUkw/OiBuZXZlclxuICAgICAgfVxuICAgIHwgeyBwbGFjZWhvbGRlcjogJ2JsdXInOyBibHVyRGF0YVVSTDogc3RyaW5nIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG4gIGVuYWJsZUJsdXJyeVBsYWNlaG9sZGVyOiBjb25maWdFbmFibGVCbHVycnlQbGFjZWhvbGRlcixcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZ1xuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdXG4gICAgZm9yIChsZXQgbWF0Y2g7IChtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKSk7IG1hdGNoKSB7XG4gICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpXG4gICAgfVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoXG4gIGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsLFxuICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJWYWx1ZVxuKSB7XG4gIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInICYmIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jb21wbGV0ZSkge1xuICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSdcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIHBsYWNlaG9sZGVyID0gJ2VtcHR5JyxcbiAgYmx1ckRhdGFVUkwsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKCFjb25maWdFbmFibGVCbHVycnlQbGFjZWhvbGRlcikge1xuICAgIHBsYWNlaG9sZGVyID0gJ2VtcHR5J1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgY29uc3QgTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUiA9IDUwMDBcbiAgY29uc3QgdG9vU21hbGxGb3JCbHVycnlQbGFjZWhvbGRlciA9XG4gICAgd2lkdGhJbnQgJiYgaGVpZ2h0SW50ICYmIHdpZHRoSW50ICogaGVpZ2h0SW50IDwgTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUlxuICBjb25zdCBzaG91bGRTaG93Qmx1cnJ5UGxhY2Vob2xkZXIgPVxuICAgIHBsYWNlaG9sZGVyID09PSAnYmx1cicgJiYgIXRvb1NtYWxsRm9yQmx1cnJ5UGxhY2Vob2xkZXJcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG5cbiAgICAuLi4oc2hvdWxkU2hvd0JsdXJyeVBsYWNlaG9sZGVyXG4gICAgICA/IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkKSxcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICAgICAgc2V0UmVmKGVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCwgcGxhY2Vob2xkZXIpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XHJcblxyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcclxuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcclxuICB2YXIgdGFyZ2V0ID0ge307XHJcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xyXG4gIHZhciBrZXksIGk7XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xyXG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcclxuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZXF1ZXN0UmVzZXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQnO1xyXG5pbXBvcnQgUGxlYXNlU2lnbkluIGZyb20gJy4uL2NvbXBvbmVudHMvUGxlYXNlU2lnbkluJztcclxuaW1wb3J0IFVwZGF0ZVVzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9VcGRhdGVVc2VyJztcclxuaW1wb3J0IFN0cmlwZUFjY291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9TdHJpcGVBY2NvdW50JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBsZWFzZVNpZ25Jbj5cclxuICAgICAgPFN0cmlwZUFjY291bnQgLz5cclxuICAgICAgPFVwZGF0ZVVzZXIgLz5cclxuICAgICAgPFJlcXVlc3RSZXNldCAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1BsZWFzZVNpZ25Jbj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=