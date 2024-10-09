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
import Events from './components/Events.vue';
import UserInfo from './components/UserInfo.vue';
import Stats from './components/Stats.vue';
import NetworkInfo from './components/NetworkInfo.vue';
import Resources from './components/Resources.vue';

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
      if (this.currentPage === 'events') return Events;
      if (this.currentPage === 'userInfo') return UserInfo;
      if (this.currentPage === 'stats') return Stats;
      if (this.currentPage === 'networkInfo') return NetworkInfo;
      if (this.currentPage === 'resources') return Resources;
      return null; 
    }
  }
};
</script>