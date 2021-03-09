let gameOver = document.getElementById("gameOver");
let closeButton = document.getElementById("close");
let lightButtons = document.querySelectorAll(".gameButton");
let printScore = document.querySelector("#score");
let startGameButton = document.getElementById("startGame");

let score = 0;
let active = 0;
let timer;
let temp;
let nextActive;

//returns a random number between min and max (both included)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function listenPress() {
  lightButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let buttonPressed = this.id;
      clicked(buttonPressed);
    });
  });
}

function lightChangingFunction() {
  nextActive = chooseNewNumber(active);

  lightButtons[nextActive].classList.toggle("chosenButton");
  lightButtons[active].classList.remove("chosenButton");

  active = nextActive;

  function chooseNewNumber(active) {
    let nextActive = getRandomNumber(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return chooseNewNumber(active);
    }
  }

  timer = setTimeout(lightChangingFunction, 1000);
}

function clicked(i) {
  if (i == nextActive + 1) {
    score++;
  } else {
    stopTheGame();
  }

  printScore.textContent = `Your score is ${score}`;
}

function stopTheGame() {
  let gameOverMessage = "";
  if (score < 4) {
    gameOverMessage = "Wow, you are really bad at this game";
  } else if (score >= 4 && score < 8) {
    gameOverMessage = "You are ok";
  } else if (score >= 8) {
    gameOverMessage = "You are actually quite good at this game";
  }
  gameOver.classList.add("showGameOver");
  gameOver.querySelector(".gameOverText").textContent = `Game Over!
  Your score is ${score}. ${gameOverMessage}`;
  clearTimeout(timer);
}

function closeTheWindow() {
  window.location.reload();
}

closeButton.addEventListener("click", closeTheWindow);
startGameButton.addEventListener("click", lightChangingFunction);
startGameButton.addEventListener("click", listenPress);
