<script>
import { RouterView } from 'vue-router'
import FooterContext from './components/FooterContext.vue'
import NavBar from './components/NavBar.vue'
import PopUpMessage from './components/PopUpMessage.vue'

export default {
  components: {
    RouterView,
    NavBar,
    PopUpMessage,
    FooterContext
  }
}
</script>

<template>
  <header v-show="!$route.meta.is_admin">
    <NavBar></NavBar>
  </header>

  <main :class="!$route.meta.is_admin ? `mt-7` : ``">
    <PopUpMessage></PopUpMessage>
    <RouterView class="md-width" />
  </main>

  <footer v-show="!$route.meta.is_admin">
    <FooterContext></FooterContext>
  </footer>
</template>

<style>
.md-width {
  width: 80%;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(224, 229, 224);
  min-height: 700px;
}
.main {
  background-color: rgb(230, 230, 217);
}

.mt-7 {
  margin-top: 85px;
}
</style>
