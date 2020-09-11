import React, { Component } from 'react';
import './App.css';
// import Hooks from './components/hooks'
// import State from './components/state'
// import Conditional from './components/conditional-component'
import {BrowserRouter}  from 'react-router-dom'
import Blog from './containers/Blog/Blog';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {/* <State /> */}
        {/* <Hooks /> */}
        {/* <Conditional /> */}
        <Blog/>
        {/* <h1>BLOGS</h1> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
