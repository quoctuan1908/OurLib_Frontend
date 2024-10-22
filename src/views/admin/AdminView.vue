<template>
  <div class="width-full">
    <div class="row width-full height-full">
      <Sidebar @actived-page="(num) => (this.activedPage = num)" class="col-md-2"></Sidebar>
      <div class="col-md-10 ml-md-17">
        <AdminNavbar :handleLogout="logout"></AdminNavbar>
        <div v-show="this.activedPage == 0"><DashBoard></DashBoard></div>
        <div v-show="this.activedPage == 1"><BooksBoard></BooksBoard></div>
        <div v-show="this.activedPage == 2"><AccountsBoard></AccountsBoard></div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountsBoard from '@/components/admin/AccountsBoard.vue'
import AdminNavbar from '@/components/admin/AdminNavbar.vue'
import BooksBoard from '@/components/admin/BooksBoard.vue'
import DashBoard from '@/components/admin/DashBoard.vue'
import Sidebar from '@/components/admin/Sidebar.vue'
import userService from '@/services/user.service'

export default {
  data() {
    return {
      activedPage: 0
    }
  },
  methods: {
    logout() {
      userService.logout()
      this.emitter.emit('logged', { isLogged: false, name: null })
      this.$router.push({ name: 'home' })
    }
  },
  components: {
    Sidebar,
    DashBoard,
    BooksBoard,
    AdminNavbar,
    AccountsBoard
  }
}
</script>

<style>
.width-full {
  width: 100%;
}
.height-full {
  height: 100%;
}
.ml-md-17 {
  margin-left: 17%;
}

@media screen and (max-width: 768px) {
  .ml-md-17 {
    margin: 0;
  }
}
</style>
