import { createRouter, createWebHashHistory } from 'vue-router';

const MainPage = () => import('@/views/mainPage');

const routes = [
  {
    path: '/',
    component: MainPage
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
