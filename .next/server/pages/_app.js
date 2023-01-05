(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/calcTotalPrice":
/*!****************************!*\
  !*** ./lib/calcTotalPrice ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be deleted, but they could still be in your cart
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}


/***/ }),

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _lib_money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/money */ "./lib/money.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Checkout */ "./components/Checkout.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Cart.js";










const CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-1fvloaj-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  const {
    product
  } = cartItem;
  if (!product) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_money__WEBPACK_IMPORTED_MODULE_5__.default)(product.price * cartItem.quantity), "-", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_money__WEBPACK_IMPORTED_MODULE_5__.default)(product.price), " each"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__.default, {
      id: cartItem.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

function Cart() {
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();
  const {
    cartOpen,
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_8__.useCart)();
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__.default, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "Shopping Cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: closeCart,
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
        cartItem: cartItem
      }, cartItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_money__WEBPACK_IMPORTED_MODULE_5__.default)((0,_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkout__WEBPACK_IMPORTED_MODULE_10__.Checkout, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\CartCount.js";


const Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-w6ks4s-0"
})(["background:#fde6ff;color:#0077a0;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);
const AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-w6ks4s-1"
})(["position:relative;.count{display:block;position:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimationStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkout": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _pages_orders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/orders */ "./pages/orders.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Products */ "./components/Products.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _LoadBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LoadBar */ "./components/LoadBar.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Checkout.js";















const CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-1n7g75y-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const CREATE_ORDER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_6___default())`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
const stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)("pk_test_51LflB8FMoxrkkSSd7kQycvyJh5oi2zYPJZUN03LRx4gHZBCfjMeeIwcFFwtoBzcnAf51YQqEPO9JZFMZ3lv8Rgxr00fZu6FMaz");

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_10__.useCart)();
  const [checkout, {
    error: graphQLError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _pages_orders__WEBPACK_IMPORTED_MODULE_12__.USER_ORDERS_QUERY
    }, 'USER_ORDERS_QUERY', {
      query: _User__WEBPACK_IMPORTED_MODULE_11__.CURRENT_USER_QUERY
    }, 'CURRENT_USER_QUERY', {
      query: _Products__WEBPACK_IMPORTED_MODULE_13__.ALL_PRODUCTS_QUERY
    }, 'ALL_PRODUCTS_QUERY', {
      query: _Pagination__WEBPACK_IMPORTED_MODULE_14__.PAGINATION_QUERY
    }, 'PAGINATION_QUERY']
  });

  async function handleSubmit(e) {
    // 1. Stop the form from submitting and turn the loader one
    e.preventDefault();
    setLoading(true); // 2. Start the page transition

    nprogress__WEBPACK_IMPORTED_MODULE_5___default().start(); // 3. Create the payment method via stripe (Token comes back here if successful)

    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement)
    }); // 4. Handle any errors from stripe

    if (error) {
      setError(error);
      nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();
      setLoading(false);
      return; // stops the checkout from happening
    } // 5. Send the token from step 3 to our keystone server, via a custom mutation!


    const order = await checkout({
      variables: {
        token: paymentMethod.id
      }
    }); // 6. Change the page to view the order

    router.push({
      pathname: `/order/[id]`,
      query: {
        id: order.data.checkout.id
      }
    }); // 7. Close the cart

    closeCart(); // 8. turn the loader off

    setLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadBar__WEBPACK_IMPORTED_MODULE_15__.default, {
      load: loading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: "nounderline",
      children: "Check Out"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Header.js";

function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavMenu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");


var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Nav.js";











function NavMenu() {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_7__.useUser)();
  const {
    openCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_9__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default()), {
    bg: "light",
    expand: "lg",
    style: {
      borderBottom: 'solid thin #000000'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Brand), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: "/logo.png",
          alt: "Indie Bubba Logo",
          width: "280px",
          height: "70px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Toggle), {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Collapse), {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/products",
            children: "Marketplace"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/sell",
              children: "Selling"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/orders",
              children: "Buying"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/account",
              children: "Account"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/contact",
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              type: "button",
              onClick: openCart,
              children: ["\uD83D\uDED2", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_10__.default, {
                count: user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)]
          }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/SignIn",
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/Register",
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/contact",
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\Page.js";



const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["@font-face{font-family:Arial,Helvetica,sans-serif;format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--lightGrey:#e1e1e1 --offWhite:#ededed;--maxWidth:1600px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:62.5%;}*,*:before,*:after{box-sizing:inherit;}body{font-family:Arial,--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;color:#015268;}a{text-decoration:none;color:#015268;}button{font-family:'radnika_next',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;cursor:pointer;}"]);
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-1vdktq7-0"
})(["width:100%;margin:0 auto;padding:25px;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
Page.propTypes = {
  cool: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

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

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RemoveFromCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\RemoveFromCart.js";



const BigButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-1dywx1q-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(where: { id: $id }) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({
  id
}) {
  const [removeFromCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id
    },
    update // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BigButton, {
    onClick: removeFromCart,
    disabled: loading,
    type: "button",
    title: "Remove This Item from Cart",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/orders */ "./pages/orders.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Products */ "./components/Products.js");
/* harmony import */ var _ProductsSell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductsSell */ "./components/ProductsSell.js");
/* harmony import */ var _ProductsSold__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductsSold */ "./components/ProductsSold.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\SignOut.js";








const SIGN_OUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_8__.CURRENT_USER_QUERY
    }, _User__WEBPACK_IMPORTED_MODULE_8__.CURRENT_USER_QUERY, {
      query: _ProductsSold__WEBPACK_IMPORTED_MODULE_7__.ALL_PRODUCTS_QUERY_SOLD
    }, _ProductsSold__WEBPACK_IMPORTED_MODULE_7__.ALL_PRODUCTS_QUERY_SOLD, {
      query: _ProductsSell__WEBPACK_IMPORTED_MODULE_6__.ALL_PRODUCTS_QUERY_SELL
    }, _ProductsSell__WEBPACK_IMPORTED_MODULE_6__.ALL_PRODUCTS_QUERY_SELL, {
      query: _Products__WEBPACK_IMPORTED_MODULE_5__.ALL_PRODUCTS_QUERY
    }, _Products__WEBPACK_IMPORTED_MODULE_5__.ALL_PRODUCTS_QUERY, {
      query: _pages_orders__WEBPACK_IMPORTED_MODULE_4__.USER_ORDERS_QUERY
    }, _pages_orders__WEBPACK_IMPORTED_MODULE_4__.USER_ORDERS_QUERY]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    id: "logOut",
    type: "button",
    onClick: signout,
    style: {
      color: '#0077a0'
    },
    children: "Log-out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1ccp8s1-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{font-family:Arial,--apple-system;border-bottom:thin solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:thin solid var(--black);margin-top:2rem;padding-top:2rem;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-oaz81d-0"
})(["color:red;background-color:white;font-size:3rem;border:0;padding-left:7px;padding-right:7px;position:absolute;z-index:2;border:thin solid #000000;border-radius:5px;right:7px;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-119ka72-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:1.1em;text-align:right;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;font-weight:500;font-size:1.3em;background:none;border:0;color:#0077a0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:#fde6ff;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/OrderItemStyles.js":
/*!**********************************************!*\
  !*** ./components/styles/OrderItemStyles.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OrderItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "OrderItemStyles",
  componentId: "sc-107b59u-0"
})(["box-shadow:var(--bs);list-style:none;padding:0;border:1px solid var(--offWhite);&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#0077a0 0%,#fde6ff 80%);margin-bottom:2rem;}h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (OrderItemStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SickButton",
  componentId: "sc-1hd35fw-0"
})(["background-image:linear-gradient( to right,#0077a0 0%,#fde6ff 40% ) !important;color:red !important;font-weight:500 !important;border:0 !important;border-radius:0 !important;text-transform:uppercase;font-size:2rem !important;padding:0.8rem 1.5rem !important;transform:skew(-2deg) !important;display:inline-block !important;cursor:pointer;text-align:center;transition:all 0.5s;&[disabled]{opacity:0.5;}&:after{background:transparent !important;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-1ukyotg-0"
})(["color:#0077a0;display:inline-block;padding-left:3rem;padding-right:3rem;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\lib\\cartState.js";

const LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!
  // Closed cart by default
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
} // make a custom hook for accessing the cart local state


function useCart() {
  // We use a consumer here to access the local state
  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
}



/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");







function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {// TODO: We will add this together!
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().start());
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.SSRProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
      client: apollo,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_cartState__WEBPACK_IMPORTED_MODULE_8__.CartStateProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_7__.default)(MyApp));

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_ORDERS_QUERY": function() { return /* binding */ USER_ORDERS_QUERY; },
/* harmony export */   "default": function() { return /* binding */ OrdersPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_money__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/money */ "./lib/money.js");
/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _components_LoadBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LoadBar */ "./components/LoadBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");


var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\pages\\orders.js";













const USER_ORDERS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query USER_ORDERS_QUERY($thisUserId: ID) {
    orders(
      where: { user: { id: { equals: $thisUserId } } }
      orderBy: [{ timeStamp: desc }]
    ) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
const OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_5___default().ul.withConfig({
  displayName: "orders__OrderUl",
  componentId: "sc-1a9d35r-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:4rem;"]);

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

function OrdersPage() {
  const theUser = (0,_components_User__WEBPACK_IMPORTED_MODULE_11__.useUser)();
  const postcode = theUser === null || theUser === void 0 ? void 0 : theUser.postcode;
  const theId = theUser === null || theUser === void 0 ? void 0 : theUser.id;
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(USER_ORDERS_QUERY, {
    variables: {
      thisUserId: theId
    }
  });
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadBar__WEBPACK_IMPORTED_MODULE_12__.default, {
    load: loading
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 21
  }, this);
  const {
    orders
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_10__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: ["Your Orders (", orders.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), orders.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          style: {
            textAlign: 'center'
          },
          children: ["You have placed ", orders.length, " orders!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          style: {
            fontWeight: 'normal'
          },
          children: ["Check out our", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: "products",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              style: {
                color: 'pink',
                textDecoration: 'underline'
              },
              children: "marketplace"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, this), ' ', "to start buying!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/baby.jpg",
          alt: "Indie Bubba Crying Baby",
          width: "508px",
          height: "704px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [orders.length === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          style: {
            textAlign: 'center'
          },
          children: ["You have placed ", orders.length, " order!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, this), orders.length > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          style: {
            textAlign: 'center'
          },
          children: ["You have placed ", orders.length, " orders!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, this), orders.length > 0 && postcode !== null || postcode !== '' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          style: {
            color: 'red',
            fontWeight: 'normal',
            textAlign: 'center'
          },
          children: "Please ensure your delivery address is up to date in your account!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderUl, {
          children: orders.map(order => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_9__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: `/order/${order.id}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "order-meta",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: [countItemsInAnOrder(order), " Items"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: [order.items.length, " Product", order.items.length === 1 ? '' : 's']
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: (0,_lib_money__WEBPACK_IMPORTED_MODULE_8__.default)(order.total)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "images",
                  children: order.items.map(item => {
                    var _item$photo, _item$photo$image;

                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,
                      alt: item.name
                    }, `image-${item.id}`, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 25
                    }, this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this)
          }, order.id, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Container");;

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Nav");;

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Navbar");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-ad777a","vendors-node_modules_next_image_js","vendors-node_modules_next_link_js","components_ErrorMessage_js-components_Footer_js-components_LoadBar_js-components_User_js-comp-c40948","components_Pagination_js-components_Products_js","components_PleaseSignIn_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2xpYi9jYWxjVG90YWxQcmljZSIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvQ2FydENvdW50LmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9DaGVja291dC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzU2VsbC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvUmVtb3ZlRnJvbUNhcnQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpZ25PdXQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9DYXJ0U3R5bGVzLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvQ2xvc2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9OYXZTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9TaWNrQnV0dG9uLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvU3VwcmVtZS5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2xpYi9jYXJ0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9saWIvd2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kLy4vcGFnZXMvb3JkZXJzLmpzIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9saW5rLWVycm9yXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC13aXRoLWFwb2xsb1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDYXJ0SXRlbVN0eWxlcyIsInN0eWxlZCIsIkNhcnRJdGVtIiwiY2FydEl0ZW0iLCJwcm9kdWN0IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJxdWFudGl0eSIsImlkIiwiQ2FydCIsIm1lIiwidXNlVXNlciIsImNhcnRPcGVuIiwiY2xvc2VDYXJ0IiwidXNlQ2FydCIsImNhcnQiLCJtYXAiLCJjYWxjVG90YWxQcmljZSIsIkRvdCIsIkFuaW1hdGlvblN0eWxlcyIsIkNhcnRDb3VudCIsImNvdW50IiwiZW50ZXIiLCJleGl0IiwiQ2hlY2tvdXRGb3JtU3R5bGVzIiwiQ1JFQVRFX09SREVSX01VVEFUSU9OIiwiZ3FsIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJDaGVja291dEZvcm0iLCJlcnJvciIsInNldEVycm9yIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0cmlwZSIsInVzZVN0cmlwZSIsImVsZW1lbnRzIiwidXNlRWxlbWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGVja291dCIsImdyYXBoUUxFcnJvciIsInVzZU11dGF0aW9uIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIlVTRVJfT1JERVJTX1FVRVJZIiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiQUxMX1BST0RVQ1RTX1FVRVJZIiwiUEFHSU5BVElPTl9RVUVSWSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5Qcm9ncmVzcyIsInBheW1lbnRNZXRob2QiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJvcmRlciIsInZhcmlhYmxlcyIsInRva2VuIiwicHVzaCIsInBhdGhuYW1lIiwiZGF0YSIsImZvbnRTaXplIiwibWVzc2FnZSIsIkNoZWNrb3V0IiwiSGVhZGVyIiwiTmF2TWVudSIsInVzZXIiLCJvcGVuQ2FydCIsImJvcmRlckJvdHRvbSIsInJlZHVjZSIsInRhbGx5IiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJJbm5lclN0eWxlcyIsIlBhZ2UiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsImNvb2wiLCJQcm9wVHlwZXMiLCJhbnkiLCJBTExfUFJPRFVDVFNfUVVFUllfU0VMTCIsIlByb2R1Y3RzTGlzdFN0eWxlcyIsIlByb2R1Y3RzU2VsbCIsInRoZVVzZXIiLCJ0aGVJZCIsInVzZVF1ZXJ5IiwidGhpc1VzZXJJZCIsInByb2R1Y3RzIiwibGVuZ3RoIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiYm9yZGVyVG9wIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiQmlnQnV0dG9uIiwiUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTiIsInVwZGF0ZSIsImNhY2hlIiwicGF5bG9hZCIsImV2aWN0IiwiaWRlbnRpZnkiLCJkZWxldGVDYXJ0SXRlbSIsIlJlbW92ZUZyb21DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJTSUdOX09VVF9NVVRBVElPTiIsIlNpZ25PdXQiLCJzaWdub3V0IiwiQUxMX1BST0RVQ1RTX1FVRVJZX1NPTEQiLCJDYXJ0U3R5bGVzIiwicHJvcHMiLCJvcGVuIiwiQ2xvc2VCdXR0b24iLCJOYXZTdHlsZXMiLCJPcmRlckl0ZW1TdHlsZXMiLCJTaWNrQnV0dG9uIiwiU3VwcmVtZSIsIkxvY2FsU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxvY2FsU3RhdGVQcm92aWRlciIsIlByb3ZpZGVyIiwiQ2FydFN0YXRlUHJvdmlkZXIiLCJzZXRDYXJ0T3BlbiIsInRvZ2dsZUNhcnQiLCJhbGwiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ2xpZW50IiwiaGVhZGVycyIsImluaXRpYWxTdGF0ZSIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJBcG9sbG9MaW5rIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJmb3JFYWNoIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVVcGxvYWRMaW5rIiwidXJpIiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsInJlc3RvcmUiLCJ3aXRoQXBvbGxvIiwiZ2V0RGF0YUZyb21UcmVlIiwiUm91dGVyIiwiTlByb2dyZXNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3aXRoRGF0YSIsIk9yZGVyVWwiLCJjb3VudEl0ZW1zSW5Bbk9yZGVyIiwiaXRlbXMiLCJpdGVtIiwiT3JkZXJzUGFnZSIsInBvc3Rjb2RlIiwib3JkZXJzIiwidGV4dERlY29yYXRpb24iLCJ0b3RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHVKQUFwQjs7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Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY1RvdGFsUHJpY2UoY2FydCkge1xyXG4gIHJldHVybiBjYXJ0LnJlZHVjZSgodGFsbHksIGNhcnRJdGVtKSA9PiB7XHJcbiAgICBpZiAoIWNhcnRJdGVtLnByb2R1Y3QpIHJldHVybiB0YWxseTsgLy8gcHJvZHVjdHMgY2FuIGJlIGRlbGV0ZWQsIGJ1dCB0aGV5IGNvdWxkIHN0aWxsIGJlIGluIHlvdXIgY2FydFxyXG4gICAgcmV0dXJuIHRhbGx5ICsgY2FydEl0ZW0ucXVhbnRpdHkgKiBjYXJ0SXRlbS5wcm9kdWN0LnByaWNlO1xyXG4gIH0sIDApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ2FydFN0eWxlcyBmcm9tICcuL3N0eWxlcy9DYXJ0U3R5bGVzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vc3R5bGVzL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IFN1cHJlbWUgZnJvbSAnLi9zdHlsZXMvU3VwcmVtZSc7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvbW9uZXknO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IGNhbGNUb3RhbFByaWNlIGZyb20gJy4uL2xpYi9jYWxjVG90YWxQcmljZSc7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuaW1wb3J0IFJlbW92ZUZyb21DYXJ0IGZyb20gJy4vUmVtb3ZlRnJvbUNhcnQnO1xyXG5pbXBvcnQgeyBDaGVja291dCB9IGZyb20gJy4vQ2hlY2tvdXQnO1xyXG5cclxuY29uc3QgQ2FydEl0ZW1TdHlsZXMgPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIGgzLFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIENhcnRJdGVtKHsgY2FydEl0ZW0gfSkge1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gY2FydEl0ZW07XHJcbiAgaWYgKCFwcm9kdWN0KSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRJdGVtU3R5bGVzPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgIHNyYz17cHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBjYXJ0SXRlbS5xdWFudGl0eSl9LVxyXG4gICAgICAgICAgPGVtPlxyXG4gICAgICAgICAgICB7Y2FydEl0ZW0ucXVhbnRpdHl9ICZ0aW1lczsge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfSBlYWNoXHJcbiAgICAgICAgICA8L2VtPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxSZW1vdmVGcm9tQ2FydCBpZD17Y2FydEl0ZW0uaWR9IC8+XHJcbiAgICA8L0NhcnRJdGVtU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgeyBjYXJ0T3BlbiwgY2xvc2VDYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcbiAgaWYgKCFtZSkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0U3R5bGVzIG9wZW49e2NhcnRPcGVufT5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8U3VwcmVtZT5TaG9wcGluZyBDYXJ0PC9TdXByZW1lPlxyXG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtjbG9zZUNhcnR9PiZ0aW1lczs8L0Nsb3NlQnV0dG9uPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHttZS5jYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IChcclxuICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2NhcnRJdGVtLmlkfSBjYXJ0SXRlbT17Y2FydEl0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPHA+e2Zvcm1hdE1vbmV5KGNhbGNUb3RhbFByaWNlKG1lLmNhcnQpKX08L3A+XHJcbiAgICAgICAgPENoZWNrb3V0IC8+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9DYXJ0U3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjZmRlNmZmO1xyXG4gIGNvbG9yOiAjMDA3N2EwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWluLXdpZHRoOiAzcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xyXG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XHJcbmA7XHJcblxyXG5jb25zdCBBbmltYXRpb25TdHlsZXMgPSBzdHlsZWQuc3BhbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmNvdW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5jb3VudC1lbnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcbiAgfVxyXG4gIC5jb3VudC1lbnRlci1hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xyXG4gIH1cclxuICAuY291bnQtZXhpdCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcbiAgfVxyXG4gIC5jb3VudC1leGl0LWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydENvdW50KHsgY291bnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0aW9uU3R5bGVzPlxyXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB1bm1vdW50T25FeGl0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudFwiXHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY291bnRcIlxyXG4gICAgICAgICAga2V5PXtjb3VudH1cclxuICAgICAgICAgIHRpbWVvdXQ9e3sgZW50ZXI6IDQwMCwgZXhpdDogNDAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERvdD57Y291bnR9PC9Eb3Q+XHJcbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cclxuICAgIDwvQW5pbWF0aW9uU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZEVsZW1lbnQsXHJcbiAgRWxlbWVudHMsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgdXNlU3RyaXBlLFxyXG59IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IFNpY2tCdXR0b24gZnJvbSAnLi9zdHlsZXMvU2lja0J1dHRvbic7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IHsgVVNFUl9PUkRFUlNfUVVFUlkgfSBmcm9tICcuLi9wYWdlcy9vcmRlcnMnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUlkgfSBmcm9tICcuL1Byb2R1Y3RzJztcclxuaW1wb3J0IHsgUEFHSU5BVElPTl9RVUVSWSB9IGZyb20gJy4vUGFnaW5hdGlvbic7XHJcbmltcG9ydCBMb2FkQmFyIGZyb20gJy4vTG9hZEJhcic7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQ1JFQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9PUkRFUl9NVVRBVElPTigkdG9rZW46IFN0cmluZyEpIHtcclxuICAgIGNoZWNrb3V0KHRva2VuOiAkdG9rZW4pIHtcclxuICAgICAgaWRcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuICBjb25zdCBbY2hlY2tvdXQsIHsgZXJyb3I6IGdyYXBoUUxFcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgQ1JFQVRFX09SREVSX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICByZWZldGNoUXVlcmllczogW1xyXG4gICAgICAgIHsgcXVlcnk6IFVTRVJfT1JERVJTX1FVRVJZIH0sXHJcbiAgICAgICAgJ1VTRVJfT1JERVJTX1FVRVJZJyxcclxuICAgICAgICB7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfSxcclxuICAgICAgICAnQ1VSUkVOVF9VU0VSX1FVRVJZJyxcclxuICAgICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUlkgfSxcclxuICAgICAgICAnQUxMX1BST0RVQ1RTX1FVRVJZJyxcclxuICAgICAgICB7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0sXHJcbiAgICAgICAgJ1BBR0lOQVRJT05fUVVFUlknLFxyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIC8vIDEuIFN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCB0dXJuIHRoZSBsb2FkZXIgb25lXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gMi4gU3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvLyAzLiBDcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKFRva2VuIGNvbWVzIGJhY2sgaGVyZSBpZiBzdWNjZXNzZnVsKVxyXG4gICAgY29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG4gICAgICB0eXBlOiAnY2FyZCcsXHJcbiAgICAgIGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG4gICAgfSk7XHJcbiAgICAvLyA0LiBIYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgblByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybjsgLy8gc3RvcHMgdGhlIGNoZWNrb3V0IGZyb20gaGFwcGVuaW5nXHJcbiAgICB9XHJcbiAgICAvLyA1LiBTZW5kIHRoZSB0b2tlbiBmcm9tIHN0ZXAgMyB0byBvdXIga2V5c3RvbmUgc2VydmVyLCB2aWEgYSBjdXN0b20gbXV0YXRpb24hXHJcbiAgICBjb25zdCBvcmRlciA9IGF3YWl0IGNoZWNrb3V0KHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgdG9rZW46IHBheW1lbnRNZXRob2QuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIDYuIENoYW5nZSB0aGUgcGFnZSB0byB2aWV3IHRoZSBvcmRlclxyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogYC9vcmRlci9baWRdYCxcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBpZDogb3JkZXIuZGF0YS5jaGVja291dC5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gNy4gQ2xvc2UgdGhlIGNhcnRcclxuICAgIGNsb3NlQ2FydCgpO1xyXG5cclxuICAgIC8vIDguIHR1cm4gdGhlIGxvYWRlciBvZmZcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgblByb2dyZXNzLmRvbmUoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hlY2tvdXRGb3JtU3R5bGVzIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8TG9hZEJhciBsb2FkPXtsb2FkaW5nfSAvPlxyXG4gICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgIHtncmFwaFFMRXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntncmFwaFFMRXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICA8Q2FyZEVsZW1lbnQgLz5cclxuICAgICAgPFNpY2tCdXR0b24gY2xhc3NOYW1lPVwibm91bmRlcmxpbmVcIj5DaGVjayBPdXQ8L1NpY2tCdXR0b24+XHJcbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cclxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgPC9FbGVtZW50cz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBDaGVja291dCB9O1xyXG4iLCJpbXBvcnQgTmF2TWVudSBmcm9tICcuL05hdic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIDxOYXZNZW51IC8+O1xyXG59XHJcbiIsImltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IE5hdlN0eWxlcyBmcm9tICcuL3N0eWxlcy9OYXZTdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IFNpZ25PdXQgZnJvbSAnLi9TaWduT3V0JztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgQ2FydENvdW50IGZyb20gJy4vQ2FydENvdW50JztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdk1lbnUoKSB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB7IG9wZW5DYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXJcclxuICAgICAgYmc9XCJsaWdodFwiXHJcbiAgICAgIGV4cGFuZD1cImxnXCJcclxuICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDAwMDAwJyB9fVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJJbmRpZSBCdWJiYSBMb2dvXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyODBweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXZTdHlsZXM+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5NYXJrZXRwbGFjZTwvTGluaz5cclxuICAgICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlbGxcIj5TZWxsaW5nPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vcmRlcnNcIj5CdXlpbmc8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj5BY2NvdW50PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxTaWduT3V0IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29wZW5DYXJ0fT5cclxuICAgICAgICAgICAgICAgICAg8J+bklxyXG4gICAgICAgICAgICAgICAgICA8Q2FydENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ9e3VzZXIuY2FydC5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAodGFsbHksIGNhcnRJdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWxseSArIChjYXJ0SXRlbS5wcm9kdWN0ID8gY2FydEl0ZW0ucXVhbnRpdHkgOiAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1NpZ25JblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3RlclwiPlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENhcnQgLz5cclxuICAgICAgICAgIDwvTmF2U3R5bGVzPlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuaHRtbHtcclxuICAtLXJlZDojZmYwMDAwO1xyXG4gIC0tYmxhY2s6IzM5MzkzOTtcclxuICAtLWdyZXk6IzNBM0EzQTtcclxuICAtLWxpZ2h0R3JleTojZTFlMWUxXHJcbiAgLS1vZmZXaGl0ZTojZWRlZGVkO1xyXG4gIC0tbWF4V2lkdGg6IDE2MDBweDtcclxuICAtLWJzOiAwIDEycHggMjRweCAwIHJnYmEoMCwwLDAsMC4wOSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDYyLjUlO1xyXG59XHJcbiosKjpiZWZvcmUsICo6YWZ0ZXJ7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5ib2R5e1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCAsIC0tYXBwbGUtc3lzdGVtLCBcclxuICBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBcclxuICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgY29sb3I6ICMwMTUyNjg7XHJcbn1cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMTUyNjg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGZvbnQtZmFtaWx5OidyYWRuaWthX25leHQnICwtYXBwbGUtc3lzdGVtLCBcclxuICBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBcclxuICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lclN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMjVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8SW5uZXJTdHlsZXM+e2NoaWxkcmVufTwvSW5uZXJTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5QYWdlLnByb3BUeXBlcyA9IHtcclxuICBjb29sOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUllfU0VMTCA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUllfU0VMTCgkdGhpc1VzZXJJZDogSUQpIHtcclxuICAgIHByb2R1Y3RzKHdoZXJlOiB7IHVzZXI6IHsgaWQ6IHsgZXF1YWxzOiAkdGhpc1VzZXJJZCB9IH0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgY29sdW1uLWdhcDogMjVweDtcclxuICByb3ctZ2FwOiAyNXB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgY29sdW1uLWdhcDogMTAlO1xyXG4gICAgcm93LWdhcDogMiU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBjb2x1bW4tZ2FwOiA3JTtcclxuICAgIHJvdy1nYXA6IDIlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMjglIDI4JTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1NlbGwoKSB7XHJcbiAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuXHJcbiAgY29uc3QgdGhlSWQgPSB0aGVVc2VyPy5pZDtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUllfU0VMTCwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRoaXNVc2VySWQ6IHRoZUlkLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGF0YS5wcm9kdWN0cy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PlxyXG4gICAgICAgICAgWW91IGhhdmUgbm8gcHJvZHVjdHMgZm9yIHNhbGUhXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgKX1cclxuICAgICAge2RhdGEucHJvZHVjdHMubGVuZ3RoICE9IDAgJiYgKFxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDE1MjY4JyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBJJ20gU2VsbGluZ1xyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxQcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICAgICAge2RhdGEucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IHBhZ2VUeXBlPVwic2VsbFwiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQmlnQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZUNhcnRJdGVtKHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVDYXJ0SXRlbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1vdmVGcm9tQ2FydCh7IGlkIH0pIHtcclxuICBjb25zdCBbcmVtb3ZlRnJvbUNhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgdXBkYXRlLFxyXG4gICAgLy8gb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XHJcbiAgICAvLyAgIGRlbGV0ZUNhcnRJdGVtOiB7XHJcbiAgICAvLyAgICAgX190eXBlbmFtZTogJ0NhcnRJdGVtJyxcclxuICAgIC8vICAgICBpZCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCaWdCdXR0b25cclxuICAgICAgb25DbGljaz17cmVtb3ZlRnJvbUNhcnR9XHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgdGl0bGU9XCJSZW1vdmUgVGhpcyBJdGVtIGZyb20gQ2FydFwiXHJcbiAgICA+XHJcbiAgICAgICZ0aW1lcztcclxuICAgIDwvQmlnQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVVNFUl9PUkRFUlNfUVVFUlkgfSBmcm9tICcuLi9wYWdlcy9vcmRlcnMnO1xyXG5pbXBvcnQgeyBBTExfUFJPRFVDVFNfUVVFUlkgfSBmcm9tICcuL1Byb2R1Y3RzJztcclxuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZX1NFTEwgfSBmcm9tICcuL1Byb2R1Y3RzU2VsbCc7XHJcbmltcG9ydCB7IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0gZnJvbSAnLi9Qcm9kdWN0c1NvbGQnO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgU0lHTl9PVVRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24ge1xyXG4gICAgZW5kU2Vzc2lvblxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25PdXQoKSB7XHJcbiAgY29uc3QgW3NpZ25vdXRdID0gdXNlTXV0YXRpb24oU0lHTl9PVVRfTVVUQVRJT04sIHtcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbXHJcbiAgICAgIHsgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9LFxyXG4gICAgICBDVVJSRU5UX1VTRVJfUVVFUlksXHJcbiAgICAgIHsgcXVlcnk6IEFMTF9QUk9EVUNUU19RVUVSWV9TT0xEIH0sXHJcbiAgICAgIEFMTF9QUk9EVUNUU19RVUVSWV9TT0xELFxyXG4gICAgICB7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUllfU0VMTCB9LFxyXG4gICAgICBBTExfUFJPRFVDVFNfUVVFUllfU0VMTCxcclxuICAgICAgeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZIH0sXHJcbiAgICAgIEFMTF9QUk9EVUNUU19RVUVSWSxcclxuICAgICAgeyBxdWVyeTogVVNFUl9PUkRFUlNfUVVFUlkgfSxcclxuICAgICAgVVNFUl9PUkRFUlNfUVVFUlksXHJcbiAgICBdLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBpZD1cImxvZ091dFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWdub3V0fSBzdHlsZT17eyBjb2xvcjogJyMwMDc3YTAnIH19PlxyXG4gICAgICBMb2ctb3V0XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2FydFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgJHsocHJvcHMpID0+IHByb3BzLm9wZW4gJiYgYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtgfTtcbiAgaGVhZGVyIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIC0tYXBwbGUtc3lzdGVtO1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgdmFyKC0tYmxhY2spO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cbiAgZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiB0aGluIHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiB0aGluIHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcmlnaHQ6IDdweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsb3NlQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE5hdlN0eWxlcyA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGEsXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiAjMDA3N2EwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmF5KTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTIwZGVnKTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZGU2ZmY7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMSwgLTAuNjUsIDAsIDIuMzEpO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgT3JkZXJJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxuICBib3gtc2hhZG93OiB2YXIoLS1icyk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcbiAgJjo6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA3N2EwIDAlLCAjZmRlNmZmIDgwJSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBoMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cblxuICAuaW1hZ2VzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5vcmRlci1tZXRhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjBweCwgMWZyKSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJiA+ICoge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICB9XG4gICAgc3Ryb25nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVySXRlbVN0eWxlcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTaWNrQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMwMDc3YTAgMCUsXG4gICAgI2ZkZTZmZiA0MCVcbiAgKSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW0gIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBza2V3KC0yZGVnKSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAmW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNpY2tCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3VwcmVtZSA9IHN0eWxlZC5oM2BcbiAgY29sb3I6ICMwMDc3YTA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICB0cmFuc2Zvcm06IHNrZXcoLTNkZWcpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFN1cHJlbWU7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlcjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIC8vIFRoaXMgaXMgb3VyIG93biBjdXN0b20gcHJvdmlkZXIhIFdlIHdpbGwgc3RvcmUgZGF0YSAoc3RhdGUpIGFuZCBmdW5jdGlvbmFsaXR5ICh1cGRhdGVycykgaW4gaGVyZSBhbmQgYW55b25lIGNhbiBhY2Nlc3MgaXQgdmlhIHRoZSBjb25zdW1lciFcclxuXHJcbiAgLy8gQ2xvc2VkIGNhcnQgYnkgZGVmYXVsdFxyXG4gIGNvbnN0IFtjYXJ0T3Blbiwgc2V0Q2FydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVDYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4oIWNhcnRPcGVuKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlQ2FydCgpIHtcclxuICAgIHNldENhcnRPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5DYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvY2FsU3RhdGVQcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGNhcnRPcGVuLFxyXG4gICAgICAgIHNldENhcnRPcGVuLFxyXG4gICAgICAgIHRvZ2dsZUNhcnQsXHJcbiAgICAgICAgY2xvc2VDYXJ0LFxyXG4gICAgICAgIG9wZW5DYXJ0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG4vLyBtYWtlIGEgY3VzdG9tIGhvb2sgZm9yIGFjY2Vzc2luZyB0aGUgY2FydCBsb2NhbCBzdGF0ZVxyXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG4gIC8vIFdlIHVzZSBhIGNvbnN1bWVyIGhlcmUgdG8gYWNjZXNzIHRoZSBsb2NhbCBzdGF0ZVxyXG4gIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBhbGw7XHJcbn1cclxuZXhwb3J0IHsgQ2FydFN0YXRlUHJvdmlkZXIsIHVzZUNhcnQgfTtcclxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ0BhcG9sbG8vbGluay1lcnJvcic7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3InO1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50JztcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuaW1wb3J0IHsgZW5kcG9pbnQsIHByb2RFbmRwb2ludCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudCh7IGhlYWRlcnMsIGluaXRpYWxTdGF0ZSB9KSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rOiBBcG9sbG9MaW5rLmZyb20oW1xuICAgICAgb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICAgICAgICBpZiAoZ3JhcGhRTEVycm9ycylcbiAgICAgICAgICBncmFwaFFMRXJyb3JzLmZvckVhY2goKHsgbWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoIH0pID0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICBpZiAobmV0d29ya0Vycm9yKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9LiBCYWNrZW5kIGlzIHVucmVhY2hhYmxlLiBJcyBpdCBydW5uaW5nP2BcbiAgICAgICAgICApO1xuICAgICAgfSksXG4gICAgICAvLyB0aGlzIHVzZXMgYXBvbGxvLWxpbmstaHR0cCB1bmRlciB0aGUgaG9vZCwgc28gYWxsIHRoZSBvcHRpb25zIGhlcmUgY29tZSBmcm9tIHRoYXQgcGFja2FnZVxuICAgICAgY3JlYXRlVXBsb2FkTGluayh7XG4gICAgICAgIHVyaTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBlbmRwb2ludCA6IHByb2RFbmRwb2ludCxcbiAgICAgICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGFzcyB0aGUgaGVhZGVycyBhbG9uZyBmcm9tIHRoaXMgcmVxdWVzdC4gVGhpcyBlbmFibGVzIFNTUiB3aXRoIGxvZ2dlZCBpbiBzdGF0ZVxuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSksXG4gICAgXSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgLy8gVE9ETzogV2Ugd2lsbCBhZGQgdGhpcyB0b2dldGhlciFcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGNyZWF0ZUNsaWVudCwgeyBnZXREYXRhRnJvbVRyZWUgfSk7XG4iLCJpbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgU1NSUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL25wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcclxuaW1wb3J0IHsgQ2FydFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsbyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTU1JQcm92aWRlcj5cclxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgICA8Q2FydFN0YXRlUHJvdmlkZXI+XHJcbiAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgIDwvQ2FydFN0YXRlUHJvdmlkZXI+XHJcbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICA8L1NTUlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICB9XHJcbiAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoTXlBcHApO1xyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL21vbmV5JztcclxuaW1wb3J0IE9yZGVySXRlbVN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMnO1xyXG5pbXBvcnQgUGxlYXNlU2lnbkluIGZyb20gJy4uL2NvbXBvbmVudHMvUGxlYXNlU2lnbkluJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcic7XHJcbmltcG9ydCBMb2FkQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZEJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfT1JERVJTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFVTRVJfT1JERVJTX1FVRVJZKCR0aGlzVXNlcklkOiBJRCkge1xyXG4gICAgb3JkZXJzKFxyXG4gICAgICB3aGVyZTogeyB1c2VyOiB7IGlkOiB7IGVxdWFsczogJHRoaXNVc2VySWQgfSB9IH1cclxuICAgICAgb3JkZXJCeTogW3sgdGltZVN0YW1wOiBkZXNjIH1dXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgIHBob3RvIHtcclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBPcmRlclVsID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDRyZW07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKSB7XHJcbiAgcmV0dXJuIG9yZGVyLml0ZW1zLnJlZHVjZSgodGFsbHksIGl0ZW0pID0+IHRhbGx5ICsgaXRlbS5xdWFudGl0eSwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyc1BhZ2UoKSB7XHJcbiAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCBwb3N0Y29kZSA9IHRoZVVzZXI/LnBvc3Rjb2RlO1xyXG4gIGNvbnN0IHRoZUlkID0gdGhlVXNlcj8uaWQ7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoVVNFUl9PUkRFUlNfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0aGlzVXNlcklkOiB0aGVJZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZEJhciBsb2FkPXtsb2FkaW5nfSAvPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgY29uc3QgeyBvcmRlcnMgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQbGVhc2VTaWduSW4+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+WW91ciBPcmRlcnMgKHtvcmRlcnMubGVuZ3RofSk8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAge29yZGVycy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICBZb3UgaGF2ZSBwbGFjZWQge29yZGVycy5sZW5ndGh9IG9yZGVycyFcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdub3JtYWwnIH19PlxyXG4gICAgICAgICAgICAgIENoZWNrIG91dCBvdXJ7JyAnfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6ICdwaW5rJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICBtYXJrZXRwbGFjZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgICAgICAgIHRvIHN0YXJ0IGJ1eWluZyFcclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2JhYnkuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJJbmRpZSBCdWJiYSBDcnlpbmcgQmFieVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1MDhweFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNzA0cHhcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge29yZGVycy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICBZb3UgaGF2ZSBwbGFjZWQge29yZGVycy5sZW5ndGh9IG9yZGVyIVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtvcmRlcnMubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIFlvdSBoYXZlIHBsYWNlZCB7b3JkZXJzLmxlbmd0aH0gb3JkZXJzIVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsob3JkZXJzLmxlbmd0aCA+IDAgJiYgcG9zdGNvZGUgIT09IG51bGwpIHx8XHJcbiAgICAgICAgICAgIChwb3N0Y29kZSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVuc3VyZSB5b3VyIGRlbGl2ZXJ5IGFkZHJlc3MgaXMgdXAgdG8gZGF0ZSBpbiB5b3VyXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50IVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPE9yZGVyVWw+XHJcbiAgICAgICAgICAgIHtvcmRlcnMubWFwKChvcmRlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxPcmRlckl0ZW1TdHlsZXMga2V5PXtvcmRlci5pZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdW50SXRlbXNJbkFuT3JkZXIob3JkZXIpfSBJdGVtczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubGVuZ3RofSBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtYXRNb25leShvcmRlci50b3RhbCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BpbWFnZS0ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9PcmRlckl0ZW1TdHlsZXM+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9PcmRlclVsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9QbGVhc2VTaWduSW4+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2xpbmstZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXdpdGgtYXBvbGxvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==