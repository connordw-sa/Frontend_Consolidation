/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Strings: A variable type that can be changed, can contain letters, numbers and symbols. 

   Numbers: A variable type that can be changed, can contain numbers. Can contain integers and decimals. Can do simple mathematical operations using this datatype. 

   Booleans: A variable type that can be changed, is used to describe the state of data, as either being true or false. Like Shrodingers Box, it can only be one or the other. 

   Undefined: A variable type that can be changed, it is a data type with an undetermined value. The computer does not know what is inside it.

   Null: A variable type that can be changed, Null represents a data set with no value. It's a javascript friendly way of describing a data value as empty, like saying it is 0.
   The box is empty. 
   ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
------------------------------------------------------------------------
 A variable is a container, it stores data that can be changed later on. 
 -----------------------------------------------------------------------
*/

function randomInteger(value) {
  let randomNumber = Math.floor(Math.random() * value);
  return randomNumber;
}

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
console.log(
  "\nExercise 3-----------------------------------------------------\n" +
    (12 + 20)
);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log(
  "\nExercise 4-----------------------------------------------------\n" + x
);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log(
  "\nExercise 5-----------------------------------------------------\n" + name
);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
console.log(
  "\nExercise 6-----------------------------------------------------\n" +
    (x - 12)
);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/
console.log(
  "\nExercise 7-----------------------------------------------------"
);
console.log(
  "john" === "John"
    ? "They are equal"
    : "They are not equal" + "john" === "John".toLowerCase()
    ? "They're equal"
    : "Not equal"
);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
console.log(
  "\nExercise 8-----------------------------------------------------"
);
switch (randomInteger(11)) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    "six";
    break;
  case 7:
    console.log("seven");
    break;
  case 8:
    console.log("eight");
    break;
  case 9:
    console.log("nine");
    break;
  default:
    console.log("Number is greater than or equal to 10");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/
console.log(
  "\nExercise 9-----------------------------------------------------"
);
console.log(randomInteger(15) > 10 ? "Its bigger than 10" : "Its less than 10");

// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
console.log(
  "\nExercise 1 Extra-----------------------------------------------------"
);
console.log(+Math.random() < 0.5 ? "They are male" : "They are female");

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
console.log(
  "\nExercise 2 Extra-----------------------------------------------------"
);
let numero1 = randomInteger(20);
let numero2 = randomInteger(20);

if (
  numero1 == 8 ||
  numero2 == 8 ||
  numero1 + numero2 == 8 ||
  Math.abs(numero1 - numero2) == 8
) {
  console.log("One of them is 8 or they add/subtract to 8");
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/
console.log(
  "\nExercise 3 Extra-----------------------------------------------------\n" +
    "Hi".concat(" There")
);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let varArray = [randomInteger(10), randomInteger(10), randomInteger(10)].sort(
  function (a, b) {
    return b - a;
  }
);
console.log(
  "\nExercise 4 Extra-----------------------------------------------------\n" +
    varArray
);

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
