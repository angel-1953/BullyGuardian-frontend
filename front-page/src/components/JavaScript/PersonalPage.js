export default {
  name: "PersonalPage",
  data() {
    return {
      account: '',
      password: '',
      confirmPassword: '',
      email: '',
      name: '',
      school: '',
      grade: '',
      studentId: '',
      passwordError: '',
      isLoggedIn: false
    };
  },
  mounted() {
    document.title = "個人中心";
    this.handleHeaderDisplay();
    this.fetchUserData(); // 呼叫方法來從資料庫加載使用者數據
  },
  methods: {
    // 從 API 獲取使用者數據
    async fetchUserData() {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error("缺少 Token，請先登入。");
        return;
      }

      try {
        const response = await fetch('http://localhost:5280/api/Member/UserInfo', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          this.account = data.account;
          this.email = data.email;
          this.name = data.name;
          this.school = data.school;
          this.grade = data.grade;
          this.studentId = data.studentId;
        } else {
          console.error("無法獲取使用者數據");
        }
      } catch (error) {
        console.error("加載使用者數據時發生錯誤", error);
      }
    },

    // 判斷是否有 token，並根據狀態動態切換 header 顯示
    handleHeaderDisplay() {
      const token = localStorage.getItem('token');
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');

      if (token) {
        this.isLoggedIn = true;
        if (loginRegisterSection) loginRegisterSection.style.display = 'none';
        if (personalSection) personalSection.style.display = 'block';
        console.log("已登入");
      } else {
        this.isLoggedIn = false;
        if (loginRegisterSection) loginRegisterSection.style.display = 'block';
        if (personalSection) personalSection.style.display = 'none';
        console.log("未登入");
      }
    },
    // 登出函數，清除 token 並更新 header 顯示狀態
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.handleHeaderDisplay();
      console.log("已登出");
      this.$router.push('/login');
    },
    // 密碼一致性檢查
    checkPassword() {
      if (this.password && this.confirmPassword) {
        this.passwordError = this.password !== this.confirmPassword ? '密碼不一致' : '';
      }
    },
    // 使用 API 更新密碼
    async updatePassword() {
      if (!this.passwordError && this.password && this.confirmPassword) {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("缺少 Token，請先登入。");
          return;
        }

        const requestBody = {
          OldPassword: '1111', // 替換為實際的舊密碼
          NewPassword: this.password,
          NewPasswordCheck: this.confirmPassword
        };

        try {
          const response = await fetch('http://localhost:5280/api/Member/ChangePassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
          });

          const data = await response.json();

          if (response.ok) {
            console.log("密碼更新成功", data);
            alert("密碼更新成功");
          } else {
            console.error("密碼更新失敗", data);
            alert(`密碼更新失敗: ${data.message}`);
          }
        } catch (error) {
          console.error("更新密碼時發生錯誤", error);
          alert("更新密碼時發生錯誤");
        }
      } else {
        console.log("請確認密碼是否一致。");
      }
    }
  }
};
