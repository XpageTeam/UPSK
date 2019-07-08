import $ from "jquery"

window.$ = $;
window.jQuery = $;

document.addEventListener("DOMContentLoaded", function(){
	require("./jquery.fancybox.js")
	require("../css/jquery.fancybox.css")

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