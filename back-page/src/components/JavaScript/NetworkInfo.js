export default {
  name: "NetworkInfo",
  mounted() {
    document.title = "網路資訊";
    this.fetchData(); // 網頁載入時請求 API
  },
  data() {
    return {
      data: [], // 從 API 接收到的資料將存儲在這裡
    };
  },
  methods: {
    fetchData() {
      const token = localStorage.getItem('token'); // 從 localStorage 取出 token
      fetch('http://localhost:5280/api/Back/GetExtLink', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // 加上身份驗證的 Bearer Token
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.Message) {
          this.data = data.Message; // 將 API 返回的資料存入 data
        } else {
          console.error('無法取得資料');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  }
};