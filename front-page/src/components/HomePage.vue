<template>
  <!-- 整個 header 容器 -->
  <header class="header">
    <!-- 左側部分：logo 和名稱 -->
    <div class="logo">
      <!-- Logo 圖片來源 -->
      <img src="@/assets/logo.png" alt="Campus Bully Guardian Logo" />
      <h1>校園凌制零</h1>
      <span>Campus Bully Guardian</span>
    </div>
    
    <!-- 中間部分：導航選單 -->
    <nav class="nav">
      <ul>
        <li><a href="#">事件通報門</a></li>
        <li><a href="#">霸凌雷達站</a></li>
        <!-- 包含下拉式選單 -->
        <li class="dropdown">
          <a href="#">素養成長坊 <span class="arrow">▼</span></a>
          <ul class="dropdown-menu">
            <li><a href="#">影片欣賞</a></li>
            <li><a href="#">實力測驗</a></li>
          </ul>
        </li>
        <li><a href="#">資訊導航室</a></li>
      </ul>
    </nav>

    <!-- 右側部分：登入和註冊 -->
    <div class="auth">
      <a href="#" class="login">登入</a>
      <a href="#" class="register">註冊</a>
    </div>
  </header>
</template>

<script src="./HomePage.js"></script>
<style src="./HomePage.css" scoped></style>