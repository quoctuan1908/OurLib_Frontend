<template>
  <div class="row g-4" @click.prevent="this.func(this.data)">
    <div class="col">
      <div :class="`card-custom`">
        <img
          :src="this.apiImagePath + this.image"
          :class="`card-image-top rounded size-${this.size - 1}`"
          alt="Skyscrapers"
        />
        <div class="card-body">
          <h5 class="card-title card-title-custom text-truncate" :title="this.data.tensach">
            {{ this.data.tensach }}
          </h5>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated {{ format_date(this.data.updateAt) }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BookCard',
  props: ['image', 'data', 'func', 'size'],
  data() {
    return {
      apiImagePath: 'http://localhost:3000/public/data/uploads/'
    }
  },
  methods: {
    format_date(date) {
      return moment(String(date)).format('DD/MM/YYYY HH:MM:SS')
    }
  }
}
</script>

<style>
.size-1 {
  width: 12rem;
  height: 17rem;
  object-fit: cover;
}
.size-2 {
  width: 16.5rem;
  height: 22rem;
  object-fit: cover;
}
.card-custom {
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  margin: 4px;
  width: 200px;
}
</style>
