var hours = 00;
var minutes = 00;
var seconds = 00;
var appendSeconds = document.getElementById("timer-seconds");
var appendMinutes = document.getElementById("timer-minutes");
var appendHours = document.getElementById("timer-hours");

var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");

var interval;

buttonStart.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function(){
    clearInterval(interval);
}


function startTimer () {
    seconds++;

    if(seconds <= 9){
        appendSeconds.innerHTML = "0" + seconds;
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }

    if(minutes > 59){
        hours++;
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
        appendMinutes.innerHTML = "0" + 0;
    }

    if(hours > 9){
        appendHours.innerHTML = hours;
    }

}