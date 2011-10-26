(function() {

		//this js is injected into any page, based on our matches
		//inside of our manifest.json file

		// bind to keypress event
		$(document).bind('keypress', 's', window.PM.SaveColour);
})();