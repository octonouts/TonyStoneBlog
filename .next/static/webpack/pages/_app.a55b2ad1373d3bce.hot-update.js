"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./data/siteMetadata.js":
/*!******************************!*\
  !*** ./data/siteMetadata.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\nvar siteMetadata = {\n    title: 'Stone Cold Thoughts',\n    author: 'Tony Stone',\n    headerTitle: 'Blog',\n    description: '',\n    language: 'en-us',\n    siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',\n    siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',\n    siteLogo: '/static/images/logo.png',\n    image: '/static/images/avatar.png',\n    socialBanner: '/static/images/twitter-card.png',\n    email: 'tony@stonecoldthoughts.com',\n    github: 'https://github.com',\n    twitter: 'https://twitter.com/Twitter',\n    facebook: 'https://facebook.com',\n    youtube: 'https://youtube.com/keystonescience',\n    linkedin: 'https://www.linkedin.com/in/nateastone/',\n    locale: 'en-US',\n    analytics: {\n        // supports plausible, simpleAnalytics or googleAnalytics\n        plausibleDataDomain: '',\n        simpleAnalytics: false,\n        googleAnalyticsId: ''\n    },\n    newsletter: {\n        // supports mailchimp, buttondown, convertkit\n        // Please add your .env file and modify it according to your selection\n        provider: ''\n    },\n    comment: {\n        // Select a provider and use the environment variables associated to it\n        // https://vercel.com/docs/environment-variables\n        provider: 'giscus',\n        giscusConfig: {\n            // Visit the link below, and follow the steps in the 'configuration' section\n            // https://giscus.app/\n            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,\n            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,\n            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,\n            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,\n            mapping: 'pathname',\n            reactions: '1',\n            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable\n            metadata: '0',\n            // theme example: light, dark, dark_dimmed, dark_high_contrast\n            // transparent_dark, preferred_color_scheme, custom\n            theme: 'light',\n            // theme when dark mode\n            darkTheme: 'transparent_dark',\n            // If the theme option above is set to 'custom`\n            // please provide a link below to your custom theme css file.\n            // example: https://giscus.app/themes/custom_example.css\n            themeURL: ''\n        },\n        utterancesConfig: {\n            // Visit the link below, and follow the steps in the 'configuration' section\n            // https://utteranc.es/\n            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,\n            issueTerm: '',\n            label: '',\n            // theme example: github-light, github-dark, preferred-color-scheme\n            // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light\n            theme: '',\n            // theme when dark mode\n            darkTheme: ''\n        },\n        disqusConfig: {\n            // https://help.disqus.com/en/articles/1717111-what-s-a-shortname\n            shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME\n        }\n    }\n};\nmodule.exports = siteMetadata;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL3NpdGVNZXRhZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxHQUFLLENBQUNBLFlBQVksR0FBRyxDQUFDO0lBQ3BCQyxLQUFLLEVBQUUsQ0FBcUI7SUFDNUJDLE1BQU0sRUFBRSxDQUFZO0lBQ3BCQyxXQUFXLEVBQUUsQ0FBTTtJQUNuQkMsV0FBVyxFQUFFLENBQUU7SUFDZkMsUUFBUSxFQUFFLENBQU87SUFDakJDLE9BQU8sRUFBRSxDQUFpRDtJQUMxREMsUUFBUSxFQUFFLENBQXdEO0lBQ2xFQyxRQUFRLEVBQUUsQ0FBeUI7SUFDbkNDLEtBQUssRUFBRSxDQUEyQjtJQUNsQ0MsWUFBWSxFQUFFLENBQWlDO0lBQy9DQyxLQUFLLEVBQUUsQ0FBNEI7SUFDbkNDLE1BQU0sRUFBRSxDQUFvQjtJQUM1QkMsT0FBTyxFQUFFLENBQTZCO0lBQ3RDQyxRQUFRLEVBQUUsQ0FBc0I7SUFDaENDLE9BQU8sRUFBRSxDQUFxQztJQUM5Q0MsUUFBUSxFQUFFLENBQXlDO0lBQ25EQyxNQUFNLEVBQUUsQ0FBTztJQUNmQyxTQUFTLEVBQUUsQ0FBQztRQUNWLEVBQXlEO1FBQ3pEQyxtQkFBbUIsRUFBRSxDQUFFO1FBQ3ZCQyxlQUFlLEVBQUUsS0FBSztRQUN0QkMsaUJBQWlCLEVBQUUsQ0FBRTtJQUN2QixDQUFDO0lBQ0RDLFVBQVUsRUFBRSxDQUFDO1FBQ1gsRUFBNkM7UUFDN0MsRUFBc0U7UUFDdEVDLFFBQVEsRUFBRSxDQUFFO0lBQ2QsQ0FBQztJQUNEQyxPQUFPLEVBQUUsQ0FBQztRQUNSLEVBQXVFO1FBQ3ZFLEVBQWdEO1FBQ2hERCxRQUFRLEVBQUUsQ0FBUTtRQUNsQkUsWUFBWSxFQUFFLENBQUM7WUFDYixFQUE0RTtZQUM1RSxFQUFzQjtZQUN0QkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsdUJBQXVCO1lBQ3pDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxnQ0FBZ0M7WUFDMURDLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLDJCQUEyQjtZQUNqREMsVUFBVSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sOEJBQThCO1lBQ3REQyxPQUFPLEVBQUUsQ0FBVTtZQUNuQkMsU0FBUyxFQUFFLENBQUc7WUFDZCxFQUF1RjtZQUN2RkMsUUFBUSxFQUFFLENBQUc7WUFDYixFQUE4RDtZQUM5RCxFQUFtRDtZQUNuREMsS0FBSyxFQUFFLENBQU87WUFDZCxFQUF1QjtZQUN2QkMsU0FBUyxFQUFFLENBQWtCO1lBQzdCLEVBQStDO1lBQy9DLEVBQTZEO1lBQzdELEVBQXdEO1lBQ3hEQyxRQUFRLEVBQUUsQ0FBRTtRQUNkLENBQUM7UUFDREMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNqQixFQUE0RTtZQUM1RSxFQUF1QjtZQUN2QmhCLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNlLDJCQUEyQjtZQUM3Q0MsU0FBUyxFQUFFLENBQUU7WUFDYkMsS0FBSyxFQUFFLENBQUU7WUFDVCxFQUFtRTtZQUNuRSxFQUFtRTtZQUNuRU4sS0FBSyxFQUFFLENBQUU7WUFDVCxFQUF1QjtZQUN2QkMsU0FBUyxFQUFFLENBQUU7UUFDZixDQUFDO1FBQ0RNLFlBQVksRUFBRSxDQUFDO1lBQ2IsRUFBaUU7WUFDakVDLFNBQVMsRUFBRXBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0IsNEJBQTRCO1FBQ3JELENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBR2xELFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9zaXRlTWV0YWRhdGEuanM/NzM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaXRlTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiAnU3RvbmUgQ29sZCBUaG91Z2h0cycsXG4gIGF1dGhvcjogJ1RvbnkgU3RvbmUnLFxuICBoZWFkZXJUaXRsZTogJ0Jsb2cnLFxuICBkZXNjcmlwdGlvbjogJycsXG4gIGxhbmd1YWdlOiAnZW4tdXMnLFxuICBzaXRlVXJsOiAnaHR0cHM6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLnZlcmNlbC5hcHAnLFxuICBzaXRlUmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1scngvdGFpbHdpbmQtbmV4dGpzLXN0YXJ0ZXItYmxvZycsXG4gIHNpdGVMb2dvOiAnL3N0YXRpYy9pbWFnZXMvbG9nby5wbmcnLFxuICBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL2F2YXRhci5wbmcnLFxuICBzb2NpYWxCYW5uZXI6ICcvc3RhdGljL2ltYWdlcy90d2l0dGVyLWNhcmQucG5nJyxcbiAgZW1haWw6ICd0b255QHN0b25lY29sZHRob3VnaHRzLmNvbScsXG4gIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbScsXG4gIHR3aXR0ZXI6ICdodHRwczovL3R3aXR0ZXIuY29tL1R3aXR0ZXInLFxuICBmYWNlYm9vazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcbiAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20va2V5c3RvbmVzY2llbmNlJyxcbiAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmF0ZWFzdG9uZS8nLFxuICBsb2NhbGU6ICdlbi1VUycsXG4gIGFuYWx5dGljczoge1xuICAgIC8vIHN1cHBvcnRzIHBsYXVzaWJsZSwgc2ltcGxlQW5hbHl0aWNzIG9yIGdvb2dsZUFuYWx5dGljc1xuICAgIHBsYXVzaWJsZURhdGFEb21haW46ICcnLCAvLyBlLmcuIHRhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cudmVyY2VsLmFwcFxuICAgIHNpbXBsZUFuYWx5dGljczogZmFsc2UsIC8vIHRydWUgb3IgZmFsc2VcbiAgICBnb29nbGVBbmFseXRpY3NJZDogJycsIC8vIGUuZy4gVUEtMDAwMDAwLTIgb3IgRy1YWFhYWFhYXG4gIH0sXG4gIG5ld3NsZXR0ZXI6IHtcbiAgICAvLyBzdXBwb3J0cyBtYWlsY2hpbXAsIGJ1dHRvbmRvd24sIGNvbnZlcnRraXRcbiAgICAvLyBQbGVhc2UgYWRkIHlvdXIgLmVudiBmaWxlIGFuZCBtb2RpZnkgaXQgYWNjb3JkaW5nIHRvIHlvdXIgc2VsZWN0aW9uXG4gICAgcHJvdmlkZXI6ICcnLFxuICB9LFxuICBjb21tZW50OiB7XG4gICAgLy8gU2VsZWN0IGEgcHJvdmlkZXIgYW5kIHVzZSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFzc29jaWF0ZWQgdG8gaXRcbiAgICAvLyBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9lbnZpcm9ubWVudC12YXJpYWJsZXNcbiAgICBwcm92aWRlcjogJ2dpc2N1cycsIC8vIHN1cHBvcnRlZCBwcm92aWRlcnM6IGdpc2N1cywgdXR0ZXJhbmNlcywgZGlzcXVzXG4gICAgZ2lzY3VzQ29uZmlnOiB7XG4gICAgICAvLyBWaXNpdCB0aGUgbGluayBiZWxvdywgYW5kIGZvbGxvdyB0aGUgc3RlcHMgaW4gdGhlICdjb25maWd1cmF0aW9uJyBzZWN0aW9uXG4gICAgICAvLyBodHRwczovL2dpc2N1cy5hcHAvXG4gICAgICByZXBvOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HSVNDVVNfUkVQTyxcbiAgICAgIHJlcG9zaXRvcnlJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0lTQ1VTX1JFUE9TSVRPUllfSUQsXG4gICAgICBjYXRlZ29yeTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0lTQ1VTX0NBVEVHT1JZLFxuICAgICAgY2F0ZWdvcnlJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0lTQ1VTX0NBVEVHT1JZX0lELFxuICAgICAgbWFwcGluZzogJ3BhdGhuYW1lJywgLy8gc3VwcG9ydGVkIG9wdGlvbnM6IHBhdGhuYW1lLCB1cmwsIHRpdGxlXG4gICAgICByZWFjdGlvbnM6ICcxJywgLy8gRW1vamkgcmVhY3Rpb25zOiAxID0gZW5hYmxlIC8gMCA9IGRpc2FibGVcbiAgICAgIC8vIFNlbmQgZGlzY3Vzc2lvbiBtZXRhZGF0YSBwZXJpb2RpY2FsbHkgdG8gdGhlIHBhcmVudCB3aW5kb3c6IDEgPSBlbmFibGUgLyAwID0gZGlzYWJsZVxuICAgICAgbWV0YWRhdGE6ICcwJyxcbiAgICAgIC8vIHRoZW1lIGV4YW1wbGU6IGxpZ2h0LCBkYXJrLCBkYXJrX2RpbW1lZCwgZGFya19oaWdoX2NvbnRyYXN0XG4gICAgICAvLyB0cmFuc3BhcmVudF9kYXJrLCBwcmVmZXJyZWRfY29sb3Jfc2NoZW1lLCBjdXN0b21cbiAgICAgIHRoZW1lOiAnbGlnaHQnLFxuICAgICAgLy8gdGhlbWUgd2hlbiBkYXJrIG1vZGVcbiAgICAgIGRhcmtUaGVtZTogJ3RyYW5zcGFyZW50X2RhcmsnLFxuICAgICAgLy8gSWYgdGhlIHRoZW1lIG9wdGlvbiBhYm92ZSBpcyBzZXQgdG8gJ2N1c3RvbWBcbiAgICAgIC8vIHBsZWFzZSBwcm92aWRlIGEgbGluayBiZWxvdyB0byB5b3VyIGN1c3RvbSB0aGVtZSBjc3MgZmlsZS5cbiAgICAgIC8vIGV4YW1wbGU6IGh0dHBzOi8vZ2lzY3VzLmFwcC90aGVtZXMvY3VzdG9tX2V4YW1wbGUuY3NzXG4gICAgICB0aGVtZVVSTDogJycsXG4gICAgfSxcbiAgICB1dHRlcmFuY2VzQ29uZmlnOiB7XG4gICAgICAvLyBWaXNpdCB0aGUgbGluayBiZWxvdywgYW5kIGZvbGxvdyB0aGUgc3RlcHMgaW4gdGhlICdjb25maWd1cmF0aW9uJyBzZWN0aW9uXG4gICAgICAvLyBodHRwczovL3V0dGVyYW5jLmVzL1xuICAgICAgcmVwbzogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVRURVJBTkNFU19SRVBPLFxuICAgICAgaXNzdWVUZXJtOiAnJywgLy8gc3VwcG9ydGVkIG9wdGlvbnM6IHBhdGhuYW1lLCB1cmwsIHRpdGxlXG4gICAgICBsYWJlbDogJycsIC8vIGxhYmVsIChvcHRpb25hbCk6IENvbW1lbnQg8J+SrFxuICAgICAgLy8gdGhlbWUgZXhhbXBsZTogZ2l0aHViLWxpZ2h0LCBnaXRodWItZGFyaywgcHJlZmVycmVkLWNvbG9yLXNjaGVtZVxuICAgICAgLy8gZ2l0aHViLWRhcmstb3JhbmdlLCBpY3ktZGFyaywgZGFyay1ibHVlLCBwaG90b24tZGFyaywgYm94eS1saWdodFxuICAgICAgdGhlbWU6ICcnLFxuICAgICAgLy8gdGhlbWUgd2hlbiBkYXJrIG1vZGVcbiAgICAgIGRhcmtUaGVtZTogJycsXG4gICAgfSxcbiAgICBkaXNxdXNDb25maWc6IHtcbiAgICAgIC8vIGh0dHBzOi8vaGVscC5kaXNxdXMuY29tL2VuL2FydGljbGVzLzE3MTcxMTEtd2hhdC1zLWEtc2hvcnRuYW1lXG4gICAgICBzaG9ydG5hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RJU1FVU19TSE9SVE5BTUUsXG4gICAgfSxcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2l0ZU1ldGFkYXRhO1xuIl0sIm5hbWVzIjpbInNpdGVNZXRhZGF0YSIsInRpdGxlIiwiYXV0aG9yIiwiaGVhZGVyVGl0bGUiLCJkZXNjcmlwdGlvbiIsImxhbmd1YWdlIiwic2l0ZVVybCIsInNpdGVSZXBvIiwic2l0ZUxvZ28iLCJpbWFnZSIsInNvY2lhbEJhbm5lciIsImVtYWlsIiwiZ2l0aHViIiwidHdpdHRlciIsImZhY2Vib29rIiwieW91dHViZSIsImxpbmtlZGluIiwibG9jYWxlIiwiYW5hbHl0aWNzIiwicGxhdXNpYmxlRGF0YURvbWFpbiIsInNpbXBsZUFuYWx5dGljcyIsImdvb2dsZUFuYWx5dGljc0lkIiwibmV3c2xldHRlciIsInByb3ZpZGVyIiwiY29tbWVudCIsImdpc2N1c0NvbmZpZyIsInJlcG8iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR0lTQ1VTX1JFUE8iLCJyZXBvc2l0b3J5SWQiLCJORVhUX1BVQkxJQ19HSVNDVVNfUkVQT1NJVE9SWV9JRCIsImNhdGVnb3J5IiwiTkVYVF9QVUJMSUNfR0lTQ1VTX0NBVEVHT1JZIiwiY2F0ZWdvcnlJZCIsIk5FWFRfUFVCTElDX0dJU0NVU19DQVRFR09SWV9JRCIsIm1hcHBpbmciLCJyZWFjdGlvbnMiLCJtZXRhZGF0YSIsInRoZW1lIiwiZGFya1RoZW1lIiwidGhlbWVVUkwiLCJ1dHRlcmFuY2VzQ29uZmlnIiwiTkVYVF9QVUJMSUNfVVRURVJBTkNFU19SRVBPIiwiaXNzdWVUZXJtIiwibGFiZWwiLCJkaXNxdXNDb25maWciLCJzaG9ydG5hbWUiLCJORVhUX1BVQkxJQ19ESVNRVVNfU0hPUlROQU1FIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/siteMetadata.js\n");

/***/ })

});