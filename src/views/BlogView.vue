<template>
  <div>
    <UserProfile :data="this.data" v-if="isLoaded"></UserProfile>
    <div>
      <select @change="this.filterSelect" v-model="this.filterOption">
        <option value="processing">Requests</option>
        <option value="borrowing">Borrowing Books</option>
        <option value="returned">Borrowed Books</option>
      </select>
    </div>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'
import bookstrackingService from '@/services/admin/bookstracking.service'
import userService from '@/services/user.service'

export default {
  data() {
    return {
      isLoaded: false,
      data: {},
      borrowRequests: [],
      filtedList: [],
      filterOption: ''
    }
  },
  components: {
    UserProfile
  },
  methods: {
    async fetchUserData() {
      this.data = await userService.getOne(localStorage.getItem('id'))
      this.borrowRequest = await bookstrackingService.getAllByFilter({
        madocgia: this.data.madocgia
      })
      this.isLoaded = true
      console.log(this.data)
      console.log(this.borrowRequest)
    },
    filterSelect() {
      this.filtedList = this.borrowRequest.filter((record) => record.trangthai == this.filterOption)
      console.log(this.filtedList)
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) this.$router.push({ name: 'login' })
    this.fetchUserData()
  }
}
</script>
