// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
console.log(
  "\n-----------------------------------------------Exercise 1-----------------------------------------------------"
);
const revertArray = [1, 3, 5];
console.log(
  revertArray.sort(function (a, b) {
    return b - a;
  })
);

/* WRITE YOUR ANSWER HERE */

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/ console.log(
  "\n-----------------------------------------------Exercise 2-----------------------------------------------------"
);
const maximumArray = [
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15)
];
console.log(maximumArray);
const maximumValue = Math.max.apply(null, maximumArray);
console.log(maximumValue);

/* WRITE YOUR ANSWER HERE */

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/ console.log(
  "\n-----------------------------------------------Exercise 3-----------------------------------------------------"
);
const minimumArray = [
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15)
];
console.log(minimumArray);
const minimumValue = Math.min.apply(null, minimumArray);
console.log(minimumValue);
/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/ console.log(
  "\n-----------------------------------------------Exercise 4-----------------------------------------------------"
);
const evenArray = [
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15)
];
console.log(evenArray);
const evenValue = evenArray.filter((number) => {
  return number % 2 === 0;
});
console.log(evenValue);

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
console.log(
  "\n-----------------------------------------------Exercise 5-----------------------------------------------------"
);
const deleteEvenArray = [
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15)
];
console.log(deleteEvenArray);
const evenDeleteValue = deleteEvenArray.filter((number) => {
  return number % 2 !== 0;
});
console.log(evenDeleteValue);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/ console.log(
  "\n-----------------------------------------------Exercise 6-----------------------------------------------------"
);
const charString =
  "Hello I am going to remove all of the vowels. uuuuuuuuuuuuuuuuu";
console.log(charString);
const removeVowels = charString.replace(/[aeiou]/gi, "");
console.log(removeVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/ console.log(
  "\n-----------------------------------------------Exercise 7-----------------------------------------------------"
);
const increaseArray = [
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15),
  Math.floor(Math.random() * 15)
];
console.log(increaseArray);
const addOne = increaseArray.map((num) => num + 1);
console.log(addOne);
/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/ console.log(
  "\n-----------------------------------------------Exercise 8-----------------------------------------------------"
);

const stringArray = ["Connor", "is", "good", "at", "javascript"];
console.log(stringArray);
numOfChars = stringArray.map((str) => str.length);
console.log(numOfChars);
