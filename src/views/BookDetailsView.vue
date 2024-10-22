<template>
  <DetailCard :data="this.data" :borrowEvent="borrowBook"></DetailCard>
</template>

<script>
import DetailCard from '@/components/DetailCard.vue'
import bookService from '@/services/book.service'
export default {
  data() {
    return {
      data: []
    }
  },
  components: {
    DetailCard
  },
  methods: {
    async fetchBookDetail() {
      this.data = await bookService.getOne(this.$route.query.id)
      console.log(this.data)
    },
    refreshData() {
      this.fetchBookDetail()
    },
    async borrowBook() {
      if (localStorage.getItem('token')) {
        const response = await bookService.borrow(
          localStorage.getItem('id'),
          this.$route.query.id,
          this.data.tensach,
          localStorage.getItem('name')
        )
        this.emitter.emit('popUpMessage', { message: 'Requested.' })
        console.log(response)
      } else this.$router.push({ name: 'login' })
    }
  },
  mounted() {
    this.refreshData()
  }
}
</script>
