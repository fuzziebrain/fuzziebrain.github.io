"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[68812],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){return function(t){var a=m(t.components);return r.createElement(e,o({},t,{components:a}))}},m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,u=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return a?r.createElement(u,i(i({ref:t},s),{},{components:a})):r.createElement(u,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Keep Your APEX Images Updated",tags:["orclapex","autonomous","database","ords"],slug:"id/2006",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2020-07-25T17:03:59.000Z")},l=void 0,i={permalink:"/content/id/2006",source:"@site/posts/keep-your-apex-images-updated/index.md",title:"Keep Your APEX Images Updated",description:"Spider Web",date:"2020-07-25T17:03:59.000Z",formattedDate:"July 25, 2020",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"autonomous",permalink:"/content/tags/autonomous"},{label:"database",permalink:"/content/tags/database"},{label:"ords",permalink:"/content/tags/ords"}],readingTime:1.525,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Keep Your APEX Images Updated",tags:["orclapex","autonomous","database","ords"],slug:"id/2006",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2020-07-25T17:03:59.000Z"},prevItem:{title:"Update Free SSL Certificates for the OCI Load Balancer",permalink:"/content/id/2007"},nextItem:{title:"Running ORDS Against the Autonomous Database - Part 2",permalink:"/content/id/2005"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function m(e){let{components:t,...o}=e;return(0,n.mdx)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Spider Web",src:a(64049).Z,width:"1280",height:"800"})),(0,n.mdx)("p",null,'As Uncle Ben would say, "Remember, with great power, comes great responsibility." With the release of ',(0,n.mdx)("a",{parentName:"p",href:"https://www.oracle.com/database/technologies/appdev/rest.html"},"Oracle REST Data Services")," (ORDS) version 19.4.6, many of us were eager to deploy a customer-managed ORDS solution in order to support vanity URLs with ",(0,n.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express")," (APEX), myself ",(0,n.mdx)("a",{parentName:"p",href:"/content/id/2004"},"included"),". It has worked well for me until a few days ago, I noticed that my ",(0,n.mdx)("a",{parentName:"p",href:"https://oracle.com/jet"},"Oracle JET")," charts weren't loading any more."),(0,n.mdx)("p",null,"A quick check showed multiple ",(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5"},"HTTP 404")," errors were triggered. APEX was referencing a newer Oracle JET version, 8.3.0 insted of the stock 8.0.0."),(0,n.mdx)("p",null,"One of the key benefits of running APEX on an ",(0,n.mdx)("a",{parentName:"p",href:"https://www.oracle.com/database/what-is-autonomous-database.html"},"Oracle Autonomous Database")," is auto-patching, and clearly something got updated in the recent days. True enough, an updated Patch Set Bundle (PSE) was released on July 20, 2020 (Source: ",(0,n.mdx)("a",{parentName:"p",href:"https://apex.oracle.com/download"},"https://apex.oracle.com/download"),")."),(0,n.mdx)("p",null,"On the ",(0,n.mdx)("a",{parentName:"p",href:"https://www.oracle.com/tools/downloads/apex-downloads/apex-201-known-issues.html"},"Known Issues")," page, it states:"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"With 20.1, we integrated the following third party libraries: Oracle JET 8.0.0, jQuery 3.4.1, jQuery Migrate 3.0.1, and jQuery FullCalendar 3.10.0. Upgraded versions of these libraries have been made available: Oracle JET 8.3.0, jQuery 3.5.1, jQuery Migrate 3.3.0, and jQuery FullCalendar 3.10.2.")),(0,n.mdx)("p",null,"Here's what I did to get my server updated."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Login to ",(0,n.mdx)("a",{parentName:"li",href:"https://support.oracle.com"},"Oracle Support")," and search ",(0,n.mdx)("inlineCode",{parentName:"li"},"30990551"),", or simply click ",(0,n.mdx)("a",{parentName:"li",href:"https://support.oracle.com/epmos/faces/PatchDetail?patchId=30990551"},"here")),(0,n.mdx)("li",{parentName:"ol"},"Download the patch. The file name should be ",(0,n.mdx)("inlineCode",{parentName:"li"},"p30990551_2010_Generic.zip"),".",(0,n.mdx)("blockquote",{parentName:"li"},(0,n.mdx)("p",{parentName:"blockquote"},"Important"),(0,n.mdx)("p",{parentName:"blockquote"},"You will need an active support contract in order to download the PSE."))),(0,n.mdx)("li",{parentName:"ol"},"Upload the patch to the Compute instance hosting ORDS. Place the file in the ",(0,n.mdx)("inlineCode",{parentName:"li"},"/tmp")," directory."),(0,n.mdx)("li",{parentName:"ol"},"Login to the server as the user ",(0,n.mdx)("inlineCode",{parentName:"li"},"opc"),", using SSH."),(0,n.mdx)("li",{parentName:"ol"},"Set the environment variables:",(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"RELEASE=20.1.0.00.13\nPATCHNUM=30990551\nPATCHFILE=p30990551_2010_Generic.zip\n"))),(0,n.mdx)("li",{parentName:"ol"},"Execute the following:",(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},'mkdir -p /tmp/$RELEASE\nunzip /tmp/$PATCHFILE "$PATCHNUM/images/*" -d /tmp/$RELEASE\ncp -R /tmp/$RELEASE/$PATCHNUM/images/* /opt/oracle/apex/images/$RELEASE\nrm -rf /tmp/$RELEASE\n')))),(0,n.mdx)("p",null,"That's it!"),(0,n.mdx)("blockquote",null,(0,n.mdx)("u",null,"Photo Credits"),(0,n.mdx)("p",{parentName:"blockquote"},"Photo by ",(0,n.mdx)("a",{parentName:"p",href:"https://pixabay.com/users/arttower-5337/"},"ArtTower"))))}m.isMDXComponent=!0},64049:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spider-223982_1280x800-f7db4878a3d7ea4daa3b7ddd7e606055.jpg"}}]);