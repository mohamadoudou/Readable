import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, InputGroup, Button, FormControl, Form } from 'react-bootstrap'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import '../comment.css'



function Comment({ comments,commentIds }) {

    return (
        <Card>
            <Card.Title>Comments</Card.Title>
            <Form>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Add your comment"
                        aria-label="Add your comment"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type='submit'>Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            {comments?commentIds.map((commentId) => {
                return (
                    <Card.Body key={comments[commentId].id}>
                        <Card.Subtitle>
                            Comment By {comments[commentId].author}
                            <span>
                                <button><AiFillEdit /></button>
                            </span>
                            <span>
                                <button><MdDeleteForever /></button>
                            </span>
                        </Card.Subtitle>
                        <div className='comment__display'>
                            <div>
                                <a>
                                    <BiUpvote style={{ color: 'green', marginBottom: -10 }} ></BiUpvote>
                                </a>
                                <div>{comments[commentId].voteScore}
                                    <span style={{ marginLeft: 5, fontSize: 15 }}>Votes</span>
                                </div>
                                <a>
                                    <BiDownvote style={{ color: 'red', marginTop: -15 }}></BiDownvote>
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
            }):<></>
            }
        </Card>
    )
}


function mapStateToProps({ comments }) {
    const commentIds=Object.keys(comments)
    console.log('comments in comment',comments)
    return {
        commentIds,
        comments
    }
}

export default connect(mapStateToProps)(Comment)