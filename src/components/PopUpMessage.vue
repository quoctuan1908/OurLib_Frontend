<template>
  <div :class="`showMessage shadow-lg alert ${!this.isShow ? 'hideMessage' : ''}`">
    {{ this.message }}<i class="fa-regular fa-circle-check fs-4"></i>
  </div>
</template>

<script>
export default {
  name: 'PopUpMessage',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    popUp() {
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 2000)
    }
  },
  created() {
    this.emitter.on('popUpMessage', (obj) => {
      this.message = obj.message
      this.popUp()
    })
  }
}
</script>

<style>
.hideMessage {
  visibility: hidden;
}
.showMessage {
  width: 20%;
  position: fixed;
  right: 10px;
  z-index: 100;
  text-align: center;
  border: 1px solid rgb(55, 192, 55);
  color: rgb(55, 192, 55);
  background-color: white;
}
</style>
