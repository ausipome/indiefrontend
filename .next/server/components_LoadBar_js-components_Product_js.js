exports.id = "components_LoadBar_js-components_Product_js";
exports.ids = ["components_LoadBar_js-components_Product_js"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Mb2FkQmFyLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUG9zdGVkLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0c1Jldmlldy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUHJvZHVjdHNTb2xkLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9SZWZ1bmQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1JlbGVhc2VkLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvSXRlbVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1ByaWNlVGFnLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvU3RhdHVzVGFnLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9saWIvbW9uZXkuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvaWdub3JlZHxDOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcaW5kaWVCdWJiYVxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJBRERfVE9fQ0FSVF9NVVRBVElPTiIsImdxbCIsIkFkZFRvQ2FydCIsImlkIiwiYWRkVG9DYXJ0IiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsIm1lIiwidXNlVXNlciIsImZvbnRTaXplIiwiREVMRVRFX1BST0RVQ1RfTVVUQVRJT04iLCJ1cGRhdGUiLCJjYWNoZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZXZpY3QiLCJpZGVudGlmeSIsImRhdGEiLCJkZWxldGVQcm9kdWN0IiwiRGVsZXRlUHJvZHVjdCIsImNoaWxkcmVuIiwiZXJyb3IiLCJib3JkZXJMZWZ0IiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJjb25maXJtIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJrZXlmcmFtZXMiLCJMb2FkU3R5bGUiLCJzdHlsZWQiLCJMb2FkQmFyIiwibG9hZCIsIkJ1dHRvblN0eWxlcyIsIlNtYWxsZXJCdXR0b25TdHlsZXMiLCJNZXNzYWdlUmVjZWl2ZWQiLCJNZXNzYWdlU2VudCIsIk1lc3NhZ2VTZW50U3BhbiIsIk1lc3NhZ2VSZWNlaXZlZFNwYW4iLCJDUkVBVEVfQ0hBVF9NVVRBVElPTiIsIkFMTF9DSEFUU19RVUVSWSIsIk1vZGFsRnVuY3Rpb24iLCJwYWdlVHlwZU1vZCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsInVzZUZvcm0iLCJ0aGVVc2VyIiwidGhlSWQiLCJjcmVhdGVDaGF0dGVyIiwibG9hZGluZ0NyZWF0ZSIsImVycm9yQ3JlYXRlIiwiZGF0YUNyZWF0ZSIsInVzZVF1ZXJ5IiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidXNlU3RhdGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNoYXRzIiwibWFwIiwiY2hhdCIsImRhdGVUaW1lIiwiRGF0ZSIsInRpbWVTdGFtcCIsImR0IiwidG9HTVRTdHJpbmciLCJyZXBsYWNlIiwidXNlckZyb20iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJtYXJnaW5Cb3R0b20iLCJVUERBVEVfT1JERVJfTVVUQVRJT04iLCJQb3N0ZWQiLCJ1cGRhdGVPcmRlckl0ZW0iLCJBTExfUFJPRFVDVFNfUVVFUllfU09MRCIsIlVQREFURV9TVEFUVVNfTVVUQVRJT04iLCJjYW5SZWxlYXNlIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJwYWdlVHlwZSIsImhlbGxvIiwiZGF0ZSIsInRoZURhdGUiLCJkYXRlUGx1cyIsInNldERhdGUiLCJnZXREYXRlIiwibmV3RGF0ZSIsImZlZSIsIk1hdGgiLCJjZWlsIiwicHJpY2UiLCJhbW91bnQiLCJwYXJzZUludCIsInVzZXIiLCJ1cGRhdGVTdGF0dXMiLCJEYXRhIiwiRXJyb3IiLCJMb2FkaW5nIiwiaGFuZGxlU3RhdHVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJkYXRhU3RhdHVzIiwiQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVyIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJib3JkZXJCb3R0b20iLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJmb3JtYXRNb25leSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJwYXRobmFtZSIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIiwibWFyZ2luVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wIiwib3JkZXIiLCJwb3N0Y29kZSIsInBhZGRpbmdCb3R0b20iLCJhZGRyZXNzIiwidG93biIsImNvdW50eSIsInN0YXR1cyIsImN1cnNvciIsImNvbmRpdGlvbiIsIlByb2R1Y3RzTGlzdFN0eWxlcyIsIlByb2R1Y3RzUmV2aWV3IiwicHJvZHVjdHMiLCJsZW5ndGgiLCJQcm9kdWN0c1NvbGQiLCJ0aGlzVXNlcklkIiwib3JkZXJJdGVtcyIsImZvbnRXZWlnaHQiLCJSRUZVTkRfTVVUQVRJT04iLCJSZWZ1bmQiLCJyZWZ1bmQiLCJSRUxFQVNFX01VVEFUSU9OIiwiUmVsZWFzZWQiLCJyZWxlYXNlZCIsIkl0ZW1TdHlsZXMiLCJQcmljZVRhZyIsIlN0YXR1c1RhZyIsIlRpdGxlIiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBUWUsU0FBU0MsU0FBVCxDQUFtQjtBQUFFQztBQUFGLENBQW5CLEVBQTJCO0FBQ3hDLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZO0FBQUVDO0FBQUYsR0FBWixJQUEyQkMsMkRBQVcsQ0FBQ04sb0JBQUQsRUFBdUI7QUFDakVPLGFBQVMsRUFBRTtBQUFFSjtBQUFGLEtBRHNEO0FBRWpFSyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxxREFBa0JBO0FBQTNCLEtBQUQ7QUFGaUQsR0FBdkIsQ0FBNUM7QUFJQSxRQUFNQyxFQUFFLEdBQUdDLDhDQUFPLEVBQWxCO0FBQ0EsTUFBSSxDQUFDRCxFQUFMLEVBQ0Usb0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVB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TUFBVixDQUFpQnBFLE1BQU0sR0FBRyxHQUExQixDQUFQO0FBQ0QsQzs7Ozs7Ozs7OztBQ2RELGUiLCJmaWxlIjoiY29tcG9uZW50c19Mb2FkQmFyX2pzLWNvbXBvbmVudHNfUHJvZHVjdF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZLCB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IEFERF9UT19DQVJUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIEFERF9UT19DQVJUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBhZGRUb0NhcnQocHJvZHVjdElkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUb0NhcnQoeyBpZCB9KSB7XHJcbiAgY29uc3QgW2FkZFRvQ2FydCwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oQUREX1RPX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgfSk7XHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgaWYgKCFtZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvU2lnbkluXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxLjE1ZW0nIH19PlxyXG4gICAgICAgICAgTG9naW4gdG8gQWRkIFRvIENhcnQg8J+bklxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgb25DbGljaz17YWRkVG9DYXJ0fVxyXG4gICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEuMTVlbScgfX1cclxuICAgID5cclxuICAgICAgQWRke2xvYWRpbmcgJiYgJ2luZyd9IFRvIENhcnQg8J+bklxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5jb25zdCBERUxFVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBERUxFVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBERUxFVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICAgIHVwZGF0ZSxcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYm9yZGVyTGVmdDogJ3NvbGlkIHRoaW4gI2VlZWVlZScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgICAgIH19XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xyXG4gICAgICAgICAgLy8gZ28gYWhlYWQgYW5kIGRlbGV0ZSBpdFxyXG4gICAgICAgICAgZGVsZXRlUHJvZHVjdCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgIC8qIHJvdGF0ZTogMDsgKi9cclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvYWRTdHlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNzdhMCAwJSwgI2ZkZTZmZiA4MCUpO1xyXG4gIH1cclxuICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkQmFyKHsgbG9hZCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkU3R5bGUgZGlzYWJsZWQ9e2xvYWR9IGFyaWEtYnVzeT17bG9hZH0+XHJcbiAgICAgICZuYnNwO1xyXG4gICAgPC9Mb2FkU3R5bGU+XHJcbiAgKTtcclxufVxyXG4iLCIvLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICMwMTUyNjg7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTbWFsbGVyQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzAxNTI2ODtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVJlY2VpdmVkID0gc3R5bGVkLnBgXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVNlbnQgPSBzdHlsZWQucGBcclxuICBiYWNrZ3JvdW5kOiAjZGZmZmU5O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVNlbnRTcGFuID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogN3B4O1xyXG5gO1xyXG5jb25zdCBNZXNzYWdlUmVjZWl2ZWRTcGFuID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IENSRUFURV9DSEFUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9DSEFUX01VVEFUSU9OKFxyXG4gICAgJG1lc3NhZ2U6IFN0cmluZyFcclxuICAgICRpZDogSUQhXHJcbiAgICAkcGFnZVR5cGVNb2Q6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZUNoYXR0ZXIobWVzc2FnZTogJG1lc3NhZ2UsIGlkOiAkaWQsIHBhZ2VUeXBlTW9kOiAkcGFnZVR5cGVNb2QpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQUxMX0NIQVRTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9DSEFUU19RVUVSWSgkaWQ6IElEKSB7XHJcbiAgICBjaGF0cyhcclxuICAgICAgd2hlcmU6IHsgaXRlbTogeyBpZDogeyBlcXVhbHM6ICRpZCB9IH0gfVxyXG4gICAgICBvcmRlckJ5OiBbeyB0aW1lU3RhbXA6IGFzYyB9XVxyXG4gICAgKSB7XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgaWRcclxuICAgICAgdGltZVN0YW1wXHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIGl0ZW0ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbEZ1bmN0aW9uKHsgaWQsIHBhZ2VUeXBlTW9kIH0pIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB0aGVJZCA9IHRoZVVzZXI/LmlkO1xyXG5cclxuICBjb25zdCBbY3JlYXRlQ2hhdHRlciwgeyBsb2FkaW5nQ3JlYXRlLCBlcnJvckNyZWF0ZSwgZGF0YUNyZWF0ZSB9XSA9XHJcbiAgICB1c2VNdXRhdGlvbihDUkVBVEVfQ0hBVF9NVVRBVElPTiwge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBtZXNzYWdlOiBpbnB1dHMubWVzc2FnZSxcclxuICAgICAgICBpZCxcclxuICAgICAgICBwYWdlVHlwZU1vZCxcclxuICAgICAgfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBBTExfQ0hBVFNfUVVFUlkgfSwgJ0FMTF9DSEFUU19RVUVSWSddLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9DSEFUU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nIG1lc3NhZ2VzLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3BhZ2VUeXBlTW9kID09PSAnYnV5ZXInICYmIChcclxuICAgICAgICA8QnV0dG9uU3R5bGVzIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9PlxyXG4gICAgICAgICAgQ29udGFjdCBTZWxsZXJcclxuICAgICAgICA8L0J1dHRvblN0eWxlcz5cclxuICAgICAgKX1cclxuICAgICAge3BhZ2VUeXBlTW9kID09PSAnc2VsbGVyJyAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblN0eWxlcyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfT5cclxuICAgICAgICAgIENvbnRhY3QgQnV5ZXJcclxuICAgICAgICA8L0J1dHRvblN0eWxlcz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxNb2RhbCB0b2dnbGU9eygpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKX0gaXNPcGVuPXttb2RhbE9wZW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcxLjNlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWVzc2FnZXNcclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8U21hbGxlckJ1dHRvblN0eWxlc1xyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgY2xvc2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj7Dlzwvc3Bhbj5cclxuICAgICAgICAgIDwvU21hbGxlckJ1dHRvblN0eWxlcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAge2RhdGEuY2hhdHMubWFwKChjaGF0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoY2hhdC50aW1lU3RhbXApO1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBkYXRlVGltZS50b0dNVFN0cmluZygpO1xyXG4gICAgICAgICAgICBkdCA9IGR0LnJlcGxhY2UoJ0dNVCcsICcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhdC5pZH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hhdC51c2VyRnJvbS5pZCA9PT0gdGhlSWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU2VudFNwYW4+e2R0fTwvTWVzc2FnZVNlbnRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU2VudD57Y2hhdC5tZXNzYWdlfTwvTWVzc2FnZVNlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjaGF0LnVzZXJGcm9tLmlkICE9PSB0aGVJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VSZWNlaXZlZFNwYW4+e2R0fTwvTWVzc2FnZVJlY2VpdmVkU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVJlY2VpdmVkPntjaGF0Lm1lc3NhZ2V9PC9NZXNzYWdlUmVjZWl2ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZUNoYXR0ZXIoKTtcclxuICAgICAgICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnN3B4JyB9fVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTbWFsbGVyQnV0dG9uU3R5bGVzIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9TbWFsbGVyQnV0dG9uU3R5bGVzPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9IGZyb20gJy4vUHJvZHVjdHNTb2xkJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzAxNTI2ODtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IFVQREFURV9PUkRFUl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBVUERBVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgdXBkYXRlT3JkZXJTdGF0dXMoaWQ6ICRpZCwgc3RhdHVzOiBcIlBPU1RFRFwiKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0ZWQoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1cGRhdGVPcmRlckl0ZW0sIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIFVQREFURV9PUkRFUl9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAgeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgfSxcclxuICAgICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQnLFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25TdHlsZXNcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgfX1cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1BsZWFzZSBjb25maXJtIHlvdSBoYXZlIHBvc3RlZCB0aGlzIGl0ZW0/JykpIHtcclxuICAgICAgICAgIHVwZGF0ZU9yZGVySXRlbSgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IEl0ZW1TdHlsZXMgZnJvbSAnLi9zdHlsZXMvSXRlbVN0eWxlcyc7XHJcbmltcG9ydCBUaXRsZSBmcm9tICcuL3N0eWxlcy9UaXRsZSc7XHJcbmltcG9ydCBQcmljZVRhZyBmcm9tICcuL3N0eWxlcy9QcmljZVRhZyc7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvbW9uZXknO1xyXG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tICcuL0RlbGV0ZVByb2R1Y3QnO1xyXG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4vQWRkVG9DYXJ0JztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVyB9IGZyb20gJy4vUHJvZHVjdHNSZXZpZXcnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IFBvc3RlZCBmcm9tICcuL1Bvc3RlZCc7XHJcbmltcG9ydCBNb2RhbEZ1bmN0aW9uIGZyb20gJy4vTW9kYWwnO1xyXG5pbXBvcnQgUmVmdW5kIGZyb20gJy4vUmVmdW5kJztcclxuaW1wb3J0IFJlbGVhc2VkIGZyb20gJy4vUmVsZWFzZWQnO1xyXG5pbXBvcnQgU3RhdHVzVGFnIGZyb20gJy4vc3R5bGVzL1N0YXR1c1RhZyc7XHJcblxyXG5jb25zdCBVUERBVEVfU1RBVFVTX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFVQREFURV9TVEFUVVNfTVVUQVRJT04oJGlkOiBJRCEsICRkYXRhU3RhdHVzOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZVByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9LCBkYXRhOiB7IHN0YXR1czogJGRhdGFTdGF0dXMgfSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmxldCBjYW5SZWxlYXNlID0gJ25vJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0LCBwYWdlVHlwZSB9KSB7XHJcbiAgZnVuY3Rpb24gaGVsbG8oKSB7fVxyXG4gIHtcclxuICAgIGNvbnN0IHRpbWVTdGFtcCA9IHByb2R1Y3Q/LmRhdGU7XHJcbiAgICBjb25zdCB0aGVEYXRlID0gbmV3IERhdGUodGltZVN0YW1wKTtcclxuICAgIGNvbnN0IGRhdGVQbHVzID0gdGhlRGF0ZS5zZXREYXRlKHRoZURhdGUuZ2V0RGF0ZSgpICsgMjEpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIGlmIChuZXdEYXRlID4gZGF0ZVBsdXMpIHtcclxuICAgICAgY2FuUmVsZWFzZSA9ICd5ZXMnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FuUmVsZWFzZSA9ICdubyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmZWUgPSBNYXRoLmNlaWwocHJvZHVjdC5wcmljZSAqIDAuMDUpO1xyXG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KHByb2R1Y3QucHJpY2UpIC0gZmVlO1xyXG5cclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IFt1cGRhdGVTdGF0dXMsIHsgZGF0YTogRGF0YSwgZXJyb3I6IEVycm9yLCBsb2FkaW5nOiBMb2FkaW5nIH1dID1cclxuICAgIHVzZU11dGF0aW9uKFVQREFURV9TVEFUVVNfTVVUQVRJT04pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0dXMgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGNvbnN0IGRhdGFTdGF0dXMgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXR1cycpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlU3RhdHVzKHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgZGF0YVN0YXR1cyxcclxuICAgICAgfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtcclxuICAgICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXIH0sXHJcbiAgICAgICAgJ0FMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcnLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHBhZ2VUeXBlID09PSAnc2VsbCcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XHJcbiAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDE1MjY4JyB9fT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvdXBkYXRlJyxcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWRpdCDinI/vuI9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPERlbGV0ZVByb2R1Y3QgaWQ9e3Byb2R1Y3QuaWR9PkRlbGV0ZSDwn5eR77iPPC9EZWxldGVQcm9kdWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0l0ZW1TdHlsZXM+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAocGFnZVR5cGUgPT09ICdzb2xkJykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICNlZWVlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZkZTZmZicsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEuMycsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6ICc0cmVtJyxcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICcgY2VudGVyJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDc3YTAnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDFyZW0nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDE1MjY4JyB9fT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmV5JywgbWFyZ2luOiAnMHB4JyB9fT5Tb2xkIG9uOiB7cHJvZHVjdC5kYXRlfTwvcD5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgbWFyZ2luVG9wOiAnMHB4JyB9fT5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5MZXQncyB0YWxrIG1vbmV5Li4uPC9zcGFuPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBTb2xkIGZvcjoge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBGZWUgKDUlKToge2Zvcm1hdE1vbmV5KGZlZSl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIE5ldDoge2Zvcm1hdE1vbmV5KGFtb3VudCl9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxoM1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICczMHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE1cHgnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDAwMDAwJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUG9zdCB0b3snICd9XHJcbiAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5wb3N0Y29kZSA9PT0gJycgJiYgKFxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICc3cHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBObyBhZGRyZXNzIG9uIGZpbGUsIHBsZWFzZSBjb250YWN0IGJ1eWVyIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5wb3N0Y29kZSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICc3cHgnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/Lm5hbWV9IDxiciAvPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LmFkZHJlc3N9IDxiciAvPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LnRvd259IDxiciAvPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LmNvdW50eX0gPGJyIC8+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8ucG9zdGNvZGV9IDxiciAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxNb2RhbEZ1bmN0aW9uIGlkPXtwcm9kdWN0LmlkfSBwYWdlVHlwZU1vZD1cInNlbGxlclwiIC8+XHJcblxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgIT09ICdSRUZVTkRFRCcgJiYgcHJvZHVjdD8uc3RhdHVzICE9PSAnUkVDRUlWRUQnICYmIChcclxuICAgICAgICAgIDxSZWZ1bmQgaWQ9e3Byb2R1Y3QuaWR9PlJlZnVuZCBJdGVtPC9SZWZ1bmQ+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ09OSE9MRCcgJiYgKFxyXG4gICAgICAgICAgPFJlbGVhc2VkIGlkPXtwcm9kdWN0LmlkfT5SZWxlYXNlIEZ1bmRzPC9SZWxlYXNlZD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Y2FuUmVsZWFzZSA9PT0gJ3llcycgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ09OSE9MRCcgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFQ0VJVkVEJyAmJlxyXG4gICAgICAgICAgcHJvZHVjdD8uc3RhdHVzICE9PSAnRkxBR0dFRCcgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFQ0VJVkVEQkFDSycgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFRlVOREVEJyAmJiAoXHJcbiAgICAgICAgICAgIDxSZWxlYXNlZCBpZD17cHJvZHVjdC5pZH0+UmVsZWFzZSBGdW5kczwvUmVsZWFzZWQ+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnU09MRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxQb3N0ZWQgaWQ9e3Byb2R1Y3QuaWR9Pk1hcmsgcG9zdGVkIPCfk648L1Bvc3RlZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ1BPU1RFRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoZWxsb31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlN0YXR1czo8L3NwYW4+IFBvc3RlZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ1JFQ0VJVkVEJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlbGxvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gUmVjZWl2ZWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdPTkhPTEQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGVsbG99XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncHVycGxlJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gUmVjZWl2ZWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdSRUZVTkRFRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoZWxsb31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5TdGF0dXM6PC9zcGFuPiBSZWZ1bmRlZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ0ZMQUdHRUQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGVsbG99XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gSXNzdWUgUmFpc2VkIVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvSXRlbVN0eWxlcz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChwYWdlVHlwZSA9PT0gJ3JldmlldycpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XHJcbiAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDE1MjY4JyB9fT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICBkYXRhLXN0YXR1cz1cIkRFQ0xJTkVEXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3RhdHVzfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjE1ZW0nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlY2xpbmUg4p2MXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogJy91cGRhdGUnLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFZGl0IOKcj++4j1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICBkYXRhLXN0YXR1cz1cIkFWQUlMQUJMRVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN0YXR1c31cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xNWVtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBY2NlcHQg8J+RjVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSXRlbVN0eWxlcz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8SXRlbVN0eWxlcz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFRpdGxlPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QubmFtZX08L0xpbms+XHJcbiAgICAgIDwvVGl0bGU+XHJcbiAgICAgIDxQcmljZVRhZz5cclxuICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHNwYW4+SW5jIFBvc3RhZ2U8L3NwYW4+XHJcbiAgICAgIDwvUHJpY2VUYWc+XHJcbiAgICAgIDxTdGF0dXNUYWc+e3Byb2R1Y3QuY29uZGl0aW9ufTwvU3RhdHVzVGFnPlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyMwMTUyNjgnIH19Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAge3Byb2R1Y3Q/LnVzZXI/LmlkID09PSB1c2VyPy5pZCAmJiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvdXBkYXRlJyxcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWRpdCDinI/vuI9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Byb2R1Y3Q/LnVzZXI/LmlkICE9PSB1c2VyPy5pZCAmJiA8QWRkVG9DYXJ0IGlkPXtwcm9kdWN0LmlkfSAvPn1cclxuICAgICAgICB7cHJvZHVjdD8udXNlcj8uaWQgPT09IHVzZXI/LmlkICYmIChcclxuICAgICAgICAgIDxEZWxldGVQcm9kdWN0IGlkPXtwcm9kdWN0LmlkfT5EZWxldGUg8J+Xke+4jzwvRGVsZXRlUHJvZHVjdD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvSXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVyA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXIHtcclxuICAgIHByb2R1Y3RzKHdoZXJlOiB7IHN0YXR1czogeyBlcXVhbHM6IFwiRFJBRlRcIiB9IH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzTGlzdFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGNvbHVtbi1nYXA6IDI1cHg7XHJcbiAgcm93LWdhcDogMjVweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGNvbHVtbi1nYXA6IDEwJTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sdW1uLWdhcDogNyU7XHJcbiAgICByb3ctZ2FwOiAyJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDI4JSAyOCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNSZXZpZXcoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVywge30pO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkYXRhLnByb2R1Y3RzLmxlbmd0aCAhPSAwICYmIChcclxuICAgICAgICA8aDJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogJ3NvbGlkIHRoaW4gIzAxNTI2OCcsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gIzAxNTI2OCcsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzNyZW0nLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczcmVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVG8gUmV2aWV3XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEucHJvZHVjdHMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8aDJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogJ3NvbGlkIHRoaW4gIzAxNTI2OCcsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gIzAxNTI2OCcsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzNyZW0nLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczcmVtJyxcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBObyBQcm9kdWN0cyBUbyBSZXZpZXdcclxuICAgICAgICA8L2gyPlxyXG4gICAgICApfVxyXG4gICAgICA8UHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgICAgIHtkYXRhLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSBwYWdlVHlwZT1cInJldmlld1wiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUllfU09MRCA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUllfU09MRCgkdGhpc1VzZXJJZDogSUQpIHtcclxuICAgIG9yZGVySXRlbXMoXHJcbiAgICAgIHdoZXJlOiB7IHVzZXI6IHsgaWQ6IHsgZXF1YWxzOiAkdGhpc1VzZXJJZCB9IH0gfVxyXG4gICAgICBvcmRlckJ5OiBbeyB0aW1lU3RhbXA6IGRlc2MgfV1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICB0cmFja2luZ1xyXG4gICAgICB0cmFja2luZ0NvbXBhbnlcclxuICAgICAgZW1haWxcclxuICAgICAgdGltZVN0YW1wXHJcbiAgICAgIGRhdGVcclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgb3JkZXIge1xyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgYWRkcmVzczJcclxuICAgICAgICAgIHRvd25cclxuICAgICAgICAgIGNvdW50eVxyXG4gICAgICAgICAgcG9zdGNvZGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG4gIHJvdy1nYXA6IDI1cHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XHJcbiAgICByb3ctZ2FwOiAyJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGNvbHVtbi1nYXA6IDclO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAyOCUgMjglO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzU29sZCgpIHtcclxuICBjb25zdCB0aGVVc2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHRoZUlkID0gdGhlVXNlcj8uaWQ7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQsIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0aGlzVXNlcklkOiB0aGVJZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RhdGEub3JkZXJJdGVtcy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PlxyXG4gICAgICAgICAgWW91IGhhdmUgbWFkZSBubyBzYWxlcyFcclxuICAgICAgICA8L2gzPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5vcmRlckl0ZW1zLmxlbmd0aCAhPSAwICYmIChcclxuICAgICAgICA8aDJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogJ3NvbGlkIHRoaW4gIzAxNTI2OCcsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gIzAxNTI2OCcsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzNyZW0nLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICczcmVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU29sZFxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxQcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICAgICAge2RhdGEub3JkZXJJdGVtcy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gcGFnZVR5cGU9XCJzb2xkXCIgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9IGZyb20gJy4vUHJvZHVjdHNTb2xkJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IFJFRlVORF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBSRUZVTkRfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIHJlZnVuZChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWZ1bmQoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtyZWZ1bmQsIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihSRUZVTkRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFtcclxuICAgICAgeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgfSxcclxuICAgICAgJ0FMTF9QUk9EVUNUU19RVUVSWV9TT0xEJyxcclxuICAgIF0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25TdHlsZXNcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMnB4JyxcclxuICAgICAgfX1cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgY29uZmlybShcclxuICAgICAgICAgICAgJ1BsZWFzZSBjb25maXJtIHlvdSB3aXNoIHRvIHJlZnVuZCB0aGlzIGl0ZW0/XFxuXFxuVEhJUyBDQU4gTk9UIEJFIFVORE9ORSEnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZWZ1bmQoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgfSBmcm9tICcuL1Byb2R1Y3RzU29sZCc7XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZXMgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IFJFTEVBU0VfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gUkVMRUFTRV9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgcmVsZWFzZWQoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVsZWFzZWQoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtyZWxlYXNlZCwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFJFTEVBU0VfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFtcclxuICAgICAgeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgfSxcclxuICAgICAgJ0FMTF9QUk9EVUNUU19RVUVSWV9TT0xEJyxcclxuICAgIF0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25TdHlsZXNcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMnB4JyxcclxuICAgICAgfX1cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgY29uZmlybShcclxuICAgICAgICAgICAgJ1lvdSBhcmUgYWJvdXQgdG8gcmVsZWFzZSB0aGUgZnVuZHMgZm9yIHRoaXMgaXRlbSBpbnRvIHlvdXIgSW5kaWUgQnViYmEgYWNjb3VudC5cXG5cXG5UaGUgZnVuZHMgd2lsbCB0aGVuIGJlIHBhaWQgb3V0IHRvIHlvdXIgbm9taW5hdGVkIGJhbmsgYWNjb3VudCBhbmQgYXJyaXZlIGluIHRoZSBuZXh0IGZldyBkYXlzLidcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlbGVhc2VkKCkuY2F0Y2goKGVycikgPT4gYWxlcnQoZXJyLm1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEl0ZW1TdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiB0aGluIHNvbGlkICNlZWVlZWU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMCAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5idXR0b25MaXN0IHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCB0aGluICNlZWVlZWU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xuICAgICYgPiAqIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1TdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUHJpY2VUYWcgPSBzdHlsZWQuc3BhbmBcbiAgYmFja2dyb3VuZDogI2ZkZTZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIGNvbG9yOiAjMDA3N2EwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDNyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAtM3B4O1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhZztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdGF0dXNUYWcgPSBzdHlsZWQuc3BhbmBcbiAgYmFja2dyb3VuZDogIzAwNzdhMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogLTNweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c1RhZztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnKSByb3RhdGUoLTFkZWcpO1xuICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGEge1xuICAgIGJhY2tncm91bmQ6ICNmZGU2ZmY7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwNzdhMDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnR0JQJyxcclxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICB9O1xyXG5cclxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XHJcbiAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLUdCJywgb3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==