import $ from "jquery"

window.$ = $;
window.jQuery = $;

window.get$ = (element) => {
	return $(element)
}

require("./jquery.fancybox.js")
require("../css/jquery.fancybox.css")

document.addEventListener("DOMContentLoaded", function(){

	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		loop: true,
		buttons: ["fullscreen", "slideShow", "close"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	})
})