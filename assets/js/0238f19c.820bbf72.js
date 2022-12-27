"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[46674],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=m(n),c=r,u=p["".concat(i,".").concat(c)]||p[c]||h[c]||o;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"APEX and the Affordable Cloud!",date:new Date("2017-03-04T11:28:18.000Z"),slug:"id/cizx69jya000ra0pvv26u3cez",authors:["fuzziebrain"],tags:["orclapex","oxar","cloud","hosting","vagrant","devops","linode"],categories:["Technology","Programming","Oracle Application Express"]},i=void 0,l={permalink:"/content/id/cizx69jya000ra0pvv26u3cez",source:"@site/posts/apex-and-the-affordable-cloud/index.md",title:"APEX and the Affordable Cloud!",description:"Rivadeneira by Cesar Lopez",date:"2017-03-04T11:28:18.000Z",formattedDate:"March 4, 2017",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"oxar",permalink:"/content/tags/oxar"},{label:"cloud",permalink:"/content/tags/cloud"},{label:"hosting",permalink:"/content/tags/hosting"},{label:"vagrant",permalink:"/content/tags/vagrant"},{label:"devops",permalink:"/content/tags/devops"},{label:"linode",permalink:"/content/tags/linode"}],readingTime:3.025,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"APEX and the Affordable Cloud!",date:"2017-03-04T11:28:18.000Z",slug:"id/cizx69jya000ra0pvv26u3cez",authors:["fuzziebrain"],tags:["orclapex","oxar","cloud","hosting","vagrant","devops","linode"],categories:["Technology","Programming","Oracle Application Express"]},prevItem:{title:"San Antonio Revisited",permalink:"/content/id/1702"},nextItem:{title:"Hexo - Blogging Without Disks",permalink:"/content/id/cizx69jyk0015a0pvten1mngo"}},d={authorsImageUrls:[void 0]},s=[{value:"Before We Begin",id:"before-we-begin",level:2},{value:"OS Support",id:"os-support",level:3},{value:"Linode",id:"linode",level:2},{value:"Install the Linode Provider Plugin",id:"install-the-linode-provider-plugin",level:2},{value:"Prepare the Vagrantfile",id:"prepare-the-vagrantfile",level:2},{value:"Synced Folders",id:"synced-folders",level:3},{value:"Configure the Linode Provider",id:"configure-the-linode-provider",level:3},{value:"Set the Timezone",id:"set-the-timezone",level:3},{value:"Linode API Key",id:"linode-api-key",level:2},{value:"Deploy",id:"deploy",level:2}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Rivadeneira by Cesar Lopez",src:n(83381).Z,width:"1280",height:"853"})),(0,r.mdx)("p",null,"Love ",(0,r.mdx)("a",{parentName:"p",href:"https://apex.oracle.com/"},"Oracle Application Express")," (APEX), but having trouble finding a decent, affordable home for your killer application? Here's one option you can consider that should not burn your wallet."),(0,r.mdx)("h2",{id:"before-we-begin"},"Before We Begin"),(0,r.mdx)("p",null,"The following guide assumes the following:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"Vagrant")," installed. The version I used for this article was 1.9.2."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/OraOpenSource/OXAR"},"OXAR")," cloned."),(0,r.mdx)("li",{parentName:"ol"},"Installation files required by OXAR have been downloaded and made available as a web resource. One option is to upload the files to ",(0,r.mdx)("a",{parentName:"li",href:"https://www.dropbox.com/"},"Dropbox")," and then create a ",(0,r.mdx)("a",{parentName:"li",href:"https://www.dropbox.com/en/help/167"},"shared link"),"."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"config.properties")," files is customized to requirements. The file URLs should point to the relevant installation files as per ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/OraOpenSource/OXAR/blob/master/README.md"},"OXAR instructions"),"."),(0,r.mdx)("li",{parentName:"ol"},"SSH keys generated. If not execute the command: ",(0,r.mdx)("inlineCode",{parentName:"li"},"ssh-keygen"),"."),(0,r.mdx)("li",{parentName:"ol"},"All commands are executed from the project's root directory.")),(0,r.mdx)("h3",{id:"os-support"},"OS Support"),(0,r.mdx)("p",null,"At this time, I have only been able to demonstrate the remote build using Linux, though I believe Mac users should not have any problems doing the same. I will update or write a new post when I am able to accomplish the same tasks in Windows."),(0,r.mdx)("h2",{id:"linode"},"Linode"),(0,r.mdx)("p",null,"Sign up for an account with ",(0,r.mdx)("a",{parentName:"p",href:"https://www.linode.com/?r=41672b20d515344de465e9ed44c1a75356445597"},"Linode"),". The smallest-sized Linode that you can create has sufficient resources to get a basic OXAR node running. Available to you at an affordable monthly fee of ",(0,r.mdx)("strong",{parentName:"p"},"USD 5"),", it's probably as good as it gets!"),(0,r.mdx)("h2",{id:"install-the-linode-provider-plugin"},"Install the Linode Provider Plugin"),(0,r.mdx)("p",null,"Execute:\n",(0,r.mdx)("inlineCode",{parentName:"p"},"vagrant plugin install vagrant-linode")),(0,r.mdx)("h2",{id:"prepare-the-vagrantfile"},"Prepare the Vagrantfile"),(0,r.mdx)("h3",{id:"synced-folders"},"Synced Folders"),(0,r.mdx)("p",null,"Force Vagrant to sync files using ",(0,r.mdx)("inlineCode",{parentName:"p"},"rsync"),", otherwise Vagrant might attempt to use NFS and the process will most likely fail as it did for me initially."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'  config.vm.synced_folder ".", "/vagrant", type: "rsync"\n    , rsync__exclude: [".git/", ".vagrant/"]\n')),(0,r.mdx)("h3",{id:"configure-the-linode-provider"},"Configure the Linode Provider"),(0,r.mdx)("p",null,"Add the Linode provider block:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"config.vm.provider :linode do |provider, override|\n  override.ssh.private_key_path = '~/.ssh/id_rsa'\n\n  provider.api_key = '<LINODE API KEY>'\n  provider.label = '<LABEL FOR LINODE>'\n  provider.distribution = 'CentOS 7'\n  provider.datacenter = '<DATACENTER>'\n  provider.planid = <PLAN ID>\nend\n")),(0,r.mdx)("p",null,"A list of valid Plan IDs and data centers can be obtained from the Linode Vagrant Provider plugin ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/displague/vagrant-linode/blob/master/README.md"},"documentation"),". Note that Plan ID is probably enough for a start."),(0,r.mdx)("h3",{id:"set-the-timezone"},"Set the Timezone"),(0,r.mdx)("p",null,"During my first build, I encountered issues with ORDS not installing correctly because Java was not able to recognize the system's timezone correctly, similar to what had previously been ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/OraOpenSource/OXAR/issues/194"},"reported"),"."),(0,r.mdx)("p",null,"The Centos 7 image provisioned by Linode has the timezone set to UTC and that seems to be problem. The workaround for me was to set the timezone prior to calling OXAR's ",(0,r.mdx)("inlineCode",{parentName:"p"},"build.sh")," script. This is done towards the end of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Vagrantfile"),", within the SHELL sub-section. Probably something that we should consider adding to the main OXAR build process."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"    ...\n\n    rsync -rtv --exclude='files' --exclude='.*' /vagrant/ /tmp/vagrant-deploy\n\n    cd /tmp/vagrant-deploy\n\n    # Set the timezone\n    timedatectl set-timezone America/Vancouver\n\n    ./build.sh\n  SHELL\nend\n")),(0,r.mdx)("p",null,"To get a list of valid timezones, execute the command ",(0,r.mdx)("inlineCode",{parentName:"p"},"timedatectl list-timezones")," on a similar Centos 7 instance."),(0,r.mdx)("h2",{id:"linode-api-key"},"Linode API Key"),(0,r.mdx)("p",null,'Login to your Linode account and then click on "my profile", found on the top-right corner of the page. Provide your password again when prompted. This will allow you access to the API Keys sub-page.'),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Create an API Key",src:n(56540).Z,width:"1015",height:"447"})),(0,r.mdx)("p",null,"Create a new key. I strongly recommend using a suitable label and setting an expiry date for the generated key."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Note the API Key",src:n(4383).Z,width:"1016",height:"535"})),(0,r.mdx)("p",null,"Copy and past the API key into the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Vagrantfile"),". As warned, the key will only be displayed once!"),(0,r.mdx)("h2",{id:"deploy"},"Deploy"),(0,r.mdx)("p",null,"When you are ready, execute the command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"vagrant up --provider=linode\n")),(0,r.mdx)("p",null,"Sit back, wait for the OXAR system reboot countdown and then pop the champagne. Magic!"),(0,r.mdx)("p",null,"Thanks for reading!"))}m.isMDXComponent=!0},83381:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cesar-lopez-rivadeneira-6088-1280-8a2caff56c0277f1434063216060c6be.jpg"},56540:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linode-create-apikey-26fec642442d149520e9b485c2a1f230.png"},4383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linode-note-apikey-bd41283849bae073ef58e8d1b9eba95b.png"}}]);