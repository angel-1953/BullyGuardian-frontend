export default {
  name: "scasePage",
  data() {
    return {
      tableData: [] // 儲存 API 回傳的事件紀錄
    };
  },
  mounted() {
    document.title = "個人中心-歷史通報紀錄";
    this.fetchScaseData(); // 加載頁面時請求 API
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
    async fetchScaseData() {
      const token = localStorage.getItem("token"); // 假設 token 已存於 localStorage
      if (!token) {
        console.error("缺少 Token，請先登入。");
        return;
      }

      try {
        const response = await fetch("http://localhost:5280/api/Front/ShowScase", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data.Status === 200) {
            this.tableData = data.Message; // 將 API 回傳的資料賦值給 tableData
          } else {
            console.error("無法取得資料:", data.Message);
          }
        } else {
          console.error("伺服器回傳錯誤");
        }
      } catch (error) {
        console.error("請求失敗", error);
      }
    },
    // 格式化日期
    formatDate(dateString) {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      return new Date(dateString).toLocaleString('zh-TW', options);
    }
    ,
    // 映射不當來源類型
    mapSourceType(source) {
      switch (source) {
        case 0: return "個人頁面";
        case 1: return "社團";
        case 2: return "粉絲專頁";
        default: return "未知";
      }
    },
    // 映射處理狀態
    mapState(state) {
      return state === 1 ? "已處理" : "未處理";
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