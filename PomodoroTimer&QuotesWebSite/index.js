var pomodoroCountdownId;
var pomodoroButtonPressed = false;
var pomodoroResetButton = document.getElementById('resetButton');
var resetCheck = pomodoroResetButton.value;
var minutesSelect = document.getElementById('minutes-select');
var pomodoroTime = 25 * 60;
var pomodoroTimeLeft = document.getElementById('timeleft');
var pomodoroStartButton = document.getElementById('startButton');
var minute = 0;
var seconds = 0;
pomodoroResetButton.addEventListener('click', function() {
  resetCheck = true;
})
minutesSelect.addEventListener('change', function(event) {
  pomodoroTime = event.target.value * 60;
})
pomodoroStartButton.addEventListener('click', function() {
  pomodoroCountdown();
})

pomodoroShowNextSecond = function() {
  if (resetCheck === true || pomodoroButtonPressed === false) {
    pomodoroTimeLeft.innerHTML = '0:00';
    pomodoroButtonPressed = false;
    resetCheck = false;
    clearInterval(pomodoroCountdownId);
    pomodoroTime = minutesSelect.value * 60;
    return;
  };
  if (pomodoroTime > 0) {
    minutes = Math.floor(pomodoroTime / 60);
    secondsInitial = pomodoroTime % 60;
    seconds = secondsInitial <= 9 ? '0' + secondsInitial : secondsInitial;
    pomodoroTime --;
    pomodoroTimeLeft.innerHTML = minutes + ':' + seconds;
  } else if (pomodoroButtonPressed && pomodoroTime === 0) {
    pomodoroButtonPressed = false;
  }
}
pomodoroCountdown = function() {
  if (pomodoroButtonPressed === false) {
    pomodoroButtonPressed = true;
    pomodoroCountdownId = setInterval(pomodoroShowNextSecond, 1000);
  }
}


//Data fetch
let list = []
const text = document.getElementById("text")
const author = document.getElementById("author")


function randomInt(){
    return Number(Math.floor(Math.random() * 1600));
}

function fetchDatas(){
    fetch("https://type.fit/api/quotes")
    .then(res => res.text())
    .then(res => {
        list = JSON.parse(res)
        let myData = list[Math.floor(Math.random() * 1600)]
        text.innerText = myData.text 
        author.innerText = myData.author 
    })
}


fetchDatas()
