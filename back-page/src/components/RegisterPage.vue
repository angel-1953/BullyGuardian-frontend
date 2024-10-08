<template>
  <div class="app-container">
    <header class="header">
      <div class="logo">
            <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 30%;"/>
      </div>
    </header>
    <div class="main-container">
      <aside class="sidebar">
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src="./assets/個人頭像.png" alt="Personal" class="icon" />
                XXX，您好
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/事件檢視.png" alt="Personal" class="icon" />
                事件檢視
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/使用者資訊.png" alt="Personal" class="icon" />
                使用者資訊
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/數據統計.png" alt="Personal" class="icon" />
                數據統計
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/網路資訊.png" alt="Personal" class="icon" />
                網路資訊
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/素養資料.png" alt="Personal" class="icon" />
                素養資料
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>
  
  <script src="./JavaScript/RegisterPage.js"></script>
  <style src="./style/common.css" ></style>
  <style src="./style/login.css" ></style>