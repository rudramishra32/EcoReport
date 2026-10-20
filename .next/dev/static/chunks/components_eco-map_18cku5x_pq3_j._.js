(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/components/eco-map/boundary-layers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistrictsLayer",
    ()=>DistrictsLayer,
    "StatesLayer",
    ()=>StatesLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/leaflet-setup.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const BASE_INDIA = {
    color: '#3f4a46',
    weight: 1,
    fillColor: '#ffffff',
    fillOpacity: 0.45
};
const SELECTED = {
    color: '#14201b',
    weight: 2.5,
    fillColor: '#ffffff',
    fillOpacity: 0
};
const DIMMED = {
    color: '#8a958f',
    weight: 0.8,
    fillColor: '#f1f4f2',
    fillOpacity: 0.72
};
const HOVER = {
    color: '#0f3d2e',
    weight: 2,
    fillColor: '#d7e7de',
    fillOpacity: 0.55
};
function stateStyle(name, selected, hovered) {
    if (selected === name) return SELECTED;
    if (hovered) return HOVER;
    return selected ? DIMMED : BASE_INDIA;
}
function StatesLayer({ data, selectedState, issueCounts, onSelectState }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const layerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedState);
    const countsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(issueCounts);
    const onSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSelectState);
    selectedRef.current = selectedState;
    countsRef.current = issueCounts;
    onSelectRef.current = onSelectState;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatesLayer.useEffect": ()=>{
            const layer = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].geoJSON(data, {
                style: {
                    "StatesLayer.useEffect.layer": (feature)=>stateStyle(feature?.properties.st_nm ?? '', selectedRef.current, false)
                }["StatesLayer.useEffect.layer"],
                onEachFeature: {
                    "StatesLayer.useEffect.layer": (feature, path)=>{
                        const name = feature.properties.st_nm;
                        path.bindTooltip({
                            "StatesLayer.useEffect.layer": ()=>{
                                const count = countsRef.current.get(name) ?? 0;
                                return `${name}<span style="opacity:.65;font-weight:500"> · ${count} ${count === 1 ? 'issue' : 'issues'}</span>`;
                            }
                        }["StatesLayer.useEffect.layer"], {
                            sticky: true,
                            className: 'eco-tooltip',
                            direction: 'top',
                            offset: [
                                0,
                                -8
                            ]
                        });
                        path.on({
                            mouseover: {
                                "StatesLayer.useEffect.layer": ()=>{
                                    ;
                                    path.setStyle(stateStyle(name, selectedRef.current, true));
                                }
                            }["StatesLayer.useEffect.layer"],
                            mouseout: {
                                "StatesLayer.useEffect.layer": ()=>{
                                    ;
                                    path.setStyle(stateStyle(name, selectedRef.current, false));
                                }
                            }["StatesLayer.useEffect.layer"],
                            click: {
                                "StatesLayer.useEffect.layer": ()=>onSelectRef.current(name)
                            }["StatesLayer.useEffect.layer"]
                        });
                    }
                }["StatesLayer.useEffect.layer"]
            }).addTo(map);
            layerRef.current = layer;
            return ({
                "StatesLayer.useEffect": ()=>{
                    layer.remove();
                    layerRef.current = null;
                }
            })["StatesLayer.useEffect"];
        }
    }["StatesLayer.useEffect"], [
        data,
        map
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatesLayer.useEffect": ()=>{
            layerRef.current?.eachLayer({
                "StatesLayer.useEffect": (path)=>{
                    const feature = path.feature;
                    path.setStyle(stateStyle(feature.properties.st_nm, selectedState, false));
                }
            }["StatesLayer.useEffect"]);
        }
    }["StatesLayer.useEffect"], [
        selectedState
    ]);
    return null;
}
_s(StatesLayer, "Mu8XfvNRcKY/Ee4QXU1RkarJoyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = StatesLayer;
const DISTRICT = {
    color: '#5b6863',
    weight: 1,
    dashArray: '4 4',
    fillColor: '#0f3d2e',
    fillOpacity: 0
};
const DISTRICT_HOVER = {
    ...DISTRICT,
    dashArray: undefined,
    weight: 1.8,
    fillOpacity: 0.08
};
function DistrictsLayer({ data, selectedState }) {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistrictsLayer.useEffect": ()=>{
            if (!selectedState) return;
            const features = data.features.filter({
                "DistrictsLayer.useEffect.features": (f)=>f.properties.st_nm === selectedState
            }["DistrictsLayer.useEffect.features"]);
            const layer = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].geoJSON({
                type: 'FeatureCollection',
                features
            }, {
                style: {
                    "DistrictsLayer.useEffect.layer": ()=>DISTRICT
                }["DistrictsLayer.useEffect.layer"],
                onEachFeature: {
                    "DistrictsLayer.useEffect.layer": (feature, path)=>{
                        path.bindTooltip(`${feature.properties.district}<span style="opacity:.65;font-weight:500"> · District</span>`, {
                            sticky: true,
                            className: 'eco-tooltip',
                            direction: 'top',
                            offset: [
                                0,
                                -8
                            ]
                        });
                        path.on({
                            mouseover: {
                                "DistrictsLayer.useEffect.layer": ()=>path.setStyle(DISTRICT_HOVER)
                            }["DistrictsLayer.useEffect.layer"],
                            mouseout: {
                                "DistrictsLayer.useEffect.layer": ()=>path.setStyle(DISTRICT)
                            }["DistrictsLayer.useEffect.layer"],
                            dblclick: {
                                "DistrictsLayer.useEffect.layer": (event)=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomEvent.stop(event);
                                    map.flyToBounds(path.getBounds(), {
                                        padding: [
                                            40,
                                            40
                                        ],
                                        duration: 0.8
                                    });
                                }
                            }["DistrictsLayer.useEffect.layer"]
                        });
                    }
                }["DistrictsLayer.useEffect.layer"]
            }).addTo(map);
            return ({
                "DistrictsLayer.useEffect": ()=>{
                    layer.remove();
                }
            })["DistrictsLayer.useEffect"];
        }
    }["DistrictsLayer.useEffect"], [
        data,
        map,
        selectedState
    ]);
    return null;
}
_s1(DistrictsLayer, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c1 = DistrictsLayer;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatesLayer");
__turbopack_context__.k.register(_c1, "DistrictsLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/issue-layers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IssueClusterLayer",
    ()=>IssueClusterLayer,
    "PlacesLayer",
    ()=>PlacesLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/leaflet-setup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$markercluster$2f$dist$2f$leaflet$2e$markercluster$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/meta.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$issue$2d$popup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/issue-popup.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function issueIcon(severity, selected) {
    const size = selected ? 22 : 16;
    return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: '',
        html: `<span class="eco-marker" data-selected="${selected}" style="width:${size}px;height:${size}px;background:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][severity].color}"></span>`,
        iconSize: [
            size,
            size
        ],
        iconAnchor: [
            size / 2,
            size / 2
        ],
        popupAnchor: [
            0,
            -size / 2
        ]
    });
}
function clusterIcon(cluster) {
    const markers = cluster.getAllChildMarkers();
    const count = markers.length;
    let top = 'low';
    for (const m of markers)if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][m.severity].rank > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][top].rank) top = m.severity;
    const size = count < 5 ? 34 : count < 15 ? 40 : 48;
    return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: '',
        html: `<div class="eco-cluster" style="width:${size}px;height:${size}px;--ring-color:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][top].color}" aria-label="${count} issues">${count}</div>`,
        iconSize: [
            size,
            size
        ]
    });
}
function IssueClusterLayer({ issues, selectedId, onSelectIssue }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSelectIssue);
    const selectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedId);
    onSelectRef.current = onSelectIssue;
    selectedRef.current = selectedId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IssueClusterLayer.useEffect": ()=>{
            const group = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].markerClusterGroup({
                showCoverageOnHover: false,
                maxClusterRadius: 48,
                disableClusteringAtZoom: 16,
                spiderfyOnMaxZoom: true,
                iconCreateFunction: clusterIcon
            });
            const markers = new Map();
            for (const issue of issues){
                const marker = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                    issue.latitude,
                    issue.longitude
                ], {
                    icon: issueIcon(issue.severity, issue.id === selectedRef.current),
                    title: issue.title,
                    keyboard: true,
                    riseOnHover: true
                });
                marker.severity = issue.severity;
                marker.bindPopup((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$issue$2d$popup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildIssuePopup"])(issue), {
                    className: 'eco-popup',
                    maxWidth: 280,
                    autoPanPadding: [
                        24,
                        24
                    ]
                });
                marker.on('click', {
                    "IssueClusterLayer.useEffect": ()=>onSelectRef.current(issue)
                }["IssueClusterLayer.useEffect"]);
                markers.set(issue.id, marker);
                group.addLayer(marker);
            }
            map.addLayer(group);
            markersRef.current = markers;
            groupRef.current = group;
            return ({
                "IssueClusterLayer.useEffect": ()=>{
                    map.removeLayer(group);
                    groupRef.current = null;
                }
            })["IssueClusterLayer.useEffect"];
        }
    }["IssueClusterLayer.useEffect"], [
        issues,
        map
    ]);
    const previousSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IssueClusterLayer.useEffect": ()=>{
            const markers = markersRef.current;
            const prev = previousSelected.current;
            if (prev && markers.has(prev)) markers.get(prev).setIcon(issueIcon(markers.get(prev).severity, false));
            previousSelected.current = selectedId;
            if (!selectedId) return;
            const marker = markers.get(selectedId);
            if (!marker) return;
            marker.setIcon(issueIcon(marker.severity, true));
            const target = marker.getLatLng();
            const open = {
                "IssueClusterLayer.useEffect.open": ()=>{
                    groupRef.current?.zoomToShowLayer(marker, {
                        "IssueClusterLayer.useEffect.open": ()=>marker.openPopup()
                    }["IssueClusterLayer.useEffect.open"]);
                }
            }["IssueClusterLayer.useEffect.open"];
            if (map.getZoom() >= 16 && map.getBounds().pad(-0.2).contains(target)) {
                open();
            } else {
                map.once('moveend', open);
                map.flyTo(target, 17, {
                    duration: 1.1
                });
            }
        }
    }["IssueClusterLayer.useEffect"], [
        selectedId,
        issues,
        map
    ]);
    return null;
}
_s(IssueClusterLayer, "Cb++cBxduN9z67f/lAV23wInkxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = IssueClusterLayer;
function buildPlaces(issues, selection) {
    if (!selection.state || selection.issueId) return [];
    const scoped = issues.filter((i)=>i.state === selection.state);
    const groupKey = selection.city ? (i)=>i.locality : (i)=>i.city;
    const pool = selection.city ? scoped.filter((i)=>i.city === selection.city) : scoped;
    const groups = new Map();
    for (const issue of pool){
        const key = groupKey(issue);
        groups.set(key, [
            ...groups.get(key) ?? [],
            issue
        ]);
    }
    return [
        ...groups.entries()
    ].map(([name, group])=>({
            key: name,
            label: name,
            count: group.length,
            severity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSeverity"])(group) ?? 'low',
            position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["centroid"])(group),
            next: selection.city ? {
                state: selection.state,
                city: selection.city,
                locality: name
            } : {
                state: selection.state,
                city: name
            }
        }));
}
function PlacesLayer({ issues, selection, onSelect }) {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const onSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSelect);
    onSelectRef.current = onSelect;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlacesLayer.useEffect": ()=>{
            const places = buildPlaces(issues, selection);
            const layer = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup();
            for (const place of places){
                const active = place.label === selection.locality;
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(place.position, {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: '',
                        html: `<span class="eco-place" style="margin-top:-14px;${active ? 'border-color:#0f3d2e;background:#0f3d2e;color:#fff' : ''}"><span style="width:8px;height:8px;border-radius:9999px;background:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][place.severity].color}"></span>${place.label}<span class="eco-place-count" style="${active ? 'color:#cfe3d8' : ''}">${place.count}</span></span>`,
                        iconSize: [
                            0,
                            0
                        ]
                    }),
                    zIndexOffset: 1000,
                    keyboard: true,
                    title: `${place.label}: ${place.count} issues`
                }).on('click', {
                    "PlacesLayer.useEffect": ()=>onSelectRef.current(place.next)
                }["PlacesLayer.useEffect"]).addTo(layer);
            }
            layer.addTo(map);
            return ({
                "PlacesLayer.useEffect": ()=>{
                    layer.remove();
                }
            })["PlacesLayer.useEffect"];
        }
    }["PlacesLayer.useEffect"], [
        issues,
        selection,
        map
    ]);
    return null;
}
_s1(PlacesLayer, "F7Hf9byJOILtCvQ/pQu6L2tAyc0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c1 = PlacesLayer;
var _c, _c1;
__turbopack_context__.k.register(_c, "IssueClusterLayer");
__turbopack_context__.k.register(_c1, "PlacesLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/issue-popup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildIssuePopup",
    ()=>buildIssuePopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/meta.ts [app-client] (ecmascript)");
;
function escapeHtml(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function row(label, value) {
    return `<div style="display:flex;gap:8px;font-size:12px;line-height:1.45"><span style="width:64px;flex:none;color:#5b6863">${label}</span><span style="color:#14201b;font-weight:600">${escapeHtml(value)}</span></div>`;
}
function buildIssuePopup(issue) {
    const sev = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEVERITY_META"][issue.severity];
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_META"][issue.status];
    return `
  <div>
    <img src="${escapeHtml(issue.image)}" alt="" style="display:block;width:100%;height:120px;object-fit:cover" />
    <div style="padding:12px 14px 14px;display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#5b6863">
        <span style="width:8px;height:8px;border-radius:9999px;background:${sev.color}"></span>
        ${sev.label} · ${escapeHtml(issue.category)}
      </div>
      <div style="font-size:14px;font-weight:700;line-height:1.3;color:#14201b">${escapeHtml(issue.title)}</div>
      <div style="display:flex;flex-direction:column;gap:2px">
        ${row('Road', issue.roadName)}
        ${row('Locality', issue.locality)}
        ${row('City', `${issue.city}, ${issue.district}`)}
        ${row('State', issue.state)}
        ${row('GPS', (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCoords"])(issue.latitude, issue.longitude))}
        ${row('Reported', (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(issue.createdAt))}
        ${row('Status', status.label)}
      </div>
      <p style="margin:0;font-size:12px;line-height:1.5;color:#3d4944">${escapeHtml(issue.description)}</p>
    </div>
  </div>`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/leaflet-setup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
// leaflet.markercluster's UMD build attaches itself to a global `L`.
if ("TURBOPACK compile-time truthy", 1) {
    ;
    window.L = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/map-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/use-swr-emll9s78.mjs [app-client] (ecmascript) <export u as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/LayersControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$ZoomControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/ZoomControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$boundary$2d$layers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/boundary-layers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$issue$2d$layers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/issue-layers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$view$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/view-controller.tsx [app-client] (ecmascript)");
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
const fetchJson = (url)=>fetch(url).then((res)=>res.json());
function MapView({ issues, allIssues, selection, onSelect, onSelectIssue }) {
    _s();
    const { data: states } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__["default"])('/geo/india-states.json', fetchJson, {
        revalidateOnFocus: false
    });
    const { data: districts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__["default"])(selection.state ? '/geo/india-districts.json' : null, fetchJson, {
        revalidateOnFocus: false
    });
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[counts]": ()=>{
            const map = new Map();
            for (const issue of issues)map.set(issue.state, (map.get(issue.state) ?? 0) + 1);
            return map;
        }
    }["MapView.useMemo[counts]"], [
        issues
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        bounds: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$view$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDIA_BOUNDS"],
        boundsOptions: {
            padding: [
                24,
                24
            ]
        },
        minZoom: 4,
        maxZoom: 19,
        zoomControl: false,
        zoomSnap: 0.25,
        zoomDelta: 0.5,
        worldCopyJump: false,
        className: "size-full",
        attributionControl: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayersControl"], {
                position: "topright",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayersControl"].BaseLayer, {
                        checked: true,
                        name: "OpenStreetMap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                            maxZoom: 19
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/map-view.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/map-view.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$LayersControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayersControl"].BaseLayer, {
                        name: "OSM Light (CARTO)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                            url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
                            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
                            maxZoom: 20
                        }, void 0, false, {
                            fileName: "[project]/components/eco-map/map-view.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-map/map-view.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-map/map-view.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$ZoomControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZoomControl"], {
                position: "bottomright"
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-view.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            states && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$boundary$2d$layers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatesLayer"], {
                data: states,
                selectedState: selection.state,
                issueCounts: counts,
                onSelectState: (state)=>onSelect({
                        state
                    })
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-view.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            districts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$boundary$2d$layers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistrictsLayer"], {
                data: districts,
                selectedState: selection.state
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-view.tsx",
                lineNumber: 77,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$issue$2d$layers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IssueClusterLayer"], {
                issues: issues,
                selectedId: selection.issueId,
                onSelectIssue: onSelectIssue
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-view.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$issue$2d$layers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlacesLayer"], {
                issues: issues,
                selection: selection,
                onSelect: onSelect
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-view.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$view$2d$controller$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewController"], {
                selection: selection,
                issues: allIssues,
                states: states
            }, void 0, false, {
                fileName: "[project]/components/eco-map/map-view.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-map/map-view.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(MapView, "uAzSS1ADVIDtSTaDN/LX+JZ0mDI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$use$2d$swr$2d$emll9s78$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__default$3e$__["default"]
    ];
});
_c = MapView;
var _c;
__turbopack_context__.k.register(_c, "MapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-map/view-controller.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INDIA_BOUNDS",
    ()=>INDIA_BOUNDS,
    "ViewController",
    ()=>ViewController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-map/leaflet-setup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/issues/meta.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const INDIA_BOUNDS = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds([
    6.2,
    67.5
], [
    37.6,
    97.6
]);
const MAX_ZOOM_BY_LEVEL = {
    city: 13,
    locality: 15,
    road: 16
};
function ViewController({ selection, issues, states }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLevel"])(selection);
    const key = [
        selection.state,
        selection.city,
        selection.locality,
        selection.road
    ].join('|');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewController.useEffect": ()=>{
            const container = map.getContainer();
            const observer = new ResizeObserver({
                "ViewController.useEffect": ()=>map.invalidateSize()
            }["ViewController.useEffect"]);
            observer.observe(container);
            return ({
                "ViewController.useEffect": ()=>observer.disconnect()
            })["ViewController.useEffect"];
        }
    }["ViewController.useEffect"], [
        map
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewController.useEffect": ()=>{
            if (level === 'issue') return;
            const opts = {
                padding: [
                    48,
                    48
                ],
                duration: 0.9
            };
            if (level === 'india') {
                map.flyToBounds(INDIA_BOUNDS, {
                    ...opts,
                    padding: [
                        16,
                        16
                    ]
                });
                return;
            }
            if (level === 'state') {
                const feature = states?.features.find({
                    "ViewController.useEffect": (f)=>f.properties.st_nm === selection.state
                }["ViewController.useEffect"]);
                if (feature) map.flyToBounds(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].geoJSON(feature).getBounds(), opts);
                return;
            }
            const scoped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$issues$2f$meta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issuesInScope"])(issues, selection);
            if (scoped.length === 0) return;
            const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$map$2f$leaflet$2d$setup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(scoped.map({
                "ViewController.useEffect.bounds": (i)=>[
                        i.latitude,
                        i.longitude
                    ]
            }["ViewController.useEffect.bounds"]));
            map.flyToBounds(bounds, {
                ...opts,
                maxZoom: MAX_ZOOM_BY_LEVEL[level]
            });
        // Only re-run when the place scope changes, not on every issue array identity change.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ViewController.useEffect"], [
        key,
        level,
        map,
        states
    ]);
    return null;
}
_s(ViewController, "tm7v5wxt+lXe+JHmDCjcGD98tIQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = ViewController;
var _c;
__turbopack_context__.k.register(_c, "ViewController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/components/eco-map/map-view.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/eco-map/map-view.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_eco-map_18cku5x_pq3_j._.js.map