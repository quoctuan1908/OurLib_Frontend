<template>
  <FormValidate @submit.prevent="func(this.imgFile, this.bookData)" :validation-schema="bookSchema">
    <div class="mb-3">
      <label for="book-name" class="form-label">Name</label>
      <Field
        type="text"
        name="bookname"
        class="form-control"
        id="book-name"
        v-model="bookData.tensach"
      />
      <ErrorMessage name="bookname" class="error-feedback" />
    </div>
    <div class="mb-3">
      <label for="book-writer" class="form-label">Writer Name</label>
      <Field
        type="text"
        name="bookwriter"
        class="form-control"
        id="book-writer"
        v-model="bookData.tacgia"
      />
      <ErrorMessage name="bookwriter" class="error-feedback" />
    </div>
    <div class="mb-3">
      <label class="">Publisher Name</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="bookData.manxb"
        @click.prevent.once="fetchPublishers"
      >
        <option
          v-for="publisher in this.publishersList"
          :value="publisher._id"
          :key="publisher._id"
        >
          {{ publisher.tennxb }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="book-quantity" class="form-label">Quantity</label>
      <Field
        name="soquyen"
        type="number"
        class="form-control"
        id="book-quantity"
        min="1"
        max="100"
        v-model="bookData.soquyen"
      />
      <ErrorMessage name="quantity" class="error-feedback" />
    </div>
    <div class="mb-3">
      <label for="book-price" class="form-label">Price</label>
      <Field
        type="number"
        name="price"
        Fieldmode="decimal"
        class="form-control"
        id="book-price"
        min="0"
        max="10000"
        v-model="bookData.dongia"
      />
      <ErrorMessage name="price" class="error-feedback" />
    </div>
    <div>
      <label>Description</label>
      <textarea class="form-control" v-model="bookData.description"></textarea>
    </div>
    <div>
      <label>Image</label> <br />
      <Field type="file" class="form-control" id="file" name="file" v-model="imgFile"/>
      <ErrorMessage name="file" class="error-feedback" />
    </div>

    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
      {{ this.formButton }}
    </button>
  </FormValidate>
</template>

<script>
import publisherService from '@/services/publisher.service';
import { ErrorMessage, Field, Form as FormValidate } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'BookForm',
  props: ['data', 'formTitle', 'formButton', 'func'],
  components: {
    FormValidate,
    ErrorMessage,
    Field
  },
  data() {
    const bookSchema = yup.object().shape({
      bookname: yup
        .string()
        .required("Book's name must not be empty.")
        .min(1, "Book's name must be at least 1 character.")
        .max(100, 'Too much words.'),
      bookwriter: yup
        .string()
        .required("Book's name must not be empty.")
        .min(1, "Writer's name must be at least 1 character.")
        .max(100, 'Too much words.'),
      quantity: yup.number().min(1, 'Must be at least 1.').max(150, 'Must be under 150.'),
      price: yup
        .number()
        .min(1, 'Book must be at least 1 dollar.')
        .max(10000, 'Book must be under 10000 dollar.'),
      file: yup.mixed().required('File is required')
    })
    return {
      bookData: {},
      publishersList: [],
      bookSchema,
      imgFile: null
    }
  },
  watch: {
      // eslint-disable-next-line no-unused-vars
    data(newVal, oldVal) {
      this.bookData = newVal
    }
  },
  methods: {
    async fetchPublishers() {
      this.publishersList = await publisherService.getAll()

      console.log(this.publishersList)
    }
  }
}
</script>
