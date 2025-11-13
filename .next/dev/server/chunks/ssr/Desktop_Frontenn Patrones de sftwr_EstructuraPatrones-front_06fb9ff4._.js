module.exports = [
"[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/register-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

[
    {
        "resource": "/c:/Users/MAICOL LAGOS/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/register/page.tsx",
        "owner": "tailwindcss-intellisense",
        "code": "suggestCanonicalClasses",
        "severity": 4,
        "message": "The class `bg-gradient-to-r` can be written as `bg-linear-to-r`",
        "startLineNumber": 164,
        "startColumn": 79,
        "endLineNumber": 164,
        "endColumn": 95,
        "origin": "extHost1"
    }
];
}),
"[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/register/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$register$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/register-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
"use client";
;
;
;
;
;
;
function RegisterPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if already authenticated
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/dashboard");
        }
    }, [
        router
    ]);
    const handleRegisterSuccess = (token, userData)=>{
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        router.push("/dashboard");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/register/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        "Volver al inicio"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/register/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$register$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterForm"], {
                    onSuccess: handleRegisterSuccess
                }, void 0, false, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/register/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/register/page.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/register/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Frontenn%20Patrones%20de%20sftwr_EstructuraPatrones-front_06fb9ff4._.js.map