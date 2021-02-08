checkArmyStatus = () => {
  let userAge = Number(document.getElementById("ageOfUser").value);
  let armyStatus = document.getElementById("armyStatusAnswer");
  let text;
  if (userAge < 18) {
    text = "Too young";
  } else if (userAge < 27) {
    text = "Right age for military service";
  } else if (userAge < 41) {
    text = "You are in reserve";
  } else if (userAge < 55) {
    text = "You are in backup reserve";
  } else {
    text = "Too aged";
  }
  armyStatus.textContent = text;
};

checkTheResultTask2 = () => {
  let number1 = Number(document.getElementById("firstNumber").value);
  let number2 = Number(document.getElementById("secondNumber").value);
  let number3 = Number(document.getElementById("thirdNumber").value);
  let sumOfNumbers = number1 + number2 + number3;
  let multiplicationOfNumbers = number1 * number2 * number3;
  let printResultForTask2 = document.querySelector("#resultTask2");

  let textWithResult;

  if (number1 >= 0 && number2 >= 0 && number3 >= 0) {
    textWithResult = sumOfNumbers + " and " + multiplicationOfNumbers;
  } else if (number1 >= 0 || number2 >= 0 || number3 >= 0) {
    textWithResult = sumOfNumbers;
  } else if (number1 < 0 && number2 < 0 && number3 < 0) {
    textWithResult = "Only negatives";
  }
  printResultForTask2.textContent = textWithResult;
};

checkTheResultTask3 = () => {
  let userNumber = Number(document.querySelector("#numberTask3").value);
  let task3Result = document.querySelector("#resultTask3");
  let resultText;
  if (userNumber > 0 && userNumber % 2 === 0) {
    resultText = "That is even number";
  } else if (userNumber < 0) {
    resultText = "This is negative number";
  } else if (userNumber == 0) {
    resultText = "This is zero";
  } else {
    resultText = "This is odd number";
  }
  task3Result.textContent = resultText;
};

BMIResult = () => {
  let userWeight = Number(document.getElementById("weight").value);
  let userHeight = Number(document.getElementById("height").value);
  let BMI = Number.parseFloat(
    (userWeight / (userHeight / 100) ** 2).toFixed(1)
  );
  let BMIResult = document.getElementById("BMIResult");
  let BMIResultExplanation = document.getElementById("BMIExplanation");

  let BMIResultExplanationText;

  if (BMI < 18.5) {
    BMIResultExplanationText = "underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    BMIResultExplanationText = "in normal or healthy weight";
  } else if (BMI >= 25 && BMI <= 29.9) {
    BMIResultExplanationText = "overweight";
  } else if (BMI >= 30) {
    BMIResultExplanationText = "obese";
  }

  BMIResult.textContent = BMI;
  BMIResultExplanation.textContent = BMIResultExplanationText;
};

calculateSalary = () => {
  let salaryPerHour = Number(document.getElementById("salary").value);
  let hoursOfWork = Number(document.getElementById("hours").value);

  let salaryPerDay;
  let extraHours = hoursOfWork - 7;
  let extraHours2 = hoursOfWork - 9;

  if (hoursOfWork <= 7) {
    salaryPerDay = salaryPerHour * hoursOfWork;
  } else if (hoursOfWork > 7 && hoursOfWork <= 9) {
    salaryPerDay =
      salaryPerHour * 7 + (salaryPerHour + salaryPerHour * 0.5) * extraHours;
  } else {
    salaryPerDay =
      salaryPerHour * 7 +
      (salaryPerHour + salaryPerHour * 0.5) * 2 +
      (salaryPerHour + salaryPerHour) * extraHours2;
  }

  document.getElementById("salaryResult").textContent = salaryPerDay + " Euros";
};
