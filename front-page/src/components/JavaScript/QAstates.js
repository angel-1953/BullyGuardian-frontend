export default {
  props: ['id'], 
  data() {
    return {
      questions: []  // 用來儲存從 API 抓取的問題資料
    };
  },  
  mounted() {
    document.title = "校園凌制零-實力測驗";  // 設定頁面標題
    this.fetchQuestions(); // 取得問題資料
  },
  methods: {
    // 判斷是否有 token，並根據狀態動態切換 header
    handleHeaderDisplay() {
      const token = localStorage.getItem('token');  // 從 localStorage 取得 token
      const loginRegisterSection = document.querySelector('.login_register');
      const personalSection = document.querySelector('.personal');

      if (token) {
        // 已登入狀態
        this.isLoggedIn = true;
        if (loginRegisterSection) loginRegisterSection.style.display = 'none';
        if (personalSection) personalSection.style.display = 'block';
        console.log("已登入");
      } else {
        // 未登入狀態
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
      this.handleHeaderDisplay();  // 更新 header 狀態
      console.log("已登出");
      this.$router.push('/login');  // 登出後導向登入頁面
    },

    // 從 API 取得問題資料
    async fetchQuestions() {
      const token = localStorage.getItem('token');  // 取得 token
      const id = this.$route.params.id;  // 從 URL 參數中取得作答記錄 ID
      console.log(id);
    
      try {
        const payload = '9';  // 動態抓取 URL 中的 ID
        console.log("發送的作答記錄 ID:", payload);
    
        const response = await fetch('http://localhost:5280/api/front/GetOneRecord', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)  // 正確發送 payload 作為 JSON 物件
        });
    
        if (!response.ok) throw new Error('API 請求失敗');
    
        const data = await response.json();
        console.log("收到的資料:", data);
        
        if (data.Status === 200) {
          this.questions = data.Message;  // 將取得的問題資料存儲在 questions 陣列中
        } else {
          alert('資料獲取失敗');
        }
      } catch (error) {
        console.error('API 請求錯誤', error);
      }
    }
  }
};
