
<template>

    <header class="header">
  
      <router-link to="/home" class="header_link">
      <div class="logo">
        <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;"/>
      </div>
    </router-link> 

  
      <div class="login_register">
      <router-link to="/login" class="link">
        <a href="#" class="login">登入</a>
      </router-link>
      <router-link to="/register" class="link">
        <a href="#" class="login">註冊</a>
      </router-link>      
    </div>
  
    </header>
    
    <nav class="nav">
        <ul>
          <li><a href="#">事件通報門</a></li>
          <li><a href="#">霸凌雷達站</a></li>
  
          <li class="dropdown">
            <a href="#"><span class="arrow">素養成長坊 ▼</span></a>
            <ul class="dropdown-menu" style="display: none;">
              <li><a href="#">影片欣賞</a></li>
              <li><a href="#">實力測驗</a></li>
            </ul>
          </li>
  
          <li><a href="#">資訊導航室</a></li>
  
        </ul>
    </nav>
  
  <div id="body" >
  
  </div>
  
  
    <footer>
    <p>校園凌制零</p>
  </footer>
  

  
  </template>
  
  <script src="./JavaScript/NotificationPage.js"></script>
  <style src="./style/header.css" ></style>
  <style src="./style/notification.css" ></style>