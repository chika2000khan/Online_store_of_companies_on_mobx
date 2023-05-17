import React from 'react';
import classes from './NavBar.module.css';
import { useContext } from 'react';
import { Context } from '..';
import { useHistory } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';


const NavBar = () => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.isAuth(false)
    }
 
    return (
        <div className={classes.headderbase}>
        <div className={classes.headerbar}>
        <button  className={classes.butlogo} href='/Shop'></button>
            {user.isAuth ?
            <ul align='right'>
            <a href='/Admin'>Admin</a>
            <a href='/Auth'>Auth</a>
            <a href='' onClick={() => logOut()}>Exit</a>
            <button className={classes.but1} href='/Admin'></button>
            <button  className={classes.but2}  href='/login'></button>
            </ul>
            :
            <ul align='left'>
            <a href='/Shop'>Shop</a>
            <a href='/login'>Auth</a>
         
            </ul>
            }

        </div>

        <div className={classes.headder}>
         
        </div>
        </div>
    )
}

export default NavBar;