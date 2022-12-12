import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.prototype.$axios = axios;
Vue.prototype.moment = moment;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyC12gVsttjRWcAt05eX-NJFAbvdoLVuCZI',
  authDomain: 'vueproject-92db6.firebaseapp.com',
  projectId: 'vueproject-92db6',
  storageBucket: 'vueproject-92db6.appspot.com',
  messagingSenderId: '566602180023',
  appId: '1:566602180023:web:f3285f04d47e76224ab432',
};

// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
