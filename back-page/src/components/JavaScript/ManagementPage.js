export default {
  name: "ManagementPage",
  mounted() {
    document.title = "社群管理"; // 設定頁面標題

    // 元件載入時抓取 Facebook 連結列表
    this.fetchFBLinkList();
  },
  data() {
    return {
      tableData: [], // 存儲表格數據
      showModal: false,  // 控制彈窗顯示
      newEntry: {        // 存儲新增的條目數據
        name: '',
        path: ''
      }
    };
  },
  methods: {
    // 抓取 Facebook 連結列表
    fetchFBLinkList() {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('未登入，請先登入');
        return;
      }

      fetch('http://localhost:5280/api/Back/GetFBLinkList', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // 在請求中包含 token
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.Status === 200) {
          // 將抓取的數據映射到 tableData，並確保包含 LinkId
          this.tableData = data.Message.map(item => ({
            LinkId: item.LinkId,   // 確保 LinkId 被存儲
            ClubName: item.LinkName,
            ClubURL: item.FBLink
          }));
        } else {
          alert('無法取得社團列表：' + data.Message);
        }
      })
      .catch(error => {
        console.error('Error fetching FB link list:', error);
        alert('無法取得資料，請檢查伺服器或網路連線');
      });
    },

    // 開啟彈窗
    openModal() {
      this.showModal = true;  // 顯示彈窗
    },
    // 關閉彈窗
    closeModal() {
      this.showModal = false; // 隱藏彈窗
      this.newEntry = { name: '', path: '' }; // 重置表單
    },
    // 新增一個 Facebook 連結
    addNewEntry() {
      if (this.newEntry.name && this.newEntry.path) {  // 確保輸入框已填寫
        const postData = {
          LinkName: this.newEntry.name,
          FBLink: this.newEntry.path
        };

        const token = localStorage.getItem('token');
        if (!token) {
          alert('未登入，請先登入');
          return;
        }

        // 發送 POST 請求新增 Facebook 連結
        fetch('http://localhost:5280/api/Back/AddFBLink', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 使用 token 進行驗證
          },
          body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.Status === 200) {
            // 新增成功後將新條目添加到 tableData 中
            this.tableData.push({ LinkId: data.LinkId, ClubName: this.newEntry.name, ClubURL: this.newEntry.path });
            alert(data.Message);  // 成功提示
            this.closeModal();    // 新增後關閉彈窗
          } else {
            alert('新增失敗：' + data.Message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('請求失敗，請檢查伺服器或網路連線');
        });
      } else {
        alert("請填寫完整的社團名稱與Facebook連結");
      }
    },
    
    // 刪除表格中的某一條目
    deleteRow(index) {
      const deleteEntry = this.tableData[index]; // 取得要刪除的項目
      const token = localStorage.getItem('token');
      if (!token) {
        alert('未登入，請先登入');
        return;
      }

      // 使用 LinkId 來發送 DELETE 請求
      fetch(`http://localhost:5280/api/Back/DeleteFBLink?LinkId=${deleteEntry.LinkId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}` // 使用 token 進行身份驗證
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.Status === 200) {
          this.tableData.splice(index, 1); // 從 tableData 中移除被刪除的項目
          alert(data.Message);  // 成功訊息
        } else {
          alert('刪除失敗：' + data.Message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('請求失敗，請檢查伺服器或網路連線');
      });
    }
  }
};
