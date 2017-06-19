/**
 * Created by douglas on 13/06/17.
 */
// const Observable = require('rxjs').Observable;
const Observable = require('rxjs/Observable').Observable;
require('rxjs/add/operator/map');
require('rxjs/add/operator/filter');
let array = [1, 2, 3, 4, 5];
Observable.create(observer => {
    let index = 0;
    let generateValue = () => {
        if (index < array.length) {
            observer.next(array[index])
        } else {
            observer.complete();
        }
        index++;
        setTimeout(generateValue, 1000);
    };
    generateValue();

})

    .filter(value => value % 2 === 0)
    .map(value => value * 10)
    .subscribe(value => console.log(value));