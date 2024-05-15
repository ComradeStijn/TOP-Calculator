// Usage: calculate('operation', number a, number b)
import calculate from './calculations.js';

let lastNumber, newNumber, operator;
let outputField = document.querySelector(".output")
let acButton = document.querySelector("#AC");
let zeroButton = document.querySelector("#zero");

function resetData() {
    lastNumber = newNumber = operator = undefined;
}


function checkOutputSize() {
    return outputField.textContent.length < 11 ? true : false
}



acButton.addEventListener("click", () => {
    resetData();
    outputField.textContent = "0";
})

zeroButton.addEventListener("click", () => {
    if (checkOutputSize() && outputField.textContent !== '0') {
        outputField.textContent += '0';
    }
})