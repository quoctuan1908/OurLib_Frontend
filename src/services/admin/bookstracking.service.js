import createApiClient from '@/services/api.service'

class BooksTrackingService {
  constructor(baseURL = 'http://localhost:3000/api/tracking') {
    this.api = createApiClient(baseURL)
  }
  async getAll() {
    return (await this.api.get('/')).data
  }

  async getAllByFilter(filter) {
    return (await this.api.get('/', { params: filter })).data
  }
  async getOne(id) {
    return (await this.api.get('/get-one/' + id)).data
  }
  async acceptRequest(id) {
    return (await this.api.post('/get-one/accept/' + id)).data
  }
  async refuseRequest(id) {
    console.log(id)
    return (await this.api.delete('/get-one/' + id)).data
  }
  async acceptReturn(id) {
    return (await this.api.put('/get-one/' + id)).data
  }
}

export default new BooksTrackingService()
