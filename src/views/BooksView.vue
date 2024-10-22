<template>
  <div class="">
    <div>
      <select @change="this.sortSelect" v-model="this.sortOption">
        <option value="tensach">Order by Name</option>
        <option value="tacgia">Order by Writer Name</option>
        <option value="namxuatban">Order by Release Year</option>
      </select>
    </div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide transition-02">
      <div class="carousel-inner transition-02 default-height">
        <VueSkeletonLoader
          type="image@2"
          :loading="!this.isReady"
          height="300px"
          class="loading-custom"
        ></VueSkeletonLoader>
        <div
          v-for="index in Math.ceil(this.books.length / 10)"
          :class="`carousel-item transition-02 ` + (index - 1 == 0 ? `active` : ``)"
          :key="index"
        >
          <BookList
            :booksList="this.books.slice((index - 1) * 10, (index - 1) * 10 + 10)"
            :size="2"
            class="d-flex flex-wrap border justify-content-center overflow-auto"
          ></BookList>
        </div>
      </div>
      <div class="card-buttons-custom">
        <button
          class="button-custom"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          @click="
            toOtherPage(
              this.isActive - 1 >= 0 ? this.isActive - 1 : Math.ceil(this.books.length / 10) - 1
            )
          "
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button
          v-for="index in Math.ceil(this.books.length / 10)"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleDark"
          :data-bs-slide-to="index - 1"
          :class="`button-custom ` + (this.isActive == index - 1 ? ` active-btn` : '')"
          aria-current="true"
          aria-label="Slide 1"
          @click="toOtherPage(index - 1)"
        >
          {{ index }}
        </button>
        <button
          class="button-custom"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          @click="toOtherPage((this.isActive + 1) % Math.ceil(this.books.length / 10))"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue'
import BookService from '@/services/book.service'
import VueSkeletonLoader from 'vue3-skeleton-loader'
const booksList = []

export default {
  data() {
    return {
      books: booksList,
      numberOfBooksInOneList: 8,
      sortOption: 'tensach',
      isActive: 0,
      isReady: false
    }
  },
  components: {
    BookList,
    VueSkeletonLoader
  },

  methods: {
    async getBooks() {
      const result = await BookService.getAll()
      this.books = result
      this.isReady = true
    },
    refreshList() {
      this.getBooks()
    },
    checkRole() {
      if (localStorage.getItem('role') === 'admin') {
        this.$router.push({ name: 'admin' })
      }
    },
    toOtherPage(index) {
      this.isActive = index
      console.log(index)
    },
    sortSelect() {
      // eslint-disable-next-line no-unused-vars
      this.books.sort((a, b) => `a.${this.sortOption}`.localeCompare(`b.${this.sortOption}`))
    }
  },
  mounted() {
    this.refreshList()
    this.checkRole()
  }
}
</script>

<style>
.buttons-card-custom {
  text-align: center;
}
.card-buttons-custom {
  text-align: center;
}
.button-custom {
  border: none;
  margin: 10px;
  font-size: 20px;
  border-radius: 50%;
  width: 40px;
}
.active-btn {
  background-color: rgb(136, 136, 125);
}
.transition-02 {
  transition-duration: 0.3s;
}
.default-height {
  min-height: 800px;
}
.loading-custom {
  width: 80%;
  margin: auto;
}
</style>
