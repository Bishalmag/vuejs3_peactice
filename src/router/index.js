import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AddTask from '../views/AddTask.vue'
import Completed from '../views/Completed.vue'
import Introduction from '../views/Introduction.vue'
import TaskDetails from '@/views/TaskDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/addtask', component: AddTask },
  { path: '/completed', component: Completed },
  { path: '/introduction', component: Introduction },
  { path: '/task/:id', component: TaskDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = false 

  if (to.path === '/completed' && !isAuthenticated) {
    alert('You must be logged in to view Completed Tasks!')
    next('/') 
  } else {
    next() 
  }
})

export default router