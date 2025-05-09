(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_Navbar_jsx_b3665de4._.js", {

"[project]/src/components/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWindowScroll$3e$__ = __turbopack_context__.i("[project]/node_modules/react-use/esm/useWindowScroll.js [app-client] (ecmascript) <export default as useWindowScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const navItems = [
    'Home',
    'Products',
    'Download'
];
const Navbar = ()=>{
    _s();
    const [hasFloatingNav, setHasFloatingNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isActiveIndicator, setIsActiveIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNavVisible, setIsNavVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const navContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleAudioIndicator = ()=>{
        setIsActiveIndicator((prev)=>!prev);
        setIsAudioPlaying((prev)=>!prev);
    };
    const { y: currentScrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWindowScroll$3e$__["useWindowScroll"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (currentScrollY === 0) {
                setIsNavVisible(true);
                setHasFloatingNav(false);
            } else if (currentScrollY > lastScrollY) {
                setIsNavVisible(false);
                setHasFloatingNav(true);
            } else if (currentScrollY < lastScrollY) {
                setIsNavVisible(true);
                setHasFloatingNav(true);
            }
            setLastScrollY(currentScrollY);
        }
    }["Navbar.useEffect"], [
        currentScrollY,
        lastScrollY
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(navContainerRef.current, {
                y: isNavVisible ? 0 : -100,
                opacity: isNavVisible ? 1 : 0,
                duration: 0.2
            });
        }
    }["Navbar.useEffect"], [
        isNavVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: navContainerRef,
        className: `fixed inset-x-0 z-50 top-4 h-16 transition-all duration-500 border-none md:inset-x-6 ${hasFloatingNav ? 'floating-nav' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "absolute top-1/2 w-full -translate-y-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center justify-start md:justify-end w-full h-full p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "block w-screen",
                    children: navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "nav-hover-btn ms-7 text-xs",
                            href: `#${item.toLocaleLowerCase()}`,
                            children: item
                        }, index, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 50,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 47,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 46,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
};
_s(Navbar, "vbkXt2xvOgyp9YRf24x9+nWtc80=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWindowScroll$3e$__["useWindowScroll"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_Navbar_jsx_b3665de4._.js.map