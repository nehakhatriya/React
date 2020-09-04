
import React, { Component } from 'react';
import Person from './Person'
import Radium from 'radium'

class conditional extends Component {
    //state property.
    state = { persons: [{ id:"abcd", name: "zayn", age: 26 }, { id:"efgh", name: "joey", age: 29 }], toggle: false }

    toogleUsersHandler = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    deletePersonhandler=(index)=>{
        //const persons=this.state.persons :this will changethe origional state directly
        const persons=this.state.persons.slice()
        persons.splice(index,1)
        this.setState({ persons:persons})
    }
    changeNameHandler = (event,id) => {
        const personIndex=this.state.persons.findIndex(p=> p.id===id)
        const per={ ...this.state.persons[personIndex]}
        per.name=event.target.value
        const persons= [...this.state.persons]
        persons[personIndex]=per
        this.setState({ persons: persons},() => { console.log(this.state.persons[0]) })
    }
    render() {
        const style={
            backgroundColor:'green', color:"white",
            font:'inherit',border:'1px solid blue',
            padding:'8px', cursor:'pointer',
            //using radium we can assign pseudo selector as properties
            ':hover':{
                backgroundColor:'lightgreen',
                color:'black'
            }
        }
        let persons = null
        if (this.state.toggle) {
            persons = (
            
                     this.state.persons.map((person,index)=>{
                        return  <Person
                        click={()=>this.deletePersonhandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event)=>this.changeNameHandler(event,person.id)}/>}
                    )
                         
            )
            style.backgroundColor='red';  
            style[':hover']={
                backgroundColor:'salmon',
                color:'black'
            }   
        }
        return (
            <div className="App">
                <h3>HELLO WORLD!!</h3>
                <button style={style} onClick={this.toogleUsersHandler}>Toggle Names</button>
                {/* this refers to the base Component i.e App */}
                <h3>Toggle Names with conditional  COMPONENT</h3>
                {persons}
            </div>
        );
    }
}

export default Radium(conditional);
