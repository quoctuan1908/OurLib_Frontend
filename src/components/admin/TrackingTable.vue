<template>
  <div class="m-4">
    <form class="d-flex">
      <h4 class="col-md-8">{{ this.tableLabel }}</h4>
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
          <th></th>
          <th scope="col" v-for="col in this.tableCols" :key="col" class="">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(record, index) in this.filtedData" :key="record">
          <td>{{ index + 1 }}</td>
          <td>{{ record._id }}</td>
          <td :title="record.masach">{{ record.tensach }}</td>
          <td :title="record.madocgia">{{ record.tendocgia }}</td>
          <td>{{ record.ngayyeucau }}</td>
          <td>{{ record.ngaymuon }}</td>
          <td>{{ record.hantra }}</td>
          <td>{{ record.ngaytra }}</td>
          <td>
            <div>
              <button
                class="btn btn-success"
                @click.prevent="async () => {await this.acceptRequest(record._id); this.refreshBooks()}"
                v-show="!(record.trangthai == 'returned') && this.acceptRequest !== null"
              >
                <i class="fa-regular fa-circle-check"></i>
              </button>
              <button 
                class="btn btn-danger"
                @click.prevent="async () => {await this.refuseRequest(record._id); this.refreshBooks()}"
                v-show="this.refuseRequest !== null && !(record.trangthai == 'borrowing')"
                >
                <i class="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TrackingTable',
  props: ['data', 'nextTable', 'tableLabel', 'acceptRequest', 'refuseRequest'],
  data() {
    return {
      tableCols: [
        'ID',
        'Book',
        'Reader',
        'Request Date',
        'Borrowed Date',
        'Term',
        'Returned Date',
        'Action'
      ],
      filter: '',
      filtedData: [],
      count: 1
    }
  },
  methods: {
    filterData() {
      this.filtedData = this.data.filter(
        (record) =>
          record.tensach.toLowerCase().includes(this.filter.toLowerCase()) ||
          record.tendocgia.toLowerCase().includes(this.filter.toLowerCase()) ||
          record._id.toLowerCase().includes(this.filter.toLowerCase()) ||
          record.masach.toLowerCase().includes(this.filter.toLowerCase()) ||
          record.madocgia.toLowerCase().includes(this.filter.toLowerCase())
      )
      console.log(this.data)
    },
    refreshBooks() {
      this.filtedData = this.data
      
    }
  },
  mounted() {
    this.filterData()
    console.log(new Date())
    console.log(this.data)
  }
}
</script>

<style></style>
