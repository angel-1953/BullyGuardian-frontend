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
              <li style="background-color: #f5f2ca;">
                <router-link to="/historyBully" class="link" style="background-color: #f5f2ca;">
                  <img src="./assets/通報.png" class="icon" />
                  歷史通報
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
          <div class="title_light">
            <h2>歷史通報</h2>
            <h3 style="background-color: white; margin: 0 30px; color: darkgray;">
              最後更新時間：2024/10/10 12:00
            </h3>
          </div>
  
          <div class="register-container">
            <table class="styled-table">
              <thead>
                <tr>
                  <th>序號</th>
                  <th>Facebook連結</th>
                  <th>不當來源</th>
                  <th>補充說明</th>
                  <th>通報時間</th>
                  <th>狀態</th>
                  <th>功能</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data" :key="index" :class="{'odd-row': index % 2 !== 0}">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.PostUrl || '無資料' }}</td>
                    <td>{{ mapSourceType(item.Source) }}</td>
                    <td>{{ item.Info || '無資料' }}</td>
                    <td>{{ formatDate(item.Date) }}</td>
                    <td>{{ mapState(item.State) }}</td>
                    <td>
                      <input type="button" value="已處理" class="button02" @click="changeStatus(index + 1)" >
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script scoped src="./JavaScript/HistoryBully.js" ></script>
  <style scoped src="./style/Common.css" ></style>
  <style scoped src="./style/table.css" ></style>