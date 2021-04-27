import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login.vue"
import game from "../views/game.vue"
import home from "../views/home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '/login',
    component: Login
  },
  {
    path: '/game',
    name: '/game',
    component: game
  },
  {
    path: '/',
    name: '/home',
    component: home
  }
  
];

const router = new VueRouter({
  routes
})

export default router
