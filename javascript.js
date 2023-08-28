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
const firstDisplay = document.querySelector("#firstDisplay");
const secondDisplay = document.querySelector('#secondDisplay');
firstDisplay.textContent = "";
secondDisplay.textContent = "";

const numberBtn = document.querySelectorAll(".numberKey");
for (i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', (e) => {
    if (firstDisplay.textContent == result) { clearDisplay() };
    firstDisplay.textContent += e.target.id ;
    // secondDisplay.textContent += e.target.id
  })
}



// Operator buttons
const operatorBtn = document.querySelectorAll(".operatorKey");
for (i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener ('click', function(e) {
    if (!operator) {
      operantA = parseFloat(firstDisplay.textContent);
      operator = e.target.id
      clearDisplay();
      if (secondDisplay.textContent.slice(-1) == '=') {
        secondDisplay.textContent = result + e.target.textContent;
      } else {
        secondDisplay.textContent += operantA + e.target.textContent
      } 
    } else {
      operantB = parseFloat(firstDisplay.textContent);
      result = +operate(operantA, operantB, operator).toFixed(5);
      // firstDisplay.textContent = result;
      clearDisplay();
      operator = e.target.id;
      operantA = result;
      if (secondDisplay.textContent.slice(-1) == '=') {
        secondDisplay.textContent = result + e.target.textContent;
      } else {
        secondDisplay.textContent += operantB + e.target.textContent;
      }
    }
  })
}
  // Equal button
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener('click', () => {
  if(!operantA) {
    result = parseFloat(firstDisplay.textContent);
    operantA = result;
  } else {
    operantB = parseFloat(firstDisplay.textContent);
    result = +operate(operantA, operantB, operator).toFixed(5);
    firstDisplay.textContent = result;
    secondDisplay.textContent += operantB + '='
    operantA = result;
    operator = "";
  }
})


// Clear functions and button
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener ('click', clearAll);

function clearAll () {
  firstDisplay.textContent = "";
  secondDisplay.textContent = "";
  operantA = "";
  operantB = "";
  operator = "";
}

function clearDisplay() {
  firstDisplay.textContent = "";
}


// Positive/Negative number button
const convertBtn = document.querySelector('#plusMinus');
convertBtn.addEventListener('click', () => {
  if (parseInt(firstDisplay.textContent) > 0) {
    firstDisplay.textContent = '-'+firstDisplay.textContent;
  } else {
    firstDisplay.textContent = firstDisplay.textContent.substring(1);
  }
})


// Delete button
const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
  firstDisplay.textContent = firstDisplay.textContent.slice(0, -1);
});


// Punctuation button
const dotBtn = document.querySelector('#dot');
dotBtn.addEventListener('click', () => {
  if (firstDisplay.textContent % 1 == 0) {
    firstDisplay.textContent += '.';
  }
})