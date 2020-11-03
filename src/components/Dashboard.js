import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

function Dashboard({postIds}){
    return(
        // postIds.map((postId)=>{
        //     return(
        //     <li key={postId}>
        //     <Post posts={postId}/>
        //     </li>
        //     )
        // })
        <Post />
    )
}


function mapStateToProps({posts}){
    const postIds=Object.keys(posts)
    return{
        postIds
    }
}

export default connect(mapStateToProps)(Dashboard)