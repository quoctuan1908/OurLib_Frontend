<template>
  <div class="m-4">
    <form class="d-flex">
      <h4 class="col-md-8">USERS</h4>
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
        <tr
          scope="row"
          v-for="(record, index) in this.filtedData"
          :key="record"
          @click="$emit('selectedUser', record)"
          class="userTableRow "
        >
          <td >{{ index + 1 }}</td>
          <td>{{ record._id }}</td>
          <td :title="record.madocgia">{{ record.holot + ' ' + record.ten }}</td>
          <td>{{ record.taikhoan }}</td>
          <td>{{ record.role }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UsersTable',
  props: ['data'],
  data() {
    return {
      tableCols: ['ID', 'Name', 'Username', 'Role'],
      filter: '',
      filtedData: []
    }
  },
  methods: {
    filterData() {
      this.filtedData = this.data.filter(
        (record) =>
          (record.holot + ' ' + record.ten).toLowerCase().includes(this.filter.toLowerCase()) ||
          record.taikhoan.toLowerCase().includes(this.filter.toLowerCase()) ||
          record._id.toLowerCase().includes(this.filter.toLowerCase())
      )
    }
  },
  mounted() {
    this.filterData()
  }
}
</script>

<style>
.userTableRow:hover {
  cursor: pointer;
  opacity: 0.6;
}
</style>
