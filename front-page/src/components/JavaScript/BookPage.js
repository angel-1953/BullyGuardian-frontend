export default {
  name: "BookPage",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.fetchBookList();  // 當頁面掛載時，調用 fetchBookList 方法
  },
  methods: {
    async fetchBookList() {
      try {
        // 從 localStorage 中獲取 token
        const token = localStorage.getItem('token');

        // 如果沒有 token，則顯示錯誤提示
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
          this.tableData = result;  // 將獲取到的書籍數據賦值給 tableData
          this.tableData = result.Message; // 確認返回資料結構是否正確

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
