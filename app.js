var millisec = 100
var s = prompt("Enter Seconds")
var m = prompt("Enter Minutes")
var sec = s
var min = m
var displaymili = document.getElementById('displaymiliSec')
var displaysec = document.getElementById('displaySec')
var displaymin = document.getElementById('displayMin')

function timer() {
    millisec--
    displaymili.innerHTML = millisec
    if (millisec == 0) {
        sec--
        displaysec.innerHTML = sec
        millisec = 100

        if (sec == 0) {
            min--
            sec = s
            displaymin.innerHTML = min
            if (min == 0) {
                reset()
            }

        }

    }

}



var interval;

function start() {
    interval = setInterval(timer, 10);

}
function pause() {
    clearInterval(interval)
}
function reset() {
    pause()
    millisec = 0
    sec = 0
    min = 0
    displaymili.innerHTML = millisec
    displaysec.innerHTML = sec
    displaymin.innerHTML = min
}








