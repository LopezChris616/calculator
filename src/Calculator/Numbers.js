import React from "react";

const Numbers = props => {
    const pushNum = () => {
        props.expression.push(props.num);
        if(props.num === "."){
            if(props.expression.length === 1){
                props.expression.unshift(0);
            }
        }
        console.log(props.expression);
    }
    return (
        <button onClick={pushNum}>{props.num}</button>
    )
}

export default Numbers;