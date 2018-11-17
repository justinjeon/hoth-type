var time = document.getElementById('timer'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    centiseconds = 0, seconds = 0, minutes = 0;

function add() {
        seconds++;
        if (seconds%60 == 0) {
            minutes++;
        }
    
    time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "0") + ":" + (seconds%60 ? (seconds%60 > 9 ? seconds%60 : "0" + seconds%60) : "00");

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();

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