import React, { useContext, useEffect } from 'react';
import classes from './Shop.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchTypes } from '../http/deviceAPI';



const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])





    return (
        <div className={classes.Shop}>
        <div class="container-fluid">
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>    
            </div>
            <hr/>
            <ul className={classes.pagg}>
                <l1 className={classes.paggli} href='/shop'>1</l1>
                <l1 className={classes.paggli} href='/shop'>2</l1>
                <l1 className={classes.paggli} href='/shop'>3</l1>
                <l1 className={classes.paggli} href='/shop'>4</l1>
                <l1 className={classes.paggli} href='/shop'>5</l1>
                <l1 className={classes.paggli} href='/shop'>6</l1>
                <l1 className={classes.pagglinext} href='/shop'>Next</l1>

            </ul>
            </div>
    )
})

export default Shop;