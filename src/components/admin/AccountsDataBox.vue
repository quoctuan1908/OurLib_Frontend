<template>
  <div class="m-4 dataBox d-flex">
    <!-- Warning: Sensitive Data Access Attention: You are about to access a database containing
    sensitive information. Please be aware of the following guidelines: Confidentiality: Do not
    share your access credentials with anyone. Data Protection: Ensure that you comply with all
    relevant data protection regulations and company policies. Usage Limitations: Access is
    restricted to authorized personnel only. Unauthorized access is prohibited. Monitoring: Your
    activity may be monitored and logged for security purposes. By proceeding, you acknowledge that
    you understand the risks and responsibilities associated with accessing this database.EHll -->
    <form v-if="this.dataProps" class="row align-items-center">
      <div class="col-md-2">
        <img :src="this.userData.anhdaidien" class="form-control" v-if="this.userData.anhdaidien" />
        <img src="../../assets/blankavatar.png" class="form-control" v-else />
      </div>
      <div class="row col-md-9">
        <div class="col-md-6">
          <label>ID: </label>
          <input type="text" :value="this.userData._id" disabled class="form-control" />
          <label>Username: </label>
          <input type="text" :value="this.userData.taikhoan" disabled class="form-control" />
          <label>FirstName: </label>
          <input type="text" v-model="this.userData.ten" class="form-control" />
          <label>LastName: </label>
          <input type="text" v-model="this.userData.holot" class="form-control" />
        </div>
        <div class="col-md-6">
          <label>Birthday: </label>
          <input type="date" v-model="this.userData.ngaysinh" class="form-control" />
          <label>Gender: </label>
          <input type="checkbox" :checked="this.userData.phai" v-model="this.userData.phai" />
          <span>{{ this.userData.phai ? 'Male' : 'Female' }}</span> <br />
          <label>Email: </label>
          <input type="text" v-model="this.userData.email" class="form-control" />
          <label>Address: </label>
          <input type="text" v-model="this.userData.diachi" class="form-control" />
          <label>Phone: </label>
          <input type="text" v-model="this.userData.dienthoai" class="form-control" />
        </div>
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary" @click.prevent="this.updateUser(this.userData)">
          Update
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
      userData: {}
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
</style>
