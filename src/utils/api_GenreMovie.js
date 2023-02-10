import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

const GetGenre = async() => {
  const genre = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
  console.log(genre)
  return genre.data.genres
}

export default GetGenre