"use strict";
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7836);



const Tag = ({ text  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: `/tags/${(0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(text)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
            children: text.split(' ').join('-')
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ }),

/***/ 6852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bE": () => (/* binding */ getFiles),
/* harmony export */   "gf": () => (/* binding */ formatSlug),
/* harmony export */   "x7": () => (/* binding */ getFileBySlug),
/* harmony export */   "sj": () => (/* binding */ getAllFilesFrontMatter)
/* harmony export */ });
/* unused harmony export dateSortDesc */
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8214);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6016);
/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(813);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6809);
/* harmony import */ var remark_footnotes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1083);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9832);
/* harmony import */ var _remark_code_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5154);
/* harmony import */ var _remark_toc_headings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5103);
/* harmony import */ var _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1382);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7752);
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9847);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9521);
/* harmony import */ var rehype_citation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1380);
/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(483);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_prism_plus__WEBPACK_IMPORTED_MODULE_17__, rehype_citation__WEBPACK_IMPORTED_MODULE_16__, rehype_katex__WEBPACK_IMPORTED_MODULE_15__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_14__, rehype_slug__WEBPACK_IMPORTED_MODULE_13__, _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_12__, remark_math__WEBPACK_IMPORTED_MODULE_9__, remark_footnotes__WEBPACK_IMPORTED_MODULE_8__, _remark_code_title__WEBPACK_IMPORTED_MODULE_10__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, _remark_toc_headings__WEBPACK_IMPORTED_MODULE_11__, unist_util_visit__WEBPACK_IMPORTED_MODULE_5__]);
([rehype_prism_plus__WEBPACK_IMPORTED_MODULE_17__, rehype_citation__WEBPACK_IMPORTED_MODULE_16__, rehype_katex__WEBPACK_IMPORTED_MODULE_15__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_14__, rehype_slug__WEBPACK_IMPORTED_MODULE_13__, _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_12__, remark_math__WEBPACK_IMPORTED_MODULE_9__, remark_footnotes__WEBPACK_IMPORTED_MODULE_8__, _remark_code_title__WEBPACK_IMPORTED_MODULE_10__, remark_gfm__WEBPACK_IMPORTED_MODULE_7__, _remark_toc_headings__WEBPACK_IMPORTED_MODULE_11__, unist_util_visit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







// Remark packages






// Rehype packages





const root = process.cwd();
function getFiles(type) {
    const prefixPaths = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'data', type);
    const files = (0,_utils_files__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(prefixPaths);
    // Only want to return blog/path and ignore root, replace is needed to work on Windows
    return files.map((file)=>file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    );
}
function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '');
}
function dateSortDesc(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}
async function getFileBySlug(type, slug) {
    const mdxPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'data', type, `${slug}.mdx`);
    const mdPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'data', type, `${slug}.md`);
    const source = fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(mdxPath) ? fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(mdxPath, 'utf8') : fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(mdPath, 'utf8');
    // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
    if (process.platform === 'win32') {
        process.env.ESBUILD_BINARY_PATH = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'node_modules', 'esbuild', 'esbuild.exe');
    } else {
        process.env.ESBUILD_BINARY_PATH = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');
    }
    let toc = [];
    // Parsing frontmatter here to pass it in as options to rehype plugin
    const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
    const { code  } = await (0,mdx_bundler__WEBPACK_IMPORTED_MODULE_0__.bundleMDX)(source, {
        // mdx imports can be automatically source from the components directory
        cwd: path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'components'),
        xdmOptions (options) {
            // this is the recommended way to add custom remark/rehype plugins:
            // The syntax might look weird, but it protects you in case we add/remove
            // plugins in the future.
            options.remarkPlugins = [
                ...options.remarkPlugins ?? [],
                [
                    _remark_toc_headings__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                    {
                        exportRef: toc
                    }
                ],
                remark_gfm__WEBPACK_IMPORTED_MODULE_7__["default"],
                _remark_code_title__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                [
                    remark_footnotes__WEBPACK_IMPORTED_MODULE_8__["default"],
                    {
                        inlineNotes: true
                    }
                ],
                remark_math__WEBPACK_IMPORTED_MODULE_9__["default"],
                _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, 
            ];
            options.rehypePlugins = [
                ...options.rehypePlugins ?? [],
                rehype_slug__WEBPACK_IMPORTED_MODULE_13__["default"],
                rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_14__["default"],
                rehype_katex__WEBPACK_IMPORTED_MODULE_15__["default"],
                [
                    rehype_citation__WEBPACK_IMPORTED_MODULE_16__["default"],
                    {
                        bibliography: frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.bibliography,
                        path: path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'data')
                    }, 
                ],
                [
                    rehype_prism_plus__WEBPACK_IMPORTED_MODULE_17__["default"],
                    {
                        ignoreMissing: true
                    }
                ], 
            ];
            return options;
        },
        esbuildOptions: (options)=>{
            options.loader = {
                ...options.loader,
                '.js': 'jsx'
            };
            return options;
        }
    });
    return {
        mdxSource: code,
        toc,
        frontMatter: {
            readingTime: reading_time__WEBPACK_IMPORTED_MODULE_4___default()(code),
            slug: slug || null,
            fileName: fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
            ...frontmatter,
            date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null
        }
    };
}
async function getAllFilesFrontMatter(folder) {
    const prefixPaths = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, 'data', folder);
    const files = (0,_utils_files__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(prefixPaths);
    const allFrontMatter = [];
    files.forEach((file)=>{
        // Replace is needed to work on Windows
        const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
        // Remove Unexpected File
        if (path__WEBPACK_IMPORTED_MODULE_3___default().extname(fileName) !== '.md' && path__WEBPACK_IMPORTED_MODULE_3___default().extname(fileName) !== '.mdx') {
            return;
        }
        const source = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(file, 'utf8');
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
        if (frontmatter.draft !== true) {
            allFrontMatter.push({
                ...frontmatter,
                slug: formatSlug(fileName),
                date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null
            });
        }
    });
    return allFrontMatter.sort((a, b)=>dateSortDesc(a.date, b.date)
    );
}

});

/***/ }),

/***/ 5154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ remarkCodeTitles)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

function remarkCodeTitles() {
    return (tree)=>(0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, 'code', (node, index)=>{
            const nodeLang = node.lang || '';
            let language = '';
            let title = '';
            if (nodeLang.includes(':')) {
                language = nodeLang.slice(0, nodeLang.search(':'));
                title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length);
            }
            if (!title) {
                return;
            }
            const className = 'remark-code-title';
            const titleNode = {
                type: 'mdxJsxFlowElement',
                name: 'div',
                attributes: [
                    {
                        type: 'mdxJsxAttribute',
                        name: 'className',
                        value: className
                    }
                ],
                children: [
                    {
                        type: 'text',
                        value: title
                    }
                ],
                data: {
                    _xdmExplicitJsx: true
                }
            };
            tree.children.splice(index, 0, titleNode);
            node.lang = language;
        })
    ;
};

});

/***/ }),

/***/ 1382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ remarkImgToJsx)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6016);
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7219);
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(image_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function remarkImgToJsx() {
    return (tree)=>{
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, // only visit p tags that contain an img element
        (node)=>node.type === 'paragraph' && node.children.some((n)=>n.type === 'image'
            )
        , (node)=>{
            const imageNode = node.children.find((n)=>n.type === 'image'
            );
            // only local files
            if (fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(`${process.cwd()}/public${imageNode.url}`)) {
                const dimensions = image_size__WEBPACK_IMPORTED_MODULE_1___default()(`${process.cwd()}/public${imageNode.url}`);
                imageNode.type = 'mdxJsxFlowElement', imageNode.name = 'Image', imageNode.attributes = [
                    {
                        type: 'mdxJsxAttribute',
                        name: 'alt',
                        value: imageNode.alt
                    },
                    {
                        type: 'mdxJsxAttribute',
                        name: 'src',
                        value: imageNode.url
                    },
                    {
                        type: 'mdxJsxAttribute',
                        name: 'width',
                        value: dimensions.width
                    },
                    {
                        type: 'mdxJsxAttribute',
                        name: 'height',
                        value: dimensions.height
                    }, 
                ];
                // Change node type from p to div to avoid nesting error
                node.type = 'div';
                node.children = [
                    imageNode
                ];
            }
        });
    };
};

});

/***/ }),

/***/ 5103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ remarkTocHeadings)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6016);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8904);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(github_slugger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hast_util_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2038);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hast_util_to_string__WEBPACK_IMPORTED_MODULE_2__, unist_util_visit__WEBPACK_IMPORTED_MODULE_0__]);
([hast_util_to_string__WEBPACK_IMPORTED_MODULE_2__, unist_util_visit__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



function remarkTocHeadings(options) {
    return (tree)=>(0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, 'heading', (node, index, parent)=>{
            const textContent = (0,hast_util_to_string__WEBPACK_IMPORTED_MODULE_2__.toString)(node);
            options.exportRef.push({
                value: textContent,
                url: '#' + (0,github_slugger__WEBPACK_IMPORTED_MODULE_1__.slug)(textContent),
                depth: node.depth
            });
        })
    ;
};

});

/***/ }),

/***/ 813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const pipe = (...fns)=>(x)=>fns.reduce((v, f)=>f(v)
        , x)
;
const flattenArray = (input)=>input.reduce((acc, item)=>[
            ...acc,
            ...Array.isArray(item) ? item : [
                item
            ]
        ]
    , [])
;
const map = (fn)=>(input)=>input.map(fn)
;
const walkDir = (fullPath)=>{
    return fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath);
};
const pathJoinPrefix = (prefix)=>(extraPath)=>path__WEBPACK_IMPORTED_MODULE_1___default().join(prefix, extraPath)
;
const getAllFilesRecursively = (folder)=>pipe((fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync), map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllFilesRecursively);


/***/ }),

/***/ 7836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8904);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(github_slugger__WEBPACK_IMPORTED_MODULE_0__);

const kebabCase = (str)=>(0,github_slugger__WEBPACK_IMPORTED_MODULE_0__.slug)(str)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (kebabCase);


/***/ })

};
;