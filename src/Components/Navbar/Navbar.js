import React, { useState } from 'react'
import style from './Navbar.module.css'
import HILogout from 'react-icons/hi'
import AIUser from 'react-icons/ai'

const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false)

  const Logout = () => {
    localStorage.removeItem("")
  }

  return (
    <nav>
        <div className="navbar">
            <span className="navbar-title">Cineminfo</span>
            <div className="nav-items">
              <p><AIUser.AiOutlineUser />{localStorage.getItem("name")}</p>
              <button ><HILogout.HiOutlineLogout/></button>              
            </div>
            <div className="nav-toggle">
              <div className="hamburger"></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar