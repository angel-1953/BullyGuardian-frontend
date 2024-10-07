
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
              <router-link to="/data" class="" >
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
        
            <div class="noti_title">
                <h1>實力測驗</h1>
            </div>
            <div id="test">
              <div class="content1 test" style="margin-bottom: 50px;">
                  <div class="content2 shuoming" >
                    <h3>本測驗取自政府開放資料集【中小學資訊素養教學教材】，透過進行本測驗可提升您辨識霸凌行為、保護自己及他人的能力，從而在網路環境中維護自身安全，減少網路霸凌的發生。</h3>
                  </div>        
              </div>
              <div class="arrow">
                <img src="./assets/Group 63.png" alt="Campus Bully Guardian Logo" style="width: 70px;"/>
              </div>
              <div id="goreg">
                      <input type="submit" value="開始作答" class="button "> 
              </div>  
            </div>


            <div class="noti_title">
                <h1>作答紀錄</h1>
            </div>
            <div class="content1">
                <div class="content2" style="height: 500px;">
    
                </div>            
            </div>
        
        </div>
          
        
          
          
            <footer>
            <p>校園凌制零</p>
          </footer>
          
        
          
          </template>
          
          <script src="./JavaScript/TestPage.js"></script>
          <style src="./style/header.css" ></style>
          <style src="./style/notification.css" ></style>