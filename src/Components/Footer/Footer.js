import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={style["footer-container"]}>
        <div className={style["footer-content"]}>
            
            <p><Link to={"/profile"}>Tentang saya</Link> || &copy; 2023 Cineminfo</p>
            <ul>
                <li><Link to={"https://www.linkedin.com/in/yusril-ramadhan-83a222221/"}><BsLinkedin /></Link></li>
                <li><Link to={"https://www.instagram.com/yusrilramadhan23/"}><BsInstagram /></Link></li>
                <li><Link to={"https://github.com/yusrilramadhan23"}><BsGithub /></Link></li>
            </ul>
        </div>        
    </div>
  )
}

export default Footer