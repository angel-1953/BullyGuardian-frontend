export default {
  name: "TestPage",
  mounted() {
    document.title = "素養資料-題庫";
    this.getQuestions(); // 當頁面載入時呼叫 API 取得題庫資料
  },
  data() {
    return {
      data: [], // 初始資料為空，將會從 API 取得
    };
  },
  methods: {
    async getQuestions() {
      try {
        const token = localStorage.getItem('token'); // 從 localStorage 取得 token
        const response = await fetch('http://localhost:5280/api/Back/GetQuestionList', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // 將 token 傳遞至 Authorization 標頭
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.Status === 200) {
          this.data = result.Message; // 將 API 回應中的題庫資料存到 data 中
        } else {
          console.error('Error fetching questions:', result.Message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
