<template>
  <div class="border block">
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
.block {
  width: 25%;
  text-align: center;
  background-color: white;
}
</style>
