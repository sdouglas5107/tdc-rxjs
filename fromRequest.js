/**
 * Created by douglas on 19/06/17.
 */
const Observable = require('rxjs').Observable;
let output = document.getElementById("output");
let button = document.getElementById("button");
function load() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", () => {
        let movies = JSON.parse(request.responseText);
        movies.forEach(movie => {
            let div = document.createElement("div");
            div.innerText = movie.name;
            output.appendChild(div);
        })
    });
    request.open("GET", "movies.json");
    request.send();
}
Observable.fromEvent(button, "click")
    .subscribe(load);