import React from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'

function Post({post}){
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Header>Post</Card.Header>
            <Card.Body> 
                <Card.Title>Post</Card.Title>
                {post?post.title:null}
            </Card.Body>
        </Card>
    )
}


function mapStateToProps({posts}){
    const postId="8xf0y6ziyjabvozdd253nd"
    const post=posts?posts[0]:null
    console.log('Post in post ',post)
    return{
        post
    }
}

export default connect(mapStateToProps)(Post)