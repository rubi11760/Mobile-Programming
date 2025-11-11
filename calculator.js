var a = 8;
var b = 4;

function add() {
  var c = a + b;
  document.getElementById("result").innerHTML = "The sum is: " + c;
}

function subtract() {
  var c = a - b;
  document.getElementById("result").innerHTML = "The difference is: " + c;
}

function multiply() {
  var c = a * b;
  document.getElementById("result").innerHTML = "The product is: " + c;
}

function divide() {
  var c = a / b;
  document.getElementById("result").innerHTML = "The quotient is: " + c;
}
