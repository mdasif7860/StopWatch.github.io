let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start() {
  timer = true;
  stopWatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopWatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      count = 0;
      sec = sec + 1;
    }
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      min = 0;
      hr = hr + 1;
    }
    let hrStr = hr;
    let minStr = min;
    let secStr = sec;
    let countStr = count;
    if (count < 10) {
      countStr = "0" + countStr;
    }
    if (min < 10) {
      minStr = "0" + minStr;
    }
    if (sec < 10) {
      secStr = "0" + secStr;
    }
    if (hr < 10) {
      hrStr = "0" + hrStr;
    }
    document.getElementById("count").innerHTML = countStr;
    document.getElementById("sec").innerHTML = secStr;
    document.getElementById("min").innerHTML = minStr;
    document.getElementById("hr").innerHTML = hrStr;
    setTimeout("stopWatch()", 10);
  }
}
