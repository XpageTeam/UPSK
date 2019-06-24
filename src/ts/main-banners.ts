import {Swiper, Lazy, EffectFade, Autoplay} from 'swiper/dist/js/swiper.esm.js'
import {domReady, App} from "./xpage/index"

Swiper.use([Lazy, EffectFade, Autoplay])

domReady(() => {
	App.each(".main-banners", (el: HTMLElement) => {
		new Swiper(el, {
			effect: 'fade',
			watchSlidesProgress: true,
			lazy: {
				loadPrevNext: true,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
		})
	})
})