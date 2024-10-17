<template>
  <div id="header">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>校園凌制零</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css">
    </head>
    <div id="app"></div>
      <header class="header">
        <router-link to="/home" class="pgoto_link">
          <div class="logo">
            <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;" />
          </div>
        </router-link>

        <div class="login_register">
          <router-link to="/login" class="header_link">
            <p>登入</p>
          </router-link>
          <router-link to="/register" class="header_link">
            <p>註冊</p>
          </router-link>
        </div>

        <div class="personal" style="display: none;"> <!-- 預設為隱藏 -->
          <router-link to="/personalPage" class="header_link">
            <div class="personal-content">
              <img src="./assets/user.png" alt="Personal Logo" />
              <p>個人中心</p>
            </div>
          </router-link>
          <router-link to="/login" >
            <button @click="logout" class="logout_button">登出</button>
          </router-link>
          
        </div>
      </header>

      <nav class="nav">
        <ul>
          <li><router-link to="/data"><p>霸凌雷達</p></router-link></li>
          <li><router-link to="/book"><p>好書推薦</p></router-link></li>
          <li><router-link to="/video"><p>影片欣賞</p></router-link></li>
          <li><router-link to="/test"><p>實力測驗</p></router-link></li>
          <li><router-link to="/news"><p>資訊導航</p></router-link></li>
        </ul>
      </nav>
    </div>

    <div id="body">
      <div>
        <img src="./assets/pic.png" alt="" class="topimg" style="width: 100%; margin-bottom: 50px;" />
      </div>

      <div class="div2">
        <div class="count_title">
          <h1>霸凌雷達</h1>
          <router-link to="/data" id="more">
            <h2>MORE&gt;&gt;</h2>
          </router-link>
        </div>

        <div class="count">
          <div class="count_index"></div>
        </div>
      </div>

      <div class="video_title">
        <div class="line"></div>
        <h1>好書推薦</h1>
        <div class="line"></div>
      </div>

      <div class="video_title">
        <div class="line"></div>
        <h1>影片欣賞</h1>
        <div class="line"></div>
      </div>

      <div id="app" style="display: flex; justify-content: center; margin:0 0 50px 0; z-index: 1;" >
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style="width: 80%;">
          <div class="carousel-inner">
            <div v-for="(video, index) in video" :key="index" :class="['carousel-item', { active: index === 0 }]">
              <img :src="video.url" class="d-block w-100" :alt="'Slide ' + (index + 1)">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <footer>
      <p>校園凌制零</p>
    </footer>
</template>

<script>
import { nextTick } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 引入 Bootstrap 的 JS
import { Carousel } from 'bootstrap'; // 導入 Bootstrap 的 Carousel

export default {
  name: "HomePage",
  data() {
    return {
      video: [
        { url: require('@/components/assets/video1.png') }, // 修改圖片路徑
        { url: require('@/components/assets/video2.png') },
        { url: require('@/components/assets/video3.png') }
      ]
    };
  },
  mounted() {
    document.title = "校園凌制零-首頁";
    this.handleHeaderDisplay();

    // 使用 nextTick 確保輪播在 DOM 完成更新後初始化
    nextTick(() => {
      const myCarousel = document.querySelector('#carouselExample');
      new Carousel(myCarousel); // 使用導入的 Carousel
    });
  },
  methods: {
    handleHeaderDisplay() {
      const token = localStorage.getItem('token');
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');

      if (token) {
        if (loginRegisterSection) loginRegisterSection.style.display = 'none';
        if (personalSection) personalSection.style.display = 'block';
      } else {
        if (loginRegisterSection) loginRegisterSection.style.display = 'block';
        if (personalSection) personalSection.style.display = 'none';
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.handleHeaderDisplay();
    }
  }
};

</script>

<style scoped src="./style/header.css"></style>
<style scoped src="./style/home.css"></style>
