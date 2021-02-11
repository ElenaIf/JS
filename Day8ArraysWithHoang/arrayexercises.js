let expectedResult;
/**
 * Task 1: You are provided with 2 arrays, firstArray, and secondArray
 * Make a new thirdArray, that contains elements of the firstArray, followed by
 * elements of the secondArray.
 * Please don't do it manually :)
 */

let firstArray = [1, 2, 3, 4, "a", true, false];
let secondArray = ["hello", "I", "am", "not", "an", "array", "jkd"];

expectedResult = [
  1,
  2,
  3,
  4,
  "a",
  true,
  false,
  "hello",
  "I",
  "am",
  "not",
  "an",
  "array",
  "jkd",
];

let thirdArray = firstArray.concat(secondArray);

console.log("First task");
console.log("Original arrays");
console.log(firstArray);
console.log(secondArray);
console.log("Result");
console.log(thirdArray);

/**
 * Task 2: You are provided with an array of numbers
 * create another array that contains elements of the provided array, but in reverse order
 * do not use .reverse() method
 * Please don't do it manually :)
 */

let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

expectedResult = [20000, 12345, 10000, 500, 234, 123456, 10000, 500, 1];

let reverseFourthArray = [];
for (let i = fourthArray.length - 1; i >= 0; i--) {
  reverseFourthArray.push(fourthArray[i]);
}

console.log("Second task");
console.log("Original array");
console.log(fourthArray);
console.log("Result");
console.log(reverseFourthArray);

/**
 * Task 3: You are provided with an array that contains some duplicated elements
 * create another array that contains ONLY unique elements of the given array
 * the order of the new array isn't important
 * Please don't do it manually :)
 */

let fifthArray = [
  1,
  500,
  10000,
  "world",
  "yeah",
  "bye bye",
  123456,
  234,
  500,
  10000,
  12345,
  20000,
  true,
  true,
  false,
  "hello",
  "world",
];

expectedResult = [
  1,
  500,
  10000,
  "world",
  "yeah",
  "bye bye",
  123456,
  234,
  12345,
  20000,
  true,
  false,
];

console.log("Third task");
console.log("Original array");
console.log(fifthArray);

// here we create Set. Set is an object, where we add elements from our array. It is not supported in IE though...
// But since I want an array, not an onject, I modify it back into array using Array From:
let filteredFifthArray = Array.from(new Set(fifthArray));
console.log("Result");
console.log(filteredFifthArray);
//console.log(expectedResult);
//Hoang solution:
let resultArray = [];
fifthArray.forEach((num) => {
  if (resultArray.indexOf(num) === -1) {
    resultArray.push(num);
  }
});

/*
the option below also includes sorting the array

let filteredFifthArray = [];

fifthArray.sort((a, b) => {
  return a - b;
});

for (i = 0; i <= fifthArray.length - 1; i++) {
  if (fifthArray[i] != fifthArray[i + 1]) {
    filteredFifthArray.push(fifthArray[i]);
  }
}

console.log(fifthArray);
console.log(filteredFifthArray);
*/

/**
 * Task 4: You are provided 2 arrays
 * write a logic that will compare elements of the 2 arrays to find out if they contain same elements
 * it is possible that the one of the array is a sub array of the other, in which case they shouldn't be considered as containing same elements
 * the order of elements in each array can be different
 * Please don't do it manually :)
 */

// sixthArray and seventhArray should be considered as being similar
let sixthArray = [1, 2, 3, "hello", true, false];
let seventhArray = ["hello", false, 1, 3, true, 2];

// eighthArray and ninthArray are not
let eighthArray = [1, 2, true, false, "hello", 3, "moi moi"];
let ninthArray = [];

const arrayComparison1 = () => {
  let sortedsixthArray = sixthArray.sort();
  let sortedseventhArray = seventhArray.sort();
  // join() makes a string out of the array. So we can compare strings
  if (sortedsixthArray.join() == sortedseventhArray.join()) {
    return `Array 6 and 7 are aqual`;
  } else {
    return `They are not equal`;
  }
};

const arrayComparison2 = () => {
  let sortedEighthArray = eighthArray.sort();
  let sortedNinthArray = ninthArray.sort();
  if (sortedEighthArray.join() == sortedNinthArray.join()) {
    return `Array 8 and 9 are aqual`;
  } else {
    return `They are not equal`;
  }
};

console.log("Fourth task");
console.log("Result");
console.log(`Comparing arrays 6 and 7: ${arrayComparison1()}`);
console.log(`Comparing arrays 8 and 9: ${arrayComparison2()}`);

/**
 * Task 5: The following array is nested (having array inside array)
 * you need to create a new array that will deconstruct the nested array so that it is no longer nested
 * the order isn't important
 * Please don't do it manually :)
 */

let tenthArray = [
  "one",
  "two",
  "three",
  1,
  2,
  3,
  false,
  "false",
  [["oh oh"], [[["tom"]], "jerry"], ["not", "again", ["yes", "whynot?", true]]],
];

expectedResult = [
  "one",
  "two",
  "three",
  1,
  2,
  3,
  false,
  "false",
  "oh oh",
  "tom",
  "jerry",
  "not",
  "again",
  "yes",
  "whynot?",
  true,
];

// I will use flat method. It is possible to choose also how many levels I want to make flat. Can put there number or "Infinity"
let modifiedTenthArray = tenthArray.flat(4);

console.log("Fifth task");
console.log("Result");
console.log(modifiedTenthArray);

/**
 * Task 6: The array you are given contains all kinds of personal information
 * Filter out all email addresses into a separate array
 * Filter out all phone numbers into a separate array
 * Please don't do it manually :)
 */

let peopleInfo = [
  "ron",
  "044 123 345",
  "lonelyspider@email.com",
  "hermione",
  "0123-414-443",
  "hermione@email.com",
  "harry",
  "(0123) 123 4324",
  "ginnyforever@email.com",
];

let expectedNamesArray = ["ron", "hermione", "harry"];
let expectedPhones = ["044 123 345", "0123-414-443", "(0123) 123 4324"];
let expectedEmails = [
  "lonelyspider@email.com",
  "hermione@email.com",
  "ginnyforever@gmail.com",
];

// phone number - has number but does not have @ sign. Email has @ sign.
//filer goes through every element of the array

//will return all the names
let peopleNames = peopleInfo.filter((el) => {
  const hasNumber = el.split("").some((el) => !Number.isNaN(parseInt(el)));
  if (hasNumber) return false;
  return el.indexOf("@") === -1;
});

//will return all the phone numbers
let peopleNumbers = peopleInfo.filter((el) => {
  const hasNumber = el.split("").some((el) => !Number.isNaN(parseInt(el)));
  if (hasNumber) return true;
  return false;
});

//will return all the emails
let peopleEmails = peopleInfo.filter((el) => {
  const hasNumber = el.split("").some((el) => !Number.isNaN(parseInt(el)));
  if (hasNumber) return false;
  return el.indexOf("@") != -1;
});

console.log("Sixth task");
console.log("Names");
console.log(peopleNames);
console.log("Phones");
console.log(peopleNumbers);
console.log("Emails");
console.log(peopleEmails);

/**
 * Task 7: The current array contains a sample text
 * use the .split(' ') method to split the paragraph to an array of words
 * iterate through the array of words, check if each word contain the letter 'o'
 * if it does, store a value of 1 to a newArray, otherwise 0
 * Please don't do it manually :)
 * Example:
 * sample = ['Lorem', 'ipsum', 'dolor', 'sit']
 * result = [1, 0, 1, 0]
 *
 */

const sample =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.";

let newArray = [];
let wordsArray = sample.split(" ");

wordsArray.forEach((el) => {
  if (el.includes("o") || el.includes("O")) {
    newArray.push(1);
  } else {
    newArray.push(0);
  }
});

console.log("Seventh task");
console.log("Splitted line of words");
console.log(wordsArray);
console.log("Result");
console.log(newArray);
