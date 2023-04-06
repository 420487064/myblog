import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from '@/store'
import VueParticles from 'vue-particles'
import VueCookies from 'vue-cookies'
import { addrouter } from '@/router'
Vue.use(VueCookies)
Vue.use(VueParticles)
Vue.use(ElementUI);
addrouter()

Vue.config.productionTip = false


new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
