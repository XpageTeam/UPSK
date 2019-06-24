import $ from "jquery"
import "jquery-ui/ui/widgets/slider.js"

document.addEventListener("DOMContentLoaded", function(){
	/** Свернуть развернуть фильтр */
		$("body").on("click", ".filter__item-title", function(){
			const $this = $(this),
				$list = $this.next(".filter__item-content");

			if ($this.hasClass("js__opened")){
				$this.removeClass("js__opened")
				$list.slideUp(300)
			}else{
				// $(".filter__item-title.js__opened").removeClass("js__opened")
					// .next(".filter__item-content").slideUp(300)
				$this.addClass("js__opened")
				$list.slideDown(300)
			}
		})

	/** ul-slider Для цены в фильтре*/
		if ($(".price-filter").length){
			// require("")
		}

		$(".price-filter").each(function(){
			const $this = $(this),
				min = +$this.find(".price-min").val() || 0,
				max = +$this.find(".price-max").val() || 0,

				step = +$this.find(".price-step").val() || 0,

				curMin = +$this.find(".price-min-cur").val() || min,
				curMax = +$this.find(".price-max-cur").val() || max,

				$maxInput = $this.find(".price-min-cur"),
				$minInput = $this.find(".price-min-cur");


			$this.find(".price-filter__slider").slider({
				animate: "normal",
				min: min,
				max: max,
				values: [parseInt(curMin), parseInt(curMax)],
				range: true,
				step: step,
				slide: (e, ui) =>{
					$maxInput.val(parseInt(ui.values[0]));
					$minInput.val(parseInt(ui.values[1]));

					setMinHandle($this.find(".price-filter__slider"), parseInt(ui.values[0]))
					setMaxHandle($this.find(".price-filter__slider"), parseInt(ui.values[1]))
				}
			})

			setMinHandle($this.find(".price-filter__slider"), parseInt(curMin))
			setMaxHandle($this.find(".price-filter__slider"), parseInt(curMax))
		})
})

const partNumber = number => number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "),
	setMinHandle = ($uiSlider, count) => {
		console.log($uiSlider.find(".ui-slider-handle:nth-last-child(2)"))
		$uiSlider.find(".ui-slider-handle:nth-last-child(2)").attr("data-count", partNumber(count))
	},
	setMaxHandle = ($uiSlider, count) => {
		console.log($uiSlider.find(".ui-slider-handle:nth-last-child(1)"))
		$uiSlider.find(".ui-slider-handle:nth-last-child(1)").attr("data-count", partNumber(count))
	}