const NUMBER_OF_BULBS = 50;
const DELAY = 650;
let arrayOfBulbs = [];
let counter = 0;
let CHOSEN_BULB;

document.getElementById("startTheGame").addEventListener("click", () => {
  arrayOfBulbs = [];
  counter = 0;

  let element = document.getElementById("bulbs");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  const USER_SPEED = document.getElementById("speed").value;
  const BLINKING_SPEED = USER_SPEED ? USER_SPEED : DELAY;
  const USER_BULBS = document.getElementById("bulbNumber").value;
  const BULBS = USER_BULBS ? USER_BULBS : NUMBER_OF_BULBS;

  //now we create the bulbs
  while (counter < BULBS) {
    const NEW_BULB = document.createElement("div");
    NEW_BULB.className = "bulb";
    document.getElementById("bulbs").appendChild(NEW_BULB);
    arrayOfBulbs[counter] = false; // and all of those bulbs are switched off when we create them
    counter++;
  }
  CHOSEN_BULB = Math.round(Math.random() * arrayOfBulbs.length);
  //reset the pointer back to the first bulb
  counter = 0;
  document.getElementsByClassName("bulb")[counter].classList.add("active"); // make first bulb active

  const bulbChangingFunction = () => {
    document
      .getElementsByClassName("bulb")
      [CHOSEN_BULB].classList.add("chosen");
    arrayOfBulbs[counter] = true; //we lighted up the first bulb
    //swithc off the current bulb
    arrayOfBulbs[counter] = false;
    document.getElementsByClassName("bulb")[counter].classList.remove("active");

    //and move to the next bulb. But we need to check also if it is the last one
    if (counter < BULBS - 1) {
      counter++; //we increase the counter if it hasn't reached yet the final bulb. So if counter is 8, add 1 and get 9. This is how we move to the next bulb
    } else {
      counter = 0; // if the counter is already 9, we go back to the first bulb, so reset to 0
    }
    //we light up the next bulb after we switched off the previous one
    arrayOfBulbs[counter] = true;
    document.getElementsByClassName("bulb")[counter].classList.add("active");
  };

  let startTheBulbs = setInterval(bulbChangingFunction, BLINKING_SPEED);

  //window.addEventListener("load", startTheBulbs);

  document.getElementById("stopButton").addEventListener("click", () => {
    clearInterval(startTheBulbs);
    if (counter === CHOSEN_BULB) {
      document.getElementById("winningMessage").textContent = "YOU WON!";
      document
        .getElementById("winningMessage")
        .classList.add("winning-message");
    } else {
      document.getElementById("winningMessage").textContent = "LOST!";
      document
        .getElementById("winningMessage")
        .classList.remove("winning-message");
    }
  });
});
