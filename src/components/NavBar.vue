<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="container-fluid">
      <!-- Navbar brand -->
      <RouterLink to="/">
        <img src="../assets/logo.jpg" class="homeImage" />
      </RouterLink>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in this.navbarElements" :key="link">
            <RouterLink :to="link.link" class="nav-link">{{ link.name }}</RouterLink>
          </li>
        </ul>
        <!-- Left links -->

        <!-- Search form -->
        <form class="d-flex input-group w-auto">
          <input
            type="search"
            class="form-control"
            placeholder="Type query"
            aria-label="Search"
            v-model="this.searchQuery"
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            data-bs-ripple-color="dark"
            style="padding: 0.45rem 1.5rem 0.35rem"
            @click.prevent="this.handleSubmit"
          >
            Search
          </button>
        </form>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <!-- Navbar dropdown -->
          <li class="nav-item dropdown">
            <!-- Dropdown menu -->
            <ul
              class="dropdown-menu dropdown-menu-end notifications-list p-1"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <div class="col-md">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    height="63"
                    width="auto"
                    class="d-block"
                    alt="..."
                  />
                </div>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-circle-user" v-if="!this.avatar"></i>
              <img class="avatar" :src="'http://localhost:3000/public/data/uploads/avatar/' + this.avatar" v-else/>
            </a>
            <!-- Dropdown menu -->
            <ul class="dropdown-menu dropdown-menu-end p-1" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/blog">Your Account</RouterLink></li>
              <li>
                <a class="dropdown-item" @click.prevent="handleLogout" v-show="isLogged">Log Out</a>
              </li>
              <li><a class="dropdown-item" @click.prevent="click" v-show="!isLogged">Log In</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
import loginService from '@/services/login.service';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const navbarElements = ref([
  {link: '/', name: 'Home'},
  { link: '/about', name: 'About' },
  { link: '/books', name: 'Books' },
  { link: '/help', name: 'Help'}
])
export default {
  name: 'NavBar',
  data() {
    return {
      navbarElements,
      isLogged: false,
      name: null,
      avatar: null,
      searchQuery: ''
    }
  },
  created() {
    this.emitter.on('logged', (data) => {
      this.isLogged = data.isLogged
      this.name = data.name,
      this.avatar = data.avatar
    })
  },
  mounted() {
    this.checkLogin()
  },
  components: {
    RouterLink
  },
  methods: {
    click() {
      this.$router.push({ name: 'login' })
    },
    checkLogin() {
      if (localStorage.getItem('token')) {
        this.isLogged = true
        this.name = localStorage.getItem('name')
        this.avatar = localStorage.getItem('avatar')
      } else {
        this.isLogged = false
        this.name = null
        this.avatar = null
      }
    },
    handleLogout() {
      loginService.logout()
      this.isLogged = false
      this.avatar = null
      this.$router.push({ name: 'login' })
    },
    handleSubmit() {
      if (this.searchQuery != '') {
        this.$router.push({ name: 'search', query: { tensach: this.searchQuery } })
        this.emitter.emit('searchQuery', this.searchQuery)
      } else {
        this.$router.push({ name: 'books' })
      }
    }
  }
}
</script>

<style>
.homeImage {
  width: 70px;
  border-radius: 100%;
}
.nav-link-custom {
  font-size: small;
}
.searchField {
  min-width: 200px;
}
.searchButton {
  border: 2px solid white;
  border-radius: 5px;
}
.iconCustom {
  color: black;
}
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
