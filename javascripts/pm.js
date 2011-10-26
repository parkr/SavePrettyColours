// code for saving
(function(window){
	"use strict";
	window.PM = {
		jQuery: true,
		ShouldDebug: true,
		debug: function(text, status){
			if(this.ShouldDebug){
				if(!status){
					console.log(text);
				} else if (status === "error"){
					console.error(text);
				}
			}
		}
	};
	window.PM.Init = function(){
		window.PM.jQuery = true;
		window.PM.ShouldDebug = true;
		window.PM.debug(window);
	};
	window.PM.SaveColour = function(){
		window.PM.debug("Saving PrettyColour...");
		window.PM.debug(window.getPermalink);
		var href, l, script, title;
		window.PM.debug(typeof window.getPermalink == "function");
		if (typeof window.getPermalink == "function") {
			l = window.getPermalink();
			if ( !l ) {
				alert("Hey, you forgot to select a color!");
				throw(0);
			} else {
				title = l.title;
				window.PM.debug("Sending AJAX request.");
				return jQuery.ajax({
					url: "http://parkr.me/api/colours.php",
					data: {
						action: "add",
						q: title
					},
					success: function(data) {
						window.PM.debug(data.message);
						l.title = l.title + " &#10003;";
						return true;
					},
					error: function(data) {
						window.PM.debug("Unsuccessfully added " + title, "error");
						window.PM.debug(data, "error");
						l.title = l.title + " &#10008;";
						return false;
					},
					dataType: "json"
				});
			}
		}
	}
	// Init just in case
	$(window.document).ready(function(){
		window.PM.Init();
	});
	
})(window);