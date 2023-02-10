import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

const GetMovieList = async() => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
  console.log(movie)
  return movie.data.results
}

export default GetMovieList