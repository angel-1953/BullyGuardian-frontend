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
          <router-link to="/notification">
            <p>事件通報</p>
          </router-link>
        </li>
        <li>
          <router-link to="/data" class="">
            <p>霸凌雷達</p>
          </router-link>
        </li>
        <li>
          <router-link to="/book" class="">
            <p>好書推薦</p>
          </router-link>
        </li>
        <li>
          <router-link to="/video" class="">
            <p>影片欣賞</p>
          </router-link>
        </li>
        <li>
          <router-link to="/test" class="">
            <p>實力測驗</p>
          </router-link>
        </li>
        <li>
          <router-link to="/news" class="">
            <p>資訊導航</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>

  <div id="body">
    <h1>會員登入</h1>
    <div class="page">
      <router-link to="/login" class="link">
        <div class="title_login register">
          <h2>會員登入</h2>
        </div>
      </router-link>

      <div class="title_login ">
        <h2>會員註冊</h2>
      </div>
    </div>

    <div class="div">
      <div class="content">
        <form @submit.prevent="registerMember" class="form">
          <div class="account">
            <h3>帳號：</h3>
            <input v-model="formData.Account" type="text" placeholder="請輸入帳號" class="text" name="Account" />
          </div>
          <div class="account">
            <h3>密碼：</h3>
            <input v-model="formData.Password" type="password" placeholder="請輸入密碼" class="text" name="Password" />
          </div>
          <div class="account">
            <h3>密碼確認：</h3>
            <input v-model="formData.PasswordCheck" type="password" placeholder="請輸入密碼確認" class="text" name="PasswordCheck" />
          </div>
          <div class="account">
            <h3>電子信箱：</h3>
            <input v-model="formData.Email" type="email" placeholder="請輸入電子信箱" class="text" name="Email" />
          </div>
          <div class="account">
            <h3>姓名：</h3>
            <input v-model="formData.Name" type="text" placeholder="請輸入姓名" class="text" name="Name" />
          </div>
          <div class="account">
            <h3>學校：</h3>
            <input v-model="formData.School" type="text" @input="filterSchools" placeholder="請輸入學校" class="text" name="School" />
            <div class="school-dropdown" v-if="filteredSchools.length > 0">
              <ul class="school-list">
                <li v-for="school in filteredSchools" :key="school.SchoolId" @click="selectSchool(school)">
                  {{ school.School1 }}
                </li>
              </ul>
            </div>
          </div>
          <div class="account">
            <h3>班級：</h3>
            <input v-model="formData.Class" type="text" placeholder="請輸入班級" class="text" name="Class" />
          </div>
          <div class="account">
            <h3>學號：</h3>
            <input v-model="formData.StudentId" type="text" placeholder="請輸入學號" class="text" name="StudentId" />
          </div>
          <div class="account">
            <h3>Facebook網址：</h3>
            <input v-model="formData.FBurl" type="text" placeholder="請輸入Facebook主頁網址" class="text" name="FBurl" />
          </div>
          <div id="goreg">
            <input type="submit" value="註冊" class="button" />
            <p v-if="errorMsg" class="error alart">{{ errorMsg }}</p>
            <p v-if="successMsg" class="success alart">{{ successMsg }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>

  <footer>
    <p>校園凌制零</p>
  </footer>
</template>

<script scoped>
export default {
  name: "RegisterPage",
  data() {
    return {
      formData: {
        Account: "",
        Password: "",
        PasswordCheck: "",
        Name: "",
        Email: "",
        School: "",
        SchoolId: "",
        Class: "",
        StudentId: "",
        FBurl: ""
      },
      schoolList: [],
      filteredSchools: [],
      errorMsg: "",
      successMsg: ""
    };
  },
  methods: {
    async fetchSchoolList() {
      try {
        // 同時請求兩個 API，並使用 Promise.all 等待它們完成
        const [schoolResponse, midSchoolResponse] = await Promise.all([
          fetch('http://localhost:5280/api/Member/GetSchoolList'),
          fetch('http://localhost:5280/api/Member/GetMidSchoolList')
        ]);

        // 將兩個 API 的結果解析為 JSON
        const schoolData = await schoolResponse.json();
        const midSchoolData = await midSchoolResponse.json();

        // 檢查兩個 API 返回的狀態，並合併數據
        if (schoolData.Status === 200 && midSchoolData.Status === 200) {
          // 合併學校列表
          this.schoolList = [...schoolData.Message, ...midSchoolData.Message];
        } else {
          console.error('Failed to fetch school list:', schoolData.Message || midSchoolData.Message);
        }
      } catch (error) {
        console.error('Error fetching school list:', error);
      }
    },
    filterSchools() {
      const searchTerm = this.formData.School.toLowerCase();
      this.filteredSchools = this.schoolList.filter(school =>
        school.School1.toLowerCase().includes(searchTerm)
      );
    },
    selectSchool(school) {
      this.formData.School = school.School1;
      this.formData.SchoolId = school.SchoolId;
      this.filteredSchools = [];
    },
    async registerMember() {
      if (this.formData.Password !== this.formData.PasswordCheck) {
        this.errorMsg = "密碼與密碼確認不一致";
        return;
      }

      const data = new FormData();
      data.append("IsTeacher", "0");
      data.append("Account", this.formData.Account);
      data.append("Password", this.formData.Password);
      data.append("PasswordCheck", this.formData.PasswordCheck);
      data.append("Name", this.formData.Name);
      data.append("Email", this.formData.Email);
      data.append("SchoolId", this.formData.SchoolId);
      data.append("Class", this.formData.Class);
      data.append("StudentId", this.formData.StudentId);
      data.append("FBurl", this.formData.FBurl);

      try {
        const response = await fetch('http://localhost:5280/api/Member/Register', {
          method: 'POST',
          body: data,
        });

        const result = await response.json();
        if (response.status === 200 && result.Status === 200) {
          this.successMsg = result.Message || "註冊成功！";
          this.errorMsg = "";
        } else {
          this.errorMsg = result.Message || "註冊失敗，請重試。";
        }
      } catch (error) {
        this.errorMsg = "系統發生錯誤，請稍後再試。";
      }
    }
  },
  mounted() {
    this.fetchSchoolList();
    document.title = "校園凌制零-註冊";
  }
};

</script>

<style scoped>
.school-dropdown {
  max-height: 200px; /* 設置小視窗的最大高度 */
  overflow-y: auto; /* 啟用垂直滾動條 */
  border: 1px solid #ccc; /* 添加邊框 */
  background-color: #fff; /* 背景色 */
  position: absolute; /* 使下拉菜單絕對定位 */
  z-index: 10; /* 確保下拉菜單在其他元素之上 */
}

.school-list {
  list-style: none; /* 去掉列表樣式 */
  padding: 0; /* 去掉內邊距 */
  margin: 0; /* 去掉外邊距 */
}

.school-list li {
  padding: 10px; /* 添加內邊距 */
  cursor: pointer; /* 鼠標懸停變成手指 */
}

.school-list li:hover {
  background-color: #f0f0f0; /* 鼠標懸停高亮 */
}
</style>

<style scoped src="./style/header.css" ></style>
<style scoped src="./style/login.css" ></style>
