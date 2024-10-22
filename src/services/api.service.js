import axios from 'axios'

export default (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  instance.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem('token'))

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
        config.headers['token'] = token
      }

      return config
    },

    (error) => {
      return Promise.reject(error)
    }
  )
  instance.interceptors.response.use(
    (response) => {
      console.log('hello')

      return response
    },

    (error) => {
      if (error.response.status == 401) {
        localStorage.removeItem('token')
      }
      return Promise.reject(error)
    }
  )
  return instance
}
