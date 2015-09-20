/*\
title: $:/plugins/welford/twstaticblog/export/get-export-path.js
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
	var sanitized_title = title.replace(/([^a-z0-9]+)/gi, '-');
	var pathparam = this.params[2];
	if(pathparam == "tags"){
		return ("./tags/"+ sanitized_title).toLocaleLowerCase();
	}
	if(pathparam == "framework"){
		return ("./"+ sanitized_title).toLocaleLowerCase();
	}
	var tiddler = $tw.wiki.getTiddler(title);	
	if(pathparam == "posts" && tiddler){
		var created = tiddler.fields["created"];

		//KEEP THIS AND GET EXPORT LINK IN SYNC

		//create iso string gives us something like '2012-11-04T14:51:06.157Z'...split on T then on - to get out the data that we desire
		var tmp = created.toISOString().split("T")[0];
		var ymd = tmp.split("-");
		var fmt_created = ymd[0] + "/" + ymd[1] + "/" + ymd[2] + "/";

		//var fmt_created = $tw.utils.formatDateString(created,"YYYY/MM/DD/"); //this gives us local time, useless if we are exporting from different computers!

		return (fmt_created + sanitized_title).toLocaleLowerCase();
	}
	return null;
};

})();