<template>
  <div>
    <UserProfile :data="this.userData" v-if="isLoaded"></UserProfile>
    <div class="p-3">
      <h3>Filter</h3>
      <select @change="this.filterSelect" v-model="this.filterOption" class="form-control">
        <option value="processing" selected>Requests</option>
        <option value="borrowing">Borrowing Books</option>
        <option value="returned">Returned Books</option>
      </select>
      <TrackingTable 
        :data="this.filtedList" 
        :refuse-request="refuseRequest" 
        :accept-request="null" 
        :table-label="'Your Request'"
        class="overflow-auto" 
        v-if="isLoaded"
      ></TrackingTable>
    </div>
  </div>
</template>

<script>
import TrackingTable from '@/components/admin/TrackingTable.vue';
import UserProfile from '@/components/UserProfile.vue';
import bookstrackingService from '@/services/admin/bookstracking.service';
import userService from '@/services/user.service';
import moment from 'moment';

export default {
  data() {
    return {
      isLoaded: false,
      userData: {},
      borrowRequests: [],
      filtedList: [],
      filterOption: ''
    }
  },
  components: {
    UserProfile,
    TrackingTable
  },
  methods: {
    async fetchUserData() {
      this.userData = await userService.getOne(localStorage.getItem('id'))
      console.log(this.userData._id)
      this.borrowRequests = await bookstrackingService.getAllByFilter({
        madocgia: this.userData._id
      })
      this.format_date(this.borrowRequests)
      console.log(this.borrowRequests)
      this.filterSelect()
      this.isLoaded = true
    },
    filterSelect() {
      this.filtedList = this.borrowRequests.filter((record) => record.trangthai == this.filterOption)
    },
    async refreshList() {
      await this.fetchUserData()
      await this.filterSelect()
      console.log(this.filtedList)
    },
    async refuseRequest(id) {
      await bookstrackingService.refuseRequest(id)
      this.emitter.emit('popUpMessage', { message: 'Request Deleted!' })
      await this.refreshList()
    },
    format_date(array) {
      array.forEach((element) => {
        element.ngayyeucau = moment(String(element.ngayyeucau)).format('DD/MM/YYYY')
        if (element.ngaymuon) {
          element.ngaymuon = moment(String(element.ngaymuon)).format('DD/MM/YYYY')
          element.hantra = moment(String(element.hantra)).format('DD/MM/YYYY')
          if (element.ngaytra) {
            element.ngaytra = moment(String(element.ngaytra)).format('DD/MM/YYYY')
          }
        }
      })
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) this.$router.push({ name: 'login' })
    this.fetchUserData()
  }
}
</script>
