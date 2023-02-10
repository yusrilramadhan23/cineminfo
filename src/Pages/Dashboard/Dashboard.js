import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import GetMovieList from '../../utils/api_MovieList'
import GetGenre from '../../utils/api_GenreMovie'

function Dashboard() {

  const [popularMovie, setPopularMovies] = useState([])
  // const[genre, setGenre] = useState([])

  useEffect(() => {
    GetMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  // useEffect(() => {
  //   GetGenre().then((result) => {
  //     setGenre(result)
  //   })
  // }, [])

  // function GenreList(){
  //   if(genre.id === popularMovie.genre_ids){
  //     return(genre.id.name)
  //   }
  // }

  

  
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="content-table">
          <table>
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
                  <td>{movie.title}</td>
                  <td>{movie.release_date}</td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
      <p>{localStorage.getItem("name")}</p>    
    </>
  )
}

export default Dashboard