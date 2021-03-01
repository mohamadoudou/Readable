import React, { useEffect, useState } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Badge, Card } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { deletePostData, votePostData } from '../actions/post'
import PostEditModal from './PostEditModal'
import Comment from './Comment'
import NotFound from './NotFound'
import { receiveCommentsData } from '../actions/comment'
import { postDetailData } from '../actions/postDetail'


function PostDetail({ post, dispatch, index }) {

    const [modalShow, setModalShow] = useState(false)
    const { postId } = useParams()

    useEffect(() => {
        dispatch(postDetailData(postId))
        if (post) { dispatch(receiveCommentsData(postId)) }
    })

    const handleDelete = () => {
        dispatch(deletePostData(post.id, index))
    }

    const handleUpVote = () => {
        dispatch(votePostData(index, { option: 'upVote' }, post))
    }
    const handleDownVote = () => {
        dispatch(votePostData(index, { option: 'downVote' }, post))
    }


    if (post && post.id && post.deleted !== true) {
        return (
            <div className='container'>
                <Card className='postCommentContainer'>
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
                        {post ? post.body : null}
                        <div style={{ marginTop: 10 }}>
                            <span className='voteHover'>
                                <BiUpvote style={{ color: 'green', marginBottom: -10, fontSize: 23 }} onClick={handleUpVote}></BiUpvote>
                            </span>
                            <div>{post ? post.voteScore : null}
                                <span style={{ marginLeft: 5, fontSize: 15 }}>Votes</span>
                            </div>
                            <span className='voteHover'>
                                <BiDownvote style={{ color: 'red', marginTop: -15, fontSize: 23 }} onClick={handleDownVote}></BiDownvote>
                            </span>
                        </div>
                        <footer className="blockquote-footer" style={{ marginTop: 5 }} >
                            {post ? null : null}
                            <p>{post ? post.commentCount : null} Comment</p>
                        </footer>
                    </Card.Body>
                    <Comment
                        author={post ? post.author : null}
                        parentId={post ? post.id : null}
                    />
                </Card>


                <PostEditModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    post={post ? post : null}
                    index={index}
                />
            </div>
        )
    } else {
        return <NotFound />
    }
}


function mapStateToProps({ postDetail, posts }, props) {
    return {
        post: postDetail,
        index: 0
    }
}

export default withRouter(connect(mapStateToProps)(PostDetail))