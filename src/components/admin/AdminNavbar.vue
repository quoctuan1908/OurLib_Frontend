<template>
  <nav class="navbar justify-content-end navbar-custom container border-bottom">
    <div class="container-fluid justify-content-end">
      <span class="">
        <i class="fas fa-sign-out-alt" @click="this.handleLogout"></i>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AdminNavBar',
  props: ['handleLogout']
}
</script>

<style>
.navbar-custom {
  display: block;
  position: sticky;
  margin-top: 30px;
}
</style>
