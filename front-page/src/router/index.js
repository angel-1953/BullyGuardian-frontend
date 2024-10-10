import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import PersonalPage from '../components/PersonalPage.vue';
import NotificationPage from '../components/NotificationPage.vue';
import DataPage from '../components/DataPage.vue';
import NewsPage from '../components/NewsPage.vue';
import VideoPage from '../components/VideoPage.vue';
import TestPage from '../components/TestPage.vue';
import ViewAnswer from '../components/ViewAnswer.vue';
import BookPage from '../components/BookPage.vue';
import ContentBook from '../components/ContentBook.vue';
import WritePage from '../components/WritePage.vue';

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
      path: '/personalPage',
      name: 'PersonalPage',
      component: PersonalPage
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
    {
      path: '/video',
      name: 'Video',
      component: VideoPage
    },
    {
      path: '/test',
      name: 'Test',
      component: TestPage
    },
    {
      path: '/viewAnswer',
      name: 'ViewAnswer',
      component: ViewAnswer
    },
    {
      path: '/book',
      name: 'Book',
      component: BookPage
    },
    {
      path: '/contentBook',
      name: 'ContentBook',
      component: ContentBook
    },
    {
      path: '/write',
      name: 'Write',
      component: WritePage
    },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
