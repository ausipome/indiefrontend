exports.id = "components_PleaseSignIn_js";
exports.ids = ["components_PleaseSignIn_js"];
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

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RequestReset; }
/* harmony export */ });
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





const REQUEST_RESET_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;
function RequestReset() {
  const {
    inputs,
    handleChange,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_4__.default)({
    email: ''
  });
  const [signup, {
    data,
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(REQUEST_RESET_MUTATION, {
    variables: inputs
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    const res = await signup().catch(console.error);
    resetForm(); // Send the email and password to the graphqlAPI
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_3__.default, {
    method: "POST",
    onSubmit: handleSubmit,
    style: {
      marginBottom: '75px',
      marginTop: '25px'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Request a Password Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: 'red',
          fontWeight: 'normal'
        },
        children: "Success! Check your email for a link!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignIn; }
/* harmony export */ });
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







const SIGN_OUT_MUTATION_NEXT = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  mutation {
    endSession
  }
`;
const SIGNIN_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(SIGN_OUT_MUTATION_NEXT, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_6__.CURRENT_USER_QUERY
    }]
  });
  const {
    inputs,
    handleChange,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)({
    email: '',
    password: ''
  });
  const [signin, {
    data,
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(SIGNIN_MUTATION, {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [signState && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloConsumer, {
      children: client => {
        client.refetchQueries({
          include: [_User__WEBPACK_IMPORTED_MODULE_6__.CURRENT_USER_QUERY]
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_4__.default, {
      method: "POST",
      onSubmit: handleSubmit,
      children: [user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Login to Your Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {
        error: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "email",
          children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "password",
          children: ["Password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUGxlYXNlU2lnbkluLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpZ25Jbi5qcyJdLCJuYW1lcyI6WyJwbGVhc2VTaWduSW4iLCJjaGlsZHJlbiIsInNpZ24iLCJzZXRTaWduIiwidXNlU3RhdGUiLCJmb3Jnb3QiLCJzZXRGb3Jnb3QiLCJzaWduSGFuZGxlciIsImZvcmdvdEhhbmRsZXIiLCJtZSIsInVzZVVzZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlJFUVVFU1RfUkVTRVRfTVVUQVRJT04iLCJncWwiLCJSZXF1ZXN0UmVzZXQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJ1c2VGb3JtIiwiZW1haWwiLCJzaWdudXAiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJjYXRjaCIsImNvbnNvbGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rIiwiZm9udFdlaWdodCIsIlNJR05fT1VUX01VVEFUSU9OX05FWFQiLCJTSUdOSU5fTVVUQVRJT04iLCJTaWduSW4iLCJzaWduU3RhdGUiLCJzZXRTaWduU3RhdGUiLCJ1c2VyIiwic2lnbm91dCIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJwYXNzd29yZCIsInNpZ25pbiIsIm9uQ29tcGxldGVkIiwiZW1haWxDaGVjayIsImF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQiLCJpdGVtIiwiY29uZmlybWVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIl9fdHlwZW5hbWUiLCJ1bmRlZmluZWQiLCJjbGllbnQiLCJpbmNsdWRlIiwidGV4dEFsaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQW9DO0FBQ2pELFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxJQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7O0FBQ0EsUUFBTUcsV0FBVyxHQUFHLE1BQU07QUFDeEJKLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUcsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEdBSEQ7O0FBSUEsUUFBTUUsYUFBYSxHQUFHLE1BQU07QUFDMUJMLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUcsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEdBSEQ7O0FBS0EsUUFBTUcsRUFBRSxHQUFHQyw4Q0FBTyxFQUFsQjtBQUNBLE1BQUksQ0FBQ0QsRUFBTCxFQUNFLG9CQUNFO0FBQUEsZUFDR1AsSUFBSSxpQkFDSDtBQUFBLDhCQUNFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLEVBQUVNLGFBRlg7QUFHRSxhQUFLLEVBQUU7QUFBRUcseUJBQWUsRUFBRSxPQUFuQjtBQUE0QkMsZUFBSyxFQUFFO0FBQW5DLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQUZKLEVBYUdQLE1BQU0saUJBQ0w7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxRQURQ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VUFBRSxFQUFDO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBYUUsOERBQUMsa0RBQUQ7QUFBTyxhQUFLLEVBQUVaO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0U7QUFBVSxnQkFBUSxFQUFFRCxPQUFwQjtBQUE2QixxQkFBV0EsT0FBeEM7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBLDJDQUVFO0FBQ0UsZ0JBQUksRUFBQyxPQURQO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UsdUJBQVcsRUFBQyxvQkFIZDtBQUlFLHdCQUFZLEVBQUMsT0FKZjtBQUtFLGlCQUFLLEVBQUVQLE1BQU0sQ0FBQ0ksS0FMaEI7QUFNRSxvQkFBUSxFQUFFSDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUU7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBQSw4Q0FFRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFJLEVBQUMsVUFGUDtBQUdFLHVCQUFXLEVBQUMsVUFIZDtBQUlFLHdCQUFZLEVBQUMsS0FKZjtBQUtFLGlCQUFLLEVBQUVELE1BQU0sQ0FBQytCLFFBTGhCO0FBTUUsb0JBQVEsRUFBRTlCO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsZUF1QkU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQSxrQkFERjtBQXFERCxDIiwiZmlsZSI6ImNvbXBvbmVudHNfUGxlYXNlU2lnbkluX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJztcclxuaW1wb3J0IFJlcXVlc3RSZXNldCBmcm9tICcuL1JlcXVlc3RSZXNldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGVhc2VTaWduSW4oeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3NpZ24sIHNldFNpZ25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2ZvcmdvdCwgc2V0Rm9yZ290XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzaWduSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldFNpZ24odHJ1ZSk7XHJcbiAgICBzZXRGb3Jnb3QoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgZm9yZ290SGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldFNpZ24oZmFsc2UpO1xyXG4gICAgc2V0Rm9yZ290KHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGlmICghbWUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtzaWduICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTaWduSW4gLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2ZvcmdvdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBjb2xvcjogJ3JlZCcgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZCEg8J+Zg1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2ZvcmdvdCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UmVxdWVzdFJlc2V0IC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaWduSGFuZGxlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGNvbG9yOiAncmVkJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQmFjayB0byBTaWduIEluISDwn5GIXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufVxyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5jb25zdCBSRVFVRVNUX1JFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchKSB7XHJcbiAgICBzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKGVtYWlsOiAkZW1haWwpXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVxdWVzdFJlc2V0KCkge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NpZ251cCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgUkVRVUVTVF9SRVNFVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgICB9XHJcbiAgKTtcclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbnVwKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICAgIC8vIFNlbmQgdGhlIGVtYWlsIGFuZCBwYXNzd29yZCB0byB0aGUgZ3JhcGhxbEFQSVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc3NXB4JywgbWFyZ2luVG9wOiAnMjVweCcgfX1cclxuICAgID5cclxuICAgICAgPGgyPlJlcXVlc3QgYSBQYXNzd29yZCBSZXNldDwvaDI+XHJcbiAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cclxuICAgICAgICB7ZGF0YT8uc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PlxyXG4gICAgICAgICAgICBTdWNjZXNzISBDaGVjayB5b3VyIGVtYWlsIGZvciBhIGxpbmshXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlcXVlc3QgUmVzZXQ8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlksIHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5cclxuY29uc3QgU0lHTl9PVVRfTVVUQVRJT05fTkVYVCA9IGdxbGBcclxuICBtdXRhdGlvbiB7XHJcbiAgICBlbmRTZXNzaW9uXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU0lHTklOX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFNJR05JTl9NVVRBVElPTigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xyXG4gICAgYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZChlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XHJcbiAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNzIHtcclxuICAgICAgICBpdGVtIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY29uZmlybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlIHtcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3QgW3NpZ25TdGF0ZSwgc2V0U2lnblN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG5cclxuICBjb25zdCBbc2lnbm91dF0gPSB1c2VNdXRhdGlvbihTSUdOX09VVF9NVVRBVElPTl9ORVhULCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KTtcclxuICBjb25zdCBbc2lnbmluLCB7IGRhdGEsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihTSUdOSU5fTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgYXN5bmMgb25Db21wbGV0ZWQoZGF0YSkge1xyXG4gICAgICBjb25zdCBlbWFpbENoZWNrID0gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZD8uaXRlbT8uY29uZmlybWVkO1xyXG4gICAgICBpZiAoZW1haWxDaGVjayA9PT0gJ25vJykge1xyXG4gICAgICAgIHNpZ25vdXQoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nTWVzc2FnZScpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAnUGxlYXNlIGNvbmZpcm0geW91ciBlbWFpbCBhZGRyZXNzIHRvIGNvbnRpbnVlIHRvIHVzZSBhbGwgb2YgSW5kaWUgQnViYmHigJlzIGZlYXR1cmVzISAnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuICAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJ1xyXG4gICAgICA/IGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nTWVzc2FnZScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbmluKCk7XHJcbiAgICBpZiAocmVzLmRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQ/Lml0ZW0/LmNvbmZpcm1lZCA9PT0gJ3llcycpIHtcclxuICAgICAgc2V0U2lnblN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaWduU3RhdGUgJiYgKFxyXG4gICAgICAgIDxBcG9sbG9Db25zdW1lcj5cclxuICAgICAgICAgIHsoY2xpZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWVudC5yZWZldGNoUXVlcmllcyh7XHJcbiAgICAgICAgICAgICAgaW5jbHVkZTogW0NVUlJFTlRfVVNFUl9RVUVSWV0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxyXG4gICAgICApfVxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgV2VsY29tZSBiYWNrIHt1c2VyLm5hbWV9IPCfmIpcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aDI+TG9naW4gdG8gWW91ciBBY2NvdW50PC9oMj5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX1cclxuICAgICAgICAgIGlkPVwibG9nTWVzc2FnZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9