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

      <div class="personal" style="display: none;"> <!-- 預設為隱藏 -->
        <router-link to="/personalPage" class="header_link">
          <div class="personal-content">
            <img src="./assets/user.png" alt="Personal Logo" />
            <p>個人中心</p>
          </div>
        </router-link>
        <button @click="logout" class="logout_button">登出</button>
      </div>
    </header>

    <nav class="nav">
      <ul>
        <li><router-link to="/notification"><p>事件通報</p></router-link></li>
        <li><router-link to="/data"><p>霸凌雷達</p></router-link></li>
        <li><router-link to="/book"><p>好書推薦</p></router-link></li>
        <li><router-link to="/video"><p>影片欣賞</p></router-link></li>
        <li><router-link to="/test"><p>實力測驗</p></router-link></li>
        <li><router-link to="/news"><p>資訊導航</p></router-link></li>
      </ul>
    </nav>
  </div>


  <div style="margin-top: 140px;padding-bottom: 50px;  background-color: #fffdee;">
    <div class="noti_title">
      <h1>實力測驗</h1>
    </div>

    <div id="writeQA">
      <div class="questionnaire">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <div class="question-title">{{ index + 1 }}. {{ question.Question }}</div>
          <ul class="options">
            <li 
              v-for="(option, optionIndex) in question.Options" 
              :key="optionIndex" 
              :class="{
                'correct-answer': option.IsCorrect,
                'wrong-answer': !option.IsCorrect && option.IsUserAnswer
              }"
            >
              - {{ option.Text }}
            </li>
          </ul>
        </div>
        <div class="button">
          <router-link to="/test"><button class="view-btn">返回</button></router-link>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <p>校園凌制零</p>
  </footer>
</template>

<style scoped>
.correct-answer {
  color: green;
}

.wrong-answer {
  color: red;
}
</style>

    
            
<script scoped src="./JavaScript/QAstates.js"></script>
<style scoped src="./style/notification.css" ></style>
<style scoped src="./style/header.css" ></style>
<style scoped src="./style/write.css" ></style>
<style scoped src="./style/table.css" ></style>