let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';

// Function to evaluate the expression
function evaluateExpression(expr) {
    try {
        return eval(expr);
    } catch {
        return "Error";
    }
}

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === 'AC') {
            // Clear the display
            string = '';
            display.value = string;
        } else if (value === 'DEL') {
            // Delete the last character
            string = string.slice(0, -1);
            display.value = string;
        } else if (value === '=') {
            // Evaluate the expression
            string = evaluateExpression(string);
            display.value = string;
        } else {
            // Append the clicked button value to the string
            string += value;
            display.value = string;
        }

        console.log(display.value);
    });
});