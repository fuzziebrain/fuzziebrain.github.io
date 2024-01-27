"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[60266],{31468:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=i(85893),n=i(11151);const r={title:"Day 4 - 30 Days on the Oracle Cloud",tags:["oracle","cloud","oci","IaaS","infrastructure","devops","orclapex"],slug:"id/1905",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2019-03-02T16:32:42.000Z")},a=void 0,l={permalink:"/content/id/1905",source:"@site/posts/day-4-30-days-on-the-oracle-cloud/index.md",title:"Day 4 - 30 Days on the Oracle Cloud",description:"Photo by Oliver Menyhart",date:"2019-03-02T16:32:42.000Z",formattedDate:"March 2, 2019",tags:[{label:"oracle",permalink:"/content/tags/oracle"},{label:"cloud",permalink:"/content/tags/cloud"},{label:"oci",permalink:"/content/tags/oci"},{label:"IaaS",permalink:"/content/tags/iaa-s"},{label:"infrastructure",permalink:"/content/tags/infrastructure"},{label:"devops",permalink:"/content/tags/devops"},{label:"orclapex",permalink:"/content/tags/orclapex"}],readingTime:5.15,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Day 4 - 30 Days on the Oracle Cloud",tags:["oracle","cloud","oci","IaaS","infrastructure","devops","orclapex"],slug:"id/1905",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2019-03-02T16:32:42.000Z"},unlisted:!1,prevItem:{title:"Day 11 - 30 Days on the Oracle Cloud",permalink:"/content/id/1906"},nextItem:{title:"Day 2 - 30 Days on the Oracle Cloud",permalink:"/content/id/1904"}},c={authorsImageUrls:[void 0]},o=[{value:"Current Configuration (Recap)",id:"current-configuration-recap",level:2},{value:"Billing and Cost Analysis",id:"billing-and-cost-analysis",level:2},{value:"DigitalOcean",id:"digitalocean",level:3},{value:"Linode",id:"linode",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Path to Database Cloud Service",id:"path-to-database-cloud-service",level:2}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Photo by Oliver Menyhart",src:i(10858).Z+"",width:"1280",height:"720"})}),"\n",(0,t.jsxs)(s.p,{children:["After running my ",(0,t.jsx)(s.a,{href:"https://apex.oracle.com",children:"Oracle Application Express (APEX)"})," instance (see the ",(0,t.jsx)(s.a,{href:"/content/id/1904",children:"previous article"})," on what it takes) for more than a day, I think I have enough to take a first measure of costs and fact check the ",(0,t.jsx)(s.a,{href:"https://cloud.oracle.com/iaas/pricing",children:"prices"})," listed by Oracle!"]}),"\n",(0,t.jsx)(s.h2,{id:"current-configuration-recap",children:"Current Configuration (Recap)"}),"\n",(0,t.jsxs)(s.p,{children:["At the moment, I have created the following resources in my ",(0,t.jsx)(s.a,{href:"https://cloud.oracle.com/iaas/",children:"Oracle Cloud Infrastructure (OCI)"})," trial account:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A Virtual Cloud Network (VCN) containing one of each:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Public Subnet"}),"\n",(0,t.jsx)(s.li,{children:"Route Table"}),"\n",(0,t.jsx)(s.li,{children:"Internet Gateway"}),"\n",(0,t.jsx)(s.li,{children:"Security List"}),"\n",(0,t.jsx)(s.li,{children:"DHCP configuration"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["A Compute Instance with shape ",(0,t.jsx)(s.em,{children:"VM.Standard.E2.1"}),", with the following resources:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"1 OCPU"}),"\n",(0,t.jsx)(s.li,{children:"8 GB Memory"}),"\n",(0,t.jsx)(s.li,{children:"46.6 GB Block Storage for Boot Volume"}),"\n",(0,t.jsx)(s.li,{children:"And of course we have an APEX stack housed comfortably on this server!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"NOTE: OCI's OCPU is equivalent to 2 vCPUs, a unit often used by other cloud hosting providers."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"billing-and-cost-analysis",children:"Billing and Cost Analysis"}),"\n",(0,t.jsxs)(s.p,{children:["To view the current billing information through the OCI console, click ",(0,t.jsx)("i",{class:"fa-solid fa-bars"})," ",(0,t.jsx)("i",{class:"fa-solid fa-caret-right"})," Billing ",(0,t.jsx)("i",{class:"fa-solid fa-caret-right"})," Cost Analysis."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Cost Analysis for March 01, 2019",src:i(85730).Z+"",width:"1280",height:"800"})}),"\n",(0,t.jsxs)(s.p,{children:["Based on these estimates, I can expect to pay CA$1.06 x 365 days / 12 = ",(0,t.jsx)(s.strong,{children:"CA$32.24/mth"}),". Using the ",(0,t.jsx)(s.a,{href:"https://cloud.oracle.com/cost-estimator",children:"pricing calculator"}),", the estimate is pretty accurate at CA$33/mth or US$24/mth. Let's compare this with similar offerings by other hosting companies."]}),"\n",(0,t.jsx)(s.h3,{id:"digitalocean",children:"DigitalOcean"}),"\n",(0,t.jsxs)(s.p,{children:["DigitalOcean's pricing information can be found ",(0,t.jsx)(s.a,{href:"https://www.digitalocean.com/pricing/?refcode=6f9b549ca569",children:"here"}),". The product that has specifications closest to OCI's ",(0,t.jsx)(s.em,{children:"VM.Standard.E2.1"})," is their new ",(0,t.jsx)(s.em,{children:"General Purpose Droplets"}),". The lowest priced system comes with the following specifications:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"2 vCPUs"}),"\n",(0,t.jsx)(s.li,{children:"8 GB memory"}),"\n",(0,t.jsxs)(s.li,{children:["25 GB storage ",(0,t.jsx)("i",{class:"fa-solid fa-arrow-circle-down rate-down"})]}),"\n",(0,t.jsx)(s.li,{children:"4 TB network transfer"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Monthly Fee: ",(0,t.jsx)(s.strong,{children:"US$60"})]}),"\n",(0,t.jsx)(s.h3,{id:"linode",children:"Linode"}),"\n",(0,t.jsxs)(s.p,{children:["Linode's pricing information can be found ",(0,t.jsx)(s.a,{href:"https://www.linode.com/pricing/?r=41672b20d515344de465e9ed44c1a75356445597",children:"here"}),". Their most similar offering has the following specifications:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"2 vCPUs"}),"\n",(0,t.jsxs)(s.li,{children:["4 GB memory ",(0,t.jsx)("i",{class:"fa-solid fa-arrow-circle-down rate-down"})]}),"\n",(0,t.jsxs)(s.li,{children:["80 GB storage ",(0,t.jsx)("i",{class:"fa-solid fa-arrow-circle-up rate-up"})]}),"\n",(0,t.jsx)(s.li,{children:"4 TB network transfer"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Monthly Fee: ",(0,t.jsx)(s.strong,{children:"US$20"})," (DigitalOcean offers the same package at the same price)"]}),"\n",(0,t.jsx)(s.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(s.p,{children:["To run an APEX stack using ",(0,t.jsx)(s.a,{href:"https://oracle.com/xe",children:"Oracle Database 18c Express Edition (18cXE)"}),", the $20/mth package from either DigitalOcean or Linode is more than sufficient. 18cXE limits us to use only 2 GB of memory, 2 CPU threads and store up to 12 GB of user data. Setting up a VM in either of the two hosts are also considerably simpler and more straightforward."]}),"\n",(0,t.jsx)(s.p,{children:"For an enterprise though, consider also the other services that are made available by each provider listed in this article."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Providers update the service offerings all the time. Always check with them for the latest available features."})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Service/Feature"}),(0,t.jsx)(s.th,{children:"DigitalOcean"}),(0,t.jsx)(s.th,{children:"Linode"}),(0,t.jsx)(s.th,{children:"OCI"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Advanced Identity Managerment"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Advanced Network Management"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Advanced Storage Encryption"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Auto Backup"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Auto Scaling"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Block Storage"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DNS Zone Management"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Email Delivery"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Monitoring & Alerts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Object Storage"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"VPN to Customer-Premise Equipment"}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-times-circle rate-down"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("i",{class:"fa-solid fa-check-circle rate-up"})})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"While available, some of these listed features are for-fee services and prices vary amongst the different providers."})}),"\n",(0,t.jsx)(s.p,{children:"I will delve deeper into some of these features in a future post, but suffice to say, OCI customers get access to a whole lot more for just $4 more per month! Not to forget having double the amount of RAM and the ability to customise the boot volume size, upwards of 46.6 GB."}),"\n",(0,t.jsx)(s.h2,{id:"path-to-database-cloud-service",children:"Path to Database Cloud Service"}),"\n",(0,t.jsx)(s.p,{children:'Perhaps the larger consideration is how a business would progress to the "next level". At some point, 12 GB of user data isn\'t going to be enough and we need to progress to the next edition of the database.'}),"\n",(0,t.jsx)(s.p,{children:"Before ending this article, I would like to walk through the steps for creating a lowest-cost DB System in a different compartment. For completeness, I will also add a Compute Instance that would host an Apache Web Server and Tomcat Server to complete the APEX stack. The billing outcome will be reviewed in a future article."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["After creating a new compartment (",(0,t.jsx)(s.em,{children:"PROD"}),") and VCN, click ",(0,t.jsx)("i",{class:"fa-solid fa-bars"})," ",(0,t.jsx)("i",{class:"fa-solid fa-caret-right"})," Bare Metal, VM, and Exadata ",(0,t.jsx)("i",{class:"fa-solid fa-caret-right"})]}),"\n",(0,t.jsxs)(s.li,{children:["On the DB Systems page, make sure that the new compartment is created, and then click the ",(0,t.jsx)(s.em,{children:"Launch DB System"})," button."]}),"\n",(0,t.jsxs)(s.li,{children:["Enter the required DB System parameters and then launch the server. If the required fields are empty, the launch button will ",(0,t.jsx)(s.strong,{children:"not"})," be enabled.\n",(0,t.jsx)(s.img,{alt:"Create DB System dialog",src:i(11793).Z+"",width:"1280",height:"800"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"DISPLAY NAME"}),": ",(0,t.jsx)(s.em,{children:"Give it a unique name"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"AVAILABILITY DOMAIN"}),": * Select a suitable AD*"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"SHAPE TYPE"}),": VIRTUAL MACHINE"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"ORACLE DATABASE SOFTWARE EDITION"}),": Standard Edition"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"AVAILABLE STORAGE SIZE (GB)"}),": 256"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"LICENSE TYPE"}),": LICENSE INCLUDED"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"SSH PUBLIC KEY"}),": ",(0,t.jsx)(s.em,{children:"Add a SSH public key"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"VIRTUAL CLOUD NETWORK"}),": ",(0,t.jsx)(s.em,{children:"Select the target VCN"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"CLIENT SUBNET"}),": ",(0,t.jsx)(s.em,{children:"A private subnet is highly recommended"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"HOSTNAME PREFIX"}),": ",(0,t.jsx)(s.em,{children:"Give it a unique name"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"DATABASE NAME"}),": ",(0,t.jsx)(s.em,{children:"Provide the desired CDB name"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"DATABASE VERSION"}),": 18.0.0.0"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"PDB NAME"}),": ",(0,t.jsx)(s.em,{children:"Provide the desired PDB name"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"DATABASE ADMIN PASSWORD"}),": ",(0,t.jsx)(s.em,{children:"Enter a password that complies with the requirements"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Till next time..."})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},10858:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/bookkeeper-1016299_1280x720-af6ebd1956d2f44bdfc48e7790dd21ec.jpg"},85730:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/oci-billing-20190301-9a9aa2ee6e5e8d5ada9bff0d35860b5c.png"},11793:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/oci-create-dbsystem-ffd36c10f211d9ef0aa92e50af681898.png"},11151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>a});var t=i(67294);const n={},r=t.createContext(n);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);