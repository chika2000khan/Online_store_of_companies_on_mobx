import React, { useContext, useState } from 'react';
import classes from './Auth.module.css'
import { Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }


    return (
        <div className={classes.Auth}>
            <h2>{isLogin ? 'Autorisation' : 'Registration'}</h2>

             <Form className='d-flex flex-column'>
               
                <Form.Control className="mt-5" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />

                <Form.Control className="mt-5" placeholder='Enter your password' value={password} type='password' onChange={e => setPassword(e.target.value)}/>
                 
             </Form>
             
            
             <Row>
                <div>
                    {isLogin ?
                <p>Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink></p> 
                :
                <p>Do you already have an account?? <NavLink to={LOGIN_ROUTE}>Login</NavLink></p> 
                    }
                </div>
               
             <button onClick={click}>
             {isLogin ? 'Sign in' : 'Registration' }
             </button>
             
 
           
             </Row>
            

        </div>
    )
})

export default Auth;