import React from 'react'
function EmployeeTableContent(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
            <td><button type="button" className="btn btn-primary" onClick={props.click}>Delete</button></td>
        </tr>
    )
}

export default EmployeeTableContent;