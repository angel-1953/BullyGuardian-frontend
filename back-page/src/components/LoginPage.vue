<template>
  <div class="app-container">
    <header>
      <img src="./assets/Final.png" alt="Logo" class="logo" width="15%"/>
      <div class="header-button">
        <router-link to="/login" class="link-button">
          <button class="button">登入</button>
        </router-link>
        <router-link to="/register" class="link-button">
          <button class="button">註冊</button>
        </router-link>
      </div>
    </header>
    <div class="main-container">
      <aside class="sidebar">
        <nav>
          <ul>
            <li>
            </li>
            <!-- 其他選單項目 -->
          </ul>
        </nav>
      </aside>
      <main class="content">
        <h2>會員登入</h2>
        <div class="line"></div>
        <div class="register-container">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="account">帳號：</label>
              <input type="text" v-model="form.account" id="account" required class="log"/>
            </div>
            <div class="form-group">
              <label for="password">密碼：</label>
              <input type="password" v-model="form.password" id="password" required class="log"/>
            </div>
            <div class="form-footer">
              <button type="submit">登入</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>
  
<script src="./JavaScript/LoginPage.js"></script>
<style scoped src="./style/Common.css" ></style>
<style scoped src="./style/LoginPage.css" ></style>