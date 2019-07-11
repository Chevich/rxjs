const Animal = function (iKind, iName) {
  this.kind = iKind;
  this.name = iName;
  this.eat = function() {
    console.log('Хрум-хрум');

  }
};

const cat = new Animal('cat', 'Bob');
cat.eat();

console.log(">>", cat);
