import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

import Buefy from 'buefy';

// import 'buefy/lib/buefy.css'

// Vue.use(Buefy)

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,

  store,

  Buefy,

}).$start();
