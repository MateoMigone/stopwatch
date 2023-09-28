const spanHr = document.querySelector("span.hr");
const spanMin = document.querySelector("span.min");
const spanSec = document.querySelector("span.sec");
const spanMs = document.querySelector("span.ms");
const btnStart = document.querySelector("button.start-btn");
const btnReset = document.querySelector("button.reset-btn");

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let interval;
let running = false;

btnStart.addEventListener("click", () => {
  running = !running;
  if (running) {
    clearInterval(interval);
    interval = setInterval(start, 10);
    btnStart.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    clearInterval(interval);
    btnStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
});

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  spanHr.innerHTML = "00";
  spanMin.innerHTML = ":00";
  spanSec.innerHTML = ":00";
  spanMs.innerHTML = "00";
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;
  running = false;
  btnStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
});

function start() {
  if (ms < 99) {
    ms++;
    ms < 10 ? (spanMs.innerHTML = "0" + ms) : (spanMs.innerHTML = ms);
  } else {
    ms = 0;
    spanMs.innerHTML = "00";
    if (sec < 59) {
      sec++;
      sec < 10
        ? (spanSec.innerHTML = ":0" + sec)
        : (spanSec.innerHTML = ":" + sec);
    } else {
      sec = 0;
      spanSec.innerHTML = ":00";
      if (min < 59) {
        min++;
        min < 10
          ? (spanMin.innerHTML = ":0" + min)
          : (spanMin.innerHTML = ":" + min);
      } else {
        min = 0;
        spanMin.innerHTML = "00";
        if (hr < 99) {
          hr < 10 ? (spanHr.innerHTML = "0" + hr) : (spanHr.innerHTML = hr);
        } else {
          clearInterval(interval);
        }
      }
    }
  }
}
