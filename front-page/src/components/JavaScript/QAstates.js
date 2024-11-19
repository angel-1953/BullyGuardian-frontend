export default {
  data() {
    return {
      questions: []  // 儲存從 API 抓取的問題資料
    };
  },
  mounted() {
    const id = this.$route.params.id; // 從路由參數中獲取 account
    console.log("收到的測驗 ID:", id);  // 確認是否正確抓到 id
    this.fetchQuestions(id);  // 當頁面掛載後抓取問題資料
    this.handleHeaderDisplay();
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
        async fetchQuestions(id) {
      const token = localStorage.getItem('token');  // 取得 token
      console.log("測驗 ID:", id);
    
      try {
        const payload = id;  // 動態抓取 URL 中的 ID
        console.log("發送的作答記錄 ID:", payload);

        const response = await fetch('http://localhost:5280/api/front/GetOneRecord', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)  // 發送 JSON 物件
        });

        if (!response.ok) throw new Error('API 請求失敗');

        const data = await response.json();
        console.log("收到的資料:", data);

        if (data.Status === 200) {
          this.questions = data.Message;  // 將問題資料存儲在 questions 陣列中
        } else {
          alert('資料獲取失敗');
        }
      } catch (error) {
        console.error('API 請求錯誤', error);
      }
    }
  }
};
