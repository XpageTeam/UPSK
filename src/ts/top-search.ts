import {domReady, EventListener, Element} from "./xpage/index"

domReady(() => {
	const $body = new Element("body"),
		$topSearch = window.get$(".top-search__cont");

	new EventListener(".search-link, .top-search__close").add("click", (el: HTMLElement, event: Event) => {
		$body.toggleClass("js__search-opened")

		$topSearch.slideToggle(300)

		event.preventDefault()
	})
})