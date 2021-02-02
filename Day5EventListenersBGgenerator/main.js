let form = document.querySelector("form");
//query selector takes only the first one element it finds! But if you need all, you should use querySelectorAll. But If you need to be very specific, use ids and classes
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let text = document.querySelector("p");

let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = (event) => {
  event.preventDefault();
  let selectedValue;

  // new for loop for JS

  for (const v of direction) {
    if (v.checked) {
      selectedValue = v.value;
    }
  }

  //important: no space after the linear-gradient!
  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value},${color2.value})`;
  text.textContent = `background-image: linear-gradient(${selectedValue}, ${color1.value}, ${color2.value});`;
};

/* possible to use click also, but change is better for radiobuttons.
if we want to use button for code to work, we use submit.
but submit works only a second (it is sending and reloading the page). We need to prevent the default behaviour - reload - in the function */
form.addEventListener("submit", setGradient);
