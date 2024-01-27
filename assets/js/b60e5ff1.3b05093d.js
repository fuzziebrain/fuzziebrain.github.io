"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[60013],{86582:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(85893),a=i(11151);const o={title:"Write High Quality JavaScript Code for Oracle Application Express",tags:["typescript","orclapex","ide","quality","vscode","atom"],slug:"id/1708",authors:["fuzziebrain"],categories:["Technology","Programming","Tools"],date:new Date("2017-11-08T19:08:20.000Z")},r=void 0,s={permalink:"/content/id/1708",source:"@site/posts/write-high-quality-javascript-code-for-oracle-application-express/index.md",title:"Write High Quality JavaScript Code for Oracle Application Express",description:"Old Handwritten Book by Kiwihug}",date:"2017-11-08T19:08:20.000Z",formattedDate:"November 8, 2017",tags:[{label:"typescript",permalink:"/content/tags/typescript"},{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"ide",permalink:"/content/tags/ide"},{label:"quality",permalink:"/content/tags/quality"},{label:"vscode",permalink:"/content/tags/vscode"},{label:"atom",permalink:"/content/tags/atom"}],readingTime:3.09,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Write High Quality JavaScript Code for Oracle Application Express",tags:["typescript","orclapex","ide","quality","vscode","atom"],slug:"id/1708",authors:["fuzziebrain"],categories:["Technology","Programming","Tools"],date:"2017-11-08T19:08:20.000Z"},unlisted:!1,prevItem:{title:"Authenticate using OAuth2 - Now Available in APEX 5.2 EA",permalink:"/content/id/1709"},nextItem:{title:"Two Days of Node.js",permalink:"/content/id/1707"}},c={authorsImageUrls:[void 0]},l=[];function d(e){const t={a:"a",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(67676).Z+"",children:"Old Handwritten Book by Kiwihug}"})}),"\n",(0,n.jsx)(t.p,{children:"It's funny how JavaScript's 20th birthday was not as spectacular as it's shorter-named bretheren. When I first learned JavaScript in the late 1990's, I wasn't too excited as I was about Java, for two reasons most web developers know about JavaScript: weakly typed and non-standard browser implementation. The latter has been addressed by ECMA, but does that mean our code can now be more predictable and consistent?"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," attempts to solve these issues by introducing static typing. This paves the way for a more structured language that results in better tooling and developer support. Think code hints. More importantly though, with compile-time error checking, we can be better assured of how the application would behave at runtime. And because we compile TypeScript to JavaScript, there is an opportunity to allow developers to work with modern ECMA specifications, but yet having the ability to compile down to earlier flavours of JS. All that without needing (not saying you shouldn't) to know the intricacies of transpilers and build management tools."]}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript introduces the concept of a declaration file. These files are like header files in C and package specifications in PL/SQL. Declaration files are usually written in files with a ",(0,n.jsx)(t.code,{children:".d.ts"})," file extension. They do not compile, instead, simply describe the functions and variables available in a JS library. They assist in TypeScript code compilation, and with IDE support, developer productivity is enhanced with features like IntelliSense and type-checking. In Code, type-checking is also available in JS with a simple comment at the top of the file: ",(0,n.jsx)(t.code,{children:"//@ts-check"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.a,{href:"https://apex.oracle.com/",children:"Oracle Application Express"})," (APEX) developer is no stranger to tab-switching the APEX API documentation, browser (Page Designer) and I hope, a comparable desktop IDE. When writing the JavaScript bits of the APEX application, developers have a few choices. The best practice though, suggests that we consolidate code into JS files. This aids version control and testing. It's no easy feat though, ask any experience APEX developer. Fortunately, ",(0,n.jsx)(t.a,{href:"https://twitter.com/vincentmorneau",children:"Vincent Morneau"})," came to the rescue with some ",(0,n.jsx)(t.a,{href:"https://github.com/OraOpenSource/apex-nitro",children:"(APEX) Nitro"})," to boost productivity."]}),"\n",(0,n.jsxs)(t.p,{children:["Vincent changed the paradigm of coding JS in APEX. We could gradually move some of our screen time away from Page Designer, and use mainstream code editors like ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code (Code)"}),", ",(0,n.jsx)(t.a,{href:"https://atom.io",children:"Atom"})," and ",(0,n.jsx)(t.a,{href:"https://www.sublimetext.com/",children:"Sublime"}),", when working on JS, CSS and PL/SQL code. Without any fanfare, I had suggested and implemented TypeScript support in APEX Nitro that has been available since version 4.0.0-beta. For me, the final piece of the toolchain, would be a TS declaration file for the APEX JS API. Since there aren't any out there, I thought, why not write one? And so I did."]}),"\n",(0,n.jsx)(t.p,{children:"I am very excited about what benefits this might bring to the community and so, going away from my comfort zone, I have decided to make my work public so that fellow APEX developers can have a feel of what it's like working with TypeScript and what benefits it brings. I won't claim to be an expert in TypeScript or the APEX JS API. If you do find errors, please let me know through the usual channels!"}),"\n",(0,n.jsxs)(t.p,{children:["Since TypeScript 2.0, declaration files are managed under the ",(0,n.jsx)(t.a,{href:"http://definitelytyped.org/",children:"DefinitelyTyped"})," project and made available through ",(0,n.jsx)(t.a,{href:"https://npmjs.com",children:"npm"}),". You can find a list of available declaration files under the organization ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/~types",children:"@types"}),", or from their Github ",(0,n.jsx)(t.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",children:"repository"}),". For now, I have published my work at ",(0,n.jsx)(t.a,{href:"https://github.com/fuzziebrain/orclapex-js",children:"https://github.com/fuzziebrain/orclapex-js"})," with instructions on how to use it in your environment. Eventually though, I'd like to publish this under DefinitelyTyped repository, so keep in touch to be informed of changes."]}),"\n",(0,n.jsx)(t.p,{children:"Some day though, I hope that the APEX JS API would proudly wear the badge:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(74309).Z+"",children:"TypeScript definitions on DefinitelyTyped (http://definitelytyped.org)"})}),"\n",(0,n.jsx)(t.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},67676:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/kiwihug-393319_1280x720-0d17281e9d0058cd4774d5e9ef99a544.jpg"},74309:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/standard-flat-d9d9225ff261ceb8cf10d1464dc96a7a.svg"},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var n=i(67294);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);