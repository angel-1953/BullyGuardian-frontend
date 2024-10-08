import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/Register' // 預設重定向到首頁
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
