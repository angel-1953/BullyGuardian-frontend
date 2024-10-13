export default {
  name: "NewsPage",
  data() {
    return {
      isLoggedIn: false, // Track login status
      tableData: [
        { id: 1, name: '教育部防制校園霸凌專區', path: 'https://bully.moe.edu.tw/index' },
        { id: 2, name: '中小學資訊素養與認知網', path: 'https://myppt.cc/zNlnaA' },
        { id: 3, name: '教育部資訊及科技教育司', path: 'https://depart.moe.edu.tw/ED2700/Default.aspx' },
        { id: 4, name: '兒福聯盟', path: 'https://www.children.org.tw/' },
        { id: 5, name: 'iWIN網路內容防護機構', path: 'https://i.win.org.tw/propaganda.php?' },
        { id: 6, name: '兒童權利公約(CRC)資訊網', path: 'https://crc.sfaa.gov.tw/' },
      ]
    };
  },
  mounted() {
    document.title = "校園凌制零-資訊導航室";
    this.handleHeaderDisplay(); // Call handleHeaderDisplay when the page is loaded
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
    }
  }
};