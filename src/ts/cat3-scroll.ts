import {domReady, EventListener, settings} from "./xpage/index";

domReady(() => {
	new EventListener(".catalog3-list__table").add("scroll", (el: HTMLElement, e: Event) => {
		const {scrollTop} = e.target as HTMLElement,
			thead = el.querySelector("thead");

		if (!thead || window.matchMedia(settings.adaptiveMedia).matches)
			return

		thead.style.transform = `translate3d(0, ${scrollTop}px, 0)`
	})
})