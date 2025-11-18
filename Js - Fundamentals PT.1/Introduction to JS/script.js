// ===============================================
// 🧠 Introduction to JavaScript
// ===============================================

// Run this step-by-step to understand how JS executes.
// (Uncomment to test)

// let js = 'amazing';

// if (js === 'amazing') {
//   alert("JavaScript is FUN!");
// }

// Log a simple calculation
console.log("The Number is:", 48 + 28 + 23 - 10);

// Welcome message
console.log("Welcome To The JavaScript World!!!");


// ===============================================
// 🧩 Values and Variables
// ===============================================

// Direct values (not stored)
console.log('Jacob');
console.log(23);

// Variables allow re-use and cleaner code
let firstName = 'Jonas';
console.log(firstName);

// Valid variable examples
let jonas_matilda = 'JM';
let $function = 27;
let person = 'Jacob';
let PI = 3.1415; // constants usually uppercase

// Descriptive variable names
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// ❌ Not recommended — unclear variable names
let job1 = 'Programmer';
let job2 = 'Teacher';


// ===============================================
// 🧩 Data Types
// ===============================================

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// typeof operator examples
console.log(typeof true);               // boolean
console.log(typeof javaScriptIsFun);    // boolean
console.log(typeof 23);                 // number
console.log(typeof 'Jacob');            // string


// ===============================================
// 🧩 Let, Const, and Var
// ===============================================

// 🔹 let → values that CAN change later (mutable)
let age = 28;
age = 29; // allowed
console.log("Age using let:", age);

// 🔹 const → values that CANNOT change (immutable)
const birthYear = 1996;
// birthYear = 1997;  ❌ error: cannot reassign const
console.log("Birth Year (const):", birthYear);

// 🔹 var → the old way (avoid it)
// has function scope + hoisting issues
var job = 'Developer';
job = 'Senior Developer'; // allowed but risky
console.log("Job using var:", job);


// ===============================================
// 🧩 Basic Operators
// ===============================================

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

// More math
console.log(
  ageJonas * 2,
  ageJonas / 2,
  ageJonas + 2,
  2 ** 3 // 2 to the power of 3 = 8
);

// String concatenation
const firstNameJ = "Jacob";
const lastName = "Qumsiyeh";
console.log(firstNameJ + " " + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10;  // x = 25
x *= 4;   // x = 100
x -= 6;   // x = 94
x++;     // x = 95
x--;     // x = 94
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

// Comparing expressions
console.log(now - 1991 > now - 2018);


// ===============================================
// 🧩 Operator Precedence
// ===============================================
