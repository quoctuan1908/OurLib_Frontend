<template>
  <div class="p-3 ">
    <div class="row">
      <div class="col-md-4 text-center">
        <img :src="this.imageApiPath + this.userData.anhdaidien" class="form-control" />
      </div>
      <div class="col-md-8 row">
        <div class="col-md-6">
          <label>FirstName: </label>
          <input type="text" :value="this.data.ten" class="form-control" disabled/>
          <label>LastName: </label>
          <input type="text" :value="this.data.holot" class="form-control" disabled/>
          <label>Gender: </label>
          <input type="text" :value="this.data.phai"  class="form-control" disabled />
          <label>Birthday: </label>
          <input type="date" :value="this.data.ngaysinh" class="form-control" disabled/>
        </div>
        <div class="col-md-6">
          <label>Email: </label>
          <input type="text" :value="this.data.email" class="form-control" disabled/>
          <label>Address: </label>
          <input type="text" :value="this.data.diachi" class="form-control" disabled/>
          <label>Phone: </label>
          <input type="text" :value="this.data.dienthoai" class="form-control" disabled/>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center">
    <!-- Button trigger modal -->
    <button type="button" class="btn-custom-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Change your profile
    </button>
    <!-- Button trigger modal -->
    <button type="button" class="btn-custom-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Change password
    </button>
  </div>


<!-- Modal2 -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Change Password</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
          <label>Old Password: </label>
          <input type="password" class="form-control" placeholder="Enter your old password" v-model="this.password.old"/>
          <label>New Password: </label>
          <input type="password" class="form-control" placeholder="Enter new password" v-model="this.password.new"/>
          <label>Confirm Password: </label>
          <input type="password" class="form-control" placeholder="Repeat new password" v-model="this.password.repeatNew"/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="this.changePassword" data-bs-dismiss="modal">Change</button>
      </div>
    </div>
  </div>
</div>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Personal Profile</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <label>ID: </label>
              <input type="text" :value="this.userData._id" disabled class="form-control" />
              <label>Username: </label>
              <input type="text" :value="this.userData.taikhoan" disabled class="form-control" />
              <label>FirstName: </label>
              <input type="text" v-model="this.userData.ten" class="form-control" />
              <label>LastName: </label>
              <input type="text" v-model="this.userData.holot" class="form-control" />
              <label>Gender: </label>
              <select v-model="this.userData.phai" class="form-control">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="col-md-6">
              <label>Birthday: </label>
              <input type="date" v-model="this.userData.ngaysinh" class="form-control" />
              <label>Email: </label>
              <input type="text" v-model="this.userData.email" class="form-control" />
              <label>Address: </label>
              <input type="text" v-model="this.userData.diachi" class="form-control" />
              <label>Phone: </label>
              <input type="text" v-model="this.userData.dienthoai" class="form-control" />
            </div>
          </div>
          <label>Image: </label>
          <input type="file" name="file" class="form-control" @change="($event) => getAvatarFile($event)"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleChangeUserProfile" data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/user.service';

export default {
  name: 'UserProfile',
  props: ['data'],
  data() {
    return {
      userData: this.data,
      avatarFile: null,
      imageApiPath: 'http://localhost:3000/public/data/uploads/avatar/',
      password: {}
    }
  },
  methods: {
    format_date(date) {
      this.userData.ngaysinh = new Date(date).toISOString().slice(0, 10)
    },
    async handleChangeUserProfile() {
      const formData = new FormData()
      formData.append('userData', JSON.stringify(this.userData))
      formData.append('file', this.avatarFile)
      const result = await userService.updateData(this.userData._id,formData)
      localStorage.setItem("avatar", result.anhdaidien)
      this.userData.anhdaidien = result.anhdaidien
      this.emitter.emit('popUpMessage', { message: 'Change successful.!' })
    },
    getAvatarFile(event) {
      this.avatarFile = event.target.files[0]
      console.log(this.avatarFile)
    },
    async changePassword() {
      try {
        if (this.password.new == this.password.repeatNew) {
          await userService.changePassword(this.userData._id,this.userData.taikhoan, this.password.old, this.password.new);
          
          this.emitter.emit('popUpMessage', { message: 'Change successful.!' })
        } else {
          this.emitter.emit('popUpMessage', { message: 'Password and repeat password are not sync.' })
        }

      }
      catch(err) {
        console.log(err)
        this.emitter.emit('popUpMessage', { message: err.response.status })
      }

    }
  },
  mounted() {
    this.format_date(this.data.ngaysinh)
  }
}
</script>

<style>
.btn-custom-2 {
  border: none;
  background-color: rgb(100, 161, 214);
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
</style>
