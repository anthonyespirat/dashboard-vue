<script>
export default {
  props: ['user']
  }
</script>

<template>
  <tr class="params">
    <td colspan="6" class="button-container">
     <div class="button-container">
       <button class="">DELETE</button>
     </div>
    </td>
  </tr>
</template>

<style scoped>
td {
  border: none;
}
.button-container {
text-align: right;
}
  .username {
    display: table;
    font-weight: 600;
  }
</style>