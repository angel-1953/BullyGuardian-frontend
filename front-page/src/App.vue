<template>
  <div id="app">
    <!-- <button @click="currentPage = 'home'">Home</button>
    <button @click="currentPage = 'register'">Register</button> -->

    <router-view />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';
import NotificationPage from './components/NotificationPage.vue';
import DataPage from './components/DataPage.vue';
import NewsPage from './components/NewsPage.vue';
import TestPage from './components/TestPage.vue';
import VideoPage from './components/VideoPage.vue';
import BookPage from './components/BookPage.vue';
import ContentBook from './components/ContentBook.vue';
import WritePage from './components/WritePage.vue';

export default {
  data() {
    return {
      currentPage: 'home' // 預設顯示首頁
    };
  },
  computed: {
    // 根據 currentPage 返回對應的組件
    currentPageComponent() {
      if (this.currentPage === 'home') return HomePage;
      if (this.currentPage === 'register') return RegisterPage;
      if (this.currentPage === 'login') return LoginPage;
      if (this.currentPage === 'notification') return NotificationPage;
      if (this.currentPage === 'data') return DataPage;
      if (this.currentPage === 'news') return NewsPage;
      if (this.currentPage === 'video') return VideoPage;
      if (this.currentPage === 'test') return TestPage;
      if (this.currentPage === 'book') return BookPage;
      if (this.currentPage === 'contentBook') return ContentBook;
      if (this.currentPage === 'write') return WritePage;
      return null; 
    }
  }
};
</script>
