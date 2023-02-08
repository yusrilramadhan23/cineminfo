import React, { useState } from 'react'
import style from './LoginPage.module.css'

const LoginPage = () => {

  const[email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[checked, setChecked]= useState("")

  return (
    <div className= {style["login-container"]}>
      <div className= {style["login-wrapper"]}>
        <h1>Login</h1>
        <div className={style["form-login"]}>
          <form>
            <label>Email</label><br />
            <input className={style["input-column"]} type="email" value={email} name="email" id="email" placeholder="Masukkan Email" onChange={e => setEmail(e.target.value)} required/><br />
            <label>Kata Sandi</label><br />
            <input className={style["input-column"]} type="password" value={password} name="password" id="password" placeholder="Masukkan Kata Sandi" onChange={e => setPassword(e.target.value)} required/><br />
            <div>
              <input className={style["input-column"]} type="checkbox" value={checked} onChange={setChecked}/><br />           
              <p>Remember me</p>         
            </div><br/>
            <button className={style["btn-login-register"]}>Login</button>            
          </form>
        </div>                  
      </div>
    </div>
  )
}

export default LoginPage