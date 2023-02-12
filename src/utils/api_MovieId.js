import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

const getMovieId = async(movieId) => {
  const movie = await axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`)
  console.log(movie.data)
  return movie.data
}

export default getMovieId