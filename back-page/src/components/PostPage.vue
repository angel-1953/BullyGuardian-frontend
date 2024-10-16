<template>
    <div class="app-container">
      <header>
        <img src="./assets/Final.png" alt="Logo" class="logo" width="15%"/>
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
                  <div class="nolink">
                    <img src="./assets/個人頭像.png" class="icon" />
                    XXX,您好
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
                <img src="./assets/登出.png" class="icon" />
                登出
              </router-link>
            </footer>
          </aside>
        
        <main class="content">
          <h2>事件詳細頁</h2>
          <div class="line"> </div>
          
          <div class="content-main">
          <div class="post">
            <h3>發文者：</h3> <h2>{{ postDetails.author }}</h2>
            </div>
            <div class="post">
            <h3>發文時間：</h3> <h2>{{ postDetails.postTime }}</h2>
          </div>
            <div class="post">
            <h3>貼文內容：</h3> <h2>{{ postDetails.content }}</h2>
          </div>
            <div class="post">
            <h3>貼文網址：</h3> <h2><a :href="postDetails.url" target="_blank">點擊前往</a></h2>
          </div>
          <div class="post">
            <h3>霸凌關鍵字：</h3>
            <div class="keyword">
                <div v-for="(keyword, index) in postDetails.keywords" :key="index" class="post-title" >
                <h2 class="keyword">{{ keyword }}</h2>
            </div>
            </div>

            </div>
        </div>

          <div class="content-button">
            <router-link to="/eventList" >
                <input type="submit" value="返回" class="button02" style="width: 150px; padding: 10px; margin: 50px;">
            </router-link> 
          </div>



        </main>
      </div>
    </div>
  </template>
    
  <script src="./JavaScript/PostPage.js"></script>
  <style scoped src="./style/Common.css" ></style>
  <style scoped src="./style/LoginPage.css" ></style>
  <style scoped src="./style/content.css" ></style>