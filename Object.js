function anotherFuntion() {

}

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject,
	c: anotherArray,
	d: anotherFuntion
};

anotherArray.push(anotherObject, myObject);