
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
        
        <li style="background-color: #e1fcfa;"><router-link to="/notification"><p>事件通報</p></router-link></li>
        <li ><router-link to="/data"><p>霸凌雷達</p></router-link></li>
        <li><router-link to="/book"><p>好書推薦</p></router-link></li>
        <li><router-link to="/video"><p>影片欣賞</p></router-link></li>
        <li><router-link to="/test"><p>實力測驗</p></router-link></li>
        <li><router-link to="/news"><p>資訊導航</p></router-link></li>
      </ul>
    </nav>
  </div>
  
  <div id="body">
    <div class="noti_title">
      <h1>事件通報</h1>
      <router-link to="/scasePage" class="button_noti">
        <p>查看歷史通報紀錄</p>
      </router-link> 
    </div>
    <div class="content1">
      <div class="content2">
        <form @submit.prevent="submitForm" class="form"> <!-- 綁定 submitForm 方法 -->
          <div class="event">
            <h3>Facebook連結：</h3>
            <input type="text" v-model="postUrl" placeholder="請輸入Facebook連結" class="text" name="username">  
          </div>

          <div class="event">
            <h3>不當來源：</h3>
            <label class="lab">
              <input type="radio" value="個人頁面" v-model="sourceType" class="label" name="event" required />
              <h5>個人頁面</h5>
            </label>
            <label class="lab">
              <input type="radio" value="社團" v-model="sourceType" class="label" name="event" />
              <h5>社團</h5>
            </label>
            <label class="lab">
              <input type="radio" value="粉絲專頁" v-model="sourceType" class="label" name="event" />
              <h5>粉絲專頁</h5>
            </label>
          </div>

          <div class="event" style="align-items: start;padding: 15px 0;">
            <h3>補充說明：</h3>
            <textarea v-model="info" placeholder="請輸入補充說明" class="text" name="username" style="width: 70%;"></textarea> 
          </div>
          
          <div id="goreg">
            <input type="submit" value="送出" class="button"> 
          </div>    
        </form>  
      </div>            
    </div>
  </div>
  

  
  
    <footer>
    <p>校園凌制零</p>
  </footer>
  

  
  </template>
  
  <script scoped src="./JavaScript/NotificationPage.js"></script>
  <style scoped src="./style/header.css" ></style>
  <style scoped src="./style/notification.css" ></style>
  <style scoped src="./style/login.css" ></style>