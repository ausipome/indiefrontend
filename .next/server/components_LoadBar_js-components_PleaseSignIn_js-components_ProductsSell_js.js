exports.id = "components_LoadBar_js-components_PleaseSignIn_js-components_ProductsSell_js";
exports.ids = ["components_LoadBar_js-components_PleaseSignIn_js-components_ProductsSell_js"];
exports.modules = {

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddToCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\AddToCart.js";




const ADD_TO_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
function AddToCart({
  id
}) {
  const [addToCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(ADD_TO_CART_MUTATION, {
    variables: {
      id
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__.CURRENT_USER_QUERY
    }]
  });
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_4__.useUser)();
  if (!me) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/SignIn",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      style: {
        fontSize: '1.15em'
      },
      children: "Login to Add To Cart \uD83D\uDED2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    disabled: loading,
    type: "button",
    onClick: addToCart,
    style: {
      fontSize: '1.15em'
    },
    children: ["Add", loading && 'ing', " To Cart \uD83D\uDED2"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeleteProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\DeleteProduct.js";


const DELETE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct({
  id,
  children
}) {
  const [deleteProduct, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id
    },
    update
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    style: {
      borderLeft: 'solid thin #eeeeee',
      borderBottomRightRadius: '15px',
      fontSize: '1em'
    },
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm('Are you sure you want to delete this item?')) {
        // go ahead and delete it
        deleteProduct().catch(err => alert(err.message));
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_CHATS_QUERY": function() { return /* binding */ ALL_CHATS_QUERY; },
/* harmony export */   "default": function() { return /* binding */ ModalFunction; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Modal.js";
// reactstrap components








const ButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_5___default().button.withConfig({
  displayName: "Modal__ButtonStyles",
  componentId: "sc-1ssl16h-0"
})(["width:auto;background:white;color:#015268;border:thin solid #000000;font-size:1.2em;font-weight:600;padding:0.5rem 1.2rem;margin-right:7px;"]);
const SmallerButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_5___default().button.withConfig({
  displayName: "Modal__SmallerButtonStyles",
  componentId: "sc-1ssl16h-1"
})(["width:auto;background:white;color:#015268;border:thin solid #000000;font-size:1.5rem;font-weight:bold;padding:0.5rem 1.2rem;"]);
const MessageReceived = styled_components__WEBPACK_IMPORTED_MODULE_5___default().p.withConfig({
  displayName: "Modal__MessageReceived",
  componentId: "sc-1ssl16h-2"
})(["background:#ffffff;color:#000000;border:thin solid #000000;border-radius:10px;padding:7px;width:90%;float:left;"]);
const MessageSent = styled_components__WEBPACK_IMPORTED_MODULE_5___default().p.withConfig({
  displayName: "Modal__MessageSent",
  componentId: "sc-1ssl16h-3"
})(["background:#dfffe9;color:#000000;border:thin solid #000000;border-radius:10px;padding:7px;width:90%;float:right;"]);
const MessageSentSpan = styled_components__WEBPACK_IMPORTED_MODULE_5___default().p.withConfig({
  displayName: "Modal__MessageSentSpan",
  componentId: "sc-1ssl16h-4"
})(["width:90%;float:right;text-align:right;padding-right:7px;"]);
const MessageReceivedSpan = styled_components__WEBPACK_IMPORTED_MODULE_5___default().p.withConfig({
  displayName: "Modal__MessageReceivedSpan",
  componentId: "sc-1ssl16h-5"
})(["width:90%;float:left;padding-left:7px;"]);
const CREATE_CHAT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation CREATE_CHAT_MUTATION(
    $message: String!
    $id: ID!
    $pageTypeMod: String!
  ) {
    createChatter(message: $message, id: $id, pageTypeMod: $pageTypeMod) {
      id
    }
  }
`;
const ALL_CHATS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_CHATS_QUERY($id: ID) {
    chats(
      where: { item: { id: { equals: $id } } }
      orderBy: [{ timeStamp: asc }]
    ) {
      message
      id
      timeStamp
      userFrom {
        id
      }
      item {
        id
      }
    }
  }
`;
function ModalFunction({
  id,
  pageTypeMod
}) {
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)({
    message: ''
  });
  const theUser = (0,_User__WEBPACK_IMPORTED_MODULE_8__.useUser)();
  const theId = theUser === null || theUser === void 0 ? void 0 : theUser.id;
  const [createChatter, {
    loadingCreate,
    errorCreate,
    dataCreate
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(CREATE_CHAT_MUTATION, {
    variables: {
      message: inputs.message,
      id,
      pageTypeMod
    },
    refetchQueries: [{
      query: ALL_CHATS_QUERY
    }, 'ALL_CHATS_QUERY']
  });
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_CHATS_QUERY, {
    variables: {
      id
    }
  });
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading messages..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [pageTypeMod === 'buyer' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonStyles, {
      type: "button",
      onClick: () => setModalOpen(!modalOpen),
      children: "Contact Seller"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, this), pageTypeMod === 'seller' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonStyles, {
      type: "button",
      onClick: () => setModalOpen(!modalOpen),
      children: "Contact Buyer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {
      toggle: () => setModalOpen(!modalOpen),
      isOpen: modalOpen,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " modal-header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          className: " modal-title",
          style: {
            width: '90%',
            textAlign: 'center',
            fontSize: '1.3em'
          },
          children: "Messages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallerButtonStyles, {
          "aria-label": "Close",
          className: " close",
          type: "button",
          onClick: () => setModalOpen(!modalOpen),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "aria-hidden": true,
            children: "\xD7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {
        children: data.chats.map(chat => {
          const dateTime = new Date(chat.timeStamp);
          let dt = dateTime.toGMTString();
          dt = dt.replace('GMT', '');
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [chat.userFrom.id === theId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageSentSpan, {
                children: dt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageSent, {
                children: chat.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 21
              }, this)]
            }, void 0, true), chat.userFrom.id !== theId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageReceivedSpan, {
                children: dt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageReceived, {
                children: chat.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 21
              }, this)]
            }, void 0, true)]
          }, chat.id, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.ModalFooter, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
          style: {
            width: '100%'
          },
          onSubmit: async e => {
            e.preventDefault();
            const res = await createChatter();
            clearForm();
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
            style: {
              width: '100%',
              marginBottom: '7px'
            },
            rows: "3",
            required: true,
            id: "message",
            name: "message",
            placeholder: "Message",
            value: inputs.message,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallerButtonStyles, {
            type: "submit",
            children: "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

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

/***/ "./components/Posted.js":
/*!******************************!*\
  !*** ./components/Posted.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Posted; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _ProductsSold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductsSold */ "./components/ProductsSold.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Posted.js";





const ButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "Posted__ButtonStyles",
  componentId: "sc-zwxce9-0"
})(["width:auto;background:#ffffff;color:#015268;border:thin solid #000000;font-size:1.2em;font-weight:600;padding:0.5rem 1.2rem;margin-right:7px;"]);
const UPDATE_ORDER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation UPDATE_PRODUCT_MUTATION($id: ID!) {
    updateOrderStatus(id: $id, status: "POSTED") {
      id
    }
  }
`;
function Posted({
  id,
  children
}) {
  const [updateOrderItem, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPDATE_ORDER_MUTATION, {
    variables: {
      id
    },
    refetchQueries: [{
      query: _ProductsSold__WEBPACK_IMPORTED_MODULE_5__.ALL_PRODUCTS_QUERY_SOLD
    }, 'ALL_PRODUCTS_QUERY_SOLD']
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonStyles, {
    style: {
      fontSize: '1.2em'
    },
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm('Please confirm you have posted this item?')) {
        updateOrderItem().catch(err => alert(err.message));
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_money__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/money */ "./lib/money.js");
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteProduct */ "./components/DeleteProduct.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
/* harmony import */ var _ProductsReview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductsReview */ "./components/ProductsReview.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Posted__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Posted */ "./components/Posted.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var _Refund__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Refund */ "./components/Refund.js");
/* harmony import */ var _Released__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Released */ "./components/Released.js");
/* harmony import */ var _styles_StatusTag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/StatusTag */ "./components/styles/StatusTag.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Product.js";
















const UPDATE_STATUS_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation UPDATE_STATUS_MUTATION($id: ID!, $dataStatus: String) {
    updateProduct(where: { id: $id }, data: { status: $dataStatus }) {
      id
    }
  }
`;
let canRelease = 'no';
function Product({
  product,
  pageType
}) {
  var _product$photo4, _product$photo4$image, _product$user, _product$user2, _product$user3;

  function hello() {}

  {
    const timeStamp = product === null || product === void 0 ? void 0 : product.date;
    const theDate = new Date(timeStamp);
    const datePlus = theDate.setDate(theDate.getDate() + 21);
    const date = new Date();
    const newDate = date.setDate(date.getDate());

    if (newDate > datePlus) {
      canRelease = 'yes';
    } else {
      canRelease = 'no';
    }
  }
  const fee = Math.ceil(product.price * 0.05);
  const amount = parseInt(product.price) - fee;
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_11__.useUser)();
  const [updateStatus, {
    data: Data,
    error: Error,
    loading: Loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(UPDATE_STATUS_MUTATION);

  const handleStatus = async event => {
    const id = event.target.getAttribute('id');
    const dataStatus = event.target.getAttribute('data-status');
    const res = await updateStatus({
      variables: {
        id,
        dataStatus
      },
      refetchQueries: [{
        query: _ProductsReview__WEBPACK_IMPORTED_MODULE_10__.ALL_PRODUCTS_QUERY_REVIEW
      }, 'ALL_PRODUCTS_QUERY_REVIEW']
    });
  };

  if (pageType === 'sell') {
    var _product$photo, _product$photo$image;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
        alt: product.name,
        style: {
          borderBottom: 'solid thin #eeeeee',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/product/${product.id}`,
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: (0,_lib_money__WEBPACK_IMPORTED_MODULE_7__.default)(product.price)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: '#015268'
        },
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: {
            pathname: '/update',
            query: {
              id: product.id
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            style: {
              borderBottomLeftRadius: '15px',
              textAlign: 'center',
              fontSize: '1em'
            },
            children: "Edit \u270F\uFE0F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_8__.default, {
          id: product.id,
          children: "Delete \uD83D\uDDD1\uFE0F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this);
  }

  if (pageType === 'sold') {
    var _product$photo2, _product$photo2$image, _product$order, _product$order$user, _product$order2, _product$order2$user, _product$order3, _product$order3$user, _product$order4, _product$order4$user, _product$order5, _product$order5$user, _product$order6, _product$order6$user, _product$order7, _product$order7$user;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: product === null || product === void 0 ? void 0 : (_product$photo2 = product.photo) === null || _product$photo2 === void 0 ? void 0 : (_product$photo2$image = _product$photo2.image) === null || _product$photo2$image === void 0 ? void 0 : _product$photo2$image.publicUrlTransformed,
        alt: product.name,
        style: {
          borderBottom: 'solid thin #eeeeee',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            background: '#fde6ff',
            display: 'inline',
            lineHeight: '1.3',
            fontSize: '4rem',
            textAlign: ' center',
            color: '#0077a0',
            padding: '0 1rem'
          },
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: '#015268'
        },
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: 'grey',
          margin: '0px'
        },
        children: ["Sold on: ", product.date]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: 'black',
          marginTop: '0px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: 'red'
          },
          children: "Let's talk money..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), "Sold for: ", (0,_lib_money__WEBPACK_IMPORTED_MODULE_7__.default)(product.price), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), "Fee (5%): ", (0,_lib_money__WEBPACK_IMPORTED_MODULE_7__.default)(fee), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), "Net: ", (0,_lib_money__WEBPACK_IMPORTED_MODULE_7__.default)(amount)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        style: {
          margin: '0px',
          paddingLeft: '30px',
          paddingTop: '15px',
          color: 'green',
          borderTop: 'solid thin #000000'
        },
        children: ["Post to", ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), (product === null || product === void 0 ? void 0 : (_product$order = product.order) === null || _product$order === void 0 ? void 0 : (_product$order$user = _product$order.user) === null || _product$order$user === void 0 ? void 0 : _product$order$user.postcode) === '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          textAlign: 'center',
          color: 'red',
          margin: '0px',
          paddingBottom: '7px'
        },
        children: "No address on file, please contact buyer!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : (_product$order2 = product.order) === null || _product$order2 === void 0 ? void 0 : (_product$order2$user = _product$order2.user) === null || _product$order2$user === void 0 ? void 0 : _product$order2$user.postcode) !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          margin: '0px',
          paddingBottom: '7px',
          color: 'black'
        },
        children: [product === null || product === void 0 ? void 0 : (_product$order3 = product.order) === null || _product$order3 === void 0 ? void 0 : (_product$order3$user = _product$order3.user) === null || _product$order3$user === void 0 ? void 0 : _product$order3$user.name, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 42
        }, this), product === null || product === void 0 ? void 0 : (_product$order4 = product.order) === null || _product$order4 === void 0 ? void 0 : (_product$order4$user = _product$order4.user) === null || _product$order4$user === void 0 ? void 0 : _product$order4$user.address, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 45
        }, this), product === null || product === void 0 ? void 0 : (_product$order5 = product.order) === null || _product$order5 === void 0 ? void 0 : (_product$order5$user = _product$order5.user) === null || _product$order5$user === void 0 ? void 0 : _product$order5$user.town, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 42
        }, this), product === null || product === void 0 ? void 0 : (_product$order6 = product.order) === null || _product$order6 === void 0 ? void 0 : (_product$order6$user = _product$order6.user) === null || _product$order6$user === void 0 ? void 0 : _product$order6$user.county, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 44
        }, this), product === null || product === void 0 ? void 0 : (_product$order7 = product.order) === null || _product$order7 === void 0 ? void 0 : (_product$order7$user = _product$order7.user) === null || _product$order7$user === void 0 ? void 0 : _product$order7$user.postcode, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 46
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_13__.default, {
        id: product.id,
        pageTypeMod: "seller"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), (product === null || product === void 0 ? void 0 : product.status) !== 'REFUNDED' && (product === null || product === void 0 ? void 0 : product.status) !== 'RECEIVED' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Refund__WEBPACK_IMPORTED_MODULE_14__.default, {
        id: product.id,
        children: "Refund Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : product.status) === 'ONHOLD' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Released__WEBPACK_IMPORTED_MODULE_15__.default, {
        id: product.id,
        children: "Release Funds"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }, this), canRelease === 'yes' && (product === null || product === void 0 ? void 0 : product.status) !== 'ONHOLD' && (product === null || product === void 0 ? void 0 : product.status) !== 'RECEIVED' && (product === null || product === void 0 ? void 0 : product.status) !== 'FLAGGED' && (product === null || product === void 0 ? void 0 : product.status) !== 'RECEIVEDBACK' && (product === null || product === void 0 ? void 0 : product.status) !== 'REFUNDED' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Released__WEBPACK_IMPORTED_MODULE_15__.default, {
        id: product.id,
        children: "Release Funds"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }, this), (product === null || product === void 0 ? void 0 : product.status) === 'SOLD' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Posted__WEBPACK_IMPORTED_MODULE_12__.default, {
          id: product.id,
          children: "Mark posted \uD83D\uDCEE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : product.status) === 'POSTED' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: hello,
          type: "button",
          style: {
            fontSize: '1.2em',
            textAlign: 'center',
            padding: '1rem',
            margin: '0px',
            cursor: 'default',
            color: 'green'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              color: 'black'
            },
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 15
          }, this), " Posted"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : product.status) === 'RECEIVED' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: hello,
          type: "button",
          style: {
            fontSize: '1.2em',
            textAlign: 'center',
            padding: '1rem',
            margin: '0px',
            cursor: 'default',
            color: 'green'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              color: 'black'
            },
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 15
          }, this), " Received"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : product.status) === 'ONHOLD' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: hello,
          type: "button",
          style: {
            fontSize: '1.2em',
            textAlign: 'center',
            padding: '1rem',
            margin: '0px',
            cursor: 'default',
            color: 'purple'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              color: 'black'
            },
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 15
          }, this), " Received"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : product.status) === 'REFUNDED' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: hello,
          type: "button",
          style: {
            fontSize: '1.2em',
            textAlign: 'center',
            padding: '1rem',
            margin: '0px',
            cursor: 'default',
            color: 'red'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              color: 'black'
            },
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 15
          }, this), " Refunded"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : product.status) === 'FLAGGED' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: hello,
          type: "button",
          style: {
            fontSize: '1.2em',
            textAlign: 'center',
            padding: '1rem',
            margin: '0px',
            cursor: 'default',
            color: 'red'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              color: 'black'
            },
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 15
          }, this), " Issue Raised!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this);
  }

  if (pageType === 'review') {
    var _product$photo3, _product$photo3$image;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: product === null || product === void 0 ? void 0 : (_product$photo3 = product.photo) === null || _product$photo3 === void 0 ? void 0 : (_product$photo3$image = _product$photo3.image) === null || _product$photo3$image === void 0 ? void 0 : _product$photo3$image.publicUrlTransformed,
        alt: product.name,
        style: {
          borderBottom: 'solid thin #eeeeee',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/product/${product.id}`,
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: (0,_lib_money__WEBPACK_IMPORTED_MODULE_7__.default)(product.price)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: '#015268'
        },
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "buttonList",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: product.id,
          "data-status": "DECLINED",
          onClick: handleStatus,
          type: "button",
          style: {
            fontSize: '1.15em'
          },
          children: "Decline \u274C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: {
            pathname: '/update',
            query: {
              id: product.id
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            style: {
              borderBottomLeftRadius: '15px',
              textAlign: 'center',
              fontSize: '1em'
            },
            children: "Edit \u270F\uFE0F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          id: product.id,
          "data-status": "AVAILABLE",
          onClick: handleStatus,
          type: "button",
          style: {
            fontSize: '1.15em'
          },
          children: "Accept \uD83D\uDC4D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo4 = product.photo) === null || _product$photo4 === void 0 ? void 0 : (_product$photo4$image = _product$photo4.image) === null || _product$photo4$image === void 0 ? void 0 : _product$photo4$image.publicUrlTransformed,
      alt: product.name,
      style: {
        borderBottom: 'solid thin #eeeeee',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/product/${product.id}`,
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [(0,_lib_money__WEBPACK_IMPORTED_MODULE_7__.default)(product.price), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Inc Postage"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_StatusTag__WEBPACK_IMPORTED_MODULE_16__.default, {
      children: product.condition
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        color: '#015268'
      },
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "buttonList",
      children: [(product === null || product === void 0 ? void 0 : (_product$user = product.user) === null || _product$user === void 0 ? void 0 : _product$user.id) === (user === null || user === void 0 ? void 0 : user.id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: {
          pathname: '/update',
          query: {
            id: product.id
          }
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          style: {
            borderBottomLeftRadius: '15px',
            textAlign: 'center',
            fontSize: '1em'
          },
          children: "Edit \u270F\uFE0F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 11
      }, this), (product === null || product === void 0 ? void 0 : (_product$user2 = product.user) === null || _product$user2 === void 0 ? void 0 : _product$user2.id) !== (user === null || user === void 0 ? void 0 : user.id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddToCart__WEBPACK_IMPORTED_MODULE_9__.default, {
        id: product.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 44
      }, this), (product === null || product === void 0 ? void 0 : (_product$user3 = product.user) === null || _product$user3 === void 0 ? void 0 : _product$user3.id) === (user === null || user === void 0 ? void 0 : user.id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_8__.default, {
        id: product.id,
        children: "Delete \uD83D\uDDD1\uFE0F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 360,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/ProductsReview.js":
/*!**************************************!*\
  !*** ./components/ProductsReview.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY_REVIEW": function() { return /* binding */ ALL_PRODUCTS_QUERY_REVIEW; },
/* harmony export */   "default": function() { return /* binding */ ProductsReview; }
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

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\ProductsReview.js";




const ALL_PRODUCTS_QUERY_REVIEW = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY_REVIEW {
    products(where: { status: { equals: "DRAFT" } }) {
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
  displayName: "ProductsReview__ProductsListStyles",
  componentId: "sc-ajpgb9-0"
})(["margin:0 auto;width:90%;display:grid;column-gap:25px;row-gap:25px;@media (min-width:600px){column-gap:10%;row-gap:2%;grid-template-columns:40% 40%;margin-bottom:200px;}@media (min-width:900px){margin-top:2%;width:70%;column-gap:7%;row-gap:2%;grid-template-columns:28% 28% 28%;}"]);
function ProductsReview() {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY_REVIEW, {});
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [data.products.length != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderTop: 'solid thin #015268',
        borderBottom: 'solid thin #015268',
        marginTop: '3rem',
        marginBottom: '3rem'
      },
      children: "To Review"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), data.products.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderTop: 'solid thin #015268',
        borderBottom: 'solid thin #015268',
        marginTop: '3rem',
        marginBottom: '3rem',
        color: 'red'
      },
      children: "No Products To Review"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {
      children: data.products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {
        product: product,
        pageType: "review"
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
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

/***/ }),

/***/ "./components/ProductsSold.js":
/*!************************************!*\
  !*** ./components/ProductsSold.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY_SOLD": function() { return /* binding */ ALL_PRODUCTS_QUERY_SOLD; },
/* harmony export */   "default": function() { return /* binding */ ProductsSold; }
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

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\ProductsSold.js";





const ALL_PRODUCTS_QUERY_SOLD = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY_SOLD($thisUserId: ID) {
    orderItems(
      where: { user: { id: { equals: $thisUserId } } }
      orderBy: [{ timeStamp: desc }]
    ) {
      id
      name
      price
      description
      status
      tracking
      trackingCompany
      email
      timeStamp
      date
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
      order {
        user {
          name
          address
          address2
          town
          county
          postcode
        }
      }
    }
  }
`;
const ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ProductsSold__ProductsListStyles",
  componentId: "sc-1q7uvmb-0"
})(["margin:0 auto;width:90%;display:grid;column-gap:25px;row-gap:25px;@media (min-width:600px){column-gap:10%;row-gap:2%;grid-template-columns:40% 40%;margin-bottom:200px;}@media (min-width:900px){margin-top:2%;width:70%;column-gap:7%;row-gap:2%;grid-template-columns:28% 28% 28%;}"]);
function ProductsSold() {
  const theUser = (0,_User__WEBPACK_IMPORTED_MODULE_5__.useUser)();
  const theId = theUser === null || theUser === void 0 ? void 0 : theUser.id;
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY_SOLD, {
    variables: {
      thisUserId: theId
    }
  });
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [data.orderItems.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      style: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'normal'
      },
      children: "You have made no sales!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this), data.orderItems.length != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderTop: 'solid thin #015268',
        borderBottom: 'solid thin #015268',
        marginTop: '3rem',
        marginBottom: '3rem'
      },
      children: "Sold"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {
      children: data.orderItems.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {
        product: product,
        pageType: "sold"
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Refund.js":
/*!******************************!*\
  !*** ./components/Refund.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Refund; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _ProductsSold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductsSold */ "./components/ProductsSold.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Refund.js";





const ButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "Refund__ButtonStyles",
  componentId: "sc-1rf4kq1-0"
})(["width:auto;background:white;color:red;border:thin solid #000000;font-size:1.2em;font-weight:600;padding:0.5rem 1.2rem;margin-right:7px;"]);
const REFUND_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation REFUND_MUTATION($id: ID!) {
    refund(id: $id) {
      id
    }
  }
`;
function Refund({
  id,
  children
}) {
  const [refund, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(REFUND_MUTATION, {
    variables: {
      id
    },
    refetchQueries: [{
      query: _ProductsSold__WEBPACK_IMPORTED_MODULE_5__.ALL_PRODUCTS_QUERY_SOLD
    }, 'ALL_PRODUCTS_QUERY_SOLD']
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonStyles, {
    style: {
      fontSize: '1.2em',
      marginTop: '12px'
    },
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm('Please confirm you wish to refund this item?\n\nTHIS CAN NOT BE UNDONE!')) {
        refund().catch(err => alert(err.message));
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Released.js":
/*!********************************!*\
  !*** ./components/Released.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Released; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _ProductsSold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductsSold */ "./components/ProductsSold.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Released.js";





const ButtonStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "Released__ButtonStyles",
  componentId: "sc-1lq5j2-0"
})(["width:auto;background:white;color:green;border:thin solid #000000;font-size:1.2em;font-weight:600;padding:0.5rem 1.2rem;margin-right:7px;"]);
const RELEASE_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation RELEASE_MUTATION($id: ID!) {
    released(id: $id) {
      id
    }
  }
`;
function Released({
  id,
  children
}) {
  const [released, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(RELEASE_MUTATION, {
    variables: {
      id
    },
    refetchQueries: [{
      query: _ProductsSold__WEBPACK_IMPORTED_MODULE_5__.ALL_PRODUCTS_QUERY_SOLD
    }, 'ALL_PRODUCTS_QUERY_SOLD']
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonStyles, {
    style: {
      fontSize: '1.2em',
      marginTop: '12px'
    },
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm('You are about to release the funds for this item into your Indie Bubba account.\n\nThe funds will then be paid out to your nominated bank account and arrive in the next few days.')) {
        released().catch(err => alert(err.message));
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ItemStyles",
  componentId: "sc-jpfmf1-0"
})(["background:white;border:thin solid #eeeeee;box-shadow:2px 2px #efefef;border-radius:15px;position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{border-top:solid thin #eeeeee;display:grid;width:100%;color:black;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ItemStyles);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-mjsbb4-0"
})(["background:#fde6ff;transform:rotate(3deg);color:#0077a0;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;span{font-size:0.5em;color:black;font-weight:normal;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/StatusTag.js":
/*!****************************************!*\
  !*** ./components/styles/StatusTag.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StatusTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "StatusTag",
  componentId: "sc-1htsrh9-0"
})(["background:#0077a0;transform:rotate(-3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;left:-3px;"]);
/* harmony default export */ __webpack_exports__["default"] = (StatusTag);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Title",
  componentId: "sc-nwc1wx-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:#fde6ff;display:inline;line-height:1.3;font-size:4rem;text-align:center;color:#0077a0;padding:0 1rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./lib/money.js":
/*!**********************!*\
  !*** ./lib/money.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
/* harmony export */ });
function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  };

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = new Intl.NumberFormat('en-GB', options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Mb2FkQmFyLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUGxlYXNlU2lnbkluLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qb3N0ZWQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzUmV2aWV3LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0c1NlbGwuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzU29sZC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUmVmdW5kLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9SZWxlYXNlZC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0l0ZW1TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QcmljZVRhZy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1N0YXR1c1RhZy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1RpdGxlLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vbGliL21vbmV5LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2lnbm9yZWR8QzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXGluZGllQnViYmFcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQUREX1RPX0NBUlRfTVVUQVRJT04iLCJncWwiLCJBZGRUb0NhcnQiLCJpZCIsImFkZFRvQ2FydCIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJtZSIsInVzZVVzZXIiLCJmb250U2l6ZSIsIkRFTEVURV9QUk9EVUNUX01VVEFUSU9OIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImV2aWN0IiwiaWRlbnRpZnkiLCJkYXRhIiwiZGVsZXRlUHJvZHVjdCIsIkRlbGV0ZVByb2R1Y3QiLCJjaGlsZHJlbiIsImVycm9yIiwiYm9yZGVyTGVmdCIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiY29uZmlybSIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwia2V5ZnJhbWVzIiwiTG9hZFN0eWxlIiwic3R5bGVkIiwiTG9hZEJhciIsImxvYWQiLCJCdXR0b25TdHlsZXMiLCJTbWFsbGVyQnV0dG9uU3R5bGVzIiwiTWVzc2FnZVJlY2VpdmVkIiwiTWVzc2FnZVNlbnQiLCJNZXNzYWdlU2VudFNwYW4iLCJNZXNzYWdlUmVjZWl2ZWRTcGFuIiwiQ1JFQVRFX0NIQVRfTVVUQVRJT04iLCJBTExfQ0hBVFNfUVVFUlkiLCJNb2RhbEZ1bmN0aW9uIiwicGFnZVR5cGVNb2QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VGb3JtIiwidGhlVXNlciIsInRoZUlkIiwiY3JlYXRlQ2hhdHRlciIsImxvYWRpbmdDcmVhdGUiLCJlcnJvckNyZWF0ZSIsImRhdGFDcmVhdGUiLCJ1c2VRdWVyeSIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInVzZVN0YXRlIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJjaGF0cyIsIm1hcCIsImNoYXQiLCJkYXRlVGltZSIsIkRhdGUiLCJ0aW1lU3RhbXAiLCJkdCIsInRvR01UU3RyaW5nIiwicmVwbGFjZSIsInVzZXJGcm9tIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibWFyZ2luQm90dG9tIiwicGxlYXNlU2lnbkluIiwic2lnbiIsInNldFNpZ24iLCJmb3Jnb3QiLCJzZXRGb3Jnb3QiLCJzaWduSGFuZGxlciIsImZvcmdvdEhhbmRsZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlVQREFURV9PUkRFUl9NVVRBVElPTiIsIlBvc3RlZCIsInVwZGF0ZU9yZGVySXRlbSIsIkFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIiwiVVBEQVRFX1NUQVRVU19NVVRBVElPTiIsImNhblJlbGVhc2UiLCJQcm9kdWN0IiwicHJvZHVjdCIsInBhZ2VUeXBlIiwiaGVsbG8iLCJkYXRlIiwidGhlRGF0ZSIsImRhdGVQbHVzIiwic2V0RGF0ZSIsImdldERhdGUiLCJuZXdEYXRlIiwiZmVlIiwiTWF0aCIsImNlaWwiLCJwcmljZSIsImFtb3VudCIsInBhcnNlSW50IiwidXNlciIsInVwZGF0ZVN0YXR1cyIsIkRhdGEiLCJFcnJvciIsIkxvYWRpbmciLCJoYW5kbGVTdGF0dXMiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImRhdGFTdGF0dXMiLCJBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImJvcmRlckJvdHRvbSIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImZvcm1hdE1vbmV5IiwiZGVzY3JpcHRpb24iLCJwYXRobmFtZSIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIiwibWFyZ2luVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wIiwib3JkZXIiLCJwb3N0Y29kZSIsInBhZGRpbmdCb3R0b20iLCJhZGRyZXNzIiwidG93biIsImNvdW50eSIsInN0YXR1cyIsImN1cnNvciIsImNvbmRpdGlvbiIsIlByb2R1Y3RzTGlzdFN0eWxlcyIsIlByb2R1Y3RzUmV2aWV3IiwicHJvZHVjdHMiLCJsZW5ndGgiLCJBTExfUFJPRFVDVFNfUVVFUllfU0VMTCIsIlByb2R1Y3RzU2VsbCIsInRoaXNVc2VySWQiLCJmb250V2VpZ2h0IiwiUHJvZHVjdHNTb2xkIiwib3JkZXJJdGVtcyIsIlJFRlVORF9NVVRBVElPTiIsIlJlZnVuZCIsInJlZnVuZCIsIlJFTEVBU0VfTVVUQVRJT04iLCJSZWxlYXNlZCIsInJlbGVhc2VkIiwiSXRlbVN0eWxlcyIsIlByaWNlVGFnIiwiU3RhdHVzVGFnIiwiVGl0bGUiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxvQkFBb0IsR0FBR0Msb0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7QUFRZSxTQUFTQyxTQUFULENBQW1CO0FBQUVDO0FBQUYsQ0FBbkIsRUFBMkI7QUFDeEMsUUFBTSxDQUFDQyxTQUFELEVBQVk7QUFBRUM7QUFBRixHQUFaLElBQTJCQywyREFBVyxDQUFDTixvQkFBRCxFQUF1QjtBQUNqRU8sYUFBUyxFQUFFO0FBQUVKO0FBQUYsS0FEc0Q7QUFFakVLLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHFEQUFrQkE7QUFBM0IsS0FBRDtBQUZpRCxHQUF2QixDQUE1QztBQUlBLFFBQU1DLEVBQUUsR0FBR0MsOENBQU8sRUFBbEI7QUFDQSxNQUFJLENBQUNELEVBQUwsRUFDRSxvQkFDRSw4REFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUEsMkJBQ0U7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRUUsZ0JBQVEsRUFBRTtBQUFaLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Ysc0JBQ0U7QUFDRSxZQUFRLEVBQUVSLE9BRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRUQsU0FIWDtBQUlFLFNBQUssRUFBRTtBQUFFUyxjQUFRLEVBQUU7QUFBWixLQUpUO0FBQUEsc0JBTU1SLE9BQU8sSUFBSSxLQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEO0FBQ0E7QUFFQSxNQUFNUyx1QkFBdUIsR0FBR2Isb0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTs7QUFTQSxTQUFTYyxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFDOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FELE9BQUssQ0FBQ0ksS0FBTixDQUFZSixLQUFLLENBQUNLLFFBQU4sQ0FBZUosT0FBTyxDQUFDSyxJQUFSLENBQWFDLGFBQTVCLENBQVo7QUFDRDs7QUFFYyxTQUFTQyxhQUFULENBQXVCO0FBQUVyQixJQUFGO0FBQU1zQjtBQUFOLENBQXZCLEVBQXlDO0FBQ3RELFFBQU0sQ0FBQ0YsYUFBRCxFQUFnQjtBQUFFbEIsV0FBRjtBQUFXcUI7QUFBWCxHQUFoQixJQUFzQ3BCLDJEQUFXLENBQ3JEUSx1QkFEcUQsRUFFckQ7QUFDRVAsYUFBUyxFQUFFO0FBQUVKO0FBQUYsS0FEYjtBQUVFWTtBQUZGLEdBRnFELENBQXZEO0FBT0Esc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTFksZ0JBQVUsRUFBRSxvQkFEUDtBQUVMQyw2QkFBdUIsRUFBRSxNQUZwQjtBQUdMZixjQUFRLEVBQUU7QUFITCxLQURUO0FBTUUsUUFBSSxFQUFDLFFBTlA7QUFPRSxZQUFRLEVBQUVSLE9BUFo7QUFRRSxXQUFPLEVBQUUsTUFBTTtBQUNiLFVBQUl3QixPQUFPLENBQUMsNENBQUQsQ0FBWCxFQUEyRDtBQUN6RDtBQUNBTixxQkFBYSxHQUFHTyxLQUFoQixDQUF1QkMsR0FBRCxJQUFTQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFwQztBQUNEO0FBQ0YsS0FiSDtBQUFBLGNBZUdSO0FBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUVBLE1BQU1wQixPQUFPLEdBQUc2Qiw0REFBSCxzRUFBYjtBQVlBLE1BQU1DLFNBQVMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdVJBZ0JFL0IsT0FoQkYsQ0FBZjtBQW9CZSxTQUFTZ0MsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQTJCO0FBQ3hDLHNCQUNFLDhEQUFDLFNBQUQ7QUFBVyxZQUFRLEVBQUVBLElBQXJCO0FBQTJCLGlCQUFXQSxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxZQUFZLEdBQUdILDBFQUFIO0FBQUE7QUFBQTtBQUFBLG1KQUFsQjtBQVdBLE1BQU1JLG1CQUFtQixHQUFHSiwwRUFBSDtBQUFBO0FBQUE7QUFBQSxvSUFBekI7QUFVQSxNQUFNSyxlQUFlLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVIQUFyQjtBQVVBLE1BQU1NLFdBQVcsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsd0hBQWpCO0FBVUEsTUFBTU8sZUFBZSxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxpRUFBckI7QUFNQSxNQUFNUSxtQkFBbUIsR0FBR1IscUVBQUg7QUFBQTtBQUFBO0FBQUEsOENBQXpCO0FBTUEsTUFBTVMsb0JBQW9CLEdBQUc1QyxvREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZBO0FBWU8sTUFBTTZDLGVBQWUsR0FBRzdDLG9EQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FqQk87QUFtQlEsU0FBUzhDLGFBQVQsQ0FBdUI7QUFBRTVDLElBQUY7QUFBTTZDO0FBQU4sQ0FBdkIsRUFBNEM7QUFDekQsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLGdCQUFWO0FBQXdCQyxhQUF4QjtBQUFtQ0M7QUFBbkMsTUFBaURDLHFEQUFPLENBQUM7QUFDN0RwQixXQUFPLEVBQUU7QUFEb0QsR0FBRCxDQUE5RDtBQUlBLFFBQU1xQixPQUFPLEdBQUcxQyw4Q0FBTyxFQUF2QjtBQUNBLFFBQU0yQyxLQUFLLEdBQUdELE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFbkQsRUFBdkI7QUFFQSxRQUFNLENBQUNxRCxhQUFELEVBQWdCO0FBQUVDLGlCQUFGO0FBQWlCQyxlQUFqQjtBQUE4QkM7QUFBOUIsR0FBaEIsSUFDSnJELDJEQUFXLENBQUN1QyxvQkFBRCxFQUF1QjtBQUNoQ3RDLGFBQVMsRUFBRTtBQUNUMEIsYUFBTyxFQUFFZ0IsTUFBTSxDQUFDaEIsT0FEUDtBQUVUOUIsUUFGUztBQUdUNkM7QUFIUyxLQURxQjtBQU1oQ3hDLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVxQztBQUFULEtBQUQsRUFBNkIsaUJBQTdCO0FBTmdCLEdBQXZCLENBRGI7QUFVQSxRQUFNO0FBQUV4QixRQUFGO0FBQVFJLFNBQVI7QUFBZXJCO0FBQWYsTUFBMkJ1RCx3REFBUSxDQUFDZCxlQUFELEVBQWtCO0FBQ3pEdkMsYUFBUyxFQUFFO0FBQ1RKO0FBRFM7QUFEOEMsR0FBbEIsQ0FBekM7QUFNQSxRQUFNO0FBQUEsT0FBQzBELFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFFQSxNQUFJMUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJcUIsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ08sT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxzQkFDRTtBQUFBLGVBQ0dlLFdBQVcsS0FBSyxPQUFoQixpQkFDQyw4REFBQyxZQUFEO0FBQWMsVUFBSSxFQUFDLFFBQW5CO0FBQTRCLGFBQU8sRUFBRSxNQUFNYyxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBTUdiLFdBQVcsS0FBSyxRQUFoQixpQkFDQyw4REFBQyxZQUFEO0FBQWMsVUFBSSxFQUFDLFFBQW5CO0FBQTRCLGFBQU8sRUFBRSxNQUFNYyxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBWUUsOERBQUMsNkNBQUQ7QUFBTyxZQUFNLEVBQUUsTUFBTUMsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBakM7QUFBK0MsWUFBTSxFQUFFQSxTQUF2RDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFDLGNBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRUcsaUJBQUssRUFBRSxLQUFUO0FBQWdCQyxxQkFBUyxFQUFFLFFBQTNCO0FBQXFDcEQsb0JBQVEsRUFBRTtBQUEvQyxXQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0UsOERBQUMsbUJBQUQ7QUFDRSx3QkFBVyxPQURiO0FBRUUsbUJBQVMsRUFBQyxRQUZaO0FBR0UsY0FBSSxFQUFDLFFBSFA7QUFJRSxpQkFBTyxFQUFFLE1BQU1pRCxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUo3QjtBQUFBLGlDQU1FO0FBQU0sK0JBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBaUJFLDhEQUFDLGlEQUFEO0FBQUEsa0JBQ0d2QyxJQUFJLENBQUM0QyxLQUFMLENBQVdDLEdBQVgsQ0FBZ0JDLElBQUQsSUFBVTtBQUN4QixnQkFBTUMsUUFBUSxHQUFHLElBQUlDLElBQUosQ0FBU0YsSUFBSSxDQUFDRyxTQUFkLENBQWpCO0FBQ0EsY0FBSUMsRUFBRSxHQUFHSCxRQUFRLENBQUNJLFdBQVQsRUFBVDtBQUNBRCxZQUFFLEdBQUdBLEVBQUUsQ0FBQ0UsT0FBSCxDQUFXLEtBQVgsRUFBa0IsRUFBbEIsQ0FBTDtBQUNBLDhCQUNFO0FBQUEsdUJBQ0dOLElBQUksQ0FBQ08sUUFBTCxDQUFjeEUsRUFBZCxLQUFxQm9ELEtBQXJCLGlCQUNDO0FBQUEsc0NBQ0UsOERBQUMsZUFBRDtBQUFBLDBCQUFrQmlCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQyxXQUFEO0FBQUEsMEJBQWNKLElBQUksQ0FBQ25DO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQSw0QkFGSixFQU9HbUMsSUFBSSxDQUFDTyxRQUFMLENBQWN4RSxFQUFkLEtBQXFCb0QsS0FBckIsaUJBQ0M7QUFBQSxzQ0FDRSw4REFBQyxtQkFBRDtBQUFBLDBCQUFzQmlCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQyxlQUFEO0FBQUEsMEJBQWtCSixJQUFJLENBQUNuQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUEsNEJBUko7QUFBQSxhQUFVbUMsSUFBSSxDQUFDakUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBZ0JELFNBcEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQXdDRSw4REFBQyxtREFBRDtBQUFBLCtCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQUU2RCxpQkFBSyxFQUFFO0FBQVQsV0FEVDtBQUVFLGtCQUFRLEVBQUUsTUFBT1ksQ0FBUCxJQUFhO0FBQ3JCQSxhQUFDLENBQUNDLGNBQUY7QUFDQSxrQkFBTUMsR0FBRyxHQUFHLE1BQU10QixhQUFhLEVBQS9CO0FBQ0FMLHFCQUFTO0FBQ1YsV0FOSDtBQUFBLGtDQVFFO0FBQ0UsaUJBQUssRUFBRTtBQUFFYSxtQkFBSyxFQUFFLE1BQVQ7QUFBaUJlLDBCQUFZLEVBQUU7QUFBL0IsYUFEVDtBQUVFLGdCQUFJLEVBQUMsR0FGUDtBQUdFLG9CQUFRLE1BSFY7QUFJRSxjQUFFLEVBQUMsU0FKTDtBQUtFLGdCQUFJLEVBQUMsU0FMUDtBQU1FLHVCQUFXLEVBQUMsU0FOZDtBQU9FLGlCQUFLLEVBQUU5QixNQUFNLENBQUNoQixPQVBoQjtBQVFFLG9CQUFRLEVBQUVpQjtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkYsZUFrQkUsOERBQUMsbUJBQUQ7QUFBcUIsZ0JBQUksRUFBQyxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBLGtCQURGO0FBOEVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TUQ7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTOEIsWUFBVCxDQUFzQjtBQUFFdkQ7QUFBRixDQUF0QixFQUFvQztBQUNqRCxRQUFNO0FBQUEsT0FBQ3dELElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCbkIsK0NBQVEsQ0FBQyxJQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNvQixNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQnJCLCtDQUFRLENBQUMsS0FBRCxDQUFwQzs7QUFDQSxRQUFNc0IsV0FBVyxHQUFHLE1BQU07QUFDeEJILFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUUsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEdBSEQ7O0FBSUEsUUFBTUUsYUFBYSxHQUFHLE1BQU07QUFDMUJKLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUUsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEdBSEQ7O0FBS0EsUUFBTXpFLEVBQUUsR0FBR0MsOENBQU8sRUFBbEI7QUFDQSxNQUFJLENBQUNELEVBQUwsRUFDRSxvQkFDRTtBQUFBLGVBQ0dzRSxJQUFJLGlCQUNIO0FBQUEsOEJBQ0UsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBRUssYUFGWDtBQUdFLGFBQUssRUFBRTtBQUFFQyx5QkFBZSxFQUFFLE9BQW5CO0FBQTRCQyxlQUFLLEVBQUU7QUFBbkMsU0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUEsb0JBRkosRUFhR0wsTUFBTSxpQkFDTDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLEVBQUVFLFdBRlg7QUFHRSxhQUFLLEVBQUU7QUFBRUUseUJBQWUsRUFBRSxPQUFuQjtBQUE0QkMsZUFBSyxFQUFFO0FBQW5DLFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLG9CQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJGLFNBQU8vRCxRQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNYyxZQUFZLEdBQUdILDBFQUFIO0FBQUE7QUFBQTtBQUFBLHFKQUFsQjtBQVdBLE1BQU1xRCxxQkFBcUIsR0FBR3hGLG9EQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBT2UsU0FBU3lGLE1BQVQsQ0FBZ0I7QUFBRXZGLElBQUY7QUFBTXNCO0FBQU4sQ0FBaEIsRUFBa0M7QUFDL0MsUUFBTSxDQUFDa0UsZUFBRCxFQUFrQjtBQUFFdEYsV0FBRjtBQUFXcUI7QUFBWCxHQUFsQixJQUF3Q3BCLDJEQUFXLENBQ3ZEbUYscUJBRHVELEVBRXZEO0FBQ0VsRixhQUFTLEVBQUU7QUFBRUo7QUFBRixLQURiO0FBRUVLLGtCQUFjLEVBQUUsQ0FDZDtBQUFFQyxXQUFLLEVBQUVtRixrRUFBdUJBO0FBQWhDLEtBRGMsRUFFZCx5QkFGYztBQUZsQixHQUZ1RCxDQUF6RDtBQVVBLHNCQUNFLDhEQUFDLFlBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTC9FLGNBQVEsRUFBRTtBQURMLEtBRFQ7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFlBQVEsRUFBRVIsT0FMWjtBQU1FLFdBQU8sRUFBRSxNQUFNO0FBQ2IsVUFBSXdCLE9BQU8sQ0FBQywyQ0FBRCxDQUFYLEVBQTBEO0FBQ3hEOEQsdUJBQWUsR0FBRzdELEtBQWxCLENBQXlCQyxHQUFELElBQVNDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQXRDO0FBQ0Q7QUFDRixLQVZIO0FBQUEsY0FZR1I7QUFaSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNb0Usc0JBQXNCLEdBQUc1RixvREFBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQVFBLElBQUk2RixVQUFVLEdBQUcsSUFBakI7QUFFZSxTQUFTQyxPQUFULENBQWlCO0FBQUVDLFNBQUY7QUFBV0M7QUFBWCxDQUFqQixFQUF3QztBQUFBOztBQUNyRCxXQUFTQyxLQUFULEdBQWlCLENBQUU7O0FBQ25CO0FBQ0UsVUFBTTNCLFNBQVMsR0FBR3lCLE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFRyxJQUEzQjtBQUNBLFVBQU1DLE9BQU8sR0FBRyxJQUFJOUIsSUFBSixDQUFTQyxTQUFULENBQWhCO0FBQ0EsVUFBTThCLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxPQUFSLENBQWdCRixPQUFPLENBQUNHLE9BQVIsS0FBb0IsRUFBcEMsQ0FBakI7QUFDQSxVQUFNSixJQUFJLEdBQUcsSUFBSTdCLElBQUosRUFBYjtBQUNBLFVBQU1rQyxPQUFPLEdBQUdMLElBQUksQ0FBQ0csT0FBTCxDQUFhSCxJQUFJLENBQUNJLE9BQUwsRUFBYixDQUFoQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdILFFBQWQsRUFBd0I7QUFDdEJQLGdCQUFVLEdBQUcsS0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxnQkFBVSxHQUFHLElBQWI7QUFDRDtBQUNGO0FBRUQsUUFBTVcsR0FBRyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVVgsT0FBTyxDQUFDWSxLQUFSLEdBQWdCLElBQTFCLENBQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ2QsT0FBTyxDQUFDWSxLQUFULENBQVIsR0FBMEJILEdBQXpDO0FBRUEsUUFBTU0sSUFBSSxHQUFHbkcsK0NBQU8sRUFBcEI7QUFDQSxRQUFNLENBQUNvRyxZQUFELEVBQWU7QUFBRTFGLFFBQUksRUFBRTJGLElBQVI7QUFBY3ZGLFNBQUssRUFBRXdGLEtBQXJCO0FBQTRCN0csV0FBTyxFQUFFOEc7QUFBckMsR0FBZixJQUNKN0csMkRBQVcsQ0FBQ3VGLHNCQUFELENBRGI7O0FBR0EsUUFBTXVCLFlBQVksR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ3BDLFVBQU1sSCxFQUFFLEdBQUdrSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixJQUExQixDQUFYO0FBQ0EsVUFBTUMsVUFBVSxHQUFHSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixhQUExQixDQUFuQjtBQUNBLFVBQU16QyxHQUFHLEdBQUcsTUFBTWtDLFlBQVksQ0FBQztBQUM3QnpHLGVBQVMsRUFBRTtBQUNUSixVQURTO0FBRVRxSDtBQUZTLE9BRGtCO0FBSzdCaEgsb0JBQWMsRUFBRSxDQUNkO0FBQUVDLGFBQUssRUFBRWdILHVFQUF5QkE7QUFBbEMsT0FEYyxFQUVkLDJCQUZjO0FBTGEsS0FBRCxDQUE5QjtBQVVELEdBYkQ7O0FBZUEsTUFBSXhCLFFBQVEsS0FBSyxNQUFqQixFQUF5QjtBQUFBOztBQUN2Qix3QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFRCxPQUFGLGFBQUVBLE9BQUYseUNBQUVBLE9BQU8sQ0FBRTBCLEtBQVgsMkVBQUUsZUFBZ0JDLEtBQWxCLHlEQUFFLHFCQUF1QkMsb0JBRDlCO0FBRUUsV0FBRyxFQUFFNUIsT0FBTyxDQUFDNkIsSUFGZjtBQUdFLGFBQUssRUFBRTtBQUNMQyxzQkFBWSxFQUFFLG9CQURUO0FBRUxDLDZCQUFtQixFQUFFLE1BRmhCO0FBR0xDLDhCQUFvQixFQUFFO0FBSGpCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxZQUFXaEMsT0FBTyxDQUFDN0YsRUFBRyxFQUFuQztBQUFBLG9CQUF1QzZGLE9BQU8sQ0FBQzZCO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFhRSw4REFBQyxxREFBRDtBQUFBLGtCQUFXSSxtREFBVyxDQUFDakMsT0FBTyxDQUFDWSxLQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQWNFO0FBQUcsYUFBSyxFQUFFO0FBQUVwQixlQUFLLEVBQUU7QUFBVCxTQUFWO0FBQUEsa0JBQWlDUSxPQUFPLENBQUNrQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsZUFlRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFLDhEQUFDLGtEQUFEO0FBQ0UsY0FBSSxFQUFFO0FBQ0pDLG9CQUFRLEVBQUUsU0FETjtBQUVKMUgsaUJBQUssRUFBRTtBQUNMTixnQkFBRSxFQUFFNkYsT0FBTyxDQUFDN0Y7QUFEUDtBQUZILFdBRFI7QUFBQSxpQ0FRRTtBQUNFLGlCQUFLLEVBQUU7QUFDTGlJLG9DQUFzQixFQUFFLE1BRG5CO0FBRUxuRSx1QkFBUyxFQUFFLFFBRk47QUFHTHBELHNCQUFRLEVBQUU7QUFITCxhQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQW1CRSw4REFBQyxtREFBRDtBQUFlLFlBQUUsRUFBRW1GLE9BQU8sQ0FBQzdGLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXVDRDs7QUFDRCxNQUFJOEYsUUFBUSxLQUFLLE1BQWpCLEVBQXlCO0FBQUE7O0FBQ3ZCLHdCQUNFLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUVELE9BQUYsYUFBRUEsT0FBRiwwQ0FBRUEsT0FBTyxDQUFFMEIsS0FBWCw2RUFBRSxnQkFBZ0JDLEtBQWxCLDBEQUFFLHNCQUF1QkMsb0JBRDlCO0FBRUUsV0FBRyxFQUFFNUIsT0FBTyxDQUFDNkIsSUFGZjtBQUdFLGFBQUssRUFBRTtBQUNMQyxzQkFBWSxFQUFFLG9CQURUO0FBRUxDLDZCQUFtQixFQUFFLE1BRmhCO0FBR0xDLDhCQUFvQixFQUFFO0FBSGpCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRTtBQUNFLGVBQUssRUFBRTtBQUNMSyxzQkFBVSxFQUFFLFNBRFA7QUFFTEMsbUJBQU8sRUFBRSxRQUZKO0FBR0xDLHNCQUFVLEVBQUUsS0FIUDtBQUlMMUgsb0JBQVEsRUFBRSxNQUpMO0FBS0xvRCxxQkFBUyxFQUFFLFNBTE47QUFNTHVCLGlCQUFLLEVBQUUsU0FORjtBQU9MZ0QsbUJBQU8sRUFBRTtBQVBKLFdBRFQ7QUFBQSxvQkFXR3hDLE9BQU8sQ0FBQzZCO0FBWFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQXlCRTtBQUFHLGFBQUssRUFBRTtBQUFFckMsZUFBSyxFQUFFO0FBQVQsU0FBVjtBQUFBLGtCQUFpQ1EsT0FBTyxDQUFDa0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCRixlQTBCRTtBQUFHLGFBQUssRUFBRTtBQUFFMUMsZUFBSyxFQUFFLE1BQVQ7QUFBaUJpRCxnQkFBTSxFQUFFO0FBQXpCLFNBQVY7QUFBQSxnQ0FBc0R6QyxPQUFPLENBQUNHLElBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRixlQTJCRTtBQUFHLGFBQUssRUFBRTtBQUFFWCxlQUFLLEVBQUUsT0FBVDtBQUFrQmtELG1CQUFTLEVBQUU7QUFBN0IsU0FBVjtBQUFBLGdDQUNFO0FBQU0sZUFBSyxFQUFFO0FBQUVsRCxpQkFBSyxFQUFFO0FBQVQsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZ0JBR2F5QyxtREFBVyxDQUFDakMsT0FBTyxDQUFDWSxLQUFULENBSHhCLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixnQkFLYXFCLG1EQUFXLENBQUN4QixHQUFELENBTHhCLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixXQU9Rd0IsbURBQVcsQ0FBQ3BCLE1BQUQsQ0FQbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGLGVBb0NFO0FBQ0UsYUFBSyxFQUFFO0FBQ0w0QixnQkFBTSxFQUFFLEtBREg7QUFFTEUscUJBQVcsRUFBRSxNQUZSO0FBR0xDLG9CQUFVLEVBQUUsTUFIUDtBQUlMcEQsZUFBSyxFQUFFLE9BSkY7QUFLTHFELG1CQUFTLEVBQUU7QUFMTixTQURUO0FBQUEsOEJBU1UsR0FUVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0YsRUFnREcsQ0FBQTdDLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsOEJBQUFBLE9BQU8sQ0FBRThDLEtBQVQseUZBQWdCL0IsSUFBaEIsNEVBQXNCZ0MsUUFBdEIsTUFBbUMsRUFBbkMsaUJBQ0M7QUFDRSxhQUFLLEVBQUU7QUFDTDlFLG1CQUFTLEVBQUUsUUFETjtBQUVMdUIsZUFBSyxFQUFFLEtBRkY7QUFHTGlELGdCQUFNLEVBQUUsS0FISDtBQUlMTyx1QkFBYSxFQUFFO0FBSlYsU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpESixFQTRERyxDQUFBaEQsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCwrQkFBQUEsT0FBTyxDQUFFOEMsS0FBVCw0RkFBZ0IvQixJQUFoQiw4RUFBc0JnQyxRQUF0QixNQUFtQyxFQUFuQyxpQkFDQztBQUNFLGFBQUssRUFBRTtBQUNMTixnQkFBTSxFQUFFLEtBREg7QUFFTE8sdUJBQWEsRUFBRSxLQUZWO0FBR0x4RCxlQUFLLEVBQUU7QUFIRixTQURUO0FBQUEsbUJBT0dRLE9BUEgsYUFPR0EsT0FQSCwwQ0FPR0EsT0FBTyxDQUFFOEMsS0FQWiw0RUFPRyxnQkFBZ0IvQixJQVBuQix5REFPRyxxQkFBc0JjLElBUHpCLG9CQU8rQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVAvQixFQVFHN0IsT0FSSCxhQVFHQSxPQVJILDBDQVFHQSxPQUFPLENBQUU4QyxLQVJaLDRFQVFHLGdCQUFnQi9CLElBUm5CLHlEQVFHLHFCQUFzQmtDLE9BUnpCLG9CQVFrQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJsQyxFQVNHakQsT0FUSCxhQVNHQSxPQVRILDBDQVNHQSxPQUFPLENBQUU4QyxLQVRaLDRFQVNHLGdCQUFnQi9CLElBVG5CLHlEQVNHLHFCQUFzQm1DLElBVHpCLG9CQVMrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVQvQixFQVVHbEQsT0FWSCxhQVVHQSxPQVZILDBDQVVHQSxPQUFPLENBQUU4QyxLQVZaLDRFQVVHLGdCQUFnQi9CLElBVm5CLHlEQVVHLHFCQUFzQm9DLE1BVnpCLG9CQVVpQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZqQyxFQVdHbkQsT0FYSCxhQVdHQSxPQVhILDBDQVdHQSxPQUFPLENBQUU4QyxLQVhaLDRFQVdHLGdCQUFnQi9CLElBWG5CLHlEQVdHLHFCQUFzQmdDLFFBWHpCLG9CQVdtQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3REosZUE0RUUsOERBQUMsNENBQUQ7QUFBZSxVQUFFLEVBQUUvQyxPQUFPLENBQUM3RixFQUEzQjtBQUErQixtQkFBVyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1RUYsRUE4RUcsQ0FBQTZGLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFb0QsTUFBVCxNQUFvQixVQUFwQixJQUFrQyxDQUFBcEQsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVvRCxNQUFULE1BQW9CLFVBQXRELGlCQUNDLDhEQUFDLDZDQUFEO0FBQVEsVUFBRSxFQUFFcEQsT0FBTyxDQUFDN0YsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvRUosRUFrRkcsQ0FBQTZGLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFb0QsTUFBVCxNQUFvQixRQUFwQixpQkFDQyw4REFBQywrQ0FBRDtBQUFVLFVBQUUsRUFBRXBELE9BQU8sQ0FBQzdGLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkZKLEVBc0ZHMkYsVUFBVSxLQUFLLEtBQWYsSUFDQyxDQUFBRSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRW9ELE1BQVQsTUFBb0IsUUFEckIsSUFFQyxDQUFBcEQsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVvRCxNQUFULE1BQW9CLFVBRnJCLElBR0MsQ0FBQXBELE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFb0QsTUFBVCxNQUFvQixTQUhyQixJQUlDLENBQUFwRCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRW9ELE1BQVQsTUFBb0IsY0FKckIsSUFLQyxDQUFBcEQsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVvRCxNQUFULE1BQW9CLFVBTHJCLGlCQU1HLDhEQUFDLCtDQUFEO0FBQVUsVUFBRSxFQUFFcEQsT0FBTyxDQUFDN0YsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1Rk4sRUErRkcsQ0FBQTZGLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFb0QsTUFBVCxNQUFvQixNQUFwQixpQkFDQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFLDhEQUFDLDZDQUFEO0FBQVEsWUFBRSxFQUFFcEQsT0FBTyxDQUFDN0YsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEdKLEVBb0dHLENBQUE2RixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRW9ELE1BQVQsTUFBb0IsUUFBcEIsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUVsRCxLQURYO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUU7QUFDTHJGLG9CQUFRLEVBQUUsT0FETDtBQUVMb0QscUJBQVMsRUFBRSxRQUZOO0FBR0x1RSxtQkFBTyxFQUFFLE1BSEo7QUFJTEMsa0JBQU0sRUFBRSxLQUpIO0FBS0xZLGtCQUFNLEVBQUUsU0FMSDtBQU1MN0QsaUJBQUssRUFBRTtBQU5GLFdBSFQ7QUFBQSxrQ0FZRTtBQUFNLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJHSixFQXNIRyxDQUFBUSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRW9ELE1BQVQsTUFBb0IsVUFBcEIsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUVsRCxLQURYO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUU7QUFDTHJGLG9CQUFRLEVBQUUsT0FETDtBQUVMb0QscUJBQVMsRUFBRSxRQUZOO0FBR0x1RSxtQkFBTyxFQUFFLE1BSEo7QUFJTEMsa0JBQU0sRUFBRSxLQUpIO0FBS0xZLGtCQUFNLEVBQUUsU0FMSDtBQU1MN0QsaUJBQUssRUFBRTtBQU5GLFdBSFQ7QUFBQSxrQ0FZRTtBQUFNLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZISixFQXdJRyxDQUFBUSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRW9ELE1BQVQsTUFBb0IsUUFBcEIsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUVsRCxLQURYO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUU7QUFDTHJGLG9CQUFRLEVBQUUsT0FETDtBQUVMb0QscUJBQVMsRUFBRSxRQUZOO0FBR0x1RSxtQkFBTyxFQUFFLE1BSEo7QUFJTEMsa0JBQU0sRUFBRSxLQUpIO0FBS0xZLGtCQUFNLEVBQUUsU0FMSDtBQU1MN0QsaUJBQUssRUFBRTtBQU5GLFdBSFQ7QUFBQSxrQ0FZRTtBQUFNLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpJSixFQTBKRyxDQUFBUSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRW9ELE1BQVQsTUFBb0IsVUFBcEIsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUVsRCxLQURYO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUU7QUFDTHJGLG9CQUFRLEVBQUUsT0FETDtBQUVMb0QscUJBQVMsRUFBRSxRQUZOO0FBR0x1RSxtQkFBTyxFQUFFLE1BSEo7QUFJTEMsa0JBQU0sRUFBRSxLQUpIO0FBS0xZLGtCQUFNLEVBQUUsU0FMSDtBQU1MN0QsaUJBQUssRUFBRTtBQU5GLFdBSFQ7QUFBQSxrQ0FZRTtBQUFNLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNKSixFQTRLRyxDQUFBUSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRW9ELE1BQVQsTUFBb0IsU0FBcEIsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUVsRCxLQURYO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUU7QUFDTHJGLG9CQUFRLEVBQUUsT0FETDtBQUVMb0QscUJBQVMsRUFBRSxRQUZOO0FBR0x1RSxtQkFBTyxFQUFFLE1BSEo7QUFJTEMsa0JBQU0sRUFBRSxLQUpIO0FBS0xZLGtCQUFNLEVBQUUsU0FMSDtBQU1MN0QsaUJBQUssRUFBRTtBQU5GLFdBSFQ7QUFBQSxrQ0FZRTtBQUFNLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdLSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWlNRDs7QUFDRCxNQUFJUyxRQUFRLEtBQUssUUFBakIsRUFBMkI7QUFBQTs7QUFDekIsd0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBRUQsT0FBRixhQUFFQSxPQUFGLDBDQUFFQSxPQUFPLENBQUUwQixLQUFYLDZFQUFFLGdCQUFnQkMsS0FBbEIsMERBQUUsc0JBQXVCQyxvQkFEOUI7QUFFRSxXQUFHLEVBQUU1QixPQUFPLENBQUM2QixJQUZmO0FBR0UsYUFBSyxFQUFFO0FBQ0xDLHNCQUFZLEVBQUUsb0JBRFQ7QUFFTEMsNkJBQW1CLEVBQUUsTUFGaEI7QUFHTEMsOEJBQW9CLEVBQUU7QUFIakI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSw4REFBQyxrREFBRDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVdoQyxPQUFPLENBQUM3RixFQUFHLEVBQW5DO0FBQUEsb0JBQXVDNkYsT0FBTyxDQUFDNkI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWFFLDhEQUFDLHFEQUFEO0FBQUEsa0JBQVdJLG1EQUFXLENBQUNqQyxPQUFPLENBQUNZLEtBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0U7QUFBRyxhQUFLLEVBQUU7QUFBRXBCLGVBQUssRUFBRTtBQUFULFNBQVY7QUFBQSxrQkFBaUNRLE9BQU8sQ0FBQ2tDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQWVFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFDRSxZQUFFLEVBQUVsQyxPQUFPLENBQUM3RixFQURkO0FBRUUseUJBQVksVUFGZDtBQUdFLGlCQUFPLEVBQUVpSCxZQUhYO0FBSUUsY0FBSSxFQUFDLFFBSlA7QUFLRSxlQUFLLEVBQUU7QUFBRXZHLG9CQUFRLEVBQUU7QUFBWixXQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUsOERBQUMsa0RBQUQ7QUFDRSxjQUFJLEVBQUU7QUFDSnNILG9CQUFRLEVBQUUsU0FETjtBQUVKMUgsaUJBQUssRUFBRTtBQUNMTixnQkFBRSxFQUFFNkYsT0FBTyxDQUFDN0Y7QUFEUDtBQUZILFdBRFI7QUFBQSxpQ0FRRTtBQUNFLGlCQUFLLEVBQUU7QUFDTGlJLG9DQUFzQixFQUFFLE1BRG5CO0FBRUxuRSx1QkFBUyxFQUFFLFFBRk47QUFHTHBELHNCQUFRLEVBQUU7QUFITCxhQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQTRCRTtBQUNFLFlBQUUsRUFBRW1GLE9BQU8sQ0FBQzdGLEVBRGQ7QUFFRSx5QkFBWSxXQUZkO0FBR0UsaUJBQU8sRUFBRWlILFlBSFg7QUFJRSxjQUFJLEVBQUMsUUFKUDtBQUtFLGVBQUssRUFBRTtBQUFFdkcsb0JBQVEsRUFBRTtBQUFaLFdBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBd0REOztBQUNELHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLEVBQUVtRixPQUFGLGFBQUVBLE9BQUYsMENBQUVBLE9BQU8sQ0FBRTBCLEtBQVgsNkVBQUUsZ0JBQWdCQyxLQUFsQiwwREFBRSxzQkFBdUJDLG9CQUQ5QjtBQUVFLFNBQUcsRUFBRTVCLE9BQU8sQ0FBQzZCLElBRmY7QUFHRSxXQUFLLEVBQUU7QUFDTEMsb0JBQVksRUFBRSxvQkFEVDtBQUVMQywyQkFBbUIsRUFBRSxNQUZoQjtBQUdMQyw0QkFBb0IsRUFBRTtBQUhqQjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUcsWUFBV2hDLE9BQU8sQ0FBQzdGLEVBQUcsRUFBbkM7QUFBQSxrQkFBdUM2RixPQUFPLENBQUM2QjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBYUUsOERBQUMscURBQUQ7QUFBQSxpQkFDR0ksbURBQVcsQ0FBQ2pDLE9BQU8sQ0FBQ1ksS0FBVCxDQURkLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWtCRSw4REFBQyx1REFBRDtBQUFBLGdCQUFZWixPQUFPLENBQUNzRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLGVBbUJFO0FBQUcsV0FBSyxFQUFFO0FBQUU5RCxhQUFLLEVBQUU7QUFBVCxPQUFWO0FBQUEsZ0JBQWlDUSxPQUFPLENBQUNrQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLGVBb0JFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSxpQkFDRyxDQUFBbEMsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCw2QkFBQUEsT0FBTyxDQUFFZSxJQUFULGdFQUFlNUcsRUFBZixPQUFzQjRHLElBQXRCLGFBQXNCQSxJQUF0Qix1QkFBc0JBLElBQUksQ0FBRTVHLEVBQTVCLGtCQUNDLDhEQUFDLGtEQUFEO0FBQ0UsWUFBSSxFQUFFO0FBQ0pnSSxrQkFBUSxFQUFFLFNBRE47QUFFSjFILGVBQUssRUFBRTtBQUNMTixjQUFFLEVBQUU2RixPQUFPLENBQUM3RjtBQURQO0FBRkgsU0FEUjtBQUFBLCtCQVFFO0FBQ0UsZUFBSyxFQUFFO0FBQ0xpSSxrQ0FBc0IsRUFBRSxNQURuQjtBQUVMbkUscUJBQVMsRUFBRSxRQUZOO0FBR0xwRCxvQkFBUSxFQUFFO0FBSEwsV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQXFCRyxDQUFBbUYsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCw4QkFBQUEsT0FBTyxDQUFFZSxJQUFULGtFQUFlNUcsRUFBZixPQUFzQjRHLElBQXRCLGFBQXNCQSxJQUF0Qix1QkFBc0JBLElBQUksQ0FBRTVHLEVBQTVCLGtCQUFrQyw4REFBQywrQ0FBRDtBQUFXLFVBQUUsRUFBRTZGLE9BQU8sQ0FBQzdGO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQnJDLEVBc0JHLENBQUE2RixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLDhCQUFBQSxPQUFPLENBQUVlLElBQVQsa0VBQWU1RyxFQUFmLE9BQXNCNEcsSUFBdEIsYUFBc0JBLElBQXRCLHVCQUFzQkEsSUFBSSxDQUFFNUcsRUFBNUIsa0JBQ0MsOERBQUMsbURBQUQ7QUFBZSxVQUFFLEVBQUU2RixPQUFPLENBQUM3RixFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlpEO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTXNILHlCQUF5QixHQUFHeEgsb0RBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZk87QUFpQlAsTUFBTXNKLGtCQUFrQixHQUFHbkgsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNlJBQXhCO0FBcUJlLFNBQVNvSCxjQUFULEdBQTBCO0FBQ3ZDLFFBQU07QUFBRWxJLFFBQUY7QUFBUUksU0FBUjtBQUFlckI7QUFBZixNQUEyQnVELHdEQUFRLENBQUM2RCx5QkFBRCxFQUE0QixFQUE1QixDQUF6QztBQUNBLE1BQUlwSCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlxQixLQUFKLEVBQVcsb0JBQU87QUFBQSwwQkFBV0EsS0FBSyxDQUFDTyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLHNCQUNFO0FBQUEsZUFDR1gsSUFBSSxDQUFDbUksUUFBTCxDQUFjQyxNQUFkLElBQXdCLENBQXhCLGlCQUNDO0FBQ0UsV0FBSyxFQUFFO0FBQ0x6RixpQkFBUyxFQUFFLFFBRE47QUFFTDRFLGlCQUFTLEVBQUUsb0JBRk47QUFHTGYsb0JBQVksRUFBRSxvQkFIVDtBQUlMWSxpQkFBUyxFQUFFLE1BSk47QUFLTDNELG9CQUFZLEVBQUU7QUFMVCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFjR3pELElBQUksQ0FBQ21JLFFBQUwsQ0FBY0MsTUFBZCxLQUF5QixDQUF6QixpQkFDQztBQUNFLFdBQUssRUFBRTtBQUNMekYsaUJBQVMsRUFBRSxRQUROO0FBRUw0RSxpQkFBUyxFQUFFLG9CQUZOO0FBR0xmLG9CQUFZLEVBQUUsb0JBSFQ7QUFJTFksaUJBQVMsRUFBRSxNQUpOO0FBS0wzRCxvQkFBWSxFQUFFLE1BTFQ7QUFNTFMsYUFBSyxFQUFFO0FBTkYsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKLGVBNEJFLDhEQUFDLGtCQUFEO0FBQUEsZ0JBQ0dsRSxJQUFJLENBQUNtSSxRQUFMLENBQWN0RixHQUFkLENBQW1CNkIsT0FBRCxpQkFDakIsOERBQUMsNkNBQUQ7QUFBMEIsZUFBTyxFQUFFQSxPQUFuQztBQUE0QyxnQkFBUSxFQUFDO0FBQXJELFNBQWNBLE9BQU8sQ0FBQzdGLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTXdKLHVCQUF1QixHQUFHMUosb0RBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZk87QUFpQlAsTUFBTXNKLGtCQUFrQixHQUFHbkgsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNlJBQXhCO0FBcUJlLFNBQVN3SCxZQUFULEdBQXdCO0FBQ3JDLFFBQU10RyxPQUFPLEdBQUcxQyw4Q0FBTyxFQUF2QjtBQUVBLFFBQU0yQyxLQUFLLEdBQUdELE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFbkQsRUFBdkI7QUFDQSxRQUFNO0FBQUVtQixRQUFGO0FBQVFJLFNBQVI7QUFBZXJCO0FBQWYsTUFBMkJ1RCx3REFBUSxDQUFDK0YsdUJBQUQsRUFBMEI7QUFDakVwSixhQUFTLEVBQUU7QUFDVHNKLGdCQUFVLEVBQUV0RztBQURIO0FBRHNELEdBQTFCLENBQXpDO0FBS0EsTUFBSWxELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSXFCLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNPLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsc0JBQ0U7QUFBQSxlQUNHWCxJQUFJLENBQUNtSSxRQUFMLENBQWNDLE1BQWQsS0FBeUIsQ0FBekIsaUJBQ0M7QUFBSSxXQUFLLEVBQUU7QUFBRWxFLGFBQUssRUFBRSxLQUFUO0FBQWdCdkIsaUJBQVMsRUFBRSxRQUEzQjtBQUFxQzZGLGtCQUFVLEVBQUU7QUFBakQsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBTUd4SSxJQUFJLENBQUNtSSxRQUFMLENBQWNDLE1BQWQsSUFBd0IsQ0FBeEIsaUJBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTHpGLGlCQUFTLEVBQUUsUUFETjtBQUVMNEUsaUJBQVMsRUFBRSxvQkFGTjtBQUdMZixvQkFBWSxFQUFFLG9CQUhUO0FBSUxZLGlCQUFTLEVBQUUsTUFKTjtBQUtMM0Qsb0JBQVksRUFBRTtBQUxULE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQW1CRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHekQsSUFBSSxDQUFDbUksUUFBTCxDQUFjdEYsR0FBZCxDQUFtQjZCLE9BQUQsaUJBQ2pCLDhEQUFDLDZDQUFEO0FBQTBCLGVBQU8sRUFBRUEsT0FBbkM7QUFBNEMsZ0JBQVEsRUFBQztBQUFyRCxTQUFjQSxPQUFPLENBQUM3RixFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU15Rix1QkFBdUIsR0FBRzNGLG9EQUFJO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbENPO0FBb0NQLE1BQU1zSixrQkFBa0IsR0FBR25ILHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZSQUF4QjtBQXFCZSxTQUFTMkgsWUFBVCxHQUF3QjtBQUNyQyxRQUFNekcsT0FBTyxHQUFHMUMsOENBQU8sRUFBdkI7QUFDQSxRQUFNMkMsS0FBSyxHQUFHRCxPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRW5ELEVBQXZCO0FBQ0EsUUFBTTtBQUFFbUIsUUFBRjtBQUFRSSxTQUFSO0FBQWVyQjtBQUFmLE1BQTJCdUQsd0RBQVEsQ0FBQ2dDLHVCQUFELEVBQTBCO0FBQ2pFckYsYUFBUyxFQUFFO0FBQ1RzSixnQkFBVSxFQUFFdEc7QUFESDtBQURzRCxHQUExQixDQUF6QztBQUtBLE1BQUlsRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlxQixLQUFKLEVBQVcsb0JBQU87QUFBQSwwQkFBV0EsS0FBSyxDQUFDTyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLHNCQUNFO0FBQUEsZUFDR1gsSUFBSSxDQUFDMEksVUFBTCxDQUFnQk4sTUFBaEIsS0FBMkIsQ0FBM0IsaUJBQ0M7QUFBSSxXQUFLLEVBQUU7QUFBRWxFLGFBQUssRUFBRSxLQUFUO0FBQWdCdkIsaUJBQVMsRUFBRSxRQUEzQjtBQUFxQzZGLGtCQUFVLEVBQUU7QUFBakQsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBTUd4SSxJQUFJLENBQUMwSSxVQUFMLENBQWdCTixNQUFoQixJQUEwQixDQUExQixpQkFDQztBQUNFLFdBQUssRUFBRTtBQUNMekYsaUJBQVMsRUFBRSxRQUROO0FBRUw0RSxpQkFBUyxFQUFFLG9CQUZOO0FBR0xmLG9CQUFZLEVBQUUsb0JBSFQ7QUFJTFksaUJBQVMsRUFBRSxNQUpOO0FBS0wzRCxvQkFBWSxFQUFFO0FBTFQsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBbUJFLDhEQUFDLGtCQUFEO0FBQUEsZ0JBQ0d6RCxJQUFJLENBQUMwSSxVQUFMLENBQWdCN0YsR0FBaEIsQ0FBcUI2QixPQUFELGlCQUNuQiw4REFBQyw2Q0FBRDtBQUEwQixlQUFPLEVBQUVBLE9BQW5DO0FBQTRDLGdCQUFRLEVBQUM7QUFBckQsU0FBY0EsT0FBTyxDQUFDN0YsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1vQyxZQUFZLEdBQUdILDBFQUFIO0FBQUE7QUFBQTtBQUFBLCtJQUFsQjtBQVdBLE1BQU02SCxlQUFlLEdBQUdoSyxvREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQU9lLFNBQVNpSyxNQUFULENBQWdCO0FBQUUvSixJQUFGO0FBQU1zQjtBQUFOLENBQWhCLEVBQWtDO0FBQy9DLFFBQU0sQ0FBQzBJLE1BQUQsRUFBUztBQUFFOUosV0FBRjtBQUFXcUI7QUFBWCxHQUFULElBQStCcEIsMkRBQVcsQ0FBQzJKLGVBQUQsRUFBa0I7QUFDaEUxSixhQUFTLEVBQUU7QUFBRUo7QUFBRixLQURxRDtBQUVoRUssa0JBQWMsRUFBRSxDQUNkO0FBQUVDLFdBQUssRUFBRW1GLGtFQUF1QkE7QUFBaEMsS0FEYyxFQUVkLHlCQUZjO0FBRmdELEdBQWxCLENBQWhEO0FBT0Esc0JBQ0UsOERBQUMsWUFBRDtBQUNFLFNBQUssRUFBRTtBQUNML0UsY0FBUSxFQUFFLE9BREw7QUFFTDZILGVBQVMsRUFBRTtBQUZOLEtBRFQ7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQU1FLFlBQVEsRUFBRXJJLE9BTlo7QUFPRSxXQUFPLEVBQUUsTUFBTTtBQUNiLFVBQ0V3QixPQUFPLENBQ0wseUVBREssQ0FEVCxFQUlFO0FBQ0FzSSxjQUFNLEdBQUdySSxLQUFULENBQWdCQyxHQUFELElBQVNDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQTdCO0FBQ0Q7QUFDRixLQWZIO0FBQUEsY0FpQkdSO0FBakJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1jLFlBQVksR0FBR0gsMEVBQUg7QUFBQTtBQUFBO0FBQUEsaUpBQWxCO0FBV0EsTUFBTWdJLGdCQUFnQixHQUFHbkssb0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7QUFPZSxTQUFTb0ssUUFBVCxDQUFrQjtBQUFFbEssSUFBRjtBQUFNc0I7QUFBTixDQUFsQixFQUFvQztBQUNqRCxRQUFNLENBQUM2SSxRQUFELEVBQVc7QUFBRWpLLFdBQUY7QUFBV3FCO0FBQVgsR0FBWCxJQUFpQ3BCLDJEQUFXLENBQUM4SixnQkFBRCxFQUFtQjtBQUNuRTdKLGFBQVMsRUFBRTtBQUFFSjtBQUFGLEtBRHdEO0FBRW5FSyxrQkFBYyxFQUFFLENBQ2Q7QUFBRUMsV0FBSyxFQUFFbUYsa0VBQXVCQTtBQUFoQyxLQURjLEVBRWQseUJBRmM7QUFGbUQsR0FBbkIsQ0FBbEQ7QUFPQSxzQkFDRSw4REFBQyxZQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0wvRSxjQUFRLEVBQUUsT0FETDtBQUVMNkgsZUFBUyxFQUFFO0FBRk4sS0FEVDtBQUtFLFFBQUksRUFBQyxRQUxQO0FBTUUsWUFBUSxFQUFFckksT0FOWjtBQU9FLFdBQU8sRUFBRSxNQUFNO0FBQ2IsVUFDRXdCLE9BQU8sQ0FDTCxvTEFESyxDQURULEVBSUU7QUFDQXlJLGdCQUFRLEdBQUd4SSxLQUFYLENBQWtCQyxHQUFELElBQVNDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQS9CO0FBQ0Q7QUFDRixLQWZIO0FBQUEsY0FpQkdSO0FBakJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRCxDOzs7Ozs7Ozs7Ozs7OztBQ3JERDtBQUVBLE1BQU04SSxVQUFVLEdBQUduSSx1RUFBSDtBQUFBO0FBQUE7QUFBQSwrZkFBaEI7QUFxQ0EsK0RBQWVtSSxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBRUEsTUFBTUMsUUFBUSxHQUFHcEksd0VBQUg7QUFBQTtBQUFBO0FBQUEseU9BQWQ7QUFtQkEsK0RBQWVvSSxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUEsTUFBTUMsU0FBUyxHQUFHckksd0VBQUg7QUFBQTtBQUFBO0FBQUEsa0xBQWY7QUFjQSwrREFBZXFJLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQSxNQUFNQyxLQUFLLEdBQUd0SSxzRUFBSDtBQUFBO0FBQUE7QUFBQSxzUEFBWDtBQWlCQSwrREFBZXNJLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlLFNBQVN6QyxXQUFULENBQXFCcEIsTUFBTSxHQUFHLENBQTlCLEVBQWlDO0FBQzlDLFFBQU04RCxPQUFPLEdBQUc7QUFDZEMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQjs7QUFNQSxNQUFJakUsTUFBTSxHQUFHLEdBQVQsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI4RCxXQUFPLENBQUNHLHFCQUFSLEdBQWdDLENBQWhDO0FBQ0Q7O0FBRUQsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQk4sT0FBL0IsQ0FBbEI7QUFFQSxTQUFPSSxTQUFTLENBQUNHLE1BQVYsQ0FBaUJyRSxNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7QUNkRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfTG9hZEJhcl9qcy1jb21wb25lbnRzX1BsZWFzZVNpZ25Jbl9qcy1jb21wb25lbnRzX1Byb2R1Y3RzU2VsbF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZLCB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IEFERF9UT19DQVJUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIEFERF9UT19DQVJUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBhZGRUb0NhcnQocHJvZHVjdElkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUb0NhcnQoeyBpZCB9KSB7XHJcbiAgY29uc3QgW2FkZFRvQ2FydCwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oQUREX1RPX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgaWYgKCFtZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvU2lnbkluXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxLjE1ZW0nIH19PlxyXG4gICAgICAgICAgTG9naW4gdG8gQWRkIFRvIENhcnQg8J+bklxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgb25DbGljaz17YWRkVG9DYXJ0fVxyXG4gICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEuMTVlbScgfX1cclxuICAgID5cclxuICAgICAgQWRke2xvYWRpbmcgJiYgJ2luZyd9IFRvIENhcnQg8J+bklxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5jb25zdCBERUxFVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBERUxFVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBERUxFVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICAgIHVwZGF0ZSxcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYm9yZGVyTGVmdDogJ3NvbGlkIHRoaW4gI2VlZWVlZScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgICAgIH19XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xyXG4gICAgICAgICAgLy8gZ28gYWhlYWQgYW5kIGRlbGV0ZSBpdFxyXG4gICAgICAgICAgZGVsZXRlUHJvZHVjdCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIC8qIHJvdGF0ZTogMDsgKi9cclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvYWRTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNzdhMCAwJSwgI2ZkZTZmZiA4MCUpO1xyXG4gIH1cclxuICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkQmFyKHsgbG9hZCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkU3R5bGUgZGlzYWJsZWQ9e2xvYWR9IGFyaWEtYnVzeT17bG9hZH0+XHJcbiAgICAgICZuYnNwO1xyXG4gICAgPC9Mb2FkU3R5bGU+XHJcbiAgKTtcclxufVxyXG4iLCIvLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICMwMTUyNjg7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTbWFsbGVyQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzAxNTI2ODtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVJlY2VpdmVkID0gc3R5bGVkLnBgXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVNlbnQgPSBzdHlsZWQucGBcclxuICBiYWNrZ3JvdW5kOiAjZGZmZmU5O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVNlbnRTcGFuID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogN3B4O1xyXG5gO1xyXG5jb25zdCBNZXNzYWdlUmVjZWl2ZWRTcGFuID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IENSRUFURV9DSEFUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9DSEFUX01VVEFUSU9OKFxyXG4gICAgJG1lc3NhZ2U6IFN0cmluZyFcclxuICAgICRpZDogSUQhXHJcbiAgICAkcGFnZVR5cGVNb2Q6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZUNoYXR0ZXIobWVzc2FnZTogJG1lc3NhZ2UsIGlkOiAkaWQsIHBhZ2VUeXBlTW9kOiAkcGFnZVR5cGVNb2QpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQUxMX0NIQVRTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9DSEFUU19RVUVSWSgkaWQ6IElEKSB7XHJcbiAgICBjaGF0cyhcclxuICAgICAgd2hlcmU6IHsgaXRlbTogeyBpZDogeyBlcXVhbHM6ICRpZCB9IH0gfVxyXG4gICAgICBvcmRlckJ5OiBbeyB0aW1lU3RhbXA6IGFzYyB9XVxyXG4gICAgKSB7XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgaWRcclxuICAgICAgdGltZVN0YW1wXHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIGl0ZW0ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbEZ1bmN0aW9uKHsgaWQsIHBhZ2VUeXBlTW9kIH0pIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB0aGVJZCA9IHRoZVVzZXI/LmlkO1xyXG5cclxuICBjb25zdCBbY3JlYXRlQ2hhdHRlciwgeyBsb2FkaW5nQ3JlYXRlLCBlcnJvckNyZWF0ZSwgZGF0YUNyZWF0ZSB9XSA9XHJcbiAgICB1c2VNdXRhdGlvbihDUkVBVEVfQ0hBVF9NVVRBVElPTiwge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBtZXNzYWdlOiBpbnB1dHMubWVzc2FnZSxcclxuICAgICAgICBpZCxcclxuICAgICAgICBwYWdlVHlwZU1vZCxcclxuICAgICAgfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBBTExfQ0hBVFNfUVVFUlkgfSwgJ0FMTF9DSEFUU19RVUVSWSddLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9DSEFUU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nIG1lc3NhZ2VzLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3BhZ2VUeXBlTW9kID09PSAnYnV5ZXInICYmIChcclxuICAgICAgICA8QnV0dG9uU3R5bGVzIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9PlxyXG4gICAgICAgICAgQ29udGFjdCBTZWxsZXJcclxuICAgICAgICA8L0J1dHRvblN0eWxlcz5cclxuICAgICAgKX1cclxuICAgICAge3BhZ2VUeXBlTW9kID09PSAnc2VsbGVyJyAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblN0eWxlcyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfT5cclxuICAgICAgICAgIENvbnRhY3QgQnV5ZXJcclxuICAgICAgICA8L0J1dHRvblN0eWxlcz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxNb2RhbCB0b2dnbGU9eygpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKX0gaXNPcGVuPXttb2RhbE9wZW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcxLjNlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWVzc2FnZXNcclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8U21hbGxlckJ1dHRvblN0eWxlc1xyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgY2xvc2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj7Dlzwvc3Bhbj5cclxuICAgICAgICAgIDwvU21hbGxlckJ1dHRvblN0eWxlcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAge2RhdGEuY2hhdHMubWFwKChjaGF0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoY2hhdC50aW1lU3RhbXApO1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBkYXRlVGltZS50b0dNVFN0cmluZygpO1xyXG4gICAgICAgICAgICBkdCA9IGR0LnJlcGxhY2UoJ0dNVCcsICcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhdC5pZH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hhdC51c2VyRnJvbS5pZCA9PT0gdGhlSWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU2VudFNwYW4+e2R0fTwvTWVzc2FnZVNlbnRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU2VudD57Y2hhdC5tZXNzYWdlfTwvTWVzc2FnZVNlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjaGF0LnVzZXJGcm9tLmlkICE9PSB0aGVJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VSZWNlaXZlZFNwYW4+e2R0fTwvTWVzc2FnZVJlY2VpdmVkU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVJlY2VpdmVkPntjaGF0Lm1lc3NhZ2V9PC9NZXNzYWdlUmVjZWl2ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZUNoYXR0ZXIoKTtcclxuICAgICAgICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnN3B4JyB9fVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTbWFsbGVyQnV0dG9uU3R5bGVzIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9TbWFsbGVyQnV0dG9uU3R5bGVzPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuL1NpZ25Jbic7XHJcbmltcG9ydCBSZXF1ZXN0UmVzZXQgZnJvbSAnLi9SZXF1ZXN0UmVzZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxlYXNlU2lnbkluKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzaWduLCBzZXRTaWduXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtmb3Jnb3QsIHNldEZvcmdvdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2lnbkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWduKHRydWUpO1xyXG4gICAgc2V0Rm9yZ290KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGZvcmdvdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWduKGZhbHNlKTtcclxuICAgIHNldEZvcmdvdCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcclxuICBpZiAoIW1lKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7c2lnbiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2lnbkluIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtmb3Jnb3RIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgY29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQhIPCfmYNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtmb3Jnb3QgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJlcXVlc3RSZXNldCAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17c2lnbkhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBjb2xvcjogJ3JlZCcgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhY2sgdG8gU2lnbiBJbiEg8J+RiFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0gZnJvbSAnLi9Qcm9kdWN0c1NvbGQnO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjMDE1MjY4O1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgVVBEQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICB1cGRhdGVPcmRlclN0YXR1cyhpZDogJGlkLCBzdGF0dXM6IFwiUE9TVEVEXCIpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RlZCh7IGlkLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VwZGF0ZU9yZGVySXRlbSwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgVVBEQVRFX09SREVSX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtcclxuICAgICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9LFxyXG4gICAgICAgICdBTExfUFJPRFVDVFNfUVVFUllfU09MRCcsXHJcbiAgICAgIF0sXHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblN0eWxlc1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICB9fVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybSgnUGxlYXNlIGNvbmZpcm0geW91IGhhdmUgcG9zdGVkIHRoaXMgaXRlbT8nKSkge1xyXG4gICAgICAgICAgdXBkYXRlT3JkZXJJdGVtKCkuY2F0Y2goKGVycikgPT4gYWxlcnQoZXJyLm1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgSXRlbVN0eWxlcyBmcm9tICcuL3N0eWxlcy9JdGVtU3R5bGVzJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vc3R5bGVzL1RpdGxlJztcclxuaW1wb3J0IFByaWNlVGFnIGZyb20gJy4vc3R5bGVzL1ByaWNlVGFnJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9tb25leSc7XHJcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gJy4vRGVsZXRlUHJvZHVjdCc7XHJcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9BZGRUb0NhcnQnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXIH0gZnJvbSAnLi9Qcm9kdWN0c1Jldmlldyc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgUG9zdGVkIGZyb20gJy4vUG9zdGVkJztcclxuaW1wb3J0IE1vZGFsRnVuY3Rpb24gZnJvbSAnLi9Nb2RhbCc7XHJcbmltcG9ydCBSZWZ1bmQgZnJvbSAnLi9SZWZ1bmQnO1xyXG5pbXBvcnQgUmVsZWFzZWQgZnJvbSAnLi9SZWxlYXNlZCc7XHJcbmltcG9ydCBTdGF0dXNUYWcgZnJvbSAnLi9zdHlsZXMvU3RhdHVzVGFnJztcclxuXHJcbmNvbnN0IFVQREFURV9TVEFUVVNfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX1NUQVRVU19NVVRBVElPTigkaWQ6IElEISwgJGRhdGFTdGF0dXM6IFN0cmluZykge1xyXG4gICAgdXBkYXRlUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0sIGRhdGE6IHsgc3RhdHVzOiAkZGF0YVN0YXR1cyB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxubGV0IGNhblJlbGVhc2UgPSAnbm8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7IHByb2R1Y3QsIHBhZ2VUeXBlIH0pIHtcclxuICBmdW5jdGlvbiBoZWxsbygpIHt9XHJcbiAge1xyXG4gICAgY29uc3QgdGltZVN0YW1wID0gcHJvZHVjdD8uZGF0ZTtcclxuICAgIGNvbnN0IHRoZURhdGUgPSBuZXcgRGF0ZSh0aW1lU3RhbXApO1xyXG4gICAgY29uc3QgZGF0ZVBsdXMgPSB0aGVEYXRlLnNldERhdGUodGhlRGF0ZS5nZXREYXRlKCkgKyAyMSk7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG5ld0RhdGUgPSBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgaWYgKG5ld0RhdGUgPiBkYXRlUGx1cykge1xyXG4gICAgICBjYW5SZWxlYXNlID0gJ3llcyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYW5SZWxlYXNlID0gJ25vJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGZlZSA9IE1hdGguY2VpbChwcm9kdWN0LnByaWNlICogMC4wNSk7XHJcbiAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQocHJvZHVjdC5wcmljZSkgLSBmZWU7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgW3VwZGF0ZVN0YXR1cywgeyBkYXRhOiBEYXRhLCBlcnJvcjogRXJyb3IsIGxvYWRpbmc6IExvYWRpbmcgfV0gPVxyXG4gICAgdXNlTXV0YXRpb24oVVBEQVRFX1NUQVRVU19NVVRBVElPTik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXR1cyA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgY29uc3QgZGF0YVN0YXR1cyA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJyk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVTdGF0dXMoe1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBkYXRhU3RhdHVzLFxyXG4gICAgICB9LFxyXG4gICAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICAgIHsgcXVlcnk6IEFMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcgfSxcclxuICAgICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVycsXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAocGFnZVR5cGUgPT09ICdzZWxsJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICNlZWVlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cclxuICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgIDxQcmljZVRhZz57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9PC9QcmljZVRhZz5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMwMTUyNjgnIH19Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogJy91cGRhdGUnLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFZGl0IOKcj++4j1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8RGVsZXRlUHJvZHVjdCBpZD17cHJvZHVjdC5pZH0+RGVsZXRlIPCfl5HvuI88L0RlbGV0ZVByb2R1Y3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSXRlbVN0eWxlcz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChwYWdlVHlwZSA9PT0gJ3NvbGQnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SXRlbVN0eWxlcz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmRlNmZmJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS4zJyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogJzRyZW0nLFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJyBjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzAwNzdhMCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzAgMXJlbScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMwMTUyNjgnIH19Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCBtYXJnaW46ICcwcHgnIH19PlNvbGQgb246IHtwcm9kdWN0LmRhdGV9PC9wPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBtYXJnaW5Ub3A6ICcwcHgnIH19PlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PkxldCdzIHRhbGsgbW9uZXkuLi48L3NwYW4+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIFNvbGQgZm9yOiB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIEZlZSAoNSUpOiB7Zm9ybWF0TW9uZXkoZmVlKX1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgTmV0OiB7Zm9ybWF0TW9uZXkoYW1vdW50KX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgzXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzMwcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTVweCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCB0aGluICMwMDAwMDAnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQb3N0IHRveycgJ31cclxuICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LnBvc3Rjb2RlID09PSAnJyAmJiAoXHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzdweCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5vIGFkZHJlc3Mgb24gZmlsZSwgcGxlYXNlIGNvbnRhY3QgYnV5ZXIhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LnBvc3Rjb2RlICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzdweCcsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8ubmFtZX0gPGJyIC8+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8uYWRkcmVzc30gPGJyIC8+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8udG93bn0gPGJyIC8+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8uY291bnR5fSA8YnIgLz5cclxuICAgICAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5wb3N0Y29kZX0gPGJyIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPE1vZGFsRnVuY3Rpb24gaWQ9e3Byb2R1Y3QuaWR9IHBhZ2VUeXBlTW9kPVwic2VsbGVyXCIgLz5cclxuXHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFRlVOREVEJyAmJiBwcm9kdWN0Py5zdGF0dXMgIT09ICdSRUNFSVZFRCcgJiYgKFxyXG4gICAgICAgICAgPFJlZnVuZCBpZD17cHJvZHVjdC5pZH0+UmVmdW5kIEl0ZW08L1JlZnVuZD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnT05IT0xEJyAmJiAoXHJcbiAgICAgICAgICA8UmVsZWFzZWQgaWQ9e3Byb2R1Y3QuaWR9PlJlbGVhc2UgRnVuZHM8L1JlbGVhc2VkPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtjYW5SZWxlYXNlID09PSAneWVzJyAmJlxyXG4gICAgICAgICAgcHJvZHVjdD8uc3RhdHVzICE9PSAnT05IT0xEJyAmJlxyXG4gICAgICAgICAgcHJvZHVjdD8uc3RhdHVzICE9PSAnUkVDRUlWRUQnICYmXHJcbiAgICAgICAgICBwcm9kdWN0Py5zdGF0dXMgIT09ICdGTEFHR0VEJyAmJlxyXG4gICAgICAgICAgcHJvZHVjdD8uc3RhdHVzICE9PSAnUkVDRUlWRURCQUNLJyAmJlxyXG4gICAgICAgICAgcHJvZHVjdD8uc3RhdHVzICE9PSAnUkVGVU5ERUQnICYmIChcclxuICAgICAgICAgICAgPFJlbGVhc2VkIGlkPXtwcm9kdWN0LmlkfT5SZWxlYXNlIEZ1bmRzPC9SZWxlYXNlZD5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdTT0xEJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgICAgPFBvc3RlZCBpZD17cHJvZHVjdC5pZH0+TWFyayBwb3N0ZWQg8J+TrjwvUG9zdGVkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnUE9TVEVEJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlbGxvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gUG9zdGVkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnUkVDRUlWRUQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGVsbG99XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5TdGF0dXM6PC9zcGFuPiBSZWNlaXZlZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ09OSE9MRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoZWxsb31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdwdXJwbGUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5TdGF0dXM6PC9zcGFuPiBSZWNlaXZlZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ1JFRlVOREVEJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlbGxvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlN0YXR1czo8L3NwYW4+IFJlZnVuZGVkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnRkxBR0dFRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoZWxsb31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5TdGF0dXM6PC9zcGFuPiBJc3N1ZSBSYWlzZWQhXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9JdGVtU3R5bGVzPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKHBhZ2VUeXBlID09PSAncmV2aWV3Jykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICNlZWVlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cclxuICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgIDxQcmljZVRhZz57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9PC9QcmljZVRhZz5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMwMTUyNjgnIH19Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgIGRhdGEtc3RhdHVzPVwiREVDTElORURcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0dXN9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEuMTVlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVjbGluZSDinYxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVkaXQg4pyP77iPXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgIGRhdGEtc3RhdHVzPVwiQVZBSUxBQkxFXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhdHVzfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjE1ZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFjY2VwdCDwn5GNXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JdGVtU3R5bGVzPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICNlZWVlZWUnLFxyXG4gICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8VGl0bGU+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cclxuICAgICAgPC9UaXRsZT5cclxuICAgICAgPFByaWNlVGFnPlxyXG4gICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8c3Bhbj5JbmMgUG9zdGFnZTwvc3Bhbj5cclxuICAgICAgPC9QcmljZVRhZz5cclxuICAgICAgPFN0YXR1c1RhZz57cHJvZHVjdC5jb25kaXRpb259PC9TdGF0dXNUYWc+XHJcbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzAxNTI2OCcgfX0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICB7cHJvZHVjdD8udXNlcj8uaWQgPT09IHVzZXI/LmlkICYmIChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogJy91cGRhdGUnLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFZGl0IOKcj++4j1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvZHVjdD8udXNlcj8uaWQgIT09IHVzZXI/LmlkICYmIDxBZGRUb0NhcnQgaWQ9e3Byb2R1Y3QuaWR9IC8+fVxyXG4gICAgICAgIHtwcm9kdWN0Py51c2VyPy5pZCA9PT0gdXNlcj8uaWQgJiYgKFxyXG4gICAgICAgICAgPERlbGV0ZVByb2R1Y3QgaWQ9e3Byb2R1Y3QuaWR9PkRlbGV0ZSDwn5eR77iPPC9EZWxldGVQcm9kdWN0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9JdGVtU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcge1xyXG4gICAgcHJvZHVjdHMod2hlcmU6IHsgc3RhdHVzOiB7IGVxdWFsczogXCJEUkFGVFwiIH0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogMjVweDtcclxuICByb3ctZ2FwOiAyNXB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgY29sdW1uLWdhcDogMTAlO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2x1bW4tZ2FwOiA3JTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMjglIDI4JTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1JldmlldygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXLCB7fSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RhdGEucHJvZHVjdHMubGVuZ3RoICE9IDAgJiYgKFxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUbyBSZXZpZXdcclxuICAgICAgICA8L2gyPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5wcm9kdWN0cy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIFByb2R1Y3RzIFRvIFJldmlld1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxQcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICAgICAge2RhdGEucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IHBhZ2VUeXBlPVwicmV2aWV3XCIgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWV9TRUxMID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWV9TRUxMKCR0aGlzVXNlcklkOiBJRCkge1xyXG4gICAgcHJvZHVjdHMod2hlcmU6IHsgdXNlcjogeyBpZDogeyBlcXVhbHM6ICR0aGlzVXNlcklkIH0gfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcHJpY2VcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG4gIHJvdy1nYXA6IDI1cHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XHJcbiAgICByb3ctZ2FwOiAyJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGNvbHVtbi1nYXA6IDclO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAyOCUgMjglO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzU2VsbCgpIHtcclxuICBjb25zdCB0aGVVc2VyID0gdXNlVXNlcigpO1xyXG5cclxuICBjb25zdCB0aGVJZCA9IHRoZVVzZXI/LmlkO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWV9TRUxMLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdGhpc1VzZXJJZDogdGhlSWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkYXRhLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICBZb3UgaGF2ZSBubyBwcm9kdWN0cyBmb3Igc2FsZSFcclxuICAgICAgICA8L2gzPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5wcm9kdWN0cy5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnM3JlbScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEknbSBTZWxsaW5nXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgKX1cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gcGFnZVR5cGU9XCJzZWxsXCIgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEKCR0aGlzVXNlcklkOiBJRCkge1xyXG4gICAgb3JkZXJJdGVtcyhcclxuICAgICAgd2hlcmU6IHsgdXNlcjogeyBpZDogeyBlcXVhbHM6ICR0aGlzVXNlcklkIH0gfSB9XHJcbiAgICAgIG9yZGVyQnk6IFt7IHRpbWVTdGFtcDogZGVzYyB9XVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcHJpY2VcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgc3RhdHVzXHJcbiAgICAgIHRyYWNraW5nXHJcbiAgICAgIHRyYWNraW5nQ29tcGFueVxyXG4gICAgICBlbWFpbFxyXG4gICAgICB0aW1lU3RhbXBcclxuICAgICAgZGF0ZVxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBvcmRlciB7XHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICBhZGRyZXNzMlxyXG4gICAgICAgICAgdG93blxyXG4gICAgICAgICAgY291bnR5XHJcbiAgICAgICAgICBwb3N0Y29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzTGlzdFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGNvbHVtbi1nYXA6IDI1cHg7XHJcbiAgcm93LWdhcDogMjVweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGNvbHVtbi1nYXA6IDEwJTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sdW1uLWdhcDogNyU7XHJcbiAgICByb3ctZ2FwOiAyJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDI4JSAyOCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNTb2xkKCkge1xyXG4gIGNvbnN0IHRoZVVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgdGhlSWQgPSB0aGVVc2VyPy5pZDtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUllfU09MRCwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRoaXNVc2VySWQ6IHRoZUlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGF0YS5vcmRlckl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICBZb3UgaGF2ZSBtYWRlIG5vIHNhbGVzIVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLm9yZGVySXRlbXMubGVuZ3RoICE9IDAgJiYgKFxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTb2xkXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgKX1cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5vcmRlckl0ZW1zLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSBwYWdlVHlwZT1cInNvbGRcIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Byb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0gZnJvbSAnLi9Qcm9kdWN0c1NvbGQnO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgUkVGVU5EX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFRlVORF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgcmVmdW5kKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZnVuZCh7IGlkLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3JlZnVuZCwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFJFRlVORF9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9LFxyXG4gICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQnLFxyXG4gICAgXSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblN0eWxlc1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzEycHgnLFxyXG4gICAgICB9fVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAnUGxlYXNlIGNvbmZpcm0geW91IHdpc2ggdG8gcmVmdW5kIHRoaXMgaXRlbT9cXG5cXG5USElTIENBTiBOT1QgQkUgVU5ET05FISdcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlZnVuZCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9IGZyb20gJy4vUHJvZHVjdHNTb2xkJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgUkVMRUFTRV9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBSRUxFQVNFX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICByZWxlYXNlZChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxlYXNlZCh7IGlkLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3JlbGVhc2VkLCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oUkVMRUFTRV9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9LFxyXG4gICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQnLFxyXG4gICAgXSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblN0eWxlc1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzEycHgnLFxyXG4gICAgICB9fVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAnWW91IGFyZSBhYm91dCB0byByZWxlYXNlIHRoZSBmdW5kcyBmb3IgdGhpcyBpdGVtIGludG8geW91ciBJbmRpZSBCdWJiYSBhY2NvdW50LlxcblxcblRoZSBmdW5kcyB3aWxsIHRoZW4gYmUgcGFpZCBvdXQgdG8geW91ciBub21pbmF0ZWQgYmFuayBhY2NvdW50IGFuZCBhcnJpdmUgaW4gdGhlIG5leHQgZmV3IGRheXMuJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVsZWFzZWQoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSXRlbVN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IHRoaW4gc29saWQgI2VlZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmJ1dHRvbkxpc3Qge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIHRoaW4gI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JheSk7XG4gICAgJiA+ICoge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVN0eWxlcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQcmljZVRhZyA9IHN0eWxlZC5zcGFuYFxuICBiYWNrZ3JvdW5kOiAjZmRlNmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgY29sb3I6ICMwMDc3YTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlVGFnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0YXR1c1RhZyA9IHN0eWxlZC5zcGFuYFxuICBiYWNrZ3JvdW5kOiAjMDA3N2EwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAtM3B4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzVGFnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICBtYXJnaW46IDAgMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcpIHJvdGF0ZSgtMWRlZyk7XG4gIG1hcmdpbi10b3A6IC0zcmVtO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYSB7XG4gICAgYmFja2dyb3VuZDogI2ZkZTZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDA3N2EwO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQgPSAwKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdHQlAnLFxyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gIH07XHJcblxyXG4gIGlmIChhbW91bnQgJSAxMDAgPT09IDApIHtcclxuICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tR0InLCBvcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYW1vdW50IC8gMTAwKTtcclxufVxyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9