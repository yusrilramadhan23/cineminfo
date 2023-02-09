import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

import style from './LoginPage.module.css'
import background from "../../Assets/background-login.jpg"

const LoginPage = () => {

  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[checked, setChecked]= useState(false)
  const navigate = useNavigate()

  const localEmail = localStorage.getItem("email")
  const localPassword = localStorage.getItem("password")

  const handleSubmit = (e)  => {
    e.preventDefault()
    if(email === ""){
      toast.error("Tambahkan Email !")
    }else if(password === ""){
      toast.error("Tambahkan Password !")
    }else if(email === localEmail && password === localPassword){
      localStorage.setItem("email", email)
      toast.success("Berhasil login")
      navigate("/dashboard")
    }else{
      toast.error("Pastikan email dan password benar")
    }    
  }

  return (
    <div className= {style["login-container"]}>
      <div className= {style["login-wrapper"]}>
        <img src={background} alt="" className={style["img-login"]}/>
        <div className={style["form-login"]}>
          <form>
            <h1>Login</h1>
            <label>Email</label><br />
            <input className={style["input-column"]} type="email" value={email} name="email" id="email" placeholder="Masukkan Email" onChange={e => setEmail(e.target.value)} required/><br />
            <label>Kata Sandi</label><br />
            <input className={style["input-column"]} type="password" value={password} name="password" id="password" placeholder="Masukkan Kata Sandi" onChange={e => setPassword(e.target.value)} required/><br />
            <table>
              <tr>
                  <th><input className={style["input-column"]} type="checkbox" value={checked} onChange={setChecked}/></th>
                  <th><span>Remember me</span></th>
              </tr>
            </table>            
            <br />           
            <button className={style["btn-login"]} type="submit" onClick={handleSubmit}><span>Login</span></button>
            <p>Belum memiliki akun ? <Link to= "/register">daftar disini</Link></p>            
          </form>
        </div>                  
      </div>
    </div>
  )
}

export default LoginPage