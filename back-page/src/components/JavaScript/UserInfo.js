export default {
  name: "UserInfo",
  mounted() {
    document.title = "使用者資訊";
    this.fetchUserData(); // 在載入時調用 API
  },
  data() {
    return {
      tableData: [], // 初始化為空數據
      filteredStatus: null,
      selectedStatus: null,
    };
  },
  computed: {
    filteredTableData() {
      if (!this.filteredStatus) {
        return this.tableData;  // 如果沒有選擇任何篩選狀態，返回全部資料
      }
      return this.tableData.filter((row) => row.State === this.filteredStatus);  // 使用 State 進行篩選
    },
  },
  methods: {
    filterByStatus(status) {
      this.filteredStatus = status;
      this.selectedStatus = status; // 同步更新 selectedStatus
    },
    fetchUserData() {
      const token = localStorage.getItem('token'); // 從 localStorage 中獲取 token

      fetch('http://localhost:5280/api/Back/UserInfo', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // 添加 Bearer token
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // 解析為 JSON
      })
      .then(data => {
        // 假設 API 返回的數據是類似這樣的結構
        // { "Status": 200, "Message": [{Account: "Student1", Name: "張三", School: "某中學", Class: "初一3班", State: "安全"}] }
        this.tableData = data.Message; // 將獲取的數據賦值給 tableData
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  },
};
