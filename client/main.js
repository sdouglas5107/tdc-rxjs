/**
 * Created by douglas on 13/06/17.
 */
const Observable = require('rxjs').Observable;
Observable.from([1, 2, 3, 4, 5])
    .filter(value => value % 2 === 0)
    .map(value => value * 10)
    .subscribe(value => console.log(value));