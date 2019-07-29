import {domReady, EventListener, Element} from "./xpage/index"

domReady(() => {
	const $body = new Element("body"),
		$searchInput = new Element(".top-search__inputs"),
		$topSearch = window.get$(".top-search__cont");

	new EventListener(".search-link, .top-search__close").add("click", (el: HTMLElement, event: Event) => {
		$body.toggleClass("js__search-opened")

		if ($body.hasClass("js__search-opened"))
			setTimeout(() => {
				$searchInput.getHTMLElement(0).focus()
			}, 300)

		$topSearch.slideToggle(300)

		event.preventDefault()
	})
})