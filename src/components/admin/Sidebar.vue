<template>
  <div class="sidebar p-4">
    <h1 class="p-2">Library</h1>
    <div @click="$emit('activedPage', 0)" class="mb-2 mt-2">
      <h5 class="btn-custom">
        <span class="d-md-block d-none">Dashboard </span>
        <i class="fa-solid fa-table-columns icon-custom"></i>
      </h5>
    </div>
    <div @click="$emit('activedPage', 1)" class="mb-2 mt-2 d-flex">
      <h5 class="btn-custom">
        <span class="d-md-flex d-none">Books </span> <i class="fa-solid fa-book icon-custom"></i>
      </h5>
    </div>
    <div @click="$emit('activedPage', 2)" class="mb-2 mt-2 d-flex">
      <h5 class="btn-custom">
        <span class="d-md-flex d-none">Accounts </span> <i class="fa-solid fa-users"></i>
      </h5>
    </div>
    <div @click="$emit('activedPage', 3)" class="mb-2 mt-2 d-flex">
      <h5 class="btn-custom">
        <span class="d-md-flex d-none">Publishers </span> <i class="fa-regular fa-building"></i>
      </h5>
    </div>
    <div @click.prevent="logout">Log Out</div>
  </div>
</template>

<script>
import loginService from '@/services/login.service';

export default {
  name: 'SideBar',

    methods: {
    logout() {
      loginService.logout()
      this.emitter.emit('logged', { isLogged: false, name: null })
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
.sidebar {
  background-color: rgb(30, 29, 33);
  height: 100%;
  color: white;
  position: fixed;
}
.btn-custom {
  display: flex;
  padding: 8px;
}

.btn-custom:hover {
  color: rgb(102, 199, 102);
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .icon-custom {
    text-align: center;
  }
  .sidebar {
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
