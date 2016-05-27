# How do we store data in the Semantic Web?
![Alternative methods to store data in the cloud)](img/SlingShotData-CloudTweaks-011.jpg) <!-- .element:  style="max-height: 45vh;" -->
---
## Identity
Uniform Resource Identifier (URI) / Internationalized Resource Identifier (IRI)
---
## URI
scheme:[//[user:password@]host[:port]][/]path[?query][#fragment] <!-- .element: class="fragment" data-fragment-index="1" --><br>
https://cloud.fuzziebrain.com/ords/beer/honey-lager <!-- .element: class="fragment" data-fragment-index="2" -->
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
person-1 ==========> Edward Sciore
</pre> <!-- .element: class="fragment" style="font-size: 1em; display: flex; justify-content: center; align-items: center; padding: 2em;" -->
---
## More Triples
<pre>
            name
book-1   ==========> Understanding Oracle
                     APEX 5 Application Development
            isbn
book-1   ==========> 978-1484209905
           author
book-1   ==========> person-1
</pre> <!-- .element: style="font-size: 1em; display: flex; justify-content: center; align-items: center; padding: 2em;" -->

Note:
* There can be more than one statement about a resource
* A resource can be an object
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
    <foaf:name>Edward Sciore</foaf:name>
  </foaf:Person>

  <schema:Book rdf:about="http://example.com/resource/book-1">
    <schema:name>Understanding Oracle APEX 5 Application Development</schema:name>
    <schema:isbn>978-1484209905</schema:isbn>
    <schema:author rdf:resource="http://example/people/person-1" />
  </schema:Book>
</rdf:RDF>
```
---
## Semantic Markup
---
### RDFa
---
### Microformats
---
### Microdata
---
### JSON-LD
---
## Facebook Open Graph Protocol
---
## Twitter Cards
---
## Odata
