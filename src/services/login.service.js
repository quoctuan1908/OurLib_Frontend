import createApiClient from '@/services/api.service'

class LoginService {
  constructor(baseURL = '/api/user/reader') {
    this.api = createApiClient(baseURL)
  }
  async login(formData) {
    try {
      const data = await this.api.post('/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return data
    } catch (err) {
      console.log(err)
      return err
    }
  }
  logout() {
    localStorage.clear()
  }
  async signup(formData) {
    try {
      const response = await this.api.post('/signup', formData, {
        headers: 'Content-Type: multipart/form-data'
      })
      return response
    } catch (err) {
      console.log(err)
      return err
    }
  }
}

export default new LoginService()
