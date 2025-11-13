(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/ui/button.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/checkbox'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LoginForm({ onSuccess }) {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
        ...form,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: form.handleSubmit(onSubmit),
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                    control: form.control,
                    name: "name",
                    rules: {
                        required: "Name is required"
                    },
                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItem, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormControl, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-slate-500/40 pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...field,
                                            placeholder: "Name",
                                            className: "w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm not-italic",
                                            type: "text"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                                    className: "text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                    control: form.control,
                    name: "password",
                    rules: {
                        required: "Password is required"
                    },
                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItem, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormControl, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-slate-500/40 pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...field,
                                            placeholder: "Password",
                                            type: "password",
                                            className: "w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm not-italic"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormMessage, {
                                    className: "text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-2 rounded-none mt-10 tracking-widest",
                    children: isLoading ? "SIGNING IN..." : "SIGN IN"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer text-slate-300 text-xs tracking-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                                    checked: form.watch("rememberMe"),
                                    onCheckedChange: (checked)=>form.setValue("rememberMe", checked),
                                    className: "border-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                "Remember Me"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/forgot-password",
                            className: "text-slate-300 hover:text-slate-100 text-xs tracking-wide transition-colors",
                            children: "Forgot password"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "CbDBbEiU9dAquV/j5FD/FVVOhlM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$login$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/components/login-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package2$3e$__ = __turbopack_context__.i("[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/node_modules/lucide-react/dist/esm/icons/package-2.js [app-client] (ecmascript) <export default as Package2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LoginPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPage.useEffect": ()=>{
            const token = localStorage.getItem("token");
            if (token) {
                router.push("/dashboard");
            }
        }
    }["LoginPage.useEffect"], [
        router
    ]);
    const handleLoginSuccess = (token, userData)=>{
        setIsLoading(true);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        router.push("/dashboard");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-6 md:px-12 text-xs md:text-sm text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "hover:text-slate-200 transition-colors duration-200 uppercase tracking-wide",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package2$3e$__["Package2"], {
                            className: "w-7 h-7 text-slate-300 hover:text-slate-100 transition-colors cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "hover:text-slate-200 transition-colors duration-200 uppercase tracking-wide",
                        children: "Theme Marketplace"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-6xl font-light tracking-[0.15em] text-slate-100 uppercase",
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$components$2f$login$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginForm"], {
                        onSuccess: handleLoginSuccess
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-2 border-slate-600 border-t-emerald-500"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Frontenn Patrones de sftwr/EstructuraPatrones-front/app/login/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "x+tVIixJA9gAIfgroQ/xQSjtIFk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Frontenn__Patrones__de__sftwr$2f$EstructuraPatrones$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Frontenn%20Patrones%20de%20sftwr_EstructuraPatrones-front_bf7074dc._.js.map