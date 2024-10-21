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
        console.log(data)
        this.tableData = data.Message; // 將獲取的數據賦值給 tableData
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    },
    handleTodoChange(account) {
      const token = localStorage.getItem('token');
      
      fetch(`http://localhost:5280/api/Back/UserTodoChage?Account=${account}`, {
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
        console.log('狀態變更成功:', data.Message); // 可以根據需求更新狀態或顯示提示
        alert(data.Message); // 彈出提示顯示操作結果
        this.fetchUserData(); // 操作成功後重新載入使用者數據
      })
      .catch(error => {
        console.error('Error changing To-Do state:', error);
      });
    },
  },
  
};