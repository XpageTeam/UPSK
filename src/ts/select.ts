import {EventListener, App} from "./xpage/index"

enum selectType {Single, Mutiple}

class select{
	private _type: selectType = selectType.Single
	private _el: HTMLSelectElement

	constructor(select: string)
	constructor(select: HTMLSelectElement)
	constructor(select: any){
		if (typeof select == "string")
			this._el = App.elementsGetter(select) ? App.elementsGetter(select)[0] as HTMLSelectElement : document.createElement("select")
		else if(select instanceof HTMLSelectElement)
			this._el = select
		else
			throw Error(`Invalid selector: ${select}`)
	}


}

class selectOptions{
	private _optionsArray: selectOption[] = []

}

class selectOption{
	private _el: HTMLElement
	private _text: string
	private _template: string = "<span class='my-select__list-option %classes%'>%text%</span>"


	public _value: string
	public _attributes: Object

	constructor(){
		
	}
}