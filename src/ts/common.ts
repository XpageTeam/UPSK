import "./forms"
import "./main-slider"
import "./textPage/text-page"

import {domReady, App, Element} from "./xpage/index"




declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function; 
    }
}

domReady(() => {

})