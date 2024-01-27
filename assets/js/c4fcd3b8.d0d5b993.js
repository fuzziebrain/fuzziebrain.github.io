"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[91682],{53992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),a=n(11151);const i={title:"Running ORDS Against the Autonomous Database - Part 2",tags:["ords","rest","orclapex","autonomous","database","load balancer"],slug:"id/2005",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2020-07-01T20:46:45.000Z")},r=void 0,o={permalink:"/content/id/2005",source:"@site/posts/running-ords-against-the-autonomous-database-part-2/index.md",title:"Running ORDS Against the Autonomous Database - Part 2",description:"Old pipes and valves",date:"2020-07-01T20:46:45.000Z",formattedDate:"July 1, 2020",tags:[{label:"ords",permalink:"/content/tags/ords"},{label:"rest",permalink:"/content/tags/rest"},{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"autonomous",permalink:"/content/tags/autonomous"},{label:"database",permalink:"/content/tags/database"},{label:"load balancer",permalink:"/content/tags/load-balancer"}],readingTime:6.265,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Running ORDS Against the Autonomous Database - Part 2",tags:["ords","rest","orclapex","autonomous","database","load balancer"],slug:"id/2005",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2020-07-01T20:46:45.000Z"},unlisted:!1,prevItem:{title:"Keep Your APEX Images Updated",permalink:"/content/id/2006"},nextItem:{title:"Running ORDS Against the Autonomous Database",permalink:"/content/id/2004"}},l={authorsImageUrls:[void 0]},c=[{value:"Load Balancers",id:"load-balancers",level:2},{value:"Backend Sets",id:"backend-sets",level:2},{value:"Hostnames",id:"hostnames",level:2},{value:"SSL/TLS Certificates",id:"ssltls-certificates",level:2},{value:"Listeners",id:"listeners",level:2},{value:"Other Resources",id:"other-resources",level:2},{value:"Final Step",id:"final-step",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Old pipes and valves",src:n(14419).Z+"",width:"3766",height:"2118"})}),"\n",(0,s.jsxs)(t.p,{children:["In my ",(0,s.jsx)(t.a,{href:"/content/id/2004/",children:"previous post"}),", we looked at installing and configuring ",(0,s.jsx)(t.a,{href:"https://www.oracle.com/ca-en/database/technologies/appdev/rest.html",children:"Oracle REST Data Services"})," (ORDS) and have it work with ",(0,s.jsx)(t.a,{href:"https://apex.oracle.com",children:"Oracle Application Express"})," (APEX) that comes preinstalled with every ",(0,s.jsx)(t.a,{href:"https://www.oracle.com/database/what-is-autonomous-database.html",children:"Oracle Autonomous Database"})," (ADB). Like APEX, ORDS is also included as a feature of the ADB. However, there are certain situations where you might like to manage your own instance of ORDS."]}),"\n",(0,s.jsx)(t.p,{children:"Three key reasons stand out for me:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Using my own domain for my APEX applications."}),"\n",(0,s.jsx)(t.li,{children:"Managing the number of database connections consumed by ORDS for my Always Free ADB that comes with a limit of 20 concurrent database sessions."}),"\n",(0,s.jsxs)(t.li,{children:['Restricting "direct" access to the ADB, for example, to connect to the database using external tools like ',(0,s.jsx)(t.a,{href:"https://www.oracle.com/database/technologies/appdev/sqldeveloper-landing.html",children:"SQL Developer and SQLcl"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The figure below depicts the topology that I will build for my APEX applications."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Planned topology",src:n(20482).Z+"",width:"705",height:"335"})}),"\n",(0,s.jsx)(t.p,{children:"Note that I chose a single subnet for the Load Balancer and Compute. The latter may be deployed in a separate subnet for further isolation."}),"\n",(0,s.jsx)(t.h2,{id:"load-balancers",children:"Load Balancers"}),"\n",(0,s.jsxs)(t.p,{children:["Under the ",(0,s.jsx)(t.a,{href:"https://oracle.com/cloud/free",children:"Oracle Cloud Free Tier"})," offering, users are provided with one ",(0,s.jsx)(t.em,{children:"Always Free"})," load balancer. It has a special bandwidth size called ",(0,s.jsx)(t.em,{children:"Micro"})," and is limited to a maximum of 10 Mbps."]}),"\n",(0,s.jsxs)(t.p,{children:["Go to the Load Balancers page. You will find it under the Networks menu item. Click on the blue ",(0,s.jsx)(t.em,{children:"Create Load Balancer"})," button to begin."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Load Balancer Wizard",src:n(84948).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsx)(t.p,{children:"In the first step, do the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Provide a suitable name."}),"\n",(0,s.jsxs)(t.li,{children:["Set the visibility type to ",(0,s.jsx)(t.em,{children:"Public"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Set the total bandwidth to ",(0,s.jsx)(t.em,{children:"Micro"}),". Note that this size is not selectable if you have already created one, or are not in your Oracle Cloud Infrastructure (OCI) home region."]}),"\n",(0,s.jsx)(t.li,{children:"Select the appropriate Virtual Cloud Network (VCN) and subnet that the load balancer should be placed in. Make sure that it is setup as a public network, an Internet Gateway and network route rules for bidirectional Internet traffic."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In the next step, leave the default settings. However, on the third and final step, change the listener to listen for HTTP traffic."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Load Balancer Wizard - Final Step",src:n(35673).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.em,{children:"Submit"})," to create the load balancer. A Listener and Backend Set is also created in the process, but we should delete them both once the load balancer is up."]}),"\n",(0,s.jsx)(t.p,{children:"Once created, the Load Balancer Details page will display the Reserved Public IP address it has been assigned with. Use this to update your DNS records."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Load Balancer Details page",src:n(67627).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Remember to delete the listener and backend set created by default."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"backend-sets",children:"Backend Sets"}),"\n",(0,s.jsxs)(t.p,{children:["Next, create the backend set that includes the Compute instance hosting ORDS. On the left side of the Load Balancer Details page, you will find a list of Resources that can be managed. Click on ",(0,s.jsx)(t.em,{children:"Backend Sets"})," and then click on the blue ",(0,s.jsx)(t.em,{children:"Create Backend Set"})," button to launch the wizard."]}),"\n",(0,s.jsxs)(t.p,{children:["Provide a suitable name and then leave the default values for ",(0,s.jsx)(t.em,{children:"Traffic Distribution Policy"})," and ",(0,s.jsx)(t.em,{children:"Session Persistence"}),". Under Health Check, set the following:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Protocol"})," - HTTP"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Port"})," - 8080"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"URL Path"})," - /i/19.2.0.00.18/apex_version.txt"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After the backend set is created successfully, click on its name and add backends. You can access the list of backends from the Resources menu on the left of the Backend Set Information page."}),"\n",(0,s.jsxs)(t.p,{children:["To begin, click the blue ",(0,s.jsx)(t.em,{children:"Add Backends"})," button and then select the Compute instance that is hosting ORDS. Be sure to change the port number to ",(0,s.jsx)(t.code,{children:"8080"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Backends Modal Dialog",src:n(52663).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsx)(t.p,{children:"For traffic to flow between the load balancer and backends, appropriate ingress and egress security list rules are required. You may do this manually, but for convenience, you can have the wizard perform these tasks automaticallly."}),"\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.em,{children:"Add"})," button to complete the process."]}),"\n",(0,s.jsx)(t.h2,{id:"hostnames",children:"Hostnames"}),"\n",(0,s.jsx)(t.p,{children:"This is an optional resource but is simple to create. Simply provide a name and the URL that will be associated with the listener."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Hostname Modal Dialog",src:n(80901).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsx)(t.h2,{id:"ssltls-certificates",children:"SSL/TLS Certificates"}),"\n",(0,s.jsx)(t.p,{children:"We will want to secure our access to the APEX instance. I will not go into details now on how to obtain a valid SSL/TLS certificate. To create this resource, you should have the following:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"SSL/TLS public certificate"}),"\n",(0,s.jsxs)(t.li,{children:["CA certificate (while optional, I have found issues with REST clients validating with ",(0,s.jsx)(t.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})," certificates)"]}),"\n",(0,s.jsx)(t.li,{children:"Private key"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Certificate Modal Dialog",src:n(42126).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"All"})," certificates and key must be in the PEM format."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Update [Sep 14, 2020]"})}),"\n",(0,s.jsxs)(t.p,{children:["I have made available a ",(0,s.jsx)(t.a,{href:"https://github.com/fuzziebrain/oci-le-cert-manager",children:"project"})," that helps perform some of these tasks. You can read more about it in this follow-up ",(0,s.jsx)(t.a,{href:"/content/id/2007",children:"post"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"listeners",children:"Listeners"}),"\n",(0,s.jsx)(t.p,{children:"Create two listeners, one each for listening to secure and non-secure traffic."}),"\n",(0,s.jsx)(t.p,{children:"The HTTP listener should have the following attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A suitable name"}),"\n",(0,s.jsx)(t.li,{children:"An optional hostname"}),"\n",(0,s.jsx)(t.li,{children:"Listen using the HTTP protocol"}),"\n",(0,s.jsx)(t.li,{children:"Listen on port 80"}),"\n",(0,s.jsx)(t.li,{children:"Use SSL unchecked"}),"\n",(0,s.jsx)(t.li,{children:"The backend defined for the ORDS server selected"}),"\n",(0,s.jsx)(t.li,{children:"Default timeout of 60 seconds (or leave it blank)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Listener Modal Dialog for HTTP Protocol",src:n(3245).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsx)(t.p,{children:"The HTTPS listener should have the following attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A suitable name"}),"\n",(0,s.jsx)(t.li,{children:"An optional hostname"}),"\n",(0,s.jsxs)(t.li,{children:["Listen using the ",(0,s.jsx)(t.strong,{children:"HTTP"})," protocol"]}),"\n",(0,s.jsx)(t.li,{children:"Listen on port 443"}),"\n",(0,s.jsx)(t.li,{children:"Use SSL checked"}),"\n",(0,s.jsx)(t.li,{children:"The associated certificate selected"}),"\n",(0,s.jsx)(t.li,{children:"Verify peer certificate unchecked"}),"\n",(0,s.jsx)(t.li,{children:"The backend defined for the ORDS server selected"}),"\n",(0,s.jsx)(t.li,{children:"Idle timeout set to 1800 seconds"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Listener Modal Dialog for HTTPS Protocol",src:n(32806).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The idle timeout I have suggested can be tweaked to your requirements. I have found 60 seconds to be too short for a functional APEX application. For example, file operations sometimes require a longer length of time to be completed successfully."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"other-resources",children:"Other Resources"}),"\n",(0,s.jsxs)(t.p,{children:["The instructions provided in the blog post gets you a basic setup to support a standard customer-managed ORDS instance. More often than not, you will have other requirements. For example, the ",(0,s.jsx)(t.a,{href:"https://apeks.app/sponsor-a-coin",children:"APEX Challenge Coin"})," website uses a path alias that links to the APEX application for submitting nominations. In web servers, these are usually addressed by creating URL rewrite rules that redirect you to the correct address. For this purpose, you may use a ",(0,s.jsx)(t.em,{children:"Rule Set"})," and assign it to a listener. Here's a full list of rule types that you can create:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Access Control"}),"\n",(0,s.jsx)(t.li,{children:"Access Method"}),"\n",(0,s.jsx)(t.li,{children:"URL Redirect"}),"\n",(0,s.jsx)(t.li,{children:"Request Header"}),"\n",(0,s.jsx)(t.li,{children:"Response Header"}),"\n",(0,s.jsx)(t.li,{children:"HTTP Header"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Rule Set Modal Dialog",src:n(49498).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsxs)(t.p,{children:["You might also serve other resources hosted on other backend servers. For example, I host some static content on the apeks.app website. For that, I run an Apache Web Server that hosts a single static HTML page. I can create Path Route Sets that will redirect the browser to the appropriate backend server based on the supplied path. Any path that starts with ",(0,s.jsx)(t.code,{children:"/i"})," or ",(0,s.jsx)(t.code,{children:"/ords"}),", which is used by APEX and ORDS, hands off to the backend running ORDS. The default, and so every other path, will lead to the other web server."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Update [Sep 14, 2020]"})}),"\n",(0,s.jsxs)(t.p,{children:["Thanks to ",(0,s.jsx)(t.a,{href:"https://disqus.com/by/disqus_RgMBmO0DI7/",children:"Robert Barton"})," for pointing out in the comments. I forgot to mention that once the path route set has been created, assign it to the target listener. In my case, this would be the listener with SSL enabled."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Path Route Set Modal Dialog",src:n(30863).Z+"",width:"1280",height:"800"})}),"\n",(0,s.jsx)(t.h2,{id:"final-step",children:"Final Step"}),"\n",(0,s.jsxs)(t.p,{children:["Login to the server hosting ORDS as the ",(0,s.jsx)(t.em,{children:"opc"})," user and edit the ",(0,s.jsx)(t.em,{children:"ORDS Service Script Configuration File"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo vi /etc/ords/ords.conf\n"})}),"\n",(0,s.jsx)(t.p,{children:"Uncomment the line containing:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"JAVA_OPTIONS=-Dsecurity.forceHTTPS=true\n"})}),"\n",(0,s.jsx)(t.p,{children:"Restart the ORDS service:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo systemctl restart ords\n"})}),"\n",(0,s.jsx)(t.p,{children:"That's it!"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},14419:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/pipes-5146458_1280x800-48ddbc2f929f85b87fc1aa3a601a574d.jpg"},84948:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen01-f41fbb5770ab6122bbac193dd1b2ca64.png"},35673:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen02-8bf1a871ab58f23513bacfba2b287322.png"},67627:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen03-95a594d6a286b314c38b53d631e5a65b.png"},52663:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen04-4b850f409aba608b950619904b5cf98e.png"},80901:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen05-caa6b21ee2438e20c3d00f68612b64d3.png"},42126:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen06-cda90c706659a405c784c09111c41574.png"},3245:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen07-510bc663de2bbf39b4497f0c5361bf16.png"},32806:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen08-dfb6c9eba5014540c953b0a5638c9343.png"},49498:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen09-239f0cedc610e731f8e3bb7d2f1b7d9b.png"},30863:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/screen10-2dba30cc746de54211a3a1c48a288b30.png"},20482:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/topology-6d1358e72c4a6f2bac7a83a107bdc6d7.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);