"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[62784],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){return function(t){var a=c(t.components);return n.createElement(e,o({},t,{components:a}))}},c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,u=d["".concat(i,".").concat(p)]||d[p]||h[p]||o;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=x;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},98347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Day 2 - 30 Days on the Oracle Cloud",tags:["oracle","cloud","oci","IaaS","infrastructure","devops","orclapex"],slug:"id/1904",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2019-02-28T00:22:50.000Z")},i=void 0,l={permalink:"/content/id/1904",source:"@site/posts/day-2-30-days-on-the-oracle-cloud/index.md",title:"Day 2 - 30 Days on the Oracle Cloud",description:"Remember this ad?",date:"2019-02-28T00:22:50.000Z",formattedDate:"February 28, 2019",tags:[{label:"oracle",permalink:"/content/tags/oracle"},{label:"cloud",permalink:"/content/tags/cloud"},{label:"oci",permalink:"/content/tags/oci"},{label:"IaaS",permalink:"/content/tags/iaa-s"},{label:"infrastructure",permalink:"/content/tags/infrastructure"},{label:"devops",permalink:"/content/tags/devops"},{label:"orclapex",permalink:"/content/tags/orclapex"}],readingTime:5.26,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Day 2 - 30 Days on the Oracle Cloud",tags:["oracle","cloud","oci","IaaS","infrastructure","devops","orclapex"],slug:"id/1904",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2019-02-28T00:22:50.000Z"},prevItem:{title:"Day 4 - 30 Days on the Oracle Cloud",permalink:"/content/id/1905"},nextItem:{title:"Day 0 - 30 Days on the Oracle Cloud",permalink:"/content/id/1903"}},m={authorsImageUrls:[void 0]},s=[{value:"Required Components",id:"required-components",level:2},{value:"Compartments",id:"compartments",level:3},{value:"Network",id:"network",level:3},{value:"Compute Instance - Virtual Machine",id:"compute-instance---virtual-machine",level:3},{value:"Accessing the Server",id:"accessing-the-server",level:2},{value:"Summary",id:"summary",level:2}],d={toc:s};function c(e){let{components:t,...o}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("youtube",{youTubeId:"yNVE59GJ9xM"}),(0,r.mdx)("p",null,"Remember this ad?"),(0,r.mdx)("p",null,"IBM BladeCenters were revolutionary at its time. System Administrators would know that one of the largest expense when building out a server infrastructure is real estate costs. Shrinking racks of servers and consolidating into blade servers meant you could put more hardware in less space. However, they were expensive and had their fair share of skeptics. Adopting a proprietary backbone simply meant you were investing into a brand and hence subject to vendor lock-in."),(0,r.mdx)("p",null,'Then came virtualization. With more powerful CPUs, cheaper RAMs and more cost-effective storage solutions, we are now able to cramp more servers into a single server. Other pieces of traditional server infrastructure, e.g. network and storage, could be "software-defined". The server footprint very much "vanished into thin air"!'),(0,r.mdx)("p",null,"Think of the ",(0,r.mdx)("a",{parentName:"p",href:"https://cloud.oracle.com/iaas"},"Oracle Cloud Infrastructure (OCI)")," as your server room in the cloud. With OCI, customers have access to the basic components needed for every server infrastructure and more! Besides virtual networks, firewalls, machines and storage, customers also have access to various specialty appliances and services. That includes autonomous database systems and container services. You can access the OCI console using a URL like ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://console.us-ashburn-1.oraclecloud.com/?tenant=<MY_TENANT>")," where ",(0,r.mdx)("inlineCode",{parentName:"p"},"<MY_TENANT>")," is the name of your tenancy. Login with the Oracle Cloud credentials."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"OCI Console",src:a(90961).Z,width:"1280",height:"800"})),(0,r.mdx)("p",null,"As an avid ",(0,r.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express (APEX)")," fan, my main interest is always about setting up the components necessary to build my APEX Stack. On Day 2 of my trial, let's examine the shortest path needed to get the environment up and running."),(0,r.mdx)("h2",{id:"required-components"},"Required Components"),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"A Simple Topology",src:a(84931).Z,width:"659",height:"365"})),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingVCNs.htm"},"Virtual Cloud Network (VCN)")),(0,r.mdx)("li",{parentName:"ol"},"Subnet"),(0,r.mdx)("li",{parentName:"ol"},"Internet Gateway"),(0,r.mdx)("li",{parentName:"ol"},"Security Rules"),(0,r.mdx)("li",{parentName:"ol"},"Virtual Machine")),(0,r.mdx)("p",null,"There are ",(0,r.mdx)("strong",{parentName:"p"},"no")," usage costs for components 1 to 4, so I will create them in that order. All resources will be created physically in the Ashburn data centre (region)."),(0,r.mdx)("h3",{id:"compartments"},"Compartments"),(0,r.mdx)("p",null,"Compartments are a great way for partitioning your resources for various intents, e.g. billing, access control. There are again, no costs to create one, and for my environment, I have decided to create one per environment: ",(0,r.mdx)("em",{parentName:"p"},"DEV"),", ",(0,r.mdx)("em",{parentName:"p"},"TEST"),", ",(0,r.mdx)("em",{parentName:"p"},"PROD"),"."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Click {% fa bars %} {% fa caret-right %} Identity {% fa caret-right %} Compartments"),(0,r.mdx)("li",{parentName:"ol"},"On the ",(0,r.mdx)("em",{parentName:"li"},"Compartments")," page, I have two compartments already created. I will create a ",(0,r.mdx)("em",{parentName:"li"},"DEV")," compartment under the tenancy's root compartment. Click ",(0,r.mdx)("em",{parentName:"li"},"Create Compartment")," and then enter a name and description for the compartment. Choose ",(0,r.mdx)("em",{parentName:"li"},"<MY_TENANT> (root)")," for the parent compartment."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("em",{parentName:"li"},"Create Compartment"))),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Create a compartment for DEV resources",src:a(40481).Z,width:"1280",height:"800"})),(0,r.mdx)("h3",{id:"network"},"Network"),(0,r.mdx)("p",null,"All resources will need to live within a VCN. It encapsulates the subnets, gateways"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Click {% fa bars %} {% fa caret-right %} Networking {% fa caret-right %} Virtual Cloud Networks"),(0,r.mdx)("li",{parentName:"ol"},"On the ",(0,r.mdx)("em",{parentName:"li"},"Virtual Cloud Networks")," page, click ",(0,r.mdx)("em",{parentName:"li"},"Create Virtual Cloud Network"),". Select the target compartment and enter a name if necessary. Provide the network range (",(0,r.mdx)("em",{parentName:"li"},"CIDR BLOCK"),") for this subnet, e.g. ",(0,r.mdx)("inlineCode",{parentName:"li"},"10.1.0.0/16"),". There online tools that can help determine what the IPv4 range for a ",(0,r.mdx)("a",{parentName:"li",href:"https://wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR")," block."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("em",{parentName:"li"},"Create Virtual Cloud Network"))),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Create a VCN",src:a(68861).Z,width:"1280",height:"800"})),(0,r.mdx)("ol",{start:4},(0,r.mdx)("li",{parentName:"ol"},"Next, create a public subnet. On the VCN Details page, check that the correct compartment is selected (on the left side of the page), then click ",(0,r.mdx)("em",{parentName:"li"},"Create Subnet"),". Enter a name if required, and set the following values:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"SUBNET TYPE"),": REGIONAL"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"CIDR BLOCK"),": 10.1.1.0/24 (or whatever CIDR block you choose)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"ROUTE TABLE"),": Default Route Table for vcn-dev"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"SUBNET ACCESS"),": PUBLIC SUBNET"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Security Lists"),": Default Security List for vcn-dev")))),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Create a public subnet",src:a(5677).Z,width:"1280",height:"800"})),(0,r.mdx)("ol",{start:5},(0,r.mdx)("li",{parentName:"ol"},"Back on the VCN Details page, click ",(0,r.mdx)("em",{parentName:"li"},"Internet Gateways")," on the left."),(0,r.mdx)("li",{parentName:"ol"},"On the ",(0,r.mdx)("em",{parentName:"li"},"Internet Gateways")," page, click ",(0,r.mdx)("em",{parentName:"li"},"Create Internet Gateway"),"."),(0,r.mdx)("li",{parentName:"ol"},"Enter a name if required and then click ",(0,r.mdx)("em",{parentName:"li"},"Create Internet Gateway"),".")),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Create an Internet Gateway",src:a(59929).Z,width:"1280",height:"800"})),(0,r.mdx)("ol",{start:8},(0,r.mdx)("li",{parentName:"ol"},"On the left again, click ",(0,r.mdx)("em",{parentName:"li"},"Route Tables")," and then on the ",(0,r.mdx)("em",{parentName:"li"},"Route Tables")," page, click on the default route table."),(0,r.mdx)("li",{parentName:"ol"},"Click ",(0,r.mdx)("em",{parentName:"li"},"Edit Route Rules")," and then enter the following in the dialog:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"TARGET TYPE"),": Internet Gateway"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"DESTINATION CIDR BLOCK"),": 0.0.0.0/0"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"COMPARTMENT"),": ",(0,r.mdx)("em",{parentName:"li"},"Select the desired compartment")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"TARGET INTERNET GATEWAY"),": ",(0,r.mdx)("em",{parentName:"li"},"Select the Internet Gateway created earlier"))))),(0,r.mdx)("h3",{id:"compute-instance---virtual-machine"},"Compute Instance - Virtual Machine"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Click {% fa bars %} {% fa caret-right %} Compute {% fa caret-right %} Instances"),(0,r.mdx)("li",{parentName:"ol"},"On the ",(0,r.mdx)("em",{parentName:"li"},"Instances")," page, click ",(0,r.mdx)("em",{parentName:"li"},"Create Instance"),"."),(0,r.mdx)("li",{parentName:"ol"},"Provide the following information:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Name"),": ",(0,r.mdx)("em",{parentName:"li"},"e.g. fbapex01")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Availability Domain"),": AD 1"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Operating System"),": Oracle Linux 7.6 (other options include Ubuntu, CentOS and Windows Server)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Instance Type"),": Virtual Machine"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Shape"),": VM.Standard.E2.1"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Boot Volume"),": ",(0,r.mdx)("em",{parentName:"li"},"leave the defaults")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Add SSH Key"),": ",(0,r.mdx)("em",{parentName:"li"},"Either submit the public key file or paste the SSH key")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"VCN"),": ",(0,r.mdx)("em",{parentName:"li"},"Select the desired compartment and VCN")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Subnet"),": ",(0,r.mdx)("em",{parentName:"li"},"Select the desired compartment and subnet"))))),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Create a Virtual Machine",src:a(32095).Z,width:"1280",height:"800"})),(0,r.mdx)("p",null,'Compute Instances are sold in "Shapes". Resources provided by the various shapes are documented ',(0,r.mdx)("a",{parentName:"p",href:"https://docs.cloud.oracle.com/iaas/Content/Compute/References/computeshapes.htm"},"here"),". Availability is dependent on region. In Ashburn, the new (cheaper) AMD-based shapes are available. I had selected ",(0,r.mdx)("em",{parentName:"p"},"VM.Standard.E2.1")," that provides 1 OCPU (2 vCPUs), a generous 8 GB of memory and ~50 GB storage!"),(0,r.mdx)("h2",{id:"accessing-the-server"},"Accessing the Server"),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"The new VM",src:a(12172).Z,width:"1280",height:"800"})),(0,r.mdx)("p",null,"The server can be accessed via the public IP address. All instances are created with the user ",(0,r.mdx)("inlineCode",{parentName:"p"},"opc"),". Use the private key that generated the SSH public key provided when the instance was created. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"opc")," user is on the ",(0,r.mdx)("em",{parentName:"p"},"sudoers")," list and can be used to perform system administration tasks on the server."),(0,r.mdx)("p",null,"I struggled a little bit getting my APEX stack up and running but was eventually able to get it running with the helper scripts I had shared in an earlier ",(0,r.mdx)("a",{parentName:"p",href:"/content/id/1902"},"post"),"."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"APEX Up and Running",src:a(3741).Z,width:"1280",height:"800"})),(0,r.mdx)("h2",{id:"summary"},"Summary"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("del",{parentName:"p"},"3. What do I need to do to create an Oracle Application Express (APEX) stack?"))),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Oracle 18c XE - EM Express",src:a(74689).Z,width:"1280",height:"800"})),(0,r.mdx)("p",null,"This article provides a list of tasks needed to spin up a VM that could then be used to create an APEX stack powered by the free ",(0,r.mdx)("a",{parentName:"p",href:"https://oracle.com/xe"},"Oracle Database 18c Express Edition"),". Compared to other hosting platforms like ",(0,r.mdx)("a",{parentName:"p",href:"https://m.do.co/c/6f9b549ca569"},"DigitalOcean")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://www.linode.com/?r=41672b20d515344de465e9ed44c1a75356445597"},"Linode"),', the setup process feels like an overkill. However, the OCI was designed for larger goals and this is merely a starting point for me. In the coming days, I will explore other services that OCI provides for creating "enterprise-grade" IT environments including the much talk about Database Systems.'),(0,r.mdx)("p",null,"Stay tuned!"))}c.isMDXComponent=!0},3741:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-apex-5f06dbbef94cad11b48908f04db7ea7e.png"},12172:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-compute-created-a4564783c6414b4563163fb1e2e0b934.png"},90961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-console-landing-page-dacf1d0f80d05d4737638a781edce5f0.png"},40481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-create-dev-compartment-8dbffe4f8e36ff111fa0917267be9e56.png"},32095:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-create-dev-compute-e6ee9ee563aad724b362692c9c56f1d5.png"},59929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-create-dev-ig-92dc9ad5a349a557d38bfabf105ea5d7.png"},5677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-create-dev-subnet-ff2379132c1c4a5bcd49756e7e6016b2.png"},68861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-create-dev-vcn-b8aa36b07d76d81cef6424d113a2308c.png"},74689:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-emexpress-b6c53f258e95634f0468874c8a07bc71.png"},84931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oci-topology-ad6702734648e726258ff245a7508197.png"}}]);