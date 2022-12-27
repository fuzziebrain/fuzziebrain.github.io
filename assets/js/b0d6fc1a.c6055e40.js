"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[95723],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){return function(a){var t=s(a.components);return n.createElement(e,o({},a,{components:t}))}},s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u="mdxType",x={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,u=p["".concat(l,".").concat(c)]||p[c]||x[c]||o;return t?n.createElement(u,m(m({ref:a},d),{},{components:t})):n.createElement(u,m({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[u]="string"==typeof e?e:r,l[1]=m;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},17898:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));const o={title:"Making the Move to the Autonomous Database",tags:["oracle","cloud","oci","orclapex","autonomous","alwaysfree","data migration"],slug:"id/1920",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2019-09-26T18:29:30.000Z")},l=void 0,m={permalink:"/content/id/1920",source:"@site/posts/making-the-move-to-the-autonomous-database/index.md",title:"Making the Move to the Autonomous Database",description:"Packing boxes",date:"2019-09-26T18:29:30.000Z",formattedDate:"September 26, 2019",tags:[{label:"oracle",permalink:"/content/tags/oracle"},{label:"cloud",permalink:"/content/tags/cloud"},{label:"oci",permalink:"/content/tags/oci"},{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"autonomous",permalink:"/content/tags/autonomous"},{label:"alwaysfree",permalink:"/content/tags/alwaysfree"},{label:"data migration",permalink:"/content/tags/data-migration"}],readingTime:7.025,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Making the Move to the Autonomous Database",tags:["oracle","cloud","oci","orclapex","autonomous","alwaysfree","data migration"],slug:"id/1920",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2019-09-26T18:29:30.000Z"},prevItem:{title:"OGB Appreciation Day: Challenge Coin Sponsors",permalink:"/content/id/1921"},nextItem:{title:"Autonomous DB - The Developers' Playground",permalink:"/content/id/1919"}},i={authorsImageUrls:[void 0]},d=[{value:"Scope",id:"scope",level:2},{value:"Tools Required",id:"tools-required",level:3},{value:"Export Components from Old Database",id:"export-components-from-old-database",level:2},{value:"Export APEX Workspace and Applications",id:"export-apex-workspace-and-applications",level:3},{value:"Export Schemas",id:"export-schemas",level:3},{value:"Preparing for Import",id:"preparing-for-import",level:3},{value:"Import Components into ADB",id:"import-components-into-adb",level:2},{value:"Import the Workspace",id:"import-the-workspace",level:3},{value:"Prerequisites for Using IMPDP with ADB",id:"prerequisites-for-using-impdp-with-adb",level:3},{value:"Object Storage",id:"object-storage",level:4},{value:"Set Cloud Credentials for ADB",id:"set-cloud-credentials-for-adb",level:4},{value:"Instant Client Setup for ADB",id:"instant-client-setup-for-adb",level:4},{value:"Create Auxiliary Schemas",id:"create-auxiliary-schemas",level:3},{value:"Import Schema Objects",id:"import-schema-objects",level:3},{value:"Import Applications",id:"import-applications",level:3},{value:"Post-Migration Tasks",id:"post-migration-tasks",level:2}],p={toc:d};function s(e){let{components:a,...o}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Packing boxes",src:t(44220).Z,width:"1280",height:"719"})),(0,r.mdx)("p",null,"In my ",(0,r.mdx)("a",{parentName:"p",href:"/content/id/1919"},"previous post"),", I mentioned that I have created my ",(0,r.mdx)("a",{parentName:"p",href:"https://oracle.com/cloud/free/"},"Oracle Cloud Free Tier")," account and provisioned an ",(0,r.mdx)("a",{parentName:"p",href:"https://www.oracle.com/database/what-is-autonomous-database.html"},"Autonomous Database")," (ADB). Now, I'm ready to move my existing ",(0,r.mdx)("a",{parentName:"p",href:"https://apex.oracle.com/"},"Oracle Application Express")," (APEX) to this new environment. Next, I'll describe the steps I took to move (1) workspace, (2) application and (3) data, from the old to new database."),(0,r.mdx)("h2",{id:"scope"},"Scope"),(0,r.mdx)("p",null,"To better illustrate the move process, let's create some fictious information about what I am about to move."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Property"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Source server hostname"),(0,r.mdx)("td",{parentName:"tr",align:null},"dev.contoso.com")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Source database name"),(0,r.mdx)("td",{parentName:"tr",align:null},"XE")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Database dump directory on source server"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"/tmp/cloud-migration"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Dumpfile filename"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"cloud-migration.dmp"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Source data pump target directory"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"CLOUD_MIGRATION_DIR"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Target database name"),(0,r.mdx)("td",{parentName:"tr",align:null},"ATP01")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Oracle Cloud Region"),(0,r.mdx)("td",{parentName:"tr",align:null},"Ashburn, United States")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Object Storage namespace"),(0,r.mdx)("td",{parentName:"tr",align:null},"abcdefgh")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Bucket name"),(0,r.mdx)("td",{parentName:"tr",align:null},"cloud-migration")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Workspace ID"),(0,r.mdx)("td",{parentName:"tr",align:null},"1234567890")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Workspace name"),(0,r.mdx)("td",{parentName:"tr",align:null},"CONTOSO_WEB")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Workspace administrator username"),(0,r.mdx)("td",{parentName:"tr",align:null},"admin")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Workspace schema name"),(0,r.mdx)("td",{parentName:"tr",align:null},"contoso_apps")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Auxiliary schema names"),(0,r.mdx)("td",{parentName:"tr",align:null},"logger")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"APEX applications"),(0,r.mdx)("td",{parentName:"tr",align:null},"1000 - Contoso Web; 1400 - Contoso Content Management System")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Working directory on workstation"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"/home/jdoe/cloud-migration"))))),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("strong",{parentName:"p"},"Note")),(0,r.mdx)("p",{parentName:"blockquote"},"The source server does not expose the database port 1521. Connection to the database from my workspace requires using a SSH tunnel.")),(0,r.mdx)("h3",{id:"tools-required"},"Tools Required"),(0,r.mdx)("p",null,"Install the following software in the environment that "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.oracle.com/database/technologies/appdev/sqlcl.html"},"SQLcl")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.oracle.com/database/technologies/instant-client.html"},"Oracle Instant Client"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Basic"),(0,r.mdx)("li",{parentName:"ul"},"Tools (includes the Oracle Data Pump utilities expdp and impdp)")))),(0,r.mdx)("h2",{id:"export-components-from-old-database"},"Export Components from Old Database"),(0,r.mdx)("h3",{id:"export-apex-workspace-and-applications"},"Export APEX Workspace and Applications"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Start SQLcl:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"sql /nolog\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create SSH tunnel and local port forwarding:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"sshtunnel oracle@dev.contoso.com -L 1523:localhost:1521\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Connect to the dataabse as ",(0,r.mdx)("em",{parentName:"p"},"contoso_apps"),":"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"connect contoso_apps/secret@//localhost:1523/XE\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Obtained the workspace ID:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"select to_char(workspace_id) from apex_workspaces where workspace = 'CONTOSO_WEB';\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Export the workspace:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"apex export -workspaceid 1234567890 -expWorkspace\n")),(0,r.mdx)("blockquote",{parentName:"li"},(0,r.mdx)("p",{parentName:"blockquote"},"This will produce a file named after the workspace ID, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"w1234567890.sql")))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Export ",(0,r.mdx)("strong",{parentName:"p"},"all")," APEX applications in the workspace:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"apex export -workspaceid 1234567890\n")),(0,r.mdx)("blockquote",{parentName:"li"},(0,r.mdx)("p",{parentName:"blockquote"},"Optionally, specify only the applications by id, using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"-applicationid")," parameter. The export process would produce files named after the application ID, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"f1000.sql")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"f1400.sql"),"."))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"If there are any REST services to be migrated, then execute the following:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"spool rest_services.sql\nrest export\nspool off\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Logout.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"If REST services were exported, then execute the following:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'echo "/" >> rest_services.sql\n')))),(0,r.mdx)("h3",{id:"export-schemas"},"Export Schemas"),(0,r.mdx)("p",null,"Login to the source database using SSH as user ",(0,r.mdx)("em",{parentName:"p"},"oracle"),". The subsequent commands in this section will be executed on the source server."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Login to the database as ",(0,r.mdx)("em",{parentName:"li"},"SYSDBA"),":",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"sqlplus / as sysdba\n"))),(0,r.mdx)("li",{parentName:"ol"},"Create the target data dump directory:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"host mkdir /tmp/cloud-migration\n"))),(0,r.mdx)("li",{parentName:"ol"},"Create the directory object:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"create directory CLOUD_MIGRATION_DIR as '/tmp/cloud-migration';\n"))),(0,r.mdx)("li",{parentName:"ol"},"Grant the ",(0,r.mdx)("em",{parentName:"li"},"system")," user ",(0,r.mdx)("inlineCode",{parentName:"li"},"READ")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"WRITE")," privileges:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"grant read, write on directory CLOUD_MIGRATION_DIR to system;\n"))),(0,r.mdx)("li",{parentName:"ol"},"Exit SQL*Plus.    "),(0,r.mdx)("li",{parentName:"ol"},"Run the export data pump utility (expdp) to export the schema objects:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"expdp system schemas=logger,contoso_apps  \\\n  directory=CLOUD_MIGRATION_DIR dumpfile=cloud-migration.dmp \\\n  logfile=exp_cloud-migration.log\n"))),(0,r.mdx)("li",{parentName:"ol"},"Logout from the source server.")),(0,r.mdx)("h3",{id:"preparing-for-import"},"Preparing for Import"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Grab the dumpfile (and log file if necessary):",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"scp -r oracle@dev.contoso.com:/tmp/cloud-migration/* .\n"))),(0,r.mdx)("li",{parentName:"ol"},"The local working directory ",(0,r.mdx)("inlineCode",{parentName:"li"},"/home/jdoe/cloud-migration")," should now contain the following files:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"cloud-migration.dmp")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"exp_cloud-migration.log")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"f1000.sql")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"f1400.sql")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"rest_services.sql")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"w1234567890.sql"))))),(0,r.mdx)("h2",{id:"import-components-into-adb"},"Import Components into ADB"),(0,r.mdx)("h3",{id:"import-the-workspace"},"Import the Workspace"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Login to the ADB's APEX ",(0,r.mdx)("em",{parentName:"li"},"Administration Services")," as the ",(0,r.mdx)("em",{parentName:"li"},"admin")," user:\n",(0,r.mdx)("img",{alt:"Login screen",src:t(30338).Z,width:"1280",height:"800"})),(0,r.mdx)("li",{parentName:"ol"},"Use the ",(0,r.mdx)("em",{parentName:"li"},"Manage Workspaces")," utilities to import the workspace from the file ",(0,r.mdx)("inlineCode",{parentName:"li"},"w1234567890.sql"),"."),(0,r.mdx)("li",{parentName:"ol"},"During the import process, create the workspace schema. Set the password and space quota as required.\n",(0,r.mdx)("img",{alt:"Create workspace schema",src:t(88506).Z,width:"1280",height:"800"}))),(0,r.mdx)("h3",{id:"prerequisites-for-using-impdp-with-adb"},"Prerequisites for Using IMPDP with ADB"),(0,r.mdx)("p",null,"Data can be imported into an ADB using Oracle Data Pump. However, since we do not access to the database server's file system, ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.cloud.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm"},"Object Storage")," must be used to deliver the dumpfile. "),(0,r.mdx)("p",null,"The official instructions to prepare for data pump can be found ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/load-data-data-pump.html#GUID-30DB1EEA-DB45-49EA-9E97-DF49A9968E24"},"here"),". The following is a summary account of what I did."),(0,r.mdx)("h4",{id:"object-storage"},"Object Storage"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Access the Oracle Cloud Object Storage.\n",(0,r.mdx)("img",{alt:"Access Object Storage",src:t(95532).Z,width:"1280",height:"800"})),(0,r.mdx)("li",{parentName:"ol"},"Create a bucket and name it ",(0,r.mdx)("inlineCode",{parentName:"li"},"cloud-migration"),".\n",(0,r.mdx)("img",{alt:"Create bucket",src:t(52463).Z,width:"1280",height:"800"})),(0,r.mdx)("li",{parentName:"ol"},"Take note of the Object Storage namespace (1) that is required for determining the URI for the dumpfile.\n",(0,r.mdx)("img",{alt:"Bucket details",src:t(74926).Z,width:"1280",height:"800"})),(0,r.mdx)("li",{parentName:"ol"},"Upload the dumpfile ",(0,r.mdx)("inlineCode",{parentName:"li"},"cloud-migration.dmp")," to the bucket. ")),(0,r.mdx)("h4",{id:"set-cloud-credentials-for-adb"},"Set Cloud Credentials for ADB"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcredentials.htm#two"},"Generate an Auth Token")," for a user in the tenant with the necessary access to the bucket and its contents.\n",(0,r.mdx)("img",{alt:"Generate an Auth Token",src:t(75488).Z,width:"1280",height:"800"})),(0,r.mdx)("li",{parentName:"ol"},"Set the Cloud Object Storage credentials:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"begin\n  dbms_cloud.create_credential(\n    credential_name => 'DEF_CRED_NAME'\n    , username => 'jdoe'\n    , password => 'the_generated_auth_token'\n  );\nend;\n/\n")))),(0,r.mdx)("h4",{id:"instant-client-setup-for-adb"},"Instant Client Setup for ADB"),(0,r.mdx)("p",null,"Official instructions for setting up your system to connect to the database using the tools provided by the Oracle Instant Client, including the Oracle Data Pump utilies needed for importing the data, can be found ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/connect-preparing.html#GUID-EFAFA00E-54CC-47C7-8C71-E7868279EF3B"},"here"),"."),(0,r.mdx)("p",null,"Here's a quick overview of what I did:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Download the Cient Credentials (Wallet) from the ADB's Service Console.\n",(0,r.mdx)("img",{alt:"Download wallet",src:t(23165).Z,width:"1280",height:"800"}))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Set the enviroment variable ",(0,r.mdx)("inlineCode",{parentName:"p"},"TNS_ADMIN"),":"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"export TNS_ADMIN=/home/jdoe/.wallets/atp01\n")),(0,r.mdx)("blockquote",{parentName:"li"},(0,r.mdx)("p",{parentName:"blockquote"},"The Oracle Wallet, ",(0,r.mdx)("inlineCode",{parentName:"p"},"sqlnet.ora")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"tnsnames.ora")," files will be stored in this path. The directory contents are required by the Oracle Instant Client tools to resolve the network service names for connecting to the ADB. The environment variable ",(0,r.mdx)("strong",{parentName:"p"},"must")," be set prior to running any of these applications. "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create the wallet directory:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $TNS_ADMIN\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Extract the contents of the ZIP file into the wallet directory:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"unzip wallet_ATP01.zip -d $TNS_ADMIN\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The wallet contains a ",(0,r.mdx)("inlineCode",{parentName:"p"},"sqlnet.ora")," file. Replace the path ",(0,r.mdx)("inlineCode",{parentName:"p"},"?/network/admin"),", specified for the parameter ",(0,r.mdx)("inlineCode",{parentName:"p"},"DIRECTORY"),", with the wallet's path (",(0,r.mdx)("inlineCode",{parentName:"p"},"TNS_ADMIN"),")."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'sed -i .bak "s|?/network/admin|$TNS_ADMIN|g" $TNS_ADMIN/sqlnet.ora\n')))),(0,r.mdx)("h3",{id:"create-auxiliary-schemas"},"Create Auxiliary Schemas"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Launch SQLcl:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"sql /nolog\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Login to the ADB using SQLcl as ",(0,r.mdx)("em",{parentName:"p"},"admin"),", the administrator account created when the database was provisioned."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"connect admin/supersecret@atp01_high\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create the auxiliary user and grant needed privileges and quota. For example:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},'-- Create user and set quota on DATA, the tablespace for users in ADB.\ncreate user logger identified by "secret" quota 50M on data;\n\n-- Grant privileges required by Logger.\ngrant connect, create view, create job, create table, create sequence\n  , create trigger, create procedure, create any context to logger;\n'))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Logout from the database."))),(0,r.mdx)("h3",{id:"import-schema-objects"},"Import Schema Objects"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run the import data pump utility (impdp), avoiding the recreation of certain objects as specified by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"exclude")," option:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"impdp admin@atp01_high directory=data_pump_dir credential=def_cred_name \\\n  dumpfile=https://objectstorage.us-ashburn-1.oraclecloud.com/n/abcdefgh/b/cloud-migration/o/cloud-migration.dmp \\\n  schemas=logger,contoso_apps parallel=16 transform=segment_attributes:n \\\n  transform=dwcs_cvt_iots:y transform=constraint_use_default_index:y \\\n  exclude=cluster,db_link,user,tablespace_quota,default_role\n")),(0,r.mdx)("blockquote",{parentName:"li"},(0,r.mdx)("ul",{parentName:"blockquote"},(0,r.mdx)("li",{parentName:"ul"},"Details about the DBMS_CLOUD Package File URI format can be found ",(0,r.mdx)("a",{parentName:"li",href:"https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/file-uri-formats.html#GUID-5D3E1614-ADF2-4DB5-B2B2-D5613F10E4FA"},"here"),". The namespace was noted in an earlier section of this post."),(0,r.mdx)("li",{parentName:"ul"},"The exclusions include the creation of a user and modifications of certain properties about the user. The schemas were created in earlier sections of this article. They are redundant and will likely result in errors."),(0,r.mdx)("li",{parentName:"ul"},"Take note of the data pump logs. If necessary, ",(0,r.mdx)("a",{parentName:"li",href:"https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/load-data-data-pump.html#GUID-CC7F258C-5D58-475B-8361-467C35FB0745"},"download")," a copy for further analysis and future reference."))))),(0,r.mdx)("h3",{id:"import-applications"},"Import Applications"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Launch SQLcl:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"sql /nolog\n"))),(0,r.mdx)("li",{parentName:"ol"},"Login to the ADB as the workspace schema user:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"connect contoso_apps/secret@atp01_high\n"))),(0,r.mdx)("li",{parentName:"ol"},"Set the workspace:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-sql"},"apex_util.set_workspace('CONTOSO_WEB');\n"))),(0,r.mdx)("li",{parentName:"ol"},"Load and execute each application export file to import the application to the target workspace:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre"},"@f1000.sql\n@f1400.sql\n"))),(0,r.mdx)("li",{parentName:"ol"},"Import the REST services if any:",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre"},"@rest_services.sql\n"))),(0,r.mdx)("li",{parentName:"ol"},"Exit the application.")),(0,r.mdx)("h2",{id:"post-migration-tasks"},"Post-Migration Tasks"),(0,r.mdx)("p",null,"After migrating the applications and data, here are some recommended tasks:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"{% fa check-square %} Check for missing grants and assign them as necessary."),(0,r.mdx)("li",{parentName:"ul"},"{% fa check-square %} Re-create and database links required by the application."),(0,r.mdx)("li",{parentName:"ul"},"{% fa check-square %} Search for objects like packages and triggers that did not compile successfully during the import process. Fix any issues and recompile the objects."),(0,r.mdx)("li",{parentName:"ul"},"{% fa check-square %} Note the issues highlighted in the ",(0,r.mdx)("a",{href:"/content/id/1919"},"previous post")," concerning workspace developer/administrator access."),(0,r.mdx)("li",{parentName:"ul"},"{% fa check-square %} Test all applications.")),(0,r.mdx)("p",null,"Hope I didn't miss any steps. If you do notice any or mistakes, please let me know in the comments below."),(0,r.mdx)("p",null,"Thanks for reading!"))}s.isMDXComponent=!0},30338:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/apex_instance_admin_login-211b8d36e522de6cf33b910a465d1a75.png"},44220:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/boxes-2719166_1280x720-3275acb4aab0e5026f15a427df3bb7bd.jpg"},74926:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/bucket-details-7f7cba278942a263a3606358bdfc0322.png"},52463:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/create-bucket-997ed26b49ca71d3ef84fd94a5b2e3c7.png"},88506:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/create_schema-39503edfb6824de5f8e8f438ccc6582a.png"},23165:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/download-wallet-d01bcb127579556b5b3d7abab6a109ed.png"},75488:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/generate-auth-token-1515a817ed3456c6d88cc79648892377.png"},95532:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/goto-object-storage-5c5f324ad1056cd20e8785285f036230.png"}}]);