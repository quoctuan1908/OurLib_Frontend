<template>
  <div class="container">
    <div class="row">
      <DashBoardBlock :dashBoardTitle="`ACCOUNTS`" :data="this.numOfAccounts.num"></DashBoardBlock>
      <DashBoardBlock :dashBoardTitle="`BOOKS`" :data="this.numOfBooks.num"></DashBoardBlock>
      <DashBoardBlock
        :dashBoardTitle="`PUBLISHERS`"
        :data="this.numOfPublishers.num"
      ></DashBoardBlock>
      <DashBoardBlock :dashBoardTitle="`VIEWS TOTAL`"></DashBoardBlock>
    </div>
    <TrackingTable
      v-if="this.isLoaded"
      :data="this.processingList"
      :tableLabel="`REQUESTS`"
      :acceptRequest="this.acceptRequest"
      :refuseRequest="this.refuseRequest"
      class="overflow-auto"
    ></TrackingTable>
    <TrackingTable
      v-if="this.isLoaded"
      :data="this.borrowingList"
      :tableLabel="`BORROWING`"
      :refuseRequest="this.refuseRequest"
      :acceptRequest="this.acceptReturn"
      class="overflow-auto"
    ></TrackingTable>
    <TrackingTable
      v-if="this.isLoaded"
      :data="this.returnedList"
      :tableLabel="`RETURNED`"
      :refuseRequest="this.refuseRequest"
      class="overflow-auto"
    ></TrackingTable>
  </div>
</template>

<script>
import bookstrackingService from '@/services/admin/bookstracking.service'
import bookService from '@/services/book.service'
import publisherService from '@/services/publisher.service'
import userService from '@/services/user.service'
import moment from 'moment'
import DashBoardBlock from './DashBoardBlock.vue'
import TrackingTable from './TrackingTable.vue'

export default {
  name: 'DashBoard',
  data() {
    return {
      trackingList: [],
      processingList: [],
      borrowingList: [],
      returnedList: [],
      numOfAccounts: 0,
      numOfBooks: 0,
      numOfPublishers: 0,
      isLoaded: false
    }
  },
  components: {
    TrackingTable,
    DashBoardBlock
  },
  methods: {
    refreshList() {
      this.getBorrowedBooks()
      this.getNumOfAccounts()
    },
    format_date(array) {
      array.forEach((element) => {
        element.ngayyeucau = moment(String(element.ngayyeucau)).format('DD/MM/YYYY')
        if (element.ngaymuon) {
          element.ngaymuon = moment(String(element.ngaymuon)).format('DD/MM/YYYY')
          element.hantra = moment(String(element.hantra)).format('DD/MM/YYYY')
          if (element.ngaytra) {
            element.ngaytra = moment(String(element.ngaytra)).format('DD/MM/YYYY')
          }
        }
      })
    },
    async getBorrowedBooks() {
      this.trackingList = await bookstrackingService.getAll()
      this.processingList = []
      this.borrowingList = []
      this.returnedList = []
      this.format_date(this.trackingList)
      this.trackingList.forEach((record) => {
        if (record.trangthai === 'processing') this.processingList.push(record)
        else if (record.trangthai === 'borrowing') this.borrowingList.push(record)
        else this.returnedList.push(record)
      })
      this.isLoaded = true
    },
    async getNumOfAccounts() {
      this.numOfAccounts = await userService.getQuantity()
      this.numOfBooks = await bookService.getQuantity()
      this.numOfPublishers = await publisherService.getQuantity()
    },
    async acceptRequest(id) {
      const result = await bookstrackingService.acceptRequest(id)
      if (result.statusCode == 400) {
        this.emitter.emit('popUpMessage', { message: 'Out of stock!' })
      } else {
        this.refreshList()
        this.emitter.emit('popUpMessage', { message: 'Request Accepted!' })
      }
    },
    async refuseRequest(id) {
      await bookstrackingService.refuseRequest(id)
      this.emitter.emit('popUpMessage', { message: 'Request Deleted!' })
      await this.refreshList()
    },
    async acceptReturn(id) {
      const result = await bookstrackingService.acceptReturn(id)
      if (result.statusCode == 400) {
        this.emitter.emit('popUpMessage', { message: result.message })
      } else {
        this.refreshList()
        this.emitter.emit('popUpMessage', { message: 'Request Accepted!' })
      }
    }
  },
  created() {
    this.refreshList()
  }
}
</script>

<style></style>
