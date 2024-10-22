import createApiClient from '@/services/api.service'

class UserService {
  constructor(baseURL = '/api/user/reader') {
    this.api = createApiClient(baseURL)
  }
  async getAll() {
    try {
      return (await this.api.get('/')).data
    } catch (err) {
      console.log(err)
      return null
    }
  }
  async getOne(id) {
    try {
      return (await this.api.get('/get-one/' + id)).data
    } catch (err) {
      console.log(err)
      return null
    }
  }
  async getQuantity() {
    return (await this.api.get('/quantity')).data
  }
  async updateData(user) {
    return (await this.api.put('/get-one/' + user.id, user)).data
  }
}

export default new UserService()
