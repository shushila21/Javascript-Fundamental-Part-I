// 1. Creating Object

const student = { name: "siri", sclass: "Bachelor", rollno: 27 };
console.log(student);

// length of object

var size = Object.keys(student).length;
console.log(size);

// lisiting Object property
console.log(student.name, " is ", student.sclass, student.rollno);
console.log(`Name: ${student.name} ${student.name}`);
//deleting rollno property

delete student.rollno;
console.log(student);

// length of object

let length = Object.keys(student).length;
console.log(length);

//2. program to find volume of cylinder

class Volume {
  // constructor is use to initialize
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  // defining method inside class
  getVolume() {
    let radius = this.radius;
    return this.height * Math.PI * radius * radius;
  }
}

const cyl_volume = new Volume(7, 4);
console.log(cyl_volume);
console.log("Volume of Cylinder is:", cyl_volume.getVolume().toFixed(4));

//3. creating clock
setInterval(showClock, 100);
function showClock() {
  const date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = "AM";

  //session AM | PM
  if (hrs >= 12) {
    session = "PM";
  } else {
    session = "AM";
  }

  //for 12 hours colck
  if (hrs >= 12) {
    hrs = hrs - 12;
  }
  if (hrs == 0) {
    hrs = 12;
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : hrs;
  sec = sec < 10 ? "0" + sec : sec;

  document.getElementById("clock").innerText = `${hrs} : ${min} : ${sec}`;
}

//4. Program to write a JavaScript function to print all the methods in a JavaScript object.
function FindAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}

console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));

// 5. Program to write JavaScript function to convert an object into a list of `[key, value]` pairs.

var obj = {
  1: 5,
  2: 7,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
console.log(result);

// 6. Program to Write a JavaScript function that reverse a number.

function reversenumber(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reversenumber(32243))); //34223

// 7. JavaScript function that generates all combinations of a string.
let possibleCombinations = (str) => {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
};
console.log(possibleCombinations("Dog"));

//8. Program to write JavaScript function that returns a passed string with letters in alphabetical order.
function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("webmaster"));

//9. JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
console.log(find_longest_word("Web Development Tutorial"));

//10. Program to Count number of Vowels in String
function vowel_Count(str) {
  return str.replace(/[^aeiou]/g, "").length;
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));

// 11. Function to generate a random number and find the factorial of the random number generated in javascript.
// generating  a random number

function fact(num) {
  if (num <= 0) return 1;
  else return num * fact(num - 1);
}
let randomNum = Math.floor(Math.random() * 10);
console.log(`Random num is ${randomNum} and factorail is ${fact(randomNum)}`);

//12. JavaScript program to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
function test50(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(test50(50, 50));
console.log(test50(20, 50));
console.log(test50(20, 20));
console.log(test50(20, 30));

// 13. JavaScript program to create a new string with the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
function upper_lower(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  front_part = str.substring(0, 3).toLowerCase();
  back_part = str.substring(3, str.length);
  return front_part + back_part;
}
console.log(upper_lower("React"));
console.log(upper_lower("Cs"));
console.log(upper_lower("JAVAScript"));

//14.
function vowelOrConsonant(x) {
  if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u")
    console.log("Vowel");
  else console.log("Consonant");
}

vowelOrConsonant("e");
