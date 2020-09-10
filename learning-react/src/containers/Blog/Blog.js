import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {

    state={ posts:[],
        error:false,
      selectedId:null}
    componentDidMount(){
   axios.get("/posts")
   .then((response)=>{
    const postss=response.data.slice(0,4)
    const updatedPost=postss.map(el=> {
        return {...el, author:"joey"}}
    )
    this.setState({posts:updatedPost})
    })
    .catch(e=> this.setState({error:true}))
}

selectPostHandler=(id)=>{
    this.setState({selectedId:id})
}

    render () {
        let post=<p style={{textAlign:"center"}}>Something went wrong!!</p>
        if(!this.state.error){
            post=this.state.posts.map((element)=>{
                return <Post title={element.title} author={element.author} click={()=>this.selectPostHandler(element.id)}/>
            })
        }
       
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;