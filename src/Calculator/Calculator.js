import React, { Component } from "react";
import Numbers from "./Numbers";

class Calculator extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
        const mappedNumbers = numbers.map(number => {
            return(
                <Numbers num={number} />
            )
        })
        return(
            <div class="calculator">
                <div class="numbers">
                    { mappedNumbers }
                </div>
            </div>
        )
    }
}

export default Calculator;