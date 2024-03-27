import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className='head'>
        <a href='http://google.com'><img src="https://i.ibb.co/ZH40FmZ/ar-high-resolution-logo-transparent.png" className='logo' alt="ar-high-resolution-logo-transparent" border="0"/> </a>
        <ul className='nav'>
            <li className='nav-item'><NavLink className="ho" to="/">Home</NavLink></li>
            <li className='nav-item'><NavLink className="ho" to="/about">About</NavLink></li>
            <li className='nav-item'><NavLink className="ho" to="/contact">Contact</NavLink></li>
        </ul>
    </header>
      

  )
}

export default Header
