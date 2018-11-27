import React, { Component } from "react";
import Numbers from "./Numbers";
import Equations from "./Equations";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            expression: [],
            evaluation: 0
        }
    }

    clearCalculation = () => {
        this.setState({
            expression: [],
            evaluation: 0
        })
        console.log(this.state.expression)
    }

    evaluateExpression = () => {
        const total = this.state.evaluation;
        this.setState({
            evaluation: eval(this.state.expression.join(""))
        })
        console.log(total);
    }
    render(){
        const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
        const mappedNumbers = numbers.map(number => {
            return(
                <Numbers num={number} expression={this.state.expression}/>
            )
        })

        const equations = ["+", "-", "*", "/"];
        const mappedEquations = equations.map(equation => {
            return(
                <Equations symbol={equation} expression={this.state.expression} />
            )
        })
        return(
            <div className="calculator">
                <div className="numbers">
                    { mappedNumbers }
                </div>
                <div className="symbols">
                    <button onClick={this.clearCalculation}>C</button>
                    <div className="equations">
                        { mappedEquations }
                    </div>
                    <button onClick={this.evaluateExpression}>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator;