export default {
  name: "PersonalPage",
  data() {
    return {
      account: 'ABCD1234',
      password: '',
      confirmPassword: '',
      email: 'ABCD1234@gmail.com',
      name: '魯小維',
      school: '國立臺中科技大學',
      grade: '高一-3',
      studentId: 's19538080',
      passwordError: '',
      isLoggedIn: false
    };
  },
  mounted() {
    document.title = "個人中心";
    this.handleHeaderDisplay();  // 呼叫方法來處理 header 顯示
  },
  methods: {
    // 判斷是否有 token，並根據狀態動態切換 header
    handleHeaderDisplay() {
      const token = localStorage.getItem('token'); // 從 localStorage 中抓取 token
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');

      if (token) {
        // 已登入
        this.isLoggedIn = true;
        if (loginRegisterSection) loginRegisterSection.style.display = 'none';
        if (personalSection) personalSection.style.display = 'block';
        console.log("已登入");
      } else {
        // 未登入
        this.isLoggedIn = false;
        if (loginRegisterSection) loginRegisterSection.style.display = 'block';
        if (personalSection) personalSection.style.display = 'none';
        console.log("未登入");
      }
    },
    // 登出函數，清除 token 並更新 header 顯示狀態
    logout() {
      localStorage.removeItem('token'); // 清除 token
      this.isLoggedIn = false;
      this.handleHeaderDisplay(); // 更新 header
      console.log("已登出");
      this.$router.push('/login'); // Redirect to login page after logout
    },
    // 密碼一致性檢查
    checkPassword() {
      if (this.password && this.confirmPassword) {
        if (this.password !== this.confirmPassword) {
          this.passwordError = '密碼不一致';
        } else {
          this.passwordError = '';
        }
      }
    },
    // 更新密碼
    updatePassword() {
      if (!this.passwordError && this.password && this.confirmPassword) {
        // 假設這裡有更新密碼的 API 呼叫
        console.log("密碼已更新");
      } else {
        console.log("請確認密碼一致");
      }
    }
  }
};