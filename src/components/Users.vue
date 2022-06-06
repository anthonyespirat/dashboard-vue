<script>
import { nextTick } from '@vue/runtime-core'
import users from '../lib/fake_user'
export default {
  data() {
    return {
      users: users,
      checkedUser: []
    }
  },
  methods: {
    async check(e) {
      let isChecked = e.srcElement.checked
      // SI isChecked true push dans un tableau, SINON SI if exist dans le tableau retiré l'element SINON return
      if (isChecked) this.checkedUser.push(e.target.name)
      else if (this.checkedUser.includes(e.target.name)) {
        this.checkedUser = this.checkedUser.filter((el) => el !== e.target.name)
      } else return
    }
  }
}
</script>

<template>
  <h1 class="title">Users</h1>
    <form class="action-group">
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
      <tr v-for="user of users" :key="user.id">
        <td>
          <input type='checkbox' :name="user.id" @change="check($event)">
        </td>
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
        <td>{{user.role}}</td>
        <td>{{user.email}}</td>
        <td></td>
      </tr>
    </tbody>
  
  </table>
</template>


<style scoped>
  table {
    width: 100%;
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