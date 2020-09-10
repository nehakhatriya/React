import React, { Component } from 'react';
import './App.css';
import Hooks from './components/hooks'
import State from './components/state'
import Conditional from './components/conditional-component'
import Blog from './containers/Blog/Blog';
class App extends Component {

  render() {
    return (
      <div className="App">
        <State />
        <Hooks />
        <Conditional />
<p></p>
        <h1>BLOGS</h1>
        <h3>Http request lecture</h3>
        <Blog/>
      </div>
    );
  }
}

export default App;
