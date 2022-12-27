"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[29466],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){return function(t){var r=p(t.components);return n.createElement(e,o({},t,{components:r}))}},p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},81096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Manipulating the Oracle Cloud with PL/SQL",tags:["oracle","cloud","plsql","rest","orclapex"],slug:"id/2009",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2020-10-15T23:06:16.000Z")},l=void 0,i={permalink:"/content/id/2009",source:"@site/posts/manipulating-oci-with-pl-sql/index.md",title:"Manipulating the Oracle Cloud with PL/SQL",description:"Slide on OCI REST APIs updated",date:"2020-10-15T23:06:16.000Z",formattedDate:"October 15, 2020",tags:[{label:"oracle",permalink:"/content/tags/oracle"},{label:"cloud",permalink:"/content/tags/cloud"},{label:"plsql",permalink:"/content/tags/plsql"},{label:"rest",permalink:"/content/tags/rest"},{label:"orclapex",permalink:"/content/tags/orclapex"}],readingTime:4.04,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Manipulating the Oracle Cloud with PL/SQL",tags:["oracle","cloud","plsql","rest","orclapex"],slug:"id/2009",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2020-10-15T23:06:16.000Z"},prevItem:{title:"Making AI Accessible to APEX",permalink:"/content/id/2010"},nextItem:{title:"New Book on Getting the Most Out of the Oracle Cloud Free Tier",permalink:"/content/id/2008"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...o}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Slide on OCI REST APIs updated",src:r(29040).Z,width:"1280",height:"800"})),(0,a.mdx)("p",null,"It was only days ago that I had finalised my slides for my upcoming Oracle Groundbreakers APAC Virtual Tour ",(0,a.mdx)("a",{parentName:"p",href:"https://oracle-groundbreakers-apac-virtual-tour-2020.heysummit.com/talks/store-your-treasures-in-the-cloud-1/"},"talk")," on using ",(0,a.mdx)("a",{parentName:"p",href:"https://oracle.com/cloud"},"Oracle Cloud Infrastructure")," (OCI) Object Storage for storing large files in ",(0,a.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express")," (APEX). Today, I found out with a lot of excitement, that one of my slides was now factually wrong!"))}p.isMDXComponent=!0},29040:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/slide-updated-73c3bbfb58ca0798f537091a8432738e.png"}}]);