"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[68812],{69292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(85893),r=n(11151);const s={title:"Keep Your APEX Images Updated",tags:["orclapex","autonomous","database","ords"],slug:"id/2006",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2020-07-25T17:03:59.000Z")},o=void 0,i={permalink:"/content/id/2006",source:"@site/posts/keep-your-apex-images-updated/index.md",title:"Keep Your APEX Images Updated",description:"Spider Web",date:"2020-07-25T17:03:59.000Z",formattedDate:"July 25, 2020",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"autonomous",permalink:"/content/tags/autonomous"},{label:"database",permalink:"/content/tags/database"},{label:"ords",permalink:"/content/tags/ords"}],readingTime:1.525,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Keep Your APEX Images Updated",tags:["orclapex","autonomous","database","ords"],slug:"id/2006",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2020-07-25T17:03:59.000Z"},unlisted:!1,prevItem:{title:"Update Free SSL Certificates for the OCI Load Balancer",permalink:"/content/id/2007"},nextItem:{title:"Running ORDS Against the Autonomous Database - Part 2",permalink:"/content/id/2005"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Spider Web",src:n(64049).Z+"",width:"1280",height:"800"})}),"\n",(0,a.jsxs)(t.p,{children:['As Uncle Ben would say, "Remember, with great power, comes great responsibility." With the release of ',(0,a.jsx)(t.a,{href:"https://www.oracle.com/database/technologies/appdev/rest.html",children:"Oracle REST Data Services"})," (ORDS) version 19.4.6, many of us were eager to deploy a customer-managed ORDS solution in order to support vanity URLs with ",(0,a.jsx)(t.a,{href:"https://apex.oracle.com",children:"Oracle Application Express"})," (APEX), myself ",(0,a.jsx)(t.a,{href:"/content/id/2004",children:"included"}),". It has worked well for me until a few days ago, I noticed that my ",(0,a.jsx)(t.a,{href:"https://oracle.com/jet",children:"Oracle JET"})," charts weren't loading any more."]}),"\n",(0,a.jsxs)(t.p,{children:["A quick check showed multiple ",(0,a.jsx)(t.a,{href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5",children:"HTTP 404"})," errors were triggered. APEX was referencing a newer Oracle JET version, 8.3.0 insted of the stock 8.0.0."]}),"\n",(0,a.jsxs)(t.p,{children:["One of the key benefits of running APEX on an ",(0,a.jsx)(t.a,{href:"https://www.oracle.com/database/what-is-autonomous-database.html",children:"Oracle Autonomous Database"})," is auto-patching, and clearly something got updated in the recent days. True enough, an updated Patch Set Bundle (PSE) was released on July 20, 2020 (Source: ",(0,a.jsx)(t.a,{href:"https://apex.oracle.com/download",children:"https://apex.oracle.com/download"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["On the ",(0,a.jsx)(t.a,{href:"https://www.oracle.com/tools/downloads/apex-downloads/apex-201-known-issues.html",children:"Known Issues"})," page, it states:"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"With 20.1, we integrated the following third party libraries: Oracle JET 8.0.0, jQuery 3.4.1, jQuery Migrate 3.0.1, and jQuery FullCalendar 3.10.0. Upgraded versions of these libraries have been made available: Oracle JET 8.3.0, jQuery 3.5.1, jQuery Migrate 3.3.0, and jQuery FullCalendar 3.10.2."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here's what I did to get my server updated."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Login to ",(0,a.jsx)(t.a,{href:"https://support.oracle.com",children:"Oracle Support"})," and search ",(0,a.jsx)(t.code,{children:"30990551"}),", or simply click ",(0,a.jsx)(t.a,{href:"https://support.oracle.com/epmos/faces/PatchDetail?patchId=30990551",children:"here"})]}),"\n",(0,a.jsxs)(t.li,{children:["Download the patch. The file name should be ",(0,a.jsx)(t.code,{children:"p30990551_2010_Generic.zip"}),".","\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Important"}),"\n",(0,a.jsx)(t.p,{children:"You will need an active support contract in order to download the PSE."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Upload the patch to the Compute instance hosting ORDS. Place the file in the ",(0,a.jsx)(t.code,{children:"/tmp"})," directory."]}),"\n",(0,a.jsxs)(t.li,{children:["Login to the server as the user ",(0,a.jsx)(t.code,{children:"opc"}),", using SSH."]}),"\n",(0,a.jsxs)(t.li,{children:["Set the environment variables:","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"RELEASE=20.1.0.00.13\nPATCHNUM=30990551\nPATCHFILE=p30990551_2010_Generic.zip\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Execute the following:","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'mkdir -p /tmp/$RELEASE\nunzip /tmp/$PATCHFILE "$PATCHNUM/images/*" -d /tmp/$RELEASE\ncp -R /tmp/$RELEASE/$PATCHNUM/images/* /opt/oracle/apex/images/$RELEASE\nrm -rf /tmp/$RELEASE\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"That's it!"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)("u",{children:"Photo Credits"}),"\n",(0,a.jsxs)(t.p,{children:["Photo by ",(0,a.jsx)(t.a,{href:"https://pixabay.com/users/arttower-5337/",children:"ArtTower"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},64049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spider-223982_1280x800-f7db4878a3d7ea4daa3b7ddd7e606055.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(67294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);