import React from 'react'
import './Navbar.css'
import { MobileSheet } from './MobileSheet'
import userProfilePlaceholder from "../../assets/user-profile-placeholder.png"

import {
  Home,
  User,
  FolderGit2,
  NotebookPen,
  FileText,
  Mail,
  X,
} from "lucide-react";

export const socialMediaLinks =
  [
    {name: "Github", url: "https://github.com/vedteli"},
    {name: "Linkedin", url: "https://www.linkedin.com/in/vedteli"},
    {name: "Email", url: "ssawdawkar@gmail.com"}
  ]

export const icons = {
  Home: <Home size={20} />,
  About: <User size={20} />,
  Projects: <FolderGit2 size={20} />,
  Blogs: <NotebookPen size={20} />,
  Resume: <FileText size={20} />,
  Contact: <Mail size={20} />,
};

export const navoptions = [
  {
    "name":'Home',
    "Url":"./Home"
  },
  {
    "name":'About',
    "Url":"./About"
  },
  {
    "name":'Projects',
    "Url":"./Projects"
  },
  {
    "name":'Blogs',
    "Url":"./Blogs"
  },
  {
    "name":'Resume',
    "Url":"./Resume"
  },
  {
    "name":'Contact',
    "Url":"./Contact"
  },
]

const NavBar = () => {
  return (
    <div className='navbar'>
    
      <div className='profile-picture'>
        <img src={userProfilePlaceholder} alt="" srcSet=""/>
      </div>

      <div className="mobile-navbar">
        <MobileSheet />
      </div>
      
      <ul className='navoptions'>
        {
        navoptions.map((option, index) => (
          <li key={index}>
            <a href={option.Url} className='nav-link'>{option.name}</a>
          </li>
          ))}
      </ul>
      
    </div>
  )
}

export default NavBar