function updateClock(){

let now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

document.getElementById("clock").innerHTML =
h + ":" + m + ":" + s;

}

setInterval(updateClock,1000);
let seconds = 0;
let timer;

function start(){

timer = setInterval(function(){

seconds++;

document.getElementById("stopwatch").innerHTML =
seconds;

},1000);

}

function stop(){

clearInterval(timer);

}

function reset(){

clearInterval(timer);

seconds = 0;

document.getElementById("stopwatch").innerHTML = "0";

}
