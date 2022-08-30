import axios from 'axios'

let headers = {}

const axiosInstance = axios.create({
  baseURL: 'https://phantware-movie-api.herokuapp.com/api/',
  headers,
})

axiosInstance.interceptors.request.use(
  function async(config) {
    const token =
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGQyZTZjNTBjNjVmMDBjODI1NTgyOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjE4NTA3NjQsImV4cCI6MTY2MjI4Mjc2NH0.Cu15Na9AoNSvBKoXkhBxpo46yOc4Cfizie1on47_uKk'
    config.headers.Authorization = token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
export default axiosInstance
