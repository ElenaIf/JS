let stopButton = document.getElementById("stopGame");
let gameOver = document.getElementById("gameOver");
let closeButton = document.getElementById("close");
let lightButtons = document.querySelectorAll(".gameButton");
let score = 0;
let printScore = document.querySelector("#score");
let active = 0;
let startGameButton = document.getElementById("startGame");

lightButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonPressed = this.id;
    clicked(buttonPressed);
  });
});

function clicked(i) {
  score++;
  printScore.textContent = `Your score is ${score}`;
  console.log("User pressed button " + i);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let timer;

function lightChangingFunction() {
  let active = getRandomNumber(0, 3);
  document.querySelectorAll(".gameButton")[active].classList.add("chosenButton");
  setTimeout(function () {
    document.querySelectorAll(".gameButton")[active].classList.remove("chosenButton");
  }, 500);
  timer = setTimeout(lightChangingFunction, 1000);
}

/* function startGame() {
  setInterval(function () {
    console.log("Game started");

    let nextActive = pickNew(active);

    active = nextActive;

    function pickNew(active) {
      let nextActive = getRandomNumber(0, 3);
      if (nextActive != active) {
        document.querySelectorAll(".gameButton")[active].classList.add("chosenButton");
        return nextActive;
      } else {
        return pickNew(active);
      }
    }
    console.log(pickNew(active));

    document.querySelectorAll(".gameButton")[active].classList.remove("chosenButton");
  }, 1000);
} */

function stopTheGame() {
  gameOver.classList.add("showGameOver");
  clearTimeout(timer);
}

function closeTheWindow() {
  gameOver.classList.remove("showGameOver");
}

stopButton.addEventListener("click", stopTheGame);
closeButton.addEventListener("click", closeTheWindow);
startGameButton.addEventListener("click", lightChangingFunction);
