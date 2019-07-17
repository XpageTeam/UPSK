import "./forms"
import "./textPage/text-page"
import "./xpage/select"

import "./price-form"


import "./cat3-scroll"
import "./tovar"

// import {domReady, App, Element} from "./xpage/index"




declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function;
    	get$: Function
    }
}