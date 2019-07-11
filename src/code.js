const Animal = function (iKind, iName) {
  this.kind = iKind;
  this.name = iName;
};

Animal.prototype.eat = function() {
  console.log(this.kind, this.name, 'says', 'Хрум-хрум');
};

const cat = new Animal('cat', 'Bob');
cat.eat();

console.log(">>", cat);
