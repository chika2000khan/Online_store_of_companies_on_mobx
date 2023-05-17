import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import {Spinner} from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
    }).finally(() => setLoading(false))
}, [])

if (loading) {
  return <Spinner animation={"grow"}/>
}

  return (
 
    <BrowserRouter>
     <div className='App'>
      <NavBar />
           <div className='pagessd'>
           <AppRouter />
           </div>
      <Footer />
      </div>
    </BrowserRouter>
    
  );
})

export default App;
