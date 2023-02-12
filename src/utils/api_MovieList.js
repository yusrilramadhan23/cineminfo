import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

const GetMovieList = async(page) => {
  const movie = await axios.get(`${baseUrl}/trending/movie/day?api_key=${apiKey}&page=${page}`)
  console.log(movie)
  return movie.data.results
}

export default GetMovieList