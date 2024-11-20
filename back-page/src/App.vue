<template>
  <div id="app">
    <!-- <button @click="currentPage = 'home'">Home</button>
    <button @click="currentPage = 'register'">Register</button> -->

    <router-view />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import EventList from './components/EventList.vue';
import UserInfo from './components/UserInfo.vue';
import ManagementPage from './components/ManagementPage.vue';
import StatisticsPage from './components/StatisticsPage.vue';
import NetworkInfo from './components/NetworkInfo.vue';
import ResourcePage from './components/ResourcePage.vue';
import PostPage from './components/PostPage.vue';
import UserPage from './components/UserPage.vue';
import VideoPage from './components/VideoPage.vue';
import TestPage from './components/TestPage.vue';
import HistoryBully from './components/HistoryBully.vue';

export default {
  data() {
    return {
      currentPage: 'login' // 預設顯示首頁
    };
  },
  computed: {
    // 根據 currentPage 返回對應的組件
    currentPageComponent() {
      if (this.currentPage === 'login') return LoginPage;
      if (this.currentPage === 'register') return RegisterPage;
      if (this.currentPage === 'eventList') return EventList;
      if (this.currentPage === 'userInfo') return UserInfo;
      if (this.currentPage === 'managementPage') return ManagementPage;
      if (this.currentPage === 'statisticsPage') return StatisticsPage;
      if (this.currentPage === 'networkInfo') return NetworkInfo;
      if (this.currentPage === 'resourcePage') return ResourcePage;
      if (this.currentPage === 'postPage') return PostPage;
      if (this.currentPage === 'userPage') return UserPage;
      if (this.currentPage === 'videoPage') return VideoPage;
      if (this.currentPage === 'testPage') return TestPage;
      if (this.currentPage === 'historyBully') return HistoryBully;
      return null; 
    }
  }
};
</script>