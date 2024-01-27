"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[7837],{11573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const o={title:"GenAI Made Easy",description:"Oracle Generative AI is now generally available. In this blog post, let's look at what it takes to integrate the service in an Oracle APEX application.",image:"./assets/robot-domination.png",tags:["machine learning","oci","oracle apex","generative ai","large language model","llm"],categories:["Technology"],authors:["fuzziebrain"],date:new Date("2024-01-24T22:05:00.000Z")},i=void 0,r={permalink:"/content/genai-made-easy",source:"@site/posts/genai-made-easy/index.md",title:"GenAI Made Easy",description:"Oracle Generative AI is now generally available. In this blog post, let's look at what it takes to integrate the service in an Oracle APEX application.",date:"2024-01-24T22:05:00.000Z",formattedDate:"January 24, 2024",tags:[{label:"machine learning",permalink:"/content/tags/machine-learning"},{label:"oci",permalink:"/content/tags/oci"},{label:"oracle apex",permalink:"/content/tags/oracle-apex"},{label:"generative ai",permalink:"/content/tags/generative-ai"},{label:"large language model",permalink:"/content/tags/large-language-model"},{label:"llm",permalink:"/content/tags/llm"}],readingTime:12.31,hasTruncateMarker:!0,authors:[{name:"Adrian Png",title:"Senior Cloud Solutions Architect @ Insum",url:"https://github.com/fuzziebrain",imageURL:"https://github.com/fuzziebrain.png",key:"fuzziebrain"}],frontMatter:{title:"GenAI Made Easy",description:"Oracle Generative AI is now generally available. In this blog post, let's look at what it takes to integrate the service in an Oracle APEX application.",image:"./assets/robot-domination.png",tags:["machine learning","oci","oracle apex","generative ai","large language model","llm"],categories:["Technology"],authors:["fuzziebrain"],date:"2024-01-24T22:05:00.000Z"},unlisted:!1,nextItem:{title:"A Yearful of AI But What's Next?",permalink:"/content/a-yearful-of-ai-but-whats-next"}},l={image:n(76852).Z,authorsImageUrls:[void 0]},c=[{value:"First, What You Need to Know...",id:"first-what-you-need-to-know",level:2},{value:"The Playground",id:"the-playground",level:2},{value:"The REST APIs",id:"the-rest-apis",level:2},{value:"Parting Words",id:"parting-words",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{ScheduleDiscoveryCall:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ScheduleDiscoveryCall",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Photo of a robot ruling the planet.",src:n(71870).Z+"",width:"1280",height:"720"})}),"\n",(0,a.jsxs)(t.p,{children:["A new year, a new product! Yesterday, Oracle ",(0,a.jsx)(t.a,{href:"https://www.oracle.com/news/announcement/oracle-announces-availability-oci-generative-ai-service-2024-01-23/",children:"announced"})," the general availability of the OCI Generative AI (GenAI) service. In my final blog post last year, I briefly looked at the beta information that was available to the public, and suggested how you can quite easily add powerful GenAI capability in ",(0,a.jsx)(t.a,{href:"https://apex.oracle.com",children:"Oracle APEX"})," applications by calling the REST APIs using ",(0,a.jsx)(t.code,{children:"APEX_WEB_SERVICE"}),". With the service in GA, I am now finally able to take a deeper dive and hopefully, help you get started."]}),"\n",(0,a.jsx)(t.h2,{id:"first-what-you-need-to-know",children:"First, What You Need to Know..."}),"\n",(0,a.jsx)(t.p,{children:"The GenAI service is the newest of Oracle's portfolio of AI-focused OCI offerings. At this time, the service is only available in the US Midwest (Chicago) region. If you aren't already subscribed to this region, you can easily do this through the OCI Console. If you are on a trial account, and Chicago's not your home region, you might have to request for a service limit increase. In my personal experience, it can be an uphill task."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"IMPORTANT UPDATE"})}),"\n",(0,a.jsxs)(t.p,{children:["Please ignore the following discussion on costs. Thanks to Wendy at Oracle for pointing out, as-of 27-JAN-2024, the OCI cost estimator has not been updated to correctly reflect the pricing model. You can get the current price list from ",(0,a.jsx)(t.a,{href:"https://www.oracle.com/artificial-intelligence/pricing/",children:"here"}),'. The "transactions" in the price list translates to "characters". At the end of the month, all the characters across all models and requests are tallied and you\'re charged accordingly.']}),"\n",(0,a.jsx)(t.p,{children:"At the moment, here are the prices for the four available models:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Model"}),(0,a.jsx)(t.th,{children:"Cost per 10K transactions (CAD)"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Cohere (small)"}),(0,a.jsx)(t.td,{children:"0.0052424"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Cohere (large)"}),(0,a.jsx)(t.td,{children:"0.02870214"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Llama2-70"}),(0,a.jsx)(t.td,{children:"0.019659"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Embedding"}),(0,a.jsx)(t.td,{children:"0.0013106"})]})]})]}),"\n"]}),"\n",(0,a.jsxs)("strike",{children:["Unlike many of the Oracle AI services like Language, Vision, and Speech, costs of this service is not based solely on API calls. It is a combination of the serving mode, number of requests, the model used, and the length of both inputs and outputs. The ",(0,a.jsx)(t.a,{href:"https://www.oracle.com/cloud/costestimator.html",children:"OCI Cost Estimator"}),' is your "goto" website for estimating your costs, but here\'s a quick breakdown of each available model.']}),"\n",(0,a.jsx)("strike",{children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Model"}),(0,a.jsx)(t.th,{children:"Cost (CAD)"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Cohere (small)"}),(0,a.jsx)(t.td,{children:"0.05"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Cohere (large)"}),(0,a.jsx)(t.td,{children:"0.26"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Llama2-70"}),(0,a.jsx)(t.td,{children:"0.18"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Embedding"}),(0,a.jsx)(t.td,{children:"0.01"})]})]})]})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)("strike",{children:"Rates are based on 1 request with an input and output length of 1."})," If you're familiar with other similar GenAI services, I believe this is akin to tracking input and output tokens. To track my costs, I would think of adding a table to store the input and output lengths of each request. Thereafter, it would be a fairly trivial task to understand and forecast your usage, and hey, maybe even bill your customers. ","\ud83d\ude09"]}),"\n",(0,a.jsxs)(t.p,{children:["You could also monitor your usage and costs using the OCI Cost Analysis tool. Filtering on the service ",(0,a.jsx)(t.code,{children:"GENERATIVE_AI"}),", you will find that each model's usage and costs are tracked separately."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Example of GenAI usage in OCI Cost Analysis.",src:n(15540).Z+"",width:"2560",height:"1440"})}),"\n",(0,a.jsx)(t.p,{children:"To use the service, either you are an OCI administrator, or belong to an IAM (Identity and Access Management) group that has been granted access to the service. An IAM policy with the following statement should do the trick."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"allow group <group-name> to manage generative-ai-family in compartment <compartment-name>\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(t.p,{children:["For the purpose of calling the GenAI inference tasks, I have found that the verb ",(0,a.jsx)(t.em,{children:"use"})," is probably sufficient. Just a habit of providing the least privileges."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"allow group <group-name> to use generative-ai-family in compartment <compartment-name>\n"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"the-playground",children:"The Playground"}),"\n",(0,a.jsx)(t.p,{children:"This allows you to access the GenAI playground where you can try out the different tasks and models. Like many of its competitors, through the user interface, you can modify various parameters that influences the resulting text."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The OCI Generative AI Playground.",src:n(34664).Z+"",width:"2560",height:"1440"})}),"\n",(0,a.jsx)(t.p,{children:'It\'s a great starting place to explore concepts, and test your prompts. For example, using the playground, I could see how one-shot learning might help with generating a response given a "fill in the blanks" question.'}),"\n",(0,a.jsx)(t.p,{children:"Here's a prompt without seeding any examples:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"A bus has ___ seats.\n"})}),"\n",(0,a.jsx)(t.p,{children:"The generated output is:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"There is no definitive answer to this question as it could depend on several factors such as the type of bus, the model and the manufacturer. However, I can provide you with some information on the average number of seats you would typically find on a bus.\n\nTypically, a standard bus would have around 30 to 50 seats. However, school buses tend to have more seats. They can typically accommodate around 48 to 80 passengers, depending on the size of the bus. Shuttle buses, on the other hand, tend to have fewer seats to provide more space for luggage. Airport shuttle buses can have seats for as few as 12 passengers up to around 30 passengers.\n\nIt's also important to note that the number of seats in a bus can be influenced by local regulations and standards. For example, buses operating in North America must comply with Federal Motor Vehicle Safety Standards, which set specific requirements for the number of seats and the space between them to ensure passenger safety.\n\nIn summary, the number of seats on a bus can vary widely depending on the type of bus and regulatory standards. While a typical bus may have around 30 to 50 seats, school and shuttle buses can have fewer or more seats depending on their intended use.\n"})}),"\n",(0,a.jsx)(t.p,{children:"Not what I had expected. Let's try that by infusing one example question and response:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Input:\nA car has ___ wheels.\n\nOutput:\n4\n===\nInput:\nA bus has ___ seats.\n\nOutput:\n"})}),"\n",(0,a.jsx)(t.p,{children:"This time, the model returns:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"50\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Perfect! Now I know how I should construct my prompt in the ",(0,a.jsx)(t.em,{children:"kidz quiz"})," application! ","\ud83d\ude09"]}),"\n",(0,a.jsx)(t.h2,{id:"the-rest-apis",children:"The REST APIs"}),"\n",(0,a.jsxs)(t.p,{children:['In some cases, users may find it necessary to fine-tune a foundation model to generate more relevant responses. This is a highly compute intensive task that often requires a GPU compute cluster to complete the learning process within the 21st century. I won\'t go into details in this post except to say that users can provision dedicated "AI" clusters to train and host models. And it looks like the product development team made a good decision to split the inference and management APIs into two different categories: ',(0,a.jsx)(t.em,{children:"Generative AI Service Inference API"})," and ",(0,a.jsx)(t.em,{children:"Generative AI Service Management API"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Let's delve into the inference APIs that provide us the same set of tasks that was discussed in the ",(0,a.jsx)(t.a,{href:"/content/a-yearful-of-ai-but-whats-next",children:"previous writeup"}),". The first thing to note is that the endpoint URL is now ",(0,a.jsx)(t.code,{children:"https://inference.generativeai.us-chicago-1.oci.oraclecloud.com"}),'. The inputs and outputs have also changed from what was in the beta documentation, so please ignore almost everything that I wrote in the last post about them. "Almost" because the methodology remains unchanged.']}),"\n",(0,a.jsxs)(t.p,{children:["Let's look at the ",(0,a.jsx)(t.em,{children:"GenerateTextResult"})," task/action for starters. When the GenAI service was first announced at Oracle CloudWorld 2023, the general expectation was that only ",(0,a.jsx)(t.a,{href:"https://cohere.ai",children:"Cohere"})," models were supported. So, it was a pleasant surprise that we now also have Meta's ",(0,a.jsx)(t.a,{href:"https://ai.meta.com/llama/",children:"Llama2"})," 70B parameter model available for text generation tasks."]}),"\n",(0,a.jsx)(t.p,{children:"As a reminder, there are currently three capabilities that the GenAI supports:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Text generation"}),"\n",(0,a.jsx)(t.li,{children:"Text summarization; and"}),"\n",(0,a.jsx)(t.li,{children:"Text embeddings"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["To see a full list of supported pretrained models, and if you can afford it, custom models, go to the playground, look for the button ",(0,a.jsx)(t.em,{children:"View model details"}),", and click it. There's an API for it, but why bother. ","\ud83d\ude09"," You should find the list of model names (labelled ",(0,a.jsx)(t.em,{children:"1"})," in the diagram) and OCIDs (",(0,a.jsx)(t.em,{children:"2"}),"), either of which you will need to invoke the REST APIs, so take a note of them."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Available model details.",src:n(88953).Z+"",width:"2560",height:"1440"})}),"\n",(0,a.jsx)(t.p,{children:"For my quick demo, I'm going to use the Llama2 model, and if you're familiar with its usage, there are certain terms and conditions that you need to agree to. You'll see this when you switch the model in the playground the first time."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Aggreement to the terms of use for Llama2 is required.",src:n(91295).Z+"",width:"2560",height:"1440"})}),"\n",(0,a.jsx)(t.p,{children:"My goal is to replace the marketing folks at the company I work at, Contoso Food Enterprises Inc. Sales is plummeting, and recently, we have resorted to offering 50% discounts on expiring food products that we were selling at the stores. We need urgent help from GenAI. My goal is to generate product descriptions that make them compelling to buy. After a few trials with the GenAI playground, I settled on this prompt:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Task:\n- You are a creative writer. Using the production information provided, write a product description that will increase product sales.\n- Use a maximum of 250 words.\n\nProduct Information:\nName - {{PRODUCT_NAME}}\nPrice - ${{PRICE}}\nComments - {{COMMENTS}}\n\nProduct Description:\n\n===\n"})}),"\n",(0,a.jsx)(t.p,{children:"And then created this app:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Demo application to replace marketing types.",src:n(34063).Z+"",width:"2560",height:"1440"})}),"\n",(0,a.jsxs)(t.p,{children:["I assume that you're an expert Oracle APEX developer, so there's no need for me to get GenAI to help me write a few paragraphs here on how to get started on creating an application, page, add page items, buttons, and then a page process to call the endpoint and parse the results. You will need to an OCI web credential, and if you are not familiar with doing that, shameless plug, I highly recommend checking out my Oracle LiveLabs ",(0,a.jsx)(t.a,{href:"https://apexapps.oracle.com/pls/apex/r/dbpm/livelabs/view-workshop?wid=3558",children:"workshop"})," on using OCI Object Storage with Oracle APEX. There are detailed instructions on setting up an IAM user, group, generating API keys, and then finally creating the web credentials. Just remember to add the required IAM policy to allow this user to use the GenAI services."]}),"\n",(0,a.jsx)(t.p,{children:"I've masked some of the important variables that are unique to your setup, so please, create the necessary substitution strings and replace them with the values."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plsql",children:"declare\n  c_prompt_template varchar2(32767) := trim(q'[\nTask:\n- You are a creative writer. Using the production information provided, write a product description that will increase product sales.\n- Use a maximum of 250 words.\n\nProduct Information:\nName - {{PRODUCT_NAME}}\nPrice - ${{PRICE}}\nComments - {{COMMENTS}}\n\nProduct Description:\n\n===\n  ]');\n\n  l_prompt varchar2(32767);\n  l_response clob;\n  l_results json_object_t;\n  l_product_description varchar2(32767);\nbegin\n  -- Prepare your prompt with the page item values on your page.\n  l_prompt := regexp_replace(\n    regexp_replace(\n      regexp_replace(c_prompt_template, '{{PRODUCT_NAME}}', :P2_PRODUCT_NAME)\n      , '{{PRICE}}', :P2_PRICE\n    )\n    , '{{COMMENTS}}', :P2_COMMENTS\n  );\n\n  apex_web_service.g_request_headers(1).name := 'Content-Type';\n  apex_web_service.g_request_headers(1).value := 'application/json';\n\n  -- Call the appropriate endpoint, delivering the JSON-formatted payload\n  -- as required.\n  l_response := apex_web_service.make_rest_request(\n    p_url => :G_ENDPOINT_URL || '/20231130/actions/generateText'\n    , p_http_method => 'POST'\n    , p_body => json_object(\n        key 'compartmentId' value :G_COMPARTMENT_OCID\n        , key 'inferenceRequest' value json_object(\n            key 'prompt' value apex_escape.json(l_prompt)\n            , key 'maxTokens' value 400\n            , key 'isStream' value false\n            , key 'numGenerations' value 1\n            , key 'runtimeType' value 'LLAMA'\n            , key 'frequencyPenalty' value 0\n            , key 'presencePenalty' value 0\n            , key 'temperature' value 0.5\n            , key 'topP' value 0.75\n            , key 'topK' value -1\n            , key 'stop' value json_array('===')\n        )\n        , key 'servingMode' value json_object(\n            key 'servingType' value 'ON_DEMAND'\n            -- For the modelId, we could use its name \"meta.llama-2-70b-chat\".\n            , key 'modelId' value 'ocid1.generativeaimodel.oc1.us-chicago-1.amaaaaaask7dceyai3pxxkeezogygojnayizqu3bgslgcn6yiqvmyu3w75ma'\n        )\n    )\n    , p_credential_static_id => :G_OCI_CREDENTIALS\n  );\n\n  -- Parse the JSON-formatted response\n  l_results := json_object_t.parse(l_response);\n\n  -- Replace those nasty \"\\n\"\n  l_product_description := treat(l_results.get_object('inferenceResponse')\n    .get_array('choices').get(0) as JSON_OBJECT_T).get_string('text');\n\n  -- That's it. Display the results.\n  :P2_PRODUCT_DESCRIPTION := regexp_replace(l_product_description, '\\\\n', '<br/>');\nend;\n"})}),"\n",(0,a.jsx)(t.p,{children:"The JSON payload that we send to the endpoint would look like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"compartmentId": "<compartment-ocid>",\n\t"inferenceRequest": {\n\t\t"prompt":"\\005C\\005CnTask:\\005C\\005Cn- You are a creative writer. Using the production information provided, write a product description that will increase product sales. \\005C\\005Cn- Use a maximum of 250 words.\\005C\\005Cn\\005C\\005CnProduct Information:\\005C\\005CnName - Musang King Durian\\005C\\005CnPrice - $120\\005C\\005CnComments - Durians are tasty and smell great. They are fruits that have fibre content, vitamins, and essential minerals.\\005C\\005Cn\\005C\\005CnProduct Description:\\005C\\005Cn\\005C\\005Cn===\\005C\\005Cn",\n\t\t"maxTokens": 400,\n\t\t"isStream": false,\n\t\t"numGenerations": 1,\n\t\t"runtimeType": "LLAMA",\n\t\t"frequencyPenalty": 0,\n\t\t"presencePenalty": 0,\n\t\t"temperature": 0.5,\n\t\t"topP": 0.75,\n\t\t"topK": -1,\n\t\t"stop": [\n\t\t\t"==="\n\t\t]\n\t},\n\t"servingMode": {\n\t\t"servingType": "ON_DEMAND",\n\t\t"modelId": "ocid1.generativeaimodel.oc1.us-chicago-1.amaaaaaask7dceyai3pxxkeezogygojnayizqu3bgslgcn6yiqvmyu3w75ma"\n\t}\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Note that the text generation task supports both Cohere and Llama2 models. The ",(0,a.jsx)(t.code,{children:"inferenceRequest"})," is an element of type ",(0,a.jsx)(t.code,{children:"LlmInferenceRequest"}),", and it has two subtypes: ",(0,a.jsx)(t.code,{children:"CohereLlmInferenceRequest"})," and ",(0,a.jsx)(t.code,{children:"LlamaLlmInferenceRequest"}),". They have similar but not the same set of attributes, so pay attention to those, and refer to the documentation for details on each parameter that you can tweak."]}),"\n",(0,a.jsxs)(t.p,{children:["Similarly, the text generation results as an ",(0,a.jsx)(t.code,{children:"inferenceResponse"})," attribute that is of type ",(0,a.jsx)(t.code,{children:"LlmInferenceResponse"}),", and it has subtypes for both Cohere and Llama2 responses."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n\t"modelId": "ocid1.generativeaimodel.oc1.us-chicago-1.amaaaaaask7dceyai3pxxkeezogygojnayizqu3bgslgcn6yiqvmyu3w75ma",\n\t"modelVersion": "1.0",\n\t"inferenceResponse": {\n\t\t"runtimeType": "LLAMA",\n\t\t"created": "2024-01-25T03:57:33.985Z",\n\t\t"choices": [\n\t\t\t{\n\t\t\t\t"index": 0,\n\t\t\t\t"text": "\\\\nExperience the richness of Malaysia\'s most popular durian, Musang King Durian. With its creamy texture and sweet, savory flavor, this fruit is a favorite among durian lovers. Not only does it taste great, but it also has numerous health benefits. The fibre content helps with digestion, while the vitamins and essential minerals boost your immune system. \\\\n\\\\nBut what really sets Musang King Durian apart is its unique aroma. The moment you open the box, you\'ll be greeted by a delicious, pungent smell that will fill the air. It\'s a smell that\'s both familiar and exciting, reminding you of the lush rainforests of Malaysia. \\\\n\\\\nDon\'t settle for less, choose the best. Musang King Durian is the perfect choice for any occasion. Whether you\'re enjoying it on your own or sharing it with friends and family, this durian will leave you wanting more. And at just $120, it\'s an affordable luxury that\'s hard to resist. \\\\n\\\\nSo why wait? Order your Musang King Durian today and experience the richness of Malaysia\'s most beloved fruit. Treat your taste buds to a culinary adventure that they\'ll never forget. Order now and get ready to indulge in the creamy, sweet, and savory goodness of Musang King Durian.",\n\t\t\t\t"finishReason": "stop"\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"And the outcome? Hordes of people buying durians from Contoso Food Enterprises Inc.!"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Demo showing output from the GenAI service.",src:n(76860).Z+"",width:"2560",height:"1440"})}),"\n",(0,a.jsxs)(t.p,{children:["But hey, there's just ",(0,a.jsx)(t.strong,{children:"NO WAY"})," this app's going to replace any human in marketing. They are one of my most favourite people to work with. ","\ud83d\ude04"," Authentic creativity results from unique personalities and experiences."]}),"\n",(0,a.jsx)(t.h2,{id:"parting-words",children:"Parting Words"}),"\n",(0,a.jsxs)(t.p,{children:["It's 2024, and demo apps like these aren't newsworthy anymore, and definitely not as cool as Michelle Skamene's ",(0,a.jsx)(t.a,{href:"https://www.laureston.ca/2023/01/17/building-a-chatgpt-application-with-oracle-apex-in-record-time/",children:"meal planning app"}),". However, it is important to demonstrate that for an Oracle technology professional, we now have a cloud-native, easy-to-use AI-powered service to create digital transformative solutions on our favourite ecosystem, the Oracle Cloud, and of course, Oracle APEX."]}),"\n",(0,a.jsx)(t.p,{children:"What will you build tomorrow?"}),"\n",(0,a.jsx)(t.p,{children:"As always, if you are interested to discuss your unique business challenge, please reach out to me by booking a time slot."}),"\n",(0,a.jsx)(o,{}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Credits"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Banner image generated using Stability AI's ",(0,a.jsx)(t.a,{href:"https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",children:"Stable Diffusion"})," model."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},76852:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/robot-domination-69195ba4bc7ab5e002c74fe58d729f3c.png"},15540:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cost-analysis-826088a79b4e981c814922dee8fd4d40.png"},34063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generate-text-inputs-724caeb48f77a6a188af1572c6609819.png"},76860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generate-text-outputs-5a55bf52918825e3e43057c311b815ca.png"},34664:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generative-ai-playground-4ff1ea723aef59b92e2a8952bf21fb48.png"},91295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/llama2-agreement-4e8f7ed9c7ee0b0dc15241adfdb52eac.png"},88953:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/model-details-96892595834ab21606046e3c8f7e7219.png"},71870:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/robot-domination-69195ba4bc7ab5e002c74fe58d729f3c.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);