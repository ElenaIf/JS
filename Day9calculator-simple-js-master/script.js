let firstNumber = "";
let secondNumber = "";
let operation = "";

document.querySelectorAll(".numbers > div").forEach((button) => {
  button.addEventListener("click", function () {
    updateNumber();
    updateDisplay();
  });
});

function updateNumber() {
  if (this.textContent === "." && firstNumber.indexOf(".") > -1) {
    return;
  }
  firstNumber += this.textContent;
}

const calculate = () => {
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
};

function updateOperation() {
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
      operation = "/";
      break;
    case "÷":
      operation = "/";
      break;
    default:
      console.log("Some error");
      break;
  }
  console.log(this.textContent);
}

const insert = (num) => {
  document.querySelector("#input").textContent = document.querySelector("#input").textContent + num;
};

const clean = () => {
  document.querySelector("#input").textContent = "";
};

const equal = () => {
  let exp = document.querySelector("#input").textContent;
  if (exp) {
    document.querySelector("#input").textContent = eval(exp);
  }
};

function updateDisplay() {
  document.querySelector("#input").textContent = `${firstNumber} ${operation} ${secondNumber}`;
}

document.querySelectorAll(".operators > div").forEach((button) => {
  button.addEventListener("click", function () {
    updateOperation();
    updateDisplay();
  });
});

document.querySelector("#result").addEventListener("click", calculate);
