checkInvitation = () => {
  let guestList = ["Elena", "Angela", "Toni", "Anna"];
  if (guestList.includes(document.getElementById("yourName").value)) {
    document.getElementById("yourInvitation").textContent = "Welcome!";
  } else {
    document.getElementById("yourInvitation").textContent =
      "You are not welcome!";
  }
};

let output = [];
let output1 = [];
let firstNumber = 0;

fizzBuzz = () => {
  firstNumber++;

  if (firstNumber % 3 == 0 && firstNumber % 5 == 0) {
    output.push("FizzBuzz");
  } else if (firstNumber % 3 == 0) {
    output.push("Fizz");
  } else if (firstNumber % 5 == 0) {
    output.push("Buzz");
  } else {
    output.push(firstNumber);
  }

  document.getElementById("fizzBuzz").textContent = output;
};

fizzBuzz100 = () => {
  while (firstNumber < 100) {
    firstNumber++;
    if (firstNumber % 3 == 0 && firstNumber % 5 == 0) {
      output1.push("FizzBuzz");
    } else if (firstNumber % 3 == 0) {
      output1.push("Fizz");
    } else if (firstNumber % 5 == 0) {
      output1.push("Buzz");
    } else {
      output1.push(firstNumber);
    }
  }

  document.getElementById("fizzBuzz100").textContent = output1;
};

lunch = () => {
  let names = ["Anna", "Jane", "Lena", "Toni"];
  let number = Math.floor(Math.random() * names.length);
  let whoPays = names[number];
  document.getElementById("lunchPayer").textContent =
    whoPays + " is going to buy lunch today";
};

/* Some notes about arrays:

array.includes("myName") - this method is searching for the item in my array
array.push("whatToPush") - this is to add something into array (into the end)
array.pop; - removes the last item from the array
*/
