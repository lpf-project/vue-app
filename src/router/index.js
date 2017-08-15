import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/home/index.vue'
import item from '../views/item/item.vue'
import news from '../views/news/news.vue'
import mine from '../views/mine/mine.vue'

import applyDetail from '../views/public/applyDetail.vue'

import login from '../views/login.vue'
import register from '../views/register.vue'

Vue.use(Router)


const routes = [
    {
    	path:'/',
    	name:'index',
    	component:index
    },
    {
    	path:'/item',
    	name:'item',
    	component:item
    },
    {
    	path:'/news',
    	name:'news',
    	component:news
    },
    {
    	path:'/mine',
    	name:'mine',
    	component:mine,
        meta: { requiresAuth: true }
    },
    {
        path:'/applyDetail',
        name:'applyDetail',
        component:applyDetail,
        meta: { requiresAuth: true }
    }, 
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/register',
        name:'register',
        component:register
    }
  ]

const router = new Router({
	routes,
	mode:'history'
})



router.beforeEach((to, from, next) => {
  if(to.matched.some(r=>r.meta.requiresAuth)){
    //如果需要未登录跳转到登陆页面
    if(sessionStorage.getItem('setLogin')==='true'){
        next();
    }else{
      next({
        path: '/login'
      })
    }
  }else{
      next();

  }
})


export default router;