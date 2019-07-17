import {domReady, App, settings} from "./xpage/index"
import partitionNumber from "./functions/partNumber"
import {TweenLite} from "gsap"

domReady(() => {
	if (!window.matchMedia(settings.adaptiveMedia).matches)
		App.each(".big-counter__text-number, .ms-counter__text b", (el: HTMLElement) => {
			let counter = {count: 0};

			el.style.width = getComputedStyle(el).width

			TweenLite.to(el, 2, {
				opacity: 1
			})		

			TweenLite.to(counter, 10, {
				count: `+=${parseInt(el.innerText.replace(" ", ""))}`,
				onUpdate(){
					el.innerText = partitionNumber(Math.ceil(counter.count))
				}
			})
		})
	else
		TweenLite.set(".big-counter__text-number, .ms-counter__text b", {
			opacity: 1
		})
})