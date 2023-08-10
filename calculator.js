const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");

keys.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.dataset.previousKeyType = "operator";
    }
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }

    if (action === "clear") {
      calculator.dataset.previousKeyType = "clear";
    }

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
      const calculate = (n1, operator, n2) => {
        let result = "";

        if (operator === "add") {
          result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === "subtract") {
          result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === "multiply") {
          result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === "divide") {
          result = parseFloat(n1) / parseFloat(n2);
        }

        return result;
      };
    }
  }
});

const display = document.querySelector(".calculator__display");
