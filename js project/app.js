// Question no 1

// Prompt the user for input
var cityName = prompt("Enter a city name:");

// Check if the input city name is "Karachi" (case-insensitive)
if (cityName === "karachi") {
    console.log("Welcome to the city of lights");
} else {
    console.log("Welcome to " + cityName); // If it's not Karachi, just welcome to the entered city
}


// Question no 2

// Prompt the user for input
var gender = prompt("Enter your gender (Male or Female):");

// Check the gender and provide the appropriate greeting
if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    console.log("Good Morning Ma'am.");
} else {
    console.log("Good Morning!"); // If gender is neither male nor female, provide a generic greeting
}



// Question no 3



// Prompt the user for input
var signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");

// Convert the input to lowercase for case-insensitive comparison
signalColor = signalColor.toLowerCase();

// Check the signal color and provide the appropriate message

if (signalColor === "red"){
    console.log("Must stop")
}
if (signalColor === "yellow"){
    console.log("Must move")
}
if (signalColor === "green"){
    console.log("Must start")
}



// Question no 4.

// Prompt the user for input
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// Check if the remaining fuel is less than 0.25 liters
if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel in your car. Drive safely!");
}


// Question no 6.

// Prompt the user for input
var subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks for all subjects:"));

// Calculate the total marks obtained
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

// Calculate the percentage
var percentage = (totalObtainedMarks / totalMarks) * 100;

// Calculate the grade based on the percentage
var grade = "";
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

// Provide remarks based on the grade
var remarks = "";
if (grade === "A+") {
    remarks = "Excellent!";
} else if (grade === "A") {
    remarks = "Very Good!";
} else if (grade === "B") {
    remarks = "Good!";
} else if (grade === "C") {
    remarks = "Satisfactory.";
} else if (grade === "D") {
    remarks = "Needs Improvement.";
} else {
    remarks = "Fail. Please try again.";
}

// Display the results
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);


// Qustion no 7.

// Generate a random secret number between 1 and 10
const secretNumber = 8

// Prompt the user to guess the secret number
const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
  console.log("Bingo! Correct answer");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
  console.log("Close enough to the correct answer");
} else {
  console.log("Sorry, that's not correct. The secret number was " + secretNumber);
}


// Question no 8.

// Prompt the user to enter a number
const Number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (Number % 3 === 0) {
  console.log(Number + " is divisible by 3.");
 
} else {
  console.log(userNumber + " is not divisible by 3.");
  
}


// Question no 9

var userNumber = parseInt(prompt("Enter your number to check wherter even or odd...."))

if (userNumber % 2 === 0){
    console.log("Your entered number is even.")
}
else{
    console.log("Your number is odd..")
}

// Question no 10

var temperature = parseInt(prompt("Please enter temperature number..."))

if (temperature > 40 ){
    console.log("It is Too Hot Outside.")
}

else if (temperature > 30 ) 
{
    console.log("The Weather today is Normal..")
}
else if (temperature > 20 ) 
{
    console.log("Today’s Weather is cool..")
}
else if (temperature > 10 ) 
{
    console.log("OMG! Today’s weather is so Cool.")
}


// Question no 11.


// Prompt the user to enter the first number
const firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
const secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation (+, -, *, /, %)
const operation = prompt("Enter the operation (+, -, *, /, %):");

// let result;

// Perform the calculation based on the selected operation
if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  if (secondNumber === 0) {
    alert("Error: Division by zero is not allowed.");
  } else {
    result = firstNumber / secondNumber;
  }
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  alert("Invalid operation. Please enter +, -, *, /, or %.");
}

// Display the result to the user
if (result !== undefined) {
  console.log(`Result: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
  alert(`Result: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
}
