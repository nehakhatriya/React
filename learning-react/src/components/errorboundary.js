import React, { Component } from 'react'

class ErrorBoundary extends Component{
    state={hasError:false}
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    render(){
        if(this.state.hasError){
           return  <h1>some error occured</h1>
        }
       return this.props.children
    }
}
export default ErrorBoundary