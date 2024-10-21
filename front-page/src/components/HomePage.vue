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

      <div class="">
        <div class="video_title">
        <div class="line"></div>
        <h1 style="font-weight: bold;" >待辦事項
        </h1>
        <div class="line"></div>
      </div>

        <!-- 顯示待辦事項 -->
  <div v-for="(todo, index) in todos" :key="index">
    <p v-if="todo.TodoThing === 0">
      影片：<span v-if="!todo.State">未完成</span><span v-else>已完成</span>
      <router-link v-if="!todo.State" to="/video">前往影片欣賞</router-link>
    </p>
    <p v-if="todo.TodoThing === 1">
      測驗：<span v-if="!todo.State">未完成</span><span v-else>已完成</span>
      <router-link v-if="!todo.State" to="/test">前往測驗</router-link>
    </p>
    <p v-if="todo.TodoThing === 2">
      教師介入：<span v-if="!todo.State">未完成</span><span v-else>已完成</span>
    </p>
  </div>

      </div>

      <div class="div2">
        <div class="count_title">
          <h1 style="font-weight: bold;">霸凌雷達</h1>
          <router-link to="/data" id="more">
            <h2 style="font-weight: bold;">MORE&gt;&gt;</h2>
          </router-link>
        </div>

        <div class="count">
          <div class="count_index">

            <div style="display: flex;   justify-content: center;">

              <div style="width: 60%; margin: 60px;">
                <canvas id="bullyingChart"></canvas>
              </div>
          
        </div>

          </div>
        </div>
      </div>

      <div class="video_title">
        <div class="line"></div>
        <h1 style="font-weight: bold;" >霸凌文字雲</h1>
        <div class="line"></div>
      </div>

        <div style="display: flex;justify-content: center; margin-bottom: 150px;">
          <div v-if="loading">載入中...</div>
            <div v-else>
              <div id="word-cloud" ref="wordCloud" style="width: 1000px; min-height: 400px;"></div>
            </div>
        </div>


      <div style="background-color: #f8f4e9;">
           <div class="video_title">
        <div class="line"></div>
        <h1 style="font-weight: bold;">影片欣賞</h1>
        <div class="line"></div>
      </div>
      <!-- 輪播圖 -->
      <div id="app2" style="display: flex;  justify-content: center; padding:0 0 80px 0;">
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style="width: 60%;">
          <div class="carousel-inner">
            <div v-for="(video, index) in video" :key="index" :class="['carousel-item', { active: index === 0 }]" style="position: relative;">
              
              <!-- 疊加影片名稱 -->
              <div class="video-title-overlay">
                <h3 style="font-weight: bold;">{{ video.title }}</h3>  <!-- 顯示影片名稱 -->
              </div>

              <!-- 播放 icon -->
              <a :href="video.link" target="_blank" class="play-icon">
                <img src="./assets/play-icon.png" alt="Play Video">
              </a>

              <!-- 影片圖片 -->
              <img :src="video.url" class="d-block w-100" :alt="'Slide ' + (index + 1)">
            </div>
          </div>

          <!-- 左右切換按鈕 -->
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

    </div>

    <footer>
      <p>校園凌制零</p>
    </footer>
</template>

<script scoped src="./JavaScript/HomePage.js"></script>
<style scoped src="./style/header.css"></style>
<style scoped src="./style/home.css"></style>

<style scoped>
#word-cloud {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

