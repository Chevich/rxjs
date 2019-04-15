import { from, fromEvent, merge, Observable, of, range } from 'rxjs';
import { take, distinct, filter, map, share, toArray, switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


addItem('start');
of(1).pipe(
  switchMap(x => of(x * 3)),
).subscribe(x => addItem(x));
addItem('stop');

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
