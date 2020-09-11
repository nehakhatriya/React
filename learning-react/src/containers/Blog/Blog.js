import React, { Component } from 'react';
import Posts from './Posts/Posts'
import './Blog.css';
import {Route, NavLink, Switch} from 'react-router-dom'
import NewPost from './NewPost/NewPost'


class Blog extends Component {

    state={ posts:[],
        error:false,
      selectedId:null}
   

    render () {       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact activeClassName="My-active" 
                            activeStyle={{textDecoration:"underline", color:"orange"}} to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash:"#submit",
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>
               {/* <Route path={"/"}  exact render={()=><Posts/>}/> */}
               <Switch>
               <Route path={"/new-post"}  exact component={NewPost}/>
               <Route path={"/"}  component={Posts}/>
               </Switch>
            </div>
        );
    }
}

export default Blog;