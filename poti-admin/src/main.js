import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
// // Importing the Nova Light PrimeVue theme styles
// import 'primevue/resources/themes/nova-light/theme.css';

// Importing the base PrimeVue component styles
import 'primevue/resources/primevue.min.css';

// Importing the base PrimeIcon styles
import 'primeicons/primeicons.css';
import TabMenu from "primevue/tabmenu";
import store from './store'

Vue.component('TabMenu', TabMenu);

Vue.config.productionTip = false
Vue.use(PrimeVue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
