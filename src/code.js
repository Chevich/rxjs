// example1
var car = {
	make: "Lamborghini",
	model: "Huracan",
	name: null,
	fullName: function() {
		return this.make + " " + this.model;
	}
};
var anotherCar = {
	make: "Ferrari",
	model: "Italia",
	name: null,
};
anotherCar.name = car.fullName();
console.log(anotherCar);
