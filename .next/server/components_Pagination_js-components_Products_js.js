exports.id = "components_Pagination_js-components_Products_js";
exports.ids = ["components_Pagination_js-components_Products_js"];
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUG9zdGVkLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUHJvZHVjdHNSZXZpZXcuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzU29sZC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUmVmdW5kLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9SZWxlYXNlZC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0l0ZW1TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvUHJpY2VUYWcuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9TdGF0dXNUYWcuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2xpYi9tb25leS5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9pZ25vcmVkfEM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxpbmRpZUJ1YmJhXFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFERF9UT19DQVJUX01VVEFUSU9OIiwiZ3FsIiwiQWRkVG9DYXJ0IiwiaWQiLCJhZGRUb0NhcnQiLCJsb2FkaW5nIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwibWUiLCJ1c2VVc2VyIiwiZm9udFNpemUiLCJERUxFVEVfUFJPRFVDVF9NVVRBVElPTiIsInVwZGF0ZSIsImNhY2hlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJldmljdCIsImlkZW50aWZ5IiwiZGF0YSIsImRlbGV0ZVByb2R1Y3QiLCJEZWxldGVQcm9kdWN0IiwiY2hpbGRyZW4iLCJlcnJvciIsImJvcmRlckxlZnQiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImNvbmZpcm0iLCJjYXRjaCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsIkJ1dHRvblN0eWxlcyIsInN0eWxlZCIsIlNtYWxsZXJCdXR0b25TdHlsZXMiLCJNZXNzYWdlUmVjZWl2ZWQiLCJNZXNzYWdlU2VudCIsIk1lc3NhZ2VTZW50U3BhbiIsIk1lc3NhZ2VSZWNlaXZlZFNwYW4iLCJDUkVBVEVfQ0hBVF9NVVRBVElPTiIsIkFMTF9DSEFUU19RVUVSWSIsIk1vZGFsRnVuY3Rpb24iLCJwYWdlVHlwZU1vZCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsInVzZUZvcm0iLCJ0aGVVc2VyIiwidGhlSWQiLCJjcmVhdGVDaGF0dGVyIiwibG9hZGluZ0NyZWF0ZSIsImVycm9yQ3JlYXRlIiwiZGF0YUNyZWF0ZSIsInVzZVF1ZXJ5IiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidXNlU3RhdGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNoYXRzIiwibWFwIiwiY2hhdCIsImRhdGVUaW1lIiwiRGF0ZSIsInRpbWVTdGFtcCIsImR0IiwidG9HTVRTdHJpbmciLCJyZXBsYWNlIiwidXNlckZyb20iLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJtYXJnaW5Cb3R0b20iLCJQQUdJTkFUSU9OX1FVRVJZIiwiUGFnaW5hdGlvbiIsInBhZ2UiLCJjb3VudCIsInByb2R1Y3RzQ291bnQiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsInBlclBhZ2UiLCJVUERBVEVfT1JERVJfTVVUQVRJT04iLCJQb3N0ZWQiLCJ1cGRhdGVPcmRlckl0ZW0iLCJBTExfUFJPRFVDVFNfUVVFUllfU09MRCIsIlVQREFURV9TVEFUVVNfTVVUQVRJT04iLCJjYW5SZWxlYXNlIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJwYWdlVHlwZSIsImhlbGxvIiwiZGF0ZSIsInRoZURhdGUiLCJkYXRlUGx1cyIsInNldERhdGUiLCJnZXREYXRlIiwibmV3RGF0ZSIsImZlZSIsInByaWNlIiwiYW1vdW50IiwicGFyc2VJbnQiLCJ1c2VyIiwidXBkYXRlU3RhdHVzIiwiRGF0YSIsIkVycm9yIiwiTG9hZGluZyIsImhhbmRsZVN0YXR1cyIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZGF0YVN0YXR1cyIsIkFMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVciLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiZm9ybWF0TW9uZXkiLCJjb2xvciIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpbiIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsIm9yZGVyIiwicG9zdGNvZGUiLCJwYWRkaW5nQm90dG9tIiwiYWRkcmVzcyIsInRvd24iLCJjb3VudHkiLCJzdGF0dXMiLCJjdXJzb3IiLCJjb25kaXRpb24iLCJBTExfUFJPRFVDVFNfUVVFUlkiLCJQcm9kdWN0c0xpc3RTdHlsZXMiLCJQcm9kdWN0cyIsInNraXAiLCJmaXJzdCIsInByb2R1Y3RzIiwiUHJvZHVjdHNSZXZpZXciLCJsZW5ndGgiLCJQcm9kdWN0c1NvbGQiLCJ0aGlzVXNlcklkIiwib3JkZXJJdGVtcyIsImZvbnRXZWlnaHQiLCJSRUZVTkRfTVVUQVRJT04iLCJSZWZ1bmQiLCJyZWZ1bmQiLCJSRUxFQVNFX01VVEFUSU9OIiwiUmVsZWFzZWQiLCJyZWxlYXNlZCIsIkl0ZW1TdHlsZXMiLCJQYWdpbmF0aW9uU3R5bGVzIiwiUHJpY2VUYWciLCJTdGF0dXNUYWciLCJUaXRsZSIsImVuZHBvaW50IiwicHJvZEVuZHBvaW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBUWUs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O0FBQUE7QUFBQSxzUEFBWDtBQWlCQSwrREFBZXFJLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDTyxNQUFNQyxRQUFRLEdBQUksbUNBQWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFJLHVEQUF0QjtBQUNBLE1BQU10RixPQUFPLEdBQUcsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSFEsU0FBU3VDLFdBQVQsQ0FBcUJwQixNQUFNLEdBQUcsQ0FBOUIsRUFBaUM7QUFDOUMsUUFBTW9FLE9BQU8sR0FBRztBQUNkQyxTQUFLLEVBQUUsVUFETztBQUVkQyxZQUFRLEVBQUUsS0FGSTtBQUdkQyx5QkFBcUIsRUFBRTtBQUhULEdBQWhCOztBQU1BLE1BQUl2RSxNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QjtBQUN0Qm9FLFdBQU8sQ0FBQ0cscUJBQVIsR0FBZ0MsQ0FBaEM7QUFDRDs7QUFFRCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCTixPQUEvQixDQUFsQjtBQUVBLFNBQU9JLFNBQVMsQ0FBQ0csTUFBVixDQUFpQjNFLE1BQU0sR0FBRyxHQUExQixDQUFQO0FBQ0QsQzs7Ozs7Ozs7OztBQ2RELGUiLCJmaWxlIjoiY29tcG9uZW50c19QYWdpbmF0aW9uX2pzLWNvbXBvbmVudHNfUHJvZHVjdHNfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSwgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5jb25zdCBBRERfVE9fQ0FSVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBBRERfVE9fQ0FSVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgYWRkVG9DYXJ0KHByb2R1Y3RJZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9DYXJ0KHsgaWQgfSkge1xyXG4gIGNvbnN0IFthZGRUb0NhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKEFERF9UT19DQVJUX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGlmICghbWUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGluayBocmVmPVwiL1NpZ25JblwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xNWVtJyB9fT5cclxuICAgICAgICAgIExvZ2luIHRvIEFkZCBUbyBDYXJ0IPCfm5JcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9e2FkZFRvQ2FydH1cclxuICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjE1ZW0nIH19XHJcbiAgICA+XHJcbiAgICAgIEFkZHtsb2FkaW5nICYmICdpbmcnfSBUbyBDYXJ0IPCfm5JcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuY29uc3QgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gREVMRVRFX1BST0RVQ1RfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZVByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoY2FjaGUsIHBheWxvYWQpIHtcclxuICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICBjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShwYXlsb2FkLmRhdGEuZGVsZXRlUHJvZHVjdCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVQcm9kdWN0KHsgaWQsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbZGVsZXRlUHJvZHVjdCwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgICB1cGRhdGUsXHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJvcmRlckxlZnQ6ICdzb2xpZCB0aGluICNlZWVlZWUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxZW0nLFxyXG4gICAgICB9fVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JykpIHtcclxuICAgICAgICAgIC8vIGdvIGFoZWFkIGFuZCBkZWxldGUgaXRcclxuICAgICAgICAgIGRlbGV0ZVByb2R1Y3QoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCIvLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICMwMTUyNjg7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTbWFsbGVyQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzAxNTI2ODtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVJlY2VpdmVkID0gc3R5bGVkLnBgXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXI6IHRoaW4gc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVNlbnQgPSBzdHlsZWQucGBcclxuICBiYWNrZ3JvdW5kOiAjZGZmZmU5O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5gO1xyXG5cclxuY29uc3QgTWVzc2FnZVNlbnRTcGFuID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogN3B4O1xyXG5gO1xyXG5jb25zdCBNZXNzYWdlUmVjZWl2ZWRTcGFuID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IENSRUFURV9DSEFUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9DSEFUX01VVEFUSU9OKFxyXG4gICAgJG1lc3NhZ2U6IFN0cmluZyFcclxuICAgICRpZDogSUQhXHJcbiAgICAkcGFnZVR5cGVNb2Q6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZUNoYXR0ZXIobWVzc2FnZTogJG1lc3NhZ2UsIGlkOiAkaWQsIHBhZ2VUeXBlTW9kOiAkcGFnZVR5cGVNb2QpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQUxMX0NIQVRTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9DSEFUU19RVUVSWSgkaWQ6IElEKSB7XHJcbiAgICBjaGF0cyhcclxuICAgICAgd2hlcmU6IHsgaXRlbTogeyBpZDogeyBlcXVhbHM6ICRpZCB9IH0gfVxyXG4gICAgICBvcmRlckJ5OiBbeyB0aW1lU3RhbXA6IGFzYyB9XVxyXG4gICAgKSB7XHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICAgaWRcclxuICAgICAgdGltZVN0YW1wXHJcbiAgICAgIHVzZXJGcm9tIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIGl0ZW0ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbEZ1bmN0aW9uKHsgaWQsIHBhZ2VUeXBlTW9kIH0pIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB0aGVJZCA9IHRoZVVzZXI/LmlkO1xyXG5cclxuICBjb25zdCBbY3JlYXRlQ2hhdHRlciwgeyBsb2FkaW5nQ3JlYXRlLCBlcnJvckNyZWF0ZSwgZGF0YUNyZWF0ZSB9XSA9XHJcbiAgICB1c2VNdXRhdGlvbihDUkVBVEVfQ0hBVF9NVVRBVElPTiwge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBtZXNzYWdlOiBpbnB1dHMubWVzc2FnZSxcclxuICAgICAgICBpZCxcclxuICAgICAgICBwYWdlVHlwZU1vZCxcclxuICAgICAgfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBBTExfQ0hBVFNfUVVFUlkgfSwgJ0FMTF9DSEFUU19RVUVSWSddLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9DSEFUU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nIG1lc3NhZ2VzLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3BhZ2VUeXBlTW9kID09PSAnYnV5ZXInICYmIChcclxuICAgICAgICA8QnV0dG9uU3R5bGVzIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9PlxyXG4gICAgICAgICAgQ29udGFjdCBTZWxsZXJcclxuICAgICAgICA8L0J1dHRvblN0eWxlcz5cclxuICAgICAgKX1cclxuICAgICAge3BhZ2VUeXBlTW9kID09PSAnc2VsbGVyJyAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblN0eWxlcyB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfT5cclxuICAgICAgICAgIENvbnRhY3QgQnV5ZXJcclxuICAgICAgICA8L0J1dHRvblN0eWxlcz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxNb2RhbCB0b2dnbGU9eygpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKX0gaXNPcGVuPXttb2RhbE9wZW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOTAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcxLjNlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWVzc2FnZXNcclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8U21hbGxlckJ1dHRvblN0eWxlc1xyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgY2xvc2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj7Dlzwvc3Bhbj5cclxuICAgICAgICAgIDwvU21hbGxlckJ1dHRvblN0eWxlcz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAge2RhdGEuY2hhdHMubWFwKChjaGF0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoY2hhdC50aW1lU3RhbXApO1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBkYXRlVGltZS50b0dNVFN0cmluZygpO1xyXG4gICAgICAgICAgICBkdCA9IGR0LnJlcGxhY2UoJ0dNVCcsICcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhdC5pZH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hhdC51c2VyRnJvbS5pZCA9PT0gdGhlSWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU2VudFNwYW4+e2R0fTwvTWVzc2FnZVNlbnRTcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlU2VudD57Y2hhdC5tZXNzYWdlfTwvTWVzc2FnZVNlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjaGF0LnVzZXJGcm9tLmlkICE9PSB0aGVJZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VSZWNlaXZlZFNwYW4+e2R0fTwvTWVzc2FnZVJlY2VpdmVkU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVJlY2VpdmVkPntjaGF0Lm1lc3NhZ2V9PC9NZXNzYWdlUmVjZWl2ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZUNoYXR0ZXIoKTtcclxuICAgICAgICAgICAgICBjbGVhckZvcm0oKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnN3B4JyB9fVxyXG4gICAgICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTbWFsbGVyQnV0dG9uU3R5bGVzIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9TbWFsbGVyQnV0dG9uU3R5bGVzPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFBhZ2luYXRpb25TdHlsZXMgZnJvbSAnLi9zdHlsZXMvUGFnaW5hdGlvblN0eWxlcyc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFBBR0lOQVRJT05fUVVFUlkge1xyXG4gICAgcHJvZHVjdHNDb3VudCh3aGVyZTogeyBzdGF0dXM6IHsgZXF1YWxzOiBcIkFWQUlMQUJMRVwiIH0gfSlcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZSB9KSB7XHJcbiAgY29uc3QgeyBlcnJvciwgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoUEFHSU5BVElPTl9RVUVSWSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiAnTG9hZGluZy4uLic7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIGNvbnN0IGNvdW50ID0gZGF0YS5wcm9kdWN0c0NvdW50O1xyXG4gIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChjb3VudCAvIHBlclBhZ2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnaW5hdGlvblN0eWxlcz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgSW5kaWUgQnViYmEgLSBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgLSAxfWB9PlxyXG4gICAgICAgIDxhIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPD0gMX0+4oaQIFByZXY8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgUGFnZSB7cGFnZX0gb2Yge3BhZ2VDb3VudH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD57Y291bnR9IEl0ZW1zIFRvdGFsPC9wPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSArIDF9YH0+XHJcbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA+PSBwYWdlQ291bnR9Pk5leHQg4oaSPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L1BhZ2luYXRpb25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQgfSBmcm9tICcuL1Byb2R1Y3RzU29sZCc7XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZXMgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICMwMTUyNjg7XHJcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBVUERBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIHVwZGF0ZU9yZGVyU3RhdHVzKGlkOiAkaWQsIHN0YXR1czogXCJQT1NURURcIikge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdGVkKHsgaWQsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXBkYXRlT3JkZXJJdGVtLCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBVUERBVEVfT1JERVJfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICAgIHsgcXVlcnk6IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0sXHJcbiAgICAgICAgJ0FMTF9QUk9EVUNUU19RVUVSWV9TT0xEJyxcclxuICAgICAgXSxcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uU3R5bGVzXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgIH19XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maXJtKCdQbGVhc2UgY29uZmlybSB5b3UgaGF2ZSBwb3N0ZWQgdGhpcyBpdGVtPycpKSB7XHJcbiAgICAgICAgICB1cGRhdGVPcmRlckl0ZW0oKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBJdGVtU3R5bGVzIGZyb20gJy4vc3R5bGVzL0l0ZW1TdHlsZXMnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9zdHlsZXMvVGl0bGUnO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi9zdHlsZXMvUHJpY2VUYWcnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL21vbmV5JztcclxuaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSAnLi9EZWxldGVQcm9kdWN0JztcclxuaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydCc7XHJcbmltcG9ydCB7IEFMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcgfSBmcm9tICcuL1Byb2R1Y3RzUmV2aWV3JztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBQb3N0ZWQgZnJvbSAnLi9Qb3N0ZWQnO1xyXG5pbXBvcnQgTW9kYWxGdW5jdGlvbiBmcm9tICcuL01vZGFsJztcclxuaW1wb3J0IFJlZnVuZCBmcm9tICcuL1JlZnVuZCc7XHJcbmltcG9ydCBSZWxlYXNlZCBmcm9tICcuL1JlbGVhc2VkJztcclxuaW1wb3J0IFN0YXR1c1RhZyBmcm9tICcuL3N0eWxlcy9TdGF0dXNUYWcnO1xyXG5cclxuY29uc3QgVVBEQVRFX1NUQVRVU19NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBVUERBVEVfU1RBVFVTX01VVEFUSU9OKCRpZDogSUQhLCAkZGF0YVN0YXR1czogU3RyaW5nKSB7XHJcbiAgICB1cGRhdGVQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSwgZGF0YTogeyBzdGF0dXM6ICRkYXRhU3RhdHVzIH0pIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5sZXQgY2FuUmVsZWFzZSA9ICdubyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdCwgcGFnZVR5cGUgfSkge1xyXG4gIGZ1bmN0aW9uIGhlbGxvKCkge31cclxuICB7XHJcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBwcm9kdWN0Py5kYXRlO1xyXG4gICAgY29uc3QgdGhlRGF0ZSA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XHJcbiAgICBjb25zdCBkYXRlUGx1cyA9IHRoZURhdGUuc2V0RGF0ZSh0aGVEYXRlLmdldERhdGUoKSArIDIxKTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbmV3RGF0ZSA9IGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSk7XHJcbiAgICBpZiAobmV3RGF0ZSA+IGRhdGVQbHVzKSB7XHJcbiAgICAgIGNhblJlbGVhc2UgPSAneWVzJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhblJlbGVhc2UgPSAnbm8nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmVlID0gTWF0aC5jZWlsKHByb2R1Y3QucHJpY2UgKiAwLjA1KTtcclxuICBjb25zdCBhbW91bnQgPSBwYXJzZUludChwcm9kdWN0LnByaWNlKSAtIGZlZTtcclxuXHJcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCBbdXBkYXRlU3RhdHVzLCB7IGRhdGE6IERhdGEsIGVycm9yOiBFcnJvciwgbG9hZGluZzogTG9hZGluZyB9XSA9XHJcbiAgICB1c2VNdXRhdGlvbihVUERBVEVfU1RBVFVTX01VVEFUSU9OKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdHVzID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICBjb25zdCBkYXRhU3RhdHVzID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0dXMnKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHVwZGF0ZVN0YXR1cyh7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGRhdGFTdGF0dXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgICAgeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZX1JFVklFVyB9LFxyXG4gICAgICAgICdBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXJyxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChwYWdlVHlwZSA9PT0gJ3NlbGwnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SXRlbVN0eWxlcz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgPFByaWNlVGFnPntmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX08L1ByaWNlVGFnPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzAxNTI2OCcgfX0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVkaXQg4pyP77iPXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxEZWxldGVQcm9kdWN0IGlkPXtwcm9kdWN0LmlkfT5EZWxldGUg8J+Xke+4jzwvRGVsZXRlUHJvZHVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JdGVtU3R5bGVzPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKHBhZ2VUeXBlID09PSAnc29sZCcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjZWVlZWVlJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZGU2ZmYnLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxyXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjMnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnNHJlbScsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDA3N2EwJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMCAxcmVtJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzAxNTI2OCcgfX0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIG1hcmdpbjogJzBweCcgfX0+U29sZCBvbjoge3Byb2R1Y3QuZGF0ZX08L3A+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIG1hcmdpblRvcDogJzBweCcgfX0+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+TGV0J3MgdGFsayBtb25leS4uLjwvc3Bhbj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgU29sZCBmb3I6IHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgRmVlICg1JSk6IHtmb3JtYXRNb25leShmZWUpfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBOZXQ6IHtmb3JtYXRNb25leShhbW91bnQpfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aDNcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMzBweCcsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxNXB4JyxcclxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogJ3NvbGlkIHRoaW4gIzAwMDAwMCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBvc3QgdG97JyAnfVxyXG4gICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8ucG9zdGNvZGUgPT09ICcnICYmIChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnN3B4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTm8gYWRkcmVzcyBvbiBmaWxlLCBwbGVhc2UgY29udGFjdCBidXllciFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5vcmRlcj8udXNlcj8ucG9zdGNvZGUgIT09ICcnICYmIChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAnN3B4JyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5uYW1lfSA8YnIgLz5cclxuICAgICAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5hZGRyZXNzfSA8YnIgLz5cclxuICAgICAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy50b3dufSA8YnIgLz5cclxuICAgICAgICAgICAge3Byb2R1Y3Q/Lm9yZGVyPy51c2VyPy5jb3VudHl9IDxiciAvPlxyXG4gICAgICAgICAgICB7cHJvZHVjdD8ub3JkZXI/LnVzZXI/LnBvc3Rjb2RlfSA8YnIgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8TW9kYWxGdW5jdGlvbiBpZD17cHJvZHVjdC5pZH0gcGFnZVR5cGVNb2Q9XCJzZWxsZXJcIiAvPlxyXG5cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzICE9PSAnUkVGVU5ERUQnICYmIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ1JFQ0VJVkVEJyAmJiAoXHJcbiAgICAgICAgICA8UmVmdW5kIGlkPXtwcm9kdWN0LmlkfT5SZWZ1bmQgSXRlbTwvUmVmdW5kPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdPTkhPTEQnICYmIChcclxuICAgICAgICAgIDxSZWxlYXNlZCBpZD17cHJvZHVjdC5pZH0+UmVsZWFzZSBGdW5kczwvUmVsZWFzZWQ+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2NhblJlbGVhc2UgPT09ICd5ZXMnICYmXHJcbiAgICAgICAgICBwcm9kdWN0Py5zdGF0dXMgIT09ICdPTkhPTEQnICYmXHJcbiAgICAgICAgICBwcm9kdWN0Py5zdGF0dXMgIT09ICdSRUNFSVZFRCcgJiZcclxuICAgICAgICAgIHByb2R1Y3Q/LnN0YXR1cyAhPT0gJ0ZMQUdHRUQnICYmXHJcbiAgICAgICAgICBwcm9kdWN0Py5zdGF0dXMgIT09ICdSRUNFSVZFREJBQ0snICYmXHJcbiAgICAgICAgICBwcm9kdWN0Py5zdGF0dXMgIT09ICdSRUZVTkRFRCcgJiYgKFxyXG4gICAgICAgICAgICA8UmVsZWFzZWQgaWQ9e3Byb2R1Y3QuaWR9PlJlbGVhc2UgRnVuZHM8L1JlbGVhc2VkPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Byb2R1Y3Q/LnN0YXR1cyA9PT0gJ1NPTEQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8UG9zdGVkIGlkPXtwcm9kdWN0LmlkfT5NYXJrIHBvc3RlZCDwn5OuPC9Qb3N0ZWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdQT1NURUQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGVsbG99XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5TdGF0dXM6PC9zcGFuPiBQb3N0ZWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdSRUNFSVZFRCcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoZWxsb31cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlN0YXR1czo8L3NwYW4+IFJlY2VpdmVkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnT05IT0xEJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlbGxvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3B1cnBsZScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlN0YXR1czo8L3NwYW4+IFJlY2VpdmVkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvZHVjdD8uc3RhdHVzID09PSAnUkVGVU5ERUQnICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGVsbG99XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+U3RhdHVzOjwvc3Bhbj4gUmVmdW5kZWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py5zdGF0dXMgPT09ICdGTEFHR0VEJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hlbGxvfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlN0YXR1czo8L3NwYW4+IElzc3VlIFJhaXNlZCFcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0l0ZW1TdHlsZXM+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAocGFnZVR5cGUgPT09ICdyZXZpZXcnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SXRlbVN0eWxlcz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgPFByaWNlVGFnPntmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX08L1ByaWNlVGFnPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAnIzAxNTI2OCcgfX0+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgZGF0YS1zdGF0dXM9XCJERUNMSU5FRFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN0YXR1c31cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xNWVtJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWNsaW5lIOKdjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvdXBkYXRlJyxcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWRpdCDinI/vuI9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgZGF0YS1zdGF0dXM9XCJBVkFJTEFCTEVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0dXN9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzEuMTVlbScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWNjZXB0IPCfkY1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0l0ZW1TdHlsZXM+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gI2VlZWVlZScsXHJcbiAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMTVweCcsXHJcbiAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUaXRsZT5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICA8L1RpdGxlPlxyXG4gICAgICA8UHJpY2VUYWc+XHJcbiAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxzcGFuPkluYyBQb3N0YWdlPC9zcGFuPlxyXG4gICAgICA8L1ByaWNlVGFnPlxyXG4gICAgICA8U3RhdHVzVGFnPntwcm9kdWN0LmNvbmRpdGlvbn08L1N0YXR1c1RhZz5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjMDE1MjY4JyB9fT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgIHtwcm9kdWN0Py51c2VyPy5pZCA9PT0gdXNlcj8uaWQgJiYgKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFlbScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVkaXQg4pyP77iPXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwcm9kdWN0Py51c2VyPy5pZCAhPT0gdXNlcj8uaWQgJiYgPEFkZFRvQ2FydCBpZD17cHJvZHVjdC5pZH0gLz59XHJcbiAgICAgICAge3Byb2R1Y3Q/LnVzZXI/LmlkID09PSB1c2VyPy5pZCAmJiAoXHJcbiAgICAgICAgICA8RGVsZXRlUHJvZHVjdCBpZD17cHJvZHVjdC5pZH0+RGVsZXRlIPCfl5HvuI88L0RlbGV0ZVByb2R1Y3Q+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0l0ZW1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IExvYWRCYXIgZnJvbSAnLi9Mb2FkQmFyJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZKCRza2lwOiBJbnQgPSAwLCAkZmlyc3Q6IEludCkge1xyXG4gICAgcHJvZHVjdHMoXHJcbiAgICAgIHdoZXJlOiB7IHN0YXR1czogeyBlcXVhbHM6IFwiQVZBSUxBQkxFXCIgfSB9XHJcbiAgICAgIG9yZGVyQnk6IFt7IGRlc2NyaXB0aW9uOiBhc2MgfV1cclxuICAgICAgdGFrZTogJGZpcnN0XHJcbiAgICAgIHNraXA6ICRza2lwXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb25kaXRpb25cclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzTGlzdFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGNvbHVtbi1nYXA6IDI1cHg7XHJcbiAgcm93LWdhcDogMjVweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGNvbHVtbi1nYXA6IDEwJTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2x1bW4tZ2FwOiA3JTtcclxuICAgIHJvdy1nYXA6IDQlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cyh7IHBhZ2UgfSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHNraXA6IHBhZ2UgKiBwZXJQYWdlIC0gcGVyUGFnZSxcclxuICAgICAgZmlyc3Q6IHBlclBhZ2UsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRCYXIgbG9hZD17bG9hZGluZ30gLz47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICAgICAge2RhdGEucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IHBhZ2VUeXBlPVwiUHJvZHVjdHNcIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Byb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWV9SRVZJRVcge1xyXG4gICAgcHJvZHVjdHMod2hlcmU6IHsgc3RhdHVzOiB7IGVxdWFsczogXCJEUkFGVFwiIH0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogMjVweDtcclxuICByb3ctZ2FwOiAyNXB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgY29sdW1uLWdhcDogMTAlO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2x1bW4tZ2FwOiA3JTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMjglIDI4JTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1JldmlldygpIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUllfUkVWSUVXLCB7fSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RhdGEucHJvZHVjdHMubGVuZ3RoICE9IDAgJiYgKFxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUbyBSZXZpZXdcclxuICAgICAgICA8L2gyPlxyXG4gICAgICApfVxyXG4gICAgICB7ZGF0YS5wcm9kdWN0cy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIFByb2R1Y3RzIFRvIFJldmlld1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxQcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICAgICAge2RhdGEucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IHBhZ2VUeXBlPVwicmV2aWV3XCIgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEKCR0aGlzVXNlcklkOiBJRCkge1xyXG4gICAgb3JkZXJJdGVtcyhcclxuICAgICAgd2hlcmU6IHsgdXNlcjogeyBpZDogeyBlcXVhbHM6ICR0aGlzVXNlcklkIH0gfSB9XHJcbiAgICAgIG9yZGVyQnk6IFt7IHRpbWVTdGFtcDogZGVzYyB9XVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcHJpY2VcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgc3RhdHVzXHJcbiAgICAgIHRyYWNraW5nXHJcbiAgICAgIHRyYWNraW5nQ29tcGFueVxyXG4gICAgICBlbWFpbFxyXG4gICAgICB0aW1lU3RhbXBcclxuICAgICAgZGF0ZVxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBvcmRlciB7XHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICBhZGRyZXNzMlxyXG4gICAgICAgICAgdG93blxyXG4gICAgICAgICAgY291bnR5XHJcbiAgICAgICAgICBwb3N0Y29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzTGlzdFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGNvbHVtbi1nYXA6IDI1cHg7XHJcbiAgcm93LWdhcDogMjVweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGNvbHVtbi1nYXA6IDEwJTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sdW1uLWdhcDogNyU7XHJcbiAgICByb3ctZ2FwOiAyJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDI4JSAyOCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNTb2xkKCkge1xyXG4gIGNvbnN0IHRoZVVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgdGhlSWQgPSB0aGVVc2VyPy5pZDtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUllfU09MRCwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRoaXNVc2VySWQ6IHRoZUlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGF0YS5vcmRlckl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJ25vcm1hbCcgfX0+XHJcbiAgICAgICAgICBZb3UgaGF2ZSBtYWRlIG5vIHNhbGVzIVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICl9XHJcbiAgICAgIHtkYXRhLm9yZGVySXRlbXMubGVuZ3RoICE9IDAgJiYgKFxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTb2xkXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgKX1cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5vcmRlckl0ZW1zLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSBwYWdlVHlwZT1cInNvbGRcIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Byb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0gZnJvbSAnLi9Qcm9kdWN0c1NvbGQnO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGVzID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgUkVGVU5EX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFRlVORF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgcmVmdW5kKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZnVuZCh7IGlkLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3JlZnVuZCwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFJFRlVORF9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9LFxyXG4gICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQnLFxyXG4gICAgXSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblN0eWxlc1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzEycHgnLFxyXG4gICAgICB9fVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAnUGxlYXNlIGNvbmZpcm0geW91IHdpc2ggdG8gcmVmdW5kIHRoaXMgaXRlbT9cXG5cXG5USElTIENBTiBOT1QgQkUgVU5ET05FISdcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlZnVuZCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9IGZyb20gJy4vUHJvZHVjdHNTb2xkJztcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlcyA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGJvcmRlcjogdGhpbiBzb2xpZCAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgUkVMRUFTRV9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBSRUxFQVNFX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICByZWxlYXNlZChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxlYXNlZCh7IGlkLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3JlbGVhc2VkLCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oUkVMRUFTRV9NVVRBVElPTiwge1xyXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfU09MRCB9LFxyXG4gICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQnLFxyXG4gICAgXSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblN0eWxlc1xyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzEycHgnLFxyXG4gICAgICB9fVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAnWW91IGFyZSBhYm91dCB0byByZWxlYXNlIHRoZSBmdW5kcyBmb3IgdGhpcyBpdGVtIGludG8geW91ciBJbmRpZSBCdWJiYSBhY2NvdW50LlxcblxcblRoZSBmdW5kcyB3aWxsIHRoZW4gYmUgcGFpZCBvdXQgdG8geW91ciBub21pbmF0ZWQgYmFuayBhY2NvdW50IGFuZCBhcnJpdmUgaW4gdGhlIG5leHQgZmV3IGRheXMuJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVsZWFzZWQoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSXRlbVN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IHRoaW4gc29saWQgI2VlZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmJ1dHRvbkxpc3Qge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIHRoaW4gI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JheSk7XG4gICAgJiA+ICoge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVN0eWxlcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQYWdpbmF0aW9uU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gYXV0byAycmVtIGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gIH1cbiAgYVthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uU3R5bGVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByaWNlVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6ICNmZGU2ZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICBjb2xvcjogIzAwNzdhMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VUYWc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3RhdHVzVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6ICMwMDc3YTA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDNyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IC0zcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNUYWc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMCAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogc2tldygtNWRlZykgcm90YXRlKC0xZGVnKTtcbiAgbWFyZ2luLXRvcDogLTNyZW07XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmRlNmZmO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDc3YTA7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgaHR0cHM6Ly9pbmRpZS1idWJiYS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vYXBpL2dyYXBocWxgO1xuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA2O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnR0JQJyxcclxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICB9O1xyXG5cclxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XHJcbiAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLUdCJywgb3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==