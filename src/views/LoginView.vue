<template>
  <div>
    <LoginForm class="formCustom"> </LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginView',
  data() {
    return {}
  },
  components: {
    LoginForm
  }
}
</script>

<style>
.formCustom {
  width: 350px;
  margin: auto;
  margin-top: 5px;
}
</style>
