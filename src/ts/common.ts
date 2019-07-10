import "./forms"
import "./main-slider"
import "./textPage/text-page"
import "./select"
import "./catalog-slider"

import {domReady, App, Element} from "./xpage/index"




declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function; 
    }
}