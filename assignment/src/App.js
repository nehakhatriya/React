import React, { Fragment } from 'react';
import EmployeeTable from './components/table';
import './App.css';
import Calculator from './components/calculator/calculator'

function App() {
  return (
    <Fragment>
    <div className="Employee"> 
     <EmployeeTable></EmployeeTable>
    </div>
    <div className="Calculator"> 
     <Calculator></Calculator>
    </div>
    </Fragment>
  );
}

export default App;
