"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={id:"ors.ORSAlternateRouteParam",title:"Interface: ORSAlternateRouteParam",sidebar_label:"ORSAlternateRouteParam",custom_edit_url:null},i=void 0,l={unversionedId:"api/interfaces/ors.ORSAlternateRouteParam",id:"api/interfaces/ors.ORSAlternateRouteParam",title:"Interface: ORSAlternateRouteParam",description:"ors.ORSAlternateRouteParam",source:"@site/docs/api/interfaces/ors.ORSAlternateRouteParam.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ors.ORSAlternateRouteParam",permalink:"/routingjs/docs/api/interfaces/ors.ORSAlternateRouteParam",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ors.ORSAlternateRouteParam",title:"Interface: ORSAlternateRouteParam",sidebar_label:"ORSAlternateRouteParam",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GraphHopperRouteResponse",permalink:"/routingjs/docs/api/interfaces/graphhopper.GraphHopperRouteResponse"},next:{title:"ORSErrorProps",permalink:"/routingjs/docs/api/interfaces/ors.ORSErrorProps"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"share_factor",id:"share_factor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"target_count",id:"target_count",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"weight_factor",id:"weight_factor",level:3},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/routingjs/docs/api/modules/ors"},"ors"),".ORSAlternateRouteParam"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"share_factor"},"share","_","factor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"share","_","factor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L199"},"packages/ors/parameters.ts:199")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"target_count"},"target","_","count"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"target","_","count"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Number of alternative routes (up to 3)"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L201"},"packages/ors/parameters.ts:201")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"weight_factor"},"weight","_","factor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"weight","_","factor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L202"},"packages/ors/parameters.ts:202")))}c.isMDXComponent=!0}}]);