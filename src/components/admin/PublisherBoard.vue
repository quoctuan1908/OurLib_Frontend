<template>
  <div class="m-4">
    <form class="d-flex">
      <h4 class="col-md-8">Pulishers</h4>
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
    </form>
    <table class="table border overflow-auto">
      <thead class="table-dark">
        <tr>
          <th>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </th>
          <th scope="col" v-for="col in this.tableCols" :key="col" class="">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(record, index) in this.filtedData" :key="record" @click="() => {this.clickedPublisher = record}">
          <td>{{ index + 1 }}</td>
          <td>{{ record._id }}</td>
          <td :title="record.tennxb">{{ record.tennxb }}</td>
          <td :title="record.diachi">{{ record.diachi }}</td>
          <td>
            <div>
              <button
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn btn-danger" @click.prevent="this.deletePublisher(record)">
                <i class="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal1 -->
    <div
      class="modal fade"
      id="exampleModal3"
      tabindex="-1"
      aria-labelledby="exampleModalLabel3"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel3">New Publisher</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <PublisherForm :data="{}" :submit="this.createPublisher"></PublisherForm>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal2 -->
    <div
      class="modal fade"
      id="exampleModal4"
      tabindex="-1"
      aria-labelledby="exampleModalLabel4"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel4">Publisher Information</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <PublisherForm :data="this.clickedPublisher" :submit="this.changePublisherProfile"></PublisherForm>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import publisherService from '@/services/publisher.service';
import PublisherForm from './PublisherForm.vue';

export default {
  name: 'PublisherBoard',
  components: {
    PublisherForm
  },
  data() {
    return {
      tableCols: [
        'ID',
        'Name',
        'Address',
        'Action'
      ],
      filter: '',
      filtedData: [],
      count: 1,
      data: [],
      clickedPublisher: {}
    }
  },
  methods: {
    async getPublishers() {
      this.filtedData = await publisherService.getAll();
    },
    filterData() {
      this.filtedData = this.data.filter(
        (record) =>
          record.tennxb.toLowerCase().includes(this.filter.toLowerCase()) ||
          record._id.toLowerCase().includes(this.filter.toLowerCase()) ||
          record.diachi.toLowerCase().includes(this.filter.toLowerCase())
      )
    },
    refreshBooks() {
      this.getPublishers()
      this.filtedData = this.data
    },
    async createPublisher(publisher) {
      await publisherService.createPublisher(publisher)
      this.emitter.emit('popUpMessage', { message: "Add publisher successfully!" })
      await this.refreshBooks()
    },
    async changePublisherProfile(publisherData) {
      await publisherService.changePublisherData(publisherData)
      this.emitter.emit('popUpMessage', { message: "Change successfully!" })
    },
    async deletePublisher(publisher) {
      await publisherService.deletePublisher(publisher._id)
      this.emitter.emit('popUpMessage', { message: "Delete publishers " + publisher.tennxb + " successfully!" })
      await this.refreshBooks()
    }
  },
  mounted() {
    this.getPublishers()
  }
}
</script>

<style></style>
