import React, { useState } from 'react'
function EmployeeForm (props) {

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
   console.log(name1.name)
   console.log(job1.job)
    }
    const addnewEmp=()=>{
        props.addEmp(name1.name,job1.job)
        name1.name=''
        job1.job=''
    }
        return (
                 
                 <div className="container">
                     <h4>Add New Employee</h4>
                <form>
                    <div class="form-group">
                        <label for="eempname" ><b>Name:</b></label>
                        <input type="test" id="name" value={name1.name} onChange={changenamehandler} class="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="empjob"><b>Job:</b></label>
                        <input type="text"  id="job" value={job1.job} onChange={changejobhandler} class="form-control"  placeholder="job" />
                    </div>
                    <button type="button" onClick={addnewEmp} class="btn btn-primary" > Add </button>
                </form>
                </div>
            )
    }

export default EmployeeForm;