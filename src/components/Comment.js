import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, InputGroup, Button, FormControl, Form } from 'react-bootstrap'
import '../comment.css'
import { addCommentData,voteCommentData ,deleteCommentData } from '../actions/comment'
import CommentDetail from './CommentDetail'


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
    return (
        <Card className='commentContainer'>
            <Card.Title style={{margin:6}}> Comments</Card.Title>
            <Form onSubmit={handleSubmit} className='commentAddForm'>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Add your comment"
                        aria-label="Add your comment"
                        aria-describedby="basic-addon2"
                        value={body}
                        onChange={handleChange}
                    />
                    <InputGroup.Append>
                        <Button 
                        variant="outline-secondary" 
                        type='submit'
                        disabled={body===''}
                        >Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            {comments?commentIds.map((commentId) => {
                //commentId here is the index
               if(comments[commentId].deleted!==true){
                  return( <CommentDetail 
                   key={commentId}
                   index={commentId}
                   comment={comments[commentId]}/>
                  )
               }
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