import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import {connect} from 'react-redux'
import { addPostData, editPostData } from '../actions/post'



function PostEditModal(props) {
    const {post,index,dispatch}=props
    const [values, setValues] = useState({
        title: post?post.title:'',
        body: post?post.body:'',
        author: post?post.author:'',
        category: post?post.category:'react',
    })

    const handleInputChange = (e) => {
        e.persist()
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const {title,body,author,category}=values
        if(post){
            console.log('post to be updated',{...post,body})
            dispatch(editPostData({...post,body},index))
        }
        else{
            console.log('new post to be add')
            dispatch(addPostData(title,body,author,category))
        }
  
        setValues({
            title: '',
            body: '',
            author: '',
            category: 'react',
        })
        props.onHide()
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
                    {post&&post.id ? 'Edit Post' : 'Add Post '}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='exampleForm.ControlInput1'>
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control
                            type='text'
                            name='title'
                            value={values.title}
                            placeholder='Title'
                            onChange={handleInputChange}
                            required
                            disabled={post}
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
                            required
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
                            required
                            disabled={post}
                        />
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>Select category</Form.Label>
                        <Form.Control
                            name='category'
                            value={values.category}
                            as='select'
                            onChange={handleInputChange}
                            required
                            disabled={post}
                            >
                            <option>react</option>
                            <option>redux</option>
                            <option>udacity</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Save
                    </Button>
                    <Button onClick={props.onHide} variant='secondary'>Close</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
    )
}

export default connect()(PostEditModal)