// WARN : js
var make = "Mclaren";
var model= "720s";
function fullName(){
	console.log(`${this.make} ${this.model}`);
}
var car = {
	make:"Lamborghini",
	model:"Huracán",
	fullName:function () {
		console.log(`${this.make} ${this.model}`);
	}
};
car.fullName();
window.fullName();
fullName();
