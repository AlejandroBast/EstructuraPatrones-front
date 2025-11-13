module.exports = [
"[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/form'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/checkbox'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function LoginForm({ onSuccess }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            name: "",
            password: "",
            rememberMe: false
        }
    });
    async function onSubmit(values) {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: values.name,
                    password: values.password
                })
            });
            if (!response.ok) {
                throw new Error("Invalid credentials");
            }
            const data = await response.json();
            onSuccess(data.token, data.user);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally{
            setIsLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
        ...form,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: form.handleSubmit(onSubmit),
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                    control: form.control,
                    name: "name",
                    rules: {
                        required: "Name is required"
                    },
                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItem, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormControl, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-slate-500/40 pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...field,
                                            placeholder: "Name",
                                            className: "w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm not-italic",
                                            type: "text"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                                    className: "text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                    control: form.control,
                    name: "password",
                    rules: {
                        required: "Password is required"
                    },
                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItem, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormControl, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-slate-500/40 pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...field,
                                            placeholder: "Password",
                                            type: "password",
                                            className: "w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm not-italic"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                                    className: "text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-2 rounded-none mt-10 tracking-widest",
                    children: isLoading ? "SIGNING IN..." : "SIGN IN"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer text-slate-300 text-xs tracking-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                    checked: form.watch("rememberMe"),
                                    onCheckedChange: (checked)=>form.setValue("rememberMe", checked),
                                    className: "border-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                "Remember Me"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/forgot-password",
                            className: "text-slate-300 hover:text-slate-100 text-xs tracking-wide transition-colors",
                            children: "Forgot password"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=1a11a_enn%20Patrones%20de%20sftwr_EstructuraPatrones-front_components_ui_button_tsx_7c8d6d92._.js.map