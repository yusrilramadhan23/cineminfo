import React from 'react'

import myPhoto from "../../Assets/Kabawetan.jpeg"
import resume from "../../Assets/Profile.pdf"
import style from "./Profile.module.css"
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Profile = () => {
  return (
    <>
      <Navbar />
      <div class={style["profile-container"]}>
          <Link
              to={"/dashboard"}    
              className={style["icon"]}                
          >
              <MdOutlineArrowBackIos />
          </Link>
          <div class={style["col-left"]}>
              <div class={style["about-img"]}>
                  <img src={myPhoto} alt="img" className={style["myPhoto"]}/>
              </div>
          </div>
          <div class={style["col-right"]}>
              <h1 class={style["section-title"]}>About <span>me</span></h1>
              <h2>Front End Developer</h2>
              <p>Halo, nama aku Yusril Ramadhan. Boleh dipanggil Yusril. Aku saat ini sedang berkuliah di Universitas Telkom di Jurusan Informatika. Sekarang sedang berfokus di bidang Front-End Web Development. Salam Kenal !!!</p>
              <a href={resume} class={style["cta"]} download ="Resume">Download Resume</a>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Profile