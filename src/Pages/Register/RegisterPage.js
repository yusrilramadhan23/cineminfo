import React, { useState } from "react"
import style from "./RegisterPage.module.css"
import background from "../../Assets/background-login.jpg"
import {toast} from "react-toastify"

const RegisterPage = () => {
  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")  

  const email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email === ""){
      toast.error("Tambahkan Email !")
    } else if(!email_validation.test(email)){
      toast.error("email tidak cocok, coba lagi")
    }else if(password === ""){
      toast.error("Tambahkan Password !")
    } else if(!password_validation.test(password)){
      toast.error("Tambahkan minimal 8 karakter password")
    } else if(confirmPassword === ""){
      toast.error("Tambahkan Konfirmasi Password !")
    } else if(confirmPassword !== password){
      toast.error("Password tidak sama")
    } else{
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("confirm password", confirmPassword)
      toast.success("User saved !")
    }
  }
  return (
    <div className= {style["register-container"]}>  
        <div className= {style["register-wrapper"]}>
            <img src={background} alt="" className={style["img-register"]}/>
            <div className={style["form-register"]}>
                <form>
                    <h1>Daftar</h1>
                    <label>Email</label><br />
                    <input className={style["input-column"]} type="email" value={email} name="email" id="email" placeholder="Masukkan Email" onChange={e => setEmail(e.target.value)} required/><br />
                    <label>Kata Sandi</label><br />
                    <input className={style["input-column"]} type="password" value={password} name="password" id="password" placeholder="Masukkan Kata Sandi" onChange={e => setPassword(e.target.value)} required/><br />
                    <label>Konfirmasi Kata Sandi</label><br />
                    <input className={style["input-column"]} type="password" value={confirmPassword} name="confirm password" id="confirm-password" placeholder="Konfirmasi Kata Sandi" onChange={e => setConfirmPassword(e.target.value)} required/><br />                    
                    <button type="submit" className={style["btn-register-register"]} onClick={handleSubmit}>Daftar</button>            
                </form>
            </div>                  
        </div>
    </div>
  )
}

export default RegisterPage