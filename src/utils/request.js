import axios from 'axios'
const service = axios.create({
  baseURL: '',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // if (token) {
    //   config.headers.Authorization = token
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export default service