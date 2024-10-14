<template>
  <div class="app-container">
    <header>
      <img src="./assets/Final.png" alt="Logo" class="logo" width="15%" />
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
              <div class="nolink">
                <img src="./assets/個人頭像.png" class="icon" />
                {{ userInfo.Name }},您好
              </div>
            </li>
            <li>
              <router-link to="/eventList" class="link">
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
              <router-link to="/managementPage" class="link">
                <img src="./assets/社群管理.png" class="icon" />
                社群管理
              </router-link>
            </li>
            <li>
              <router-link to="/statisticsPage" class="link">
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
              <router-link to="/resourcePage" class="link">
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
        <h2>使用者詳細頁</h2>
        <div class="line"></div>

        <div class="content-main">
          <h3>學生姓名：{{ userInfo.Name }}</h3>
          <h3>系統帳號：{{ userInfo.Account }}</h3>
          <h3>電子信箱：{{ userInfo.Email }}</h3>
          <h3>學校/班級：{{ userInfo.School }} / {{ userInfo.Class }}</h3>
          <h3>學號：{{ userInfo.StudentId }}</h3>
          <h3>Facebook連結：<a :href="userInfo.FBurl" target="_blank">{{ userInfo.FBurl }}</a></h3>
          <h3>身分狀態：{{ userInfo.State }}</h3>
          <h3>表情符號點擊次數：{{ userInfo.BullyingerPoint }}</h3>
          <h3>攻擊性發文次數：{{ userInfo.BullyingerPost }}</h3>
        </div>

        <div class="content-button">
          <router-link to="/UserInfo">
            <input type="submit" value="返回" class="button02" style="width: 80px;" />
          </router-link>
        </div>
      </main>
    </div>
  </div>
</template>
    
  <script src="./JavaScript/UserPage.js"></script>
  <style scoped src="./style/Common.css" ></style>
  <style scoped src="./style/LoginPage.css" ></style>
  <style scoped src="./style/content.css" ></style>