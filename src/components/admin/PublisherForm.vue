<template>
  <form class="">
    <label>Publisher Name:</label>
    <input type="text" class="form-control" v-model="this.dataModal.tennxb"/>
    <label>Publisher Address:</label>
    <input type="text" class="form-control" v-model="this.dataModal.diachi"/>
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="this.submit(this.dataModal) ">Submit</button>
  </form>
</template>

<script>



export default {
  name: 'PublisherForm',
  props: {
    data: {
        type: Object
    },
    submit: {
        type: Function
    }
  },
  data() {
    return {
        dataModal: this.data
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    data(newVal, oldVal) {
      this.dataModal = newVal
    }
  }
}
</script>

<style>
.block {
  width: 25%;
  text-align: center;
  background-color: white;
}
</style>
