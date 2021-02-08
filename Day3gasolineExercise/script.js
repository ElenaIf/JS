calculate2 = () => {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.getElementById("money").value);
  let answer = document.getElementById("answer");
  let gasComment = document.getElementById("comment");
  let amountOfGas = money / price;
  let text;

  answer.textContent = Math.floor(amountOfGas);

  amountOfGas >= 10
    ? (text = "Good, you can escape now")
    : (text = "Ups, you have to stay here");

  gasComment.textContent = text;
};

/* just some testing here
 function hello() {
  alert("My name is Elena");
  whoAreYou();
}

function whoAreYou() {
  let yourName = prompt("What is your name?");
  greeting(yourName);
}

function greeting(name) {
  document.write(name);
}

hello();

function calculate() {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.getElementById("money").value);
  let answer = document.getElementById("answer");

  answer.textContent = Math.floor(money / price);
}
 */
