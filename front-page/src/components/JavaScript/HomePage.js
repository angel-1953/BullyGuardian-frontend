import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: "HomePage",
  data() {
    return {
      videos: [
        { url: require('../assets/video1.png') },
        { url: require('../assets/video2.png') },
        { url: require('../assets/video3.png') }
      ]
    };
  },
  mounted() {
    document.title = "校園凌制零-首頁";
    this.handleHeaderDisplay();  // 當頁面載入時呼叫函數
  },
  methods: {
    handleHeaderDisplay() {
      const token = localStorage.getItem('token'); // 從 localStorage 中抓取 token
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');

      if (token) {
        // 已登入
        if (loginRegisterSection) loginRegisterSection.style.display = 'none';
        if (personalSection) personalSection.style.display = 'block';
        console.log("已登入");
      } else {
        // 未登入
        if (loginRegisterSection) loginRegisterSection.style.display = 'block';
        if (personalSection) personalSection.style.display = 'none';
        console.log("未登入");
      }
    },
    logout() {
      localStorage.removeItem('token'); // 清除 token
      this.handleHeaderDisplay();  // 更新 header
      console.log("已登出");
    }
  }
};