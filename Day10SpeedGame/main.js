let gameOver = document.getElementById("gameOver");
let printScore = document.querySelector("#score");

let lightButtons = document.querySelectorAll(".gameButton");

let startGameButton = document.getElementById("startGame");
let closeButton = document.getElementById("close");

let score = 0;
let active = 0;
let timer;
let nextActive;
let gameSpeed = 1500;
let timesBlinked = 0;
let blinked = [];
let gameMusic;

//returns a random number between min and max (both included)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* I added pressedOnce variable in order to avoid the sistuation, where user can press two times on the circle and get two points of score for that. Now even if he presses twice, he will get only one point */
let pressedOnce = false;

/**
 * This function is triggered by a button "Start Game"
 * The function is listening, what bulb is going to be pressed.
 * Then the id of the pressed bulb is given to the function clicked.
 */
function listenPress() {
  lightButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let buttonPressed = this.id;
      clicked(buttonPressed);
    });
  });
}

function playGameMusic() {
  gameMusic = new Audio("Spooky-Island.mp3");
  gameMusic.play();
  gameMusic.loop = true;
}

/**
 * This function also is triggered by a button "Start Game"
 * It generates the random number nextActive
 * Then it toggles the class for active button with the id of the nextActive
 */
function lightChangingFunction() {
  nextActive = chooseNewNumber(active);

  lightButtons[nextActive].classList.toggle("chosenButton");
  lightButtons[active].classList.remove("chosenButton");

  timesBlinked++;
  blinked.push(timesBlinked);

  if (blinked.length > 3) {
    stopTheGame();
    return;
  }

  active = nextActive;

  function chooseNewNumber(active) {
    pressedOnce = false;
    let nextActive = getRandomNumber(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return chooseNewNumber(active);
    }
  }

  timer = setTimeout(lightChangingFunction, gameSpeed);
}

/**
 * This function receives the id of the pressed bulb
 * @param {receives id of the pressed bulb} i
 */
function clicked(i) {
  if (i == nextActive + 1 && pressedOnce == false) {
    pressedOnce = true;
    score++;
    gameSpeed = gameSpeed - gameSpeed * 0.05;
    blinked = [];
  } else if (i == nextActive + 1 && pressedOnce == true) {
    score = score;
    blinked = [];
  } else {
    stopTheGame();
  }

  printScore.textContent = `Your score is ${score}`;
}

function stopTheGame() {
  gameMusic.pause();
  let gameOverMusic = new Audio("Trashy-Aliens.mp3");
  gameOverMusic.play();
  gameOverMusic.loop = true;
  let gameOverMessage = "";
  if (score < 4) {
    gameOverMessage = "Wow, you are really bad at this game...";
  } else if (score >= 4 && score < 8) {
    gameOverMessage = "You are ok...";
  } else if (score >= 8) {
    gameOverMessage = "You are actually quite good at this game.";
  }
  gameOver.classList.add("showGameOver");
  gameOver.querySelector(
    ".gameOverText"
  ).innerHTML = `<p class="scoreResult">Your score is ${score}.</p><p> ${gameOverMessage}</p>`;
  clearTimeout(timer);
}

function closeTheWindow() {
  window.location.reload();
}

closeButton.addEventListener("click", closeTheWindow);
startGameButton.addEventListener("click", lightChangingFunction);
startGameButton.addEventListener("click", listenPress);
startGameButton.addEventListener("click", playGameMusic);
