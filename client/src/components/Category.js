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
    },[category,dispatch])

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


function mapStateToProps({posts},{sort}) {
    let postIds=[]
    if(sort==='vote score'){
        postIds=(Object.keys(posts)
        .sort((a,b)=>posts[b].voteScore-posts[a].voteScore))
    }else{
       postIds=Object.keys(posts)
      .sort((a,b)=>posts[b].timestamp - posts[a].timestamp)
    }
    return {
        postIds,
    }
}


export default connect(mapStateToProps)(Category)