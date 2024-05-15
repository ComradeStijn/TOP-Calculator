// Usage: calculate('operation', number a, number b)
import calculate from './calculations.js';

let lastNumber, newNumber, operator;
let outputField = document.querySelector(".output")
let acButton = document.querySelector("#AC");
let zeroButton = document.querySelector("#0");

function resetData() {
    lastNumber = newNumber = operator = undefined;
}


acButton.addEventListener("click", () => {
    resetData();
    outputField.textContent = "0";
})

zeroButton.addEventListener("click", () => {
    if (!outputField.textContent === '0') {
        outputField.textContent = outputField.textContent.concat('0');
    }
    alert('test');
})