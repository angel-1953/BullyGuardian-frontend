import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import NotificationPage from '../components/NotificationPage.vue';
import DataPage from '../components/DataPage.vue';
import NewsPage from '../components/NewsPage.vue';


const routes = [
    {
      path: '/',
      redirect: '/home' // 預設重定向到首頁
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/notification',
      name: 'Notification',
      component: NotificationPage
    },
    {
      path: '/data',
      name: 'Data',
      component: DataPage
    },
    {
      path: '/news',
      name: 'News',
      component: NewsPage
    },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
