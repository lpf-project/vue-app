import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/home/index.vue'
import item from '../views/item/item.vue'
import news from '../views/news/news.vue'
import mine from '../views/mine/mine.vue'

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
    	component:mine
    }
  ]

const router = new Router({
	routes,
	mode:'history'
})
export default router;