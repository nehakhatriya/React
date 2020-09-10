import React, { useEffect, useRef, useContext } from "react";
import PropTypes from 'prop-types'
import authContext from "./context/auth-context";
const Person = (props) => {
    const inputref=useRef(null);
    const inputnum1ref=useRef(null);
    const inputnum2ref=useRef(null);
    const resultref=useRef(null);
    useEffect(()=>{
     inputref.current.focus();
   },[])
   const {authenticated}= useContext(authContext)
   const divide=()=>{
       const num1=inputnum1ref.current.value
       const num2=inputnum2ref.current.value
       try{
           if(num2===0)
           throw new Error("num2 cannot be zero")
           else
           resultref.current.value=num1/num2;
        }
        catch(e){
            resultref.current.value=e;
        
       }
   }

   if(props.name==''){
       throw new Error("name is null")
   }
    return (
        <div>
            
        {authenticated?<h6>logined</h6>:<h6>login</h6>}
                    <h4 onClick= {props.click}>I'm {props.name} and i am {props.age}!!</h4>
            {/* accessing text between our Person element */}
            <p>{props.children}</p>
            <input ref={inputref} type="text" onChange={props.changed} value={props.name}/>
            <input type="text" id="num1" ref={inputnum1ref} placeholder="num1"></input>
            <input type="text" ref={inputnum2ref} placeholder="num2"></input>
            <button type="button" id="div" onClick={divide}>Div</button>
            <input type="text" ref={resultref} placeholder="result"></input>
            
        </div>
    )
}
Person.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func

}

export default Person;