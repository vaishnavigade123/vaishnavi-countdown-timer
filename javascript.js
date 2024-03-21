var timerInterval;
var timerDisplay = document.getElementById("timer");
var durationInput = document.getElementById("duration");
var remainingTime = 0;
var endTime = 0; 
var isTimerRunning = false; 

function startTimer() {
  if (!isTimerRunning) {
    var duration = parseInt(durationInput.value);

    if (remainingTime === 0) {
      remainingTime = duration;
    }

    endTime = Date.now() + remainingTime * 1000;
    isTimerRunning = true;
    updateTimer();
  }
}

function updateTimer() {
  timerInterval = setInterval(function () {
    var currentTime = Date.now();
    remainingTime = Math.max(
      0,
      Math.floor((endTime - currentTime) / 1000)
    );

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Countdown complete!";
      isTimerRunning = false;
    } else {
      var minutes = Math.floor(remainingTime / 60);
      var seconds = remainingTime % 60;
      timerDisplay.textContent =
        ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDisplay.textContent = "";
  durationInput.value = "60";
  remainingTime = 0;
  endTime = 0;
  isTimerRunning = false;
}
