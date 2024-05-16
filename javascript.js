// Usage: calculate('operation', number a, number b)
import calculate from './calculations.js';

let lastNumber, newNumber, operator;
let lastButtonIsOperator = false;
let outputField = document.querySelector(".output")
let acButton = document.querySelector("#AC");
let zeroButton = document.querySelector("#zero");
let numberButtons = document.querySelectorAll(".number");
let dotButton = document.querySelector("#dot");
let operatorButtons = document.querySelectorAll(".operator");


operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === undefined && !lastButtonIsOperator) {
            operator = button.id;
            lastNumber = parseFloat(outputField.textContent);
        } else if (!lastButtonIsOperator) {
            newNumber = parseFloat(outputField.textContent);
            lastNumber = parseFloat(calculate(operator, lastNumber, newNumber)
                        .toString()
                        .slice(0, 11));
            outputField.textContent = lastNumber;
            operator = button.id;
        } else {
            operator = button.id;
        }
        lastButtonIsOperator = true;    
    })
})

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = {
            'one': '1',
            'two': '2',
            'three': '3',
            'four': '4',
            'five': '5',
            'six': '6',
            'seven': '7',
            'eight': '8',
            'nine': '9'
        }[button.id];
        if (lastButtonIsOperator) {
            outputField.textContent = buttonValue;
            lastButtonIsOperator = false;
        } else if (checkOutputSize() && outputField.textContent !== '0') {
            outputField.textContent += buttonValue;
        } else if (checkOutputSize()) {
            outputField.textContent = buttonValue;
        }
    })
})


dotButton.addEventListener("click", () => {
    console.log(lastButtonIsOperator);
    if (lastButtonIsOperator) {
        outputField.textContent = '0.';
        lastButtonIsOperator = false;
    } else if (checkOutputSize() && !outputField.textContent.includes('.')) {
        outputField.textContent += '.';
    }
})

acButton.addEventListener("click", () => {
    resetData();
    outputField.textContent = "0";
})

zeroButton.addEventListener("click", () => {
    if (lastButtonIsOperator) {
        outputField.textContent = '0';
        lastButtonIsOperator = false;
    } else if (checkOutputSize() && outputField.textContent !== '0') {
        outputField.textContent += '0';
    }
})


function resetData() {
    lastNumber = newNumber = operator = undefined;
    lastButtonIsOperator = false;
}

function checkOutputSize() {
    return outputField.textContent.length < 11 ? true : false
}


