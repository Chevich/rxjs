import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

const a$ = fromEvent(document, 'mousemove');

a$.pipe(
  take(2),
).subscribe(x => addItem(`I => ${x.clientX}`));

setTimeout(() => {
  addItem('timeout');
  a$.pipe(
    take(2)
  ).subscribe(x => addItem(`II => ${x.clientX}`));
}, 1500);

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
