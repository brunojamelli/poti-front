import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administration from '../views/Administration.vue'
import AdministrationRegister from '../views/AdministrationRegister.vue'
import Pending from '../views/Pending.vue'
import Advertiser from '../views/Advertiser.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administradores',
    name: 'administradores',
    component: Administration
  },
  {
    path: '/registro-administradores',
    name: 'registro-administradores',
    component: AdministrationRegister
  },
  {
    path: '/pendentes',
    name: 'pendentes',
    component: Pending
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: Login
  },
  {
    path: '/anunciantes',
    name: 'anunciantes',
    component: Advertiser
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
