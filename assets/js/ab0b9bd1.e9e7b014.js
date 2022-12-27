"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[49796],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Oracle APEX and REST Without the Pain",tags:["orclapex","rest","suez","nodejs","proxy","ssl","tools"],slug:"id/1706",authors:["fuzziebrain"],categories:["Technology","Programming","Oracle Application Express"],date:new Date("2017-09-04T02:05:06.000Z")},i=void 0,s={permalink:"/content/id/1706",source:"@site/posts/oracle-apex-and-rest-without-the-pain/index.md",title:"Oracle APEX and REST Without the Pain",description:"Photo by Hisham Abo-hamad on Unsplash",date:"2017-09-04T02:05:06.000Z",formattedDate:"September 4, 2017",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"rest",permalink:"/content/tags/rest"},{label:"suez",permalink:"/content/tags/suez"},{label:"nodejs",permalink:"/content/tags/nodejs"},{label:"proxy",permalink:"/content/tags/proxy"},{label:"ssl",permalink:"/content/tags/ssl"},{label:"tools",permalink:"/content/tags/tools"}],readingTime:3.115,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Oracle APEX and REST Without the Pain",tags:["orclapex","rest","suez","nodejs","proxy","ssl","tools"],slug:"id/1706",authors:["fuzziebrain"],categories:["Technology","Programming","Oracle Application Express"],date:"2017-09-04T02:05:06.000Z"},prevItem:{title:"Two Days of Node.js",permalink:"/content/id/1707"},nextItem:{title:"Real Uptime Monitoring of Oracle APEX Instances",permalink:"/content/id/1705"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Photo by &lt;a href=&quot;https://unsplash.com/@moudy100&quot; target=&quot;_blank&quot;&gt;Hisham Abo-hamad&lt;/a&gt; on Unsplash",src:r(64861).Z,width:"4093",height:"2303"})),(0,a.mdx)("p",null,"Earlier this year (2017), I had the privilege to share with the community, some of the work and experiences I gained helping to build some of the blocks that form the foundation of ",(0,a.mdx)("a",{parentName:"p",href:"https://apex.world/"},"apex.world"),". In my presentations, I had shared some of the challenges I had integrating RESTful web services with ",(0,a.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express")," (APEX). A crippling issue involved the use of ",(0,a.mdx)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/database/database-technologies/express-edition/"},"Oracle Database Express Edition")," (Oracle XE) and communicating with web services over a secured protocol. The by-product of that experience led to the development of a simple ",(0,a.mdx)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," application, which I named ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/fuzziebrain/suez"},"Suez"),"."))}u.isMDXComponent=!0},64861:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ismalia-egypt-a758ede2cf28c9e744b4dd6e266c48f6.jpg"}}]);