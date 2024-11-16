<template>
  <div class="p-3">
    <!-- Button trigger modal -->

    <div class="row">
      <div class="col-6">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="col-6 d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="this.filter"
        />
        <button class="btn btn-outline-success" type="submit" @click.prevent="this.filterData">
          Load
        </button>
      </div>
    </div>
    <!-- Modal1 -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Book</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <BookForm
              :data="{}"
              :formTitle="'Add Book'"
              :formButton="'Add Book'"
              :func="this.submit"
            ></BookForm>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal2 -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex">
            <h5 class="modal-title col-6" id="exampleModalLabel2">Book Details</h5>
            <button
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="this.delete(this.clickedBook._id)"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <BookForm
              :formTitle="'Book Detail'"
              :formButton="'Update'"
              :data="this.clickedBook"
              :func="this.updateBook"
            ></BookForm>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex mt-4 text-center">
      <ul class="justify-content-center">
        <li v-for="book in this.books" :key="book" class="liCustom">
          <BookCard
            :image="book.image || null"
            :data="book"
            :func="popUpChange"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            class="d-flex overflow-auto"
            :size="2"
          ></BookCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bookService from '@/services/book.service';
import axios from 'axios';
import BookCard from '../BookCard.vue';
import BookForm from '../BookForm.vue';

export default {
  name: 'BookSBoard',
  components: {
    BookForm,
    BookCard
  },
  data() {
    return {
      books: [],
      clickedBook: null,
      filter: '',
      isLoaded: false
    }
  },
  methods: {
    async getBooks() {
      const result = await bookService.getAll()
      this.books = result
      this.isLoaded = true
    },
    refreshList() {
      this.getBooks()
    },
    popUpChange(book) {
      this.clickedBook = book
      console.log(this.clickedBook)
    },
    async submit(imgFile, bookData) {
      const formData = new FormData()
      formData.append('data', JSON.stringify(bookData))
      formData.append('file', imgFile)
      await axios.post('http://localhost:3000/api/book/', formData, {
          headers: {
            'Content-Type': `multipart/form-data`
          }
        })
        .then((res) => {
          console.log(res)
        })
      this.emitter.emit('popUpMessage', { message: 'Add book successfully.' })
      this.refreshList()
    },
    async updateBook(imgFile, bookData) {
      const formData = new FormData()
      formData.append('data', JSON.stringify(bookData))
      console.log(imgFile)
      formData.append('file', imgFile)
      await axios.put('http://localhost:3000/api/book/get-one/' + this.clickedBook._id, formData, {
          headers: {
            'Content-Type': `multipart/form-data`
          }
        })
        .then((res) => {
          console.log(res)
        })
      this.emitter.emit('popUpMessage', { message: 'Updated successfully.' })
    },
    async delete(id) {
      await bookService.delete(id)
      this.emitter.emit('popUpMessage', { message: 'Deleted.' })
      this.refreshList()
    }
  },
  mounted() {
    this.refreshList()
  }
}
</script>
