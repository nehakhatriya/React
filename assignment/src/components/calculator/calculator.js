import React, { Component } from 'react'
import classes from './calculator.module.css'
import Keyboard from './keyboard'

class Calculator extends Component {

    state = {
        result: 0,
        operation: null,
        currentVal: '',
        nextVal: ''
    }
    inputValueHandler = (inputVal) => {
        var result
        if (typeof inputVal === 'number') {
            if (this.state.operation === null) {
                var currentVal = this.state.currentVal + inputVal
                this.setState({ currentVal: currentVal })
            }
            else {
                var nextVal = this.state.nextVal + inputVal
                this.setState({ nextVal: nextVal })
                if (this.state.nextVal !== '') { result = ''+this.calculate()
                    this.setState({ result: result ,nextVal:'',currentVal:result})    
                }
            }
        }
        else {
            var operator = inputVal
            if(operator==="AC"){
                    console.log("inside AC")
                    this.setState({result: 0, operation:null,currentVal:"", nextVal:""})
                    console.log(this.state)
            }
            if(operator==="="&&this.state.nextVal !== ''){
                    console.log("inside equal")
                     currentVal=""+result;
                     this.setState({currentVal:currentVal,operation:null})
                     console.log(this.state)
            }
            console.log("opearator "+operator)
            this.setState({ operation: operator })
            if (this.state.nextVal !== '') {
                result = ''+this.calculate()
                this.setState({ result: result ,nextVal:'',currentVal:result})    
            }
        }
    }
calculate = () => {
    var operator = this.state.operation
    var result;
    switch (operator) {
        case "+":  result= parseInt(this.state.currentVal) + parseInt(this.state.nextVal);break;
        case "-":  result=  parseInt(this.state.currentVal) - parseInt(this.state.nextVal);break;
        case "/":  result=  parseInt(this.state.currentVal) / parseInt(this.state.nextVal);break;
        case "*":  result=  parseInt(this.state.currentVal) * parseInt(this.state.nextVal);break;  
    }
    return result;
}
render() {
    return (
        <div>
            <div className="container">
                <div className={classes.header}>
                    <h3> Calculator</h3></div>
                <div id="calc" className={classes.calc}>
                    <div id="display" className={classes.display}>
                        <div id="result"><p>{this.state.result}</p></div>
                        <div id="previous"><p>{this.state.currentVal}{this.state.operation}{this.state.nextVal}</p></div>
                    </div>
                    <Keyboard inputValue={this.inputValueHandler} ></Keyboard>
                </div>
            </div>
        </div>
    )

}
}

export default Calculator;