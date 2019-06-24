import {Swiper, Lazy, Navigation, Keyboard, Autoplay} from 'swiper/dist/js/swiper.esm.js'
import {domReady, App} from "./xpage/index"

Swiper.use([Lazy, Navigation, Keyboard, Autoplay])

domReady(() => {
	App.each(".catalog-slider", (el: any) => {
		new Swiper(el.querySelector(".catalog-slider__list"), {
			loop: true,
			slidesPerView: 4,
			watchSlidesProgress: true,
			roundLengths: true,
			spaceBetween: 21,
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev"),
				nextEl: el.querySelector(".swiper-button-next")
			},
			lazy: {
				loadPrevNext: true,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		})
	})
})