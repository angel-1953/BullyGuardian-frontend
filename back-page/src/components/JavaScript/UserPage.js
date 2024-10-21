export default {
  name: 'UserPage',
  data() {
    return {
      userInfo: {}, // 初始化為空的使用者資料
    };
  },
  mounted() {
    const account = this.$route.params.account; // 從路由參數中獲取 account
    this.fetchUserInfo(account); // 調用方法根據 account 請求使用者詳細資料
  },
  methods: {
    fetchUserInfo(account) {
      const token = localStorage.getItem('token');

      fetch(`http://localhost:5280/api/Back/UserInfoDetail?Account=${account}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        this.userInfo = data.Message; // 將 API 返回的資料保存到 userInfo
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }
};