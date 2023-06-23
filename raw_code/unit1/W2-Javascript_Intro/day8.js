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
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/*  */ console.log(
  "\n------------------------------------------------------Exercise 1------------------------------------------------------------------"
);

const arrayPositiveNumbers = [1, 2, 3, 4, 5];
console.log(`Exercise 1 Positive numbers: ` + arrayPositiveNumbers);

/* EXERCISE 2
     Create a variable and assign to it an object containing your name, surname, email address and age.
    */

/**/ console.log(
  "\n------------------------------------------------------Exercise 2------------------------------------------------------------------"
);
const myPersonalDetails = {
  firstName: `Connor`,
  lastName: `Wehmeyer`,
  emailAddress: `connor********@gmail.com`,
  myAge: `26`
};
console.log(`\nMy Personal details are: `, myPersonalDetails);

/* EXERCISE 3
     Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
    */

/* */
myPersonalDetails.hasDrivingLicence = true;
console.log(myPersonalDetails);

/* EXERCISE 4
     Remove from the previously created object the age property.
    */

/* */
delete myPersonalDetails.myAge;
console.log(myPersonalDetails);
/* EXERCISE 5
     Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
    */

/* */ console.log(
  "\n------------------------------------------------------Exercise 5------------------------------------------------------------------"
);
const randomPersonalDetails = {
  firstName: `Jeffrey`,
  lastName: `Dahmer`,
  emailAddress: `jeffreydahmer@murdermail.com`
};
console.log(`\nRandom persons details are: `, randomPersonalDetails);

if (myPersonalDetails.emailAddress === randomPersonalDetails.emailAddress) {
  console.log(`\nThe emails are the same`);
} else {
  console.log(`\nThe emails are not the same`);
}
/* EXERCISE 6
     You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
     Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
     Write an algorithm that calculates the total cost to charge the user with.
    */
console.log(
  "\n------------------------------------------------------Exercise 6------------------------------------------------------------------"
);
/*  */

const randomNumber = Math.floor(Math.random() * 100);
const shippingCost = 25;

const totalShippingCost =
  randomNumber >= 50 ? randomNumber : randomNumber + shippingCost;
console.log(`\nYour shopping cart cost is: ` + totalShippingCost);

if (totalShippingCost >= 50) {
  console.log(
    `\nYour basket total is: ` +
      totalShippingCost +
      ` \nCongratulations! You qualify for free shipping`
  );
} else {
  console.log(
    `\nYour total cost including 25 shipping fee is: ` +
      (totalCost = totalShippingCost + shippingCost)
  );
} //
/* EXERCISE 7
     You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
     Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
    */
console.log(
  "\n------------------------------------------------------Exercise 7------------------------------------------------------------------"
);
/* */
if (totalShippingCost >= 50) {
  console.log(
    `\nYour basket total is: ` +
      totalShippingCost +
      ` \n Your 20% black friday discount makes your new total: ` +
      (totalShippingCost * 0.8).toFixed(2) +
      ` \nCongratulations! You qualify for free shipping`
  );
} else {
  console.log(
    `\nYour total cost including 25 shipping fee is: ` +
      totalCost +
      `\n Your 20% black friday discount makes your new total: ` +
      (totalCost = (totalShippingCost + shippingCost) * 0.8).toFixed(2)
  );
}

/* EXERCISE 8
     Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
     Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
    */
console.log(
  "\n------------------------------------------------------Exercise 8------------------------------------------------------------------"
);

const carDetails = {
  brand: `Mercedes`,
  model: `Mclaren`,
  licensePlate: `EH21 7HW`
};

const carDetails2 = Object.assign({}, carDetails);
carDetails2.licensePlate = `73H2 8JK`;

const carDetails3 = Object.assign({}, carDetails);
carDetails3.licensePlate = `71222 8JK`;
const carDetails4 = Object.assign({}, carDetails);
carDetails4.licensePlate = `731572 8JK`;
const carDetails5 = Object.assign({}, carDetails);
carDetails5.licensePlate = `73H2 ffff8JK`;
const carDetails6 = Object.assign({}, carDetails);
carDetails6.licensePlate = `733356H2 8JK`;
console.log(
  carDetails,
  "\n",

  carDetails2,
  "\n",

  carDetails3,
  "\n",

  carDetails4,
  "\n",

  carDetails5,
  "\n",

  carDetails6
);

/* EXERCISE 9
     Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
    */

/*  */ console.log(
  "\n------------------------------------------------------Exercise 9------------------------------------------------------------------"
);

const carsForRent = [
  carDetails,
  carDetails2,
  carDetails3,
  carDetails4,
  carDetails5,
  carDetails6
];

console.log(carsForRent);

/* EXERCISE 10
     Remove the first and the last car from the carsForRent array.
    */

/* */ console.log(
  "\n------------------------------------------------------Exercise 10------------------------------------------------------------------"
);
const deletefirst = carsForRent.shift();
const deleteLast = carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
     Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
    */

/* */ console.log(
  "\n------------------------------------------------------Exercise 11------------------------------------------------------------------"
);
console.log(carDetails.brand, carDetails.model, carDetails.licensePlate);

/* EXERCISE 12
     Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
     Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
    */
console.log(
  "\n------------------------------------------------------Exercise 12------------------------------------------------------------------"
);

const carsForSale = [];
const carOne = "Mercedes";
const carTwo = "Toyota";
const carThree = "Nissan";
carsForSale.push(carOne, carTwo, carThree);
console.log(carsForSale);

const totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);
/*  */

/* EXERCISE 13
     Using a loop, print to the console all the data for each car in the carsForSale array.
    */
console.log(
  "\n------------------------------------------------------Exercise 13------------------------------------------------------------------"
);
const allData = carsForSale;
for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}

/*  */

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
