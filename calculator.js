const expressionButtons = document.getElementsByClassName("expression-value");
const symbolsButtons = document.getElementsByClassName("symbols");
const result = document.getElementById("result");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const expressionValues = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "+", "-", "*", "/"];
let expression = [];

const mathCalc = arrItem => {
    if(typeof expressionValues[arrItem] !== "number"){
        checkExpressionLength();
        disableCalculations();
    }else {
        enableCalculations();
    }
    expression.push(expressionValues[arrItem]);
    result.textContent = expression.join("");
}

const checkExpressionLength = () => {
    if(expression.length === 0){
        expression.unshift(0);
    }
}

const disableCalculations = () => {
    expressionButtons[11].disabled = true;
    expressionButtons[13].disabled = true;
    expressionButtons[14].disabled = true;
    equals.disabled = true;
}

const enableCalculations = () => {
    expressionButtons[11].disabled = false;
    expressionButtons[13].disabled = false;
    expressionButtons[14].disabled = false;
    equals.disabled = false;
}

const calculations = () => {
    for(let i = 0; i < expressionValues.length; i++){
        expressionButtons[i].addEventListener("click", () => mathCalc(i));
    }
}

const calcTotal = () => {
    result.textContent = eval(expression.join(""));
}

const resetCalculation = () => {
    expression = [];
    result.textContent = 0;
}

equals.addEventListener("click", calcTotal);
reset.addEventListener("click", resetCalculation);

calculations();