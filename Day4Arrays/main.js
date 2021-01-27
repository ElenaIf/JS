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

saveTicket = () => {
  ticket = [];
  let count = 0;
  while (count < arrayTask1.length) {
    ticket.push(arrayTask1[count]);
    count++;
  }

  console.log(ticket);
};

checkThePrize = () => {
  let count = 0;
  let arrayOfOnes = [];
  let arrayOfZeros = [];

  while (count < arrayTask1.length) {
    if (arrayTask1[count] == 1) {
      arrayOfOnes.push(1);
    } else {
      arrayOfZeros.push(0);
    }
    count++;
  }

  if (arrayOfOnes.length == 5) {
    console.log("Jackpot");
  } else if (arrayOfZeros.length == 5) {
    console.log("Congratulations");
  } else if (arrayOfOnes.length > 3 && arrayOfOnes.length < 5) {
    console.log("You won 100 euros");
  } else {
    console.log("No prize");
  }
};
