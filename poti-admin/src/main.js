import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import TabMenu from "primevue/tabmenu";
import OrderList from 'primevue/orderlist';

Vue.component('TabMenu', TabMenu);
Vue.component('OrderList', OrderList);

Vue.config.productionTip = false
Vue.use(PrimeVue);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
