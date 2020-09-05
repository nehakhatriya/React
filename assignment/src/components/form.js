import React, { useState } from 'react'
function EmployeeForm () {

    let [name1,changename]=useState( {name:' '});
    let [job1,changejob]=useState( {job:''});
    const changenamehandler=(event)=>{
        console.log('inside name')
       let newname=event.target.value
    changename( {name:newname} )
    console.log(name1.name)
    }
    const changejobhandler=(event)=>{
        console.log('inside job')
   changejob({ job:event.target.value })
   console.log(job1.job)
    }
    const addEmp=(event)=>{
        console.log("inside add emp")
    }
        return (
            
                 <div className="container">
                     <h4>Add New Employee</h4>
                <form>
                    <div class="form-group">
                        <label for="eempname" ><b>Name:</b></label>
                        <input type="test"  value={name1.name} onChange={changenamehandler} class="form-control" id="empname" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="empjob"><b>Job:</b></label>
                        <input type="text" value={job1.job} onChange={changejobhandler} class="form-control" id="empjob" placeholder="job" />
                    </div>
                    <button type="button" onClick={addEmp} class="btn btn-primary" > Add </button>
                </form>
                </div>
            )
    }

export default EmployeeForm;