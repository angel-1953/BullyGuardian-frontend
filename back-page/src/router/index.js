import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import EventList from '../components/EventList.vue';
import UserInfo from '../components/UserInfo.vue';
import ManagementPage from '../components/ManagementPage.vue';
import StatisticsPage from '../components/StatisticsPage.vue';
import NetworkInfo from '../components/NetworkInfo.vue';
import ResourcePage from '../components/ResourcePage.vue';
import PostPage from '../components/PostPage.vue';
import UserPage from '../components/UserPage.vue';
import VideoPage from '../components/VideoPage.vue';
import TestPage from '../components/TestPage.vue';



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
  {
    path: '/postPage',
    name: 'PostPage',
    component: PostPage
  },
  {
    path: '/userPage',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/videoPage',
    name: 'VideoPage',
    component: VideoPage
  },
  {
    path: '/TestPage',
    name: 'TestPage',
    component: TestPage
  },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
