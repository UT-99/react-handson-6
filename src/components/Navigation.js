import React from 'react'
import { Link } from 'react-router-dom'
import '../newStyles.css'

const Navigation = () => {
  return (
    <div className="navbar">
        <li><Link to="/Home"  className='textDecoration'>Home</Link></li>
        <li><Link to="/Students" className='textDecoration' >Students</Link></li>
        <li><Link to="/Contact"  className='textDecoration'>Contact Us</Link></li>
 
    </div>
  )
}

export default Navigation