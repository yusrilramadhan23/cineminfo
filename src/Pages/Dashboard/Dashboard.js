import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import GetMovieList from '../../utils/api_MovieList'

import style from './Dashboard.module.css'
import GetSearchMovie from '../../utils/api_searchMovie'
import { AiOutlineSearch } from 'react-icons/ai'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {GrNext} from 'react-icons/gr'
import { toast } from 'react-toastify'
import Loading from '../../Components/Loading/Loading'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

function Dashboard() {

  const [popularMovie, setPopularMovies] = useState("Loading")
  const[page, setPage] = useState(1)

  useEffect(() => {
    GetMovieList(page)
      .then((result) => {
        setPopularMovies(result)      
      })
      .catch((err) => {
        alert(err)
      })
  }, [page])

  const SearchMovie = async(q) => {
    if(q.length < 3){
      const query = await GetSearchMovie(q)
      setPopularMovies(query.results)
    }
  }
  if(popularMovie === "Loading" || !popularMovie || popularMovie.length === 0){
    return(
      <Loading />      
    )
  }else{
    return (
      <>
        <Navbar />
        <div className={style["dashboard-container"]}>
          <div className={style["title-content"]}>
            <p>Welcome, <span>{localStorage.getItem("name")}</span></p>
            <input 
              type="text" 
              placeholder="Search movie..."
              className={style["search-movie"]}
              onChange={(q) => SearchMovie(q.target.value)}
            />
            <button className={style["icon-input"]}><AiOutlineSearch /></button>
          </div>          
          <div className={style["content-table"]}>
            <table>
              <tbody>
                <tr>
                  <th>id</th>
                  <th>Title</th>
                  <th>Year</th>              
                  <th>Score</th>
                  <th>Popularity</th>              
                </tr>
                {popularMovie.map((movie) => {
                  return(
                    <tr key={movie.id}>
                      <td>{movie.id}</td>
                      <td><Link to={`/movie/${movie.id}`}>{movie.title}</Link></td>
                      <td>{movie.release_date}</td>
                      <td>{movie.vote_average}/10</td>
                      <td>{movie.popularity}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className={style["Pagination-content"]}>
            <button 
              className={style["back-btn"]}
              onClick={() => {
                if(page > 1){
                  setPopularMovies("Loading")
                  setPage(page - 1)
                }
              }}
              >
              <MdOutlineArrowBackIos />
            </button>
            {page}
            <button
              className={style["next-btn"]}
              onClick={() => {
                if(page < 20){
                  setPopularMovies("Loading")  
                  setPage(page + 1)
                }
              }}
            >
              <GrNext/>
            </button>
          </div>
        </div>       
        <Footer />
      </>
    )
  }
  
}

export default Dashboard