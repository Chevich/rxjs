const constObj = Object.create(null, {myProp: {value: 42}});

constObj.myProp = 5;

console.log(">>", Object.getOwnPropertyDescriptor(constObj, 'myProp'));


