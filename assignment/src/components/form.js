import React, { Component } from 'react'
class EmployeeForm extends Component {

    render() {
        return (
            
                 <div className="container">
                     <h4>Add New Employee</h4>
                <form>
                    <div class="form-group">
                        <label for="eempname"><b>Name:</b></label>
                        <input type="test" class="form-control" id="empname" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="empjob"><b>Job:</b></label>
                        <input type="text" class="form-control" id="empjob" placeholder="job" />
                    </div>
                    <button type="submit" class="btn btn-primary"> Add </button>
                </form>
                </div>
            )
    }
}
export default EmployeeForm;