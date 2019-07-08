import {Swiper, Lazy, Pagination, EffectFade, Autoplay} from 'swiper/dist/js/swiper.esm.js'
import {domReady} from "./xpage/index";

Swiper.use([Lazy, Pagination, EffectFade, Autoplay])

domReady(() => {
    new Swiper(".main-slider", {
        speed: 300,
        roundLengths: true,
        autoplay: true,
        effect: "fade",
        pagination: {
            el: '.main-slider__dots .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        lazy: {
            loadPrevNext: true
        }
    })
})