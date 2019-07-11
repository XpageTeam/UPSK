import {domReady, EventListener, Element} from "./xpage/index"

domReady(() => {
	const $adv = new Element(".m-advantage"),
		$textBlock = new Element(".m-advantage-text");

	new EventListener($adv).add("click", (el: HTMLElement) => {

		if (el.classList.contains("active"))
			return

		const $this = new Element(el);

		const targetTitle = $this.find(".m-advantage__title").text(),
			text = $this.find(".m-advantage__text").text();

		$textBlock.find(".m-advantage-text__title").text(targetTitle)
		$textBlock.find(".m-advantage-text__text").text(text)

		$adv.removeClass("active")

		$this.addClass("active")
	})

})