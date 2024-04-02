let timerInterval;
let seconds = 0;
let minutes = 0;


var selects = document.getElementsByTagName("input");
document.getElementById('btn').style.display="none"
for (var i = 0; i < selects.length; i++) {
selects[i].disabled = true;
}


function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    var selects = document.getElementsByTagName("input");
    document.getElementById('btn').style.display="block"
for (var i = 0; i < selects.length; i++) {
  selects[i].disabled = false;
}
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('timer').textContent = formattedMinutes + ':' + formattedSeconds;
}
