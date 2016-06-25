# How do we store data in the Semantic Web?
![Alternative methods to store data in the cloud)](private/img/SlingShotData-CloudTweaks-011.jpg) <!-- .element:  style="max-height: 45vh;" -->
---
## Identity
Uniform Resource Identifier (URI) / Internationalized Resource Identifier (IRI)
---
## URI
scheme:[//[user:password@]host[:port]][/]path[?query][#fragment] <br>
https://fuzziebrain.com/id/product/granville-island-cypress-honey-lager <!-- .element: class="fragment" data-fragment-index="1" -->
---
## *Cool URIs don't change*
[https://www.w3.org/Provider/Style/URI.html](https://www.w3.org/Provider/Style/URI.html)  <!-- .element: target="_blank" -->
- Design URIs to last for years <!-- .element: class="fragment" data-fragment-index="1" -->
- Avoid component names that change easily <!-- .element: class="fragment" data-fragment-index="2" -->
- "Over-organizing" <!-- .element: class="fragment" data-fragment-index="3" -->

Note:
* https://w3id.org/
* https://purl.org/
---
## Data as Triples
Subject - Predicate - Object
<pre>
            name
person-1 ==========> Harper Lee
</pre> <!-- .element: class="fragment" style="font-size: 1em; display: flex; justify-content: center; align-items: center; padding: 2em;" -->
---
## More Triples
<pre>
            name
book-1   ==========> To Kill a Mockingbird
            isbn
book-1   ==========> 978-0446310789
           author
book-1   ==========> person-1
</pre> <!-- .element: style="font-size: 1em; display: flex; justify-content: center; align-items: center; padding: 2em;" -->

---
## Common Serialization Formats
Resource Description Framework
- RDF/XML <!-- .element: class="fragment" data-fragment-index="1" -->
- Notation 3 (N3) <!-- .element: class="fragment" data-fragment-index="1" -->
- Turtle <!-- .element: class="fragment" data-fragment-index="1" -->
---
## RDF/XML
```
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:schema="http://schema.org/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/">
  <foaf:Person rdf:about="http://example.com/people/person-1">
    <foaf:name>Harper Lee</foaf:name>
  </foaf:Person>

  <schema:Book rdf:about="http://example.com/resource/book-1">
    <schema:name>To Kill a Mockingbird</schema:name>
    <schema:isbn>978-0446310789</schema:isbn>
    <schema:author rdf:resource="http://example.com/people/person-1" />
  </schema:Book>
</rdf:RDF>
```
---
## #orclapex + #semanticweb?
Semantic Markup<!-- .element: class="fragment" data-fragment-index="1" -->
---
### Microformats
http://microformats.org/
---
### Example Use of Microformats
```
....
<div class="h-resume">
  <div class="h-card">
    <h1>
      <span class="p-name">
        <span class="p-given-name">Given Name</span> <span class="p-additional-name">Additional Name</span> <span class="p-family-name">Family Name</span>
      </span>
    </h1>
    <div class="h-adr">
      <span class="p-street-address">123 Start Street</span>
      <br/>
      <span class="p-locality">Town</span>, <span class="p-region">State</span> <span class="p-postal-code">Postal Code</span> <span class="p-country-name">Country</span>
    </div>
    <div>
      Phone: <span class="p-tel">Phone</span><br/>
      Email: <a class="u-email" href="mailto:joe@blah.com">joe@blah.com</a><br/>
      Web: <a class="u-url" href="http://www.muschamp.ca">http://www.muschamp.ca</a>
    </div>
...   
```
<p>Template shared by [Andrew Muschamp](http://www.muschamp.ca/)<!-- .element: target="_blank" --> modified for microformats2.<br>Original source: http://www.muschamp.ca/OffSite/hResumeTemplate.html<!-- .element: target="_blank" --></p><!-- .element: style="font-size: 0.6em; list-style: none;" -->
---
### RDFa
http://rdfa.info/
---
### Example in RDFa
```
<div vocab="http://schema.org/" resource="#82798" typeof="Book">
  <h1 property="name">To Kill a Mockingbird</h1>
  <div>
    <dl>
      <dt>Author</dt>
      <dd property="author" typeof="Person" resource="#HarperLee">
        <span property="name">Harper Lee</span>
      </dd>
      <dt>ISBN-13</dt>
      <dd property="isbn">978-0446310789</dd>
    </dl>
  </div>
  <div property="description">
    Set in the small Southern town of Maycomb, Alabama, during the
    Depression, To Kill a Mockingbird follows three years in the life of
    8-year-old Scout Finch, her brother, Jem, and their father, Atticus...
  </div>
</div>
```

Note:
* Does not support value attribute in form input fields
---
## Demo!
https://apex.oracle.com/pls/apex/f?p=semwebapex:1:0 <!-- .element: target="_blank" -->
---
### Tools
- [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool) <!-- .element: target="_blank" -->
- [OpenLink Stuctured Data Tester](https://github.com/openlink/structured-data-sniffer)<!-- .element: target="_blank" -->
---
### Other Tools
[Bing Markup Validator](http://www.bing.com/toolbox/markup-validator)<!-- .element: target="_blank" -->
<p>
![Bing Markup Validator results](img/bing_rdfa.png)<!-- .element: style="max-height: 65vh; border: 0; box-shadow: none; padding: 0 4em; font-size: 0.6em;" -->
</p>
---
### Microdata
---
### Example in Microdata
```
<div itemscope itemtype="http://schema.org/Book" itemid="#82798">
  <h1 itemprop="name">To Kill a Mockingbird</h1>
  <div>
    <dl>
      <dt>Author</dt>
      <dd itemprop="author" itemscope itemtype="http://schema.org/Person" itemid="#HarperLee">
        <span itemprop="name">Harper Lee</span>
      </dd>
      <dt>ISBN-13</dt>
      <dd itemprop="isbn">978-0446310789</dd>
    </dl>
  </div>
  <div itemprop="description">
    Set in the small Southern town of Maycomb, Alabama, during the
    Depression, To Kill a Mockingbird follows three years in the life of
    8-year-old Scout Finch, her brother, Jem, and their father, Atticus...
  </div>
</div>
```
---
### JSON-LD
---
### Example in JSON-LD
```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@id": "#82798",
  "@type": "Book",
  "name": "To Kill a Mockingbird",
  "author": {
    "@type": "Person",
    "@id": "#HarperLee",
    "name": "Harper Lee"
  },
  "isbn": "978-0446310789",
  "description": "Set in the small Southern town of Maycomb, Alabama, during the
                  Depression, To Kill a Mockingbird follows three years in the
                  life 8-year-old Scout Finch, her brother, Jem, and their
                  father, Atticus..."
}
</script>
```

---
## Which syntax should I choose?
- Data redundancy<!-- .element: class="fragment" data-fragment-index="1" -->
- Styling<!-- .element: class="fragment" data-fragment-index="1" -->
- Tight/loose coupling<!-- .element: class="fragment" data-fragment-index="1" -->
