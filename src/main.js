import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Import the Vue Router instance from the router.js file

Vue.config.productionTip = false;

// Create the Vue app instance and use the Vue Router instance
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
