import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
	history: createWebHistory('/vite-rf-site/'),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path : '/about',
			component: About
		},
		{
			path: '/projects',
			component: Home
		}
	]
})

export default router