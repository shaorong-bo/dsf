import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '@/components/index.vue'


Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		redirect: "/index",
		children: [{
			path: "/index",
			name: "Index",
			component: index,
		}]
	},
	{
		path: '/search',
		name: 'Search',
		component: () => import('../views/search.vue')
	},
	{
		path: '/wode',
		name: 'Wode',
		component: () => import('../views/wode.vue')
	},
	{
		path: '/women',
		name: 'Women',
		component: () => import('../views/women.vue')
	},
	{
		path: '/fa',
		name: 'Fa',
		component: () => import('../views/fa.vue')
	},
	{
		path: '/zheng',
		name: 'Zheng',
		component: () => import('../views/zheng.vue')
	},
	{
		path: '/bao',
		name: 'Bao',
		component: () => import('../views/bao.vue')
	},
	{
		path: '/fenlei',
		name: 'Fenlei',
		component: () => import('../views/fenlei.vue')
	},
	{
		path: '/tiyu',
		name: 'tiyu',
		component: () => import('../views/tiyu.vue')
	},
	

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
