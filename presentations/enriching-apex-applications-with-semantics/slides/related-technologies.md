## Facebook Open Graph Protocol
![OGP Logo](img/Open_Graph_protocol_logo.png)<!-- .element: target="_blank" style="max-height: 50vh; border: none; box-shadow: none;" --><br>
http://ogp.me/<!-- .element: target="_blank" -->

---
### Example using OGP
```
<head>
  ...
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Book Review: To Kill a Mockingbird" />
  <meta property="og:description" content="I rate this book five stars..." />
  <meta property="og:image" content="https://fuzziebrain.com/content/img/to-kill-a-mockingbird-cover_1280x960.jpg" />
</head>
```
---
## Twitter Cards
https://dev.twitter.com/cards/getting-started<!-- .element: target="_blank" -->

---
### Card Types
1. Summary Card (deprecates Product Card)<!-- .element: class="fragment" data-fragment-index="1" -->
2. Summary Card with Large Image (deprecates Photo and Gallery Cards) <!-- .element: class="fragment" data-fragment-index="2" -->
3. App Card <!-- .element: class="fragment" data-fragment-index="3" -->
4. Player Card <!-- .element: class="fragment" data-fragment-index="4" -->

---
### Example using Twitter Cards
```
<head>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@fuzziebrain" />
  <meta name="twitter:title" content="To Kill a Mockingbird" />
  <meta name="twitter:description" content="Set in the small Southern town of Maycomb, Alabama, during the Depression, To Kill a Mockingbird follows three years in the life 8-year-old Scout Finch, her brother, Jem, and their father, Atticus..." />
  <meta name="twitter:image" content="https://fuzziebrain.com/content/img/to-kill-a-mockingbird-cover_1280x960.jpg" />
</head>
```
---
## Real World Examples
The APEXpress Weekly by [@RoelH](https://twitter.com/RoelH)<br>
http://paper.li/RoelH/1333719828<!-- .element: target="_blank" -->
---
### OGP
![APEXpress Weeklylink rendered in Facebook](img/fb_apexpress_weekly.png)<!-- .element: style="max-height: 30vh; border: none; box-shadow: none;" -->
```
<head>
  ...
  <meta content="The APEXpress Weekly" property="og:title" />
  <meta content="The APEXpress Weekly, by Roel Hartman: all the greatest and latest Oracle APEX news" property="og:description" />
  <meta content="paper_li:newspaper" property="og:type" />
  <meta content="http://paper.li/RoelH/1333719828" property="og:url" />
  <meta content="http://d197nsfq0bri0.cloudfront.net/images/fb-post-logo-new.png" property="og:image" />
  <meta content="paper.li" property="og:site_name" />
  <meta content="362293833600" property="fb:app_id" />
  <meta content="en_US" property="og:locale" />
  <meta content="en_US" property="og:locale:alternate" />
  ...
  <meta content="pt_PT" property="og:locale:alternate" />
</head>
```
---
### Twitter Cards
![APEXpress Weekly link rendered in Twitter](img/twitter_apexpress_weekly.png)<!-- .element: style="max-height: 40vh; border: none; box-shadow: none;" -->
```
<head>
  ...
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="Version 3.0 of the Select2 APEX plugin is out" name="twitter:title" />
  <meta content="apexplained.wordpress.com After a bit of a delay, I have finally released version 3.0 of the Select2 APEX plugin. This new version is based on the very latest version of the Select2 jQuery plugin (v4.0.3 on the moment of wr..." name="twitter:description" />
  <meta content="https://secure.gravatar.com/blavatar/add1ba1fe8f811eb48b0302ed6230cb9?s=200&amp;ts=1465077647" name="twitter:image" />
</head>
```
