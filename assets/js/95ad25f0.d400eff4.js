"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[14378],{60425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(85893),o=n(11151);const i={title:"Don't GenAI Everything",description:"Oracle Generative AI ...",image:"./assets/stop-4249188_1280x720.jpeg",tags:["machine learning","automl","oci","oracle ai","generative ai","python","langchain"],categories:["Technology"],authors:["fuzziebrain"],date:new Date("2024-03-17T23:30:00.000Z")},s=void 0,r={permalink:"/content/dont-genai-everything",source:"@site/posts/dont-genai-everything/index.md",title:"Don't GenAI Everything",description:"Oracle Generative AI ...",date:"2024-03-17T23:30:00.000Z",formattedDate:"March 17, 2024",tags:[{label:"machine learning",permalink:"/content/tags/machine-learning"},{label:"automl",permalink:"/content/tags/automl"},{label:"oci",permalink:"/content/tags/oci"},{label:"oracle ai",permalink:"/content/tags/oracle-ai"},{label:"generative ai",permalink:"/content/tags/generative-ai"},{label:"python",permalink:"/content/tags/python"},{label:"langchain",permalink:"/content/tags/langchain"}],readingTime:10.59,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"Don't GenAI Everything",description:"Oracle Generative AI ...",image:"./assets/stop-4249188_1280x720.jpeg",tags:["machine learning","automl","oci","oracle ai","generative ai","python","langchain"],categories:["Technology"],authors:["fuzziebrain"],date:"2024-03-17T23:30:00.000Z"},unlisted:!1,nextItem:{title:"GenAI Made Easy",permalink:"/content/genai-made-easy"}},l={image:n(63757).Z,authorsImageUrls:[void 0]},d=[{value:"Oracle AI Solutions",id:"oracle-ai-solutions",level:2},{value:"Ready-to-go",id:"ready-to-go",level:3},{value:"Ready-to-work",id:"ready-to-work",level:3},{value:"Ready-to-build",id:"ready-to-build",level:3},{value:"Ready-to-work HOL at APEX World 2024",id:"ready-to-work-hol-at-apex-world-2024",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"A flagger stopping a truck on a remote dessert highway.",src:n(81808).Z+"",width:"1280",height:"720"})}),"\n",(0,a.jsxs)(t.p,{children:["In case you missed it, for the last few blogs posts, I had been using Stability AI's ",(0,a.jsx)(t.a,{href:"https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",children:"Stable Diffusion"}),' model to generate the banner images, and I have been mostly successful. Did I really need to? Perhaps not. For this post, I spent almost 30 minutes trying to figure out the "right" prompt to generate the image I wanted: "A car stopped in front a stop sign."']}),"\n",(0,a.jsx)(t.p,{children:"Fortunately, I am able to run this code on a Google Colab notebook for free. However, it still takes time and I still couldn't get what I wanted. This was close, but the \"stop\" sign resembles but isn't one that we would recognise."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"A car stopped at an intersection with a sign that is supposed to say stop.",src:n(44073).Z+"",width:"1280",height:"720"})}),"\n",(0,a.jsxs)(t.p,{children:["I finally did a search on two stock art websites that I had been using previously - ",(0,a.jsx)(t.a,{href:"https://unsplash.com",children:"Unsplash"})," and ",(0,a.jsx)(t.a,{href:"https://pixabay.com",children:"Pixabay"})," - and found something suitable within 3 minutes. All I needed was a little cropping and that's it!"]}),"\n",(0,a.jsxs)(t.p,{children:["When seeking a solution, especially one involving digital technologies, we should always be mindful not to use ",(0,a.jsx)(t.em,{children:"a sledgehammer to crack a nut"}),". As exciting and revolutionary Generative AI might be, not every solution requires a large language model. Artificial intelligence and machine learning are fields of study that are more than half a decade old. The transformer architecture itself is based on artificial neural networks at its core, and these have been around since 1943. Along with ANNs, other ML algorithms have been used successfully in computer vision, decision making, and predictive analytics. Amazon, since its early days, has used association rule learning to perform market basket analysis to sell products to online shoppers. Many large supermarkets did the same when deciding that cigarette packets (in the old days), some magazines, and chewing gums should be displayed at the checkout aisles."]}),"\n",(0,a.jsx)(t.p,{children:"When building out solutions involving large language models, it is very important to consider issues like data privacy and sovereignty, and the computational resource requirements when performing tasks like fine-tuning. More often than not, you are looking to use a model that has a large number of parameters, and these tasks may require quite a bit of GPU compute resources to complete the operation in a decent amount of time. These resources are often scarce and more expensive than regular compute instances."}),"\n",(0,a.jsxs)(t.p,{children:["If you're looking to infuse AI into your business, there are several options that Oracle has made available for a while now. Oracle in their ",(0,a.jsx)(t.a,{href:"https://learn.oracle.com/ols/learning-path/oracle-artificial-intelligence-2024-sales-specialist/89350/123275",children:"Oracle Artificial Intelligence 2024 Sales Specialist"})," learning path, presents three general categories of AI solutions:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Ready-to-go"}),"\n",(0,a.jsx)(t.li,{children:"Ready-to-work"}),"\n",(0,a.jsx)(t.li,{children:"Ready-to-build"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"oracle-ai-solutions",children:"Oracle AI Solutions"}),"\n",(0,a.jsx)(t.h3,{id:"ready-to-go",children:"Ready-to-go"}),"\n",(0,a.jsxs)(t.p,{children:["For a developer, these are probably the least interesting. Here, Oracle refers to AI solutions that are already integrated in to Oracle's products, and don't require any customisations. Products such as Oracle's Fusion Apps suite of SaaS offerings, and systems like the ",(0,a.jsx)(t.a,{href:"https://oracle.com/cloud",children:"Oracle Cloud Infrastructure"})," (OCI) observability and monitoring, and their flagship database, the Oracle Autonomous Database (ADB)."]}),"\n",(0,a.jsx)(t.h3,{id:"ready-to-work",children:"Ready-to-work"}),"\n",(0,a.jsx)(t.p,{children:"The ready-to-work solutions are where I think most web developers and businesses can exploit to develop AI-based solutions that are tailored to the organisation's unique data and operational needs. These services require a minimal amount of knowledge about machine learning to begin. Let's look at some typical scenarios."}),"\n",(0,a.jsxs)(t.p,{children:['If you had a dataset with well-defined "inputs" and "outputs", and is of reasonably high quality, the ',(0,a.jsx)(t.em,{children:"AutoML UI"})," is available to ADB customers and it allows users to execute a typical ML model training workflow without getting involved in every aspect of the process, such as, algorithm selection, adaptive sampling, feature selection, and model tuning. This easy-to-use interface allows users to train ML models specific to their datasets, and then deploy them as REST endpoints. These ML models can then be consumed and used for inferencing in your favourite application development platform, ",(0,a.jsx)(t.a,{href:"https://apex.oracle.com",children:"Oracle APEX"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Next, we have a variety of Oracle AI services that offers pre-trained ML models for different types of tasks. Simply understand the input and output parameters of the REST endpoint, and voila, you have an intelligent application. Current pre-trained models include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Language"}),"\n",(0,a.jsx)(t.li,{children:"Speech"}),"\n",(0,a.jsx)(t.li,{children:"Vision"}),"\n",(0,a.jsx)(t.li,{children:"Document Understanding"}),"\n",(0,a.jsx)(t.li,{children:"Anomaly Detection (deprecated); and more recently"}),"\n",(0,a.jsx)(t.li,{children:"Generative AI"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Look for processes that are manual, tedious, and time-consuming. For example, accounts payable (AP) processing. Are invoices, received either in the mail or a PDF sent ",(0,a.jsx)(t.em,{children:"via"})," e-mail, being rev. Automated classification in a document management workflow. Labelling photos taken by field engineers. Automatic tagging of helpdesk tickets by extracting entities. These are just a handful of situations where business processes can be enhanced and assisted using ML without a lot of effort."]}),"\n",(0,a.jsxs)(t.p,{children:["Pre-trained models are typically trained over large data sets, and while they might be good enough for some general tasks such as identifying a car given a photo of a street, there are situations where the use case demands a prediction model that is specific to the domain, for example, identifying a custom electronic component on a printed circuit board. And in such situations, some services like Vision and Language allow developers to train a custom model using the customer's labelled datasets. In a previous blog posts, I ",(0,a.jsx)(t.a,{href:"train-an-ai-model-to-recognize-oracle-apex-challenge-coins",children:"described"})," how I trained a custom model that could identify an ",(0,a.jsx)(t.a,{href:"id/1727",children:"Oracle APEX challenge coin"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"ready-to-build",children:"Ready-to-build"}),"\n",(0,a.jsx)(t.p,{children:"When the ready-to-work solutions do not sufficiently meet the requirements, then consider using the OCI's various infrastructure platforms for supporting machine learning. You can choose either to use the OCI Data Science service to experiment, train, deploy, and manage your ML models, or build your own MLOps strategy using computes or the Oracle Container Engine for Kubernetes (OKE). In previous blog posts, I had demonstrated both approaches, two involving LLMs, and another, using traditional algorithms used for classification tasks."}),"\n",(0,a.jsxs)(t.p,{children:["For this post, I decided to experiment with ",(0,a.jsx)(t.a,{href:"https://www.langchain.com/",children:"LangChain"})," to do in-context learning instead of fine-tuning a LLM to score user-submitted reviews like I did in a ",(0,a.jsx)(t.a,{href:"deploy-and-use-fine-tuned-llms-in-oracle-apex",children:"previous post"}),". And instead of working with open source models from ",(0,a.jsx)(t.a,{href:"https://huggingface.co/",children:"Hugging Face"}),', I opted to use the OCI Generative AI service. A "blend" of ready-to-work and ready-to-build solutions. Here\'s a sample code to make sure things were working as hoped.']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import os\nfrom langchain_community.llms import OCIGenAI\nfrom langchain_core.prompts import ChatPromptTemplate, \\\n    FewShotChatMessagePromptTemplate\nfrom langchain_core.output_parsers import StrOutputParser\n\nsample_reviews = [\n    {\n        "review": """The machine brews tasty coffee drinks. It is also stylish \nand nice. But the sticker that warns about machine testing drove me nuts \nbecause I couldn\'t just unstick it. I tried for hours to remove it cleanly. \nEventually, soap and water and some time helped to soften the remaining sticker \npaper/glue mixture and I could peel it off with my nails.\n        """,\n        "score": 5\n    },\n    {\n        "review": """The machine is pretty, but overall hard plastic. The water \ntank and filter are easy to remove and replace. But it uses water before and \nafter each coffee, so you have to refill the water more often than I expected. \nThe noise is loud and the top cover for the coffee grains looks cheap and does \nnot break any of the sound. The strengh of the coffee is not for European \ncoffee people. I have to always use the strongest grindr and flavor and still \ndoes not taste better than a Nespresso pod (which I still have). Also, the \nproducts images in the 5400 look like a sticker. The easygo latte is the best \npiece, in my opinion, because it is easy to remove and clean. However, for the \nprice, it could overall be a better, more solid, stainless steel material. It \nis also sometimes slow to turn on, start, brew and turn off. I won\'t say it is \na bad product. It is great, but not EXCELLENT, as one would expect. Thinking \nwheter is worth keeping it or not. So just wanted to share a transparent \nreview.\n        """,\n        "score": 3\n    },\n    {\n        "review": """I\u2019ve had a love/hate relations with this machine since we \ngot it. It\u2019s loud and slow, and I really struggled to find a coffee setting I \nlike. It doesn\u2019t brew full cups unless you double them. The macchiato setting \nwas the best one\u2026..until the frother broke (2 years after purchase). It leaks \nfrom the bottom (common issue when I tried to troubleshoot) and also now the \nsteam comes from the top instead of the steamer (another common issue). No \nrepair shops close to me. To replace the lattego, it\u2019s impossible to find a \nPhilips version, and any ones I\u2019ve found that would be compatible are over \n$150! So now, I have a $1300 coffee maker that brews 3/4 cups of coffee. When \nit worked, it was maybe a 3.5 - 4 star, but I personally would never buy this \nmachine again.\n        """,\n        "score": 1\n    }\n]\n\nsample_prompt = ChatPromptTemplate.from_messages(\n    [\n        ("human", "{review}"),\n        ("ai", "{score}")\n    ]\n)\n\nfew_shot_prompt = FewShotChatMessagePromptTemplate(\n    example_prompt=sample_prompt,\n    examples=sample_reviews\n)\n\nprompt = ChatPromptTemplate.from_messages(\n    [\n        ("ai", """You are an expert at rating user reviews. Predict and \n            return only the score and nothing else."""),\n        few_shot_prompt,\n        ("human", "{review}")\n    ]\n)\n\nllm = OCIGenAI(\n    auth_type="API_KEY",\n    auth_profile=os.environ["OCI_CLI_PROFILE"],\n    model_id="meta.llama-2-70b-chat",\n    service_endpoint="https://inference.generativeai.us-chicago-1.oci.oraclecloud.com",\n    compartment_id=os.environment["COMPARTMENT_ID"],\n    model_kwargs={"temperature": 0.2, "max_tokens": 5 }\n)\n\noutput_parser = StrOutputParser()\n\nchain = prompt | llm | output_parser\n\nreviews = [\n    """Fantastic addition to the kitchen. We use it heavily everyday with zero \nissues. Easy to maintain and all parts easily available. My only wish is that \ncustom programming was more flexible and there was more manual control \nespecially regarding the steam/milk function.\n    """,\n    """Good when it works, had it 3 weeks now and fails to work more than it \ndoes. Water leaks into the drip pan all the time overflowing constantly. When \nit works its ok, but for that kind of money it should work constantly.\n    """\n]\n\nfor review in reviews:\n    response = chain.invoke({"review": review})\n    print("{review}\\n{response}\\n===".format(review=review, response=response))\n'})}),"\n",(0,a.jsx)(t.p,{children:"This generated the following outputs:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Fantastic addition to the kitchen. We use it heavily everyday with zero issues. Easy to maintain and \nall parts easily available. My only wish is that custom programming was more flexible and there was \nmore manual control especially regarding the steam/milk function.\n    \n\nAI: 4\n===\nGood when it works, had it 3 weeks now and fails to work more than it does. Water leaks into the drip \npan all the time overflowing constantly. When it works its ok, but for that kind of money it should \nwork constantly.\n    \n\nAI: 2\n===\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The results were pretty accurate for this very small proof-of-concept. If you'd like to validate, these reviews were taken from ",(0,a.jsx)(t.a,{href:"https://www.amazon.ca/Automatic-Espresso-Machine-EP5447-94/dp/B092NGG9NM",children:"this"})," Amazon product. ","\ud83d\ude09"]}),"\n",(0,a.jsxs)(t.p,{children:["In future posts, we will look at various options for operationalising LangChain applications that includes using ",(0,a.jsx)(t.a,{href:"https://accelerated-data-science.readthedocs.io",children:"Oracle Accelerated Data Science"})," (ADS) to deploy them to the OCI data science platform, and ",(0,a.jsx)(t.a,{href:"https://www.langchain.com/langserve",children:"LangServe"})," to host these applications. For now, I wanted to wrap up the initial discussion and point out that, yes, I seemed to have strayed back to using LLMs to create an automated review scoring application. Not all business problems will benefit from a GenAI-based solution, however, some might. Trying to score a review is essentially a sentiment analysis task. While the OCI language service has a pre-trained model for this task, it is limited to performing aspect-based and sentence-level analyses, while I need it it to score the review in its entirety. For results, the model returns the probabilities of whether the text is negative, mixed, neutral, or positive, but I needed it to provide a score from 1 to 5. With these factors in mind, I decided to pursue a LLM-based solution."]}),"\n",(0,a.jsx)(t.h2,{id:"ready-to-work-hol-at-apex-world-2024",children:"Ready-to-work HOL at APEX World 2024"}),"\n",(0,a.jsxs)(t.p,{children:["Unfortunately, due to conflicting commitments, I will not be able to attend the ",(0,a.jsx)(t.a,{href:"https://nloug.nl/en/events/apex-world-2024-en/",children:"NLOUG APEX WORLD 2024"}),' conference that will be held later this week, on March 21 and 22. I was privileged to have been selected to present "Build Intelligent APEX Applications Now!", and the Oracle LiveLabs workshop "',(0,a.jsx)(t.a,{href:"https://apexapps.oracle.com/pls/apex/r/dbpm/livelabs/view-workshop?wid=3728",children:"Build an Intelligent Oracle APEX Application"}),'". Both topics would have examined the ready-to-work" scenarios. Fortunately, ',(0,a.jsx)(t.a,{href:"https://helifromfinland.blog/",children:"Heli Helskyaho"})," had agreed to help deliver the hands-on-lab at the conference, so if you are interested in learning how to use Oracle's AutoML UI to train, deploy, and then perform inferences by simply calling a REST API, then you are in extremely good hands. Heli is the real expert, and I can only walk in her shadow!"]}),"\n",(0,a.jsx)(t.p,{children:"Before I end this post, I wanted to take the opportunity to thank the abstract and organising committee for their invitation this year. I sincerely hope that the Sun and Moon align better next year. I wish the organisers, presenters, and the attendees a very successful learning and networking event!"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Credits"})}),"\n",(0,a.jsxs)(t.p,{children:["Image by ",(0,a.jsx)("a",{target:"_blank",href:"https://pixabay.com/users/joe66-1341389/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4249188",children:"JAE ."})," from ",(0,a.jsx)("a",{target:"_blank",href:"https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4249188",children:"Pixabay"})]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},63757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stop-4249188_1280x720-1bd8511795426f38c0ed0f12d461dd24.jpeg"},81808:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stop-4249188_1280x720-1bd8511795426f38c0ed0f12d461dd24.jpeg"},44073:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tesla-stop-1aaf08ef48db386b5e3ec07bf8af4c8c.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);