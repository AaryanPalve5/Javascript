// script.js

let display = document.getElementById('display');
let currentInput = '0';

function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = char;
    } else {
        currentInput += char;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.innerText = currentInput;
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = 'Error';
    }
    display.innerText = currentInput;
}
