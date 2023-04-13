import React from 'react'
import "./exp.css"
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
const Experience = () => {
  return (
    <div className='container'>
        <div className="left">
          <Link to="html">HTML</Link>
          <Link to="css">CSS</Link>
          <Link to="js">Javascript</Link>
          <Link to="react">React</Link>
        </div>
        <div className="right"><Outlet/></div>
    </div>
  )
}

export default Experience
