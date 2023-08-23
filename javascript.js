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
let operator

function operate(numberA, numberB, operator) {
  return (operator == add) ? add(numberA, numberB)
    : (operator == subtract) ? subtract(numberA, numberB)
    : (operator == multiply) ? multiply(numberA, numberB)
    : (operator == divide) ? divide(numberA, numberB)
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
clearBtn.addEventListener ('click', () => {
  display.textContent = "";
})