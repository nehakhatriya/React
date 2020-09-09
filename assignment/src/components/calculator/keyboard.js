import React from 'react'
import classes from './keyboard.module.css'
import Button from './button'

const Keyboard=(props)=>{

    let number=10
    const operations=["+","-","/"]
    const buttons=operations.map((element)=>{
       number=number-3
        return <Button num={number} op={element} inputValue={props.inputValue}></Button>
    })
    return (
        <div id="keyboard">
         {buttons}
        <div className={classes.row}>
          <button className="btn btn-info btn-zero" onClick={()=>props.inputValue(0)} value="0">0</button>
          <button className="btn btn-danger" onClick={()=>props.inputValue("AC")} value="AC">AC</button>
          <button className="btn btn-success btn-result" onClick={()=>props.inputValue("=")} value="=">=</button>
          <button className="btn btn-warning" onClick={()=>props.inputValue("*")} value="*">*</button>
        </div>
      </div>
    )
}

export default Keyboard