```javascript
let seconds = 0;
let timer = null;

function updateDisplay() {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("display").textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}

function startStopwatch() {
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
}

updateDisplay();
```
