//   Chap 17 - 20    Arrays and loops....

// Question no 1....

var emptyMultiDimArray = [[]];

// Question no 2...


var matrix = [
    [1, 2, 3, 5],
    [4, 5, 6, 6],
    [7, 8, 9, 9]
  ];

  console.log(matrix)

//   Question no 3...


for(var i = 0; i<=10 ; i++){

    document.write(i, "<br> <strong>")

}


// Question no 4...

let table = parseInt(prompt("Enter your table;"));
let tablelenght = parseInt(prompt("Enter Table length..."))

for(var i = 1; i<=tablelenght; i++){
    document.write(table + " X " + i + " = " + table * i +"<br>" )
}


// Question no 5...


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for( var i = 0; i <= fruits.length; i++){
    document.write(fruits[i] + "<BR>" )
    document.write("Element at index: " + i  + "<BR>" )
}



// Question no 6....

// Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
function countingSeries() {
    let series = [];
    for (let i = 1; i <= 15; i++) {
      series.push(i);
    }
    return series.join(', ');
  }
  
  // Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  function reverseCountingSeries() {
    let series = [];
    for (let i = 10; i >= 1; i--) {
      series.push(i);
    }
    return series.join(', ');
  }
  
  // Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
  function evenSeries() {
    let series = [];
    for (let i = 0; i <= 20; i += 2) {
      series.push(i);
    }
    return series.join(', ');
  }
  
  // Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
  function oddSeries() {
    let series = [];
    for (let i = 1; i <= 19; i += 2) {
      series.push(i);
    }
    return series.join(', ');
  }
  
  // Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
  function customSeries() {
    let series = [];
    for (let i = 1; i <= 10; i++) {
      series.push(2 * i + 'k');
    }
    return series.join(', ');
  }
  
  console.log("Counting: " + countingSeries());
  console.log("Reverse counting: " + reverseCountingSeries());
  console.log("Even: " + evenSeries());
  console.log("Odd: " + oddSeries());
  console.log("Series: " + customSeries());
  


//   Question no 7...

// ?????


// Question no 8....

// Define the array
const A = [24, 53, 78, 91, 12];

// Initialize a variable to store the maximum value, starting with the first element of the array
let max = A[0];

// Iterate through the array to find the maximum value
for (let i = 1; i < A.length; i++) {
  if (A[i] > max) {
    max = A[i];
  }
}

// Display the maximum value
console.log("The largest number in the array is: " + max);


// Question no 9...

// Define the array
const B = [24, 53, 78, 91, 12];

// Initialize a variable to store the minimum value, starting with the first element of the array
let min = B[0];

// Iterate through the array to find the minimum value
for (let i = 1; i < B.length; i++) {
  if (B[i] < min) {
    min = B[i];
  }
}

// Display the minimum value
console.log("The smallest number in the array is: " + min);

// Question no 10...

// Loop from 1 to 20 (1 to 100 divided by 5)
for (let i = 1; i <= 20; i++) {
    // Calculate the multiple of 5
    const multipleOf5 = i * 5;
    
    // Print the multiple of 5
    console.log(multipleOf5);
  }
  
