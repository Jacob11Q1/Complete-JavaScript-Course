// // ===============================================
// // 🧠 Introduction to JavaScript
// // ===============================================

// // Run this step-by-step to understand how JS executes.
// // (Uncomment to test)

// // let js = 'amazing';

// // if (js === 'amazing') {
// //   alert("JavaScript is FUN!");
// // }

// // Log a simple calculation
// console.log("The Number is:", 48 + 28 + 23 - 10);

// // Welcome message
// console.log("Welcome To The JavaScript World!!!");


// // ===============================================
// // 🧩 Values and Variables
// // ===============================================

// // Direct values printed to console
// console.log('Jacob');
// console.log(23);

// // Variables allow re-use and cleaner code
// let firstNameVar = 'Jonas';       // person's first name
// console.log(firstNameVar);

// // Valid variable examples
// let jonas_matilda = 'JM';         // underscore allowed
// let $function = 27;               // $ allowed but not recommended
// let personName = 'Jacob';         // descriptive variable
// let PI_VALUE = 3.1415;            // constant values usually uppercase

// // Descriptive variable names
// let myFirstJob = 'Programmer';    // first job title
// let myCurrentJob = 'Teacher';     // current job title

// // ❌ Not recommended — unclear variable names
// let job1 = 'Programmer';
// let job2 = 'Teacher';


// // ===============================================
// // 🧩 Data Types
// // ===============================================

// let javaScriptIsFun = true;        // boolean value
// console.log(javaScriptIsFun);

// // typeof operator examples
// console.log(typeof true);               // boolean
// console.log(typeof javaScriptIsFun);    // boolean
// console.log(typeof 23);                 // number
// console.log(typeof 'Jacob');            // string


// // ===============================================
// // 🧩 Let, Const, and Var
// // ===============================================

// // 🔹 let → values that CAN change later (mutable)
// let currentAge = 28;               // initial age
// currentAge = 29;                   // reassigned
// console.log("Age using let:", currentAge);

// // 🔹 const → values that CANNOT change (immutable)
// const birthYearConst = 1996;       // fixed birth year
// console.log("Birth Year (const):", birthYearConst);

// // 🔹 var → the old way (avoid it due to hoisting/scope issues)
// var jobTitle = 'Developer';
// jobTitle = 'Senior Developer';      // var allows reassignment but is old-school
// console.log("Job using var:", jobTitle);


// // ===============================================
// // 🧩 Basic Operators
// // ===============================================

// // Defining constants for calculations
// const currentYearCalc = 2037;                  // hypothetical current year
// const ageJonasCalc = currentYearCalc - 1991;   // Jonas' age
// const ageSarahCalc = currentYearCalc - 2018;   // Sarah's age

// // Math Operators
// console.log(ageJonasCalc, ageSarahCalc);

// // More math examples
// console.log(
//   ageJonasCalc * 2,                   // multiplication
//   ageJonasCalc / 2,                   // division
//   ageJonasCalc + 2,                   // addition
//   2 ** 3                              // exponent (2^3 = 8)
// );

// // String concatenation (old way)
// const concatFirstName = "Jacob";
// const concatLastName = "Qumsiyeh";
// console.log(concatFirstName + " " + concatLastName);

// // Assignment Operators
// let xValue = 10 + 5; // xValue = 15
// xValue += 10;        // xValue = 25
// xValue *= 4;         // xValue = 100
// xValue -= 6;         // xValue = 94
// xValue++;            // xValue = 95
// xValue--;            // xValue = 94
// console.log(xValue);

// // Comparison Operators
// console.log(ageJonasCalc > ageSarahCalc); // true if Jonas is older
// console.log(ageSarahCalc >= 18);          // checks if Sarah is adult

// const isFullAgeVar = ageSarahCalc >= 18;  // boolean result stored
// console.log(isFullAgeVar);

// // Comparing expressions
// console.log(currentYearCalc - 1991 > currentYearCalc - 2018);


// // ===============================================
// // 🧩 Operator Precedence
// // ===============================================

// // Math operators executed left-to-right
// console.log(25 - 10 - 5); // 10
// console.log(5 - 10 - 25); // -30

// let zValue, yValue;
// zValue = yValue = 25 - 10 - 5; // assignment right-to-left
// console.log(zValue, yValue);

// // Average age calculation
// const avgAge = (ageJonasCalc + ageSarahCalc) / 2;
// console.log(ageJonasCalc, ageSarahCalc, avgAge);


// // ===============================================
// // 🧩 Strings and Template Literals
// // ===============================================

// The old way ES5:
const firstName = 'Jacob';                  // first name stored
const job = 'Full Stack Developer';         // job title stored
const birthYear = 1996;                     // birth year
const year = 2025;                          // current year

// Building a string with + (old and messy approach)
const jacob =
  "I'm " +
  firstName +
  ', a ' +
  (year - birthYear) +                       // calculating age inside string
  ' years old ' +
  job +
  "!";

console.log(jacob);

// Template Literals (modern ES6 way, clean and readable)
const jacobNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jacobNew);
