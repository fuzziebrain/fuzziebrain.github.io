"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[15362],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Keep Your APEX Images Updated",tags:["orclapex","autonomous","database","ords"],slug:"id/2006",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2020-07-25T17:03:59.000Z")},i=void 0,s={permalink:"/content/id/2006",source:"@site/posts/keep-your-apex-images-updated/index.md",title:"Keep Your APEX Images Updated",description:"Spider Web",date:"2020-07-25T17:03:59.000Z",formattedDate:"July 25, 2020",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"autonomous",permalink:"/content/tags/autonomous"},{label:"database",permalink:"/content/tags/database"},{label:"ords",permalink:"/content/tags/ords"}],readingTime:1.525,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Keep Your APEX Images Updated",tags:["orclapex","autonomous","database","ords"],slug:"id/2006",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2020-07-25T17:03:59.000Z"},prevItem:{title:"Update Free SSL Certificates for the OCI Load Balancer",permalink:"/content/id/2007"},nextItem:{title:"Running ORDS Against the Autonomous Database - Part 2",permalink:"/content/id/2005"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Spider Web",src:r(64049).Z,width:"1280",height:"800"})),(0,a.mdx)("p",null,'As Uncle Ben would say, "Remember, with great power, comes great responsibility." With the release of ',(0,a.mdx)("a",{parentName:"p",href:"https://www.oracle.com/database/technologies/appdev/rest.html"},"Oracle REST Data Services")," (ORDS) version 19.4.6, many of us were eager to deploy a customer-managed ORDS solution in order to support vanity URLs with ",(0,a.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express")," (APEX), myself ",(0,a.mdx)("a",{parentName:"p",href:"/content/id/2004"},"included"),". It has worked well for me until a few days ago, I noticed that my ",(0,a.mdx)("a",{parentName:"p",href:"https://oracle.com/jet"},"Oracle JET")," charts weren't loading any more."))}u.isMDXComponent=!0},64049:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/spider-223982_1280x800-f7db4878a3d7ea4daa3b7ddd7e606055.jpg"}}]);