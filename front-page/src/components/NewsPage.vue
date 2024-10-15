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
        <li><router-link to="/data"><p>霸凌雷達</p></router-link></li>
        <li><router-link to="/book"><p>好書推薦</p></router-link></li>
        <li><router-link to="/video"><p>影片欣賞</p></router-link></li>
        <li><router-link to="/test"><p>實力測驗</p></router-link></li>
        <li><router-link to="/news"><p>資訊導航</p></router-link></li>
      </ul>
    </nav>
  </div>

  <div id="body">
    <!-- 這一塊要接API -->
    <div class="noti_title">
      <h1>最新相關資訊</h1>
    </div>
    <div class="content1" style="margin:0 8%; width: 84%;">
      <div class="content2" style="height: 500px;">
        <table>
          <thead>
            <tr>
              <th>序號</th>
              <th>網站名稱/連結</th>
              <th>更新日期</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in dataFromApi" :key="index" :class="{'odd-row': index % 2 !== 0}">
              <td>{{ index + 1 }}</td>
              <td>{{ item.Title }} - <a :href="item.Link">{{ item.Link }}</a></td>
              <td>{{ formatDate(item.LinkTime) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 這一塊是寫死的不用接API -->
    <div class="noti_title">
      <h1>教育部網路霸凌相關網站</h1>
    </div>
    <div class="content1" style="margin:0 8%; width: 84%;">
      <div class="content2">
        <table>
          <thead>
            <tr>
              <th style="width: 15%;">序號</th>
              <th style="width: 40%;">網站名稱</th>
              <th class="td_link" style="width: 45%;">網站連結</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td class="td_link"><a :href="item.path" target="_blank">{{ item.path }}</a></td>
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

      <script scoped src="./JavaScript/NewsPage.js"></script>
      <style scoped src="./style/header.css" ></style>
      <style scoped src="./style/notification.css" ></style>
      <style scoped src="./style/table.css" ></style>