import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import getMovieId from '../../utils/api_MovieId'
import Loading from '../../Components/Loading/Loading'
import style from './DetailPage.module.css'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import Navbar from '../../Components/Navbar/Navbar'

function DetailPage() {
    const{movieId} = useParams()
    const[movie, setMovie] = useState("Loading")
    
    const navigate = useNavigate()

    useEffect(() => {
        getMovieId(movieId).then((result) => {
            setMovie(result)
        })
        .catch((err) => {
            alert(err)
            navigate("/dashboard")
        })
    })

    if(movie === "Loading" || !movie){
        <Loading />
    }
    return (
        <>              
            <div className={style["detail-container"]}>
                <Link
                    to={"/dashboard"}    
                    className={style["icon"]}                
                >
                    <MdOutlineArrowBackIos />
                </Link>
                <img 
                    src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}                      
                    alt="backdrop-img"
                    className={style["backdrop-img"]}
                />                
                <div className={style["detail-content"]}>
                    <div className={style["detail-content-left"]}>
                        <img 
                            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}                      
                            alt="poster-img"
                            className={style["poster-img"]}
                        />
                        <p><span>Title : </span> {movie.title}</p>
                        <p><span>Release date : </span> {movie.release_date}</p>
                        <p><span>Popularity : </span> {movie.popularity}</p>
                        <p><span>Status : </span> {movie.status}</p>
                    </div>
                    <div className={style["detail-content-right"]}>
                        <h1>{movie.original_title}/{movie.vote_average}⭐</h1>
                        <p className={style["p-tagline"]}>{movie.tagline}</p>
                        <h2>Overview</h2>
                        <p>"{movie.overview}"</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage