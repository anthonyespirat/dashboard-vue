<script>
import Aside from './Aside.vue'
export default {
  components: {
    Aside
  }
}
</script>

<template>
  <div class="columns is-mobile" style="margin: 0;">
    <div class="column is-narrow aside-container">
      <Aside />
    </div>
    <main class="column">
      <slot />
    </main>

  </div>
</template>

<style scoped>
.container {
  margin: 0 ;
}
.aside-container {
    width: 200px !important;
}

</style>