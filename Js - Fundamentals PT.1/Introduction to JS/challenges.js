// ===============================================
// CHALLENGE 1 — Variables Warm-Up
// ===============================================

// Simple variables storing personal information
let firstName = 'Jacob';
let age = 29;
let country = 'Palestine';

// Template literal sentence
console.log(`My name is ${firstName}, I am ${age} years old, and I am from ${country}.`);


// ===============================================
// CHALLENGE 2 — Simple Math & Logging
// ===============================================

// Numbers to operate on
let num1 = 29;
let num2 = 24;

// Math operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Logging results
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);


// ===============================================
// CHALLENGE 3 — Strings + Template Literals
// ===============================================

// Movie review using template literals
let movieName = 'Southpaw';
let rating = 9.5;

console.log(`The movie ${movieName} is rated ${rating}/10 by Jacob.`);


// ===============================================
// CHALLENGE 4 — Age Calculator With Comparison
// ===============================================

// Current year for age calculation
const currentYear = 2025;

// Calculate ages
const ageJacob = currentYear - 1996;
const ageFriend = currentYear - 2002;

// Logging ages
console.log("Jacob age:", ageJacob);
console.log("Friend age:", ageFriend);

// Comparing ages
console.log("Jacob is older:", ageJacob > ageFriend);

// Checking data types
console.log(typeof ageFriend);
console.log(typeof ageJacob);


// ===============================================
// CHALLENGE 5 — Template Literal Full Sentence
// ===============================================

// Personal info variables
let firstNameJ = "Jacob";
let lastNameJ = "Qumsiyeh";
let myJob = "Full Stack Developer";

// Age calculation again for challenge format
const currentYearJ = 2025;
const jacobAge = currentYearJ - 1996;

// Final sentence
console.log(`My name is ${firstNameJ} ${lastNameJ}, I am ${jacobAge} years old, and I work as a ${myJob}.`);


// ===============================================
// CHALLENGE 6 — Assignment Operator Workout
// ===============================================

// Testing assignment operators in sequence
let x = 10;
x += 5;   // 15
x *= 3;   // 45
x -= 2;   // 43
x /= 4;   // 10.75
x **= 2;  // 115.5625

console.log(x);


// ===============================================
// CHALLENGE 7 — BMI Comparison (Mark vs John)
// ===============================================

// Heights **must** be in meters
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// // BMI calculations
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // Logging BMI results
// console.log("Mark BMI:", BMIMark);
// console.log("John BMI:", BMIJohn);

// // Boolean: Who has higher BMI?
// const markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher?", markHigherBMI);


// ===============================================
// CHALLENGE 8 — Full Identity Formatter
// ===============================================

// Personal info for Luna
let nameFirst = 'Luna';
let nameLast = 'Masrawi';
const thisYear = 2025;

// ❗ This variable name was wrong earlier — now fixed
let lunaAge = thisYear - 2005;

let myCountry = 'Palestine';
let jobMy = 'Computer Engineering';

// Final formatted sentence
console.log(`My name is ${nameFirst} ${nameLast}, I am ${lunaAge} years old, from ${myCountry}, and I work as a ${jobMy}.`);


// ===============================================
// CHALLENGE 9 — Score Analyzer (Math + Booleans)
// ===============================================

// Player scores
let player1Score = 87;
let player2Score = 91;

// Difference & average
let scoreDifference = player1Score - player2Score;
const averageScore = (player1Score + player2Score) / 2;

// Logs
console.log(`Player 1 scored ${player1Score}, and Player 2 scored ${player2Score}.`);
console.log(`The average score is ${averageScore}.`);
console.log(`Is Player 1 the winner?`, player1Score > player2Score); // strict comparison is better


// ===============================================
// CHALLENGE 10 — Calorie Tracker (Math + Comparison)
// ===============================================

// Logging daily intake
console.log("Let's log what you ate today:");

// Meal calories
let breakfast = 400;
let lunch = 650;
let dinner = 800;
let snacks = 300; // renamed for clarity

// Daily calorie limit
const dailyCalorieLimit = 2250;

// Total calories consumed
let totalCalories = breakfast + lunch + dinner + snacks;

// Boolean if limit exceeded
const overLimit = totalCalories > dailyCalorieLimit;

// Logs
console.log(`Your total intake today was ${totalCalories} calories.`);
console.log(`Did you exceed your limit?`, overLimit);

// ===============================================
// CHALLENGE 11 — Personal Bio Upgrader (Variables + Template Literals)
// ===============================================

console.log("Welcome to your Bio.....");

// Personal information variables
let yourFirstName = "Anna";
let yourLastName = "Mandora Lewis";

const thisCurrentYear = 2025;

// Age calculation (not birth year)
let yourAge = thisCurrentYear - 1991;

let yourCountry = "United Kingdom";
let yourBirthPlace = "London";
let yourFavSport = "F1";

// Correct variable declaration
let yourJob = "Full Stack Developer";

// Final bio output using template literals
console.log(`My name is ${yourFirstName} ${yourLastName}, 
and I am ${yourAge} years old, from ${yourCountry}, born in ${yourBirthPlace}.
My favorite sport is ${yourFavSport}, and I work as a ${yourJob}.`);

// ===============================================
// CHALLENGE 12 — Lifestyle Stats Calculator (Math + Template Literals)
// ===============================================

console.log("This is your Sleeping Tracker System....");
console.log("Hope You Enjoy It!");

let yourName = "Hanna";
let todayMood = "Happy";
let yesterdayMood = "Tired";
let hoursSlept = 4;
let hoursNeeded = 10;

// Calculate how many hours are missing
let sleepDifference = hoursNeeded - hoursSlept;

// Final output (clean formatting + correct grammar)
console.log(
    `${yourName} feels ${todayMood} today.\n` +
    `Yesterday they felt ${yesterdayMood}.\n` +
    `They slept ${hoursSlept} hours and needed ${hoursNeeded}, meaning they are ${sleepDifference} hours short.`
);

// ===============================================
// CHALLENGE 13 — Daily Expense Tracker (Math + Template Literals + Variables)
// ===============================================
console.log("Your Expense Tracker System......");

// Individual expenses
let coffeeCost = 27;
let transportCost = 26;
let lunchCost = 54;
let snackCost = 32;
let miscCost = 80;

// Daily spending limit
const spendingLimit = 250;

// Total money spent today
let totalSpent = coffeeCost + transportCost + lunchCost + snackCost + miscCost;

// Money remaining from the limit
let remainingBalance = spendingLimit - totalSpent;

// Final summary output
console.log(`Today you spent ${totalSpent} shekels. Your daily limit is ${spendingLimit}, which means you still have ${remainingBalance} shekels left from your budget.`);


// ===============================================
// CHALLENGE 14 — Age Gate + Template Literal (IF/ELSE)
// ===============================================

let personName = "Jacob";
let personAge = 17;
const isOldEnough = 18 - personAge;

if (personAge >= 18) {
    console.log(`${personName} is ${personAge} years old and is allowed to enter the club`);
} else {
    console.log(`${personName} is too young to enter the club. You must wait ${isOldEnough} years.`);
}

// ===============================================
// CHALLENGE 15 — Movie Rating Judge (IF/ELSE + Template Literals)
// ===============================================

let movieRating = 8.7;
if (movieRating >= 8) {
    console.log(`This movie is Amazing! It's Rating: ${movieRating}`);
} else if (movieRating >= 5 && movieRating < 8) {
    console.log(`This movie is Decent. It's Rating: ${movieRating}`);
} else {
    console.log(`This movie is very bad. It's Rating: ${movieRating}`);
}

// ===============================================
// CHALLENGE 16 — Calorie Check 2.0 (Math + IF/ELSE)
// ===============================================

let breakfastMeal = 850;
let lunchMeal = 600;
let dinnerMeal = 800;
let snack = 850;

let totalCaloriesToday = breakfastMeal + lunchMeal + dinnerMeal + snack;
const todayLimit = 2500;

let overLimitAmount = totalCaloriesToday - todayLimit;
let underLimitAmount = todayLimit - totalCaloriesToday;

if (totalCaloriesToday > todayLimit) {
    console.log(`You ate too much! Over limit by ${overLimitAmount} calories.`);
} else {
    console.log(`Great job! You are under the limit by ${underLimitAmount} calories.`);
}


// ===============================================
// CHALLENGE 17 — BMI Checker 2.0 (IF/ELSE + Template Literals)
// ===============================================

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
