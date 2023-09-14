//              For      Chap      #      12    and     13

// Question no 1.

// Input character
const inputChar = prompt("Enter a character:");

if (inputChar.length === 1) {
  const charCode = inputChar.charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) {
    console.log("The input is a number.");
  } else if (charCode >= 65 && charCode <= 90) {
    console.log("The input is an uppercase letter.");
  } else if (charCode >= 97 && charCode <= 122) {
    console.log("The input is a lowercase letter.");
  } else {
    console.log("The input is neither a number nor a letter.");
  }
} else {
  console.log("Please enter a single character.");
}


// Question no 2..


// Input two integers
const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));

// Check if both numbers are equal
if (num1 === num2) {
  console.log("Both integers are equal.");
} else {
  // Determine the larger integer
  if (num1 > num2) {
    console.log(`The larger integer is: ${num1}`);
  } else {
    console.log(`The larger integer is: ${num2}`);
  }
}

// Question no 3...

// Input a number from the user
const number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Question no 4...

var character = prompt("Enter any character single.")

if (character.length === 1){
    if (character === "a" || character === "e" || character === "i" ||character === "o" || character === "u"  ) {
        console.log("This single character is Vowel words.")
    }
    else{
        console.log("This is not Vowel word..")
        }
    
}

else{
    console.log("Please enter single word...")
}



// Question no 5.

// Step a: Store the correct password in a variable
var correctPassword = "mySecretPassword";

// Step b: Ask the user to enter their password
var userPassword = prompt("Please enter your password:");

// Step c: Validate the passwords
if (!userPassword) {
      console.log("Please enter your password.");
    } else if (userPassword === correctPassword) {
          console.log("Correct! The password you entered matches the original password.");
        } else {
              console.log("Incorrect password.");
            }
            
            
            
// Question no 6.

var greeting;

greeting = "Good day";

var hour = 13;


if (hour < 18) {
    console.log("Good evening")
}

else{
    console.log(greeting)
}


//   Question no 7...

// Input time from the user in 24-hour format (e.g., 1900 for 7pm)
var userInput = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

// Check the time and implement different cases
if (userInput >= 0 && userInput < 1200) {
  console.log("Good morning!");
} else if (userInput >= 1200 && userInput < 1700) {
  console.log("Good afternoon!");
} else if (userInput >= 1700 && userInput < 2000) {
  console.log("Good evening!");
} else if (userInput >= 2000 && userInput < 2400) {
  console.log("Good night!");
} else {
  console.log("Invalid time input. Please enter a time between 0000 and 2359.");
}



