import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugins from "./utils/message.plugins.js";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

Vue.config.productionTip = false;

Vue.use(Vuelidate, messagePlugins);

Vue.filter("date", dateFilter);

const firebaseConfig = {
  apiKey: "AIzaSyAjG8HsXjfMXHlkU-7cfxJ0rS9sLZUEn2c",
  authDomain: "vue-crm-9742a.firebaseapp.com",
  projectId: "vue-crm-9742a",
  storageBucket: "vue-crm-9742a.appspot.com",
  messagingSenderId: "93495960983",
  appId: "1:93495960983:web:1a47faecd3326fff59d0d2",
  measurementId: "G-N4XC3SCRF7"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);



// let app;

// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     app = 
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')