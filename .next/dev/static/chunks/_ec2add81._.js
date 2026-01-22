(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProductImages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductImages",
    ()=>ProductImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProductImages({ images }) {
    _s();
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-md border border-gray-100 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square mb-6 bg-gray-50 rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: images[selectedImage],
                    alt: "Product",
                    className: "w-full h-full object-contain transition-opacity duration-300"
                }, void 0, false, {
                    fileName: "[project]/components/ProductImages.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductImages.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 overflow-x-auto pb-2",
                children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedImage(idx),
                        className: `flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-blue-600 ring-4 ring-blue-100 shadow-md scale-105' : 'border-gray-200 hover:border-gray-400 hover:shadow-sm'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img,
                            alt: `Product view ${idx + 1}`,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductImages.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/components/ProductImages.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProductImages.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductImages.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(ProductImages, "Xy3J1kSE5E5uHEIhOUL7Fipn/Mg=");
_c = ProductImages;
var _c;
__turbopack_context__.k.register(_c, "ProductImages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductReviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductReviews",
    ()=>ProductReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const REVIEWS_PER_PAGE = 5;
function ProductReviews({ reviews, rating }) {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
    const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
    const endIndex = startIndex + REVIEWS_PER_PAGE;
    const currentReviews = reviews.slice(startIndex, endIndex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-sm p-6 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold",
                        children: "Customer Reviews"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-gray-900",
                                children: rating
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: "out of 5"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductReviews.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: currentReviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b pb-6 last:border-b-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-900",
                                                    children: review.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                review.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",
                                                    children: "Verified Purchase"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ProductReviews.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-400",
                                                    children: [
                                                        "★".repeat(review.rating),
                                                        "☆".repeat(5 - review.rating)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-500",
                                                    children: review.date
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ProductReviews.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ProductReviews.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductReviews.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium mt-2 text-gray-900",
                                children: review.title
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mt-1 leading-relaxed",
                                children: review.comment
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, review.id, true, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProductReviews.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mt-6 pt-6 border-t",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600",
                        children: [
                            "Showing ",
                            startIndex + 1,
                            "-",
                            Math.min(endIndex, reviews.length),
                            " of ",
                            reviews.length,
                            " reviews"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                                disabled: currentPage === 1,
                                className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: Array.from({
                                    length: totalPages
                                }, (_, i)=>i + 1).map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentPage(page),
                                        className: `px-3 py-1 text-sm font-medium rounded ${currentPage === page ? "bg-blue-600 text-white" : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"} transition`,
                                        children: page
                                    }, page, false, {
                                        fileName: "[project]/components/ProductReviews.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                                disabled: currentPage === totalPages,
                                className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductReviews.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductReviews.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductReviews.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductReviews.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ProductReviews, "6xAUoJ2motYJ38x4zeUWisA+X/4=");
_c = ProductReviews;
var _c;
__turbopack_context__.k.register(_c, "ProductReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAgora.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAgora",
    ()=>useAgora
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useAgora({ appId, channel, token, uid }) {
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Microphone enabled by default (not muted)
    const [localAudioTrack, setLocalAudioTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remoteAudioTrack, setRemoteAudioTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remoteVideoTrack, setRemoteVideoTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const virtualBackgroundExtensionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const virtualBackgroundProcessorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAgora.useEffect": ()=>{
            // Don't initialize if we don't have valid config or if we're on the server
            if (("TURBOPACK compile-time value", "object") === "undefined" || !appId || !channel || !token || uid === 0 || !appId.trim() || !channel.trim() || !token.trim()) {
                return;
            }
            let isMounted = true;
            let audioTrack = null;
            let client = null;
            const init = {
                "useAgora.useEffect.init": async ()=>{
                    try {
                        // Dynamically import AgoraRTC only on the client
                        const AgoraRTC = (await __turbopack_context__.A("[project]/node_modules/agora-rtc-sdk-ng/AgoraRTC_N-production.js [app-client] (ecmascript, async loader)")).default;
                        // Enable audio PTS metadata for Conversational AI (REQUIRED for ASR to work!)
                        // This must be set BEFORE creating the client
                        AgoraRTC.setParameter("ENABLE_AUDIO_PTS_METADATA", true);
                        // Register Virtual Background Extension
                        try {
                            const VirtualBackgroundExtension = (await __turbopack_context__.A("[project]/node_modules/agora-extension-virtual-background/agora-extension-virtual-background.js [app-client] (ecmascript, async loader)")).default;
                            if (VirtualBackgroundExtension) {
                                const extension = new VirtualBackgroundExtension();
                                if (extension.checkCompatibility()) {
                                    AgoraRTC.registerExtensions([
                                        extension
                                    ]);
                                    virtualBackgroundExtensionRef.current = extension;
                                    console.log("[useAgora] Virtual Background Extension registered");
                                } else {
                                    console.warn("[useAgora] Virtual Background Extension not supported in this browser");
                                }
                            }
                        } catch (extError) {
                            console.warn("[useAgora] Failed to load virtual background extension:", extError);
                        }
                        client = AgoraRTC.createClient({
                            mode: "rtc",
                            codec: "vp8"
                        });
                        clientRef.current = client;
                        // Join the channel
                        await client.join(appId, channel, token, uid);
                        if (!isMounted) {
                            // Component unmounted during join, cleanup
                            await client.leave().catch({
                                "useAgora.useEffect.init": ()=>{}
                            }["useAgora.useEffect.init"]);
                            return;
                        }
                        setIsConnected(true);
                        // Create and publish local audio track
                        audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
                        if (!isMounted) {
                            // Component unmounted during track creation, cleanup
                            audioTrack.close();
                            await client.leave().catch({
                                "useAgora.useEffect.init": ()=>{}
                            }["useAgora.useEffect.init"]);
                            return;
                        }
                        await client.publish([
                            audioTrack
                        ]);
                        setLocalAudioTrack(audioTrack);
                        // Listen for remote audio and video tracks
                        client.on("user-published", {
                            "useAgora.useEffect.init": async (user, mediaType)=>{
                                if (isMounted) {
                                    try {
                                        await client.subscribe(user, mediaType);
                                        if (mediaType === "audio") {
                                            const remoteTrack = user.audioTrack;
                                            if (remoteTrack && isMounted) {
                                                setRemoteAudioTrack(remoteTrack);
                                                // Wait a bit to ensure track is fully ready before playing
                                                // This prevents race condition where audio doesn't play on first load
                                                setTimeout({
                                                    "useAgora.useEffect.init": ()=>{
                                                        if (isMounted && remoteTrack) {
                                                            try {
                                                                const playResult = remoteTrack.play();
                                                                // play() might return a promise or undefined
                                                                if (playResult && typeof playResult.catch === "function") {
                                                                    playResult.catch({
                                                                        "useAgora.useEffect.init": (error)=>{
                                                                            console.error("Error playing remote audio track:", error);
                                                                        }
                                                                    }["useAgora.useEffect.init"]);
                                                                }
                                                            } catch (error) {
                                                                console.error("Error playing remote audio track:", error);
                                                            }
                                                        }
                                                    }
                                                }["useAgora.useEffect.init"], 100);
                                            }
                                        } else if (mediaType === "video") {
                                            const remoteTrack = user.videoTrack;
                                            if (remoteTrack && isMounted) {
                                                // Apply virtual background extension with green color to remote video track
                                                try {
                                                    if (virtualBackgroundExtensionRef.current) {
                                                        // Create processor for remote video track
                                                        const processor = virtualBackgroundExtensionRef.current.createProcessor();
                                                        // Initialize the processor
                                                        await processor.init();
                                                        // For remote tracks, use insertProcessor method
                                                        if (typeof remoteTrack.insertProcessor === "function") {
                                                            remoteTrack.insertProcessor(processor);
                                                            // Set green background color (RGB: 0, 255, 0)
                                                            await processor.setOptions({
                                                                type: "color",
                                                                color: "#00FF00"
                                                            });
                                                            // Enable the processor
                                                            await processor.enable();
                                                            virtualBackgroundProcessorRef.current = processor;
                                                            console.log("[useAgora] Virtual background with green color applied to remote video using insertProcessor");
                                                        } else if (remoteTrack.pipe && remoteTrack.processorDestination) {
                                                            // Fallback: try pipe method (typically for local tracks)
                                                            remoteTrack.pipe(processor).pipe(remoteTrack.processorDestination);
                                                            await processor.setOptions({
                                                                type: "color",
                                                                color: "#00FF00"
                                                            });
                                                            await processor.enable();
                                                            virtualBackgroundProcessorRef.current = processor;
                                                            console.log("[useAgora] Virtual background applied using pipe method");
                                                        } else {
                                                            console.warn("[useAgora] Remote video track does not support processors");
                                                            processor.destroy();
                                                        }
                                                    }
                                                } catch (bgError) {
                                                    console.error("[useAgora] Failed to apply virtual background:", bgError);
                                                }
                                                setRemoteVideoTrack(remoteTrack);
                                            }
                                        }
                                    } catch (error) {
                                        console.error(`Error subscribing to remote ${mediaType}:`, error);
                                    }
                                }
                            }
                        }["useAgora.useEffect.init"]);
                        client.on("user-unpublished", {
                            "useAgora.useEffect.init": (user, mediaType)=>{
                                if (isMounted) {
                                    if (mediaType === "audio") {
                                        setRemoteAudioTrack(null);
                                    } else if (mediaType === "video") {
                                        const remoteTrack = user.videoTrack;
                                        if (remoteTrack) {
                                            // Clean up virtual background processor if it exists
                                            if (virtualBackgroundProcessorRef.current) {
                                                try {
                                                    virtualBackgroundProcessorRef.current.disable();
                                                    virtualBackgroundProcessorRef.current.destroy();
                                                } catch (e) {
                                                // Ignore cleanup errors
                                                }
                                                virtualBackgroundProcessorRef.current = null;
                                            }
                                            remoteTrack.stop();
                                        }
                                        setRemoteVideoTrack(null);
                                    }
                                }
                            }
                        }["useAgora.useEffect.init"]);
                    } catch (error) {
                        // Ignore OPERATION_ABORTED errors (happens when component unmounts during init)
                        if (error?.code !== "OPERATION_ABORTED" && isMounted) {
                            console.error("Agora initialization error:", error);
                        }
                        if (isMounted) {
                            setIsConnected(false);
                        }
                    }
                }
            }["useAgora.useEffect.init"];
            init();
            return ({
                "useAgora.useEffect": ()=>{
                    isMounted = false;
                    // Cleanup
                    if (audioTrack) {
                        audioTrack.close();
                        audioTrack = null;
                    }
                    // Clean up virtual background processor
                    if (virtualBackgroundProcessorRef.current) {
                        try {
                            virtualBackgroundProcessorRef.current.disable();
                            virtualBackgroundProcessorRef.current.destroy();
                        } catch (e) {
                        // Ignore cleanup errors
                        }
                        virtualBackgroundProcessorRef.current = null;
                    }
                    if (clientRef.current) {
                        const currentClient = clientRef.current;
                        // Clean up video tracks before leaving
                        currentClient.remoteUsers?.forEach({
                            "useAgora.useEffect": (user)=>{
                                if (user.videoTrack) {
                                    user.videoTrack.stop();
                                }
                            }
                        }["useAgora.useEffect"]);
                        clientRef.current = null;
                        currentClient.leave().catch({
                            "useAgora.useEffect": ()=>{
                            // Ignore errors during cleanup
                            }
                        }["useAgora.useEffect"]);
                    }
                    setIsConnected(false);
                    setLocalAudioTrack(null);
                    setRemoteAudioTrack(null);
                    setRemoteVideoTrack(null);
                }
            })["useAgora.useEffect"];
        }
    }["useAgora.useEffect"], [
        appId,
        channel,
        token,
        uid
    ]);
    const toggleMute = async ()=>{
        if (localAudioTrack) {
            await localAudioTrack.setMuted(!isMuted);
            setIsMuted(!isMuted);
        }
    };
    const leave = async ()=>{
        if (localAudioTrack) {
            localAudioTrack.close();
            setLocalAudioTrack(null);
        }
        if (clientRef.current) {
            await clientRef.current.leave();
            setIsConnected(false);
        }
    };
    return {
        isConnected,
        isMuted,
        toggleMute,
        leave,
        localAudioTrack,
        remoteAudioTrack,
        remoteVideoTrack,
        client: clientRef.current
    };
}
_s(useAgora, "lhzTFhSSngiCgd+kW/7Yty87RYw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/conversational-ai-api/type.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EAgentState",
    ()=>EAgentState,
    "EChatMessagePriority",
    ()=>EChatMessagePriority,
    "EChatMessageType",
    ()=>EChatMessageType,
    "EConversationalAIAPIEvents",
    ()=>EConversationalAIAPIEvents,
    "ELocalTranscriptStatus",
    ()=>ELocalTranscriptStatus,
    "EMessageSalStatus",
    ()=>EMessageSalStatus,
    "EMessageType",
    ()=>EMessageType,
    "EModuleType",
    ()=>EModuleType,
    "ERTCCustomEvents",
    ()=>ERTCCustomEvents,
    "ERTCEvents",
    ()=>ERTCEvents,
    "ERTMEvents",
    ()=>ERTMEvents,
    "ETranscriptHelperMode",
    ()=>ETranscriptHelperMode,
    "ETurnStatus",
    ()=>ETurnStatus,
    "NotFoundError",
    ()=>NotFoundError
]);
var ETranscriptHelperMode = /*#__PURE__*/ function(ETranscriptHelperMode) {
    ETranscriptHelperMode["TEXT"] = "text";
    ETranscriptHelperMode["WORD"] = "word";
    ETranscriptHelperMode["CHUNK"] = "chunk";
    ETranscriptHelperMode["UNKNOWN"] = "unknown";
    return ETranscriptHelperMode;
}({});
var EMessageType = /*#__PURE__*/ function(EMessageType) {
    EMessageType["USER_TRANSCRIPTION"] = "user.transcription";
    EMessageType["AGENT_TRANSCRIPTION"] = "assistant.transcription";
    EMessageType["MSG_INTERRUPTED"] = "message.interrupt";
    EMessageType["MSG_METRICS"] = "message.metrics";
    EMessageType["MSG_ERROR"] = "message.error";
    /** @deprecated */ EMessageType["MSG_STATE"] = "message.state";
    EMessageType["IMAGE_UPLOAD"] = "image.upload";
    EMessageType["MESSAGE_INFO"] = "message.info";
    EMessageType["MESSAGE_SAL_STATUS"] = "message.sal_status";
    return EMessageType;
}({});
var ERTMEvents = /*#__PURE__*/ function(ERTMEvents) {
    ERTMEvents["MESSAGE"] = "message";
    ERTMEvents["PRESENCE"] = "presence";
    // TOPIC = 'topic',
    // STORAGE = 'storage',
    // LOCK = 'lock',
    ERTMEvents["STATUS"] = "status";
    return ERTMEvents;
}({});
var ERTCEvents = /*#__PURE__*/ function(ERTCEvents) {
    ERTCEvents["NETWORK_QUALITY"] = "network-quality";
    ERTCEvents["USER_PUBLISHED"] = "user-published";
    ERTCEvents["USER_UNPUBLISHED"] = "user-unpublished";
    ERTCEvents["STREAM_MESSAGE"] = "stream-message";
    ERTCEvents["USER_JOINED"] = "user-joined";
    ERTCEvents["USER_LEFT"] = "user-left";
    ERTCEvents["CONNECTION_STATE_CHANGE"] = "connection-state-change";
    // AUDIO_METADATA = 'audio-metadata',
    ERTCEvents["AUDIO_PTS"] = "audio-pts";
    return ERTCEvents;
}({});
var ERTCCustomEvents = /*#__PURE__*/ function(ERTCCustomEvents) {
    ERTCCustomEvents["MICROPHONE_CHANGED"] = "microphone-changed";
    ERTCCustomEvents["REMOTE_USER_CHANGED"] = "remote-user-changed";
    ERTCCustomEvents["REMOTE_USER_JOINED"] = "remote-user-joined";
    ERTCCustomEvents["REMOTE_USER_LEFT"] = "remote-user-left";
    ERTCCustomEvents["LOCAL_TRACKS_CHANGED"] = "local-tracks-changed";
    return ERTCCustomEvents;
}({});
var EConversationalAIAPIEvents = /*#__PURE__*/ function(EConversationalAIAPIEvents) {
    EConversationalAIAPIEvents["AGENT_STATE_CHANGED"] = "agent-state-changed";
    EConversationalAIAPIEvents["AGENT_INTERRUPTED"] = "agent-interrupted";
    EConversationalAIAPIEvents["AGENT_METRICS"] = "agent-metrics";
    EConversationalAIAPIEvents["AGENT_ERROR"] = "agent-error";
    EConversationalAIAPIEvents["TRANSCRIPT_UPDATED"] = "transcript-updated";
    EConversationalAIAPIEvents["DEBUG_LOG"] = "debug-log";
    EConversationalAIAPIEvents["MESSAGE_RECEIPT_UPDATED"] = "message-receipt-updated";
    EConversationalAIAPIEvents["MESSAGE_ERROR"] = "message-error";
    EConversationalAIAPIEvents["MESSAGE_SAL_STATUS"] = "message-sal-status";
    return EConversationalAIAPIEvents;
}({});
var EModuleType = /*#__PURE__*/ function(EModuleType) {
    EModuleType["LLM"] = "llm";
    EModuleType["MLLM"] = "mllm";
    EModuleType["TTS"] = "tts";
    EModuleType["CONTEXT"] = "context";
    EModuleType["UNKNOWN"] = "unknown";
    return EModuleType;
}({});
class NotFoundError extends Error {
    constructor(message){
        super(message);
        this.name = 'NotFoundError';
    }
}
var ETurnStatus = /*#__PURE__*/ function(ETurnStatus) {
    ETurnStatus[ETurnStatus["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    ETurnStatus[ETurnStatus["END"] = 1] = "END";
    ETurnStatus[ETurnStatus["INTERRUPTED"] = 2] = "INTERRUPTED";
    return ETurnStatus;
}({});
var EAgentState = /*#__PURE__*/ function(EAgentState) {
    EAgentState["IDLE"] = "idle";
    EAgentState["LISTENING"] = "listening";
    EAgentState["THINKING"] = "thinking";
    EAgentState["SPEAKING"] = "speaking";
    EAgentState["SILENT"] = "silent";
    return EAgentState;
}({});
var EChatMessagePriority = /*#__PURE__*/ function(EChatMessagePriority) {
    EChatMessagePriority["INTERRUPTED"] = "interrupted";
    EChatMessagePriority["APPEND"] = "append";
    EChatMessagePriority["IGNORE"] = "ignore";
    return EChatMessagePriority;
}({});
var EChatMessageType = /*#__PURE__*/ function(EChatMessageType) {
    EChatMessageType["TEXT"] = "text";
    EChatMessageType["IMAGE"] = "image";
    EChatMessageType["UNKNOWN"] = "unknown";
    return EChatMessageType;
}({});
var ELocalTranscriptStatus = /*#__PURE__*/ function(ELocalTranscriptStatus) {
    ELocalTranscriptStatus["PENDING"] = "pending";
    ELocalTranscriptStatus["SENT"] = "sent";
    ELocalTranscriptStatus["FAILED"] = "failed";
    return ELocalTranscriptStatus;
}({});
var EMessageSalStatus = /*#__PURE__*/ function(EMessageSalStatus) {
    EMessageSalStatus["VP_DISABLED"] = "VP_DISABLED";
    EMessageSalStatus["VP_UNREGISTER"] = "VP_UNREGISTER";
    EMessageSalStatus["VP_REGISTERING"] = "VP_REGISTERING";
    EMessageSalStatus["VP_REGISTER_SUCCESS"] = "VP_REGISTER_SUCCESS";
    EMessageSalStatus["VP_REGISTER_FAIL"] = "VP_REGISTER_FAIL";
    EMessageSalStatus["VP_REGISTER_DUPLICATE"] = "VP_REGISTER_DUPLICATE";
    return EMessageSalStatus;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/conversational-ai-api/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export const factoryFormatLog =
//   (options: { tag: string }) => (message: unknown) => {
//     return `[${options.tag}] ${JSON.stringify(message)}`
//   }
__turbopack_context__.s([
    "ELoggerType",
    ()=>ELoggerType,
    "factoryFormatLog",
    ()=>factoryFormatLog
]);
const factoryFormatLog = (options)=>(...args)=>{
        return `[${options.tag}] ${args.map((arg)=>JSON.stringify(arg)).join(' ')}`;
    };
var ELoggerType = /*#__PURE__*/ function(ELoggerType) {
    ELoggerType["debug"] = "debug";
    ELoggerType["info"] = "info";
    ELoggerType["warn"] = "warn";
    ELoggerType["error"] = "error";
    return ELoggerType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/conversational-ai-api/utils/event.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "EventHelper",
    ()=>EventHelper
]);
class EventHelper {
    _eventMap = new Map();
    once(evt, cb) {
        const wrapper = (...args)=>{
            this.off(evt, wrapper);
            cb(...args);
        };
        this.on(evt, wrapper);
        return this;
    }
    on(evt, cb) {
        const cbs = this._eventMap.get(evt) ?? [];
        cbs.push(cb);
        this._eventMap.set(evt, cbs);
        console.debug(`Subscribed to event: ${String(evt)}`);
        return this;
    }
    off(evt, cb) {
        const cbs = this._eventMap.get(evt);
        if (cbs) {
            this._eventMap.set(evt, cbs.filter((it)=>it !== cb));
            console.debug(`Unsubscribed from event: ${String(evt)}`);
        }
        return this;
    }
    removeAllEventListeners() {
        this._eventMap.clear();
        console.debug('Removed all event listeners');
    }
    emit(evt, ...args) {
        const cbs = this._eventMap.get(evt) ?? [];
        for (const cb of cbs){
            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                cb && cb(...args);
            } catch (e) {
                // cb exception should not affect other callbacks
                const error = e;
                const details = error.stack || error.message;
                console.error(`Error handling event ${String(evt)}: ${details}`);
            }
        }
        console.debug({
            args
        }, `Emitted event: ${String(evt)}`);
        return this;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/conversational-ai-api/utils/sub-render.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CovSubRenderController",
    ()=>CovSubRenderController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/lodash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/type.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/utils/index.ts [app-client] (ecmascript)");
;
;
;
;
// Simple logger replacement
const logger = {
    debug: (...args)=>console.debug(...args),
    info: (...args)=>console.info(...args),
    warn: (...args)=>console.warn(...args),
    error: (...args)=>console.error(...args)
};
const TAG = 'CovSubRenderController';
const CONSOLE_LOG_PREFIX = `[${TAG}]`;
const SELF_USER_ID = 0;
const VERSION = '1.8.0';
const DEFAULT_INTERVAL = 200 // milliseconds
;
const DEFAULT_CHUNK_INTERVAL = 100 // milliseconds, 10 char/s
;
const formatLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryFormatLog"])({
    tag: TAG
});
class CovSubRenderController {
    static NAME = TAG;
    static VERSION = VERSION;
    callMessagePrint;
    static self_uid = SELF_USER_ID;
    _mode = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
    _queue = [];
    _interval;
    _intervalRef = null;
    _pts = 0 // current pts
    ;
    _lastPoppedQueueItem = null;
    _isRunning = false;
    _agentMessageState = null;
    _transcriptChunk = null;
    chatHistory = [];
    onChatHistoryUpdated = null;
    onAgentStateChanged;
    onAgentInterrupted = null;
    onDebugLog = null;
    onAgentMetrics = null;
    onAgentError = null;
    onMessageReceipt = null;
    onMessageError = null;
    onMessageSalStatus = null;
    constructor(options = {}){
        this.callMessagePrint = (type = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, ...args)=>{
            logger[type](formatLog(...args));
            this.onDebugLog?.(`[${type}] ${formatLog(...args)}`);
        };
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `${CovSubRenderController.NAME} initialized, version: ${CovSubRenderController.VERSION}`);
        this._interval = options.interval ?? DEFAULT_INTERVAL;
        this.onChatHistoryUpdated = options.onChatHistoryUpdated ?? null;
        this.onAgentStateChanged = options.onAgentStateChanged ?? null;
        this.onAgentInterrupted = options.onAgentInterrupted ?? null;
        this.onDebugLog = options.onDebugLog ?? null;
        this.onAgentMetrics = options.onAgentMetrics ?? null;
        this.onAgentError = options.onAgentError ?? null;
        this.onMessageReceipt = options.onMessageReceipt ?? null;
        this.onMessageError = options.onMessageError ?? null;
        this.onMessageSalStatus = options.onMessageSalStatus ?? null;
    }
    _preSetupInterval() {
        if (!this._isRunning) {
            console.error(CONSOLE_LOG_PREFIX, 'Message service is not running');
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, '_preSetupInterval', 'Message service is not running');
            return;
        }
    }
    _setupIntervalForWords(options) {
        this._preSetupInterval();
        // if force: clean older and reset interval
        if (options?.isForce) {
            if (this._intervalRef) {
                clearInterval(this._intervalRef);
                this._intervalRef = null;
            }
            this._intervalRef = setInterval(this._handleQueue.bind(this), this._interval);
            return;
        }
        // else(if not forced): skip if interval is already set, otherwise set an interval
        if (this._intervalRef) {
            return;
        }
        this._intervalRef = setInterval(this._handleQueue.bind(this), this._interval);
    }
    _handleQueue() {
        const queueLength = this._queue.length;
        // empty queue, skip
        if (queueLength === 0) {
            // console.debug(CONSOLE_LOG_PREFIX, 'Queue is empty, skip')
            return;
        }
        const curPTS = this._pts;
        // only one item, update chatHistory with queueItem
        if (queueLength === 1) {
            // console.debug(
            //   CONSOLE_LOG_PREFIX,
            //   'Queue has only one item, update chatHistory',
            //   JSON.stringify(this._queue[0])
            // )
            const queueItem = this._queue[0];
            this._handleTurnObj(queueItem, curPTS);
            this._mutateChatHistory();
            return;
        }
        if (queueLength > 2) {
            // console.error(
            //   CONSOLE_LOG_PREFIX,
            //   'Queue length is greater than 2, but it should not happen'
            // )
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, 'Queue length is greater than 2, but it should not happen');
        }
        // assume the queueLength is 2
        if (queueLength > 1) {
            this._queue = this._queue.sort((a, b)=>a.turn_id - b.turn_id);
            const nextItem = this._queue[this._queue.length - 1];
            const lastItem = this._queue[this._queue.length - 2];
            // check if nextItem is started
            const firstWordOfNextItem = nextItem.words[0];
            // if firstWordOfNextItem.start_ms > curPTS, work on lastItem
            if (firstWordOfNextItem.start_ms > curPTS) {
                this._handleTurnObj(lastItem, curPTS);
                this._mutateChatHistory();
                return;
            }
            // if firstWordOfNextItem.start_ms <= curPTS, work on nextItem, assume lastItem is interrupted(and drop it)
            const lastItemCorrespondingChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === lastItem.turn_id && item.stream_id === lastItem.stream_id);
            if (!lastItemCorrespondingChatHistoryItem) {
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].warn, 'No corresponding chatHistory item found', lastItem);
                return;
            }
            lastItemCorrespondingChatHistoryItem.status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
            this._lastPoppedQueueItem = this._queue.shift();
            // handle nextItem
            this._handleTurnObj(nextItem, curPTS);
            this._mutateChatHistory();
            return;
        }
    }
    _handleTurnObj(queueItem, curPTS) {
        let correspondingChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === queueItem.turn_id && item.stream_id === queueItem.stream_id);
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'handleTurnObj', queueItem, 'correspondingChatHistoryItem', correspondingChatHistoryItem);
        if (!correspondingChatHistoryItem) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'handleTurnObj', 'No corresponding chatHistory item found', 'push to chatHistory');
            correspondingChatHistoryItem = {
                turn_id: queueItem.turn_id,
                uid: queueItem.uid,
                stream_id: queueItem.stream_id,
                _time: new Date().getTime(),
                text: '',
                status: queueItem.status,
                metadata: queueItem
            };
            this._appendChatHistory(correspondingChatHistoryItem);
        }
        // update correspondingChatHistoryItem._time for chatHistory auto-scroll
        correspondingChatHistoryItem._time = new Date().getTime();
        // update correspondingChatHistoryItem.metadata
        correspondingChatHistoryItem.metadata = queueItem;
        // update correspondingChatHistoryItem.status if queueItem.status is interrupted(from message.interrupt event)
        if (queueItem.status === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED) {
            correspondingChatHistoryItem.status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
        }
        // pop all valid word items(those word.start_ms <= curPTS) in queueItem
        const validWords = [];
        const restWords = [];
        for (const word of queueItem.words){
            if (word.start_ms <= curPTS) {
                validWords.push(word);
            } else {
                restWords.push(word);
            }
        }
        // check if restWords is empty
        const isRestWordsEmpty = restWords.length === 0;
        // check if validWords last word is final
        const isLastWordFinal = validWords[validWords.length - 1]?.word_status !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].IN_PROGRESS;
        // if restWords is empty and validWords last word is final, this turn is ended
        if (isRestWordsEmpty && isLastWordFinal) {
            // update chatHistory with queueItem
            correspondingChatHistoryItem.text = queueItem.text;
            correspondingChatHistoryItem.status = queueItem.status;
            // pop queueItem
            this._lastPoppedQueueItem = this._queue.shift();
            return;
        }
        // if restWords is not empty, update correspondingChatHistoryItem.text
        const validWordsText = validWords.filter((word)=>word.start_ms <= this._pts).map((word)=>word.word).join('');
        correspondingChatHistoryItem.text = validWordsText;
        // if validWords last word is interrupted, this turn is ended
        const isLastWordInterrupted = validWords[validWords.length - 1]?.word_status === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
        if (isLastWordInterrupted) {
            // pop queueItem
            this._lastPoppedQueueItem = this._queue.shift();
            return;
        }
        return;
    }
    _mutateChatHistory() {
        // console.debug(CONSOLE_LOG_PREFIX, 'Mutate chatHistory', this.chatHistory)
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, '>>> onChatHistoryUpdated', `pts: ${this._pts}, chatHistory length: ${this.chatHistory.length}`, this.chatHistory.map((item)=>`${item.uid}:${item.text}[status: ${item.status}]`).join('\n'));
        this.onChatHistoryUpdated?.(this.chatHistory);
    }
    _appendChatHistory(item) {
        // if item.turn_id is 0, append to the front of chatHistory(greeting message)
        if (item.turn_id === 0) {
            this.chatHistory = [
                item,
                ...this.chatHistory
            ];
        } else {
            this.chatHistory.push(item);
        }
    }
    _interruptQueue(options) {
        const turn_id = options.turn_id;
        const start_ms = options.start_ms;
        const correspondingQueueItem = this._queue.find((item)=>item.turn_id === turn_id);
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'interruptQueue', `turn_id: ${turn_id}, start_ms: ${start_ms}, correspondingQueueItem: ${correspondingQueueItem}`);
        if (!correspondingQueueItem) {
            // console.debug(
            //   CONSOLE_LOG_PREFIX,
            //   'No corresponding queue item found',
            //   options
            // )
            return;
        }
        // if correspondingQueueItem exists, update its status to interrupted
        correspondingQueueItem.status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
        // split words into two parts, set left one word and all right words to interrupted
        const leftWords = correspondingQueueItem.words.filter((word)=>word.start_ms <= start_ms);
        const rightWords = correspondingQueueItem.words.filter((word)=>word.start_ms > start_ms);
        // check if leftWords is empty
        const isLeftWordsEmpty = leftWords.length === 0;
        if (isLeftWordsEmpty) {
            // if leftWords is empty, set all words to interrupted
            correspondingQueueItem.words.forEach((word)=>{
                word.word_status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
            });
        } else {
            // if leftWords is not empty, set leftWords[leftWords.length - 1].word_status to interrupted
            leftWords[leftWords.length - 1].word_status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
            // workaround: pts < interrupt.start_ms, and interrupt will be ignored
            if (leftWords?.[leftWords.length - 2]) {
                leftWords[leftWords.length - 2].word_status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
            }
            // and all right words to interrupted
            rightWords.forEach((word)=>{
                word.word_status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
            });
            // update words
            correspondingQueueItem.words = [
                ...leftWords,
                ...rightWords
            ];
        }
    }
    _pushToQueue(data) {
        const targetQueueItem = this._queue.find((item)=>item.turn_id === data.turn_id);
        const latestTurnId = this._queue.reduce((max, item)=>{
            return Math.max(max, item.turn_id);
        }, 0);
        // if not found, push to queue or drop if turn_id is less than latestTurnId
        if (!targetQueueItem) {
            // drop if turn_id is less than latestTurnId
            if (data.turn_id < latestTurnId) {
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[Word Mode]`, `[${data.uid}]`, 'Drop message with turn_id less than latestTurnId', `turn_id: ${data.turn_id}, latest turn_id: ${latestTurnId}`, data);
                return;
            }
            const newQueueItem = {
                turn_id: data.turn_id,
                text: data.text,
                words: this.sortWordsWithStatus(data.words, data.status),
                status: data.status,
                stream_id: data.stream_id,
                uid: data.uid
            };
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[Word Mode]`, `[${data.uid}]`, 'push to queue', newQueueItem);
            // push to queue
            this._queue.push(newQueueItem);
            return;
        }
        // if found, update text, words(sorted with status) and turn_status
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[Word Mode]`, `[${data.uid}]`, 'update queue item', targetQueueItem, data);
        targetQueueItem.text = data.text;
        targetQueueItem.words = this.sortWordsWithStatus([
            ...targetQueueItem.words,
            ...data.words
        ], data.status);
        // if targetQueueItem.status is end, and data.status is in_progress, skip status update (unexpected case)
        if (targetQueueItem.status !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].IN_PROGRESS && data.status === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].IN_PROGRESS) {
            return;
        }
        targetQueueItem.status = data.status;
    }
    _teardownInterval() {
        if (this._intervalRef) {
            clearInterval(this._intervalRef);
            this._intervalRef = null;
        }
    }
    sortWordsWithStatus(words, turn_status) {
        if (words.length === 0) {
            return words;
        }
        const sortedWords = words.map((word)=>({
                ...word,
                word_status: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].IN_PROGRESS
            })).sort((a, b)=>a.start_ms - b.start_ms).reduce((acc, curr)=>{
            // Only add if start_ms is unique
            if (!acc.find((word)=>word.start_ms === curr.start_ms)) {
                acc.push(curr);
            }
            return acc;
        }, []);
        const isMessageFinal = turn_status !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].IN_PROGRESS;
        if (isMessageFinal) {
            sortedWords[sortedWords.length - 1].word_status = turn_status;
        }
        return sortedWords;
    }
    handleTextMessage(uid, message) {
        const turn_id = message.turn_id;
        const text = message.text || '';
        const stream_id = message.stream_id;
        const turn_status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].END;
        // Determine if this is an agent message by checking the message object type
        const isAgentMessage = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].AGENT_TRANSCRIPTION;
        // For agent messages, use "1000" as the UID (agent's fixed UID)
        // For user messages, use the publisher UID
        const finalUid = isAgentMessage ? "1000" : `${uid}`;
        const targetChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === turn_id && item.stream_id === stream_id);
        // if not found, push to chatHistory
        if (!targetChatHistoryItem) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[Text Mode]`, `[${finalUid}]`, 'new item', message);
            // For agent messages, show intermediate messages too (for real-time updates)
            // For user messages, only show final to avoid duplicates
            if (isAgentMessage) {
                // Always add agent messages (both intermediate and final) for real-time updates
                this._appendChatHistory({
                    turn_id,
                    uid: finalUid,
                    stream_id,
                    _time: new Date().getTime(),
                    text,
                    status: turn_status,
                    metadata: message
                });
                this._mutateChatHistory();
            } else {
                // For user messages, only add final messages
                const isFinal = message.final === true || message.is_final === true || message.turn_status === 1 || turn_status === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].END;
                if (isFinal) {
                    this._appendChatHistory({
                        turn_id,
                        uid: finalUid,
                        stream_id,
                        _time: new Date().getTime(),
                        text,
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].END,
                        metadata: message
                    });
                    this._mutateChatHistory();
                } else {
                    return; // Don't add non-final user messages to chat history
                }
            }
        } else {
            // if found, update it (for agent messages, update even if not final for real-time)
            // For user messages, only update if final
            const isFinal = message.final === true || message.is_final === true || message.turn_status === 1 || turn_status === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].END;
            if (isAgentMessage || isFinal) {
                // Always update agent messages (for real-time), or final user messages
                targetChatHistoryItem.text = text;
                targetChatHistoryItem.status = isFinal ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].END : turn_status;
                targetChatHistoryItem.metadata = message;
                targetChatHistoryItem._time = new Date().getTime();
                // Update UID if it changed (e.g., if we misidentified it before)
                if (targetChatHistoryItem.uid !== finalUid) {
                    targetChatHistoryItem.uid = finalUid;
                }
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[Text Mode]`, `[${finalUid}]`, targetChatHistoryItem);
                this._mutateChatHistory();
            } else {}
        }
    }
    _handleTranscriptChunk() {
        if (!this._transcriptChunk) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].warn, `[${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].CHUNK} Mode]`, '_handleTranscriptChunk', 'missing _transcriptChunk');
            return;
        }
        const currentIdx = this._transcriptChunk.index;
        const currentTranscript = this._transcriptChunk.data;
        const currentMaxLength = currentTranscript.text.length;
        const uid = this._transcriptChunk.uid;
        const nextIdx = currentIdx + 1 >= currentMaxLength ? currentMaxLength : currentIdx + 1;
        this._transcriptChunk.index = nextIdx;
        const validTranscriptString = currentTranscript.text.substring(0, nextIdx);
        const isValidTranscriptStringEnded = validTranscriptString.length > 0 && currentTranscript.turn_status !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].IN_PROGRESS && validTranscriptString.length === currentTranscript.text.length;
        const targetChatHistoryItem = this.chatHistory.find((item)=>item.turn_id === currentTranscript.turn_id && item.stream_id === currentTranscript.stream_id);
        // if not found, push to chatHistory
        if (!targetChatHistoryItem) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].CHUNK} Mode]`, `[${uid}]`, 'new transcriptChunk', this._transcriptChunk);
            this._appendChatHistory({
                turn_id: currentTranscript.turn_id,
                uid: currentTranscript.stream_id ? `${CovSubRenderController.self_uid}` : `${uid}`,
                stream_id: currentTranscript.stream_id,
                _time: Date.now(),
                text: validTranscriptString,
                status: currentTranscript.turn_status,
                metadata: currentTranscript
            });
        } else {
            // if found, update text and status
            targetChatHistoryItem.text = validTranscriptString;
            targetChatHistoryItem.status = isValidTranscriptStringEnded ? currentTranscript.turn_status : targetChatHistoryItem.status;
            targetChatHistoryItem.metadata = currentTranscript;
            targetChatHistoryItem._time = Date.now();
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].CHUNK} Mode]`, `[${uid}]`, 'update transcriptChunk', targetChatHistoryItem);
        }
        this._mutateChatHistory();
    }
    handleChunkTextMessage(uid, message) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].CHUNK} Mode]`, `[${uid}]`, 'new item', message);
        // 0. check turn_id, teardown interval if new turn
        if (this._transcriptChunk && this._transcriptChunk.data.turn_id < message.turn_id) {
            this._teardownInterval();
            // set chathistory items turn_status to ended
            const lastChatHistory = this.chatHistory.find((item)=>item.turn_id === this._transcriptChunk?.data.turn_id && item.uid === uid);
            if (lastChatHistory) {
                lastChatHistory.status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].END;
            }
            // set _transcriptChunk to null
            this._transcriptChunk = null;
        }
        // 1. update _transcriptChunk
        this._transcriptChunk = {
            index: this._transcriptChunk?.index ?? 0,
            data: message,
            uid
        };
        // 2. check if interval is set, if not, set it
        if (!this._intervalRef) {
            this._intervalRef = setInterval(this._handleTranscriptChunk.bind(this), this._interval);
        }
    }
    handleMessageInterrupt(uid, message) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, '<<< [onInterrupted]', `pts: ${this._pts}, uid: ${uid}`, message);
        const turn_id = message.turn_id;
        // workaround: pts < interrupt.start_ms, and interrupt will be ignored
        const start_ms = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].min([
            message.start_ms,
            this._pts
        ]) || message.start_ms;
        this._interruptQueue({
            turn_id,
            start_ms
        });
        // interrupt chunk
        if (this._transcriptChunk) {
            this._teardownInterval();
            // set chathistory items turn_status to ended
            const lastChatHistory = this.chatHistory.find((item)=>item.turn_id === this._transcriptChunk?.data.turn_id && item.uid === uid);
            if (lastChatHistory) {
                lastChatHistory.status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].INTERRUPTED;
            }
            // set _transcriptChunk to null
            this._transcriptChunk = null;
        }
        this._mutateChatHistory();
        this.onAgentInterrupted?.(`${uid}`, {
            turnID: turn_id,
            timestamp: start_ms
        });
    }
    handleMessageMetrics(uid, message) {
        // this.callMessagePrint(
        //   ELoggerType.debug,
        //   '<<< [onMetrics]',
        //   `pts: ${this._pts}, uid: ${uid}`,
        //   message
        // )
        const latency_ms = message.latency_ms;
        const messageModule = message.module;
        const metric_name = message.metric_name;
        if (!Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EModuleType"]).includes(messageModule)) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].warn, 'Unknown metric module:', message);
            return;
        }
        this.onAgentMetrics?.(`${uid}`, {
            type: messageModule,
            name: metric_name,
            value: latency_ms,
            timestamp: message.send_ts
        });
    }
    handleMessageSalStatus(uid, message) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'handleMessageSalStatus', message);
        this.onMessageSalStatus?.(`${uid}`, message);
    }
    handleMessageError(uid, message) {
        // this.callMessagePrint(
        //   ELoggerType.debug,
        //   '<<< [onError]',
        //   `pts: ${this._pts}, uid: ${uid}`,
        //   message
        // )
        const errorCode = message.code || -1;
        const errorMessage = message.message;
        const messageModule = message.module;
        if (!Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EModuleType"]).includes(messageModule)) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].warn, 'Unknown error module:', message);
            return;
        }
        if (messageModule === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EModuleType"].CONTEXT) {
            try {
                const messageData = JSON.parse(errorMessage);
                const errorPayload = {
                    type: messageData?.module === 'picture' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessageType"].IMAGE : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessageType"].UNKNOWN,
                    code: errorCode,
                    message: errorMessage,
                    timestamp: message?.send_ts || Date.now()
                };
                this.onMessageError?.(`${uid}`, errorPayload);
            } catch (error) {
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, 'Failed to parse context error message', error, message);
            }
        }
        this.onAgentError?.(`${uid}`, {
            type: messageModule,
            code: errorCode,
            message: errorMessage,
            timestamp: message?.send_ts || Date.now()
        });
    }
    // current only used for image messages
    handleMessageInfo(uid, message) {
        try {
            const messageStr = message?.message || '';
            const messageObj = JSON.parse(messageStr);
            const moduleType = message?.module;
            const turnId = message?.turn_id;
            if (!messageStr || !messageObj || !moduleType || !turnId) {
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, 'handleMessageInfo', 'Invalid message object', message);
                return;
            }
            const messageType = message?.resource_type === 'picture' ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessageType"].IMAGE : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessageType"].UNKNOWN;
            this.onMessageReceipt?.(uid, {
                moduleType,
                messageType,
                message: messageStr,
                turnId
            });
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'handleMessageInfo', 'Failed to parse message string from image info message', error, message);
        }
    }
    handleAgentStatus(metadata) {
        // this.callMessagePrint(
        //   ELoggerType.debug,
        //   'handleAgentStatus',
        //   `pts: ${this._pts}, uid: ${metadata.publisher}`,
        //   `prev-state: ${this._agentMessageState}, state: ${metadata.stateChanged.state}, turn_id: ${metadata.stateChanged.turn_id}, timestamp: ${metadata.stateChanged.timestamp}`
        // )
        const message = metadata.stateChanged;
        const currentTurnId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toNumber(message.turn_id) || 0;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toNumber(this._agentMessageState?.turn_id || 0) > currentTurnId) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'handleAgentStatus', 'ignore older message(turn_id)');
            return;
        }
        // check if message is older(by timestamp) than previous one, if so, skip
        const currentMsgTs = metadata.timestamp;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toNumber(this._agentMessageState?.timestamp || 0) >= currentMsgTs) {
            // console.debug(
            //   CONSOLE_LOG_PREFIX,
            //   'handleAgentStatus',
            //   'ignore older message(timestamp)',
            //   message?.timestamp,
            //   currentMsgTs
            // )
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'handleAgentStatus', 'ignore older message(timestamp)');
            return;
        }
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, '>>> handleAgentStatus', `pts: ${this._pts}, uid: ${metadata.publisher}`, `prev-state: ${this._agentMessageState?.state}, prev-turn_id: ${this._agentMessageState?.turn_id}, prev-timestamp: ${this._agentMessageState?.timestamp}`, `current-state: ${metadata.stateChanged.state}, turn_id: ${metadata.stateChanged.turn_id}, timestamp: ${metadata.timestamp}`);
        // set current message state
        this._agentMessageState = {
            state: message.state,
            turn_id: message.turn_id,
            timestamp: currentMsgTs
        };
        this.onAgentStateChanged?.(metadata.publisher, {
            state: message.state,
            turnID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toNumber(message.turn_id),
            timestamp: currentMsgTs,
            reason: ''
        });
    }
    handleWordAgentMessage(uid, message) {
        // drop message if turn_status is undefined
        if (typeof message.turn_status === 'undefined') {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[Word Mode]`, `[${uid}]`, 'Drop message with undefined turn_status', message.turn_id);
            return;
        }
        const turn_id = message.turn_id;
        const text = message.text || '';
        const words = message.words || [];
        const stream_id = message.stream_id;
        const lastPoppedQueueItemTurnId = this._lastPoppedQueueItem?.turn_id;
        // drop message if turn_id is less than last popped queue item
        // except for the first turn(greeting message, turn_id is 0)
        if (lastPoppedQueueItemTurnId && turn_id !== 0 && turn_id <= lastPoppedQueueItemTurnId) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `[Word Mode]`, `[${uid}]`, 'Drop message with turn_id less than last popped queue item', `turn_id: ${turn_id}, last popped queue item turn_id: ${lastPoppedQueueItemTurnId}`);
            return;
        }
        this._pushToQueue({
            uid: message.stream_id ? `${CovSubRenderController.self_uid}` : `${uid}`,
            turn_id,
            words,
            text,
            status: message.turn_status,
            stream_id
        });
    }
    setMode(mode) {
        if (this._mode !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].warn, `Mode should only be set once, but it is set[${mode}] again`, 'current mode:', this._mode);
            return;
        }
        if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].warn, 'Unknown mode should not be set');
            return;
        }
        if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].CHUNK) {
            // set interval to chunk interval
            this._interval = DEFAULT_CHUNK_INTERVAL;
        } else {
            // set interval to default interval
            this._interval = DEFAULT_INTERVAL;
        }
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `setMode`, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].TEXT);
        this._mode = mode;
    }
    handleMessage(message, options) {
        const messageObject = message?.object;
        if (!Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"]).includes(messageObject)) {
            console.warn("[CovSubRenderController] Unknown message type:", messageObject, message);
            // Don't return early - try to handle it anyway if it has text
            if (!message.text && !message.content) {
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].info, `<<< [unknown message]`, options, message);
                return;
            }
        // If it has text but unknown object type, treat it as a transcription
        }
        const isAgentMessage = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].AGENT_TRANSCRIPTION;
        const isUserMessage = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].USER_TRANSCRIPTION;
        const isMessageInterrupt = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].MSG_INTERRUPTED;
        const isMessageMetrics = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].MSG_METRICS;
        const isMessageError = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].MSG_ERROR;
        // const isMessageState = message.object === EMessageType.MSG_STATE
        const isMessageInfo = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].MESSAGE_INFO;
        const isMessageSalStatus = message.object === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].MESSAGE_SAL_STATUS;
        // set mode (only once)
        if (isAgentMessage && this._mode === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN) {
            // 2025-09-28 check if words array is empty or not undefined, and set mode
            if (!message.words || Array.isArray(message.words) && message.words.length === 0) {
                this.setMode(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].TEXT);
            } else {
                this._setupIntervalForWords({
                    isForce: true
                });
                this.setMode(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].WORD);
            }
        }
        // handle Agent Message
        if (isAgentMessage && this._mode === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].WORD) {
            this._setupIntervalForWords({
                isForce: false
            });
            this.handleWordAgentMessage(options.publisher, message);
            return;
        }
        if (isAgentMessage && this._mode === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].TEXT) {
            console.log("[CovSubRenderController] Handling agent text message:", {
                publisher: options.publisher,
                message,
                messageObject: message.object
            });
            // Pass the message as-is, handleTextMessage will determine UID based on message.object
            this.handleTextMessage(options.publisher, message);
            return;
        }
        if (isAgentMessage && this._mode === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].CHUNK) {
            this.handleChunkTextMessage(options.publisher, message);
            return;
        }
        // handle User Message
        if (isUserMessage) {
            console.log("[CovSubRenderController] Handling user text message:", {
                publisher: options.publisher,
                message
            });
            this.handleTextMessage(options.publisher, message);
            return;
        }
        // handle Message Interrupt
        if (isMessageInterrupt) {
            this.handleMessageInterrupt(options.publisher, message);
            return;
        }
        // if (isMessageState) {
        //   this.handleAgentStatus(message as unknown as IMessageState)
        //   return
        // }
        if (isMessageInfo) {
            this.handleMessageInfo(options.publisher, message);
            return;
        }
        if (isMessageMetrics) {
            this.handleMessageMetrics(options.publisher, message);
            return;
        }
        if (isMessageError) {
            this.handleMessageError(options.publisher, message);
            return;
        }
        if (isMessageSalStatus) {
            this.handleMessageSalStatus(options.publisher, message);
            return;
        }
    }
    run() {
        this._isRunning = true;
    }
    setPts(pts) {
        if (this._pts < pts && pts !== 0) {
            this._pts = pts;
        }
    }
    cleanup() {
        // console.debug(CONSOLE_LOG_PREFIX, 'Cleanup message service')
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, 'cleanup');
        this._isRunning = false;
        this._teardownInterval();
        // cleanup queue
        this._queue = [];
        this._lastPoppedQueueItem = null;
        this._pts = 0;
        // cleanup chatHistory
        this.chatHistory = [];
        // cleanup mode
        this._mode = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
        this._agentMessageState = null;
        this._transcriptChunk = null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/conversational-ai-api/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConversationalAIAPI",
    ()=>ConversationalAIAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/type.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/utils/event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$sub$2d$render$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/utils/sub-render.ts [app-client] (ecmascript)");
;
;
;
;
// Simple logger replacement
const logger = {
    debug: (...args)=>console.debug(...args),
    info: (...args)=>console.info(...args),
    warn: (...args)=>console.warn(...args),
    error: (...args)=>console.error(...args)
};
// Simple ID generator
const genTranceID = ()=>Math.random().toString(36).substring(2, 15);
const TAG = "ConversationalAIAPI";
// const CONSOLE_LOG_PREFIX = `[${TAG}]`
const VERSION = "1.8.0";
const formatLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factoryFormatLog"])({
    tag: TAG
});
class ConversationalAIAPI extends __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"] {
    static NAME = TAG;
    static VERSION = VERSION;
    static _instance = null;
    callMessagePrint;
    rtcEngine = null;
    rtmEngine = null;
    renderMode = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
    channel = null;
    covSubRenderController;
    enableLog = false;
    constructor(){
        super();
        this.callMessagePrint = (type = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, ...args)=>{
            if (!this.enableLog) {
                return;
            }
            logger[type](formatLog(...args));
            this.onDebugLog?.(`[${type}] ${formatLog(...args)}`);
        };
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `${ConversationalAIAPI.NAME} initialized, version: ${ConversationalAIAPI.VERSION}`);
        this.covSubRenderController = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$sub$2d$render$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CovSubRenderController"]({
            onChatHistoryUpdated: this.onChatHistoryUpdated.bind(this),
            onAgentStateChanged: this.onAgentStateChanged.bind(this),
            onAgentInterrupted: this.onAgentInterrupted.bind(this),
            onDebugLog: this.onDebugLog.bind(this),
            onAgentMetrics: this.onAgentMetrics.bind(this),
            onAgentError: this.onAgentError.bind(this),
            onMessageReceipt: this.onMessageReceiptUpdated.bind(this),
            onMessageError: this.onMessageError.bind(this),
            onMessageSalStatus: this.onMessageSalStatus.bind(this)
        });
    }
    /**
   * Gets the singleton instance of ConversationalAIAPI.
   *
   * Retrieves the singleton instance of the ConversationalAIAPI class. This method
   * ensures that only one instance of ConversationalAIAPI exists throughout the
   * application lifecycle.
   *
   * @remarks
   * - Must call {@link init} before using this method
   * - Throws error if instance is not initialized
   *
   * @returns The singleton instance of ConversationalAIAPI
   * @throws {@link NotFoundError} When ConversationalAIAPI is not initialized
   * @since 1.6.0
   */ static getInstance() {
        if (!ConversationalAIAPI._instance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotFoundError"]("ConversationalAIAPI is not initialized");
        }
        return ConversationalAIAPI._instance;
    }
    getCfg() {
        if (!this.rtcEngine || !this.rtmEngine) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotFoundError"]("ConversationalAIAPI is not initialized");
        }
        return {
            rtcEngine: this.rtcEngine,
            rtmEngine: this.rtmEngine,
            renderMode: this.renderMode,
            channel: this.channel,
            enableLog: this.enableLog
        };
    }
    /**
   * Initializes the ConversationalAIAPI singleton instance.
   *
   * This method sets up the RTC and RTM engines, render mode, and logging options.
   * It must be called before any other methods of ConversationalAIAPI can be used.
   *
   * @remarks
   * - Only one instance can be initialized at a time
   * - Throws error if already initialized
   *
   * @param cfg - Configuration object for initializing the API
   * @returns The initialized instance of ConversationalAIAPI
   * @throws {@link Error} If ConversationalAIAPI is already initialized
   * @since 1.6.0
   */ static init(cfg) {
        if (!ConversationalAIAPI._instance) {
            ConversationalAIAPI._instance = new ConversationalAIAPI();
        }
        ConversationalAIAPI._instance.rtcEngine = cfg.rtcEngine;
        ConversationalAIAPI._instance.rtmEngine = cfg.rtmEngine;
        ConversationalAIAPI._instance.renderMode = cfg.renderMode ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
        ConversationalAIAPI._instance.enableLog = cfg.enableLog ?? false;
        return ConversationalAIAPI._instance;
    }
    /**
   * Subscribes to a message channel for real-time updates.
   *
   * This method binds the necessary RTC and RTM events, sets the channel,
   * and starts the CovSubRenderController to handle incoming messages.
   *
   * @remarks
   * - Must call {@link init} before using this method
   * - Throws error if not initialized
   *
   * @param channel - The channel to subscribe to for messages
   * @since 1.6.0
   */ async subscribeMessage(channel) {
        this.bindRtcEvents();
        this.bindRtmEvents();
        // Validate and sanitize channel name for RTM v2.x
        let validChannelName = channel;
        if (!validChannelName || validChannelName.length === 0) {
            validChannelName = "default_channel";
        }
        // RTM v2.x channel names should be alphanumeric and underscores, max 64 chars
        validChannelName = validChannelName.replace(/[^a-zA-Z0-9_]/g, "_").substring(0, 64);
        this.channel = validChannelName;
        this.covSubRenderController.setMode(this.renderMode);
        this.covSubRenderController.run();
        // Subscribe to RTM channel in v2.x using the correct API
        try {
            const { rtmEngine } = this.getCfg();
            if (rtmEngine) {
                const subscribeOptions = {
                    withMessage: true,
                    withPresence: true,
                    withMetadata: false,
                    withLock: false
                };
                await rtmEngine.subscribe(this.channel, subscribeOptions);
                console.log("[ConversationalAIAPI] Subscribed to RTM channel:", this.channel);
            }
        } catch (error) {
            console.error("[ConversationalAIAPI] Failed to subscribe to RTM channel:", error);
            throw error;
        }
    }
    /**
   * Unsubscribes from the message channel and cleans up resources.
   *
   * This method unbinds the RTC and RTM events, clears the channel,
   * and cleans up the CovSubRenderController.
   *
   * @remarks
   * - Must call {@link subscribeMessage} before using this method
   * - Throws error if not initialized
   *
   * @since 1.6.0
   */ async unsubscribe() {
        this.unbindRtcEvents();
        this.unbindRtmEvents();
        // Unsubscribe from RTM channel in v2.x
        try {
            const { rtmEngine } = this.getCfg();
            if (rtmEngine && this.channel) {
                await rtmEngine.unsubscribe(this.channel);
                console.log("[ConversationalAIAPI] Unsubscribed from RTM channel:", this.channel);
            }
        } catch (error) {
            console.error("[ConversationalAIAPI] Failed to unsubscribe from RTM channel:", error);
        }
        this.channel = null;
        this.covSubRenderController.cleanup();
    }
    /**
   * Destroys the ConversationalAIAPI instance and cleans up resources.
   *
   * This method unbinds all RTC and RTM events, clears the channel,
   * and cleans up the CovSubRenderController.
   *
   * @remarks
   * - Must call {@link unsubscribe} before using this method
   * - Throws error if not initialized
   *
   * @since 1.6.0
   */ destroy() {
        const instance = ConversationalAIAPI.getInstance();
        if (instance) {
            instance?.rtcEngine?.removeAllListeners();
            instance.rtcEngine = null;
            instance?.rtmEngine?.removeAllListeners();
            instance.rtmEngine = null;
            instance.renderMode = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].UNKNOWN;
            instance.channel = null;
            instance.removeAllEventListeners();
            ConversationalAIAPI._instance = null;
        }
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `${ConversationalAIAPI.NAME} destroyed`);
    }
    /**
   * Sends a chat message to the conversational AI agent.
   *
   * @param agentUserId - The unique identifier of the agent user
   * @param message - The chat message to send, can be either text or image type
   * @returns A promise that resolves with the result of sending the message
   * @throws {Error} When an unsupported chat message type is provided
   *
   * @since 1.7.0
   *
   * @example
   * ```typescript
   * // Send a text message
   * const textMessage: IChatMessageText = {
   *   messageType: EChatMessageType.TEXT,
   *   priority: EChatMessagePriority.HIGH,
   *   responseInterruptable: true,
   *   text: "Hello, how are you?"
   * };
   * await api.chat("user123", textMessage);
   *
   * // Send an image message
   * const imageMessage: IChatMessageImage = {
   *   messageType: EChatMessageType.IMAGE,
   *   uuid: "msg-456",
   *   url: "https://example.com/image.jpg"
   * };
   * await api.chat("user123", imageMessage);
   * ```
   */ async chat(agentUserId, message) {
        switch(message.messageType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessageType"].TEXT:
                return this.sendText(agentUserId, message);
            case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessageType"].IMAGE:
                return this.sendImage(agentUserId, message);
            default:
                throw new Error("Unsupported chat message type");
        }
    }
    /**
   * Sends a text message to the specified agent user through RTM engine.
   *
   * @param agentUserId - The unique identifier of the agent user to send the message to
   * @param message - The chat message object containing text content and optional settings
   * @param message.priority - Optional priority level for the message (defaults to INTERRUPTED)
   * @param message.responseInterruptable - Optional flag indicating if the response can be interrupted (defaults to true)
   * @param message.text - The actual text content of the message
   *
   * @returns Promise that resolves when the message is successfully sent
   *
   * @throws {Error} Throws an error with message "failed to send chat message" if the RTM publish operation fails
   *
   * @since 1.7.0
   *
   * @example
   * ```typescript
   * await api.sendText('user123', {
   *   text: 'Hello, how can I help you?',
   *   priority: EChatMessagePriority.HIGH,
   *   responseInterruptable: false
   * });
   * ```
   */ async sendText(agentUserId, message) {
        await this.interrupt(agentUserId); // interrupt the agent before sending the message
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat] ${agentUserId}`, message);
        const { rtmEngine } = this.getCfg();
        // Check if RTM engine is available and has publish method
        if (!rtmEngine) {
            throw new Error("RTM engine is not initialized");
        }
        if (typeof rtmEngine.publish !== "function") {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] [chat]`, "RTM engine does not have publish method", Object.keys(rtmEngine));
            throw new Error("RTM engine does not have publish method");
        }
        const payload = {
            priority: message.priority ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessagePriority"].INTERRUPTED,
            interruptable: true,
            message: message.text ?? ""
        };
        try {
            const payloadStr = JSON.stringify(payload);
            const options = {
                channelType: "USER",
                customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].USER_TRANSCRIPTION
            };
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `msg: [traceID: ${traceId}] rtm publish`, payloadStr);
            // Check if publish method exists, if not try alternative methods
            let result;
            if (typeof rtmEngine.publish === "function") {
                result = await rtmEngine.publish(agentUserId, payloadStr, options);
            } else if (typeof rtmEngine.sendMessageToPeer === "function") {
                // Fallback to sendMessageToPeer if publish doesn't exist
                result = await rtmEngine.sendMessageToPeer(agentUserId, payloadStr);
            } else {
                throw new Error("RTM client does not have publish or sendMessageToPeer method");
            }
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat]`, "sucessfully sent chat message", result);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            const errorDetails = error instanceof Error ? error.stack : JSON.stringify(error);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] [chat]`, "failed to send chat message", errorMessage, errorDetails);
            throw new Error(`failed to send chat message: ${errorMessage}`);
        }
    }
    /**
   * Sends an image message to a specific agent user through RTM (Real-Time Messaging).
   *
   * @param agentUserId - The unique identifier of the agent user to send the image to
   * @param message - The image message object containing UUID and either URL or base64 data
   * @param message.uuid - Unique identifier for the message
   * @param message.url - Optional URL of the image to send
   * @param message.base64 - Optional base64 encoded image data
   *
   * @throws {Error} Throws an error with message "failed to send chat message" if the RTM publish operation fails
   *
   * @returns Promise that resolves when the image message is successfully sent
   *
   * @since 1.7.0
   *
   * @example
   * ```typescript
   * await sendImage('user123', {
   *   uuid: 'msg-456',
   *   url: 'https://example.com/image.jpg'
   * });
   * ```
   */ async sendImage(agentUserId, message) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat] ${agentUserId}`, message);
        const { rtmEngine } = this.getCfg();
        const payload = {
            uuid: message.uuid,
            image_url: message?.url || "",
            image_base64: message?.base64 || ""
        };
        try {
            const payloadStr = JSON.stringify(payload);
            const options = {
                channelType: "USER",
                customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].IMAGE_UPLOAD
            };
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `msg: [traceID: ${traceId}] rtm publish`, payloadStr);
            const result = await rtmEngine.publish(agentUserId, payloadStr, options);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [chat]`, "sucessfully sent chat message", result);
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] [chat]`, "failed to send chat message", error);
            throw new Error("failed to send chat message");
        }
    }
    /**
   * Sends an interrupt message to the specified agent user.
   *
   * This method publishes an interrupt message to the RTM channel of the specified agent user.
   * It is used to signal that the current interaction should be interrupted.
   *
   * @remarks
   * - Must call {@link init} before using this method
   * - Throws error if not initialized or if sending fails
   *
   * @param agentUserId - The user ID of the agent to interrupt
   * @since 1.6.0
   */ async interrupt(agentUserId) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [interrupt]`, agentUserId);
        const { rtmEngine } = this.getCfg();
        const options = {
            channelType: "USER",
            customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].MSG_INTERRUPTED
        };
        const messageStr = JSON.stringify({
            customType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].MSG_INTERRUPTED
        });
        try {
            const result = await rtmEngine.publish(agentUserId, messageStr, options);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] [interrupt]`, "sucessfully sent interrupt message", result);
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] [interrupt]`, "failed to send interrupt message", error);
            throw new Error("failed to send interrupt message");
        }
    }
    onChatHistoryUpdated(chatHistory) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].TRANSCRIPT_UPDATED}`, chatHistory);
        // Always emit, even if logging is disabled
        console.log("[ConversationalAIAPI] Emitting TRANSCRIPT_UPDATED:", chatHistory);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].TRANSCRIPT_UPDATED, chatHistory);
    }
    onAgentStateChanged(agentUserId, event) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_STATE_CHANGED}`, agentUserId, event);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_STATE_CHANGED, agentUserId, event);
    }
    onAgentInterrupted(agentUserId, event) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_INTERRUPTED}`, agentUserId, event);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_INTERRUPTED, agentUserId, event);
    }
    onDebugLog(message) {
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].DEBUG_LOG, message);
    }
    onAgentMetrics(agentUserId, metrics) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_METRICS}`, agentUserId, metrics);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_METRICS, agentUserId, metrics);
    }
    onAgentError(agentUserId, error) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_ERROR}`, agentUserId, error);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].AGENT_ERROR, agentUserId, error);
    }
    onMessageReceiptUpdated(agentUserId, messageReceipt) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_RECEIPT_UPDATED}`, agentUserId, messageReceipt);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_RECEIPT_UPDATED, agentUserId, messageReceipt);
    }
    onMessageError(agentUserId, error) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_ERROR}`, agentUserId, error);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_ERROR, agentUserId, error);
    }
    onMessageSalStatus(agentUserId, message) {
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_SAL_STATUS}`, agentUserId, message);
        this.emit(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].MESSAGE_SAL_STATUS, agentUserId, message);
    }
    bindRtcEvents() {
        // this.getCfg().rtcEngine.on(
        //   ERTCEvents.AUDIO_METADATA,
        //   this._handleRtcAudioMetadata.bind(this)
        // )
        this.getCfg().rtcEngine.on(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS, this._handleRtcAudioPTS.bind(this));
    }
    unbindRtcEvents() {
        // this.getCfg().rtcEngine.off(
        //   ERTCEvents.AUDIO_METADATA,
        //   this._handleRtcAudioMetadata.bind(this)
        // )
        this.getCfg().rtcEngine.off(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS, this._handleRtcAudioPTS.bind(this));
    }
    bindRtmEvents() {
        // - message
        this.getCfg().rtmEngine.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE, this._handleRtmMessage.bind(this));
        // - presence
        this.getCfg().rtmEngine.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE, this._handleRtmPresence.bind(this));
        // - status
        this.getCfg().rtmEngine.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].STATUS, this._handleRtmStatus.bind(this));
    }
    unbindRtmEvents() {
        // - message
        this.getCfg().rtmEngine.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE, this._handleRtmMessage.bind(this));
        // - presence
        this.getCfg().rtmEngine.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE, this._handleRtmPresence.bind(this));
        // - status
        this.getCfg().rtmEngine.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].STATUS, this._handleRtmStatus.bind(this));
    }
    // private _handleRtcAudioMetadata(metadata: Uint8Array) {
    //   try {
    //     const pts64 = Number(new DataView(metadata.buffer).getBigUint64(0, true))
    //     this.callMessagePrint(
    //       ELoggerType.debug,
    //       `<<< ${ERTCEvents.AUDIO_METADATA}`,
    //       pts64
    //     )
    //     this.covSubRenderController.setPts(pts64)
    //   } catch (error) {
    //     this.callMessagePrint(
    //       ELoggerType.error,
    //       `<<< ${ERTCEvents.AUDIO_METADATA}`,
    //       metadata,
    //       error
    //     )
    //   }
    // }
    _handleRtcAudioPTS(pts) {
        try {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `<<< ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS}`, pts);
            this.covSubRenderController.setPts(pts);
        } catch (error) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `<<< ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTCEvents"].AUDIO_PTS}`, pts, error);
        }
    }
    _handleRtmMessage(message) {
        const traceId = genTranceID();
        // Debug: Uncomment if needed for ASR debugging
        // console.log("[ConversationalAIAPI] RTM message received:", { publisher: message.publisher, messageType: message.messageType, traceId });
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, `Publisher: ${message.publisher}, type: ${message.messageType}`);
        // Handle the message
        try {
            const messageData = message.message;
            // if string, parse it
            if (typeof messageData === "string") {
                const parsedMessage = JSON.parse(messageData);
                // Debug: Uncomment if needed
                // console.log("[ConversationalAIAPI] Parsed RTM message (string):", parsedMessage);
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, parsedMessage);
                this.covSubRenderController.handleMessage(parsedMessage, {
                    publisher: message.publisher
                });
                return;
            }
            // if Uint8Array, convert to string
            if (messageData instanceof Uint8Array) {
                const decoder = new TextDecoder("utf-8");
                const messageString = decoder.decode(messageData);
                const parsedMessage = JSON.parse(messageString);
                // Debug: Uncomment if needed
                // console.log("[ConversationalAIAPI] Parsed RTM message (Uint8Array):", parsedMessage);
                this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, parsedMessage);
                this.covSubRenderController.handleMessage(parsedMessage, {
                    publisher: message.publisher
                });
                return;
            }
            console.warn("[ConversationalAIAPI] Unsupported message type:", typeof messageData, messageData);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].warn, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, "Unsupported message type received");
        } catch (error) {
            console.error("[ConversationalAIAPI] Failed to parse RTM message:", error, message);
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].error, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].MESSAGE}`, "Failed to parse message", error);
        }
    }
    _handleRtmPresence(presence) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE}`, `Publisher: ${presence.publisher}`);
        // Handle the presence event
        const stateChanged = presence.stateChanged;
        if (stateChanged?.state && stateChanged?.turn_id) {
            this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE}`, `State changed: ${stateChanged.state}, Turn ID: ${stateChanged.turn_id}, timestamp: ${presence.timestamp}`);
            this.covSubRenderController.handleAgentStatus(presence);
        }
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].PRESENCE}`, "No state change detected, skipping handling presence event");
    }
    _handleRtmStatus(status) {
        const traceId = genTranceID();
        this.callMessagePrint(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELoggerType"].debug, `>>> [trancID:${traceId}] ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERTMEvents"].STATUS}`, status);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChatInterface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInterface",
    ()=>ChatInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAgora$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAgora.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/conversational-ai-api/type.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ChatInterface({ product, onClose }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitializing, setIsInitializing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [agentVolume, setAgentVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100); // Agent volume (0-100)
    const [waitingForAgent, setWaitingForAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Track if we're waiting for agent response
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Minimized state
    const [microphones, setMicrophones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Available microphones
    const [selectedMicrophone, setSelectedMicrophone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Selected microphone ID
    const [agoraConfig, setAgoraConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [agentId, setAgentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInitializingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rtmClientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const convoApiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize Agora RTC connection
    const agora = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAgora$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgora"])(agoraConfig ? {
        appId: agoraConfig.appId,
        channel: agoraConfig.channel,
        token: agoraConfig.token,
        uid: agoraConfig.uid
    } : {
        appId: "",
        channel: "",
        token: "",
        uid: 0
    });
    // Render video to canvas with transparent background (chroma key removal)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (!agora?.remoteVideoTrack || !canvasRef.current) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d", {
                willReadFrequently: true
            });
            if (!ctx) return;
            // Create a hidden video element to play the track
            const videoElement = document.createElement("video");
            videoElement.autoplay = true;
            videoElement.playsInline = true;
            videoElement.style.display = "none";
            document.body.appendChild(videoElement);
            videoElementRef.current = videoElement;
            // Play the video track on the hidden element
            agora.remoteVideoTrack.play(videoElement);
            // Function to apply chroma key (green screen removal) - using improved algorithm
            const applyChromaKey = {
                "ChatInterface.useEffect.applyChromaKey": (imageData)=>{
                    const data = imageData.data;
                    const greenThreshold = 100;
                    for(let i = 0; i < data.length; i += 4){
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        // Check if pixel is green (green screen detection)
                        // Green is significantly more than red and blue
                        const isGreen = g > greenThreshold && g > r * 1.2 && g > b * 1.2;
                        if (isGreen) {
                            data[i + 3] = 0; // Make transparent
                        }
                    }
                    return imageData;
                }
            }["ChatInterface.useEffect.applyChromaKey"];
            // Function to draw frame with chroma key
            const drawFrame = {
                "ChatInterface.useEffect.drawFrame": ()=>{
                    if (!videoElement || videoElement.readyState !== videoElement.HAVE_ENOUGH_DATA) {
                        animationFrameRef.current = requestAnimationFrame(drawFrame);
                        return;
                    }
                    // Get actual video dimensions
                    const videoWidth = videoElement.videoWidth;
                    const videoHeight = videoElement.videoHeight;
                    if (videoWidth === 0 || videoHeight === 0) {
                        animationFrameRef.current = requestAnimationFrame(drawFrame);
                        return;
                    }
                    // Container dimensions
                    const containerWidth = 320; // w-80 = 320px
                    const containerHeight = 240; // h-[240px]
                    // Calculate aspect ratios
                    const aspectRatio = videoWidth / videoHeight;
                    // Calculate dimensions to maintain aspect ratio (fit within container)
                    let drawWidth = containerWidth;
                    let drawHeight = containerWidth / aspectRatio;
                    let offsetX = 0;
                    let offsetY = 0;
                    // If height exceeds container, scale to fit height instead
                    if (drawHeight > containerHeight) {
                        drawHeight = containerHeight;
                        drawWidth = containerHeight * aspectRatio;
                        offsetX = (containerWidth - drawWidth) / 2;
                    } else {
                        offsetY = (containerHeight - drawHeight) / 2;
                    }
                    // Set canvas size to match video dimensions for better quality
                    canvas.width = videoWidth;
                    canvas.height = videoHeight;
                    // Clear canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Draw video frame to canvas at full resolution
                    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                    // Get image data and apply chroma key
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const processedImageData = applyChromaKey(imageData);
                    ctx.putImageData(processedImageData, 0, 0);
                    // Continue animation loop
                    animationFrameRef.current = requestAnimationFrame(drawFrame);
                }
            }["ChatInterface.useEffect.drawFrame"];
            // Start the animation loop when video metadata is loaded
            videoElement.addEventListener("loadedmetadata", {
                "ChatInterface.useEffect": ()=>{
                    drawFrame();
                }
            }["ChatInterface.useEffect"]);
            // Also start if video is already loaded
            if (videoElement.readyState >= videoElement.HAVE_METADATA) {
                drawFrame();
            }
            // Cleanup function
            return ({
                "ChatInterface.useEffect": ()=>{
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                        animationFrameRef.current = null;
                    }
                    if (agora?.remoteVideoTrack) {
                        agora.remoteVideoTrack.stop();
                    }
                    if (videoElementRef.current) {
                        videoElementRef.current.remove();
                        videoElementRef.current = null;
                    }
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        agora?.remoteVideoTrack
    ]);
    // Update agent volume when remote audio track changes or volume changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (agora?.remoteAudioTrack) {
                agora.remoteAudioTrack.setVolume(agentVolume);
            }
        }
    }["ChatInterface.useEffect"], [
        agora?.remoteAudioTrack,
        agentVolume
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatInterface.useEffect"], [
        messages
    ]);
    // Initialize Agora session on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            const initializeAgora = {
                "ChatInterface.useEffect.initializeAgora": async ()=>{
                    if (isInitializingRef.current) return;
                    isInitializingRef.current = true;
                    try {
                        // Initialize Agora session
                        const initRes = await fetch("/api/agora/initialize", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                userId: Math.floor(Math.random() * 100000)
                            })
                        });
                        const initData = await initRes.json();
                        setAgoraConfig({
                            appId: initData.appId,
                            channel: initData.channel,
                            token: initData.token,
                            uid: initData.uid,
                            rtmUserId: initData.rtmUserId || initData.uid.toString()
                        });
                        // Start AI agent
                        const agentRes = await fetch("/api/agora/start-agent", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                channel: initData.channel,
                                userId: initData.uid,
                                token: initData.token,
                                productId: product.id
                            })
                        });
                        if (!agentRes.ok) {
                            const errorData = await agentRes.json();
                            throw new Error(errorData.error || `Failed to start agent: ${agentRes.status}`);
                        }
                        const agentData = await agentRes.json();
                        if (agentData.agent_id) {
                            setAgentId(agentData.agent_id);
                        }
                        // Set greeting message from ConvoAI if available
                        // Store it with uid so it doesn't get overwritten by transcript updates
                        const greetingMessage = agentData.greeting_message || agentData.properties?.llm?.greeting_message;
                        if (greetingMessage) {
                            setMessages([
                                {
                                    role: "assistant",
                                    content: greetingMessage,
                                    uid: "1000"
                                }
                            ]);
                        }
                        setIsInitializing(false);
                    } catch (error) {
                        console.error("Failed to initialize Agora:", error);
                        setIsInitializing(false);
                    }
                }
            }["ChatInterface.useEffect.initializeAgora"];
            initializeAgora();
        }
    }["ChatInterface.useEffect"], [
        product.id
    ]);
    // Get available microphones using Agora SDK
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            const getMicrophones = {
                "ChatInterface.useEffect.getMicrophones": async ()=>{
                    try {
                        if (!agora?.localAudioTrack) return;
                        const AgoraRTC = (await __turbopack_context__.A("[project]/node_modules/agora-rtc-sdk-ng/AgoraRTC_N-production.js [app-client] (ecmascript, async loader)")).default;
                        // Use Agora's getMicrophones method
                        const mics = await AgoraRTC.getMicrophones();
                        setMicrophones(mics);
                        if (mics.length > 0 && !selectedMicrophone) {
                            // Set the first microphone as default
                            setSelectedMicrophone(mics[0].deviceId);
                        }
                    } catch (error) {
                        console.error("Error getting microphones:", error);
                    }
                }
            }["ChatInterface.useEffect.getMicrophones"];
            if (("TURBOPACK compile-time value", "object") !== "undefined" && agora?.isConnected && agora?.localAudioTrack) {
                getMicrophones();
            }
        }
    }["ChatInterface.useEffect"], [
        agora?.isConnected,
        agora?.localAudioTrack
    ]);
    // Initialize RTM and ConversationalAIAPI toolkit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (!agoraConfig || !agora?.client || ("TURBOPACK compile-time value", "object") === "undefined" || convoApiRef.current) {
                return;
            }
            let isMounted = true;
            const initToolkit = {
                "ChatInterface.useEffect.initToolkit": async ()=>{
                    try {
                        // Initialize RTM client
                        const AgoraRTM = await __turbopack_context__.A("[project]/node_modules/agora-rtm-sdk/agora-rtm.js [app-client] (ecmascript, async loader)");
                        const RTM = AgoraRTM.default?.RTM || AgoraRTM.RTM || AgoraRTM.default;
                        if (!RTM || typeof RTM !== "function") {
                            throw new Error("Failed to get RTM class");
                        }
                        const rtmClient = new RTM(agoraConfig.appId, agoraConfig.rtmUserId);
                        rtmClientRef.current = rtmClient;
                        await rtmClient.login({
                            token: agoraConfig.token
                        });
                        if (!isMounted) {
                            await rtmClient.logout().catch({
                                "ChatInterface.useEffect.initToolkit": ()=>{}
                            }["ChatInterface.useEffect.initToolkit"]);
                            return;
                        }
                        // Initialize ConversationalAIAPI toolkit
                        const convoAPI = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationalAIAPI"].init({
                            rtcEngine: agora.client,
                            rtmEngine: rtmClient,
                            renderMode: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETranscriptHelperMode"].TEXT,
                            enableLog: true
                        });
                        convoApiRef.current = convoAPI;
                        // Subscribe to channel messages (required before agent starts)
                        await convoAPI.subscribeMessage(agoraConfig.channel);
                        // Listen for transcript updates (both user and agent)
                        // Use the EventHelper's on method properly
                        const transcriptHandler = {
                            "ChatInterface.useEffect.initToolkit.transcriptHandler": (transcripts)=>{
                                if (!isMounted) return;
                                // Get user's UID for comparison
                                const userRtcUid = agoraConfig?.uid?.toString() || "";
                                const userRtmUid = agoraConfig?.rtmUserId || "";
                                const newMessages = transcripts.filter({
                                    "ChatInterface.useEffect.initToolkit.transcriptHandler.newMessages": (item)=>{
                                        // Check if item has text - could be in item.text or (item as any).data?.text (Frank's structure)
                                        const itemAny = item;
                                        const hasText = item.text && item.text.trim() || itemAny.data?.text && itemAny.data.text.trim();
                                        // Only show final messages (not intermediate/transcribing ones)
                                        const isFinal = item.status === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETurnStatus"].END || itemAny.data?.isFinal === true || itemAny.data?.final === true || itemAny.status && String(itemAny.status) === "final";
                                        if (!hasText) {
                                            return false;
                                        }
                                        // IMPORTANT: Check for user transcription FIRST to avoid misidentifying
                                        // User transcriptions can come in different formats:
                                        // 1. metadata.object === "user.transcription"
                                        // 2. data.speaker includes "user"
                                        // 3. UID matches the user's RTC UID (not "1000" which is agent)
                                        // 4. publisher matches user's RTM user ID
                                        const itemUid = String(item.uid || itemAny.agentUserId || itemAny.data?.agentUserId || itemAny.publisher || "unknown");
                                        // Check if UID matches user's UID (either RTC or RTM)
                                        const matchesUserUid = itemUid === userRtcUid || itemUid === userRtmUid || String(item.uid) === userRtcUid || String(itemAny.publisher) === userRtmUid;
                                        // Check if UID is NOT the agent (agent is always "1000")
                                        const isNotAgentUid = itemUid !== "1000" && itemUid !== "unknown";
                                        const isUserMessage = item.metadata?.object === "user.transcription" || itemAny.data?.speaker?.toLowerCase().includes("user") || itemAny.object === "user.transcription" || matchesUserUid || isNotAgentUid && itemUid !== "" && !item.metadata?.object?.includes("assistant") && !itemAny.data?.speaker?.toLowerCase().includes("assistant");
                                        const isAgentMessage = !isUserMessage && (itemUid === "1000" || item.metadata?.object === "assistant.transcription" || itemAny.object === "assistant.transcription" || itemAny.data?.speaker?.toLowerCase().includes("assistant") || item.metadata && "quiet" in item.metadata);
                                        // Show ALL user messages (including intermediate) so voice transcriptions don't disappear
                                        // Show ALL agent messages (including intermediate) for real-time updates
                                        // We'll handle deduplication in the message update logic below
                                        // Only filter out if it's neither user nor agent
                                        if (!isUserMessage && !isAgentMessage) {
                                            return false;
                                        }
                                        return true;
                                    }
                                }["ChatInterface.useEffect.initToolkit.transcriptHandler.newMessages"]).map({
                                    "ChatInterface.useEffect.initToolkit.transcriptHandler.newMessages": (item)=>{
                                        // Support both our structure (item.text) and Frank's structure (item.data.text)
                                        const itemAny = item;
                                        const text = item.text || itemAny.data?.text || "";
                                        const itemUid = String(item.uid || itemAny.agentUserId || itemAny.data?.agentUserId || itemAny.publisher || "unknown");
                                        // IMPORTANT: Check for user transcription FIRST to avoid misidentifying user messages as agent
                                        // Use the same detection logic as in the filter above
                                        const matchesUserUid = itemUid === userRtcUid || itemUid === userRtmUid || String(item.uid) === userRtcUid || String(itemAny.publisher) === userRtmUid;
                                        const isNotAgentUid = itemUid !== "1000" && itemUid !== "unknown";
                                        const isUserMessage = item.metadata?.object === "user.transcription" || itemAny.data?.speaker?.toLowerCase().includes("user") || itemAny.object === "user.transcription" || matchesUserUid || isNotAgentUid && itemUid !== "" && !item.metadata?.object?.includes("assistant") && !itemAny.data?.speaker?.toLowerCase().includes("assistant");
                                        // Check if it's agent: UID is "1000" or the metadata indicates it's an agent transcription
                                        // Only mark as agent if it's NOT a user message
                                        const isAgent = !isUserMessage && (itemUid === "1000" || item.metadata?.object === "assistant.transcription" || itemAny.object === "assistant.transcription" || itemAny.data?.speaker?.toLowerCase().includes("assistant") || item.metadata && "quiet" in item.metadata); // Agent transcriptions have "quiet" field
                                        // Debug: Uncomment if needed for ASR debugging
                                        // console.log("[ChatInterface] Transcript item:", { itemUid, text: text.substring(0, 50), isUserMessage, isAgent });
                                        return {
                                            role: isAgent ? "assistant" : "user",
                                            content: text,
                                            uid: itemUid,
                                            turnId: item.turn_id,
                                            turn_id: item.turn_id,
                                            timestamp: item._time || Date.now()
                                        };
                                    }
                                }["ChatInterface.useEffect.initToolkit.transcriptHandler.newMessages"]);
                                // Debug: Uncomment if needed
                                // console.log("[ChatInterface] New messages from transcripts:", newMessages);
                                // Check if we have any agent messages to clear waiting state
                                const hasAgentMessage = newMessages.some({
                                    "ChatInterface.useEffect.initToolkit.transcriptHandler.hasAgentMessage": (msg)=>msg.role === "assistant" && msg.content.trim()
                                }["ChatInterface.useEffect.initToolkit.transcriptHandler.hasAgentMessage"]);
                                if (hasAgentMessage) {
                                    setWaitingForAgent(false);
                                }
                                // Update messages, tracking by turn_id to replace intermediate messages with final ones
                                setMessages({
                                    "ChatInterface.useEffect.initToolkit.transcriptHandler": (prev)=>{
                                        // FIRST: Remove ALL loading messages from prev - they will be replaced by actual transcripts
                                        const prevWithoutLoading = prev.filter({
                                            "ChatInterface.useEffect.initToolkit.transcriptHandler.prevWithoutLoading": (msg)=>!msg.isLoading
                                        }["ChatInterface.useEffect.initToolkit.transcriptHandler.prevWithoutLoading"]);
                                        // Use a single map to track messages by key, preserving order
                                        const messagesMap = new Map();
                                        // First, add all existing messages from prev (without loading ones)
                                        // Use index as part of key to ensure uniqueness and preserve order
                                        prevWithoutLoading.forEach({
                                            "ChatInterface.useEffect.initToolkit.transcriptHandler": (msg, index)=>{
                                                const turnId = msg.turnId || msg.turn_id;
                                                // Include role and index in key to prevent collisions between user and agent messages
                                                const key = turnId !== undefined && turnId !== null && turnId !== -1 ? `${msg.role}-${msg.uid || "unknown"}-${turnId}` : `${msg.role}-${msg.uid || "unknown"}-${index}-${msg.content || "no-content"}`;
                                                messagesMap.set(key, msg);
                                            }
                                        }["ChatInterface.useEffect.initToolkit.transcriptHandler"]);
                                        // Then, update/add new messages (this will replace existing ones with same key)
                                        newMessages.forEach({
                                            "ChatInterface.useEffect.initToolkit.transcriptHandler": (msg)=>{
                                                if (!msg.content.trim()) return;
                                                const itemAny = msg;
                                                const turnId = itemAny.turnId || itemAny.turn_id;
                                                // For user messages, FIRST find and delete ANY loading message from this user
                                                // This must happen before key generation to ensure loading messages are removed
                                                if (msg.role === "user" && msg.uid) {
                                                    let loadingKeysToDelete = [];
                                                    let shouldSkip = false;
                                                    // Find ALL loading messages from this user and mark them for deletion
                                                    for (const [existingKey, existingMsg] of messagesMap.entries()){
                                                        const isLoading = existingMsg.isLoading === true;
                                                        const isUser = existingMsg.role === "user";
                                                        const sameUid = String(existingMsg.uid) === String(msg.uid);
                                                        const exactContentMatch = existingMsg.content.trim().toLowerCase() === msg.content.trim().toLowerCase();
                                                        if (!isUser || !sameUid) {
                                                            continue; // Skip messages that don't match user/uid
                                                        }
                                                        // If it's a loading message, mark it for deletion
                                                        if (isLoading) {
                                                            loadingKeysToDelete.push(existingKey);
                                                        } else if (exactContentMatch && !isLoading) {
                                                            // Exact duplicate (non-loading) - skip adding this transcript
                                                            shouldSkip = true;
                                                            break; // Found duplicate, exit loop
                                                        }
                                                    }
                                                    // Delete ALL loading messages found (do this after the loop to avoid modifying while iterating)
                                                    loadingKeysToDelete.forEach({
                                                        "ChatInterface.useEffect.initToolkit.transcriptHandler": (key)=>{
                                                            messagesMap.delete(key);
                                                        }
                                                    }["ChatInterface.useEffect.initToolkit.transcriptHandler"]);
                                                    if (shouldSkip) {
                                                        return; // Don't add this message at all - we already have it
                                                    }
                                                }
                                                // Now generate the key for this message
                                                // Include role in key to prevent collisions between user and agent messages
                                                const key = turnId !== undefined && turnId !== null && turnId !== -1 ? `${msg.role}-${msg.uid || "unknown"}-${turnId}` : `${msg.role}-${msg.uid || "unknown"}-${msg.content || "no-content"}`;
                                                const existingMsg = messagesMap.get(key);
                                                if (existingMsg) {
                                                    // Only replace if it's the same role (user messages should only replace user messages, etc.)
                                                    // This prevents agent messages from overwriting user messages and vice versa
                                                    if (existingMsg.role === msg.role) {
                                                        // Replace existing message with same turn_id and role
                                                        // For agent messages, always update (for real-time streaming)
                                                        // For user messages, always update (to replace intermediate with final, or update final)
                                                        const isAgentMsg = msg.role === "assistant";
                                                        // Always update - for agents it's real-time, for users we want final versions
                                                        messagesMap.set(key, msg);
                                                    } else {
                                                        // Different role - this shouldn't happen with the new key format, but log it just in case
                                                        console.warn("[ChatInterface] Key collision detected between different roles:", {
                                                            key,
                                                            existingRole: existingMsg.role,
                                                            newRole: msg.role,
                                                            existingContent: existingMsg.content.substring(0, 50),
                                                            newContent: msg.content.substring(0, 50)
                                                        });
                                                        // Add the new message with a modified key to avoid collision
                                                        const uniqueKey = `${key}-${Date.now()}`;
                                                        messagesMap.set(uniqueKey, msg);
                                                    }
                                                } else {
                                                    // New message with this key (loading message already deleted if found)
                                                    messagesMap.set(key, msg);
                                                }
                                            }
                                        }["ChatInterface.useEffect.initToolkit.transcriptHandler"]);
                                        // Convert to array for sorting
                                        const uniqueMessages = Array.from(messagesMap.values());
                                        // FINAL SAFETY CHECK: Remove any remaining loading messages
                                        const messagesWithoutLoading = uniqueMessages.filter({
                                            "ChatInterface.useEffect.initToolkit.transcriptHandler.messagesWithoutLoading": (msg)=>!msg.isLoading
                                        }["ChatInterface.useEffect.initToolkit.transcriptHandler.messagesWithoutLoading"]);
                                        // Sort messages by timestamp first (chronological order), then by turn_id as fallback
                                        // This ensures messages appear in the order they were actually sent/received
                                        const sortedMessages = messagesWithoutLoading.sort({
                                            "ChatInterface.useEffect.initToolkit.transcriptHandler.sortedMessages": (a, b)=>{
                                                // Primary sort: timestamp (actual chronological order)
                                                const timestampA = a.timestamp || 0;
                                                const timestampB = b.timestamp || 0;
                                                if (timestampA !== timestampB) {
                                                    return timestampA - timestampB; // Ascending: older first, newer at bottom
                                                }
                                                // Secondary sort: turn_id (if timestamps are the same)
                                                const turnIdA = a.turnId || a.turn_id || 0;
                                                const turnIdB = b.turnId || b.turn_id || 0;
                                                return turnIdA - turnIdB;
                                            }
                                        }["ChatInterface.useEffect.initToolkit.transcriptHandler.sortedMessages"]);
                                        console.log("[ChatInterface] Updated messages (sorted, loading removed):", sortedMessages);
                                        return sortedMessages;
                                    }
                                }["ChatInterface.useEffect.initToolkit.transcriptHandler"]);
                            }
                        }["ChatInterface.useEffect.initToolkit.transcriptHandler"];
                        // Subscribe to the event using the EventHelper's on method
                        convoAPI.on(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EConversationalAIAPIEvents"].TRANSCRIPT_UPDATED, transcriptHandler);
                    } catch (error) {
                        console.error("Toolkit init error:", error);
                    }
                }
            }["ChatInterface.useEffect.initToolkit"];
            initToolkit();
            return ({
                "ChatInterface.useEffect": ()=>{
                    isMounted = false;
                    if (convoApiRef.current) {
                        try {
                            // Remove all event listeners before cleanup
                            convoApiRef.current.removeAllEventListeners();
                            // Note: unsubscribe is async but cleanup can't be async, so we call it without await
                            convoApiRef.current.unsubscribe().catch({
                                "ChatInterface.useEffect": ()=>{
                                // Ignore unsubscribe errors in cleanup
                                }
                            }["ChatInterface.useEffect"]);
                            convoApiRef.current.destroy();
                        } catch (e) {
                        // Ignore cleanup errors
                        }
                        convoApiRef.current = null;
                    }
                    if (rtmClientRef.current) {
                        rtmClientRef.current.logout().catch({
                            "ChatInterface.useEffect": ()=>{}
                        }["ChatInterface.useEffect"]);
                        rtmClientRef.current = null;
                    }
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        agoraConfig,
        agora?.client
    ]);
    const sendMessage = async ()=>{
        if (!input.trim() || isLoading || !convoApiRef.current || !agentId) return;
        const userMessage = input;
        setInput("");
        setIsLoading(true);
        setWaitingForAgent(true); // Start waiting for agent response
        // Add a loading indicator (3 dots) instead of the actual message
        // The actual message will come from the transcription event
        const loadingTimestamp = Date.now();
        setMessages((prev)=>{
            const loadingMsg = {
                role: "user",
                content: "",
                uid: agoraConfig?.rtmUserId,
                turnId: -1,
                turn_id: -1,
                timestamp: loadingTimestamp,
                isLoading: true
            };
            // Add to end and sort to maintain order
            const updated = [
                ...prev,
                loadingMsg
            ].sort((a, b)=>{
                const timestampA = a.timestamp || 0;
                const timestampB = b.timestamp || 0;
                if (timestampA !== timestampB) return timestampA - timestampB;
                const turnIdA = a.turnId || a.turn_id || 0;
                const turnIdB = b.turnId || b.turn_id || 0;
                return turnIdA - turnIdB;
            });
            return updated;
        });
        try {
            // Use toolkit's sendText method
            const message = {
                messageType: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessageType"].TEXT,
                text: userMessage,
                priority: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$conversational$2d$ai$2d$api$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EChatMessagePriority"].INTERRUPTED,
                responseInterruptable: true
            };
            await convoApiRef.current.sendText("1000", message);
            setIsLoading(false);
        // Keep waitingForAgent true until agent responds
        } catch (error) {
            console.error("Chat error:", error);
            console.error("Error details:", error?.message, error?.stack);
            // Remove loading message on error
            setMessages((prev)=>prev.filter((msg)=>!msg.isLoading));
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "Sorry, I encountered an error. Please try again."
                    }
                ]);
            setIsLoading(false);
            setWaitingForAgent(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    const handleEndCall = async ()=>{
        // Call leave endpoint for the Agora Conversational AI agent
        if (agentId) {
            try {
                await fetch("/api/agora/leave-agent", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        agentId
                    })
                });
            } catch (e) {
            // Ignore errors when leaving agent
            }
        }
        if (agora) {
            agora.leave();
        }
        if (convoApiRef.current) {
            try {
                await convoApiRef.current.unsubscribe();
                convoApiRef.current.destroy();
            } catch (e) {
            // Ignore cleanup errors
            }
            convoApiRef.current = null;
        }
        if (rtmClientRef.current) {
            rtmClientRef.current.logout().catch(()=>{});
            rtmClientRef.current = null;
        }
        onClose();
    };
    const handleClose = ()=>{
        handleEndCall();
    };
    const handleToggleMute = ()=>{
        if (agora) {
            agora.toggleMute();
        }
    };
    const handleAgentVolumeChange = (e)=>{
        const newVolume = parseInt(e.target.value);
        setAgentVolume(newVolume);
        if (agora?.remoteAudioTrack) {
            agora.remoteAudioTrack.setVolume(newVolume);
        }
    };
    const handleVolumeMin = ()=>{
        setAgentVolume(0);
        if (agora?.remoteAudioTrack) {
            agora.remoteAudioTrack.setVolume(0);
        }
    };
    const handleVolumeMax = ()=>{
        setAgentVolume(100);
        if (agora?.remoteAudioTrack) {
            agora.remoteAudioTrack.setVolume(100);
        }
    };
    // Handle microphone change
    const handleMicrophoneChange = async (e)=>{
        const deviceId = e.target.value;
        if (!agora?.localAudioTrack) {
            console.error("Local audio track not available");
            return;
        }
        const previousDeviceId = selectedMicrophone;
        setSelectedMicrophone(deviceId);
        try {
            // Use setDevice method on the microphone audio track
            await agora.localAudioTrack.setDevice(deviceId);
            console.log("Microphone changed to:", deviceId);
        } catch (error) {
            console.error("Error setting microphone:", error);
            // Revert selection on error
            setSelectedMicrophone(previousDeviceId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            agora?.remoteVideoTrack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: videoContainerRef,
                className: `fixed w-80 h-[240px]`,
                style: {
                    zIndex: 45,
                    // Position directly on top with no gap
                    // Chat container: bottom-6 (24px) + h-[400px] = top edge at 424px
                    // Overlap by 30px to compensate for video/canvas gap when expanded
                    // When minimized: button is at bottom-6 (24px), button is ~40-50px tall, so top is at ~64-74px
                    // Overlap by 40px (30px + 10px more) to compensate for canvas/video gap
                    // When minimized, center Effie over the button
                    // Button is at right-6 (24px = 1.5rem), button is ~180px wide
                    // To perfectly center: button center is at 24px + 90px = 114px from right
                    // Effie (320px wide) center should be at 114px from right
                    // So Effie's right edge = 114px + 160px = 274px from right
                    // But since Effie is wider, align right edges and use transform to shift left
                    bottom: isMinimized ? '34px' : '394px',
                    right: isMinimized ? '1.5rem' : '1.5rem',
                    transform: isMinimized ? 'translateX(70px)' : 'none',
                    pointerEvents: 'none' // Always allow clicks through so buttons are clickable
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "w-full h-full object-contain",
                    style: {
                        backgroundColor: 'transparent',
                        display: 'block'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 885,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 863,
                columnNumber: 9
            }, this),
            isMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsMinimized(false),
                    className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium transition",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 901,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 902,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 900,
                                    columnNumber: 15
                                }, this),
                                agora?.isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 905,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 899,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "AI Assistant"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 908,
                            columnNumber: 13
                        }, this),
                        agora?.isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs bg-green-500 px-2 py-0.5 rounded-full",
                            children: "Active"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 910,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 895,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 894,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 z-50 w-80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-2xl border border-gray-200 h-[400px] flex flex-col overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-2.5 border-b border-gray-200 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-8 h-8 rounded-full flex items-center justify-center ${agora?.isConnected ? "bg-green-100" : "bg-gray-100"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `w-4 h-4 ${agora?.isConnected ? "text-green-600" : "text-gray-400"}`,
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChatInterface.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ChatInterface.tsx",
                                                                lineNumber: 937,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 15
                                                }, this),
                                                agora?.isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 923,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-semibold text-gray-900",
                                                    children: "AI Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 15
                                                }, this),
                                                isInitializing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-500",
                                                    children: "Connecting..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 17
                                                }, this) : agora?.isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-green-600 font-medium",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 17
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-500",
                                                    children: "Ready"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 944,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 922,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMinimized(true),
                                            className: "p-1.5 hover:bg-gray-100 rounded-lg transition text-gray-600",
                                            title: "Minimize",
                                            "aria-label": "Minimize",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M20 12H4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 972,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 966,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 960,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleEndCall,
                                            disabled: isInitializing,
                                            className: "bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded-lg transition font-medium flex items-center justify-center gap-1.5 text-xs relative",
                                            style: {
                                                zIndex: 60
                                            },
                                            title: "End conversation",
                                            "aria-label": "End conversation",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-3.5 h-3.5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M16 8l-8 8m0 0l-2-2m2 2l2-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "End"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 980,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 959,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 921,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-2.5 space-y-2 bg-gray-50 text-xs",
                            children: [
                                messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[85%] rounded-lg px-3 py-1.5 ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-white text-gray-800 shadow-sm border border-gray-100"}`,
                                            children: msg.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-75",
                                                        style: {
                                                            animationDelay: "0.1s"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-75",
                                                        style: {
                                                            animationDelay: "0.2s"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 1029,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1023,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs leading-relaxed whitespace-pre-wrap",
                                                children: msg.content
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 15
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 13
                                    }, this)),
                                waitingForAgent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white text-gray-800 rounded-lg px-3 py-1.5 shadow-sm border border-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1047,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: "0.1s"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1048,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: "0.2s"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1052,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1046,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1045,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1060,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 1007,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2.5 border-t border-gray-200 bg-white space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleToggleMute,
                                            disabled: !agora?.isConnected || isInitializing,
                                            className: `p-1.5 rounded-lg transition ${agora?.isMuted ? "bg-red-100 text-red-700 hover:bg-red-200" : "bg-blue-100 text-blue-700 hover:bg-blue-200"} disabled:opacity-50 disabled:cursor-not-allowed`,
                                            title: agora?.isMuted ? "Unmute microphone" : "Mute microphone",
                                            "aria-label": agora?.isMuted ? "Unmute" : "Mute",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3.5 h-3.5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: agora?.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1093,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1101,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleVolumeMin,
                                            disabled: !agora?.isConnected || isInitializing,
                                            className: "p-1 rounded transition text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
                                            title: "Volume 0",
                                            "aria-label": "Set volume to 0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-3 h-3",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1119,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: agentVolume,
                                            onChange: handleAgentVolumeChange,
                                            disabled: !agora?.isConnected || isInitializing,
                                            className: "flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                            title: `Agent volume: ${agentVolume}%`
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1133,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleVolumeMax,
                                            disabled: !agora?.isConnected || isInitializing,
                                            className: "p-1 rounded transition text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
                                            title: "Volume 100",
                                            "aria-label": "Set volume to 100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1156,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1150,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1143,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1066,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            onKeyPress: handleKeyPress,
                                            className: "flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 bg-gray-50",
                                            disabled: isLoading || isInitializing || !convoApiRef.current,
                                            placeholder: "Type a message..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: sendMessage,
                                            disabled: isLoading || !input.trim() || isInitializing || !convoApiRef.current || !agentId,
                                            className: "bg-gray-700 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded-lg text-xs transition font-medium",
                                            title: !convoApiRef.current || !agentId ? "Waiting for agent to be ready..." : "",
                                            children: "Send"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1177,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1167,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer text-[10px] text-gray-500 hover:text-gray-700 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-2.5 h-2.5 transition-transform group-open:rotate-90",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 1206,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 15
                                                }, this),
                                                "Audio settings"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1.5 pt-1.5 border-t border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] text-gray-600 mb-1",
                                                    children: "Microphone"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedMicrophone,
                                                    onChange: handleMicrophoneChange,
                                                    disabled: !agora?.isConnected || isInitializing,
                                                    className: "w-full text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent disabled:opacity-50",
                                                    children: microphones.map((mic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: mic.deviceId,
                                                            children: mic.label || `Microphone ${mic.deviceId.slice(0, 8)}`
                                                        }, mic.deviceId, false, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1226,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1198,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 1064,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 919,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 917,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ChatInterface, "SdSOoEcCN2LkLpqxuocwemR11js=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAgora$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAgora"]
    ];
});
_c = ChatInterface;
var _c;
__turbopack_context__.k.register(_c, "ChatInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AIAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAssistant",
    ()=>AIAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatInterface.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AIAssistant({ product }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition hover:scale-110 z-50 flex items-center justify-center group",
                "aria-label": "Open AI Voice Assistant",
                title: "Talk to AI Assistant",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            }, void 0, false, {
                                fileName: "[project]/components/AIAssistant.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AIAssistant.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-8 h-8 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAssistant.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-10 h-10 border-2 border-white rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-ping",
                                    style: {
                                        animationDelay: "0.2s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/AIAssistant.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AIAssistant.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AIAssistant.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AIAssistant.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInterface"], {
                product: product,
                onClose: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/AIAssistant.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(AIAssistant, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = AIAssistant;
var _c;
__turbopack_context__.k.register(_c, "AIAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AgoraBranding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Agora Branding Component
__turbopack_context__.s([
    "AgoraBranding",
    ()=>AgoraBranding,
    "AgoraLogo",
    ()=>AgoraLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AgoraLogo({ className = "h-4" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 399.34668 137.06667",
        className: className,
        role: "img",
        "aria-label": "Agora",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m 1676.5,1027.77 c -168.56,0 -305.69,-137.129 -305.69,-305.68 0,-168.551 137.13,-305.672 305.69,-305.672 168.55,0 305.66,137.121 305.66,305.672 0,168.551 -137.11,305.68 -305.66,305.68 m 0,-474.231 c -92.95,0 -168.56,75.609 -168.56,168.551 0,92.937 75.61,168.551 168.56,168.551 92.93,0 168.55,-75.614 168.55,-168.551 0,-92.942 -75.62,-168.551 -168.55,-168.551",
                fill: "currentColor",
                fillRule: "nonzero",
                transform: "matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
            }, void 0, false, {
                fileName: "[project]/components/AgoraBranding.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m 2185.11,949.031 -3.85,-3.722 -4.07,-3.938 -2.68,4.988 -2.54,4.723 c -22.03,40.938 -62.59,69.108 -108.49,75.338 l -11.34,1.54 V 416.219 l 11.43,1.66 c 62.57,9.09 125.7,57.109 125.7,143.91 v 160.27 c 0,85.332 66.43,158.98 151.23,167.671 l 8.98,0.918 v 137.222 l -10.97,-1.07 c -53.18,-5.22 -106.22,-32.109 -153.4,-77.769",
                fill: "currentColor",
                fillRule: "nonzero",
                transform: "matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
            }, void 0, false, {
                fileName: "[project]/components/AgoraBranding.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m 501.902,967.207 -2.422,-3.363 -2.57,-3.547 -3.5,2.648 -3.301,2.512 C 436.578,1006.09 372.801,1027.57 305.68,1027.57 137.129,1027.57 0,890.438 0,721.887 0,553.336 137.129,416.203 305.68,416.203 c 67.121,0 130.89,21.481 184.41,62.121 l 3.32,2.512 3.492,2.648 2.567,-3.55 2.433,-3.36 c 23.231,-32.097 58.989,-53.597 98.098,-59 l 11.359,-1.558 V 1027.77 L 600,1026.21 c -39.109,-5.39 -74.867,-26.905 -98.098,-59.003 M 305.68,553.336 c -92.942,0 -168.551,75.609 -168.551,168.551 0,92.937 75.609,168.551 168.551,168.551 92.941,0 168.55,-75.614 168.55,-168.551 0,-92.942 -75.609,-168.551 -168.55,-168.551",
                fill: "currentColor",
                fillRule: "nonzero",
                transform: "matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
            }, void 0, false, {
                fileName: "[project]/components/AgoraBranding.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m 2983.74,1026.2 c -39.11,-5.4 -74.86,-26.899 -98.09,-58.997 l -2.43,-3.351 -2.57,-3.559 -3.49,2.66 -3.31,2.508 c -53.52,40.629 -117.3,62.109 -184.43,62.109 -168.55,0 -305.67,-137.129 -305.67,-305.679 0,-168.547 137.12,-305.68 305.67,-305.68 67.13,0 130.91,21.48 184.44,62.109 l 3.3,2.512 3.49,2.648 2.57,-3.546 2.43,-3.364 c 23.23,-32.097 58.98,-53.597 98.09,-59 l 11.36,-1.558 V 1027.76 Z M 2689.42,553.344 c -92.93,0 -168.55,75.609 -168.55,168.547 0,92.941 75.62,168.55 168.55,168.55 92.94,0 168.55,-75.609 168.55,-168.55 0,-92.938 -75.61,-168.547 -168.55,-168.547",
                fill: "currentColor",
                fillRule: "nonzero",
                transform: "matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
            }, void 0, false, {
                fileName: "[project]/components/AgoraBranding.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m 1186.88,483.656 c 69.87,56.071 114.72,142.086 114.72,238.438 0,63.441 -19.44,122.422 -52.66,171.32 -4.43,6.52 -9.19,12.789 -14.09,18.941 37.55,23.829 59.28,64.008 65.09,103.985 l 1.66,11.43 H 994.605 v -0.04 C 826.664,1027.02 690.254,890.195 690.254,722.094 c 0,-96.36 44.859,-182.391 114.75,-238.461 -13.117,-10.528 -25.391,-22.059 -36.609,-34.57 l 93.23,-102.161 c 30.809,40.59 79.539,66.864 134.309,66.864 92.936,0 168.546,-75.614 168.546,-168.551 0,-60.27 -31.82,-113.223 -79.52,-143.02 L 1178.22,0 c 74.83,55.7734 123.38,144.926 123.38,245.215 0,96.348 -44.85,182.367 -114.72,238.441 M 995.813,890.637 h 0.242 c 92.875,-0.063 168.425,-75.645 168.425,-168.543 0,-92.942 -75.61,-168.551 -168.546,-168.551 -92.942,0 -168.551,75.609 -168.551,168.551 0,92.898 75.543,168.48 168.43,168.543",
                fill: "currentColor",
                fillRule: "nonzero",
                transform: "matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
            }, void 0, false, {
                fileName: "[project]/components/AgoraBranding.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AgoraBranding.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = AgoraLogo;
function AgoraBranding({ variant = "header" }) {
    if (variant === "badge") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[#0093E9]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgoraLogo, {
                        className: "h-3"
                    }, void 0, false, {
                        fileName: "[project]/components/AgoraBranding.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AgoraBranding.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] text-gray-600 font-medium",
                    children: "Convo AI"
                }, void 0, false, {
                    fileName: "[project]/components/AgoraBranding.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AgoraBranding.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    if (variant === "footer") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-2 py-3 border-t border-gray-200 bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-500",
                    children: "Powered by"
                }, void 0, false, {
                    fileName: "[project]/components/AgoraBranding.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://www.agora.io",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center text-[#0093E9] hover:text-[#34b7ee] transition-colors duration-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgoraLogo, {
                        className: "h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/AgoraBranding.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AgoraBranding.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-gray-600 font-medium",
                    children: "Conversational AI"
                }, void 0, false, {
                    fileName: "[project]/components/AgoraBranding.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AgoraBranding.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this);
    }
    // Header variant (default)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "https://www.agora.io",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-2 text-[#0093E9] hover:text-[#34b7ee] transition-colors duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgoraLogo, {
                className: "h-5"
            }, void 0, false, {
                fileName: "[project]/components/AgoraBranding.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-gray-900",
                        children: "Conversational AI"
                    }, void 0, false, {
                        fileName: "[project]/components/AgoraBranding.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-500",
                        children: "Powered by Agora"
                    }, void 0, false, {
                        fileName: "[project]/components/AgoraBranding.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AgoraBranding.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AgoraBranding.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c1 = AgoraBranding;
var _c, _c1;
__turbopack_context__.k.register(_c, "AgoraLogo");
__turbopack_context__.k.register(_c1, "AgoraBranding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useCredentials.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCredentials",
    ()=>useCredentials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const STORAGE_KEY = 'convoai_credentials';
function useCredentials() {
    _s();
    const [credentials, setCredentials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load credentials from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCredentials.useEffect": ()=>{
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    setCredentials(parsed);
                }
            } catch (error) {
                console.error('Failed to load credentials from localStorage:', error);
            } finally{
                setIsLoading(false);
            }
        }
    }["useCredentials.useEffect"], []);
    // Save credentials to localStorage
    const saveCredentials = (newCredentials)=>{
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newCredentials));
            setCredentials(newCredentials);
            return true;
        } catch (error) {
            console.error('Failed to save credentials to localStorage:', error);
            return false;
        }
    };
    // Clear credentials from localStorage
    const clearCredentials = ()=>{
        try {
            localStorage.removeItem(STORAGE_KEY);
            setCredentials(null);
            return true;
        } catch (error) {
            console.error('Failed to clear credentials from localStorage:', error);
            return false;
        }
    };
    return {
        credentials,
        isLoading,
        saveCredentials,
        clearCredentials
    };
}
_s(useCredentials, "SQEuHHDqz/l+yh0RhSNS5t8poys=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPage",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductImages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductImages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductReviews.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AIAssistant.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgoraBranding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AgoraBranding.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCredentials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCredentials.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const fetchProduct = async (productId)=>{
    const res = await fetch(`/api/product?productId=${productId}`);
    return res.json();
};
function ProductPage() {
    _s();
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedProductId = '1'; // Hardcoded to LuminaSphere Pro
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSettingsOpen, setIsSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Credentials management
    const { credentials, isLoading: isLoadingCredentials, saveCredentials } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCredentials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCredentials"])();
    // Show settings modal on first load if no credentials exist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductPage.useEffect": ()=>{
            if (!isLoadingCredentials && !credentials) {
                setIsSettingsOpen(true);
            }
        }
    }["ProductPage.useEffect"], [
        isLoadingCredentials,
        credentials
    ]);
    // Load selected product
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductPage.useEffect": ()=>{
            setIsLoading(true);
            fetchProduct(selectedProductId).then({
                "ProductPage.useEffect": (data)=>{
                    setProduct(data);
                    setIsLoading(false);
                }
            }["ProductPage.useEffect"]).catch({
                "ProductPage.useEffect": (err)=>{
                    setError(err);
                    setIsLoading(false);
                }
            }["ProductPage.useEffect"]);
        }
    }["ProductPage.useEffect"], [
        selectedProductId
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-medium text-gray-700",
                        children: "Loading product..."
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl mb-4",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-medium text-red-600",
                        children: "Error loading product"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mt-2",
                        children: "Please try again later"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductPage.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgoraBranding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgoraBranding"], {
                                variant: "header"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductPage.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: "E-commerce Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSettingsOpen(true),
                                        className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",
                                        "aria-label": "Open Settings",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProductPage.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProductPage.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProductPage.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            "Settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductPage.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ProductPage.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-gray-900 mb-4",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/components/ProductPage.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: [
                                                    ...Array(5)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`,
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ProductPage.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/components/ProductPage.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductPage.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-semibold text-gray-900",
                                                children: product.rating
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductPage.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "(",
                                                    product.reviewCount.toLocaleString(),
                                                    " reviews)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProductPage.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    product.inStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold border border-emerald-200",
                                        children: "✓ In Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductPage.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-baseline gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl font-bold text-gray-900",
                                        children: [
                                            "$",
                                            product.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl text-gray-400 line-through",
                                        children: [
                                            "$",
                                            product.originalPrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-semibold border border-red-200",
                                        children: [
                                            "Save ",
                                            product.discount,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductPage.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductImages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductImages"], {
                                images: product.images
                            }, void 0, false, {
                                fileName: "[project]/components/ProductPage.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-md border border-gray-100 p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-gray-900 mb-6",
                                        children: "Product Details"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 mb-8 leading-relaxed text-lg",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200 pt-6 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-900 mb-4",
                                                children: "Specifications"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductPage.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                className: "space-y-4",
                                                children: Object.entries(product.specifications).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-gray-100 last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "font-semibold text-gray-900 sm:w-48 flex-shrink-0",
                                                                children: [
                                                                    key,
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ProductPage.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "text-gray-600 flex-1",
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ProductPage.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/components/ProductPage.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductPage.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg",
                                        children: "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductPage.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductPage.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductReviews"], {
                        reviews: product.reviews,
                        rating: product.rating
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIAssistant"], {
                        product: product
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgoraBranding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgoraBranding"], {
                            variant: "footer"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductPage.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProductPage.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductPage.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductPage.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(ProductPage, "nIpHIyg0T6cefMf2O6ZcRf+XE1M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCredentials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCredentials"]
    ];
});
_c = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ec2add81._.js.map