// example4
var car = {
	make: "Lamborghini",
	model: "Huracán",
	fullName: function() {
		console.log(this.make + " " + this.model);
	}
};
var truck = {
	make: "Tesla",
	model: "Truck",
	fullName: function(callback) {
		console.log(this.make + " " + this.model);
		callback();
	}
};
truck.fullName(car.fullName);
