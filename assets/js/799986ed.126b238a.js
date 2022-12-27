"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[28786],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>d});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),d=function(e){return function(t){var a=u(t.components);return o.createElement(e,r({},t,{components:a}))}},u=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,p=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return a?o.createElement(p,i(i({ref:t},c),{},{components:a})):o.createElement(p,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},36654:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=a(87462),n=(a(67294),a(3905));const r={title:"Day 17 - 30 days on the Oracle Cloud",tags:["oracle","cloud","oci","IaaS","infrastructure","autonomous","database"],slug:"id/1911",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2019-07-18T01:03:47.000Z")},s=void 0,i={permalink:"/content/id/1911",source:"@site/posts/day-17-30-days-on-the-oracle-cloud/index.md",title:"Day 17 - 30 days on the Oracle Cloud",description:"Autonomous TT",date:"2019-07-18T01:03:47.000Z",formattedDate:"July 18, 2019",tags:[{label:"oracle",permalink:"/content/tags/oracle"},{label:"cloud",permalink:"/content/tags/cloud"},{label:"oci",permalink:"/content/tags/oci"},{label:"IaaS",permalink:"/content/tags/iaa-s"},{label:"infrastructure",permalink:"/content/tags/infrastructure"},{label:"autonomous",permalink:"/content/tags/autonomous"},{label:"database",permalink:"/content/tags/database"}],readingTime:3.21,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Day 17 - 30 days on the Oracle Cloud",tags:["oracle","cloud","oci","IaaS","infrastructure","autonomous","database"],slug:"id/1911",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2019-07-18T01:03:47.000Z"},prevItem:{title:"Day 22 - 30 Days on the Oracle Cloud",permalink:"/content/id/1912"},nextItem:{title:"Relocating Compute Instances",permalink:"/content/id/1910"}},l={authorsImageUrls:[void 0]},c=[{value:"Create and Autonomous DB",id:"create-and-autonomous-db",level:2},{value:"Connecting to the Instance",id:"connecting-to-the-instance",level:2},{value:"What Makes It Cool?",id:"what-makes-it-cool",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Autonomous TT",src:a(21762).Z,width:"1280",height:"720"})),(0,n.mdx)("p",null,"In case you missed it (which is almost impossible), the ",(0,n.mdx)("a",{parentName:"p",href:"https://www.oracle.com/database/autonomous-database.html"},"Oracle Autonomous Database (AutonomousDB)")," is Oracle's hottest offering on the ",(0,n.mdx)("a",{parentName:"p",href:"https://cloud.oracle.com"},"Oracle Cloud")," and it now ",(0,n.mdx)("a",{parentName:"p",href:"https://blogs.oracle.com/apex/announcing-the-availability-of-oracle-apex-on-autonomous-database-cloud"},"comes fitted")," with what is arguably the best feature of the Oracle Database: ",(0,n.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express (APEX)"),". I have a few more days to go with this ",(0,n.mdx)("a",{parentName:"p",href:"https://cloud.oracle.com/tryit"},"trial"),", so why not take one out for a spin?"),(0,n.mdx)("h2",{id:"create-and-autonomous-db"},"Create and Autonomous DB"),(0,n.mdx)("p",null,'Creating an Autonomous DB is easier than saying "ABC"!'),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Login to the Oracle Cloud console."),(0,n.mdx)("li",{parentName:"ol"},"Click ",(0,n.mdx)("i",{class:"fa-solid fa-bars"})," ",(0,n.mdx)("i",{class:"fa-solid fa-caret-right"})," Autonomous Transaction Processing (or Autonomous Data Warehouse)."),(0,n.mdx)("li",{parentName:"ol"},'Click "Create Autonomous Database" and provide the following details:',(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre"},"* Compartment to situate the ATP/ADW in.\n* A display name\n* A database name (this is important!)\n* Choose a workload type, so pick between ADW or ATP depending on how you'd anticipate the database to be used.\n* A deployment type, serverless (shared) or dedicated. Note that at the time of writing, serverless or ATP-S runs the database version 18c and auto indexing is not available. You'll need ATP-D (dedicated) to enjoy the benefits of auto indexing.\n* Resources needed, CPU core count and storage size (the minimum 1 TB is really daunting).\n* Select [auto scaling](https://docs.cloud.oracle.com/iaas/Content/Database/Concepts/adboverview.htm#autoscaling) if required.\n* Enter the `ADMIN` user's password twice, and then\n* Select the license type. Note that for trials, select either doesn't really matter. I have addressed this issue [before](/content/id/1906/), don't be fooled by the extraordinary low prices to run an autonomous DB. Use the [cost estimator](https://cloud.oracle.com/cost-estimator) for more realistic numbers for budgeting.\n")),(0,n.mdx)("img",{alt:"Create a serverless Autonomous Transaction Processing database",src:a(46412).Z,width:"1280",height:"800"}))),(0,n.mdx)("h2",{id:"connecting-to-the-instance"},"Connecting to the Instance"),(0,n.mdx)("p",null,"Once the autonomous DB is alive and breathing, return to the details page. Click ",(0,n.mdx)("i",{class:"fa-solid fa-bars"})," ",(0,n.mdx)("i",{class:"fa-solid fa-caret-right"}),' Autonomous Transaction Processing (or Autonomous Data Warehouse) and the select the target autonomous DB. On the details page, click "DB Connection".'),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Database Connection Dialog Page",src:a(36289).Z,width:"1280",height:"800"})),(0,n.mdx)("p",null,'Here, click "Download" to grab the client credentials and wallet. You will need these for connecting to the database using ',(0,n.mdx)("a",{parentName:"p",href:"https://www.oracle.com/database/technologies/appdev/sql-developer.html"},"SQL Developer")," and ",(0,n.mdx)("a",{parentName:"p",href:"https://www.oracle.com/database/technologies/appdev/sqlcl.html"},"SQLcl"),". Also, take note of the connection strings as you will need them to connect to the DB with the required service level."),(0,n.mdx)("p",null,'When creating a connection profile for the autonomous DB, select the Connection Type "Cloud Wallet". Then select the downloaded ZIP file for the Configuration File. Select the appropriate Service (TNS name).'),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"SQL Developer Connection Profile",src:a(3274).Z,width:"1289",height:"805"})),(0,n.mdx)("p",null,"In SQLcl, select and load the Cloud Wallet using the command:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"SQL> set cloud config /path/to/my/wallet_file.zip\n")),(0,n.mdx)("p",null,"Once the cloud wallet is loaded, connect to the DB as you would with any Oracle Database, providing the appropriate TNS Name to connect to."),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Connecting to the DB using SQLcl",src:a(74270).Z,width:"979",height:"512"})),(0,n.mdx)("h2",{id:"what-makes-it-cool"},"What Makes It Cool?"),(0,n.mdx)("p",null,"IMHO, here are few good reasons:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},'There\'s some cool old school Artificial Intelligence/Machine Learning techniques applied. It ain\'t just a marketing buzzword. Some of the algorithms used to put "auto" in "autonomous" are highlighted in ',(0,n.mdx)("a",{parentName:"li",href:"https://twitter.com/SQLMaria"},"Maria Colgan's")," Kscope19 ",(0,n.mdx)("a",{parentName:"li",href:"https://kscope19.odtug.com/e/in/eid=32&req=info&s=2823&all=1"},"session"),". If you are a full ",(0,n.mdx)("a",{parentName:"li",href:"https://www.odtug.com/"},"ODTUG")," member, you will have access to her presentation slide deck and hopefully a recording as well."),(0,n.mdx)("li",{parentName:"ol"},"Oracle Machine Learning Notebooks - if you have used ",(0,n.mdx)("a",{parentName:"li",href:"https://jupyter.org/"},"Jupyter")," before, then you'll find the interface and purpose very familiar.\n",(0,n.mdx)("img",{alt:"Available Tasks",src:a(29540).Z,width:"1280",height:"800"}),(0,n.mdx)("img",{alt:"An OML Notebook",src:a(71974).Z,width:"1280",height:"800"})),(0,n.mdx)("li",{parentName:"ol"},"APEX, enough said!"),(0,n.mdx)("li",{parentName:"ol"},"SQL Developer Web - while we are going to see this available to install on premise in the near future, it doesn't hurt to get an early preview of how powerful a development platform we have with SQLDEV Web and APEX combined.\n",(0,n.mdx)("img",{alt:"SQL Developer in a browser!",src:a(78117).Z,width:"1280",height:"800"}))),(0,n.mdx)("p",null,"Not convinced? Get a trial account and check it out!"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},(0,n.mdx)("strong",{parentName:"p"},"Photo Credits")),(0,n.mdx)("p",{parentName:"blockquote"},"Photo by ",(0,n.mdx)("a",{parentName:"p",href:"https://www.flickr.com/photos/jurvetson/"},"Steve Jurvetson"),"\nLicense: ",(0,n.mdx)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/2.0/"},"CC BY 2.0"))))}u.isMDXComponent=!0},46412:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/01-create_atp-2df8619ef28793d5ac89a31b155a9dbe.png"},36289:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/02-db_connection-08fbe96356f1dff30fc71c5dcab500f9.png"},3274:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/03-sqldev_connection-7b1ba79784614ed11a6b13b7e370aaee.jpg"},74270:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/04-sqlcl_connection-b13935d52db3b3452d2a18a092586d66.jpg"},29540:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/05-oml_notebook-0c7fafd021993811199501ce2cb6a766.png"},71974:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/06-oml_notebook-fe9eab3e3655510ab15584c40e98febf.png"},78117:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/07-sqldev_web-1a95f4137e2dc40ad6724c19d97b7e57.png"},21762:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/autonomous_tt_1280x720-5689e00a3b8ed94fb544cb18d4e2851f.jpg"}}]);