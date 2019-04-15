import { from, fromEvent, merge, Observable, of, range } from 'rxjs';
import { take, distinct, filter, map, share, toArray } from 'rxjs/operators';


range(1, Number.POSITIVE_INFINITY).pipe(
  take(10),
  map(x => x * 3),
  filter(x => x % 2 === 0),
  toArray(),
).subscribe(x => addItem(x));

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
