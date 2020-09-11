import React, { Component } from 'react';
import axios from 'axios'
import './NewPost.css';
import { Redirect } from 'react-router';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted:false
    }

    addNewHandler=()=>{
        const post={
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
    axios.post("https://jsonplaceholder.typicode.com/posts",post)
    .then(res=> {console.log(res)
        //this.props.history.replace("/")
        this.setState({submitted:true})
    } )
    }
    render () {
        var redirect=null;
        if(this.state.submitted)
        redirect=<Redirect to="/"/>
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addNewHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;