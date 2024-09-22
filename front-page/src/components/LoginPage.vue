
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
  
    <h1>會員登入</h1>
    <div class="page">
        <div class="title_login">
          <h2>會員登入</h2> 
        </div>
        <router-link to="/register" class="link">
          <div class="title_login register">
            <h2>會員註冊</h2>
          </div>
        </router-link>
        
    </div>
  
  
  <div class="div">
      <div class="content">
       <form action="" class="form">
          <div class="account">
              <h3>帳號：</h3>
              <input type="text" placeholder="請輸入帳號" class="text" name="username">  
          </div>
          <div class="account">
              <h3>密碼：</h3>
              <input type="password" placeholder="請輸入密碼" class="text" name="password" >  
          </div>
          <div id="goreg">
             <input type="submit" value="登入" class="button "> 
          </div>    
        </form>     
    </div>
  </div>
  
  
    <footer>
    <p>校園凌制零</p>
  </footer>
  
  
  </div>
  
  </template>
  
  <script src="./JavaScript/LoginPage.js"></script>
  <style scoped src="./style/header.css" ></style>
  <style scoped src="./style/login.css" ></style>