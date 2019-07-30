import "./main-slider"
import "./catalog-slider"
import "./main-advantages"
import "./main-partners"
import "./projects-slider"
import "./counter"


import {domReady, App} from "./xpage/index"
import Counter from "./counter"
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
	})

	App.each(".ms-counter__text b", (el: HTMLElement) => {
		Counter(el, 5)
	})
})