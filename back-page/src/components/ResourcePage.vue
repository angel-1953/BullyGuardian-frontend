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
        
        <h2>素養資料-書籍</h2>

        <div style="display: flex; flex-direction: row; justify-content:space-between;align-items: start;">
            <button class="button03" @click="openModal" style="margin: 10px 40px; padding: 7px 30px;">新增</button>
  
          <div class="page">
            <router-link to="/resourcePage" >
                <h1 style="background-color: #b1d0cb;">書籍</h1>
            </router-link> 
            <router-link to="/videoPage" >
                <h1 >影片</h1>
            </router-link> 
            <router-link to="/testPage" >
                <h1>題庫</h1>
            </router-link> 
          </div>
          
          </div>

        <div class="register-container">

          <table class="styled-table">
            <thead>
              <tr>
                <th>序號</th>
                <th>書名</th>
                <th>作者</th>
                <th>出版年</th>
                <th>功能</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in data" :key="index" :class="{'odd-row': index % 2 !== 0}">
                <td>{{ index + 1 }}</td>
                <td>{{ row.BookName }}</td>
                <td>{{ row.BookAuthor }}</td>
                <td>{{ row.BookYear }}</td>
                <td><input type="submit" value="???" class="button02"> </td>
              </tr>
            </tbody>
          </table>

          
        
        </div>
      </main>
    </div>
  </div>
</template>

<script scoped src="./JavaScript/ResourcePage.js"></script>
<style scoped src="./style/Common.css" ></style>
<style scoped src="./style/table.css" ></style>