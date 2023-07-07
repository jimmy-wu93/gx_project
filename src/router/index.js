import { createRouter, createWebHashHistory } from 'vue-router';

const MainPage = () => import('@/views/mainPage');
const PhonePage = () => import('@/views/phonePage');

const routes = [
  {
    path: '/',
    redirect: '/pc_index'
  },
  {
    path: '/pc_index',
    name: 'PcIndex',
    component: MainPage
  },
  {
    path: '/mb_index',
    name: 'MbIndex',
    component: PhonePage
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
