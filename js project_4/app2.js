//  Question no 1....

for (let i = 0; i < 10; i++) {
    console.log(i)
  }

//   Question no 2...

for (let i = 0; i <= 11; i++) {
    console.log(i)
  }


//   Question no 3...


for (var i = 0; i <= 4; i++){

}


// Question no 4...



for (let j = 0; j < 100; j++){
    console.log(j) 
    
}
  

// Question no 5....


for (let i = 3; i > 0; i--) {
    
  }


//   Question no 6....

const myArray = [1, 2, 3, 4, 5];
const arrayLength = myArray.length;

document.write( arrayLength ); // This will print the number of elements in the array, which is 5 in this example.

// Question no 7...

var flag = true;

// Question no 8...


var pets = ['dog', 'cat', 'rabbit', 'fish'];

for (let i = 0; i < pets.length; i++) {

}

// Question no 9...

// Break out loop???????


// Question no 10....


// Create an array of user names
const userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Prompt the user to enter a first name
const firstName = prompt("Enter first name");

// Loop through the user names array to check for a match
let isUserNameFound = false;

for (let i = 0; i < userNames.length; i++) {
  if (userNames[i] === firstName) {
    isUserNameFound = true;
    break; // Exit the loop once a match is found
  }
}

// Check if the user name was found and display an alert accordingly
if (isUserNameFound) {
  alert("Welcome, " + firstName + "!");
} else {
  alert("Please write the correct user name.");
}


// Question no 11....

var matchFound = false;
var list = ["Apple", "Rice", "Chicken"]; 
var userInput = prompt("Enter something");

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("No match found");
}

  

// Question no 12....


var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}


//          ....T   H   E   //  E   N   D....
  