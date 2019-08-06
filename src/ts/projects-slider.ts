import {domReady} from "./xpage/index";
import {Swiper, Lazy, Navigation, Keyboard} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation, Keyboard])

domReady(() => {

	const navSlider = new Swiper(".main-projects__bot .tovar-slider", {
		slidesPerView: 3,
		loop: true,
		simulateTouch: false,
		lazy: {
			loadPrevNext: true
		},
		navigation: {
			prevEl: ".mp-slider .swiper-button-prev",
			nextEl: ".mp-slider .swiper-button-next",
		},
		breakpoints: {
			1300: {
				slidesPerView: 2
			},
			700: {
				slidesPerView: 1
			}
		}
	})

	new Swiper(".mp-slider", {
		effect: "slide",
		loop: true,
		simulateTouch: false,
		navigation: {
			prevEl: ".mp-slider .swiper-button-prev",
			nextEl: ".mp-slider .swiper-button-next",
		},
		lazy: {
			loadPrevNext: true
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1100: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			660: {
				spaceBetween: 10,
				slidesPerView: 1
			}
		},
		on: {

		}
	})
})