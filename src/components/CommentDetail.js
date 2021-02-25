import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, InputGroup, Button, FormControl, Form } from 'react-bootstrap'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import '../comment.css'
import { voteCommentData, deleteCommentData, editCommentData } from '../actions/comment'


function CommentDetail({ index, comment, dispatch }) {

    const [toggleEditComment, setToggleEditComment] = useState(false)
    const [body, setBody] = useState(comment.body)


    const handleChange = (e) => {
        e.persist()
        setBody(e.target.value)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        dispatch(editCommentData(index, { ...comment, body }, comment.id))
        setToggleEditComment(false)
    }

    const handleUpVote = (index, commentId) => {
        dispatch(voteCommentData(index, { option: 'upVote' }, commentId))
    }

    const handleDownVote = (index, commentId) => {
        dispatch(voteCommentData(index, { option: 'downVote' }, commentId))
    }

    const handleDelete = (index, commentId) => {
        dispatch(deleteCommentData(index, commentId))
    }

    return (
        <Card.Body key={comment.id}>
            <Card.Subtitle>
                Comment By {comment.author}
                <span>
                    <button onClick={() => setToggleEditComment(true)} className='button'><AiFillEdit /></button>
                </span>
                <span>
                    <button onClick={() => handleDelete(index, comment.id)} className='button'><MdDeleteForever /></button>
                </span>
            </Card.Subtitle>
            <div className='comment__display'>
                <div>
                    <span className='voteHover'>
                        <BiUpvote
                            style={{ color: 'green', marginBottom: -10 }}
                            onClick={() => { handleUpVote(index, comment.id) }}
                        />
                    </span>
                    <div>{comment.voteScore}
                        <span style={{ marginLeft: 5, fontSize: 15 }}>Votes</span>
                    </div>
                    <span className='voteHover'>
                        <BiDownvote
                            style={{ color: 'red', marginTop: -15 }}
                            onClick={() => { handleDownVote(index, comment.id) }}
                        />
                    </span>
                </div>
                <div className={toggleEditComment ? '' : 'comment__text'}>
                    <p>
                        {toggleEditComment ? (
                            <Form onSubmit={handleEditSubmit} className='commentEditForm'>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Edit your comment"
                                        aria-label="Edit your comment"
                                        aria-describedby="basic-addon2"
                                        value={body}
                                        onChange={handleChange}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" type='submit'>Edit</Button>
                                        <Button variant="outline-secondary" onClick={() => setToggleEditComment(false)}>cancel</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                        ) : comment.body}
                    </p>
                </div>
            </div>
        </Card.Body>
    )

}

export default connect()(CommentDetail)