"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[54222],{77886:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(85893),n=s(11151);const a={title:"Generating XSL-FO Layouts with Microsoft Word and Apache POI",tags:["Apache POI","Java","Microsoft Word","Oracle Application Express","Oracle BI Publisher","PDF","reporting","XPath","XSL-FO"],slug:"id/332",authors:["fuzziebrain"],comment:!1,categories:["Technology","Programming","Oracle Application Express"],date:new Date("2013-05-31T20:53:46.000Z")},r=void 0,o={permalink:"/content/id/332",source:"@site/posts/generating-xsl-fo-layouts-with-microsoft-word-and-apache-poi/index.md",title:"Generating XSL-FO Layouts with Microsoft Word and Apache POI",description:"The objective of this post is to describe how to create XSL-FO Layouts with little or no costs! These can then be used\xa0for custom PDF documents\xa0printing in Oracle Application Express (APEX).",date:"2013-05-31T20:53:46.000Z",formattedDate:"May 31, 2013",tags:[{label:"Apache POI",permalink:"/content/tags/apache-poi"},{label:"Java",permalink:"/content/tags/java"},{label:"Microsoft Word",permalink:"/content/tags/microsoft-word"},{label:"Oracle Application Express",permalink:"/content/tags/oracle-application-express"},{label:"Oracle BI Publisher",permalink:"/content/tags/oracle-bi-publisher"},{label:"PDF",permalink:"/content/tags/pdf"},{label:"reporting",permalink:"/content/tags/reporting"},{label:"XPath",permalink:"/content/tags/x-path"},{label:"XSL-FO",permalink:"/content/tags/xsl-fo"}],readingTime:2.015,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Generating XSL-FO Layouts with Microsoft Word and Apache POI",tags:["Apache POI","Java","Microsoft Word","Oracle Application Express","Oracle BI Publisher","PDF","reporting","XPath","XSL-FO"],slug:"id/332",authors:["fuzziebrain"],comment:!1,categories:["Technology","Programming","Oracle Application Express"],date:"2013-05-31T20:53:46.000Z"},unlisted:!1,prevItem:{title:"Post-KScope Blues",permalink:"/content/id/391"},nextItem:{title:"My KScope Experience (and Desires)",permalink:"/content/id/274"}},l={authorsImageUrls:[void 0]},c=[{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Step 6",id:"step-6",level:3},{value:"Step 7",id:"step-7",level:3},{value:"Step 8",id:"step-8",level:3},{value:"Step 9",id:"step-9",level:3},{value:"Step 10",id:"step-10",level:3},{value:"Step 11",id:"step-11",level:3},{value:"Step 12",id:"step-12",level:3}];function p(e){const t={a:"a",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The objective of this post is to describe how to create XSL-FO Layouts with little or no costs! These can then be used\xa0for custom ",(0,i.jsx)(t.a,{href:"http://www.slideshare.net/",title:"SlideShare",children:"PDF documents"}),"\xa0printing in ",(0,i.jsx)(t.a,{href:"http://apex.oracle.com",title:"Oracle Application Express",children:"Oracle Application Express"})," (APEX)."]}),"\n",(0,i.jsx)(t.p,{children:"Let's get started..."}),"\n",(0,i.jsx)(t.p,{children:"Tools that you will need:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"http://office.microsoft.com/en-us/word/",title:"Microsoft Word",children:"Microsoft Word"})," 97 and up."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"http://poi.apache.org",title:"Apache POI",children:"Apache POI"})," binaries."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1",children:"Step 1"}),"\n",(0,i.jsxs)(t.p,{children:["Design your report template using Microsoft Word and populate the document with variable placeholders.\n",(0,i.jsx)(t.img,{alt:"Design the form/report",src:s(12803).Z+"",width:"1383",height:"675"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-2",children:"Step 2"}),"\n",(0,i.jsxs)(t.p,{children:["Save this template as a ",(0,i.jsx)("u",{children:"Word 97-2003"})," document."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3",children:"Step 3"}),"\n",(0,i.jsxs)(t.p,{children:["Download the latest Apache POI binaries. At the time of writing, the latest version is 3.9 and the utility needed is still under development. The two ",(0,i.jsx)(t.a,{href:"http://www.oracle.com/technetwork/java/",title:"Java (programming language)",children:"Java"})," library (jar) files are highlighted.\n",(0,i.jsx)(t.img,{alt:"Files in Apache POI",src:s(40197).Z+"",width:"596",height:"333"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-4",children:"Step 4"}),"\n",(0,i.jsx)(t.p,{children:"Extract the package and change the current directory to the folder the files were extracted to."}),"\n",(0,i.jsx)(t.h3,{id:"step-5",children:"Step 5"}),"\n",(0,i.jsx)(t.p,{children:"For convenience, copy/move the template document to the same directories as the Java libraries."}),"\n",(0,i.jsx)(t.h3,{id:"step-6",children:"Step 6"}),"\n",(0,i.jsxs)(t.p,{children:["Perform the Word to FO conversion. Enter the command as highlighted.\n",(0,i.jsx)(t.img,{alt:"Executing the Word-to-FO Conversion Process",src:s(49233).Z+"",width:"677",height:"342"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-7",children:"Step 7"}),"\n",(0,i.jsxs)(t.p,{children:["The contents of the FO file should be something similar to this:\n",(0,i.jsx)(t.img,{alt:"Sample Contents",src:s(73345).Z+"",width:"1168",height:"645"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-8",children:"Step 8"}),"\n",(0,i.jsxs)(t.p,{children:["Place the contents of this file - stuff between the <fo",":root","> element - within a transformation template.\n",(0,i.jsx)(t.img,{alt:"XSLT Template",src:s(30451).Z+"",width:"857",height:"148"})]}),"\n",(0,i.jsxs)(t.p,{children:["Note: If ",(0,i.jsx)(t.a,{href:"http://www.oracle.com/technology/products/xml-publisher/index.html",title:"Oracle BI Publisher",children:"Oracle BI Publisher"})," is used to generate the PDFs, then remove the and any child elements within. Consulting the ",(0,i.jsx)(t.a,{href:"http://docs.oracle.com/cd/E28280_01/bi.1111/e22254/toc.htm",children:"docs"})," for supported elements would be helpful."]}),"\n",(0,i.jsx)(t.h3,{id:"step-9",children:"Step 9"}),"\n",(0,i.jsxs)(t.p,{children:["Replace the placeholders defined in the Word document with elements.\n",(0,i.jsx)(t.img,{alt:"Placeholders to be replaced",src:s(50079).Z+"",width:"1168",height:"483"})]}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/XPath",title:"XPath",children:"XPath"})," to select the values from the ",(0,i.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/XML",title:"XML",children:"XML"})," data file generated by APEX.\n",(0,i.jsx)(t.img,{alt:"Embedding Query Results using XPath",src:s(7727).Z+"",width:"1168",height:"425"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-10",children:"Step 10"}),"\n",(0,i.jsxs)(t.p,{children:["Images would be removed and replaced by a placeholder comment tag.\n",(0,i.jsx)(t.img,{alt:"Image Placeholder",src:s(86559).Z+"",width:"1168",height:"543"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-11",children:"Step 11"}),"\n",(0,i.jsxs)(t.p,{children:["Include the image file as <fo",":external-graphic","> elements.\n",(0,i.jsx)(t.img,{alt:"Adding an External Graphic",src:s(79692).Z+"",width:"1168",height:"548"})]}),"\n",(0,i.jsx)(t.h3,{id:"step-12",children:"Step 12"}),"\n",(0,i.jsxs)(t.p,{children:['Save the file with an XML extension. To see this template in action, click on the "Print" button ',(0,i.jsx)(t.a,{href:"http://apex.oracle.com/pls/apex/f?p=69146:301:0::::P301_EMPNO:7782",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Known Issue: The graphics element renders correctly when using Oracle APEX Listener 2.0 embedded Apache FOP print rendering engine, but not on apex.oracle.com, which uses Oracle BI Publisher. I am still trying to figure out why and if you do know the reason, I'd be happy if you could share it with me. Thanks! :-)"})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},12803:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_06-89371678232f794221fb7ffa499d515d.png"},40197:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_07-b8ef4fa40764a5105b652329fb4651b9.png"},49233:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_09-ca84b4bf52cbc18367c77b56d3c70fdd.png"},73345:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_10-2a3318bc38f22dd1867694bdc5b7ca17.png"},30451:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_11-9fb6de42180c158d22fe4c963492fdfd.png"},86559:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_13-5e4021c2c0441be63498c62ec2e7a500.png"},79692:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_14-4120bcfcced257da704c36b9d149581f.png"},50079:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_15-0416213c70a1eb5cb569f5600fe9b84b.png"},7727:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/apex_custom_pdf_report_17-fc48d4c2782151c38e14f302f9e9ea26.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var i=s(67294);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);