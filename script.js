let nums = document.querySelectorAll(".btn-number")
let ops = document.querySelectorAll(".btn-op")
let btnEqual  = document.querySelector(".btn-equal")
let btnClear = document.querySelector("#clear")
let display = document.querySelector(".display")
let num1 = "";
let num2 = "";
let operator = "";
let result = 0;
let isResultDisplayed = false;

function setNumsByClick(e) {
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
    document.activeElement.blur()
}


function setOperatorByClick(e) {
    if (!num1) return;
    if (num2) getResult()
    operator = e.target.innerHTML;
    display.textContent = `${num1} ${operator}`;
    document.activeElement.blur()
}


function operateKeyInput(e) {
    if (e.key == " ") return;
     else if (!isNaN(+e.key)) setNumsByKey(e)
     else if (e.key == "+" || e.key == "-" || e.key == "x" || e.key == "/") setOperatorByKey(e)
     else if (e.key == "Enter") {
        getResult();
     }
     else if (e.key == "Escape") clear();
 }


function setNumsByKey(e) {
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

function setOperatorByKey(e) {
    if (!num1) return;
    if (num2) getResult()
    operator = e.key;
    display.textContent = `${num1} ${operator}`
}

function getResult() {
    if (!num2) return;
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
}



function clear() {
    num1 = "";
    num2 = "";
    operator = "";
    result = 0;
    display.textContent = " ";
}

nums.forEach(btn => btn.addEventListener("click", setNumsByClick))
ops.forEach(btn => btn.addEventListener("click", setOperatorByClick))
btnEqual.addEventListener("click", getResult)
btnClear.addEventListener("click", clear)
document.addEventListener("keydown", operateKeyInput)
