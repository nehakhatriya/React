import React, { Component } from 'react';
import './App.css';
import Hooks from './components/hooks'
import State from './components/state'
import Conditional from './components/conditional-component'
class App extends Component {

  render() {
    return (
      <div className="App">
        <State />
        <Hooks />
        <Conditional />
      </div>
    );
  }
}

export default App;
