
<template>

<div id="header">
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
      
      <div id="body" >
    
        <div class="noti_title">
            <h1>數據圖表展示</h1>
        </div>

        <div style="height: 700px;">

        </div>
    
    
        </div>
      
    
      
      
        <footer>
        <p>校園凌制零</p>
      </footer>
      
    
      
      </template>
      
      <script scoped src="./JavaScript/DataPage.js"></script>
      <style scoped src="./style/header.css" ></style>
      <style scoped src="./style/notification.css" ></style>
      <style scoped src="./style/table.css" ></style>