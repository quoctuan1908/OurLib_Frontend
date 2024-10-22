<template>
  <main class="">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/background/background.jpg" class="banner" alt="..." />
          <div class="carousel-caption d-none d-md-block carousel-caption-custom">
            <h5 class="label-custom">Welcome to OurLib!</h5>
            <p class="context-custom">
              We are thrilled to have you here, where a world of knowledge, imagination, and
              discovery awaits. Whether you’re a lifelong reader, a curious learner, or someone
              seeking a quiet place to reflect, our collection of books, resources, and programs is
              designed to inspire and enrich your experience.
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/background/istockphoto.jpg" class="d-block banner" alt="..." />
          <div class="carousel-caption d-none d-md-block carousel-caption-custom">
            <h5 class="label-custom">Welcome to OurLib!</h5>
            <p class="context-custom">
              Explore our vast array of materials, participate in engaging events, and connect with
              fellow community members.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/background/istockphoto-2.jpg"
            class="d-block w-100 banner"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block carousel-caption-custom">
            <h5 class="label-custom">Welcome to OurLib!</h5>
            <p class="context-custom">
              Together, let’s celebrate the joy of reading and the lifelong journey of learning!
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h1>Top Book</h1>
    <VueSkeletonLoader type="image@1" :loading="!this.isReady" height="200px"></VueSkeletonLoader>
    <BookList
      :booksList="this.books.splice(0, 10)"
      :size="2"
      class="d-flex overflow-auto"
    ></BookList>
  </main>
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
      console.log(this.books)
    },
    refreshList() {
      this.getBooks()
    },
    checkRole() {
      if (localStorage.getItem('role') === 'admin') {
        this.$router.push({ name: 'admin' })
      }
    },
    goToDetailsPage(bookId) {
      this.$router.push({
        name: 'book.detail',
        query: {
          id: bookId
        }
      })
    }
  },
  mounted() {
    this.refreshList()
    this.checkRole()
  }
}
</script>

<style>
.bannerCustom {
  height: 450px;
  width: 100%;
}
.ulCustom {
  flex-wrap: wrap;
  display: flex;
}
.liCustom {
  display: inline-block;
  list-style-type: none;
}

.banner {
  width: 100%;
  overflow-y: hidden;
  height: 380px;
  object-position: top;
  filter: blur(3px);
}

.carousel-caption-custom {
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.4);
}

.label-custom {
  font-weight: 900;
  font-size: 35px;
  color: white;
}

.context-custom {
  color: white;
}
</style>
