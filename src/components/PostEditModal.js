import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'



function PostEditModal(props) {
    const [values,setValues]=useState({
        title:'',
        body:'',
        author:'',
        category:'',
    })

    const handleInputChange=(e)=>{
        e.persist()
        const {name,value}=e.target
        setValues({...values,[name]:value})
    }

    return (
        <Modal
            {...props}
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            {JSON.stringify(values)}
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Edit Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='exampleForm.ControlInput1'>
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control 
                        type='text'
                        name='title' 
                        value={values.title}
                        placeholder='Title'
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlTextarea1'>
                        <Form.Label>post body</Form.Label>
                        <Form.Control 
                        name='body'
                        value={values.body}
                        as='textarea'
                        rows={3} 
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlInput1'>
                        <Form.Label>Post Author</Form.Label>
                        <Form.Control 
                        type='text' 
                        name='author' 
                        value={values.author}
                        placeholder='post By'
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>Select category</Form.Label>
                        <Form.Control 
                        name='category' 
                        value={values.category}
                        as='select'
                        onChange={handleInputChange}>
                            <option>react</option>
                            <option>redux</option>
                            <option>udacity</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

// id: post.id,
// timestamp: post.timestamp,
// title: post.title,
// body: post.body,
// author: post.author,
// category: post.category,
// voteScore: 1,
// deleted: false,
// commentCount: 0

export default PostEditModal