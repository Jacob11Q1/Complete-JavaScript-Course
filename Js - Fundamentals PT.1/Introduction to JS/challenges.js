// ===============================================
// Challenge 1 — Variables Warm-Up
// ===============================================

let firstName = 'Jacob';
let age = 29;
let country = 'Palestine';

console.log(`My name is ${firstName}, I am ${age} years old, and I am from ${country}.`);


// ===============================================
// Challenge 2 — Simple Math & Logging
// ===============================================

let num1 = 29;
let num2 = 24;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);


// ===============================================
// Challenge 3 — Strings + Template Literals
// ===============================================

let movieName = 'Southpaw';
let rating = 9.5;

console.log(`The movie ${movieName} is rated ${rating}/10 by Jacob.`);

// ===============================================
// Challenge 4 — Age Calculator With Comparison (Operators + typeof)
// ===============================================

const currentYear = 2025;

const ageJacob = currentYear - 1996;
const ageFriend = currentYear - 2002;

console.log("Jacob age:", ageJacob);
console.log("Friend age:", ageFriend);

// Correct comparison
console.log("Jacob is older:", ageJacob > ageFriend);

// Types
console.log(typeof ageFriend);
console.log(typeof ageJacob);

// ===============================================
// CHALLENGE 5 — Build a Sentence Using Template Literals
// ===============================================

let firstNameJ = "Jacob";
let lastNameJ = "Qumsiyeh";
let myJob = "Full Stack Developer";
const currentYearJ = 2025;
const jacobAge = currentYearJ - 1996;

console.log(`My name is ${firstNameJ} ${lastNameJ}, I am ${jacobAge} years old, and I work as a ${myJob}.`);


// ===============================================
// CHALLENGE 6 — Assignment Operator Workout
// ===============================================

let x = 10;
x += 5;   // 15
x *= 3;   // 45
x -= 2;   // 43
x /= 4;   // 10.75
x **= 2;  // 115.5625
console.log(x);
