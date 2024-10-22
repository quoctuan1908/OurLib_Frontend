<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-4 text-center">
        <img :src="apiImagePath + this.data.image" class="card-image-top image-size borderCustom" />
        <div class="">
          <button class="col btn-custom" @click.prevent="borrowEvent">Borrow</button>
          <button class="col btn-custom">Reviews</button>
        </div>
      </div>
      <div class="col-md-8">
        <h1>{{ this.data.tensach }}</h1>
        <h6>
          <i class="fa-solid fa-star yellow"></i>{{ this.data.rate + '/10' }},
          <i class="fa-solid fa-eye"></i>{{ this.data.view }}
        </h6>
        <div class="">
          <p class="fs-2 fw-normal">{{ this.data.tacgia }}</p>
          <p class="fs-3">Published in: {{ this.publishedDate }}</p>
          <p class="fs-4">Remains: {{ this.data.soquyen || 'out of stock' }}</p>
          <span v-for="tag in this.data.category" :key="tag">tag,</span>
          <div class="">{{ this.data.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DetailCard',
  props: {
    data: { type: Object, required: true },
    borrowEvent: { type: Function }
  },
  data() {
    return {
      apiImagePath: 'http://localhost:3000/public/data/uploads/',
      publishedDate: null
    }
  },
  methods: {
    format_date(value) {
      if (value) {
        this.publishedDate = moment(String(value)).format('DD/MM/YYYY')
      }
    }
  },
  updated() {
    this.format_date(this.data.namxuatban)
  }
}
</script>

<style>
.yellow {
  color: gold;
}
.w-full {
  width: 100%;
  border: 1px solid black;
}

.btn-custom {
  width: 100%;
  background-color: rgb(56, 156, 91);
  color: white;
  border-radius: 30px;
  margin-top: 10px;
  border: none;
  padding: 5px;
}
.btn-custom:hover {
  opacity: 0.8;
}
.borderCustom {
  border-radius: 0px 15px 15px 0px;
  box-shadow: 2px 2px 10px rgb(133, 131, 131);
}
.image-size {
  width: 16.5rem;
  height: 22rem;
  object-fit: cover;
}
</style>
