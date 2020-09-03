import React from "react";

const person = (props) => {
    return (
        <div>
            <h4 onClick= {props.click}>I'm {props.name} and i am {props.age}!!</h4>
            {/* accessing text between our Person element */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default person;