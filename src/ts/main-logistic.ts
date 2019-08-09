import {domReady, App, viewWatcher} from "./xpage/index"

domReady(() => {
	App.each(".log-item", (item: HTMLElement) => {
		viewWatcher(item, function(el: HTMLElement){
			el.classList.add("js__animate")
		})
	})
})