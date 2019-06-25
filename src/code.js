// example2
var cars = [
	{ make: "Mclaren", model: "720s" },
	{ make: "Ferrari", model: "Italia" }
];
var car = {
	cars: [
		{ make: "Lamborghini", model: "Huracán" }
	],
	fullName: function() {
		console.log(this.cars[0].make + " " + this.cars[0].model);
	}
};
var vehicle = car.fullName;
vehicle(); // WANT HERE Lamborghini Huracán
