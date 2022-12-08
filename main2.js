class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if(number==="."&&this.currentOperand.includes("."))return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {}

  compute() {} 

  updateDisplay() {
   this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equalsButton]");
const deleteButton = document.querySelector("[data-deleteButton]");
const clearButton = document.querySelector("[data-clearButton]");
const previousOperandTextElement = document.querySelector(
  "[data-previousOperand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-currentOperand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});
