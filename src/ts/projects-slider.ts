import {domReady} from "./xpage/index";
import {Swiper, Lazy, Navigation, EffectFade, Keyboard} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation, EffectFade, Keyboard])

domReady(() => {

	if (window.matchMedia("(min-width: 1400)").matches)
		new Swiper(".mp-slider", {
			effect: "fade",
			loop: true,
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
					effect: "slide",
					slidesPerView: 3,
					spaceBetween: 20
				}
			}
		})
	else
		new Swiper(".mp-slider", {
			effect: "slide",
			loop: true,
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
			}
		})
})