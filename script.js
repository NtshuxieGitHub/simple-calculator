/**
 * Import Calculator class from calculator.js
 */
const Calculator = require("./calculator.js");

/**
 * Create calculator constant variables
 */
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

/**
 * Create class instance
 */
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

/**
 * Add event listener for when user clicks on a number
 */
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

/**
 * Add event listener for when user clicks on an operation
 */
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

/**
 * Add event listener for when user clicks on a = button
 */
equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

/**
 * Add event listener for when user clicks on the AC button
 */
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

/**
 * Add event listener for when user clicks the DEL button
 */
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
