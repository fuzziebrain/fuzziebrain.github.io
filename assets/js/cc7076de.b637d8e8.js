"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[72965],{31918:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=o(85893),s=o(11151);const i={title:"Hexo - Blogging Without Disks",date:new Date("2016-03-02T19:43:10.000Z"),slug:"id/cizx69jyk0015a0pvten1mngo",authors:["fuzziebrain"],comments:!1,categories:["Technology","Others"],tags:["blog","blogging","platform","nodejs","markdown","bootstrap"]},a=void 0,r={permalink:"/content/id/cizx69jyk0015a0pvten1mngo",source:"@site/posts/hexo-blogging-without-disks/index.md",title:"Hexo - Blogging Without Disks",description:"I feel like I have gone a full circle from my early days writing my blogs (or weblogs) in flat files as opposed to storing content in a database through a content management system (CMS). Prior to using Wordpress, I was heavily invested in developing with Drupal, and consider myself privileged to have used the knowledge of both platforms for work. All of sudden now, I have an urge to go back to my roots and focusing on creating blog posts without the bells and whistles.",date:"2016-03-02T19:43:10.000Z",formattedDate:"March 2, 2016",tags:[{label:"blog",permalink:"/content/tags/blog"},{label:"blogging",permalink:"/content/tags/blogging"},{label:"platform",permalink:"/content/tags/platform"},{label:"nodejs",permalink:"/content/tags/nodejs"},{label:"markdown",permalink:"/content/tags/markdown"},{label:"bootstrap",permalink:"/content/tags/bootstrap"}],readingTime:4.715,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Hexo - Blogging Without Disks",date:"2016-03-02T19:43:10.000Z",slug:"id/cizx69jyk0015a0pvten1mngo",authors:["fuzziebrain"],comments:!1,categories:["Technology","Others"],tags:["blog","blogging","platform","nodejs","markdown","bootstrap"]},unlisted:!1,prevItem:{title:"APEX and the Affordable Cloud!",permalink:"/content/id/cizx69jya000ra0pvv26u3cez"},nextItem:{title:"That Time of the Year",permalink:"/content/id/498"}},l={authorsImageUrls:[void 0]},h=[{value:"1. Migrating Posts from the Old WordPress Website",id:"1-migrating-posts-from-the-old-wordpress-website",level:4},{value:"2. Theming",id:"2-theming",level:4},{value:"3. Plugins",id:"3-plugins",level:4},{value:"4. Version Control",id:"4-version-control",level:4},{value:"5. Tooling",id:"5-tooling",level:4},{value:"Conclusion",id:"conclusion",level:4}];function d(e){const t={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["I feel like I have gone a full circle from my early days writing my blogs (or weblogs) in flat files as opposed to storing content in a database through a content management system (CMS). Prior to using ",(0,n.jsx)(t.a,{href:"https://www.wordpress.org/",children:"Wordpress"}),", I was heavily invested in developing with ",(0,n.jsx)(t.a,{href:"https://www.drupal.org",children:"Drupal"}),", and consider myself privileged to have used the knowledge of both platforms for work. All of sudden now, I have an urge to go back to my roots and focusing on creating blog posts without the bells and whistles."]}),"\n",(0,n.jsxs)(t.p,{children:["So instead of manipulating raw HTML tags, I found a neat little tool written in ",(0,n.jsx)(t.a,{href:"https://nodejs.org",children:"Node.js"})," that allows me to write posts and pages in Markdown, while making use templates and plugins to generate the ubiquitous Web 2.0 technologies with minimal effort. It is called ",(0,n.jsx)(t.a,{href:"https://hexo.io/",children:"Hexo"}),". I am not going through the basics of how to install and configure a blog site using Hexo as I find the documentation concise but comprehensive enough to get anyone started."]}),"\n",(0,n.jsx)(t.p,{children:"However, what I think might be helpful is what I did to further customize the size to my taste."}),"\n",(0,n.jsx)(t.h4,{id:"1-migrating-posts-from-the-old-wordpress-website",children:"1. Migrating Posts from the Old WordPress Website"}),"\n",(0,n.jsxs)(t.p,{children:["I have a few posts on my previous blog and wanted to move over as many posts and pages as I could. The simple procedure from the ",(0,n.jsx)(t.a,{href:"https://hexo.io/docs/migration.html",children:"section"})," on migrating from other blog platforms is easy to follow. For WordPress though, You do have a choice on what you want to export and you can opt to export only posts if that is all that you needed to move over. Once you have a copy of the export XML file, copy that over to your site folder (",(0,n.jsx)(t.code,{children:"<site-folder>"}),") and run the command ",(0,n.jsx)(t.code,{children:"$ hexo migrate wordpress my_wordpress_site.xml"}),". That will convert your posts (in XML format) to individual Markdown files. Posts and drafts are placed in separate folders and you can find them in ",(0,n.jsx)(t.code,{children:"<site-folder>/source/_posts"}),"  and ",(0,n.jsx)(t.code,{children:"<site-folder>/source_drafts"})," respectively. If you need to move them around, here's your chance!"]}),"\n",(0,n.jsx)(t.h4,{id:"2-theming",children:"2. Theming"}),"\n",(0,n.jsx)(t.p,{children:"This is probably one of the most important tasks!"}),"\n",(0,n.jsxs)(t.p,{children:["Out of the box, Hexo provides you with the Landscape theme. You might also have realized that the box titles on the sidebar are written in Chinese. If you are reading this post in English, I'm gonna guess that this isn't what you want. The quick fix is to copy the file ",(0,n.jsx)(t.code,{children:"<site-folder>/themes/landscape/languages/defaut.yml"})," and name it ",(0,n.jsx)(t.code,{children:"en.yml"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For me though, it's a no-brainer to seek out an alternative theme. I started out with the ",(0,n.jsx)(t.a,{href:"https://github.com/chrisjlee/hexo-theme-zurb-foundation",children:"theme"})," based on Zurb's ",(0,n.jsx)(t.a,{href:"http://foundation.zurb.com/",children:"Foundation"}),", but found myself wandering back to ",(0,n.jsx)(t.a,{href:"http://getbootstrap.com/",children:"Bootstrap"})," as that is a framework that I am currently more familiar with. So I decided to grab a copy of the Bootstrap-based ",(0,n.jsx)(t.a,{href:"https://github.com/cgmartin/hexo-theme-bootstrap-blog",children:"theme"})," instead. Be sure to follow the instructions on what else to install and configure to get the theme running correctly for your website."]}),"\n",(0,n.jsx)(t.h4,{id:"3-plugins",children:"3. Plugins"}),"\n",(0,n.jsx)(t.p,{children:"That's easy to share. Here's a list that wasn't too hard for me to compile:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n  ...\n  "dependencies": {\n    "hexo": "^3.1.1",\n    "hexo-front-matter-excerpt": "^0.2.0",\n    "hexo-generator-archive": "^0.1.4",\n    "hexo-generator-category": "^0.1.3",\n    "hexo-generator-index": "^0.2.0",\n    "hexo-generator-sitemap": "^1.1.2",\n    "hexo-generator-tag": "^0.2.0",\n    "hexo-migrator-wordpress": "^0.1.2",\n    "hexo-renderer-ejs": "^0.1.1",\n    "hexo-renderer-marked": "^0.2.9",\n    "hexo-renderer-stylus": "^0.3.0",\n    "hexo-server": "^0.1.3",\n    "hexo-tag-bootstrap": "0.0.8",\n    "hexo-tag-fontawesome": "^1.0.0"\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Bear in mind though, that this is a dynamic compilation and will more than likely change in the near future! There are several ",(0,n.jsx)(t.a,{href:"https://hexo.io/plugins/",children:"plugins"})," available to you depending on your development style. So pick and choose what you feel is necessary and install/uninstall with simple ",(0,n.jsx)(t.code,{children:"npm"})," commands. Just remember to include the ",(0,n.jsx)(t.code,{children:"--save"})," parameter to persist your changes."]}),"\n",(0,n.jsx)(t.h4,{id:"4-version-control",children:"4. Version Control"}),"\n",(0,n.jsxs)(t.p,{children:["It is almost always necessary to store versions of your work for the purpose of backup and guarding against accidental disasters. The preferred choice for me is to use ",(0,n.jsx)(t.a,{href:"https://git-scm.com",children:"Git"}),". For the purpose of working with my personal website, I opted to use ",(0,n.jsx)(t.a,{href:"https://www.bitbucket,org",children:"BitBucket"})," as they give me a much needed option of keeping my repositories private."]}),"\n",(0,n.jsx)(t.p,{children:"I created two for my website. One for storing content, and the other for my theme of choice. I added the theme as a submodule in the main site repository. This allows me to work on both content and theme concurrently. Any change to the theme (as a submodule) can then be pushed and committed to the repository, almost at the same time. Take note that you might have to first commit the submodule before updating the repository with changes in the main project."}),"\n",(0,n.jsx)(t.h4,{id:"5-tooling",children:"5. Tooling"}),"\n",(0,n.jsxs)(t.p,{children:["There is certainly no dearth of Markdown editors out there. Just take a look at this ",(0,n.jsx)(t.a,{href:"http://mashable.com/2013/06/24/markdown-tools",title:"78 Tools for Writing and Previewing Markdown by Mashable",children:"list"})," of 78 compiled by Mashable in 2013! Since I do most of my development in ",(0,n.jsx)(t.a,{href:"https://atom.io",children:"Atom"})," these days, I had to find a package I could use to make it easier to edit my posts. I have barely started using ",(0,n.jsx)(t.a,{href:"https://atom.io/packages/markdown-writer",children:"markdown-writer"})," and it is already making my life a lot easier with shortcuts and widgets. The other neat feature is its support for ",(0,n.jsx)(t.a,{href:"https://hexo.io",children:"Hexo"}),"! It actually understands the concept of draft and post in Hexo context so in theory, you would never have to use the commandline... well... not much at least."]}),"\n",(0,n.jsx)(t.p,{children:"The one thing I desire most in any kind of web editing tool is the ability to take a screenshot and paste it into the active document. If you come across such a plugin or tool, please don't hesitate to put a comment below or tweet me!"}),"\n",(0,n.jsx)(t.h4,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"I love Hexo. I love Markdown. I love Atom. Most of all, I love simplicity! Hope you've enjoyed reading this post as much as I have writing it. This is after all, my virgin post using Hexo!"}),"\n",(0,n.jsx)(t.p,{children:"HAPPY BLOGGING!"})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var n=o(67294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);