import React, { useEffect, useState } from 'react';
import classes from './DevicePage.module.css';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';


const DevicePage = () => {
    const device = {id: 1, name: "Iphone 10 X", price: '800$', rating: 100, img: 'https://imgs.casasbahia.com.br/55054430/1g.jpg'}
    const description = {id: 1, title: "Iphone 10 X", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}
    



    return (
        <div className={classes.dvp}>
        <div class="container-fluid">
            <Row>
            <Col md={4}>
                <Image width={600} height={600} src={device.img}/>
            </Col>


            <Col md={4}>
                <Row>
                    <h1 className='mt-5 '>{device.name}</h1>
                    <div>
                        <h4 className='mt-3'>Rating: {device.rating}</h4>
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card className={classes.basktpg} style={{height: 600}}>

                    <h3>{device.price}</h3>
                    <button className={classes.basketbutton} align='center'>Add to Basket</button>
                </Card>
              
            </Col>
            </Row>
            <Row className="d-flex flex-column m-5">

                <Row className="mt-3" key={description.id} style={{fontSize: 30}}>
                    <p className={classes.description}>{description.title}: {description.description}</p>
                </Row>
                   
            </Row>
        </div>
        </div>
    )
}

export default DevicePage;