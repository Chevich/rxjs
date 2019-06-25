// call, bind
var make = "Mclaren";
var model= "720s";
function fullName(num){
	console.log(`${num} ${this.make} ${this.model}`);
}
var car = {
	make:"Lamborghini",
	model:"Huracán",
};

fullName.call(car, 1);

fullName.apply(car, [2]);

var func = fullName.bind(car);
func(3);

fullName(4);
