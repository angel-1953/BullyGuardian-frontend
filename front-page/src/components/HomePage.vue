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
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  /* Header 的整體樣式 */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4c4af;
    padding: 10px 20px;
  }
  
  /* Logo 區域 */
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    height: 50px;
    margin-right: 10px;
  }
  
  .logo h1 {
    margin: 0;
    font-size: 24px;
    color: #b76e61;
  }
  
  .logo span {
    font-size: 12px;
    color: #d28d83;
  }
  
  /* 導航選單 */
  .nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav ul li {
    position: relative;
    margin-right: 20px;
  }
  
  .nav ul li a {
    text-decoration: none;
    color: #b76e61;
    font-size: 16px;
  }
  
  .nav ul li .arrow {
    font-size: 12px;
  }
  
  /* 下拉選單樣式 */
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f4c4af;
    list-style: none;
    padding: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-menu li {
    padding: 10px;
  }
  
  .dropdown-menu li a {
    text-decoration: none;
    color: #b76e61;
    font-size: 14px;
  }
  
  /* 當鼠標懸停時顯示下拉選單 */
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  
  /* 登入和註冊按鈕 */
  .auth {
    display: flex;
    align-items: center;
  }
  
  .auth a {
    margin-left: 10px;
    text-decoration: none;
    color: #b76e61;
    font-size: 16px;
  }
  </style>