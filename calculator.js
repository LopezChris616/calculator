const expressionButtons = document.getElementsByClassName("expression-value");
const symbolsButtons = document.getElementsByClassName("symbols");
const result = document.getElementById("result");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const expressionValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "*", "/"];
let expression = [];


//loops through all the buttons (except equals and clear)
//and sets mathCalc as the callback function for the eventlistener
const calculations = () => {
    for(let i = 0; i < expressionValues.length; i++){
        expressionButtons[i].addEventListener("click", () => mathCalc(i));
    }
}

//if block checks if the value of the button that was clicked wasn't a number
//if it wasn't disable the operations buttons, if it was re-enable them
const mathCalc = arrItem => {
    if(typeof expressionValues[arrItem] !== "number"){
        checkExpressionLength();
        disableCalculations();
    }else {
        enableCalculations();
    }
    newExpressionValue();
}

//when the user clicks on a button, the value of that button gets bused to
//the expression array to eventually evaluate the expression
//it also updates the current expression accordingly to the screen
const newExpressionValue = () => {
    expression.push(expressionValues[arrItem]);
    result.textContent = expression.join("");
}

//used for when a user clicks on an operation (+,-, /, *) without entering a number first
//it's add a 0 in front of it
const checkExpressionLength = () => {
    if(expression.length === 0){
        expression.unshift(0);
    }
}

//when a user clicks on an operation (+, /, *, NOT - to allow negative numbers)
//it disables those buttons so that there are not two
//operations in a row
const disableCalculations = () => {
    expressionButtons[11].disabled = true;
    expressionButtons[13].disabled = true;
    expressionButtons[14].disabled = true;
    equals.disabled = true;
}

//when the user clicks on an operation (+, /, *, NOT - to allow negative numbers)
//those buttons disabled
//this function re-enables the button once the user clicks on
//a number to allow further operations
const enableCalculations = () => {
    expressionButtons[11].disabled = false;
    expressionButtons[13].disabled = false;
    expressionButtons[14].disabled = false;
    equals.disabled = false;
}

//evaluates the expression and displays it on screen
const calcTotal = () => {
    result.textContent = eval(expression.join(""));
}

//empties the expression array to allow for
//a new math expression to be created and
//calls enableCalculations to enable the
//operations buttons again if they were disabled
const resetCalculation = () => {
    expression = [];
    result.textContent = 0;
    enableCalculations();
}

//eventlisteners for the equals and reset buttons
//using calcTotal and resetCalculations respectively
//as the callback functions
equals.addEventListener("click", calcTotal);
reset.addEventListener("click", resetCalculation);

calculations();