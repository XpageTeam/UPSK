import $ from "jquery"
import is from "is_js"
import stringEffect from "./stringAnimate.js"

window.$ = $;
window.jQuery = $;
window.is = is

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

	$(".ms-text__text, .log-item__text").each((i, el) => {
		new stringEffect({
			selector: el,
		});

		el.classList.add("js__ready")
	});

})