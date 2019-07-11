const Animal = function (iKind, iName) {
  this.kind = iKind;
  this.name = iName;
};

Animal.prototype.eat = function () {
  console.log(this.kind, this.name, 'says', 'Хрум-хрум');
};

const Dog = function (iName) {
  Animal.call(this, 'dog', iName);
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const woofy = new Dog('Woofy');
woofy.eat();

console.log("WOOFY >>", woofy);
console.log("Dog? >>", woofy instanceof Dog);
console.log("Animal? >>", woofy instanceof Animal);
console.log("Object? >>", woofy instanceof Object);
