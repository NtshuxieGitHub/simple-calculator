/**
 * These tests are for calculator.test.js
 */

/**
 * Import TextEncoder and TextDecoder
 */
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

/**
 * Import Calculator and JSDOM
 */
const Calculator = require("./calculator.js");
const { JSDOM } = require("jsdom");

describe("Calculator", () => {
  let calculator;
  let mockPrevTextElement;
  let mockCurrTextElement;
  let dom;
  let document;

  beforeEach(() => {
    /**
     * Create fale DOM elements
     */
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <div class="output">
            <div data-previous-operand class="previous-operand"></div>
            <div data-current-operand class="current-operand"></div>
          </div>
        </body>
      </html>
    `);

    document = dom.window.document;

    mockPrevTextElement = dom.window.document.querySelector(
      "[data-previous-operand]"
    );
    mockCurrTextElement = dom.window.document.querySelector(
      "[data-current-operand]"
    );

    calculator = new Calculator(mockPrevTextElement, mockCurrTextElement);
  });

  /**
   * Test the clear function
   */
  test("clears all operands", () => {
    calculator.currentOperand = "1";
    calculator.previousOperand = "2";
    calculator.operation = "+";

    calculator.clear();

    expect(calculator.currentOperand).toBe("");
    expect(calculator.previousOperand).toBe("");
    expect(calculator.operation).toBeUndefined();
  });

  /**
   * Test the append function
   */
  test("appends a number", () => {
    calculator.appendNumber("1");
    calculator.appendNumber("2");
    expect(calculator.currentOperand).toBe("12");
  });

  /**
   * Test the numerical format function
   */
  test("prevents multiple decimal points", () => {
    calculator.appendNumber("1");
    calculator.appendNumber(".");
    calculator.appendNumber(".");
    calculator.appendNumber("5");

    expect(calculator.currentOperand).toBe("1.5");
  });

  /**
   * Test the delete function
   */
  test("deletes the last digit", () => {
    calculator.currentOperand = "1234";
    calculator.delete();

    expect(calculator.currentOperand).toBe("123");
  });

  /**
   * Test the chooseOperation function
   */
  test("chooses operation and set previous operand", () => {
    calculator.appendNumber("1");
    calculator.chooseOperation("+");

    expect(calculator.previousOperand).toBe("1");
    expect(calculator.currentOperand).toBe("");
    expect(calculator.operation).toBe("+");
  });

  /**
   * Test the compute function: division
   */
  test("computes division", () => {
    calculator.currentOperand = "2";
    calculator.previousOperand = "6";
    calculator.operation = "÷";
    calculator.compute();

    expect(calculator.currentOperand).toBe(3);
  });

  /**
   * Test the compute function: multiplication
   */
  test("computes division", () => {
    calculator.currentOperand = "2";
    calculator.previousOperand = "6";
    calculator.operation = "*";
    calculator.compute();

    expect(calculator.currentOperand).toBe(12);
  });

  /**
   * Test the getDisplayNumber formatting function
   */
  test("formats number with commas", () => {
    const formatted = calculator.getDisplayNumber("555555");

    expect(formatted).toBe("555,555");
  });

  /**
   * Test the updateDisplay function
   */
  test("updates DOM elements", () => {
    calculator.currentOperand = "15";
    calculator.previousOperand = "10";
    calculator.operation = "+";
    calculator.updateDisplay();

    expect(mockCurrTextElement.innerText).toBe("15");
    expect(mockPrevTextElement.innerText).toBe("10 +");
  });
});
