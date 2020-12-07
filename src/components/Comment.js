import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, InputGroup, Button, FormControl, Form } from 'react-bootstrap'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import '../comment.css'
import { addCommentData,voteCommentData ,deleteCommentData } from '../actions/comment'



function Comment({author,parentId, comments,commentIds,dispatch }) {

    const [body,setBody]=useState('')

    const handleChange=(e)=>{
        e.persist()
        setBody(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addCommentData(body,author,parentId))
        console.log('final value of body in submit',body)
        setBody('')
    }

    const handleUpVote=(index,commentId)=>{
        //commentId here is the comment unique id 
        dispatch(voteCommentData(index,{option:'upVote'},commentId))
    }
    const handleDownVote=(index,commentId)=>{
        //commentId here is the comment unique id 
        dispatch(voteCommentData(index,{option:'downVote'},commentId))
    }

    const handleDelete=(index,commentId)=>{
        dispatch(deleteCommentData(index,commentId))
        console.log(commentId,index)
    }

    return (
        <Card>
            <Card.Title>Comments</Card.Title>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Add your comment"
                        aria-label="Add your comment"
                        aria-describedby="basic-addon2"
                        value={body}
                        onChange={handleChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type='submit'>Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            {comments?commentIds.map((commentId) => {
                //commentId here is the index
               if(comments[commentId].deleted!==true){return (
                    <Card.Body key={comments[commentId].id}>
                        <Card.Subtitle>
                            Comment By {comments[commentId].author}
                            <span>
                                <button><AiFillEdit /></button>
                            </span>
                            <span>
                                <button onClick={()=>handleDelete(commentId,comments[commentId].id)}><MdDeleteForever /></button>
                            </span>
                        </Card.Subtitle>
                        <div className='comment__display'>
                            <div>
                                <a>
                                    <BiUpvote 
                                    style={{ color: 'green', marginBottom: -10 }}
                                    onClick={()=>{handleUpVote(commentId,comments[commentId].id)}} 
                                     />
                                </a>
                                <div>{comments[commentId].voteScore}
                                    <span style={{ marginLeft: 5, fontSize: 15 }}>Votes</span>
                                </div>
                                <a>
                                    <BiDownvote 
                                    style={{ color: 'red', marginTop: -15 }}
                                    onClick={()=>{handleDownVote(commentId,comments[commentId].id)}}
                                    />
                                </a>
                            </div>
                            <div className='comment__text'>
                                <p>
                                    {comments[commentId].body}
                                </p>
                            </div>
                        </div>
                    </Card.Body>
                )
               }else{return null}
            }):<></>
            }
        </Card>
    )
}


function mapStateToProps({ comments },{parentId,author}) {
    const commentIds=Object.keys(comments)
    console.log('comments in comment',comments)
    return {
        author,
        parentId,
        commentIds,
        comments
    }
}

export default connect(mapStateToProps)(Comment)