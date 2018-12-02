const expressionButtons = document.getElementsByClassName("expression-value");
const symbolsButtons = document.getElementsByClassName("symbols");
const result = document.getElementById("result");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const expressionValues = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "+", "-", "*", "/"];
let expression = [];


equals.addEventListener("click", () => {
    const total = eval(expression.join(""));
    result.textContent = total;
})

reset.addEventListener("click", () => {
    expression = [];
    result.textContent = 0;
})

for(let i = 0; i < expressionValues.length; i++){
    expressionButtons[i].addEventListener("click", () => {
        // if(typeof expressionValues[expressionValues.length - 2] !== "number"){
        //     // if(expressionValues[])
        // }
        expression.push(expressionValues[i]);
        result.textContent = expression.join("");
        console.log(expression);
    })
}