import "./main-slider"
import "./catalog-slider"
import "./main-partners"
import "./counter"


import {domReady, App} from "./xpage/index"
import Counter from "./counter"
import {TweenLite, Linear} from "gsap"
import regionHover from "./regionHover"


declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function;
    	get$: Function
    }
}

window.addEventListener("load", () => {
	let regions: Array<regionHover> = [];

	App.each(".region", (el: SVGGElement, i:number) => {
		regions.push(new regionHover(el, i))
	})
})

domReady(() => {
	Counter(App.getElement(".big-counter__text-number"), 10, function(){
		document.querySelector(".big-counter").classList.add("js__animate")

		// const animate = () => {
		// 	TweenLite.to(".big-counter__svg", 10, {
		// 		rotation: -360,
		// 		ease: Linear.easeNone,
		// 		onComplete(){
		// 			TweenLite.set(".big-counter__svg", {
		// 				rotation: 0
		// 			})
		// 			animate()
		// 		}
		// 	})
		// }

		// animate()
	})

	// App.each(".ms-counter__text b", (el: HTMLElement) => {
	// 	Counter(el, 5)
	// })
})