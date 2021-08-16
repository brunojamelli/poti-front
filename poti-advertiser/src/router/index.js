import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/forms/Login.vue'
import AdRegistration from '../views/forms/AdRegistration.vue'
import AdvertiserRegistration from '../views/forms/AdvertiserRegistration.vue'
import PhotoRegistration from '../views/forms/PhotoRegistration.vue'
import ValidatedAds from '../views/ValidatedAds.vue'
import ActivatedAds from '../views/ActivatedAds.vue'
import AdDetails from '../views/AdDetails.vue'
import PublicListing from '../views/PublicListing.vue'
import PublicAdDetails from '../views/PublicAdDetails.vue'
import AdvertiserEdit from '../views/forms/AdvertiserEdit.vue'
import ResetPassword from '../views/forms/ResetPassword.vue'

import beforeEach from './beforeEach'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detalhes-anuncio',
    name: 'detalhes-anuncio',
    component: AdDetails,
    props: true,
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
    path: '/cadastro-fotos',
    name: 'cadastro-fotos',
    component: PhotoRegistration,
    props: true
  },
  {
    path: '/listagem-publica',
    name: 'listagem-publica',
    component: PublicListing,
  },
  {
    path: '/detalhe-publico',
    name: 'detalhe-publico',
    component: PublicAdDetails,
    props: true
  },
  {
    path: '/editar-contato',
    name: 'editar-contato',
    component: AdvertiserEdit,
    props: true
  },
  {
    path: '/alterar-senha',
    name: 'alterar-senha',
    component: ResetPassword
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

router.beforeEach(beforeEach);

export default router
