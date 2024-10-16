<template>
    <div class="app-container">
      <header>
        <img src="./assets/Final.png" alt="Logo" class="logo" width="15%"/>
      </header>
      <div class="main-container">

        <aside class="sidebar">
          <nav>
            <ul>
              <li>
                <div class="nolink">
                  <img src="./assets/個人頭像.png" class="icon" />
                  {{ username }},您好
                </div>
              </li>
              <li style="background-color: #f5f2ca;">
                <router-link to="/eventList" class="link" style="background-color: #f5f2ca;">
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

          <div class="title_light">
           <h2>事件檢視</h2>        
            <h3 style="background-color: white; margin: 0 30px; color: darkgray;">最後更新時間：2024/10/10 12:00</h3>
          </div>


          <table class="styled-table">
            <thead>
              <tr>
                <th>序號</th>
                <th>發現日期</th>
                <th>發文帳號</th>
                <th>事件網址</th>
                <th>功能</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in tableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
                <td>{{ index + 1 }}</td>
                <td>{{ row.date }}</td>
                <td>{{ row.account }}</td>
                <td>
                  <a href={{ row.path }}>點擊前往</a>
                </td>
                <td>
                  <router-link to="/PostPage" >
                    <input type="submit" value="查看" class="button02">
                  </router-link> 
                </td>
              </tr>
            </tbody>
          </table>
          
        </main>

      </div>
    </div>
  </template>

<script scoped src="./JavaScript/EventList.js" ></script>
<style scoped src="./style/Common.css" ></style>
<style scoped src="./style/table.css" ></style>