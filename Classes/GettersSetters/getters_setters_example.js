class Rectangle {
	
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	set widthVal (w) {
		this._width = w
	}

	get widthVal () {
		return this._width;
	}

	set heightVal(h) {
		this._height = h;
	}

	get heightVal () {
		return this._height;
	}

	get areaVal() {
		return this._width * this._height;
	}
}

var r1= new Rectangle(4,6);	// passing object default values
console.log(r1.areaVal);

r1.widthVal = 10; // setting the new width value
r1.heightVal  = 10; // setting the new height value
