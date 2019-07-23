import {domReady, App} from "./xpage/index";
import {Swiper, Lazy, Navigation, Keyboard} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation, Keyboard])

domReady(() => {
	App.each(".about__block", (el: HTMLElement) => {
		new Swiper(el.querySelector(".personal-slider") as HTMLElement, {
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 22,
			// loop: true,
			lazy: {
				loadPrevNext: true,
				loadOnTransitionStart: true,
				loadPrevNextAmount: 6
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: el.querySelector(".swiper-button-next") as HTMLElement
			}
		})

		new Swiper(el.querySelector(".about-partners-slider") as HTMLElement, {
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 55,
			// loop: true,
			lazy: {
				loadPrevNext: true,
				loadOnTransitionStart: true,
				loadPrevNextAmount: 6
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: el.querySelector(".swiper-button-next") as HTMLElement
			}
		})
		
		new Swiper(el.querySelector(".about-advantages-slider") as HTMLElement, {
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 55,
			// loop: true,
			lazy: {
				loadPrevNext: true,
				loadOnTransitionStart: true,
				loadPrevNextAmount: 6
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			navigation: {
				prevEl: el.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: el.querySelector(".swiper-button-next") as HTMLElement
			}
		})
	})
})