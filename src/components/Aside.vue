<script>


export default {
  data() {
    return {
     
    }
  },

}
</script>

<template>
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <router-link to="/">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
        <ul>
          <li><router-link to="/users/admin">Admin</router-link></li>
          <li><router-link to="/users/auth">Auth</router-link></li>
        </ul>
      </li>
    </ul>
    <!-- <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a class="is-active">Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a>Payments</a></li>
      <li><a>Transfers</a></li>
      <li><a>Balance</a></li>
    </ul> -->
  </aside>
</template>


<style scoped>
.menu {
  padding: 0 1em;
  border-right: 1px solid grey;
  height: 100vh;
  position: fixed;
  width: 175px;
}
.menu-list a:hover {
  background-color: #485fc781;
}
</style>