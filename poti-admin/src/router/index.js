import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administration from '../views/Administration.vue'
import AdministrationRegister from '../views/AdministrationRegister.vue'
import Pending from '../views/Pending.vue'
import Valids from '../views/Valids.vue'
import Advertiser from '../views/Advertiser.vue'
import Login from '../views/Login.vue'
import DetailAdvertiser from '../views/detail/DetailAdvertiser'

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
    path: '/validados',
    name: 'validados',
    component: Valids
  },
  {
    path: '/detalhes-anuncio',
    name: 'detalhes-anuncio',
    component: DetailAdvertiser,
    props: true,
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
