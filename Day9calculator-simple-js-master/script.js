/* I made a calculator but I dod not manage to make it check for double dots in the numbers. Can we go through it during the next lesson? */

let firstNumber = "";
let secondNumber = "";
let operation = "";

document.querySelectorAll(".numbers > div").forEach((button) => {
  button.addEventListener("click", function () {
    firstNumber = this.textContent;
    /*  if (this.textContent === "." && firstNumber.match(".").length > 1) {
      return;
    } */
    firstNumber = this.textContent;
    document.querySelector("#input").textContent =
      document.querySelector("#input").textContent + firstNumber;
  });
});

document.querySelectorAll(".operators > div").forEach((button) => {
  button.addEventListener("click", function () {
    secondNumber = firstNumber;
    firstNumber = "";
    switch (this.textContent) {
      case "+":
        operation = "+";
        break;
      case "-":
        operation = "-";
        break;
      case "×":
        operation = "*";
        break;
      case "÷":
        operation = "/";
        break;
      default:
        console.log("Some error");
        break;
    }
    document.querySelector("#input").textContent =
      document.querySelector("#input").textContent + operation;
  });
});

/* function updateNumber() {
    if (this.textContent === "." && firstNumber.indexOf(".") > -1) {
    return;
  } 
  firstNumber = Number(this.textContent);
  console.log(firstNumber);
} */

/* function updateDisplayforNumber() {}

function updateDisplayforOperator() {
  document.querySelector("#input").textContent = `${firstNumber} ${operation} ${secondNumber}`;
} */

/* const calculate = () => {
  const firstNum = Number(firstNumber);
  const secondNum = Number(secondNumber);
  if (operation === "plus") {
    return firstNum + secondNum;
  } else if (operation === "minus") {
    return firstNum - secondNum;
  } else if (operation === "multiply") {
    return firstNum * secondNum;
  } else if (operation === "divide") {
    return firstNum / secondNum;
  }
}; */

/* function updateOperation() {
  secondNumber = firstNumber;
  firstNumber = "";
  switch (this.textContent) {
    case "+":
      operation = "plus";
      break;
    case "-":
      operation = "minus";
      break;
    case "×":
      operation = "multiply";
      break;
    case "÷":
      operation = "divide";
      break;
    default:
      console.log("Some error");
      break;
  }
  console.log(this.textContent);
} */

/* const insert = (num) => {
  document.querySelector("#input").textContent = document.querySelector("#input").textContent + num;
}; */

const clean = () => {
  document.querySelector("#input").textContent = "";
};

const equal = () => {
  let exp = document.querySelector("#input").textContent;
  if (exp) {
    document.querySelector("#input").textContent = eval(exp);
  }
};

document.querySelector("#result").addEventListener("click", function () {
  equal();
  firstNumber = "";
  secondNumber = "";
  operation = "";
});

document.querySelector("#clear").addEventListener("click", function () {
  clean();
  firstNumber = "";
  secondNumber = "";
  operation = "";
});
