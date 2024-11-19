export default {
  name: "TestPage",
  data() {
    return {
      tableData: [], // Initialize as empty, will be populated with API data
      isLoggedIn: false // Track login status
    };
  },
  mounted() {
    document.title = "校園凌制零-實力測驗";
    this.handleHeaderDisplay();  // Call handleHeaderDisplay when the page is loaded
    this.fetchAnswerRecords(); // Fetch data when component mounts
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
        if (personalSection) personalSection.style.display = 'flex';
        console.log("已登入");
      } else {
        // 未登入
        this.isLoggedIn = false;
        if (loginRegisterSection) loginRegisterSection.style.display = 'flex';
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
    // Fetch answer records from API
    async fetchAnswerRecords() {
      const token = localStorage.getItem('token');
      
      if (!token) {
        alert('未檢測到登入狀態，請先登入。');
        this.$router.push('/login');  // Redirect to login page
        return;
      }

      const apiUrl = 'http://localhost:5280/api/Front/AnsRecord';

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          this.tableData = data.Message; // Assuming 'Message' contains the answer records
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};