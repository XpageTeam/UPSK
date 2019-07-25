import "./main-slider"
import "./catalog-slider"
import "./main-advantages"
import "./main-partners"
import "./projects-slider"
import "./counter"

import {TweenLite} from "gsap"
import {domReady, App} from "./xpage/index"

declare global {
    interface Window {
    	animateScroll: Function; 
    	isScrolledIntoView: Function;
    	get$: Function
    }
}

window.addEventListener("load", () => {
	App.each(".region", (el: SVGGElement) => {
		new regionHover(el)
	})
})

class regionHover {
	private _mapGroup: SVGGElement
	private _mapCenter: SVGGElement
	private _mapPoints: SVGPathElement[]

	private _mapLabel: SVGRectElement

	private _horLine: SVGPathElement
	private _horLineWidth: number

	private _vertLine: SVGPathElement
	private _vertLineWidth: number

	private _lineCircle: SVGPathElement


	public animationTime: number = .3

	set mapGroup(group: SVGGElement){
		this._mapGroup = group
	}
	get mapGroup(){
		return this._mapGroup	
	}

	set mapCenter(mapCenter: SVGGElement){
		this._mapCenter = mapCenter
	}
	get mapCenter(){
		return this._mapCenter	
	}

	set mapPoints(points: SVGPathElement[]){
		this._mapPoints = points
	}
	get mapPoints(){
		return this._mapPoints	
	}

	set mapLabel(label: SVGRectElement){
		this._mapLabel = label
	}
	get mapLabel(){
		return this._mapLabel	
	}

	set horLine(line: SVGPathElement){
		this._horLine = line

		this.horLine.style.strokeDasharray = this.horLine.getTotalLength()+', '+ this.horLine.getTotalLength()
		this.horLine.style.strokeDashoffset = this.horLine.getTotalLength().toString()

		this._horLineWidth = this.horLine.getTotalLength()
	}
	get horLine(){
		return this._horLine	
	}

	set vertLine(line: SVGPathElement){
		this._vertLine = line

		this.vertLine.style.strokeDasharray = this.vertLine.getTotalLength()+', '+ this.vertLine.getTotalLength()
		this.vertLine.style.strokeDashoffset = this.vertLine.getTotalLength().toString()

		this._vertLineWidth = this.vertLine.getTotalLength()
	}
	get vertLine(){
		return this._vertLine	
	}

	set lineCircle(circle: SVGPathElement){
		this._lineCircle = circle
	}
	get lineCircle(){
		return this._lineCircle	
	}


	constructor(private map: SVGGElement){
		this.mapCenter = this.map.querySelector(".region__center")

		this.mapGroup = this.map.querySelector(".region__map > g")

		this.mapPoints = App.transformNodeListToArray(this.map.querySelectorAll(".region__map-point")) as any;
	
		this.mapLabel = this.map.querySelector(".region__label rect")

		this.horLine = this.map.querySelector(".region__line-hor")

		this.vertLine = this.map.querySelector(".region__line-vert")

		this.lineCircle = this.map.querySelector(".region__line-circle")

		
		this.setFirstStates()

		this.bindEvents()

		setTimeout(() => {
			this.map.classList.add("js__initiallized")
		}, this.animationTime)
	}

	private setFirstStates(){
		this.hideLineCircle().hideHorLine().hidePoints().hideRegion().hideCenter()
	}

	private bindEvents(){
		this.mapGroup.addEventListener("mouseover", () => {
			this.showRegion(
				() => {
					this.showPoints()
					this.showCenter()
					this.showHorLine()
					this.showVertLine(
						() => {this.showLineCircle()
					})
				})
		})

		this.mapGroup.addEventListener("mouseleave", () => {

			this.hideLineCircle(
				() => {
					this.hideHorLine()
					this.hideVertLine(
						() => {
							this.hidePoints()
							this.hideCenter(
								() => {
									this.hideRegion()
								})
						})
				})
		})

		this.mapLabel.addEventListener("mouseover", () => {
			this.showLineCircle(
				() => {
					this.showHorLine()
					this.showVertLine(
						() => {this.showRegion(
							() => {
								this.showPoints()
								this.showCenter()
							})
					})
				})
		})

		this.mapLabel.addEventListener("mouseleave", () => {
			this.hideRegion(
				() => {
					this.hidePoints()
					this.hideCenter()
					this.hideHorLine()
					this.hideVertLine(
						() => {this.hideLineCircle()
					})
				})
		})
	}

	private showLineCircle(callback: Function = () => {}): regionHover{
		TweenLite.to(this.lineCircle, this.animationTime, {
			opacity: 1,
			onComplete: callback,
			scale: 1,
			transformOrigin: "center"
		})

		return this
	}
	private hideLineCircle(callback: Function = () => {}): regionHover{
		TweenLite.to(this.lineCircle, this.animationTime, {
			opacity: 0,
			onComplete: callback,
			scale: 0,
			transformOrigin: "center"
		})

		return this
	}

	private showHorLine(callback: Function = () => {}): regionHover{
		TweenLite.to(this.horLine, this.animationTime, {
			opacity: 1,
			strokeDashoffset: 0,
			onComplete: callback,
			// transformOrigin: "center"
		})

		return this
	}
	private hideHorLine(callback: Function = () => {}): regionHover{
		TweenLite.to(this.horLine, this.animationTime, {
			opacity: 0,
			strokeDashoffset: 0,
			onComplete: callback,
			// transformOrigin: "center"
		})

		return this
	}

	private showVertLine(callback: Function = () => {}): regionHover{
		TweenLite.to(this.vertLine, this.animationTime, {
			opacity: 1,
			strokeDashoffset: 0,
			onComplete: callback,
			// transformOrigin: "center"
		})

		return this
	}
	private hideVertLine(callback: Function = () => {}): regionHover{
		TweenLite.to(this.vertLine, this.animationTime, {
			opacity: 0,
			strokeDashoffset: 0,
			onComplete: callback,
			// transformOrigin: "center"
		})

		return this
	}

	private showPoints(): regionHover{
		let counter = 0;

		for (let point of this.mapPoints){
			TweenLite.to(point, this.animationTime, {
				scale: 1,
				delay: `.${counter}`,
				transformOrigin: "center"
			})

			counter++
		}


		return this
	}

	private hidePoints(): regionHover{
		let counter = 0;

		for (let point of this.mapPoints){
			TweenLite.to(point, this.animationTime, {
				scale: 0,
				delay: `.${counter}`,
				transformOrigin: "center"
			})

			counter++
		}


		return this
	}

	private showRegion(callback: Function = () => {}): regionHover{
		TweenLite.to(this.mapGroup, this.animationTime, {
			opacity: 1,
			onComplete: callback,
			transformOrigin: "center"
		})

		return this
	}

	private hideRegion(callback: Function = () => {}): regionHover{
		TweenLite.to(this.mapGroup, this.animationTime, {
			opacity: 0,
			onComplete: callback,
			transformOrigin: "center"
		})
		
		return this
	}

	private showCenter(callback: Function = () => {}): regionHover{
		const bigCircle = this.mapCenter.querySelector("path:first-child"),
			smallCircle = this.mapCenter.querySelector("path:nth-child(2)");

		TweenLite.to(bigCircle, this.animationTime, {
			scale: 1,
			onComplete(){
				TweenLite.to(smallCircle, this.animationTime, {
					scale: 1,
					transformOrigin: "center"
				})
			},
			transformOrigin: "center"
		})

		return this
	}

	private hideCenter(callback: Function = () => {}): regionHover{
		const bigCircle = this.mapCenter.querySelector("path:first-child"),
			smallCircle = this.mapCenter.querySelector("path:nth-child(2)");

		TweenLite.to(smallCircle, this.animationTime, {
			scale: 0,
			onComplete(){
				TweenLite.to(bigCircle, this.animationTime, {
					scale: 0,
					onComplete: callback,
					transformOrigin: "center"
				})
			},
			transformOrigin: "center"
		})

		return this
	}
}