import React, { useState } from 'react'
import './Navbar.css'
import { HiOutlineLogout } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const[isOpen, setIsOpen] = useState(false)
  const[show, setShow] = useState(false)

  const Logout = () => {
    localStorage.removeItem("daftar")
    navigate('/login')
    window.location.reload()
  }  

  return (
    <nav>
        <div className="navbar">
            <h1 className="navbar-title">Cineminfo</h1>
            <div className={`nav-items ${isOpen && "open"}`}>
              <p><AiOutlineUser /><span>{localStorage.getItem("name")}</span></p>
              <p className="logout" onClick={Logout}><HiOutlineLogout/></p>                           
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
              <div className="hamburger"></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar