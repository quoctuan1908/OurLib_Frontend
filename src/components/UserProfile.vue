<template>
  <div class="p-3">
    <div class="text-center image-area">
      <img src="../assets/blankavatar.png" class="d-block m-auto" width="250px" />
      <button class="btn-custom"><i class="fa-solid fa-pen"></i> Change your profile</button>
    </div>
    <div>
      <h1>Your request</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: ['data'],
  methods: {
    async getAllOfUserRequest() {}
  }
}
</script>

<style>
.btn-custom {
  border: none;
  background-color: aliceblue;
  border-radius: 5px;
  padding: 10px;
}
.image-area {
  border-bottom: 1px solid rgb(143, 138, 138);
  padding: 5px;
}
</style>
