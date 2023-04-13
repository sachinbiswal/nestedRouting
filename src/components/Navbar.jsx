
import React, { useContext } from 'react';
import { mycontext } from './Context';
import "./navbar.css"
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const {setLoggedIn} = useContext(mycontext)
  const navigate=useNavigate()
  return (
    <div className='main'>
         <div className='nav'>
            <div className="content">
                <ul>
                  <Link to='/Home'><li>Home</li></Link>  
                  <Link to='/Contact'><li>Contact</li></Link>    
                  <Link to='/About'><li>About</li></Link>  
                  <Link to='/Experience'><li>Experience</li></Link>  
                  <button onClick={()=>{
            setLoggedIn(false)
            navigate('/')
        }} >
          Logout

        </button>
                </ul>
            </div>
         </div>
    </div>
  )
}

export default Navbar
