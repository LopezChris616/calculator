import React from "react";

const Equations = props => {
    const pushSymbol = () => {
        props.expression.push(props.symbol);
        console.log(props.expression);
    }
    return(
        <button onClick={pushSymbol}>{props.symbol}</button>
    )
}

export default Equations;