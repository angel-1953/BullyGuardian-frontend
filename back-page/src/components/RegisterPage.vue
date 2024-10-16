<template>
  <div class="app-container">
    <header>
      <img src="./assets/Final.png" alt="Logo" class="logo" width="15%" />
      <div class="header-button">
        <router-link to="/login" class="link-button">
          <button class="button">登入</button>
        </router-link>
        <router-link to="/register" class="link-button">
          <button class="button">註冊</button>
        </router-link>
      </div>
    </header>
    <div class="main-container">
      <aside class="sidebar">
        <nav></nav>
        <footer></footer>
      </aside>

      <main class="content">
        <h2>會員註冊</h2>
        <div class="line"></div>
        <div class="register-container">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="account">帳號：</label>
              <input type="text" v-model="form.account" id="account" required class="log" />
            </div>

            <div class="form-group">
              <label for="password">密碼：</label>
              <input type="password" v-model="form.password" id="password" required class="log" />
            </div>

            <div class="form-group">
              <label for="confirmPassword">密碼確認：</label>
              <input type="password" v-model="form.confirmPassword" id="confirmPassword" required class="log" />
            </div>

            <div class="form-group">
              <label for="email">E-MAIL：</label>
              <input type="email" v-model="form.email" id="email" required class="log" />
            </div>

            <div class="form-group">
              <label for="name">姓名：</label>
              <input type="text" v-model="form.name" id="name" required class="log" />
            </div>

            <div class="form-group">
              <label for="school">學校：</label>
              <input
                v-model="form.school"
                type="text"
                @input="filterSchools"
                placeholder="請選擇學校"
                class="text"
                name="School"
                autocomplete="off"
              />
              <div class="school-dropdown" v-if="filteredSchools.length > 0">
                <ul class="school-list">
                  <li v-for="school in filteredSchools" :key="school.SchoolId" @click="selectSchool(school)">
                    {{ school.School1 }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-footer">
              <button type="submit">註冊</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>


<style scoped>
.school-dropdown {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
  position: absolute; /* 絕對定位 */
  z-index: 10;
  width: 100%; /* 跟輸入框保持相同寬度 */
  top: 100%; /* 選單緊貼在輸入框下方 */
  left: 0; /* 確保選單與輸入框左邊對齊 */
}

.school-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.school-list li {
  padding: 10px;
  cursor: pointer;
}

.school-list li:hover {
  background-color: #f0f0f0;
}

.form-group {
  position: relative; /* 父容器需要是相對定位的 */
}
</style>
  
<script scoped src="./JavaScript/RegisterPage.js"></script>
<style scoped src="./style/Common.css" ></style>
<style scoped src="./style/Register.css" ></style>
<style scoped src="./style/LoginPage.css" ></style>