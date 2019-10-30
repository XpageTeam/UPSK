import {domReady, EventListener, Element, App, viewWatcher} from "./xpage/index"

domReady(() => {
	const $adv = new Element(".m-advantage"),
		$textBlock = new Element(".m-advantage-text");
	
	let curAdvantageChage: NodeJS.Timeout;

	new EventListener($adv).add("click", (el: HTMLElement) => {

		if (el.classList.contains("active"))
			return

		clearTimeout(curAdvantageChage)

		$textBlock.find(".m-advantage-text__title").removeClass("js__visible")
		$textBlock.find(".m-advantage-text__text").removeClass("js__visible")

		const $this = new Element(el);


		$adv.removeClass("active")


		curAdvantageChage = setTimeout(function(){
			const targetTitle = $this.find(".m-advantage__title").text(),
				text = $this.find(".m-advantage__text").text();

			$textBlock.find(".m-advantage-text__title").addClass("js__visible").text(targetTitle)
			$textBlock.find(".m-advantage-text__text").addClass("js__visible").text(text)

			$this.addClass("active")
		}, 300)
	})

})

domReady(() => {
	App.each(".m-advantage__img svg", (svg: SVGElement) => {
		App.each(svg.querySelectorAll("path"), (path: SVGPathElement) => {
			window.TweenLite.set(path, {
				strokeDasharray: `${path.getTotalLength()}, ${path.getTotalLength()}`,
				strokeDashoffset: path.getTotalLength().toString(),
				stroke: path.getAttribute("fill")
			})
		})
	})

	App.each(".m-advantage", (el: HTMLElement) => {
		viewWatcher(el, function(block: HTMLElement){

			App.each(block.querySelectorAll("svg path"), (path: SVGPathElement) => {
				window.TweenLite.to(path, 2, {
					strokeDashoffset: 0,
					onComplete(){
						window.TweenLite.to(path, .6, {
							fillOpacity: 1,
							stroke: "transparent"
						})
					}
				})
			})

		})
	})
})