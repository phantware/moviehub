import axios from 'axios'

let headers = {}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800/api/',
  // headers,
})

axiosInstance.interceptors.request.use(
  function async(config) {
    const token =
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGRlMmU2ZGIxN2U1Mjk3OWY1ZTM4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE0NTU2MywiZXhwIjoxNjYzNTc3NTYzfQ.cJ7zEsOyT8MsUkkSPvHBYGWEKapwthi9nAXdAGRsIvM'
    config.headers.token = token
    // config.headers.contentType = 'application/json'
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
export default axiosInstance
