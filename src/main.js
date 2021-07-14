import Vue from "vue";
import App from "./App.vue";
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
axios.get('/user?ID=12345');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
