export default {
  name: "WritePage",
  data() {
    return {
      questions: [],  // 問題清單初始化為空
      answers: {},     // 保存每個問題的答案
      isLoggedIn: false, // Track login status
    };
  },
  mounted() {
    document.title = "校園凌制零-測驗";
    this.handleHeaderDisplay();  // 呼叫方法來處理 header 顯示
    this.fetchRecordDetails();  // 呼叫方法來取得問題
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
    // 取得問題清單
    methods: {
      async fetchRecordDetails(recordId) {
        const token = localStorage.getItem('token');
        try {
          const response = await fetch(`http://localhost:5280/api/front/GetOneRecord`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recordId })  // 傳送 recordId
          });
      
          if (!response.ok) {
            throw new Error('API request failed');
          }
      
          const data = await response.json();
          if (data.Status === 200) {
            // 處理正確的返回結果
            this.recordDetails = data.Message;
          } else {
            alert('無法取得作答紀錄');
          }
        } catch (error) {
          console.error('API request failed', error);
        }
      }
      
    }
    
  }
};
