"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"ors.ORSMatrixResponse",title:"Interface: ORSMatrixResponse",sidebar_label:"ORSMatrixResponse",custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/ors.ORSMatrixResponse",id:"api/interfaces/ors.ORSMatrixResponse",title:"Interface: ORSMatrixResponse",description:"ors.ORSMatrixResponse",source:"@site/docs/api/interfaces/ors.ORSMatrixResponse.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ors.ORSMatrixResponse",permalink:"/routingjs/docs/api/interfaces/ors.ORSMatrixResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ors.ORSMatrixResponse",title:"Interface: ORSMatrixResponse",sidebar_label:"ORSMatrixResponse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ORSMatrixParams",permalink:"/routingjs/docs/api/interfaces/ors.ORSMatrixParams"},next:{title:"ORSRoute",permalink:"/routingjs/docs/api/interfaces/ors.ORSRoute"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"destinations",id:"destinations",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"distances",id:"distances",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"durations",id:"durations",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"metadata",id:"metadata",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"sources",id:"sources",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/routingjs/docs/api/modules/ors"},"ors"),".ORSMatrixResponse"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ORSBaseResponse")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ORSMatrixResponse"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"destinations"},"destinations"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"destinations"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ORSMatrixResult"),"[]"),(0,a.kt)("p",null,"The individual destinations of the matrix calculations."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L249"},"packages/ors/parameters.ts:249")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"distances"},"distances"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"distances"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[][]"),(0,a.kt)("p",null,"The distances of the matrix calculations."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L251"},"packages/ors/parameters.ts:251")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"durations"},"durations"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"durations"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"[][]"),(0,a.kt)("p",null,"The durations of the matrix calculations."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L253"},"packages/ors/parameters.ts:253")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"metadata"},"metadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"metadata"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ORSMetaData")),(0,a.kt)("p",null,"Information about the service and request"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"ORSBaseResponse.metadata"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L223"},"packages/ors/parameters.ts:223")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sources"},"sources"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sources"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ORSMatrixResult"),"[]"),(0,a.kt)("p",null,"The individual sourcesof the matrix calculations."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/ors/parameters.ts#L247"},"packages/ors/parameters.ts:247")))}u.isMDXComponent=!0}}]);