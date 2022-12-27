"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[60390],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>d,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Social Sign In with Azure",tags:["orclapex","oauth2","authentication","microsoft","azure","active directory","office 365","sso","single sign on"],categories:["Technology","Programming","Oracle Application Express"],slug:"id/1908",authors:["fuzziebrain"],date:new Date("2019-04-23T19:01:19.000Z")},i=void 0,c={permalink:"/content/id/1908",source:"@site/posts/social-sign-in-with-azure/index.md",title:"Social Sign In with Azure",description:"Photo by Gerd Altmann",date:"2019-04-23T19:01:19.000Z",formattedDate:"April 23, 2019",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"oauth2",permalink:"/content/tags/oauth-2"},{label:"authentication",permalink:"/content/tags/authentication"},{label:"microsoft",permalink:"/content/tags/microsoft"},{label:"azure",permalink:"/content/tags/azure"},{label:"active directory",permalink:"/content/tags/active-directory"},{label:"office 365",permalink:"/content/tags/office-365"},{label:"sso",permalink:"/content/tags/sso"},{label:"single sign on",permalink:"/content/tags/single-sign-on"}],readingTime:5.69,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Social Sign In with Azure",tags:["orclapex","oauth2","authentication","microsoft","azure","active directory","office 365","sso","single sign on"],categories:["Technology","Programming","Oracle Application Express"],slug:"id/1908",authors:["fuzziebrain"],date:"2019-04-23T19:01:19.000Z"},prevItem:{title:"Seattle Take Two",permalink:"/content/id/1909"},nextItem:{title:"Day 15 - 30 Days on the Oracle Cloud",permalink:"/content/id/1907"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Photo by Gerd Altmann",src:n(77085).Z,width:"1919",height:"1079"})),(0,a.mdx)("p",null,"Since ",(0,a.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express (APEX)")," version 18.1, application developers are able to easily integrate ",(0,a.mdx)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth2"),"-based authentication using many popular identity providers including Google, Facebook and Microsoft. ",(0,a.mdx)("a",{parentName:"p",href:"https://twitter.com/mortenbraten"},"Morten Braten"),", ",(0,a.mdx)("a",{parentName:"p",href:"https://twitter.com/c2anton"},"Anton Nielsen")," and I have previously written on this subject."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://ora-00001.blogspot.com/2018/02/apex-authentication-with-microsoft-account.html"},"APEX Authentication with Microsoft account")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"http://c2anton.blogspot.com/2019/01/oracle-apex-social-sign-on-with.html"},"Oracle APEX Social Sign-On with Microsoft Azure")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"http://c2anton.blogspot.com/2019/02/oracle-apex-less-social-sign-on-with-ms.html"},"Oracle APEX Less Social Sign-On with MS Azure and Office 365")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/content/id/1711/"},"APEX Social Sign-In Without a Wallet"))),(0,a.mdx)("p",null,"Starting May 2019, Microsoft is changing how developers manage their OAuth2 application registrations."))}u.isMDXComponent=!0},77085:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/board-895399_1920x1280-bf38c39d1bd3a96bff79db33bd29591e.jpg"}}]);