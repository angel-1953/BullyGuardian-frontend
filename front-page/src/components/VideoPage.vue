
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
          <ul class="dropdown-menu">
            <li class="drop">
              <router-link to="/video" class="" >
                <p>影片欣賞</p>
              </router-link>
            </li>
            <li class="drop">
              <router-link to="/test" class="" >
                <p>實力測驗</p>
              </router-link>
            </li>
          </ul>
        </li>
    
        <li>
            <router-link to="/news" class="" >
                <p>資訊導航室</p>
            </router-link>
        </li>
    
      </ul>
    </nav>
</div>
          
          <div id="body" >
        
            <div class="noti_title">
                <h1>影片欣賞</h1>
            </div>

            <div style="height: 600px;">

            </div>
 

        
        </div>
          
        
          
          
            <footer>
            <p>校園凌制零</p>
          </footer>
          
        
          
          </template>
          
          <script src="./JavaScript/NewsPage.js"></script>
          <style src="./style/header.css" ></style>
          <style src="./style/notification.css" ></style>