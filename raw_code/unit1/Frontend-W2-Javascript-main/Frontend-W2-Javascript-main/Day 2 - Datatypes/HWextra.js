// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

console.log(
  "\n-----------------------------------------------Exercise 1-----------------------------------------------------"
);

const isMale = "is Male";
const gender = isMale === "is Male" ? "They are male" : "They are female";
console.log(gender);

/* WRITE YOUR ANSWER HERE */

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
console.log(
  "\n-----------------------------------------------Exercise 2-----------------------------------------------------"
);
const integerOne = Math.floor(Math.random() * 15);
const integerTwo = Math.floor(Math.random() * 15);
if (integerOne === 8) {
  console.log("\nThe first number is 8");
} else {
  console.log("\nThe first number is not 8");
}
if (integerTwo === 8) {
  console.log("\nThe second number is 8");
} else {
  console.log("\nThe second number is not 8");
}
if (integerOne + integerTwo === 8)
  console.log(integerOne + " & " + integerTwo + " : Their addition = 8");
if (integerOne - integerTwo === 8 || integerTwo - integerOne === 8)
  console.log(integerOne + " & " + integerTwo + " : Their subtraction = 8");

/* WRITE YOUR ANSWER HERE */

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/
console.log(
  "\n-----------------------------------------------Exercise 3-----------------------------------------------------"
);
const stringOne = "Cat";
const stringTwo = "Whiskers";
const concatStrings = stringOne.concat(" " + stringTwo);
console.log("\n" + concatStrings);
/* WRITE YOUR ANSWER HERE */

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
console.log(
  "\n-----------------------------------------------Exercise 4-----------------------------------------------------"
);
const variableOne = Math.floor(Math.random() * 10);
const variableTwo = Math.floor(Math.random() * 10);
const variableThree = Math.floor(Math.random() * 10);
let variableArray = [variableOne, variableTwo, variableThree];
variableArray = variableArray.sort(function (a, b) {
  return a - b;
});
console.log("\n" + variableArray);
/* WRITE YOUR ANSWER HERE */

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
console.log(
  "\n-----------------------------------------------Exercise 5-----------------------------------------------------"
);

const averageOne = Math.floor(Math.random() * 10);
const averageTwo = Math.floor(Math.random() * 10);
const averageOfNumbers = (averageOne + averageTwo) / 2;
console.log(
  "\nThe average of " + averageOne + " " + averageTwo + "= " + averageOfNumbers
);
/* WRITE YOUR ANSWER HERE */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/
console.log(
  "\n-----------------------------------------------Exercise 6-----------------------------------------------------"
);
const characterOne = "dkfgekskfkf";
const characterTwo = "ffefegw";
if (characterOne.length > characterTwo.length)
  console.log("\nString one is longer");
else {
  console.log("\nString two is longer");
}

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

console.log(
  "\n-----------------------------------------------Exercise 7-----------------------------------------------------"
);

givenValue = 14;
console.log("\nIs the value a number? : " + Number.isInteger(givenValue));
/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/
console.log(
  "\n-----------------------------------------------Exercise 8-----------------------------------------------------"
);
const percentageNumberOne = Math.floor(Math.random() * 100);
const percentageNumberTwo = Math.floor(Math.random() * 1000);
console.log(
  percentageNumberOne +
    "% of " +
    percentageNumberTwo +
    " = " +
    ((percentageNumberTwo / 100) * percentageNumberOne).toFixed(2)
);
/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
console.log(
  "\n-----------------------------------------------Exercise 9-----------------------------------------------------"
);
const isOddEven = Math.floor(Math.random() * 100);
if (isOddEven % 2 === 0) {
  console.log(isOddEven + " is Even!");
} else {
  console.log(isOddEven + " is Odd!");
}

/* WRITE YOUR ANSWER HERE */


