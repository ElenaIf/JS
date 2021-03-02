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
    return buttonPressed;
  });
});

function clicked(i) {
  console.log("clicked " + i);
  score++;
  printScore.textContent = `Your score is ${score}`;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* setInterval(function () {
  counter = getRandomNumber(1, 4);
}, 1000); */

function startGame() {
  console.log("Game started");
  let nextActive = pickNew(active);

  active = nextActive;

  function pickNew(active) {
    let nextActive = getRandomNumber(1, 4);
    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
}

function stopTheGame() {
  gameOver.classList.add("showGameOver");
}

function closeTheWindow() {
  gameOver.classList.remove("showGameOver");
}

stopButton.addEventListener("click", stopTheGame);
closeButton.addEventListener("click", closeTheWindow);
startGameButton.addEventListener("click", function () {
  setInterval(startGame, 1000);
});
