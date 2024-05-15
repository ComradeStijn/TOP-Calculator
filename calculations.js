export default function calculate(choice, a, b){
    switch (choice) {
        case 'add': return add(a, b);
        case 'subtract': return subtract(a, b);
        case 'multiply': return multiply(a, b);
        case 'divide':
            if (b === 0) return console.log('Divide by 0');
            return divide(a, b);
        default:
            return alert('Error');
    }
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

export { add, subtract, multiply, divide };