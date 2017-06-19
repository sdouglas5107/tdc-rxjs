/**
 * Created by douglas on 19/06/17.
 */
const Observable = require('rxjs').Observable;
let circle = document.getElementById("circle");
Observable.fromEvent(document, "mousemove")
    .map(event => {
        return {x: event.clientX, y: event.clientY};
    })
    .filter(value => value.x < 500)
    .delay(100)
    .subscribe(value => {
        circle.style.left = value.x + "px";
        circle.style.top = value.y + "px";
    });