<template>

    <div id="header">
      <header class="header">
        
        <router-link to="/home" class="pgoto_link">
          <div class="logo">
            
            <img src="./assets/Final.png" alt="Campus Bully Guardian Logo" style="width: 70%;"/>
          </div>
        </router-link> 
      
        <div class="personal">
          <router-link to="/personalPage" class="header_link">
            <div class="personal-content">
              <img src="./assets/user.png" alt="Personal Logo" />
              <p>個人中心</p>
            </div> 
          </router-link>      
        </div>
        
        </header>
        
        <nav class="nav">
          <ul>
            <li><router-link to="/notification"><p>事件通報</p></router-link></li>
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

</template>

          <script scoped src="./JavaScript/ContentBook.js"></script>
          <style scoped src="./style/header.css" ></style>