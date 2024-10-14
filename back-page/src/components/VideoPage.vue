<template>
  <div class="app-container">
    <header>
      <img src="./assets/Final.png" alt="Logo" class="logo" width="15%" />
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
            <li style="background-color: #f5f2ca;">
              <router-link to="/resourcePage" class="link" style="background-color: #f5f2ca;">
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
        <h2>素養資料-影片</h2>

        <div style="display: flex; flex-direction: row; justify-content:space-between;align-items: start;">
          <button class="button03" @click="openModal" style="margin: 10px 40px; padding: 7px 30px;">新增</button>

          <div class="page">
            <router-link to="/resourcePage">
              <h1>書籍</h1>
            </router-link>
            <router-link to="/videoPage">
              <h1 style="background-color: #b1d0cb;">影片</h1>
            </router-link>
            <router-link to="/testPage">
              <h1>題庫</h1>
            </router-link>
          </div>
        </div>

        <div class="register-container">
          <table class="styled-table">
            <thead>
              <tr>
                <th>序號</th>
                <th>影片名稱</th>
                <th>網址</th>
                <th>點擊次數</th>
                <th>功能</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in data" :key="index" :class="{'odd-row': index % 2 !== 0}">
                  <td>{{ index + 1 }}</td>
                  <td>{{ row.VideoName }}</td>
                  <td><a :href="row.VideoLink1" target="_blank">{{ row.VideoLink1 }}</a></td>
                  <td>{{ row.LinkClick }}</td>
                  <td>
                    <input type="submit" value="刪除" class="button02" @click="deleteVideo(row.VideoId)">
                    <input type="button" @click="previewImage(row.VideoId)" value="封面預覽" class="button02"> <!-- 使用 row.VideoId -->
                  </td>
                </tr>

            </tbody>
          </table>
        </div>

        <!-- 彈跳視窗顯示封面圖片 -->
        <div v-if="showImageModal" class="modal">
          <div class="modal-content">
            <h3>封面圖片預覽</h3>
            <img :src="previewImgUrl" alt="封面圖片" style="width: 100%; max-height: 400px;" />
            <div class="modal-actions">
              <button @click="closeImageModal" class="button02">關閉</button>
            </div>
          </div>
        </div>

        <!-- 新增影片的彈跳視窗 -->
        <div v-if="showModal" class="modal">
          <div class="modal-content">
            <h3>新增影片</h3>
            <form @submit.prevent="addNewVideo">
              <div class="type">
                <label for="videoName" class="club">影片名稱：</label>
                <input type="text" v-model="newVideo.VideoName" id="videoName" class="text" required>
              </div>

              <div class="type">
                <label for="videoURL" class="club">影片網址：</label>
                <input type="text" v-model="newVideo.VideoLink1" id="videoLink1" class="text" required>
              </div>

              <div class="type">
                <label for="videoImg" class="club">新增封面圖片：</label>
                <input type="file" id="videoImg" ref="videoImage" class="text" required>
              </div>

              <div class="modal-actions">
                <button type="button" class="button02" @click="closeModal" style="background-color: #bfb6ad;">取消</button>
                <button type="submit" class="button02">確認</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
  
  <script scoped src="./JavaScript/VideoPage.js"></script>
  <style scoped src="./style/Common.css" ></style>
  <style scoped src="./style/table.css" ></style>
  <style scoped src="./style/jump.css" ></style>