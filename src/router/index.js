import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import Cart from '../views/Cart.vue';

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: Home
  // },
  {
    path: '/',
    component: Catalog
  },
  {
    path: '/Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router