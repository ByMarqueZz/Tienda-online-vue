import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { VueFire, VueFireAuth } from 'vuefire'
import {firebaseApp} from './firebase.js'
import { auth } from './firebase.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import Home from './components/Home.vue'
import Mujer from './components/Mujer.vue'
import Hombre from './components/Hombre.vue'
import Accesorios from './components/Accesorios.vue'

import './assets/style.css'

var estaAutenticado = false
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    estaAutenticado = true
    // ...
  } else {
    // User is signed out
    // ...
    estaAutenticado = false
    router.push('/')
  }
});
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mujer',
    component: Mujer
  },
  {
    path: '/hombre',
    component: Hombre
  },
  {
    path: '/accesorios',
    component: Accesorios
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
app.use(router)
app.mount('#app')