<script>
import users from '../lib/fake_user'
import UserParams from './UserParams.vue'
import User from './User.vue'
export default {
  components: {
    UserParams,
    User
  },
  data() {
    return {
      users: users,
      checkedUser: [],
      filter: undefined
    }
  },
  watch: {
    '$router.currentRoute': {
      handler: function({_value:route}) {
        this.filter = route.params.filter
      },
      deep: true
    }
  },
  methods: {
    async check(e) {
      let isChecked = e.srcElement.checked
      // SI isChecked true push dans un tableau, SINON SI if exist dans le tableau retiré l'element SINON return
      if (isChecked) this.checkedUser.push(e.target.name)
      else if (this.checkedUser.includes(e.target.name)) {
        this.checkedUser = this.checkedUser.filter((el) => el !== e.target.name)
      }
    }
  }, 
  computed: {
    filterUsers() {
      this.users = users
      this.filter = this.$router.currentRoute._value.params.filter
      if(this.filter && this.filter === 'admin') return this.users.filter(el => el.role === 'admin')
      else if (this.filter === 'auth') return this.users.filter(el => el.role === 'auth') 
      else return users
    }
  },
}
</script>

<template>
  <h1 class="title">Users</h1>
    <form @submit.prevent="" class="action-group">
      <label for='action'>Group Action</label>
      <div class='wrapper'>
        <select name='action' id='action'>
          <option value=''>-- Choose action --</option>
          <option value='delete'>Delete</option>
        </select>
        <button>Submit</button>
      </div>
    </form>

  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>id</th>
        <th>username</th>
        <th>role</th>
        <th>email</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="user of filterUsers" :key="user.id">
        <User :user="user" :check="check" />
      </template>
    </tbody>
  
  </table>
</template>


<style scoped>
  table {
    width: 100%;
    border-collapse : collapse;
  }
  .action-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1em;
  }
  .action-group label {
    font-weight: 600;
    font-size: .9em;
  }
  .action-group .wrapper {
    display: flex;
    gap: .8em;
  }
  .action-group button {
    background: none;
    border: 1px solid grey;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color .2s, color .2s;
  }
  .action-group button:hover {
    background-color: #485fc7 ;
    color: #FCFCFC;
    border: 1px solid #485fc7;
  }
  .action-group select {
    padding: .2em 1em;
    max-width: 220px;
    border-radius: 5px;
  }
  .action-group select :nth-child(1) {
    font-style: italic;
  }
</style>