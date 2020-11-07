import React from 'react'
import { connect } from 'react-redux'
import { Badge, Card } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'

function Post({ post }) {
    const date=post?new Date( post.timestamp).toISOString():null
    const postDate=post?date:null
    console.log('date problem in post',typeof postDate)
    return (
        <Card style={{ width: '40rem',height: '15rem', margin: 10 }}>
            <Card.Body>
                <Card.Title> {post ? post.title : null}
                    <Badge variant="success" style={{ margin: 5 }}>Edit <AiFillEdit></AiFillEdit></Badge>
                    <Badge variant="danger" style={{ margin: 5 }}>Delete <MdDeleteForever></MdDeleteForever></Badge>
                </Card.Title>
    <Card.Subtitle>post by {post? post.author:null}</Card.Subtitle>
                <div>
                    <Badge variant='primary'>Redux</Badge>
                </div>
                {post ? post.body : null}
                <div style={{ marginTop: 10 }}>
                    <BiUpvote style={{color:'green',marginRight:1}}></BiUpvote>
                    <BiDownvote style={{color:'red'}} ></BiDownvote>
                     <span style={{marginLeft:5,fontSize:15}}>{post ? post.voteScore : null} Votes</span>
                </div>
                <footer className="blockquote-footer"style={{ marginTop: 5 }} >
                    {post ?postDate: null}
    <p>{post ? post.commentCount : null} Comment</p>
                </footer>
            </Card.Body>
        </Card>
    )
}


function mapStateToProps({ posts }) {
    const postId = "8xf0y6ziyjabvozdd253nd"
    const post = posts ? posts[0] : null
    console.log('Post in post ', post)
    return {
        post
    }
}

export default connect(mapStateToProps)(Post)