// ==UserScript==
// @name          Gist to dabblet
// @namespace     gist2dabblet
// @description   Add a dabblet.com link button to any gist with dabblet information
// @version       1.0
// @include       https://github.com/*
// @author        Rob Garrison >> http://github.com/Mottie
// ==/UserScript==

var main = function () {
	var gist, img, dab, loc = window.location;
	if ( /gist\./.test(loc.host) && $('div[id*=dabblet]').length ){
		dab = "http://dabblet.com/gist" + loc.pathname;
		img = "https://github.com/Mottie/gist-to-dabblet/raw/master/images/dabblet.png";
		$('div#repos').find('div.path').append('<a title="Open this Gist on Dabblet.com" href="' + dab + '"><img class="button" src="' + img + '"></a>');
	}
};

// Inject our main script
var script = document.createElement('script');
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);