import createApiClient from '@/services/api.service'

class BookService {
  constructor(baseURL = '/api/book') {
    this.api = createApiClient(baseURL)
  }
  async getAll() {
    return (await this.api.get('/')).data
  }
  async getAllByFilter(tensach) {
    return await this.api.get('/', { params: tensach })
  }
  async getOne(id) {
    return (await this.api.get('/get-one/' + id)).data
  }
  async borrow(madocgia, masach, tensach, tendocgia) {
    return await this.api.post('/borrow', {
      madocgia: madocgia,
      masach: masach,
      tensach: tensach,
      tendocgia: tendocgia
    })
  }
  async getQuantity() {
    return (await this.api.get('/quantity')).data
  }
  async delete(id) {
    return (await this.api.delete('/get-one/' + id)).data
  }
}

export default new BookService()
