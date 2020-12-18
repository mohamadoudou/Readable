import React,{useEffect, useState} from 'react'
import { useParams,withRouter } from 'react-router-dom'
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
import {postDetailData} from '../actions/postDetail'


function PostDetail({ post,dispatch,index }) {
  
    const [modalShow, setModalShow] = useState(false)
    const [isEditPost, setIsEditPost] = useState(true)
    const [option,setOption]=useState('upVote')
    const {postId} =useParams()

    useEffect(()=>{
        dispatch(postDetailData(postId))
        if(post){dispatch(receiveCommentsData(postId))}
    },[])

    const handleDelete = () => {
        dispatch(deletePostData(post.id, index))
        console.log('handle delete called', post.id)
    }
    
    const handleUpVote=()=>{
        console.log('upVote clicked')
        setOption('upVote')
        dispatch(votePostData(index,{option:'upVote'},post))
    }
    const handleDownVote=()=>{
        console.log('downVote clicked')
        dispatch(votePostData(index,{option:'downVote'},post))
    }


    if (post && post.id && post.deleted !== true) {
        return (
        <>  {console.log('post id in post detail from use params',postId)}
            <Card className='postContainer' style={{}}>
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
                        <Badge variant='primary'>{post ? post.category : null}</Badge>
                    </div>
                    {post ? post.body : null}
                    <div style={{ marginTop: 10 }}>
                        <a>
                            <BiUpvote style={{ color: 'green', marginBottom: -10 }} onClick={handleUpVote}></BiUpvote>
                        </a>
                        <div>{post ? post.voteScore : null}
                            <span style={{ marginLeft: 5, fontSize: 15 }}>Votes</span>
                        </div>
                        <a>
                            <BiDownvote style={{ color: 'red', marginTop: -15 }} onClick={handleDownVote}></BiDownvote>
                        </a>
                    </div>
                    <footer className="blockquote-footer" style={{ marginTop: 5 }} >
                        {post ? null : null}
                        <p>{post ? post.commentCount : null} Comment</p>
                    </footer>
                </Card.Body>
                <Comment 
                author={post?post.author:null}
                parentId={post?post.id:null}
                />
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
    }else{
    return <NotFound/>
    }
}


function mapStateToProps({ postDetail,posts },props) {
    console.log('post in post Detail',postDetail)
    return {
        post: postDetail,
        index:0
    }
}

export default withRouter(connect(mapStateToProps)(PostDetail))