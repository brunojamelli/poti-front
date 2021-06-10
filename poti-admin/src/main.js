import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import TabMenu from "primevue/tabmenu";
Vue.component('TabMenu', TabMenu);
Vue.config.productionTip = false
Vue.use(PrimeVue);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
