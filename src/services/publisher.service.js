import createApiClient from '@/services/api.service'

class PublisherService {
  constructor(baseURL = 'http://localhost:3000/api/user/publisher') {
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
  async getOne() {
    try {
      return (await this.api.get('/get-one')).data
    } catch (err) {
      console.log(err)
      return null
    }
  }
  async getQuantity() {
    return (await this.api.get('/quantity')).data
  }
}

export default new PublisherService()
