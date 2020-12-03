import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Badge, Card } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import PostEditModal from './PostEditModal'
import '../App.css'
import { deletePostData } from '../actions/post'

function Post({ post,dispatch,index }) {
    const [modalShow, setModalShow] = useState(false)
    const [isAddPost,setIsAddPost]=useState(true)
    // const date=post?new Date( post.timestamp).toISOString():null
    // const postDate=post?date:null
    // console.log('date problem in post',typeof postDate)
    const handleDelete=()=>{
        dispatch(deletePostData(post.id,index))
        console.log('handle delete called',post.id)
    }
    return (
        <>
            {post&&post.deleted!==true?(<Card className='postContainer' style={{}}>
                <Card.Body>
                    <Card.Title> {post ? post.title : null}
                        <button onClick={() => setModalShow(true)}>
                            <Badge variant="success" style={{ margin: 5 }}>
                                Edit <AiFillEdit></AiFillEdit>
                            </Badge>
                        </button>
                        <button onClick={handleDelete}>
                            <Badge variant="danger" style={{ margin: 5 }}>
                                Delete <MdDeleteForever></MdDeleteForever>
                            </Badge>
                        </button>
                    </Card.Title>
                    <Card.Subtitle>post by {post ? post.author : null}</Card.Subtitle>
                    <div>
                        <Badge variant='primary'>{post?post.category:null}</Badge>
                    </div>
                    {post ? post.body : null}
                    <div style={{ marginTop: 10 }}>
                        <BiUpvote style={{ color: 'green', marginRight: 1 }}></BiUpvote>
                        <BiDownvote style={{ color: 'red' }} ></BiDownvote>
                        <span style={{ marginLeft: 5, fontSize: 15 }}>{post ? post.voteScore : null} Votes</span>
                    </div>
                    <footer className="blockquote-footer" style={{ marginTop: 5 }} >
                        {post ? null : null}
                        <p>{post ? post.commentCount : null} Comment</p>
                    </footer>
                </Card.Body>
            </Card>):null
            }
            <PostEditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                postId={post ? post.id : null}
                isAddPost={isAddPost}
            />

        </>
    )
}


function mapStateToProps({ posts }, { postId }) {
    const post = posts ? posts[postId] : null
    console.log('Post in post ', post)
    return {
        index:postId,
        post
    }
}

export default connect(mapStateToProps)(Post)