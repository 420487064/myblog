import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueCookies from 'vue-cookies'

import Home from '@/pages/home/index.vue'
import Blog from '@/pages/blog/index.vue'
import Label from '@/pages/label/index.vue'
import category from '@/pages/category/index.vue'
import timeLine from '@/pages/timeLine/index.vue'
import contact from '@/pages/contact/index.vue'
import articleDetail from '@/pages/articleDetail/index.vue'
import backcontrol from '@/pages/backcontrol/index.vue'
// import articleAdd from '@/pages/articleAdd/index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
  // redirect:'/backcontrol'
}, {
  path: '/home',
  name: 'home',
  redirect: '/'
}, {
  path: '/blog',
  name: 'blog',
  component: Blog
}, {
  path: '/articleDetail/:id',
  name: 'articleDetail',
  component: articleDetail
}, {
  path: '/label/:label',
  name: 'label',
  component: Label,
  props: true
}, {
  path: '/category/:category',
  name: 'category',
  component: category,
  props: true
}, {
  path: '/timeLine',
  name: 'timeLine',
  component: timeLine,
}, {
  path: '/contact',
  name: 'contact',
  component: contact,
},{
  path: '/Login',
  name: 'Login',
  component:() => import('@/pages/Login/index.vue')
},{
  path:'*',
  redirect: '/'
}
]

const bkrouter =[
  {
    path: '/backcontrol',
    name: 'backcontrol',
    component: backcontrol,
    children: [
      { 
        path: '/',
        redirect:'/backcontrol/articleAdd'
      },
      {
        path:'/backcontrol/articleAdd',
        component:() => import('@/pages/articleAdd/index.vue'),
        meta:{ rqr:1 }
      },
      {
        path:'/backcontrol/alltitle',
        component:() => import('@/pages/allTitle/index.vue'),
        meta:{ rqr:1}
      }
    ]
  }
]


const router =  new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export const addrouter = function(){
  if( (Vue.$cookies.get('token') != 'undefined' && Vue.$cookies.get('token') != null)){
   router.addRoutes(bkrouter);
  }
}

router.beforeEach((to, from, next) => {
  if( (Vue.$cookies.get('token') != 'undefined' && Vue.$cookies.get('token') != null) && to.path=='/login'){
    addrouter()
    next('/backcontrol')
  }
  else if(to.path !=='/login'){
    next()
  }
  else{
    next()
  }
})

export default router