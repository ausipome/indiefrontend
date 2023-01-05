(function() {
var exports = {};
exports.id = "pages/account";
exports.ids = ["pages/account"];
exports.modules = {

/***/ "./components/StripeAccount.js":
/*!*************************************!*\
  !*** ./components/StripeAccount.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StripeAccount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadBar */ "./components/LoadBar.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\components\\StripeAccount.js";




const AccountStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "StripeAccount__AccountStyles",
  componentId: "sc-1adi3du-0"
})(["@media (min-width:900px){width:80%;margin:0 auto;}"]);
const StripeAccStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "StripeAccount__StripeAccStyles",
  componentId: "sc-1adi3du-1"
})(["font-size:1.3em;line-height:1.5;color:black;border:thin solid #eee;box-shadow:0 0 5px 3px rgba(0,0,0,0.05);text-align:center;padding:20px;margin-bottom:50px;@media (min-width:900px){width:60%;margin:0 auto;margin-bottom:50px;}"]);
function StripeAccount() {
  const theUser = (0,_User__WEBPACK_IMPORTED_MODULE_2__.useUser)();
  const theName = theUser === null || theUser === void 0 ? void 0 : theUser.name;
  const theEmail = theUser === null || theUser === void 0 ? void 0 : theUser.email;
  const acc = theUser === null || theUser === void 0 ? void 0 : theUser.stripeId;
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: futureRequirements,
    1: setFutureRequirements
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: dataBalance,
    1: setDataBalance
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: dataLink,
    1: setDataLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: dataPayout,
    1: setDataPayout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: payoutNum,
    1: setPayoutNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: isLoading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
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
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadBar__WEBPACK_IMPORTED_MODULE_4__.default, {
    load: isLoading
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 27
  }, this);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        fontWeight: 'normal',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 158
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'black',
        padding: '25px',
        marginBottom: '0px'
      },
      children: ["If you are currently selling, or plan to sell on Indie Bubba, please follow the link below to update KYC verification ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 125
      }, this), " and add the bank account you would like your funds paid in to."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        marginBottom: '40px',
        marginTop: '0px',
        paddingBottom: '20px',
        borderBottom: 'solid thin #000'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StripeAccStyles, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
          }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 154
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 169
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
      }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
  if (data && futureRequirements.length > 0) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        fontWeight: 'normal',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 162
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        color: 'black',
        padding: '25px',
        marginBottom: '0px'
      },
      children: ["Please follow the link below to update KYC verification. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 68
      }, this), " Thank you!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        textAlign: 'center',
        fontSize: '1.2em',
        marginBottom: '40px',
        marginTop: '0px',
        paddingBottom: '20px',
        borderBottom: 'solid thin #000'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StripeAccStyles, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
          }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 158
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 173
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
      }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 144
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StripeAccStyles, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
          }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 164
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 179
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
      }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      style: {
        textAlign: 'center',
        borderBottom: 'solid thin #000',
        paddingBottom: '10px',
        marginTop: '12px',
        lineHeight: '1.5em'
      },
      children: [theName, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 142
      }, this), " ", theEmail]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StripeAccStyles, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          marginBottom: '0px'
        },
        children: ["Account balance ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        style: {
          margin: '0 auto',
          textAlign: 'left'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [payoutNum === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
          }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 162
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 177
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              style: {
                color: 'green'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: ["\xA3", (payout.amount / 100).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: "\xA0\xA0\xA0\xA0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
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
      }, this), payoutNum != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdateUser; }
/* harmony export */ });
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






const UPDATE_USER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
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
  const theUser = (0,_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();
  const id = theUser === null || theUser === void 0 ? void 0 : theUser.id;
  console.log(id);
  const [updateUser, {
    data,
    error,
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPDATE_USER_MUTATION);
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_3__.default)({
    address: theUser === null || theUser === void 0 ? void 0 : theUser.address,
    town: theUser === null || theUser === void 0 ? void 0 : theUser.town,
    county: theUser === null || theUser === void 0 ? void 0 : theUser.county,
    postcode: theUser === null || theUser === void 0 ? void 0 : theUser.postcode
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_4__.default, {
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Postal Address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        id: "updateMessage",
        style: {
          fontWeight: 'normal',
          color: 'red'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
        error: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "address",
          children: ["Address", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "town",
          children: ["Town", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "county",
          children: ["County", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "postcode",
          children: ["Postcode", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AccountPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
/* harmony import */ var _components_UpdateUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UpdateUser */ "./components/UpdateUser.js");
/* harmony import */ var _components_StripeAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StripeAccount */ "./components/StripeAccount.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\User\\Documents\\indieBubba\\frontend\\pages\\account.js";





function AccountPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StripeAccount__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateUser__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-ad777a","vendors-node_modules_next_image_js","components_ErrorMessage_js-components_Footer_js-components_LoadBar_js-components_User_js-comp-c40948","components_PleaseSignIn_js"], function() { return __webpack_exec__("./pages/account.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvU3RyaXBlQWNjb3VudC5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL2NvbXBvbmVudHMvVXBkYXRlVXNlci5qcyIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC8uL3BhZ2VzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kaWUtYnViYmEtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRpZS1idWJiYS1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2luZGllLWJ1YmJhLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJBY2NvdW50U3R5bGVzIiwic3R5bGVkIiwiU3RyaXBlQWNjU3R5bGVzIiwiU3RyaXBlQWNjb3VudCIsInRoZVVzZXIiLCJ1c2VVc2VyIiwidGhlTmFtZSIsIm5hbWUiLCJ0aGVFbWFpbCIsImVtYWlsIiwiYWNjIiwic3RyaXBlSWQiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiZnV0dXJlUmVxdWlyZW1lbnRzIiwic2V0RnV0dXJlUmVxdWlyZW1lbnRzIiwiZGF0YUJhbGFuY2UiLCJzZXREYXRhQmFsYW5jZSIsImRhdGFMaW5rIiwic2V0RGF0YUxpbmsiLCJkYXRhUGF5b3V0Iiwic2V0RGF0YVBheW91dCIsInBheW91dE51bSIsInNldFBheW91dE51bSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VMYXlvdXRFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYWNjb3VudCIsImRldGFpbHNfc3VibWl0dGVkIiwicmVxdWlyZW1lbnRzIiwiZXZlbnR1YWxseV9kdWUiLCJwZW5kaW5nQmFsYW5jZSIsImF2YWlsYWJsZSIsImFtb3VudCIsInRvRml4ZWQiLCJwYXlvdXRzIiwibGVuZ3RoIiwiYWNjb3VudExpbmsiLCJ1cmwiLCJ0ZXh0QWxpZ24iLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsImxpbmVIZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsIm1hcmdpbiIsIm1hcCIsInBheW91dCIsImkiLCJBUmRhdGUiLCJEYXRlIiwiYXJyaXZhbF9kYXRlIiwidG9EYXRlU3RyaW5nIiwiVVBEQVRFX1VTRVJfTVVUQVRJT04iLCJncWwiLCJVcGRhdGVVc2VyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlVXNlciIsImVycm9yIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlRm9ybSIsImFkZHJlc3MiLCJ0b3duIiwiY291bnR5IiwicG9zdGNvZGUiLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInByZXZlbnREZWZhdWx0IiwidmFyaWFibGVzIiwiQWNjb3VudFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsYUFBYSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSwwREFBbkI7QUFNQSxNQUFNQyxlQUFlLEdBQUdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBPQUFyQjtBQWdCZSxTQUFTRSxhQUFULEdBQXdCO0FBQ25DLFFBQU1DLE9BQU8sR0FBR0MsOENBQU8sRUFBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFRyxJQUF6QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0osT0FBSCxhQUFHQSxPQUFILHVCQUFHQSxPQUFPLENBQUVLLEtBQTFCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHTixPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRU8sUUFBckI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxrQkFBRDtBQUFBLE9BQXFCQztBQUFyQixNQUE4Q0YsK0NBQVEsQ0FBQyxDQUFELENBQTVEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDSiwrQ0FBUSxDQUFDLElBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDTyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QlIsK0NBQVEsQ0FBQyxJQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCViwrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7QUFD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UUFMaEI7QUFNRSxvQkFBUSxFQUFFUDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxDRixlQThDRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEyRUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTYyxXQUFULEdBQXVCO0FBQ3BDLHNCQUNFLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQsQzs7Ozs7Ozs7Ozs7QUNmRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9hY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTG9hZEJhciBmcm9tICcuL0xvYWRCYXInO1xyXG5cclxuXHJcbmNvbnN0IEFjY291bnRTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxud2lkdGg6ODAlO1xyXG5tYXJnaW46MCBhdXRvO1xyXG59XHJcbmA7XHJcbmNvbnN0IFN0cmlwZUFjY1N0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IHRoaW4gc29saWQgI2VlZTtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbndpZHRoOjYwJTtcclxubWFyZ2luOjAgYXV0bztcclxubWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4gIGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHJpcGVBY2NvdW50KCl7XHJcbiAgICBjb25zdCB0aGVVc2VyID0gdXNlVXNlcigpO1xyXG4gICAgY29uc3QgdGhlTmFtZSA9IHRoZVVzZXI/Lm5hbWU7XHJcbiAgICBjb25zdCB0aGVFbWFpbCA9IHRoZVVzZXI/LmVtYWlsO1xyXG4gICAgY29uc3QgYWNjID0gdGhlVXNlcj8uc3RyaXBlSWQ7XHJcbiAgXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtmdXR1cmVSZXF1aXJlbWVudHMsIHNldEZ1dHVyZVJlcXVpcmVtZW50c10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtkYXRhQmFsYW5jZSwgc2V0RGF0YUJhbGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZGF0YUxpbmssIHNldERhdGFMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RhdGFQYXlvdXQsIHNldERhdGFQYXlvdXRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcGF5b3V0TnVtLCBzZXRQYXlvdXROdW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIFxyXG4gICAgdXNlTGF5b3V0RWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgIGZldGNoKGAvYXBpL3N0cmlwZS8ke2FjY31gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldERhdGEoZGF0YS5hY2NvdW50LmRldGFpbHNfc3VibWl0dGVkKTtcclxuICAgICAgICAgIHNldEZ1dHVyZVJlcXVpcmVtZW50cyhkYXRhLmFjY291bnQucmVxdWlyZW1lbnRzLmV2ZW50dWFsbHlfZHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgZmV0Y2goYC9hcGkvYmFsYW5jZS8ke2FjY31gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YUJhbGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICBzZXREYXRhQmFsYW5jZSgoZGF0YUJhbGFuY2UucGVuZGluZ0JhbGFuY2UuYXZhaWxhYmxlLlswXS5hbW91bnQvMTAwKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICBmZXRjaChgL2FwaS9wYXlvdXQvJHthY2N9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGFQYXlvdXQpID0+IHtcclxuICAgICAgICAgICAgICBzZXREYXRhUGF5b3V0KGRhdGFQYXlvdXQucGF5b3V0cy5kYXRhKTtcclxuICAgICAgICAgICAgICBzZXRQYXlvdXROdW0oZGF0YVBheW91dC5wYXlvdXRzLmRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICBmZXRjaChgL2FwaS9saW5rLyR7YWNjfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhTGluaykgPT4ge1xyXG4gICAgICAgICAgICAgIHNldERhdGFMaW5rKGRhdGFMaW5rLmFjY291bnRMaW5rLnVybCk7XHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8TG9hZEJhciBsb2FkPXtpc0xvYWRpbmd9Lz47XHJcblxyXG4gIGlmICghZGF0YSlcclxuICAgIHJldHVybihcclxuICAgIDxBY2NvdW50U3R5bGVzPlxyXG4gICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMDAnLHBhZGRpbmdCb3R0b206JzEwcHgnLGZvbnRXZWlnaHQ6J25vcm1hbCcsbWFyZ2luVG9wOicxMnB4JyxsaW5lSGVpZ2h0OicxLjVlbSd9fT57dGhlTmFtZX0gPGJyIC8+IHt0aGVFbWFpbH08L2gyPlxyXG4gICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsY29sb3I6J3JlZCcsZm9udFNpemU6JzEuMmVtJ319PlxyXG4gICAgICBEbyB5b3UgcGxhbiBvbiBzZWxsaW5nIG9uIEluZGllIEJ1YmJhPyBJZiB5ZXMsIHdlIG5lZWQgc29tZSBtb3JlIGluZm9ybWF0aW9uIGZyb20geW91IVxyXG4gICAgPC9wPlxyXG4gICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsZm9udFNpemU6JzEuMmVtJyxjb2xvcjonYmxhY2snLHBhZGRpbmc6JzI1cHgnLG1hcmdpbkJvdHRvbTonMHB4Jyx9fT5cclxuICAgICAgSWYgeW91IGFyZSBjdXJyZW50bHkgc2VsbGluZywgb3IgcGxhbiB0byBzZWxsIG9uIEluZGllIEJ1YmJhLCBwbGVhc2UgZm9sbG93IHRoZSBsaW5rIGJlbG93IHRvIHVwZGF0ZSBLWUMgdmVyaWZpY2F0aW9uIDxiciAvPiBhbmQgYWRkIHRoZSBiYW5rXHJcbiAgICAgIGFjY291bnQgeW91IHdvdWxkIGxpa2UgeW91ciBmdW5kcyBwYWlkIGluIHRvLjwvcD5cclxuICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsZm9udFNpemU6JzEuMmVtJyxtYXJnaW5Cb3R0b206JzQwcHgnLG1hcmdpblRvcDonMHB4JyxwYWRkaW5nQm90dG9tOicyMHB4Jyxib3JkZXJCb3R0b206ICdzb2xpZCB0aGluICMwMDAnfX0+PGEgaHJlZj17ZGF0YUxpbmt9IHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLG1hcmdpblRvcDonMHB4J319PlxyXG4gICAgICAgIFVwZGF0ZSBBY2NvdW50XHJcbiAgICAgIDwvYT5cclxuICAgIDwvcD5cclxuICAgIDxTdHJpcGVBY2NTdHlsZXM+IFxyXG4gICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzBweCd9fT5BY2NvdW50IGJhbGFuY2UgPHNwYW4gc3R5bGU9e3tjb2xvcjonZ3JlZW4nfX0+JnBvdW5kO3tkYXRhQmFsYW5jZX08L3NwYW4+PC9wPlxyXG4gICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMC44ZW0nLGZvbnRTdHlsZTonaXRhbGljJyxtYXJnaW5Ub3A6JzBweCcsY29sb3I6J2dyZXknLGJvcmRlckJvdHRvbTonc29saWQgdGhpbiAjMDAwMDAwJywgcGFkZGluZ0JvdHRvbTonMjBweCd9fT5GdW5kcyBhcmUgcGFpZCBvdXQgYXV0b21hdGljYWxseSBpbnRvIHlvdXIgYmFuayBhY2NvdW50IGF0IHRoZSBlbmQgb2YgZWFjaCB3b3JraW5nIGRheSE8L3A+XHJcbiAgICA8aDMgc3R5bGU9e3tmb250V2VpZ2h0Oidub3JtYWwnLG1hcmdpbkJvdHRvbTonMHB4Jyxjb2xvcjonIzAxNTI2OCd9fT5SZWNlbnQgUGF5b3V0cyB0byBCYW5rPC9oMz5cclxuICAgIDx0YWJsZSBzdHlsZT17e21hcmdpbjonMCBhdXRvJyx0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICA8dGJvZHk+XHJcbiAgICB7cGF5b3V0TnVtID09PSAwICYmICggPHRyPjx0ZCByb3dTcGFuPSczJyBzdHlsZT17e2NvbG9yOidyZWQnLGZvbnRTdHlsZTonaXRhbGljJ319PlRoZXJlIGFyZSBubyByZWNlbnQgcGF5b3V0cyE8L3RkPjwvdHI+ICl9e3BheW91dE51bSAhPSAwICYmICggPHRyPjx0ZD5BbW91bnQ8L3RkPjx0ZD48L3RkPjx0ZD5FeHBlY3RlZDwvdGQ+PC90cj4pfVxyXG4gICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YVBheW91dD8ubWFwKChwYXlvdXQsIGkpID0+IHtcclxuICAgICAgICBsZXQgQVJkYXRlID0gbmV3IERhdGUocGF5b3V0LmFycml2YWxfZGF0ZSoxMDAwKTtcclxuICAgICAgICAgIEFSZGF0ZT1BUmRhdGUudG9EYXRlU3RyaW5nKCk7XHRcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPHRyIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319IGtleT17aX0+XHJcbiAgICAgICAgICA8dGQ+JnBvdW5kO3socGF5b3V0LmFtb3VudC8xMDApLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L3RkPlxyXG4gICAgICAgICAgPHRkPntBUmRhdGV9PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbntwYXlvdXROdW0gIT0gMCAmJiAoPHAgc3R5bGU9e3tmb250U2l6ZTonMC42ZW0nLGZvbnRTdHlsZTonaXRhbGljJyxtYXJnaW5Ub3A6JzBweCcsY29sb3I6J2dyZXknLHBhZGRpbmdCb3R0b206JzIwcHgnfX0+RXhwZWN0ZWQgaXMgYW4gZXN0aW1hdGlvbiwgaW5pdGlhbCBwYXlvdXRzIG1heSB0YWtlIGxvbmdlciE8L3A+KX1cclxuICAgIDwvU3RyaXBlQWNjU3R5bGVzPlxyXG4gICAgPC9BY2NvdW50U3R5bGVzPlxyXG4pO1xyXG5pZiAoZGF0YSAmJiBmdXR1cmVSZXF1aXJlbWVudHMubGVuZ3RoID4gMClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBY2NvdW50U3R5bGVzPlxyXG4gICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDAwJyxwYWRkaW5nQm90dG9tOicxMHB4Jyxmb250V2VpZ2h0Oidub3JtYWwnLG1hcmdpblRvcDonMTJweCcsbGluZUhlaWdodDonMS41ZW0nfX0+e3RoZU5hbWV9IDxiciAvPiB7dGhlRW1haWx9PC9oMj5cclxuICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxjb2xvcjoncmVkJyxmb250U2l6ZTonMS4yZW0nfX0+XHJcbiAgICAgICAgICBXZSBuZWVkIGEgbGl0dGxlIG1vcmUgaW5mb3JtYXRpb24gZnJvbSB5b3UhIEJhbmsgcGF5b3V0cyBtYXkgYmUgc3VzcGVuZGVkIGlmIHlvdXIgYWNjb3VudCBpcyBub3Qga2VwdCB1cCB0byBkYXRlLiAgXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLGZvbnRTaXplOicxLjJlbScsY29sb3I6J2JsYWNrJyxwYWRkaW5nOicyNXB4JyxtYXJnaW5Cb3R0b206JzBweCcsfX0+XHJcbiAgICAgICAgICBQbGVhc2UgZm9sbG93IHRoZSBsaW5rIGJlbG93IHRvIHVwZGF0ZSBLWUMgdmVyaWZpY2F0aW9uLiA8YnIgLz4gVGhhbmsgeW91ITwvcD5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLGZvbnRTaXplOicxLjJlbScsbWFyZ2luQm90dG9tOic0MHB4JyxtYXJnaW5Ub3A6JzBweCcscGFkZGluZ0JvdHRvbTonMjBweCcsYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDAwJ319PjxhIGhyZWY9e2RhdGFMaW5rfSBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyxtYXJnaW5Ub3A6JzBweCd9fT5cclxuICAgICAgICAgICAgVXBkYXRlIEFjY291bnRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPFN0cmlwZUFjY1N0eWxlcz4gXHJcbiAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzBweCd9fT5BY2NvdW50IGJhbGFuY2UgPHNwYW4gc3R5bGU9e3tjb2xvcjonZ3JlZW4nfX0+JnBvdW5kO3tkYXRhQmFsYW5jZX08L3NwYW4+PC9wPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6JzAuOGVtJyxmb250U3R5bGU6J2l0YWxpYycsbWFyZ2luVG9wOicwcHgnLGNvbG9yOidncmV5Jyxib3JkZXJCb3R0b206J3NvbGlkIHRoaW4gIzAwMDAwMCcsIHBhZGRpbmdCb3R0b206JzIwcHgnfX0+RnVuZHMgYXJlIHBhaWQgb3V0IGF1dG9tYXRpY2FsbHkgaW50byB5b3VyIGJhbmsgYWNjb3VudCBhdCB0aGUgZW5kIG9mIGVhY2ggd29ya2luZyBkYXkhPC9wPlxyXG4gICAgICAgIDxoMyBzdHlsZT17e2ZvbnRXZWlnaHQ6J25vcm1hbCcsbWFyZ2luQm90dG9tOicwcHgnLGNvbG9yOicjMDE1MjY4J319PlJlY2VudCBQYXlvdXRzIHRvIEJhbms8L2gzPlxyXG4gICAgICAgIDx0YWJsZSBzdHlsZT17e21hcmdpbjonMCBhdXRvJyx0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtwYXlvdXROdW0gPT09IDAgJiYgKCA8dHI+PHRkIHJvd1NwYW49JzMnIHN0eWxlPXt7Y29sb3I6J3JlZCcsZm9udFN0eWxlOidpdGFsaWMnfX0+VGhlcmUgYXJlIG5vIHJlY2VudCBwYXlvdXRzITwvdGQ+PC90cj4gKX17cGF5b3V0TnVtICE9IDAgJiYgKCA8dHI+PHRkPkFtb3VudDwvdGQ+PHRkPjwvdGQ+PHRkPkV4cGVjdGVkPC90ZD48L3RyPil9XHJcbiAgICAgICAge1xyXG5cdFx0XHRcdFx0ZGF0YVBheW91dD8ubWFwKChwYXlvdXQsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IEFSZGF0ZSA9IG5ldyBEYXRlKHBheW91dC5hcnJpdmFsX2RhdGUqMTAwMCk7XHJcblx0ICAgICAgICAgIEFSZGF0ZT1BUmRhdGUudG9EYXRlU3RyaW5nKCk7XHRcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPHRyIHN0eWxlPXt7Y29sb3I6J2dyZWVuJ319IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPHRkPiZwb3VuZDt7KHBheW91dC5hbW91bnQvMTAwKS50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntBUmRhdGV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbntwYXlvdXROdW0gIT0gMCAmJiAoPHAgc3R5bGU9e3tmb250U2l6ZTonMC42ZW0nLGZvbnRTdHlsZTonaXRhbGljJyxtYXJnaW5Ub3A6JzBweCcsY29sb3I6J2dyZXknLHBhZGRpbmdCb3R0b206JzIwcHgnfX0+RXhwZWN0ZWQgaXMgYW4gZXN0aW1hdGlvbiwgaW5pdGlhbCBwYXlvdXRzIG1heSB0YWtlIGxvbmdlciE8L3A+KX1cclxuICAgICAgICA8L1N0cmlwZUFjY1N0eWxlcz5cclxuICAgICAgICA8L0FjY291bnRTdHlsZXM+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QWNjb3VudFN0eWxlcz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJywgYm9yZGVyQm90dG9tOiAnc29saWQgdGhpbiAjMDAwJyxwYWRkaW5nQm90dG9tOicxMHB4JyxtYXJnaW5Ub3A6JzEycHgnLGxpbmVIZWlnaHQ6JzEuNWVtJ319Pnt0aGVOYW1lfSA8YnIgLz4ge3RoZUVtYWlsfTwvaDI+XHJcbiAgICAgICAgICA8U3RyaXBlQWNjU3R5bGVzPiBcclxuICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzBweCd9fT5BY2NvdW50IGJhbGFuY2UgPHNwYW4gc3R5bGU9e3tjb2xvcjonZ3JlZW4nfX0+JnBvdW5kO3tkYXRhQmFsYW5jZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOicwLjZlbScsZm9udFN0eWxlOidpdGFsaWMnLG1hcmdpblRvcDonMHB4Jyxjb2xvcjonZ3JleScsYm9yZGVyQm90dG9tOidzb2xpZCB0aGluICMwMDAwMDAnLCBwYWRkaW5nQm90dG9tOicyMHB4J319PkZ1bmRzIGFyZSBwYWlkIG91dCBhdXRvbWF0aWNhbGx5IGludG8geW91ciBiYW5rIGFjY291bnQgYXQgdGhlIGVuZCBvZiBlYWNoIHdvcmtpbmcgZGF5ITwvcD5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7Zm9udFdlaWdodDonbm9ybWFsJyxtYXJnaW5Cb3R0b206JzBweCcsY29sb3I6JyMwMTUyNjgnfX0+UmVjZW50IFBheW91dHMgdG8gQmFuazwvaDM+XHJcbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17e21hcmdpbjonMCBhdXRvJyx0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7cGF5b3V0TnVtID09PSAwICYmICggPHRyPjx0ZCByb3dTcGFuPSczJyBzdHlsZT17e2NvbG9yOidyZWQnLGZvbnRTdHlsZTonaXRhbGljJ319PlRoZXJlIGFyZSBubyByZWNlbnQgcGF5b3V0cyE8L3RkPjwvdHI+ICl9e3BheW91dE51bSAhPSAwICYmICggPHRyPjx0ZD5BbW91bnQ8L3RkPjx0ZD48L3RkPjx0ZD5FeHBlY3RlZDwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXlvdXQ/Lm1hcCgocGF5b3V0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgQVJkYXRlID0gbmV3IERhdGUocGF5b3V0LmFycml2YWxfZGF0ZSoxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgQVJkYXRlPUFSZGF0ZS50b0RhdGVTdHJpbmcoKTtcdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3tjb2xvcjonZ3JlZW4nfX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPHRkPiZwb3VuZDt7KHBheW91dC5hbW91bnQvMTAwKS50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e0FSZGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICB7cGF5b3V0TnVtICE9IDAgJiYgKDxwIHN0eWxlPXt7Zm9udFNpemU6JzAuNmVtJyxmb250U3R5bGU6J2l0YWxpYycsbWFyZ2luVG9wOicwcHgnLGNvbG9yOidncmV5JyxwYWRkaW5nQm90dG9tOicyMHB4J319PkV4cGVjdGVkIGlzIGFuIGVzdGltYXRpb24sIGluaXRpYWwgcGF5b3V0cyBtYXkgdGFrZSBsb25nZXIhPC9wPil9XHJcbiAgICAgICAgICAgIDwvU3RyaXBlQWNjU3R5bGVzPlxyXG4gICAgICAgIDwvQWNjb3VudFN0eWxlcz5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8QWNjb3VudFN0eWxlcz5cclxuICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsIGJvcmRlckJvdHRvbTogJ3NvbGlkIHRoaW4gIzAwMCcscGFkZGluZ0JvdHRvbTonMTBweCcsbWFyZ2luVG9wOicxMnB4JyxsaW5lSGVpZ2h0OicxLjVlbSd9fT57dGhlTmFtZX0gPGJyIC8+IHt0aGVFbWFpbH08L2gyPlxyXG4gICAgICAgIDxTdHJpcGVBY2NTdHlsZXM+IFxyXG4gICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzBweCd9fT5BY2NvdW50IGJhbGFuY2UgPHNwYW4gc3R5bGU9e3tjb2xvcjonZ3JlZW4nfX0+JnBvdW5kO3tkYXRhQmFsYW5jZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTonMC42ZW0nLGZvbnRTdHlsZTonaXRhbGljJyxtYXJnaW5Ub3A6JzBweCcsY29sb3I6J2dyZXknLGJvcmRlckJvdHRvbTonc29saWQgdGhpbiAjMDAwMDAwJywgcGFkZGluZ0JvdHRvbTonMjBweCd9fT5GdW5kcyBhcmUgcGFpZCBvdXQgYXV0b21hdGljYWxseSBpbnRvIHlvdXIgYmFuayBhY2NvdW50IGF0IHRoZSBlbmQgb2YgZWFjaCB3b3JraW5nIGRheSE8L3A+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3tmb250V2VpZ2h0Oidub3JtYWwnLG1hcmdpbkJvdHRvbTonMHB4Jyxjb2xvcjonIzAxNTI2OCd9fT5SZWNlbnQgUGF5b3V0cyB0byBCYW5rPC9oMz5cclxuICAgICAgICAgIDx0YWJsZSBzdHlsZT17e21hcmdpbjonMCBhdXRvJyx0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtwYXlvdXROdW0gPT09IDAgJiYgKCA8dHI+PHRkIHJvd1NwYW49JzMnIHN0eWxlPXt7Y29sb3I6J3JlZCcsZm9udFN0eWxlOidpdGFsaWMnfX0+VGhlcmUgYXJlIG5vIHJlY2VudCBwYXlvdXRzITwvdGQ+PC90cj4gKX17cGF5b3V0TnVtICE9IDAgJiYgKCA8dHI+PHRkPkFtb3VudDwvdGQ+PHRkPjwvdGQ+PHRkPkV4cGVjdGVkPC90ZD48L3RyPil9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF5b3V0Py5tYXAoKHBheW91dCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBBUmRhdGUgPSBuZXcgRGF0ZShwYXlvdXQuYXJyaXZhbF9kYXRlKjEwMDApO1xyXG4gICAgICAgICAgICAgICAgQVJkYXRlPUFSZGF0ZS50b0RhdGVTdHJpbmcoKTtcdFxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8dHIgc3R5bGU9e3tjb2xvcjonZ3JlZW4nfX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDx0ZD4mcG91bmQ7eyhwYXlvdXQuYW1vdW50LzEwMCkudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e0FSZGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAge3BheW91dE51bSAhPSAwICYmICg8cCBzdHlsZT17e2ZvbnRTaXplOicwLjZlbScsZm9udFN0eWxlOidpdGFsaWMnLG1hcmdpblRvcDonMHB4Jyxjb2xvcjonZ3JleScscGFkZGluZ0JvdHRvbTonMjBweCd9fT5FeHBlY3RlZCBpcyBhbiBlc3RpbWF0aW9uLCBpbml0aWFsIHBheW91dHMgbWF5IHRha2UgbG9uZ2VyITwvcD4pfVxyXG4gICAgICAgICAgPC9TdHJpcGVBY2NTdHlsZXM+XHJcbiAgICAgIDwvQWNjb3VudFN0eWxlcz5cclxuICAgICAgXHJcbiAgICAgICk7XHJcblxyXG5cclxufSIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgVVBEQVRFX1VTRVJfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX1VTRVJfTVVUQVRJT04oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJGFkZHJlc3M6IFN0cmluZ1xyXG4gICAgJHRvd246IFN0cmluZ1xyXG4gICAgJGNvdW50eTogU3RyaW5nXHJcbiAgICAkcG9zdGNvZGU6IFN0cmluZ1xyXG4gICkge1xyXG4gICAgdXBkYXRlVXNlcihcclxuICAgICAgd2hlcmU6IHsgaWQ6ICRpZCB9XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhZGRyZXNzOiAkYWRkcmVzc1xyXG4gICAgICAgIHRvd246ICR0b3duXHJcbiAgICAgICAgY291bnR5OiAkY291bnR5XHJcbiAgICAgICAgcG9zdGNvZGU6ICRwb3N0Y29kZVxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgYWRkcmVzc1xyXG4gICAgICB0b3duXHJcbiAgICAgIGNvdW50eVxyXG4gICAgICBwb3N0Y29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVVzZXIoKSB7XHJcbiAgY29uc3QgdGhlVXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCBpZCA9IHRoZVVzZXI/LmlkO1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuXHJcbiAgY29uc3QgW3VwZGF0ZVVzZXIsIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfV0gPVxyXG4gICAgdXNlTXV0YXRpb24oVVBEQVRFX1VTRVJfTVVUQVRJT04pO1xyXG5cclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBhZGRyZXNzOiB0aGVVc2VyPy5hZGRyZXNzLFxyXG4gICAgdG93bjogdGhlVXNlcj8udG93bixcclxuICAgIGNvdW50eTogdGhlVXNlcj8uY291bnR5LFxyXG4gICAgcG9zdGNvZGU6IHRoZVVzZXI/LnBvc3Rjb2RlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVNZXNzYWdlJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVVc2VyKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgYWRkcmVzczogaW5wdXRzLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgdG93bjogaW5wdXRzLnRvd24sXHJcbiAgICAgICAgICAgICAgY291bnR5OiBpbnB1dHMuY291bnR5LFxyXG4gICAgICAgICAgICAgIHBvc3Rjb2RlOiBpbnB1dHMucG9zdGNvZGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZU1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnVXBkYXRlZCEnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDI+UG9zdGFsIEFkZHJlc3M8L2gyPlxyXG4gICAgICAgIDxoNCBpZD1cInVwZGF0ZU1lc3NhZ2VcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnbm9ybWFsJywgY29sb3I6ICdyZWQnIH19IC8+XHJcblxyXG4gICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxyXG4gICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgICAgICBBZGRyZXNzXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuYWRkcmVzc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG93blwiPlxyXG4gICAgICAgICAgICBUb3duXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInRvd25cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0b3duXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvd25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMudG93bn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY291bnR5XCI+XHJcbiAgICAgICAgICAgIENvdW50eVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb3VudHlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb3VudHlcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ291bnR5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmNvdW50eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9zdGNvZGVcIj5cclxuICAgICAgICAgICAgUG9zdGNvZGVcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicG9zdGNvZGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwb3N0Y29kZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3N0Y29kZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wb3N0Y29kZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgQWRkcmVzczwvYnV0dG9uPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlcXVlc3RSZXNldCBmcm9tICcuLi9jb21wb25lbnRzL1JlcXVlc3RSZXNldCc7XHJcbmltcG9ydCBQbGVhc2VTaWduSW4gZnJvbSAnLi4vY29tcG9uZW50cy9QbGVhc2VTaWduSW4nO1xyXG5pbXBvcnQgVXBkYXRlVXNlciBmcm9tICcuLi9jb21wb25lbnRzL1VwZGF0ZVVzZXInO1xyXG5pbXBvcnQgU3RyaXBlQWNjb3VudCBmcm9tICcuLi9jb21wb25lbnRzL1N0cmlwZUFjY291bnQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnRQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGxlYXNlU2lnbkluPlxyXG4gICAgICA8U3RyaXBlQWNjb3VudCAvPlxyXG4gICAgICA8VXBkYXRlVXNlciAvPlxyXG4gICAgICA8UmVxdWVzdFJlc2V0IC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvUGxlYXNlU2lnbkluPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9