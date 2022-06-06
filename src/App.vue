<script>
import Layout from './components/Layout.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  components: {
    Layout,
    Dashboard
  }
}
</script>

<template>
  <Layout>
    <router-view></router-view>
    
  </Layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
