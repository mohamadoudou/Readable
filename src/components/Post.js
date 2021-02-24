import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Badge, Card } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import PostEditModal from './PostEditModal'
import '../App.css'
import { deletePostData, votePostData } from '../actions/post'

function Post({ post, dispatch, index }) {
    const [modalShow, setModalShow] = useState(false)
    const [isEditPost, setIsEditPost] = useState(true)
    const [option, setOption] = useState('upVote')
    // const date=post?new Date( post.timestamp).toISOString():null
    // const postDate=post?date:null
    // console.log('date problem in post',typeof postDate)
    const handleDelete = () => {
        dispatch(deletePostData(post.id, index))
        console.log('handle delete called', post.id)
    }

    const handleUpVote = () => {
        console.log('upVote clicked')
        setOption('upVote')
        dispatch(votePostData(index, { option: 'upVote' }, post))
    }
    const handleDownVote = () => {
        console.log('downVote clicked')
        dispatch(votePostData(index, { option: 'downVote' }, post))
    }

    if (post && post.deleted !== true) {
        return (
            <>
                <Card className='postContainer' style={{}}>

                    <Card.Body>

                        <Card.Title> {post ? post.title : null}
                            <div>
                                <button onClick={() => setModalShow(true)} className='button'>
                                    <Badge variant="success" style={{ margin: 5 }}>
                                        Edit <AiFillEdit></AiFillEdit>
                                    </Badge>
                                </button>
                                <button onClick={handleDelete} className='button'>
                                    <Badge variant="danger" style={{ margin: 5 }}>
                                        Delete <MdDeleteForever></MdDeleteForever>
                                    </Badge>
                                </button>
                            </div>
                        </Card.Title>

                        <Card.Subtitle>post by {post ? post.author : null}</Card.Subtitle>

                        <div>
                            <Badge variant='primary'>{post ? post.category : null}</Badge>
                        </div>

                        <Link to={`/${post.category}/${post.id}`} className='link'>
                            {post ? post.body : null}
                        </Link>

                        <div style={{ marginTop: 10 }}>
                            <a>
                                <BiUpvote style={{ color: 'green', marginBottom: -10, fontSize:23 }} onClick={handleUpVote}></BiUpvote>
                            </a>
                            <div>{post ? post.voteScore : null}
                                <span style={{ marginLeft: 5, fontSize: 15 }}>Votes</span>
                            </div>
                            <a>
                                <BiDownvote style={{ color: 'red', marginTop: -15, fontSize:23 }} onClick={handleDownVote}></BiDownvote>
                            </a>
                        </div>

                        <footer className="blockquote-footer" style={{ marginTop: 5 }} >
                            {post ? null : null}
                            <Link to={`/${post.category}/${post.id}`} className='link'>
                            <p>{post ? post.commentCount : null} Comments</p>
                            </Link>
                        </footer>   

                    </Card.Body>

                </Card>

                <PostEditModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    post={post ? post : null}
                    isEditPost={isEditPost}
                    index={index}
                />
            </>
        )
    }
    else {
        return null
    }
}


function mapStateToProps({ posts }, { postId }) {
    const post = posts ? posts[postId] : null
    console.log('Post in post ', post)
    return {
        index: postId,
        post
    }
}

export default connect(mapStateToProps)(Post)