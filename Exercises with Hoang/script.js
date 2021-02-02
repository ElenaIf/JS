let choseNumbers = [];

let counter = 0;

while (counter < 5) {
  choseNumbers[counter] = Math.floor(Math.random() * 2);

  counter++;
}

console.log(counter);

let oneCounter = 0;
let zeroCounter = 0;

while (counter) {
  counter--;
  if (choseNumbers[counter] === 1) {
    oneCounter++;
  } else {
    zeroCounter++;
  }
}

console.log("Array", choseNumbers);
console.log(`Found ${oneCounter} ones and ${zeroCounter} zeros`);

if (oneCounter === 5) {
  console.log("Jackpot");
} else if (zeroCounter === 5) {
  console.log("Its ok");
} else if (oneCounter > 3 && oneCounter < 5) {
  console.log("Small prize");
} else {
  console.log("No win");
}
