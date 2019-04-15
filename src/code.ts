import { from, fromEvent, merge, Observable, of } from 'rxjs';
import { distinct, filter, map, share, toArray } from 'rxjs/operators';


from([1,2,3,4]).pipe(
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
