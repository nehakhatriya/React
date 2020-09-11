import React, { Component } from 'react';
import './FullPost.css';
import axios from 'axios'

class FullPost extends Component {
   state={loadedPost:null}

    componentDidMount(){
        console.log(this.props)
        this.loadcontent()
  
    }

    componentDidUpdate(){
        this.loadcontent()
    }

    loadcontent=()=>{
        if(this.props.match.params.id){
            if(!this.state.loadedPost||(this.state.loadedPost&&this.state.loadedPost.id!== +this.props.match.params.id))
            axios.get("/posts/"+this.props.match.params.id)
            .then(response=>{
                let post=response.data;
                this.setState({loadedPost:post})
            })
        }
    }
    deletePostHandler=()=>{
        axios.delete("/posts/"+this.props.match.params.id)
        .then(res=>console.log(res))
    }
    render () {
        var post = <p>Please select a Post!</p>;
        if(this.props.match.params.id){
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