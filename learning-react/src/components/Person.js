import React from "react";

const person = (props) => {
    return (
        <div>
            <h6>I'm {props.name} and i am {props.age}!!</h6>
            {/* accessing text between our Person element */}
            <p>{props.children}</p>
        </div>
    )
}
export default person;