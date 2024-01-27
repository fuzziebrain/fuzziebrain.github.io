"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[83235],{95699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(85893),s=t(11151);const r={title:"Running ORDS Against the Autonomous Database",tags:["ords","rest","orclapex","autonomous","database"],slug:"id/2004",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:new Date("2020-07-01T00:49:05.000Z")},o=void 0,i={permalink:"/content/id/2004",source:"@site/posts/running-ords-against-the-autonomous-database/index.md",title:"Running ORDS Against the Autonomous Database",description:"Man repairing the engine of a car",date:"2020-07-01T00:49:05.000Z",formattedDate:"July 1, 2020",tags:[{label:"ords",permalink:"/content/tags/ords"},{label:"rest",permalink:"/content/tags/rest"},{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"autonomous",permalink:"/content/tags/autonomous"},{label:"database",permalink:"/content/tags/database"}],readingTime:7.3,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Running ORDS Against the Autonomous Database",tags:["ords","rest","orclapex","autonomous","database"],slug:"id/2004",authors:["fuzziebrain"],categories:["Technology","Infrastructure","Oracle Cloud"],date:"2020-07-01T00:49:05.000Z"},unlisted:!1,prevItem:{title:"Running ORDS Against the Autonomous Database - Part 2",permalink:"/content/id/2005"},nextItem:{title:"Happy 25th Anniversary Java",permalink:"/content/id/2003"}},l={authorsImageUrls:[void 0]},c=[{value:"Tasklist for ADB",id:"tasklist-for-adb",level:2},{value:"User Accounts",id:"user-accounts",level:3},{value:"Client Credentials",id:"client-credentials",level:3},{value:"Tasklist for Compute",id:"tasklist-for-compute",level:2},{value:"APEX Image Files",id:"apex-image-files",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Man repairing the engine of a car",src:t(35427).Z+"",width:"1280",height:"720"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://www.oracle.com/database/what-is-autonomous-database.html",children:"Oracle Autonomous Database"})," (ADB) is Oracle's current flagship database product and rightly so! Each instance comes with self-tuning, self-patching and several Oracle Database Options that customer would otherwise have to purchase separate licenses for. Database developers will also be pleased to know that there are a suite of tools at your disposal including ",(0,a.jsx)(n.a,{href:"https://apex.oracle.com/",children:"Oracle Application Express"})," (APEX), ",(0,a.jsx)(n.a,{href:"https://www.oracle.com/ca-en/database/technologies/appdev/rest.html",children:"Oracle REST Data Services"})," (ORDS) and ",(0,a.jsx)(n.a,{href:"https://www.oracle.com/database/technologies/datawarehouse-bigdata/oml-notebooks.html",children:"Oracle Machine Learning Notebooks"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The minimum instance you can create will have 1 CPU and 1 TB of storage and with so much features, doesn't come cheap. Here's the good news though, Oracle provides ",(0,a.jsx)(n.strong,{children:"everyone"})," two ",(0,a.jsx)(n.em,{children:"Always Free"})," ADBs through the ",(0,a.jsx)(n.a,{href:"https://oracle.com/cloud/free",children:"Oracle Cloud Free Tier"})," offering. Yes, that's a great deal for anyone wanting to host a simple web application on the Internet. It is however, not without limits."]}),"\n",(0,a.jsx)(n.p,{children:"Unlike the paid Autonomous Database, a free instance is limited to 1 CPU with no autoscaling, 8 GB of RAM and 20 GB of storage. It will also be shutdown after 7 days of inactivity, and even terminated if left in that state for too long. Another important limitation is the 20 concurrent database session limit imposed on the instance. These are crucial considerations that you will need to take into account when running production applications on the free instance."}),"\n",(0,a.jsx)(n.p,{children:"If you can run your applications successfully within these limits, then ADBs are a great choice for deploying APEX applications for several reasons. The most obvious benefit is that you do not have to be an expert database administrator (DBA) to install, tune and manage the database. These are all handled automatically by Oracle. Upgrading and patching the database and APEX are either performed incrementally in the background or in some cases, initiated by the user with a simple button click."}),"\n",(0,a.jsx)(n.p,{children:"Typically, after installing APEX on the database, users will also have to install, configure and deploy ORDS. The software can either run in a standalone mode or deployed on a Java Enterprise Edition (JEE) container. For the ADB though, ORDS comes preinstalled on a separate, robust and scalable hardware infrastructure."}),"\n",(0,a.jsxs)(n.p,{children:["Not surprisingly, that convenience comes with some restrictions. When the ADB is provisioned, you are assigned a cryptic URL that Oracle assigns and till today (June 30, 2020), ",(0,a.jsx)(n.em,{children:"vanity URLs"})," are still not supported. That means, you may not assign a domain name to your APEX instance, e.g. ",(0,a.jsx)(n.a,{href:"http://example.com/orcl/apex",children:"http://example.com/orcl/apex"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"While you can use a web server and appropriate proxy rules, mask the APEX instance, it does have inherent security risks. I have also found it challenging to get Social Sign-In (OAuth2) working with APEX applications because of how URLs used in the authentication workflow are generated."}),"\n",(0,a.jsx)(n.p,{children:"Access to the database and its tools are managed together. It is my understanding that it is not possible to assign different access rules. For example, perhaps we want users to access the APEX instance from the web, but only connect to the database using SQL Developer while on the corporate network. That's not possible at least for now."}),"\n",(0,a.jsxs)(n.p,{children:["Thankfully, with the release of ORDS version 19.4.6, it is now possible to install your own instance of ORDS alongside the ADB. You can find the feature description ",(0,a.jsx)(n.a,{href:"https://www.oracle.com/tools/ords/ords-relnotes-1946.html",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"BUG 30957867 - Implement feature to support alternative runtime user (ORDS_PUBLIC_USER)"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"With a customer-managed ORDS, we can create different entry points to the ADB. This ORDS instance can be placed in an Internet-facing subnet, while access to the ADB can be limited to the new ORDS instance and restricted networks by either using an Access Control List (ACL), or in the case of paid instances, assigned a private endpoint address."}),"\n",(0,a.jsxs)(n.p,{children:["You can find the full-length instructions from Oracle ",(0,a.jsx)(n.a,{href:"https://docs.oracle.com/en/database/oracle/oracle-rest-data-services/19.4/aelig/installing-and-configuring-customer-managed-ords-autonomous-database.html#GUID-24F4D51F-0BAF-4D3B-A714-492ED02D1212",children:"here"}),", on how to set this up. I have however, summarised the steps here, as well as noted the issues I encountered and the solutions."]}),"\n",(0,a.jsx)(n.p,{children:"These instructions assume that you have the following provisioned:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Autonomous Database."})," Any workload type is fine, and it can be either paid or Always Free."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Always Free Micro-shape Compute Instance."})," The Compute may be of any shape, but the assumption is that it runs Oracle Linux 7.8."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["You may attempt to use Oracle Autonomous Linux 7.8, however, many of the packages required are installed using ",(0,a.jsx)(n.a,{href:"https://wikipedia.org/wiki/Yum_(software)",children:"YUM"}),", and this prebuilt OS image has limited repositories available. While there's a workaround, you are advised in the documentation not to mess with the configuration. If you're interested to know what these are, please check with me privately."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"tasklist-for-adb",children:"Tasklist for ADB"}),"\n",(0,a.jsx)(n.h3,{id:"user-accounts",children:"User Accounts"}),"\n",(0,a.jsx)(n.p,{children:"Installing and configuring ORDS usually requires the following accounts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"APEX_PUBLIC_USER"}),"\n",(0,a.jsx)(n.li,{children:"APEX_LISTENER"}),"\n",(0,a.jsx)(n.li,{children:"APEX_REST_PUBLIC_USER"}),"\n",(0,a.jsx)(n.li,{children:"ORDS_PUBLIC_USER"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The first three are created in a typical APEX installation. The last one is created when we install ORDS. However, in ADB, these accounts are already created and we do not have the passwords, so clearly, a different approach is needed."}),"\n",(0,a.jsxs)(n.p,{children:["In this new ORDS installation method, we will use a different database user. ",(0,a.jsx)(n.code,{children:"ORDS_PUBLIC_USER2"})," is the recommended name, but you don't have to name it so. You must however, as the ",(0,a.jsx)(n.em,{children:"admin"})," user, assign the necessary privilege by executing the following commands in the database:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- 1. Create the database user.\ncreate user ords_public_user2 identified by \"duntellanyone\";\n\n-- 2. Allow the user to connect to the database.\ngrant connect to ords_public_user2;\n\n-- 3. Perform some magic.\nbegin\n    ords_admin.provision_runtime_role(\n        p_user => 'ORDS_PUBLIC_USER2'\n        , p_proxy_enabled_schemas => true\n    );\nend;\n/\n"})}),"\n",(0,a.jsx)(n.h3,{id:"client-credentials",children:"Client Credentials"}),"\n",(0,a.jsxs)(n.p,{children:["Download the wallet necessary for connecting to the ADB and then upload it securely, to the Compute instance's ",(0,a.jsx)(n.code,{children:"/tmp"})," directory."]}),"\n",(0,a.jsx)(n.h2,{id:"tasklist-for-compute",children:"Tasklist for Compute"}),"\n",(0,a.jsxs)(n.p,{children:["As an Oracle Cloud Infrastructure (OCI) customer, you will have access to software like Oracle Instant Client, Java runtimes and ORDS through a private YUM repository. Login to the server as the ",(0,a.jsx)(n.code,{children:"opc"})," user using SSH and then enable the repository:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo yum-config-manager --enable ol7_oci_included\n"})}),"\n",(0,a.jsx)(n.p,{children:"Install ORDS using YUM, which will automatically install its dependencies include a supported Java Runtime Engine (JRE):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo yum install -y ords\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The package installation also creates and ",(0,a.jsx)(n.code,{children:"oracle"})," OS user that will be used to configure and run the standalone server. Switch to that user:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo su - oracle\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Set the ",(0,a.jsx)(n.code,{children:"ORDS_CONFIG_DIR"})," variable to the base directory where ORDS configuration files will be stored, and then create the necessary directory structure:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ORDS_CONFIG_DIR=/opt/oracle/ords/config && mkdir -p $ORDS_CONFIG_DIR/ords/conf\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Set the ORDS configuration directory using the command ",(0,a.jsx)(n.code,{children:"ords"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ords configdir $ORDS_CONFIG_DIR\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you are running this on an Always Free Compute instance, chances are, you may encounter this error:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Caused by: java.lang.OutOfMemoryError: Java heap space\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Try setting the ",(0,a.jsx)(n.code,{children:"JAVA_OPTIONS"})," variable with an appropriate maximum heap size before reattempting to set the ORDS configuration directory. Run the command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export JAVA_OPTIONS=-Xmx512M\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, set the following environment variables:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ORDS_USER=ORDS_PUBLIC_USER2\nORDS_PASSWORD=duntellanyone\nSERVICE_NAME=myadb_low\nWALLET_BASE64=`base64 -w 0 /tmp/wallet_MYADB.zip`\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then run the following script to create the required ORDS configuration files:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cat << EOF > $ORDS_CONFIG_DIR/ords/conf/apex_pu.xml\n<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">\n<properties>\n  <entry key="db.username">$ORDS_USER</entry>\n  <entry key="db.password">!$ORDS_PASSWORD</entry>\n  <entry key="db.wallet.zip.service">$SERVICE_NAME</entry>\n  <entry key="db.wallet.zip"><![CDATA[$WALLET_BASE64]]></entry>\n</properties>\nEOF\n\ncat << EOF > $ORDS_CONFIG_DIR/ords/defaults.xml\n<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">\n<properties>\n  <entry key="plsql.gateway.enabled">true</entry>\n  <entry key="jdbc.InitialLimit">5</entry>\n  <entry key="jdbc.MaxLimit">10</entry>\n</properties>\nEOF\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Once the configuration is done, logout and return to the OS as the ",(0,a.jsx)(n.code,{children:"opc"})," user. Start the ORDS service using the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start ords\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure you have and OCI Security List rule that has port ",(0,a.jsx)(n.code,{children:"8080"})," opened and accessible to your client machine. On the Compute instance, you will also need to ensure that the firewall port is opened. Run the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo firewall-cmd --zone=public --add-port 8080/tcp\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Check that ORDS is accessible from your browser, e.g. ",(0,a.jsx)(n.a,{href:"http://example.com:8080/ords/apex",children:"http://example.com:8080/ords/apex"}),". If so, save the OS firewall rule:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo firewall-cmd --zone=public --add-port 8080/tcp --permanent\n"})}),"\n",(0,a.jsx)(n.p,{children:"Enable the ORDS service to start automatically on boot:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable ords\n"})}),"\n",(0,a.jsx)(n.h3,{id:"apex-image-files",children:"APEX Image Files"}),"\n",(0,a.jsxs)(n.p,{children:["Login as the ",(0,a.jsx)(n.code,{children:"oracle"})," user again to  deploy the APEX image files."]}),"\n",(0,a.jsxs)(n.p,{children:["Download the compatible APEX installer and extract the contents of the images directory to ",(0,a.jsx)(n.code,{children:"/opt/oracle/apex/images/$RELEASE"}),", where the ",(0,a.jsx)(n.code,{children:"RELEASE"})," must be set to the current release number in full."]}),"\n",(0,a.jsx)(n.p,{children:"Based on what's current, set the following values:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"RELEASE=20.1.0.00.13\nAPEX_FILE=/tmp/apex_20.1.zip\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then execute the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir -p /opt/oracle/apex/images/$RELEASE\nunzip $APEX_FILE -d /tmp/\ncp -R /tmp/apex/images/* /opt/oracle/apex/images/$RELEASE\nrm -rf /tmp/apex\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After starting ORDS the first time, the standalone properties file should be created. Edit the file ",(0,a.jsx)(n.code,{children:"/opt/oracle/ords/config/ords/standalone/standalone.properties"})," and add the following two lines:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"standalone.static.context.path=/i\nstandalone.static.path=/opt/oracle/apex/images\n"})}),"\n",(0,a.jsx)(n.p,{children:"Finally reboot the server and make sure everything is running as expected."}),"\n",(0,a.jsx)(n.p,{children:"That's it?"}),"\n",(0,a.jsxs)(n.p,{children:["No it's not. Checkout my ",(0,a.jsx)(n.a,{href:"/content/id/2005/",children:"next post"})," on how to setup an Always Free Load Balancer to front the ORDS server you have just created."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},35427:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/auto-repair-3691962_1280x720-ca2ffcc26a0bc90f55096abb4a9bf53e.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);