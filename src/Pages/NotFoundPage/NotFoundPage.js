import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import style from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={style["main"]}>
      <Helmet>
        <title>Cineminfo - Page Not Found</title>
      </Helmet>
      <div className={style["not-found"]}>
        <h1>404 - Halaman tidak ditemukan</h1>
        <br />
        <hr />
        <p>Sepertinya halaman yang anda cari tidak ditemukan :) Silakan kembali ke halaman utama.</p>
        <hr />
        <br />
        <Link to="/dashboard">
          <button className={style["back-dashboard"]}>Kembali ke Halaman Utama</button>
        </Link>
      </div>
    </div>
  )
}
export default NotFoundPage;