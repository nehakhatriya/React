import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'
import Hooks from './components/hooks'
import State from './components/state'
class App extends Component {

  render() {
    return (
      <div className="App">
      <State/>
        <Hooks/>
      </div>
    );
  }
}

export default App;
