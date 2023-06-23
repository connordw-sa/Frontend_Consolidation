// my first javascript. It's going to be about me

let myFirstName = " Connor";
let mySecondName = " Douglas";
let mySurname = " Wehmeyer";

console.log("Hello, my name is" + myFirstName + mySecondName + mySurname);

let myAge = 26;
let currentYear = 2022;

let myBirthYear = currentYear - myAge;

console.log("My Birthyear is " + myBirthYear);

//Recipe for Spaghetti alla Carbonara

//Below is a list of ingredients

let spaghettiDry = 400;
let guancialeRaw = 250;

//One yolk is 16 grams
let freshEggYolks = 6;
pecorinoRomanoCheese = 50;
rawBlackPepper = 4;

let totalEggWeight = 6 * 16;
console.log(totalEggWeight);
//total egg weight is 96

//Cut the guanciale
//Time to combine the egg yolks

let eggAndCheese = totalEggWeight + pecorinoRomanoCheese;
console.log(eggAndCheese);

//Roasting black pepper and add small amount to egg and cheese mixture
let eggCheesePepper = eggAndCheese + rawBlackPepper / 2;
console.log(eggCheesePepper);

let remainingBlackPepper = rawBlackPepper / 2;
console.log(remainingBlackPepper);

//Cooking the guanciale will reduce weight by 50%
let guancialeCooked = 250 / 2;
console.log(guancialeCooked);

//Time to cook the pasta
//Pasta swells to nearly 2x the size when cooked
let saltSmallAmount = 2;
let pastaCooked = spaghettiDry * 1.9 + saltSmallAmount;
console.log(pastaCooked);

//Now drain the pasta
//Pour 2 spoons of hot pasta water into guanciale pan
//1 tablespoon of water is 14.79g

let hotPastaWater = 14.79 * 2;
console.log(hotPastaWater);

let guancialeAndWater = hotPastaWater + guancialeCooked;

//Time to mix pasta, meat, cheese and eggs

let secondFinalMix = guancialeAndWater + pastaCooked + eggCheesePepper;
console.log(secondFinalMix);

//Add in the final ingredient

let spaghettiAllaCarbonara = secondFinalMix + remainingBlackPepper;

console.log(
  "The Spaghetti alla Carbonara is complete: " + " " + spaghettiAllaCarbonara
);

let perPortionFour = spaghettiAllaCarbonara / 4;
console.log("Per Portion, everyone receives :" + " " + perPortionFour);
