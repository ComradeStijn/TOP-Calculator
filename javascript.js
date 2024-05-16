// Usage: calculate('operation', number a, number b)
import calculate from './calculations.js';

let lastNumber, newNumber, operator;
let outputField = document.querySelector(".output")
let acButton = document.querySelector("#AC");
let zeroButton = document.querySelector("#zero");
let numberButtons = document.querySelectorAll(".number");
let dotButton = document.querySelector(".dot");


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
        if (checkOutputSize()) {
            if (outputField.textContent === '0') {
                outputField.textContent = buttonValue;
            } else {
                outputField.textContent += buttonValue;
            }
        }
    })
})

// dotButton.addEventListener("click", () => {
//     if ()
// })

acButton.addEventListener("click", () => {
    resetData();
    outputField.textContent = "0";
})

zeroButton.addEventListener("click", () => {
    if (checkOutputSize() && outputField.textContent !== '0') {
        outputField.textContent += '0';
    }
})


function resetData() {
    lastNumber = newNumber = operator = undefined;
}

function checkOutputSize() {
    return outputField.textContent.length < 11 ? true : false
}


