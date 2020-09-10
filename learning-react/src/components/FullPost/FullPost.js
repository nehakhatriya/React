import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios'

class FullPost extends Component {
   state={loadedPost:null}

    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost||(this.state.loadedPost&&this.state.loadedPost.id!==this.props.id))
            axios.get("/posts/"+this.props.id)
            .then(response=>{
                let post=response.data;
                this.setState({loadedPost:post})
            })
        }
  
    }
    deletePostHandler=()=>{
        axios.delete("/posts/"+this.props.id)
        .then(res=>console.log(res))
    }
    render () {
        var post = <p>Please select a Post!</p>;
        if(this.props.id){
            var post = <p>Loading!</p>;
        }
        if(this.state.loadedPost){
            
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;