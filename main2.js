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

  chooseOperation(operation) {
    if(this.currentOperand==="")return
    if(this.previousOperand!==""){
      this.compute()
    }
    this.operation=operation
    this.previousOperand=this.currentOperand
    this.currentOperand=""
  }
 
  compute() {
    let computation
    let prev=parseFloat(this.previousOperand)
    let current=parseFloat(this.currentOperand)
    if(isNaN(prev)||isNaN(current)){alert("You're smarter than that")}
    switch(this.operation){
      case "+":
        computation=prev+current
        break

        case "-":
          computation=prev-current
          break

          case "*":
            computation=prev*current
            break

            case "÷":
              // if(current=0)
            computation=prev/current
            break

            default:
              return
    }
    this.currentOperand=computation
    this.operation=undefined
    this.previousOperand=""
  } 

  updateDisplay() {
   this.currentOperandTextElement.innerText = this.currentOperand;
   if(this.operation!=null){
    this.previousOperandTextElement.innerText=
    `${this.previousOperand} ${this.operation}`
   }
   else{
    this.previousOperandTextElement.innerText=""
   }
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
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton?.addEventListener("click",button=>{
  calculator.compute()
  calculator.updateDisplay()
})

clearButton?.addEventListener("click",button=>{
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton?.addEventListener("click",button=>{
  calculator.delete()
  calculator.updateDisplay()
})
