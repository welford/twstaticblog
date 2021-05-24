# TWStaticBlog	

## Overview

A complete plugin (in two parts) for exporting static blogs from TiddlyWiki:

These plugins overrides the usual flat export functionality of TiddlyWiki with a one which provides a date based folder structure. It also provides several configurable tags and helper tiddlers for hiding posts/creating drafts/maintaining a sitemap etc.

See the ./example folder for a working example and detailed explanation on these plugins

### 1. Helper Plugin

Included in your tiddlywiki, lets you customize what is an is not output. See /examples/example.html for full details

### 2. Export Plugin

Included in a temporary TW during export. Helps the exporter fix up links as we will not be using the standard flat folder export structure. the important files being:

+ getexportimage.js
+ getexportlink.js
+ getexportpath.js

## Examples

see http://welford.github.io/twstaticblog/example/index.html which exports to:

http://welford.github.io/twstaticblog/example/blog-basic/index.html 

or

http://welford.github.io/twstaticblog/example/blog-styled/index.html
