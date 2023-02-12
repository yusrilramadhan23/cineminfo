import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

const GetSearchMovie = async(q) => {
  const query = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
//   console.log(query)
  return query.data
}

export default GetSearchMovie