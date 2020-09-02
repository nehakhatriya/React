import React, { Component } from 'react';
import Person from './Person'

class State extends Component {
  //state property.
  state = { persons: [ { name: "zayn", age: 26 }, { name: "joey", age: 29 } ]  }

  switchStateHandler=()=>{
    //console.log("button is clicked!!")
    //DONT DO THIS :this.state.persons.name[0]="neha" instead use setState()
    this.setState({
      persons: [ { name: "zayn", age: 27 }, { name: "chandler", age: 29 } ] 
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          HELLO WORLD!!
          {/* this refers to the base Component i.e App */}
          <button onClick={this.switchStateHandler}>Switch Name</button>
          SWITCH NAMES WITH HOOKS IN FUNCTION COMPONENT
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbie:Singing</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Acting</Person>
        </div>
      </div>
      

      //internally this is compiled to
      //return React.createElement('div',{className:'App'},React.createElement('div',{className:'App-header','HELLO WORLD!!!'}))
      //therefore it is required to import React
    );
  }
}

export default State;
