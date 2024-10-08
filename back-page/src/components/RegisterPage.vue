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
                <img src="" alt="Dashboard" class="icon" />
                XXX，您好
              </a>
            </li>
            <li>
              <a href="#">
                <img src="items-icon.png" alt="Item Management" class="icon" />
                項目管理
              </a>
            </li>
            <li>
              <a href="#">
                <img src="user-icon.png" alt="User Management" class="icon" />
                使用者管理
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