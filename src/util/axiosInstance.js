import axios from 'axios'

let headers = {}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800/api/',
  headers,
})

axiosInstance.interceptors.request.use(
  function async(config) {
    const token =
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGRlMmU2ZGIxN2U1Mjk3OWY1ZTM4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTk2MjQwMiwiZXhwIjoxNjYyMzk0NDAyfQ.oeDrmXVieVQQFj0v17z2Ir6ppArLSBfmO1R0BLosFpk'
    config.headers.token = token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
export default axiosInstance
