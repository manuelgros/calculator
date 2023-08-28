// Function for basic math operators
function add(a, b) {
  return total = a + b;
}
function subtract(a, b) {
  return total = a - b;
}
function multiply(a, b) {
  return total = a * b;
}
function divide(a, b) {
  if (a == 0 || b == 0) { 
    return "Aren't you a rascal"; 
  } else { 
    return total = a / b;
  }
}


// Variables and function for calculation
let operantA = "";
let operantB = "";
let operator = "";
let result = "";

function operate(a, b, o) {
  return (o == 'add') ? add(a, b)
    : (o == 'subtract') ? subtract(a, b)
    : (o == 'multiply') ? multiply(a, b)
    : (o == 'divide') ? divide(a, b)
    : "Error";
}


// Display feature
const display = document.querySelector("#display");
display.textContent = "";

const numberBtn = document.querySelectorAll(".numberKey");
for (i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', (e) => {
    if (display.textContent == result) { clearDisplay() };
    display.textContent += e.target.id ;
  })
}


// Operator buttons
const operatorBtn = document.querySelectorAll(".operatorKey");
for (i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener ('click', function(e) {
    if (!operator) {
      operantA = parseInt(display.textContent);
      operator = e.target.id
      clearDisplay();
    } else {
      operantB = parseInt(display.textContent);
      result = operate(operantA, operantB, operator);
      display.textContent = result;
      operator = e.target.id;
      operantA = result;
    }
  })
}
  // Equal button
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener('click', () => {
  if(!operantA) {
    result = parseInt(display.textContent);
    operantA = result;
  } else {
    operantB = parseInt(display.textContent);
    result = operate(operantA, operantB, operator);
    display.textContent = result;
    operantA = result;
    operator = "";
  }
})


// Clear functions and button
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener ('click', clearAll);

function clearAll () {
  display.textContent = "";
  operantA = "";
  operantB = "";
  operator = "";
}

function clearDisplay() {
  display.textContent = "";
}


// Positive/Negative number button
const convertBtn = document.querySelector('#plusMinus');
convertBtn.addEventListener('click', () => {
  let convertedNr
  if (parseInt(display.textContent) > 0) {
    display.textContent = '-'+display.textContent;
  } else {
    display.textContent = display.textContent.substring(1)
  }
})

