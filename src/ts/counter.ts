import {settings} from "./xpage/index"
import partitionNumber from "./functions/partNumber"
import {TweenLite} from "gsap"

/** Функция запустит счётчик на выбранном элементе
 * @param el: HTMLElement - на в нём будет счётчик
 * @param time: number - время, за которое счётчик завершится
 * @param onComlete: Function - коллбек
 */
function Counter(el: HTMLElement, time: number, onComplete?: Function): void {
	if (!window.matchMedia(settings.adaptiveMedia).matches){
		let counter = {count: 0};

		el.style.width = getComputedStyle(el).width

		TweenLite.to(el, 2, {
			opacity: 1
		})		

		TweenLite.to(counter, time, {
			count: `+=${parseInt(el.innerText.replace(" ", ""))}`,
			onUpdate(){
				el.innerText = partitionNumber(Math.ceil(counter.count))
			},
			onComplete(){
				if (onComplete)
					onComplete()
			}
		})
	}else
		TweenLite.set(".big-counter__text-number, .ms-counter__text b", {
			opacity: 1
		})
}

export default Counter