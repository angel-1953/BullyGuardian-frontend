import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import Events from '../components/Events.vue';
import UserInfo from '../components/UserInfo.vue';
import Stats from '../components/Stats.vue';
import NetworkInfo from '../components/NetworkInfo.vue';
import Resources from '../components/Resources.vue';



const routes = [
  {
    path: '/',
    redirect: '/register' // 預設重定向到登入
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
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/networkInfo',
    name: 'NetworkInfo',
    component: NetworkInfo
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
