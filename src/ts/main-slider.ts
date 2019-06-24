import {Swiper, Lazy, Pagination, EffectFade, Autoplay} from 'swiper/dist/js/swiper.esm.js'
import {domReady} from "./xpage/index"

Swiper.use([Lazy, Pagination, EffectFade, Autoplay])

const autoplayDelay = 3000;

domReady(() => {
	new Swiper(".main-slider", {
		effect: 'fade',
		loop: true,
		watchSlidesProgress: true,
		lazy: {
			loadPrevNext: true,
		},
		autoplay: {
			delay: autoplayDelay,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.main-slider__bullets .swiper-pagination',
			type: 'bullets',
			clickable: true,
			progressbarOpposite: true,
			renderBullet(index: number, className: string){
				return `<div class="${className}">\
					<div style="transition-duration: ${autoplayDelay}ms" class="swiper-pagination-bullet-progress"></div>\
				</div>`;
			}
		}
	})
})