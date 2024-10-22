<template>
  <Form class="form-control form-custom" :validation-schema="signUpFormValidate">
    <h1 class="form-title">Sign up</h1>
    <div class="mb-3 row">
      <div class="col-md-6">
        <label for="InputFirstName" class="form-label">First name</label>
        <Field
          type="text"
          name="firstname"
          class="form-control form-input-custom icon-custom"
          id="InputFirstName"
          aria-describedby="emailHelp"
          v-model="signUpData.firstname"
          placeholder="Type your first name"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="InputLastName" class="form-label">Last name</label>
        <Field
          type="text"
          name="lastname"
          class="form-control form-input-custom icon-custom"
          id="InputLastName"
          aria-describedby="emailHelp"
          v-model="signUpData.lastname"
          placeholder="Type your last name"
          required
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="InputUsername" class="form-label">Username</label>
      <Field
        type="username"
        name="username"
        class="form-control form-input-custom icon-custom"
        id="InputUsername"
        aria-describedby="emailHelp"
        v-model="signUpData.username"
        placeholder="&#xf406; Type your username"
        required
      />
      <ErrorMessage name="username" class="error-message"></ErrorMessage>
    </div>
    <div class="mb-3">
      <label for="password1" class="form-label">Password</label>
      <Field
        type="password"
        name="password"
        class="form-control form-input-custom icon-custom"
        id="password1"
        v-model="signUpData.password"
        placeholder="&#xf023; Type your password"
        required
      />
      <ErrorMessage name="password" class="error-message"></ErrorMessage>
    </div>
    <div class="mb-3">
      <label for="password2" class="form-label">Confirm password</label>
      <Field
        type="password"
        name="confirmPassword"
        class="form-control form-input-custom icon-custom"
        id="password2"
        v-model="signUpData.confirmPassword"
        placeholder="&#xf023; Type your password"
        :onchange="checkConfirmPassword"
        required
      />
      <ErrorMessage name="confirmPassword" class="error-message"></ErrorMessage>
    </div>
    <div id="message" :class="this.message ? `alert alert-warning` : ''">
      {{ this.message }}
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="handleSignUp">Login</button>
    <button type="button" @click.prevent="gotoLogin">Login</button>
  </Form>
</template>

<script>
import loginService from '@/services/login.service'
import { ErrorMessage, Field, Form } from 'vee-validate'

import * as yup from 'yup'

export default {
  name: 'UserForm',
  data() {
    const signUpFormValidate = yup.object().shape({
      username: yup
        .string()
        .min(4, 'Username must be at least 4 character')
        .max(20, 'Username must be less than 20 character')
        .required('Please type your username'),
      password: yup
        .string()
        .min(4, 'Password must be at least 4 character')
        .max(20, 'Password must be less than 20 character')
        .required('Please type your password'),
      confirmPassword: yup
        .string()
        .required('Please confirm your passsword')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    })

    return {
      signUpData: {},
      signUpFormValidate,
      message: null
    }
  },
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    async handleSignUp() {
      const formData = new FormData()
      formData.append('data', JSON.stringify(this.signUpData))
      let login = await loginService.signup(formData)
      console.log(login)
    },
    gotoLogin() {
      this.$router.push({ name: 'login' })
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
  font-size: 13px;
}
.form-input-custom {
  border-radius: 5px;
  border-width: 0px 0px 3px 0px;
}
.icon-custom {
  font-family: Arial, Helvetica, sans-serif, FontAwesome;
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
.error-message {
  color: rgb(220, 70, 70);
}
</style>
