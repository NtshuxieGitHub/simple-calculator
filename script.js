/**
 * Create Calculator class
 */
class Calculator {
  /**
   * Constructor
   */
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  /**
   * Clear the claculator
   */
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  /**
   * Delete the last character in the current operand
   */
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  /**
   * Append th enumber on the screen
   */
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  /**
   * Select an operation
   */
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  /**
   * Perform comuptation requested by user
   */
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  /**
   * Format number written on screen (from thousands to millions)
   */
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const intergerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(intergerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = intergerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  /**
   * Update calculator display
   */
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
      return;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

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
=======
/**
 * Create Calculator class
 */
class Calculator {
  /**
   * Constructor
   */
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  /**
   * Clear the claculator
   */
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  /**
   * Delete the last character in the current operand
   */
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  /**
   * Append th enumber on the screen
   */
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  /**
   * Select an operation
   */
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  /**
   * Perform comuptation requested by user
   */
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  /**
   * Format number written on screen (from thousands to millions)
   */
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const intergerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(intergerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = intergerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  /**
   * Update calculator display
   */
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
      return;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

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
