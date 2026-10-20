(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/eco-map/eco-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EcoDashboard",
    ()=>EcoDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.mjs [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$map$2d$breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/map-breadcrumbs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$map$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/map-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$scope$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/scope-stats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$severity$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/severity-legend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$side$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/side-panel.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const MapView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/eco-map/map-view.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/eco-map/map-view.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex size-full items-center justify-center bg-muted text-sm text-muted-foreground",
            children: "Loading map of India…"
        }, void 0, false, {
            fileName: "[project]/components/eco-map/eco-dashboard.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MapView;
const CATEGORIES = [
    'Waste Dumping',
    'Water Pollution',
    'Air Pollution',
    'Sewage Overflow',
    'Tree Felling',
    'Plastic Pollution'
];
function EcoDashboard({ issues }) {
    _s();
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [severities, setSeverities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EcoDashboard.useState": ()=>new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITIES"])
    }["EcoDashboard.useState"]);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EcoDashboard.useMemo[filtered]": ()=>issues.filter({
                "EcoDashboard.useMemo[filtered]": (i)=>severities.has(i.severity) && (category === 'all' || i.category === category)
            }["EcoDashboard.useMemo[filtered]"])
    }["EcoDashboard.useMemo[filtered]"], [
        issues,
        severities,
        category
    ]);
    const scoped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EcoDashboard.useMemo[scoped]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issuesInScope"])(filtered, selection)
    }["EcoDashboard.useMemo[scoped]"], [
        filtered,
        selection
    ]);
    const severityCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EcoDashboard.useMemo[severityCounts]": ()=>{
            const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issuesInScope"])(issues.filter({
                "EcoDashboard.useMemo[severityCounts].base": (i)=>category === 'all' || i.category === category
            }["EcoDashboard.useMemo[severityCounts].base"]), selection);
            return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITIES"].map({
                "EcoDashboard.useMemo[severityCounts]": (s)=>[
                        s,
                        base.filter({
                            "EcoDashboard.useMemo[severityCounts]": (i)=>i.severity === s
                        }["EcoDashboard.useMemo[severityCounts]"]).length
                    ]
            }["EcoDashboard.useMemo[severityCounts]"]));
        }
    }["EcoDashboard.useMemo[severityCounts]"], [
        issues,
        category,
        selection
    ]);
    const toggleSeverity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoDashboard.useCallback[toggleSeverity]": (severity)=>{
            setSeverities({
                "EcoDashboard.useCallback[toggleSeverity]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(severity)) next.delete(severity);
                    else next.add(severity);
                    return next;
                }
            }["EcoDashboard.useCallback[toggleSeverity]"]);
        }
    }["EcoDashboard.useCallback[toggleSeverity]"], []);
    const selectIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoDashboard.useCallback[selectIssue]": (issue)=>setSelection((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionForIssue"])(issue))
    }["EcoDashboard.useCallback[selectIssue]"], []);
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLevel"])(selection);
    const scopeLabel = selection.road ?? selection.locality ?? selection.city ?? selection.state ?? 'India';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-dvh flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-3 border-b border-border bg-card px-4 py-3 md:flex-row md:items-center md:gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                    className: "size-5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif text-lg font-semibold leading-none",
                                        children: "EcoWatch India"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-muted-foreground",
                                        children: "Environmental issue reporting map"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col gap-2 sm:flex-row sm:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 md:max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$map$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapSearch"], {
                                    issues: issues,
                                    onSelect: setSelection
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "sr-only",
                                htmlFor: "category-filter",
                                children: "Filter by category"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "category-filter",
                                value: category,
                                onChange: (e)=>setCategory(e.target.value),
                                className: "h-10 rounded-lg border border-input bg-card px-3 text-sm font-medium shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All categories"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c,
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-h-0 flex-1 flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-0 flex-1 flex-col gap-3 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$scope$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScopeStats"], {
                                issues: scoped,
                                scopeLabel: scopeLabel
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative min-h-[420px] flex-1 overflow-hidden rounded-xl border border-border bg-muted shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapView, {
                                        issues: filtered,
                                        allIssues: issues,
                                        selection: selection,
                                        onSelect: setSelection,
                                        onSelectIssue: selectIssue
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-x-3 top-3 z-[1000] flex",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-auto max-w-[calc(100%-56px)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$map$2d$breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapBreadcrumbs"], {
                                                selection: selection,
                                                onSelect: setSelection
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-6 left-3 z-[1000] w-40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$severity$2d$legend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeverityLegend"], {
                                            active: severities,
                                            counts: severityCounts,
                                            onToggle: toggleSeverity
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        "aria-label": `Details for ${level === 'issue' ? 'selected issue' : scopeLabel}`,
                        className: "min-h-0 border-t border-border bg-background lg:w-[380px] lg:flex-none lg:overflow-y-auto lg:border-l lg:border-t-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$side$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidePanel"], {
                            issues: filtered,
                            selection: selection,
                            onSelect: setSelection
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/eco-dashboard.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-map/eco-dashboard.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(EcoDashboard, "J3KquB3yZbrOi/YxPD8CliJOSmc=");
_c1 = EcoDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapView");
__turbopack_context__.k.register(_c1, "EcoDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/map-breadcrumbs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapBreadcrumbs",
    ()=>MapBreadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function MapBreadcrumbs({ selection, onSelect }) {
    const crumbs = [
        {
            label: 'India',
            target: {}
        }
    ];
    if (selection.state) crumbs.push({
        label: selection.state,
        target: {
            state: selection.state
        }
    });
    if (selection.city) crumbs.push({
        label: selection.city,
        target: {
            state: selection.state,
            city: selection.city
        }
    });
    if (selection.locality) crumbs.push({
        label: selection.locality,
        target: {
            state: selection.state,
            city: selection.city,
            locality: selection.locality
        }
    });
    if (selection.road) crumbs.push({
        label: selection.road,
        target: {
            state: selection.state,
            city: selection.city,
            locality: selection.locality,
            road: selection.road
        }
    });
    if (selection.issueId) crumbs.push({
        label: selection.issueId,
        target: selection
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Map location",
        className: "max-w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "flex flex-wrap items-center gap-0.5 rounded-lg border border-border bg-card/95 px-1.5 py-1 text-xs shadow-md backdrop-blur",
            children: crumbs.map((crumb, i)=>{
                const last = i === crumbs.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-0.5",
                    children: [
                        i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "size-3.5 text-muted-foreground",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/map-breadcrumbs.tsx",
                            lineNumber: 37,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onSelect(crumb.target),
                            "aria-current": last ? 'location' : undefined,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('max-w-40 truncate rounded px-1.5 py-0.5 font-semibold transition-colors', last ? 'text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'),
                            children: crumb.label
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/map-breadcrumbs.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    ]
                }, `${crumb.label}-${i}`, true, {
                    fileName: "[project]/components/eco-map/map-breadcrumbs.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/eco-map/map-breadcrumbs.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/eco-map/map-breadcrumbs.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = MapBreadcrumbs;
var _c;
__turbopack_context__.k.register(_c, "MapBreadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/map-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapSearch",
    ()=>MapSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/states.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function buildIndex(issues) {
    const results = new Map();
    for (const state of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDIA_STATES_AND_UTS"]){
        results.set(`s:${state}`, {
            id: `s:${state}`,
            type: 'State',
            label: state,
            hint: 'India',
            selection: {
                state
            }
        });
    }
    for (const i of issues){
        results.set(`c:${i.state}:${i.city}`, {
            id: `c:${i.state}:${i.city}`,
            type: 'City',
            label: i.city,
            hint: i.state,
            selection: {
                state: i.state,
                city: i.city
            }
        });
        results.set(`l:${i.city}:${i.locality}`, {
            id: `l:${i.city}:${i.locality}`,
            type: 'Locality',
            label: i.locality,
            hint: `${i.city}, ${i.state}`,
            selection: {
                state: i.state,
                city: i.city,
                locality: i.locality
            }
        });
        results.set(`r:${i.locality}:${i.roadName}`, {
            id: `r:${i.locality}:${i.roadName}`,
            type: 'Road',
            label: i.roadName,
            hint: `${i.locality}, ${i.city}`,
            selection: {
                state: i.state,
                city: i.city,
                locality: i.locality,
                road: i.roadName
            }
        });
        results.set(`i:${i.id}`, {
            id: `i:${i.id}`,
            type: 'Issue',
            label: i.title,
            hint: `${i.id} · ${i.roadName}, ${i.locality}`,
            selection: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionForIssue"])(i)
        });
    }
    return [
        ...results.values()
    ];
}
function MapSearch({ issues, onSelect }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const listId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapSearch.useMemo[index]": ()=>buildIndex(issues)
    }["MapSearch.useMemo[index]"], [
        issues
    ]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapSearch.useMemo[results]": ()=>{
            const q = query.trim().toLowerCase();
            if (!q) return [];
            return index.filter({
                "MapSearch.useMemo[results]": (r)=>r.label.toLowerCase().includes(q) || r.hint.toLowerCase().includes(q)
            }["MapSearch.useMemo[results]"]).sort({
                "MapSearch.useMemo[results]": (a, b)=>Number(!a.label.toLowerCase().startsWith(q)) - Number(!b.label.toLowerCase().startsWith(q))
            }["MapSearch.useMemo[results]"]).slice(0, 8);
        }
    }["MapSearch.useMemo[results]"], [
        index,
        query
    ]);
    const choose = (result)=>{
        onSelect(result.selection);
        setQuery(result.label);
        setOpen(false);
    };
    const showList = open && results.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: `${listId}-input`,
                className: "sr-only",
                children: "Search states, cities, localities, roads or issues"
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-search.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-search.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: `${listId}-input`,
                role: "combobox",
                "aria-expanded": showList,
                "aria-controls": listId,
                "aria-autocomplete": "list",
                "aria-activedescendant": showList ? `${listId}-${active}` : undefined,
                value: query,
                placeholder: "Search state, city, locality, road or issue ID",
                autoComplete: "off",
                onChange: (e)=>{
                    setQuery(e.target.value);
                    setActive(0);
                    setOpen(true);
                },
                onFocus: ()=>setOpen(true),
                onBlur: ()=>setOpen(false),
                onKeyDown: (e)=>{
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        setActive((a)=>Math.min(a + 1, results.length - 1));
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        setActive((a)=>Math.max(a - 1, 0));
                    } else if (e.key === 'Enter') {
                        if (e.nativeEvent.isComposing || e.keyCode === 229) return;
                        if (results[active]) choose(results[active]);
                    } else if (e.key === 'Escape') {
                        setOpen(false);
                    }
                },
                className: "h-10 w-full rounded-lg border border-input bg-card pl-9 pr-9 text-sm shadow-xs outline-none transition placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20"
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-search.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    setQuery('');
                    setOpen(false);
                },
                className: "absolute right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "size-4",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/map-search.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Clear search"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/map-search.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/map-search.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this),
            showList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: listId,
                role: "listbox",
                className: "absolute inset-x-0 top-full z-[1100] mt-1.5 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-lg",
                children: results.map((result, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        id: `${listId}-${i}`,
                        role: "option",
                        "aria-selected": i === active,
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            choose(result);
                        },
                        onMouseEnter: ()=>setActive(i),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-pointer items-center gap-3 px-3 py-2 text-sm', i === active && 'bg-accent'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-16 flex-none rounded bg-muted px-1.5 py-0.5 text-center text-[10px] font-bold uppercase tracking-wide text-muted-foreground",
                                children: result.type
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/map-search.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block truncate font-semibold text-foreground",
                                        children: result.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/map-search.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block truncate text-xs text-muted-foreground",
                                        children: result.hint
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/map-search.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-map/map-search.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)
                        ]
                    }, result.id, true, {
                        fileName: "[project]/components/eco-map/map-search.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-search.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-map/map-search.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(MapSearch, "CEOmZb0pKfOOqYx0Ugel38bPOLM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = MapSearch;
var _c;
__turbopack_context__.k.register(_c, "MapSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/scope-stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScopeStats",
    ()=>ScopeStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.mjs [app-client] (ecmascript) <export default as Timer>");
;
;
function ScopeStats({ issues, scopeLabel }) {
    const critical = issues.filter((i)=>i.severity === 'critical').length;
    const resolved = issues.filter((i)=>i.status === 'resolved').length;
    const active = issues.length - resolved;
    const stats = [
        {
            label: 'Total issues',
            value: issues.length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
            tone: 'text-primary'
        },
        {
            label: 'Critical',
            value: critical,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            tone: 'text-sev-critical'
        },
        {
            label: 'Open / active',
            value: active,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"],
            tone: 'text-sev-high'
        },
        {
            label: 'Resolved',
            value: resolved,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            tone: 'text-sev-low'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": `Statistics for ${scopeLabel}`,
        className: "grid grid-cols-2 gap-2 lg:grid-cols-4",
        children: stats.map(({ label, value, icon: Icon, tone })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex size-8 items-center justify-center rounded-md bg-muted ${tone}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "size-4",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/scope-stats.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/scope-stats.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-bold leading-none tabular-nums",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/scope-stats.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 truncate text-xs text-muted-foreground",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/scope-stats.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/scope-stats.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, label, true, {
                fileName: "[project]/components/eco-map/scope-stats.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/eco-map/scope-stats.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ScopeStats;
var _c;
__turbopack_context__.k.register(_c, "ScopeStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/severity-legend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeverityLegend",
    ()=>SeverityLegend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function SeverityLegend({ active, counts, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "rounded-lg border border-border bg-card/95 p-2.5 shadow-md backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "sr-only",
                children: "Filter by severity"
            }, void 0, false, {
                fileName: "[project]/components/eco-map/severity-legend.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-1.5 px-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                "aria-hidden": true,
                children: "Severity"
            }, void 0, false, {
                fileName: "[project]/components/eco-map/severity-legend.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITIES"].map((severity)=>{
                    const on = active.has(severity);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": on,
                        onClick: ()=>onToggle(severity),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 rounded-md px-1.5 py-1 text-xs font-semibold transition-colors hover:bg-muted', !on && 'opacity-45'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-3 rounded-full border-2 border-white shadow-[0_0_0_1px_rgb(0_0_0/0.25)]",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][severity].color
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/severity-legend.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 text-left",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][severity].label
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/severity-legend.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tabular-nums text-muted-foreground",
                                children: counts[severity]
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/severity-legend.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        ]
                    }, severity, true, {
                        fileName: "[project]/components/eco-map/severity-legend.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/eco-map/severity-legend.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-map/severity-legend.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = SeverityLegend;
var _c;
__turbopack_context__.k.register(_c, "SeverityLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/side-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidePanel",
    ()=>SidePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const LEVEL_LABEL = {
    india: 'Country',
    state: 'State / UT',
    city: 'City',
    locality: 'Locality',
    road: 'Road',
    issue: 'Issue report'
};
function parentOf(selection) {
    if (selection.issueId) return {
        ...selection,
        issueId: undefined
    };
    if (selection.road) return {
        state: selection.state,
        city: selection.city,
        locality: selection.locality
    };
    if (selection.locality) return {
        state: selection.state,
        city: selection.city
    };
    if (selection.city) return {
        state: selection.state
    };
    return {};
}
function SeverityDot({ severity, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-block size-2.5 flex-none rounded-full', className),
        style: {
            background: severity ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][severity].color : '#cbd5e1'
        },
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = SeverityDot;
function SectionTitle({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_c1 = SectionTitle;
function PlaceRows({ issues, groupBy, onPick, emptyLabel }) {
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countBy"])(issues, groupBy);
    if (groups.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-muted-foreground",
        children: emptyLabel
    }, void 0, false, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 62,
        columnNumber: 35
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "divide-y divide-border overflow-hidden rounded-lg border border-border bg-card",
        children: groups.map(([name, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onPick(name),
                    className: "flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityDot, {
                            severity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSeverity"])(issues.filter((i)=>groupBy(i) === name))
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/side-panel.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0 flex-1 truncate font-semibold",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/side-panel.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tabular-nums text-xs text-muted-foreground",
                            children: count
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/side-panel.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "size-4 text-muted-foreground",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/side-panel.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-map/side-panel.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            }, name, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c2 = PlaceRows;
function IssueRows({ issues, onPick }) {
    if (issues.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-muted-foreground",
        children: "No issues match the current filters."
    }, void 0, false, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 84,
        columnNumber: 35
    }, this);
    const sorted = [
        ...issues
    ].sort((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][b.severity].rank - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][a.severity].rank || b.createdAt.localeCompare(a.createdAt));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex flex-col gap-2",
        children: sorted.map((issue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onPick(issue),
                    className: "flex w-full gap-3 rounded-lg border border-border bg-card p-2.5 text-left transition-colors hover:border-primary/40 hover:bg-muted/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityDot, {
                            severity: issue.severity,
                            className: "mt-1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/side-panel.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-clamp-2 text-sm font-semibold leading-snug",
                                    children: issue.title
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-map/side-panel.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 block truncate text-xs text-muted-foreground",
                                    children: [
                                        issue.roadName,
                                        " · ",
                                        issue.locality,
                                        " · ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(issue.createdAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-map/side-panel.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-map/side-panel.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-map/side-panel.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, issue.id, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_c3 = IssueRows;
function SeverityBreakdown({ issues }) {
    const total = issues.length || 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-2 overflow-hidden rounded-full bg-muted",
                "aria-hidden": true,
                children: [
                    'critical',
                    'high',
                    'medium',
                    'low'
                ].map((s)=>{
                    const n = issues.filter((i)=>i.severity === s).length;
                    return n ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: `${n / total * 100}%`,
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][s].color
                        }
                    }, s, false, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 118,
                        columnNumber: 22
                    }, this) : null;
                })
            }, void 0, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "mt-2 grid grid-cols-4 gap-1 text-center",
                children: [
                    'critical',
                    'high',
                    'medium',
                    'low'
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][s].label
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                className: "text-sm font-bold tabular-nums",
                                children: issues.filter((i)=>i.severity === s).length
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c4 = SeverityBreakdown;
function IssueDetail({ issue }) {
    const sev = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][issue.severity];
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"][issue.status];
    const fields = [
        [
            'Category',
            issue.category
        ],
        [
            'Road',
            issue.roadName
        ],
        [
            'Locality',
            issue.locality
        ],
        [
            'City',
            issue.city
        ],
        [
            'District',
            issue.district
        ],
        [
            'State',
            issue.state
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                    src: issue.image,
                    alt: `Photo of reported issue: ${issue.title}`,
                    fill: true,
                    sizes: "380px",
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/eco-map/side-panel.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-white",
                        style: {
                            background: sev.color
                        },
                        children: [
                            sev.label,
                            " severity"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset', status.className),
                        children: status.label
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-muted-foreground",
                        children: issue.id
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm leading-relaxed text-foreground/85",
                children: issue.description
            }, void 0, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "divide-y divide-border rounded-lg border border-border bg-card text-sm",
                children: [
                    fields.map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 px-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "w-20 flex-none text-muted-foreground",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-map/side-panel.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "min-w-0 font-semibold",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-map/side-panel.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/components/eco-map/side-panel.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "flex w-20 flex-none items-center gap-1 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                        className: "size-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/side-panel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    "GPS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                className: "font-mono text-xs font-semibold leading-5",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCoords"])(issue.latitude, issue.longitude)
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "flex w-20 flex-none items-center gap-1 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "size-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-map/side-panel.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    "Reported"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                className: "font-semibold",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(issue.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `https://www.openstreetmap.org/?mlat=${issue.latitude}&mlon=${issue.longitude}#map=18/${issue.latitude}/${issue.longitude}`,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        className: "size-4",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    "Open location in OpenStreetMap"
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c5 = IssueDetail;
function SidePanel({ issues, selection, onSelect }) {
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLevel"])(selection);
    const scoped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issuesInScope"])(issues, selection);
    const pickIssue = (issue)=>onSelect((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionForIssue"])(issue));
    const issue = selection.issueId ? issues.find((i)=>i.id === selection.issueId) : undefined;
    const title = level === 'issue' ? issue?.title ?? selection.issueId : level === 'road' ? selection.road : level === 'locality' ? selection.locality : level === 'city' ? selection.city : level === 'state' ? selection.state : 'India';
    const subtitle = level === 'india' ? 'Click a state or union territory to drill down.' : level === 'issue' ? `${issue?.roadName ?? ''}, ${issue?.locality ?? ''}` : `${scoped.length} ${scoped.length === 1 ? 'issue' : 'issues'} reported`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-2",
                children: [
                    level !== 'india' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSelect(parentOf(selection)),
                        className: "inline-flex w-fit items-center gap-1 rounded-md px-1.5 py-1 -ml-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "size-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-bold uppercase tracking-wider text-primary",
                        children: LEVEL_LABEL[level]
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-pretty font-serif text-2xl font-semibold leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            level === 'issue' && issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IssueDetail, {
                issue: issue
            }, void 0, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 253,
                columnNumber: 38
            }, this),
            level === 'issue' && !issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "This issue is hidden by the current filters."
            }, void 0, false, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this),
            level !== 'issue' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: "Severity breakdown"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeverityBreakdown, {
                                issues: scoped
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    level === 'india' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: "States with reports"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceRows, {
                                issues: scoped,
                                groupBy: (i)=>i.state,
                                onPick: (state)=>onSelect({
                                        state
                                    }),
                                emptyLabel: "No reports yet."
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 266,
                        columnNumber: 13
                    }, this),
                    level === 'state' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: "Cities"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceRows, {
                                issues: scoped,
                                groupBy: (i)=>i.city,
                                onPick: (city)=>onSelect({
                                        state: selection.state,
                                        city
                                    }),
                                emptyLabel: "No issues reported in this state yet. Hover the map to explore its districts."
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 277,
                        columnNumber: 13
                    }, this),
                    level === 'city' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: "Localities"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceRows, {
                                issues: scoped,
                                groupBy: (i)=>i.locality,
                                onPick: (locality)=>onSelect({
                                        state: selection.state,
                                        city: selection.city,
                                        locality
                                    }),
                                emptyLabel: "No localities with reports."
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 288,
                        columnNumber: 13
                    }, this),
                    level === 'locality' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: "Roads"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 300,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceRows, {
                                issues: scoped,
                                groupBy: (i)=>i.roadName,
                                onPick: (road)=>onSelect({
                                        state: selection.state,
                                        city: selection.city,
                                        locality: selection.locality,
                                        road
                                    }),
                                emptyLabel: "No roads with reports."
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 301,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 299,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: level === 'india' || level === 'state' ? 'Recent issues' : 'Issues'
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IssueRows, {
                                issues: level === 'india' || level === 'state' ? [
                                    ...scoped
                                ].slice(0, 30) : scoped,
                                onPick: pickIssue
                            }, void 0, false, {
                                fileName: "[project]/components/eco-map/side-panel.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-map/side-panel.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/side-panel.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-map/side-panel.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c6 = SidePanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "SeverityDot");
__turbopack_context__.k.register(_c1, "SectionTitle");
__turbopack_context__.k.register(_c2, "PlaceRows");
__turbopack_context__.k.register(_c3, "IssueRows");
__turbopack_context__.k.register(_c4, "SeverityBreakdown");
__turbopack_context__.k.register(_c5, "IssueDetail");
__turbopack_context__.k.register(_c6, "SidePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/issues/meta.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEVERITIES",
    ()=>SEVERITIES,
    "SEVERITY_META",
    ()=>SEVERITY_META,
    "STATUS_META",
    ()=>STATUS_META,
    "centroid",
    ()=>centroid,
    "countBy",
    ()=>countBy,
    "formatCoords",
    ()=>formatCoords,
    "formatDate",
    ()=>formatDate,
    "getLevel",
    ()=>getLevel,
    "issuesInScope",
    ()=>issuesInScope,
    "maxSeverity",
    ()=>maxSeverity,
    "selectionForIssue",
    ()=>selectionForIssue
]);
const SEVERITIES = [
    'low',
    'medium',
    'high',
    'critical'
];
const SEVERITY_META = {
    low: {
        label: 'Low',
        color: '#16a34a',
        rank: 0
    },
    medium: {
        label: 'Medium',
        color: '#eab308',
        rank: 1
    },
    high: {
        label: 'High',
        color: '#f97316',
        rank: 2
    },
    critical: {
        label: 'Critical',
        color: '#dc2626',
        rank: 3
    }
};
const STATUS_META = {
    reported: {
        label: 'Reported',
        className: 'bg-slate-100 text-slate-700 ring-slate-200'
    },
    under_review: {
        label: 'Under review',
        className: 'bg-sky-50 text-sky-800 ring-sky-200'
    },
    in_progress: {
        label: 'In progress',
        className: 'bg-amber-50 text-amber-800 ring-amber-200'
    },
    resolved: {
        label: 'Resolved',
        className: 'bg-emerald-50 text-emerald-800 ring-emerald-200'
    }
};
function getLevel(selection) {
    if (selection.issueId) return 'issue';
    if (selection.road) return 'road';
    if (selection.locality) return 'locality';
    if (selection.city) return 'city';
    if (selection.state) return 'state';
    return 'india';
}
function issuesInScope(issues, selection) {
    return issues.filter((issue)=>(!selection.state || issue.state === selection.state) && (!selection.city || issue.city === selection.city) && (!selection.locality || issue.locality === selection.locality) && (!selection.road || issue.roadName === selection.road));
}
function selectionForIssue(issue) {
    return {
        state: issue.state,
        city: issue.city,
        locality: issue.locality,
        road: issue.roadName,
        issueId: issue.id
    };
}
function countBy(items, key) {
    const counts = new Map();
    for (const item of items)counts.set(key(item), (counts.get(key(item)) ?? 0) + 1);
    return [
        ...counts.entries()
    ].sort((a, b)=>b[1] - a[1]);
}
function maxSeverity(items) {
    let max;
    for (const item of items){
        if (!max || SEVERITY_META[item.severity].rank > SEVERITY_META[max].rank) max = item.severity;
    }
    return max;
}
function centroid(items) {
    const lat = items.reduce((sum, i)=>sum + i.latitude, 0) / items.length;
    const lng = items.reduce((sum, i)=>sum + i.longitude, 0) / items.length;
    return [
        lat,
        lng
    ];
}
function formatDate(iso) {
    return new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(new Date(iso));
}
function formatCoords(lat, lng) {
    return `${lat.toFixed(5)}° N, ${lng.toFixed(5)}° E`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/issues/states.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INDIA_STATES_AND_UTS",
    ()=>INDIA_STATES_AND_UTS
]);
const INDIA_STATES_AND_UTS = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_11x-43_y1mven._.js.map