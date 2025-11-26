// ===============================================
// 🧠 INTRODUCTION TO JAVASCRIPT
// ===============================================

// Run this step-by-step to understand execution flow
// (Uncomment to test)

// let js = 'amazing';

// if (js === 'amazing') {
//   alert("JavaScript is FUN!");
// }

// Log a basic calculation to console
console.log("The Number is:", 48 + 28 + 23 - 10);

// Welcome message
console.log("Welcome To The JavaScript World!!!");


// ===============================================
// 🧩 VALUES AND VARIABLES
// ===============================================

// Direct values
console.log('Jacob');
console.log(23);

// Variables make code reusable and readable
let firstNameVar = 'Jonas';
console.log(firstNameVar);

// Valid variable naming
let jonas_matilda = 'JM';       // underscore allowed
let $function = 27;             // valid but not recommended
let personName = 'Jacob';       // descriptive naming
let PI_VALUE = 3.1415;          // constants usually uppercase

// Descriptive is always better than vague
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// ❌ Avoid unclear names in real projects
let job1 = 'Programmer';
let job2 = 'Teacher';


// ===============================================
// 🧩 DATA TYPES
// ===============================================

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// typeof operator
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jacob');


// ===============================================
// 🧩 LET, CONST & VAR
// ===============================================

// let → changeable
let currentAge = 28;
currentAge = 29;
console.log("Age using let:", currentAge);

// const → constant (cannot be reassigned)
const birthYearConst = 1996;
console.log("Birth Year (const):", birthYearConst);

// var → legacy, avoid in modern code
var jobTitle = 'Developer';
jobTitle = 'Senior Developer';
console.log("Job using var:", jobTitle);


// ===============================================
// 🧩 BASIC OPERATORS
// ===============================================

const currentYearCalc = 2037;
const ageJonasCalc = currentYearCalc - 1991;
const ageSarahCalc = currentYearCalc - 2018;

// Math operations
console.log(ageJonasCalc, ageSarahCalc);

console.log(
  ageJonasCalc * 2,
  ageJonasCalc / 2,
  ageJonasCalc + 2,
  2 ** 3
);

// String concatenation
const concatFirstName = "Jacob";
const concatLastName = "Qumsiyeh";
console.log(concatFirstName + " " + concatLastName);

// Assignment operators
let xValue = 10 + 5;
xValue += 10;
xValue *= 4;
xValue -= 6;
xValue++;
xValue--;
console.log(xValue);

// Comparison operators
console.log(ageJonasCalc > ageSarahCalc);
console.log(ageSarahCalc >= 18);

const isFullAgeVar = ageSarahCalc >= 18;
console.log(isFullAgeVar);

// Expressions
console.log(currentYearCalc - 1991 > currentYearCalc - 2018);


// ===============================================
// 🧩 OPERATOR PRECEDENCE
// ===============================================

console.log(25 - 10 - 5);
console.log(5 - 10 - 25);

let zValue, yValue;
zValue = yValue = 25 - 10 - 5;
console.log(zValue, yValue);

const avgAge = (ageJonasCalc + ageSarahCalc) / 2;
console.log(ageJonasCalc, ageSarahCalc, avgAge);


// ===============================================
// 🧩 STRINGS & TEMPLATE LITERALS
// ===============================================

// ES5 way
const firstName = 'Jacob';
const job = 'Full Stack Developer';
const birthYear = 1996;
const year = 2025;

const jacob =
  "I'm " +
  firstName +
  ', a ' +
  (year - birthYear) +
  ' years old ' +
  job +
  "!";

console.log(jacob);

// ES6 Template Literal
const jacobNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jacobNew);


// ===============================================
// 🧩 DECISION MAKING (IF / ELSE)
// ===============================================

const herAge = 15;

if (herAge >= 18) {
  console.log("Sarah can start her driving license");
} else {
  const yearsLeft = 18 - herAge;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙂`);
}

const birthYearCheck = 1991;
let century;

if (birthYearCheck <= 2000) century = 20;
else century = 21;

console.log(`You were born in the ${century}th century.`);

// Challenge #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
} else {
  console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
}


// ===============================================
// 🧩 TYPE CONVERSION & COERCION
// ===============================================

// Explicit conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jacob')); 
console.log(typeof NaN);      

// Convert number to string
console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

// Mini brain-twister
let n = '1' + 1;  // '11'
n = n - 1;        // 10
console.log(n);


// ===============================================
// 🧩 Equality Operations: == VS ===
// ===============================================
const age = 18;
if(age === 18) console.log("You just become an adult..");

