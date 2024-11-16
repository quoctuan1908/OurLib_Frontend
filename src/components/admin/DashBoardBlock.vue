<template>
  <div class="border block2 ">
    <h3>{{ this.dashBoardTitle }}</h3>
    <p>{{ this.data }}</p>
  </div>
</template>

<script>
export default {
  name: 'DashBoardBlock',
  props: ['dashBoardTitle', 'data']
}
</script>

<style>
.block2 {
  width: 33%;
  text-align: center;
  background-color: white;
}
</style>
