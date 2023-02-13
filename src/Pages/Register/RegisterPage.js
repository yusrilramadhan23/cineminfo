import React, { useState } from "react"
import {toast} from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

import style from "./RegisterPage.module.css"
import background from "../../Assets/background-login.jpg"
import logo from "../../Assets/Cineminfo.svg"

const RegisterPage = () => {
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")  

  const email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === ""){
      toast.error("Tambahkan Nama !")
    }else if(email === ""){
      toast.error("Tambahkan Email !")
    }else if(!email_validation.test(email)){
      toast.error("email tidak cocok, coba lagi")
    }else if(password === ""){
      toast.error("Tambahkan Password !")
    } else if(!password_validation.test(password)){
      toast.error("Tambahkan minimal 8 karakter password dan gunakan karakter unik")
    } else if(confirmPassword === ""){
      toast.error("Tambahkan Konfirmasi Password !")
    } else if(confirmPassword !== password){
      toast.error("Password tidak sama")
    } else{
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("confirm password", confirmPassword)
      localStorage.setItem("daftar", email)
      toast.success("User saved !")
      navigate("/login")
    }
  }
  return (
    <div className= {style["register-container"]}>  
        <div className= {style["register-wrapper"]}>
            <img src={background} alt="" className={style["img-register"]}/>
            <div className={style["form-register"]}>
                <form>
                    <img src={logo} alt="" className={style["logo-register"]}/>  
                    <h1>Daftar</h1>
                    <label>Username</label><br />
                    <input className={style["input-column"]} type="text" value={name} name="name" id="name" placeholder="Masukkan Nama" onChange={e => setName(e.target.value)} required/><br />
                    <label>Email</label><br />
                    <input className={style["input-column"]} type="email" value={email} name="email" id="email" placeholder="Masukkan Email" onChange={e => setEmail(e.target.value)} required/><br />
                    <label>Kata Sandi</label><br />
                    <input className={style["input-column"]} type="password" value={password} name="password" id="password" placeholder="Masukkan Kata Sandi" onChange={e => setPassword(e.target.value)} required/><br />
                    <label>Konfirmasi Kata Sandi</label><br />
                    <input className={style["input-column"]} type="password" value={confirmPassword} name="confirm password" id="confirm-password" placeholder="Konfirmasi Kata Sandi" onChange={e => setConfirmPassword(e.target.value)} required/><br />                    
                    <button type="submit" className={style["btn-register"]} onClick={handleSubmit}>Daftar</button>           
                    <p>Sudah memiliki akun ? <Link to= "/login" className={style["login"]}>Masuk disini</Link></p> 
                </form>
            </div>                  
        </div>
    </div>
  )
}

export default RegisterPage