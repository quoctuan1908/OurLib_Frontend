<template>
  <form class="form-control form-custom">
    <h1 class="form-title">Login</h1>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Username</label>
      <input
        type="username"
        name="username"
        class="form-control form-input-custom icon-custom"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="loginData.username"
        placeholder="&#xf406; Type your username"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        name="password"
        class="form-control form-input-custom icon-custom"
        id="exampleInputPassword1"
        v-model="loginData.password"
        placeholder="&#xf023; Type your password"
        required
      />
    </div>
    <div id="message" :class="this.message ? `alert alert-warning` : ''">
      {{ this.message }}
    </div>
    
    <button type="submit" class="btn btn-primary" @click.prevent="handleLogin">Login</button><br/>
    <span @click.prevent="gotoSignUp" class="link-primary link-custom">Don't have account? Sign up now</span>
  </form>
</template>

<script>
import loginService from '@/services/login.service';

export default {
  name: 'UserForm',
  data() {
    return {
      loginData: {},
      message: null
    }
  },
  components: {

  },
  methods: {
    async handleLogin() {
      const formData = new FormData()
      formData.append('data', JSON.stringify(this.loginData))
      let login = await loginService.login(formData)
      //set token and name for user
      if (login.data.statusCode === 200) {
        localStorage.setItem('token', JSON.stringify(login.data.token))
        localStorage.setItem('name', login.data.name)
        localStorage.setItem('id', login.data.id)
        localStorage.setItem('role', login.data.role)
        localStorage.setItem('avatar', login.data.avatar)
        //change navbar
        this.emitter.emit('logged', { isLogged: true, name: login.data.name, avatar: login.data.avatar })
        this.$router.push({ name: 'home' })
      } else {
        this.message = login.data.message
      }
    },
    gotoSignUp() {
      this.$router.push({ name: 'signup' })
    }
  }
}
</script>

<style>
.form-title {
  text-align: center;
  font-weight: bold;
  padding: 10px;
}
.form-custom {
  padding: 20px;
}
.form-input-custom::placeholder {
  color: #c9c8c8;
}
.form-input-custom {
  border-radius: 5px;
  border-width: 0px 0px 3px 0px;
}
.icon-custom {
  font-style: normal;
}
.forgot-password-link-container {
  font-size: 13px;
  text-align: end;
}
.forgot-password-link {
  text-decoration: none;
  color: rgb(83, 79, 79);
}
.forgot-password-link:hover {
  color: cornflowerblue;
}
.link-custom:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
