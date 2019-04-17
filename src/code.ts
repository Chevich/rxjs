import { from, fromEvent, merge, Observable, of, range, timer } from 'rxjs';
import { take, distinct, filter, map, share, toArray, switchMap, concatMap, tap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


const array = [...Array(500).keys()];

function squareArr(item: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item*item);
    }, 1000);
  })
}

(async function() {
  let sum = [];
  for (let i of array) {
    sum.push(await squareArr(i));
    console.log('current value ', sum);
  }
})();


function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
