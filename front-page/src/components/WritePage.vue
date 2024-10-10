
<template>

<div id="header">
      <header class="header">
        
        <router-link to="/home" class="pgoto_link">
          <div class="logo">
            <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;"/>
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
              <router-link to="/data" class="" >
                <p>霸凌雷達</p>
              </router-link>
            </li>
            <li>
              <router-link to="/book" class="" >
                <p>好書推薦</p>
              </router-link>
            </li>
            <li class="at">
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

            <div>
              <div class="test">
                <div v-for="video in videos" :key="video.id" class="card">
                  <h3>{{ video.title }}</h3>
                  <p>{{ video.views }} 次點擊</p>
                </div>

            </div>
            </div>

 

        
        </div>
          
        
          
          
            <footer>
            <p>校園凌制零</p>
          </footer>
          
        
          
          </template>
          
          <script scoped src="./JavaScript/WritePage.js"></script>
          <style scoped src="./style/header.css" ></style>
          <style scoped src="./style/notification.css" ></style>
          <style scoped src="./style/write.css" ></style>