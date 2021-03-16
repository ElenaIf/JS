console.log("Hello");

const message = "Hello from const message";

console.log(message);
console.log("Type of 10 is", typeof(10));
console.log(typeof(message));
console.log(Boolean(""));
console.log(true && false);
console.log(true || false);
console.log(true || true);
console.log(false || null);

if (false) {
    console.log("This is true");
} else {
    console.log("Not true");
}

if ((1===1 && 2===2) === false) {
    console.log("This is true");
} else {
    console.log("This is not true");
}

if (1==="1") {
    console.log("This is true");
} else {
    console.log("This is not true");
}

let randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);

if (randomNumber === 1) {
    console.log("The number is 1");
} else {
    console.log("Not 1");
};

let newNumber = Math.floor(Math.random() * 100);
console.log(newNumber);

switch (newNumber) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 10:
        console.log("Ten");
        break;
    default:
        console.log("No text for that");
};

if (newNumber < 32 && newNumber > 0) {
    console.log("Valid date");
} else {
    console.log("Not a valid date")
};
