import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import EventList from '../components/EventList.vue';
import UserInfo from '../components/UserInfo.vue';
import ManagementPage from '../components/ManagementPage.vue';
import StatisticsPage from '../components/StatisticsPage.vue';
import NetworkInfo from '../components/NetworkInfo.vue';
import ResourcePage from '../components/ResourcePage.vue';



const routes = [
  {
    path: '/',
    redirect: '/login' // 預設重定向到登入
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
    path: '/eventList',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/managementPage',
    name: 'ManagementPage',
    component: ManagementPage
  },
  {
    path: '/statisticsPage',
    name: 'StatisticsPage',
    component: StatisticsPage
  },
  {
    path: '/networkInfo',
    name: 'NetworkInfo',
    component: NetworkInfo
  },
  {
    path: '/resourcePage',
    name: 'ResourcePage',
    component: ResourcePage
  },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
