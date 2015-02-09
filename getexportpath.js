/*\
title: $:/plugins/tiddlywiki/welford/staticlinks/get-export-path.js
type: application/javascript
module-type: macro
returns the folder a tiddler should be output to 
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";


/*
Information about this macro
*/

exports.name = "tv-get-export-path";

exports.params = [
	{title: ""}
];

/*
Run the macro
*/
exports.run = function(title) {
	var pathparam = this.params[2];
	if(pathparam == "tags"){
		return ("./tags/"+ encodeURIComponent(title)).toLocaleLowerCase();
	}
	if(pathparam == "framework"){
		return ("./"+ encodeURIComponent(title)).toLocaleLowerCase();
	}
	var tiddler = $tw.wiki.getTiddler(title);	
	if(pathparam == "posts" && tiddler){
		var created = tiddler.fields["created"];
		var fmt_created = $tw.utils.formatDateString(created,"YYYY/MM/DD/");
		return (fmt_created + encodeURIComponent(title)).toLocaleLowerCase();
	}
	return null;
};

})();