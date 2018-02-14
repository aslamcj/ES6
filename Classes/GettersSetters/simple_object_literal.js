var log = console.log;
let x = 7;

var objLit = {
	prop1 : 2018,
	prop2 : 'Alien',
	x,
	prop3() {
		log('called prop3');
	}
};

obj.prop3();
log(obj.x);
