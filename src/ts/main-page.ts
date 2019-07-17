import "./main-slider"
import "./catalog-slider"
import "./main-advantages"
import "./main-partners"
import "./projects-slider"
import "./counter"

declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function;
    	get$: Function
    }
}