import { Button, Col, Dropdown, Row } from "react-bootstrap";
import React, { useContext, useState } from "react"
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Context } from "../..";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

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
            <Dropdown className="mt-5">
               <Dropdown.Toggle>Choose a types</Dropdown.Toggle>

               <Dropdown.Menu>
                {device.types.map(type => 
                    <Dropdown.Item key={type.id}> {type.name}  </Dropdown.Item>
                  
                    )}
               </Dropdown.Menu>
               </Dropdown>
            </Form>

            <Form>
            <Dropdown className="mt-5">
               <Dropdown.Toggle>Choose a brand</Dropdown.Toggle>

               <Dropdown.Menu>
                {device.brands.map(brand => 
                    <Dropdown.Item key={brand.id}> {brand.name}  </Dropdown.Item>
                  
                    )}
               </Dropdown.Menu>
               </Dropdown>
               <Form.Control className="mt-5" placeholder="Enter device name"/>
               <Form.Control className="mt-5" placeholder="Enter device price" type="number"/>
               <Form.Control className="mt-5"  type="file"/>
               <hr />
               <Button variant={"outline-dark"} onClick={addInfo}>Add new property</Button>
               { info.map(i => 
                    <Row key={i.number}>
                        <Col md={4}>
                            <Form.Control placeholder="Enter  name" /> 
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder="Enter  description" /> 
                        </Col>
                        <Col md={4}>
                            <Button onClick={() => removeInfo(i.number)}>Delete Column</Button> 
                        </Col>
                    </Row>
                    )
               }
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger"  onClick={onHide}>Close</Button>
            <Button variant="outline-succes"  onClick={show}>Open</Button>

        </Modal.Footer>
    </Modal>
    )
}

export default CreateDevice;