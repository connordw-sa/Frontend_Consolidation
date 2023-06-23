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
