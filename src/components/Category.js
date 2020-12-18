import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import '../App.css'
import { categoryPostsData, receivePostData } from '../actions/post'

function Category({dispatch,category,postIds}){
  
    useEffect(()=>{
        if(category){
        dispatch(categoryPostsData(category))
        }else{
            dispatch(receivePostData())
        }
    },[category])

    return (
        <ul className='liDecoration'>
        {postIds.map((postId) => {
            return (
                <li key={postId} >   
                    <Post postId={postId} />   
                </li>
            )
        })}
    </ul>
    )
}


function mapStateToProps({posts}) {
    const postIds=Object.keys(posts)
      .sort((a,b)=>posts[b].timestamp - posts[a].timestamp)
    console.log('all posts inside category', posts)
    return {
        postIds,
    }
}


export default connect(mapStateToProps)(Category)