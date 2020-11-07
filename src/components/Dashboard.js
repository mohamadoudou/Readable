import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import '../App.css' 

function Dashboard({postIds}){
    return(

        <div className='container'>
            <div className='filterContainer'>
                <p>Category</p>
                <p>Sort by</p>
            </div>
        {/* postIds.map((postId)=>{
            return(
            <li key={postId}>
            <Post posts={postId}/>
            </li>
            )
        }) */}
        <Post />
        </div>
    )
}


function mapStateToProps({posts}){
    const postIds=Object.keys(posts)
    return{
        postIds
    }
}

export default connect(mapStateToProps)(Dashboard)