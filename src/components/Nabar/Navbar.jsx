import React from 'react'
import './Navbar.css'
import { MobileSheet } from './MobileSheet'

const navoptions = [
  'Home',
  'About',
  'Projects',
  'Blog',
  'Resume',
  'Contact'
]

const NavBar = () => {
  return (
    <div className='navbar'>
    
      <div className='profile-picture'>
        <img src="src\assets\user-profile-placeholder.png" alt="" srcSet=""/>
      </div>

      <div className="mobile-navbar">
        <MobileSheet />
      </div>
      
      <ul className='navoptions'>
        {
        navoptions.map((option, index) => (
          <li key={index}>
            <a href="#" className='nav-link'>{option}</a>
          </li>
          ))}
      </ul>
      
    </div>
  )
}

export default NavBar