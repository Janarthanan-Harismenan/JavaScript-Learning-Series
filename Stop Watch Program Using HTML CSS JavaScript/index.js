const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (isRunning === false) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(displayTime, 10);
  }
}

function pause() {
  if (isRunning === true) {
    isRunning = false;
    elapsedTime = Date.now() - startTime;
    clearInterval(timer);
  }
}

function reset() {
  isRunning = false;
  startTime = 0;
  elapsedTime = 0;
  clearInterval(timer);
  display.textContent = "00:00:00:00";
}

function displayTime() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (60 * 60 * 1000));
  let minutes = Math.floor((elapsedTime / (60 * 1000)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
