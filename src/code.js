// example3
var car = {
	cars: [
		{ make: "Lamborghini", model: "Huracán" },
		{ make: "Mclaren", model: "720s" },
		{ make: "Ferrari", model: "Italia" }
	],
	brand: "2101",
	fullName: function() {
		this.cars.forEach(function (vehicle) {
			console.log(vehicle.make + " " + this.brand);
		})
	}
};
car.fullName();

// 3 ways!
