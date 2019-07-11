const Animal = function (iKind, iName) {
  this.kind = iKind;
  this.name = iName;
};

const cat = new Animal('cat', 'Bob');

console.log(">>", cat);
