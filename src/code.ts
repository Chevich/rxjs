import { fromEvent, of } from 'rxjs';
import { bufferTime, catchError, concatMap, filter, retry } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

const a$ = fromEvent(document, 'click')                                                   // событие от клиента
  .pipe(
    bufferTime(1500),
    filter(x => x.length),
    concatMap(clicks => of(clicks).pipe(
      concatMap(clicks => fromPromise(Promise.resolve('pizza, '.repeat(clicks.length)))),   // assume long operation
      concatMap(pack => fromPromise(Promise.resolve(`delivery (${pack})`))),              // assume long operation
      retry(3),
      ),
    ),
    catchError(() => 'We\'ve lost client and his money'),
  )
;

a$.subscribe(parcel => addItem(`Customer have got ${parcel}`));                           // Заказчик доволен


function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
