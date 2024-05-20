import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
const router = createRouter({
	history: createWebHistory('/vite-rf-site/'),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/projects',
			component: Projects
		}
	]
})

export default router

/*
{
	path : '/about',
	component: About
}
*/
