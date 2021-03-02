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

    const handleDelete = () => {
        dispatch(deletePostData(post.id, index))
    }

    const handleUpVote = () => {
        dispatch(votePostData(index, { option: 'upVote' }, post))
    }
    const handleDownVote = () => {
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
                            <p className='post_paragraph'>{post ? post.body : null}</p>
                        </Link>

                        <div style={{ marginTop: 10 }}>
                            <span className='voteHover'>
                                <BiUpvote style={{ color: 'green', marginBottom: -10, fontSize: 23 }} onClick={handleUpVote}></BiUpvote>
                            </span>
                            <div>{post ? post.voteScore : null}
                                <span style={{ marginLeft: 5, fontSize: 15 }}>Votes</span>
                            </div>
                            <span className='voteHover'>
                            <BiDownvote style={{ color: 'red', marginTop: -15, fontSize: 23 }}  onClick={handleDownVote}></BiDownvote>
                            </span>
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
    return {
        index: postId,
        post
    }
}

export default connect(mapStateToProps)(Post)