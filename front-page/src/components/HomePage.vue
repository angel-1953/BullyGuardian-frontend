
<template>

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
    
    </header>
    
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/notification" class="" >
            <p>事件通報門</p>
          </router-link>
        </li>
        <li>
          <router-link to="/data" class="" >
            <p>霸凌雷達站</p>
          </router-link>
        </li>
    
        <li class="dropdown">
          <a href="#"><span class="arrow">素養成長坊 ▼</span></a>
          <ul class="dropdown-menu" style="display: none;">
            <li><a href="#">影片欣賞</a></li>
            <li><a href="#">實力測驗</a></li>
          </ul>
        </li>
    
        <li>
            <router-link to="/news" class="" >
                <p>資訊導航室</p>
            </router-link>
        </li>
    
      </ul>
    </nav>

  <div class="body">
    <div class="picture">
      <h1>
        我是輪播圖
      </h1>
    </div>

    <div class="div2">
      <div class="count_title">
          <h1> 霸凌雷達站 </h1>
          <router-link to="/home" id="more">
            <h2 >MORE>></h2>
          </router-link> 
      </div>
      
      <div class="count">
        <div class="count_index">
        </div>
      </div>

    </div>

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

<script src="./JavaScript/HomePage.js"></script>
<style scoped src="./style/header.css" ></style>
<style scoped src="./style/home.css" ></style>