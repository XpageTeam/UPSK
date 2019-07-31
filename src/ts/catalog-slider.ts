import {domReady, EventListener, Element, App} from "./xpage/index";
import {Swiper, Lazy, Navigation} from 'swiper/dist/js/swiper.esm.js'

Swiper.use([Lazy, Navigation])

let sliders: Swiper[] = []

domReady(() => {
	sliders.push(sliderInit(document.querySelector(".mc-slider__slider.active")))

	new EventListener('.slider-list__item-title').add("click", (el: HTMLElement, e: Event, i: number) => {

		if (el.closest(".slider-list__item").classList.contains("active"))
			return

		new Element(`.mc-slider__slider.active, 
			.slider-list__item.active, 
			.slider-list__item:nth-child(${i + 1}), 
			.mc-slider__slider:nth-child(${i + 1})`).toggleClass("active")


		if (!sliders[i])
			sliders[i] = sliderInit(document.querySelector(".mc-slider__slider.active"), i)
	})

	App.each(".slider-links", (el: HTMLElement, counter: number) => {
		new EventListener(el.querySelectorAll(".slider-links__item")).add("click", (el: HTMLElement, e: Event, i: number) => {
			sliders[counter].slideToLoop(i)
		})
	})
})

const sliderInit = (sliderEl: HTMLElement, sliderIndex: number = 0): Swiper => {
	if (!sliderEl)
		return

	let slider: Swiper;

	slider = new Swiper(sliderEl.querySelector(".swiper-list:not(.swiper-container-initialized)") as HTMLElement, {
		slidesPerView: 3,
		centeredSlides: true,
		loop: true,
		roundLengths: true,
		lazy: {
			loadPrevNext: true
		},
		navigation: {
			prevEl: sliderEl.querySelector(".swiper-button-prev") as HTMLElement,
			nextEl: sliderEl.querySelector(".swiper-button-next") as HTMLElement
		},
		on: {
			slideChangeTransitionStart(){
				const links = new Element(".slider-links").get(sliderIndex);

				links.find(`.slider-links__item:nth-child(${this.realIndex + 1})`)
					.addElement(links.find(".slider-links__item.active"))
					.toggleClass("active")
			}
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			1000: {
				slidesPerView: 3,
				// centeredSlides: true
			}
		}
	})

	return slider
}