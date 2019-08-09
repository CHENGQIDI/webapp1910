import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import goto from './goto'
import shop from './shop'
import servers from './servers'
import mime from './mime'
import sea from './sea'
import deatil from './detail'
import newproduct from './newproduct'

import search from "./search"
import brand from "./brand"
import gift from "./gift"
import fen from "./fen"


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:"/home"
    },
    home,
    shop,
    servers,
    goto,
    mime,
    sea,
    deatil,
    newproduct,

    search,
    brand,
    gift,
    fen,
  
  ]
})
