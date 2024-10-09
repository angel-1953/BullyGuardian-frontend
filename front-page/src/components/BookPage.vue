<template>

    <div id="header">
      <header class="header">
        
        <router-link to="/home" class="pgoto_link">
          <div class="logo">
            <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;"/>
          </div>
        </router-link> 
        
        <div class="login_register">
          <router-link to="/login" class="header_link">
            <p>登入</p>
          </router-link>
          <router-link to="/register" class="header_link">
            <p>註冊</p>
          </router-link>      
        </div>
        
        </header>
        
        <nav class="nav">
          <ul>
            <li>
              <router-link to="/data" class="" >
                <p>霸凌雷達</p>
              </router-link>
            </li>
            <li class="at">
              <router-link to="/book" class="" >
                <p>好書推薦</p>
              </router-link>
            </li>
            <li>
              <router-link to="/video" class="" >
                <p>影片欣賞</p>
              </router-link>
            </li>
            <li>
              <router-link to="/test" class="" >
                <p>實力測驗</p>
              </router-link>
            </li>
            <li>
                <router-link to="/news" class="" >
                    <p>資訊導航</p>
                </router-link>
            </li>
        
          </ul>
        </nav>
    </div>


    <div id="body" >

                   <div class="noti_title">
                <h1>好書推薦</h1>
            </div>
            <div class="content1" style="margin:0 8%; width: 84%;">
                <div class="content2" style="height: 500px;">
                  <table>
                    <thead>
                      <tr>
                        <th>序號</th>
                        <th>書名</th>
                        <th>作者</th>
                        <th>出版年</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in tableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
                        <td>{{ item.id }}</td>
                        <td>{{ item.questions }}</td>
                        <td>{{ item.date }}</td>
                        <td><button class="view-btn">查看</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>            
            </div>
        
    </div>

   
          
            <footer>
            <p>校園凌制零</p>
          </footer>
          
        
          
          </template>




          
          <script scoped src="./JavaScript/BookPage.js"></script>
          <style scoped src="./style/header.css" ></style>
          <style scoped src="./style/notification.css" ></style>
          <style scoped src="./style/table.css" ></style>