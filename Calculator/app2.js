


var screen = document.getElementById("screen");
var expression = "";

function apearNumber(num) {
  expression += num;
  screen.innerHTML = expression;
}

function apearOperator(op) {
  expression += op;
  screen.innerHTML = expression;
} 
function calculate() {
  try {
    let result = eval(expression);
    screen.innerHTML = result;
    expression = result.toString();
  } catch (error) {
    screen.innerHTML = "Error";
    expression = "";
  }
}


function clearAll() {
    expression = "";
    screen.innerHTML = "";
  }
  
  function clearEntry() {
    expression = expression.slice(0, -1);
    screen.innerHTML = expression;
}