import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';


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
        path: '/Register',
        name: 'Register',
        component: RegisterPage
      },
    
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
