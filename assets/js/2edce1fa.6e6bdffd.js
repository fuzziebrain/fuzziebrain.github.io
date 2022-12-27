"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[14410],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},45159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Generating XSL-FO Layouts with Microsoft Word and Apache POI",tags:["Apache POI","Java","Microsoft Word","Oracle Application Express","Oracle BI Publisher","PDF","reporting","XPath","XSL-FO"],slug:"id/332",authors:["fuzziebrain"],comment:!1,categories:["Technology","Programming","Oracle Application Express"],date:new Date("2013-05-31T20:53:46.000Z")},i=void 0,c={permalink:"/content/id/332",source:"@site/posts/generating-xsl-fo-layouts-with-microsoft-word-and-apache-poi/index.md",title:"Generating XSL-FO Layouts with Microsoft Word and Apache POI",description:"The objective of this post is to describe how to create XSL-FO Layouts with little or no costs! These can then be used\xa0for custom PDF documents\xa0printing in Oracle Application Express (APEX).",date:"2013-05-31T20:53:46.000Z",formattedDate:"May 31, 2013",tags:[{label:"Apache POI",permalink:"/content/tags/apache-poi"},{label:"Java",permalink:"/content/tags/java"},{label:"Microsoft Word",permalink:"/content/tags/microsoft-word"},{label:"Oracle Application Express",permalink:"/content/tags/oracle-application-express"},{label:"Oracle BI Publisher",permalink:"/content/tags/oracle-bi-publisher"},{label:"PDF",permalink:"/content/tags/pdf"},{label:"reporting",permalink:"/content/tags/reporting"},{label:"XPath",permalink:"/content/tags/x-path"},{label:"XSL-FO",permalink:"/content/tags/xsl-fo"}],readingTime:2.015,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Generating XSL-FO Layouts with Microsoft Word and Apache POI",tags:["Apache POI","Java","Microsoft Word","Oracle Application Express","Oracle BI Publisher","PDF","reporting","XPath","XSL-FO"],slug:"id/332",authors:["fuzziebrain"],comment:!1,categories:["Technology","Programming","Oracle Application Express"],date:"2013-05-31T20:53:46.000Z"},prevItem:{title:"Post-KScope Blues",permalink:"/content/id/391"},nextItem:{title:"My KScope Experience (and Desires)",permalink:"/content/id/274"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The objective of this post is to describe how to create XSL-FO Layouts with little or no costs! These can then be used\xa0for custom ",(0,o.mdx)("a",{parentName:"p",href:"http://www.slideshare.net/",title:"SlideShare"},"PDF documents"),"\xa0printing in ",(0,o.mdx)("a",{parentName:"p",href:"http://apex.oracle.com",title:"Oracle Application Express"},"Oracle Application Express")," (APEX)."),(0,o.mdx)("p",null,"Let's get started..."))}u.isMDXComponent=!0}}]);