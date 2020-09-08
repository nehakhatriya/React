import React, { Component } from 'react'
import EmployeeTableContent from './tableStructure'
import EmployeeForm from './form';
class EmployeeTable extends Component {

    state = { employees: [{ name: "neha", job: "manager" }, { name: "nikita", job: "trainee" }, { name: "jai", job: "consultant" }] }
    deleteEmployee=(event, index) =>{
        const emp = this.state.employees.slice()
        emp.splice(index, 1)
        this.setState({ employees: emp })
    }
    addEmp=(newname,newjob)=>{
       // console.log(`inside add emp ${name} ${job}`)
        const emp = this.state.employees.slice()
        emp.push({name:newname,job:newjob})
        this.setState({ employees: emp })
    }
  
    render() {
        let employees = (

            this.state.employees.map((employee, index) => {
                return <EmployeeTableContent name={employee.name} job={employee.job}
                    click={(event) => this.deleteEmployee(event, index)} />
            })
        )
        return (
            < div >
                <div className="container">
                    <EmployeeForm addEmp={this.addEmp}>
                    </EmployeeForm>
                    <hr></hr>
                    <h4> Employee Table</h4>
                    <table className="table">
                        <tr>
                            <th id="Name" scope="col">Name</th>
                            <th id="Job" scope="col">Job</th>
                            <th id="Remove"scope="col">Remove</th>
                        </tr>
                        {employees}
                    </table>
                </div>
            </div >
        )
    }
}
export default EmployeeTable;