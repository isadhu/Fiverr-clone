"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/Slide.tsx":
/*!******************************!*\
  !*** ./components/Slide.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slide; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var infinite_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! infinite-react-carousel */ \"(app-client)/./node_modules/infinite-react-carousel/lib/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-client)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n\n\n\n\nfunction Slide(param) {\n    let { children , slidesToShow , arrowsScroll  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center py-[100px] px-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[1400px] \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(infinite_react_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                slidesToShow: slidesToShow,\n                arrowsScroll: arrowsScroll,\n                autoplay: true,\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\Workspace\\\\NEXT.JS\\\\fiverr\\\\client\\\\components\\\\Slide.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Workspace\\\\NEXT.JS\\\\fiverr\\\\client\\\\components\\\\Slide.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Workspace\\\\NEXT.JS\\\\fiverr\\\\client\\\\components\\\\Slide.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n} // {\n //   /* <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>{children}</Slider> */\n // }\n // <Carousel\n //   infiniteLoop={true}\n //   showArrows={true}\n //   showIndicators={true}\n //   dynamicHeight={false}\n // >\n //   {children}\n // </Carousel>\n_c = Slide;\nvar _c;\n$RefreshReg$(_c, \"Slide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TbGlkZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNJO0FBRW1CO0FBWWhELFNBQVNFLE1BQU0sS0FBNkMsRUFBRTtRQUEvQyxFQUFDQyxTQUFRLEVBQUVDLGFBQVksRUFBRUMsYUFBWSxFQUFRLEdBQTdDO0lBQzVCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDTiwrREFBTUE7Z0JBRUxHLGNBQWNBO2dCQUNkQyxjQUFjQTtnQkFDZEcsVUFBVSxJQUFJOzBCQUViTDs7Ozs7Ozs7Ozs7Ozs7OztBQUtYLENBQUMsQ0FHTyxJQUFJO0NBQ0osOEZBQThGO0NBQzlGLElBQUk7Q0FFSixZQUFZO0NBQ1osd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0QiwwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCLElBQUk7Q0FDSixlQUFlO0NBQ2YsY0FBYztLQTdCRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZS50c3g/NjZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJpbmZpbml0ZS1yZWFjdC1jYXJvdXNlbFwiXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcclxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcclxuXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuPzpcclxuICAgIHwgUmVhY3QuUmVhY3ROb2RlXHJcbiAgICB8IFJlYWN0LlJlYWN0Q2hpbGRbXVxyXG4gICAgfCAoSW50cmluc2ljQXR0cmlidXRlcyAmIEludHJpbnNpY0NsYXNzQXR0cmlidXRlczxDYXJvdXNlbD4pXHJcbiAgc2xpZGVzVG9TaG93OiBudW1iZXJcclxuICBhcnJvd3NTY3JvbGw6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZSh7Y2hpbGRyZW4sIHNsaWRlc1RvU2hvdywgYXJyb3dzU2Nyb2xsfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LVsxMDBweF0gcHgtMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE0MDBweF0gXCI+XHJcbiAgICAgICAgPFNsaWRlclxyXG5cclxuICAgICAgICAgIHNsaWRlc1RvU2hvdz17c2xpZGVzVG9TaG93fVxyXG4gICAgICAgICAgYXJyb3dzU2Nyb2xsPXthcnJvd3NTY3JvbGx9XHJcbiAgICAgICAgICBhdXRvcGxheT17dHJ1ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAvKiA8U2xpZGVyIHNsaWRlc1RvU2hvdz17c2xpZGVzVG9TaG93fSBhcnJvd3NTY3JvbGw9e2Fycm93c1Njcm9sbH0+e2NoaWxkcmVufTwvU2xpZGVyPiAqL1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gPENhcm91c2VsXHJcbiAgICAgICAgLy8gICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgLy8gICBzaG93QXJyb3dzPXt0cnVlfVxyXG4gICAgICAgIC8vICAgc2hvd0luZGljYXRvcnM9e3RydWV9XHJcbiAgICAgICAgLy8gICBkeW5hbWljSGVpZ2h0PXtmYWxzZX1cclxuICAgICAgICAvLyA+XHJcbiAgICAgICAgLy8gICB7Y2hpbGRyZW59XHJcbiAgICAgICAgLy8gPC9DYXJvdXNlbD4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJTbGlkZSIsImNoaWxkcmVuIiwic2xpZGVzVG9TaG93IiwiYXJyb3dzU2Nyb2xsIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXV0b3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Slide.tsx\n"));

/***/ })

});