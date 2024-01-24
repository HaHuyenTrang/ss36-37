
let currentNumber = "";
let storedNumber = "";
let selectedOperation = "";

function appendNumber(number) {
    currentNumber += number;
    document.getElementById("result").value = currentNumber;
}

function performOperation(operation) {
    if (currentNumber === "") {
        selectedOperation = operation;
    } else {
        if (storedNumber !== "") {
            calculateResult();
        }
        selectedOperation = operation;
        storedNumber = currentNumber;
        currentNumber = "";
        document.getElementById("result").value = "";
    }
}

function calculateResult() {
    let result = 0;
    switch (selectedOperation) {
        case "+":
            result = parseFloat(storedNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(storedNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(storedNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(storedNumber) / parseFloat(currentNumber);
            break;
    }
    currentNumber = result.toString();
    document.getElementById("result").value = currentNumber;
    storedNumber = "";
    selectedOperation = "";
}

function clearResult() {
    currentNumber = "";
    storedNumber = "";
    selectedOperation = "";
    document.getElementById("result").value = "";
}
