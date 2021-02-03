const NUMBER_OF_BULBS = 20;
let DELAY = 500;
const CHOSEN_BULB = 5;

let counter = 0;
let arrayOfBulbs = [];

//now we create the bulbs
while (counter < NUMBER_OF_BULBS) {
  const NEW_BULB = document.createElement("div");
  NEW_BULB.className = "bulb";
  document.getElementById("bulbs").appendChild(NEW_BULB);
  arrayOfBulbs[counter] = false; // and all of those bulbs are switched off when we create them
  counter++;
}

//reset the pointer back to the first bulb
counter = 0;
arrayOfBulbs[counter] = true; //we lighted up the first bulb

const startTheBulbs = setInterval(() => {
  //swithc off the current bulb
  arrayOfBulbs[counter] = false;
  document.getElementsByClassName("bulb")[counter].classList.remove("active");
  document.getElementsByClassName("bulb")[CHOSEN_BULB].classList.add("chosen");

  //and move to the next bulb. But we need to check also if it is the last one
  if (counter < NUMBER_OF_BULBS - 1) {
    counter++; //we increase the counter if it hasn't reached yet the final bulb. So if counter is 8, add 1 and get 9. This is how we move to the next bulb
  } else {
    counter = 0; // if the counter is already 9, we go back to the first bulb, so reset to 0
  }
  //we light up the next bulb after we switched off the previous one
  arrayOfBulbs[counter] = true;
  document.getElementsByClassName("bulb")[counter].classList.add("active");
}, DELAY);

//window.addEventListener("load", startTheBulbs);

document.getElementById("stopButton").addEventListener("click", () => {
  clearInterval(startTheBulbs);
});

document.getElementById("startOver").addEventListener("click", () => {
  location.reload();
});
