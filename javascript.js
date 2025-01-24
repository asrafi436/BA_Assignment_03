const display = document.getElementById('display');

function appendValue(value) {
    const operators = ['+', '-', '*', '/', '.'];
    const lastChar = display.value.slice(-1);

    // Prevent multiple consecutive operators or starting with a operator
    if (operators.includes(value) && (operators.includes(lastChar) || display.value === '')) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    try {
        const value = parseFloat(display.value);
        display.value = Math.pow(value, 2).toFixed(10);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCube() {
    try {
        const value = parseFloat(display.value);
        display.value = Math.pow(value, 3).toFixed(10);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    try {
        const value = parseFloat(display.value);
        display.value = Math.sqrt(value).toFixed(10);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCbrt() {
    try {
        const value = parseFloat(display.value);
        display.value = Math.cbrt(value).toFixed(10);
    } catch (error) {
        display.value = 'Error';
    }
}