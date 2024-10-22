<template>
  <div>
    <VueSkeletonLoader
      type="image@2"
      :loading="!this.isReady"
      height="300px"
      class="loading-custom"
    ></VueSkeletonLoader>
    <BookList
      :booksList="this.filtedList"
      :size="2"
      class="d-flex flex-wrap border justify-content-center"
    ></BookList>
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue'
import bookService from '@/services/book.service'
import VueSkeletonLoader from 'vue3-skeleton-loader'

export default {
  data() {
    return {
      filtedList: [],
      isReady: false
    }
  },
  components: {
    BookList,
    VueSkeletonLoader
  },
  methods: {
    async fetchBooksWithFilter(query) {
      const result = await bookService.getAllByFilter({ tensach: query })
      this.filtedList = result.data
      this.isReady = true
      console.log(this.filtedList)
      if (this.filtedList.length == 0) {
        this.$router.push({ name: 'notfound' })
      }
    }
  },
  created() {
    this.emitter.on('searchQuery', async (query) => {
      await this.fetchBooksWithFilter(query)
    })
  },
  mounted() {
    this.fetchBooksWithFilter(this.$route.query.tensach)
  }
}
</script>

<style>
.loading-custom {
  width: 80%;
  margin: auto;
}
</style>
