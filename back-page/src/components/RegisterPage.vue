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
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="account">帳號：</label>
            <input type="text" v-model="form.account" id="account" required />
          </div>

          <div class="form-group">
            <label for="password">密碼：</label>
            <input type="password" v-model="form.password" id="password" required />
          </div>

          <div class="form-group">
            <label for="confirmPassword">密碼確認：</label>
            <input type="password" v-model="form.confirmPassword" id="confirmPassword" required />
          </div>

          <div class="form-group">
            <label for="email">E-MAIL：</label>
            <input type="email" v-model="form.email" id="email" required />
          </div>

          <div class="form-group">
            <label for="name">姓名：</label>
            <input type="text" v-model="form.name" id="name" required />
          </div>

          <div class="form-group">
            <label for="school">學校：</label>
            <input type="text" v-model="form.school" id="school" required />
          </div>

          <div class="form-group">
            <label for="photo">教師證明：</label>
            <div class="custom-file-input">
              <input type="file" @change="handleFileUpload" id="photo" style="display:none" />
              <button type="button" @click="triggerFileInput">上傳圖片</button>
              <span v-if="form.photoName">{{ form.photoName }}</span>
            </div>
          </div>

          <div class="form-footer">
            <button type="submit">註冊</button>
          </div>
          
        </form>
        </div>
      </main>
    </div>
  </div>
</template>
  
<script scoped src="./JavaScript/RegisterPage.js"></script>
<style scoped src="./style/Common.css" ></style>
<style scoped src="./style/Register.css" ></style>