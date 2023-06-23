/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log(
  `\n-------------------------------------------Exercise 1---------------------------------------------------------`
);

const l1 = Math.floor(Math.random() * 14) + 1;
const l2 = Math.floor(Math.random() * 19) + 1;
console.log(l1, l2);
function area(l1, l2) {
  return l1 * l2;
}

console.log(`\nThe area of your rectangle = ` + area(l1, l2));
//console.log(`Your`)

/* EXERCISE 2
   Write a function called "crazySum" which receives two integers as parameters.
   It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
  */
console.log(
  `\n-------------------------------------------Exercise 2---------------------------------------------------------`
);

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

const randomNumber2 = Math.floor(Math.random() * 10);
console.log(randomNumber2);

function crazySum(randomNumber, randomNumber2) {
  if (randomNumber === randomNumber2) return (randomNumber + randomNumber2) * 3;
  else return randomNumber + randomNumber2;
}
console.log(crazySum(randomNumber, randomNumber2));

/* EXERCISE 3
   Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
   It should return triple their absolute difference if the given number is greater than 19.
  */

console.log(
  `\n-------------------------------------------Exercise 3---------------------------------------------------------`
);
const randomNumero = Math.floor(Math.random() * 29) + 1;
console.log(randomNumero);
function crazyDiff(randomNumero) {
  const difference = randomNumero - 19;
  if (randomNumero > 19) return Math.abs(difference) * 3;
  else return Math.abs(difference);
}
console.log(crazyDiff(randomNumero));
/* EXERCISE 4
   Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
  */
console.log(
  `\n-------------------------------------------Exercise 4---------------------------------------------------------`
);
const n = Math.floor(Math.random() * 399) + 1;
console.log(n);
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) return true;
  else return false;
}
console.log(boundary(n));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
   Write a function called "strivify" which accepts a string as a parameter.
   It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
  */ console.log(
  `\n-------------------------------------------Exercise 5---------------------------------------------------------`
);
function strivify(string) {
  const stringArray = string.split(" ");
  if (stringArray[0] === "strive") return string;
  else {
    stringArray.unshift("strive");
    const newString = stringArray.join(" ");
    return newString;
  }
}

console.log(strivify("This sentence now starts with strive"));
console.log(strivify("strive this sentence already started with strive"));

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
   Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
   HINT: Modulus Operator
  */ console.log(
  `\n-------------------------------------------Exercise 6---------------------------------------------------------`
);
const exSixRandom = Math.floor(Math.random() * 99) + 1;
console.log(exSixRandom);

function check3and7(exSixRandom) {
  if (exSixRandom % 7 === 0 || exSixRandom % 3 === 0)
    console.log("it is a multiple of 3 or 7");
  else {
    console.log("it is not a multiple of 3 or 7");
  }
}

check3and7(exSixRandom);
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
   Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
  */ console.log(
  `\n-------------------------------------------Exercise 7---------------------------------------------------------`
);
function reverseString(str) {
  let splitString = str.split("");
  let reverseofString = splitString.reverse();

  let joinString = reverseofString.join("");
  return joinString;
}

console.log(reverseString("Hi I am in reverse now"));
/* EXERCISE 8
   Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
  */ console.log(
  `\n-------------------------------------------Exercise 8---------------------------------------------------------`
);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
   Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
  */ console.log(
  `\n-------------------------------------------Exercise 9---------------------------------------------------------`
);
function cutString(str) {
  let removeFirstLast = str.slice(1, -1);
  return removeFirstLast;
}
console.log(cutString("The first and last characters are gone"));

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
   Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
  */ console.log(
  `\n-------------------------------------------Exercise 10---------------------------------------------------------`
);
let exTenN = Math.floor(Math.random() * 9) + 1;
function giveMeRandom(exTenN) {
  let arrayOfRandom = [];
  for (let i = 0; i < exTenN; i++) {
    arrayOfRandom[i] = Math.floor(Math.random() * 9) + 1;
  }
  return arrayOfRandom;
}
console.log(giveMeRandom(exTenN));

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
   Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
  */

// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

console.log(
  `\n-------------------------------------------Exercise 1---------------------------------------------------------`
);
let x = Math.floor(Math.random() * 9) + 1;
function giveMeRandom(x) {
  let arrayOfRandom = [];
  for (let i = 0; i < x; i++) {
    arrayOfRandom[i] = Math.floor(Math.random() * 9) + 1;
  }
  return arrayOfRandom;
}

function checkArray(array) {
  let total = 0;
  for (let numExOne of array) {
    if (numExOne > 5) {
      console.log(numExOne, " is greater than 5");
      total += numExOne;
    }
  }
  return total;
}
let resultFirst = giveMeRandom(x);
console.log(resultFirst);
let result = checkArray(resultFirst);
console.log("The numbers bigger than 5 added together: ", result);

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

console.log(
  `\n-------------------------------------------Exercise 2---------------------------------------------------------`
);

let shoppingArray = [
  {
    price: Math.floor(Math.random() * 19) + 1,
    nameItems: "hats",
    idCart: "1d03a",
    quantityShip: Math.floor(Math.random() * 4) + 1
  },
  {
    price: Math.floor(Math.random() * 19) + 1,
    nameItems: "beer",
    idCart: "fe6ga",
    quantityShip: Math.floor(Math.random() * 4) + 1
  },
  {
    price: Math.floor(Math.random() * 19) + 1,
    nameItems: "toys",
    idCart: "wdr3a",
    quantityShip: Math.floor(Math.random() * 4) + 1
  },
  {
    price: Math.floor(Math.random() * 19) + 1,
    nameItems: "shoes",
    idCart: "jl941",
    quantityShip: Math.floor(Math.random() * 4) + 1
  },
  {
    price: Math.floor(Math.random() * 19) + 1,
    nameItems: "steaks",
    idCart: "dbn6g",
    quantityShip: Math.floor(Math.random() * 4) + 1
  }
];
console.log(shoppingArray);

function shoppingCart(arr) {
  let totalShopping = 0;
  for (let i = 0; i < arr.length; i++) {
    totalShopping += arr[i].price * arr[i].quantityShip;
  }
  return totalShopping;
}
let totalShoppingFinal = shoppingCart(shoppingArray);

console.log("Total shopping cart cost: " + totalShoppingFinal);
/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

console.log(
  `\n-------------------------------------------Exercise 3---------------------------------------------------------`
);

newObject = [
  {
    price: Math.floor(Math.random() * 19) + 1,
    nameItems: "wine",
    idCart: "sbb6f",
    quantityShip: Math.floor(Math.random() * 4) + 1
  }
];
function addToShoppingCart(shoppingArray, newObject) {
  let x = shoppingArray;
  let y = newObject;
  let z = x.concat(y);
  return z;
}

shoppingListFinal = addToShoppingCart(shoppingArray, newObject);
console.log("\n------New Array-------", shoppingListFinal);
/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

console.log(
  `\n-------------------------------------------Exercise 4---------------------------------------------------------`
);
function maxShoppingCart(arr) {
  let maxPrice = 0;
  for (let priceArr of arr)
    if (maxPrice < priceArr.price) {
      maxPrice = priceArr.price;
      expensiveName = priceArr;
    }

  console.log(
    "The most expensive item is:",
    expensiveName.nameItems,
    ", which costs: ",
    expensiveName.price
  );
}
maxShoppingCart(shoppingListFinal);
/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

console.log(
  `\n-------------------------------------------Exercise 5---------------------------------------------------------`
);
function latestShoppingCart(arr) {
  return arr[arr.length - 1];
}
console.log(
  "The last item in the cart is: ",
  latestShoppingCart(shoppingListFinal)
);
/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

console.log(
  `\n-------------------------------------------Exercise 6---------------------------------------------------------`
);
let integerX = Math.floor(Math.random() * 7) + 1;
function loopUntil(integerX) {
  let compareNumber = 0;
  while (compareNumber < 3) {
    let integerX = Math.floor(Math.random() * 7) + 1;
    let randomNumber = Math.floor(Math.random() * 7) + 1;
    console.log("X = ", integerX);
    console.log("Current random number: ", randomNumber);
    if (randomNumber > integerX) {
      compareNumber++;
    } else counter = 0;
    console.log("The random number counter is: ", compareNumber);
  }
}
loopUntil(integerX);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

console.log(
  `\n-------------------------------------------Exercise 7---------------------------------------------------------`
);
let averageArray = [
  Math.floor(Math.random() * 19) + 1,
  Math.floor(Math.random() * 19) + 1,
  "Connor",
  Math.floor(Math.random() * 19) + 1,
  "is the best",
  Math.floor(Math.random() * 19) + 1,
  Math.floor(Math.random() * 19) + 1
];
console.log(averageArray);
function average(arr) {
  let x = 0;
  let y = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      x = x + arr[i];
      y++;
    }
  }
  return x / y;
}
console.log(average(averageArray));

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

console.log(
  `\n-------------------------------------------Exercise 8---------------------------------------------------------`
);
let longestStringArray = [
  "This",
  "is",
  "not",
  "a",
  "very",
  "long",
  "string",
  "but",
  "justification",
  "is"
];
function longest(arr) {
  let maximum = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > maximum) {
      maximum = arr[i].length;
      word = arr[i];
    }
  }
  console.log("The longest word is", word, "at", maximum, "letters long");
}
longest(longestStringArray);
/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

console.log(
  `\n-------------------------------------------Exercise 9---------------------------------------------------------`
);
function emailContent(email) {
  if (email.includes("SPAM") || email.includes("SCAM")) {
    return false;
  } else {
    return true;
  }
}

console.log(emailContent("This email is SPAM"));
console.log(emailContent("This email is SCAM"));
console.log(emailContent("This email is safe"));

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

console.log(
  `\n-------------------------------------------Exercise 10---------------------------------------------------------`
);
function days(day) {
  let today = new Date();
  let date = today.getDate();
  console.log("The date today is: ", date, " of October");

  return date - day;
}

console.log(
  "The difference between the 3rd of October and today is:",
  days(3),
  "days"
);

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
console.log(
  `\n-------------------------------------------Exercise 11---------------------------------------------------------`
);
function matrixGenerator(x, y) {
  let emptyMatrix = [];
  for (let i = 0; i < y; i++) {
    for (let a = 0; a < x; a++) {
      emptyMatrix.push(i.toString() + a.toString());
    }
  }
  console.log("-----MATRIX----- ", emptyMatrix);
}

matrixGenerator(
  Math.floor(Math.random() * 4) + 1,
  Math.floor(Math.random() * 4) + 1
);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
