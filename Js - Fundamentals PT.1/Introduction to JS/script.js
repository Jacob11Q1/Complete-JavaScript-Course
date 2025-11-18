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
// birthYear = 1997;  ❌ error: you can't reassign a const
console.log("Birth Year (const):", birthYear);

// 🔹 var → the old way (avoid it)
// It has weird behavior because of function scope + hoisting
var job = 'Developer';
job = 'Senior Developer'; // allowed but risky
console.log("Job using var:", job);

// Why let/const is better:
// - predictable behavior
// - block scoped
// - prevents bugs
// - modern JS best practice

// ===============================================
// 🧩 Basic Operators
// ===============================================

