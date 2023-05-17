import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import classes from './DeviceItem.module.css'
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';


const DeviceItem = ({device}) => {
    const history = useHistory()
    
    return (
        <Col md={3} className='mt-5'>
            <Card className={classes.dvitemm} style={{width: 150, cursor: 'pointer'}} border={"light"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Image width={300} height={300} src={device.img}/>
                <div className="d-flex mt-3">
                    <div><h4 align='left'>Name:</h4> <h2 className={classes.manetext} align='left'>{device.name}</h2></div>
                       
                </div>
                <div className='d-flex  mt-2'>
                        <div>Rating: {device.rating}</div>
                    </div>
            </Card>
        </Col>
    )
}

export default DeviceItem;