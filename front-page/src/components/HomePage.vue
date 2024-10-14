
<template>

<div id="header">
    <header class="header">
      <router-link to="/home" class="pgoto_link">
          <div class="logo">
            <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;"/>
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
        <button @click="logout" class="logout_button">登出</button>
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
    <div >
      <img src="./assets/pic.png" alt="" class="topimg" style="width: 100%; margin-bottom: 50px;"/>
    </div>

    <div class="div2">
      <div class="count_title">
          <h1> 霸凌雷達 </h1>
          <router-link to="/home" id="more">
            <h2 ><router-link to="/data" class="header_link" >MORE>></router-link></h2>
          </router-link> 
      </div>
      
      <div class="count">
        <div class="count_index">
        </div>
      </div>

    </div>

    <div class="video_title">
      <div class="line"></div>
        <h1>好書推薦</h1>
      <div class="line"></div>
    </div >
    <div class="video_title">
      <div class="line"></div>
        <h1>影片欣賞</h1>
      <div class="line"></div>
    </div >

    <div style="height: 500px;">

    </div>

  </div>

  <footer>
    <p>校園凌制零</p>
  </footer>


</template>


<script scoped src="./JavaScript/HomePage.js"></script>
<style scoped src="./style/header.css" ></style>
<style scoped src="./style/home.css" ></style>