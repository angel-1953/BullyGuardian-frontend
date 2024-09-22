
<template>

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
    <li style="background-color: #fcf6c5;">
      <router-link to="/notification" class="" >
        <p>事件通報門</p>
      </router-link>
    </li>
    <li><a href="#">霸凌雷達站</a></li>

    <li class="dropdown">
      <a href="#"><span class="arrow">素養成長坊 ▼</span></a>
      <ul class="dropdown-menu" style="display: none;">
        <li><a href="#">影片欣賞</a></li>
        <li><a href="#">實力測驗</a></li>
      </ul>
    </li>

    <li><a href="#">資訊導航室</a></li>

  </ul>
</nav>
  
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
                </div>
                <div class="event">
                    <h3>補充說明：</h3>
                    <input type="text" placeholder="請輸入Facebook連結" class="text" name="username">  
                </div>
                <div class="event">
                    <h3>附加圖片：</h3>                    
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