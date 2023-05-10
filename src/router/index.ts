// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'dashboard',
        name: 'Dashboards',
        component: () => import( '@/views/Dashboards.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import( '@/views/Users.vue'),
      },
      {
        path: 'info',
        name: 'Informations',
        component: () => import('@/views/Informations.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
