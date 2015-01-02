/*\
title: $:/plugins/tiddlywiki/welford/staticlinks.js
type: application/javascript
module-type: widget

specifies which subfolder a link will be output under, and how to link properly to them

\*/
(function() {

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var LinkWidget = require("$:/core/modules/widgets/link.js").link;


var TAG_ATTR = "tag";
var FRAMEWORK_ATTR = "framework";
var POSTS_ATTR = "posts";
var INDEX_ATTR = "index";

var BLOG_TAG = "blog";
var FRAMEWORK_TAG = "blog-framework";

var TAG_LINK_ATTR = "taglink";

var INDEX_POST = "index";

/*
======================================================
folder stucture description:
This plugin creates/facilitates the following output style

./index.html								//will have the attribute INDEX_ATTR
./[tiddlers tagged "blog-framework"].html	//will have the attribute FRAMEWORK_ATTR
./tags/autogenerated_tag_posts.html			//will have the attribute TAG_ATTR
./[year]/[month]/[day]/blogpost.html		//will have the attribute POSTS_ATTR

======================================================
*/


//Called from the rendertiddlers command
//if attr is unrecognised i take it to be a path and returns it unchanged
LinkWidget.exportFolder = function(target,attr) {
	if(attr == TAG_ATTR)
	{
		return "./tags";		
	}
	if(attr == FRAMEWORK_ATTR)
	{
		return "./";		
	}
	if(attr == POSTS_ATTR)
	{
		//return root 
		if(target == null) {
			return "./";	
		}		

		if($tw.wiki && target) {
			var tiddler = $tw.wiki.getTiddler(target);
			if(tiddler){
				var created = tiddler.fields["created"];
				var fmt_created = $tw.utils.formatDateString(created,"YYYY/MM/DD");							
				return fmt_created + "/";	
			}			
		}
		return "./"
	}
	return attr;
};

//this fixes up links from within blog posts
//the attr is defined in the static template we used via tv-subfolder-links
LinkWidget.prototype.subFolder = function(to,attr) {	
	var path_to_root="./"	

	//------------------------------------------------------
	//correcting the root location based on attribute type...
	//reference the folder stucture description above for more details

	//generic blog posts are 3 layers deep
	if(attr==POSTS_ATTR){	
		path_to_root="../../../"
	}
	//autogenerated tag posts and framework stuff go in the same place for convenience [root]/tag/...
	if(attr==TAG_ATTR){		
		path_to_root="../"			
	}
	//index.html and framework stuff are special and go in the root
	if(attr==INDEX_ATTR || attr==FRAMEWORK_ATTR){		
		path_to_root="./"	
	}

	//------------------------------------------------------
	//Using path_to_root generate the correct folder path to this post 
	//this can be based on the the presence of tags or attributes, as well as simply the link destincation

	//if we are a link to the index post....
	if(to==INDEX_POST){
		return path_to_root;
	}

	//if we are a link to a auto generated tag page
	if(this.getAttribute(TAG_LINK_ATTR)){
		return path_to_root+"tags/";
	}			
	
	//links to anything else...
	if($tw.wiki && to) {
		var tiddler = $tw.wiki.getTiddler(to);
		if(tiddler){
			//most posts will be in the usual place, but blog-framework tagged ones are in the root
			if(tiddler.fields.tags) {
				var p = tiddler.fields.tags.indexOf(FRAMEWORK_TAG);
				if(p !== -1) {
					return path_to_root;	
				}
			}
			var created = tiddler.fields["created"];
			var fmt_created = $tw.utils.formatDateString(created,"YYYY/MM/DD");							
			return path_to_root + fmt_created + "/";	
		}			
	}
	return "";
};

})();