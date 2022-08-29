import axios from 'axios'

let headers = {}

const axiosInstance = axios.create({
  baseURL: 'https://phantware-movie-api.herokuapp.com/api/',
  headers,
})

export default axiosInstance
