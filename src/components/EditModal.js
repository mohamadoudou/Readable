import React from 'react'
import {Button, Modal} from 'react-bootstrap'



function EditModal(props){

    return(
        <Modal
        {...props}
        size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    helle Edit Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <textarea></textarea>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal