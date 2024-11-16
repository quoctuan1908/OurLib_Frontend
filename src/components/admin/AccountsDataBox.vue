<template>
  <div class="m-4 dataBox rounded p-2">
    <!-- Warning: Sensitive Data Access Attention: You are about to access a database containing
    sensitive information. Please be aware of the following guidelines: Confidentiality: Do not
    share your access credentials with anyone. Data Protection: Ensure that you comply with all
    relevant data protection regulations and company policies. Usage Limitations: Access is
    restricted to authorized personnel only. Unauthorized access is prohibited. Monitoring: Your
    activity may be monitored and logged for security purposes. By proceeding, you acknowledge that
    you understand the risks and responsibilities associated with accessing this database.EHll -->
    <form v-if="this.dataProps" class="row align-items-center">
      <div class="col-md-3">
        <img :src="this.imageApiPath + this.userData.anhdaidien" class="bigAvatar" v-if="this.userData.anhdaidien" />
        <img src="../../assets/blankavatar.png" class="form-control" v-else />
      </div>
      <div class="row col-md-8 ">
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
          <label>Role: </label>
          <select v-model="this.userData.role" class="form-control">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
      </div>
      <div class="col-md-1 text-center">
        <button class="btn btn-primary" @click.prevent="this.updateUser(this.userData)">
          Update
        </button>
        <button class="btn btn-danger" @click.prevent="this.deleteUser(this.userData._id)">
          Delete 
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AccountsDataBox',
  props: {
    dataProps: {
      type: Object
    },
    updateUser: {
      type: Function
    },
    deleteUser: {
      type: Function
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    dataProps(newVal, oldVal) {
      this.userData = newVal
      this.format_date(newVal.ngaysinh)
    }
  },
  data() {
    return {
      userData: {},
      imageApiPath: 'http://localhost:3000/public/data/uploads/avatar/'
    }
  },
  methods: {
    format_date(date) {
      this.userData.ngaysinh = new Date(date).toISOString().slice(0, 10)
    }
  }
}
</script>

<style>
.dataBox {
  min-height: 200px;
  border: none;
  background-color: white;
}
.bigAvatar {
  width: 100%;
}
</style>
