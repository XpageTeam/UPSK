import {domReady, App} from "./xpage/index";
import {Swiper, Lazy, Navigation} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation])

domReady(() => {
	App.each(".main-partners__slider", (el: HTMLElement) => {
		new Swiper(el.querySelector(".partners-slider") as HTMLElement, {
			slidesPerView: 6,
			loop: true,
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: el.querySelector(".swiper-button-next") as HTMLElement,
			},
			lazy: {
				loadPrevNext: true
			},
			breakpoints: {
				1400: {
					slidesPerView: 5
				},
				1200: {
					slidesPerView: 4
				},
				1000: {
					slidesPerView: 3
				},
				800: {
					slidesPerView: 2
				}
			}
		})
	})

	const $body = window.get$("body");

	$body.on("mousemove", ".partners-slider .swiper-slide", function(e: MouseEvent){
		partnersSlideAnimate(window.get$(this), e)
	})

	$body.on("mouseleave", ".partners-slider .swiper-slide", function(e: MouseEvent){
		partnersSlideAnimate(window.get$(this), e)
	})
})

const partnersSlideAnimate = ($slide: any, e: MouseEvent): void => {
	const targetSlides = {
		prev: $slide.prev(".swiper-slide").find(".partner-slide")[0],
		current: $slide.find(".partner-slide")[0],
		next: $slide.next(".swiper-slide").find(".partner-slide")[0]
	};

	setScaleByCursorPos(targetSlides, e)
},

setScaleByCursorPos = (targetSlides: any, e: MouseEvent): void => {
	const partOfElement = parseInt((targetSlides.current.clientWidth / 2).toString());

	const scaleCurrent = parseFloat((e.offsetX <= partOfElement
				? e.offsetX / partOfElement
				: (targetSlides.current.clientWidth - e.offsetX) / partOfElement)
				.toFixed(2)) / 4;

	// console.log(e)

	// const scalePrev = parseFloat((e.offsetX <= partOfElement 
	// 				? partOfElement / e.offsetX 
	// 				: partOfElement / (targetSlides.current.clientWidth - e.offsetX))
	// 				.toFixed(2)) / 4;

	window.TweenLite.to(targetSlides.current.querySelector("img"), .1, {
		scale: 1 + Math.abs(scaleCurrent)
	})

	// if (e.offsetX <= partOfElement){
	// 	TweenLite.to(targetSlides.prev, .1, {
	// 		scale: 1 + scalePrev / 3
	// 	})
	// 	TweenLite.to(targetSlides.next, .1, {
	// 		scale: 1
	// 	})
	// }else{
	// 	TweenLite.to(targetSlides.next, .1, {
	// 		scale: 1 + scalePrev/ 3
	// 	})
	// 	TweenLite.to(targetSlides.prev, .1, {
	// 		scale: 1
	// 	})
	// }


}