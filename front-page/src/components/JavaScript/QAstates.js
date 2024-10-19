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
  },
  methods: {
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
