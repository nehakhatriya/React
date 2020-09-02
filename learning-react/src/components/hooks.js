import React,{ useState } from "react";
import Person from './Person'
function Hooks() {
   //useState function returns array with two values 1. variables which refers to the data 2. function which will
   //be used to change the state  .

    const [personState, setPersonState]= useState({
        persons: [ { name: "zayn", age: 26 }, { name: "joey", age: 29 } ] 
    });
    //we can use useState more than once for multile state slices.
    const [otherProperties, setOtherPropertyState ]=useState({otherProperties:"some other property values"});
    
    const switchStateHandler=()=>{
      //console.log("button is clicked!!")
    //setPersonState will overwrite the properties of previously defined state i.e it does not merge it with old state instead replaced the old state
    // therefore we can manually merge properties     
      setPersonState({
        persons: [ { name: "zayn", age: 27 }, { name: "chandler", age: 29 } ] 
      })
    }
      return (
        <div className="App">
          <div className="App-header">
            HELLO WORLD!!
            {/* this refers to the base Component i.e App */}
            <button onClick={switchStateHandler}>Switch Name</button>
            SWITCH NAMES WITH HOOKS IN FUNCTION COMPONENT
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobbie:Singing</Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Acting</Person>
          </div>
        </div>
      );
    
  }
  
  export default Hooks;
  