import {domReady, EventListener, Element} from "./xpage/index"

domReady(() => {
	const formToggleBtn = new Element(".mc-form__toggle"),
		hiddenInputs = new Element(".mc-form__hidden-inputs")

	new EventListener(formToggleBtn).add("click", (el: HTMLElement) => {
		formToggleBtn.toggleClass("js__opened")
		window.get$(hiddenInputs.getHTMLElement(0)).slideToggle(300)
		hiddenInputs.toggleClass("js__opened")
	})
})