
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
                <p>霸凌雷達</p>
              </router-link>
            </li>
            <li>
              <router-link to="/book" class="" >
                <p>好書推薦</p>
              </router-link>
            </li>
            <li>
              <router-link to="/video" class="" >
                <p>影片欣賞</p>
              </router-link>
            </li>
            <li>
              <router-link to="/test" class="" >
                <p>實力測驗</p>
              </router-link>
            </li>
            <li>
                <router-link to="/news" class="" >
                    <p>資訊導航</p>
                </router-link>
            </li>
        
          </ul>
        </nav>
    </div>
  
  <div id="body" >
  
    <h1>會員登入</h1>
    <div class="page">
      <router-link to="/login" class="link">
        <div class="title_login register">
          <h2>會員登入</h2> 
        </div>
      </router-link>
        
        <div class="title_login ">
          <h2>會員註冊</h2>
        </div>
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
          <div class="account">
              <h3>密碼：</h3>
              <input type="password" placeholder="請輸入密碼" class="text" name="password" >  
          </div>
          <div class="account">
              <h3>密碼確認：</h3>
              <input type="password" placeholder="請輸入密碼確認" class="text" name="password" >  
          </div>
          <div class="account">
              <h3>電子信箱：</h3>
              <input type="email" placeholder="請輸入電子信箱" class="text" name="password" >  
          </div>
          <div class="account">
              <h3>姓名：</h3>
              <input type="text" placeholder="請輸入姓名" class="text" name="password" >  
          </div>
          <div class="account">
              <h3>學校：</h3>
              <input type="text" placeholder="請輸入學校" class="text" name="password" >  
          </div>
          <div class="account">
              <h3>班級：</h3>
              <input type="text" placeholder="請輸入班級" class="text" name="password" >  
          </div>
          <div class="account">
              <h3>學號：</h3>
              <input type="text" placeholder="請輸入學號" class="text" name="password" >  
          </div>
          <div class="account">
              <h3>隨機碼：</h3>
              <input type="text" placeholder="請輸入隨機碼" class="text" name="password" >  
          </div>
          <div id="goreg">
             <input type="submit" value="註冊" class="button "> 
          </div>    
        </form>     
    </div>
  </div>
  
    
  

  
  
  </div>
      <footer>
    <p>校園凌制零</p>
  </footer>
  </template>
  
  <script src="./JavaScript/RegisterPage.js"></script>
  <style src="./style/header.css" ></style>
  <style src="./style/login.css" ></style>