import { from, fromEvent, merge, Observable, of, range, timer } from 'rxjs';
import { take, distinct, filter, map, share, toArray, switchMap, concatMap, tap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


interface Vehicle {
  move: (distance: number) => void;
}

class Car implements Vehicle {
  move = (distance: number) => {

  };

  turnSteeringWheel(direction: string) {

  }
}

class VehicleController {
  vehicle: Vehicle;

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }
}

const myCar = new Car();
const vehicleController = new VehicleController(myCar);

const { vehicle } = vehicleController;

// # first way: Direct typecast
if ((vehicle as Car).turnSteeringWheel) {
  (vehicle as Car).turnSteeringWheel('left');
}

// # second way: Use instanceof. It's just for classes
if (vehicle instanceof Car) {
  vehicle.turnSteeringWheel('left');
}

// # third way: Custom type guard
const isCar = (variableToCheck: any): variableToCheck is Car => {
  return (variableToCheck as Car).turnSteeringWheel !== undefined;
};

if (isCar(vehicle)) {
  vehicle.turnSteeringWheel('left');
}

// # fourth way: Generic type guard
const isOfType = <T> (
  varToBeChecked: any,
  propertyToCheckFor: keyof T
): varToBeChecked is T => (varToBeChecked as T)[propertyToCheckFor] !== undefined;


if (isOfType<Car>(vehicle, 'turnSteeringWheel')) {
  vehicle.turnSteeringWheel('left');
}

const func = (check: unknown): string => {
  return 'strong';
};


console.log(vehicle);
// vehicle.turnSteeringWheel('left');


function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
