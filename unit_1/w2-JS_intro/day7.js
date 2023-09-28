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

console.log((randomNumber = Math.floor(Math.random() * 14 + 1)));
/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
console.log('\nEx 3:', 12 + 20);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

console.log('\nEx 4:', (x = 12));

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

console.log('\nEx 5:', (name = 'John Doe'));

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
console.log('\nEx 6:', x - 12);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

console.log(
	'\nEx 7:',
	(name1 = 'john'),
	(name2 = 'John'),
	name1 === name2 ? 'They are equal, ' : 'They are not equal, ',
	name1,
	(name2 = name2.toLowerCase()),
	name1 === name2 ? "They're equal" : 'Not equal'
);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
console.log(
	'\nEx 8:',
	(x2 = randomNumber),
	(function () {
		const numbers = [
			'One',
			'Two',
			'Three',
			'Four',
			'Five',
			'Six',
			'Seven',
			'Eight',
			'Nine',
		];
		return x2 <= 9 ? numbers[x2 - 1] : x2 == 10 ? '= ten' : ' > 10';
	})()
);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

console.log(
	'\nEx 9:',
	randomNumber,
	(message = 'old value = value1, '),
	10 <= randomNumber
		? (message = 'new value = value2')
		: (message = 'new value = value3')
);

// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
console.log(
	'\nEx 1 Extra:',
	(gender = Math.random() < 0.5 ? 'Male' : 'Female')
);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
console.log(
	'\nEx 2 Extra:',
	randomNumber,
	(rand2 = randomNumber / 2),
	randomNumber == 8 ||
		rand2 == 8 ||
		randomNumber + rand2 == 8 ||
		Math.abs(randomNumber - rand2) == 8
		? '= 8'
		: '!= 8'
);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/
console.log('\nEx 3 Extra:', 'Hi'.concat(' There'));

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

console.log(
	'\nEx 4 Extra:',
	[randomNumber, randomNumber / 2, randomNumber * 2].sort(function (a, b) {
		return b - a;
	})
);

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
console.log('\nEx 5 Extra:', (randomNumber + randomNumber * 2) / 2);

// /*EX 6
//  Write a piece of code for finding the longest of two given strings.
// */

console.log(
	'\nEx 6 Extra:',
	'This string is longer'.length > 'This string shorter'.length
);
// /*EX 7
//  Write a piece of code for checking if a given value is a integer or not.
// */
console.log('\n Ex 7 Extra:', Number.isInteger(randomNumber));
/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

console.log('\n Ex 8 Extra:', ((randomNumber * 2) / 100) * randomNumber);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

console.log('\n Ex 9 Extra:', randomNumber % 2 == 0);
