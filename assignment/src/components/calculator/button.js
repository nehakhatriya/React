import React from 'react'
import classes from './button.module.css'

const Button =(props)=>{

    return(
        <div>
          <div className={classes.row}>
          <button className="btn btn-info" onClick={()=>props.inputValue(props.num)} value={props.num}>{props.num}</button>
          <button className="btn btn-info" onClick={()=>props.inputValue(props.num+1)} value={props.num+1}>{props.num+1}</button>
          <button className="btn btn-info" onClick={()=>props.inputValue(props.num+2)} value={props.num+2}>{props.num+2}</button>
          <button className="btn btn-warning" onClick={()=>props.inputValue(props.op)} value={props.op}>{props.op}</button>
        </div>
        </div>
    )

}
export default Button 