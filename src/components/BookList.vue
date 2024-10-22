<template>
  <ul class="">
    <li v-for="book in books" :key="book" class="li-custom">
      <BookCard
        :image="book.image || null"
        :data="book"
        :func="() => this.goToDetailsPage(book._id)"
        :size="this.size"
        class=""
      ></BookCard>
    </li>
  </ul>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import 'vue3-skeleton-loader/dist/style.css'
export default {
  name: 'BookList',
  data() {
    return {
      books: this.booksList
    }
  },
  props: ['booksList', 'size'],
  components: {
    BookCard
  },

  methods: {
    goToDetailsPage(bookId) {
      this.$router.push({
        name: 'book.detail',
        query: {
          id: bookId
        }
      })
    }
  },
  updated() {
    this.books = this.booksList
  }
}
</script>

<style>
.li-custom {
  list-style-type: none;
}
.ul-custom {
  overflow-x: scroll;
}
</style>
