import React, { Component } from 'react';
import Person from './Person'

class State extends Component {
    //state property.
    state = { persons: [{ name: "zayn", age: 26 }, { name: "joey", age: 29 }] }

    switchStateHandler = (newName) => {
        //console.log("button is clicked!!")
        //DONT DO THIS :this.state.persons.name[0]="neha" instead use setState()
        //this.setState 1. always make use of setState to modify state 2. place thecode that has to be executed after state change in callback
        // function as second parameter of setState 3. when you hve to update state based on the previous state value, pass in a function as an
        // argumnent instead of the regular object as this.setstate((prevstate)=>{ count: prevsate.count+1})
        this.setState({ persons: [{ name: newName, age: 27 }, { name: "chandler", age: 29 }] }, () => { console.log(this.state.persons[0]) })
    }

    changeNameHandler = (event) => {
        this.setState({ persons: [{ name: event.target.value, age: 27 }, { name: "chandler", age: 29 }] }, () => { console.log(this.state.persons[0]) })
    }
    render() {
        return (
            <div className="App">

                <h3>HELLO WORLD!!</h3>
                {/* this refers to the base Component i.e App */}
                <button onClick={() => this.switchStateHandler("Neha")}>Switch Name</button>
                <h3>SWITCH NAMES WITH STATE IN CLASS COMPONENT</h3>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchStateHandler.bind(this, "nikita")}
                    changed={this.changeNameHandler}> My hobbie:Singing</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Acting</Person>

            </div>
            //internally this is compiled to
            //return React.createElement('div',{className:'App'},React.createElement('div',{className:'App-header','HELLO WORLD!!!'}))
            //therefore it is required to import React
        );
    }
}

export default State;
