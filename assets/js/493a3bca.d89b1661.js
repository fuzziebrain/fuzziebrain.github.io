"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[34164],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){return function(t){var r=d(t.components);return a.createElement(e,o({},t,{components:r}))}},d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,u=p["".concat(i,".").concat(m)]||p[m]||h[m]||o;return r?a.createElement(u,s(s({ref:t},c),{},{components:r})):a.createElement(u,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Helper Scripts - Build an APEX Stack",tags:["orclapex","docker","container","scripting","bash","full stack"],slug:"id/1902",authors:["fuzziebrain"],categories:["Technology","Programming","Oracle Application Express"],date:new Date("2019-02-17T11:03:47.000Z")},i=void 0,s={permalink:"/content/id/1902",source:"@site/posts/helper-scripts-build-an-apex-stack/index.md",title:"Helper Scripts - Build an APEX Stack",description:"Photo by Markus Distelrath",date:"2019-02-17T11:03:47.000Z",formattedDate:"February 17, 2019",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"docker",permalink:"/content/tags/docker"},{label:"container",permalink:"/content/tags/container"},{label:"scripting",permalink:"/content/tags/scripting"},{label:"bash",permalink:"/content/tags/bash"},{label:"full stack",permalink:"/content/tags/full-stack"}],readingTime:1.52,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Helper Scripts - Build an APEX Stack",tags:["orclapex","docker","container","scripting","bash","full stack"],slug:"id/1902",authors:["fuzziebrain"],categories:["Technology","Programming","Oracle Application Express"],date:"2019-02-17T11:03:47.000Z"},prevItem:{title:"Day 0 - 30 Days on the Oracle Cloud",permalink:"/content/id/1903"},nextItem:{title:"Announcing the APEX Challenge Coin",permalink:"/content/id/1727"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function d(e){let{components:t,...o}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Photo by Markus Distelrath",src:r(34585).Z,width:"1280",height:"720"})),(0,n.mdx)("p",null,"When ",(0,n.mdx)("a",{parentName:"p",href:"https://oracle.com/xe"},"Oracle Database 18c Express Edition (18cXE)")," was released late last year, I was motivated to work on an ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/fuzziebrain/docker-oracle-xe"},"image")," for running the newly released, ",(0,n.mdx)("strong",{parentName:"p"},"FREE")," database using ",(0,n.mdx)("a",{parentName:"p",href:"https://www.docker.com"},"Docker"),". The scripts were based on the official Docker images ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/oracle/docker-images"},"published by Oracle"),". With much help from ",(0,n.mdx)("a",{parentName:"p",href:"https://twitter.com/martindsouza"},"Martin D'Souza"),", we released the scripts to the community with pointers on how to install and run an ",(0,n.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express (APEX)")," stack."),(0,n.mdx)("p",null,"While I am proud of the work Martin and I did, it has always been my intention to mothball the project as soon as the team from Oracle released support for 18cXE, which they did about two months ago."),(0,n.mdx)("p",null,"One of the features of Oracle's images that I discussed with ",(0,n.mdx)("a",{parentName:"p",href:"https://twitter.com/GeraldVenzl"},"Gerald Venzl"),", who happened to be in Vancouver for the ",(0,n.mdx)("a",{parentName:"p",href:"https://bcoug.org/techday"},"BCOUG Tech Day")," last year, was the ",(0,n.mdx)("inlineCode",{parentName:"p"},"setup")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"startup")," scripts folder. Any shell or SQL scripts placed in these folders would be automatically executed when the database is created (running the container the first time with no preexisting ",(0,n.mdx)("inlineCode",{parentName:"p"},"oradata")," mounted) and started respectively. The puzzle that needed to be solved was how best to inject the necessary files and code for installing and running APEX and ",(0,n.mdx)("a",{parentName:"p",href:"https://www.oracle.com/ca-en/database/technologies/appdev/rest.html"},"Oracle REST Data Services (ORDS)"),"."),(0,n.mdx)("p",null,"I think I have something figured out and have placed the scripts I used in this ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com"},"Github")," ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/fuzziebrain/docker-apex-stack"},"repository"),". It includes a three-step formula that will:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Grab the latest code from Oracle's repository, but only keep the important pieces for this to work."),(0,n.mdx)("li",{parentName:"ol"},"Build the image; and then"),(0,n.mdx)("li",{parentName:"ol"},"Run the container.")),(0,n.mdx)("p",null,'Detailed instructions are found in the repository. Please post questions under "Issues" if you need help and I\'ll do my best to respond as soon as I can.'),(0,n.mdx)("p",null,"Hope you have as much fun as I did trying to get all this to work!"))}d.isMDXComponent=!0},34585:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/container-2687008_1280x720-b20120d74922edcc2c5573e546a550bf.jpg"}}]);