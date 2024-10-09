<template>
    <div class="app-container">
      <header>
        <img src="./assets/Final.png" alt="Logo" class="logo" width="20%"/>
        <div class="header-button">
          
            <router-link to="/login" class="link-button">
              <button class="button">
                登入
              </button>
            </router-link>
          
            <router-link to="/register" class="link-button">
              <button class="button">
                註冊
              </button>
            </router-link>
        </div>
      </header>
      <div class="main-container">
        <aside class="sidebar">
          <nav>
            <ul>
              <li>
                <div class="link">
                  <img src="./assets/個人頭像.png" class="icon" />
                  XXX,您好
                </div>
              </li>
              <li>
                <router-link to="/events" class="link">
                  <img src="./assets/事件檢視.png" class="icon" />
                  事件檢視
                </router-link>
              </li>
              <li>
                <router-link to="/userInfo" class="link">
                  <img src="./assets/使用者資訊.png" class="icon" />
                  使用者資訊
                </router-link>
              </li>
              <li>
                <router-link to="/stats" class="link">
                  <img src="./assets/數據統計.png" class="icon" />
                  數據統計
                </router-link>
              </li>
              <li>
                <router-link to="/networkInfo" class="link">
                  <img src="./assets/網路資訊.png" class="icon" />
                  網路資訊
                </router-link>
              </li>
              <li>
                <router-link to="/resources" class="link">
                  <img src="./assets/素養資料.png" class="icon" />
                  素養資料
                </router-link>
              </li>
            </ul>
          </nav>
          <footer>
            <router-link to="/login" class="link">
              <img src="./assets/登入.png" class="icon" />
              登入
            </router-link>
          </footer>
        </aside>
        <main class="content">
          <h2>會員註冊</h2>
          <div class="line"> </div>
          <div class="register-container">
          
          </div>
        </main>
      </div>
    </div>
  </template>

<script scoped src="./JavaScript/NetworkInfo.js" ></script>
<style scoped src="./style/Common.css" ></style>