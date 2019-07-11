import {domReady} from "./xpage/index";
import {Swiper, Lazy, Navigation} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation])

domReady(() => {
	new Swiper(".mp-slider", {
		effect: "fade",
		loop: true,
		navigation: {
			prevEl: ".mp-slider .swiper-button-prev",
			nextEl: ".mp-slider .swiper-button-next",
		},
		lazy: {
			loadPrevNext: true
		}
	})
})