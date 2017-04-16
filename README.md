# TWStaticBlog	

A complete plugin for exporting static blogs from TiddlyWiki:

## Overview

This plugin overrides the usual flat export functionality of TiddlyWiki with a one which provides a date based folder structure. It also provides several special tags and helper tiddlers for hiding posts/creating drafts/maintaining a sitemap etc.


## Code Changes

The code changes can be grouped into four categories:

### 1.View Template Changes

Changes which change how the exported tidders looks or add new features to the tiddler.

+ blog-subtitle.tid 
+ link-to-post.tid
+ tags.tid
+ tag-view-template.tid

### 2.Static Templates

Provides the template which exported tiddlers use when exported. 

+ static.index.html.tid
+ static.framework.html.tid
+ static.tag.html.tid
+ static.tiddler.html.tid

### 3.Export Time Javascript

Helps the exporter fix up links as we will not be using the standard flat folder export structure.

+ getexportimage.js
+ getexportlink.js
+ getexportpath.js

### 4.Helper Tiddlers

There help with several issues

