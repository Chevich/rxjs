import { fromEvent, merge, Observable, of } from 'rxjs';
import { distinct, map, share } from 'rxjs/operators';

interface TrainDetails {
  readonly id: number;
  readonly name: string;
  readonly minutes: number;
}

class TransitApiService {
  getNextTrain(): TrainDetails {
    return { id: 1, name: 'Unique train', minutes: 5 };
  }

  isPetFriendly(trainId: number): boolean {
    return false;
  }
}

const nextTrainButtonClicks$ = fromEvent(document, 'click').pipe(
  share(),
);

const trainApiService = new TransitApiService();


nextTrainButtonClicks$.pipe(
  map(trainApiService.getNextTrain),
  map((train) => {
    let messageDetails;
    if (trainApiService.isPetFriendly(train.id)) {
      messageDetails = `${train.name} is coming in ${train.minutes} minute(s). This train is pet friendly`;
    } else {
      messageDetails = `${train.name} is coming in ${train.minutes} minute(s). This train is not pet friendly`;
    }
    return messageDetails;
  }),
).subscribe(x => addItem(x));

function addItem(val: any) {
  const node = document.createElement('li');
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
