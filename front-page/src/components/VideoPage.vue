<template>
  <div id="header">
    <header class="header">
      <router-link to="/home" class="pgoto_link">
        <div class="logo">
          <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;" />
        </div>
      </router-link>

      <div class="personal">
        <router-link to="/personalPage" class="header_link">
          <div class="personal-content">
            <img src="./assets/user.png" alt="Personal Logo" />
            <p>個人中心</p>
          </div>
        </router-link>
      </div>
    </header>

    <nav class="nav">
      <ul>
        <li>
          <router-link to="/data">
            <p>霸凌雷達</p>
          </router-link>
        </li>
        <li>
          <router-link to="/book">
            <p>好書推薦</p>
          </router-link>
        </li>
        <li class="at">
          <router-link to="/video">
            <p>影片欣賞</p>
          </router-link>
        </li>
        <li>
          <router-link to="/test">
            <p>實力測驗</p>
          </router-link>
        </li>
        <li>
          <router-link to="/news">
            <p>資訊導航</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>

  <div id="body">
    <div class="noti_title">
      <h1>影片欣賞</h1>
    </div>

    <div class="video">
      <div v-for="(video) in videos" :key="video.VideoId" class="card">
        <!-- Trigger API call when video is clicked -->
        <a :href="video.VideoLink1" target="_blank" @click.prevent="handleVideoClick(video.VideoId, video.VideoLink1)">
          <img :src="video.imgSrc" :alt="video.VideoName" class="thumbnail" />
          <h3>{{ video.VideoName }}</h3>
        </a>
        <p>{{ video.LinkClick }} 次點擊</p>
      </div>
    </div>
  </div>

  <footer>
    <p>校園凌制零</p>
  </footer>
</template>

          
          <script scoped src="./JavaScript/VideoPage.js"></script>
          <style scoped src="./style/header.css" ></style>
          <style scoped src="./style/notification.css" ></style>
          <style scoped src="./style/video.css" ></style>
          <style scoped src="./style/table.css" ></style>