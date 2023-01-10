// Add query selectors to buttons and display

let nums = document.querySelectorAll(".btn-number")

let ops = document.querySelectorAll(".btn-op")

let btnEqual  = document.querySelector(".btn-equal")

let btnClear = document.querySelector("#clear")

let display = document.querySelector(".display")


// Create three variables to store numbers and operators

let num1 = "";

let num2 = "";

let operator = "";

let result = 0;

let isResultDisplayed = false;

// Add event listeners to buttons

nums.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        if (!operator) {
            if (isResultDisplayed) {
                num1 = e.target.innerHTML;
                isResultDisplayed = false;
            }
            else num1 += e.target.innerHTML;
            display.textContent = num1;
        }
        else {
            num2 += e.target.innerHTML;
            display.textContent = `${num1} ${operator} ${num2}`
        }
    })
})

document.addEventListener("keydown", function(e) {
    console.log(e);
    if (Number(+e.key)) {
        if (!operator) {
            if (isResultDisplayed) {
                num1 = e.key;
                isResultDisplayed = false;
            }
            else num1 += e.key;
            display.textContent = num1;
        }
        else {
            num2 += e.key;
            display.textContent = `${num1} ${operator} ${num2}`
        }
    }
    else if (e.key == "+" || e.key == "-" || e.key == "x" || e.key == "/") {
        operator = e.key;
        num2 = "";
        display.textContent = `${num1} ${operator}`
    }

    else if (e.key == "Enter") {
        getResult();
    }
})

ops.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        operator = e.target.innerHTML;
        num2 = "";
        display.textContent = `${num1} ${operator}`
    })
})

btnEqual.addEventListener("click", function() {
    if (!operator) return;
    else if (operator == "+") {
        result = +num1 + +num2;
    }
    else if (operator == "-") {
        result = +num1 - +num2;
    }
    else if (operator == "x") {
        result = +num1 * +num2;
    }
    else if (operator == "/") {
        result = +num1 / +num2;
    }
    display.textContent = `${num1} ${operator} ${num2} = ${result}`;
    num1 = result;
    num2 = "";
    operator = "";
    result = 0;
    isResultDisplayed = true;
})

btnClear.addEventListener("click", function() {
    num1 = "";
    num2 = "";
    operator = "";
    result = 0;
    display.textContent = " ";
})

// If both numVariables are empty, store number in first one and print it to display

// If another number is pressed, append it, until operator is pressed

// Store operator in opVariable and print it to display

// Store numbers in second numVariable

// If equal sign is pressed, do the operation and replace content of display with result