import Vue from 'vue'
import VueRouter from 'vue-router'
import tutorials from "../tutorial_data";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TutorialsList',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/add',
    name: 'AddTutorial',
    component: () => import('@/components/AddTutorial.vue'),
    props: {tutorials}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
