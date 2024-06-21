const display = document.querySelector("#display-div");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#button-clear");
const equalsButton = document.querySelector("button-eq");
console.log(numberButtons);

let num1 = "";
let num2 = "";
let operator = "";
let result = undefined;
// press a button and it becomes input
// let num1 = numberButtons.addEventListener("click", () => {});

const plus = (a, b) => a + b;
const times = (a, b) => a * b;
const divide = (a, b) => a / b;
const minus = (a, b) => a - b;

const operatorsObject = {
  '+': plus,
  'x': times,
  '/': divide,
  '-': minus
}

const clearDisplay = () => {
  display.textContent = "";
};

const clearMemory = () => {
  num1 = "";
  num2 = "";
  operator = "";
  result = undefined;
};

const operate = (a,b,operator) => {
  result = operatorsObject[operator](a,b)
  display.textContent = result //result
  console.log(result)
  clearMemory();
};

clearButton.addEventListener("click", () => {
  clearDisplay();
  clearMemory();
});

// console.log([...numberButtons])
Array.from(numberButtons).map((button) => {
  button.addEventListener("click", (event) => {
    if (result) {
      clearMemory()
    }
    console.log(event);
    if (!operator) {
      num1 += event.target.textContent;
      display.textContent = num1;
      // console.log(num1);
    }
    if (num1 && operator) {
      num2 += event.target.textContent;
      display.textContent = num2;
      // console.log(num2)
    }
  });
});

Array.from(operatorButtons).map((button) => {
  button.addEventListener("click", (event) => {
    if (result) {
      clearDisplay();
    }
    // console.log(event);
    if (!num1) {
      clearDisplay();
      return;
    }
    if (num1 && num2 && operator && event.target.textContent === "=") {
      operate(Number(num1),Number(num2),operator)
      return;
    }
    operator = event.target.textContent;
    console.log(operator);
  });
});
