export default {
  name: "PersonalPage",
  data() {
    return {
      account: '',
      oldpassword: '', 
      newpassword: '', 
      confirmPassword: '',
      email: '',
      name: '',
      school: '',
      grade: '',
      studentId: '',
      passwordError: '',
      isLoggedIn: false // 判斷使用者是否已登入
    };
  },
  mounted() {
    document.title = "個人中心";
    this.handleHeaderDisplay();
    this.fetchUserData(); // 呼叫方法來從 API 獲取使用者數據
  },
  methods: {
    // 假設登入成功後的回應
    async login() {
      // 假設在 data 中有 account 和 password
      const response = await fetch('http://localhost:5280/api/Member/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 設置內容類型
        },
        body: JSON.stringify({
          account: this.account, // 需從 data 獲取使用者輸入的帳號
          password: this.oldpassword // 假設使用舊密碼作為登入密碼
        })
      });
      const data = await response.json();
    
      if (response.ok) {
        // 儲存 token 和 account 到 localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('account', data.account);
        this.isLoggedIn = true; // 設置為已登入狀態
        this.handleHeaderDisplay();
      } else {
        console.error("登入失敗", data.message);
      }
    },
    
    async fetchUserData() {
      const token = localStorage.getItem('token');
      const account = localStorage.getItem('account');
      if (!token) {
        console.error("缺少 Token，請先登入。");
        return;
      }

      try {
        const response = await fetch(`http://localhost:5280/api/Member/GetAccountInfo?account=${account}`, {
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
      this.isLoggedIn = !!token; // 簡化邏輯，使用布林值

      // 顯示/隱藏區塊
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');
      if (loginRegisterSection) loginRegisterSection.style.display = this.isLoggedIn ? 'none' : 'block';
      if (personalSection) personalSection.style.display = this.isLoggedIn ? 'block' : 'none';

      console.log(this.isLoggedIn ? "已登入" : "未登入");
    },

    // 登出函數，清除 token 並更新 header 顯示狀態
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('account'); // 清除帳號資訊
      this.isLoggedIn = false;
      this.handleHeaderDisplay();
      console.log("已登出");
      this.$router.push('/login'); // 跳轉到登入頁面
    },

    // 密碼一致性檢查
    checkPassword() {
      if (this.newpassword && this.confirmPassword) {
        this.passwordError = this.newpassword !== this.confirmPassword ? '密碼不一致' : '';
      }
    },

    // 使用 API 更新密碼
    async updatePassword() {
      if (!this.passwordError && this.newpassword && this.confirmPassword) {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("缺少 Token，請先登入。");
          return;
        }

        const requestBody = {
          OldPassword: this.oldpassword,
          NewPassword: this.newpassword,
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
