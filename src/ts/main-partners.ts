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
			}
		})
	})
})