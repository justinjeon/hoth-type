var time = document.getElementById('timer'),
    seconds = document.getElementById('seconds');
    wpm = document.getElementById("wpm");
    wpm.innerHTML = "0 wpm";
    seconds = 0, minutes = 0;

function add() {
        seconds++;
        if (seconds%60 == 0) {
            minutes++;
        }
    getWpm();
    time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "0") + ":" + (seconds%60 ? (seconds%60 > 9 ? seconds%60 : "0" + seconds%60) : "00");
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

function getWpm() {
    wpm.innerHTML = ((correct/seconds)*12).toFixed(0) + " wpm";
}

function timeOn() {
    if (setTimer == 0)
        timer();
    setTimer = 1;
 }


// /* Start button */
// start.onclick = timer;

/* Stop button */
// stop.onclick = function() {
//     clearTimeout(t);
// }

// /* Clear button */
// clear.onclick = function() {
//     h1.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
// }
