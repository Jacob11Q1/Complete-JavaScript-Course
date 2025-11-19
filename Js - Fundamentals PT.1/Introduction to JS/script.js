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
let jonas_matilda = 'JM';  // underscores are allowed
let $function = 27;        // $ is valid but rarely used
let person = 'Jacob';      // simple variable
let PI = 3.1415;           // constants usually uppercase

// Descriptive variable names (best practice)
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
age = 29; // allowed (reassignment)
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

// You commented out the declarations, so JS will crash.
// We define them properly *before* using them.

const now = 2037;                  // current year used for calculations
const ageJonas = now - 1991;       // Jonas age
const ageSarah = now - 2018;       // Sarah age

// Math Operators
console.log(ageJonas, ageSarah);

// More math
console.log(
  ageJonas * 2,                   // multiply
  ageJonas / 2,                   // divide
  ageJonas + 2,                   // add
  2 ** 3                          // exponent (2^3 = 8)
);

// String concatenation
const firstNameJ = "Jacob";
const lastName = "Qumsiyeh";
console.log(firstNameJ + " " + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10;        // x = 25
x *= 4;         // x = 100
x -= 6;         // x = 94
x++;            // x = 95
x--;            // x = 94
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18);      // true or false depending on age

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

// Comparing expressions
console.log(now - 1991 > now - 2018);


// ===============================================
// 🧩 Operator Precedence
// ===============================================

// Math Operators and L → R evaluation
console.log(25 - 10 - 5); // 10
console.log(5 - 10 - 25); // -30

let z, y;
z = y = 25 - 10 - 5;  // evaluated as y = 10 then z = y
console.log(z, y);

// Average age
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

