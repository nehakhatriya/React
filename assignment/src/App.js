import React from 'react';
import EmployeeForm from './components/form';
import EmployeeTable from './components/table';
import './App.css';

function App() {
  return (
    <div className="App">
      
     <EmployeeForm></EmployeeForm>
     <br></br>
     <EmployeeTable></EmployeeTable>
     
    </div>
  );
}

export default App;
