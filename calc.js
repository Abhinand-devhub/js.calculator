let display = document.getElementById("textout");
let currentInput = "";
// to get the values
function appendValue(value) {
    let operators = ['+', '-', 'x', '÷', '%'];

    let parts = currentInput.split(/[\+\-\x\÷\%]/);
    let lastNumber = parts[parts.length - 1];

    if (!operators.includes(value)) {
        if (lastNumber.length >= 16) {
            return;
        }
    }

    currentInput += value;
    display.innerText = currentInput;
}
// to clear the display
function clearDisplay() {
    currentInput = "";
    display.innerText = "";
}
// to delete the last input
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput;
}
// opeartion
function calculate() {
    try {
        let result = eval(currentInput
            .replace(/x/g, '*')
        );
        display.innerText = result;
        currentInput = result.toString();
    } catch {
        display.innerText = "Error";
    }
}
window.onload = function () {
    display = document.getElementById("output");
};
