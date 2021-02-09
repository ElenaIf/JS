//console.table()
let form = document.querySelector("form");
let arrayOfCars = [];

function CarSet(plate, maker, model, price, color) {
  this.carPlate = plate;
  this.carMaker = maker;
  this.carModel = model;
  this.carPrice = price;
  this.carColor = color;
  this.discount = function () {
    if (this.carPrice > 20000) {
      return this.carPrice - this.carPrice * 0.25;
    } else {
      return this.carPrice;
    }
  };
}

const addMyCar = (event) => {
  event.preventDefault(); // precents the button from reloading the page

  let yourPlate = document.getElementById("carPlate").value;
  let yourMaker = document.getElementById("carMaker").value;
  let yourModel = document.getElementById("carModel").value;
  let yourPrice = document.getElementById("carPrice").value;
  let yourColor = document.getElementById("carColor").value;

  let userCar = new CarSet(
    yourPlate,
    yourMaker,
    yourModel,
    yourPrice,
    yourColor
  );

  arrayOfCars.push(userCar);
  console.table(arrayOfCars);
  form.reset();
};

const searchForCar = (event) => {
  event.preventDefault();

  let userSearchRequest = document.getElementById("carPlate").value;

  for (let counter = 0; counter < arrayOfCars.length; counter++) {
    if (arrayOfCars[counter].carPlate == userSearchRequest) {
      document.getElementById(
        "modelText"
      ).textContent = `The model of your car is ${arrayOfCars[counter].carModel} and the producer is ${arrayOfCars[counter].carMaker}.`;
      break;
    } else {
      document.getElementById(
        "modelText"
      ).textContent = `Could not find car with such a plate number.`;
    }
  }
};

const checkDiscount = (event) => {
  event.preventDefault();

  let userSearchRequest = document.getElementById("carPlate").value;

  for (let counter = 0; counter < arrayOfCars.length; counter++) {
    if (userSearchRequest == arrayOfCars[counter].carPlate) {
      document.getElementById(
        "discountText"
      ).textContent = `Your price with the discount will be ${arrayOfCars[
        counter
      ].discount()}.`;
      break;
    } else {
      document.getElementById(
        "discountText"
      ).textContent = `Could not find car with such a plate number.`;
    }
  }
};

document.getElementById("submitButton").addEventListener("click", addMyCar);
document.getElementById("search").addEventListener("click", searchForCar);
document.getElementById("discount").addEventListener("click", checkDiscount);
