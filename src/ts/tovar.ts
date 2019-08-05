import {domReady, App} from "./xpage/index";
import {Swiper, Lazy, Navigation, Keyboard} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation, Keyboard])

domReady(() => {
	App.each(".tovar__slider-slider .tovar-slider", (el: HTMLDivElement) => {
		new Swiper(el, {
			slidesPerView: 3,
			loop: true,
			lazy: {
				loadPrevNext: true,
			},
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev") as HTMLDivElement,
				nextEl: el.querySelector(".swiper-button-next") as HTMLDivElement,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
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
	})
})