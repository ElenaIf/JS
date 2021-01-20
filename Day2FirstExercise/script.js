let number1 = Math.round(Math.random());
let number2 = Math.round(Math.random());
let number3 = Math.round(Math.random());
let number4 = Math.round(Math.random());
let number5 = Math.round(Math.random());

const winningProbability = 1/2**5

console.log("You numbers are: ", number1, number2, number3, number4, number5);


if (number1 === 1 && number2 === 1 && number3 === 1 && number4 === 1 && number5 === 1) {
    console.log("You have won! Congratulations!")
    console.log("The probability for you to win was: ", winningProbability)
} else if (number1 === 0 && number2 === 0 && number3 === 0 && number4 === 0 && number5 === 0) {
    console.log("Well, congrats anyway")
} else {
    console.log("You lost!")
}