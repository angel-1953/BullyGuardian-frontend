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
    document.title = "個人中心-個人資料管理";
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
    
          // 更新 Vue 組件的數據
          this.account = data.Message.Account || 'N/A';
          this.email = data.Message.Email || 'N/A';
          this.name = data.Message.Name || 'N/A';
          this.school = data.Message.School || 'N/A';
          this.grade = data.Message.Class || 'N/A';
          this.studentId = data.Message.StudentId || 'N/A';
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
      if (loginRegisterSection) loginRegisterSection.style.display = this.isLoggedIn ? 'none' : 'flex';
      if (personalSection) personalSection.style.display = this.isLoggedIn ? 'flex' : 'none';

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
    async changePassword() {
      const token = localStorage.getItem('token');  // 假設 token 已經存在 localStorage
      const payload = {
        OldPassword: this.oldPassword,
        NewPassword: this.newPassword,
        NewPasswordCheck: this.newPasswordCheck
      };
  
      try {
        const response = await fetch('http://localhost:5280/api/Member/ChangePassword', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.Status === 200) {
            this.successMessage = data.Message;
          } else {
            this.errorMessage = data.Message;
          }
        } else {
          this.errorMessage = "伺服器錯誤，請稍後再試。";
        }
      } catch (error) {
        this.errorMessage = "請求失敗，請檢查網路連線。";
      }
    },
    
  }
};
