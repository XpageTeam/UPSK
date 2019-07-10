import {EventListener, App} from "./xpage/index"

interface selectElement {
	render(template?: string): string
	replaceTemplateMarks(template: string): string
}

enum selectType {Single, Mutiple}
enum optionsState {opened, closed}

class select{
	private _type: selectType = selectType.Single
	private _el: HTMLSelectElement
	private _options: HTMLOptionsCollection
	private _customOptions: selectOptions


	public value: string


	set el (el: HTMLSelectElement){
		this._el = el
	}
	set options (options: HTMLOptionsCollection){
		this._options = options

		this._customOptions = new selectOptions(options)
	}



	constructor(select: string)
	constructor(select: HTMLSelectElement)
	constructor(select: any){
		if (typeof select == "string")
			this._el = App.elementsGetter(select) ? App.elementsGetter(select)[0] as HTMLSelectElement : document.createElement("select")
		else if(select instanceof HTMLSelectElement)
			this._el = select
		else{
			throw Error(`${select} is not a select.`)
			return
		}

		if (!this._el.options.length)
			return


		this.options = this._el.options

		this.createSelect()
	}

	private createSelect(){
		const fakeDiv = document.createElement("div");

		fakeDiv.innerHTML = this._customOptions.render()

		this._el.parentNode.insertBefore(fakeDiv.querySelector(".my-select__list-cont"), this._el.nextSibling)

		this.bindEvents()
	}

	private bindEvents(){
		new EventListener(this._el).add("mousedown", (el: HTMLSelectElement, e: Event) => {
			e.preventDefault()
			if (el.classList.contains("js__opened"))
				el.classList.remove("js__opened")
			else
				el.classList.add("js__opened")
		})

		new EventListener(this._el).add("focus", (el: HTMLSelectElement, e: Event) => {
			el.classList.add("js__opened")
		})

		new EventListener(this._el).add("blur", (el: HTMLSelectElement, e: Event) => {
			el.classList.remove("js__opened")
		})
	}
}



class selectOptions implements selectElement{
	private _template: string = "<div class='my-select__list-cont'><ul class='my-select__list'>%options%</ul></div>"
	private _state: optionsState = optionsState.closed


	public _optionsArray: selectOption[] = []
	public length: number = 0

	set state(newState: optionsState){
		this.state = newState
	}

	get state(): optionsState{
		return this.state
	}

	get renderedOptions(): string{
		let optionsString = "";

		for (let option of this._optionsArray)
			optionsString += ` ${option.render()}`

		return optionsString
	}

	get options(): selectOption[]{
		return this._optionsArray
	}

	constructor(private _options: HTMLOptionsCollection){
		this.length = this._options.length

		if (this.length == 0)
			return

		for (let i = 0; i < this.length; i++){
			this._optionsArray.push(new selectOption(this._options[i]))
		}
	}

	public replaceTemplateMarks(template: string): string{
		return template.replace("%options%", this.renderedOptions)
	}

	public render(template?: string): string{
		if (!template)
			return this.replaceTemplateMarks(this._template)
		else
			return this.replaceTemplateMarks(template)
	}
}

class selectOption implements selectElement{
	private _text: string
	private _template: string = "<li %attrs% class='my-select__list-option %classes%'>%text%</li>"
	private _value: string
	private _attributes: NamedNodeMap


	get text(){
		return this._text
	}

	get value(){
		return this._value
	}

	get attributes(){
		return this._attributes
	}


	constructor(private _el: HTMLOptionElement){
		this._text = this._el.text
		this._value = this._el.value

		this._attributes = this._el.attributes
	}

	private getAttrsString(): string{
		interface attrsObject {
			name: string,
			value: string
		};


		let attrsObject: attrsObject[] = [],
			attrsString = "";

		for (let i = 0; i < this.attributes.length; i++){
			attrsObject.push({
				name: this.attributes[i].localName,
				value: this.attributes[i].textContent
			})

			attrsString += ` ${attrsObject[i].name}='${attrsObject[i].value}'`
		}

		return attrsString
	}

	public replaceTemplateMarks(template: string): string{
		return template.replace("%attrs%", this.getAttrsString()).replace("%text%", this.text)
	}

	public render(template?: string): string{
		if (!template)
			return this.replaceTemplateMarks(this._template)
		else
			return this.replaceTemplateMarks(template)
	}
}


App.each("select", (el: HTMLSelectElement) => {
	new select(el)
})