exports.id = "components_Footer_js-components_Pagination_js-components_Products_js";
exports.ids = ["components_Footer_js-components_Pagination_js-components_Products_js"];
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

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGINATION_QUERY": function() { return /* binding */ PAGINATION_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Pagination.js";







const PAGINATION_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query PAGINATION_QUERY {
    productsCount(where: { status: { equals: "AVAILABLE" } })
  }
`;
function Pagination({
  page
}) {
  const {
    error,
    loading,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 21
  }, this);
  const count = data.productsCount;
  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_7__.perPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Indie Bubba - Page ", page, " of ", pageCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/products/${page - 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page <= 1,
        children: "\u2190 Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Page ", page, " of ", pageCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [count, " Items Total"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/products/${page + 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page >= pageCount,
        children: "Next \u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
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

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY": function() { return /* binding */ ALL_PRODUCTS_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _LoadBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadBar */ "./components/LoadBar.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product */ "./components/Product.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Products.js";






const ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    products(
      where: { status: { equals: "AVAILABLE" } }
      orderBy: [{ description: asc }]
      take: $first
      skip: $skip
    ) {
      id
      name
      price
      description
      condition
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
      user {
        id
      }
    }
  }
`;
const ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Products__ProductsListStyles",
  componentId: "sc-gnipd4-0"
})(["margin:0 auto;width:90%;display:grid;column-gap:25px;row-gap:25px;@media (min-width:600px){column-gap:10%;row-gap:2%;grid-template-columns:40% 40%;margin-bottom:65px;}@media (min-width:900px){margin-top:1%;width:80%;column-gap:7%;row-gap:4%;grid-template-columns:30% 30% 30%;}"]);
function Products({
  page
}) {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_4__.perPage - _config__WEBPACK_IMPORTED_MODULE_4__.perPage,
      first: _config__WEBPACK_IMPORTED_MODULE_4__.perPage
    }
  });
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadBar__WEBPACK_IMPORTED_MODULE_5__.default, {
    load: loading
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {
      children: data.products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_6__.default, {
        product: product,
        pageType: "Products"
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-12ymsfw-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem auto 2rem auto;border:1px solid #eeeeee;border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid #eeeeee;&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "prodEndpoint": function() { return /* binding */ prodEndpoint; },
/* harmony export */   "perPage": function() { return /* binding */ perPage; }
/* harmony export */ });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `https://indie-bubba-backend.herokuapp.com/api/graphql`;
const perPage = 6;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvTG9hZEJhci5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Bvc3RlZC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzUmV2aWV3LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0c1NvbGQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1JlZnVuZC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUmVsZWFzZWQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvSXRlbVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QcmljZVRhZy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1N0YXR1c1RhZy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1RpdGxlLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29uZmlnLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vbGliL21vbmV5LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vbGliL3VzZUZvcm0uanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvaWdub3JlZHxDOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcaW5kaWVCdWJiYVxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBRERfVE9fQ0FSVF9NVVRBVElPTiIsImdxbCIsIkFkZFRvQ2FydCIsImlkIiwiYWRkVG9DYXJ0IiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsIm1lIiwidXNlVXNlciIsImZvbnRTaXplIiwiREVMRVRFX1BST0RVQ1RfTVVUQVRJT04iLCJ1cGRhdGUiLCJjYWNoZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZXZpY3QiLCJpZGVudGlmeSIsImRhdGEiLCJkZWxldGVQcm9kdWN0IiwiRGVsZXRlUHJvZHVjdCIsImNoaWxkcmVuIiwiZXJyb3IiLCJib3JkZXJMZWZ0IiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJjb25maXJtIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJFcnJvclN0eWxlcyIsInN0eWxlZCIsIkRpc3BsYXlFcnJvciIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsImVycm9ycyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiQm90dG9tTmF2IiwiRm9vdGVyIiwiY29sb3IiLCJ2ZXJ0aWNhbEFsaWduIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsIm1hcmdpbiIsInJpZ2h0IiwicG9zaXRpb24iLCJrZXlmcmFtZXMiLCJMb2FkU3R5bGUiLCJMb2FkQmFyIiwibG9hZCIsIkJ1dHRvblN0eWxlcyIsIlNtYWxsZXJCdXR0b25TdHlsZXMiLCJNZXNzYWdlUmVjZWl2ZWQiLCJNZXNzYWdlU2VudCIsIk1lc3NhZ2VTZW50U3BhbiIsIk1lc3NhZ2VSZWNlaXZlZFNwYW4iLCJDUkVBVEVfQ0hBVF9NVVRBVElPTiIsIkFMTF9DSEFUU19RVUVSWSIsIk1vZGFsRnVuY3Rpb24iLCJwYWdlVHlwZU1vZCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsInVzZUZvcm0iLCJ0aGVVc2VyIiwidGhlSWQiLCJjcmVhdGVDaGF0dGVyIiwibG9hZGluZ0NyZWF0ZSIsImVycm9yQ3JlYXRlIiwiZGF0YUNyZWF0ZSIsInVzZVF1ZXJ5IiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidXNlU3RhdGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNoYXRzIiwiY2hhdCIsImRhdGVUaW1lIiwiRGF0ZSIsInRpbWVTdGFtcCIsImR0IiwidG9HTVRTdHJpbmciLCJ1c2VyRnJvbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsIm1hcmdpbkJvdHRvbSIsIlBBR0lOQVRJT05fUVVFUlkiLCJQYWdpbmF0aW9uIiwicGFnZSIsImNvdW50IiwicHJvZHVjdHNDb3VudCIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSIsIlVQREFURV9PUkRFUl9NVVRBVElPTiIsIlBvc3RlZCIsInVwZGF0ZU9yZGVySXRlbSIsIkFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIiwiVVBEQVRFX1NUQVRVU19NVVRBVElPTiIsImNhblJlbGVhc2UiLCJQcm9kdWN0IiwicHJvZHVjdCIsInBhZ2VUeXBlIiwiaGVsbG8iLCJkYXRlIiwidGhlRGF0ZSIsImRhdGVQbHVzIiwic2V0RGF0ZSIsImdldERhdGUiLCJuZXdEYXRlIiwiZmVlIiwicHJpY2UiLCJhbW91bnQiLCJwYXJzZUludCIsInVzZXIiLCJ1cGRhdGVTdGF0dXMiLCJEYXRhIiwiRXJyb3IiLCJMb2FkaW5nIiwiaGFuZGxlU3RhdHVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJkYXRhU3RhdHVzIiwiQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVyIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJib3JkZXJCb3R0b20iLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJmb3JtYXRNb25leSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wIiwib3JkZXIiLCJwb3N0Y29kZSIsInBhZGRpbmdCb3R0b20iLCJhZGRyZXNzIiwidG93biIsImNvdW50eSIsInN0YXR1cyIsImN1cnNvciIsImNvbmRpdGlvbiIsIkFMTF9QUk9EVUNUU19RVUVSWSIsIlByb2R1Y3RzTGlzdFN0eWxlcyIsIlByb2R1Y3RzIiwic2tpcCIsImZpcnN0IiwicHJvZHVjdHMiLCJQcm9kdWN0c1JldmlldyIsIlByb2R1Y3RzU29sZCIsInRoaXNVc2VySWQiLCJvcmRlckl0ZW1zIiwiZm9udFdlaWdodCIsIlJFRlVORF9NVVRBVElPTiIsIlJlZnVuZCIsInJlZnVuZCIsIlJFTEVBU0VfTVVUQVRJT04iLCJSZWxlYXNlZCIsInJlbGVhc2VkIiwiYXV0aGVudGljYXRlZEl0ZW0iLCJGb3JtIiwiSXRlbVN0eWxlcyIsIlBhZ2luYXRpb25TdHlsZXMiLCJQcmljZVRhZyIsIlN0YXR1c1RhZyIsIlRpdGxlIiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJpbml0aWFsIiwic2V0SW5wdXRzIiwiaW5pdGlhbFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJ1c2VFZmZlY3QiLCJ2YWx1ZSIsInR5cGUiLCJmaWxlcyIsImJsYW5rU3RhdGUiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxvQkFBb0IsR0FBR0Msb0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7QUFRZSxTQUFTQyxTQUFULENBQW1CO0FBQUVDO0FBQUYsQ0FBbkIsRUFBMkI7QUFDeEMsUUFBTSxDQUFDQyxTQUFELEVBQVk7QUFBRUM7QUFBRixHQUFaLElBQTJCQywyREFBVyxDQUFDTixvQkFBRCxFQUF1QjtBQUNqRU8sYUFBUyxFQUFFO0FBQUVKO0FBQUYsS0FEc0Q7QUFFakVLLGtCQUFjLEVBQUUsQ0FBQztBQUFFQyxXQUFLLEVBQUVDLHFEQUFrQkE7QUFBM0IsS0FBRDtBQUZpRCxHQUF2QixDQUE1QztBQUlBLFFBQU1DLEVBQUUsR0FBR0MsOENBQU8sRUFBbEI7QUFDQSxNQUFJLENBQUNELEVBQUwsRUFDRSxvQkFDRSw4REFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUEsMkJBQ0U7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFLLEVBQUU7QUFBRUUsZ0JBQVEsRUFBRTtBQUFaLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Ysc0JBQ0U7QUFDRSxZQUFRLEVBQUVSLE9BRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRUQsU0FIWDtBQUlFLFNBQUssRUFBRTtBQUFFUyxjQUFRLEVBQUU7QUFBWixLQUpUO0FBQUEsc0JBTU1SLE9BQU8sSUFBSSxLQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEO0FBQ0E7QUFFQSxNQUFNUyx1QkFBdUIsR0FBR2Isb0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTs7QUFTQSxTQUFTYyxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFDOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FELE9BQUssQ0FBQ0ksS0FBTixDQUFZSixLQUFLLENBQUNLLFFBQU4sQ0FBZUosT0FBTyxDQUFDSyxJQUFSLENBQWFDLGFBQTVCLENBQVo7QUFDRDs7QUFFYyxTQUFTQyxhQUFULENBQXVCO0FBQUVyQixJQUFGO0FBQU1zQjtBQUFOLENBQXZCLEVBQXlDO0FBQ3RELFFBQU0sQ0FBQ0YsYUFBRCxFQUFnQjtBQUFFbEIsV0FBRjtBQUFXcUI7QUFBWCxHQUFoQixJQUFzQ3BCLDJEQUFXLENBQ3JEUSx1QkFEcUQsRUFFckQ7QUFDRVAsYUFBUyxFQUFFO0FBQUVKO0FBQUYsS0FEYjtBQUVFWTtBQUZGLEdBRnFELENBQXZEO0FBT0Esc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTFksZ0JBQVUsRUFBRSxvQkFEUDtBQUVMQyw2QkFBdUIsRUFBRSxNQUZwQjtBQUdMZixjQUFRLEVBQUU7QUFITCxLQURUO0FBTUUsUUFBSSxFQUFDLFFBTlA7QUFPRSxZQUFRLEVBQUVSLE9BUFo7QUFRRSxXQUFPLEVBQUUsTUFBTTtBQUNiLFVBQUl3QixPQUFPLENBQUMsNENBQUQsQ0FBWCxFQUEyRDtBQUN6RDtBQUNBTixxQkFBYSxHQUFHTyxLQUFoQixDQUF1QkMsR0FBRCxJQUFTQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFwQztBQUNEO0FBQ0YsS0FiSDtBQUFBLGNBZUdSO0FBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUVBO0FBRUEsTUFBTVMsV0FBVyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzS0FBakI7O0FBZUEsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRVY7QUFBRixDQUFELEtBQWU7QUFDbEMsTUFBSSxDQUFDQSxLQUFELElBQVUsQ0FBQ0EsS0FBSyxDQUFDTyxPQUFyQixFQUE4QixPQUFPLElBQVA7O0FBQzlCLE1BQ0VQLEtBQUssQ0FBQ1csWUFBTixJQUNBWCxLQUFLLENBQUNXLFlBQU4sQ0FBbUJDLE1BRG5CLElBRUFaLEtBQUssQ0FBQ1csWUFBTixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQTFCLENBQWlDQyxNQUhuQyxFQUlFO0FBQ0EsV0FBT2QsS0FBSyxDQUFDVyxZQUFOLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBMUIsQ0FBaUNFLEdBQWpDLENBQXFDLENBQUNmLEtBQUQsRUFBUWdCLENBQVIsa0JBQzFDLDhEQUFDLFdBQUQ7QUFBQSw2QkFDRTtBQUFHLHFCQUFVLGVBQWI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHaEIsS0FBSyxDQUFDTyxPQUFOLENBQWNVLE9BQWQsQ0FBc0IsaUJBQXRCLEVBQXlDLEVBQXpDLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBa0JELENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssQ0FBUDtBQVFEOztBQUNELHNCQUNFLDhEQUFDLFdBQUQ7QUFBQSwyQkFDRTtBQUFHLG1CQUFVLGVBQWI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHaEIsS0FBSyxDQUFDTyxPQUFOLENBQWNVLE9BQWQsQ0FBc0IsaUJBQXRCLEVBQXlDLEVBQXpDLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0F4QkQ7O0FBMEJBUCxZQUFZLENBQUNRLFlBQWIsR0FBNEI7QUFDMUJsQixPQUFLLEVBQUU7QUFEbUIsQ0FBNUI7QUFJQVUsWUFBWSxDQUFDUyxTQUFiLEdBQXlCO0FBQ3ZCbkIsT0FBSyxFQUFFb0IsMERBQWdCQztBQURBLENBQXpCO0FBSUEsK0RBQWVYLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUVBLE1BQU1ZLFNBQVMsR0FBR2IsdUVBQUg7QUFBQTtBQUFBO0FBQUEseU1BQWY7QUFlZSxTQUFTYyxNQUFULEdBQWtCO0FBQy9CLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSw0QkFDRTtBQUNFLFVBQUksRUFBQyx3QkFEUDtBQUVFLFdBQUssRUFBRTtBQUNMQyxhQUFLLEVBQUUsTUFERjtBQUVMQyxxQkFBYSxFQUFFLFFBRlY7QUFHTEMsbUJBQVcsRUFBRTtBQUhSLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQ0UsWUFBTSxFQUFDLFFBRFQ7QUFFRSxVQUFJLEVBQUMsa0NBRlA7QUFHRSxTQUFHLEVBQUMsWUFITjtBQUlFLFdBQUssRUFBRTtBQUNMQSxtQkFBVyxFQUFFO0FBRFIsT0FKVDtBQUFBLDZCQVFFLDhEQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFDLDBCQUROO0FBRUUsV0FBRyxFQUFDLHVCQUZOO0FBR0UsYUFBSyxFQUFDLElBSFI7QUFJRSxjQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBMkJFO0FBQ0UsWUFBTSxFQUFDLFFBRFQ7QUFFRSxVQUFJLEVBQUMsaUNBRlA7QUFHRSxTQUFHLEVBQUMsWUFITjtBQUlFLFdBQUssRUFBRTtBQUNMQyxrQkFBVSxFQUFFO0FBRFAsT0FKVDtBQUFBLDZCQVFFLDhEQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFDLHlCQUROO0FBRUUsV0FBRyxFQUFDLHNCQUZOO0FBR0UsYUFBSyxFQUFDLElBSFI7QUFJRSxjQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCRixlQTBDRTtBQUNFLFVBQUksRUFBQyw2QkFEUDtBQUVFLFdBQUssRUFBRTtBQUNMSCxhQUFLLEVBQUUsTUFERjtBQUVMRyxrQkFBVSxFQUFFO0FBRlAsT0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDRixlQW9ERTtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRSxHQURKO0FBRUxDLGNBQU0sRUFBRSxHQUZIO0FBR0xMLGFBQUssRUFBRSxNQUhGO0FBSUxyQyxnQkFBUSxFQUFFLE9BSkw7QUFLTDJDLGFBQUssRUFBRSxLQUxGO0FBTUxDLGdCQUFRLEVBQUU7QUFOTCxPQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0VELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUVBLE1BQU1wRCxPQUFPLEdBQUdxRCw0REFBSCxzRUFBYjtBQVlBLE1BQU1DLFNBQVMsR0FBR3hCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVSQWdCRTlCLE9BaEJGLENBQWY7QUFvQmUsU0FBU3VELE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUEyQjtBQUN4QyxzQkFDRSw4REFBQyxTQUFEO0FBQVcsWUFBUSxFQUFFQSxJQUFyQjtBQUEyQixpQkFBV0EsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsWUFBWSxHQUFHM0IsMEVBQUg7QUFBQTtBQUFBO0FBQUEsbUpBQWxCO0FBV0EsTUFBTTRCLG1CQUFtQixHQUFHNUIsMEVBQUg7QUFBQTtBQUFBO0FBQUEsb0lBQXpCO0FBVUEsTUFBTTZCLGVBQWUsR0FBRzdCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVIQUFyQjtBQVVBLE1BQU04QixXQUFXLEdBQUc5QixxRUFBSDtBQUFBO0FBQUE7QUFBQSx3SEFBakI7QUFVQSxNQUFNK0IsZUFBZSxHQUFHL0IscUVBQUg7QUFBQTtBQUFBO0FBQUEsaUVBQXJCO0FBTUEsTUFBTWdDLG1CQUFtQixHQUFHaEMscUVBQUg7QUFBQTtBQUFBO0FBQUEsOENBQXpCO0FBTUEsTUFBTWlDLG9CQUFvQixHQUFHbkUsb0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWQTtBQVlPLE1BQU1vRSxlQUFlLEdBQUdwRSxvREFBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJPO0FBbUJRLFNBQVNxRSxhQUFULENBQXVCO0FBQUVuRSxJQUFGO0FBQU1vRTtBQUFOLENBQXZCLEVBQTRDO0FBQ3pELFFBQU07QUFBRUMsVUFBRjtBQUFVQyxnQkFBVjtBQUF3QkMsYUFBeEI7QUFBbUNDO0FBQW5DLE1BQWlEQyxxREFBTyxDQUFDO0FBQzdEM0MsV0FBTyxFQUFFO0FBRG9ELEdBQUQsQ0FBOUQ7QUFJQSxRQUFNNEMsT0FBTyxHQUFHakUsOENBQU8sRUFBdkI7QUFDQSxRQUFNa0UsS0FBSyxHQUFHRCxPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRTFFLEVBQXZCO0FBRUEsUUFBTSxDQUFDNEUsYUFBRCxFQUFnQjtBQUFFQyxpQkFBRjtBQUFpQkMsZUFBakI7QUFBOEJDO0FBQTlCLEdBQWhCLElBQ0o1RSwyREFBVyxDQUFDOEQsb0JBQUQsRUFBdUI7QUFDaEM3RCxhQUFTLEVBQUU7QUFDVDBCLGFBQU8sRUFBRXVDLE1BQU0sQ0FBQ3ZDLE9BRFA7QUFFVDlCLFFBRlM7QUFHVG9FO0FBSFMsS0FEcUI7QUFNaEMvRCxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFNEQ7QUFBVCxLQUFELEVBQTZCLGlCQUE3QjtBQU5nQixHQUF2QixDQURiO0FBVUEsUUFBTTtBQUFFL0MsUUFBRjtBQUFRSSxTQUFSO0FBQWVyQjtBQUFmLE1BQTJCOEUsd0RBQVEsQ0FBQ2QsZUFBRCxFQUFrQjtBQUN6RDlELGFBQVMsRUFBRTtBQUNUSjtBQURTO0FBRDhDLEdBQWxCLENBQXpDO0FBTUEsUUFBTTtBQUFBLE9BQUNpRixTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBRUEsTUFBSWpGLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSXFCLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNPLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsc0JBQ0U7QUFBQSxlQUNHc0MsV0FBVyxLQUFLLE9BQWhCLGlCQUNDLDhEQUFDLFlBQUQ7QUFBYyxVQUFJLEVBQUMsUUFBbkI7QUFBNEIsYUFBTyxFQUFFLE1BQU1jLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFNR2IsV0FBVyxLQUFLLFFBQWhCLGlCQUNDLDhEQUFDLFlBQUQ7QUFBYyxVQUFJLEVBQUMsUUFBbkI7QUFBNEIsYUFBTyxFQUFFLE1BQU1jLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFZRSw4REFBQyw2Q0FBRDtBQUFPLFlBQU0sRUFBRSxNQUFNQyxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFqQztBQUErQyxZQUFNLEVBQUVBLFNBQXZEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsY0FEWjtBQUVFLGVBQUssRUFBRTtBQUFFRyxpQkFBSyxFQUFFLEtBQVQ7QUFBZ0JDLHFCQUFTLEVBQUUsUUFBM0I7QUFBcUMzRSxvQkFBUSxFQUFFO0FBQS9DLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRSw4REFBQyxtQkFBRDtBQUNFLHdCQUFXLE9BRGI7QUFFRSxtQkFBUyxFQUFDLFFBRlo7QUFHRSxjQUFJLEVBQUMsUUFIUDtBQUlFLGlCQUFPLEVBQUUsTUFBTXdFLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBSjdCO0FBQUEsaUNBTUU7QUFBTSwrQkFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFpQkUsOERBQUMsaURBQUQ7QUFBQSxrQkFDRzlELElBQUksQ0FBQ21FLEtBQUwsQ0FBV2hELEdBQVgsQ0FBZ0JpRCxJQUFELElBQVU7QUFDeEIsZ0JBQU1DLFFBQVEsR0FBRyxJQUFJQyxJQUFKLENBQVNGLElBQUksQ0FBQ0csU0FBZCxDQUFqQjtBQUNBLGNBQUlDLEVBQUUsR0FBR0gsUUFBUSxDQUFDSSxXQUFULEVBQVQ7QUFDQUQsWUFBRSxHQUFHQSxFQUFFLENBQUNuRCxPQUFILENBQVcsS0FBWCxFQUFrQixFQUFsQixDQUFMO0FBQ0EsOEJBQ0U7QUFBQSx1QkFDRytDLElBQUksQ0FBQ00sUUFBTCxDQUFjN0YsRUFBZCxLQUFxQjJFLEtBQXJCLGlCQUNDO0FBQUEsc0NBQ0UsOERBQUMsZUFBRDtBQUFBLDBCQUFrQmdCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQyxXQUFEO0FBQUEsMEJBQWNKLElBQUksQ0FBQ3pEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQSw0QkFGSixFQU9HeUQsSUFBSSxDQUFDTSxRQUFMLENBQWM3RixFQUFkLEtBQXFCMkUsS0FBckIsaUJBQ0M7QUFBQSxzQ0FDRSw4REFBQyxtQkFBRDtBQUFBLDBCQUFzQmdCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQyxlQUFEO0FBQUEsMEJBQWtCSixJQUFJLENBQUN6RDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUEsNEJBUko7QUFBQSxhQUFVeUQsSUFBSSxDQUFDdkYsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBZ0JELFNBcEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQXdDRSw4REFBQyxtREFBRDtBQUFBLCtCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQUVvRixpQkFBSyxFQUFFO0FBQVQsV0FEVDtBQUVFLGtCQUFRLEVBQUUsTUFBT1UsQ0FBUCxJQUFhO0FBQ3JCQSxhQUFDLENBQUNDLGNBQUY7QUFDQSxrQkFBTUMsR0FBRyxHQUFHLE1BQU1wQixhQUFhLEVBQS9CO0FBQ0FMLHFCQUFTO0FBQ1YsV0FOSDtBQUFBLGtDQVFFO0FBQ0UsaUJBQUssRUFBRTtBQUFFYSxtQkFBSyxFQUFFLE1BQVQ7QUFBaUJhLDBCQUFZLEVBQUU7QUFBL0IsYUFEVDtBQUVFLGdCQUFJLEVBQUMsR0FGUDtBQUdFLG9CQUFRLE1BSFY7QUFJRSxjQUFFLEVBQUMsU0FKTDtBQUtFLGdCQUFJLEVBQUMsU0FMUDtBQU1FLHVCQUFXLEVBQUMsU0FOZDtBQU9FLGlCQUFLLEVBQUU1QixNQUFNLENBQUN2QyxPQVBoQjtBQVFFLG9CQUFRLEVBQUV3QztBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkYsZUFrQkUsOERBQUMsbUJBQUQ7QUFBcUIsZ0JBQUksRUFBQyxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBLGtCQURGO0FBOEVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNNEIsZ0JBQWdCLEdBQUdwRyxvREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTVEsU0FBU3FHLFVBQVQsQ0FBb0I7QUFBRUM7QUFBRixDQUFwQixFQUE4QjtBQUMzQyxRQUFNO0FBQUU3RSxTQUFGO0FBQVNyQixXQUFUO0FBQWtCaUI7QUFBbEIsTUFBMkI2RCx3REFBUSxDQUFDa0IsZ0JBQUQsQ0FBekM7QUFDQSxNQUFJaEcsT0FBSixFQUFhLE9BQU8sWUFBUDtBQUNiLE1BQUlxQixLQUFKLEVBQVcsb0JBQU8sOERBQUMsa0RBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLFFBQU04RSxLQUFLLEdBQUdsRixJQUFJLENBQUNtRixhQUFuQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLEtBQUssR0FBR0ssNENBQWxCLENBQWxCO0FBQ0Esc0JBQ0UsOERBQUMsNkRBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsMENBQ3NCTixJQUR0QixVQUNnQ0csU0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUcsYUFBWUgsSUFBSSxHQUFHLENBQUUsRUFBbEM7QUFBQSw2QkFDRTtBQUFHLHlCQUFlQSxJQUFJLElBQUksQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFTRTtBQUFBLDBCQUNRQSxJQURSLFVBQ2tCRyxTQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVlFO0FBQUEsaUJBQUlGLEtBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFhRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxhQUFZRCxJQUFJLEdBQUcsQ0FBRSxFQUFsQztBQUFBLDZCQUNFO0FBQUcseUJBQWVBLElBQUksSUFBSUcsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNNUMsWUFBWSxHQUFHM0IsMEVBQUg7QUFBQTtBQUFBO0FBQUEscUpBQWxCO0FBV0EsTUFBTTJFLHFCQUFxQixHQUFHN0csb0RBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7QUFPZSxTQUFTOEcsTUFBVCxDQUFnQjtBQUFFNUcsSUFBRjtBQUFNc0I7QUFBTixDQUFoQixFQUFrQztBQUMvQyxRQUFNLENBQUN1RixlQUFELEVBQWtCO0FBQUUzRyxXQUFGO0FBQVdxQjtBQUFYLEdBQWxCLElBQXdDcEIsMkRBQVcsQ0FDdkR3RyxxQkFEdUQsRUFFdkQ7QUFDRXZHLGFBQVMsRUFBRTtBQUFFSjtBQUFGLEtBRGI7QUFFRUssa0JBQWMsRUFBRSxDQUNkO0FBQUVDLFdBQUssRUFBRXdHLGtFQUF1QkE7QUFBaEMsS0FEYyxFQUVkLHlCQUZjO0FBRmxCLEdBRnVELENBQXpEO0FBVUEsc0JBQ0UsOERBQUMsWUFBRDtBQUNFLFNBQUssRUFBRTtBQUNMcEcsY0FBUSxFQUFFO0FBREwsS0FEVDtBQUlFLFFBQUksRUFBQyxRQUpQO0FBS0UsWUFBUSxFQUFFUixPQUxaO0FBTUUsV0FBTyxFQUFFLE1BQU07QUFDYixVQUFJd0IsT0FBTyxDQUFDLDJDQUFELENBQVgsRUFBMEQ7QUFDeERtRix1QkFBZSxHQUFHbEYsS0FBbEIsQ0FBeUJDLEdBQUQsSUFBU0MsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQUwsQ0FBdEM7QUFDRDtBQUNGLEtBVkg7QUFBQSxjQVlHUjtBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU15RixzQkFBc0IsR0FBR2pILG9EQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBUUEsSUFBSWtILFVBQVUsR0FBRyxJQUFqQjtBQUVlLFNBQVNDLE9BQVQsQ0FBaUI7QUFBRUMsU0FBRjtBQUFXQztBQUFYLENBQWpCLEVBQXdDO0FBQUE7O0FBQ3JELFdBQVNDLEtBQVQsR0FBaUIsQ0FBRTs7QUFDbkI7QUFDRSxVQUFNMUIsU0FBUyxHQUFHd0IsT0FBSCxhQUFHQSxPQUFILHVCQUFHQSxPQUFPLENBQUVHLElBQTNCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLElBQUk3QixJQUFKLENBQVNDLFNBQVQsQ0FBaEI7QUFDQSxVQUFNNkIsUUFBUSxHQUFHRCxPQUFPLENBQUNFLE9BQVIsQ0FBZ0JGLE9BQU8sQ0FBQ0csT0FBUixLQUFvQixFQUFwQyxDQUFqQjtBQUNBLFVBQU1KLElBQUksR0FBRyxJQUFJNUIsSUFBSixFQUFiO0FBQ0EsVUFBTWlDLE9BQU8sR0FBR0wsSUFBSSxDQUFDRyxPQUFMLENBQWFILElBQUksQ0FBQ0ksT0FBTCxFQUFiLENBQWhCOztBQUNBLFFBQUlDLE9BQU8sR0FBR0gsUUFBZCxFQUF3QjtBQUN0QlAsZ0JBQVUsR0FBRyxLQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGdCQUFVLEdBQUcsSUFBYjtBQUNEO0FBQ0Y7QUFFRCxRQUFNVyxHQUFHLEdBQUduQixJQUFJLENBQUNDLElBQUwsQ0FBVVMsT0FBTyxDQUFDVSxLQUFSLEdBQWdCLElBQTFCLENBQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ1osT0FBTyxDQUFDVSxLQUFULENBQVIsR0FBMEJELEdBQXpDO0FBRUEsUUFBTUksSUFBSSxHQUFHdEgsK0NBQU8sRUFBcEI7QUFDQSxRQUFNLENBQUN1SCxZQUFELEVBQWU7QUFBRTdHLFFBQUksRUFBRThHLElBQVI7QUFBYzFHLFNBQUssRUFBRTJHLEtBQXJCO0FBQTRCaEksV0FBTyxFQUFFaUk7QUFBckMsR0FBZixJQUNKaEksMkRBQVcsQ0FBQzRHLHNCQUFELENBRGI7O0FBR0EsUUFBTXFCLFlBQVksR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ3BDLFVBQU1ySSxFQUFFLEdBQUdxSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixJQUExQixDQUFYO0FBQ0EsVUFBTUMsVUFBVSxHQUFHSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsWUFBYixDQUEwQixhQUExQixDQUFuQjtBQUNBLFVBQU12QyxHQUFHLEdBQUcsTUFBTWdDLFlBQVksQ0FBQztBQUM3QjVILGVBQVMsRUFBRTtBQUNUSixVQURTO0FBRVR3STtBQUZTLE9BRGtCO0FBSzdCbkksb0JBQWMsRUFBRSxDQUNkO0FBQUVDLGFBQUssRUFBRW1JLHVFQUF5QkE7QUFBbEMsT0FEYyxFQUVkLDJCQUZjO0FBTGEsS0FBRCxDQUE5QjtBQVVELEdBYkQ7O0FBZUEsTUFBSXRCLFFBQVEsS0FBSyxNQUFqQixFQUF5QjtBQUFBOztBQUN2Qix3QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFRCxPQUFGLGFBQUVBLE9BQUYseUNBQUVBLE9BQU8sQ0FBRXdCLEtBQVgsMkVBQUUsZUFBZ0JDLEtBQWxCLHlEQUFFLHFCQUF1QkMsb0JBRDlCO0FBRUUsV0FBRyxFQUFFMUIsT0FBTyxDQUFDMkIsSUFGZjtBQUdFLGFBQUssRUFBRTtBQUNMQyxzQkFBWSxFQUFFLG9CQURUO0FBRUxDLDZCQUFtQixFQUFFLE1BRmhCO0FBR0xDLDhCQUFvQixFQUFFO0FBSGpCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxZQUFXOUIsT0FBTyxDQUFDbEgsRUFBRyxFQUFuQztBQUFBLG9CQUF1Q2tILE9BQU8sQ0FBQzJCO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFhRSw4REFBQyxxREFBRDtBQUFBLGtCQUFXSSxtREFBVyxDQUFDL0IsT0FBTyxDQUFDVSxLQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQWNFO0FBQUcsYUFBSyxFQUFFO0FBQUU3RSxlQUFLLEVBQUU7QUFBVCxTQUFWO0FBQUEsa0JBQWlDbUUsT0FBTyxDQUFDZ0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBZUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUNFLGNBQUksRUFBRTtBQUNKQyxvQkFBUSxFQUFFLFNBRE47QUFFSjdJLGlCQUFLLEVBQUU7QUFDTE4sZ0JBQUUsRUFBRWtILE9BQU8sQ0FBQ2xIO0FBRFA7QUFGSCxXQURSO0FBQUEsaUNBUUU7QUFDRSxpQkFBSyxFQUFFO0FBQ0xvSixvQ0FBc0IsRUFBRSxNQURuQjtBQUVML0QsdUJBQVMsRUFBRSxRQUZOO0FBR0wzRSxzQkFBUSxFQUFFO0FBSEwsYUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFtQkUsOERBQUMsbURBQUQ7QUFBZSxZQUFFLEVBQUV3RyxPQUFPLENBQUNsSCxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUF1Q0Q7O0FBQ0QsTUFBSW1ILFFBQVEsS0FBSyxNQUFqQixFQUF5QjtBQUFBOztBQUN2Qix3QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFRCxPQUFGLGFBQUVBLE9BQUYsMENBQUVBLE9BQU8sQ0FBRXdCLEtBQVgsNkVBQUUsZ0JBQWdCQyxLQUFsQiwwREFBRSxzQkFBdUJDLG9CQUQ5QjtBQUVFLFdBQUcsRUFBRTFCLE9BQU8sQ0FBQzJCLElBRmY7QUFHRSxhQUFLLEVBQUU7QUFDTEMsc0JBQVksRUFBRSxvQkFEVDtBQUVMQyw2QkFBbUIsRUFBRSxNQUZoQjtBQUdMQyw4QkFBb0IsRUFBRTtBQUhqQjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0U7QUFDRSxlQUFLLEVBQUU7QUFDTEssc0JBQVUsRUFBRSxTQURQO0FBRUxDLG1CQUFPLEVBQUUsUUFGSjtBQUdMQyxzQkFBVSxFQUFFLEtBSFA7QUFJTDdJLG9CQUFRLEVBQUUsTUFKTDtBQUtMMkUscUJBQVMsRUFBRSxTQUxOO0FBTUx0QyxpQkFBSyxFQUFFLFNBTkY7QUFPTEksbUJBQU8sRUFBRTtBQVBKLFdBRFQ7QUFBQSxvQkFXRytELE9BQU8sQ0FBQzJCO0FBWFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQXlCRTtBQUFHLGFBQUssRUFBRTtBQUFFOUYsZUFBSyxFQUFFO0FBQVQsU0FBVjtBQUFBLGtCQUFpQ21FLE9BQU8sQ0FBQ2dDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkYsZUEwQkU7QUFBRyxhQUFLLEVBQUU7QUFBRW5HLGVBQUssRUFBRSxNQUFUO0FBQWlCSyxnQkFBTSxFQUFFO0FBQXpCLFNBQVY7QUFBQSxnQ0FBc0Q4RCxPQUFPLENBQUNHLElBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRixlQTJCRTtBQUFHLGFBQUssRUFBRTtBQUFFdEUsZUFBSyxFQUFFLE9BQVQ7QUFBa0J5RyxtQkFBUyxFQUFFO0FBQTdCLFNBQVY7QUFBQSxnQ0FDRTtBQUFNLGVBQUssRUFBRTtBQUFFekcsaUJBQUssRUFBRTtBQUFULFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGdCQUdha0csbURBQVcsQ0FBQy9CLE9BQU8sQ0FBQ1UsS0FBVCxDQUh4QixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZ0JBS2FxQixtREFBVyxDQUFDdEIsR0FBRCxDQUx4QixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsV0FPUXNCLG1EQUFXLENBQUNwQixNQUFELENBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRixlQW9DRTtBQUNFLGFBQUssRUFBRTtBQUNMekUsZ0JBQU0sRUFBRSxLQURIO0FBRUxxRyxxQkFBVyxFQUFFLE1BRlI7QUFHTEMsb0JBQVUsRUFBRSxNQUhQO0FBSUwzRyxlQUFLLEVBQUUsT0FKRjtBQUtMNEcsbUJBQVMsRUFBRTtBQUxOLFNBRFQ7QUFBQSw4QkFTVSxHQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDRixFQWdERyxDQUFBekMsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCw4QkFBQUEsT0FBTyxDQUFFMEMsS0FBVCx5RkFBZ0I3QixJQUFoQiw0RUFBc0I4QixRQUF0QixNQUFtQyxFQUFuQyxpQkFDQztBQUNFLGFBQUssRUFBRTtBQUNMeEUsbUJBQVMsRUFBRSxRQUROO0FBRUx0QyxlQUFLLEVBQUUsS0FGRjtBQUdMSyxnQkFBTSxFQUFFLEtBSEg7QUFJTDBHLHVCQUFhLEVBQUU7QUFKVixTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakRKLEVBNERHLENBQUE1QyxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLCtCQUFBQSxPQUFPLENBQUUwQyxLQUFULDRGQUFnQjdCLElBQWhCLDhFQUFzQjhCLFFBQXRCLE1BQW1DLEVBQW5DLGlCQUNDO0FBQ0UsYUFBSyxFQUFFO0FBQ0x6RyxnQkFBTSxFQUFFLEtBREg7QUFFTDBHLHVCQUFhLEVBQUUsS0FGVjtBQUdML0csZUFBSyxFQUFFO0FBSEYsU0FEVDtBQUFBLG1CQU9HbUUsT0FQSCxhQU9HQSxPQVBILDBDQU9HQSxPQUFPLENBQUUwQyxLQVBaLDRFQU9HLGdCQUFnQjdCLElBUG5CLHlEQU9HLHFCQUFzQmMsSUFQekIsb0JBTytCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUC9CLEVBUUczQixPQVJILGFBUUdBLE9BUkgsMENBUUdBLE9BQU8sQ0FBRTBDLEtBUlosNEVBUUcsZ0JBQWdCN0IsSUFSbkIseURBUUcscUJBQXNCZ0MsT0FSekIsb0JBUWtDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUmxDLEVBU0c3QyxPQVRILGFBU0dBLE9BVEgsMENBU0dBLE9BQU8sQ0FBRTBDLEtBVFosNEVBU0csZ0JBQWdCN0IsSUFUbkIseURBU0cscUJBQXNCaUMsSUFUekIsb0JBUytCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVC9CLEVBVUc5QyxPQVZILGFBVUdBLE9BVkgsMENBVUdBLE9BQU8sQ0FBRTBDLEtBVlosNEVBVUcsZ0JBQWdCN0IsSUFWbkIseURBVUcscUJBQXNCa0MsTUFWekIsb0JBVWlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVmpDLEVBV0cvQyxPQVhILGFBV0dBLE9BWEgsMENBV0dBLE9BQU8sQ0FBRTBDLEtBWFosNEVBV0csZ0JBQWdCN0IsSUFYbkIseURBV0cscUJBQXNCOEIsUUFYekIsb0JBV21DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdESixlQTRFRSw4REFBQyw0Q0FBRDtBQUFlLFVBQUUsRUFBRTNDLE9BQU8sQ0FBQ2xILEVBQTNCO0FBQStCLG1CQUFXLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVFRixFQThFRyxDQUFBa0gsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVnRCxNQUFULE1BQW9CLFVBQXBCLElBQWtDLENBQUFoRCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWdELE1BQVQsTUFBb0IsVUFBdEQsaUJBQ0MsOERBQUMsNkNBQUQ7QUFBUSxVQUFFLEVBQUVoRCxPQUFPLENBQUNsSCxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9FSixFQWtGRyxDQUFBa0gsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVnRCxNQUFULE1BQW9CLFFBQXBCLGlCQUNDLDhEQUFDLCtDQUFEO0FBQVUsVUFBRSxFQUFFaEQsT0FBTyxDQUFDbEgsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuRkosRUFzRkdnSCxVQUFVLEtBQUssS0FBZixJQUNDLENBQUFFLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFZ0QsTUFBVCxNQUFvQixRQURyQixJQUVDLENBQUFoRCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWdELE1BQVQsTUFBb0IsVUFGckIsSUFHQyxDQUFBaEQsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVnRCxNQUFULE1BQW9CLFNBSHJCLElBSUMsQ0FBQWhELE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFZ0QsTUFBVCxNQUFvQixjQUpyQixJQUtDLENBQUFoRCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWdELE1BQVQsTUFBb0IsVUFMckIsaUJBTUcsOERBQUMsK0NBQUQ7QUFBVSxVQUFFLEVBQUVoRCxPQUFPLENBQUNsSCxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVGTixFQStGRyxDQUFBa0gsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVnRCxNQUFULE1BQW9CLE1BQXBCLGlCQUNDO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsK0JBQ0UsOERBQUMsNkNBQUQ7QUFBUSxZQUFFLEVBQUVoRCxPQUFPLENBQUNsSCxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoR0osRUFvR0csQ0FBQWtILE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFZ0QsTUFBVCxNQUFvQixRQUFwQixpQkFDQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFO0FBQ0UsaUJBQU8sRUFBRTlDLEtBRFg7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGVBQUssRUFBRTtBQUNMMUcsb0JBQVEsRUFBRSxPQURMO0FBRUwyRSxxQkFBUyxFQUFFLFFBRk47QUFHTGxDLG1CQUFPLEVBQUUsTUFISjtBQUlMQyxrQkFBTSxFQUFFLEtBSkg7QUFLTCtHLGtCQUFNLEVBQUUsU0FMSDtBQU1McEgsaUJBQUssRUFBRTtBQU5GLFdBSFQ7QUFBQSxrQ0FZRTtBQUFNLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJHSixFQXNIRyxDQUFBbUUsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVnRCxNQUFULE1BQW9CLFVBQXBCLGlCQUNDO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsK0JBQ0U7QUFDRSxpQkFBTyxFQUFFOUMsS0FEWDtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsZUFBSyxFQUFFO0FBQ0wxRyxvQkFBUSxFQUFFLE9BREw7QUFFTDJFLHFCQUFTLEVBQUUsUUFGTjtBQUdMbEMsbUJBQU8sRUFBRSxNQUhKO0FBSUxDLGtCQUFNLEVBQUUsS0FKSDtBQUtMK0csa0JBQU0sRUFBRSxTQUxIO0FBTUxwSCxpQkFBSyxFQUFFO0FBTkYsV0FIVDtBQUFBLGtDQVlFO0FBQU0saUJBQUssRUFBRTtBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkhKLEVBd0lHLENBQUFtRSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWdELE1BQVQsTUFBb0IsUUFBcEIsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUNFLGlCQUFPLEVBQUU5QyxLQURYO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUU7QUFDTDFHLG9CQUFRLEVBQUUsT0FETDtBQUVMMkUscUJBQVMsRUFBRSxRQUZOO0FBR0xsQyxtQkFBTyxFQUFFLE1BSEo7QUFJTEMsa0JBQU0sRUFBRSxLQUpIO0FBS0wrRyxrQkFBTSxFQUFFLFNBTEg7QUFNTHBILGlCQUFLLEVBQUU7QUFORixXQUhUO0FBQUEsa0NBWUU7QUFBTSxpQkFBSyxFQUFFO0FBQUVBLG1CQUFLLEVBQUU7QUFBVCxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6SUosRUEwSkcsQ0FBQW1FLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFZ0QsTUFBVCxNQUFvQixVQUFwQixpQkFDQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFO0FBQ0UsaUJBQU8sRUFBRTlDLEtBRFg7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGVBQUssRUFBRTtBQUNMMUcsb0JBQVEsRUFBRSxPQURMO0FBRUwyRSxxQkFBUyxFQUFFLFFBRk47QUFHTGxDLG1CQUFPLEVBQUUsTUFISjtBQUlMQyxrQkFBTSxFQUFFLEtBSkg7QUFLTCtHLGtCQUFNLEVBQUUsU0FMSDtBQU1McEgsaUJBQUssRUFBRTtBQU5GLFdBSFQ7QUFBQSxrQ0FZRTtBQUFNLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNKSixFQTRLRyxDQUFBbUUsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVnRCxNQUFULE1BQW9CLFNBQXBCLGlCQUNDO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsK0JBQ0U7QUFDRSxpQkFBTyxFQUFFOUMsS0FEWDtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsZUFBSyxFQUFFO0FBQ0wxRyxvQkFBUSxFQUFFLE9BREw7QUFFTDJFLHFCQUFTLEVBQUUsUUFGTjtBQUdMbEMsbUJBQU8sRUFBRSxNQUhKO0FBSUxDLGtCQUFNLEVBQUUsS0FKSDtBQUtMK0csa0JBQU0sRUFBRSxTQUxIO0FBTUxwSCxpQkFBSyxFQUFFO0FBTkYsV0FIVDtBQUFBLGtDQVlFO0FBQU0saUJBQUssRUFBRTtBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0tKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBaU1EOztBQUNELE1BQUlvRSxRQUFRLEtBQUssUUFBakIsRUFBMkI7QUFBQTs7QUFDekIsd0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBRUQsT0FBRixhQUFFQSxPQUFGLDBDQUFFQSxPQUFPLENBQUV3QixLQUFYLDZFQUFFLGdCQUFnQkMsS0FBbEIsMERBQUUsc0JBQXVCQyxvQkFEOUI7QUFFRSxXQUFHLEVBQUUxQixPQUFPLENBQUMyQixJQUZmO0FBR0UsYUFBSyxFQUFFO0FBQ0xDLHNCQUFZLEVBQUUsb0JBRFQ7QUFFTEMsNkJBQW1CLEVBQUUsTUFGaEI7QUFHTEMsOEJBQW9CLEVBQUU7QUFIakI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSw4REFBQyxrREFBRDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVc5QixPQUFPLENBQUNsSCxFQUFHLEVBQW5DO0FBQUEsb0JBQXVDa0gsT0FBTyxDQUFDMkI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQWFFLDhEQUFDLHFEQUFEO0FBQUEsa0JBQVdJLG1EQUFXLENBQUMvQixPQUFPLENBQUNVLEtBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0U7QUFBRyxhQUFLLEVBQUU7QUFBRTdFLGVBQUssRUFBRTtBQUFULFNBQVY7QUFBQSxrQkFBaUNtRSxPQUFPLENBQUNnQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsZUFlRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNFO0FBQ0UsWUFBRSxFQUFFaEMsT0FBTyxDQUFDbEgsRUFEZDtBQUVFLHlCQUFZLFVBRmQ7QUFHRSxpQkFBTyxFQUFFb0ksWUFIWDtBQUlFLGNBQUksRUFBQyxRQUpQO0FBS0UsZUFBSyxFQUFFO0FBQUUxSCxvQkFBUSxFQUFFO0FBQVosV0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVVFLDhEQUFDLGtEQUFEO0FBQ0UsY0FBSSxFQUFFO0FBQ0p5SSxvQkFBUSxFQUFFLFNBRE47QUFFSjdJLGlCQUFLLEVBQUU7QUFDTE4sZ0JBQUUsRUFBRWtILE9BQU8sQ0FBQ2xIO0FBRFA7QUFGSCxXQURSO0FBQUEsaUNBUUU7QUFDRSxpQkFBSyxFQUFFO0FBQ0xvSixvQ0FBc0IsRUFBRSxNQURuQjtBQUVML0QsdUJBQVMsRUFBRSxRQUZOO0FBR0wzRSxzQkFBUSxFQUFFO0FBSEwsYUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsZUE0QkU7QUFDRSxZQUFFLEVBQUV3RyxPQUFPLENBQUNsSCxFQURkO0FBRUUseUJBQVksV0FGZDtBQUdFLGlCQUFPLEVBQUVvSSxZQUhYO0FBSUUsY0FBSSxFQUFDLFFBSlA7QUFLRSxlQUFLLEVBQUU7QUFBRTFILG9CQUFRLEVBQUU7QUFBWixXQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXdERDs7QUFDRCxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFd0csT0FBRixhQUFFQSxPQUFGLDBDQUFFQSxPQUFPLENBQUV3QixLQUFYLDZFQUFFLGdCQUFnQkMsS0FBbEIsMERBQUUsc0JBQXVCQyxvQkFEOUI7QUFFRSxTQUFHLEVBQUUxQixPQUFPLENBQUMyQixJQUZmO0FBR0UsV0FBSyxFQUFFO0FBQ0xDLG9CQUFZLEVBQUUsb0JBRFQ7QUFFTEMsMkJBQW1CLEVBQUUsTUFGaEI7QUFHTEMsNEJBQW9CLEVBQUU7QUFIakI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLFlBQVc5QixPQUFPLENBQUNsSCxFQUFHLEVBQW5DO0FBQUEsa0JBQXVDa0gsT0FBTyxDQUFDMkI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWFFLDhEQUFDLHFEQUFEO0FBQUEsaUJBQ0dJLG1EQUFXLENBQUMvQixPQUFPLENBQUNVLEtBQVQsQ0FEZCxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFrQkUsOERBQUMsdURBQUQ7QUFBQSxnQkFBWVYsT0FBTyxDQUFDa0Q7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixlQW1CRTtBQUFHLFdBQUssRUFBRTtBQUFFckgsYUFBSyxFQUFFO0FBQVQsT0FBVjtBQUFBLGdCQUFpQ21FLE9BQU8sQ0FBQ2dDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsZUFvQkU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLGlCQUNHLENBQUFoQyxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLDZCQUFBQSxPQUFPLENBQUVhLElBQVQsZ0VBQWUvSCxFQUFmLE9BQXNCK0gsSUFBdEIsYUFBc0JBLElBQXRCLHVCQUFzQkEsSUFBSSxDQUFFL0gsRUFBNUIsa0JBQ0MsOERBQUMsa0RBQUQ7QUFDRSxZQUFJLEVBQUU7QUFDSm1KLGtCQUFRLEVBQUUsU0FETjtBQUVKN0ksZUFBSyxFQUFFO0FBQ0xOLGNBQUUsRUFBRWtILE9BQU8sQ0FBQ2xIO0FBRFA7QUFGSCxTQURSO0FBQUEsK0JBUUU7QUFDRSxlQUFLLEVBQUU7QUFDTG9KLGtDQUFzQixFQUFFLE1BRG5CO0FBRUwvRCxxQkFBUyxFQUFFLFFBRk47QUFHTDNFLG9CQUFRLEVBQUU7QUFITCxXQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBcUJHLENBQUF3RyxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLDhCQUFBQSxPQUFPLENBQUVhLElBQVQsa0VBQWUvSCxFQUFmLE9BQXNCK0gsSUFBdEIsYUFBc0JBLElBQXRCLHVCQUFzQkEsSUFBSSxDQUFFL0gsRUFBNUIsa0JBQWtDLDhEQUFDLCtDQUFEO0FBQVcsVUFBRSxFQUFFa0gsT0FBTyxDQUFDbEg7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCckMsRUFzQkcsQ0FBQWtILE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsOEJBQUFBLE9BQU8sQ0FBRWEsSUFBVCxrRUFBZS9ILEVBQWYsT0FBc0IrSCxJQUF0QixhQUFzQkEsSUFBdEIsdUJBQXNCQSxJQUFJLENBQUUvSCxFQUE1QixrQkFDQyw4REFBQyxtREFBRDtBQUFlLFVBQUUsRUFBRWtILE9BQU8sQ0FBQ2xILEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZaRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNcUssa0JBQWtCLEdBQUd2SyxvREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F4Qk87QUEwQlAsTUFBTXdLLGtCQUFrQixHQUFHdEksdUVBQUg7QUFBQTtBQUFBO0FBQUEsNFJBQXhCO0FBcUJlLFNBQVN1SSxRQUFULENBQWtCO0FBQUVuRTtBQUFGLENBQWxCLEVBQTRCO0FBQ3pDLFFBQU07QUFBRWpGLFFBQUY7QUFBUUksU0FBUjtBQUFlckI7QUFBZixNQUEyQjhFLHdEQUFRLENBQUNxRixrQkFBRCxFQUFxQjtBQUM1RGpLLGFBQVMsRUFBRTtBQUNUb0ssVUFBSSxFQUFFcEUsSUFBSSxHQUFHTSw0Q0FBUCxHQUFpQkEsNENBRGQ7QUFFVCtELFdBQUssRUFBRS9ELDRDQUFPQTtBQUZMO0FBRGlELEdBQXJCLENBQXpDO0FBTUEsTUFBSXhHLE9BQUosRUFBYSxvQkFBTyw4REFBQyw2Q0FBRDtBQUFTLFFBQUksRUFBRUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJcUIsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ08sT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGtCQUFEO0FBQUEsZ0JBQ0dYLElBQUksQ0FBQ3VKLFFBQUwsQ0FBY3BJLEdBQWQsQ0FBbUI0RSxPQUFELGlCQUNqQiw4REFBQyw2Q0FBRDtBQUEwQixlQUFPLEVBQUVBLE9BQW5DO0FBQTRDLGdCQUFRLEVBQUM7QUFBckQsU0FBY0EsT0FBTyxDQUFDbEgsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFRDtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU15SSx5QkFBeUIsR0FBRzNJLG9EQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJQLE1BQU13SyxrQkFBa0IsR0FBR3RJLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZSQUF4QjtBQXFCZSxTQUFTMkksY0FBVCxHQUEwQjtBQUN2QyxRQUFNO0FBQUV4SixRQUFGO0FBQVFJLFNBQVI7QUFBZXJCO0FBQWYsTUFBMkI4RSx3REFBUSxDQUFDeUQseUJBQUQsRUFBNEIsRUFBNUIsQ0FBekM7QUFDQSxNQUFJdkksT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJcUIsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ08sT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxzQkFDRTtBQUFBLGVBQ0dYLElBQUksQ0FBQ3VKLFFBQUwsQ0FBY3JJLE1BQWQsSUFBd0IsQ0FBeEIsaUJBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTGdELGlCQUFTLEVBQUUsUUFETjtBQUVMc0UsaUJBQVMsRUFBRSxvQkFGTjtBQUdMYixvQkFBWSxFQUFFLG9CQUhUO0FBSUxVLGlCQUFTLEVBQUUsTUFKTjtBQUtMdkQsb0JBQVksRUFBRTtBQUxULE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQWNHOUUsSUFBSSxDQUFDdUosUUFBTCxDQUFjckksTUFBZCxLQUF5QixDQUF6QixpQkFDQztBQUNFLFdBQUssRUFBRTtBQUNMZ0QsaUJBQVMsRUFBRSxRQUROO0FBRUxzRSxpQkFBUyxFQUFFLG9CQUZOO0FBR0xiLG9CQUFZLEVBQUUsb0JBSFQ7QUFJTFUsaUJBQVMsRUFBRSxNQUpOO0FBS0x2RCxvQkFBWSxFQUFFLE1BTFQ7QUFNTGxELGFBQUssRUFBRTtBQU5GLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSixlQTRCRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHNUIsSUFBSSxDQUFDdUosUUFBTCxDQUFjcEksR0FBZCxDQUFtQjRFLE9BQUQsaUJBQ2pCLDhEQUFDLDZDQUFEO0FBQTBCLGVBQU8sRUFBRUEsT0FBbkM7QUFBNEMsZ0JBQVEsRUFBQztBQUFyRCxTQUFjQSxPQUFPLENBQUNsSCxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU04Ryx1QkFBdUIsR0FBR2hILG9EQUFJO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbENPO0FBb0NQLE1BQU13SyxrQkFBa0IsR0FBR3RJLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZSQUF4QjtBQXFCZSxTQUFTNEksWUFBVCxHQUF3QjtBQUNyQyxRQUFNbEcsT0FBTyxHQUFHakUsOENBQU8sRUFBdkI7QUFDQSxRQUFNa0UsS0FBSyxHQUFHRCxPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRTFFLEVBQXZCO0FBQ0EsUUFBTTtBQUFFbUIsUUFBRjtBQUFRSSxTQUFSO0FBQWVyQjtBQUFmLE1BQTJCOEUsd0RBQVEsQ0FBQzhCLHVCQUFELEVBQTBCO0FBQ2pFMUcsYUFBUyxFQUFFO0FBQ1R5SyxnQkFBVSxFQUFFbEc7QUFESDtBQURzRCxHQUExQixDQUF6QztBQUtBLE1BQUl6RSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlxQixLQUFKLEVBQVcsb0JBQU87QUFBQSwwQkFBV0EsS0FBSyxDQUFDTyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLHNCQUNFO0FBQUEsZUFDR1gsSUFBSSxDQUFDMkosVUFBTCxDQUFnQnpJLE1BQWhCLEtBQTJCLENBQTNCLGlCQUNDO0FBQUksV0FBSyxFQUFFO0FBQUVVLGFBQUssRUFBRSxLQUFUO0FBQWdCc0MsaUJBQVMsRUFBRSxRQUEzQjtBQUFxQzBGLGtCQUFVLEVBQUU7QUFBakQsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBTUc1SixJQUFJLENBQUMySixVQUFMLENBQWdCekksTUFBaEIsSUFBMEIsQ0FBMUIsaUJBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTGdELGlCQUFTLEVBQUUsUUFETjtBQUVMc0UsaUJBQVMsRUFBRSxvQkFGTjtBQUdMYixvQkFBWSxFQUFFLG9CQUhUO0FBSUxVLGlCQUFTLEVBQUUsTUFKTjtBQUtMdkQsb0JBQVksRUFBRTtBQUxULE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQW1CRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHOUUsSUFBSSxDQUFDMkosVUFBTCxDQUFnQnhJLEdBQWhCLENBQXFCNEUsT0FBRCxpQkFDbkIsOERBQUMsNkNBQUQ7QUFBMEIsZUFBTyxFQUFFQSxPQUFuQztBQUE0QyxnQkFBUSxFQUFDO0FBQXJELFNBQWNBLE9BQU8sQ0FBQ2xILEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNMkQsWUFBWSxHQUFHM0IsMEVBQUg7QUFBQTtBQUFBO0FBQUEsK0lBQWxCO0FBV0EsTUFBTWdKLGVBQWUsR0FBR2xMLG9EQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBT2UsU0FBU21MLE1BQVQsQ0FBZ0I7QUFBRWpMLElBQUY7QUFBTXNCO0FBQU4sQ0FBaEIsRUFBa0M7QUFDL0MsUUFBTSxDQUFDNEosTUFBRCxFQUFTO0FBQUVoTCxXQUFGO0FBQVdxQjtBQUFYLEdBQVQsSUFBK0JwQiwyREFBVyxDQUFDNkssZUFBRCxFQUFrQjtBQUNoRTVLLGFBQVMsRUFBRTtBQUFFSjtBQUFGLEtBRHFEO0FBRWhFSyxrQkFBYyxFQUFFLENBQ2Q7QUFBRUMsV0FBSyxFQUFFd0csa0VBQXVCQTtBQUFoQyxLQURjLEVBRWQseUJBRmM7QUFGZ0QsR0FBbEIsQ0FBaEQ7QUFPQSxzQkFDRSw4REFBQyxZQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xwRyxjQUFRLEVBQUUsT0FETDtBQUVMOEksZUFBUyxFQUFFO0FBRk4sS0FEVDtBQUtFLFFBQUksRUFBQyxRQUxQO0FBTUUsWUFBUSxFQUFFdEosT0FOWjtBQU9FLFdBQU8sRUFBRSxNQUFNO0FBQ2IsVUFDRXdCLE9BQU8sQ0FDTCx5RUFESyxDQURULEVBSUU7QUFDQXdKLGNBQU0sR0FBR3ZKLEtBQVQsQ0FBZ0JDLEdBQUQsSUFBU0MsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQUwsQ0FBN0I7QUFDRDtBQUNGLEtBZkg7QUFBQSxjQWlCR1I7QUFqQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTXFDLFlBQVksR0FBRzNCLDBFQUFIO0FBQUE7QUFBQTtBQUFBLGlKQUFsQjtBQVdBLE1BQU1tSixnQkFBZ0IsR0FBR3JMLG9EQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBT2UsU0FBU3NMLFFBQVQsQ0FBa0I7QUFBRXBMLElBQUY7QUFBTXNCO0FBQU4sQ0FBbEIsRUFBb0M7QUFDakQsUUFBTSxDQUFDK0osUUFBRCxFQUFXO0FBQUVuTCxXQUFGO0FBQVdxQjtBQUFYLEdBQVgsSUFBaUNwQiwyREFBVyxDQUFDZ0wsZ0JBQUQsRUFBbUI7QUFDbkUvSyxhQUFTLEVBQUU7QUFBRUo7QUFBRixLQUR3RDtBQUVuRUssa0JBQWMsRUFBRSxDQUNkO0FBQUVDLFdBQUssRUFBRXdHLGtFQUF1QkE7QUFBaEMsS0FEYyxFQUVkLHlCQUZjO0FBRm1ELEdBQW5CLENBQWxEO0FBT0Esc0JBQ0UsOERBQUMsWUFBRDtBQUNFLFNBQUssRUFBRTtBQUNMcEcsY0FBUSxFQUFFLE9BREw7QUFFTDhJLGVBQVMsRUFBRTtBQUZOLEtBRFQ7QUFLRSxRQUFJLEVBQUMsUUFMUDtBQU1FLFlBQVEsRUFBRXRKLE9BTlo7QUFPRSxXQUFPLEVBQUUsTUFBTTtBQUNiLFVBQ0V3QixPQUFPLENBQ0wsb0xBREssQ0FEVCxFQUlFO0FBQ0EySixnQkFBUSxHQUFHMUosS0FBWCxDQUFrQkMsR0FBRCxJQUFTQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUEvQjtBQUNEO0FBQ0YsS0FmSDtBQUFBLGNBaUJHUjtBQWpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckREO0FBRU8sTUFBTWYsa0JBQWtCLEdBQUdULCtDQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoQ087QUFrQ0EsU0FBU1csT0FBVCxHQUFtQjtBQUN4QixRQUFNO0FBQUVVO0FBQUYsTUFBVzZELHdEQUFRLENBQUN6RSxrQkFBRCxDQUF6QjtBQUNBLFNBQU9ZLElBQVAsYUFBT0EsSUFBUCx1QkFBT0EsSUFBSSxDQUFFbUssaUJBQWI7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUVBLE1BQU1wTCxPQUFPLEdBQUdxRCw0REFBSCxzRUFBYjtBQVlBLE1BQU1nSSxJQUFJLEdBQUd2Six3RUFBSDtBQUFBO0FBQUE7QUFBQSx1eEJBb0RTOUIsT0FwRFQsQ0FBVjtBQXlEQSwrREFBZXFMLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFFQSxNQUFNQyxVQUFVLEdBQUd4Six1RUFBSDtBQUFBO0FBQUE7QUFBQSwrZkFBaEI7QUFxQ0EsK0RBQWV3SixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUd6Six1RUFBSDtBQUFBO0FBQUE7QUFBQSxnWEFBdEI7QUF3QkEsK0RBQWV5SixnQkFBZixFOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBLE1BQU1DLFFBQVEsR0FBRzFKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHlPQUFkO0FBbUJBLCtEQUFlMEosUUFBZixFOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBLE1BQU1DLFNBQVMsR0FBRzNKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtMQUFmO0FBY0EsK0RBQWUySixTQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUEsTUFBTUMsS0FBSyxHQUFHNUosc0VBQUg7QUFBQTtBQUFBO0FBQUEsc1BBQVg7QUFpQkEsK0RBQWU0SixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ08sTUFBTUMsUUFBUSxHQUFJLG1DQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBSSx1REFBdEI7QUFDQSxNQUFNcEYsT0FBTyxHQUFHLENBQWhCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0hRLFNBQVN1QyxXQUFULENBQXFCcEIsTUFBTSxHQUFHLENBQTlCLEVBQWlDO0FBQzlDLFFBQU1rRSxPQUFPLEdBQUc7QUFDZEMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQjs7QUFNQSxNQUFJckUsTUFBTSxHQUFHLEdBQVQsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJrRSxXQUFPLENBQUNHLHFCQUFSLEdBQWdDLENBQWhDO0FBQ0Q7O0FBRUQsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQk4sT0FBL0IsQ0FBbEI7QUFFQSxTQUFPSSxTQUFTLENBQUNHLE1BQVYsQ0FBaUJ6RSxNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFFZSxTQUFTcEQsT0FBVCxDQUFpQjhILE9BQU8sR0FBRyxFQUEzQixFQUErQjtBQUM1QztBQUNBLFFBQU07QUFBQSxPQUFDbEksTUFBRDtBQUFBLE9BQVNtSTtBQUFULE1BQXNCckgsK0NBQVEsQ0FBQ29ILE9BQUQsQ0FBcEM7QUFDQSxRQUFNRSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixPQUFkLEVBQXVCSyxJQUF2QixDQUE0QixFQUE1QixDQUF0QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZEwsYUFBUyxDQUFDRCxPQUFELENBQVQ7QUFDRCxHQUZRLEVBRU4sQ0FBQ0UsYUFBRCxDQUZNLENBQVQ7O0FBSUEsV0FBU25JLFlBQVQsQ0FBc0J3QixDQUF0QixFQUF5QjtBQUN2QixRQUFJO0FBQUVnSCxXQUFGO0FBQVNqRSxVQUFUO0FBQWVrRTtBQUFmLFFBQXdCakgsQ0FBQyxDQUFDd0MsTUFBOUI7O0FBQ0EsUUFBSXlFLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRCxXQUFLLEdBQUdoRixRQUFRLENBQUNnRixLQUFELENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSUMsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsT0FBQ0QsS0FBRCxJQUFVaEgsQ0FBQyxDQUFDd0MsTUFBRixDQUFTMEUsS0FBbkI7QUFDRDs7QUFDRFIsYUFBUyxpQ0FDSm5JLE1BREk7QUFFUCxPQUFDd0UsSUFBRCxHQUFRaUU7QUFGRCxPQUFUO0FBSUQ7O0FBRUQsV0FBU3RJLFNBQVQsR0FBcUI7QUFDbkJnSSxhQUFTLENBQUNELE9BQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNoSSxTQUFULEdBQXFCO0FBQ25CLFVBQU0wSSxVQUFVLEdBQUdQLE1BQU0sQ0FBQ1EsV0FBUCxDQUNqQlIsTUFBTSxDQUFDUyxPQUFQLENBQWU5SSxNQUFmLEVBQXVCL0IsR0FBdkIsQ0FBMkIsQ0FBQyxDQUFDOEssR0FBRCxFQUFNTixLQUFOLENBQUQsS0FBa0IsQ0FBQ00sR0FBRCxFQUFNLEVBQU4sQ0FBN0MsQ0FEaUIsQ0FBbkI7QUFHQVosYUFBUyxDQUFDUyxVQUFELENBQVQ7QUFDRDs7QUFFRCxTQUFPO0FBQ0w1SSxVQURLO0FBRUxDLGdCQUZLO0FBR0xFLGFBSEs7QUFJTEQ7QUFKSyxHQUFQO0FBTUQsQzs7Ozs7Ozs7OztBQzFDRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfRm9vdGVyX2pzLWNvbXBvbmVudHNfUGFnaW5hdGlvbl9qcy1jb21wb25lbnRzX1Byb2R1Y3RzX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlksIHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgQUREX1RPX0NBUlRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gQUREX1RPX0NBUlRfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGFkZFRvQ2FydChwcm9kdWN0SWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvQ2FydCh7IGlkIH0pIHtcclxuICBjb25zdCBbYWRkVG9DYXJ0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihBRERfVE9fQ0FSVF9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcclxuICBpZiAoIW1lKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmsgaHJlZj1cIi9TaWduSW5cIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17eyBmb250U2l6ZTogJzEuMTVlbScgfX0+XHJcbiAgICAgICAgICBMb2dpbiB0byBBZGQgVG8gQ2FydCDwn5uSXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXthZGRUb0NhcnR9XHJcbiAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xNWVtJyB9fVxyXG4gICAgPlxyXG4gICAgICBBZGR7bG9hZGluZyAmJiAnaW5nJ30gVG8gQ2FydCDwn5uSXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmNvbnN0IERFTEVURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGNhY2hlLCBwYXlsb2FkKSB7XHJcbiAgY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgY2FjaGUuZXZpY3QoY2FjaGUuaWRlbnRpZnkocGF5bG9hZC5kYXRhLmRlbGV0ZVByb2R1Y3QpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlUHJvZHVjdCh7IGlkLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2RlbGV0ZVByb2R1Y3QsIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIERFTEVURV9QUk9EVUNUX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgICAgdXBkYXRlLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBib3JkZXJMZWZ0OiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICAgICAgfX1cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpKSB7XHJcbiAgICAgICAgICAvLyBnbyBhaGVhZCBhbmQgZGVsZXRlIGl0XHJcbiAgICAgICAgICBkZWxldGVQcm9kdWN0KCkuY2F0Y2goKGVycikgPT4gYWxlcnQoZXJyLm1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFcnJvclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9KSA9PiB7XG4gIGlmICghZXJyb3IgfHwgIWVycm9yLm1lc3NhZ2UpIHJldHVybiBudWxsO1xuICBpZiAoXG4gICAgZXJyb3IubmV0d29ya0Vycm9yICYmXG4gICAgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJlxuICAgIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLmxlbmd0aFxuICApIHtcbiAgICByZXR1cm4gZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubWFwKChlcnJvciwgaSkgPT4gKFxuICAgICAgPEVycm9yU3R5bGVzIGtleT17aX0+XG4gICAgICAgIDxwIGRhdGEtdGVzdD1cImdyYXBocWwtZXJyb3JcIj5cbiAgICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9FcnJvclN0eWxlcz5cbiAgICApKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxFcnJvclN0eWxlcz5cbiAgICAgIDxwIGRhdGEtdGVzdD1cImdyYXBocWwtZXJyb3JcIj5cbiAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxuICAgICAgPC9wPlxuICAgIDwvRXJyb3JTdHlsZXM+XG4gICk7XG59O1xuXG5EaXNwbGF5RXJyb3IuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjoge30sXG59O1xuXG5EaXNwbGF5RXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlFcnJvcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBCb3R0b21OYXYgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIHRoaW4gIzAwMDAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm90dG9tTmF2PlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL2luZGllYnViYmEuY29tXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6ICdwaW5rJyxcclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgaW5kaWVidWJiYS5jb20gJm5ic3A7XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vaW5kaWVidWJiYVwiXHJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2ljb25zOC1pbnN0YWdyYW0tNDAucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkluZGllIEJ1YmJhIEluc3RhZ3JhbVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YVxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tL2luZGllYnViYmFcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2ljb25zOC1mYWNlYm9vay02NC5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiSW5kaWUgQnViYmEgRmFjZWJvb2tcIlxyXG4gICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86aGVsbG9AaW5kaWVidWJiYS5jb21cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjb2xvcjogJ3BpbmsnLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAmbmJzcDsgaGVsbG9AaW5kaWVidWJiYS5jb21cclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiIy5jb21cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICBtYXJnaW46ICcwJyxcclxuICAgICAgICAgIGNvbG9yOiAncGluaycsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzAuOGVtJyxcclxuICAgICAgICAgIHJpZ2h0OiAnN3B4JyxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAmY29weTsgVE1JIFRyYWRpbmcgQ28gTFREXHJcbiAgICAgIDwvYT5cclxuICAgIDwvQm90dG9tTmF2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBsb2FkaW5nID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gICAgLyogcm90YXRlOiAwOyAqL1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9hZFN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgJltkaXNhYmxlZF0ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAmOjpiZWZvcmUge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA3N2EwIDAlLCAjZmRlNmZmIDgwJSk7XHJcbiAgfVxyXG4gICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRCYXIoeyBsb2FkIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRTdHlsZSBkaXNhYmxlZD17bG9hZH0gYXJpYS1idXN5PXtsb2FkfT5cclxuICAgICAgJm5ic3A7XHJcbiAgICA8L0xvYWRTdHlsZT5cclxuICApO1xyXG59XHJcbiIsIi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzAxNTI2ODtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IFNtYWxsZXJCdXR0b25TdHlsZXMgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMDE1MjY4O1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbmA7XHJcblxyXG5jb25zdCBNZXNzYWdlUmVjZWl2ZWQgPSBzdHlsZWQucGBcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBNZXNzYWdlU2VudCA9IHN0eWxlZC5wYFxyXG4gIGJhY2tncm91bmQ6ICNkZmZmZTk7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbmA7XHJcblxyXG5jb25zdCBNZXNzYWdlU2VudFNwYW4gPSBzdHlsZWQucGBcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbmA7XHJcbmNvbnN0IE1lc3NhZ2VSZWNlaXZlZFNwYW4gPSBzdHlsZWQucGBcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgQ1JFQVRFX0NIQVRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gQ1JFQVRFX0NIQVRfTVVUQVRJT04oXHJcbiAgICAkbWVzc2FnZTogU3RyaW5nIVxyXG4gICAgJGlkOiBJRCFcclxuICAgICRwYWdlVHlwZU1vZDogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2hhdHRlcihtZXNzYWdlOiAkbWVzc2FnZSwgaWQ6ICRpZCwgcGFnZVR5cGVNb2Q6ICRwYWdlVHlwZU1vZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfQ0hBVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgQUxMX0NIQVRTX1FVRVJZKCRpZDogSUQpIHtcclxuICAgIGNoYXRzKFxyXG4gICAgICB3aGVyZTogeyBpdGVtOiB7IGlkOiB7IGVxdWFsczogJGlkIH0gfSB9XHJcbiAgICAgIG9yZGVyQnk6IFt7IHRpbWVTdGFtcDogYXNjIH1dXHJcbiAgICApIHtcclxuICAgICAgbWVzc2FnZVxyXG4gICAgICBpZFxyXG4gICAgICB0aW1lU3RhbXBcclxuICAgICAgdXNlckZyb20ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgaXRlbSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsRnVuY3Rpb24oeyBpZCwgcGFnZVR5cGVNb2QgfSkge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0aGVVc2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHRoZUlkID0gdGhlVXNlcj8uaWQ7XHJcblxyXG4gIGNvbnN0IFtjcmVhdGVDaGF0dGVyLCB7IGxvYWRpbmdDcmVhdGUsIGVycm9yQ3JlYXRlLCBkYXRhQ3JlYXRlIH1dID1cclxuICAgIHVzZU11dGF0aW9uKENSRUFURV9DSEFUX01VVEFUSU9OLCB7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIG1lc3NhZ2U6IGlucHV0cy5tZXNzYWdlLFxyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHBhZ2VUeXBlTW9kLFxyXG4gICAgICB9LFxyXG4gICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEFMTF9DSEFUU19RVUVSWSB9LCAnQUxMX0NIQVRTX1FVRVJZJ10sXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX0NIQVRTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcgbWVzc2FnZXMuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cGFnZVR5cGVNb2QgPT09ICdidXllcicgJiYgKFxyXG4gICAgICAgIDxCdXR0b25TdHlsZXMgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKX0+XHJcbiAgICAgICAgICBDb250YWN0IFNlbGxlclxyXG4gICAgICAgIDwvQnV0dG9uU3R5bGVzPlxyXG4gICAgICApfVxyXG4gICAgICB7cGFnZVR5cGVNb2QgPT09ICdzZWxsZXInICYmIChcclxuICAgICAgICA8QnV0dG9uU3R5bGVzIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9PlxyXG4gICAgICAgICAgQ29udGFjdCBCdXllclxyXG4gICAgICAgIDwvQnV0dG9uU3R5bGVzPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPE1vZGFsIHRvZ2dsZT17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfSBpc09wZW49e21vZGFsT3Blbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5MCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzEuM2VtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBNZXNzYWdlc1xyXG4gICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDxTbWFsbGVyQnV0dG9uU3R5bGVzXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjbG9zZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPsOXPC9zcGFuPlxyXG4gICAgICAgICAgPC9TbWFsbGVyQnV0dG9uU3R5bGVzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICB7ZGF0YS5jaGF0cy5tYXAoKGNoYXQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShjaGF0LnRpbWVTdGFtcCk7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IGRhdGVUaW1lLnRvR01UU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGR0ID0gZHQucmVwbGFjZSgnR01UJywgJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjaGF0LmlkfT5cclxuICAgICAgICAgICAgICAgIHtjaGF0LnVzZXJGcm9tLmlkID09PSB0aGVJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VTZW50U3Bhbj57ZHR9PC9NZXNzYWdlU2VudFNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VTZW50PntjaGF0Lm1lc3NhZ2V9PC9NZXNzYWdlU2VudD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2NoYXQudXNlckZyb20uaWQgIT09IHRoZUlkICYmIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVJlY2VpdmVkU3Bhbj57ZHR9PC9NZXNzYWdlUmVjZWl2ZWRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlUmVjZWl2ZWQ+e2NoYXQubWVzc2FnZX08L01lc3NhZ2VSZWNlaXZlZD5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlQ2hhdHRlcigpO1xyXG4gICAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICc3cHgnIH19XHJcbiAgICAgICAgICAgICAgcm93cz1cIjNcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNtYWxsZXJCdXR0b25TdHlsZXMgdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L1NtYWxsZXJCdXR0b25TdHlsZXM+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgUEFHSU5BVElPTl9RVUVSWSB7XHJcbiAgICBwcm9kdWN0c0NvdW50KHdoZXJlOiB7IHN0YXR1czogeyBlcXVhbHM6IFwiQVZBSUxBQkxFXCIgfSB9KVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlIH0pIHtcclxuICBjb25zdCB7IGVycm9yLCBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShQQUdJTkFUSU9OX1FVRVJZKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJztcclxuICBpZiAoZXJyb3IpIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgY29uc3QgY291bnQgPSBkYXRhLnByb2R1Y3RzQ291bnQ7XHJcbiAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGNvdW50IC8gcGVyUGFnZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdpbmF0aW9uU3R5bGVzPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBJbmRpZSBCdWJiYSAtIFBhZ2Uge3BhZ2V9IG9mIHtwYWdlQ291bnR9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSAtIDF9YH0+XHJcbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA8PSAxfT7ihpAgUHJldjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8cD5cclxuICAgICAgICBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPntjb3VudH0gSXRlbXMgVG90YWw8L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwYWdlICsgMX1gfT5cclxuICAgICAgICA8YSBhcmlhLWRpc2FibGVkPXtwYWdlID49IHBhZ2VDb3VudH0+TmV4dCDihpI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvUGFnaW5hdGlvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9IGZyb20gJy4vUHJvZHVjdHNTb2xkJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzAxNTI2ODtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IFVQREFURV9PUkRFUl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBVUERBVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgdXBkYXRlT3JkZXJTdGF0dXMoaWQ6ICRpZCwgc3RhdHVzOiBcIlBPU1RFRFwiKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0ZWQoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1cGRhdGVPcmRlckl0ZW0sIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIFVQREFURV9PUkRFUl9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAgeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgfSxcclxuICAgICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQnLFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25TdHlsZXNcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgfX1cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1BsZWFzZSBjb25maXJtIHlvdSBoYXZlIHBvc3RlZCB0aGlzIGl0ZW0/JykpIHtcclxuICAgICAgICAgIHVwZGF0ZU9yZGVySXRlbSgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSAnLi9zdHlsZXMvSXRlbVN0eWxlcyc7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuL3N0eWxlcy9UaXRsZSc7XHJcbmltcG9ydCBQcmljZVRhZyBmcm9tICcuL3N0eWxlcy9QcmljZVRhZyc7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvbW9uZXknO1xyXG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tICcuL0RlbGV0ZVByb2R1Y3QnO1xyXG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4vQWRkVG9DYXJ0JztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVyB9IGZyb20gJy4vUHJvZHVjdHNSZXZpZXcnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IFBvc3RlZCBmcm9tICcuL1Bvc3RlZCc7XHJcbmltcG9ydCBNb2RhbEZ1bmN0aW9uIGZyb20gJy4vTW9kYWwnO1xyXG5pbXBvcnQgUmVmdW5kIGZyb20gJy4vUmVmdW5kJztcclxuaW1wb3J0IFJlbGVhc2VkIGZyb20gJy4vUmVsZWFzZWQnO1xyXG5pbXBvcnQgU3RhdHVzVGFnIGZyb20gJy4vc3R5bGVzL1N0YXR1c1RhZyc7XHJcblxyXG5jb25zdCBVUERBVEVfU1RBVFVTX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9TVEFUVVNfTVVUQVRJT04oJGlkOiBJRCEsICRkYXRhU3RhdHVzOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZVByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9LCBkYXRhOiB7IHN0YXR1czogJGRhdGFTdGF0dXMgfSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmxldCBjYW5SZWxlYXNlID0gJ25vJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0LCBwYWdlVHlwZSB9KSB7XHJcbiAgZnVuY3Rpb24gaGVsbG8oKSB7fVxyXG4gIHtcclxuICAgIGNvbnN0IHRpbWVTdGFtcCA9IHByb2R1Y3Q/LmRhdGU7XHJcbiAgICBjb25zdCB0aGVEYXRlID0gbmV3IERhdGUodGltZVN0YW1wKTtcclxuICAgIGNvbnN0IGRhdGVQbHVzID0gdGhlRGF0ZS5zZXREYXRlKHRoZURhdGUuZ2V0RGF0ZSgpICsgMjEpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIGlmIChuZXdEYXRlID4gZGF0ZVBsdXMpIHtcclxuICAgICAgY2FuUmVsZWFzZSA9ICd5ZXMnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FuUmVsZWFzZSA9ICdubyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmZWUgPSBNYXRoLmNlaWwocHJvZHVjdC5wcmljZSAqIDAuMDUpO1xyXG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KHByb2R1Y3QucHJpY2UpIC0gZmVlO1xyXG5cclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IFt1cGRhdGVTdGF0dXMsIHsgZGF0YTogRGF0YSwgZXJyb3I6IEVycm9yLCBsb2FkaW5nOiBMb2FkaW5nIH1dID1cclxuICAgIHVzZU11dGF0aW9uKFVQREFURV9TVEFUVVNfTVVUQVRJT04pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0dXMgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGNvbnN0IGRhdGFTdGF0dXMgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlU3RhdHVzKHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgZGF0YVN0YXR1cyxcclxuICAgICAgfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtcclxuICAgICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXIH0sXHJcbiAgICAgICAgJ0FMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcnLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHBhZ2VUeXBlID09PSAnc2VsbCcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XHJcbiAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDE1MjY4JyB9fT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvdXBkYXRlJyxcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWRpdCDinI/vuI9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPERlbGV0ZVByb2R1Y3QgaWQ9e3Byb2R1Y3QuaWR9PkRlbGV0ZSDwn5eR77iPPC9EZWxldGVQcm9kdWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0l0ZW1TdHlsZXM+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAocGFnZVR5cGUgPT09ICdzb2xkJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICNlZWVlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZkZTZmZicsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEuMycsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6ICc0cmVtJyxcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICcgY2VudGVyJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDc3YTAnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDFyZW0nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDE1MjY4JyB9fT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmV5JywgbWFyZ2luOiAnMHB4JyB9fT5Tb2xkIG9uOiB7cHJvZHVjdC5kYXRlfTwvcD5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgbWFyZ2luVG9wOiAnMHB4JyB9fT5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5MZXQncyB0YWxrIG1vbmV5Li4uPC9zcGFuPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBTb2xkIGZvcjoge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBGZWUgKDUlKToge2Zvcm1hdE1vbmV5KGZlZSl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIE5ldDoge2Zvcm1hdE1vbmV5KGFtb3VudCl9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxoM1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICczMHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE1cHgnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDAwMDAwJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUG9zdCB0b3snICd9XHJcbiAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5wb3N0Y29kZSA9PT0gJycgJiYgKFxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICc3cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBObyBhZGRyZXNzIG9uIGZpbGUsIHBsZWFzZSBjb250YWN0IGJ1eWVyIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5wb3N0Y29kZSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICc3cHgnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/Lm5hbWV9IDxiciAvPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LmFkZHJlc3N9IDxiciAvPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LnRvd259IDxiciAvPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LmNvdW50eX0gPGJyIC8+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8ucG9zdGNvZGV9IDxiciAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxNb2RhbEZ1bmN0aW9uIGlkPXtwcm9kdWN0LmlkfSBwYWdlVHlwZU1vZD1cInNlbGxlclwiIC8+XHJcblxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgIT09ICdSRUZVTkRFRCcgJiYgcHJvZHVjdD8uc3RhdHVzICE9PSAnUkVDRUlWRUQnICYmIChcclxuICAgICAgICAgIDxSZWZ1bmQgaWQ9e3Byb2R1Y3QuaWR9PlJlZnVuZCBJdGVtPC9SZWZ1bmQ+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ09OSE9MRCcgJiYgKFxyXG4gICAgICAgICAgPFJlbGVhc2VkIGlkPXtwcm9kdWN0LmlkfT5SZWxlYXNlIEZ1bmRzPC9SZWxlYXNlZD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Y2FuUmVsZWFzZSA9PT0gJ3llcycgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ09OSE9MRCcgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFQ0VJVkVEJyAmJlxyXG4gICAgICAgICAgcHJvZHVjdD8uc3RhdHVzICE9PSAnRkxBR0dFRCcgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFQ0VJVkVEQkFDSycgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFRlVOREVEJyAmJiAoXHJcbiAgICAgICAgICAgIDxSZWxlYXNlZCBpZD17cHJvZHVjdC5pZH0+UmVsZWFzZSBGdW5kczwvUmVsZWFzZWQ+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnU09MRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxQb3N0ZWQgaWQ9e3Byb2R1Y3QuaWR9Pk1hcmsgcG9zdGVkIPCfk648L1Bvc3RlZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ1BPU1RFRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoZWxsb31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlN0YXR1czo8L3NwYW4+IFBvc3RlZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ1JFQ0VJVkVEJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlbGxvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gUmVjZWl2ZWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdPTkhPTEQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGVsbG99XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncHVycGxlJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gUmVjZWl2ZWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdSRUZVTkRFRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoZWxsb31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5TdGF0dXM6PC9zcGFuPiBSZWZ1bmRlZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ0ZMQUdHRUQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGVsbG99XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gSXNzdWUgUmFpc2VkIVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvSXRlbVN0eWxlcz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChwYWdlVHlwZSA9PT0gJ3JldmlldycpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XHJcbiAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDE1MjY4JyB9fT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICBkYXRhLXN0YXR1cz1cIkRFQ0xJTkVEXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhdHVzfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjE1ZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlY2xpbmUg4p2MXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogJy91cGRhdGUnLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFZGl0IOKcj++4j1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICBkYXRhLXN0YXR1cz1cIkFWQUlMQUJMRVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN0YXR1c31cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xNWVtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBY2NlcHQg8J+RjVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSXRlbVN0eWxlcz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8SXRlbVN0eWxlcz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFRpdGxlPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XHJcbiAgICAgIDwvVGl0bGU+XHJcbiAgICAgIDxQcmljZVRhZz5cclxuICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHNwYW4+SW5jIFBvc3RhZ2U8L3NwYW4+XHJcbiAgICAgIDwvUHJpY2VUYWc+XHJcbiAgICAgIDxTdGF0dXNUYWc+e3Byb2R1Y3QuY29uZGl0aW9ufTwvU3RhdHVzVGFnPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMwMTUyNjgnIH19Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAge3Byb2R1Y3Q/LnVzZXI/LmlkID09PSB1c2VyPy5pZCAmJiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvdXBkYXRlJyxcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWRpdCDinI/vuI9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnVzZXI/LmlkICE9PSB1c2VyPy5pZCAmJiA8QWRkVG9DYXJ0IGlkPXtwcm9kdWN0LmlkfSAvPn1cclxuICAgICAgICB7cHJvZHVjdD8udXNlcj8uaWQgPT09IHVzZXI/LmlkICYmIChcclxuICAgICAgICAgIDxEZWxldGVQcm9kdWN0IGlkPXtwcm9kdWN0LmlkfT5EZWxldGUg8J+Xke+4jzwvRGVsZXRlUHJvZHVjdD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvSXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgTG9hZEJhciBmcm9tICcuL0xvYWRCYXInO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUlkoJHNraXA6IEludCA9IDAsICRmaXJzdDogSW50KSB7XHJcbiAgICBwcm9kdWN0cyhcclxuICAgICAgd2hlcmU6IHsgc3RhdHVzOiB7IGVxdWFsczogXCJBVkFJTEFCTEVcIiB9IH1cclxuICAgICAgb3JkZXJCeTogW3sgZGVzY3JpcHRpb246IGFzYyB9XVxyXG4gICAgICB0YWtlOiAkZmlyc3RcclxuICAgICAgc2tpcDogJHNraXBcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbmRpdGlvblxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogMjVweDtcclxuICByb3ctZ2FwOiAyNXB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgY29sdW1uLWdhcDogMTAlO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGNvbHVtbi1nYXA6IDclO1xyXG4gICAgcm93LWdhcDogNCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKHsgcGFnZSB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxyXG4gICAgICBmaXJzdDogcGVyUGFnZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZEJhciBsb2FkPXtsb2FkaW5nfSAvPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gcGFnZVR5cGU9XCJQcm9kdWN0c1wiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVyB7XHJcbiAgICBwcm9kdWN0cyh3aGVyZTogeyBzdGF0dXM6IHsgZXF1YWxzOiBcIkRSQUZUXCIgfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcHJpY2VcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG4gIHJvdy1nYXA6IDI1cHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XHJcbiAgICByb3ctZ2FwOiAyJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGNvbHVtbi1nYXA6IDclO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAyOCUgMjglO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzUmV2aWV3KCkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcsIHt9KTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGF0YS5wcm9kdWN0cy5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnM3JlbScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFRvIFJldmlld1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnM3JlbScsXHJcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gUHJvZHVjdHMgVG8gUmV2aWV3XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgKX1cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gcGFnZVR5cGU9XCJyZXZpZXdcIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Byb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQoJHRoaXNVc2VySWQ6IElEKSB7XHJcbiAgICBvcmRlckl0ZW1zKFxyXG4gICAgICB3aGVyZTogeyB1c2VyOiB7IGlkOiB7IGVxdWFsczogJHRoaXNVc2VySWQgfSB9IH1cclxuICAgICAgb3JkZXJCeTogW3sgdGltZVN0YW1wOiBkZXNjIH1dXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBzdGF0dXNcclxuICAgICAgdHJhY2tpbmdcclxuICAgICAgdHJhY2tpbmdDb21wYW55XHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIHRpbWVTdGFtcFxyXG4gICAgICBkYXRlXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG9yZGVyIHtcclxuICAgICAgICB1c2VyIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgIGFkZHJlc3MyXHJcbiAgICAgICAgICB0b3duXHJcbiAgICAgICAgICBjb3VudHlcclxuICAgICAgICAgIHBvc3Rjb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogMjVweDtcclxuICByb3ctZ2FwOiAyNXB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgY29sdW1uLWdhcDogMTAlO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2x1bW4tZ2FwOiA3JTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMjglIDI4JTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1NvbGQoKSB7XHJcbiAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB0aGVJZCA9IHRoZVVzZXI/LmlkO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWV9TT0xELCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdGhpc1VzZXJJZDogdGhlSWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkYXRhLm9yZGVySXRlbXMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250V2VpZ2h0OiAnbm9ybWFsJyB9fT5cclxuICAgICAgICAgIFlvdSBoYXZlIG1hZGUgbm8gc2FsZXMhXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEub3JkZXJJdGVtcy5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMTUyNjgnLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnM3JlbScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNvbGRcclxuICAgICAgICA8L2gyPlxyXG4gICAgICApfVxyXG4gICAgICA8UHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgICAgIHtkYXRhLm9yZGVySXRlbXMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IHBhZ2VUeXBlPVwic29sZFwiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgfSBmcm9tICcuL1Byb2R1Y3RzU29sZCc7XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZXMgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBSRUZVTkRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gUkVGVU5EX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICByZWZ1bmQoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmdW5kKHsgaWQsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbcmVmdW5kLCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oUkVGVU5EX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgIHsgcXVlcnk6IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0sXHJcbiAgICAgICdBTExfUFJPRFVDVFNfUVVFUllfU09MRCcsXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uU3R5bGVzXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTJweCcsXHJcbiAgICAgIH19XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNvbmZpcm0oXHJcbiAgICAgICAgICAgICdQbGVhc2UgY29uZmlybSB5b3Ugd2lzaCB0byByZWZ1bmQgdGhpcyBpdGVtP1xcblxcblRISVMgQ0FOIE5PVCBCRSBVTkRPTkUhJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVmdW5kKCkuY2F0Y2goKGVycikgPT4gYWxlcnQoZXJyLm1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0gZnJvbSAnLi9Qcm9kdWN0c1NvbGQnO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBSRUxFQVNFX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFTEVBU0VfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIHJlbGVhc2VkKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGVhc2VkKHsgaWQsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbcmVsZWFzZWQsIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihSRUxFQVNFX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgIHsgcXVlcnk6IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0sXHJcbiAgICAgICdBTExfUFJPRFVDVFNfUVVFUllfU09MRCcsXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uU3R5bGVzXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTJweCcsXHJcbiAgICAgIH19XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNvbmZpcm0oXHJcbiAgICAgICAgICAgICdZb3UgYXJlIGFib3V0IHRvIHJlbGVhc2UgdGhlIGZ1bmRzIGZvciB0aGlzIGl0ZW0gaW50byB5b3VyIEluZGllIEJ1YmJhIGFjY291bnQuXFxuXFxuVGhlIGZ1bmRzIHdpbGwgdGhlbiBiZSBwYWlkIG91dCB0byB5b3VyIG5vbWluYXRlZCBiYW5rIGFjY291bnQgYW5kIGFycml2ZSBpbiB0aGUgbmV4dCBmZXcgZGF5cy4nXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZWxlYXNlZCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9VU0VSX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGF1dGhlbnRpY2F0ZWRJdGVtIHtcclxuICAgICAgLi4uIG9uIFVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgc3RyaXBlSWRcclxuICAgICAgICBjb25maXJtZWRcclxuICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgYWRkcmVzczJcclxuICAgICAgICB0b3duXHJcbiAgICAgICAgY291bnR5XHJcbiAgICAgICAgcG9zdGNvZGVcclxuICAgICAgICBjYXJ0IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgcGhvdG8ge1xyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShDVVJSRU5UX1VTRVJfUVVFUlkpO1xyXG4gIHJldHVybiBkYXRhPy5hdXRoZW50aWNhdGVkSXRlbTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAxNTI2ODtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgLS1hcHBsZS1zeXN0ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIH1cbiAgfVxuICBidXR0b24sXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmRlNmZmO1xuICAgIGNvbG9yOiAjMDE1MjY4O1xuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNzdhMCAwJSwgI2ZkZTZmZiA4MCUpO1xuICAgIH1cbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSXRlbVN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IHRoaW4gc29saWQgI2VlZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmJ1dHRvbkxpc3Qge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIHRoaW4gI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JheSk7XG4gICAgJiA+ICoge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVN0eWxlcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQYWdpbmF0aW9uU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gYXV0byAycmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gIH1cbiAgYVthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uU3R5bGVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByaWNlVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6ICNmZGU2ZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICBjb2xvcjogIzAwNzdhMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VUYWc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3RhdHVzVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6ICMwMDc3YTA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDNyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IC0zcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNUYWc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMCAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogc2tldygtNWRlZykgcm90YXRlKC0xZGVnKTtcbiAgbWFyZ2luLXRvcDogLTNyZW07XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmRlNmZmO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDc3YTA7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgaHR0cHM6Ly9pbmRpZS1idWJiYS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vYXBpL2dyYXBocWxgO1xuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA2O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnR0JQJyxcclxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICB9O1xyXG5cclxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XHJcbiAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLUdCJywgb3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgLy8gY3JlYXRlIHN0YXRlIGZvciBpbnB1dHNcclxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoaW5pdGlhbCkuam9pbignJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBlLnRhcmdldDtcclxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgfVxyXG4gICAgc2V0SW5wdXRzKHtcclxuICAgICAgLi4uaW5wdXRzLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgICBjb25zdCBibGFua1N0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXHJcbiAgICApO1xyXG4gICAgc2V0SW5wdXRzKGJsYW5rU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0cyxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHJlc2V0Rm9ybSxcclxuICAgIGNsZWFyRm9ybSxcclxuICB9O1xyXG59XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=