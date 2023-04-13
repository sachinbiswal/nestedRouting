
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About'
import Experience from './components/Experience'
import Html from '../src/components/ExpSection/Html'
import Css from '../src/components/ExpSection/Css'
import Js from '../src/components/ExpSection/Js'
import React from './components/ExpSection/React';
import Login from './components/Login';
import Profile from './components/Profile';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import { mycontext } from './components/Context';
import Protect from './components/Protect';
import Nopage from './components/Nopage';


function App() {
  const {loggedIn} = useContext(mycontext);
  return (
    <>
    {
      loggedIn ? <Navbar/> :null
    }
   
    <Routes>
      
      <Route path='/' element={loggedIn ? <Home/> : <Login/>}/>
      <Route path='/home' element={<Protect> <Home/></Protect> }/>
      <Route path='/Contact' element={ <Protect> <Contact/></Protect> }/>
      <Route path='/About' element={<Protect> <About/></Protect> }/>
      <Route path='/Experience' element={<Protect> <Experience/></Protect> }> 
      <Route path='' element={<Navigate to='html'/>}/>
      <Route path='html' element={<Protect> <Html/></Protect> }/>
      <Route path='css' element={<Protect> <Css/></Protect> }/>
      <Route path='js' element={<Protect> <Js/></Protect> }/>
      <Route path='react' element={<Protect> <React/></Protect> }/>
      </Route>
      <Route path='/Profile' element={<Protect> <Profile/></Protect> }/>
      <Route path='*' element={<Nopage/>}/>
    </Routes>
    </>
  );
}

export default App;
