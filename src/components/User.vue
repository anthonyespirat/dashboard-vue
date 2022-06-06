
<script>
import UserParams from './UserParams.vue'
export default {
  components: {
    UserParams
    },
  props: ['user', 'check'],
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showParams() {
      this.isShow = !this.isShow
    }
  }

  }
</script>

<template>
  <tr>
    <td>
      <input type='checkbox' :name="this.user.id" @change="check($event)">
    </td>
    <td>{{this.user.id}}</td>
    <td>{{this.user.username}}</td>
    <td>{{this.user.role}}</td>
    <td>{{this.user.email}}</td>
    <td>
      <button @click="showParams">&#8628;</button>
    </td>
  </tr>
  <UserParams :user="this.user" v-if='isShow' />
</template>

<style>

</style>