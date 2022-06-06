import Dashboard from './components/Dashboard.vue'
import Users from './components/Users.vue'
import { createRouter, createWebHistory  } from 'vue-router'

const Home = {template: '<div> CACA </div>'}
const routes = [
  { path: '/', component: Dashboard },
  { path: '/users', component: Users },

]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'is-active',
  routes,
})

export default router;