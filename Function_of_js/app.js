            //          Function            

//      Question no 1.

function date(){
    currentDate = new Date();
    document.write(currentDate)   
}

date()


//  Question no 2.

function greetUser(firstName, lastName) {
    
    var fullName = firstName + ' ' + lastName;
    
    var greeting = 'Hello, ' + fullName + '!';
    
    return greeting;
  }
  

  var firstName = prompt("Enter First Name: ")
  var lastName = prompt("Enter Last Name: ")
  var greetingMessage = greetUser(firstName, lastName);
  console.log(greetingMessage); 
  

//   Question no 3...


function sum(num1, num2) {
    var plus = num1 + num2;
    
    if ((plus)) {
      return plus;
    }
  }
  
  var num1 = +prompt("Enter first number: ");
  var num2 = +prompt("Enter second number: ");
  
  var result = sum(num1, num2);
  console.log(result);
  
// Question no 4...

function calc(firstnum, operator, secondnum){

    if(operator === "+"){
        return firstnum + secondnum
}
    if(operator === "-"){
        return firstnum - secondnum
}
    if(operator === "*"){
        return firstnum * secondnum
}
    if(operator === "/"){
        return firstnum / secondnum
}

}

var firstnum = +prompt("ENter First value: ")
var operator = prompt("ENter Operator: ")
var secondnum = +prompt("ENter second value: ")

var calculator = calc(firstnum, operator, secondnum)

console.log(calculator)


// Question no 5...


function square(number) {
    return number * number;
  }

  var num = +prompt("Enter number for squaring: ");
  var squared = square(num);
  console.log("The square of " + num + " is " + squared);
  

// Question no 6...

// Question no 7....


function count(startCount, endCount){



    let countingResult = "";

    for(i = startCount; i <= endCount; i++){
        countingResult += i + " ";

    }

    document.write("Counting: " + countingResult );



}


var startCount = +prompt("Were to start counting?")
var endCount = +prompt("Were to End counting?")

count(startCount, endCount )
 

// Question no 8...

function area(width, height){

    var a = width * height 

    console.log("your are is: " + a )


}


var width = +prompt("ENter width")
var height = +prompt("ENter Height")

area(width, height)

// Question no 9...

function isPalindrome(str) {
   
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');

    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  

  const testString1 = prompt("enter something");

  console.log(`"${testString1}" is a palindrome: ${isPalindrome(testString1)}`);

  
// Question no 11...

function capitalizeWords(inputString1) {
    
    const words = inputString1.split(' ');
  
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return '';
      }
    });
  
    const resultString = capitalizedWords.join(' ');
  
    return resultString;
  }
  

  const inputString1 = 'the quick brown fox';
  const capitalizedString = capitalizeWords(inputString1);
  
  console.log(capitalizedString); 


//   Question no 12...


function countOccurrences(inputString, letter) {
    const lowercaseInput = inputString.toLowerCase();
    const lowercaseLetter = letter.toLowerCase();
  
    let count = 0;
  
    for (const char of lowercaseInput) {
      if (char === lowercaseLetter) {
        count++;
      }
    }
  
    return count;
  }
  
 
  const inputString = 'JSResourceS.com';
  const letterToCount = 'o';
  
  const occurrences = countOccurrences(inputString, letterToCount);
  
  console.log(`The letter "${letterToCount}" appears ${occurrences} times in the string.`);
  
//   Question no 14...

// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    
    console.log(`The circumference is ${circumference.toFixed(2)}`);
  }
  
  function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    
    console.log(`The area is ${area.toFixed(2)}`);
  }
  
  const radius = 5;
  calcCircumference(radius); 
  calcArea(radius);        
  



