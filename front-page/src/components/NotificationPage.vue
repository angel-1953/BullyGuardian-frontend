
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
              <router-link to="/data" class="at" >
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
        <h1>事件通報</h1>
        <router-link to="/register" class="button_noti">
            <p>查看歷史通報紀錄</p>
        </router-link> 
    </div>


    <div class="content1">
        <div class="content2">
            <form action="" class="form">
                <div class="event">
                    <h3>Facebook連結：</h3>
                    <input type="text" placeholder="請輸入Facebook連結" class="text" name="username">  
                </div>

                <div class="event">
                  <h3>不當來源：</h3>
                  <label>
                    <input 
                      type="radio" 
                      value="個人頁面" 
                      v-model="sourceType"
                      required
                    />
                    個人頁面
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value="社團" 
                      v-model="sourceType"
                    />
                    社團
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value="粉絲專頁" 
                      v-model="sourceType"
                    />
                    粉絲專頁
                  </label>
                </div>

                <div class="event">
                    <h3>補充說明：</h3>
                    <input type="text" placeholder="請輸入Facebook連結" class="text" name="username">  
                </div>
                <div class="event">
                    <h3>附加圖片：</h3> 
                    <input 
                      type="file" 
                      id="image-upload" 
                      @change="handleImageUpload"
                    />                   
                </div>
                
                <div id="goreg">
                    <input type="submit" value="送出" class="button "> 
                </div>    
            </form>  
        </div>            
    </div>

    </div>
  

  
  
    <footer>
    <p>校園凌制零</p>
  </footer>
  

  
  </template>
  
  <script src="./JavaScript/NotificationPage.js"></script>
  <style src="./style/header.css" ></style>
  <style src="./style/notification.css" ></style>