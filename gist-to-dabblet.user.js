// ==UserScript==
// @name          Gist to dabblet
// @namespace     gist2dabblet
// @description   Add a dabblet.com link button to any gist with dabblet information
// @version       1.0.1
// @include       https://gist.github.com/*
// @author        Rob Garrison >> http://github.com/Mottie
// @icon          https://github.com/Mottie/gist-to-dabblet/raw/master/images/g2d.png
// ==/UserScript==

var main = function () {
	var dab, img, loc = window.location;
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