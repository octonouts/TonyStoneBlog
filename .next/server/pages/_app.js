"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(7059);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./components/analytics/GoogleAnalytics.js



const GAScript = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${(siteMetadata_default()).analytics.googleAnalyticsId}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "ga-script",
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${(siteMetadata_default()).analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `
            })
        ]
    }));
};
/* harmony default export */ const GoogleAnalytics = (GAScript);
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const logEvent = (action, category, label, value)=>{
    var ref;
    (ref = window.gtag) === null || ref === void 0 ? void 0 : ref.call(window, 'event', action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./components/analytics/Plausible.js



const PlausibleScript = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                "data-domain": (siteMetadata_default()).analytics.plausibleDataDomain,
                src: "https://plausible.io/js/plausible.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "plausible-script",
                children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `
            })
        ]
    }));
};
/* harmony default export */ const Plausible = (PlausibleScript);
// https://plausible.io/docs/custom-event-goals
const Plausible_logEvent = (eventName, ...rest)=>{
    var ref;
    return (ref = window.plausible) === null || ref === void 0 ? void 0 : ref.call(window, eventName, ...rest);
};

;// CONCATENATED MODULE: ./components/analytics/SimpleAnalytics.js


const SimpleAnalyticsScript = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "sa-script",
                children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://scripts.simpleanalyticscdn.com/latest.js"
            })
        ]
    }));
};
// https://docs.simpleanalytics.com/events
const SimpleAnalytics_logEvent = (eventName, callback)=>{
    if (callback) {
        var ref;
        return (ref = window.sa_event) === null || ref === void 0 ? void 0 : ref.call(window, eventName, callback);
    } else {
        var ref1;
        return (ref1 = window.sa_event) === null || ref1 === void 0 ? void 0 : ref1.call(window, eventName);
    }
};
/* harmony default export */ const SimpleAnalytics = (SimpleAnalyticsScript);

;// CONCATENATED MODULE: ./components/analytics/index.js





const isProduction = 'production' === 'production';
const Analytics = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isProduction && (siteMetadata_default()).analytics.plausibleDataDomain && /*#__PURE__*/ jsx_runtime_.jsx(Plausible, {
            }),
            isProduction && (siteMetadata_default()).analytics.simpleAnalytics && /*#__PURE__*/ jsx_runtime_.jsx(SimpleAnalytics, {
            }),
            isProduction && (siteMetadata_default()).analytics.googleAnalyticsId && /*#__PURE__*/ jsx_runtime_.jsx(GoogleAnalytics, {
            })
        ]
    }));
};
/* harmony default export */ const analytics = (Analytics);

;// CONCATENATED MODULE: ./data/headerNavLinks.js
const headerNavLinks = [
    {
        href: '/blog',
        title: 'Blog'
    },
    {
        href: '/tags',
        title: 'Tags'
    },
    {
        href: '/projects',
        title: 'Projects'
    },
    {
        href: '/about',
        title: 'About'
    }, 
];
/* harmony default export */ const data_headerNavLinks = (headerNavLinks);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./data/logo.svg
var _defs, _use, _use2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "344.564 330.278 111.737 91.218",
    width: 53.87,
    height: 43.61
  }, props), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "logo_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 420.97,
    y1: 331.28,
    x2: 420.97,
    y2: 418.5
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: "0%",
    stopColor: "#06b6d4"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: "100%",
    stopColor: "#67e8f9"
  })), /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "logo_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 377.89,
    y1: 331.28,
    x2: 377.89,
    y2: 418.5
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: "0%",
    stopColor: "#06b6d4"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: "100%",
    stopColor: "#67e8f9"
  })), /*#__PURE__*/external_react_.createElement("path", {
    d: "M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14z",
    id: "logo_svg__a"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14z",
    id: "logo_svg__c"
  }))), _use || (_use = /*#__PURE__*/external_react_.createElement("use", {
    xlinkHref: "#logo_svg__a",
    fill: "url(#logo_svg__b)"
  })), _use2 || (_use2 = /*#__PURE__*/external_react_.createElement("use", {
    xlinkHref: "#logo_svg__c",
    fill: "url(#logo_svg__d)"
  })));
}

/* harmony default export */ const logo = (SvgLogo);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(4373);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(9072);
// EXTERNAL MODULE: ./components/social-icons/index.js + 6 modules
var social_icons = __webpack_require__(4809);
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center mt-16",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mb-3 space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "mail",
                            href: `mailto:${(siteMetadata_default()).email}`,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "youtube",
                            href: (siteMetadata_default()).youtube,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "linkedin",
                            href: (siteMetadata_default()).linkedin,
                            size: "6"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: (siteMetadata_default()).author
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: `© ${new Date().getFullYear()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/",
                            children: (siteMetadata_default()).title
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-8 text-sm text-gray-500 dark:text-gray-400"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/MobileNav.js




const MobileNav = ()=>{
    const { 0: navShow , 1: setNavShow  } = (0,external_react_.useState)(false);
    const onToggleNav = ()=>{
        setNavShow((status)=>{
            if (status) {
                document.body.style.overflow = 'auto';
            } else {
                // Prevent scrolling
                document.body.style.overflow = 'hidden';
            }
            return !status;
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sm:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "w-8 h-8 ml-1 mr-1 rounded",
                "aria-label": "Toggle Menu",
                onClick: onToggleNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: "text-gray-900 dark:text-gray-100",
                    children: navShow ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${navShow ? 'translate-x-0' : 'translate-x-full'}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        "aria-label": "toggle modal",
                        className: "fixed w-full h-full cursor-auto focus:outline-none",
                        onClick: onToggleNav
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "fixed h-full mt-8",
                        children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-12 py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: link.href,
                                    className: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
                                    onClick: onToggleNav,
                                    children: link.title
                                })
                            }, link.title)
                        )
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./components/ThemeSwitch.js



const ThemeSwitch = ()=>{
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        type: "button",
        className: "w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",
        onClick: ()=>setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
        ,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "text-gray-900 dark:text-gray-100",
            children: mounted && (theme === 'dark' || resolvedTheme === 'dark') ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            })
        })
    }));
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

;// CONCATENATED MODULE: ./components/LayoutWrapper.js









const LayoutWrapper = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col justify-between h-screen",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex items-center justify-between py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                href: "/",
                                "aria-label": "Tailwind CSS Blog",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mr-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {
                                            })
                                        }),
                                        typeof (siteMetadata_default()).headerTitle === 'string' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden h-6 text-2xl font-semibold sm:block",
                                            children: (siteMetadata_default()).headerTitle
                                        }) : (siteMetadata_default()).headerTitle
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center text-base leading-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: link.href,
                                            className: "p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100",
                                            children: link.title
                                        }, link.title)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_MobileNav, {
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "mb-auto",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                })
            ]
        })
    }));
};
/* harmony default export */ const components_LayoutWrapper = (LayoutWrapper);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/ClientReload.js


/**
 * Client-side complement to next-remote-watch
 * Re-triggers getStaticProps when watched mdx files change
 *
 */ const ClientReload = ()=>{
    // Exclude socket.io from prod bundle
    (0,external_react_.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4612)).then((module)=>{
            const socket = module.io();
            socket.on('reload', (data)=>{
                router_default().replace((router_default()).asPath, undefined, {
                    scroll: false
                });
            });
        });
    }, []);
    return null;
};

;// CONCATENATED MODULE: ./pages/_app.js








const isDevelopment = 'production' === 'development';
const isSocket = process.env.SOCKET;
function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_.ThemeProvider, {
        attribute: "class",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            isDevelopment && isSocket && /*#__PURE__*/ jsx_runtime_.jsx(ClientReload, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(analytics, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
};


/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,373,59,571], () => (__webpack_exec__(7157)));
module.exports = __webpack_exports__;

})();