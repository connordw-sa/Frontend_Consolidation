/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* Strings: A variable type that can be changed, can contain letters, numbers and symbols. 

   Numbers: A variable type that can be changed, can contain numbers. Can contain integers and decimals. Can do simple mathematical operations using this datatype. 

   Booleans: A variable type that can be changed, is used to describe the state of data, as either being true or false. Like Shrodingers Box, it can only be one or the other. 

   Undefined: A variable type that can be changed, it is a data type with an undetermined value. The computer does not know what is inside it.

   Null: A variable type that can be changed, Null represents a data set with no value. It's a javascript friendly way of describing a data value as empty, like saying it is 0.
   The box is empty.  */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.

*/

/* A variable is a container, it stores data that can be changed later on. 

*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* */
console.log(
  "\n-----------------------------------------------Exercise 3-----------------------------------------------------"
);
let numberOne = 12;
let numberTwo = 20;

let numberResult = numberOne + numberTwo;
console.log(`\nThe answer for exercise 3 is: ` + numberResult);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/*  */
console.log(
  "\n-----------------------------------------------Exercise 4-----------------------------------------------------"
);
let x = 12;
console.log(`\nExercise 4: ` + x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* */
console.log(
  "\n-----------------------------------------------Exercise 5-----------------------------------------------------"
);
let name = `John Doe`;
console.log(`\nExercise 5: ` + name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/*  */
console.log(
  "\n-----------------------------------------------Exercise 6-----------------------------------------------------"
);
let exerciseSix = 12 - x;
console.log(`\nExercise 6: ` + exerciseSix);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/*  */
console.log(
  "\n-----------------------------------------------Exercise 7-----------------------------------------------------"
);
let name1 = `john`;
let name2 = `John`;

if (name1 === name2) {
  console.log(`\nExercise 7: The names are the same.`);
} else {
  console.log(`\nExercise 7: The names are not the same.`);
}

if (name2.toLowerCase() === name1) {
  console.log(`\nThe names are the same if you decapitalise the second name.`);
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/*  */
console.log(
  "\n-----------------------------------------------Exercise 8-----------------------------------------------------"
);
console.log(`\nExercise 8:`);
variableX = Math.floor(Math.random() * 9);

while (variableX === variableX) {
  console.log("X = " + variableX);
  break;
}
/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/*  */
console.log(
  "\n-----------------------------------------------Exercise 9-----------------------------------------------------"
);
let areYouMember = [`I am a member`, `I am not a member`];

let randomItem = areYouMember[Math.floor(Math.random() < 0.5)];
console.log(`\nExercise 9: ` + randomItem);

let ticketPrice = 50;
let ticketDiscount = 25;

let ticketPriceFinal =
  randomItem === `I am a member` ? ticketPrice - ticketDiscount : ticketPrice;

console.log(`\nYour ticket price is: ` + ticketPriceFinal);
