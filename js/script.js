let display = document.getElementById("display");
let currentInput = ""
let currentOprator = ""
// let firstOperand = null;
//let operator = null;


function appendNumber(value) {
    currentInput += value
    display.textContent = currentInput
}


function appendOperator(operator) {
    if (currentInput === "" && operator !== ".") return
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "Erro";
        currentInput = "";
    }
}

function appendParenthesis(paren) {
    currentInput += paren;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.textContent = currentInput;
}

//function updateDisplay() {
//    document.getElementById('display').value = currentInput;
//}