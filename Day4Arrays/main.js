let arrayTask1 = [];
let ticket = [];
let count = 0;
let arrayOfOnes = [];
let arrayOfZeros = [];
let prizePhrase;

let winningStatus = false;

const TICKET_PRICE = 0.5;
const RANGE_OF_NUMBERS = 7;
const JACKPOT_TO_BE_WON = 10;

generateArray = () => {
  arrayTask1 = [];
  while (arrayTask1.length < 5) {
    let randomNumber = Math.floor(Math.random() * RANGE_OF_NUMBERS);
    arrayTask1.push(randomNumber);
  }

  document.getElementById("resultTask1").textContent = arrayTask1;
};

/*
saveTicket = () => {
  ticket = [];
  let count = 0;
  while (count < arrayTask1.length) {
    ticket.push(arrayTask1[count]);
    count++;
  }
  document.getElementById("generatedTicket").textContent = ticket;
};
*/

checkThePrize = () => {
  count = 0;
  arrayOfZeros = [];
  arrayOfOnes = [];

  while (count < arrayTask1.length) {
    if (arrayTask1[count] == 1) {
      arrayOfOnes.push(1);
    } else {
      arrayOfZeros.push(0);
    }
    count++;
  }

  if (arrayOfOnes.length == 5) {
    winningStatus = true;
    prizePhrase = "JACKPOT!";
  } else if (arrayOfZeros.length == 5) {
    prizePhrase = "No prize, but congratulations anyway";
  } else if (arrayOfOnes.length > 3 && arrayOfOnes.length < 5) {
    prizePhrase = "You won 100 euros!";
  } else {
    prizePhrase = "Nothing :(";
  }
  document.getElementById("prizePhrase").textContent = prizePhrase;
};

winForSure = () => {
  winningStatus = false;
  let count = 0;
  while (true) {
    generateArray();
    checkThePrize();
    count++;
    if (winningStatus == true) {
      break;
    }
  }
  document.getElementById("timesUserPlayed").textContent = count;
  let moneyToWin = count * TICKET_PRICE;
  document.getElementById("moneySpentToWin").textContent = moneyToWin;
};

iWantToWinManyTimes = () => {
  let timesToPlayToWin = 0;
  while (timesToPlayToWin < JACKPOT_TO_BE_WON) {
    timesToPlayToWin++;
    winningStatus = false;
    let count = 0;
    while (true) {
      generateArray();
      checkThePrize();
      count++;
      if (winningStatus == true) {
        break;
      }
    }
  }

  let moneyToWin = timesToPlayToWin * TICKET_PRICE;
  document.getElementById("moneyToWinManyTimes").textContent = moneyToWin;
  document.getElementById("timesToWin").textContent = JACKPOT_TO_BE_WON;
};
