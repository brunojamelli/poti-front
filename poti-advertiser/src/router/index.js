import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/forms/Login.vue'
import AdRegistration from '../views/forms/AdRegistration.vue'
import AdvertiserRegistration from '../views/forms/AdvertiserRegistration.vue'
import ValidatedAds from '../views/ValidatedAds.vue'
import ActivatedAds from '../views/ActivatedAds.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: Login
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Profile
  },
  {
    path: '/registro-anuncio',
    name: 'registro-anuncio',
    component: AdRegistration
  },
  {
    path: '/registro-anunciante',
    name: 'registro-anunciante',
    component: AdvertiserRegistration
  },
  {
    path: '/anuncios-validados',
    name: 'anuncios-validados',
    component: ValidatedAds
  },
  {
    path: '/anuncios-ativos',
    name: 'anuncios-ativos',
    component: ActivatedAds
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
