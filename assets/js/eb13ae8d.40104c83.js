"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[58001],{16329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(85893),i=t(11151);const s={title:"APEX Social Sign-In Without a Wallet",tags:["orclapex","oauth2","authentication","google","microsoft","sso","single sign-on"],slug:"id/1711",authors:["fuzziebrain"],categories:["Technology","Programming","Oracle Application Express"],date:new Date("2018-05-26T04:36:44.000Z")},a=void 0,r={permalink:"/content/id/1711",source:"@site/posts/apex-social-sign-in-without-a-wallet/index.md",title:"APEX Social Sign-In Without a Wallet",description:"Social Media",date:"2018-05-26T04:36:44.000Z",formattedDate:"May 26, 2018",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"oauth2",permalink:"/content/tags/oauth-2"},{label:"authentication",permalink:"/content/tags/authentication"},{label:"google",permalink:"/content/tags/google"},{label:"microsoft",permalink:"/content/tags/microsoft"},{label:"sso",permalink:"/content/tags/sso"},{label:"single sign-on",permalink:"/content/tags/single-sign-on"}],readingTime:3.39,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"APEX Social Sign-In Without a Wallet",tags:["orclapex","oauth2","authentication","google","microsoft","sso","single sign-on"],slug:"id/1711",authors:["fuzziebrain"],categories:["Technology","Programming","Oracle Application Express"],date:"2018-05-26T04:36:44.000Z"},unlisted:!1,prevItem:{title:"A Kscope to Remember",permalink:"/content/id/1712"},nextItem:{title:"Just a Drop of Oracle APEX",permalink:"/content/id/1710"}},l={authorsImageUrls:[void 0]},c=[{value:"Google",id:"google",level:2},{value:"Microsoft",id:"microsoft",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Social Media",src:t(5020).Z+"",width:"1280",height:"720"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Updated June 4, 2018"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Added settings for social sign-in with Microsoft OAuth2."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The much anticipated ",(0,o.jsx)(n.a,{href:"https://apex.oracle.com",children:"Oracle Application Express"})," version 18.1 was ",(0,o.jsx)(n.a,{href:"https://blogs.oracle.com/apex/announcing-oracle-apex-181",children:"announced"})," on May 24, 2018. Since early this year ",(0,o.jsx)(n.a,{href:"https://twitter.com/monty_latiolais",children:"Monty Latiolais"})," has been posting a monthly series of blog posts on ",(0,o.jsx)(n.a,{href:"https://www.insum.ca/power-ranking-oracle-apex-18-1-new-features-march/",children:"Power Ranking Oracle APEX 18.1 New Features"}),". My personal favourite is Social Login, but unfortunately it never made it to the top, even though it should!"]}),"\n",(0,o.jsx)(n.p,{children:"When 4.2 was released, I was ecstatic. The introduction of the HTTP Header Variable authentication scheme allowed me to convince my boss back then, that APEX was the way to go. One critical success factor was the ease in integrating APEX application with the wider enterprise authentication framework that has already been established. However, you typically had to have a certain system architecture to capitalize on this authentication scheme."}),"\n",(0,o.jsxs)(n.p,{children:["With the newly released ",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/database/apex-18.1/HTMDB/establishing-user-identity-through-authentication.htm#GUID-CF10F6D7-768C-42F9-9362-4CF23BF1C4B8",children:"Social Sign-in Authentication Scheme"}),", just about anyone can utilize the countless social platforms that provide OAuth2 logins."]}),"\n",(0,o.jsxs)(n.p,{children:["As you might expected, it didn't take long for me to upgrade my personal APEX instance that runs on top of Oracle Database 11g Express Edition (XE) that is too many years out of date now. The authentication scheme makes calls to identity providers using the ",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/database/apex-18.1/AEAPI/APEX_WEB_SERVICE.htm#AEAPI537",children:(0,o.jsx)(n.code,{children:"APEX_WEB_SERVICE"})})," package and usually, that's over HTTPS. So yes, you will need to load up your Oracle wallets with the certificate chains. Read ",(0,o.jsx)(n.a,{href:"https://twitter.com/cczarski",children:"Carsten Czarski's"})," excellent explanation ",(0,o.jsx)(n.a,{href:"https://blogs.oracle.com/apex/apex-https-certificates-and-the-oracle-wallet",children:"here"}),". You can get these from your browser as Carsten describes, or directly from the source such as DigiCert's ",(0,o.jsx)(n.a,{href:"https://www.digicert.com/digicert-root-certificates.htm",children:"list"})," of Root and Intermediate Certificates. However, the deal breaker here is that there is no convenient way to do this in XE. Even if you do successfully ",(0,o.jsx)(n.a,{href:"https://blog.hazrulnizam.com/openssl-workaround-oracle-xe-wallet/",children:"create a wallet for XE"}),", being so old and unpatched, it will still have difficulty negotiating with modern day certificates."]}),"\n",(0,o.jsxs)(n.p,{children:["Thank goodness for reverse proxies! There are many ways to do this, but for me, I use ",(0,o.jsx)(n.a,{href:"/content/id/1706/",children:"Suez"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"IMPORTANT SECURITY NOTE:"}),"\nEven though you can bypass SSL checks, doesn't mean that you should. End-to-end encryption is always preferred, especially when dealing with confidential information."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"google",children:"Google"}),"\n",(0,o.jsx)(n.p,{children:'Google and Facebook sign-ins are pre-configured for use, but if you are using a "reverse-proxied" approach, then it might not be what you want. At least for Google sign-in, here are my configurations and setup:'}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Add the following to the Suez configuration:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "service": {\n        "port": 3001\n    },\n    "apiTargets": [\n        {\n            "name": "googleapis",\n            "proxyTarget": "https://www.googleapis.com"\n        }\n]\n}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure that ",(0,o.jsx)(n.code,{children:"googleapis.localhost"})," resolves to 127.0.0.1."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Follow my ",(0,o.jsx)(n.a,{href:"/content/id/1709/",children:"previous guide"})," on setting up Google Sign-in. The key difference is not to use the pre-configured Google option, but instead, set up a Generic OAuth2 Provider using the following settings:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Authorization Endpoint URL"}),": ",(0,o.jsx)(n.a,{href:"https://accounts.google.com/o/oauth2/v2/auth",children:"https://accounts.google.com/o/oauth2/v2/auth"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Token Endpoint URL"}),": ",(0,o.jsx)(n.a,{href:"http://googleapis.localhost:3001/oauth2/v4/token",children:"http://googleapis.localhost:3001/oauth2/v4/token"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"User Info Endpoint URL"}),": ",(0,o.jsx)(n.a,{href:"http://googleapis.localhost:3001/oauth2/v2/userinfo",children:"http://googleapis.localhost:3001/oauth2/v2/userinfo"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"My Social Sign-in Settings for Google",src:t(65598).Z+"",width:"735",height:"356"})}),"\n",(0,o.jsx)(n.h2,{id:"microsoft",children:"Microsoft"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Add the following to the Suez configuration:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "service": {\n        "port": 3001\n    },\n    "apiTargets": [\n        {\n      "name": "loginmicrosoftonline",\n      "proxyTarget": "https://login.microsoftonline.com"\n    },\n    {\n      "name": "graphmicrosoft",\n      "proxyTarget": "https://graph.microsoft.com"\n    }\n]\n}\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure that ",(0,o.jsx)(n.code,{children:"loginmicrosoftonline.localhost"})," and ",(0,o.jsx)(n.code,{children:"graphmicrosoft.localhost"})," resolves to 127.0.0.1."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Go to Microsoft's ",(0,o.jsx)(n.a,{href:"https://apps.dev.microsoft.com/",children:"Application Registration Portal"}),'. Add an application under "Converged applications".']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Enter the application name and the following information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Redirect URLs"}),": ",(0,o.jsx)(n.code,{children:"https://my.app/ords/apex_authentication.callback"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Home page URL"}),": ",(0,o.jsx)(n.code,{children:"https://my.app/ords/f?p=myapp"})]}),"\n",(0,o.jsxs)(n.li,{children:["The remaining fields can be left at the defaults, but make sure that the delegated permission ",(0,o.jsx)(n.code,{children:"User.Read"}),' has been added under "Microsoft Graph Permissions".']}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Under "Application Secrets", generate a new password and note both the Application Id and Password.'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Save the application registration information."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create the web credential using the Application Id and Password obtained from the registration portal."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create the authentication scheme using a Generic OAuth2 Provider with the following settings:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Authorization Endpoint URL"}),": ",(0,o.jsx)(n.a,{href:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize",children:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Token Endpoint URL"}),": ",(0,o.jsx)(n.a,{href:"http://loginmicrosoftonline.localhost:3001/common/oauth2/v2.0/token",children:"http://loginmicrosoftonline.localhost:3001/common/oauth2/v2.0/token"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"User Info Endpoint URL"}),": ",(0,o.jsx)(n.a,{href:"http://graphmicrosoft.localhost:3001/v1.0/me",children:"http://graphmicrosoft.localhost:3001/v1.0/me"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Scope"}),": User.Read"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Username Attribute"}),": userPrincipalName"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Once you've established what server URLs are called, this approach is easily replicated for other providers. I will update this post as I learn more."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},65598:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/authscheme-settings-41271216ef8f42cef6087f3edc6284cc.png"},5020:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/media-998990_1280x720-fd181bfc50177dec0329b70d69254121.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);