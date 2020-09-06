import React from 'react'
//first way
const WithClass = props => (
    <div className={props.class}>
        {props.children}
    </div>
)
//second way
//const withClass=(WrappedComponent,className)=>{
// return props => (
//     <div className={className}>
//         <WrappedComponent {...props}/>
//     </div>
// ) 
// }
export default WithClass;