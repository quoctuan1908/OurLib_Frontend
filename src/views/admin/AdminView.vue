<template>
  <div class="width-full">
    <div class="row width-full height-full">
      <Sidebar @actived-page="(num) => (this.activedPage = num)" class="col-md-2"></Sidebar>
      <div class="col-md-10 ml-md-17 mt-md-17">
        <div v-show="this.activedPage == 0"><DashBoard></DashBoard></div>
        <div v-show="this.activedPage == 1"><BooksBoard></BooksBoard></div>
        <div v-show="this.activedPage == 2"><AccountsBoard></AccountsBoard></div>
        <div v-show="this.activedPage == 3"><PublisherBoard></PublisherBoard></div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountsBoard from '@/components/admin/AccountsBoard.vue'
import BooksBoard from '@/components/admin/BooksBoard.vue'
import DashBoard from '@/components/admin/DashBoard.vue'
import PublisherBoard from '@/components/admin/PublisherBoard.vue'
import Sidebar from '@/components/admin/Sidebar.vue'

export default {
  data() {
    return {
      activedPage: 0
    }
  },
  components: {
    Sidebar,
    DashBoard,
    BooksBoard,
    AccountsBoard,
    PublisherBoard
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
.mt-md-17 {
  margin-top: 0px;
}

@media screen and (max-width: 768px) {
  .ml-md-17 {
    margin-left: 15px;
  }
  .mt-md-17 {
    margin-top: 50px;
  }
}
</style>
