
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
        <li style="background-color: #e1fcfa;"><router-link to="/test"><p>實力測驗</p></router-link></li>
        <li><router-link to="/news"><p>資訊導航</p></router-link></li>
      </ul>
    </nav>
  </div>

    <div id="body">
    <div class="noti_title">
      <h1>實力測驗</h1>
    </div>
    
    <div id="test">
      <div class="content1 test">
        <div class="content2 shuoming">
          <h3>本測驗取自政府開放資料集【教育部的全民資訊素養自評活動題庫】，透過進行本測驗可提升您辨識霸凌行為、保護自己及他人的能力，從而在網路環境中維護自身安全，減少網路霸凌的發生。</h3>
        </div>        
      </div>

      <div class="arrow">
        <img src="./assets/Group 63.png" alt="Campus Bully Guardian Logo" style="width: 70px;" />
      </div>

      <div id="goreg">
        <router-link to="/write">
          <input type="submit" value="開始作答" class="button_02">  
        </router-link>
      </div> 
    </div>

    <div class="noti_title">
      <h1>作答紀錄</h1>
    </div>
    <div class="content1" style="margin:0 8%; width: 84%;">
      <div class="content2">
        <table>
          <thead>
            <tr>
              <th>序號</th>
              <th>答對題數</th>
              <th>作答日期</th>
              <th>答題狀況</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
              <td>{{ index + 1 }}</td>
              <td>{{ item.Correct }}</td>
              <td>{{ new Date(item.Time).toLocaleString() }}</td>
                <div class="button">
                  <router-link :to="{ name: 'testid', params: { id: item.RecoveryId } }">
                    <button class="view-btn">查看</button>
                  </router-link>
                </div>
                   
            </tr>
          </tbody>
        </table>
      </div>            
    </div>
  </div>

  <footer>
    <p>校園凌制零</p>
  </footer>
</template>


   
          <script scoped src="./JavaScript/TestPage.js"></script>
          <style scoped src="./style/header.css" ></style>
          <style scoped src="./style/notification.css" ></style>
          <style scoped src="./style/VideoPage.css" ></style>
          <style scoped src="./style/table.css" ></style>