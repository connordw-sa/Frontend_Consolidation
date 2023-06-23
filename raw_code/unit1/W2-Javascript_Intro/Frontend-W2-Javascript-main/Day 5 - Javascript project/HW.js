/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/
console.log(
  "\n------------------------------------------------------Exercise A------------------------------------------------------------------"
);
let test = "This is a test";
console.log(test);
/* EXERCISE B
  
  Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
  
  */ console.log(
  "\n------------------------------------------------------Exercise B------------------------------------------------------------------"
);
let sum = 10 + 20;
console.log(sum);

/* EXERCISE C
  
  Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
  
  */ console.log(
  "\n------------------------------------------------------Exercise C------------------------------------------------------------------"
);
let random = Math.floor(Math.random() * 20);
console.log(random);

/* EXERCISE D
  
  Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
  
  */ console.log(
  "\n------------------------------------------------------Exercise D------------------------------------------------------------------"
);
let me = {
  name: "Connor",
  surname: "Wehmeyer",
  age: 26
};
console.log(me);
/* EXERCISE E
  
  Write a piece of code for programmatically removing the age property from the previously create object.
  
  */ console.log(
  "\n------------------------------------------------------Exercise E------------------------------------------------------------------"
);
delete me.age;
console.log(me);
/* EXERCISE F
  
  Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
  
  */ console.log(
  "\n------------------------------------------------------Exercise F------------------------------------------------------------------"
);
me.skills = ["HTML", "CSS", "Javascript"];
console.log(me);

/* EXERCISE G
  
  Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
  
  */ console.log(
  "\n------------------------------------------------------Exercise G------------------------------------------------------------------"
);
delete me.skills.pop();
console.log(me);
// JS Functions

/* EXERCISE 1
  
  Write a function called dice; it should randomize an integer number between 1 and 6.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 1------------------------------------------------------------------"
);
function dice(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

dice(1, 6);
/* EXERCISE 2
  
  Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 2------------------------------------------------------------------"
);
function whoIsBigger(x, y) {
  if (x > y) {
    console.log(x, "is bigger than", y);
  } else {
    console.log(y, "is bigger than", x);
  }
}
whoIsBigger(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));

/* EXERCISE 3
  
  Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
  
  Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
  
  */ console.log(
  "\n------------------------------------------------------Exercise 3------------------------------------------------------------------"
);
function splitMe(string) {
  console.log(string.split(" "));
}
splitMe("I Love Coding");
/* EXERCISE 4
  
  Write a function called deleteOne which receives a string and a boolean as parameters.
  
  If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 4------------------------------------------------------------------"
);
function deleteOne(string, boolean) {
  if (boolean === true) {
    console.log(string.slice(1));
  } else {
    console.log(string.slice(0, string.length - 1));
  }
}
let randomBoolean = Math.random() < 0.5;
deleteOne("Epicode", randomBoolean);
/* EXERCISE 5
  
  Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
  
  Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
  
  */ console.log(
  "\n------------------------------------------------------Exercise 5------------------------------------------------------------------"
);
function onlyLetters(string) {
  let newString = string.replace(/[0-9]/g, "");
  console.log(newString);
}

onlyLetters("I have 4 dogs");

/* EXERCISE 6
  
  Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 6------------------------------------------------------------------"
);
function isThisAnEmail(string) {
  let validEmail = /\S+@\S+\.\S+/;
  return validEmail.test(string);
}
console.log(isThisAnEmail("testemail@gmail.com"));

/* EXERCISE 7
  
  Write a function called whatDayIsIt that should return the current day of the week.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 7------------------------------------------------------------------"
);
function whatDayIsIt() {
  let today = new Date();
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let dayNow = today.getDay();
  console.log("The day today is: ", daysOfWeek[dayNow]);
}

whatDayIsIt();
/* EXERCISE 8
  
  Write a function called rollTheDices which receives a number as a parameter.
  
  It should invoke the dice() function defined in Ex1 the specified amount of times,
  
  and return an object containing a sum property holding the sum of all values extracted
  
  and a values array containing the single values of the dicerolls themselves.
  
  Example: RollTheDices(3) => returns {
  
  sum: 10
  
  values: [3, 3, 4]
  
  }
  
  */ console.log(
  "\n------------------------------------------------------Exercise 8------------------------------------------------------------------"
);
function rollTheDices(number) {
  let results = {
    sum: 0,
    values: []
  };
  for (let i = 0; i < number; i++) {
    let roll = dice(1, 6);
    results.sum += roll;
    results.values.push(roll);
  }
  return results;
}

console.log(rollTheDices(3));

/* EXERCISE 9
  
  Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 9------------------------------------------------------------------"
);

function howManyDays(m) {
  let date1 = new Date("11/06/2022");
  let date2 = new Date().getMonth().getDay().getFullYear();
  let diffTime = Math.abs(date2 - date1);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
let date2 = new Date().getMonth();

console.log(date2);

/* EXERCISE 10
  
  Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.
  
  */

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file
console.log(
  "\n------------------------------------------------------Exercise 10------------------------------------------------------------------"
);
function isTodayMyBirthday() {
  let today = new Date();
  let dd = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  if (dd === 23 && month === 7 && year === 1996) return true;
  else return false;
}
console.log(isTodayMyBirthday());

/* EXERCISE 11
  
  Write a function called deleteProp which receives an object and a string as parameters,
  
  and returns the given object after deleting its property named as the given string.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 11------------------------------------------------------------------"
);
function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

obj = {
  car: "Mercedes",
  color: "blue"
};

console.log(deleteProp(obj, "car"));

/* EXERCISE 12
  
  Write a function called oldestMovie which finds the oldest movie in the provided movies array.
  
  
  */ const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

console.log(
  "\n------------------------------------------------------Exercise 12------------------------------------------------------------------"
);
function oldestMovie(arr) {
  let length = arr.length;
  let index = 0;
  let lowest = parseInt(arr[0].Year);
  console.log(lowest);
  for (let i = 0; i < length; i++) {
    if (lowest > parseInt(arr[i].Year)) {
      lowest = parseInt(arr[i].Year);
      index = i;
    }
  }
  console.log("Oldest movie: ", arr[index].Title, " year: ", lowest);
}

oldestMovie(movies);

/* EXERCISE 13
  
  Write a function called countMovies which returns the number of movies contained in the provided movies array.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 13------------------------------------------------------------------"
);
function countMovies(arr) {
  return arr.length;
}

console.log("movie count", countMovies(movies));

/* EXERCISE 14
  
  Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 14------------------------------------------------------------------"
);
function onlyTheTitles(arr) {
  let titles = [];
  for (let el of arr) {
    titles.push(el.Title);
  }
  return titles;
}

console.log(onlyTheTitles(movies));
/* EXERCISE 15
  
  Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 15------------------------------------------------------------------"
);
function onlyInThisMillennium() {
  let millenium = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year > 2000) {
      millenium.push(movies[i].Year + " " + movies[i].Title);
    }
  }
  return millenium;
}

console.log("Movies produced in this millennium are: ", onlyInThisMillennium());

/* EXERCISE 16
  
  Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 16------------------------------------------------------------------"
);
function getMovieById(id) {
  let idmovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (id === movies[i].imdbID) {
      idmovies.push(movies[i]);
    }
  }
  return idmovies;
}

console.log("My chosen movie is", getMovieById("tt0057261"));

/* EXERCISE 17
  
  Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 17------------------------------------------------------------------"
);
function sumAllTheYears(arr) {
  let sum = 0;
  for (let el of arr) {
    // console.log(el.Year);
    sum += parseInt(el.Year);
  }
  console.log(sum);
}

sumAllTheYears(movies);
/* EXERCISE 18
  
  Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 18------------------------------------------------------------------"
);
function searchByTitle(str) {
  let object = {
    match: []
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(str) >= 0) {
      object.match.push(movies[i]);
    }
  }
  return object;
}
console.log("contains Lord: ", searchByTitle("Lord"));

/* EXERCISE 19
  
  Write a function called searchAndDivide which receives a string as a parameter and returns an object;
  
  this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
  
  and another array unmatch with all the remaining ones.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 19------------------------------------------------------------------"
);
function searchAndDivide(str) {
  let object = {
    match: [],
    unmatch: []
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(str) >= 0) {
      object.match.push(movies[i]);
    } else {
      object.unmatch.push(movies[i]);
    }
  }
  return object;
}

console.log(" Match and unmatch movies: ", searchAndDivide("Lord"));

/* EXERCISE 20
  
  Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
  
  */ console.log(
  "\n------------------------------------------------------Exercise 20------------------------------------------------------------------"
);
function removeIndex(arr) {
  delete movies[arr];
  return movies;
}

console.log("The deleted item is the third one:", removeIndex(2));

// [EXTRAS] JS Advanced

/* EXERCISE 21
  
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  
  Example:
  
  halfTree(3)
  
  *
  
  **
  
  ***
  
  */
console.log(
  "\n------------------------------------------------------Exercise 21------------------------------------------------------------------"
);
function halfTree(height) {
  let star = "";
  for (let i = 1; i <= height; i++) {
    console.log((star += "*"));
  }
}

halfTree(8);

/* EXERCISE 22
  
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  
  Example:
  
  tree(3)
  
  *
  
  ***
  
  *****
  
  */
console.log(
  "\n------------------------------------------------------Exercise 22------------------------------------------------------------------"
);
function tree(height) {
  let star = "";
  for (let i = 2; i <= height; i++) {
    console.log((star += "**"));
  }
}

tree(8);

/* EXERCISE 23
  
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
  
  */
console.log(
  "\n------------------------------------------------------Exercise 23------------------------------------------------------------------"
);

function isItPrime() {
  let ex23Num = Math.floor(Math.random() * 10);
  console.log(ex23Num);
  let primeNumber = ex23Num / 2;
  return primeNumber % 1 === 0 ? "Its not prime." : "its prime";
}

console.log("Prime?:  ", isItPrime());

/* WHEN YOU ARE FINISHED
  
  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.
  
  */

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */
