export default {
  name: "TestPage",
  data() {
    return {
      tableData: [] // Initialize as empty, will be populated with API data
    };
  },
  mounted() {
    document.title = "校園凌制零-實力測驗";
    this.fetchAnswerRecords(); // Fetch data when component mounts
  },
  methods: {
    async fetchAnswerRecords() {
        // 從 localStorage 中獲取 token
        const token = localStorage.getItem('token');

        // 如果沒有 token，則顯示錯誤提示
        if (!token) {
          alert('未檢測到登入狀態，請先登入。');
          this.$router.push('/login');  // 導向登入頁面
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