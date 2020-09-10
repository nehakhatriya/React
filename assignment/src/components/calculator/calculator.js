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
        var result;
        if (typeof inputVal === 'number') {
            if ((this.state.operation === null) || (this.state.operation === "AC") || (this.state.operation === "=")) {
                if (this.state.operation === "=") {
                    console.log("inside equal if")
                    this.setState({ currentVal: "" }, () => {
                        var currentVal = this.state.currentVal + inputVal
                        this.setState({ currentVal: currentVal }, () => {
                            console.log("current val in state:" +
                                this.state.currentVal)
                        })
                    })
                }
                else {
                    var currentVal = this.state.currentVal + inputVal
                    this.setState({ currentVal: currentVal }, () => {
                        console.log("current val in state:" +
                            this.state.currentVal)
                    })
                }
            }
            else {
                console.log("inside nextval")
                var nextVal = this.state.nextVal + inputVal
                this.setState({ nextVal: nextVal }, () => console.log("next val in state:" + this.state.nextVal))
            }
        }
        else {
            var operator = inputVal
            if (operator === "AC") {
                this.setState({ result: 0, operation: "AC", currentVal: "", nextVal: "" }, () => { console.log("state after AC op c= " + this.state.currentVal + "next= " + this.state.nextVal + "op= " + this.state.operation) })
            }
            this.setState({ operation: operator })
            if ((this.state.nextVal !== '')&&(this.state.operation!=="AC")) {
                console.log("inside last if")
                result = '' + this.calculate()
                this.setState({ result: result, nextVal: '', currentVal: result })
            }
        }
    }
    calculate = () => {
        var operator = this.state.operation
        var result;
        switch (operator) {
            case "+": result = parseFloat(this.state.currentVal) + parseFloat(this.state.nextVal); break;
            case "-": result = parseFloat(this.state.currentVal) - parseFloat(this.state.nextVal); break;
            case "/": result = parseFloat(this.state.currentVal) / parseFloat(this.state.nextVal); break;
            case "*": result = parseFloat(this.state.currentVal) * parseFloat(this.state.nextVal); break;
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