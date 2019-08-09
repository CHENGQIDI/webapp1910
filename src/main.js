import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from './store'
import '../public/common.css'
import '../public/css/iconfont/iconfont.css'
import "../public/css/shop/font_7h6qte4jb9t/iconfont.css"
import Swiper from 'swiper'
import axios from 'axios'
import Fenhaeder from "components/fenhaeder"
import BScroll from "components/bscroll"
import Navtop from "components/navtop"
import VueTouch from "vue-touch";
import proxy from "http-proxy-middleware"
Vue.config.productionTip = false
Vue.use(VueTouch,{name:'v-touch'})
Vue.component(Fenhaeder.name,Fenhaeder)
Vue.component(BScroll.name,BScroll)
Vue.component(Navtop.name,Navtop)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
