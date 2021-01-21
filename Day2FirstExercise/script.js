let number1 = Math.round(Math.random());
let number2 = Math.round(Math.random());
let number3 = Math.round(Math.random());
let number4 = Math.round(Math.random());
let number5 = Math.round(Math.random());

/* Would be possible also to use Math.floor(Math.random() * 2) - in this case you get always a number between 0 and 2, and this method will round it down. But this is worse solution in my opinion */

const winningProbability = 1 / 2 ** 5;
const sum = number1 + number2 + number3 + number4 + number5;

console.log("You numbers are: ", number1, number2, number3, number4, number5);

if (sum === 5) {
  console.log("You have won! Congratulations!");
  console.log("The probability for you to win was: ", winningProbability);
} else if (sum === 0) {
  console.log("Well, congrats anyway");
} else {
  console.log("You lost!");
}
