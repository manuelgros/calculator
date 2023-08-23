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
  return total = a / b;
}

// Variables and function for calculation
let numberA
let numberB
let operator = ""

function operate(a, b, o) {
  return (o == 'add') ? add(a, b)
    : (o == 'subtract') ? subtract(a, b)
    : (o == 'multiply') ? multiply(a, b)
    : (o == 'divide') ? divide(a, b)
    : "Error";
}

// Display feature
const display = document.querySelector("#display");
display.textContent = ""

const numberBtn = document.querySelectorAll(".numberKey");
for (i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', (e) => {
    display.textContent += e.target.id ;
  })
}

// Clear buttom
const clearBtn = document.querySelector('#clear');

function clearDisplay() {
  display.textContent = "";
}

clearBtn.addEventListener ('click', clearDisplay)

// Operator buttons
const operatorBtn = document.querySelectorAll(".operatorKey");
for (i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener('click', (e) =>{
    operator = e.target.id
    numberA = +display.textContent;
    clearDisplay();
    console.log(operator);
  })
}

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
  numberB = display.textContent;
  display.textContent = operate(+numberA, +numberB, operator);
})