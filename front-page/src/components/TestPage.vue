
<template>

<div id="header">
      <header class="header">
        
        <router-link to="/home" class="pgoto_link">
          <div class="logo">
            <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;" />
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
            <li>
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
                <h1>實力測驗</h1>
            </div>
            <div id="test">
              <div class="content1 test" >
                  <div class="content2 shuoming" >
                    <h3>本測驗取自政府開放資料集【中小學資訊素養教學教材】，透過進行本測驗可提升您辨識霸凌行為、保護自己及他人的能力，從而在網路環境中維護自身安全，減少網路霸凌的發生。</h3>
                  </div>        
              </div>
              <div class="arrow">
                <img src="./assets/Group 63.png" alt="Campus Bully Guardian Logo" style="width: 70px;"/>
              </div>
              <div id="goreg">
                      <input type="submit" value="開始作答" class="button "> 
              </div>  
            </div>


            <div class="noti_title">
                <h1>作答紀錄</h1>
            </div>
            <div class="content1" style="margin:0 8%; width: 84%;">
                <div class="content2" >
                  <table>
                    <thead>
                      <tr>
                        <th>序號</th>
                        <th>答對題數</th>
                        <th>作答日期</th>
                        <th>答題狀況</th>
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


          <style scoped>

          table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            border-radius: 50px;
            border-radius: 20px; /* 表格整体的圆角 */
            overflow: hidden; /* 防止内容溢出 */
            border: 2px solid #fae1d6;
          }

          th, td {
            padding: 20px;
            border: 1px solid #fff7f3;
            font-size: 22px;
            font-weight: bold;
            color: #a7786f;
          }

          th {
            background-color: #fff7f3;
            color: #8f6a6a;
            font-size: 24px;
            border-bottom: #fce2e2 2px double;
          }

          .odd-row {
            background-color: #fff5f0;
          }

          .view-btn {
            border: none;
            padding: 5px 40px;
            cursor: pointer;
            color: #dd8f8f;
            font-weight: bold;
            font-size: 20px;
            background-color: white;
            border: #dd8f8f 3px solid;
            border-radius: 10px;
          }

          .view-btn:hover {
            background-color: #f5b3a7;
            color: white;
          }
          </style>




          
          <script src="./JavaScript/TestPage.js"></script>
          <style src="./style/header.css" ></style>
          <style src="./style/notification.css" ></style>