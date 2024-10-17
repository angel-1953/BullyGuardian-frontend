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
            <li style="background-color: #f5f2ca;">
              <router-link to="/managementPage" class="link" style="background-color: #f5f2ca;">
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
        <div class="title_light02">
          <h2>社群管理</h2>
          <button class="button03" @click="openModal" style="margin-left: 30px;">新增</button>
        </div>

        <table class="styled-table">
          <thead>
            <tr>
              <th>序號</th>
              <th>社團名稱</th>
              <th>Facebook連結</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
              <td style="text-align: center;">{{ index + 1 }}</td>
              <td style="text-align: center;">{{ row.ClubName }}</td>
              <td style="text-align: center;">{{ row.ClubURL }}</td>
              <td style="text-align: center;"><button class="button02" @click="deleteRow(index)">刪除</button></td>
            </tr>
          </tbody>
        </table>

        <!-- 彈跳視窗，當 showModal 為 true 時顯示 -->
        <div v-if="showModal" class="modal">
          <div class="modal-content">
            <h3>新增社團</h3>
            <div class="type">
              <label for="name" class="club">社團名稱：</label>
              <input v-model="newEntry.name" id="name" type="text" class="text" placeholder="輸入社團名稱">
            </div>
            <div class="type">
              <label for="path" class="club">Facebook 連結：</label>
              <input v-model="newEntry.path" id="path" type="text" class="text" placeholder="輸入 Facebook 連結">
            </div>
            <div class="modal-actions">
              <button class="button02" @click="closeModal" style="background-color: #bfb6ad;">取消</button>
              <button class="button02" @click="addNewEntry">確定</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script scoped src="./JavaScript/ManagementPage.js" ></script>
<style scoped src="./style/Common.css" ></style>
<style scoped src="./style/table.css" ></style>
<style scoped src="./style/jump.css" ></style>

<style>

</style>