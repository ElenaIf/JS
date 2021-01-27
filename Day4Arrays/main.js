let arrayTask1 = [];

generateArray = () => {
  arrayTask1 = [];
  while (arrayTask1.length < 5) {
    let randomNumber = Math.round(Math.random());
    arrayTask1.push(randomNumber);
  }

  document.getElementById("resultTask1").textContent = arrayTask1;
};

let ticket = [];

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

let count = 0;
let arrayOfOnes = [];
let arrayOfZeros = [];
let prizePhrase;

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
  let count = 0;
  while (true) {
    generateArray();
    checkThePrize();
    count++;
    if (document.getElementById("prizePhrase").textContent == "JACKPOT!") {
      break;
    }
  }
  document.getElementById("timesUserPlayed").textContent = count;
};
