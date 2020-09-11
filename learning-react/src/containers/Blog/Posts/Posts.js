import React,{Component, Fragment} from 'react'
import axios from 'axios'
import './Posts.css'
import Post from "../../../components/Post/Post"
import {Route,Link} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

class Posts extends Component{

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
       //this.props.history.push({pathname:"/"+id})
       this.props.history.push("/"+id)
    }
    render(){
        let post=<p style={{textAlign:"center"}}>Something went wrong!!</p>
        if(!this.state.error){
            post=this.state.posts.map((element)=>{
                return (
                //<Link to={"/"+element.id} key={element.id}>
                <Post title={element.title} 
                author={element.author} 
                click={()=>this.selectPostHandler(element.id)}/>
                //</Link>
                )
            })
        }
        return(
            <div>
            <section className="Posts">
            {post}
           </section>
            <Route path={"/:id"}  exact component={FullPost}/>
            </div>
        )
    }
}

export default Posts;