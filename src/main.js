// точка входа
import Vue from 'vue' // функция , создающая экземпляр приложения
import App from './App.vue' // основной капмонент приложения
/*
Компонент включает в себя:
1. шаблон компонента
*/
import router from './router' // библиотека
import store from './store' // бибилионте vuex

Vue.config.productionTip = false

/**
 * Подключаются компонент и библиоетки и монтируются в '#app' (div в index.html)
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')