import "./forms"
import "./textPage/text-page"
import "./select"

// для главной
import "./main-slider"
import "./catalog-slider"
import "./price-form"
import "./projects-slider"
import "./main-advantages"

// import {domReady, App, Element} from "./xpage/index"




declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function;
    	get$: Function
    }
}