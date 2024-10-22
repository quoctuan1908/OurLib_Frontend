<template>
  <div>
    <AccountsDataBox
      :dataProps="this.selectedUser"
      :update-user="this.updateUser"
    ></AccountsDataBox>
    <UsersTable
      v-if="isLoaded"
      :data="this.users"
      @selected-user="
        (user) => {
          this.selectedUser = user
        }
      "
      class="overflow-auto"
    ></UsersTable>
  </div>
</template>

<script>
import userService from '@/services/user.service'
import AccountsDataBox from './AccountsDataBox.vue'
import UsersTable from './UsersTable.vue'

export default {
  name: 'AccountsBoard',
  data() {
    return {
      isLoaded: false,
      users: [],
      selectedUser: {}
    }
  },
  components: {
    UsersTable,
    AccountsDataBox
  },
  methods: {
    async getAllUsers() {
      this.users = await userService.getAll()
      this.isLoaded = true
    },
    refreshList() {
      this.getAllUsers()
    },
    async updateUser(user) {
      await userService.updateData(user)
      this.emitter.emit('popUpMessage', { message: 'Update successfully.' })
    }
  },
  mounted() {
    this.refreshList()
  }
}
</script>
