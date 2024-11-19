export default {
  name: "BookPage",
  data() {
    return {
      tableData: [],
      isLoggedIn: false, // Track login status
    };
  },
  mounted() {
    document.title = "校園凌制零-書籍";
    this.handleHeaderDisplay();
    this.fetchBookList();
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
      this.handleHeaderDisplay();  // 更新 header
      console.log("已登出");
      this.$router.push('/login'); // Redirect to login page after logout
    },
    // 從 API 獲取書籍列表
    async fetchBookList() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          alert('未檢測到登入狀態，請先登入。');
          this.$router.push('/login');  // 導向登入頁面
          return;
        }

        const response = await fetch('http://localhost:5280/api/Front/GetBookList', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // 將 token 加入到請求的 Authorization 標頭中
          }
        });

        if (response.ok) {
          const result = await response.json();
          this.tableData = result.Message || []; // 確保返回的資料結構正確
        } else {
          const errorResult = await response.json();
          alert(`獲取書籍列表失敗: ${errorResult.Message || response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching book list:', error);
        alert('獲取書籍列表時發生錯誤，請稍後再試。');
      }
    }
  }
};
