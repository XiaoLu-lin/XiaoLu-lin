import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('~/pages/Layout/index.vue'),
      children: [
        {
          path: '/test/first',
          name: 'First',
          component: () => import('~/pages/Test/index.vue'),
        },
      ],
    },
  ],
})
export default router
