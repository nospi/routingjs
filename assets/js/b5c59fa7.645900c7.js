"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),f=l,h=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={id:"valhalla.ValhallaContours",title:"Interface: ValhallaContours",sidebar_label:"ValhallaContours",custom_edit_url:null},o=void 0,i={unversionedId:"api/interfaces/valhalla.ValhallaContours",id:"api/interfaces/valhalla.ValhallaContours",title:"Interface: ValhallaContours",description:"valhalla.ValhallaContours",source:"@site/docs/api/interfaces/valhalla.ValhallaContours.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/valhalla.ValhallaContours",permalink:"/routingjs/docs/api/interfaces/valhalla.ValhallaContours",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"valhalla.ValhallaContours",title:"Interface: ValhallaContours",sidebar_label:"ValhallaContours",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MapboxAuthParams",permalink:"/routingjs/docs/api/interfaces/valhalla.MapboxAuthParams"},next:{title:"ValhallaCostingOptsAuto",permalink:"/routingjs/docs/api/interfaces/valhalla.ValhallaCostingOptsAuto"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"distance",id:"distance",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"time",id:"time",level:3},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/routingjs/docs/api/modules/valhalla"},"valhalla"),".ValhallaContours"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"color"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,'The color for the output of the contour. Specify it as a Hex value, but without the #,\nsuch as "color":"ff0000" for red. If no color is specified, the isochrone service will\nassign a default color to the output.'),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/valhalla/parameters.ts#L172"},"packages/valhalla/parameters.ts:172")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"distance"},"distance"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"distance"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"A floating point value specifying the distance in kilometers for the contour."),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/valhalla/parameters.ts#L166"},"packages/valhalla/parameters.ts:166")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"time"},"time"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"time"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"A floating point value specifying the time in minutes for the contour."),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/gis-ops/routingjs/blob/a30229a/packages/valhalla/parameters.ts#L164"},"packages/valhalla/parameters.ts:164")))}c.isMDXComponent=!0}}]);