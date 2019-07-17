const obj = {
  _name: 'Chev',
  _id: 2,
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
  get id() {
    return this._id.toString(2);
  },

};

console.log("_id >>", Object.getOwnPropertyDescriptor(obj, '_id'));
console.log("id >>", Object.getOwnPropertyDescriptor(obj, 'id'));

