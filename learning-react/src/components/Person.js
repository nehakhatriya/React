import React, { useEffect, useRef, useContext } from "react";
import PropTypes from 'prop-types'
import authContext from "./context/auth-context";
const Person = (props) => {
    const inputref=useRef(null);
   useEffect(()=>{
     inputref.current.focus();
   },[])
   const isAuth= useContext(authContext)
    return (
        <div>
        {isAuth.authenticated?<h6>logined</h6>:<h6>login</h6>}
                    <h4 onClick= {props.click}>I'm {props.name} and i am {props.age}!!</h4>
            {/* accessing text between our Person element */}
            <p>{props.children}</p>
            <input ref={inputref} type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
Person.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func

}

export default Person;