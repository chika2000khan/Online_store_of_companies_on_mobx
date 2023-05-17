import { Button } from "react-bootstrap";
import React from "react"
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const CreateType = ({show, onHide}) => {


    return (
        <Modal
        show={show}
         onHide={onHide}
     
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить тип
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control 
                placeholder={'Enter type name'}
                />

            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
            <Button variant="outline-succes"  onClick={show}>Open</Button>

        </Modal.Footer>
    </Modal>
    )
}

export default CreateType;