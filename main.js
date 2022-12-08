class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.clear();
  }
}

 clear() {
  this.currentOperand = " "
  this.previousOperand = " "
  this.operation = undefined
}


 deleteNumber() {

}

appendNumber(number) {
  if (number === "." && this.currentOperand.includes(".")) return;
  this.currentOperand = this.currentOperand.toString() + number.toString();
}

 chooseOperation(operation) {}

 operate() {}

 getDisplayNumber{

 }


 updateDisplay() {
  this.currentOperand.innerText = this.getDisplayNumber(this.currentOperand)
  if(this.operation!=null){
    
  }
}

const numberButtons = document.querySelectorAll("[data-numbers]");
const operators = document.querySelectorAll("[data-operator");
const equalsButton = document.querySelector("[data-equalsButton]");
const deleteButton = document.querySelector("[data-deleteButton]");
const decimalButton = document.querySelector("[data-decimalButton]");
const zeroButton = document.querySelector("[data-zeroButton]");
const previousOperand = document.querySelector("[data-previousOperand]");
const currentOperand = document.querySelector("[data-currentOperand]");
const clearButton = document.querySelector("[data-clearButton]");



const calculator = new Calculator(previousOperand, currentOperand);



numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});

operators.forEach(button=>{button.addEventListener("click",()=>{
  calculator.chooseOperation(button.innerHTML)
  calculator.updateDisplay()
})})






