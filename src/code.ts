const car = {
	make: "Lamborghini",
	model: "Huracán",
	fullName: function () {
		console.log(`${this.make} ${this.model}`);
		console.log(`${car.make} ${car.model}`);
	}
};
car.fullName();
