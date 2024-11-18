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
        <li><router-link to="/notification"><p>事件通報</p></router-link></li>
        <li><router-link to="/data"><p>霸凌雷達</p></router-link></li>
        <li><router-link to="/book"><p>好書推薦</p></router-link></li>
        <li><router-link to="/video"><p>影片欣賞</p></router-link></li>
        <li><router-link to="/test"><p>實力測驗</p></router-link></li>
        <li><router-link to="/news"><p>資訊導航</p></router-link></li>
      </ul>
    </nav>
  </div>
      
      <div id="body" >
      
        <h1>個人中心</h1>
        <div class="page ">
            <div class="title_login">
              <h2><router-link to="/personalPage" style="text-decoration: none; font-size: 28px; " class="header_link"><p>個人資料管理</p></router-link></h2> 
            </div>
            <div class="title_login">
              <h2><router-link to="/scasePage" style="text-decoration: none; font-size: 28px;" class="header_link"><p>歷史通報紀錄</p></router-link></h2> 
            </div>
        </div>
      
      
      <div class="div">
          <div class="content">
           <form action="" class="form">
              <div class="field">
                <h4>帳號：</h4>
                <span>{{ account }}</span>
              </div>

              <div class="field">
                <h4>E-MAIL：</h4>
                <span>{{ email }}</span>
              </div>

              <div class="field">
                <h4>姓名：</h4>
                <span>{{ name }}</span>
              </div>

              <div class="field">
                <h4>學校：</h4>
                <span>{{ school }}</span>
              </div>

              <div class="field">
                <h4>班級：</h4>
                <span>{{ grade }}</span>
              </div>

              <div class="field">
                <h4>學號：</h4>
                <span>{{ studentId }}</span>
              </div>

            </form>     
        </div>
      </div>
      
      
    
      
      </div>
          <footer>
        <p>校園凌制零</p>
      </footer>
      

      <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
      <input type="text" name="username" autocomplete="username" hidden>

      </template>
      
      <script scoped src="./JavaScript/PersonalPage.js"></script>
      <style scoped src="./style/header.css" ></style>
      <style scoped src="./style/login.css" ></style>