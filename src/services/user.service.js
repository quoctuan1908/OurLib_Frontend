import createApiClient from '@/services/api.service'

class UserService {
  constructor(baseURL = 'http://localhost:3000/api/user/reader') {
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
  async updateData(id,formData) {
    return (await this.api.put('/get-one/' + id, formData, {
      headers: {
        'Content-Type': `multipart/form-data`
      }
    })).data
  }
  async deleteUser(id) {
    return (await this.api.delete('/get-one/' + id)).data
  }
  async changePassword(id,username, oldPassword, newPassword) {
    return (await this.api.put('/get-one/changepassword/' +id, {username: username,old: oldPassword, new: newPassword}, {
      headers: {
        'Content-Type': `multipart/form-data`
      }
    })).data
  }
}

export default new UserService()
