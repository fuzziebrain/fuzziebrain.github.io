"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[59284],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>d,withMDXComponents:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,u=s["".concat(i,".").concat(c)]||s[c]||h[c]||o;return n?a.createElement(u,m(m({ref:t},p),{},{components:n})):a.createElement(u,m({ref:t},p))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[u]="string"==typeof e?e:r,i[1]=m;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Social Sign In with Azure",tags:["orclapex","oauth2","authentication","microsoft","azure","active directory","office 365","sso","single sign on"],categories:["Technology","Programming","Oracle Application Express"],slug:"id/1908",authors:["fuzziebrain"],date:new Date("2019-04-23T19:01:19.000Z")},i=void 0,m={permalink:"/content/id/1908",source:"@site/posts/social-sign-in-with-azure/index.md",title:"Social Sign In with Azure",description:"Photo by Gerd Altmann",date:"2019-04-23T19:01:19.000Z",formattedDate:"April 23, 2019",tags:[{label:"orclapex",permalink:"/content/tags/orclapex"},{label:"oauth2",permalink:"/content/tags/oauth-2"},{label:"authentication",permalink:"/content/tags/authentication"},{label:"microsoft",permalink:"/content/tags/microsoft"},{label:"azure",permalink:"/content/tags/azure"},{label:"active directory",permalink:"/content/tags/active-directory"},{label:"office 365",permalink:"/content/tags/office-365"},{label:"sso",permalink:"/content/tags/sso"},{label:"single sign on",permalink:"/content/tags/single-sign-on"}],readingTime:5.69,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Social Sign In with Azure",tags:["orclapex","oauth2","authentication","microsoft","azure","active directory","office 365","sso","single sign on"],categories:["Technology","Programming","Oracle Application Express"],slug:"id/1908",authors:["fuzziebrain"],date:"2019-04-23T19:01:19.000Z"},prevItem:{title:"Seattle Take Two",permalink:"/content/id/1909"},nextItem:{title:"Day 15 - 30 Days on the Oracle Cloud",permalink:"/content/id/1907"}},l={authorsImageUrls:[void 0]},p=[{value:"OpenID Connect",id:"openid-connect",level:3},{value:"APEX Authentication Scheme using OpenID Connect",id:"apex-authentication-scheme-using-openid-connect",level:4}],s={toc:p};function d(e){let{components:t,...o}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Photo by Gerd Altmann",src:n(77085).Z,width:"1919",height:"1079"})),(0,r.mdx)("p",null,"Since ",(0,r.mdx)("a",{parentName:"p",href:"https://apex.oracle.com"},"Oracle Application Express (APEX)")," version 18.1, application developers are able to easily integrate ",(0,r.mdx)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth2"),"-based authentication using many popular identity providers including Google, Facebook and Microsoft. ",(0,r.mdx)("a",{parentName:"p",href:"https://twitter.com/mortenbraten"},"Morten Braten"),", ",(0,r.mdx)("a",{parentName:"p",href:"https://twitter.com/c2anton"},"Anton Nielsen")," and I have previously written on this subject."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://ora-00001.blogspot.com/2018/02/apex-authentication-with-microsoft-account.html"},"APEX Authentication with Microsoft account")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"http://c2anton.blogspot.com/2019/01/oracle-apex-social-sign-on-with.html"},"Oracle APEX Social Sign-On with Microsoft Azure")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"http://c2anton.blogspot.com/2019/02/oracle-apex-less-social-sign-on-with-ms.html"},"Oracle APEX Less Social Sign-On with MS Azure and Office 365")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/content/id/1711/"},"APEX Social Sign-In Without a Wallet"))),(0,r.mdx)("p",null,"Starting May 2019, Microsoft is changing how developers manage their OAuth2 application registrations."),(0,r.mdx)("p",null,"Currently, developers manage these entries using Microsoft's Application Registration Portal (",(0,r.mdx)("a",{parentName:"p",href:"https://apps.dev.microsoft.com/"},"https://apps.dev.microsoft.com/"),"). This is being phased out. Going forward, application registrations will be managed via the Azure portal (",(0,r.mdx)("a",{parentName:"p",href:"https://portal.azure.com"},"https://portal.azure.com"),"). While currently in preview, it is functional and remains rather straightforward to manage."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Microsoft Application Registration Portal",src:n(69134).Z,width:"1277",height:"683"})),(0,r.mdx)("p",null,"Before we begin, make sure that the database is configured with the appropriate network privileges and the APEX instance is configured to use an Oracle Wallet containing all the necessary SSL/TLS certificates. Please read this previous ",(0,r.mdx)("a",{parentName:"p",href:"/content/id/1725"},"article")," if you need some guidance."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Sign in to ",(0,r.mdx)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("em",{parentName:"p"},"Azure Active Directory")," {% fa chevron-right %} ",(0,r.mdx)("em",{parentName:"p"},"App registrations (Preview)"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("em",{parentName:"p"},"New registration"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Enter a name for the app registration")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"For supported types, choose between the ",(0,r.mdx)("u",null,"three")," options:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Accounts in this organizational directory only (",(0,r.mdx)("em",{parentName:"li"},"<COMPANY_NAME>"),")","*"),(0,r.mdx)("li",{parentName:"ul"},"Accounts in any organizational directory"),(0,r.mdx)("li",{parentName:"ul"},"Accounts in any organizational directory and personal Microsoft accounts (e.g. Skype, Xbox, Outlook.com)")),(0,r.mdx)("p",{parentName:"li"},"The list above is ordered in increasing accessibility but decreasing security. Microsoft provides the following descriptions for each option:"),(0,r.mdx)("blockquote",{parentName:"li"},(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("strong",{parentName:"p"},"Accounts in this organizational directory only (",(0,r.mdx)("em",{parentName:"strong"},"<COMPANY_NAME>"),")")),(0,r.mdx)("p",{parentName:"blockquote"},"All user and guest accounts in your directory can use your application or API."),(0,r.mdx)("p",{parentName:"blockquote"},"Use this option if your target audience is internal to your organization."),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("strong",{parentName:"p"},"Accounts in any organizational directory")),(0,r.mdx)("p",{parentName:"blockquote"},"All users and guests with a work or school account from Microsoft can use your application or API. This includes schools and businesses that use Office 365."),(0,r.mdx)("p",{parentName:"blockquote"},"Use this option if your target audience is business or educational customers."),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("strong",{parentName:"p"},"Accounts in any organizational directory and personal Microsoft accounts (e.g. Skype, Xbox, Outlook.com)")),(0,r.mdx)("p",{parentName:"blockquote"},"All users with a work or school, or personal Microsoft account can use your application or API. It includes schools and businesses that use Office 365 as well as personal accounts that are used to sign in to services like Xbox and Skype."),(0,r.mdx)("p",{parentName:"blockquote"},"Use this option to target the widest set of Microsoft identities.")),(0,r.mdx)("p",{parentName:"li"},"*"," ",(0,r.mdx)("em",{parentName:"p"},"The first option is only available to Azure AD subscribers. Business accounts should have access to this feature."))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Enter the APEX callback URL as a ",(0,r.mdx)("em",{parentName:"p"},"Web")," Redirect URI, e.g. ",(0,r.mdx)("a",{parentName:"p",href:"https://apex.oracle.com/pls/apex/apex_authentication.callback"},"https://apex.oracle.com/pls/apex/apex_authentication.callback"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Read the policy and click ",(0,r.mdx)("em",{parentName:"p"},"Register")," to proceed.\n",(0,r.mdx)("img",{alt:"New App Registration",src:n(97165).Z,width:"1280",height:"800"}))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Once the app registration is completed, note the ",(0,r.mdx)("em",{parentName:"p"},"Application (client) ID")," on the Overview page. For Azure Active Directory (AD) subscribers (e.g. Azure AD for Office 365), also note the ",(0,r.mdx)("em",{parentName:"p"},"Directory ID"),".\n",(0,r.mdx)("img",{alt:"Application Registration Overview Page",src:n(66625).Z,width:"1280",height:"800"}))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("em",{parentName:"p"},"Certificates & secrets")," and then the ",(0,r.mdx)("em",{parentName:"p"},"New client secret")," button under the section ",(0,r.mdx)("em",{parentName:"p"},"Client secrets"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Provide a description and expiration period. Click ",(0,r.mdx)("em",{parentName:"p"},"Add")," and copy the secret value as it will be displayed only once.\n",(0,r.mdx)("img",{alt:"Adding a client secret",src:n(80349).Z,width:"1280",height:"800"}))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"The required API permissions should have been already added, if not, ensure that the app has at least ",(0,r.mdx)("em",{parentName:"p"},"User.Read")," on the ",(0,r.mdx)("em",{parentName:"p"},"Microsoft Graph")," API.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"In APEX App Builder, create a ",(0,r.mdx)("em",{parentName:"p"},"Web Credential")," using the values for the client ID and secret pair generated earlier in the Azure portal.\n",(0,r.mdx)("img",{alt:"Azure Web Credential",src:n(98753).Z,width:"1280",height:"800"}))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create an ",(0,r.mdx)("em",{parentName:"p"},"Authentication Scheme")," with the following values:"))),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Credential Store"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Select the credential store containing the client ID and secret from Azure"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Authentication Provider"),(0,r.mdx)("td",{parentName:"tr",align:null},"Generic OAuth2 Provider")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Authorization Endpoint URL"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize"},"https://login.microsoftonline.com/common/oauth2/v2.0/authorize"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Token Endpoint URL(Value Required)"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://login.microsoftonline.com/common/oauth2/v2.0/token"},"https://login.microsoftonline.com/common/oauth2/v2.0/token"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"User Info Endpoint URL"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://graph.microsoft.com/v1.0/me"},"https://graph.microsoft.com/v1.0/me"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Scope"),(0,r.mdx)("td",{parentName:"tr",align:null},"User.Read")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Authentication URI Parameters"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Blank"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Username Attribute"),(0,r.mdx)("td",{parentName:"tr",align:null},"userPrincipalName")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Convert Username To Upper Case"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},'Set "Yes" if necessary, otherwise leave it as "No"'))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Additional User Attributes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Leave blank unless required"))))),(0,r.mdx)("ol",{start:14},(0,r.mdx)("li",{parentName:"ol"},"For the ",(0,r.mdx)("em",{parentName:"li"},"Authorization")," and ",(0,r.mdx)("em",{parentName:"li"},"Token")," endpoint URLs, replace ",(0,r.mdx)("inlineCode",{parentName:"li"},"common")," with the ",(0,r.mdx)("em",{parentName:"li"},"Directory ID"),".",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"Authorization Endpoint URL")," - ",(0,r.mdx)("inlineCode",{parentName:"li"},"https://login.microsoftonline.com/<DIRECTORY_ID>/oauth2/v2.0/authorize")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"Token Endpoint URL")," - ",(0,r.mdx)("inlineCode",{parentName:"li"},"https://login.microsoftonline.com/<DIRECTORY_ID>/oauth2/v2.0/token"))))),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Social Sign In Authentication Scheme for Azure AD subscribers",src:n(33986).Z,width:"1280",height:"800"})),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"In the Authentication Scheme's ",(0,r.mdx)("em",{parentName:"li"},"Post-Logout URL"),", set the value to ",(0,r.mdx)("a",{parentName:"li",href:"https://login.microsoftonline.com/common/oauth2/logout"},"https://login.microsoftonline.com/common/oauth2/logout"),", ",(0,r.mdx)("strong",{parentName:"li"},"if")," Single Sign Out is required.")),(0,r.mdx)("h3",{id:"openid-connect"},"OpenID Connect"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Updated on 2019-04-24")),(0,r.mdx)("p",null,"With much thanks to Jean-Marc (see comments below), please note that with the Microsoft identity platform, developers can also use the ",(0,r.mdx)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," to create the Authentication scheme. Unlike the older OpenID v1.0 and v2.0 specifications that are now obsolete, the OpenID Connect specification works on top of the OAuth2 protocol. It provides a JSON-based metadata document that provides the necessary information for the client to execute the OAuth2 authentication workflow."),(0,r.mdx)("p",null,"From ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",\n    "token_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/token",\n    "token_endpoint_auth_methods_supported": [\n        "client_secret_post",\n        "private_key_jwt",\n        "client_secret_basic"\n],\n    "jwks_uri": "https://login.microsoftonline.com/common/discovery/v2.0/keys",\n    "response_modes_supported": [\n        "query",\n        "fragment",\n        "form_post"\n],\n    "subject_types_supported": [\n        "pairwise"\n],\n    "id_token_signing_alg_values_supported": [\n        "RS256"\n],\n    "http_logout_supported": true,\n    "frontchannel_logout_supported": true,\n    "end_session_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/logout",\n    "response_types_supported": [\n        "code",\n        "id_token",\n        "code id_token",\n        "id_token token"\n],\n    "scopes_supported": [\n        "openid",\n        "profile",\n        "email",\n        "offline_access"\n],\n    "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0",\n    "claims_supported": [\n        "sub",\n        "iss",\n        "cloud_instance_name",\n        "cloud_instance_host_name",\n        "cloud_graph_host_name",\n        "msgraph_host",\n        "aud",\n        "exp",\n        "iat",\n        "auth_time",\n        "acr",\n        "nonce",\n        "preferred_username",\n        "name",\n        "tid",\n        "ver",\n        "at_hash",\n        "c_hash",\n        "email"\n],\n    "request_uri_parameter_supported": false,\n    "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo",\n    "tenant_region_scope": null,\n    "cloud_instance_name": "microsoftonline.com",\n    "cloud_graph_host_name": "graph.windows.net",\n    "msgraph_host": "graph.microsoft.com",\n    "rbac_url": "https://pas.windows.net"\n}\n')),(0,r.mdx)("p",null,"Along with the necessary endpoint URLs for OAuth2 authentication, the document also indicates the scope and claims supported, which are useful for setting up your APEX Authentication Scheme."),(0,r.mdx)("h4",{id:"apex-authentication-scheme-using-openid-connect"},"APEX Authentication Scheme using OpenID Connect"),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"APEX Authentication Scheme using OpenID Connect provider",src:n(67942).Z,width:"1280",height:"800"})),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Credential Store"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Select the credential store containing the client ID and secret from Azure"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Authentication Provider"),(0,r.mdx)("td",{parentName:"tr",align:null},"OpenID Connect Provider")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Discovery URL"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration")," ","*")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Scope"),(0,r.mdx)("td",{parentName:"tr",align:null},"profile,email")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Authentication URI Parameters"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Blank"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Username Attribute"),(0,r.mdx)("td",{parentName:"tr",align:null},"email")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Convert Username To Upper Case"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},'Set "Yes" if necessary, otherwise leave it as "No"'))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Additional User Attributes"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Leave blank unless required"))))),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"*"," Where ",(0,r.mdx)("inlineCode",{parentName:"p"},"{tenant}")," can be either of the following:"),(0,r.mdx)("ul",{parentName:"blockquote"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"common")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"organizations")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"consumers")),(0,r.mdx)("li",{parentName:"ul"},"Azure AD tenant's domain name or GUID identifier (Directory ID)"))),(0,r.mdx)("p",null,"That's it!"),(0,r.mdx)("p",null,"As you can see, there is very little work involved to set this up, yet the benefits are far reaching. Once implemented, be sure to get your users' feedback, and find out how much productivity has increased for them!"))}d.isMDXComponent=!0},33986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app_builder_authentication_scheme-6d75ed86d0d59305c23f70a7ad396905.png"},67942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app_builder_authentication_scheme_openid-4d0982a70ba05febbbeaf093b1baa42c.png"},98753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app_builder_web_credential-8852c899383d7ad2a3a5c98bb589bcef.png"},80349:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app_registration_client_secret-8c5ef65ae9d29767faaf3023affb8900.png"},66625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app_registration_overview-63f9706e447797a49abaeb009bb5a2a3.png"},97165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app_registration_register-4a424f9e272b12a074e673ab614442d3.png"},69134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apps_dev_microsoft-f6c0a91d7b2c43c33d695ab34581ca13.png"},77085:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/board-895399_1920x1280-bf38c39d1bd3a96bff79db33bd29591e.jpg"}}]);