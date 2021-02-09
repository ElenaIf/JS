let text = document.getElementById("car");

let car = {
  type: "Audi",
  year: 2011,
  owner: "Lena",
  city: "Helsinki",
  calcAge() {
    this.age = 2021 - this.year;
    return this.age;
  },
};

console.log(car);
console.log(car.year);
console.log(car.city);

car.city = "Espoo"; // we replaced one city with another
console.log(car.city);

car.color = "red"; // we added a new property into the onject
console.log(car);

car.color = "blue"; // replaced that property
console.log(car);

delete car.city;
console.log(car);

text.textContent = `Your car is  ${car.color} color and the year is ${
  car.year
}. The age of the car is ${car.calcAge()} years`;
// text.textContent = car; this will show only the word Object. You cannot display the whole object

//now we make a constructor
function newCar(type, year, owner, city) {
  this.carType = type;
  this.carYear = year;
  this.carOwner = owner;
  this.carCity = city;
}

let myCar = new newCar("Ferrari", 2015, "Lena", "Helsinki");
let myCar2 = new newCar("BMW", 2010, "Toni", "Espoo");
console.log(myCar);
console.log(myCar2);
console.log(newCar);
