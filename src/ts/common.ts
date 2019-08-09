import "./forms"
import "./textPage/text-page"
import "./xpage/select"
import "./top-search"

import "./price-form"
import "./about"


import "./cat3-scroll"
import "./tovar"
import "./main-logistic"

import {domReady, App, MobileMenu, settings} from "./xpage/index"




declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function;
    	get$: Function;
    	is: any;
    }
}

domReady(() => {
	new MobileMenu({
		burger: ".head__burger",
		menu: ".mobile-menu",
		menuActiveClass: "js__opened",
		bodyActiveClass: "js__menu-opened",
		ignoreWarnings: false,
		fixBody: true,
		media: settings.adaptiveMedia
	})
})


// domReady(() => {
// 	function splitText(phrase) {
// 		let prevLetter, sentence: string[] = phrase.split(""),
// 			counter = 0;

// 	for (let val of sentence){

//       if(val === " "){
//         val = "&nbsp;";
//       }
//       var letter = $("<span/>", {
// 						  id : "txt" + counter
// 			   }).addClass('txt').html(val).appendTo(txtContainer);
	
//       	if(prevLetter) {
// 			$(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
// 		};
// 			    prevLetter = letter;
// 		    });
//     	txt = $(".txt");
// 		}
	  
// 	function buildTimeline() {
		
// 		//note this timeline uses 3D transforms which will only work in recent versions of Safari, Chrome, and FireFox. IE10 will support 3D transforms as well. All other browsers simply will not show those properties being tweened. 
		
// 		TweenLite.set(txtContainer, {css:{perspective:500}});
		
// 		const tl = new TimelineMax({onUpdate:updateUI, repeat:2, repeatDelay:1, yoyo:true});
// 		// tl.from(logo, 0.5, {left:'-=60px', ease:Back.easeOut});	
// 		tl.staggerFrom(txt, 0.4, {alpha:0}, 0.06, "textEffect");
// 		tl.staggerFrom(txt, 0.8, {rotationY:"-270deg", top:80, transformOrigin: "50% 50% -80", ease:Back.easeOut}, 0.06, "textEffect");
// 		tl.staggerTo(txt, 0.6, {rotationX:"360deg", color:"#90e500", transformOrigin:"50% 50% 10"}, 0.02);	
// 	} 
	 
// 	/* callbacks */
	
//   function updateUI() {
// 		//change slider value
//     progressSlider.slider("value", tl.progress() *100);
//     totalProgressSlider.slider("value", tl.totalProgress() *100);
		
// 		//update display of values
//     progressValue.html(tl.progress().toFixed(2));
//     totalProgressValue.html(tl.totalProgress().toFixed(2));
//     timeValue.html(tl.time().toFixed(2));
//     totalTimeValue.html(tl.totalTime().toFixed(2));
// 	  } 				  
		  	
// 	restartBtn.click(function() {
// 		//Start playing from a progress of 0.
// 		tl.restart();
// 	});
	
// 	function init() {
//     splitText("We Hope You Enjoyed the Tour");
//     buildTimeline();
// 		//show the demoBackground div after DOM is ready and all images loaded
//     TweenLite.set($("#demoBackground"), {visibility:"visible"});
//   } 	 
// 	init();
// }

// })